/* global Common, SSEH */
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


