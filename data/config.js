var SSEH = SSEH || {
  TITLE: "Solar System Exploration History",
  VERSION: "1.5.0",
  DATE: "2017-06 ",
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

//Common.symbols = {};
SSEH.ICONS = SSEH.PATH + "res/";
SSEH.PLANETS = SSEH.PATH + "planets/";
SSEH.MAPS = SSEH.PATH + "maps/";
SSEH.PROBES = SSEH.PATH + "probes/";
SSEH.LV  = SSEH.PATH + "lv/";
SSEH.LC  = SSEH.PATH + "lc/";


