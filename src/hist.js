/* global Common, UI, SSEH, Create, px, objects, missions, Mission, Destination, logError, LC, LV, Names, Cdraw, Info */

var Hist = new (function() {
  var current, cw, psort = [], msort = [], lvsort = [], lcsort = [],
      width = 0, height = 0, 
      probes = {}, bodies = {}, lvs = {}, lcs = {},
      parent, info, cnv, cnt, count, numImages, countImages = 0, prog = 0,
      waitmsg, iscancelled = false,
      
  draw = function() {
    var key, h, t;
    
    //if (!isNumber(height) || height < 1000 ) { height = 6055; };
    height = UI.Height(SSEH.EXTRA);
    cw.style.height = px(height);
    width = UI.Width();
    cw.style.width = px(width);
    document.getElementById("canvas-wrap").style.height = px(height);
    try {
      t = document.getElementsByClassName("loadImg");
      if (t) { t[0].style.display = "none"; }
      t = document.getElementById("imgCC");
      if (t) { t.style.display = "none"; }
    } catch (e) {}
      
    cnv.setwidth(width);
    cnv.setheight(height);
    //background
    cnv.fillrect(0, 0, width, height, SSEH.BGCOL);
    h = 0;
  
    for (key in bodies) {
      if (bodies.hasOwnProperty(key)) {
        h = bodies[key].drawImage(cnv, h, width);      
        h = drawMissions(key, h);
      }
    }

    drawOuter(h);
    if (info) { info.draw(cnv); }
    return h;
  },
  drawMissions = function(dest, h) {
    var key;
    for (key in probes) {
      if (probes.hasOwnProperty(key)) {
        if (probes[key].hasDest(dest)) { 
          h = probes[key].drawTimeline(cnv, h, width-10, dest);
        }
        bodies[dest].record(probes[key]);
      }
    }
    return h;
  },
  drawOuter = function(h) {
    var i, pos, px, py, img, sc = 2, x = width/2, y = h + 120, 
        p = ["pioneer10", "pioneer11", "voyager1", "voyager2"];
    img = cnv.makeradialgradient(x, 0, y, x, 0, y+120, [{pos:0, col:"rgba(255,255,0,0)"}, {pos:0.01, col:"rgba(255,255,0,0.36)"}, {pos:0.1, col:"rgba(255,255,0,0.25)"}, {pos:0.3, col:"rgba(255,255,0,0.15)"}, {pos:1, col:"rgba(255,255,0,0)"}]);  
    cnv.fillcircle(x, 0, y+120, img);
    //y = 85 AU, y+80 = 125 AU
    for (i=0; i<p.length; i++) {
      probes[p[i]].drawEscape(cnv, y, x);
    }
  },
  drawTitle = function() {
    var img, ttl = Create.div(parent, "histTitle", "histTtl", {t:height-20});
    img = new Image();
    img.src = Common.symbols.cc.src;
    Create.text(ttl, SSEH.TITLE + " " + SSEH.VERSION + "\u00a0");
    ttl.appendChild(img);
    Create.text(ttl, "\u00a0" + SSEH.DATE + SSEH.AUTHOR);
  },
  //UI.width
  getWidth = function() {
    var w = 0;
    if (document.documentElement.clientWidth) {
      w = document.documentElement.clientWidth;
    } else {
      w = window.innerWidth;
    }
    if (w === 0 || w < 700) { w = 700; }
    return w;
  },
  showProgress = function() {
    var txt ="Loading",
        tfnt = "bold 32px sans-serif",
        fnt = "bold 16px sans-serif",
        w = cnv.textwidth(txt,fnt),
        h = window.innerHeight,
        t = h*0.3,// + parent.scrollTop,
        line = 16, 
        l = Math.PI/220,
        w2, i1, i2;
         
    if (prog === 0) {
      width = window.innerWidth;//getWidth();  
      cnv.setwidth(width);
      cnv.setheight(h);
      w2 = cnv.textwidth(SSEH.TITLE, tfnt);
      cw.style.height = px(h);
      cw.style.cursor = "progress";
      i1 = Create.img(parent, {i:SSEH.PATH + "lo.png"}, "loadImg");
      i1.style.top = px(h-width/2.84);
      cnv.text(SSEH.TITLE, width/2, h*0.16, tfnt, "center", "#fff", "bottom");
      cnv.text(SSEH.CLICK, width/2, h*0.176, fnt, "center", "#fff", "top");
      cnv.text(txt, width/2, t, fnt, "center", "#000", "middle");
      
      cnv.text("Version " + SSEH.VERSION, width-270, h-2, fnt, "right", "#fff", "bottom");
      i2 = Create.img(parent, {i:SSEH.ICONS+"cc.png", x:width-258, y:h-18}, "cImg", "imgCC");
      cnv.text(SSEH.DATE + SSEH.AUTHOR, width-170, h-2, fnt, "left", "#fff", "bottom");
    } else {
      drawMoon(width/2+1, t);
      cnv.save();
      cnv.scale(1,0.333);
      cnv.arc(width/2, t*3, 50,-l*60,l*prog, false, "rgba(204,153,102,0.5)", 1);
      cnv.restore();
    }
    if (count === 0 || prog < count) { prog++; }
  },
  drawMoon = function(x, y) {
    var e = 2*Math.abs((prog+countImages)/(count+numImages)-0.51) + 0.01,
        r = 33,
        term = Math.abs((prog+countImages)/(count+numImages)) < 0.5;
    cnv.save();      
    cnv.setparam("globalCompositeOperation", "destination-over");
    cnv.startp(x, y-r, "#fff", 1);
    cnv.arcp(x, y, r, -Math.PI/2, Math.PI/2, true);
    cnv.scale(e, 1); 
    cnv.arcp(x/e, y, r, Math.PI/2, -Math.PI/2, !term);
    cnv.endp(null, null, true);
    //cnv.setparam("globalCompositeOperation", "source-over");
    cnv.restore();
  },
  loadSymbols = function() {
    var n, key, ar, res = {};
      
    n = 0;
    
    for (key in SSEH.images) {
      if (SSEH.images.hasOwnProperty(key)) {
        res[key] = new Image();
        res[key].src = SSEH.images[key];
        if (SSEH.images[key].search(/\.cur/) == -1) {
          res[key].onload = Hist.Count;
          n++;
        }
      }
    }
    
    for (key in objects) {
      if (objects.hasOwnProperty(key)) {
        if (objects[key].img && objects[key].img !== "") {
          res[key] = new Image();
          res[key].src = SSEH.PLANETS + objects[key].img;   
          if (objects[key].ind) {
            res[key].onload = Hist.Count;
            n++;
          }
        }
        if (objects[key].imgo && objects[key].imgo !== "") {
          res[key+"orig"] = new Image();
          res[key+"orig"].src = SSEH.PLANETS + objects[key].imgo;
        }
        if (objects[key].rings && objects[key].rings !== "") {
          res[key+"rings"] = new Image();
          res[key+"rings"].src = SSEH.PLANETS + objects[key].rings;
          res[key+"rings"].onload = Hist.Count;
          n++;
        }
      }
    }
    numImages = n;
    return res;
  },
  loadSprites = function() {
    var key, ar, t, res = {};
    
    for (key in SSEH.icons) {
      if (SSEH.icons.hasOwnProperty(key)) {
        ar = SSEH.icons[key].desc.match(/x\:(\d+);y\:(\d+)/);
        if (ar !== null) {
          res[key] = {n:SSEH.icons[key].name, x:ar[1], y:ar[2]};
        }
      }
    }
    for (key in Common.ctry) {
      if (Common.ctry.hasOwnProperty(key)) {
        ar = Common.ctry[key].desc.match(/x\:(\d+);y\:(\d+)/);
        if (ar !== null) {
          res[key] = {n:Common.ctry[key].name, x:ar[1], y:ar[2]};
        }
      }
    }
    for (key in Common.desc) {
      if (!Common.desc[key].hasOwnProperty("desc")) continue;
      ar = Common.desc[key].desc.match(/x\:(\d+);y\:(\d+)/);
      if (ar !== null) {
        t = Common.desc[key].name.split(":");
        t = t.length > 1?t[1] + " (" + t[0] + ")":t[0];
        res[key] = {n:t, x:ar[1], y:ar[2]};
      }
    }
    for (key in Common.loc) {
      if (!Common.loc[key].hasOwnProperty("desc")) continue;
      ar = Common.loc[key].desc.match(/x\:(\d+);y\:(\d+)/);
      if (ar !== null) {
        t = Common.loc[key].name.split(":");
        t = t.length > 1?t[1] + " (" + t[0] + ")":t[0];
        res[key] = {n:t, x:ar[1], y:ar[2]};
      }
    }

    return res;
  },
  sortData = function(a, b) { return (a.d <= b.d?-1:1); };

  this.list = function() {  };
    
  this.load = function() {
    var key, i;
    
    height = 0;
    count = 0;
    UI.boxwidth = SSEH.BOXWIDTH;
    UI.scale = SSEH.SCALE;
    UI.bevel = SSEH.BEVEL;
    UI.left = SSEH.STARTDATE.valueOf();
    UI.right = SSEH.ENDDATE.valueOf();
    SSEH.lc = "";
    
    showProgress();  
    for (key in missions) {
      if (!missions.hasOwnProperty(key)) continue;
      msort.push({n:key, d:missions[key].events[0].dt});
      count++;
    }
    msort.sort(sortData);
    
    for (key in objects) {
      if (objects[key].ind && objects[key].ind.search(/^\d+$/) != -1) {
        psort.push({n:key, d:parseInt(objects[key].ind)});
        count++;
      }
    }
    psort.sort(sortData);
    
    for (key in Common.lv) {
      if (!Common.lv.hasOwnProperty(key)) continue;
      if (!Common.lv[key].hasOwnProperty("syn")) {
        lvsort.push(key);
      }
    }
    for (key in Common.lc) {
      if (!Common.lc.hasOwnProperty(key)) continue;
      lcsort.push(key);
    }
    current = 0;
    setTimeout(Hist.loadPlanet, SSEH.INTERVAL);
  };
  
  this.loadPlanet = function() {
    var key;
    while (current < psort.length) {
      try {
        showProgress();  
        key = psort[current].n;
        bodies[key] =  new Destination(key, "canvas-wrap");
        UI.Height(bodies[key].Height());
      } catch(e) {
        if (e instanceof Error) { logError("Error loading " + key, e); }
      } finally {
        current++;
        if (current % 4 === 0) { 
          setTimeout(Hist.loadPlanet, SSEH.INTERVAL);
          return;
        }
      }
    }
    current = 0;
    setTimeout(Hist.loadMission, SSEH.INTERVAL);
  };
  
  this.loadMission = function() {
    var key;
    while (current < msort.length) {
      try {
        showProgress();  
        key = msort[current].n;
        probes[key] =  new Mission(key, "canvas-wrap");
        UI.Height(probes[key].Height());
      } catch(e) {
        if (e instanceof Error) { logError("Error loading " + key, e); }
      } finally {
        current++;
        if (current % 4 === 0) { 
          setTimeout(Hist.loadMission, SSEH.INTERVAL);
          return;
        }
      }
    }
    current  = 0;
    cnt = 0;
    //setTimeout(Hist.loadFinish, SSEH.INTERVAL);
    setTimeout(Hist.loadWait, SSEH.INTERVAL);
  };
   
  this.loadWait = function() {
    if (numImages == countImages || cnt > 1000) { 
      setTimeout(Hist.loadFinish, SSEH.INTERVAL);
    } else {
      cnt++;
      showProgress();
      setTimeout(Hist.loadWait, SSEH.INTERVAL);
    }
  };
  
  this.loadFinish = function() {
    draw();
    drawTitle();
    info = new Info(parent); 
    info.draw(cnv);
    document.getElementById("canvas").onclick = UI.vanish;  
    window.onresize = function() { UI.vanish(); draw();  };
    current = 0;
    waitmsg = Create.div(parent, "waitMsg", "waitmsg");
    Create.text(waitmsg, "Please wait...");

    setTimeout(Hist.loadDBox, SSEH.INTERVAL);
  };

  this.loadDBox  = function() {
    var key;
    while (current < psort.length) {
      try {
        key = psort[current].n;
        bodies[key].createBox();
      } catch(e) {
        if (e instanceof Error) { logError("Error loading " + key, e); }
      } finally {
        current++;
        if (current % 4 === 0) { 
          setTimeout(Hist.loadDBox, SSEH.INTERVAL);
          return;
        }
      }
    }
    current = 0;
    setTimeout(Hist.loadMBox, SSEH.INTERVAL);
  };

  this.loadMBox  = function() {
    var key;
    while (current < msort.length) {
      try {
        key = msort[current].n;
        probes[key].createBox();
      } catch(e) {
        if (e instanceof Error) { logError("Error loading " + key, e); }
      } finally {
        current++;
        if (current % 4 === 0) { 
          setTimeout(Hist.loadMBox, SSEH.INTERVAL);
          return;
        }
      }
    }
    current = 0;
    setTimeout(Hist.loadLVBox, SSEH.INTERVAL);
  };
  
  this.loadLVBox  = function() {
    var key;
    while (current < lvsort.length) {
      try {
        key = lvsort[current];
        lvs[key] = new LV(key);
      } catch(e) {
        if (e instanceof Error) { logError("Error loading " + key, e); }
      } finally {
        current++;
        if (current % 4 === 0) { 
          setTimeout(Hist.loadLVBox, SSEH.INTERVAL);
          return;
        }
      }
    }
    current = 0;
    setTimeout(Hist.loadLCBox, SSEH.INTERVAL);
  };

  this.loadLCBox  = function() {
    var key;
    while (current < lcsort.length) {
      try {
        key = lcsort[current];
        lcs[key] = new LC(key);
      } catch(e) {
        if (e instanceof Error) { logError("Error loading " + key, e); }
      } finally {
        current++;
        if (current % 4 === 0) { 
          setTimeout(Hist.loadLCBox, SSEH.INTERVAL);
          return;
        }
      }
    }
    current = 0;
    setTimeout(info.createLVlog(), SSEH.INTERVAL);
    cw.style.cursor = "default";    
  };

  this.init = function() {
    width = UI.Width();
    Common.symbols = loadSymbols();
    Common.sprites = loadSprites();
    Common.names = new Names("SSEH");
    Common.SPC = SSEH.SPC;
    Common.TSPC = SSEH.TSPC;
    if (SSEH.PARENT) { parent = document.getElementById(SSEH.PARENT); }
    if (!parent) { parent = document.getElementsByTagName("body")[0]; }
    cw = Create.div(parent, "", "canvas-wrap", {w:width,h:2});
    cnv = new Cdraw("canvas", {parent:"canvas-wrap", width:width, height:window.innerHeight});
    return {p:parent, c:cnv.setheight, w:width};
  };

  this.Canvas = function() { return cnv; };
  this.Parent = function() { return parent; };
  this.Probes = function() { return probes; };
  this.LVs = function() { return lvs; };
  this.Bodies = function() { return bodies; };
  this.Count =  function() { 
    countImages++; 
  };
  this.Symbols = function() { return loadSymbols(); };
  this.Sprites = function() { return loadSprites(); };
})();
