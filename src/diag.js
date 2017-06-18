function Diag(type, params) {
  var xrange = {lo:1e6, hi:3e26, off:6, r:20}, 
      yrange = {lo:5e-7, hi:5e5, off:6.5, r:12.5},
      bevel = {x:160, y:54},
      ypos = SOBS.LEGEND, 
      expfont =  "14px 'Trebuchet MS'", 
      lblfont =  "bold 20px 'Trebuchet MS'", 
      scalefont = SOBS.SCALEFONT, 
      titlefont = "bold 20px 'Trebuchet MS'",      
      lblcol = "#3c0",
      lang = "en",
      width, height, ctx, gradient,
      futurescopes, groundscopes, ori = {left: {l:0, t:"right", o:-2}, right: {l:0, t:"left", o:1}};

  setParams = function(params) {
    var key, v;
    for (key in params) {
      v = params[key];
      switch(key) {
       case "width": case "w": if (isNumber(v)) { width = v; } break;
       case "height": case "h":  if (isNumber(v)) { height = v; } break;
       case "lang": lang = v; break;
      };
    };
  },

  //draw diagrams: band vs. res, band/absorption/scopes

  //draw axes
  drawSpectrum = function(c, top) {
    var i, x0, x1, off, t = top, stops = [], len, l0, tcol = "#fff",
        lwidth = 1.2, 
        bh = SOBS.BARHEIGHT,
        max = SOBS.range.length-1;
    
    l0 = xscale(SOBS.range[0].f0);
    len = xscale(SOBS.range[max].f1) - l0;

    for (i=0; i<SOBS.range.length; i++) {
      x0 = xscale(SOBS.range[i].f0);
      x1 = xscale(SOBS.range[i].f1);
      //if (i == 0) x0 -= 16;
      //if (i == SOBS.range.length-1) x1 += 16;
      
      if (i==3) {
        c.gradient(x0+0.5, x1-0.5, t, bh, [{pos:0, col:SOBS.range[i].c0},
         {pos:0.3, col:"#fc0"},  {pos:0.45, col:"#ff0"}, {pos:0.6, col:"#0f0"}, {pos:0.75, col:"#0cf"}, 
         {pos:1, col:SOBS.range[i].c1}]);
        stops = stops.concat([{pos:(x0-l0)/len, col:SOBS.range[i].c0}, {pos:(x0-l0+2)/len, col:"#fc0"},  {pos:(x0-l0+4)/len, col:"#ff0"}, {pos:(x0-l0+6)/len, col:"#0f0"}, {pos:(x0-l0+8)/len, col:"#0cf"}]);
      } else {
        c.gradient(x0+1, x1-1, t, bh, [{pos:0, col:SOBS.range[i].c0}, {pos:1, col:SOBS.range[i].c1}]);
        stops.push({pos:(x0-l0)/len, col:SOBS.range[i].c0});
      };

      if (i == 3) { off = bh+17; tcol = "#000"; }
      else { off = 20; tcol = "#fff"; }
      
      c.text(SOBS.range[i].s, (x1+x0)/2, t+off, titlefont, "center", tcol);
    };
    c.text(SOBS.legend[lang]["bnd"], ori[ypos].l+10*ori[ypos].o, t+off, SOBS.TEXTFONT, ori[ypos].t, SOBS.TEXTCOL);      
    gradient = c.makegradient(l0, 0, l0+len, 0, stops);
  },
  drawXAxis = function(c, top, span, notitles) {
    var i, h = top-2, lwidth = 1.2,
        x0 = xscale(xrange.lo),
        x1 = xscale(xrange.hi),
        col = SOBS.LINECOL,   
        xm = xscale(8e16);
        
    c.line(x0, h, xm-16, h, col, lwidth);
    c.line(xm+16, h, x1, h, col, lwidth);
    c.dashline(x1, h, x1+16, h, col, lwidth, Cdraw.SDASH)
    c.dashline(x0, h, x0-16, h, col, lwidth, Cdraw.SDASH)
    c.dashline(xm-16, h, xm+16, h, col, lwidth, Cdraw.SDASH)
    
    for (i=2; i>=-8; i--) {
      c.vline(xscale(w2f("1e"+i)), h-5, 5, col, 1);
    }
    for (var i=3; i<=12; i++) {
      c.vline(xscale(e2f("1e"+i)), h-5, 5, col, 1);
    }
    for (i=0; i<SOBS.units.length; i++) {
      if (SOBS.units[i].t == "w") {
        c.text(SOBS.units[i].n, xscale(w2f(SOBS.units[i].u)), h-10, scalefont, "center");
      } else {
        c.text(SOBS.units[i].n, xscale(e2f(SOBS.units[i].u)), h-10, scalefont, "center");
      };
    };
    
    if (!notitles)
      c.text(SOBS.legend[lang]["wav"], ori[ypos].l+10*ori[ypos].o, h-18, SOBS.TEXTFONT, ori[ypos].t, SOBS.TEXTCOL);      

    if (span) h += span;
    //h += height+SOBS.BARHEIGHT+2;

    c.line(x0, h, x1, h, col, lwidth);
    c.dashline(x1, h, x1+16, h, col, lwidth, Cdraw.SDASH)
    c.dashline(x0, h, x0-16, h, col, lwidth, Cdraw.SDASH)

    for (i=6; i<=26; i++) {
      c.vline(xscale("1e"+i), h, 5, col, 1);
      c.number("1e"+i, xscale("1e"+i), h+26, scalefont, "center", SOBS.TEXTCOL);      
    };
    if (!notitles)
      c.text(SOBS.legend[lang]["freq"], ori[ypos].l+10*ori[ypos].o, h+25, SOBS.TEXTFONT, ori[ypos].t, SOBS.TEXTCOL);      

  },
  drawYAxis = function(c, top) {
    var i, y0, y1, x0, col = SOBS.LINECOL, h = top, l, otext, oline;

    
    if (type == "line") {
      //c.text(SOBS.legend[lang]["tel"], width+36, SOBS.BARHEIGHT + 41, SOBS.TEXTFONT, "left", SOBS.TEXTCOL);      
      c.text(SOBS.legend[lang]["fut"], width+32, futurescopes + 12, titlefont, "right", SOBS.TEXTCOL);
      c.text(SOBS.legend[lang]["grnd"], width+32, groundscopes + 34, titlefont, "right", SOBS.TEXTCOL);      
    };
    
    if (type != "res") return;

    l = ori[ypos].l;
    otext = ori[ypos].t;
    oline = ori[ypos].o;
    
    y0 = yscale(yrange.lo);
    y1 = yscale(yrange.hi);
    x0 = l;
    c.line(x0, y0, x0, y1, col, 1);
    
    for (i=-6; i<6; i++) {
      c.hline(x0, yscale("1e"+i), 5*oline, col, 1);
      c.number("1e"+i, x0+(7*oline), yscale("1e"+i)+6, scalefont, otext);      
    }

    x0 += 35*oline;
    if (ypos == "left") {
      c.vtext("Angular Resolution [arcsec]", x0-40, (y1+y0)/2-10, SOBS.TEXTFONT, "center", SOBS.TEXTCOL);
      c.text("10\u00B0", x0, yscale(36000)+6, scalefont, otext);
      c.hline(x0+6, yscale(36000), 14, col, 1);
      c.text(" 1\u00B0", x0, yscale(3600)+6, scalefont, otext);
      c.hline(x0+6, yscale(3600), 14, col, 1);
      c.text(" 1\u2032", x0, yscale(60)+6, scalefont, otext);
      c.hline(x0+6, yscale(60), 14, col, 1);
      c.text(" 1\u2033", x0, yscale(1)+6, scalefont, otext);
      c.hline(x0+6, yscale(1), 14, col, 1);
      //c.text("10mas", x0, yscale(0.01)+6, scalefont, "left");
      c.text(" 1mas", x0, yscale(0.001)+6, scalefont, otext);
      c.hline(x0+6, yscale(1e-3), 10, col, 1);
      c.text("1\u03bcas", x0, yscale(1e-6)+6, scalefont, otext);
      c.hline(x0+6, yscale(1e-6), 10, col, 1);    
    } else {
      c.vtext("Angular Resolution [arcsec]", x0+70, (y1+y0)/2-10, SOBS.TEXTFONT, "center", SOBS.TEXTCOL);
      c.text("10\u00B0", x0+6, yscale(36000)+6, scalefont, otext);
      c.hline(x0-12, yscale(36000), 14, col, 1);
      c.text(" 1\u00B0", x0+6, yscale(3600)+6, scalefont, otext);
      c.hline(x0-12, yscale(3600), 14, col, 1);
      c.text(" 1\u2032", x0+6, yscale(60)+6, scalefont, otext);
      c.hline(x0-12, yscale(60), 14, col, 1);
      c.text(" 1\u2033", x0+6, yscale(1)+6, scalefont, otext);
      c.hline(x0-12, yscale(1), 14, col, 1);
      //c.text("10mas", x0, yscale(0.01)+6, scalefont, "left");
      c.text(" 1mas", x0+6, yscale(0.001)+6, scalefont, otext);
      c.hline(x0-12, yscale(1e-3), 14, col, 1);
      c.text("1\u03bcas", x0+6, yscale(1e-6)+6, scalefont, otext);
      c.hline(x0-12, yscale(1e-6), 14, col, 1);    
    };
  },

  //absorption
  drawAbsoption = function(c, top) {
    var i, y0 = top, off,
        bh = SOBS.BARHEIGHT+4,
        xh = xscale(xrange.hi)-8,
        xl = xscale(xrange.lo)-2,
        grad = c.makegradient(0, y0+bh, 0, y0, [{pos:0, col:"#c0b7df"}, {pos:1, col:"#9999cc"}]);
        
    c.fillrect(xl, y0-1, xh-xl, bh+2, grad);
    //c.strokerect(xl, y0-1, xh-xl, bh+1);
    
    grad = c.makegradient(0, y0+bh, 0, y0, [{pos:0, col:"#999"}, {pos:1, col:"#555"}]);

    c.startp(xh, y0+bh, grad);
    c.movep(xh, y0);
    
    for (var i=0; i < SOBS.absorp.length; i++) {
      c.movep(xscale(w2f(SOBS.absorp[i].f*1e-6)), y0 + bh * (1 - SOBS.absorp[i].a));
    };
    
    c.movep(xl, y0);
    c.movep(xl, y0+bh);
    c.endp(xh, y0+bh, true);
    
    c.text(SOBS.legend[lang]["abs"], ori[ypos].l+10*ori[ypos].o, y0+14, SOBS.TEXTFONT, ori[ypos].t, SOBS.TEXTCOL);      

    y0 = y0+bh-6;
    
    c.text(SOBS.legend[lang]["ion"], xscale(3.5e6), y0, scalefont, "center", "#fff");
    c.text(SOBS.legend[lang]["h2o"], xscale(3e12), y0, scalefont, "center", "#fff");
    c.text(SOBS.legend[lang]["o23"], xscale(1e20), y0, scalefont, "center", "#fff");
    
     if (type == "line") off = 22;
     else off = 32;
   
    c.text("0", xh+off, y0+0, scalefont, "right", "", "top", col);
    c.text("100", xh+off, y0-bh+8, scalefont, "right", null, null, col);
  },
  //scope
  drawScope = function(c, scope) {
    var i, x0 = -1, x1 = -1, y0 = -1, y1 = -1,
        bnds, salign, sx, sy, name,
        font = SOBS.TEXTFONT, col = "#ad6";


    col = getColor(scope);
      
    if (scope.d && scope.px) {
      bnds = drawScopeDL(c, scope, col);
    } else {
      bnds = drawScopeL(c, scope, col);
    };
      
    if (!scope.hasOwnProperty("c") || scope.c == null) return;

    //center, top, right, diagonal, instr., index, line
    salign = "center";
    sx = (bnds.x0+bnds.x1)/2;
    if (scope.c.search(/b/) != -1) {
      sy = bnds.y1;
    } else {  
      sy = (bnds.y1+bnds.y0)/2;
    };
    
    if (scope.c.search(/r/) != -1) {
      salign = "left";
      sx = bnds.x1+4;
      sy = bnds.y1-9;
    } else if (scope.c.search(/l/) != -1) {
      salign = "right";
      sx = bnds.x0-4;
      sy = bnds.y0-9;
    };
  
    if (scope.c.search(/n/) != -1) {
      name = scope.n;
      if (scope.c.search(/i/) != -1) name += " " + scope.i;
      if (scope.c.search(/p/) != -1) name = scope.p;

      if (scope.c.search(/v/) != -1) {
        if (scope.c.search(/t/) != -1) 
          c.vtext(name, sx+5.5, sy-5.5, lblfont, salign, lblcol, 50);
        else
          c.vtext(name, sx-14.5, sy+14.5, lblfont, salign, lblcol, 50);
      } else {
        if (scope.c.search(/t/) != -1) 
          c.text(name, sx, sy-2.5, lblfont, salign, lblcol);
        else
          c.text(name, sx, sy+14.5, lblfont, salign, lblcol);
      };
    };
       
  }, 
  drawScopeDL = function(c, scope, col) {  
    var f, fstep, res,
        x0 = -1, y0 = -1, x1 = -1, y1 = -1,
        bound = {};
    
    fstep = (scope.f1-scope.f0)/(xscale(scope.f1)-xscale(scope.f0))*3;
    for (f=scope.f0; f<=scope.f1; f+=fstep) {
      res = getRes(scope, f);
      x0 = xscale(f);
      y0 = yscale(res);
      if (f == scope.f0) { bound.x0 = x0; bound.y0 = y0; };
      if (x1 != -1 && y1 != -1)
        c.line(x0, y0, x1, y1, col, 3.7);
      x1 = x0;
      y1 = y0;
    };
    /*res = getRes(scope, scope.f1, true);
    if (res > scope.px/1.5) bound.y1 = yscale(res);
    else */
    bound.y1 = y1;
    bound.x1 = x1; 
    return bound;
  },  
  drawScopeL = function(c, scope, col) {  
    var x0 = -1, y0 = -1, x1 = -1, y1 = -1;
    
    x0 = xscale(scope.f0);
    x1 = xscale(scope.f1);
      
    y0 = yscale(scope.r0);
    if (scope.r1)  
      y1 = yscale(scope.r1);
    else y1 = y0;
                  
    c.line(x0, y0, x1, y1, col, 2.5);
    return {x0:x0, y0:y0, x1:x1, y1:y1};    
  },
  drawMission = function(c, scope, top) {
    var x0, x1, x, h, sc, ori;

    if (!scope.hasOwnProperty("c") || scope.c == null) return top;

    x0 = xscale(scope.fl);
    x1 = xscale(scope.fh);
    h = top + SOBS.BARHEIGHT + 3;
    //left/right
    if (scope.c.search(/l/) != -1) {
      ori = "right";
      x = x0-16;
    } else {
      ori = "left";
      x = x1+16;
    };

    if (scope.c.search(/n/) != -1) { // && scope.c.search(/i/) == -1) {
      c.text(scope.n, x, h+6, SOBS.TEXTFONT, ori, SOBS.TEXTCOL);
    };  

    if (scope.c.search(/l/) != -1) {
      x = x1+4+scope.x;
    } else {
      x = x0-4+scope.x;
    };    
    if (scope.hasOwnProperty("img") && scope.img != null) {
      sc = scope.hasOwnProperty("sc") && scope.sc != null?scope.sc:1;
      drawImg(c, scope.img, sc, x, top+6+scope.y, ori);
    };

    return top + SOBS.BARHEIGHT + 6;
  },
  //Scope icon
  drawImg = function(c, img, scale, left, top, ori) {
    var im, w = 50*scale, x;

    x = ori=="right"?4:-w-4;
    im = new Image();
    im.onload = function(n) { c.image(this, left+x, top, w, this.height/this.width*w ) };
    im.src = img;
  },
  drawLine = function(c, scope, top) {
    var i, x1, x0, col;

    if (!scope.hasOwnProperty("c") || scope.c == null) return top;

    x0 = xscale(scope.f0);
    if (scope.f1 > xrange.hi) x1 = xscale(xrange.hi);
    else x1 = xscale(scope.f1);
    h =  top;

    col = getColor(scope);
      
    c.line(x0, h, x1, h, col, 4);
    c.vline(x0, h-7, 7, col, 1.2);
    if (scope.f1 <= xrange.hi) c.vline(x1, h-7, 7, col, 1.2);
    else c.dashline(x1, h, x1+16, h, col, 4, Cdraw.SDASH);
    
    if (scope.hasOwnProperty("p") && scope.p != null && scope.c.search(/x/) == -1) 
      c.text(scope.p + " " + scope.i, (x1+x0)/2, h+4, expfont, "center", SOBS.TEXTCOL, "top");
    else if (scope.hasOwnProperty("i") && scope.i != null && scope.c.search(/x/) == -1) 
      c.text(scope.i, (x1+x0)/2, h+4, expfont, "center", SOBS.TEXTCOL, "top");

    //y new line
    if (scope.c.search(/y/) != -1) return top +  + SOBS.BARHEIGHT;
    else return top;
  },
  //scale x-axis
  xscale = function(v) {
    var x = v;
    if (v > xrange.hi) x = xrange.hi;
    if (v < xrange.lo) x = xrange.lo;

    return (Math.LOG10E*Math.log(x) - xrange.off) * width/xrange.r;
  },
  //scale y-axis
  yscale = function(v) {
    var y = v;
    if (v > yrange.hi) y = yrange.hi;
    if (v < yrange.lo) y = yrange.lo;

    return height - (Math.LOG10E*Math.log(y) + yrange.off) * height/yrange.r;
  },
  getRes = function(scope, f, raw) {
    var t = 251643 * 299792500 / f / scope.d;
    if (raw === true) return t;
    return Math.sqrt(t*t + Math.pow(scope.px, 2));
  },
  getColor = function(scope) {
    if (SOBS.FUTURE && scope.st == "pl")  col = "#bba";
    else if (scope.st == "g") col = "#778";
    else if (scope.pur == "sol") col = "#ff0";
    else if (SOBS.mtype.hasOwnProperty(scope.tp)) col = SOBS.mtype[scope.tp].col;
    else col = gradient; //
    
    return col;
  };
  
  this.draw = function(c, tp, inst, w, h) {
    var i, bh = 0, top = 0, x, left = 0, misn = "";
    //cols, fonts, bevel

    height = h;
    c.setheight(h+bevel.y*2+18);
    width = w;
    ori.left.l = xscale(xrange.lo);
    ori.right.l = xscale(xrange.hi);
    c.setwidth(w+bevel.x+64);
    c.setexpfont(expfont);
    c.setfont(scalefont);
    c.setcolor(SOBS.TEXTCOL);
    type = tp;

    if (ypos == "left") {
      c.setviewport(bevel.x, bevel.y);
      c.fillrect(-bevel.x-10, -bevel.y-10, width+250, height+120, SOBS.BGCOL);
    } else {
      c.setviewport(30, bevel.y);
      c.fillrect(-30, -bevel.y-10, width+bevel.x+250, height+120, SOBS.BGCOL);    
    };

    if (type == "res") {    
      x = top;
      drawSpectrum(c, x+1);
      drawXAxis(c, x, height+SOBS.BARHEIGHT-6);
      drawYAxis(c, x);
      //for each Inst draw
      for (i=0; i<inst.length; i++) {
        if (inst[i].st.search(/o|g/) != -1) drawScope(c, inst[i]);
      };
      drawAbsoption(c, height-14);
    };

    if (type == "line") {
      top = 10;
      x = top;
      drawSpectrum(c, x);

      x += SOBS.BARHEIGHT;
      for (i=0; i<inst.length; i++) {
        if (inst[i].st.search(/o/) != -1) {
          if (inst[i].n != misn) {
            x = drawMission(c, inst[i], x);
            misn = inst[i].n;
          };
          x = drawLine(c, inst[i], x);
        };        
      };
      x += SOBS.BARHEIGHT*5;
      futurescopes = x;

       
      for (i=0; i<inst.length; i++) {
        if (inst[i].st.search(/pl/) != -1) {
          if (inst[i].n != misn) {
            x = drawMission(c, inst[i], x);
            misn = inst[i].n;
          };
          x = drawLine(c, inst[i], x);
        };        
      };

      x += SOBS.BARHEIGHT*2;
      drawAbsoption(c, x);
      x += SOBS.BARHEIGHT + 6;
      groundscopes = x;
      
      for (i=0; i<inst.length; i++) {
        if (inst[i].st.search(/g/) != -1) {
          if (inst[i].n != misn) {
            x = drawMission(c, inst[i], x);
            misn = inst[i].n;
          };
          drawLine(c, inst[i], x);
        };
      };

      drawXAxis(c, top, x+SOBS.BARHEIGHT-12);
      drawXAxis(c, futurescopes-SOBS.BARHEIGHT*2, 4);
      drawYAxis(c, top);
    
    };
  };
  
  
};