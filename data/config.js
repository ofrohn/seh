var SSEH = SSEH || {
  TITLE: "Solar System Exploration History",
  VERSION: "1.6.22",
  DATE: "2018-12 ",
  AUTHOR: "Olaf Frohn",
  CLICK: "Click on anything for more details",
  PATH: "images/",  //Relative path to resources
  IDLNK: "http://nssdc.gsfc.nasa.gov/nmc/spacecraftDisplay.do?id=",
  SSELNK: "http://solarsystem.nasa.gov/planets/",
  GEOLNK: "https://www.google.com/maps/d/view?mid=%ref%",  
  //http://www.openstreetmap.org/#map=11/;https://www.google.com/maps/@%ref%,11z
  STARTDATE: new Date(1957,10,4),  //Begin of shown period
  ENDDATE: new Date(2036,1,1),     //End of shown period
  BOXWIDTH: 600,                   //Width of popup boxes
  POPWIDTH: 160,                   //Width of hover boxes
  BARHEIGHT: 15,                   //Timeline bars
  BEVEL: 90,                       //Left margin for s/c names
  EXTRA: 720,                      //Bottom margin for outer ss
  INTERVAL: 4,                     //Timerinterval for load chain
  SCALE: 637.814,                  //Image scaling factor (Earth radius/10)
  TEXTFONT: "normal 14px Arial, Helvetica, sans-serif",
  SCALEFONT: "normal bold 11px Arial, Helvetica, sans-serif",
  TEXTCOL: "#fff",
  BGCOL: "#000",
  SPC: "\u202f",
  TSPC: "\u200a",
  PARENT: null
};

SSEH.path = function(s) {
  var p = SSEH.PATH;

  if (s) p = s;
  
  SSEH.ICONS = p + "res/";
  SSEH.PLANETS = p + "planets/";
  SSEH.MAPS = p + "maps/";
  SSEH.PROBES = p + "probes/";
  SSEH.LV  = p + "lv/";
  SSEH.LC  = p + "lc/";
  
  SSEH.images = {
    comet: SSEH.PLANETS + "comet-j.png",
    sbg: SSEH.MAPS + "solsys-bg.png",
    lo: p + "lo.png",
    cc: SSEH.ICONS + "cc.png",
    zoomin: SSEH.ICONS + "zoomin.cur",
    nozoom: SSEH.ICONS + "nozoom.cur",
    pioneer: SSEH.PROBES + "pioneer10-11.png",
    voyager: SSEH.PROBES + "voyager1-2.png",
    sprite:  SSEH.ICONS + "sprites.png"
  };

}

SSEH.path();
//Common.symbols = {};


