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
  
  this.image = function(img, x, y, w, h, dx, dy, dw, dh) {
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

var Trig = {
  sinh: function (val) { return (Math.pow(Math.E, val)-Math.pow(Math.E, -val))/2; },
  cosh: function (val) { return (Math.pow(Math.E, val)+Math.pow(Math.E, -val))/2; },
  tanh: function (val) { return 2.0 / (1.0 + Math.exp(-2.0 * val)) - 1.0; },
  asinh: function (val) { return Math.log(val + Math.sqrt(val * val + 1)); },
  acosh: function (val) { return Math.log(val + Math.sqrt(val * val - 1)); },
  normalize0: function(val) {  return ((val + Math.PI*3) % (Math.PI*2)) - Math.PI;  },
  normalize: function(val) {  return ((val + Math.PI*2) % (Math.PI*2));  },  
  deg2rad: function(val)  {  return val * Math.PI / 180; },
  hour2rad: function(val) {  return val * Math.PI / 12; },
  rad2deg: function(val)  {  return val * 180 / Math.PI; },
  rad2hour: function(val) {  return val * 12 / Math.PI; },
  PI: Math.PI,
  PI2: Math.PI * 2,
  PI_2: Math.PI / 2
};

function Round(x, dg) { return(Math.round(Math.pow(10,dg)*x)/Math.pow(10,dg)); }
function sign(x) { return x ? x < 0 ? -1 : 1 : 0; }

var SI = {"a":1e-18, "f":1e-15, "p":1e-12, "n":1e-9, "u":1e-6, "\u03bc":1e-6, "m":1e-3, "c":1e-2, "k":1e3, "M":1e6, "G":1e9, "T":1e12, "P":1e15, "E":1e18};

function prefix(s) {
  if (SI.hasOwnProperty(s)) return SI[s]; 
  return 1;
}
function w2f(v) { return 299792458 / v; }
function e2f(v) { return v * 241798929678307; }


/*
function Matrix(ary) {
    this.mtx = ary;
    this.height = ary.length;
    this.width = ary[0].length;
}
 
Matrix.prototype.toString = function() {
    var s = [];
    for (var i = 0; i < this.mtx.length; i++) {
      s.push( this.mtx[i].join(",") );
    }
    return s.join("\n");
};
 
// returns a new matrix
Matrix.prototype.transpose = function() {
    var transposed = [];
    for (var i = 0; i < this.width; i++) {
        transposed[i] = [];
        for (var j = 0; j < this.height; j++) {
            transposed[i][j] = this.mtx[j][i];
        }
    }
    return new Matrix(transposed);
};

Matrix.prototype.mult = function(other) {
    if (this.width != other.height) {
        throw "error: incompatible sizes";
    }
 
    var result = [];
    for (var i = 0; i < this.height; i++) {
        result[i] = [];
        for (var j = 0; j < other.width; j++) {
            var sum = 0;
            for (var k = 0; k < this.width; k++) {
                sum += this.mtx[i][k] * other.mtx[k][j];
            }
            result[i][j] = sum;
        }
    }
    return new Matrix(result); 
};

// IdentityMatrix is a "subclass" of Matrix
function IdentityMatrix(n) {
    this.height = n;
    this.width = n;
    this.mtx = [];
    for (var i = 0; i < n; i++) {
        this.mtx[i] = [];
        for (var j = 0; j < n; j++) {
            this.mtx[i][j] = (i == j ? 1 : 0);
        }
    }
}
IdentityMatrix.prototype = Matrix.prototype;
 
// the Matrix exponentiation function
// returns a new matrix
Matrix.prototype.exp = function(n) {
    var result = new IdentityMatrix(this.height);
    for (var i = 1; i <= n; i++) {
        result = result.mult(this);
    }
    return  result; 
};*/
/*var a = new Matrix([[1,2],[3,4]])
var b = new Matrix([[-3,-8,3],[-2,1,4]]);
print(a.mult(b));*/
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
  if (node.style.maxHeight != "120px") {
    node.firstChild.style.display = "inline-block";
    node.style.maxHeight = px(120);
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

﻿/* global Common, SSEH */
/*jshint freeze: false */

//Create DOM-Objects br, div, span, img, a, textnode, table, tbody, tr, td
//and composites aimg, field, closex
//Parameters: par:parent node, clss:class, id:id, 
//s:content object; parameters:
//   n:name/abbrev, l:long name, c:css-color, i:image-src, u:link-url, t:target
//pos: position object; parameters: t:top, l:left, w:width, h:height
var Create = {
  br: function(par) { 
    var node = document.createElement("br"); 
    if (par) par.appendChild(node);
    return node; 
  },
  text: function(par, s) { 
    var node = document.createTextNode(s); 
    if (par) par.appendChild(node);
    return node;  
  },
  bold: function(par, s) { 
    var node = document.createElement("b"); 
    node.appendChild(document.createTextNode(s)); 
    if (par) par.appendChild(node);
    return node;  
  },
  div: function (par, clss, id, pos) {  
    var node = document.createElement("div");
    if (clss) node.className = clss;
    if (id) node.id = id;
    if (pos && typeof(pos) == "object") {
      if (pos.hasOwnProperty("t")) node.style.top = px(pos.t);
      if (pos.hasOwnProperty("l")) node.style.left = px(pos.l);
      if (pos.hasOwnProperty("h")) node.style.height = px(pos.h);
      if (pos.hasOwnProperty("w")) node.style.width = px(pos.w);
    }
    if (par) par.appendChild(node);
    return node;
  },
  span: function(par, s, clss, id) {  
    var ar, t, node = document.createElement("span");
    if (clss) node.className = clss;
    if (id) node.id = id;
    if (s) {
      t = s.n.toString();
      if (t.search(/\d/) != -1) t = this.number(t);
      node.innerHTML = t;
      if (s.l) {
        node.title = s.l;
        if (!s.u) node.style.cursor = "help";
      }
      if (s.c) node.style.color = s.c;
    }
    if (par) par.appendChild(node);
    return node;
  },
  a: function(par, s, clss) {  
    var node;
    if (!s.n && !s.u) return; 
    if (!s.u) return this.span(par, s, clss); 
    node = document.createElement("a");
    if (clss) node.className = clss;
    this.span(node, s, clss);
    node.href = s.u;
    if (s.t) node.target = s.t;
    if (par) par.appendChild(node);
    return node;
  },
  img: function(par, s, clss, id) {
    if (!s || typeof(s) != "object") return; 
    var node = document.createElement("img");
    if (clss) node.className = clss;
    if (id) node.id = id;
    node.src = s.i;
    if (s.hasOwnProperty("n")) node.title = s.l?s.l + " (" + s.n + ")":s.n;
    if (s.x) {
      if (s.hasOwnProperty("x")) node.style.left = px(s.x);
      if (s.hasOwnProperty("y")) node.style.top = px(s.y);
      if (s.hasOwnProperty("h")) node.style.height = px(s.h);
      if (s.hasOwnProperty("w")) node.style.width = px(s.w);
    }
    if (par) par.appendChild(node);
    return node;
  },
  aimg: function(par, s, clss) {
    var node;
    if (!s) return; 
    if (!s.u && !s.i) return this.span(par, s, clss); 
    if (s.i) {
      node = document.createElement("img");
      node.src = s.i;
      if (clss) node.className = clss;
      if (!s.n && !s.l && s.u) node.title = s.u;
      else node.title = s.l?s.l + " (" + s.n + ")":s.n;
    } else {
      node = this.span(null, s, clss);
    }
    if (s.u) {
      var nodeLnk = document.createElement("a");
      nodeLnk.href = s.u;
      if (s.t) nodeLnk.target = s.t;
      if (clss) nodeLnk.className = clss;
      nodeLnk.appendChild(node);
      if (par) par.appendChild(nodeLnk);
      return nodeLnk;
    }
    if (par) { par.appendChild(node); }
    return node;
  },
  table: function (par, clss, id) {  
    var node = document.createElement("table");
    if (clss) node.className = clss;
    if (id) node.id = id;
    if (par) par.appendChild(node);
    return node;
  },
  thead: function (par, clss) {  
    var node = document.createElement("thead");
    if (clss) node.className = clss;
    if (par) par.appendChild(node);
    return node;
  },
  tbody: function (par, clss) {  
    var node = document.createElement("tbody");
    if (clss) node.className = clss;
    if (par) par.appendChild(node);
    return node;
  },
  tr: function (par, clss, id) {  
    var node = document.createElement("tr");
    if (clss) node.className = clss;
    if (id) node.id = id;
    if (par) par.appendChild(node);
    return node;
  },
  td: function (par, s, clss) {  
    var node = document.createElement("td");
    if (clss) node.className = clss;
    if (s) {
      if (s.i) this.symbol(node, s.i, "missionFlag");
      this.span(node, s, clss);
    }
    if (par) par.appendChild(node);
    return node;
  },
  //parent, string|obj|array, break before/after, divider, css-class, id
  field: function (par, s, name, brk, sep, clss, id) { 
    var node, i, lsep;
    if (brk === true) this.br(par);
    if (!s || s == "-") return; 
    if (brk !== true && brk !== false) this.br(par);
    this.span(par, Common.names.find("t"+name), "category");
    if (isArray(s)) {
      lsep = sep || ", ";
      node = this.span(par, null, clss, id);
      for (i=0; i<s.length; i++) {
        if (i>0) this.text(node,lsep);
        this.span(node, s[i]);
      }
    } else if (s.hasOwnProperty("n")) {
      node = this.span(par, s, clss, id);
    } else {
      node = this.span(par, {n:s}, clss, id);
    }
    return node;
  },
  closex: function (par) {  
    var lnk = this.a(par, {n:"x", u:"javascript:UI.vanish()"}, "close");
    lnk.style.left = px(SSEH.BOXWIDTH-3);  
    lnk.title = "Close box";
  },
  symbol: function (par, type, clss, scale) {
     var sc, img, node = this.div(par, clss);
     img = Common.sprites[type];
     sc = scale || 1;
     node.title = img.n;
     node.style.background = "url(" + Common.symbols.sprite.src + ") " + -img.x/sc + "px " + -img.y/sc + "px / " + px(240/sc);
     //node-style.backgroundSize = px();
     return node;
  },
  asymbol: function (par, s, clss, scale) {
     var sc, img, node;
     if (!s) return; 
     if (!Common.sprites.hasOwnProperty(s.k)) return this.a(par, s, clss+"W"); 
     if (s.u) node = this.a(par, {u:s.u, t:"_blank", n:"\u00a0"}, clss);
     else node = this.div(par, clss);

     img = Common.sprites[s.k];
     sc = scale || 1;
     node.title = s.k.search(/ext|tw|globe/) != -1?s.u:img.n;
     node.style.background = "url(" + Common.symbols.sprite.src + ") " + -img.x/sc + "px " + -img.y/sc + "px / " + px(240/sc);
     //node.style.backgroundSize = px();
     return node;
  },
  number: function(s) {
    var res = s.replace(/(\d)[eE]\+?(-?[\d]+)/g, "$1\u00d710<sup>$2</sup>");
    res = res.replace(/\^\+?(-?[\d]+)/g, "<sup>$1</sup>");
    return res;
  }
};


var Read = {
  //Generic Name {n,l}  name, long
  string: function(s, abbrev) {
    if (!s) return; 
    if (s.length == 1) return {n:s[0]}; 
    if (s[0].length <= 3 && !abbrev) return {n:s[1] + " (" + s[0] + ")"}; 
    else return {n:s[0], l:s[1]}; 
  },  
  //Generic data reading n1:l1;n2:l2 -> [[n1,l1],[n2,l2]]  2-dim Array of name, long
  data: function(s) {
    var t, i, res = [];
    if (!s) return []; 
    
    t = s.split(";");
    if (t.length < 1) return []; 
    for (i=0; i<t.length; i++) {
      res[i] = t[i].split(":");
    }
    return res;
  },
  //Generic Url {n,l,u,t,k} name, long, url, target, sprite-index
  url: function(s, def) {
    var t, res;
    if (!s) return; 
    
    if (s.length > 1) {
      t = s[1];
      res = Common.names.find(s[0], false);
    } else if (def) {
      t = s[0];
      res = Common.names.find(def);
    } else {
      t = s[0];
      res = Common.names.find("More");
    }
    if (t.search(/^[\.\/]/) == -1) {
      t = "http://" + t;
      res.t = "_blank";
    }
    res.u = t;
    if (s[0] == "weather" || s[0] == "haz")  {
      res.k = s[0];
    }
    if (s[0] == "tw")  {
      res.n = "@" + res.u.replace(/.*\//, "");
    }
    return res;
  }
};


String.prototype.toCommaString = function() {
  var p = this.split(".");
  p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return p.join(".");
};

Number.prototype.toCommaString = function() {
  var p = this.toString().split(".");
  p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return p.join(".");
};

String.prototype.toScience = function() {
  var ar, res, pre = "";
  ar = this.match(/(^\D+)/);
  if (ar !== null) {
    pre = ar[1];
    res = parseFloat(this.substring(pre.length)).toPrecision(4);
  } else {
    res = parseFloat(this).toPrecision(4);
  }
  res = res.replace(/\.?0+[eE]/, "e");
    
  return pre + res;
};

Number.prototype.toScience = function() {
  var ar, res = this.toPrecision(4);
  res = res.replace(/\.?0+[eE]/, "e");
  return res;
};

Array.prototype.unique = function(a) {
  return function(){ return this.filter(a); };
}(function(a,b,c){ return c.indexOf(a,b+1)<0; } );


Date.prototype.add = function(val, type) {
  var t, ldt = this.valueOf();
  if (!val) return; 
  t = type || "d";
  switch (t) {
    case 'y': case 'yr': ldt += 31556926080*val; break;
    case 'm': case 'mo': ldt += 2629800000*val; break;
    case 'd': case 'dy': ldt += 86400000*val; break;
    case 'h': case 'hr': ldt += 3600000*val; break;
    case 'n': case 'mn': case 'mon': ldt += 60000*val; break;
    case 's': case 'sec': ldt += 1000*val; break;
    case 'ms': ldt += val; break;
  }
  return new Date(ldt);
};
//Datediff in selected intervals
Date.prototype.diff = function(deldt, type) {
  var ldt, t, con;
  if (!deldt) return; 
  ldt = deldt.valueOf() - this.valueOf();
  t = type || "d";
  switch (t) {
    case 'y': case 'yr': ldt /= 31556926080; break;
    case 'm': case 'mo': ldt /= 2629800000; break;
    case 'd': case 'dy': ldt /= 86400000; break;
    case 'h': case 'hr': ldt /= 3600000; break;
    case 'n': case 'mn': ldt /= 60000; break;
    case 's': case 'sec': ldt /= 1000; break;
    case 'ms': break;    
  }
  return ldt;
  //return Math.floor(ldt);
};
if (!Date.prototype.toISOString) {
  Date.prototype.toISOString = function() {
    function pad(n) { return n < 10 ? '0' + n : n; }
    return this.getUTCFullYear() + '-' + pad(this.getUTCMonth() + 1) + '-' + pad(this.getUTCDate());
    //+ 'T' + pad(this.getUTCHours()) + ':' + pad(this.getUTCMinutes()) + ':' + pad(this.getUTCSeconds()) + 'Z';
  };
}
Date.prototype.frac = function() {
  return (this.getHours() + this.getTimezoneOffset()/60.0 + this.getMinutes()/60.0 + this.getSeconds()/3600.0) / 24;
};


function isNumber(n) { return !isNaN(parseFloat(n)) && isFinite(n); }
function isArray(x) { return Object.prototype.toString.call(x) === "[object Array]"; }
function logError(what, e) { console.log(what, e); }
function px(val) { return val + "px"; }



﻿/* global Common, Read, Round, objects */

/*parse functions parse formatted strings, return string or number
  unit  km|m|e|kg|au|i  -> proper unit
  distance  num[mi|km|m|au|i|e|]  -> num+unit
  orbit num[km|AU|]xnum[km|AU|]xnum[e]xnum[i]  -> dist x dist[ x dist]..
  elements  a, e, i   -> dist [x ecc] [x incl]
  radius num[km|au][/num]  rad/ellipt
  rad    dec. radius
  range
  thickness
  thick   dec. thickness
  rotation
  velocity
  position  num[NSEW],num[NSEW]  ->  num+deg+unit
  pos   dec. position
  coord num[NSEW],num[NSEW]  ->  +-num,+-num
  date  yyyy-mm-dd|L+num[d|m|y]  -> datestring
  dt  date-obj.
  comp
  atm
  mag
  mass  num+unit
  time
  sumTYpe, sumField  table row/col sum
*/
var Parse = {
  unit: function(s) {
    //return "";
    var res = "", ar = null;
    if (!s) return; 
    switch(s) {
      case "kN":
      case "km":
      case "m":
      case "e":
      case "kg": return Common.SPC + s;
      case "au": return Common.SPC + s.toUpperCase();
      case "deg": case "i": return "\u00b0";
    }
  },
  distance: function(s, p) {
    var res = "", ar = null;
    s = s.toString();
    ar = s.match(/([\-\d\.e\^]*\d)(mi|km|m|au|deg|i|e)?/);
    if (ar !== null) {
      switch (ar[2]) {
        case "m": res = ar[1].toCommaString() + Common.SPC + "m"; break; 
        case "km": res = ar[1].toCommaString() + Common.SPC + "km"; break; 
        case "mi": res = Math.round(ar[1]*1.609344).toCommaString() + Common.SPC + "km"; break; 
        case "au": res = ar[1] + Common.SPC + "AU"; break;
        case "deg": case "i": res = ar[1] + "\u00b0"; break; 
        case "e": res = ar[1] + ""; break; 
        case undefined: var r = Common.names.findRadius(p);
                  if (r) { res = Math.round((ar[1]-1)*r).toCommaString() + Common.SPC + "km"; }
                  else { res = ar[1].toCommaString(); }
                  break; 
        default: return "";
      }
    }
    return res;
  },
  orbit: function(s, p) {
    var i, res = "", u, t = null;
    t = s.split("x");
    if (t.length > 1 && t[0].search(/[a-z]/i) == -1 && t[1].search(/[a-z]/i) != -1) {
      u = t[1].match(/(km|au)/);
      if (u !== null) { t[0] += u[1]; }
    }
    for (i=0; i<t.length; i++) {
      if (res !== "") { res += Common.TSPC + "\u00d7" + Common.TSPC; }
      res += this.distance(t[i], p);
    }
    u = res.match(/(km|au)/ig);
    if (u !== null && u.length > 1) {
      res = res.replace(/^(\-?\d+)\s?km|\s?au/i, "$1");
    }
    return res;
  },
  elements: function(s, t) {
    var unit, r, a, e, q, Q, ar;
    if (!s.a) return; 
    if (t && t == "aei") {
      a = this.distance(s.a);
      if (s.e && s.e !== "") { a += Common.TSPC + "\u00d7" + Common.TSPC + s.e; }
      if (s.i && s.i !== "") { a += Common.TSPC + "\u00d7" + Common.TSPC + this.distance(s.i+"i"); }
      return a;
    } else {
      if (!s.e) return s.a; 
      ar = s.a.match(/([\d\.e]+)\s?(km|au)/);
      if (ar === null) return s.a; 
      unit = this.unit(ar[2]);
      r = (unit.search(/km/) != -1)?0:3;
      a = parseFloat(ar[1]);
      e = parseFloat(s.e);
      q = Round(a*(1-e), r);
      Q = Round(a*(1+e), r);
      return q.toCommaString() + Common.TSPC + "\u00d7" + Common.TSPC + Q.toCommaString() + unit + Common.TSPC + "\u00d7" + Common.TSPC + this.distance(s.i+"i");
    }
  },
  diameter: function(s) {
    var res = "", ar = null;
    if (!s && s === "") {  return; }
    if (s.search(/\//) != -1) {
      ar = s.split("/");
      return ar[0].toCommaString().replace(/(km)/, Common.SPC + "$1/") + ar[1];
    } else if (s.search(/x/) != -1) {
      return s.replace(/x/g, Common.TSPC + "\u00d7" + Common.TSPC).replace(/(km)/, Common.SPC + "$1");   
    } else return s.toCommaString().replace(/(km)/, Common.SPC + "$1"); 
  },
  rad: function(s) {
    var res = 0, i, ar = null;
    if (!s && s === "") return; 
    if (s.search(/x/) != -1) {
      ar = s.split("x");
      for (i=0;i<ar.length;i++) { res += parseFloat(ar[i]) / 2; }
      res /= ar.length;
    } else if (s.search(/\.\./) != -1) {
      ar = s.split("..");
      for (i=0;i<ar.length;i++) { res += parseFloat(ar[i]) / 2; }
      res /= ar.length;
    } else if (s.search(/\//) != -1) {
      ar = s.split("/");
      res = parseFloat(ar[0]) / 2; 
      res += res * parseFloat(ar[1]) / 4;
    } else { res = parseFloat(s) / 2; }
    return res;
  },
  range: function(s) {
    var res = "", ar = null;
    if (!s && s === "") return; 
    ar = s.split("..");
    res = parseFloat(ar[0]).toCommaString();
    if (ar.length > 1) {
      res += "\u2026" + parseFloat(ar[1]).toCommaString();
    }
    return res + "km";   
  },
  band: function(s) {
    var t, ar, unit, res = "";
    
    if (!s && s === "") return; 
    t = s.match(/([a-zA-Z]+)/);
    if (t !== null) {
      unit = t[1];
    } else { unit = "Hz"; }
    ar = s.split("..");
    res = parseFloat(ar[0]).toCommaString();
    if (ar.length > 1) {
      res += "\u2026" + parseFloat(ar[1]).toCommaString();
    }
    return res + "km";   
  },
  thickness: function(s) {
    var i, unit = "km", res = "", ar = null;
    if (!s || s === "") return; 
    ar = s.split("..");
    for (i=0; i<ar.length; i++) {
      if (i>0) { res += "\u2026"; }
      if (parseFloat(ar[i]) < 0.1) {
        res += Math.round(parseFloat(ar[i])*1000);
        unit = "m";
      } else if (ar[i].search(/[eE]/) != -1) {
        res += ar[i];
      } else {
        res += parseFloat(ar[i]).toCommaString();
      }
    }
    return res + Common.SPC + unit;   
  },
  thick: function(s) {
    if (!s || s === "") return 1e-3; 
    var i, res=0, ar = s.split("..");
    for (i=0;i<ar.length;i++) { res += parseFloat(ar[i]); }
    res /= ar.length;
    return res;
  },
  rotation: function(s) {
    var res;
    if (!s || s === "") return; 
    switch (s.toLowerCase()) {
      case "s": res = Common.names.find("sync").n; break;
      case "c": res = Common.names.find("chao").n; break;
      default: res = Parse.time(s);
    }
    return res;
  },
  velocity: function(s) {
    var res = "", ar = null;
    if (!s) return; 
    ar = s.match(/([\d\.]+)(kms)?/);
    if (ar !== null) {
      switch (ar[2]) {
       case "kms": res = ar[1] + Common.SPC + "km/s"; break; 
       case undefined: break; 
       default: return "";
      }
    }
    return res;
  },
  position: function(s) {
    var DEG = "\u00b0", ar = null;
    ar = s.match(/([\d\.]+)([NS])\,([\d\.]+)([EW])/i);
    if (ar !== null) return ar[1] + DEG + ar[2] + ", " + ar[3] + DEG + ar[4]; 
  
    ar = s.match(/([\d\.]+)([EW])\,([\d\.]+)([NS])/i);
    if (ar !== null) return ar[3] + DEG + ar[4] + ", " + ar[1] + DEG + ar[2]; 
    
    ar = s.match(/([\d\.]+)([NSEW])/);
    if (ar !== null) return ar[1] + DEG + ar[2]; 
  },
  pos: function(s) {
    var ar,n=null,e=null;
    if (!s) return; 
    ar = s.match(/([\d\.]+)([NS])\,([\d\.]+)([EW])/i);
    if (ar !== null) {
      n = parseFloat(ar[1]); 
      if (ar[2] == "S") { n = -n; }
      e = parseFloat(ar[3]); 
      if (ar[4] == "W") { e = -e; }
    } else {
      ar = s.match(/([\d\.]+)([EW])\,([\d\.]+)([NS])/i);
      if (ar !== null) {
        n = parseFloat(ar[3]); 
        if (ar[4] == "S") { n = -n; }
        e = parseFloat(ar[1]); 
        if (ar[2] == "W") { e = -e; }
      }
    }
    if (n !== null && e !== null) {
      if (e>180) { e -= 360; }
      if (e<-180) { e += 360; }
      return n + "," + e;
    }
  },
  date: function(s, dt) {
    var unit, val, res = "", t = null;
    if (!s) return; 
    if (s.search(/^l/) == -1) {
      t = s.split("..");
      for (var i=0; i<t.length; i++) {
        if (i>0) { res += "\u2026"; }
        res += t[i];
      }
    } else {
      t = s.match(/^l\+([\d\.\?]+)(\w+)?/);
      if (t !== null) {
        if (!dt) {
          switch (t[2]) {
            case "hr": unit = "hr"; break;
            case "dy": unit = "dy"; break;
            case "mo": unit = "mon"; break;
            case "yr": unit = "yr"; break;
            default: unit = "";  
          }
          res = "L+" + t[1] + Common.SPC + unit;
        } else {
          if (t[1].search(/\?/) != -1) { res = "?"; }
          else {
            val = dt.add(t[1], t[2]);
            res = val.toISOString().slice(0,7);
          }
        }
      }
    }
    return res;
  },
  dt: function(s, d0) {
    var t;
    if (!s) return; 
    if (d0 && s.search(/^l/i) !== -1) {
      t = s.split(/[\+\u202f]/);
       return d0.add(t[1], t[2]);
    }
    t = s.split(".");
    if (t.length < 1) return; 
    t = t[0].split("-");
    t[0] = t[0].replace(/\D/g, "");
    if (!t[0]) return; 
    t[1] = t[1]?t[1].replace(/\D/g, ""):"1";
    t[2] = t[2]?t[2].replace(/\D/g, ""):"1";
    
    return new Date(t[0], t[1]-1, t[2]);
  },
  comp: function(s) {
    var i, pre, ar, par, res = "";
    if (!s || s === "") return; 
    ar = s.split("+");
    for (i=0; i<ar.length; i++) {
      par = ar[i].split(":");
      if (par[0] == "poro") { 
        par[0] = "Porosity"; pre = ";" + Common.SPC; 
      } else if (par[0] == "dust") { 
        par[0] = "Dust"; pre = ";" + Common.SPC; 
      } else if (par[0] == "core") { 
        par[0] = "Core"; pre = ";" + Common.SPC; 
      } else {  pre = Common.SPC + "+" + Common.SPC;  }
      if (i>0) { res += pre; }
      res += (par.length > 1)?par[0] + ":" + Common.SPC + par[1] + "%":par[0];
    }
    return res;
  },
  atm: function(s) {
    var ar, res = "";
    if (s.atm && s.atm !== "") { res = this.comp(s.atm); }
    if (s.atp) {
      if (s.atp.search(/trace/) == -1)  {
        res += " (" + s.atp + Common.SPC + "bar)";
      } else {
        res += " (" + s.atp + ")";
      }
    }
    return res;
  },
  mag: function(s) {
    var res = "";
    if (s.dip && s.dip !== "") {
      res = s.dip + Common.SPC + "Gauss";
    }
    if (s.dipt) {
       res += "; Tilt:" + s.dipt + this.unit("i");
    }
    return res;
  },
  mass: function(s, p) {
    var t, ar, res, unit;
    if (!s) return; 
    res = s;
    unit = s.replace(/[\d\.\-e~<,]/g, "");
    if (unit.length < 1 && p) {
      res = (parseFloat(s) * p).toScience();
    } else if (s.search(/^\D/) !== -1) {
      res = s.replace(unit, "");
    } else {
      res = parseFloat(s).toScience();
    }
    if (s.search(/\.\./) != -1) {
       ar = s.split("..");
       res += "\u2026" + parseFloat(ar[1]).toScience();
    }
    if (unit === "") { unit = "kg"; }
    return res + Common.SPC + unit;
  },
  time: function(s) {
    if (!s) return; 
    var res = "", unit, t = null;
    t = s.match(/^([-~e\d\.\?]+)(\w+)?/);
    if (t !== null) {
      switch (t[2]) {
        case "s": unit = "s"; break;
        case "mn": case "n": unit = "min"; break;
        case "hr": case "h": unit = "h"; break;
        case "dy": case "d": unit = "d"; break;
        case "mo": case "m": unit = "mon"; break;
        case "yr": case "y": case "a": unit = "a"; break;
        default: unit = t[2];  
      }
      res = t[1] + Common.SPC + unit;
    }
    return res;
  },
  sumType: function(row) {
    var fld, sum = 0;
    for (fld in row) {
      if (row.hasOwnProperty(fld)) { sum += row[fld]; }
    }
    return sum;
  },
  sumField: function(obj, fld) {
    var tp, sum = 0;
    for (tp in obj) {
      if (obj.hasOwnProperty(tp)) { sum += obj[tp][fld]; }
    }
    return sum;
  }
};

var parseObject = function(dest) {
//Preformatted fields and numeric data (dist, incl, radius, [height, opacity]
  var key, _type, _dest, _parent = {}, _data = {},
  
  //description params
  parseDesc = function() {
    var ar, par, i;
    ar = _data.desc.split(";");
    
    for (i=0; i<ar.length; i++) {
      par = ar[i].split(":");
      
      switch (par[0]) {
        case "url":  if (par.length > 1) { _data.hp =  "http://" + par[1]; } break; 
        case "sc": _data.scale = parseFloat(par[1]); break;
        case "scmoons": _data.scmoons = parseFloat(par[1]); break;
        case "orb": _data.orb = par[1]; break;   
        case "moon": _data.moons = par[1]; break;
        case "opa": _data.opa = parseFloat(par[1]); break;
        case "rsize": _data.rsize = par[1].split(","); break;   
        case "x": _data.x = parseInt(par[1]); break;   
        case "y": _data.y = parseInt(par[1]); break;   
      }
    }
    if (!_data.scale) { _data.scale = 1; }
 
    if (!_data.moons) { 
      _data.moons = ""; 
    } else {
      ar = _data.moons.split(",");
      for (i=0; i<ar.length; i++) {
        ar[i] = Common.names.find(ar[i]).n;
      }
      _data.moons = ar.join(", ");
    }
    
  },

  parsePeri = function() {
    var ar;
    //next perihelion
    if (_data.peri && _data.peri !== "") {
      ar = _data.peri.split(":");
      _data.peri = ar[1];
      _data.peri += " (" + Parse.distance(ar[0]) + ")";
    }
  },

  parseGroup = function() {  
    var i, ar;
    if (_data.gr && _data.gr !== "") {
      ar = _data.gr.split(/[\;\:]/);
      for (i=0; i<ar.length; i++) {
        ar[i] = Common.names.find(ar[i]).n;
      }
      _data.group = ar.join(", ");
    }
  },
    
  parseCensus = function() {  
    var i, ar, t;
    if (_data.cen && _data.cen !== "") {
      ar = _data.cen.split(/\;/);
      for (i=0; i<ar.length; i++) {
        t = ar[i].split(/\:/);
        ar[i] = t[0] + ": "+ t[1];
      }
      _data.census = ar.join(", ");
    }
  },
    
  parseUrl = function() {  
    var i, ar, t, res = [];
    if (_data.url && _data.url !== "") {
      ar = _data.url.split(/\;/);
      for (i=0; i<ar.length; i++) {
        t = ar[i].split(/\:/);
        res.push(Read.url(t));
      }
      _data.url = res;
    }
  };

  _dest = dest;
  _data.acr = dest;
  
  for (key in objects[_dest]) {
    if (objects[_dest].hasOwnProperty(key)) {
      _data[key] = objects[_dest][key];
    }
  }

  _type = _data.type;
  _parent.mass = Common.names.findMass(_data.par);

  
  if (_data.img && _data.img !== "") { 
    _data.img = Common.symbols[_dest]; 
  } else { _data.img = null; }

  //if (_data.map && _data.map != "") { _data.map = Common.symbols[_dest+"map"]; };

  if (_type == "m" && _data.desig && _data.desig !== "") {
    _data.fname = _data.desig + " " + _data.name;
  } else if (_type == "r")  {  //Ring name
    if (_data.name && _data.name.search(/Division|Arc|Gap/) == -1) {
      _data.name += " Ring";
    }
    if (_data.other && _data.other !== "") {
      _data.fname = _data.name + " (" + _data.other + ")";
    } else { _data.fname = _data.name; }
  } else if (_type == "c") {
    if (_data.desig && _data.desig !== "") {
      _data.fname = _data.desig + "/" + _data.name;
    } else { _data.fname = _data.name; }
  } else if (_type == "a" || _type == "d" || _type == "t") {
    if (_data.desig && _data.desig !== "") {
      _data.fname = "(" + _data.desig + ") " + _data.name;
    } else { _data.fname = _data.name; }
  } else {
    _data.fname = _data.name;
  }
   
  //Diameter text & numeric radius
  if (_data.dia && _data.dia !== "") {
    _data.diam = Parse.diameter(_data.dia);
    _data.eqrad = parseFloat(_data.dia) / 2;
    _data.rad = Parse.rad(_data.dia);
  } else { _data.diam = "-"; }
  
  //Ring data
  if (_type == "r") {
    _data.w = _data.diam ? _data.diam : "-";
    if (!_data.rad) { _data.rad = 1; }
    //thickness
    if (_data.thick && _data.thick !== "") {
      _data.h = Parse.thickness(_data.thick); 
      _data.th = Parse.thick(_data.thick);
    }
    if (!_data.th) { _data.th = 1e-3; }
    if (!_data.h) { _data.h = "-"; }
    //inner edge
    if (_data.rad) { _data.peri = Math.round(parseFloat(_data.a) - _data.rad); }
    else { _data.peri = parseFloat(_data.a); }
    _data.dist = Parse.distance(_data.peri + "km");
    //Arc length
    if (_data.len && _data.len !== "") { _data.len = Parse.distance(_data.len + "i"); }
    //Opt. depth
    if (_data.opt && _data.opt !== "") { _data.opt = _data.opt.replace("..", "\u2026"); }
  }
  
  //SBO data
  if  (_type.search(/^(d|a|c|t)$/) != -1) {
    parseGroup();
    parsePeri(); 
  }
  if  (_type.search(/^(b)$/) != -1) {
    parseCensus();
  }
  
  //Moon & Rings
  if (_type == "p" || _type == "d") {
    _data.nmoons = 0;
    _data.nrings = 0;
    for (key in objects) {
      if (objects[key].par == _dest) {
        if (objects[key].type == "m") { _data.nmoons++; }
        if (objects[key].type == "r") { _data.nrings++; }
      }
    }
  } 
  
  //orbit
  _data.orbit = Parse.elements(_data, "aei");
  if (_data.tilt) { _data.tilt += Parse.unit("i"); }
  _data.per = Parse.time(_data.per);
  _data.rot = Parse.rotation(_data.rot); 
  
  if (_data.dens && _data.dens !== "") { _data.dens += Common.SPC + "g/cm^3"; }
  if (_data.grav && _data.grav !== "") { _data.grav += Common.SPC + "g"; }
  if (_data.irad && _data.irad !== "") { _data.irad += Common.SPC + "W/m^3"; }
  //Surface density
  if (_data.sdens && _data.sdens !== "") { _data.sdens += Common.SPC + "g/cm^2"; }
  if (_data.temp && _data.temp !== "") { _data.temp = _data.temp.replace(/K/g, Common.SPC + "K"); }

  _data.comp = Parse.comp(_data.comp);  //Body composition
  //Spectral type
  if (_data.spec && _data.spec !== "") { _data.comp += " (" + _data.spec + "-Type)"; }

  _data.atm = Parse.atm(_data);         //Atmosphere composition
  _data.mag = Parse.mag(_data);         //Magnetic filed
  _data.mass = Parse.mass(_data.mass, _parent.mass);  //Body mass

  if (_data.disc && _data.disc !== "" && _data.dyr !== "") {
    _data.disc = _data.disc + ", " + _data.dyr;
  }
 
  parseUrl(); 
  parseDesc(); 
  
  return _data;
};
/*
var parseMission = function(id) {
  //Formatted and numeric (dt, col) data
  var i, _id, _in, _data, _dtl,

  //Event date {n}  
  readDate = function(n) {
    var res = [], dtl = _timeline[0].d;
    if (_in.events.length < n+1 || !_in.events[n].dt) return;
    if (_in.events[0].dt.length <= 4) {
      res.push({n:Parse.date(_in.events[n].dt)});
    } else {
      res.push({n:Parse.date(_in.events[n].dt, dtl)});
    };
    if (_in.events[n].dt.search(/\.\./) != -1) res[0].w = true;
    return res;
  },

  //Event type {n,l} 
  readType = function(n) {
    vars, t, res = [];
    if (_in.events.length < n+1 || !_in.events[n].type) return;
    s = _in.events[n].type;
    if (s == "ev") return;

    t = _in.events[n].loc.split(":");
    if (s.search(/\boi|fb|f|app|ae|imp|edl|td|enc\b/) != -1) {
      if (t[0] != "sol") res.push(Common.names.find(t[0]));
      //else if (t[0].length > 2) res.push(Common.names.find(t[1]));
    };
    res.push(Common.names.find(s));
    
    return res;      
  },
  
  //Event location {n,l}
  readLoc = function(n) {
    var t, i, res = [], p;
    if (_in.events.length < n+1 || !_in.events[n].loc) return res;
    t = _in.events[n].loc.split(":");

    p = t[0];
    for (i=1; i<t.length; i++) {
      if (t[i].search(/^\d/) == -1) res.push(Common.names.find(t[i]));
      else if (t[i].search(/[NSEW]/) != -1) res.push({n:Parse.position(t[i])});
      else if (t[i].search(/x/) != -1) res.push({n:Parse.orbit(t[i], p)});
      else res.push({n:Parse.distance(t[i], p)}); 
    };
    return res;
    
  },
  
  //Event description {n,l,d,v}  
  readDesc = function(n) {
    var i, j, res = [], t = null, u;
    if (_in.events.length < n+1 || !_in.events[n].desc) return;
    t = readData(_in.events[n].desc);
    for (i=0; i<t.length; i++) {
      if (t[i].length == 1) {
        if (t[i][0].search(/\//) != -1) {
          u  = t[i][0].split("/");
          for (j=0; j<u.length; j++) {
            res.push(Common.names.find(u[j]));
            res[res.length-1].v = "/";
          };
        } else {
          if (n == _in.events.length-1 && (t[i] == "eom" || t[i] == "?")) continue;
          res.push(Common.names.find(t[i]));
        };
      } else {
        if ("show,eom".search(t[i][0]) != -1) continue; 
        if ("com,ast,dp,op".search(t[i][0]) == -1) res.push(Common.names.find(t[i][0]));
        else res.push(Common.names.find(t[i][1]));
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
          case "eom": if (t[i].length != 2) break;   
          case "ip": 
          case "ssp": 
          case "lp": 
          //case "dp": 
          case "mal": 
          case "fail": res.push(Common.names.find(t[i][1])); res[res.length-1].v = ": "; break;
          case "end":
          case "los": res[res.length-1].d = Parse.date(t[i][1]); break;
          case "tm": 
          case "per": res[res.length-1].d = Parse.time(t[i][1]); break;
          case "mat": res[res.length-1].d = Parse.mass(t[i][1]); break;
          case "enc": res[res.length-1].d = Parse.date(t[i][1]); break;
          default: if (t[i][0].length > 3) res[res.length-1].l = t[i][1];  
        };
      };
    };
    return res;
    
  };

  if (!id || !mission.hasOwnProperty(id)) return;

  _id = id;
  _in = mission[_id];
  _data = {};

  //Name, Shortname, other Names

  //Timeline
  _data.ev = [];

  for (i=0; i<_in.events.length; i++) {
    _data.ev[i] = {};
    _data.ev[i].type = readType(i);
    _data.ev[i].date = readDate(i);
    _data.ev[i].loc = readLoc(i);
    _data.ev[i].desc = readDesc(i);
  }
};*/

var Obs = function(id, parid) {
  var _in = scopes[id], _data = {},
      _id = id,
      _par = parid?document.getElementById(parid):document.body, 

  parse = function() {
    var t, i;
    //name:
    t = Read.data(_in.name);
    _data.name = Read.string(t[0]);
    _data.shortname = Read.string(t[0], true);
    //url:
    _data.url = [];
    t = Read.data(_in.url);
    for (i=0; i<t.length; i++) {
      _data.url[i] = Read.url(t[i]);
    };
    //icon
    t = Read.data(_in.icon);
    if (t && t.length > 0) {
      _data.icon = [{i:SOBS.SCOPES + t[0][0], n:_data.name}];
    };

    //desc;:
    t = Read.data(_in.desc);
    for (i=0; i<t.length; i++) {
      _data[t[i][0]] = readDesc(t[i]);
    };
    //stat
    _data.stat = _in.stat;

    _data.parts = [];
    for (i=0; i<_in.parts.length; i++) {
      _data.parts[i] = readPart(_in.parts[i]);
    };
    //events
    _data.ev = [];
    for (i=0; i<_in.ev.length; i++) {
      _data.ev[i] = readEvent(_in.ev[i]);
    };
    //instruments
    if (_in.inst) {
      _data.inst = [];
      for (i=0; i<_in.inst.length; i++) {
        _data.inst[i] = readInst(_in.inst[i]);
      };
    };
    //lo, hi
    _data.lo = null;
    _data.hi = null;
    if (_data.inst) {
      for (i=0; i<_data.inst.length; i++) {
        if (_data.inst[i].hasOwnProperty("tp") && _data.inst[i].tp.search(/par|em|psp|msp/) != -1) continue;
        if (_data.inst[i].hasOwnProperty("band") && _data.inst[i].band.hasOwnProperty("f0")) {
          if (_data.lo == null || _data.inst[i].band.f0 < _data.lo) _data.lo = _data.inst[i].band.f0;
          if (_data.hi == null || _data.inst[i].band.f1 > _data.hi) _data.hi = _data.inst[i].band.f1;
        };
      };
    };
  },
  readPart = function(o) {
    //parts: n:;, ctry, type;, pur;, id, url;, icon, desc;, stat
    var t, i, res = {};

    if (o.n && o.n != "") {
      res.name = [];
      t = Read.data(o.n);
      for (i=0; i<t.length; i++) {
        res.name.push(Read.string(t[i]));
      };
    };
    
    if (o.ctry && o.ctry != "") {
      res.ctry = readCtry(o.ctry);
    };
    
    if (o.type && o.type != "") {
      res.type = readType(o.type);
      res.tp = o.type.split(";")
    };
    
    if (o.pur && o.pur != "") {
      res.purpose = readPurpose(o.pur);
      res.pur = o.pur.split(";")
    };
    //id
    if (o.id && o.id != "") {
      res.id = readID(o.id);
    };    
    //url;
    if (o.url && o.url != "") {
      res.url = readURL(o.id);
    };
    //icon, 
    if (o.icon && o.icon != "") {
      res.icon = readIcon(o.icon, res);
    } else {
      res.icon = _data.icon;
    };
    //desc;, 
    t = Read.data(o.desc);
    for (i=0; i<t.length; i++) {
      res[t[i][0]] = readDesc(t[i]);
    };
    //fill in missing ag,lv,fam,m
    if (!res.hasOwnProperty("ag") && _data.hasOwnProperty("ag"))
      res.ag = _data.ag;
    if (!res.hasOwnProperty("lv") && _data.hasOwnProperty("lv"))
      res.lv = _data.lv;
    if (!res.hasOwnProperty("fam") && _data.hasOwnProperty("fam"))
      res.fam = _data.fam;
    if (!res.hasOwnProperty("m") && _data.hasOwnProperty("m"))
      res.m = _data.m;
    //stat
    res.stat = o.hasOwnProperty("stat") && o.stat != ""?o.stat:_data.stat;    
    
    return res;
  },
  readEvent = function(o) {
    //pt, dt, tp, loc:, desc;:
    var i, t, res = {};
    
    if (o.pt && o.pt != "") res.pt = o.pt;
    else res.pt = 0;
    
    if (o.dt && o.dt != "") {
      res.date = {n:Parse.date(o.dt)};
      res.dt =  Parse.dt(o.dt);
    } else res.date = "?";

    if (o.tp && o.tp != "") {
      res.tp = [Common.names.find(o.tp)];
    };

    if (o.loc && o.loc != "") {
      res.loc = readLoc(o.loc, res.tp);
    };

    if (o.desc && o.desc != "") {
      t = Read.data(o.desc);
      for (i=0; i<t.length; i++) {
        res[t[i][0]] = readDesc(t[i]);
      };
    };
    return res;
  },
  readInst = function(o) {
    var t, i, res = {};
    //n, tp:im|sp|acc|ctr|is|par|li, band, res, tres, sres, d, px, sens, fov, foc, ea, url
    if (o.n && o.n != "") {
      res.name = [];
      t = Read.data(o.n);
      for (i=0; i<t.length; i++) {
        res.name.push(Read.string(t[i], true));
      };
    };

    if (!o.pt || o.pt == "") res.pt = 0;
    else res.pt = o.pt;
    
    if (!o.tp || o.tp == "") t = "im";
    else t = o.tp;
    res.tp = t;
    res.type = Common.names.find(t);

    if (o.band && o.band != "") {
      //v0, [v1], s  in Hz, eV or m
      res.band = readBand(o.band);
     };
     //res spacial res in arcsec
     if (o.res && o.res != "") {
       res.res = readRes(o.res);
     };
     //d aperture in meter
     if (o.d && o.d != "") {
       res.d = parseFloat(o.d);
     };
     //px pixeldensity in px/arcsec
     if (o.px && o.px != "") {
       res.px = parseFloat(o.px);
     };
     
     //tres time res s
     if (o.tres && o.tres != "") {
       res.tres = parseFloat(o.tres);
     };
     //sres spectral res R
     if (o.sres && o.sres != "") {
       res.sres = parseFloat(o.sres);
     };
     //sens mJy
     if (o.sens && o.sens != "") {
       res.sens = parseFloat(o.sens);
     };
     //fov deg[x deg]
     if (o.fov && o.fov != "") {
       res.fov = parseFloat(o.fov);
     };
     //foc m
     if (o.foc && o.foc != "") {
       res.foc = parseFloat(o.foc);
     };
     //ea
     if (o.ea && o.ea != "") {
       res.ea = parseFloat(o.ea);
     };
     //url
    if (o.url && o.url != "") {
      res.url = readURL(o.id);
    };
    //desc
    if (o.desc && o.desc != "") {
      t = Read.data(o.desc);
      for (i=0; i<t.length; i++) {
        res[t[i][0]] = readDesc(t[i]);
      };
    };
    return res;
  },
  readDesc = function(s) {
    var res, t;
    if (!s || s.length < 2) return;
    //ag,lv,fam,m,c,col,eom,fail,mal,pend
    switch (s[0]) {
      case "eom":
      case "pend": res = Common.names.find(s[0]); break;
      case "mal":
      case "fail": t = Common.names.find(s[0]);
                 res = Common.names.find(s[1]);
                 res.n = t[0] + ": " + res.n; break;
      case "ag": res = Common.names.find(s[1]); break;
      case "lv": t = Common.names.findLV(s[1]);
                 if (t) res = {n:s[1], id:"lnk"+t};
                 else res = {n:s[1]};
                 break;
      case "fam": res = Common.names.find(s[1]); break;
      case "m":  res = {n:s[1].toCommaString().replace(/kg/g, Common.SPC + "kg")}; break;
      case "c":  
      case "cl":  
      case "x":  
      case "y":  
      case "sc": res = s[1]; break;
      default: return;
    };
    return res;
  },
  readCtry = function(s) {
    var t, i, res = [];

    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      if (Common.ctry.hasOwnProperty(t[i][0])) {
        res.push({n:Common.ctry[t[i][0]].name, k:t[i][0]});
      };
    };
    return res;
  },
  readType = function(s) {
    var t, i, res = [];

    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      res.push(Common.names.find(t[i][0]));
    };
    return res;
  },
  readPurpose = function(s) {
    var t, i, res = [];

    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      res.push(Common.names.find(t[i][0]));
    };
    return res;
  },
  readID = function(s) {
    var res = [];
    if (!s || s == "") return;
    res.push({n:s, u:SOBS.IDLNK + s, t:"_blank"});
    return res;
   },
  readURL = function(s) {
    var t, i, res = [];

    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      res.push(Read.url(t[i]));
    };
    return res;
  },
  readIcon = function(s, r) {
    var t, i, n, res = [];

    if (r.n && r.n.length > 0) n = r.n[0].n;
    else n = _data.name.n;
    
    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      res.push({i:SOBS.SCOPES + t[i][0], n:n});
    };
    return res;
  },
  //Event location {n,l}
  readLoc = function(s, tp) {
    var t, i, p, res = [];
    
    t = s.split(":");
    p = t[0];
    for (i=1; i<t.length; i++) {
      if (t[i].search(/^\d/) == -1) res.push(Common.names.find(t[i]));
      else if (t[i].search(/x/) != -1) res.push({n:Parse.orbit(t[i], p)});
      else res.push({n:Parse.distance(t[i], p)}); 
    };
    
    if (tp == "l") {
      s = t[1];
      if (SOBS.lc.search(s) == -1) SOBS.lc += s + ",";
    }
    
    return res; 
  },
  readBand = function(s) {
    //v0, v1, s
    var t, unit, res = {};

    if (!s && s == "") return;
    res.s = s;
    unit = s.match(/([a-zA-Z]+)$/);
    if (unit != null) { unit = unit[1]; } 
    else { unit = "Hz"; };

    t = s.split("..");    

    res.f0 = getValue(t[0], unit);
    if (t.length > 1) {
      res.f1 = getValue(t[1], unit);
    };
    
    if (res.f0 && res.f1 && res.f0 > res.f1) {
      t = res.f0;
      res.f0 = res.f1;
      res.f1 = t;
    };
     
    return res;
  },
  readRes = function(s) {
    var t, i, res={};
    if (!s || s == "") return;
    t = s.split("..");
    res.r0 = t[0];
    if (t.length > 1) res.r1 = t[1];
    else res.r1 = null;
    return res;
  },
  getValue = function(s, unit) {
    var u, v, p, res;
    if (!s || s == "") return;
    if (s.search(/[a-zA-Z]$/) == -1) v = s + unit;
    else v = s;
    u = v.match(/([afpnumckMGTPE]?)(eV|m|Hz)$/i);
    if (u == null) { return parseFloat(s); }
    else { 
      p = prefix(u[1]);
      v = parseFloat(s);
      switch (u[2].toLowerCase()) {
        case "hz": return v*p;
        case "ev": return e2f(v*p);
        case "m": return w2f(v*p);
      };
    };
  },
  inst_res = function() {
    var i, t, n, pt, ni, np, c, tp, pur, img, sc, res = [];
    if (!_data.inst || !_data.inst[0]) return null;
    for (i=0; i< _data.inst.length; i++) {
      t = _data.inst[i];
      
      if (t.tp == "im" || t.tp == "is") {
        //tp, pur, st, names:mission, part, instrument, f0, f1, [r0, r1,] || [px, d,] c
        n = _data.shortname.n;
        pt = (t.pt && t.pt != "")?t.pt:0;
        if (t.name && t.name.length > 0) ni = t.name[0].n;
        c = t.c?t.c:null;
        np = _data.parts[pt].hasOwnProperty("name")?_data.parts[pt].name[0].n:null;
        tp = _data.parts[pt].hasOwnProperty("tp")?_data.parts[pt].tp[0]:null;
        pur = _data.parts[pt].hasOwnProperty("pur")?_data.parts[pt].pur[0]:null;
        if (t.px && t.d)
          res.push({tp:tp, pur:pur, st:_data.parts[pt].stat, n:n, i:ni, p:np, f0:t.band.f0, f1:t.band.f1, px:t.px, d:t.d, c:c});
        else if (t.res) 
          res.push({tp:tp, pur:pur, st:_data.parts[pt].stat, n:n, i:ni, p:np, f0:t.band.f0, f1:t.band.f1, r0:t.res.r0, r1:t.res.r1, c:c});
        
      };
    };
    return res;
  },
  inst_line = function() {
    var i, t, pt, n, ni, np, c, tp, st, pur, img, sc, x, y, res = [];
    if (!_data.inst || !_data.inst[0]) return null;
    for (i=0; i< _data.inst.length; i++) {
      t = _data.inst[i];
      if (!t.band) continue;
      if (t.tp == "im" || t.tp == "is") {
        pt = (t.pt && t.pt != "")?t.pt:0;
        //tp, st, pur, names:mission, part, instrument, f0, f1, c, img, sc, fl, fh
        n = _data.shortname.n;
        if (t.name && t.name.length > 0) ni = t.name[0].n;
        else ni = "";
        if (t.pt) np = _data.parts[t.pt].name[0].n;
        else np = null;
        if (t.cl) c = t.cl;
        else c = t.c?t.c:null;
        x = _data.x ? parseInt(_data.x) : 0;
        y = _data.y ? parseInt(_data.y) : 0;
        tp = _data.parts[pt].hasOwnProperty("tp")?_data.parts[pt].tp[0]:null;
        pur = _data.parts[pt].hasOwnProperty("pur")?_data.parts[0].pur[0]:null;
        img = _data.parts[0].hasOwnProperty("icon") && _data.parts[0].icon != null?_data.parts[0].icon[0].i:null;
        sc = _data.hasOwnProperty("sc")?_data.sc:1;
        //st by part
        st = _data.parts[pt].stat;
        //else st =  _data.parts[0].stat;
        res.push({tp:tp, pur:pur, st:st, n:n, i:ni, p:np, img:img, sc:sc, f0:t.band.f0, f1:t.band.f1, fm:(_data.hi + _data.lo)/2, fl:_data.lo, fh:_data.hi, c:c, x:x, y:y});
      };
    };
    return res;
  };

  this.Instruments = function(type) {
    if (!type || type == "line") return inst_line();
    else return inst_res();
  };
  
  parse();
};
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