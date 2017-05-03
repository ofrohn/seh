/* global Common, UI, SSEH, Create, Read, Parse, parseElements, missions, elem, isNumber, px */

function Mission(id, parid) { 
  var _in = missions[id], 
      _id = id,
      _parent = null, _step,
  /*_data:
    parameters: n:name/abbrev, l:long name, c:css-color, i:image-src, u:link-url, t:target,
    d:description, v:divider, w:wide col
    
    title:[{n,l}], shortname:[{n,l}], names:[{n,l},..], dest:"",
    goal:[{n,c},..], ctry:[{n,i},..], ag:[{n,l,u,i},..], stat:[{n,l,c}],
    id:[{n,u},..], url:[{n,l,u},..], icon:[{n,i},..],
    fam:[{n,l}], mass:[{n}], lv:[{n}], spec:[{n}],
    ev:[{date:[{n}], type:[{n,l},.], loc:[{n,l},.], desc:[{n,l,d,v},..]}]
 */
  _data = {}, 
  _timeline, _box, _overlay = {}, _height = 0,
  
  createBox = function() {
    var i, j, t, box, lcol, mcol, rcol, ecol, colwidth, col = [], widecol, timg, 
        iheight = 19, lines = 1, ll = 0, frag;
    
    frag = document.createDocumentFragment();
    box = Create.div(frag, "infoBox", _id+"info", {w:SSEH.BOXWIDTH});

    Create.closex(box);

    lcol = Create.div(box, "col", null, {w:230});
    mcol = Create.div(box, "col", null, {w:230});
    rcol = Create.div(box, "rcol", null, {w:120});
        
    //Left column
    //Main Name of Mission
    Create.span(lcol, _data.title[0], "missionTitle");

    //Other Names
    if (_data.names) {
      Create.br(lcol);
      lines++;
      for (i=0; i<_data.names.length; i++) {
        if (i>0) { Create.text(lcol, ", "); }
        if (i==2) {
          Create.br(lcol);
          lines++;
        }
        Create.span(lcol, _data.names[i]);
      }
    }
    //Spacecraft program/type
    if (_data.fam) {
      lines++;
      Create.field(lcol, _data.fam, "fam");
    }
    //Cospar-ID
    if (_data.id) {
      Create.br(lcol);
      lines++;
      Create.span(lcol, Common.names.find("tid"), "category");
      for (i=0; i< _data.id.length; i++) {
        if (i>0) { Create.text(lcol, " "); }
        Create.a(lcol, _data.id[i], ""); 
      }
    }
    if (_data.dim) {
      Create.field(lcol, _data.dim[0], "dim");
      ll++;
    }

    //Links
    if (_data.url) {
      Create.br(lcol);
      lines++;
      Create.span(lcol, Common.names.find("turl"), "category");
      for (i=0; i< _data.url.length; i++) {
        if (i>0) { Create.text(lcol, ", "); }
        if (_data.url[i].k) {
          Create.asymbol(lcol, _data.url[i], "symLnk");        
        } else {
          Create.aimg(lcol, _data.url[i]);
        }
      }
    }

    //Center column    
    //Country flags
    for (i=0; i< _data.ctry.length; i++) {
      Create.asymbol(mcol, _data.ctry[i], "missionFlag");
    }
    //Involved Agencies
    if (_data.ag) {
      for (i=_data.ag.length-1; i>=0 ; i--) {
        Create.asymbol(mcol, _data.ag[i], "missionAgency");
      }
    }
   
    ll++;

    //Mission Goals; Destination + Type
    for (i=0; i< _data.goal.length; i++) { 
      Create.br(mcol);
      Create.span(mcol, _data.goal[i], "missionType");
      ll++;
    }
    //Special achievements
    if (_data.spec) {
      for (i=0; i< _data.spec.length; i++) {
        Create.br(mcol);
        Create.span(mcol, _data.spec[i]);
        ll++;
      }
    }
    //Launch mass
    if (_data.m) {
      Create.field(mcol, _data.m, "lmass", null, "/");
      ll++;
    }
    if (_data.m0) {
      Create.field(mcol, _data.m0, "dmass", null, "/");
      ll++;
    }
    //Launch vehicle
    if (_data.lv) {
      t = Create.field(mcol, _data.lv[0], "lv");
      if (_data.lv[0].id) {
        t.id = _data.lv[0].id;
        t.className = "missionLnk";
        t.onclick = SSEH.showLV;
      }
      ll++;
    }

    lines = Math.max(lines,ll);

    //Right column
    //Mision status: success, failure, part. success, ongoing, planned
    Create.span(rcol, _data.stat[0], "missionStatus status" + _data.stat[0].n);
    //box.style.borderColor = _data.stat[0].c;

    //Spacecraft icons
    for (i=0; i< _data.icon.length; i++) {
      timg = Create.img(rcol, _data.icon[i], "");
      if (isNumber(timg.height) && timg.height > 0) { iheight += timg.height; }
      else { iheight += 120; }
      j = _data.sc[_data.icon[i].p];
      if (i > 0 && j < 1) {
        timg.style.width = px(120*j);
        timg.style.marginRight = px(60 * (1-j));
        timg.style.height = "auto";
      }
      Create.br(rcol);
    }
    
    ecol = Create.div(box, "tblHead col", null, {w:456});

    colwidth = [86,120,250];
    for (i=0; i<3; i++) {
     col[i] = Create.div(ecol, "col", null, {w:colwidth[i]});
    }
    Create.span(col[0], Common.names.find("thdate"));     
    Create.span(col[1], Common.names.find("thevent"));     
    Create.span(col[2], Common.names.find("thdetail"));
    lines++;
    
    //Events
    for (i=0; i< _data.ev.length; i++) {
      widecol = false;
      ecol = Create.div(box, "tblRow col ", null, {w:456});
      //if (_data.ev[i].loc)
      if (iheight && iheight>0 && lines*19 > iheight) {
        ecol.style.width = px(576);
        colwidth[2] = 370;
      }
      if (i%2 !== 0) { ecol.style.background = "rgba(241,241,214,0.6)"; }
      lines++;
      for (j=0; j<3; j++) {
        col[j] = Create.div(ecol, "col", null, {w:colwidth[j]});
      }
      //Event date
      if (_data.ev[i].date) {
        if (i>0 && _data.ev[i-1].date && _data.ev[i].date[0].n.length > 6 && _data.ev[i].date[0].n == _data.ev[i-1].date[0].n) {
          Create.span(col[0], {n:"\u00a0="}, "eventRpDate");
        } else {
          Create.span(col[0], _data.ev[i].date[0], "eventDate");
        }
        if (_data.ev[i].date[0].w) {
          widecol = true;
          col[0].style.width = px(colwidth[0]+colwidth[1]);
          col[1].style.width = 0;
          col[2].style.width = px(colwidth[2]);
        }
      } else {
        Create.span(col[0], {n:"\u00a0-"}, "eventRpDate");
      }
      //Event type
      if (_data.ev[i].type) {
        if (_data.ev[i].type.length === 0 && widecol === false) {
          Create.br(col[1]);
        } else {
          var colno = widecol?2:1;
          for (j=0; j< _data.ev[i].type.length; j++) {
            Create.text(col[colno], " ");
            Create.span(col[colno], _data.ev[i].type[j], "eventLoc");
          }
        }
      }
      //Event location
      for (j=0; j< _data.ev[i].loc.length; j++) {
        if ((col[2].children.length > 0 && widecol === false) || j > 0) {
          Create.text(col[2], ": ");
        }
        t = Create.span(col[2], _data.ev[i].loc[j]);
        //if (!_data.ev[i].loc[j]) Window.alert(_id);
        if (_data.ev[i].loc[j].hasOwnProperty("id")) {
          t.id = _data.ev[i].loc[j].id;
          t.className = "missionLnk";
          t.onclick = SSEH.showLC;
        }        
      }
      //Further details   
      if (_data.ev[i].desc) {
        for (j=0; j< _data.ev[i].desc.length; j++) {
          if (col[2].children.length > 0 || j > 0) {
            if (_data.ev[i].desc[j].v) {
              Create.text(col[2], _data.ev[i].desc[j].v); 
            } else {
              Create.text(col[2], "; "); 
            }
          }
          Create.span(col[2], _data.ev[i].desc[j]);
          if (_data.ev[i].desc[j].d) {
            Create.text(col[2], ": " + _data.ev[i].desc[j].d);
          }
        }
      }
      Create.br(col[2]);
    }

    _parent.appendChild(frag);
    return box;
  },
  // read Functions  
  //Mission name   {n,l}
  readName = function(shortname) {
    var t, res = [];
    t = Read.data(_in.name);
    if (!t) return; 
    res.push(Read.string(t[0], shortname));
    if (shortname) { res[0].u = "-"; }
    return res;
  },
  //Launch vehicle {n, lv id}  
  readLv = function(s) {
    var id = null, res = [];
    //ar = _in.desc.match(/lv\:([^\b;]+)/);
    //if (ar == null) return;
    //name = ar[1].split(/\//);
    if (!s || s === "") return; 
    id = Common.names.findLV(s);
    if (id) { 
      res.push({n:s, id:"lnk"+id});
    } else {
      res.push({n:s});
    }
    return res;
  },
  //Alternative names, components {n,l}
  readNames = function() {
    var i, t, res = [];

    t = combineData("names");
    if (!t) return; 
    
    for (i=0;i<t.length;i++) {
      if (t[i][0].slice(0,1) != "{") {
        res.push(Read.string(t[i], true));
      }
    }
    return res;
  },
  //Statistics by country
  readctryStats = function() {
    var stat, lyr, ctry;

    stat = _in.hasOwnProperty("stat")?_in.stat:_in.parts[0].stat;
    stat = checkStat(stat);  //lf?
   
    lyr = _timeline[0].d;
    
    ctry = combineData("ctry", true);
    ctry = ctry.join();
    return {s:stat, c:ctry, l:lyr};
  },
  //Mission Statistics by destination
  readStats = function() {
    var i, j, t, d, st, n, sd1, sd2, ss, res = [];
    
    for (i=0; i<_in.parts.length; i++) {
      st = _in.parts[i].type;
      d = _in.parts[i].dest;
      if (!st || st === "" || !d) continue;
      d = d.split(":");
      sd1 = d[0];
      sd2 = (d.length > 1) ? d[1] : "";
      ss = _in.parts[i].stat || _in.stat;
      ss = checkStat(ss);
      if (!findStat(res, st, sd1, sd2)) {
        res.push({t:st, d1:sd1, d2:sd2, s:ss});
      }
    }
    return res;
  },
  findStat = function(s, t, d1, d2) {
    var i;
    if (!s) return false; 
    for (i=0; i<s.length; i++) {
      if (s[i].t == t && s[i].d1 == d1 && s[i].d2 == d2) return true; 
    }
    return false;
  },
  //Launch failure?
  checkStat = function(stat) {
    var i;
    if (stat != "f") return stat; 
    for (i=0; i<=1; i++) {
      if (i > _in.events.length-1) break; 
      if (_in.events[i].type.search(/^l|toi|oi$/) != -1 && _in.events[i].desc.search(/fail/) != -1) {
        return "lf";
      }
    }
    return stat;
  },
  //Mission destination & purpose {n,c}
  readGoal = function() {
    var i, st, sd, sl, col, res = [],
    stats = _data.stats;

    for (i=0; i<stats.length; i++) {
      st = Common.names.find(stats[i].t);
      if (stats[i].d2) {
        sd = Common.names.find(stats[i].d2);
      } else {
        sd = Common.names.find(stats[i].d1);
      }
      sl = (sd.l)?sd.l + " " + st.n:"";
      col = Common.names.findColor(stats[i].t);
      if (stats[i].t == "hm") {
        res.push({n:st.n, c:col});        
      } else {
        res.push({n:sd.n + " " + st.n, l:sl, c:col});        
      }
    }
    return res;
  },
  //Mission destinations
  readDest = function() {
    var res = "";
    for (var i=0; i<_in.parts.length; i++) {
      res += _in.parts[i].dest + ",";
    }
    return res;
  },
  //Mission status {n,l,c}
  readStatus = function() {
    var t, res = [];

    if (_in.stat) {
      t = Read.data(_in.stat);
    } else {
      t = Read.data(_in.parts[0].stat);
    }
    if (!t) return; 
    res.push(Common.names.find(t[0]));
    res[res.length-1].c = Common.names.findColor(t[0][0]);
    return res;
  }, 
  //Country & flag {n,i}
  readctry = function() {
    var i, t, n, res = [];

    t = combineData("ctry", true);
    if (!t) return; 
    
    for (i=0; i<t.length; i++) {
      n = t[i][0];
      if (Common.ctry.hasOwnProperty(n)) {
        res.push({n:Common.ctry[n].name, k:n});
      }
    }
    return res;
  },
  //Cospar-ID {n,u}
  readId = function() {
    var i, t, s, res = [];
    
    t = combineData("id");
    if (!t || t.length < 1) return; 

    if (t[0][0].search(/x$/) != -1) return [{n:t[0][0]}]; 
    
    for (i=0; i<t.length; i++) {
      s = (t[i].length > 1)?t[i][1]:t[i][0];
      if (i > 0 && s.slice(0,-2) == t[0][0].slice(0,-2)) {
        res.push({n:s.slice(-1), u:SSEH.IDLNK + t[i][0], t:"_blank"});
      } else {
        res.push({n:s, u:SSEH.IDLNK + t[i][0], t:"_blank"});
      }
    }
    return res;
  },
  //Mission links {n,l,u,t,[i]}
  readUrls = function() {
    var i, t, res = [];
    
    t = combineData("url");
    if (!t) return; 
    for (i=0; i<t.length; i++) {
      res[i] = Read.url(t[i]);
    }
    return res;
  },
  //Spacecraft icons [{n,i,p},..]
  readIcon = function() {
    var t, n, i, j, path, name, res = [];
    
    for (i=0; i<_in.parts.length; i++) {
      t = Read.data(_in.parts[i].icon);
      if (!t || t.length === 0) continue;

      n = Read.data(_in.parts[i].names);
      if (i>0 && n && n.length > 0) { name = Read.string(n[0]); }
      else { name = _data.title[0]; }
      
      for (j=0; j<t.length; j++) {
        path = SSEH.PROBES + t[j][0];
        res.push({i:path, n:name.n.replace(/[\{\}]/g, ""), p:i});
      }
    }
    return res;
  }, 
  //Space agency [{n,l,u,i},..]  
  readAgency = function(s) {
    var i, t, o, res = [];
    
    if (!s || s === "") return; 

    t = s.split(",");
    for (i=0; i<t.length; i++) {
      if (findAgency(t[i]) === true) continue;
      o = Common.names.find(t[i]);
      o.k = t[i];
      if (o.u) { 
        o.u = "http://" + o.u;
        o.t = "_blank";
      }
      res.push(o);
    }
    return res;
  },
  findAgency = function(s) {
    var i;
    for (i=0; i<_data.ag.length; i++) {
      if (_data.ag[i].k == s) return true; 
    }
    return false;
  }, 
  //Spacecraft family or program [{n,l},..]
  readFamily = function(s) {
    var t, v, i, o, res = [];
    
    if (!s || s === "") return; 

    t = s.split(",");
    for (i=0; i<t.length; i++) {
      res.push(Common.names.find(t[i]));
    }
    return res;      
  },
  //Spacecraft launch mass [{n},..]  
  readMass = function(s) {
    var t, i, v, res = [];
    
    if (!s || s === "") return;

    t = s.split(",");
    for (i=0; i<t.length; i++) {
      v = t[i].toCommaString();
      v = v.replace(/kg/g, Common.SPC + "kg");
      res.push({n:v});
    }
    return res;      
  },
  //Spacecraft dimensions {n, v}
  readDim = function(s, part) {
    var t, i, n, v = 0, res = [];
    
    if (!s || s === "") return []; 
    
    n = s.replace(/x/g, Common.SPC + "\u00d7" + Common.SPC);
    t = s.replace(/m/, "").split("x");
    
    for (i=0; i<t.length; i++) {
      t[i] = parseFloat(t[i]);
      if (t[i] < 25 && t[i] > v) {
        if (t[i] < 10) { v = t[i]; }
        else { v = t[i] * 0.71; }
      }
    }
    _data.sc[part] = v / 8;
    res.push({n:n, v:v});
    
    return res;
  },
  //Spacecraft icon scale {n}  
  /*readScale = function(s, i) {
    var t, i, res = [];
 
    for (i=0; i<_in.parts.length; i++) {
      if (!_in.parts[i].icon) continue; 
      if (!_in.parts[i].desc) res.push(1);
      else {
        t =  _in.parts[i].desc.match(/sc\:([^\;$]+)/);
        if (!t) res.push(1);
        else res.push(parseFloat(t[1]));
      };
    };
    return res;      
  },*/
  //Special achievements {n}  
  /*readSpec = function() {
    var i, j, t, res = [];
    
    for (i=0; i<_in.parts.length; i++) {
      if (!_in.parts[i].hasOwnProperty("desc")) continue;
      t = _in.parts[i].desc.split(";");
      for (j=0; j<t.length; j++) {
        if (t[j] && t[j].search(/\:/) == -1) res.push({n:t[j]});
      };
    };
    return res;
  },*/
  //Mission-part ended?
  checkEOM = function(stat, type) {
    var i, t, res = stat;
    for (i=0; i<_in.events.length; i++) {
      t = _in.events[i].desc.match(/eom\:(\w+)/);
      if (t !== null && t[1] == type) {
        if (_in.events[i].desc.search(/fail/) != -1) {
          res = "f";
        } else {
          res = "s";
        }
      }
    }
    return res;
  },
  //Landing and impact locations dest:[{name,type,coord}..]
  readLocations = function() {
    var i, res = {}, t, c, n, o, d, de;
    
    for (i=0; i<_in.events.length; i++) {
      if (_in.events[i].type.search(/^imp|edl|td|tdn$/) != -1) {
        t = _in.events[i].loc.split(":");
        if (t.length > 1) {
          n = checkName(_in.events[i]);
          if (!n) continue;
          c = t[1];
          if (c) {
            if (!res.hasOwnProperty(t[0])) { res[t[0]] = []; }
            o = checkOrient(_in.events[i]);
            d = Parse.date(_in.events[i].dt, _timeline[0].d); 
            de = checkDesc(_in.events[i]);
            //mission, loc, coord, orient, desc
            res[t[0]].push({n:n, t:_in.events[i].type, c:c, o:o, d:d, de:de});
          }
        }
      }
    }
    return res;
  },
  //alt. name?
  checkName = function(ev) {
    var ar, t, n, ln;
    if (isNumber(ev.pt) && ev.pt > 0) {
      t = Read.data(_in.parts[ev.pt].names);
      if (t && t.length > 0) { ln = t[0].length>1?t[0][1]:t[0][0]; }
    }
    if (!ln) { ln = _data.title[0].n; }
    ln = ln.replace(/[\{\}]/g, "");
    
    ar = ev.desc.match(/show\:([^\b;\:]+)/);
    if (ar === null) n = getAcronym(ln); 
    else if (ar[1] == "0") return; 
    else n = ar[1]; 
    return n + ":" + ln;
  },
  //alt. orientation?
  checkOrient = function(ev) {
    var ar, n, l;
    ar = ev.desc.match(/show\:[^\:]+\:([^\b;\:]+)/);
    if (ar === null) return "NE"; 
    else return ar[1]; 
  },
  //Landing site desc?
  checkDesc = function(ev) {
    var i, ar, res = "";
    if (!ev) return res; 
    ar = ev.desc.split(";");
    for (i=0; i<ar.length; i++) {
      if (ar[i].search(/\:/) == -1 && ar[i].length > 4) {
        if (res !== "") { res += ", "; }
        res += ar[i];
      }
    }
    return res;    
  },
  //Short name for map display
  getAcronym = function(s) {
    var ar, n;
    if (!s) return; 
    if (s.length <= 3) return s; 
    ar = s.match(/(.)(.)\D*(\d*)/);
    if (!ar) return; 
    n = ar[1];
    if (ar.length > 3 && ar[3] !== "") { n += ar[3]; }
    else { n += ar[2] + "."; }
    return n;
  },
  //Event date {n}  
  readDate = function(n) {
    var res = [], dtl = _timeline[0].d;
    if (_in.events.length < n+1 || !_in.events[n].dt) return; 
    if (_in.events[0].dt.length <= 4) {
      res.push({n:Parse.date(_in.events[n].dt)});
    } else {
      res.push({n:Parse.date(_in.events[n].dt, dtl)});
    }
    if (_in.events[n].dt.search(/\.\./) != -1) { res[0].w = true; }
    return res;
  },
  //Event type {n,l} 
  readType = function(n) {
    var s, t, res = [];
    if (_in.events.length < n+1 || !_in.events[n].type) return; 
    s = _in.events[n].type;
    if (s == "ev") return; 

    if (s.search(/\boi|fb|f|app|ae|imp|edl|td|enc\b/) != -1) {
      t = _in.events[n].loc.split(":");
      if (t[0] != "sol") { res.push(Common.names.find(t[0])); }
      //else if (t[0].length > 2) res.push(Common.names.find(t[1]));
    }
    res.push(Common.names.find(s));
    
    return res;      
  },  
  //Event location {n,l}
  readLoc = function(n) {
    var t, i, s, p, res = [];
    if (_in.events.length < n+1 || !_in.events[n].loc) return res; 
    
    t = _in.events[n].loc.split(":");
    p = t[0];
    for (i=1; i<t.length; i++) {
      if (t[i].search(/^[\d\-]/) == -1) { res.push(Common.names.find(t[i])); }
      else if (t[i].search(/[NSEW]/) != -1) { res.push({n:Parse.position(t[i])}); }
      else if (t[i].search(/x/) != -1) { res.push({n:Parse.orbit(t[i], p)}); }
      else { res.push({n:Parse.distance(t[i], p)});  }
    }
    
    if (_in.events[n].type == "l") {
      s = t[1];
      if (res.length>0) { res[0].id = "lnk"+s; }
      if (SSEH.lc.search(s) == -1) { SSEH.lc += s + ","; }
    }
    return res;
  },
  //Event description {n,l,d,v}  
  readDesc = function(n) {
    var i, j, res = [], t = null, u;
    if (_in.events.length < n+1 || !_in.events[n].desc) return; 
    t = Read.data(_in.events[n].desc);
    for (i=0; i<t.length; i++) {
      if (t[i].length == 1) {
        if (t[i][0].search(/\//) != -1) {
          u  = t[i][0].split("/");
          for (j=0; j<u.length; j++) {
            res.push(Common.names.find(u[j]));
            res[res.length-1].v = "/";
          }
        } else {
          if (n == _in.events.length-1 && (t[i] == "eom" || t[i] == "?")) continue;
          res.push(Common.names.find(t[i]));
        }
      } else {
        if ("show,eom".search(t[i][0]) != -1) continue;
        if ("com,ast,dp,op".search(t[i][0]) == -1) { res.push(Common.names.find(t[i][0])); }
        else { res.push(Common.names.find(t[i][1])); }
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
          case "eom": if (t[i].length == 2) { res.push(Common.names.find(t[i][1])); res[res.length-1].v = ": "; } break; 
          case "ip": 
          case "ssp": 
          case "lp": 
          case "hpp": 
          case "mal": 
          case "fail": res.push(Common.names.find(t[i][1])); res[res.length-1].v = ": "; break;
          case "end":
          case "los": res[res.length-1].d = Parse.date(t[i][1]); break;
          case "tm": 
          case "per": res[res.length-1].d = Parse.time(t[i][1]); break;
          case "mat": res[res.length-1].d = Parse.mass(t[i][1]); break;
          case "enc": res[res.length-1].d = Parse.date(t[i][1]); break;
          default: if (t[i][0].length > 3) { res[res.length-1].l = t[i][1]; }
        }
      }
    }
    return res;
  },
  createLine = function(t) {
    var line, im, w;

    //dom-box
    line = Create.div(_parent, "timeline", "info"+_id, {t:t, l:10, w:1, h:SSEH.BARHEIGHT});
    //displayname; style dependent on status
    Create.span(line, _data.shortname[0], "status" + _data.stat[0].n);
    //S/C image
    im = Create.img(line, _data.icon[0], "imgHilight");
    if (_data.sc[0] < 1) {
      w = _data.sc[0] * 120;
      im.style.width = px(w);
      im.style.height = "auto";
    }
    //im.style.top = px(-(w-SSEH.BARHEIGHT)/2);
    //highlight line
    Create.div(line, "hilight", null, {t:1, l:0, w:1, h:SSEH.BARHEIGHT-2});
    
  //popup 
    line.onclick = UI.show;
    line.onmouseover = UI.showImg;
    line.onmouseout = UI.showImg;
    
    return line;
  },    
  positionLine = function(l, r, w, dest) {
    var i, chld = _overlay[dest].childNodes;
    //_overlay[dest].style.top = px(t);
    _overlay[dest].style.width = px(r-10);
    for (i=0; i<chld.length; i++) {
      if (chld[i].nodeName.toLowerCase() == "div") {
        chld[i].style.left = px(l-10);
        chld[i].style.width = px(r-l-1);
      } else if (chld[i].nodeName.toLowerCase() == "img") {
        //chld[i].style.backgroundColor = "#f00";
        if (r+130 < w) {
          chld[i].style.left = px(r+10);
        } else {
          chld[i].style.left = px(l-130);
        }
      }
    }
  },
  drawSc = function(c, width, t, dest) {
    var img, src, sc, rel, p, p0, x, y, w, o, r, l, h, corr=0, now = new Date();
    src = _data.icon[0].i;
    sc = _data.sc[0];
    if (SSEH.currentDest != dest) {
      SSEH.lastlastImg = null;
      SSEH.lastImg = null;
      SSEH.currentImg = null;
      SSEH.currentDest = dest;
    }
    if (!SSEH.currentO) { SSEH.currentO = 1; }

    if (SSEH.currentImg && SSEH.currentImg == src || SSEH.lastImg && SSEH.lastImg == src || SSEH.lastlastImg && SSEH.lastlastImg == src) return; 
    
    r = UI.Scale.time(_timeline[_timeline.length-1].d, width);
    l = UI.Scale.time(_timeline[0].d, width);
    o = -SSEH.currentO;    
    
    img = new Image();
    img.onload = function () {
      rel = img.width/img.height;
      w = sc>1.2?100:80*sc;
      h = w/rel;
      y = t + SSEH.BARHEIGHT/2 - h/2;
      if (_data.w) {
        x = width*_data.w;
      } else if (r + 180 < width) {
        x = r + 20 + w - w*o;
      } else {
        x = l - 120 - w + w/2*o;
      }
      
      c.image(img, x, y, w, h);
    };
    img.src = src;
    SSEH.lastlastImg = SSEH.lastImg;
    SSEH.lastImg = SSEH.currentImg;
    SSEH.currentImg = src;
    SSEH.currentDest = dest;
    SSEH.currentO = o;
    
  },
  setLineHeight = function(c, tl, h) {
    if (_data.dest.search(tl.l) !== -1) return h;
    else return 1;
  },
  drawBar = function(c, l, t, r, h, col) {
    var bh, th = 0;
    if (h === 1) {
      bh = 1;
      t += Math.round((SSEH.BARHEIGHT - col.length) / 2);
    } else bh = h;
    for (var j=0; j<col.length; j++) {
      if (h !== 1 && j === col.length-1) bh = SSEH.BARHEIGHT - th;
      c.fillrect(l, t+j*h, r-l, bh, col[j]);
      th += h;
    }
  },
  drawGrad = function(c, l, t, r, h, col) {
    var bh, th = 0;
    for (var j=0; j<col.length; j++) {
      bh = (j < col.length-1)?h:SSEH.BARHEIGHT - th;
      c.gradient(l, r, t+j*h, bh, [{col:col[j],pos:0},{col:"#000",pos:1}]);
      th += h;
    }
  },   
  drawSymbol = function(c, x, y, type) {
    var diff, img;
    if (!Common.sprites.hasOwnProperty(type)) return; 
    img = Common.sprites[type];
    diff = SSEH.BARHEIGHT / 2;
    c.image(Common.symbols.sprite, img.x, img.y, 16, 16, x-diff, y, SSEH.BARHEIGHT, SSEH.BARHEIGHT);
  },
  getCols = function(m) {
    var i, res = [];
    for (i=0; i<m.length; i++) {
      res[i] = Common.names.findColor(m[i]);
    }
    return res;
  },  
  //Build event timeline
  readTimeline = function() {
    var i, stat, dt, ldt, loc, tp, sym, s, res = [],
        now = new Date(),
        m = getMission();
 
    stat = _in.stat?_in.stat:_in.parts[0].stat;
        
    if (!_in.events) return; 
    //dt,loc,type,vehicle
    for (i=0; i<_in.events.length; i++) {
      s = _in.events[i].desc;
      //Date, only first of period
      dt = getDt(_in.events[i].dt, ldt);
      if (!dt) continue;
      //Startdate
      if (i === 0) { ldt = new Date(dt.valueOf()); }
      //Location
      loc = getLoc(_in.events[i].loc);
      if (loc == "com"  || loc == "ast") { loc = "sbo"; }
      //Eventtype
      tp = getType(_in.events[i].type);
      //Active mission types
      m = changeMission(m, s);
      //event icons
      sym = getIcon(_in.events, i);
      res.push({d:dt,l:loc,t:tp,m:m,i:sym});
    }
    //extend ongoing to now
    if (stat == "o" && now.diff(res[res.length-1].d) < 0) {
      res.push({d:now,l:loc,t:tp,m:m});
      dt = new Date(now.valueOf());
    }   
    if (tp == "pom" && now.diff(res[res.length-2].d) < 0) {
      res[res.length-1].t = "nom";
      res[res.length-1].d = now;
      res.push({d:dt,l:loc,t:tp,m:m});
    }
    //fadeout if no end/nom
    if (stat.search(/o|pl/) != -1) {
      if (tp == "pom") {
        res[res.length-1].t = "ten";
      } else if (tp != "nom") {
        if (!s || s.search(/eom(?!\:)/i) == -1) {
          res.push({d:res[res.length-1].d.add(3,"yr"),l:loc,t:"ten",m:m});
        }
      } else {
        if (!s || s.search(/pend|\?/i) != -1) {
          res.push({d:res[res.length-1].d.add(3,"yr"),l:loc,t:"ten",m:m});
        }
      }
    }
     
    return res;
  },
  getIcon = function(ev, i) {
    var res, tp = getType(ev[i].type), s = _in.events[i].desc;
    
    //l,toi,fb,oi,edl,imp,app
    switch (tp) {
     case "l":
     case "oi":
     case "toi": if (i<2 && s && s.search(/fail/) != -1) { res = "fail"; } break; 
     case "app": if (i>=ev.length-1 || getType(ev[i+1].type) != "fb") { res = "app"; } break; 
     case "fb": 
     case "oi": 
     case "edl":
     case "imp": res = tp; break;
    }
    return res;
  },
  getDt = function(s, dt) {
    var res;
    if (s.search(/^l/i) == -1) {
      res = Parse.dt(s);
    } else {
      res = diffDt(dt,s);
    }
    return res;
  },
  diffDt = function(dt, s) {
    var res, t;
    if (!s || !dt) return; 
    
    t = s.match(/^l\+([\d\.]+)(\w+)?/);
    if (t === null || t.length < 3) return; 

    res = dt.add(t[1], t[2]);
    return res;     
  },
  getLoc = function(s) {
    var res, t;
    t = Read.data(s);
    res = t[0][0];
    
    return res;
  },
  getType = function(s) {
    var res, t;
    t = Read.data(s);
    res = t[0][0];
    
    return res;
  },
  getMission = function() {
    var i, res = [];
   
    for (i=0; i<_data.stats.length; i++) {
      res.push(_data.stats[i].t);
    }
    return res;
  },
  changeMission = function(m, s) {
    var t, i, j, res = m.slice();
    if (!s) return res; 
    
    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      if (t[i][0] == "eom") {
        if (!t[i][1]) return res;
        else {
          for (j=0; j<res.length; j++) {
            if (res[j] == t[i][1]) { res.splice(j,1); break; }
          }
        }
      }
    }
    return res;
  };
 
  var createOverlay = function(dim) {
    var box = Create.div(_parent, "hilight", "info"+_id, {l:0, t:dim.t, h:dim.h, w:dim.w});
    box.title = _data.title[0].n;
    box.onclick = UI.show;
    return box;
  };
  
  var combineData = function(fld, uniq) {
    var i, res = [];
    for (i=0; i<_in.parts.length; i++) {
      if (_in.parts[i].hasOwnProperty(fld) && _in.parts[i][fld] !== "") {
        res = res.concat(_in.parts[i][fld].split(";"));
      }
    }
    if (!res || res.length === 0) return null; 
    if (uniq) { res = res.unique(); }
    for (i=0; i<res.length; i++) {
      res[i] = res[i].split(":");
    }
    return res;
  };

  var combineDesc = function(fld, uniq) {
    var i, ar, rx, res = [];
    rx = new RegExp(fld + "\:([^\;$]+)");
    for (i=0; i<_in.parts.length; i++) {
      if (!_in.parts[i].desc) continue;
      ar = _in.parts[i].desc.match(rx);
      if (ar !== null) { res = res.concat(ar[1].split(/,/)); }
    }
    if (!res || res.length === 0) return null; 
    if (uniq) { res = res.unique(); }
    return res;
  };

  var getDesc = function(s, part) {
    var t;
    t = s.split(":");
    if (t.length > 1) { if (!_data.hasOwnProperty(t[0])) { _data[t[0]] = []; } }
    switch (t[0]) {
      case "ag": _data.ag = _data.ag.concat(readAgency(t[1])); break;
      case "lv": _data.lv = _data.lv.concat(readLv(t[1])); break;
      case "fam": _data.fam = _data.fam.concat(readFamily(t[1])); break;
      case "m": _data.m = _data.m.concat(readMass(t[1])); break;
      case "m0": _data.m0 = _data.m0.concat(readMass(t[1])); break;
      case "dim": _data.dim = _data.dim.concat(readDim(t[1], part)); break;
      case "sc": _data.sc[part] = parseFloat(t[1]); break;
      case "w": _data.w[part] = parseFloat(t[1]); break;
      case "part": _data.part = t[1]; break;
      default: if (t[0] !== undefined && t[0] !== "") {
                if (!_data.hasOwnProperty("spec")) { _data.spec = []; }
                 _data.spec.push({n:t[0]});
                 break;
               }
    }
  };
  
  var readDescription = function() {
    var i, j, t;
    
    _data.sc = [];
    
    t = _in.desc.split(";");
    for (i=0; i<t.length; i++) {
      getDesc(t[i]);
    }

    for (j=0; j<_in.parts.length; j++) {
      _data.sc[j] = 1;
      if (!_in.parts[j].hasOwnProperty("desc")) continue;
      t = _in.parts[j].desc.split(";");
      for (i=0; i<t.length; i++) {
        getDesc(t[i], j);
      }
    }
  };

 
  this.drawTimeline = function(c, y, w, dest) {
    var h, i, l = null, l0, r, p, p0, col = [],
        t = y;
        
    col = getCols(_timeline[0].m);
    //height
    h = Math.ceil(SSEH.BARHEIGHT / col.length);
    //c.setparam("globalAlpha", 0.9);
 
    for (i=0; i<_timeline.length; i++) {
      r = UI.Scale.time(_timeline[i].d, w);
      //h = setLineHeight(c, _timeline[i], h0);
      if (i === 0) { l0 = r; }
      if (l !== null) {
        //box w/opa
        if (_timeline[i].t != "ten") {
          drawBar(c, l, t+1, r, h, col);
        } else {
          drawGrad(c, l, t+1, r, h, col);
        }
      }
      l = r;
      //change mission colors
      col = getCols(_timeline[i].m);
      h = Math.ceil(SSEH.BARHEIGHT / col.length);
      //trajectory?, semitransparent?
    }
    if (l == l0) {
      r = l + 2;
      drawBar(c, l, t+1, r, h, col);
    }
    //c.setparam("globalAlpha", 1.0);
    //draw icons
    p0 = 0;   
    for (i=0; i<_timeline.length; i++) {
      //launch failure
      if ((_timeline[i].i) == "fail") {
        drawSymbol(c, UI.Scale.time(_timeline[i].d, w)+9, t+1, "lf");
      //event fb, oi, imp, edl, ae at dest, if not fail
      } else if (_timeline[i].i && _timeline[i].l == dest) {
        if (r - l0 > 8) {
          p = UI.Scale.time(_timeline[i].d, w);
          if (p < l0+2) { p = l0+2; }
          if (p - p0 < 4) continue;
          drawSymbol(c, p, t+1, _timeline[i].t);
          p0 = p;
        }
      }
    }
    
    if (!_overlay[dest]) { _overlay[dest] = createLine(t); }
    positionLine(l0, r, w, dest);
       
    //drawSc(c, w, t, dest);
    return y + _step;
  };
  
  this.drawEscape = function(c, t, w) {
    var x, y, pos, img, r = 15, sc = w/Math.PI;
    pos = parseElements(elem[_id]);
    y = t + (pos.r-85)*1.8;
    x = w + (pos.l-Math.PI)*sc;
    y -= Math.cos(Math.asin(x/y))*5; 
    img = _id.replace(/\d+/, "");
    c.image(Common.symbols[img], x-r, y-r, r*2, r*2);
    if (!_overlay.et) { _overlay.et = createOverlay({t:y-r, w:r*2, h:r*2}); }
    _overlay.et.style.left = px(x-r);
  };
  

  this.createTrajectory = function() {
    //ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  };

  
  this.ID = function() {
    return _id; 
  };

  this.Box = function() {
    return _box; 
  };

  this.createBox = function() {
    _box = createBox();
    _box.style.top = px(-9999);
    _box.style.left = px(6);
    _box.onclick = function() { UI.vanish(false); };
    return _box; 
  };

  this.Name = function() {
    if (_data.title && _data.title.length > 0) {
      return _data.title[0].n; 
    }
  };
  
  this.Launchdate = function() {
    if (_timeline && _timeline.length > 0) {
      return _timeline[0].d; 
    }
  };
  
  this.Achievements = function(dest) {
    var i, res = [], s = "";
    for (i=0; i<_data.stats.length; i++) {
      if (_data.stats[i].d1.search(dest) != -1) {
        res.push(_data.stats[i]);
        if (s !== "" && _data.stats[i].s !== s)
          res.push({t:"all", d1:dest, d2:"", s:s});
        s = _data.stats[i].s;
      } else if (dest == "ter" && _data.stats[i].t.search(/^(hm|srm)$/) != -1) {
        res.push(_data.stats[i]);
        s = _data.stats[i].s;
      }
    }
    if (res.length > 0) {
      res.push({t:"all", d1:dest, d2:"", s:s});
    }
    return res;
  };
  
  this.Achievementsctry = function() {
    return readctryStats();
  };

  this.AchievementsLnch = function(dest) {
    var id, lv, part;
    part = _data.hasOwnProperty("part");
    id = (_data.id && _data.id.length > 0)?_data.id[0].n.slice(0,8):"";
    lv = (_data.lv && _data.lv.length > 0 && _data.lv[0].hasOwnProperty("id"))?_data.lv[0].id.replace(/^lnk/, ""):"";
    if (lv !== "") return {id:id, st:_data.stats[0].s, lv:lv, dt:_timeline[0].d, part:part}; 
  };
  
  this.Locations = function(dest) {
    if (_data.locations.hasOwnProperty(dest)) {
      return _data.locations[dest];
    }
  };
  
  this.hasDest = function(dest) {
    var i, rx;
    if (dest != "sbo") {
      rx = new RegExp("\\b" + dest + "\\b");
    } else {
      rx = new RegExp("\\b(ast|com)\\b");
    }
    for (i=0; i<_data.stats.length; i++) {
      if (_data.stats[i].d1.search(rx) != -1) return true; 
      else if (dest == "ter" && _data.stats[i].t.search(/^(hm|srm)$/) != -1) return true; 
    }
    return false;
  };
  
  this.Height = function() {
    var i, dest = [];
    for (i=0; i<_data.stats.length; i++) {
      dest.push(_data.stats[i].d1);
      if (_data.stats[i].t.search(/^(hm|srm)$/) != -1) { dest.push("ter"); }
    }
    dest = dest.unique();
    return dest.length * (_step); 
  };
  
  this.Icon = function() {
    if (_data.icon && _data.icon.length >= 1) return _data.icon[0].i; 
  };
  
  if (parid) { _parent = document.getElementById(parid); }
  if (!_parent) { _parent = document.getElementsByTagName("body")[0]; }
  _step = SSEH.BARHEIGHT + Math.floor(SSEH.BARHEIGHT/4);
  
  _data.stats = readStats();
  _timeline = readTimeline();

  _data.title = readName();
  _data.shortname = readName(true);
  _data.names = readNames();
  _data.goal = readGoal();
  _data.stat = readStatus();
  //_data.dest = readDest();
  _data.ctry = readctry();
  _data.id = readId();
  _data.url = readUrls();
  _data.icon = readIcon();

  readDescription();
  
  _data.locations = readLocations();
  
  _data.ev = [];
  
  for (var i=0; i<_in.events.length; i++) {
    if (_in.events[i].type == "pom") continue;
    _data.ev[i] = {};
    _data.ev[i].type = readType(i);
    _data.ev[i].date = readDate(i);
    _data.ev[i].loc = readLoc(i);
    _data.ev[i].desc = readDesc(i);
  }
  
  // _box = createBox();
   
    
}
