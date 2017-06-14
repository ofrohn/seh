/* global Common, Read, Round, objects */

/*parse functions parse formatted strings, return string or number
  unit  km|m|e|kg|au|i  -> proper unit
  distance  num[mi|km|m|au|i|e|]  -> num+unit
  orbit num[km|AU|]xnum[km|AU|]xnum[e]xnum[i]  -> dist x dist[ x dist]..
  elements  a, e, i   -> dist [x ecc] [x incl]
  radius num[km|au][/num]  rad/ellipt
  rad    dec. radius
  range
  thickness
  thick   dec. thickness
  rotation
  velocity
  position  num[NSEW],num[NSEW]  ->  num+deg+unit
  pos   dec. position
  coord num[NSEW],num[NSEW]  ->  +-num,+-num
  date  yyyy-mm-dd|L+num[d|m|y]  -> datestring
  dt  date-obj.
  comp
  atm
  mag
  mass  num+unit
  time
  sumTYpe, sumField  table row/col sum
*/
var Parse = {
  unit: function(s) {
    //return "";
    var res = "", ar = null;
    if (!s) return; 
    switch(s) {
      case "kN":
      case "km":
      case "m":
      case "e":
      case "kg": return Common.SPC + s;
      case "au": return Common.SPC + s.toUpperCase();
      case "deg": case "i": return "\u00b0";
    }
  },
  distance: function(s, p) {
    var res = "", ar = null;
    s = s.toString();
    ar = s.match(/([\-\d\.e\^]*\d)(mi|km|m|au|deg|i|e)?/);
    if (ar !== null) {
      switch (ar[2]) {
        case "m": res = ar[1].toCommaString() + Common.SPC + "m"; break; 
        case "km": res = ar[1].toCommaString() + Common.SPC + "km"; break; 
        case "mi": res = Math.round(ar[1]*1.609344).toCommaString() + Common.SPC + "km"; break; 
        case "au": res = ar[1] + Common.SPC + "AU"; break;
        case "deg": case "i": res = ar[1] + "\u00b0"; break; 
        case "e": res = ar[1] + ""; break; 
        case undefined: var r = Common.names.findRadius(p);
                  if (r) { res = Math.round((ar[1]-1)*r).toCommaString() + Common.SPC + "km"; }
                  else { res = ar[1].toCommaString(); }
                  break; 
        default: return "";
      }
    }
    return res;
  },
  orbit: function(s, p) {
    var i, res = "", u, t = null;
    t = s.split("x");
    if (t.length > 1 && t[0].search(/[a-z]/i) == -1 && t[1].search(/[a-z]/i) != -1) {
      u = t[1].match(/(km|au)/);
      if (u !== null) { t[0] += u[1]; }
    }
    for (i=0; i<t.length; i++) {
      if (res !== "") { res += Common.TSPC + "\u00d7" + Common.TSPC; }
      res += this.distance(t[i], p);
    }
    u = res.match(/(km|au)/ig);
    if (u !== null && u.length > 1) {
      res = res.replace(/^(\-?\d+)\s?km|\s?au/i, "$1");
    }
    return res;
  },
  elements: function(s, t) {
    var unit, r, a, e, q, Q, ar;
    if (!s.a) return; 
    if (t && t == "aei") {
      a = this.distance(s.a);
      if (s.e && s.e !== "") { a += Common.TSPC + "\u00d7" + Common.TSPC + s.e; }
      if (s.i && s.i !== "") { a += Common.TSPC + "\u00d7" + Common.TSPC + this.distance(s.i+"i"); }
      return a;
    } else {
      if (!s.e) return s.a; 
      ar = s.a.match(/([\d\.e]+)\s?(km|au)/);
      if (ar === null) return s.a; 
      unit = this.unit(ar[2]);
      r = (unit.search(/km/) != -1)?0:3;
      a = parseFloat(ar[1]);
      e = parseFloat(s.e);
      q = Round(a*(1-e), r);
      Q = Round(a*(1+e), r);
      return q.toCommaString() + Common.TSPC + "\u00d7" + Common.TSPC + Q.toCommaString() + unit + Common.TSPC + "\u00d7" + Common.TSPC + this.distance(s.i+"i");
    }
  },
  diameter: function(s) {
    var res = "", ar = null;
    if (!s && s === "") {  return; }
    if (s.search(/\//) != -1) {
      ar = s.split("/");
      return ar[0].toCommaString().replace(/(km)/, Common.SPC + "$1/") + ar[1];
    } else if (s.search(/x/) != -1) {
      return s.replace(/x/g, Common.TSPC + "\u00d7" + Common.TSPC).replace(/(km)/, Common.SPC + "$1");   
    } else return s.toCommaString().replace(/(km)/, Common.SPC + "$1"); 
  },
  rad: function(s) {
    var res = 0, i, ar = null;
    if (!s && s === "") return; 
    if (s.search(/x/) != -1) {
      ar = s.split("x");
      for (i=0;i<ar.length;i++) { res += parseFloat(ar[i]) / 2; }
      res /= ar.length;
    } else if (s.search(/\.\./) != -1) {
      ar = s.split("..");
      for (i=0;i<ar.length;i++) { res += parseFloat(ar[i]) / 2; }
      res /= ar.length;
    } else if (s.search(/\//) != -1) {
      ar = s.split("/");
      res = parseFloat(ar[0]) / 2; 
      res += res * parseFloat(ar[1]) / 4;
    } else { res = parseFloat(s) / 2; }
    return res;
  },
  range: function(s) {
    var res = "", ar = null;
    if (!s && s === "") return; 
    ar = s.split("..");
    res = parseFloat(ar[0]).toCommaString();
    if (ar.length > 1) {
      res += "\u2026" + parseFloat(ar[1]).toCommaString();
    }
    return res + "km";   
  },
  band: function(s) {
    var t, ar, unit, res = "";
    
    if (!s && s === "") return; 
    t = s.match(/([a-zA-Z]+)/);
    if (t !== null) {
      unit = t[1];
    } else { unit = "Hz"; }
    ar = s.split("..");
    res = parseFloat(ar[0]).toCommaString();
    if (ar.length > 1) {
      res += "\u2026" + parseFloat(ar[1]).toCommaString();
    }
    return res + "km";   
  },
  thickness: function(s) {
    var i, unit = "km", res = "", ar = null;
    if (!s || s === "") return; 
    ar = s.split("..");
    for (i=0; i<ar.length; i++) {
      if (i>0) { res += "\u2026"; }
      if (parseFloat(ar[i]) < 0.1) {
        res += Math.round(parseFloat(ar[i])*1000);
        unit = "m";
      } else if (ar[i].search(/[eE]/) != -1) {
        res += ar[i];
      } else {
        res += parseFloat(ar[i]).toCommaString();
      }
    }
    return res + Common.SPC + unit;   
  },
  thick: function(s) {
    if (!s || s === "") return 1e-3; 
    var i, res=0, ar = s.split("..");
    for (i=0;i<ar.length;i++) { res += parseFloat(ar[i]); }
    res /= ar.length;
    return res;
  },
  rotation: function(s) {
    var res;
    if (!s || s === "") return; 
    switch (s.toLowerCase()) {
      case "s": res = Common.names.find("sync").n; break;
      case "c": res = Common.names.find("chao").n; break;
      default: res = Parse.time(s);
    }
    return res;
  },
  velocity: function(s) {
    var res = "", ar = null;
    if (!s) return; 
    ar = s.match(/([\d\.]+)(kms)?/);
    if (ar !== null) {
      switch (ar[2]) {
       case "kms": res = ar[1] + Common.SPC + "km/s"; break; 
       case undefined: break; 
       default: return "";
      }
    }
    return res;
  },
  position: function(s) {
    var DEG = "\u00b0", ar = null;
    ar = s.match(/([\d\.]+)([NS])\,([\d\.]+)([EW])/i);
    if (ar !== null) return ar[1] + DEG + ar[2] + ", " + ar[3] + DEG + ar[4]; 
  
    ar = s.match(/([\d\.]+)([EW])\,([\d\.]+)([NS])/i);
    if (ar !== null) return ar[3] + DEG + ar[4] + ", " + ar[1] + DEG + ar[2]; 
    
    ar = s.match(/([\d\.]+)([NSEW])/);
    if (ar !== null) return ar[1] + DEG + ar[2]; 
  },
  pos: function(s) {
    var ar,n=null,e=null;
    if (!s) return; 
    ar = s.match(/([\d\.]+)([NS])\,([\d\.]+)([EW])/i);
    if (ar !== null) {
      n = parseFloat(ar[1]); 
      if (ar[2] == "S") { n = -n; }
      e = parseFloat(ar[3]); 
      if (ar[4] == "W") { e = -e; }
    } else {
      ar = s.match(/([\d\.]+)([EW])\,([\d\.]+)([NS])/i);
      if (ar !== null) {
        n = parseFloat(ar[3]); 
        if (ar[4] == "S") { n = -n; }
        e = parseFloat(ar[1]); 
        if (ar[2] == "W") { e = -e; }
      }
    }
    if (n !== null && e !== null) {
      if (e>180) { e -= 360; }
      if (e<-180) { e += 360; }
      return n + "," + e;
    }
  },
  date: function(s, dt) {
    var unit, val, res = "", t = null;
    if (!s) return; 
    if (s.search(/^l/) == -1) {
      t = s.split("..");
      for (var i=0; i<t.length; i++) {
        if (i>0) { res += "\u2026"; }
        res += t[i];
      }
    } else {
      t = s.match(/^l\+([\d\.\?]+)(\w+)?/);
      if (t !== null) {
        if (!dt) {
          switch (t[2]) {
            case "hr": unit = "hr"; break;
            case "dy": unit = "dy"; break;
            case "mo": unit = "mon"; break;
            case "yr": unit = "yr"; break;
            default: unit = "";  
          }
          res = "L+" + t[1] + Common.SPC + unit;
        } else {
          if (t[1].search(/\?/) != -1) { res = "?"; }
          else {
            val = dt.add(t[1], t[2]);
            res = val.toISOString().slice(0,7);
          }
        }
      }
    }
    return res;
  },
  dt: function(s, d0) {
    var t;
    if (!s) return; 
    if (d0 && s.search(/^l/i) !== -1) {
      t = s.split(/[\+\u202f]/);
       return d0.add(t[1], t[2]);
    }
    t = s.split(".");
    if (t.length < 1) return; 
    t = t[0].split("-");
    t[0] = t[0].replace(/\D/g, "");
    if (!t[0]) return; 
    t[1] = t[1]?t[1].replace(/\D/g, ""):"1";
    t[2] = t[2]?t[2].replace(/\D/g, ""):"1";
    
    return new Date(t[0], t[1]-1, t[2]);
  },
  comp: function(s) {
    var i, pre, ar, par, res = "";
    if (!s || s === "") return; 
    ar = s.split("+");
    for (i=0; i<ar.length; i++) {
      par = ar[i].split(":");
      if (par[0] == "poro") { 
        par[0] = "Porosity"; pre = ";" + Common.SPC; 
      } else if (par[0] == "dust") { 
        par[0] = "Dust"; pre = ";" + Common.SPC; 
      } else if (par[0] == "core") { 
        par[0] = "Core"; pre = ";" + Common.SPC; 
      } else {  pre = Common.SPC + "+" + Common.SPC;  }
      if (i>0) { res += pre; }
      res += (par.length > 1)?par[0] + ":" + Common.SPC + par[1] + "%":par[0];
    }
    return res;
  },
  atm: function(s) {
    var ar, res = "";
    if (s.atm && s.atm !== "") { res = this.comp(s.atm); }
    if (s.atp) {
      if (s.atp.search(/trace/) == -1)  {
        res += " (" + s.atp + Common.SPC + "bar)";
      } else {
        res += " (" + s.atp + ")";
      }
    }
    return res;
  },
  mag: function(s) {
    var res = "";
    if (s.dip && s.dip !== "") {
      res = s.dip + Common.SPC + "Gauss";
    }
    if (s.dipt) {
       res += "; Tilt:" + s.dipt + this.unit("i");
    }
    return res;
  },
  mass: function(s, p) {
    var t, ar, res, unit;
    if (!s) return; 
    res = s;
    unit = s.replace(/[\d\.\-e~<,]/g, "");
    if (unit.length < 1 && p) {
      res = (parseFloat(s) * p).toScience();
    } else if (s.search(/^\D/) !== -1) {
      res = s.replace(unit, "");
    } else {
      res = parseFloat(s).toScience();
    }
    if (s.search(/\.\./) != -1) {
       ar = s.split("..");
       res += "\u2026" + parseFloat(ar[1]).toScience();
    }
    if (unit === "") { unit = "kg"; }
    return res + Common.SPC + unit;
  },
  time: function(s) {
    if (!s) return; 
    var res = "", unit, t = null;
    t = s.match(/^([-~e\d\.\?]+)(\w+)?/);
    if (t !== null) {
      switch (t[2]) {
        case "s": unit = "s"; break;
        case "mn": case "n": unit = "min"; break;
        case "hr": case "h": unit = "h"; break;
        case "dy": case "d": unit = "d"; break;
        case "mo": case "m": unit = "mon"; break;
        case "yr": case "y": case "a": unit = "a"; break;
        default: unit = t[2];  
      }
      res = t[1] + Common.SPC + unit;
    }
    return res;
  },
  sumType: function(row) {
    var fld, sum = 0;
    for (fld in row) {
      if (row.hasOwnProperty(fld)) { sum += row[fld]; }
    }
    return sum;
  },
  sumField: function(obj, fld) {
    var tp, sum = 0;
    for (tp in obj) {
      if (obj.hasOwnProperty(tp)) { sum += obj[tp][fld]; }
    }
    return sum;
  }
};

var parseObject = function(dest) {
//Preformatted fields and numeric data (dist, incl, radius, [height, opacity]
  var key, _type, _dest, _parent = {}, _data = {},
  
  //description params
  parseDesc = function() {
    var ar, par, i;
    ar = _data.desc.split(";");
    
    for (i=0; i<ar.length; i++) {
      par = ar[i].split(":");
      
      switch (par[0]) {
        case "url":  if (par.length > 1) { _data.hp =  "http://" + par[1]; } break; 
        case "sc": _data.scale = parseFloat(par[1]); break;
        case "scmoons": _data.scmoons = parseFloat(par[1]); break;
        case "orb": _data.orb = par[1]; break;   
        case "moon": _data.moons = par[1]; break;
        case "opa": _data.opa = parseFloat(par[1]); break;
        case "rsize": _data.rsize = par[1].split(","); break;   
        case "x": _data.x = parseInt(par[1]); break;   
        case "y": _data.y = parseInt(par[1]); break;   
      }
    }
    if (!_data.scale) { _data.scale = 1; }
 
    if (!_data.moons) { 
      _data.moons = ""; 
    } else {
      ar = _data.moons.split(",");
      for (i=0; i<ar.length; i++) {
        ar[i] = Common.names.find(ar[i]).n;
      }
      _data.moons = ar.join(", ");
    }
    
  },

  parsePeri = function() {
    var ar;
    //next perihelion
    if (_data.peri && _data.peri !== "") {
      ar = _data.peri.split(":");
      _data.peri = ar[1];
      _data.peri += " (" + Parse.distance(ar[0]) + ")";
    }
  },

  parseGroup = function() {  
    var i, ar;
    if (_data.gr && _data.gr !== "") {
      ar = _data.gr.split(/[\;\:]/);
      for (i=0; i<ar.length; i++) {
        ar[i] = Common.names.find(ar[i]).n;
      }
      _data.group = ar.join(", ");
    }
  },
    
  parseCensus = function() {  
    var i, ar, t;
    if (_data.cen && _data.cen !== "") {
      ar = _data.cen.split(/\;/);
      for (i=0; i<ar.length; i++) {
        t = ar[i].split(/\:/);
        ar[i] = t[0] + ": "+ t[1];
      }
      _data.census = ar.join(", ");
    }
  },
    
  parseUrl = function() {  
    var i, ar, t, res = [];
    if (_data.url && _data.url !== "") {
      ar = _data.url.split(/\;/);
      for (i=0; i<ar.length; i++) {
        t = ar[i].split(/\:/);
        res.push(Read.url(t));
      }
      _data.url = res;
    }
  };

  _dest = dest;
  _data.acr = dest;
  
  for (key in objects[_dest]) {
    if (objects[_dest].hasOwnProperty(key)) {
      _data[key] = objects[_dest][key];
    }
  }

  _type = _data.type;
  _parent.mass = Common.names.findMass(_data.par);

  
  if (_data.img && _data.img !== "") { 
    _data.img = Common.symbols[_dest]; 
  } else { _data.img = null; }

  //if (_data.map && _data.map != "") { _data.map = Common.symbols[_dest+"map"]; };

  if (_type == "m" && _data.desig && _data.desig !== "") {
    _data.fname = _data.desig + " " + _data.name;
  } else if (_type == "r")  {  //Ring name
    if (_data.name && _data.name.search(/Division|Arc|Gap/) == -1) {
      _data.name += " Ring";
    }
    if (_data.other && _data.other !== "") {
      _data.fname = _data.name + " (" + _data.other + ")";
    } else { _data.fname = _data.name; }
  } else if (_type == "c") {
    if (_data.desig && _data.desig !== "") {
      _data.fname = _data.desig + "/" + _data.name;
    } else { _data.fname = _data.name; }
  } else if (_type == "a" || _type == "d" || _type == "t") {
    if (_data.desig && _data.desig !== "") {
      _data.fname = "(" + _data.desig + ") " + _data.name;
    } else { _data.fname = _data.name; }
  } else {
    _data.fname = _data.name;
  }
   
  //Diameter text & numeric radius
  if (_data.dia && _data.dia !== "") {
    _data.diam = Parse.diameter(_data.dia);
    _data.eqrad = parseFloat(_data.dia) / 2;
    _data.rad = Parse.rad(_data.dia);
  } else { _data.diam = "-"; }
  
  //Ring data
  if (_type == "r") {
    _data.w = _data.diam ? _data.diam : "-";
    if (!_data.rad) { _data.rad = 1; }
    //thickness
    if (_data.thick && _data.thick !== "") {
      _data.h = Parse.thickness(_data.thick); 
      _data.th = Parse.thick(_data.thick);
    }
    if (!_data.th) { _data.th = 1e-3; }
    if (!_data.h) { _data.h = "-"; }
    //inner edge
    if (_data.rad) { _data.peri = Math.round(parseFloat(_data.a) - _data.rad); }
    else { _data.peri = parseFloat(_data.a); }
    _data.dist = Parse.distance(_data.peri + "km");
    //Arc length
    if (_data.len && _data.len !== "") { _data.len = Parse.distance(_data.len + "i"); }
    //Opt. depth
    if (_data.opt && _data.opt !== "") { _data.opt = _data.opt.replace("..", "\u2026"); }
  }
  
  //SBO data
  if  (_type.search(/^(d|a|c|t)$/) != -1) {
    parseGroup();
    parsePeri(); 
  }
  if  (_type.search(/^(b)$/) != -1) {
    parseCensus();
  }
  
  //Moon & Rings
  if (_type == "p" || _type == "d") {
    _data.nmoons = 0;
    _data.nrings = 0;
    for (key in objects) {
      if (objects[key].par == _dest) {
        if (objects[key].type == "m") { _data.nmoons++; }
        if (objects[key].type == "r") { _data.nrings++; }
      }
    }
  } 
  
  //orbit
  _data.orbit = Parse.elements(_data, "aei");
  if (_data.tilt) { _data.tilt += Parse.unit("i"); }
  _data.per = Parse.time(_data.per);
  _data.rot = Parse.rotation(_data.rot); 
  
  if (_data.dens && _data.dens !== "") { _data.dens += Common.SPC + "g/cm^3"; }
  if (_data.grav && _data.grav !== "") { _data.grav += Common.SPC + "g"; }
  if (_data.irad && _data.irad !== "") { _data.irad += Common.SPC + "W/m^3"; }
  //Surface density
  if (_data.sdens && _data.sdens !== "") { _data.sdens += Common.SPC + "g/cm^2"; }
  if (_data.temp && _data.temp !== "") { _data.temp = _data.temp.replace(/K/g, Common.SPC + "K"); }

  _data.comp = Parse.comp(_data.comp);  //Body composition
  //Spectral type
  if (_data.spec && _data.spec !== "") { _data.comp += " (" + _data.spec + "-Type)"; }

  _data.atm = Parse.atm(_data);         //Atmosphere composition
  _data.mag = Parse.mag(_data);         //Magnetic filed
  _data.mass = Parse.mass(_data.mass, _parent.mass);  //Body mass

  if (_data.disc && _data.disc !== "" && _data.dyr !== "") {
    _data.disc = _data.disc + ", " + _data.dyr;
  }
 
  parseUrl(); 
  parseDesc(); 
  
  return _data;
};
/*
var parseMission = function(id) {
  //Formatted and numeric (dt, col) data
  var i, _id, _in, _data, _dtl,

  //Event date {n}  
  readDate = function(n) {
    var res = [], dtl = _timeline[0].d;
    if (_in.events.length < n+1 || !_in.events[n].dt) return;
    if (_in.events[0].dt.length <= 4) {
      res.push({n:Parse.date(_in.events[n].dt)});
    } else {
      res.push({n:Parse.date(_in.events[n].dt, dtl)});
    };
    if (_in.events[n].dt.search(/\.\./) != -1) res[0].w = true;
    return res;
  },

  //Event type {n,l} 
  readType = function(n) {
    vars, t, res = [];
    if (_in.events.length < n+1 || !_in.events[n].type) return;
    s = _in.events[n].type;
    if (s == "ev") return;

    t = _in.events[n].loc.split(":");
    if (s.search(/\boi|fb|f|app|ae|imp|edl|td|enc\b/) != -1) {
      if (t[0] != "sol") res.push(Common.names.find(t[0]));
      //else if (t[0].length > 2) res.push(Common.names.find(t[1]));
    };
    res.push(Common.names.find(s));
    
    return res;      
  },
  
  //Event location {n,l}
  readLoc = function(n) {
    var t, i, res = [], p;
    if (_in.events.length < n+1 || !_in.events[n].loc) return res;
    t = _in.events[n].loc.split(":");

    p = t[0];
    for (i=1; i<t.length; i++) {
      if (t[i].search(/^\d/) == -1) res.push(Common.names.find(t[i]));
      else if (t[i].search(/[NSEW]/) != -1) res.push({n:Parse.position(t[i])});
      else if (t[i].search(/x/) != -1) res.push({n:Parse.orbit(t[i], p)});
      else res.push({n:Parse.distance(t[i], p)}); 
    };
    return res;
    
  },
  
  //Event description {n,l,d,v}  
  readDesc = function(n) {
    var i, j, res = [], t = null, u;
    if (_in.events.length < n+1 || !_in.events[n].desc) return;
    t = readData(_in.events[n].desc);
    for (i=0; i<t.length; i++) {
      if (t[i].length == 1) {
        if (t[i][0].search(/\//) != -1) {
          u  = t[i][0].split("/");
          for (j=0; j<u.length; j++) {
            res.push(Common.names.find(u[j]));
            res[res.length-1].v = "/";
          };
        } else {
          if (n == _in.events.length-1 && (t[i] == "eom" || t[i] == "?")) continue;
          res.push(Common.names.find(t[i]));
        };
      } else {
        if ("show,eom".search(t[i][0]) != -1) continue; 
        if ("com,ast,dp,op".search(t[i][0]) == -1) res.push(Common.names.find(t[i][0]));
        else res.push(Common.names.find(t[i][1]));
        switch (t[i][0]) {
          case "com": case "ast": case "show": break;
          case "dist": 
          case "rv": 
          case "trv": 
          case "alt": 
          case "ae": 
          case "fb": res[res.length-1].d = Parse.distance(t[i][1]); break;
          case "v": res[res.length-1].d = Parse.velocity(t[i][1]); break;
          case "imp": 
          case "nad": res[res.length-1].d = Parse.position(t[i][1]); break;
          case "eom": if (t[i].length != 2) break;   
          case "ip": 
          case "ssp": 
          case "lp": 
          //case "dp": 
          case "mal": 
          case "fail": res.push(Common.names.find(t[i][1])); res[res.length-1].v = ": "; break;
          case "end":
          case "los": res[res.length-1].d = Parse.date(t[i][1]); break;
          case "tm": 
          case "per": res[res.length-1].d = Parse.time(t[i][1]); break;
          case "mat": res[res.length-1].d = Parse.mass(t[i][1]); break;
          case "enc": res[res.length-1].d = Parse.date(t[i][1]); break;
          default: if (t[i][0].length > 3) res[res.length-1].l = t[i][1];  
        };
      };
    };
    return res;
    
  };

  if (!id || !mission.hasOwnProperty(id)) return;

  _id = id;
  _in = mission[_id];
  _data = {};

  //Name, Shortname, other Names

  //Timeline
  _data.ev = [];

  for (i=0; i<_in.events.length; i++) {
    _data.ev[i] = {};
    _data.ev[i].type = readType(i);
    _data.ev[i].date = readDate(i);
    _data.ev[i].loc = readLoc(i);
    _data.ev[i].desc = readDesc(i);
  }
};*/
