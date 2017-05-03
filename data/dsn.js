/* global UI, SSEH, Common, Parse, Create, Read, Cdraw, Trig, px */

Common.dsn = {
gdscc: {name:"DSN Goldstone:Goldstone Deep Space Communications Complex", ctry:"us", desig:"GDSCC", desc:"url:eyes.nasa.gov/dsn/dsn.html;loc:35.426667N,116.89W;ag:nasa;show:GDSCC:E;reg:California, USA;dish:1x70m,4x34m,1x26m"},
cdscc: {name:"DSN Canberra:Canberra Deep Space Communications Complex", ctry:"us;au", desig:"CDSCC", desc:"url:eyes.nasa.gov/dsn/dsn.html;loc:35.401389S,148.981667E;ag:nasa;show:CDSCC:S;reg:Australia;dish:1x70m,4x34m,1x26m"},
dsa1: {name:"ESTRACK New Norica:Deep Space Antenna 1, New Norica", ctry:"eu;au", desig:"DSA 1", desc:"url:www.esa.int/Our_Activities/Operations/Estrack/New_Norcia_-_DSA_1;loc:31.0482S,116.1914E;ag:esa;show:DSA 1:S;reg:Western Australia;dish:1x35m"},
dsa2: {name:"ESTRACK Cebreros:Deep Space Antenna 2, Cebreros", ctry:"eu;es", desig:"DSA 2", desc:"url:www.esa.int/Our_Activities/Operations/Estrack/Cebreros_-_DSA_2;loc:40.4528N,4.3676W;ag:esa;show:DSA 2:SE;reg:Castila y León, Spain;dish:1x35m"},
mdscc: {name:"DSN Madrid:Madrid Deep Space Communications Complex", ctry:"us;es", desig:"MDSCC", desc:"url:eyes.nasa.gov/dsn/dsn.html;loc:40.431389N,4.248056W;ag:nasa;show:MDSCC:SW;reg:Spain;dish:1x70m,3x34m,1x26m"},
dsa3: {name:"ESTRACK Malargüe:Deep Space Antenna 3, Malagüe", ctry:"eu;ar", desig:"DSA 3", desc:"url:www.esa.int/Our_Activities/Operations/Estrack/Malarguee_-_DSA_3;loc:35.776S,69.3982W;ag:esa;show:DSA 3:S;reg:Mendoza, Argentina;dish:1x35m"},
cdsnjia: {name:"CDSN Jiamusi:Chinese DSN Station Jiamusi", other:"佳木斯", ctry:"cn", desig:"", desc:"url:;loc:46.8N,130.317E;ag:cnsa;show:Jiamusi:W;reg:Jiamusi, China;dish:1x64m"},
cdsnkash: {name:"CDSN Kashgar:Chinese DSN Station Kashgar", other:"喀什市", ctry:"cn", desig:"", desc:"url:;loc:39.5N,75.0E;ag:cnsa;show:Kashgar:S;reg:Xinjiang, China;dish:1x35m,1x18m"},
cdsnmi: {name:"CDSN Miyun:Chinese DSN Station Miyun", other:"密云区", ctry:"cn", desig:"", desc:"url:;loc:40.51N,116.89E;ag:cnsa;show:Miyun:S;reg:Beijing, China;dish:1x50m"},
cdsnkun: {name:"CDSN Kunming:Chinese DSN Station Kunming", other:"昆明", ctry:"cn", desig:"", desc:"url:;loc:24.84N,102.58E;ag:cnsa;show:Kunming:S;reg:Yunnan, China;dish:1x40m"},
idsn: {name:"IDSN Byalalu:Indian DSN Station Byalalu", other:"பயலாலு", ctry:"ind", desig:"", desc:"url:http://www.isro.gov.in/about-isro/isro-telemetry-tracking-and-command-network-istrac;loc:12.901631N,77.368619E;ag:isro;show:IDSN:S;reg:Karnataka, India;dish:1x32m,1x18m"},
evpat: {name:"Yevpatoria:Yevpatoria RT-70 Radio Telescope\n", other:"Евпатория", ctry:"ru;ua", desig:"RT-70", desc:"url:;loc:45.189028N,33.187361E;ag:rosc;show:RT-70:S;reg:Crimea, Ukraine;dish:1x70m,1x32m"},
galen: {name:"Galyonki:Eastern Deep Space Communication Center\n", other:"Галёнки", ctry:"ru", desig:"VTSDKS", desc:"url:;loc:44.0161N,131.757E;ag:rosc;show:VTSDKS:S;reg:Primorsky Krai, Russia;dish:1x70m,1x32m,1x25m"},
/*bear: {name:"Dolgoye Ledovo", other:" Долгое Ледово;Bear Lakes", ctry:"ru", desig:"RT-64", desc:"url:;loc:55.867886N,37.951804E;ag:rosc;show:Bear Lakes;reg:Moscow, Russia;dish:1x64m"},*/
udsc: {name:"Usuda DSC:Usuda Deep Space Center", other:"臼田宇宙空間観測所", ctry:"jp", desig:"UDSC", desc:"url:global.jaxa.jp/about/centers/udsc/index.html;loc:36.133056N,138.362222E;ag:jaxa;show:UDSC:S;reg:Nagano, Japan;dish:1x64m"}
};
    
  
Common.ctrl = {
  gsfc: {name:"GSFC:Goddard Space Flight Center, Greenbelt, Md", other:"", ctry:"us", desc:"url:www.nasa.gov/centers/goddard/home;loc:38.996944N,76.848333W;show:GSFC:NW;ag:nasa;reg:Maryland,USA"},
  jpl: {name:"JPL SFOF:Space Flight Operations Facility (JPL), Pasadena, Ca", other:"", ctry:"us", desc:"url:www.jpl.nasa.gov/;loc:34.201086N,118.173614W;show:SFOF:S;ag:masa;reg:California,USA"},
  esoc: {name:"ESOC:European Space Operations Centre, Darmstadt", other:"", ctry:"eu;de", desc:"url:www.esa.int/esoc;loc:49.871111N,8.622778E;show:ESOC:S;ag:esa;reg:Darmstadt,Germany"},
  tsup: {name:"TsUP:RKA Mission Control Center, Korolev", other:"Центр управления полётами", ctry:"ru", desc:"url:www.mcc.rsa.ru/cup.htm;loc:55.912636N,37.810267E;show:TsUP:S;ag:rosc;reg:Korolyov,Moscow"},
  bacc: {name:"BACC:Beijing Aerospace Command and Control Center", other:"北京航天指挥控制中心", ctry:"cn", desc:"url:;loc:40.071989N,116.257092E;show:BACC:E;ag:cnsa;reg:Beijing,China"},
  tksc: {name:"TKSC:Tsukuba Space Center", other:"筑波宇宙センター", ctry:"jp", desc:"url:www.jaxa.jp/about/centers/tksc/index_e.html;loc:36.065778N,140.129806E;show:TKSC:E;ag:jaxa;reg:Ibaraki,Japan"},
  istrac: {name:"ISTRAC:ISRO Telemetry, Tracking and Command\nNetwork, Bangalore", other:"इस्रो टेलिमेट्री, ट्रॅकिंग अॅन्ड कमांड नेटवर्क", ctry:"ind", desc:"url:istrac.vsnl.net.in;loc:12.966667N,77.566667E;show:ISTRAC:W;ag:isro;reg:Bangalore,India"}
}

Common.tdz = {
woomera: {name:"WTR :Woomera Test Range", other:"", ctry:"jp;au", desig:"", desc:"url:www.defence.gov.au/woomera/index.htm;loc:30.3S,135.7E;show:WTR:N;reg:South Australia, Australia"},
kazakhstan: {name:"Kazakhstan", other:"", ctry:"ru;kz", desig:"", desc:"url:;loc:47.5N,68.1E;show:0;reg:Betpak-Dala, Kazakhstan"},
sibiria: {name:"Sibiria", other:"", ctry:"ru", desig:"", desc:"url:;loc:60N,76E;show:0;reg:Khanty-Mansi,Russia"},
uttr: {name:"UTTR:Utah Test and Training Range", other:"", ctry:"us", desig:"", desc:"url:www.hill.af.mil/shared/media/document/AFD-120821-035.pdf;loc:40.2N,113.5W;show:UTTR:N;reg:Utah, USA"},
pac1: {name:"Pacific", other:"", ctry:"us", desig:"", desc:"url:;loc:15N,165W;show:0;reg:"},
pac2: {name:"South Pacific", other:"", ctry:"us", desig:"", desc:"url:;loc:16S,167W;show:0;reg:"},
siziwang: {name:"Siziwang:Siziwang Banner", other:"四子王旗", ctry:"cn", desig:"", desc:"url:;loc:42N,112.5E;show:Siziwang:N;reg:Inner Mongolia, China"}
};

Common.heads = {
  us: {name:"DSN:Deep Space Network", ag:"nasa", desc:"show:1"},
  eu: {name:"ESTRACK:European Space Tracking Network", ag:"esa", desc:"show:1"},
  ru: {name:"Russian Deep Space Antennas", ag:"rosc"},
  ind: {name:"IDSN:Indian Deep Space Network", ag:"isro"},
  cn: {name:"Chinese Deep Space Network", ag:"cnsa"},
  jp: {name:"Japanese Deep Space Network", ag:"jaxa"}
};

function DSN(id, parid) {
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
     t = Read.data(d.desc);
     for (i=0; i<t.length; i++) {
       _data[t[i][0]] = readDesc(t[i]);
     }
     if (_data.hasOwnProperty("show") && _data.hasOwnProperty("shmap")) 
       _data.show.p = _data.shmap
  },
  readDesc = function(s) {
    var res, t;
    if (!s || s.length < 2) return; 
    //url,loc,show,reg,az,x,y
    switch (s[0]) {
      case "url": res = {u:"http://"+s[1], k:"ext"}; break;
      case "n": 
      case "ag": res = Common.names.find(s[1]); break;
      case "show": res = s.length > 2? {n:s[1], p:s[2]} : {n:s[1], p:"NW"}; break;
      case "reg": res = {n:s[1]}; break; 
      case "loc": res = readLoc(s[1]); break;
      case "dish": res =  readDish(s[1]); break;
      case "shmap":
      case "x":  
      case "y": res = s[1]; break;
      default: return;
    }
    return res;
  },
  readDish = function(d) {
    var res = "", i, t = d.split(",");
   
    for (i=0; i<t.length; i++) {
      res += t[i].replace(/x/, "\u2009\u00d7\u2009").replace(/m/, "\u2009m");
      if (i < t.length - 1) res += ", ";
    }
        
    return {n:res};
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
    if (_data.dish) {
      Create.span(col, _data.dish);
      Create.br(col);
    }

    _parent.appendChild(frag);
    return box;
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
  
  this.drawDish = function(cnv, w, h, dx) {
    var x0, y0, loc, wd = 16, hd = wd * 47/32, bold = "bold 16px 'Trebuchet MS'";
    if (!cnv) return; 
    dx = dx || 0;
    loc = Parse.pos(_data.loc.n).split(",");
    y0 = (90 - parseFloat(loc[0])) * h/180; 
    x0 = (parseFloat(loc[1]) + 180) * w/360 + dx;

    if (_data.show[0] != 0) {
      cnv.label(_data.show.n, x0, y0, 4, _data.show.p, bold, "#000");      
    }

    if (_id == "cdsnkun") y0 += 6;
    if (_id == "dsa2") { x0 += 4; y0 -= 1; }
    if (_id == "mdscc") { x0 -= 4; y0 += 1; }
    cnv.image(dsh[_data.ctry[0].k],x0-wd/2,y0-hd,wd,hd);

    res = {n:_data.show.n, l:_data.name.l, c:_data.ctry[0].k, dsh:_data.dish.n, url:_data.url, tp:"dsn"};
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
  parse(Common.dsn[id]);
  //_box = createBox();
  //_box.style.top = px(-9999);
  //_box.style.left = px(10);
}

function TDZone(id, parid) {
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
     t = Read.data(d.desc);
     for (i=0; i<t.length; i++) {
       _data[t[i][0]] = readDesc(t[i]);
     }
     if (_data.hasOwnProperty("show") && _data.hasOwnProperty("shmap")) 
       _data.show.p = _data.shmap
  },
  readDesc = function(s) {
    var res, t;
    if (!s || s.length < 2) return; 
    //url,loc,show,reg,az,x,y
    switch (s[0]) {
      case "url": res = {u:"http://"+s[1], k:"ext"}; break;
      case "n": 
      case "ag": res = Common.names.find(s[1]); break;
      case "show": res = s.length > 2? {n:s[1], p:s[2]} : {n:s[1], p:"NW"}; break;
      case "reg": res = {n:s[1]}; break; 
      case "loc": res = readLoc(s[1]); break;
      case "shmap":
      case "x":  
      case "y": res = s[1]; break;
      default: return;
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

    _parent.appendChild(frag);
    return box;
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
  
  this.drawTDZ = function(cnv, w, h, dy) {
    var x0, y0, loc, wd = 16, hd = wd * 45/32, bold = "bold 16px 'Trebuchet MS'";
    if (!cnv) return; 
    dy = dy || 0;
    loc = Parse.pos(_data.loc.n).split(",");
    y0 = (90 - parseFloat(loc[0])) * h/180; 
    x0 = (parseFloat(loc[1]) + 180) * w/360;

    if (_data.show.n != "0") {
      cnv.label(_data.show.n, x0, y0 + dy, 4, _data.show.p, bold, "#000");      
    }

    cnv.image(tdn[_data.ctry[0].k],x0-wd/2,y0-hd,wd,hd);

    if (_data.show.n == "0") return;
    
    res = {n:_data.show.n, l:_data.name.l, c:_data.ctry[0].k, url:_data.url, tp:"td"};
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
  parse(Common.tdz[id]);
  //_box = createBox();
  //_box.style.top = px(-9999);
  //_box.style.left = px(10);
}

function CC(id, parid) {
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
     t = Read.data(d.desc);
     for (i=0; i<t.length; i++) {
       _data[t[i][0]] = readDesc(t[i]);
     }
     if (_data.hasOwnProperty("show") && _data.hasOwnProperty("shmap")) 
       _data.show.p = _data.shmap
  },
  readDesc = function(s) {
    var res, t;
    if (!s || s.length < 2) return; 
    //url,loc,show,reg,az,x,y
    switch (s[0]) {
      case "url": res = {u:"http://"+s[1], k:"ext"}; break;
      case "n": 
      case "ag": res = Common.names.find(s[1]); break;
      case "show": res = s.length > 2? {n:s[1], p:s[2]} : {n:s[1], p:"NW"}; break;
      case "reg": res = {n:s[1]}; break; 
      case "loc": res = readLoc(s[1]); break;
      case "shmap":
      case "x":  
      case "y": res = s[1]; break;
      default: return;
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

    _parent.appendChild(frag);
    return box;
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
  
  this.drawCC = function(cnv, w, h, dy) {
    var x0, y0, loc, wd = 14, hd = wd * 42/36, bold = "bold 16px 'Trebuchet MS'";
    if (!cnv) return; 
    dy = dy || 0;
    loc = Parse.pos(_data.loc.n).split(",");
    y0 = (90 - parseFloat(loc[0])) * h/180; 
    x0 = (parseFloat(loc[1]) + 180) * w/360;

    if (_data.show.n != "0") {
      cnv.label(_data.show.n, x0, y0 + dy, 4, _data.show.p, bold, "#000");      
    }

    if (_id == "esoc" || _id == "tsup")
      cnv.image(ccc[_data.ctry[0].k],x0-wd/2,y0-hd,wd,hd);

    if (_data.show.n == "0") return;
    
    res = {n:_data.show.n, l:_data.name.l, c:_data.ctry[0].k, url:_data.url, tp:"cc"};
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
  parse(Common.ctrl[id]);
  //_box = createBox();
  //_box.style.top = px(-9999);
  //_box.style.left = px(10);
}


/*
SSEH.showDSN = function(e, nd) { 
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
*/