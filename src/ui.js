/* global Common, px, isNumber */

var UI = UI || {width: 0, height: 0, boxwidth: 0, bevel: 0, iscancelled: false, scale: 1, left: 0, right: 0};

UI.vanish = function(all) {
  var i, box; 
  if (all === false) { box = document.querySelectorAll(".infoPopup"); }
  else { box = document.querySelectorAll(".infoBox, .infoPopup"); }
  for (i=0; i<box.length; i++) { box[i].style.opacity = 0; }
  
  setTimeout(UI.shift, 1000);
};

UI.shift = function() {
  var i, box; 
  box = document.querySelectorAll(".infoBox, .infoPopup");
  for (i=0; i<box.length; i++) { if (box[i].style.opacity === '0') { box[i].style.top = px(-9999); } }
};
  
UI.wait = function(doshow, t, l) { 
  var msg = document.getElementById("waitmsg");
  if (!msg) return; 
  if (doshow) {
    msg.style.top = px(t);
    msg.style.left = px(l);
    msg.style.display = "block";
    UI.iscancelled = false;
  } else {
    if (msg.style.display == "block") { UI.iscancelled = true; }
    msg.style.display = "none";
  }
};

UI.cancelled = function() { return UI.iscancelled; };
UI.Width = function() { 
  var w = 0;
  if (document.documentElement.clientWidth) {
    w = document.documentElement.clientWidth;
  } else {
    w = window.innerWidth;
  }
  if (w === 0 || w < 700) { w = 700; }
  return w;
};
UI.Height = function(set) { if (isNumber(set)) { UI.height += set; } return UI.height; };
  
UI.show = function(e, nd) { 
  var ar, top, box, ev = e || window.event,
      pos = UI.getBoxPos(e),
      node = nd || this; 

  top = node.offsetTop + node.clientHeight + 2;
  ar = node.id.match(/^(sbo|rings|moons|info)(.+)/);
  if (ar !== null) { box = document.getElementById(ar[2]+ar[1]); }
  if (!box && !UI.cancelled()) { 
    UI.wait(true, top, pos.c);
    window.setTimeout(function() { UI.show(e, node); }, 500);
  } else { UI.wait(false); }
  if (!box) return false; 
  

  if (box.style.opacity == 1) {
    UI.vanish();
    if (parseInt(box.style.top) != top) { 
      window.setTimeout(function() { UI.show(e, node); }, 250);  
    }
  } else { 
    UI.vanish();
    box.style.left = px(pos.l); 
    box.style.top = px(top); 
    box.style.opacity = 1;  
    UI.Scroll.set(box); 
  }
  return false; 
};

UI.go = function(e) { 
  var ar, dest, node = this;
  ar = node.id.match(/^(leg|info)(.+)/);
  if (ar !== null) { 
    UI.vanish();
    dest = document.getElementById("info"+ar[2]); 
    UI.Scroll.top(dest);   
  }
};


UI.Scroll = new function() {
  var dest, diff, time, current, interval = 25,
  pos = function() { return window.pageYOffset || document.documentElement.scrollTop; },
  height = function() { return window.innerHeight || document.documentElement.clientHeight; },
  frac = function() { return current/time; },
  next = function() { current += interval; return dest - (diff/2 * (Math.cos(Math.PI*(frac())) + 1)); },
  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  this.set = function(what) {
    var r, h, w;
    if (!what) return; 
    if (typeof what == "string") { w = document.getElementById(what); }
    else { w = what; }

    r = w.getBoundingClientRect();
    h = height();
    if (r.bottom < h) return; 
    if (r.height > h) diff = r.top;
    else diff = r.bottom - h;
     
    if (diff <= 0) return; 
    dest = pos() + diff;
    time = Math.round(diff/interval)*interval*2;
    if (time < interval) { time = interval; }
    current = 0;
    requestAnimationFrame(this.move);
    //window.setTimeout(this.move, interval);  
  };
  this.top = function(what) {
    var r, h, w;
    if (!what) return; 
    if (typeof what == "string") { w = document.getElementById(what); }
    else { w = what; }

    r = w.getBoundingClientRect();
    //h = height();
    diff =  r.top;
    dest = pos() + diff;
    time = Math.round(diff/interval)*interval*2;
    if (time > 2000) { time = Math.round(Math.pow(diff,0.85)/interval)*interval*2; }
    if (time < interval) { time = interval; }
    current = 0;
    requestAnimationFrame(this.move);
    //window.setTimeout(this.move, interval);  
  };
  this.move = function() {
    var nxt = next();
    if (Math.abs(dest-nxt) < 1) return; 
    window.scrollTo(0,nxt);
    if (current < time) { requestAnimationFrame(UI.Scroll.move); }
  };
};

UI.getBoxPos = function(e) {
  var l, c, b = UI.boxwidth, 
      w = UI.Width(),
      ev = e || window.event;
      
  if (ev && ev.clientX) { c = ev.clientX; }
  else { c = w/2; }
  l = c- b/2 + 5;
  if (l < 0) { l = 8; }
  if (l > w - b - 32) { l = w - b - 32; }
  
  c -= 99;
  if (c < 8) { c = 8; }
  if (c > w - 232) { c = w - 232; }
  
  return {l:l, c:c};
};

UI.showBox = function(id) {
  var box = document.getElementById(id);
  if (box) { UI.show(null, box); }
  return false;
};


UI.showImg = function(e) {
  var chld, i, t,
      ev = e || window.event;
  if (!this.id) return; 
  //var id = this.id.replace(/info/, "line");
  chld = this.childNodes;
  for (i=0; i<chld.length; i++) {
    if (chld[i].nodeName.toLowerCase() == "img") {
      if (ev.type == "mouseout") {
        chld[i].style.top = px(-9999);
      } else if (ev.type == "mouseover") {
        t = - chld[i].height/2 + 8;
        chld[i].style.top = px(t);
      }
      break;
    }
  }
};



UI.Scale = {
  oldsize: {w:0,h:0,t:0,l:0},
  dist: function(dat, sc) {
    if (!dat.a) return; 
    return parseFloat(dat.a) * sc;
  },
  image: function(dat, scale) {
    var res, rad, sc, rel;
    sc = scale || 1;
    if (!dat) return; 
    if (!dat.eqrad || dat.scale === 0) return {w:dat.img.width, h:dat.img.height}; 
    rad = (dat.eqrad<1)?1:dat.eqrad;
    res = Math.pow(rad * dat.scale, 0.9) * 5 / UI.scale * sc;
    if (res < 5) { res = 5; }
    rel = dat.img.width === 0?1:dat.img.height/dat.img.width;
    
    return {w:res, h:res*rel};
  },
  time: function(dt, w) {
    var res, t = w?w-UI.bevel:1;
    res = Math.round((dt.valueOf() - UI.left) / (UI.right - UI.left) * t);
    if (w) { res += UI.bevel; }
    return res;
  },
  enlarge: function(e) {
    var t, id, node, rel,
        ev = e || window.event;

    if (ev.target.id.search(/pic/) != -1) { node = ev.target; }
    else {
      id = ev.target.parentNode.id;
      if (!id || id === "") { id = ev.target.parentNode.parentNode.id; }
      id = id.replace(/line/, "pic");
      node = document.getElementById(id);
    }
    if (!node) return; 
    rel = node.height/node.width;
    if (parseInt(node.style.width) == 120) {
      node.style.width = px(UI.Scale.oldsize.w);
      node.style.height = px(UI.Scale.oldsize.h);
      node.style.top = px(UI.Scale.oldsize.t);
      node.style.left = px(UI.Scale.oldsize.l);
      node.style.zIndex = 300;
      UI.Scale.oldsize = {w:0,h:0,t:0,l:0};
    } else {
      UI.Scale.oldsize = {w:parseFloat(node.style.width), h:parseFloat(node.style.height),t:parseFloat(node.style.top),l:parseFloat(node.style.left)};
      if (UI.Scale.oldsize.w < 120) {
        node.style.cursor = "url('" + Common.symbols.zoomin.src + "'), auto";
        node.style.width = px(120);
        node.style.height = px(120*rel);
        t = UI.Scale.oldsize.t+(UI.Scale.oldsize.h/2)-(120*rel)/2;
        if (t<4) { t=4; }
        if (t>244-120*rel) { t=244-120*rel; }
        node.style.top = px(t);
        t = UI.Scale.oldsize.l+(UI.Scale.oldsize.w/2)-60;
        if (t<4) { t=4; }
        if(t>UI.boxwidth-124) { t=UI.boxwidth-124; }
        node.style.left = px(t);
        node.style.zIndex = 301;
      } else {
        node.style.cursor = "url('" + Common.symbols.nozoom.src + "'), auto";
      }
    }
    if (!id) {
      id = node.id.replace(/pic/, "line");
      UI.showEntry(id);    
    }
    ev.stopPropagation();
  }
};


UI.toggle = function(e) { 
  var par = this, node = par.nextSibling;
  if (!node) return; 
  if (node.style.maxHeight != "130px") {
    node.firstChild.style.display = "inline-block";
    node.style.maxHeight = px(130);
    window.setTimeout(function() { UI.View.set(par); }, 600);
    //scrollIntoView.set(this);
  } else {
    node.style.maxHeight = px(0);
    node.firstChild.style.display = "none";
  }
};

UI.showRing = function() {
  if (!this.id) return; 
  var id = this.id.replace(/pic/, "line");
  UI.showEntry(id);    
};


UI.showEntry = function(id) {
  var l, node = document.getElementById(id);
  if (!node) return; 
  if (node.style.backgroundColor.search(/rgb/) == -1) {
    node.style.background = "rgb(255, 255, 204)";
    node.nextSibling.firstChild.style.display = "inline-block";
    node.nextSibling.style.maxHeight = px(120);
    window.setTimeout(function() { UI.View.set(node); }, 600);
  } else {
    node.style.background = "transparent";
    l = id.match(/(ring.{3}|moon.{3}|sbo.)/);
    if (l !== null) {
       l = "lnk" + l[1];
       if (document.getElementById(l).innerHTML.search(/Hide/) != -1) return; 
    }
    node.nextSibling.firstChild.style.display = "none";
    node.nextSibling.style.maxHeight = px(0);
  }
};

UI.View = new function() {
  var par, dest, diff, delta, time, current, interval = 30,
  pos = function() { return par.scrollTop; },
  height = function() { return par.clientHeight; },
  frac = function() { return current/time; },
  next = function() { current += interval; return dest - (diff/2 * (Math.cos(Math.PI*(frac())) + 1)); };
  this.set = function(node) {
    var r, rp, h;
    if (!node) return; 
    dest = null;
    par = node.parentNode;
    delta = par.firstChild.offsetTop;
    if (par.scrollHeight > par.clientHeight) {
      if (node.offsetTop + node.clientHeight + node.nextSibling.clientHeight > par.scrollTop + par.clientHeight) {
        dest = node.offsetTop + node.clientHeight + node.nextSibling.clientHeight - par.clientHeight - delta;
      }
      if (node.offsetTop < par.scrollTop) { dest = node.offsetTop - delta; }
    }
    if (dest === null && par.parentNode.parentNode) { UI.Scroll.set(par.parentNode.parentNode); return; }
    diff = dest - par.scrollTop;
    time = Math.round(Math.abs(diff)/interval)*interval*2;
    if (time < interval) { time = interval; }
    current = 0;
    window.setTimeout(this.move, interval);  
  };
  this.move = function() {
    var intr, nxt = next();
    par.scrollTop = nxt;
    intr = current>=time?0:interval;
    if (intr > 0) { 
      window.setTimeout(UI.View.move, interval); 
    } else if (par.parentNode.parentNode) { 
      UI.Scroll.set(par.parentNode.parentNode); 
    }
  };
};

UI.all = function() {
  var i, nodes = document.getElementsByClassName("detPanel"),
  show = (this.innerHTML.search(/Hide/) == -1),
  dest = this.id.replace(/lnk/, ""), par = null;
  if (show) {
    for (i=0; i<nodes.length; i++) {
      if (nodes[i].id && nodes[i].id.search(dest) != -1) {
        nodes[i].firstChild.style.display = "inline-block";
        nodes[i].style.maxHeight = px(120);
        par = i;
      }
    }
    this.innerHTML = "Hide details";
    if (par && nodes[par].parentNode.parentNode.parentNode) { UI.Scroll.set(nodes[par].parentNode.parentNode.parentNode); }
  } else {
    for (i=0; i<nodes.length; i++) {
      if (nodes[i].id && nodes[i].id.search(dest) != -1) {
        nodes[i].firstChild.style.display = "none";
        nodes[i].style.maxHeight = px(0);
      }
    }
    this.innerHTML = "Show all details";
  }
  return false;
};

UI.isFullScreen = function() {
  return (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);
};
UI.toggleFullScreen = function() {
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
};
