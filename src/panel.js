/* global Common, SSEH, Cdraw, objects, groups */

function Panel(par, dest, moons, rings) {
  var c, WIDTH = SSEH.BOXWIDTH, HEIGHT = SSEH.BOXWIDTH/2,
  font = "normal bold 13px Arial, Helvetica, sans-serif",
  _dest = dest, _parent = par, _moons, _rings,
  RCOL = "#fcc",
  PCOL = "#ffc",
  radius, y = HEIGHT-70,

 getPos = function(a,i) {
    var ang, l = scale(a);
    ang = parseFloat(i) || 0;
    if (ang>90) { ang = 180-ang; }
    ang = parseFloat(ang) * Math.PI / 180;
    if (l > 90) { ang /= Panel.sc[_dest].i/180; }
    return {x:l*Math.cos(ang), y:l*Math.sin(ang)};
  },
  scale = function(val) {
    return (Math.LOG10E*Math.log(parseFloat(val))-Panel.sc[_dest].sc1) / Panel.sc[_dest].sc2 * WIDTH;
  },
  size = function(val) {
    if (!val) return 2; 
    var r = parseFloat(val)*2;
    r = Math.pow(r * 0.1, 0.3) * 2.7;
    if (r<2) { r = 2; }
    return r; 
  },
  drawScale = function() { 
    var x, i, j, t;
    
    for (j=1e3; j<1e9; j*=10) { 
      for (i=j; i<10*j; i+=j) {
        x =  scale(i);
        if (i == 1e3) continue;
        c.vline(x, HEIGHT-20, 4, "#fff", 1.0);
        if (i<= radius) continue;
        if (i == j || i == j*2 || i == j*5) {
          if (i >= 1000000) { t = (i/1000000).toString()+"M"; }
          else if (i >= 100000) { t = (i/1000).toString()+"k"; }
          else { t = i.toString();  }
          c.text(t, x, HEIGHT-14, SSEH.SCALEFONT, "center", "#fff", "top");
        }
      }
    }
    c.text("km",1, HEIGHT-14,  SSEH.SCALEFONT, "left", "#fff", "top");
  
    for (j=1; j<1e4; j*=10) { 
      for (i=j; i<10*j; i+=j) {
        x =  scale(i*radius);
        c.vline(x, HEIGHT-40, 4, "#fff", 1.0);    
        if (i == j || i == j*2 || i == j*5) {
          c.text(i, x, HEIGHT-34, SSEH.SCALEFONT, "center", "#fff", "top");
        }
      }
    }
    t = _dest.substring(0,1).toUpperCase();
    c.index("R<"+t,1, HEIGHT-34,  SSEH.SCALEFONT, "left", "#fff", "top");
  };
    
  this.draw = function() {
    var t, x, y0, i, key, pos, pos1, re, rp, opa, col;
    
    c.fillrect(0,0,WIDTH,HEIGHT,"#000");
    
    x = scale(objects[_dest].hill*radius);
    c.arc(1,y,x,Math.PI/40,-Math.PI/40,true,"#00f",2);

    x = scale(objects[_dest].roche*radius);
    c.arc(1,y,x,Math.PI/10,-Math.PI/10,true,"#d0d",2);
  
    x = scale(objects[_dest].rcrit*radius);
    c.arc(1,y,x,Math.PI/25,-Math.PI/25,true,"#c00",2);

    x = scale(radius*1.3);
    i = (parseFloat(objects[_dest].tilt));
    if (i>90) { i = 180-i; }
    y0 = x*Math.sin(i*Math.PI/180);
    x = x*Math.cos(i*Math.PI/180);
    c.line(1,y,x,y-y0,"#0c0",2);

    re = size(radius);
    rp = re * Common.symbols[_dest].height / Common.symbols[_dest].width;
    c.image(Common.symbols[_dest], 1-(re/2), y-(rp/2), re, rp);

    for (i=0; i<_rings.length;i++) {   
      if (_rings[i].n.search(/Division|Gap/) != -1) continue;
      
      pos = getPos(_rings[i].a - _rings[i].w/2, _rings[i].i);
      pos1 = getPos(_rings[i].a + _rings[i].w/2, _rings[i].i);
      re = pos1.x-pos.x;
      rp = size(_rings[i].h/2);
      opa = _rings[i].opa || 1;
        
      if (rp <= 2) {
        rp = 2;
        col = "rgba(255,255,255," + opa + ")";
      } else {
        col = c.makegradient(pos.x, y-pos.y-rp/2, pos.x, y-pos1.y+rp/2,  [{pos:0, col:"rgba(255,255,255,0)"}, {pos:0.5, col:"rgba(255,255,255," + opa + ")"}, {pos:1, col:"rgba(255,255,255,0)"}]);
      }
      c.fillrect(pos.x, y-pos.y-rp/2, re, rp, col);
    }

    for (i=0;i<_moons.length;i++) { 
      re = size(_moons[i].r);
      if (re < 2) { re = 2; }
      if (re == 2) { rp = 2; }
      else if (!_moons[i].img || _moons[i].img === "") { rp = re; }
      else { rp = re * _moons[i].img.height / _moons[i].img.width; }

      pos = getPos(_moons[i].a, _moons[i].i);

      if (_moons[i].img && _moons[i].img !== "") {
        c.image(_moons[i].img, pos.x-(re/2), y-pos.y-(rp/2), re, rp);
      } else {
        if (parseFloat(_moons[i].i) > 90) { col = RCOL; }
        else { col = PCOL; }
        c.fillcircle(pos.x, y-pos.y, re/2, col);
      }
    }

    //Flybys+Orbits
    t = Panel.fb[_dest];
    for (key in t) {
      if (!t.hasOwnProperty(key)) continue;
      if (t[key].d.toString().search(/km/) !== -1) { x = parseInt(t[key].d); }
      else { x = t[key].d * radius; }
      pos = getPos(x, t[key].i);
      
      y0 = 12;
      if (t[key].y) { y0 -= t[key].y; }
  
      col = Common.names.findColor(t[key].t);  

      c.cross(pos.x, y-pos.y, 4, col, 1);
      c.vtext(key,pos.x,y-pos.y-y0,font,"left", col,-45);
    }

    t = groups[_dest];
    for (key in t) {   
      if (!t.hasOwnProperty(key)) continue;
      if (!t[key].hasOwnProperty("a")) {
        if (t[key].hasOwnProperty("i")) {
          pos = getPos(t[key].x, t[key].i);
          c.text(key, pos.x, y-pos.y, font, "center", "#fff");
        } else { c.text(key, scale(t[key].x), y+t[key].y,font, "center", "#fff"); }
      } else { c.vtext(key, scale(t[key].x), y+t[key].y,font, "left", "#fff", t[key].a); }
    }
    
    font = SSEH.SCALEFONT;
    y0 = 12;
    c.text("Irregular Moons:",4, 2+y0, font, "left", "#fff");
    c.text("(P) Prograde",4, 2+y0*2, font, "left", "#fff");
    c.fillcircle(94, y0*2-2, 4, PCOL);
    c.text("(R) Retrograde",4, 2+y0*3, font, "left", "#fff");
    c.fillcircle(94, y0*3-2, 4, RCOL);

    //Hill+Roche
    t = objects[_dest].tilt + "º";
    c.text("Planetary Orbital Plane Incl.: " + t, 120, 2+y0, font, "left", "#fff");
    c.hline(342,y0-1,20,"#0c0",2.3);
    
    t = objects[_dest].roche.toString() + " R" + _dest.substring(0,1) + " / " + Math.round(objects[_dest].roche * radius).toCommaString() + " km";
    c.text("Roche Limit (Ice): " + t, 120, 2+y0*2, font, "left", "#fff");
    c.hline(342,y0*2-1,20,"#d0d",2.3);

    t = objects[_dest].rcrit.toString() + " R" + _dest.substring(0,1) + " / " + Math.round(objects[_dest].rcrit * radius).toCommaString() + " km";
    c.text("Critical Distance: " + t, 120, 2+y0*3, font, "left", "#fff");
    c.hline(342,y0*3-1,20,"#c00",2.3);

    t = objects[_dest].hill.toString() + " R" + _dest.substring(0,1) + " / " + Math.round(objects[_dest].hill * radius).toCommaString() + " km";
    c.text("Hill Sphere: " + t,120, 2+y0*4, font, "left", "#fff");
    c.hline(342,y0*4-1,20,"#00f",2.3);

    drawScale();
  };

  this.init = function(moons, rings) {
    //a,i,t
    _moons = moons;
    //a,i,w,h,opa
    _rings = rings;
    this.draw();
  }; 

  c = new Cdraw("mapbox"+_dest, {parent:par, width:WIDTH, height:HEIGHT});
  radius = Common.names.findRadius(_dest);
  if (moons && rings) { this.init(moons, rings); }
}

function SPanel(par) {
  var c, WIDTH = SSEH.BOXWIDTH, HEIGHT = SSEH.BOXWIDTH/2,
  font = "normal bold 13px Arial, Helvetica, sans-serif",
  _dest = "sol", _parent = par, 
  radius, y = HEIGHT/2,
 
  getPos = function(a,i) {
    var ang, l = scale(a);
    ang = parseFloat(i) || 0;
    if (ang>90) { ang = 180-ang; }
    ang = parseFloat(ang) * Math.PI / 480;
    return {x:l*Math.cos(ang), y:l*Math.sin(ang)};
  },
  scale = function(val) {
    return (Math.LOG10E*Math.log(parseFloat(val))+1) / 3.76 * WIDTH;
  },
  size = function(val) {
    if (!val) return 2; 
    var r = parseFloat(val)*2;
    r = Math.pow(r * 0.1, 0.3) * 2;
    if (r<2) { r = 2; }
    return r; 
  },
  drawScale = function() { 
    var x, i, j, t;
    
    for (j=1e-1; j<1e7; j*=10) { 
      for (i=j; i<10*j; i+=j) {
        x =  scale(i);
        if (i == 1e-1) continue;
        c.vline(x, HEIGHT-20, 4, "#fff", 1.0);
        //if (i<= radius) continue;
        if (i == j || i == j*2 || i == j*5) {
          if (i >= 1e6) { t = (i/1e6).toString()+"M"; }
          else if (i >= 1e5) { t = (i/1e3).toString()+"k"; }
          else { t = i.toString(); }
          c.text(t, x, HEIGHT-14, SSEH.SCALEFONT, "center", "#fff", "top");
        }
      }
    }
    c.text("AU",1, HEIGHT-14,  SSEH.SCALEFONT, "left", "#fff", "top");
  };
    
  this.draw = function() {
    var t, x, x2, y0, i, key, pos, img, re, rp, col, fnt, cx;
    
    c.fillrect(0,0,WIDTH,HEIGHT,"#000");
    //bg
    c.image(Common.symbols.sbg, 0, 0);

    //Termination Shock
    x = scale(85);
    x2 = scale(160);
    img = c.makeradialgradient(0, y, x, 0, y, x2, [{pos:0, col:"rgba(255,255,0,0)"}, {pos:0.06, col:"rgba(255,255,0,0.6)"}, {pos:0.14, col:"rgba(255,255,0,0.4)"}, {pos:1, col:"rgba(255,255,0,0)"}]);  
    c.fillcircle(0,y,x2,img);
    // Habitable zone
    x = scale(0.75);
    x2 = scale(1.5);
    img = c.makeradialgradient(0, y, x, 0, y, x2, [{pos:0, col:"rgba(0,153,0,0)"}, {pos:0.4, col:"rgba(0,153,0,0.6)"}, {pos:1, col:"rgba(0,153,0,0)"}]);  
    c.fillcircle(0,y,x2,img);
    // Frost line
    x = scale(4.6);
    x2 = scale(7);
    img = c.makeradialgradient(0, y, x, 0, y, x2, [{pos:0, col:"rgba(255,255,255,0)"}, {pos:0.05, col:"rgba(255,255,255,0.3)"}, /*{pos:0.2, col:"rgba(255,255,255,0.25)"},*/ {pos:1, col:"rgba(255,255,255,0)"}]);  
    c.fillcircle(0,y,x2,img);

    
    //planets & dwarfs
    for (key in objects) {
      if (!objects.hasOwnProperty(key)) continue;
      if (objects[key].type.search(/s|p|d/) == -1) continue;
      t = objects[key];
      if (t.type == "s") { pos = {x:1, y:0}; }
      else { pos = getPos(parseFloat(t.a), t.i); }
      
      if (Common.symbols.hasOwnProperty(key+"orig")) { img = Common.symbols[key+"orig"]; }
      else { img = Common.symbols[key]; }
      
      rp = size(t.rad);
      re = rp * img.width / img.height;
      
      c.save();
      c.rotate(-t.tilt||0, pos.x, y-pos.y);
      c.image(img, -(re/2), -(rp/2), re, rp);
      c.restore();
    }
    //comet
    pos = getPos(1.5, 90);
    c.save();
    c.rotate(-95, pos.x, y-90);
    c.image(Common.symbols.comet, 0, 0);
    c.restore();
    //c.image(Common.symbols.comet, pos.x, y-140);
    
    //groups
    t = groups[_dest];
    for (key in t) {   
      if (!t.hasOwnProperty(key)) continue;
      switch (t[key].t) {
        case "n": fnt = SSEH.SCALEFONT; col = t[key].col||"#ccc"; break;
        case "c": fnt = font; col = "#xfx"; break;
        case "an": fnt = font; col = "#ffx"; break;
        case "a": fnt = font; col = "#ffx"; break;
        case "t": fnt = font; col = "#ffx"; break;
        case "p": fnt = font; col = "#fff"; break;
        case "d": fnt = font; col = "#eee"; break;
        default:  fnt = font; col = "#fff"; 
      }
      cx = (14-Math.ceil((Math.log(t[key].x)+1)/2.7)).toString(16);
      col = col.replace(/x/g, cx);
      if (!t[key].hasOwnProperty("a")) {
        if (t[key].hasOwnProperty("i")) {
          pos = getPos(t[key].x, t[key].i);
          c.text(key, pos.x, y-pos.y, fnt, "center", col);
        } else { c.text(key, scale(t[key].x), y+t[key].y, fnt, "center", col); }
      } else { c.vtext(key, scale(t[key].x), y+t[key].y, fnt, "left", col, t[key].a); }
    }

    t = Panel.fb[_dest];
    for (key in t) {
      if (!t.hasOwnProperty(key)) continue;
      pos = getPos(t[key].d, t[key].i);
      y0 = 6;
      if (t[key].y) { y0 -= t[key].y; }
  
      col = "#aaa"; //Common.names.findColor(t[key].t);  

      c.cross(pos.x, y-pos.y, 4, col, 1);
      c.vtext(key,pos.x,y-pos.y-y0,font,"left", col,-45);
    }

    drawScale();
  };
  c = new Cdraw("mapbox"+_dest, {parent:par, width:WIDTH, height:HEIGHT});
  radius = Common.names.findRadius(_dest)/1.5e8;
  this.draw();

}

Panel.sc = {
  jup: {sc1:4.74, sc2:3.05, i:360 },
  sat: {sc1:4.67, sc2:3.2, i:360 },
  ura: {sc1:4.3, sc2:3.6, i:400 },
  nep: {sc1:4.29, sc2:3.9, i:440 }
};
Panel.fb = {
  jup: {"Pioneer 10":{t:"fbm",d:2.82,i:13.8,y:-16},
        "Pioneer 11":{t:"fbm",d:1.6,i:51.8,y:6},
        "Voyager 1":{t:"fbm",d:4.89,i:3.98, y:-30},
        "Voyager 2":{t:"fbm",d:10.1,i:6.91, y:0},
        "Galileo JOI":{t:"om",d:"286000km",i:0.036,y:-38},
        "Galileo Probe Entry":{t:"pm",d:"70000km",i:0.036,y:-2},
        "Ulysses":{t:"fbm",d:6.3,i:154.6,y:4},
        "Cassini":{t:"fbm",d:"9794404km",i:0},
        "New Horizons":{t:"fbm",d:"2216252km",i:0},
        "Juno JOI":{t:"om",d:1.06,i:3,y:-48}},
  sat: {"Pioneer 11":{t:"fbm",d:1.34,i:10,y:0},
        "Voyager 1":{t:"fbm",d:3.0,i:65,y:32},
        "Voyager 2":{t:"fbm",d:"161081km",i:6.9,y:6},
        "Cassini SOI":{t:"om",d:"80000km",i:36.8,y:-0},
        "Huygens EDL":{t:"slm",d:21.5,i:0,y:-4}},
  ura: {"Voyager 2":{t:"fbm",d:"107092km",i:11.23}},
  nep: {"Voyager 2":{t:"fbm",d:"29216km",i:116,y:0}},
  sol: {"Pioneer 10":{t:"etm",d:112,i:3,y:0, dt:0,d0:0,dx:0,i0:0,di:0},
        "Pioneer 11":{t:"etm",d:90.2,i:14,y:0, dt:0,d0:0,dx:0,i0:0,di:0},
        "Voyager 1":{t:"etm",d:130,i:35,y:28},
        "Voyager 2":{t:"etm",d:106.5,i:-30,y:0}}
        //"New Horizons":{t:"etm",d:27.5,i:1.9,y:0}
};

