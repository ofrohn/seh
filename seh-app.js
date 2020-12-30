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
      res = s.dip.replace("..", "\u2026") + Common.SPC + "Gauss";
    }
    if (s.dipt) {
      var t = s.dipt.split("x");
      res += "; Dipole:" + t[0] + this.unit("i")
      if (t.length > 1)
        res += Common.SPC + "/" + Common.SPC + t[1] + "km";
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

﻿/* global Common, UI, SSEH, Create, px, objects, missions, Mission, Destination, logError, LC, LV, Names, Cdraw, Info */

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
        t = 220, //h*0.3,// + parent.scrollTop,
        line = 16, 
        l = Math.PI/240,
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
      cnv.text(SSEH.TITLE, width/2, 140, tfnt, "center", "#fff", "bottom");
      cnv.text(SSEH.CLICK, width/2, 155, fnt, "center", "#fff", "top");
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
    cw = Create.div(parent, "", "canvas-wrap", {w:width,h:0});
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

/* global Common, UI, SSEH, Create, Read, Parse, parseElements, missions, elem, isNumber, px */

function Mission(id, parid) { 
  var _in = missions[id], 
      _id = id,
      _parent = null, _step,
  /*_data:
    parameters: n:name/abbrev, l:long name, c:css-color, i:image-src, u:link-url, t:target,
    d:description, v:divider, w:wide col
    
    title:[{n,l}], shortname:[{n,l}], names:[{n,l},..], dest:"",
    goal:[{n,c},..], ctry:[{n,i},..], ag:[{n,l,u,i},..], stat:[{n,l,c}],
    id:[{n,u},..], url:[{n,l,u},..], icon:[{n,i},..],
    fam:[{n,l}], mass:[{n}], lv:[{n}], spec:[{n}],
    ev:[{date:[{n}], type:[{n,l},.], loc:[{n,l},.], desc:[{n,l,d,v},..]}]
 */
  _data = {}, 
  _timeline, _box, _overlay = {}, _height = 0,
  
  createBox = function() {
    var i, j, t, box, lcol, mcol, rcol, ecol, colwidth, col = [], widecol, timg, 
        iheight = 19, lines = 1, ll = 0, frag;
    
    frag = document.createDocumentFragment();
    box = Create.div(frag, "infoBox", _id+"info", {w:SSEH.BOXWIDTH});

    Create.closex(box);

    lcol = Create.div(box, "col", null, {w:230});
    mcol = Create.div(box, "col", null, {w:230});
    rcol = Create.div(box, "rcol", null, {w:120});
        
    //Left column
    //Main Name of Mission
    Create.span(lcol, _data.title[0], "missionTitle");

    //Other Names
    if (_data.names) {
      Create.br(lcol);
      lines++;
      for (i=0; i<_data.names.length; i++) {
        if (i>0) { Create.text(lcol, ", "); }
        if (i==2) {
          Create.br(lcol);
          lines++;
        }
        Create.span(lcol, _data.names[i]);
      }
    }
    //Spacecraft program/type
    if (_data.fam) {
      lines++;
      Create.field(lcol, _data.fam, "fam");
    }
    //Cospar-ID
    if (_data.id) {
      Create.br(lcol);
      lines++;
      Create.span(lcol, Common.names.find("tid"), "category");
      for (i=0; i< _data.id.length; i++) {
        if (i>0) { Create.text(lcol, " "); }
        Create.a(lcol, _data.id[i], ""); 
      }
    }
    if (_data.dim) {
      Create.field(lcol, _data.dim[0], "dim");
      ll++;
    }

    //Links
    if (_data.url) {
      Create.br(lcol);
      lines++;
      Create.span(lcol, Common.names.find("turl"), "category");
      for (i=0; i< _data.url.length; i++) {
        if (i>0) { Create.text(lcol, ", "); }
        if (_data.url[i].k) {
          Create.asymbol(lcol, _data.url[i], "symLnk");        
        } else {
          Create.aimg(lcol, _data.url[i]);
        }
      }
    }

    //Center column    
    //Country flags
    for (i=0; i< _data.ctry.length; i++) {
      Create.asymbol(mcol, _data.ctry[i], "missionFlag");
    }
    //Involved Agencies
    if (_data.ag) {
      for (i=_data.ag.length-1; i>=0 ; i--) {
        Create.asymbol(mcol, _data.ag[i], "missionAgency");
      }
    }
   
    ll++;

    //Mission Goals; Destination + Type
    for (i=0; i< _data.goal.length; i++) { 
      Create.br(mcol);
      Create.span(mcol, _data.goal[i], "missionType");
      ll++;
    }
    //Special achievements
    if (_data.spec) {
      for (i=0; i< _data.spec.length; i++) {
        Create.br(mcol);
        Create.span(mcol, _data.spec[i]);
        ll++;
      }
    }
    //Launch mass
    if (_data.m) {
      Create.field(mcol, _data.m, "lmass", null, "/");
      ll++;
    }
    if (_data.m0) {
      Create.field(mcol, _data.m0, "dmass", null, "/");
      ll++;
    }
    //Launch vehicle
    if (_data.lv) {
      t = Create.field(mcol, _data.lv[0], "lv");
      if (_data.lv[0].id) {
        t.id = _data.lv[0].id;
        t.className = "missionLnk";
        t.onclick = SSEH.showLV;
      }
      ll++;
    }

    lines = Math.max(lines,ll);

    //Right column
    //Mision status: success, failure, part. success, ongoing, planned
    Create.span(rcol, _data.stat[0], "missionStatus status" + _data.stat[0].n);
    //box.style.borderColor = _data.stat[0].c;

    //Spacecraft icons
    for (i=0; i< _data.icon.length; i++) {
      timg = Create.img(rcol, _data.icon[i], "");
      if (isNumber(timg.height) && timg.height > 0) { iheight += timg.height; }
      else { iheight += 120; }
      j = _data.sc[_data.icon[i].p];
      if (i > 0 && j < 1) {
        timg.style.width = px(120*j);
        timg.style.marginRight = px(60 * (1-j));
        timg.style.height = "auto";
      }
      Create.br(rcol);
    }
    
    ecol = Create.div(box, "tblHead col", null, {w:456});

    colwidth = [86,120,250];
    for (i=0; i<3; i++) {
     col[i] = Create.div(ecol, "col", null, {w:colwidth[i]});
    }
    Create.span(col[0], Common.names.find("thdate"));     
    Create.span(col[1], Common.names.find("thevent"));     
    Create.span(col[2], Common.names.find("thdetail"));
    lines++;
    
    //Events
    for (i=0; i< _data.ev.length; i++) {
      widecol = false;
      ecol = Create.div(box, "tblRow col ", null, {w:456});
      //if (_data.ev[i].loc)
      if (iheight && iheight>0 && lines*19 > iheight) {
        ecol.style.width = px(576);
        colwidth[2] = 370;
      }
      if (i%2 !== 0) { ecol.style.background = "rgba(241,241,214,0.6)"; }
      lines++;
      for (j=0; j<3; j++) {
        col[j] = Create.div(ecol, "col", null, {w:colwidth[j]});
      }
      //Event date
      if (_data.ev[i].date) {
        if (i>0 && _data.ev[i-1].date && _data.ev[i].date[0].n.length > 6 && _data.ev[i].date[0].n == _data.ev[i-1].date[0].n) {
          Create.span(col[0], {n:"\u00a0="}, "eventRpDate");
        } else {
          Create.span(col[0], _data.ev[i].date[0], "eventDate");
        }
        if (_data.ev[i].date[0].w) {
          widecol = true;
          col[0].style.width = px(colwidth[0]+colwidth[1]);
          col[1].style.width = 0;
          col[2].style.width = px(colwidth[2]);
        }
      } else {
        Create.span(col[0], {n:"\u00a0-"}, "eventRpDate");
      }
      //Event type
      if (_data.ev[i].type) {
        if (_data.ev[i].type.length === 0 && widecol === false) {
          Create.br(col[1]);
        } else {
          var colno = widecol?2:1;
          for (j=0; j< _data.ev[i].type.length; j++) {
            Create.text(col[colno], " ");
            Create.span(col[colno], _data.ev[i].type[j], "eventLoc");
          }
        }
      }
      //Event location
      for (j=0; j< _data.ev[i].loc.length; j++) {
        if ((col[2].children.length > 0 && widecol === false) || j > 0) {
          Create.text(col[2], ": ");
        }
        t = Create.span(col[2], _data.ev[i].loc[j]);
        //if (!_data.ev[i].loc[j]) Window.alert(_id);
        if (_data.ev[i].loc[j].hasOwnProperty("id")) {
          t.id = _data.ev[i].loc[j].id;
          t.className = "missionLnk";
          t.onclick = SSEH.showLC;
        }        
      }
      //Further details   
      if (_data.ev[i].desc) {
        for (j=0; j< _data.ev[i].desc.length; j++) {
          if (col[2].children.length > 0 || j > 0) {
            if (_data.ev[i].desc[j].v) {
              Create.text(col[2], _data.ev[i].desc[j].v); 
            } else {
              Create.text(col[2], "; "); 
            }
          }
          Create.span(col[2], _data.ev[i].desc[j]);
          if (_data.ev[i].desc[j].d) {
            Create.text(col[2], ": " + _data.ev[i].desc[j].d);
          }
        }
      }
      Create.br(col[2]);
    }

    _parent.appendChild(frag);
    return box;
  },
  // read Functions  
  //Mission name   {n,l}
  readName = function(shortname) {
    var t, res = [];
    t = Read.data(_in.name);
    if (!t) return; 
    res.push(Read.string(t[0], shortname));
    if (shortname) { res[0].u = "-"; }
    return res;
  },
  //Launch vehicle {n, lv id}  
  readLv = function(s) {
    var id = null, res = [];
    //ar = _in.desc.match(/lv\:([^\b;]+)/);
    //if (ar == null) return;
    //name = ar[1].split(/\//);
    if (!s || s === "") return; 
    id = Common.names.findLV(s);
    if (id) { 
      res.push({n:s, id:"lnk"+id});
    } else {
      res.push({n:s});
    }
    return res;
  },
  //Alternative names, components {n,l}
  readNames = function() {
    var i, t, res = [];

    t = combineData("names");
    if (!t) return; 
    
    for (i=0;i<t.length;i++) {
      if (t[i][0].slice(0,1) != "{") {
        res.push(Read.string(t[i], true));
      }
    }
    return res;
  },
  //Statistics by country
  readctryStats = function() {
    var stat, lyr, ctry;

    stat = _in.hasOwnProperty("stat")?_in.stat:_in.parts[0].stat;
    stat = checkStat(stat);  //lf?
   
    lyr = _timeline[0].d;
    
    ctry = combineData("ctry", true);
    ctry = ctry.join();
    return {s:stat, c:ctry, l:lyr};
  },
  //Mission Statistics by destination
  readStats = function() {
    var i, j, t, d, st, n, sd1, sd2, ss, res = [];
    
    for (i=0; i<_in.parts.length; i++) {
      st = _in.parts[i].type;
      d = _in.parts[i].dest;
      if (!st || st === "" || !d) continue;
      d = d.split(":");
      sd1 = d[0];
      sd2 = (d.length > 1) ? d[1] : "";
      ss = _in.parts[i].stat || _in.stat;
      ss = checkStat(ss);
      if (!findStat(res, st, sd1, sd2)) {
        res.push({t:st, d1:sd1, d2:sd2, s:ss});
      }
    }
    return res;
  },
  findStat = function(s, t, d1, d2) {
    var i;
    if (!s) return false; 
    for (i=0; i<s.length; i++) {
      if (s[i].t == t && s[i].d1 == d1 && s[i].d2 == d2) return true; 
    }
    return false;
  },
  //Launch failure?
  checkStat = function(stat) {
    var i;
    if (stat != "f") return stat; 
    for (i=0; i<=1; i++) {
      if (i > _in.events.length-1) break; 
      if (_in.events[i].type.search(/^l|toi|oi$/) != -1 && _in.events[i].desc.search(/fail/) != -1) {
        return "lf";
      }
    }
    return stat;
  },
  //Mission destination & purpose {n,c}
  readGoal = function() {
    var i, st, sd, sl, col, res = [],
    stats = _data.stats;

    for (i=0; i<stats.length; i++) {
      st = Common.names.find(stats[i].t);
      if (stats[i].d2) {
        sd = Common.names.find(stats[i].d2);
      } else {
        sd = Common.names.find(stats[i].d1);
      }
      sl = (sd.l)?sd.l + " " + st.n:"";
      col = Common.names.findColor(stats[i].t);
      if (stats[i].t == "hm") {
        res.push({n:st.n, c:col});        
      } else {
        res.push({n:sd.n + " " + st.n, l:sl, c:col});        
      }
    }
    return res;
  },
  //Mission destinations
  readDest = function() {
    var res = "";
    for (var i=0; i<_in.parts.length; i++) {
      res += _in.parts[i].dest + ",";
    }
    return res;
  },
  //Mission status {n,l,c}
  readStatus = function() {
    var t, res = [];

    if (_in.stat) {
      t = Read.data(_in.stat);
    } else {
      t = Read.data(_in.parts[0].stat);
    }
    if (!t) return; 
    res.push(Common.names.find(t[0]));
    res[res.length-1].c = Common.names.findColor(t[0][0]);
    return res;
  }, 
  //Country & flag {n,i}
  readctry = function() {
    var i, t, n, res = [];

    t = combineData("ctry", true);
    if (!t) return; 
    
    for (i=0; i<t.length; i++) {
      n = t[i][0];
      if (Common.ctry.hasOwnProperty(n)) {
        res.push({n:Common.ctry[n].name, k:n});
      }
    }
    return res;
  },
  //Cospar-ID {n,u}
  readId = function() {
    var i, t, s, res = [];
    
    t = combineData("id");
    if (!t || t.length < 1) return; 

    if (t[0][0].search(/x$/) != -1) return [{n:t[0][0]}]; 
    
    for (i=0; i<t.length; i++) {
      s = (t[i].length > 1)?t[i][1]:t[i][0];
      if (i > 0 && s.slice(0,-2) == t[0][0].slice(0,-2)) {
        res.push({n:s.slice(-1), u:SSEH.IDLNK + t[i][0], t:"_blank"});
      } else {
        res.push({n:s, u:SSEH.IDLNK + t[i][0], t:"_blank"});
      }
    }
    return res;
  },
  //Mission links {n,l,u,t,[i]}
  readUrls = function() {
    var i, t, res = [];
    
    t = combineData("url");
    if (!t) return; 
    for (i=0; i<t.length; i++) {
      res[i] = Read.url(t[i]);
    }
    return res;
  },
  //Spacecraft icons [{n,i,p},..]
  readIcon = function() {
    var t, n, i, j, path, name, res = [];
    
    for (i=0; i<_in.parts.length; i++) {
      t = Read.data(_in.parts[i].icon);
      if (!t || t.length === 0) continue;

      n = Read.data(_in.parts[i].names);
      if (i>0 && n && n.length > 0) { name = Read.string(n[0]); }
      else { name = _data.title[0]; }
      
      for (j=0; j<t.length; j++) {
        path = SSEH.PROBES + t[j][0];
        res.push({i:path, n:name.n.replace(/[\{\}]/g, ""), p:i});
      }
    }
    return res;
  }, 
  //Space agency [{n,l,u,i},..]  
  readAgency = function(s) {
    var i, t, o, res = [];
    
    if (!s || s === "") return; 

    t = s.split(",");
    for (i=0; i<t.length; i++) {
      if (findAgency(t[i]) === true) continue;
      o = Common.names.find(t[i]);
      o.k = t[i];
      if (o.u) { 
        o.u = "http://" + o.u;
        o.t = "_blank";
      }
      res.push(o);
    }
    return res;
  },
  findAgency = function(s) {
    var i;
    for (i=0; i<_data.ag.length; i++) {
      if (_data.ag[i].k == s) return true; 
    }
    return false;
  }, 
  //Spacecraft family or program [{n,l},..]
  readFamily = function(s) {
    var t, v, i, o, res = [];
    
    if (!s || s === "") return; 

    t = s.split(",");
    for (i=0; i<t.length; i++) {
      res.push(Common.names.find(t[i]));
    }
    return res;      
  },
  //Spacecraft launch mass [{n},..]  
  readMass = function(s) {
    var t, i, v, res = [];
    
    if (!s || s === "") return;

    t = s.split(",");
    for (i=0; i<t.length; i++) {
      v = t[i].toCommaString();
      v = v.replace(/kg/g, Common.SPC + "kg");
      res.push({n:v});
    }
    return res;      
  },
  //Spacecraft dimensions {n, v}
  readDim = function(s, part) {
    var t, i, n, v = 0, res = [];
    
    if (!s || s === "") return []; 
    
    n = s.replace(/x/g, Common.SPC + "\u00d7" + Common.SPC);
    t = s.replace(/m/, "").split("x");
    
    for (i=0; i<t.length; i++) {
      t[i] = parseFloat(t[i]);
      if (t[i] < 25 && t[i] > v) {
        if (t[i] < 10) { v = t[i]; }
        else { v = t[i] * 0.71; }
      }
    }
    _data.sc[part] = v / 8;
    res.push({n:n, v:v});
    
    return res;
  },
  //Spacecraft icon scale {n}  
  /*readScale = function(s, i) {
    var t, i, res = [];
 
    for (i=0; i<_in.parts.length; i++) {
      if (!_in.parts[i].icon) continue; 
      if (!_in.parts[i].desc) res.push(1);
      else {
        t =  _in.parts[i].desc.match(/sc\:([^\;$]+)/);
        if (!t) res.push(1);
        else res.push(parseFloat(t[1]));
      };
    };
    return res;      
  },*/
  //Special achievements {n}  
  /*readSpec = function() {
    var i, j, t, res = [];
    
    for (i=0; i<_in.parts.length; i++) {
      if (!_in.parts[i].hasOwnProperty("desc")) continue;
      t = _in.parts[i].desc.split(";");
      for (j=0; j<t.length; j++) {
        if (t[j] && t[j].search(/\:/) == -1) res.push({n:t[j]});
      };
    };
    return res;
  },*/
  //Mission-part ended?
  checkEOM = function(stat, type) {
    var i, t, res = stat;
    for (i=0; i<_in.events.length; i++) {
      t = _in.events[i].desc.match(/eom\:(\w+)/);
      if (t !== null && t[1] == type) {
        if (_in.events[i].desc.search(/fail/) != -1) {
          res = "f";
        } else {
          res = "s";
        }
      }
    }
    return res;
  },
  //Landing and impact locations dest:[{name,type,coord}..]
  readLocations = function() {
    var i, res = {}, t, c, n, o, d, de;
    
    for (i=0; i<_in.events.length; i++) {
      if (_in.events[i].type.search(/^imp|edl|td|tdn$/) != -1) {
        t = _in.events[i].loc.split(":");
        if (t.length > 1) {
          n = checkName(_in.events[i]);
          if (!n) continue;
          c = t[1];
          if (c) {
            if (!res.hasOwnProperty(t[0])) { res[t[0]] = []; }
            o = checkOrient(_in.events[i]);
            d = Parse.date(_in.events[i].dt, _timeline[0].d); 
            de = checkDesc(_in.events[i]);
            //mission, loc, coord, orient, desc
            res[t[0]].push({n:n, t:_in.events[i].type, c:c, o:o, d:d, de:de});
          }
        }
      }
    }
    return res;
  },
  //alt. name?
  checkName = function(ev) {
    var ar, t, n, ln;
    if (isNumber(ev.pt) && ev.pt > 0) {
      t = Read.data(_in.parts[ev.pt].names);
      if (t && t.length > 0) { ln = t[0].length>1?t[0][1]:t[0][0]; }
    }
    if (!ln) { ln = _data.title[0].n; }
    ln = ln.replace(/[\{\}]/g, "");
    
    ar = ev.desc.match(/show\:([^\b;\:]+)/);
    if (ar === null) n = getAcronym(ln); 
    else if (ar[1] == "0") return; 
    else n = ar[1]; 
    return n + ":" + ln;
  },
  //alt. orientation?
  checkOrient = function(ev) {
    var ar, n, l;
    ar = ev.desc.match(/show\:[^\:]+\:([^\b;\:]+)/);
    if (ar === null) return "NE"; 
    else return ar[1]; 
  },
  //Landing site desc?
  checkDesc = function(ev) {
    var i, ar, res = "";
    if (!ev) return res; 
    ar = ev.desc.split(";");
    for (i=0; i<ar.length; i++) {
      if (ar[i].search(/\:/) == -1 && ar[i].length > 4) {
        if (res !== "") { res += ", "; }
        res += ar[i];
      }
    }
    return res;    
  },
  //Short name for map display
  getAcronym = function(s) {
    var ar, n;
    if (!s) return; 
    if (s.length <= 3) return s; 
    ar = s.match(/(.)(.)\D*(\d*)/);
    if (!ar) return; 
    n = ar[1];
    if (ar.length > 3 && ar[3] !== "") { n += ar[3]; }
    else { n += ar[2] + "."; }
    return n;
  },
  //Event date {n}  
  readDate = function(n) {
    var res = [], dtl = _timeline[0].d;
    if (_in.events.length < n+1 || !_in.events[n].dt) return; 
    if (_in.events[0].dt.length <= 4) {
      res.push({n:Parse.date(_in.events[n].dt)});
    } else {
      res.push({n:Parse.date(_in.events[n].dt, dtl)});
    }
    if (_in.events[n].dt.search(/\.\./) != -1) { res[0].w = true; }
    return res;
  },
  //Event type {n,l} 
  readType = function(n) {
    var s, t, res = [];
    if (_in.events.length < n+1 || !_in.events[n].type) return; 
    s = _in.events[n].type;
    if (s === "ev") return; 
    t = _in.events[n].loc.split(":");

    if (s.search(/\boi|fb|f|app|ae|imp|edl|td|enc\b/) !== -1) {
      if (t[0] != "sol") { res.push(Common.names.find(t[0])); }
      //else if (t[0].length > 2) res.push(Common.names.find(t[1]));
    }
    res.push(Common.names.find(s));
    res[0].abbr = t[0];

    return res;      
  },  
  //Event location {n,l}
  readLoc = function(n) {
    var t, i, s, p, res = [];
    if (_in.events.length < n+1 || !_in.events[n].loc) return res; 
    
    t = _in.events[n].loc.split(":");
    p = t[0];
    for (i=1; i<t.length; i++) {
      if (t[i].search(/^[\d\-]/) == -1) { res.push(Common.names.find(t[i])); }
      else if (t[i].search(/[NSEW]/) != -1) { res.push({n:Parse.position(t[i])}); }
      else if (t[i].search(/x/) != -1) { res.push({n:Parse.orbit(t[i], p)}); }
      else { res.push({n:Parse.distance(t[i], p)});  }
    }
    
    //if (res.length > 0) res[0].abbr = p;

    if (_in.events[n].type == "l") {
      s = t[1];
      if (res.length>0) { res[0].id = "lnk"+s; }
      if (SSEH.lc.search(s) == -1) { SSEH.lc += s + ","; }
    }
    return res;
  },
  //Event description {n,l,d,v}  
  readDesc = function(n) {
    var i, j, res = [], t = null, u;
    if (_in.events.length < n+1 || !_in.events[n].desc) return; 
    t = Read.data(_in.events[n].desc);
    for (i=0; i<t.length; i++) {
      if (t[i].length == 1) {
        if (t[i][0].search(/\//) != -1) {
          u  = t[i][0].split("/");
          for (j=0; j<u.length; j++) {
            res.push(Common.names.find(u[j]));
            res[res.length-1].v = "/";
          }
        } else {
          if (n == _in.events.length-1 && (t[i] == "eom" || t[i] == "?")) continue;
          res.push(Common.names.find(t[i]));
        }
      } else {
        if ("show,eom".search(t[i][0]) != -1) continue;
        if ("com,ast,dp,op".search(t[i][0]) == -1) { res.push(Common.names.find(t[i][0])); }
        else { res.push(Common.names.find(t[i][1])); }
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
          case "eom": if (t[i].length == 2) { res.push(Common.names.find(t[i][1])); res[res.length-1].v = ": "; } break; 
          case "ip": 
          case "ssp": 
          case "lp": 
          case "hpp": 
          case "mal": 
          case "fail": res.push(Common.names.find(t[i][1])); res[res.length-1].v = ": "; break;
          case "end":
          case "los": res[res.length-1].d = Parse.date(t[i][1]); break;
          case "tm": 
          case "per": res[res.length-1].d = Parse.time(t[i][1]); break;
          case "mat": res[res.length-1].d = Parse.mass(t[i][1]); break;
          case "enc": res[res.length-1].d = Parse.date(t[i][1]); break;
          default: if (t[i][0].length > 3) { res[res.length-1].l = t[i][1]; }
        }
      }
    }
    return res;
  },
  createLine = function(t) {
    var line, im, w;

    //dom-box
    line = Create.div(_parent, "timeline", "info"+_id, {t:t, l:10, w:1, h:SSEH.BARHEIGHT});
    //displayname; style dependent on status
    Create.span(line, _data.shortname[0], "status" + _data.stat[0].n);
    //S/C image
    im = Create.img(line, _data.icon[0], "imgHilight");
    if (_data.sc[0] < 1) {
      w = _data.sc[0] * 120;
      im.style.width = px(w);
      im.style.height = "auto";
    }
    //im.style.top = px(-(w-SSEH.BARHEIGHT)/2);
    //highlight line
    Create.div(line, "hilight", null, {t:1, l:0, w:1, h:SSEH.BARHEIGHT-2});
    
  //popup 
    line.onclick = UI.show;
    line.onmouseover = UI.showImg;
    line.onmouseout = UI.showImg;
    
    return line;
  },    
  positionLine = function(l, r, w, dest) {
    var i, chld = _overlay[dest].childNodes;
    //_overlay[dest].style.top = px(t);
    _overlay[dest].style.width = px(r-10);
    for (i=0; i<chld.length; i++) {
      if (chld[i].nodeName.toLowerCase() == "div") {
        chld[i].style.left = px(l-10);
        chld[i].style.width = px(r-l-1);
      } else if (chld[i].nodeName.toLowerCase() == "img") {
        //chld[i].style.backgroundColor = "#f00";
        if (r+130 < w) {
          chld[i].style.left = px(r+10);
        } else {
          chld[i].style.left = px(l-130);
        }
      }
    }
  },
  drawSc = function(c, width, t, dest) {
    var img, src, sc, rel, p, p0, x, y, w, o, r, l, h, corr=0, now = new Date();
    src = _data.icon[0].i;
    sc = _data.sc[0];
    if (SSEH.currentDest != dest) {
      SSEH.lastlastImg = null;
      SSEH.lastImg = null;
      SSEH.currentImg = null;
      SSEH.currentDest = dest;
    }
    if (!SSEH.currentO) { SSEH.currentO = 1; }

    if (SSEH.currentImg && SSEH.currentImg == src || SSEH.lastImg && SSEH.lastImg == src || SSEH.lastlastImg && SSEH.lastlastImg == src) return; 
    
    r = UI.Scale.time(_timeline[_timeline.length-1].d, width);
    l = UI.Scale.time(_timeline[0].d, width);
    o = -SSEH.currentO;    
    
    img = new Image();
    img.onload = function () {
      rel = img.width/img.height;
      w = sc>1.2?100:80*sc;
      h = w/rel;
      y = t + SSEH.BARHEIGHT/2 - h/2;
      if (_data.w) {
        x = width*_data.w;
      } else if (r + 180 < width) {
        x = r + 20 + w - w*o;
      } else {
        x = l - 120 - w + w/2*o;
      }
      
      c.image(img, x, y, w, h);
    };
    img.src = src;
    SSEH.lastlastImg = SSEH.lastImg;
    SSEH.lastImg = SSEH.currentImg;
    SSEH.currentImg = src;
    SSEH.currentDest = dest;
    SSEH.currentO = o;
    
  },
  setLineHeight = function(c, tl, h) {
    if (_data.dest.search(tl.l) !== -1) return h;
    else return 1;
  },
  drawBar = function(c, l, t, r, h, col) {
    var bh, th = 0;
    if (h === 1) {
      bh = 1;
      t += Math.round((SSEH.BARHEIGHT - col.length) / 2);
    } else bh = h;
    for (var j=0; j<col.length; j++) {
      if (h !== 1 && j === col.length-1) bh = SSEH.BARHEIGHT - th;
      c.fillrect(l, t+j*h, r-l, bh, col[j]);
      th += h;
    }
  },
  drawGrad = function(c, l, t, r, h, col) {
    var bh, th = 0;
    for (var j=0; j<col.length; j++) {
      bh = (j < col.length-1)?h:SSEH.BARHEIGHT - th;
      c.gradient(l, r, t+j*h, bh, [{col:col[j],pos:0},{col:"#000",pos:1}]);
      th += h;
    }
  },   
  drawSymbol = function(c, x, y, type) {
    var diff, img;
    if (!Common.sprites.hasOwnProperty(type)) return; 
    img = Common.sprites[type];
    diff = SSEH.BARHEIGHT / 2;
    c.image(Common.symbols.sprite, img.x, img.y, 16, 16, x-diff, y, SSEH.BARHEIGHT, SSEH.BARHEIGHT);
  },
  getCols = function(m) {
    var i, res = [];
    for (i=0; i<m.length; i++) {
      res[i] = Common.names.findColor(m[i]);
    }
    return res;
  },  
  //Build event timeline
  readTimeline = function() {
    var i, stat, dt, ldt, loc, tp, sym, s, res = [],
        now = new Date(),
        m = getMission();
 
    stat = _in.stat?_in.stat:_in.parts[0].stat;
        
    if (!_in.events) return; 
    //dt,loc,type,vehicle
    for (i=0; i<_in.events.length; i++) {
      s = _in.events[i].desc;
      //Date, only first of period
      dt = getDt(_in.events[i].dt, ldt);
      if (!dt) continue;
      //Startdate
      if (i === 0) { ldt = new Date(dt.valueOf()); }
      //Location
      loc = getLoc(_in.events[i].loc);
      if (loc == "com"  || loc == "ast") { loc = "sbo"; }
      //Eventtype
      tp = getType(_in.events[i].type);
      //Active mission types
      m = changeMission(m, s);
      //event icons
      sym = getIcon(_in.events, i);
      res.push({d:dt,l:loc,t:tp,m:m,i:sym});
    }
    //extend ongoing to now
    if (stat == "o" && now.diff(res[res.length-1].d) < 0) {
      res.push({d:now,l:loc,t:tp,m:m});
      dt = new Date(now.valueOf());
    }   
    if (tp == "pom" && now.diff(res[res.length-2].d) < 0) {
      res[res.length-1].t = "nom";
      res[res.length-1].d = now;
      res.push({d:dt,l:loc,t:tp,m:m});
    }
    //fadeout if no end/nom
    if (stat.search(/o|pl/) != -1) {
      if (tp == "pom") {
        res[res.length-1].t = "ten";
      } else if (tp != "nom") {
        if (!s || s.search(/eom(?!\:)/i) == -1) {
          res.push({d:res[res.length-1].d.add(3,"yr"),l:loc,t:"ten",m:m});
        }
      } else {
        if (!s || s.search(/pend|\?/i) != -1) {
          res.push({d:res[res.length-1].d.add(3,"yr"),l:loc,t:"ten",m:m});
        }
      }
    }
     
    return res;
  },
  getIcon = function(ev, i) {
    var res, tp = getType(ev[i].type), s = _in.events[i].desc;
    
    //l,toi,fb,oi,edl,imp,app
    switch (tp) {
     case "l":
     case "oi":
     case "toi": if (i<2 && s && s.search(/fail/) != -1) { res = "fail"; } break; 
     case "app": if (i>=ev.length-1 || getType(ev[i+1].type) != "fb") { res = "app"; } break; 
     case "fb": 
     case "oi": 
     case "edl":
     case "imp": res = tp; break;
    }
    return res;
  },
  getDt = function(s, dt) {
    var res;
    if (s.search(/^l/i) == -1) {
      res = Parse.dt(s);
    } else {
      res = diffDt(dt,s);
    }
    return res;
  },
  diffDt = function(dt, s) {
    var res, t;
    if (!s || !dt) return; 
    
    t = s.match(/^l\+([\d\.]+)(\w+)?/);
    if (t === null || t.length < 3) return; 

    res = dt.add(t[1], t[2]);
    return res;     
  },
  getLoc = function(s) {
    var res, t;
    t = Read.data(s);
    res = t[0][0];
    
    return res;
  },
  getType = function(s) {
    var res, t;
    t = Read.data(s);
    res = t[0][0];
    
    return res;
  },
  getMission = function() {
    var i, res = [];
   
    for (i=0; i<_data.stats.length; i++) {
      res.push(_data.stats[i].t);
    }
    return res;
  },
  changeMission = function(m, s) {
    var t, i, j, res = m.slice();
    if (!s) return res; 
    
    t = Read.data(s);
    for (i=0; i<t.length; i++) {
      if (t[i][0] == "eom") {
        if (!t[i][1]) return res;
        else {
          for (j=0; j<res.length; j++) {
            if (res[j] == t[i][1]) { res.splice(j,1); break; }
          }
        }
      }
    }
    return res;
  };
 
  var createOverlay = function(dim) {
    var box = Create.div(_parent, "hilight", "info"+_id, {l:0, t:dim.t, h:dim.h, w:dim.w});
    box.title = _data.title[0].n;
    box.onclick = UI.show;
    return box;
  };
  
  var combineData = function(fld, uniq) {
    var i, res = [];
    for (i=0; i<_in.parts.length; i++) {
      if (_in.parts[i].hasOwnProperty(fld) && _in.parts[i][fld] !== "") {
        res = res.concat(_in.parts[i][fld].split(";"));
      }
    }
    if (!res || res.length === 0) return null; 
    if (uniq) { res = res.unique(); }
    for (i=0; i<res.length; i++) {
      res[i] = res[i].split(":");
    }
    return res;
  };

  var combineDesc = function(fld, uniq) {
    var i, ar, rx, res = [];
    rx = new RegExp(fld + "\:([^\;$]+)");
    for (i=0; i<_in.parts.length; i++) {
      if (!_in.parts[i].desc) continue;
      ar = _in.parts[i].desc.match(rx);
      if (ar !== null) { res = res.concat(ar[1].split(/,/)); }
    }
    if (!res || res.length === 0) return null; 
    if (uniq) { res = res.unique(); }
    return res;
  };

  var getDesc = function(s, part) {
    var t;
    t = s.split(":");
    if (t.length > 1) { if (!_data.hasOwnProperty(t[0])) { _data[t[0]] = []; } }
    switch (t[0]) {
      case "ag": _data.ag = _data.ag.concat(readAgency(t[1])); break;
      case "lv": _data.lv = _data.lv.concat(readLv(t[1])); break;
      case "fam": _data.fam = _data.fam.concat(readFamily(t[1])); break;
      case "m": _data.m = _data.m.concat(readMass(t[1])); break;
      case "m0": _data.m0 = _data.m0.concat(readMass(t[1])); break;
      case "dim": _data.dim = _data.dim.concat(readDim(t[1], part)); break;
      case "sc": _data.sc[part] = parseFloat(t[1]); break;
      case "w": _data.w[part] = parseFloat(t[1]); break;
      case "part": _data.part = t[1]; break;
      default: if (t[0] !== undefined && t[0] !== "") {
                if (!_data.hasOwnProperty("spec")) { _data.spec = []; }
                 _data.spec.push({n:t[0]});
                 break;
               }
    }
  };
  
  var readDescription = function() {
    var i, j, t;
    
    _data.sc = [];
    
    t = _in.desc.split(";");
    for (i=0; i<t.length; i++) {
      getDesc(t[i]);
    }

    for (j=0; j<_in.parts.length; j++) {
      _data.sc[j] = 1;
      if (!_in.parts[j].hasOwnProperty("desc")) continue;
      t = _in.parts[j].desc.split(";");
      for (i=0; i<t.length; i++) {
        getDesc(t[i], j);
      }
    }
  };

 
  this.drawTimeline = function(c, y, w, dest) {
    var h, i, l = null, l0, r, p, p0, col = [],
        t = y;
        
    col = getCols(_timeline[0].m);
    //height
    h = Math.ceil(SSEH.BARHEIGHT / col.length);
    //c.setparam("globalAlpha", 0.9);
 
    for (i=0; i<_timeline.length; i++) {
      r = UI.Scale.time(_timeline[i].d, w);
      //h = setLineHeight(c, _timeline[i], h0);
      if (i === 0) { l0 = r; }
      if (l !== null) {
        //box w/opa
        if (_timeline[i].t != "ten") {
          drawBar(c, l, t+1, r, h, col);
        } else {
          drawGrad(c, l, t+1, r, h, col);
        }
      }
      l = r;
      //change mission colors
      col = getCols(_timeline[i].m);
      h = Math.ceil(SSEH.BARHEIGHT / col.length);
      //trajectory?, semitransparent?
    }
    if (l == l0) {
      r = l + 2;
      drawBar(c, l, t+1, r, h, col);
    }
    //c.setparam("globalAlpha", 1.0);
    //draw icons
    p0 = 0;   
    for (i=0; i<_timeline.length; i++) {
      //launch failure
      if ((_timeline[i].i) == "fail") {
        drawSymbol(c, UI.Scale.time(_timeline[i].d, w)+9, t+1, "lf");
      //event fb, oi, imp, edl, ae at dest, if not fail
      } else if (_timeline[i].i && _timeline[i].l == dest) {
        if (r - l0 > 8) {
          p = UI.Scale.time(_timeline[i].d, w);
          if (p < l0+2) { p = l0+2; }
          if (p - p0 < 4) continue;
          drawSymbol(c, p, t+1, _timeline[i].t);
          p0 = p;
        }
      }
    }
    
    if (!_overlay[dest]) { _overlay[dest] = createLine(t); }
    positionLine(l0, r, w, dest);
       
    //drawSc(c, w, t, dest);
    return y + _step;
  };
  
  this.drawEscape = function(c, t, w) {
    var x, y, pos, img, r = 15, sc = w/Math.PI;
    pos = parseElements(elem[_id]);
    y = t + (pos.r-85)*1.8;
    x = w + (pos.l-Math.PI)*sc;
    y -= Math.cos(Math.asin(x/y))*5; 
    img = _id.replace(/\d+/, "");
    c.image(Common.symbols[img], x-r, y-r, r*2, r*2);
    if (!_overlay.et) { _overlay.et = createOverlay({t:y-r, w:r*2, h:r*2}); }
    _overlay.et.style.left = px(x-r);
  };
  

  this.createTrajectory = function() {
    //ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  };

  
  this.ID = function() {
    return _id; 
  };

  this.Box = function() {
    return _box; 
  };

  this.Events = function() {
    return _data.ev; 
  };

  this.createBox = function() {
    _box = createBox();
    _box.style.top = px(-9999);
    _box.style.left = px(6);
    _box.onclick = function() { UI.vanish(false); };
    return _box; 
  };

  this.Name = function(shortn) {
    if (shortn && _data.shortname && _data.shortname.length > 0) {
      return _data.shortname[0].n; 
    }
    if (_data.title && _data.title.length > 0) {
      return _data.title[0].n; 
    }
  };
  
  this.Launchdate = function() {
    if (_timeline && _timeline.length > 0) {
      return _timeline[0].d; 
    }
  };
  
  this.Achievements = function(dest) {
    var i, res = [], s = "";
    for (i=0; i<_data.stats.length; i++) {
      if (_data.stats[i].d1.search(dest) != -1) {
        res.push(_data.stats[i]);
        if (s !== "" && _data.stats[i].s !== s)
          res.push({t:"all", d1:dest, d2:"", s:s});
        s = _data.stats[i].s;
      } else if (dest == "ter" && _data.stats[i].t.search(/^(hm|srm)$/) != -1) {
        res.push(_data.stats[i]);
        s = _data.stats[i].s;
      }
    }
    if (res.length > 0) {
      res.push({t:"all", d1:dest, d2:"", s:s});
    }
    return res;
  };
  
  this.Achievementsctry = function() {
    return readctryStats();
  };

  this.AchievementsLnch = function(dest) {
    var id, lv, part;
    part = _data.hasOwnProperty("part");
    id = (_data.id && _data.id.length > 0)?_data.id[0].n.slice(0,8):"";
    lv = (_data.lv && _data.lv.length > 0 && _data.lv[0].hasOwnProperty("id"))?_data.lv[0].id.replace(/^lnk/, ""):"";
    if (lv !== "") return {id:id, st:_data.stats[0].s, lv:lv, dt:_timeline[0].d, part:part}; 
  };
  
  this.Locations = function(dest) {
    if (_data.locations.hasOwnProperty(dest)) {
      return _data.locations[dest];
    }
  };
  
  this.hasDest = function(dest) {
    var i, rx;
    if (dest != "sbo") {
      rx = new RegExp("\\b" + dest + "\\b");
    } else {
      rx = new RegExp("\\b(ast|com)\\b");
    }
    for (i=0; i<_data.stats.length; i++) {
      if (_data.stats[i].d1.search(rx) != -1) return true; 
      else if (dest == "ter" && _data.stats[i].t.search(/^(hm|srm)$/) != -1) return true; 
    }
    return false;
  };
  
  this.Destinations = function() {
    var i, dest = [];
    for (i=0; i<_data.stats.length; i++) {
      dest.push(_data.stats[i].d1);
      if (_data.stats[i].t.search(/^(hm|srm)$/) != -1) { dest.push("ter"); }
    }
    return dest.unique();
  };

  this.Height = function() {
    var dest;
    dest = this.Destinations();
    return dest.length * (_step); 
  };
  
  this.Icon = function() {
    if (_data.icon && _data.icon.length >= 1) return _data.icon[0].i; 
  };
  
  if (parid) { _parent = document.getElementById(parid); }
  if (!_parent) { _parent = document.getElementsByTagName("body")[0]; }
  _step = SSEH.BARHEIGHT + Math.floor(SSEH.BARHEIGHT/4);
  
  _data.stats = readStats();
  _timeline = readTimeline();

  _data.title = readName();
  _data.shortname = readName(true);
  _data.names = readNames();
  _data.goal = readGoal();
  _data.stat = readStatus();
  //_data.dest = readDest();
  _data.ctry = readctry();
  _data.id = readId();
  _data.url = readUrls();
  _data.icon = readIcon();

  readDescription();
  
  _data.locations = readLocations();
  
  _data.ev = [];
  
  for (var i=0; i<_in.events.length; i++) {
    if (_in.events[i].type == "pom") continue;
    _data.ev[i] = {};
    _data.ev[i].type = readType(i);
    _data.ev[i].date = readDate(i);
    _data.ev[i].loc = readLoc(i);
    _data.ev[i].desc = readDesc(i);
  }
  
  // _box = createBox();
   
    
}

﻿/* global Create, Common, SSEH, UI, px, SPanel, Panel, Parse, Cdraw, Moons, Rings, Sbo, Dwarf, parseObject */

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
        if (l[j] === "" || !Common.hasOwnProperty(l[j])) continue;
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

﻿/* global UI, SSEH, Create, Common, Cdraw, data, objects, parseObject, px */

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
      case "a": scale = 12; break;
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
      h = 80;
      for (key in _data) {
        if  (_data[key].dodraw) {
          dist = (parseFloat(_data[key].a) - 2.1) * (h-10);
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

/* Dwarf planet systems */
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

﻿/* global Common, SSEH, Cdraw, objects, groups */

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


/* global UI, SSEH, Create, Common, px, Cdraw, Hist, Parse */

function Info(parent) {
  var _parent = parent, _box, _overlay, _sym,
       width, top, col, cnv, 
       hasFullscreen,
       log = [], launches = {},
       COLNUM = 7, ICONSIZE = 40,
  createOverlay = function(pos) {
    var box, w = 0;
    if (hasFullscreen) {
      box = Create.div(_parent, "hilight", "fullscreen", {l:0, t:0, h:ICONSIZE-2, w:ICONSIZE});
      box.title = "Toggle fullscreen mode";
      box.onclick = UI.toggleFullScreen;   
      w = ICONSIZE; 
    }
    box = Create.div(_parent, "hilight", "infogen", {l:w, t:0, h:ICONSIZE-2, w:ICONSIZE});
    //box.style.borderRadius = px(20);
    box.title = "General Information";
    box.onclick = UI.show;
    return box;
  },  
  //Infobox with Abbrevs, Icons, Info, Launches, LVs, Launch centers
  createBox = function() {
    var i, frag, box, panel, tab, tabs = ["info","legnd","abrev","lnch","lvs","creds"];  //lc
 
    box = Create.div(_parent, "infoBox", "geninfo", {w:SSEH.BOXWIDTH, h:520});
    Create.closex(box);
    
    for (i=0; i<tabs.length; i++) {
      //Tabs
      tab  =  Create.div(box, "infoTab", "tab"+tabs[i]);
      Create.text(tab, Common.names.find(tabs[i]).n);
      tab.onclick = SSEH.showInfo;
      if (i === 0) { tab.className = "infoTabA"; }
      panel = Create.div(box, "infoPane", "pan"+tabs[i], {w:SSEH.BOXWIDTH});
      //Panels
      switch (i) {
        case 0: drawInfo(panel); panel.style.display = "block"; break;
        case 1: drawLegend(panel); break;
        case 2: drawAbbrevs(panel); break;
        case 3: drawLnchlog(panel); break;
        case 4: drawLVlog(panel); break;
        case 5: drawCredits(panel); break;
      }
    }
    //_parent.appendChild(frag);
    return box;
  },
  drawLegend = function(panel) {
    var i, ttl, clm, stat, txt,
        x, y, w, h, t, c, key;

    h = 18;        
    c = new Cdraw("legIco", {top:px(33), left:px(0), parent:"panlegnd", width:540, height:h*15});


    clm = Create.div(panel, "legCol", "legCol1", {t:6, w:144, l:290});
    ttl =  Create.div(clm, "legTitle", null);
    Create.text(ttl, Common.names.find("mitp").n);
    
    w = 15;
    y = 0;
    x = 291;
    for (key in SSEH.mtype) {
      if (!SSEH.mtype.hasOwnProperty(key)) continue;
      if (key == "rvm") {
        clm = Create.div(panel, "legCol", "legCol1", {t:6, w:144, l:420});
        ttl =  Create.div(clm, "legTitle", null);
        Create.br(ttl);
        x = 421;
        y = 0;
      }
      if (!SSEH.mtype[key].col) continue;
      c.fillrect(x, y, h, w, SSEH.mtype[key].col);
      Create.span(clm, {n:SSEH.mtype[key].name}, "indent");
      Create.br(clm);
      y += h + 0.3;
    }
 
    clm = Create.div(panel, "legCol", "legCol2", {t:6, w:144, l:10});
    //mission status/types/colors
    ttl =  Create.div(clm, "legTitle", null, {t:0, l:0});
    Create.text(ttl, Common.names.find("mstat").n);
    
    stat = ["s","p","f","o","pl"];
    for (i=0; i<stat.length; i++) {
      txt = Common.names.find(stat[i]);
      Create.span(clm, {n:txt.n}, "legStatus status" + txt.n);
      Create.br(clm);
    }

    //icons
    clm = Create.div(panel, "legCol", "legCol3", {t:6, w:144, l:150});
    ttl =  Create.div(clm, "legTitle", null);
    Create.text(ttl, Common.names.find("evic").n);
  
    y = 0;
    x = 150;
    stat = ["lf", "fb","app","oi","edl","imp"];
    for (i=0; i<stat.length; i++) {
      if (!Common.sprites[stat[i]]) continue;
      if (stat[i] != "lf") { c.fillrect(x, y, h, w, "#eee"); }
      c.image(Common.symbols.sprite, Common.sprites[stat[i]].x, Common.sprites[stat[i]].y, 16, 16, x+2, y, w, w);
      Create.span(clm, {n:SSEH.icons[stat[i]].name}, "indent");
      Create.br(clm);
      y += h + 0.3;
    }

    clm = Create.div(panel, "legColW", "legCol5", {t:160, w:SSEH.BOXWIDTH-20, l:10});
    clm.style.marginTop = px(8);
    ttl =  Create.div(clm, "legTitle", null);
    Create.text(ttl, "Other Symbols");
    Create.symbol(clm, "down", "legImgW legS");
    //Create.img(clm, {i:Common.symbols.up.src}, "legImgW");
    Create.text(clm, " Show/hide detailed information \u00a0\u00a0\u00a0");
    Create.symbol(clm, "mbgnb", "legImgW");
    Create.symbol(clm, "smlfyb", "legImgW");
    Create.text(clm, " Enter/exit fullscreen display  ");
    Create.br(clm);
    Create.symbol(clm, "weather", "legImgWS");
    Create.text(clm, "Weather Info  ");
    Create.symbol(clm, "haz", "legImgWS");
    Create.text(clm, "Hazard Info  ");
    Create.symbol(clm, "ext", "legImgWS");
    Create.text(clm, "External Link");
    Create.symbol(clm, "globe", "legImgWS");
    Create.text(clm, "Map Link");
    
    
    clm = Create.div(panel, "legCol", "legCol4", {t:248, w:SSEH.BOXWIDTH-20, l:10});
    ttl =  Create.div(clm, "legTitle", null);
    Create.text(ttl, "Parameters");
    Create.bold(clm, "Orbits  ");
    Create.span(clm, {n:"Spacecraft:"}, "uline");
    Create.text(clm, " periapsis x apoapsis (AU/km) x inclination (degrees)");
    Create.br(clm);
    Create.text(clm, "       or   perihelion (AU) x eccentricity x inclination (degrees)  (Escape trajectories)");
    Create.br(clm);
    Create.span(clm, {n:"Natural Bodies:"}, "uline");
    Create.text(clm, " semimajor axis (AU/km) x eccentricity x inclination (degrees)");
    Create.br(clm);
    Create.bold(clm, "Radius ");
    Create.text(clm, " equatiorial [x planet facing] x polar (km)  or equatorial (km) / flattening ");
    Create.br(clm);
    Create.bold(clm, "Missions ");
    Create.text(clm, " Total Missions launched / successfull / ongoing");
    Create.br(clm);
    Create.bold(clm, "Composition ");
    Create.text(clm, " Percentages of all components with > 1% volume fraction; Core: % of total radius; Porosity: % of empty space cotained. ");
    Create.br(clm);
    Create.bold(clm, "Temperature ");
    Create.text(clm, " Minimum / average / maximum (Kelvin) ");
    Create.br(clm);
    Create.text(clm, "See glossary for definition of terms.");
    Create.br(clm);
    Create.br(clm);
    Create.bold(clm, "Other than that, the general idea is: click or hover on anything for further information.");
    
  },  
  drawInfo = function(panel) {
    var t, key, id, bodies, clm;
    panel.style.background = "#000 url(" + Common.symbols.lo.src + ") no-repeat center 300px";
    panel.style.backgroundSize = "contain";

    clm = Create.div(panel, "legCol", null, {t:26, l:20, w:SSEH.BOXWIDTH-50});
    t = Create.div(clm, "legTitle");
    t.style.fontSize = px(20);
    t.style.marginBottom = px(6);
    Create.text(t, SSEH.TITLE);
    Create.bold(clm, "Solar System = ");
    Create.text(clm, "Our sun, all bodies that orbit it, and all bodies orbiting those. Click on their images for data about them.");
    Create.br(clm);
    Create.bold(clm, "Exploration = ");
    Create.text(clm, "All missions visiting or observing Solar System bodies and traveling beyond Earth orbit.");
    Create.br(clm);
    Create.bold(clm, "History = ");
    Create.text(clm, "The Period from the first attempt to launch something beyond Earth orbit (1958) to the latest planned event in that regime (a.k.a. future history).");
    
    Create.br(clm);
    Create.br(clm);
    Create.text(clm, "Go to: ");
    bodies = Hist.Bodies();
    for (key in bodies) {
      if (!bodies.hasOwnProperty(key)) continue;
      if (key == "sol") continue;
      if (key == "jup") { Create.br(clm); }
      id = "info"+key;
      t = Create.div(clm, "legLnk", "info"+key);
      t.onclick = UI.go;
      //t.style.background = Common.names.findColor(key);
      Create.text(t, "#"+ Common.names.find(key).n);
    }
    
    t = Create.div(panel, "histTitle", null, {t:480});
    Create.text(t, "Version " + SSEH.VERSION + "\u00a0");
    t.appendChild(Common.symbols.cc);
    Create.text(t, "\u00a0" + SSEH.DATE + SSEH.AUTHOR + "\u00a0");    
  },  
  drawAbbrevs = function(panel) {
    //acronyms
    var i, t, key, sc, clm, txt = [], ttl, col;
  
    panel.style.backgroundColor = "#fff";
    panel.style.border = "1px solid #000";
    clm = Create.div(panel, "legColW", "legCol1", {t:6, l:10, w:SSEH.BOXWIDTH-20});

    ttl =  Create.div(clm, "legTitle", null);
    Create.text(ttl, Common.names.find("acro").n);

    for (i=0; i<SSEH.abbrevs.length; i++) {
      key = SSEH.abbrevs[i];
      txt.push(Common.names.find(key));
      txt[txt.length-1].k = key;
      if (Common.loc.hasOwnProperty(key) && Common.loc[key].hasOwnProperty("desc") && Common.loc[key].desc.search(/show/) != -1) {
        t = Common.loc[key].desc.match(/show\:([^;\:]+)/);
        if (t !== null) { txt[txt.length-1].n = t[1]; }
      }
    }
    txt.sort( function(a,b) { return a.n.toLowerCase() > b.n.toLowerCase()?1:-1; } );
    
    for (i=0; i<txt.length; i++) {
      key = txt[i].k.replace("_", "");
      if (Common.sprites.hasOwnProperty(key)) {
        sc = key.search(/^(oi|edl|lf|fb|td|imp|app)$/) == -1 ? 1.5 : 1.0;
        Create.symbol(clm, key, "symLegend", sc);
      }
      Create.bold(clm, txt[i].n + ":\u00a0");
      Create.text(clm, txt[i].l);
      if (txt[i].hasOwnProperty("u")) {
        Create.asymbol(clm, {k:"ext", u:"http://"+txt[i].u}, "symLnk");
      }
      Create.br(clm);
    }
  },
  //Launches/yr +  Table w/ hover
  drawLnchlog = function(panel) {
    var key, clm, ttl, probes = Hist.Probes();
    //Select launch fail, countries
    
    panel.style.backgroundColor = "#fff";
    clm = Create.div(panel, "legCol", "legCol1", {t:6, l:10});
    ttl = Create.div(clm, "legTitle", null);
    ttl.style.color = "#000";
    Create.text(ttl, Common.names.find("lpyr").n);

    for (key in probes) {
      if (!probes.hasOwnProperty(key)) continue;
      log.push(probes[key].Achievementsctry());
      //dt = probes[key].Launchdate();
    }

    launches.all = getStats();
    
    cnv = new Cdraw("legLL", {top:px(16), left:px(5), parent:"panlnch", width:width-10, height:220});
    drawStats();
    panel.appendChild(tblctry(log));
  },
  getStats = function(cond) {
    var cd, rx, fld, yr, i, res = {};
    if (cond) {
      cd = cond.split("=");
      if (cd.length != 2) return; 
      rx = new RegExp("\\b"+cd[1]+"\\b");
      fld = cd[0];
    }
    for (i=0; i<log.length; i++) {
      yr = log[i].l.getFullYear();
      if (cond && !rx.test(log[i][fld])) continue;
      if (!res.hasOwnProperty(yr)) { res[yr] = 0; }
      res[yr]++;
    }
    return res;
  },
  drawStats = function(e) { 
    var i, h, w, col, type,
    ev = e || window.event; 
    
    w = cnv.Width();
    h = cnv.Height()-20;
    col = "#000";
    if (ev) {
      type = ev.target.id;
      if (!type || type === "") { type = ev.target.parentNode.id; }
    }
     
    cnv.clear();
    
    for (i=0; i<21; i++) {
      if (i === 0) {
        cnv.hline(24, h-i*8, w-28, col, 1);
      } else {
        cnv.hline(24, h-i*8, 4, col, 1);
      }
      if (i % 2 === 0) {
        cnv.text(i.toString(), 20, h-i*8, SSEH.SCALEFONT, "right", col, "middle");
      }
    }
    if (type) {
      drawSeries("lall", w, h);
      drawSeries(type, w, h);
    } else {
      drawSeries("all", w, h);
    }    
    if (ev) { ev.stopPropagation(); }
  },
  drawSeries = function(type, w, h) { 
    var i, l, t, yr, col, lwidth,
        yr0 = SSEH.STARTDATE.getFullYear()+1,
        yr1 = SSEH.ENDDATE.getFullYear(),
        now = new Date();

    col = "#000";
    if (type == "lall") {
      col = "#ddd";
      type = "all";    
    } else if (type != "all") {
      t = type.split("=");
      if (t[0] === "c") { 
        col = Common.ctry[t[1]].col; 
        if (t[1] === "su") yr1 = 1991;
        else if (t[1] === "ru") yr0 = 1991;
      } else if (t[0] === "s") {
        t = t[1].split("|");
        t = Common.desc[t[0]].desc.split(":");
        col = t[1];
      }
      lwidth = 2;
    }
    if (!launches.hasOwnProperty(type)) {
      launches[type] = getStats(type);
    }
    yr  = new Date(yr0, 0, 1);
    for (i=yr0; i<=yr1; i++) {
      yr.setFullYear(i);
      if (type == "all" && yr.diff(now) < 0 && col != "#ddd") { col = "#bbb"; }
      l = UI.Scale.time(yr, w + 40) - 56;
      t = launches[type].hasOwnProperty(i)?launches[type][i]*8:0;
      if (type == "all" && i % 5 === 0) {
        cnv.text(i.toString(), l, h+8, SSEH.SCALEFONT, "center", "#000", "top");
        cnv.vline(l, h, 4, "#000", 1.3);
      }
      if (yr.diff(now) > 0 || t > 0) { cnv.fillcircle(l, h-t, 3, col); }
      if (t !== 0) {
        cnv.vline(l, h-t, t, col, lwidth);
      }
    }
  },
  tblctry  = function(log) { 
    var key, rx, i, j, t, car = [], tbl, tr, td,
        flds = ["all","s","p","f","lf","o","pl"],
        cstats = {}, frag;
 
    frag = document.createDocumentFragment();

    tbl = Create.table(frag, "infoTable");
    tbl.style.position = "absolute";
    tbl.style.top = px(230);
    tbl.onmouseover = drawStats;

    for (key in Common.ctry) {
      if (!Common.ctry.hasOwnProperty(key)) continue;
      rx = new RegExp(key);
      cstats[key] = {f:0,lf:0,p:0,s:0,o:0,pl:0};
      for (i=0; i<log.length; i++) {
        if (rx.test(log[i].c)) { cstats[key][log[i].s]++; }
      }
    }
    
    //calculate sums
    for (key in cstats) {
      if (!cstats.hasOwnProperty(key)) continue;
      cstats[key].all = Parse.sumType(cstats[key]);
    }
    cstats.all = {all:0,f:0,lf:0,p:0,s:0,o:0,pl:0};
    for (i=0; i<flds.length; i++) {
      cstats.all[flds[i]] = Parse.sumField(cstats, flds[i]);
    }
    
    //format special fields sp: success (part.), fl: fail (launch)
    for (key in cstats) {
      if (!cstats.hasOwnProperty(key)) continue;
      cstats[key].sp = (cstats[key].s + cstats[key].p).toString() + " (" + cstats[key].p + ")";
      cstats[key].fl = (cstats[key].f + cstats[key].lf).toString() + " (" + cstats[key].lf + ")";
      if (key != "all") { car.push({k:key, n:cstats[key].all}); }
    }
    
    car.sort(function(a, b) { return b.n - a.n; });
    
    flds = ["sp","fl","o","pl","all"];
    
    //header
    tr = Create.tr(tbl, "tblHead");
    Create.td(tr, {n:" "});
    for (i=0; i<flds.length; i++) {
      td = Create.td(tr, Common.names.find(flds[i]));
      if (flds[i] == "all") continue;
      if (flds[i] == "sp") { td.id = "s=s|p"; }
      else if (flds[i] == "fl") { td.id = "s=f|lf"; }
      else { td.id = "s=" + flds[i]; }
      td.style.cursor = "help";
      td.onmouseover = drawStats;
      for (j=0; j<td.childNodes.length; j++) {
        td.childNodes[j].onmouseover = drawStats;          
      }
    }
    
    //rows sorted by total nr
    for  (i=0; i<car.length; i++) {
      key = car[i].k;
      if (cstats[key].all > 0) {
        tr = Create.tr(tbl);
        t = Common.names.find(key);
        t.i = key;
        td = Create.td(tr, t);
        td.id = "c=" + key;
        td.style.cursor = "help";
        td.onmouseover = drawStats;
        for (j=0; j<td.childNodes.length; j++) {
          td.childNodes[j].onmouseover = drawStats;          
        }
        for (j=0; j<flds.length; j++) {
          Create.td(tr, {n:cstats[key][flds[j]]});
        }
      }
    }
    //all
    tr = Create.tr(tbl);
    Create.td(tr, Common.names.find("all"));
    for (i=0; i<flds.length; i++) {
      Create.td(tr, {n:cstats.all[flds[i]]});
    }
    return frag;
  },
  drawLVlog = function(panel) {
    var clm, ttl;
    panel.style.backgroundColor = "#fff";
    panel.style.border = "1px solid #000";
    
    clm = Create.div(panel, "legColW", "legCol0", {t:6, l:10, w:SSEH.BOXWIDTH-20});
    Create.span(clm, Common.names.find("lvstt"), "legTitle");
    Create.br(clm);
    Create.text(clm, "In order of appearance. Stats: total / failed / planned launches");
    clm = Create.div(panel, "legColW", "legColLV", {t:42, l:4, w:SSEH.BOXWIDTH-20});
    
  },
  getHeight = function(h, n, num) {
    var i, res = 0;
    for (i=n;i>n-num;i--) {
      if (res < h[i]) { res = h[i]; }
    }
    return res + 6;
  },
  drawCredits = function(panel) {
    //image credits
    var t, clm, ttl;
  
    panel.style.backgroundColor = "#fff";
    panel.style.border = "1px solid #000";
    clm = Create.div(panel, "legColW", "legCol1", {t:6, l:10, w:SSEH.BOXWIDTH-20});

    ttl =  Create.div(clm, "legTitle", null);
    Create.text(ttl, Common.names.find("credits").n);

    Create.bold(clm, "Solar System Objects:\u00a0");
    t = Create.div(clm);
    t.innerHTML = "Sun:<i> NASA/SDO/GSFC</i><br>" + 
                  "Mercury:<i>  NASA/JHUAPL/Carnegie Institution of Washington</i><br>" +
                  "Venus<i> NASA/JPL/Mattias Malmer</i><br>" +
                  "Venus map:<i> NASA/USGS/JPL</i><br>" +
                  "Earth:<i> NASA/GSFC</i><br>" +
                  "Moon:<i> NASA/USGS</i><br>" +
                  "Mars:<i> NASA/JPL/Malin Space Science Systems</i><br>" +
                  "Mars map:<i> NASA/JPL/USGS</i><br>" +
                  "Phobos, Deimos:<i> NASA/JPL-Caltech/University of Arizona</i><br>" +
                  "Itokawa:<i> JAXA</i><br>" +
                  "Toutatis:<i> CNSA</i><br>" +
                  "Mathilde, Eros:<i> NASA/JPL/JHUAPL</i><br>" +
                  "Ida, Gaspra, Borelly:<i> NASA/JPL</i><br>" +
                  "Annefrank, Wild 2:<i> NASA/JPL-Caltech/University of Maryland/Cornell</i><br>" +
                  "Tempel 1, Hartley 2:<i> NASA/JPL-Caltech/UMD</i><br>" +
                  "Halley:<i> NASA/ESA/Giotto Project</i><br>" +
                  "Braille:<i> NASA/JPL/USGS</i><br>" +
                  "Lutetia, Šteins, Churyumov-Gerasimenko<i>: ESA/Rosetta/NAVCAM</i><br>" +
                  "Ceres, Vesta:<i> NASA/JPL-Caltech/UCLA/MPS/DLR/IDA</i><br>" +
                  "Pallas:<i> NASA/ESA/STScI</i><br>" +
                  "Hygiea:<i> ESO/P. Vernazza et al.</i><br>" +
                  "Jupiter & Moons:<i> NASA/JPL/DLR</i><br>" +
                  "Galilean Moons:<i> NASA/ESA/A. Simon (GSFC)</i><br>" +
                  "Saturn & Moons:<i> NASA/JPL-Caltech/SSI/LPI</i><br>" +
                  "Neptune, Uranus & moons:<i> NASA/JPL</i><br>" +
                  "Neptune rings:<i> NASA/JPL/Paul Schenk (LPI)</i><br>" +
                  "Pluto:<i> NASA/JHUAPL/SWRI, NASA/ESA/SRI/M. Buie (base map)</i><br>" +
                  "TNOs:<i> NASA</i></i><br>";
    Create.bold(clm, "Spacecraft/Missions:\u00a0");
    t = Create.div(clm);
    t.innerHTML = "Please refer to the links given for each mission";

  };
  
  this.createLVlog = function() {
    var i, j, key, lv, id, lvs, probes, frag, box, lvsort = [],
        dt, h = [], hrow, im = [], ids = "", clm,
        pan = document.getElementById("legColLV");

    frag = document.createDocumentFragment();
    lvs = Hist.LVs();
    probes = Hist.Probes();
    for (key in probes) {
      if (!probes.hasOwnProperty(key)) continue;
      lv = probes[key].AchievementsLnch();
      if (!lv) continue;
      id = Common.names.findLV(lv.lv);
      if (id) {
        if (lv.part == true) continue
        if (lv.id !== "" && ids.search(lv.id) != -1) continue;
        lvs[id].setStat("t");
        if (lv.st == "lf") { lvs[id].setStat("f"); }
        if (lv.st == "pl") { lvs[id].setStat("p"); }
        lvs[id].setStat("dt", lv.dt);
        ids += lv.id;
      }
    }

    for (key in lvs) {
      if (!lvs.hasOwnProperty(key)) continue;
      dt = lvs[key].Date();
      if (dt) { lvsort.push({id:key, dt:dt}); }
    }
    lvsort.sort( function(a, b) { return a.dt <= b.dt?-1:1; } );
    
    for (i=0; i<lvsort.length; i++) {
      key = lvsort[i].id;
      lv = lvs[key].list();
      clm = Create.div(frag, "legColC", null, {w:82});
      dt = lvsort[i].dt.getFullYear();
      Create.span(clm, {n:dt}, "bold");
      Create.br(clm);
      im[i] = Create.img(clm, lv);
      h[i] = 3*parseInt(lv.d);
      im[i].style.height = px(h[i]);
      if ((i+1)%COLNUM === 0 || i == lvsort.length-1) {
        hrow = getHeight(h, i, COLNUM);
        for (j=i;j>i-COLNUM;j--) {
          if (j!=i && (j+1)%COLNUM === 0) { break; }
          im[j].style.marginTop = px(hrow-h[j]);
        }
      }
      Create.br(clm);
      //lv.n = lv.n.replace(/(Delta II)/, "$1\u2009");
      Create.span(clm, lv, "lvid");
      Create.br(clm);
      //lvs[key].drawData(clm, false);
      Create.span(clm, {n:lv.st.t + "\u2009/\u2009" + lv.st.f + "\u2009/\u2009" + lv.st.p});
    }
    
    pan.appendChild(frag);
  };
  
  this.show = function(id) {
    var i, pan = _box.childNodes;
    for (i=0; i<pan.length; i++) {
      if (pan[i].className == "infoPane") {
        if (pan[i].id == id) { pan[i].style.display = "block"; }
        else { pan[i].style.display = "none"; }
      }
    }
  };
  
  this.createBox = function() {
    _box = createBox();
    _box.style.top = px(-9999);
    _box.style.left = px(34);
  }; 

  this.draw = function(c) {
    var box, a, w = hasFullscreen?ICONSIZE+2:0,
        fscr = UI.isFullScreen()?Common.sprites.smlfy:Common.sprites.mbgn;

    if (!_overlay) {
      box = Create.div(_parent, "info", null, {w:ICONSIZE+w});    
      if (hasFullscreen) { _sym = Create.symbol(box, "mbgn", "symFulscr"); }
      a = Create.span(box, {n:"\u2630"});
      a.style.left = px(w+2);
      _overlay = createOverlay({t:0, l:w+0});
    }
    _sym.style.backgroundPosition = px(-fscr.x) + " " + px(-fscr.y);
  };
  
  width = SSEH.BOXWIDTH;
  top = 0;
  col = "#fff";
  hasFullscreen = document.fullScreenElement !== null || document.mozFullScreen !== null || document.webkitIsFullScreen !== null || document.msFullscreenEnabled !== null;
  this.createBox();
}


SSEH.showInfo = function() {
  var i, nodes, pan, id = this.id.replace(/tab/, "pan");
  pan = document.getElementById(id);
  if (!pan) return; 
  nodes = pan.parentNode.childNodes;
  for (i=0; i<nodes.length; i++) {
    if (nodes[i].className == "infoPane") {
      if (nodes[i].id == id) { nodes[i].style.display = "block";  }
      else { nodes[i].style.display = "none"; }
    } else if (nodes[i].className.search(/infoTab/) != -1) {
      if (nodes[i].id == this.id) { nodes[i].className = "infoTabA";  }
      else { nodes[i].className = "infoTab"; }
    }
  }
};


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

/* global Trig, Parse */
var parseElements = function(item, date, gmass) {
  var dt, i, key, gm, dat = {}, elms = ["a","e","i","w","M","L","W","N"],
/*
    ep = epoch (dt)
    N = longitude of the ascending node (deg)
    i = inclination to the ecliptic (plane of the Earth's orbit) (deg)
    w = argument of perihelion (deg)
    a = semi-major axis, or mean distance from Sun (AU,km)
    e = eccentricity (0=circle, 0-1=ellipse, 1=parabola) (-)
    M = mean anomaly (0 at perihelion; increases uniformly with time) (deg)
    n = mean daily motion = 2pi/P
    
    W = N + w  = longitude of perihelion
    L = M + W  = mean longitude
    q = a*(1-e) = perihelion distance
    Q = a*(1+e) = aphelion distance
    P = a ^ 1.5 = orbital period (years if a is in AU, astronomical units)
    T = Epoch_of_M - (M(deg)/360_deg) / P  = time of perihelion
    v = true anomaly (angle between position and perihelion)
    E = eccentric anomaly
*/
  near_parabolic = function(E, e) {
    var anom2 = e > 1.0 ? E*E : -E*E,
        term = e * anom2 * E / 6.0,
        rval = (1.0 - e) * E - term,
        n = 4;

    while(Math.abs(term) > 1e-15) {
      term *= anom2 / (n * (n + 1));
      rval -= term;
      n += 2;
    }
    return(rval);
  },
  kepler = function(dat) {
    var curr, err, trial, tmod,
        e = dat.e, M = dat.M,
        thresh = 1e-8,
        offset = 0.0, 
        delta_curr = 1.9, 
        is_negative = false, 
        n_iter = 0;

    if (!M) return(0.0); 

    if (e < 1.0) {
      if (M < -Math.PI || M > Math.PI) {
         tmod = Trig.normalize0(M);
         offset = M - tmod;
         M = tmod;
       }

      if (e < 0.9) {   
        curr = Math.atan2(Math.sin(M), Math.cos(M) - e);
        do {
          err = (curr - e * Math.sin(curr) - M) / (1.0 - e * Math.cos(curr));
          curr -= err;
        } while (Math.abs(err) > thresh);
        return curr; // + offset;
      }
    }

    if ( M < 0.0) {
      M = -M;
      is_negative = true;
    }

    curr = M;
    thresh = thresh * Math.abs(1.0 - e);
               /* Due to roundoff error,  there's no way we can hope to */
               /* get below a certain minimum threshhold anyway:        */
    if ( thresh < 1e-15) { thresh = 1e-15; }
    if ( (e > 0.8 && M < Math.PI / 3.0) || e > 1.0) {   /* up to 60 degrees */
      trial = M / Math.abs( 1.0 - e);

      if ( trial * trial > 6.0 * Math.abs(1.0 - e)) {  /* cubic term is dominant */
        if (M < Math.PI) {
          trial = Math.pow(6.0 * M, 1/3);
        } else {       /* hyperbolic w/ 5th & higher-order terms predominant */
          trial = Trig.asinh( M / e);
        }
      }
      curr = trial;
    }
    if (e > 1.0 && M > 4.0) {   /* hyperbolic, large-mean-anomaly case */
      curr = Math.log(M);
    }
    if (e < 1.0) {
      while(Math.abs( delta_curr) > thresh) {
        if ( n_iter++ > 8) {
          err = near_parabolic(curr, e) - M;
        } else {
          err = curr - e * Math.sin(curr) - M;
        }
        delta_curr = -err / (1.0 - e * Math.cos(curr));
        curr += delta_curr;
      }
    } else {
      while (Math.abs(delta_curr) > thresh) {
        if (n_iter++ > 7) {
          err = -near_parabolic(curr, e) - M;
        } else {
          err = e * Trig.sinh(curr) - curr - M;
        }
        delta_curr = -err / (e * Trig.cosh(curr) - 1.0);
        curr += delta_curr;
      }
    }
    return( is_negative ? offset - curr : offset + curr);
  },
  trueAnomaly = function(dat) {
    var v, r, x, y, r0, g, t;

    if (dat.e == 1.0) {   /* parabolic */
      t = dat.jd0 - dat.T;
      g = dat.w0 * t * 0.5;

      y = Math.pow(g + Math.sqrt(g * g + 1.0), 1/3);
      dat.v = 2.0 * Math.atan(y - 1.0 / y);
    } else {          /* got the mean anomaly;  compute eccentric,  then true */
      dat.E = kepler(dat);
      if (dat.e > 1.0) {    /* hyperbolic case */
        x = (dat.e - Trig.cosh(dat.E));
        y = Trig.sinh(dat.E);
      } else {          /* elliptical case */
        x = (Math.cos(dat.E) - dat.e);
        y =  Math.sin(dat.E);
      }
      y *= Math.sqrt(Math.abs(1.0 - dat.e * dat.e));
      dat.v = Math.atan2(y, x);
    }

    r0 = dat.q * (1.0 + dat.e);
    dat.r = r0 / (1.0 + dat.e * Math.cos(dat.v));
  },
  derive = function(dat) {
    if (!dat.hasOwnProperty("w") && !dat.hasOwnProperty("M")) {
      dat.w = dat.W - dat.N;
      dat.M = dat.L - dat.W;
    }
    if (dat.e < 1.0) { dat.M = Trig.normalize0(dat.M); }
    dat.P = Math.pow(Math.abs(dat.a), 1.5);
    dat.T = dat.jd0 - (dat.M/Math.PI/2) / dat.P;

    if (dat.e != 1.0) {   /* for non-parabolic orbits: */
     dat.q = dat.a * (1.0 - dat.e);
     dat.t0 = dat.a * Math.sqrt(Math.abs(dat.a) / gm);
    } else {
     dat.w0 = (3.0 / Math.sqrt(2)) / (dat.q * Math.sqrt(dat.q / gm));
     dat.a = 0.0;
     dat.t0 = 0.0;
    }
    dat.am = Math.sqrt(gm * dat.q * (1.0 + dat.e));
  },
  cartesian = function(dat) {
    var x, y, z, u = dat.v + dat.w;
    x = dat.r * (Math.cos(dat.N) * Math.cos(u) - Math.sin(dat.N) * Math.sin(u) * Math.cos(dat.i));
    y = dat.r * (Math.sin(dat.N) * Math.cos(u) + Math.cos(dat.N) * Math.sin(u) * Math.cos(dat.i));
    z = dat.r * (Math.sin(u) * Math.sin(dat.i));
    dat.x = x;
    dat.y = y;
    dat.z = z;
    return {x:x, y:y, z:z};
  },
  ecliptic = function(dat) {
    var lon, lat;
    lon = Math.atan2(dat.y, dat.x);
    lat = Math.atan2(dat.z, Math.sqrt(dat.x*dat.x + dat.y*dat.y));
    dat.l = Trig.normalize(lon);
    dat.b = lat;
    return {l:lon, b:lat}; 
  },
  JD = function(dt) {  
    var yr = dt.getUTCFullYear(),
        mo = dt.getUTCMonth() + 1,
        dy = dt.getUTCDate(),
        frac = dt.frac(),
        j = 0, ly = 0, my, ypmy, djm, djm0 = 2400000.5,
        IYMIN = -4799,         /* Earliest year allowed (4800BC) */
        mtab = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   /* Month lengths in days */

    if (yr < IYMIN) return -1; 
    if (mo < 1 || mo > 12) return -2; 
    
    if ((mo == 2) && (yr%4 === 0) && ((yr%100 !== 0) || (yr%400 === 0))) { ly = 1; }
    if ( (dy < 1) || (dy > (mtab[mo-1] + ly))) { j = -3; }
     my = (mo - 14) / 12;
     ypmy = yr + my;
     djm = ((1461.0 * (ypmy + 4800.0)) / 4 + (367 * (mo - 2 - 12 * my)) / 12 - (3 * ((ypmy + 4900.0) / 100)) / 4 + dy - 2432076);

     return djm + djm0 + frac;
  };
  
  gm = gmass || Math.pow(0.01720209895, 2);

  if (date) {
    if (date instanceof Date) { dt = date; }
    else { dt = Parse.dt(date); }
  }
  if (!dt) { dt = new Date(); }
  dat.jd = JD(dt);
    
  dt = Parse.dt(item.ep);
  dat.jd0 = JD(dt);
  dat.d = dat.jd - dat.jd0;
  dat.cy = dat.d / 36525;
  
  for (i=0; i<elms.length; i++) {
    key = elms[i];
    if (item.hasOwnProperty("d"+key)) {
      dat[key] = item[key] + item["d"+key] * dat.cy;
    } else if (item.hasOwnProperty(key)) {
      dat[key] = item[key];
    }
    if (dat.hasOwnProperty(key) && key.search(/a|e/) == -1) { dat[key] *= Math.PI / 180; }
  }
  derive(dat);
  trueAnomaly(dat);
  cartesian(dat);
  ecliptic(dat);
  return dat;
};

//gm_sol = 0.0002959122082855911025
//gm_earth = 2975247333163008






