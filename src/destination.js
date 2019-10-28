/* global Create, Common, SSEH, UI, px, SPanel, Panel, Parse, Cdraw, Moons, Rings, Sbo, Dwarf, parseObject */

//Objects targeted by missions
function Destination(dest, parid) {
  var _parent,
      _dest = dest,
      _stats = {},  //type:{all, s, p, f, o, pl}
      _data = {},
      _locations = [],
      _img, _moons, _rings, _com, _ast, _pluto,
      _box, _mapbox, _overlay, _panel,
  
  //Planet information box
  createBox = function() {  
    var n, i, box, t, lnk, row, col, sp, frag, w = [260, 130, 210], img,
    wsbo = [250, 180, 150];

    if (_dest == "sbo" || _dest == "tno") { w = wsbo; }
    
    frag = document.createDocumentFragment();
    box = Create.div(frag, "infoBox", _dest+"info", {w:SSEH.BOXWIDTH});

    Create.closex(box);
    
    //Name + Params
    row = Create.div(box, "header", null, {w:SSEH.BOXWIDTH});
    row.title = "Click for more details";
    row.style.cursor = "pointer";
    row.onclick = UI.toggle;

    col = Create.div(row, "col", null, {w:w[0]});
    Create.symbol(col, _dest, "symbol");
    Create.span(col, {n:_data.name}, "missionTitle");
    Create.asymbol(col, {k:"ext", u:_data.hp}, "symLnk");
    if (_data.url) {
      if (_data.url[0].k) { Create.asymbol(col, _data.url[0], "symPict"); }
    }
    Create.br(col);
    t = Create.symbol(col, "down", "symDetail");
    t.id = _dest+"downlnk";
    Create.field(col, _data.orbit, "orbit", false);  //Orbit shape
    if (_dest == "sbo" || _dest == "tno") { Create.span(col, {n:"\u00a0"}); }
    //moons
    col = Create.div(row, "col", null, {w:w[1]});
    t = Create.field(col, _data.nmoons, "nmoons", false, null, "infoLnk");
    if (t) { t.onclick = function() { UI.showBox("moons"+_dest); }; }
    if (_dest == "sol") {
      Create.field(col, "8+5 Dwarf", "planets", false);
    }
    if (_dest == "sbo") {
      t = Create.field(col, _data.ast, "ast", false, null, "infoLnk");   //Asteroids
      t.onclick = function() { UI.showBox("sboa"); };
      Create.field(col, _data.com, "com", true, null, "infoLnk");   //Comets
      t.onclick = function() { UI.showBox("sboc"); };
    }
    if (_dest == "tno") {
      t = Create.field(col, _data.tno, "tno", false, null, "infoLnk");   //TNOs
      t.onclick = function() { UI.showBox("sbot"); };
    }
    Create.field(col, _data.per, "per");   //Orbital period

    col = Create.div(row, "rcol", null, {w:w[2]});
    Create.field(col, {n:""}, "misn", false, null, null, "missionstat" + _dest);
    Create.field(col, _data.diam, "diam", true);

    row = Create.div(box, "detail", null, {t:41, w:SSEH.BOXWIDTH-10});

    if (_dest == "sbo" || _dest == "tno") {
      row.style.height = px(40);
      col = Create.div(row, "col", null, {w:575});
      Create.field(col, _data.census, "cen", false);   
    } else {    
      col = Create.div(row, "col", null, {w:180});
      Create.field(col, _data.rot, "rot", false);   
      Create.field(col, _data.mass, "hmass");   
      Create.field(col, _data.temp, "temp");   
      Create.field(col, _data.irad, "irad");   

      col = Create.div(row, "col", null, {w:125});
      Create.field(col, _data.tilt, "tilt", false);   
      Create.field(col, _data.dens, "dens");  
      Create.field(col, _data.grav, "grav");   
      Create.field(col, _data.alb, "alb");   

      col = Create.div(row, "rcol", null, {w:270});
      Create.field(col, _data.disc, "disc", false);  
      Create.field(col, _data.comp, "comp");   
      Create.field(col, _data.atm, "atm");   
      Create.field(col, _data.mag, "mag");   
    }
    _parent.appendChild(frag);
    //Map image or panel    
    if (_dest == "sol") {
      _mapbox = Create.div(box, "infoMap", "map"+_dest, {w:SSEH.BOXWIDTH, h:SSEH.BOXWIDTH/2});
      _mapbox.style.height = px(SSEH.BOXWIDTH/2 + 32);

      new SPanel(_mapbox.id);
    } else if (_dest.search(/jup|sat|ura|nep/) != -1) {
      _mapbox = Create.div(box, "infoMap", "map"+_dest, {w:SSEH.BOXWIDTH, h:SSEH.BOXWIDTH/2});
      _mapbox.style.height = px(SSEH.BOXWIDTH/2 + 32);

      new Panel(_mapbox.id, _dest, _moons.getList(), _rings.getList());
    } else if (_data.map) {
      _mapbox = Create.div(box, "infoMap", "map"+_dest, {w:SSEH.BOXWIDTH});
      _mapbox.style.display = "none";
      img = SSEH.MAPS + _data.map;
      _data.map = new Image();
      _data.map.onload = function() { _mapbox.style.height = this.height > 0?
 px(Math.round(parseInt(this.height)/parseInt(this.width)*SSEH.BOXWIDTH)+32):
 px(Math.round(parseInt(this.naturalHeight)/parseInt(this.naturalWidth)*SSEH.BOXWIDTH)+32); _mapbox.style.display = "block"; };
      _data.map.src = img;
      _mapbox.appendChild(_data.map);
    }
    
    //Statistics table
    Create.table(box, "infoTable", "stat"+_dest);
    drawTableDest();
    if (_locations.length > 0) { drawMap(); }

    return box;
  },
  //Draw statistics table and map positions  
  drawTableDest  = function() { 
    var i, t, key, tr, flds = ["all","s","p","f","lf","o","pl"],
        tbl, tstat, frag;
    
    tbl = document.getElementById("stat" + _dest);
    frag = document.createDocumentFragment();
    
    //calculate sums
    for (key in _stats) {
      if (_stats.hasOwnProperty(key)) {
        _stats[key].all = Parse.sumType(_stats[key]);
      }
    }
/*    _stats.all = {all:0,f:0,lf:0,p:0,s:0,o:0,pl:0};
    for (i=0; i<flds.length; i++) {
      _stats.all[flds[i]] = Parse.sumField(_stats, flds[i]);
    }*/
    //Format Completed missions and success rate in head
    t = _stats.all.s + _stats.all.p + _stats.all.f + _stats.all.lf + _stats.all.o;
    if (t > 0) {
      /*tstat = t + " (";
      t = Round((_stats["all"].s + _stats["all"].p)/t*100, 0);
      tstat += t + "% success)";*/
      tstat = t.toString() + "\u2009/\u2009" + (_stats.all.s + _stats.all.p).toString() +  "\u2009/\u2009" + _stats.all.o + "\u00a0/\u2009" + _stats.all.pl + "\u00a0";
    } else {
      tstat = "-";
    }
    document.getElementById("missionstat" + _dest).innerHTML = tstat;

    //Format special fields sp: success (part.), fl: fail (launch)
    for (key in _stats) {
      if (_stats.hasOwnProperty(key)) {
        _stats[key].sp = (_stats[key].s + _stats[key].p).toString() + " (" + _stats[key].p + ")";
        _stats[key].fl = (_stats[key].f + _stats[key].lf).toString() + " (" + _stats[key].lf + ")";
      }
    }
    
    flds = ["sp","fl","o","pl","all"];
    
    //header
    tr = Create.tr(frag, "tblHead");
    Create.td(tr, {n:" "});
    for (i=0; i<flds.length; i++) {
      Create.td(tr, Common.names.find(flds[i]));
    }
    //rows from mtype
    for  (key in SSEH.mtype) {
      if (_stats[key]) {
        tr = Create.tr(frag);
        Create.td(tr, Common.names.find(key));
        for (i=0; i<flds.length; i++) {
          Create.td(tr, {n:_stats[key][flds[i]]});
        }
      }
    }
    //all
    tr = Create.tr(frag);
    Create.td(tr, {n:"All*", l:"Missions with multiple parts get only counted once, except with different statuses"});
    for (i=0; i<flds.length; i++) {
      Create.td(tr, {n:_stats.all[flds[i]]});
    }
    tbl.appendChild(frag);
  },
  drawMap  = function() { 
    var key, ar, cnv, c, t, i, j, coord, col, mark = [], name, ctry, orient, title, id, l,
        map = document.getElementById("map" + _dest),
        frag = document.createDocumentFragment();

    
    c = new Cdraw("cmap" + _dest, {className:"infoCanvas", parent:"map" + _dest, width:SSEH.BOXWIDTH, height:SSEH.BOXWIDTH/2, font:SSEH.TEXTFONT, color:SSEH.TEXTCOL});

    //c.scale(1,1);
    for (i=0; i<_locations.length; i++) {
      col = _locations[i].t == "imp"?"#fc9":"#d9f";
      coord = transformLoc(_locations[i].c);
      name = _locations[i].n.split(":");
      orient = _locations[i].o;
      drawSymbol(c, coord, col, name[0], orient);
      _locations[i].id = getId(name);
      t = createMarker(c, frag, name, coord, orient, _locations[i].id);
      createPopup(t, _locations[i], coord);
    }
    
    if (_dest == "ter") {
      l = SSEH.lc.split(",");
      for (j=0; j<l.length; j++) {
        if (l[j] === "") continue;
        key = l[j];
        if (Common.lc[key].hasOwnProperty("desc")) {
          ar = Common.lc[key].desc.match(/loc\:([^\b;]+)/);
          if (ar !== null) {
            i++;
            coord = transformLoc(ar[1]);
            col = "#0f0";
            name = checkName(Common.lc[key].name, Common.lc[key].desc);
            orient = checkOrient(Common.lc[key].desc);
            drawSymbol(c, coord, col, name, orient);            
            t = Common.lc[key].name.split(":");
            title = t.length>1?t[1]:t[0];
            ctry = checkReg(Common.lc[key].desc);
            id = getId(t);
            t = createMarker(c, frag, [name,title], coord, orient, id);
            createPopup(t, {n:name+":"+title,c:ar[1],de:ctry,id:id}, coord);
          }
        }
      }
    }
    
    map.appendChild(frag);    
  },
  createMarker = function(c, parent, txt, coord, orient, id) {
    var res, ori = orient || "NE",  pos;
    
    pos = getPos(c, txt[0], ori);
    res = Create.div(parent, "mapMark", null, {l:coord.x+pos.x, t:coord.y+pos.y, w:pos.w});

    return res;
  },
  //Transform geo to xy-coordinates
  transformLoc = function(s) {
    var res, t, cl, x, y, w, h;
    if (!s) return; 
    t = Parse.pos(s);
    res = {};
    w = SSEH.BOXWIDTH/2;
    h = w/2;
    cl = t.split(",");
    
    y = (-parseFloat(cl[0])/90 + 1) * h;
    x = (parseFloat(cl[1])/180 + 1) * w;
    
    return {x:Math.round(x), y:Math.round(y)};
  },
  //alt. name?
  checkName = function(name, desc) {
    var ar, n, l;
    ar = desc.match(/show\:([^\b;\:]+)/);
    if (ar === null) { n = name.slice(0,3); 
    } else { n = ar[1]; }
    return n;
  },
  //regional info?
  checkReg = function(desc) {
    var ar, n, l;
    ar = desc.match(/reg\:([^\b;\:]+)/);
    if (ar === null) return; 
    else return ar[1];
  },
  //alt. orientation?
  checkOrient = function(desc) {
    var ar, n, l;
    ar = desc.match(/show\:[^\:;]+\:([^\b;]+)/);
    if (ar === null) return "NE"; 
    else return ar[1]; 
  },
  getPos = function(c, txt, ori) {
    var res, x, y, w, h, pos = c.relPos(ori, 5);
    
    h = 12;
    w = c.textwidth(txt, SSEH.SCALEFONT)+6;
    x = pos.x - 6;    
    if (pos.h == "right") { 
      x -= w - h; 
    } else if (pos.h == "center") { 
      x -= Math.round(w/2)-6; 
    }
    
    y = pos.y;
    if (pos.v == "bottom") { 
      y -= h; 
    } else if (pos.v == "middle") { 
      y -= Math.round(h/2); 
    } else if (pos.v == "top") { 
      y -= 4; 
    }
    return {x:x, y:y, w:w};
  }, 
  drawSymbol = function(c, loc, col, n, o) {
    var l=4;
    c.cross(loc.x,loc.y,l,col,2);
    if (n) { c.label(n, loc.x, loc.y, l, o, SSEH.SCALEFONT, col); }
  },
  getId = function(name) {
    var id = _dest + name[0].replace(/\s/g, "");
    return id;
  },
  createPopup = function(par, loc, pos) {
    var box, id, name, l, td, w = SSEH.POPWIDTH, x = parseInt(par.style.left);
    //loc.n, loc.d, loc.c, loc.de, loc.t
    name = loc.n.split(":");
    id = loc.id; //_dest + name[0].replace(/\s/g, "");

    l = -w/2; 
    if (l+x < 2) { l = -x+2; }
    if (x-l > SSEH.BOXWIDTH-14) { l = -w+(SSEH.BOXWIDTH-x)-14; }
    
    box = Create.div(par, "mapPopup", id, {l:l});
    Create.span(box, {n:name[1]}, "missionTitle");
    Create.br(box);

    if (loc.t) {
      td = (loc.t == "imp")?"imp":"edl";
      Create.symbol(box, td, "symIcon");
      //Create.text(box, td);
    }
    if (loc.d) {
      Create.span(box, {n:loc.d});
      Create.br(box);
    }
    Create.span(box, {n:Parse.position(loc.c)});
    Create.br(box);

    if (loc.de) {
      Create.span(box, {n:loc.de});
    }
    
    return id;
  },
  scaleImage = function() {
    var i, sc, sci, img = _data.img;
    if (!_data.rad || _data.scale === 0) return {w:img.width, h:img.height}; 
    sc = _data.rad * _data.scale * 2 / SSEH.SCALE;
    sci = img.width===0?1:img.height/img.width;
    return {w:Math.round(sc), h:Math.round(sc*sci)};
  },    
  createOverlay = function(dim) {
    var box, t, l, h, w;
    if (dim.w < 20) { t = dim.t-5; w = dim.w+10; h = dim.h+10; 
    } else { t = dim.t; w = dim.w; h = dim.h; }
    
    box = Create.div(_parent, "hilight", "info"+_dest, {l:0, t:t, h:h, w:w});
    if (_dest.search(/sol|sbo|tno/) == -1) { box.style.borderRadius = px(Math.round(w/2)); }
    box.title = _data.name;
    box.onclick = UI.show;
    return box;
  },
  drawScale = function(c, top, width) {
    var i, r, l, t, yr0, yr1, yr, col = "#fff",
        height = UI.Height()-SSEH.EXTRA;   
    t = top+16;
    l = UI.Scale.time(SSEH.STARTDATE, width);
    r = UI.Scale.time(SSEH.ENDDATE, width);
    yr0 = SSEH.STARTDATE.getFullYear()+1;
    yr1 = SSEH.ENDDATE.getFullYear();
    yr  = new Date(yr0, 0, 1);
    
    //c.hline(l, t, r-l, col, 1.5);

    for (i=yr0; i<=yr1; i++) {
      yr.setFullYear(i);
      l = UI.Scale.time(yr, width);
      if (i % 5 === 0) {
        c.text(i.toString(), l, t, SSEH.SCALEFONT, "center", col, "bottom");
        c.vline(l, t, 5, col, 1.2);
      } else {
        c.vline(l, t, 3, col, 0.95);
      }
    }
    
    if (dest == "sol") {
      l = UI.Scale.time(new Date(), width);
      c.vline(l, t, height-t, "#ccc", 0.4);
    }
    return t + 10;   
  };
 
 
  this.drawImage = function(c, top, width) {
    var dim, x, y, h, t, pos, redge, sc;

    sc = _dest.search(/jup|sat/) !== -1 ? 240 : 120;
    dim = scaleImage();
    y = (_dest === "sol") ? 0 : top + 26;
    x =  Math.round((width - dim.w + SSEH.BEVEL) / 2);
    //c.image(_data.img, x, y, w, h);
    if (!_img) {
      _img = Create.img(_parent, {n:_data.name, i:_data.img.src, y:y, x:x, w:dim.w, h:dim.h}, "cImg");
    } else {
      _img.style.left = px(x);
    }
    if (!_overlay && _dest .search(/ura|nep/) === -1) { _overlay = createOverlay({t:y-1, w:dim.w, h:dim.h}); }
    if (_data.nrings > 0) { pos = _rings.draw(c, {x:(width+SSEH.BEVEL)/2, y:y+(dim.h/2), w:dim.w/sc, h:dim.h/sc});  }
    redge = pos ? pos.x - 5 : x - 5;
    if (_data.nmoons > 0 && _dest != "ter") { _moons.draw(c, {x:redge, y:y+(dim.h/2), sc:_data.scmoons}); }
    if (_dest === "sbo") { 
      _com.draw(c, {x:(width+SSEH.BEVEL)/5*3, y:y-15, sc:_data.scmoons}); 
      _ast.draw(c, {x:(width+SSEH.BEVEL)/4, y:y+40, sc:_data.scmoons}); 
    }
    if (_dest == "tno") { 
      _ast.draw(c, {x:(width+SSEH.BEVEL)/5, y:y+40, sc:_data.scmoons}); 
      _pluto.draw(c, {x:(width+SSEH.BEVEL)/2+20, y:y+54, sc:_data.scmoons}); 
      //pluto
    }
    //correct overlay width for large images
    if (x < 0) {  dim.w = width-2; x = 1;
    } else if (dim.w+x > width) {  dim.w = width-x-2;  }

    t = y+dim.h;
    if (!_overlay && _dest .search(/ura|nep/) != -1) { _overlay = createOverlay({t:y-1, w:dim.w, h:dim.h}); }
    if (dim.w < 20) { dim.w +=10; x -= 5; }
    _overlay.style.left = px(x-1);
    _overlay.style.width = px(dim.w);

    if("sol,ven,ter,lun,mar,sbo,sat".search(_dest) == -1) { t += 12; }
    else { t = drawScale(c, t, width-10); }
    
    return t;
  };

  //record statistics
  this.record = function(mission) {
    var i, stat, st1, st2, loc, type;

    if (_dest == "sbo") {
      st1 = mission.Achievements("ast");
      st2 = mission.Achievements("com");
      if (st1 && st2) { stat = st1.concat(st2); 
      } else if (!st2) { stat = st1; 
      } else if (!st1) { stat = st2; }
    } else {
      stat = mission.Achievements(_dest);
    }

    if (_dest.search(/^mer|ven|ter|lun|mar$/) != -1) {
      loc = mission.Locations(_dest);
      if (loc) { _locations = _locations.concat(loc); }
    }
    
    if (!stat) return; 
    
    for (i=0; i<stat.length; i++) {
      if ((stat[i].d2 == "phob" && _dest == "mar") || stat[i].d2 == "tita" || stat[i].d2 == "gany") {
        //Secondary destination Phobos or Titan
        type = stat[i].d2.slice(0,2) + stat[i].t;
        Common.names.createIf(type, Common.names.find(stat[i].d2).n + " " + Common.names.find(stat[i].t).n);
        SSEH.mtype[type] = {n:""};
      } else {
        type = stat[i].t;
      }
      if (!_stats[type]) { _stats[type] = {f:0,lf:0,p:0,s:0,o:0,pl:0}; }
      _stats[type][stat[i].s]++; 
    }
  };

  this.Height = function() {
    var dim, h= 48;
    if (_data.rsize) return parseInt(_data.rsize[1])+h; 
    dim = scaleImage();
    return dim.h+h;
  };

  this.Box = function() {
    return _box;
  };

  this.Name = function() {
    return _data.name;
  };

  this.createBox = function() {
    var width = UI.Width();
    _box = createBox();
    _box.style.top = px(-9999);
    _box.style.left = px(Math.round((width - SSEH.BOXWIDTH + SSEH.BEVEL) / 2));
    if (_moons) { _moons.createBox(); }
    if (_rings) { _rings.createBox(); }
    if (_com) { _com.createBox(); }
    if (_ast) { _ast.createBox(); }
    if (_pluto) { _pluto.createBox(); }
    return _box; 
  };
  
  if (parid) { _parent = document.getElementById(parid); }
  if (!_parent) { _parent = document.getElementsByTagName("body")[0]; }

  _data = parseObject(_dest);

  if (_data.nmoons > 0 && _dest != "ter") { _moons = new Moons(_dest, _parent); }
  if (_data.nrings > 0) { _rings = new Rings(_dest, _parent, _moons.getList()); } 
  if (_dest == "sbo") { _com = new Sbo("com", _parent);  _ast = new Sbo("ast", _parent); }
  if (_dest == "tno") { _ast = new Sbo("tno", _parent); _pluto = new Dwarf(_ast.getData("plu"), _parent); }

  Common.sprites[_dest] = {n:_data.name, x:_data.x, y:_data.y};
}
