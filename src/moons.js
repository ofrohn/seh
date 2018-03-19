/* global UI, SSEH, Create, Common, Cdraw, data, objects, parseObject, px */

function Moons(dest, parent) {
  var key, t, _planet = {}, _box, _overlay, 
      _scale = 0,
      _xscale = 0,
      _dest = dest,
      _data = {},
      _parent = parent,

  createOverlay = function(pos) {
    var box;
    box = Create.div(_parent, "hilight", "moons" + _dest, {l:0, t:pos.t, h:pos.h});
    box.title = _planet.name + " Moons";
    box.onclick = UI.show;
    return box;
  },  
  //Infobox with Moonpics, Table and all-option
  createBox = function() {
    var i, j, k, t, key, box, blk, tbl, col, row, tar=[], panel, frag,
        flds = ["fname","orbit","per","diam"],
        w = [116, 225, 69, 160];

    frag = document.createDocumentFragment();
    box = Create.div(frag, "infoBox", _dest +"moons", {w:SSEH.BOXWIDTH});

    Create.closex(box);

    col = Create.div(box, "col", null, {w:SSEH.BOXWIDTH-200});
    Create.span(col, {n:_planet.name + " Moons"}, "missionTitle");
    Create.asymbol(col, {k:"ext", u:SSEH.SSELNK+_planet.name.toLowerCase()+"/moons"}, "symLnk");
    
    col = Create.div(box, "rcol", null, {w:200});
    t = Create.a(col, {n:"Show all details", u:"#"});
    t.onclick = UI.all;
    t.id = "lnkmoon" + _dest;
    
    //Moon pix
    panel = Create.div(box, "infoPanel");
    
    //Moon data
    tbl = Create.table(box, "infoTableAuto", "moonstat"+_dest);

    //sort by sma    
    for (key in _data) {
      if (!_data.hasOwnProperty(key)) continue;
      tar.push({k:key, n:parseInt(_data[key].a)-_data[key].rad}); 
    }
    tar.sort(function(a, b) { return a.n - b.n; });

    blk  = Create.thead(tbl);
    row = Create.tr(blk, "tblHead");
    for (i=0; i<flds.length; i++) {
      col = Create.td(row, Common.names.find("th"+flds[i]));
      col.style.width = px(w[i]);
    }

    blk = Create.tbody(tbl);
    for  (j=0; j<tar.length; j++) {
      key = tar[j].k;
      //Table row
      row = Create.tr(blk, "row", "linemoon"+_dest+key);
      row.title = "Click for more details";
      row.onclick = UI.toggle;
      for (i=0; i<flds.length; i++) {
        col = Create.td(row, {n:_data[key][flds[i]]||"-"}, "");
        col.onmouseover = UI.Scale.enlarge;
        col.onmouseout = UI.Scale.enlarge;
        for (k=0; k<col.childNodes.length; k++) {
          col.childNodes[k].onmouseover = UI.Scale.enlarge;          
          col.childNodes[k].onmouseout = UI.Scale.enlarge;          
        }
        col.style.width = px(w[i]);
        if (_data[key].dodraw && flds[i] == "fname") {
          col.style.fontWeight = "bold"; 
        }
      }
      //Details box
      row = Create.tr(blk, "detPanel", "detmoon" + _dest + key);
      t = Create.td(row);
      t.colSpan = "4";
      col = Create.div(t, "col", null, {w:150});
      createField(col, key, "other");
      createField(col, key, "mass");
      createField(col, key, "grav");
      createField(col, key, "temp");

      col = Create.div(t, "col", null, {w:145});
      createField(col, key, "dens");
      createField(col, key, "rot");
      createField(col, key, "tilt");
      createField(col, key, "alb");

      col = Create.div(t, "rcol", null, {w:275});
      createField(col, key, "disc");
      createField(col, key, "gr");
      createField(col, key, "comp");
      createField(col, key, "atm");
      createField(col, key, "mag");
    }
    
    drawPanel(panel, tar);
    _parent.appendChild(frag);
    return box;
  },  
  drawPanel = function(par, tar) {
    var i, x, y, dx, dy, alt, w, h, dim, img, scale, sc, t;

    dx = 10;
    sc = (SSEH.BOXWIDTH-120)/_xscale;
    scale = (_dest == "mar")?35:7;
    if (_dest != "sat") {
      for  (i=0; i<tar.length; i++) {
        key = tar[i].k;
        if  (!_data[key].img || _data[key].img === "") continue;
        dim = UI.Scale.image(_data[key], scale);
        //w = dim.w * scale;
        //h = dim.h * scale;
        x = UI.Scale.dist(_data[key], sc);
        if (x < dx) { x = dx + 5; }
        if (x + dim.w > SSEH.BOXWIDTH) { x = SSEH.BOXWIDTH - dim.w - 5; }
        y = 100 - (dim.h/2);
        dx = x + dim.w;
        img = Create.img(par, {n:_data[key].name, i:_data[key].img.src, y:y, x:x, w:dim.w, h:dim.h}, "infoImg", "picmoon"+_dest+key);
        img.onmouseover = UI.Scale.enlarge;
        img.onmouseout = UI.Scale.enlarge;
      }
    } else {
      dy = 60;
      alt = 1;
      for  (i=0; i<tar.length; i++) {
        key = tar[i].k;
        if (!_data[key].img || _data[key].img === "") continue;
        dim = UI.Scale.image(_data[key], scale);
        x = UI.Scale.dist(_data[key], sc);
        if (key.search(/janu|epim|tele|caly|poly|hele/) != -1) {
          if (key == "janu") { dx += 5; }
          if (x < dx) { x = dx; }
          y = 100 - (dy*alt);
          alt = -alt;
          if (alt > 0) { dx += 10; }
        } else {
          if (x < dx) { x = dx + 8; }
          if (x + dim.w > SSEH.BOXWIDTH) { x = SSEH.BOXWIDTH - dim.w - 5; }
          y = 100 - (dim.h/2);
          if (key.search(/^(dio|rhe)$/) != -1) { x += 8; }
          if (key.search(/^(dio|tet)$/) != -1) { dx = x + dim.w/2; }
          else { dx = x + dim.w; }
        }
        img = Create.img(par, {n:_data[key].name, i:_data[key].img.src, y:y, x:x, w:dim.w, h:dim.h}, "infoImg", "picmoon"+_dest+key);
        img.onmouseover = UI.Scale.enlarge;
        img.onmouseout = UI.Scale.enlarge;
      }
    }
  },  
  createField = function(par, key, fld) {
    if (!_data[key][fld] || _data[key][fld] === "") return; 
    Create.field(par, {n:_data[key][fld]}, fld, false);
    Create.br(par);
  };
  
  this.createBox = function() {
    _box = createBox();
    _box.style.top = px(-9999);
    _box.style.left = px(10);
  }; 

  this.getList = function() {
    var key, res = [];
    for (key in _data) {
      if (!_data.hasOwnProperty(key)) continue;
      res.push({n:_data[key].name, d:_data[key].desig, a:parseFloat(_data[key].a),r:_data[key].rad,i:parseFloat(_data[key].i)||0,img:_data[key].img});
    }
    return res;
  }; 
  
  //Draw Moon pictures on canvas
  this.draw = function(c, loc) {
    var key, dist, x, y, w, dim, sc;
    w = (loc.x)*loc.sc;
    sc = w/_scale;
    //x = loc.x;
    for (key in _data) {
      if  (_data[key].dodraw) {
        dist = UI.Scale.dist(_data[key], sc);
        if (!dist) continue;
        dim = UI.Scale.image(_data[key], 1);
        //if (dist < dim.w ) dist = dim.w;
        //if (loc.x - dist + dim.w > loc.x - dist) dist = x - dim.w;
        x = loc.x - dist;
        y = loc.y - (dim.h/2);
        if (!_data[key].cimg) {
          _data[key].cimg = Create.img(_parent, {n:_data[key].name, i:_data[key].img.src, y:y, x:x, w:dim.w, h:dim.h}, "cImg");
        } else {
          _data[key].cimg.style.left = px(x);
        }
        //c.image(_data[key].img, x, y, dim.w, dim.h)
      }
    }
    if (!_overlay) {
      _overlay = createOverlay({t:loc.y-15, h:30});
    }
    _overlay.style.left = px(loc.x-w-5);
    _overlay.style.width = px(w+5);
    
    return {x:x, y:y, w:w, h:30};
  };

  _planet.name = Common.names.find(_dest).n;
  //_planet.mass = Common.names.findMass(_dest);
  _planet.rad = Common.names.findRadius(_dest);
  
  for (key in objects) {
    if (!objects.hasOwnProperty(key)) continue;
    if (objects[key].par != _dest || objects[key].type != "m") continue;

    _data[key] = parseObject(key);

    if ((_dest != "ter" && _data[key].rad > 150) || _dest == "mar") {
      _data[key].dodraw = true;
      if (parseFloat(_data[key].a) > _scale) { _scale = parseFloat(_data[key].a); }
    }
    if (_data[key].img && _data[key].img !== "") {
      if (parseFloat(_data[key].a) > _xscale) { _xscale = parseFloat(_data[key].a); }
    }
  }
}


//Planetary Rings
function Rings(dest, parent, moons) {
  var key, t, _box, _overlay, _img, _planet, _moons, 
      _dest = dest,
      _data = {},
      _parent = parent,
      PANELHEIGHT = 110,
  //Infobox with Schematic, Table
  createBox = function() {
    var i, j, t, key, box, tar=[], tbl, blk, row, col, panel, frag,
        flds = ["fname","dist","w","h","opt"], w,
        wj = [245, 80, 80, 80, 85],
        ws = [160, 100, 110, 105, 95],
        wn = [190, 80, 110, 105, 95];

    frag = document.createDocumentFragment();
    box = Create.div(frag, "infoBox", _dest +"rings", {w:SSEH.BOXWIDTH});

    Create.closex(box);

    col = Create.div(box, "col", null, {w:SSEH.BOXWIDTH-200});
    Create.span(col, {n:_planet.name + " Rings"}, "missionTitle");
    Create.asymbol(col, {k:"ext", u:SSEH.SSELNK+_planet.name.toLowerCase()+"/rings"}, "symLnk");

    col = Create.div(box, "rcol", null, {w:200});
    t = Create.a(col, {n:"Show all details", u:"#"});
    t.onclick = UI.all;
    t.id = "lnkring" + _dest;

    //Ring diag
    panel = Create.div(box, "infoPanel", _dest + "ringpanel");
    panel.style.height = px(PANELHEIGHT);
    
    //Ring data
    tbl = Create.table(box, "infoTableAuto", "ringstat"+_dest);

    //sort by sma    
    for (key in _data) { 
      if (!_data.hasOwnProperty(key)) continue;
      tar.push({k:key, n:parseInt(_data[key].peri)}); 
    }
    tar.sort(function(a, b) { return a.n - b.n; });

    if (_dest == "jup") { w = wj; }
    else if (_dest == "nep") { w = wn; }
    else { w = ws; }
    
    blk  = Create.thead(tbl);
    row = Create.tr(blk, "tblHead");
    for (i=0; i<flds.length; i++) {
      col = Create.td(row, Common.names.find("th"+flds[i]));
      col.style.width = px(w[i]);
    }

    blk = Create.tbody(tbl);
    for  (j=0; j<tar.length; j++) {
      key = tar[j].k;
      row = Create.tr(blk, "row", "linering"+_dest+key);
      row.title = "Click for more details";
      row.onclick = UI.toggle;
      //row.onmouseover = UI.Scale.enlarge;
      //row.onmouseout = UI.Scale.enlarge;
      for (i=0; i<flds.length; i++) {
        col = Create.td(row, {n:_data[key][flds[i]]||"-"}, "");
        col.style.width = px(w[i]);
      }
      row = Create.tr(blk, "detPanel", "detring" + _dest + key);
      t = Create.td(row);
      t.colSpan = 5;
      col = Create.div(t, "col", null, {w:170});
      createField(col,key, "mass");
      createField(col,key, "comp");
      createField(col,key, "e");
      
      col = Create.div(t, "col", null, {w:170});
      createField(col,key, "alb");
      createField(col,key, "sdens");
      createField(col,key, "len");
      
      col = Create.div(t, "rcol", null, {w:230});
      createField(col,key, "disc");
      createField(col,key, "moons");
    }

    _parent.appendChild(frag);
    drawPanel(panel, tar);
    return box;
  },
  drawPanel = function(par, tar) {
    var i, t, c, h, key, imax, inner, outer, scale, x, y, r, a, line, opa, col, ang, align, dx, img, map;
    
    map = createMap(_parent, "ovl" + _dest);
    c = new Cdraw(_dest+"ringcanvas", {parent:_dest + "ringpanel", width:SSEH.BOXWIDTH, height:PANELHEIGHT});
    imax = (_dest == "sat")?tar.length-2:tar.length-1;
    inner = _planet.radius;
    t = (_dest == "sat")?_data.erng:_data[tar[imax].k];
    outer = parseFloat(t.peri) + t.rad * 2;
    if (_dest == "nep") { outer = parseFloat(_planet.radius)*3.1; }
    scale = (SSEH.BOXWIDTH-20) / (outer - inner);
    r = Math.round(inner * scale);
    x = -r + 15;
    y = PANELHEIGHT/2;
    c.fillcircle(x, y, r, _planet.col);
       
    for (i=0; i<=imax; i++) {
      key = tar[i].k;
      r = parseFloat(_data[key].a) * scale;
      line = _data[key].rad * 2 * scale;
      if (line < 0.5) { line = 1; }
      else if (line < 2) { line = 2; }
      opa = (_data[key].opa)?_data[key].opa:1;
      if (key == "erng") {
        col = c.makegradient(x+r-(line/2),y,x+r+(line/2),y,[{pos:0, col:"rgba(255,255,255,0.2)"},{pos:0.19, col:"rgba(255,255,255,0.45)"},{pos:1, col:"rgba(255,255,255,0.2)"}]);
        opa = 1;
      } else if (key == "zetcr") {
        col = c.makegradient(x+r-(line/2),y,x+r+(line/2),y,[{pos:0, col:"rgba(255,255,255,0.25)"},{pos:1, col:"rgba(255,255,255,0.4)"}]);
        opa = 1;
      } else if (key == "zetccr") {
        col = c.makegradient(x+r-(line/2),y,x+r+(line/2),y,[{pos:0, col:"rgba(255,255,255,0.05)"},{pos:1, col:"rgba(255,255,255,0.25)"}]);
        opa = 1;
      } else if (_data[key].name.search(/Division|Gap/) != -1) {
        opa = 1;
        col = "#000";
      } else { col = "#fff"; }
      if (_data[key].len && _data[key].len !== "") { ang = Math.PI/180*parseFloat(_data[key].len); }
      else { ang = Math.PI/4; }
      c.setparam("globalAlpha", opa);
      c.arc(x, y, r, ang, -ang, true, col, line);
      createArea(map, key, {x:x, y:y, r:r, w:line});
    }
    //key = tar[0].k;
    //createArea(map, _dest+"planet", {x:x, y:y, r:parseInt(_data[key].peri)*scale});

    c.setparam("globalAlpha", 1);
    c.setparam("shadowColor", "#000");
    c.setparam("shadowBlur", 1.5);
    
    for (i=1;i<10;i++) {
      r = _planet.radius * scale * i;
      if (i>1) {
        c.text(i, x+r, PANELHEIGHT-2, SSEH.SCALEFONT, "center", "#fff", "bottom");
      } else {
        c.index("R<"+_dest.substring(0,1).toUpperCase(), x+r, PANELHEIGHT-2, SSEH.SCALEFONT, "center", "#fff", "bottom");
      }
    }

    c.setparam("shadowBlur", 0);

    r = parseFloat(_planet.roche) * scale;
    // Roche Limit
    c.arc(x, y, r, Math.PI/2, -Math.PI/2, true, "#f0c", 1.5);
    if (_dest == "sat") {
      c.text("Roche Limit", x+r-2, y*2-4, SSEH.SCALEFONT, "left", "#f0c");
    } else {
      c.text("Roche Limit", x+r-6, y*2-4, SSEH.SCALEFONT, "right", "#f0c");
    }
    c.setparam("shadowBlur", 1.5);
    h = 10;
    for (i=0; i<_moons.length; i++) {
      r = _moons[i].a * scale;
      if (x+r > SSEH.BOXWIDTH) continue;
      if (_moons[i].n == "Polydeuces") { h = 15; }
      r = getR(r, y-h);
      if (x+r < 124 || x+r > SSEH.BOXWIDTH-100) {
        align = "right";
        dx = -6;
      } else {
        align = "left";
        dx = 6;
        col = "#fff";
      }
      t = Math.LOG10E*Math.log(_moons[i].r+1) + 1;
      c.fillcircle(x+r, h, t, "#fff");
      c.text(_moons[i].n, x+r+dx, h, SSEH.SCALEFONT, align, col, "middle");
      h = (h>=PANELHEIGHT-30)?10:h+15;
      //if (h == 55) h+=15;
    }
    img = Create.img(par, {i:SSEH.ICONS + "empty.png"}, "infoArea");
    img.useMap = "#ovl" + _dest;
    img.hidefocus = "true";
  },  
  createMap = function(par, n) {
    var node =  document.createElement("map");
    node.name = n;
    if (par) { par.appendChild(node); }
    return node;
  },  
  createArea = function(par, key, c) {
    var i, r, coords = [], node =  document.createElement("area");
    //node.shape = "circle";
    //node.coords = [c.x,c.y,c.r].join(", ");
    node.shape = "poly";

    if (c.w < 4) { r = c.r-2; }
    else { r = c.r - (c.w/2); }
    for (i=0; i<=PANELHEIGHT; i+=10) {
      coords.push(Math.round(c.x+getR(r,c.y-i)),i);
    }
    if (c.w < 4) { r = c.r+2; }
    else { r = c.r + (c.w/2); }
    for (i=PANELHEIGHT; i>=0; i-=10) {
      coords.push(Math.round(c.x+getR(r,c.y-i)),i);
    }
    node.coords = coords.join(",");
    node.title = _data[key].fname;
    node.id = "picring" + _dest + key;
    node.style.cursor = "url('" + Common.symbols.nozoom.src + "'), auto";
    
    node.onmouseover = UI.showRing;
    node.onmouseout = UI.showRing;
    if (par) { par.appendChild(node); }
    return node;
  },
  getR = function(r, h) {
    return Math.sqrt(r*r-h*h);
  }, 
  createOverlay = function(pos) {
    var box;
    
    box = Create.div(_parent, "hilight", "rings" + _dest, {l:0, t:pos.t, h:pos.h});
    box.title = _planet.name + " Rings";
    box.onclick = UI.show;
    return box;
  },
  createField = function(par, key, fld) {
    if (!_data[key][fld] || _data[key][fld] === "") return; 
    Create.field(par, {n:_data[key][fld]}, fld, false);
    Create.br(par);
  };
 
  this.createBox = function() {
    _box = createBox();
    _box.style.top = px(-9999);
    _box.style.left = px(10);
  }; 

  this.draw = function(c, dim) {
    var x, y, w, h, size, img = Common.symbols[_dest+"rings"];
    
    if (img.width === 0) { size = _planet.rsize.split(","); }
    else { size = [img.width, img.height]; }
    w = Math.round(size[0] * dim.w);
    h = Math.round(size[1] * dim.h);
    y = dim.y - Math.round(h/2);
    x = dim.x - Math.round(w/2);
    //c.image(_img, x, y, w, h);
    if (!_img) {
      _img = Create.img(_parent, {n:_planet.name + " Rings", i:img.src, y:y, x:x, w:w, h:h}, "cImg");
    } else {
      _img.style.left = px(x);
    }

    if (!_overlay) { _overlay = createOverlay({t:y, h:h}); }
    _overlay.style.left = px(x);
    _overlay.style.width = px(w);
    
    return {x:x, y:y, w:w, h:h};
  };

  this.getList = function() {
    var key, res = [];
    for (key in _data) {
      if (!_data.hasOwnProperty(key))  continue;
      res.push({n:_data[key].name, a:parseFloat(_data[key].a),w:_data[key].rad,h:_data[key].th,i:parseFloat(_data[key].i),opa:_data[key].opa});
    }
    return res;
  }; 
    
  if (!objects[_dest].rings || objects[_dest].rings === "") return; 
  
  _planet = {name:Common.names.find(_dest).n, mass:Common.names.findMass(_dest), radius:Common.names.findRadius(_dest), col:objects[_dest].col};
  _planet.roche = parseFloat(objects[_dest].roche) * _planet.radius;
  t = objects[_dest].desc.match(/rsize\:([^;]+)/);
  if (t !== null) { _planet.rsize = t[1]; }
  _moons = moons;
  _moons.sort(function(a, b) { return a.a - b.a; });
  
  for (key in objects) {
    if (!objects.hasOwnProperty(key)) continue;
    if (objects[key].par != _dest || objects[key].type != "r") continue;

    _data[key] = parseObject(key);
  }
}


function Sbo(type, parent) {
  var key, _sun = {}, _box, _overlay, _img,
      _type = type.substring(0,1),
      _name, _data = {}, _moondata = {},
      _parent = parent,

  createOverlay = function(pos) {
    var box;
    box = Create.div(_parent, "hilight", "sbo"+_type, {l:0, t:pos.t, h:pos.h});
    box.title = _name.n;
    box.onclick = UI.show;
    return box;
  },
  //Infobox with SBO pics, Table and all-option
  createBox = function() {
    var i, j, k, t, key, box, tar=[], tbl, blk, row, col, panel, w, frag,
        flds = ["fname","orbit","per","diam"];

    switch (_type) {
      case "a": w = [148, 195, 62, 165]; break;
      case "t": w = [156, 210, 74, 130]; break;
      case "c": w = [196, 194, 70, 110]; break;
      default:  w = [176, 210, 74, 110];
    }
    
    frag = document.createDocumentFragment();
    box = Create.div(frag, "infoBox", _type +"sbo", {w:SSEH.BOXWIDTH});

    Create.closex(box);

    col = Create.div(box, "col", null, {w:300});
    Create.span(col, _name, "missionTitle");
    Create.asymbol(col, {k:"ext", u:SSEH.SSELNK+_name.u}, "symLnk");

    if (_type == "a") {
      Create.span(col, {n:"+ 1 dwarf planet"});
      Create.asymbol(col, {k:"ext", u:SSEH.SSELNK+"ceres"}, "symLnk");
    }
    col = Create.div(box, "rcol", null, {w:200});
    t = Create.a(col, {n:"Show all details", u:"#"});
    t.onclick = UI.all;
    t.id = "lnksbo" + _type;
    
    //Body pix
    panel = Create.div(box, "infoPanel");
    
    //Body data
    tbl = Create.table(box, "infoTableAuto", "stat"+_type);

    //sort by sma   
    for (key in _data) { 
      if (!_data.hasOwnProperty(key)) continue;
      tar.push({k:key, n:Math.abs(parseFloat(_data[key].a))}); 
    }
    tar.sort(function(a, b) { return a.n - b.n; });

    blk  = Create.thead(tbl);
    row = Create.tr(blk, "tblHead");
    for (i=0; i<flds.length; i++) {
      col = Create.td(row, Common.names.find("th"+flds[i]));
      col.style.width = px(w[i]);
    }
    blk = Create.tbody(tbl);
    
    for  (j=0; j<tar.length; j++) {
      key = tar[j].k;
      drawRow(blk, _data, key, flds, w);
      for (var subkey in _moondata) {
        if (!objects.hasOwnProperty(subkey)) continue;
        if (_moondata[subkey].par === key) 
          drawRow(blk, _moondata, subkey, flds, w);
      }
    }
    
    drawPanel(panel, tar);
    _parent.appendChild(frag);
    return box;
  },
  drawRow= function(blk, _dat, key, flds, w) {
    //Table row
    var row = Create.tr(blk, "row", "linesbo"+_type+key);
    row.title = "Click for more details";
    row.onclick = UI.toggle;
    for (var i=0; i<flds.length; i++) {
      var col = Create.td(row, {n:_dat[key][flds[i]]||"-"}, "");
      col.style.width = px(w[i]);
      if (((_type !== "t" && parseFloat(_dat[key].rad) >= 100) || (_type === "t" && _dat[key].type === "d")) && flds[i] === "fname") {
        col.style.fontWeight = "bold";
      } 
      if (flds[i] === "fname" && _dat[key].type === "m") {
        col.style.paddingLeft = px(12);
        col.style.width = px(w[i]-12);
      }
      col.onmouseover = UI.Scale.enlarge;
      col.onmouseout = UI.Scale.enlarge;
      for (var k=0; k<col.childNodes.length; k++) {
        col.childNodes[k].onmouseover = UI.Scale.enlarge;          
        col.childNodes[k].onmouseout = UI.Scale.enlarge;          
      }
    }
    //Details box
    row = Create.tr(blk, "detPanel", "detsbo" + _type + key);
    var t = Create.td(row);
    t.colSpan = 4;
    col = Create.div(t, "col", null, {w:150});
    createField(col, _dat[key], "mass");
    createField(col, _dat[key], "grav");
    createField(col, _dat[key], "temp");
    createField(col, _dat[key], "peri");

    col = Create.div(t, "col", null, {w:155});
    createField(col, _dat[key], "dens");
    createField(col, _dat[key], "rot");
    createField(col, _dat[key], "alb");

    col = Create.div(t, "rcol", null, {w:250});
    createField(col, _dat[key], "disc");
    createField(col, _dat[key], "group");
    createField(col, _dat[key], "comp");    
  },
  drawPanel = function(par, tar) {
    var i, x, y, dx, dy, w, h, dim, scale, img, alt = -1;
    dx = 12;
    dy = 100;
    switch (_type) {
      case "a": scale = 14; break;
      case "c": scale = 640; break;
      case "t": scale = 7; dx = 10; break;
      default:  scale = 14; 
    }
    for  (i=0; i<tar.length; i++) {
      key = tar[i].k;
      if  (!_data[key].img || _data[key].img === "") continue;
      dim = UI.Scale.image(_data[key], scale);
      if (dim.w>24) {
        x = dx + 12;
        y = dy - (dim.h/2);
        dx = x + dim.w;
      } else {
        x = dx;
        y = dy - 60*alt - (dim.h/2);
        if (alt == 1) { dx = x + dim.w + 15; }
        alt *= -1;
      }
      img = Create.img(par, {n:_data[key].name, i:_data[key].img.src, y:y, x:x, w:dim.w, h:dim.h}, "infoImg", "picsbo"+_type+key);
      img.onmouseover = UI.Scale.enlarge;
      img.onmouseout = UI.Scale.enlarge;
    }
  },
  createField = function(par, dat, fld) {
    if (!dat[fld] || dat[fld] === "") return; 
    Create.field(par, {n:dat[fld]}, fld, false);
    Create.br(par);
  },
  findMoons = function(par) {
    for (var key in objects) {
      if (!objects.hasOwnProperty(key)) continue;
      if (objects[key].par === par && objects[key].type === "m") 
        _moondata[key] = parseObject(key);
    }
  };

  this.createBox = function() {
    _box = createBox();
    _box.style.top = px(-9999);
    _box.style.left = px(10);
  }; 
  

  this.getData = function(dest) {
    if (_data.hasOwnProperty(dest)) return _data[dest]; 
  }; 
  
  //Draw SBO pictures on canvas
  this.draw = function(c, loc) {
    var key, dist, x, y, w, h, dim, sc, img;
    
    if (_type == "a") {
      w = 100;
      h = 70;
      for (key in _data) {
        if  (_data[key].dodraw) {
          dist = (parseFloat(_data[key].a)-2.1)*h;
          dim = UI.Scale.image(_data[key], 1);
          x = loc.x - w/3 + dim.w*10;
          y = loc.y + dist;
          if (!_data[key].cimg) {
            _data[key].cimg = Create.img(_parent, {n:_data[key].name, i:_data[key].img.src, y:y, x:x, w:dim.w, h:dim.h}, "cImg");
          } else {
            _data[key].cimg.style.left = px(x);
          }
          //c.image(_data[key].img, x, y, dim.w, dim.h);
        }
      }
      if (!_overlay) { _overlay = createOverlay({t:loc.y, h:h}); }
      _overlay.style.left = px(loc.x);
      _overlay.style.width = px(w);
    } else if (_type == "t") {
      w = 160;
      h = 160;
      for (key in _data) {
        if  (key != "plu" && _data[key].dodraw) {
          dist = ((parseFloat(_data[key].a)-37)/36)*h;
          dim = UI.Scale.image(_data[key], 1);
          x = loc.x + dim.w*16 - 60;
          y = loc.y + dist;
          if (!_data[key].cimg) {
            _data[key].cimg = Create.img(_parent, {n:_data[key].name, i:_data[key].img.src, y:y, x:x, w:dim.w, h:dim.h}, "cImg");
          } else {
            _data[key].cimg.style.left = px(x);
          }
        }
      }
      if (!_overlay) { _overlay = createOverlay({t:loc.y, h:h}); }
      _overlay.style.left = px(loc.x);
      _overlay.style.width = px(w);
    } else {
      img = Common.symbols.comet;
      w = img.width;
      h = img.height;
      if (!_img) {
        _img = Create.img(_parent, {n:_name, i:img.src, y:loc.y, x:loc.x, w:w, h:h}, "cImg");
      } else {
        _img.style.left = px(loc.x);
      }
      if (!_overlay) { _overlay = createOverlay({t:loc.y-5, h:h+10}); }
      _overlay.style.left = px(loc.x-5);
      _overlay.style.width = px(w+10);
    }
    
    return {x:x, y:y, w:w, h:h};
  };
     
  _sun.name = Common.names.find("sol").n;
  _sun.mass = Common.names.findMass("sol");
  _sun.radius = Common.names.findRadius("sol");

  _name = Common.names.find(type);
  if (_type != "t") { 
    _name.n += "s";
    _name.u = _name.n.toLowerCase();
  } else {
    _name.u = "kbos";
  }
  _name.t = "_blank";

  for (key in objects) {
    if (!objects.hasOwnProperty(key)) continue;
    if (objects[key].type != _type && !(_type == "a" && key == "cer") && !(_type == "t" && key.search(/^(plu|eri|mak|hau)$/) != -1)) continue;

    _data[key] = parseObject(key);
    findMoons(key);
    
    if (_data[key].img && _data[key].img !== "") {
      if (_data[key].rad > 100) {
        _data[key].dodraw = true;
      }
    }
  }
  
}

/*Dwarf planet systems */
function Dwarf(dest, parent) {
  var key, _planet = dest, _box, _overlay, _mapbox,
      _scale = 0,
      _xscale = 0,
      _dest = dest.acr,
      _data = {},
      _parent = parent,

  createOverlay = function(pos) {
    var box;
    box = Create.div(_parent, "hilight", "moons" + _dest, {l:0, t:pos.t, h:pos.h});
    box.title = _planet.name + " & Moons";
    box.onclick = UI.show;
    return box;
  },  
  //Infobox with Map, Table and all-option
  createBox = function() {
    var i, j, k, t, key, box, blk, col, row, tar=[], panel, frag, tbl,
        flds = ["fname","orbit","per","diam"],
        w = [116, 215, 84, 155];

    frag = document.createDocumentFragment();
    box = Create.div(frag, "infoBox", _dest +"moons", {w:SSEH.BOXWIDTH});

    Create.closex(box);

    col = Create.div(box, "col", null, {w:SSEH.BOXWIDTH-200});
    Create.span(col, {n:_planet.name + " & Moons"}, "missionTitle");
    Create.asymbol(col, {k:"ext", u:SSEH.SSELNK+_planet.name.toLowerCase()+"/moons"}, "symLnk");
    
    col = Create.div(box, "rcol", null, {w:200});
    t = Create.a(col, {n:"Show all details", u:"#"});
    t.onclick = UI.all;
    t.id = "lnkdp" + _dest;
    
    //Moon pix
    panel = Create.div(box, "infoPanel", null, {w:SSEH.BOXWIDTH, h:SSEH.BOXWIDTH/2});
    
    //Moon data
    tbl = Create.table(box, "infoTableAuto", "moonstat"+_dest);

    //sort by sma    
    for (key in _data) { 
      if (!_data.hasOwnProperty(key)) continue;
      tar.push({k:key, n:parseInt(_data[key].a)}); 
    }
    tar.sort(function(a, b) { return a.n - b.n; });

    blk  = Create.thead(tbl);
    row = Create.tr(blk, "tblHead");
    for (i=0; i<flds.length; i++) {
      col = Create.td(row, Common.names.find("th"+flds[i]));
      col.style.width = px(w[i]);
    }

    blk = Create.tbody(tbl);
    for  (j=0; j<tar.length; j++) {
      key = tar[j].k;
      //Table row
      row = Create.tr(blk, "row", "linedp"+_dest+key);
      row.title = "Click for more details";
      row.onclick = UI.toggle;
      for (i=0; i<flds.length; i++) {
        col = Create.td(row, {n:_data[key][flds[i]]||"-"}, "");
        col.onmouseover = UI.Scale.enlarge;
        col.onmouseout = UI.Scale.enlarge;
        for (k=0; k<col.childNodes.length; k++) {
          col.childNodes[k].onmouseover = UI.Scale.enlarge;          
          col.childNodes[k].onmouseout = UI.Scale.enlarge;          
        }
        col.style.width = px(w[i]);
        if (_data[key].dodraw && flds[i] == "fname") {
          col.style.fontWeight = "bold"; 
        }
      }
      //Details box
      row = Create.tr(blk, "detPanel", "detdp" + _dest + key);
      t = Create.td(row);
      t.colSpan = 4
      col = Create.div(t, "col", null, {w:150});
      createField(col, key, "other");
      createField(col, key, "mass");
      createField(col, key, "grav");
      createField(col, key, "temp");

      col = Create.div(t, "col", null, {w:130});
      createField(col, key, "dens");
      createField(col, key, "rot");
      createField(col, key, "tilt");
      createField(col, key, "alb");

      col = Create.div(t, "rcol", null, {w:275});
      createField(col, key, "disc");
      createField(col, key, "group");
      createField(col, key, "comp");
      createField(col, key, "atm");
      createField(col, key, "mag");
    }
    
    drawPanel(panel, tar);
    _parent.appendChild(frag);
    return box;
  },  
  drawPanel = function(par) {
    var t, key, map, img, pos,
        areas = {plu:{x:307,y:118}, cha:{x:375,y:133}, nix:{x:190,y:84},
                 hydr:{x:564,y:110}, kerb:{x:532,y:130}, styx:{x:326,y:212}};
    //map = createMap(par, "ovl" + _dest);
    _mapbox = Create.div(par, "infoMap", "map"+_dest, {w:SSEH.BOXWIDTH, h:SSEH.BOXWIDTH/2});
    _mapbox.style.top = px(0);
    if (_planet.map) {
      _mapbox.style.display = "none";
      img = SSEH.MAPS + _planet.map;
      _planet.map = new Image();
      _planet.map.onload = function() {
        _mapbox.style.height = this.height > 0?px(Math.round(parseInt(this.height)/parseInt(this.width)*SSEH.BOXWIDTH)+32):px(Math.round(parseInt(this.naturalHeight)/parseInt(this.naturalWidth)*SSEH.BOXWIDTH)+32); _mapbox.style.display = "block"; };
      _planet.map.src = img;
    }
    _mapbox.appendChild(_planet.map);

    for (key in _data) {
      if (!_data[key].img || _data[key].img === "") continue;
      pos = areas[key];
      dim = UI.Scale.image(_data[key], 2);
      if (dim.w < 8) dim = {w:8, h:8*dim.h/dim.w}
      img = Create.img(_mapbox, {n:_data[key].name, i:_data[key].img.src, y:pos.y, x:pos.x, w:dim.w, h:dim.h}, "infoImg", "picdp"+_dest+key);
      img.onmouseover = UI.Scale.enlarge;
      img.onmouseout = UI.Scale.enlarge;
    }
  },  
  createField = function(par, key, fld) {
    if (!_data[key][fld] || _data[key][fld] === "") return; 
    Create.field(par, {n:_data[key][fld]}, fld, false);
    Create.br(par);
  };
  
  this.createBox = function() {
    _box = createBox();
    _box.style.top = px(-9999);
    _box.style.left = px(10);
  }; 

  this.getList = function() {
    var key, res = [];
    for (key in _data) {
      if (!_data.hasOwnProperty(key)) continue;
      res.push({n:_data[key].name, d:_data[key].desig, a:parseFloat(_data[key].a),r:_data[key].rad,i:parseFloat(_data[key].i)||0,img:_data[key].img});
    }
    return res;
  }; 
  
  //Draw Planet & Moon pictures on canvas
  this.draw = function(c, loc) {
    var key, dist, x, y, w, dim, sc;
    w = (loc.x)*loc.sc/2;
    sc = w/_scale;

    for (key in _data) {
      if  (_data[key].dodraw) {
        dist = UI.Scale.dist(_data[key], sc);
        if (!dist) continue;
        dim = UI.Scale.image(_data[key], 1);
        x = loc.x - dist;
        y = loc.y - (dim.h/2);
        if (!_data[key].cimg) {
          _data[key].cimg = Create.img(_parent, {n:_data[key].name, i:_data[key].img.src, y:y, x:x, w:dim.w, h:dim.h}, "cImg");
        } else {
          _data[key].cimg.style.left = px(x);
        }
        //c.image(_data[key].img, x, y, dim.w, dim.h);
      }
    }
    if (!_overlay) {
      _overlay = createOverlay({t:loc.y-15, h:30});
    }
    _overlay.style.left = px(loc.x-w-5);
    _overlay.style.width = px(w+20);
    
    return {x:x, y:y, w:w, h:30};
  };

  for (key in objects) {
    if (!objects.hasOwnProperty(key)) continue;
    if (objects[key].par != _dest || objects[key].type != "m") continue;

    _data[key] = parseObject(key);

    if (_data[key].rad > 150) {
      _data[key].dodraw = true;
      if (parseFloat(_data[key].a) > _scale) { _scale = parseFloat(_data[key].a); }
    }
    if (_data[key].img && _data[key].img !== "") {
      if (parseFloat(_data[key].a) > _xscale) { _xscale = parseFloat(_data[key].a); }
    }
  }
  _data[_dest] = parseObject(_dest);
  _data[_dest].dodraw = true;

}
