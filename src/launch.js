/* global UI, SSEH, Common, Parse, Create, Read, Cdraw, Trig, px */

function LV(id, parid) {
  var _parent, _data, _id, _box,

  parse = function(d) {
     var i, t, dat = {};
     //alt. Names
     dat.name = {n:_id};
     if (d.n && d.n !== "") { dat.name = {n:d.n + " (" + _id + ")"}; }
     dat.sname = _id.replace(/(Centaur).*/, "$1");
     //dat.sname = dat.sname.replace(/\d\K\d\d/, "");
     if (d.alt && d.alt !== "") { dat.alt = {n:d.alt}; }
     dat.ctry = readCtry(d.ctry);
     if (d.m && d.m !== "") { dat.m = d.m.toCommaString() + Parse.unit("kg"); }
     dat.pm = readPm(d.pm);
     if (d.d && d.d !== "") { dat.d = d.d.replace(/x/g, Common.SPC + "\u00d7" + Common.SPC) + Parse.unit("m"); }
     if (d.pf && d.pf !== "") { dat.pf = d.pf.replace(/x/g, Common.SPC + "\u00d7" + Common.SPC) + Parse.unit("m"); }
     dat.dt = d.dt.replace(/\.\./g, "\u2026");
     dat.st = d.st;
     dat.fuel = d.fuel;
     if (d.ust && d.ust !== "") { dat.ust = d.ust; }
     if (d.th && d.th !== "") { dat.th = d.th.toCommaString() + Parse.unit("kN"); }
     if (d.fam && d.fam !== "") { dat.fam = d.fam; }
     dat.desc = d.desc;  //lc, ag
     if (d.icon && d.icon !== "") { dat.icon = {i:SSEH.LV + d.icon}; }
     dat.stat = {t:0, f:0, p:0, dt:null};
     
     t = d.dt.split(/\.\./);
     dat.dt1 = t[0];
     if (t.length == 1) { dat.dt2 = " "; }
     else if (t[1].length > 1) { dat.dt2 = t[1]; }
     else { dat.dt2 = "\u22ef"; }
     t = d.pm.split(/\//);
     for (i=0; i<t.length; i++) {
      dat["pm"+i] = t[i] == "-"?"-":t[i].toCommaString() + Parse.unit("kg");
    }
    return dat;
  },
  createBox = function(full) {
    var i, t, h, frag, box, col;

    frag = document.createDocumentFragment();
    //box
    box = Create.div(frag, "infoPopup", "lv"+_id, {w:300});
    //data
    col = Create.div(box, "col", null, {w:230});
    //title
    Create.span(col, _data.name, "missionTitle");
    Create.br(col);
    if (_data.alt) {
      Create.span(col, _data.alt);
      Create.br(col);
    }
    drawData(col);
    //icon
    col = Create.div(box, "rcol", null, {w:70});
    //Country flags
    for (i=0; i<_data.ctry.length; i++) {
      Create.asymbol(col, _data.ctry[i], "missionFlag");
    }
    Create.br(col);
    t = Create.img(col, _data.icon, "lvIcon");
    h = 3*parseInt(_data.d);
    t.style.height = px(h);
    if (h > 144) { t.style.position = "static"; } //px(144-h); 
    if (h < 120 && _id != "STS") { box.style.width = px(260); col.style.width = px(30); }
    //t.style.marginRight = px(10);
    t.style.width = "auto";
    
    _parent.appendChild(frag);
    return box;

  },
  drawData = function(par, cat) {
    var i, flds = ["m", "d", "pf", "st", "ust", "pm", "th", "fam"]; // dt stat (l ag)
    for (i=0; i<flds.length; i++) {
      if (!_data.hasOwnProperty(flds[i])) continue;
      if (cat !== false) { Create.span(par, Common.names.find("lv"+flds[i]), "lstcategory"); }
      Create.span(par, {n:_data[flds[i]]});
      Create.br(par);
    }
    Create.span(par, {n:_data.dt});
    Create.br(par);  
  },
  drawDat = function(par, cat) {
    var i, flds = ["m", "d", "pf", "st", "ust", "fuel", "th", "pm0", "pm1", "pm2", "fam", "dt1", "dt2"]; // dt stat (l ag)
    for (i=0; i<flds.length; i++) {
      if (cat === true) {
        if (flds[i] != "dt2") { Create.span(par, Common.names.find("lv"+flds[i]), "lstcategory"); }
      } else if (!_data.hasOwnProperty(flds[i])) {
        Create.span(par, {n:"-"});
      } else {
        Create.span(par, {n:_data[flds[i]]});
      }
      Create.br(par);
    }
    if (cat === true) {
     Create.span(par, Common.names.find("lvstat"), "category");
     Create.br(par);  
   }
  },
  //Country & flag {n,i}
  readCtry = function(fld) {
    var i, t, n, res = [];
   
    t = fld.split(",");
    if (!t) return; 
    
    for (i=0; i<t.length; i++) {
      n = t[i];
      if (Common.ctry.hasOwnProperty(n)) {
        res.push({n:Common.ctry[n].name, k:n});
      }
    }
    return res;
  },
  readPm = function(fld) {
    var i, t, res = "";
    if (!fld || fld === "") return; 
    t = fld.split("/");
    for (i=0; i<t.length; i++) {
      if (res !== "") { res += "\u200a/\u200a"; }
      if (t[i] == "-" || t[i] === "") { res += "-"; } else { res += t[i].toCommaString(); }
    }
    return res + Parse.unit("kg");
  };
    
  this.show = function(par) { 
  };
  
  this.drawData = function(par, cat) {
    drawDat(par, cat);
  };
  
  this.setStat = function(s, val) { 
    if (_data.stat.hasOwnProperty(s)) {
      if (s != "dt") {
        _data.stat[s]++;
      } else {
        if (_data.stat.dt === null || _data.stat.dt.diff(val) < 0) { _data.stat.dt = new Date(val.valueOf()); }
      }
    }
  };

  
  
  this.list = function() { 
    return {n:_data.sname, i:_data.icon.i, d:_data.d, st:_data.stat, ctry:_data.ctry};
  };

  this.Date = function() {
    return _data.stat.dt;
  };

  if (parid) { _parent = document.getElementById(parid); }
  if (!_parent) { _parent = document.getElementsByTagName("body")[0]; }

  _id = id;
  /*if (Common.lv[_id].hasOwnProperty("syn")) {
    this.syn = Common.lv[_id].syn;
    return;
  };*/
  _data = parse(Common.lv[id]);
  _box = createBox();
  _box.style.top = px(-9999);
  _box.style.left = px(10);
}

SSEH.showLV = function(e, nd) { 
  var ar, id, top, left, box, 
      ev = e || window.event,
      node = nd || this; 

  top = node.offsetTop + node.parentNode.parentNode.offsetTop + node.offsetHeight + 4;
  left = node.parentNode.parentNode.offsetLeft + node.parentNode.offsetLeft + 4;  
  ar = node.id.match(/^lnk(.+)/);
  if (ar !== null) { 
    if (!Common.lv.hasOwnProperty(ar[1])) return; 
    box = document.getElementById("lv"+ar[1]); 
  }
  if (!box && !UI.cancelled()) { 
    UI.wait(true, top, left);
    window.setTimeout(function() { SSEH.showLV(ev, node); }, 500);  
  } else { UI.wait(false); }
  if (!box) return false; 

  if (box.style.opacity == 1) {
    box.style.opacity = 0;  
    setTimeout(UI.shift, 1000);
  } else { 
    UI.vanish(false);
    box.style.left = px(left); 
    box.style.top = px(top); 
    box.style.opacity = 1;  
    UI.Scroll.set(box); 
  }
  ev.stopPropagation();
  return false; 
};


function LC(id, parid) {
  var _parent, _data = {}, _id, _box,

  parse = function(d) {
     var i, t;

     t = Read.data(d.name);
     _data.name = Read.string(t[0]);
     _data.id = _id;
     //alt. Names
     if (d.other && d.other !== "") { _data.other = Read.string(d.other.split(":"), true); }
     if (d.desig && d.desig !== "") { _data.desig = Read.string(d.desig.split(":"), true); }
     _data.ctry = readCtry(d.ctry);
     if (d.map && d.map !== "") { _data.map = {i:SSEH.LC + d.map}; }
     t = Read.data(d.desc);
     for (i=0; i<t.length; i++) {
       _data[t[i][0]] = readDesc(t[i]);
     }
     if (_data.loc && _data.kml) { _data.loc.u = SSEH.GEOLNK.replace(/%ref%/g, _data.kml); }
     _data.pads = readPads(_id);
  },
  readDesc = function(s) {
    var res, t;
    if (!s || s.length < 2) return; 
    //url,loc,show,reg,az,x,y
    switch (s[0]) {
      case "url": res = {u:"http://"+s[1], k:"ext"}; break;
      case "n": res = Common.names.find(s[0]); break;
      case "show": res = s.length > 2? {n:s[1], p:s[2]} : {n:s[1], p:"NW"}; break;
      case "az": t = s[1].split("..");
                 res = {l:t[0], h:t[1]};
                 break;
      case "reg": res = {n:s[1]}; break; 
      case "loc": res = readLoc(s[1]); break;
      case "shmap":  
      case "kml":  
      case "x":  
      case "y": res = s[1]; break;
      default: return;
    }
    return res;
  },
  readPads = function(id) {
    var res = [], i, syn = {};
    for (i=0; i<Common.lpad.length; i++) {
      if (Common.lpad[i].par && Common.lpad[i].par == id){
        if (Common.lpad[i].hasOwnProperty("syn")) { syn[Common.lpad[i].syn] = Common.lpad[i].n; }
        else { res.push({n:Common.lpad[i].n, lv:Common.lpad[i].lv.split(";")}); }
      }
    }
    
    for (i=0; i<res.length; i++) {
      if (syn.hasOwnProperty(res[i].n)) {
        if (syn[res[i].n].search(/SLC/) != -1) { res[i].n = "(S)" + res[i].n; }
        else { res[i].n += "/" + syn[res[i].n]; }
      }
    }
    
    return res;
  },
  createBox = function(full) {
    var i, t, h, frag, box, col;

    frag = document.createDocumentFragment();
    //box
    box = Create.div(frag, "infoPopup", "lc"+_id, {w:442});
    //title
    col = Create.div(box, "col", null, {w:300});
    Create.span(col, _data.name, "missionTitle");
    if (_data.desig) {
    Create.span(col, {n:" ("+_data.desig.n+")"}, "missionTitle");    
    } 
    Create.asymbol(col, _data.url, "symLnk");
    col = Create.div(box, "rcol", null, {w:140});
    //Country flags
    for (i=0; i<_data.ctry.length; i++) {
      Create.asymbol(col, _data.ctry[i], "missionFlag");
    }
    //map
    col = Create.div(box, "col", null, {w:440});
    t = Create.img(col, _data.map, "lcIcon");
    t.onload = function() { this.parentNode.style.height = px(this.height-10); };
    col = Create.div(box, "col", null, {w:230});
    //title
    col = Create.div(box, "col", null, {w:230});
    if (_data.desig) {
      Create.span(col, {n:_data.name.l});
      Create.br(col);
    }
    if (_data.other) {
      Create.span(col, _data.other);
      Create.br(col);
    }
    //drawData(col);
    if (_data.reg) {
      Create.span(col, _data.reg);
      Create.br(col);
    }
    if (_data.loc) {
      Create.asymbol(col, _data.loc, "symGeo");
      Create.a(col, _data.loc);
      Create.br(col);    
    }
    if (_data.az) {
      Create.span(col, Common.names.find("lcaz"), "category");
      Create.span(col, {n:_data.az.l + Parse.unit("deg")+".."+_data.az.h + Parse.unit("deg")});
    }
    col = Create.div(box, "col", null, {w:210});
    drawPads(_data.pads, col);
    _parent.appendChild(frag);
    drawAzimuth(_data.az);
    return box;
  },
  drawAzimuth = function(az,x0,y0) {
    var x1,y1,x2,y2,a1,a2,c,r=25;
    if (!az) return; 
    c = new Cdraw("lcmap"+_id, {top:px(24), left:px(5), parent:"lc"+_id, width:440, height:250});
    a1 = Trig.deg2rad(az.l);
    a2 = Trig.deg2rad(az.h);
    x0 = x0 || 410;
    y0 = y0 || 30;
    x1 = x0 + Math.sin(a1) * r;
    y1 = y0 - Math.cos(a1) * r;
    x2 = x0 + Math.sin(a2) * r;
    y2 = y0 - Math.cos(a2) * r;
    c.startp(x0,y0,"rgba(255,0,0,0.2)");
    c.movep(x1,y1);
    c.arcp(x0,y0,r,a1-Math.PI/2,a2-Math.PI/2,false);
    c.endp(x0,y0,true);
    c.line(x0,y0,x1,y1,"#000",1);
    c.line(x0,y0,x2,y2,"#000",1);
  },
  drawPads = function(a, col) {
    var i, j, t;
    for (i=0; i<a.length; i++) {
      Create.span(col, a[i], "bold"); 
      Create.text(col, ": "); 
      for (j=0; j<a[i].lv.length; j++) {
        if (j>0) { Create.text(col, ", ");  }
        Create.span(col, {n:a[i].lv[j]});
      }
      Create.br(col); 
    }
  },
  drawData = function(par, cat) {
  },
  readLoc =  function(s) {
     return {k:"globe", t:"_blank", n:s};
  },
  //Country & flag {n,i}
  readCtry = function(fld) {
    var i, t, n, res = [];
   
    t = fld.split(";");
    if (!t) return; 
    
    for (i=0; i<t.length; i++) {
      n = t[i];
      if (Common.ctry.hasOwnProperty(n)) {
        res.push({n:Common.ctry[n].name, k:n});
      }
    }
    return res;
  };
  
  this.drawData = function(par, cat) {
    drawData(par, cat);
  };
  
  this.drawAzimuth = function(cnv, w, h, dx) {
    var x0,y0,x1,y1,x2,y2,a1,a2,c,r=38,loc,
        wd = 13, hd = wd * 45/25, 
        bold = "bold 16px 'Trebuchet MS'";
    if (!cnv) return; 

    dx = dx || 0;
    loc = Parse.pos(_data.loc.n).split(",");
    y0 = (90 - parseFloat(loc[0])) * h/180; 
    x0 = (parseFloat(loc[1]) + 180) * w/360 + dx;

    if (_id !== "ksc" && _id !== "uch") {
      a1 = Trig.deg2rad(_data.az.l);
      a2 = Trig.deg2rad(_data.az.h);
      x1 = x0 + Math.sin(a1) * r;
      y1 = y0 - Math.cos(a1) * r;
      x2 = x0 + Math.sin(a2) * r;
      y2 = y0 - Math.cos(a2) * r;
      cnv.startp(x0,y0,"rgba(255,0,0,0.2)");
      cnv.movep(x1,y1);
      cnv.arcp(x0,y0,r,a1-Math.PI/2,a2-Math.PI/2,false);
      cnv.endp(x0,y0,true);
      cnv.line(x0,y0,x1,y1,"#000",1);
      cnv.line(x0,y0,x2,y2,"#000",1);
      
      var ico = rkt[_data.ctry[0].k];
      cnv.image(icons, ico.x, ico.y, ico.w, ico.h, x0-wd/2, y0-hd, wd, hd);
    } else x0 -= 6;
    
    var p = _data.hasOwnProperty("shmap") ? _data.shmap : _data.show.p;

    cnv.label(_data.show.n, x0, y0, 6, p, bold, "#000");      
    
    //if (_id == "cap") {
    //  cnv.label("KSC", x0-6, y0, 6, "NW", bold, "#000");      
    //} else if (_id == "tng") {
    //  cnv.label("USC", x0-6, y0, 6, "NW", bold, "#000");      
    //} 
    
    res = {n:_data.show.n, l:_data.name.l, c:_data.ctry[0].k, url:_data.url, tp:"lc"};
    if (_data.ctry.length > 1) res.h = _data.ctry[1].k;
    return res;
  };
  
  this.setStat = function(s, val) { 
  };
  
  this.Name = function() {
     return _data.name.n;  
  };

  this.Box = function() {
     return _box;  
  };
  
  this.list = function() { 
    return {n:_data.name, a:_data.show.n, loc:_data.loc.n, o:_data.show.p, ctry:_data.ctry};
  };

  
  if (parid) { _parent = document.getElementById(parid); }
  if (!_parent) { _parent = document.getElementsByTagName("body")[0]; }

  _id = id;
  parse(Common.lc[id]);
  _box = createBox();
  _box.style.top = px(-9999);
  _box.style.left = px(10);
}


SSEH.showLC = function(e, nd) { 
  var ar, id, top, left, box, 
      ev = e || window.event,
      node = nd || this; 

  top = node.offsetTop + node.parentNode.parentNode.parentNode.offsetTop + node.offsetHeight + 4;
  left = node.parentNode.parentNode.offsetLeft + node.parentNode.offsetLeft + 4;  
  ar = node.id.match(/^lnk(.+)/);
  if (ar !== null) { 
    if (!Common.lc.hasOwnProperty(ar[1])) return; 
    box = document.getElementById("lc"+ar[1]); 
  }
  if (!box && !UI.cancelled()) { 
    UI.wait(true, top, left);
    window.setTimeout(function() { SSEH.showLC(ev, node); }, 500);  
  } else { UI.wait(false); }
  if (!box) return false; 

  if (box.style.opacity == 1) {
    box.style.opacity = 0;  
    setTimeout(UI.shift, 1000);
  } else { 
    UI.vanish(false);
    box.style.left = px(left); 
    box.style.top = px(top); 
    box.style.opacity = 1;  
    UI.Scroll.set(box); 
  }
  ev.stopPropagation();
  return false; 
};
