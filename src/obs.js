var Obs = function(id, parid) {
  var _in = scopes[id], _data = {},
      _id = id,
      _par = parid?document.getElementById(parid):document.body, 

  parse = function() {
    var t, i;
    //name:
    t = Read.data(_in.name);
    _data.name = Read.string(t[0]);
    _data.shortname = Read.string(t[0], true);
    //url:
    _data.url = [];
    t = Read.data(_in.url);
    for (i=0; i<t.length; i++) {
      _data.url[i] = Read.url(t[i]);
    };
    //icon
    t = Read.data(_in.icon);
    if (t && t.length > 0) {
      _data.icon = [{i:SOBS.SCOPES + t[0][0], n:_data.name}];
    };

    //desc;:
    t = Read.data(_in.desc);
    for (i=0; i<t.length; i++) {
      _data[t[i][0]] = readDesc(t[i]);
    };
    //stat
    _data.stat = _in.stat;

    _data.parts = [];
    for (i=0; i<_in.parts.length; i++) {
      _data.parts[i] = readPart(_in.parts[i]);
    };
    //events
    _data.ev = [];
    for (i=0; i<_in.ev.length; i++) {
      _data.ev[i] = readEvent(_in.ev[i]);
    };
    //instruments
    if (_in.inst) {
      _data.inst = [];
      for (i=0; i<_in.inst.length; i++) {
        _data.inst[i] = readInst(_in.inst[i]);
      };
    };
    //lo, hi
    _data.lo = null;
    _data.hi = null;
    if (_data.inst) {
      for (i=0; i<_data.inst.length; i++) {
        if (_data.inst[i].hasOwnProperty("tp") && _data.inst[i].tp.search(/par|em|psp|msp/) != -1) continue;
        if (_data.inst[i].hasOwnProperty("band") && _data.inst[i].band.hasOwnProperty("f0")) {
          if (_data.lo == null || _data.inst[i].band.f0 < _data.lo) _data.lo = _data.inst[i].band.f0;
          if (_data.hi == null || _data.inst[i].band.f1 > _data.hi) _data.hi = _data.inst[i].band.f1;
        };
      };
    };
  },
  readPart = function(o) {
    //parts: n:;, ctry, type;, pur;, id, url;, icon, desc;, stat
    var t, i, res = {};

    if (o.n && o.n != "") {
      res.name = [];
      t = Read.data(o.n);
      for (i=0; i<t.length; i++) {
        res.name.push(Read.string(t[i]));
      };
    };
    
    if (o.ctry && o.ctry != "") {
      res.ctry = readCtry(o.ctry);
    };
    
    if (o.type && o.type != "") {
      res.type = readType(o.type);
      res.tp = o.type.split(";")
    };
    
    if (o.pur && o.pur != "") {
      res.purpose = readPurpose(o.pur);
      res.pur = o.pur.split(";")
    };
    //id
    if (o.id && o.id != "") {
      res.id = readID(o.id);
    };    
    //url;
    if (o.url && o.url != "") {
      res.url = readURL(o.id);
    };
    //icon, 
    if (o.icon && o.icon != "") {
      res.icon = readIcon(o.icon, res);
    } else {
      res.icon = _data.icon;
    };
    //desc;, 
    t = Read.data(o.desc);
    for (i=0; i<t.length; i++) {
      res[t[i][0]] = readDesc(t[i]);
    };
    //fill in missing ag,lv,fam,m
    if (!res.hasOwnProperty("ag") && _data.hasOwnProperty("ag"))
      res.ag = _data.ag;
    if (!res.hasOwnProperty("lv") && _data.hasOwnProperty("lv"))
      res.lv = _data.lv;
    if (!res.hasOwnProperty("fam") && _data.hasOwnProperty("fam"))
      res.fam = _data.fam;
    if (!res.hasOwnProperty("m") && _data.hasOwnProperty("m"))
      res.m = _data.m;
    //stat
    res.stat = o.hasOwnProperty("stat") && o.stat != ""?o.stat:_data.stat;    
    
    return res;
  },
  readEvent = function(o) {
    //pt, dt, tp, loc:, desc;:
    var i, t, res = {};
    
    if (o.pt && o.pt != "") res.pt = o.pt;
    else res.pt = 0;
    
    if (o.dt && o.dt != "") {
      res.date = {n:Parse.date(o.dt)};
      res.dt =  Parse.dt(o.dt);
    } else res.date = "?";

    if (o.tp && o.tp != "") {
      res.tp = [Common.names.find(o.tp)];
    };

    if (o.loc && o.loc != "") {
      res.loc = readLoc(o.loc, res.tp);
    };

    if (o.desc && o.desc != "") {
      t = Read.data(o.desc);
      for (i=0; i<t.length; i++) {
        res[t[i][0]] = readDesc(t[i]);
      };
    };
    return res;
  },
  readInst = function(o) {
    var t, i, res = {};
    //n, tp:im|sp|acc|ctr|is|par|li, band, res, tres, sres, d, px, sens, fov, foc, ea, url
    if (o.n && o.n != "") {
      res.name = [];
      t = Read.data(o.n);
      for (i=0; i<t.length; i++) {
        res.name.push(Read.string(t[i], true));
      };
    };

    if (!o.pt || o.pt == "") res.pt = 0;
    else res.pt = o.pt;
    
    if (!o.tp || o.tp == "") t = "im";
    else t = o.tp;
    res.tp = t;
    res.type = Common.names.find(t);

    if (o.band && o.band != "") {
      //v0, [v1], s  in Hz, eV or m
      res.band = readBand(o.band);
     };
     //res spacial res in arcsec
     if (o.res && o.res != "") {
       res.res = readRes(o.res);
     };
     //d aperture in meter
     if (o.d && o.d != "") {
       res.d = parseFloat(o.d);
     };
     //px pixeldensity in px/arcsec
     if (o.px && o.px != "") {
       res.px = parseFloat(o.px);
     };
     
     //tres time res s
     if (o.tres && o.tres != "") {
       res.tres = parseFloat(o.tres);
     };
     //sres spectral res R
     if (o.sres && o.sres != "") {
       res.sres = parseFloat(o.sres);
     };
     //sens mJy
     if (o.sens && o.sens != "") {
       res.sens = parseFloat(o.sens);
     };
     //fov deg[x deg]
     if (o.fov && o.fov != "") {
       res.fov = parseFloat(o.fov);
     };
     //foc m
     if (o.foc && o.foc != "") {
       res.foc = parseFloat(o.foc);
     };
     //ea
     if (o.ea && o.ea != "") {
       res.ea = parseFloat(o.ea);
     };
     //url
    if (o.url && o.url != "") {
      res.url = readURL(o.id);
    };
    //desc
    if (o.desc && o.desc != "") {
      t = Read.data(o.desc);
      for (i=0; i<t.length; i++) {
        res[t[i][0]] = readDesc(t[i]);
      };
    };
    return res;
  },
  readDesc = function(s) {
    var res, t;
    if (!s || s.length < 2) return;
    //ag,lv,fam,m,c,col,eom,fail,mal,pend
    switch (s[0]) {
      case "eom":
      case "pend": res = Common.names.find(s[0]); break;
      case "mal":
      case "fail": t = Common.names.find(s[0]);
                 res = Common.names.find(s[1]);
                 res.n = t[0] + ": " + res.n; break;
      case "ag": res = Common.names.find(s[1]); break;
      case "lv": t = Common.names.findLV(s[1]);
                 if (t) res = {n:s[1], id:"lnk"+t};
                 else res = {n:s[1]};
                 break;
      case "fam": res = Common.names.find(s[1]); break;
      case "m":  res = {n:s[1].toCommaString().replace(/kg/g, Common.SPC + "kg")}; break;
      case "c":  
      case "cl":  
      case "x":  
      case "y":  
      case "sc": res = s[1]; break;
      default: return;
    };
    return res;
  },
  readCtry = function(s) {
    var t, i, res = [];

    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      if (Common.ctry.hasOwnProperty(t[i][0])) {
        res.push({n:Common.ctry[t[i][0]].name, k:t[i][0]});
      };
    };
    return res;
  },
  readType = function(s) {
    var t, i, res = [];

    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      res.push(Common.names.find(t[i][0]));
    };
    return res;
  },
  readPurpose = function(s) {
    var t, i, res = [];

    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      res.push(Common.names.find(t[i][0]));
    };
    return res;
  },
  readID = function(s) {
    var res = [];
    if (!s || s == "") return;
    res.push({n:s, u:SOBS.IDLNK + s, t:"_blank"});
    return res;
   },
  readURL = function(s) {
    var t, i, res = [];

    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      res.push(Read.url(t[i]));
    };
    return res;
  },
  readIcon = function(s, r) {
    var t, i, n, res = [];

    if (r.n && r.n.length > 0) n = r.n[0].n;
    else n = _data.name.n;
    
    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      res.push({i:SOBS.SCOPES + t[i][0], n:n});
    };
    return res;
  },
  //Event location {n,l}
  readLoc = function(s, tp) {
    var t, i, p, res = [];
    
    t = s.split(":");
    p = t[0];
    for (i=1; i<t.length; i++) {
      if (t[i].search(/^\d/) == -1) res.push(Common.names.find(t[i]));
      else if (t[i].search(/x/) != -1) res.push({n:Parse.orbit(t[i], p)});
      else res.push({n:Parse.distance(t[i], p)}); 
    };
    
    if (tp == "l") {
      s = t[1];
      if (SOBS.lc.search(s) == -1) SOBS.lc += s + ",";
    }
    
    return res; 
  },
  readBand = function(s) {
    //v0, v1, s
    var t, unit, res = {};

    if (!s && s == "") return;
    res.s = s;
    unit = s.match(/([a-zA-Z]+)$/);
    if (unit != null) { unit = unit[1]; } 
    else { unit = "Hz"; };

    t = s.split("..");    

    res.f0 = getValue(t[0], unit);
    if (t.length > 1) {
      res.f1 = getValue(t[1], unit);
    };
    
    if (res.f0 && res.f1 && res.f0 > res.f1) {
      t = res.f0;
      res.f0 = res.f1;
      res.f1 = t;
    };
     
    return res;
  },
  readRes = function(s) {
    var t, i, res={};
    if (!s || s == "") return;
    t = s.split("..");
    res.r0 = t[0];
    if (t.length > 1) res.r1 = t[1];
    else res.r1 = null;
    return res;
  },
  getValue = function(s, unit) {
    var u, v, p, res;
    if (!s || s == "") return;
    if (s.search(/[a-zA-Z]$/) == -1) v = s + unit;
    else v = s;
    u = v.match(/([afpnumckMGTPE]?)(eV|m|Hz)$/i);
    if (u == null) { return parseFloat(s); }
    else { 
      p = prefix(u[1]);
      v = parseFloat(s);
      switch (u[2].toLowerCase()) {
        case "hz": return v*p;
        case "ev": return e2f(v*p);
        case "m": return w2f(v*p);
      };
    };
  },
  inst_res = function() {
    var i, t, n, pt, ni, np, c, tp, pur, img, sc, res = [];
    if (!_data.inst || !_data.inst[0]) return null;
    for (i=0; i< _data.inst.length; i++) {
      t = _data.inst[i];
      
      if (t.tp == "im" || t.tp == "is") {
        //tp, pur, st, names:mission, part, instrument, f0, f1, [r0, r1,] || [px, d,] c
        n = _data.shortname.n;
        pt = (t.pt && t.pt != "")?t.pt:0;
        if (t.name && t.name.length > 0) ni = t.name[0].n;
        c = t.c?t.c:null;
        np = _data.parts[pt].hasOwnProperty("name")?_data.parts[pt].name[0].n:null;
        tp = _data.parts[pt].hasOwnProperty("tp")?_data.parts[pt].tp[0]:null;
        pur = _data.parts[pt].hasOwnProperty("pur")?_data.parts[pt].pur[0]:null;
        if (t.px && t.d)
          res.push({tp:tp, pur:pur, st:_data.parts[pt].stat, n:n, i:ni, p:np, f0:t.band.f0, f1:t.band.f1, px:t.px, d:t.d, c:c});
        else if (t.res) 
          res.push({tp:tp, pur:pur, st:_data.parts[pt].stat, n:n, i:ni, p:np, f0:t.band.f0, f1:t.band.f1, r0:t.res.r0, r1:t.res.r1, c:c});
        
      };
    };
    return res;
  },
  inst_line = function() {
    var i, t, pt, n, ni, np, c, tp, st, pur, img, sc, x, y, res = [];
    if (!_data.inst || !_data.inst[0]) return null;
    for (i=0; i< _data.inst.length; i++) {
      t = _data.inst[i];
      if (!t.band) continue;
      if (t.tp == "im" || t.tp == "is") {
        pt = (t.pt && t.pt != "")?t.pt:0;
        //tp, st, pur, names:mission, part, instrument, f0, f1, c, img, sc, fl, fh
        n = _data.shortname.n;
        if (t.name && t.name.length > 0) ni = t.name[0].n;
        else ni = "";
        if (t.pt) np = _data.parts[t.pt].name[0].n;
        else np = null;
        if (t.cl) c = t.cl;
        else c = t.c?t.c:null;
        x = _data.x ? parseInt(_data.x) : 0;
        y = _data.y ? parseInt(_data.y) : 0;
        tp = _data.parts[pt].hasOwnProperty("tp")?_data.parts[pt].tp[0]:null;
        pur = _data.parts[pt].hasOwnProperty("pur")?_data.parts[0].pur[0]:null;
        img = _data.parts[0].hasOwnProperty("icon") && _data.parts[0].icon != null?_data.parts[0].icon[0].i:null;
        sc = _data.hasOwnProperty("sc")?_data.sc:1;
        //st by part
        st = _data.parts[pt].stat;
        //else st =  _data.parts[0].stat;
        res.push({tp:tp, pur:pur, st:st, n:n, i:ni, p:np, img:img, sc:sc, f0:t.band.f0, f1:t.band.f1, fm:(_data.hi + _data.lo)/2, fl:_data.lo, fh:_data.hi, c:c, x:x, y:y});
      };
    };
    return res;
  };

  this.Instruments = function(type) {
    if (!type || type == "line") return inst_line();
    else return inst_res();
  };
  
  parse();
};