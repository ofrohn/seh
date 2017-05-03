/* global isNumber */
/*  Canvas object helper class
  v 1.0 methods encapsulating text, lines, rectangles, circle, linear gradients and images
        set canvas parameters via setparam(name, value)
        clipping region and viewport (x- y- translation)

  this.setheight = function(y) 
  this.setwidth = function(x)
  this.setclip = function(x, y, w, h)
  this.setclipcircle = function(x, y, r)
  this.setviewport = function(x, y)
  this.setparam = function(p, v)
  
  this.line = function(x0, y0, x1, y1, style, lwidth)
  this.hline = function(x, y, w, style, lwidth)
  this.vline = function(x, y, h, style, lwidth)
  this.vtick = function(x, y, h, style, lwidth)
  this.htick = function(x, y, w, style, lwidth)
  this.dashline = function(x0, y0, x1, y1, style, lwidth, pat)
  
  this.text = function(txt, x, y, fnt, align, style, baseline)
  this.vtext = function(txt, x, y, fnt, align, style)
  this.label = function(txt, x, y, r, d, fnt, style)
  this.number = function(txt, x, y, fnt, align, style)
  this.index = function(txt, x, y, fnt, align, style)
  this.textwidth = function(txt, fnt): width
  
  this.fillrect = function(x, y, w, h, style)
  this.strokerect = function(x, y, w, h, style, lwidth)
  this.roundedrect = function(x, y, w, h, r, style, lwidth)
  this.filldiamond = function(x, y, w, h, style)
  this.fillcircle = function(x, y, r, style) 
  this.strokecircle = function(x, y, r, style, lwidth)        
  this.fillellipsis = function(x, y, r, e, style)
  this.arc = function(x, y, r, a1, a2, dir, style, lwidth) 
  
  this.gradient = function(x0, x1, y, h, stops)
  this.makegradient = function(x0, y0, x1, y1, stops) :grad
      stops: [{pos:(0..1); col:(css-col)}, ..]
  this.image = function(img, x, y, w, h, dx, dy ,dw, dh)
  
  this.save = function() 
  this.restore = function() 
  this.scale = function(x, y) 
  this.rotate = function(ang, x, y) 
  
  this.startp = function(x, y, style, lwidth)
  this.movep = function(x, y)
  this.endp = function(x, y, dofill)
  
*/
function Cdraw(cid, params) {
  var id = cid || "canvas",
      canvas, ctx, width, height, parent,
      font = "normal 16px sans-serif",
      expfont = "normal 11px sans-serif",
      color = "#000",
      linewidth = "0.5",
      textalign = "left",
      baseline = "alphabetic",
      linejoin = "round",
      lineheight = 16,
      allowed = "globalAlpha,globalCompositeOperation,lineCap,lineJoin,miterLimit,shadowBlur,shadowColor,shadowOffsetX,shadowOffsetY";

  //try {
    canvas = document.getElementById(id);
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = id;
      canvas.style.top = 0;
      canvas.style.left = 0;
      if (params && params.hasOwnProperty("parent")) {
        parent = document.getElementById(params.parent); }
      if (!parent) { 
        parent = document.getElementsByTagName("body")[0]; }
      parent.appendChild(canvas);
    }
    if (!canvas.getContext) return null; 
    ctx = canvas.getContext("2d"); //, {alpha: false});
    if (!ctx.fillText) return null;
  //} 
  //catch(e) {
  //  return null;
  //}


  this.setheight = function(y) {
    if (!isNumber(y)) return; 
    canvas.height = y;
    height = y;
  };

  this.setwidth = function(x) {
    if (!isNumber(x)) return; 
    canvas.width = x;
    width = x;
  };

  this.setsize = function(pos) {
    if (typeof pos != "object" || !pos.hasOwnProperty("h") || !pos.hasOwnProperty("w")) return;
    canvas.width = pos.w;
    canvas.height = pos.h;
    width = pos.w;
    height = pos.h;
  };

  this.setfont = function(s) {
    if (!s) return;
    font = s;
  };

  this.setexpfont = function(s) {
    if (!s) return;
    expfont = s;
  };

  this.setcolor = function(s) {
    if (!s) return;
    color = s;
  };
 
  this.setclip = function(x, y, w, h) {
  // clipping region
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
  };

  this.setclipcircle = function(x, y, r) {
  // clipping region
    ctx.beginPath();
    ctx.arc(Math.round(x)+0.5, Math.round(y)+0.5, r, 0, Math.PI*2, true); 
    ctx.clip();
  };
  
  this.setviewport = function(x, y) {
    ctx.translate(x, y);
    width -= x;
    height -= y;
  };

  this.setparam = function(p, v) {
    //set canvas parameters 
    if (allowed.search(p) == -1) { return; }
    ctx[p] = v;
    this[p] = v;
  };
  
  var setParams = function(params) {
    var key, val;
    for (key in params) {
      if (params.hasOwnProperty(key)) { 
        val = params[key];
        switch(key) {
         case "width": if (isNumber(val)) { canvas.width = val; width = val; } break;
         case "height":  if (isNumber(val)) { canvas.height = val; height = val; } break;
         case "top": case "left": canvas.style[key] = val; break;
         case "className": canvas.className = val; break;
         case "font": font = val; break;
         case "color": color = val; break;
         default: {
           if (allowed.search(key) != -1) {
             ctx[key] = val;
             this[key] = val;
             //this.setparam(key, params[key]);
           }
         }
        }
      }
    }
  };
  
  this.line = function(x0, y0, x1, y1, style, lwidth) {
  //basic line drawing from x0,y0 to x1,y1
    ctx.strokeStyle = style || color;
    ctx.lineWidth = lwidth  || linewidth;
    ctx.beginPath();
    ctx.moveTo(Math.round(x0)+0.5,Math.round(y0)+0.5);
    ctx.lineTo(Math.round(x1)+0.5,Math.round(y1)+0.5);
    ctx.stroke();
  };
  
  this.hline = function(x, y, w, style, lwidth) {
  // horizontal line
     var lw = w || width;
     this.line(x, y, x+lw, y, style, lwidth);
  }; 

  this.vline = function(x, y, h, style, lwidth) {
  //vertical line
     var lh = h || height;
     this.line(x, y, x, y+lh, style, lwidth);
  }; 

  this.vtick = function(x, y, h, style, lwidth) {
  // vertical tickmark
     var lh = h || 4;
     this.line(x, y-lh, x, y+lh, style, lwidth);
  }; 

  this.htick = function(x, y, w, style, lwidth) {
  //horizontal tickmark
     var lw = w || 4;
     this.line(x-lw, y, x+lw, y, style, lwidth);
  };  
  
  this.cross = function(x, y, l, style, lwidth) {
    this.hline(x-l-1.5, y-0.5, l, style, lwidth);
    this.hline(x+0.5, y-0.5, l, style, lwidth);
    this.vline(x-0.5, y-l-1.5, l, style, lwidth);
    this.vline(x-0.5, y+0.5, l, style, lwidth);
  };
  
  this.dashline = function(x0, y0, x1, y1, style, lwidth, pat) {
     var lpat = pat || [4,4],
         sl = Math.atan2(x1-x0, y1-y0),
         l = Math.sqrt(Math.pow(y1-y0, 2) + Math.pow(x1-x0, 2)),
         x = x0,
         y = y0,
         nx = 0, ny = 0, i = 0;

     while(Math.sqrt(Math.pow(y0-y, 2) + Math.pow(x0-x, 2)) < l) {
       nx = x + Math.sin(sl) * lpat[i];
       ny = y + Math.cos(sl) * lpat[i];

       if (i % 2 === 0) {
         this.line(x, y, nx, ny, style, lwidth);
       }
       x = nx;
       y = ny;
       i = (i == lpat.length-1)?0:i+1;
     }
     
  };
  
  this.setdash = function(dash) {
    if (!ctx.setLineDash) return;
    if (dash) { ctx.setLineDash(dash); }
    else { ctx.setLineDash([0]); }
  };  
  
  
  this.text = function(txt, x, y, fnt, align, style, bline) {
    var s, i;
    if (!txt) { return; }
    txt = txt.toString();
    ctx.font = fnt || font;
    ctx.textAlign  = align || textalign;
    ctx.fillStyle = style || color;
    ctx.textBaseline = bline || baseline;
    if (txt.search(/\n/g) != -1) {
      s = txt.match(/[^\n]+/g);
      for (i=0; i<s.length; i++) {
        ctx.fillText(s[i], Math.round(x)+0.5, y+((i)*lineheight)); }
    } else {
      ctx.fillText(txt, Math.round(x)+0.5, y);
    }
  };
 
 
  this.vtext = function(txt, x, y, fnt, align, style, angle) {
     var rad;
     if (!angle) { rad = Math.PI*1.5; 
     } else { rad = Math.PI * angle/180; }
     ctx.save();
     ctx.translate(x, y);
     ctx.rotate(rad); 
     this.text(txt, 0, 0, fnt, align, style);    
     ctx.restore();     
  };
  
  //map label with orientation d
  this.label = function(txt, x, y, r, d, fnt, style) {
    var font = fnt || font,
        fillStyle = style || color,
        ld = d || "NE",
        textAlign  = "center",
        textBaseline = "middle",
        dx = 0, dy = 0, orient = this.relPos(ld, r);
    
    dx = orient.x;
    dy = orient.y;
    textBaseline = orient.v;
    textAlign = orient.h;
 
    this.text(txt, x+dx, y+dy, fnt, textAlign, fillStyle, textBaseline);
  };


  this.relPos = function(s, r) { 
    var dx = 0, dy = 0, dr, 
        va = "middle", ha = "center";   
    if (!s || !r || !isNumber(r) || r<=1)  return {x:0, y:0, h:ha, v:va}; 
    dr = Math.round(r/2);
    switch (s.toUpperCase()) {
      case "N": dy -= (r + dr); break;
      case "NE": dy -= (r - dr); dx += (r - dr); break;
      case "E": dx += (r + dr); break;
      case "SE": dy += (r - dr); dx += (r - dr); break;
      case "S": dy += (r + dr); break;
      case "SW": dy += (r - dr); dx -= (r - dr + 2); break;
      case "W": dx -= (r + dr); break;
      case "NW": dy -= (r - dr); dx -= (r - dr + 2); break;
      default: break;
    }
    if (s.search(/N/g) != -1) { va = "bottom"; }
    if (s.search(/S/g) != -1) { va = "top"; }
    if (s.search(/E/g) != -1) { ha = "left"; }
    if (s.search(/W/g) != -1) { ha = "right"; }
    return {x:dx, y:dy, h:ha, v:va};
  };


  //exponential number val\eexp as val x10^exp
  this.number = function(txt, x, y, fnt, align, style) {
     var lalign  = align || textalign,
         s, v, e;
     
     s = parseFloat(txt).toExponential().match(/(\d*)[eE]\+?(-?\d*)/);
     if (!s) {
       this.text(txt, x, y, fnt, align, style);
       return;
     }
     v = s[1];
     if (v != "1") { v += "\u00d710"; 
     } else { v = "10"; }
     
     e = s[2];

     
     
     if (lalign == "right") {
       ctx.font = expfont;
       this.text(v, x-ctx.measureText(e).width-1, y, fnt, lalign, style);
       this.text(e, x, y-4, expfont, lalign, style); 
     } else if (lalign == "center") {
       ctx.font = expfont;
       var we = ctx.measureText(e).width;
       ctx.font = fnt;
       var wv = ctx.measureText(v).width;
       var w = x - (wv + we) / 2;
       this.text(v, w, y, fnt, "left", style);
       this.text(e, w + wv + 1, y-4, expfont, "left", style); 
     } else {
       this.text(v, x, y, fnt, lalign, style);
       this.text(e, x+ctx.measureText(v).width+1, y-5, expfont, lalign, style); 
     }
  };
  
  this.index = function(txt, x, y, fnt, align, style, bline) {
  // indexed text < = sub; > = sup
     var lalign  = align || textalign,
         s, v, e, ind;
         
     s = txt.toString().match(/(.*)([<>])(.*)/);
     if (!s) {
       this.text(s, x, y, fnt, align, style, bline);
       return;
     }

     v = s[1];
     e = s[3];

     if (s[2].search(/>/)>=0) { ind = -4; }
     else { ind = 4; }
     
     if (lalign == "right") {
       ctx.font = expfont;
       this.text(v, x-ctx.measureText(e).width-1, y, fnt, lalign, style, bline);
       this.text(e, x, y+ind, expfont, lalign, style, bline); 
     } else if (lalign == "center") {
       this.text(v, x, y, fnt, "right", style, bline);
       this.text(e, x, y+ind, expfont, "left", style, bline); 
     } else {
       this.text(v, x, y, fnt, lalign, style, bline);
       this.text(e, x+ctx.measureText(v).width+1, y+ind, expfont, lalign, style, bline); 
     }
  };


  this.textwidth = function(txt, fnt) {
    ctx.font = fnt || font;
    return ctx.measureText(txt).width;
  };
  
  this.fillrect = function(x, y, w, h, style) {
    ctx.fillStyle = style || color;
    ctx.fillRect(x, y, w, h);
  };

  this.strokerect = function(x, y, w, h, style, lwidth)  {
    ctx.strokeStyle = style || color;
    ctx.lineWidth = lwidth  || linewidth;
    ctx.strokeRect(Math.round(x)+0.5, Math.round(y)+0.5, w, h);
  };


  this.filldiamond = function(x, y, w, h, style)  {
    ctx.fillStyle = style || color;
    ctx.beginPath();
    ctx.moveTo(x-w, y); 
    ctx.lineTo(x, y-h); 
    ctx.lineTo(x+w, y); 
    ctx.lineTo(x, y+h); 
    ctx.closePath();
    ctx.fill();
  };

  
  this.roundedrect = function(x, y, w, h, r, style, lwidth) {
    ctx.strokeStyle = style || color;
    ctx.lineWidth = lwidth  || linewidth;
    ctx.beginPath();
    ctx.moveTo(x, y+r);
    ctx.lineTo(x, y+h-r);
    ctx.quadraticCurveTo(x, y+h, x+r, y+h);
    ctx.lineTo(x+w-r, y+h);
    ctx.quadraticCurveTo(x+w, y+h, x+w, y+h-r);
    ctx.lineTo(x+w, y+r);
    ctx.quadraticCurveTo(x+w, y, x+w-r, y);
    ctx.lineTo(x+r, y);
    ctx.quadraticCurveTo(x, y, x, y+r);
    ctx.stroke();
  };
  
  this.fillcircle = function(x, y, r, style)  {
    ctx.fillStyle = style || color;
    ctx.beginPath();
    ctx.arc(Math.round(x)+0.5, Math.round(y)+0.5, r, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();      
  };
  

  this.fillellipsis = function(x, y, r, e, style)  {
    var le, dx, dy;
    ctx.fillStyle = style || color;
    
    le = e || 1;
    dx = r/2-0.5;
    dy = r/2-0.5;
    
    ctx.save();
    ctx.scale(1, 1/le); 
    ctx.beginPath();
    ctx.arc(Math.round(x)+0.5, Math.round(y*le)+0.5, r, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
    ctx.restore();      
  };

  this.strokecircle = function(x, y, r, style, lwidth)  {
    ctx.strokeStyle = style || color;
    ctx.lineWidth = lwidth  || linewidth;
    ctx.beginPath();
    ctx.arc(Math.round(x)+0.5, Math.round(y)+0.5, r, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.stroke();      
  };

  this.filltriangle = function(x, y, d, style)  {
    ctx.fillStyle = style || color;
    var r = Math.sqrt(d);
    ctx.beginPath();
    ctx.moveTo(x, y-r);
    ctx.lineTo(x+r, y+r);
    ctx.lineTo(x-r, y+r);
    ctx.closePath();
    ctx.fill();      
  };
  

  this.arc = function(x, y, r, a1, a2, dir, style, lwidth) {
    ctx.strokeStyle = style || color;
    ctx.lineWidth = lwidth  || linewidth;
    ctx.beginPath();
    ctx.arc(x, y, r, a1, a2, dir); 
    ctx.arc(x, y, r, a2, a1, !dir); 
    ctx.closePath();
    ctx.stroke();      
  };  

  
  this.gradient = function(x0, x1, y, h, stops) {
  // linear gradient in x-direction
  //stops: [{pos:(0..1); col:(css-col)}, ..]
    var grad = this.makegradient(x0, y, x1, y, stops);

    if (x0<x1) {
      this.fillrect(x0, y, x1-x0, h, grad);
    } else {
      this.fillrect(x1, y, x0-x1, h, grad);
    }
  };

  this.makegradient = function(x0, y0, x1, y1, stops) {
  // linear gradient 
  //stops: [{pos:(0..1); col:(css-col)}, ..]
    var grad = ctx.createLinearGradient(x0, y0, x1, y1);

    if ((typeof(stops) == "object") && (stops.constructor == Array)) {
      for (var i=0; i<stops.length; i++) {
        grad.addColorStop(stops[i].pos, stops[i].col);
      }
    }     
    return grad;
  };

  this.makeradialgradient = function(x0, y0, r0, x1, y1, r1, stops) {
  // radial gradient 
  //stops: [{pos:(0..1); col:(css-col)}, ..]
    var grad = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);

    if ((typeof(stops) == "object") && (stops.constructor == Array)) {
      for (var i=0; i<stops.length; i++) {
        grad.addColorStop(stops[i].pos, stops[i].col);
      }
    }
    return grad;
  };
  
  this.image = function(img, x, y, w, h, dx, dy ,dw, dh) {
  //image drawing; img can be path or DOM image
  //2 args: simple drawing; 4 args: scaling; 8 args: src-offset and scaling
    var limg;
    
    if (!img || (typeof(img)).search(/object|string/) == -1) return;

    if (img.constructor == String) {
      limg = new Image();
      limg.src = img;      
    } else if (img.src) {
      limg = img;
    } else return; 

    if (dx) {
      ctx.drawImage(limg, x, y, w, h, dx, dy, dw, dh);
    } else if (w) {
      ctx.drawImage(limg, x, y, w, h);
    } else {
      ctx.drawImage(limg, x, y);
    }
  };


  this.createpattern = function(img, repeat) {
    return ctx.createPattern(img, repeat);
  };  
  
  this.save = function() {
    ctx.save();  
  };  
  
  this.restore = function() {
    ctx.restore();  
  };  
  
  this.scale = function(x, y) {
    ctx.scale(x, y);  
  };  

  this.rotate = function(ang, x, y) {
    var rad, x0, y0;
    if (!ang) { rad = 0; }
    else { rad = Math.PI * ang/180; }
    x0 = x || 0;
    y0 = y || 0;
    ctx.translate(x0, y0);
    ctx.rotate(rad); 
  };

  // freehand path start
  this.startp = function(x, y, style, lwidth, bstyle) {
    ctx.fillStyle = style || color;
    ctx.strokeStyle = bstyle || ctx.fillStyle;
    ctx.lineWidth = lwidth  || linewidth;
    ctx.beginPath();
    ctx.moveTo(x, y);  
  };  

  // freehand path continue
  this.movep = function(x, y) {
    ctx.lineTo(x, y);  
  };  


  // freehand path arc
  this.arcp = function(x, y, r, a1, a2, dir) {
    ctx.arc(x, y, r, a1, a2, dir); 
  };  
  
  // freehand path end
  this.endp = function(x, y, dofill) {
    var filling = dofill || false;
    if (x && y) { ctx.lineTo(x, y); }
    ctx.closePath();
    if (filling) {
      ctx.fill();
    } 
    ctx.stroke();
    
  };  

  // freehand path end w/o close
  this.termp = function(x, y) {
    if (x && y) { ctx.lineTo(x, y); }
    ctx.stroke();
  };  
  
  this.clear = function() { 
    ctx.clearRect(0, 0, width, height);
  };
  
  this.Width = function() { return width; };
  this.Height = function() { return height; };
  
  setParams(params);
  width = canvas.width;
  height = canvas.height;
}

Cdraw.SOLID = [1];
Cdraw.DASH  = [4,4];
Cdraw.DOT   = [1.5,3.5];
Cdraw.LDASH = [8,8];
Cdraw.SDASH = [2,4];
Cdraw.DASHDOT = [4,4,1,4];
