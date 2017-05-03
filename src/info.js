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

