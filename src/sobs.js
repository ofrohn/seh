var Sobs = new function() {
  var width, cw, cnv, parent,
      _scopes = {},

  //loadObs
  loadObs = function() {
    var i, key;
    i = 0;
    for (key in scopes) {
      _scopes[key] = new Obs(key, parent);
      i++;
    };
  },
  //drawDiag
  drawDiag = function() {
    
  },
  //names
  loadSymbols = function() {
    var n, key, ar, res = {};
      
    n = 0;   
    for (key in SOBS.images) {
      res[key] = new Image();
      res[key].src = SOBS.images[key];
      if (SOBS.images[key].search(/\.cur/) == -1) {
        //res[key].onload = Sobs.Count;
        n++;
      };
    };
    
    numImages = n;
    return res;
  },
  loadSprites = function() {
    var key, ar, t, res = {};
    /*
    for (key in SOBS.icons) {
      ar = SOBS.icons[key].desc.match(/x\:(\d+);y\:(\d+)/);
      if (ar != null) {
        res[key] = {n:SOBS.icons[key].name, x:ar[1], y:ar[2]};
      };
    };*/
    for (key in Common.ctry) {
      ar = Common.ctry[key].desc.match(/x\:(\d+);y\:(\d+)/);
      if (ar != null) {
        res[key] = {n:Common.ctry[key].name, x:ar[1], y:ar[2]};
      };
    };
    for (key in Common.desc) {
      if (!Common.desc[key].hasOwnProperty("desc")) continue; 
      ar = Common.desc[key].desc.match(/x\:(\d+);y\:(\d+)/);
      if (ar != null) {
        t = Common.desc[key].name.split(":");
        t = t.length > 1?t[1] + " (" + t[0] + ")":t[0];
        res[key] = {n:t, x:ar[1], y:ar[2]};
      };
    };
    for (key in Common.loc) {
      if (!Common.loc[key].hasOwnProperty("desc")) continue; 
      ar = Common.loc[key].desc.match(/x\:(\d+);y\:(\d+)/);
      if (ar != null) {
        t = Common.loc[key].name.split(":");
        t = t.length > 1?t[1] + " (" + t[0] + ")":t[0];
        res[key] = {n:t, x:ar[1], y:ar[2]};
      };
    };

    return res;
  };

  this.load = function() {
    var t, diag, key, inst = [];
    loadObs();
    for (key in _scopes) {
      t = _scopes[key].Instruments(SOBS.TYPE);
      if (t != null) inst = inst.concat(t);
    };
    inst.sort(function(a, b) { return a.fm - b.fm; });
    diag = new Diag();
    diag.draw(cnv, SOBS.TYPE, inst, width, height);
  };
  
  this.init = function() {
    if (cfg) {
      for (var key in cfg) {
        SOBS[key] = cfg[key];
      }
    }
    width = SOBS.WIDTH;
    height = SOBS.HEIGHT;
    Common.names = new Names("SOBS");
    Common.SPC = SOBS.SPC;
    Common.symbols = loadSymbols();
    Common.sprites = loadSprites();
    if (SOBS.PARENT) parent = document.getElementById(SOBS.PARENT);
    if (!parent) parent = document.getElementsByTagName("body")[0];
    cw = Create.div(parent, "", "canvas-wrap", {w:width,h:2});
    cnv = new Cdraw("canvas", {parent:"canvas-wrap", width:width, height:window.innerHeight});
    return {p:parent, c:cnv.setheight, w:width};
  };

};

  
