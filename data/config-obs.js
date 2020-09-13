var SOBS = SOBS || {
  TITLE: "Space Observatories",
  VERSION: "1.6.1",
  DATE: "2018-09 ",
  AUTHOR: "Olaf Frohn",
  PATH: "../images/",  //Relative path to resources
  STARTDATE: new Date(1957,10,4),  //Begin of shown period
  ENDDATE: new Date(2036,1,1),     //End of shown period
  WIDTH: 1000,                    //Width
  HEIGHT: 2800,                   //Height
  BARHEIGHT: 28,
  TEXTFONT: "normal bold 14px Arial, Helvetica, sans-serif",
  SCALEFONT: "normal bold 11px Arial, Helvetica, sans-serif",
  TEXTCOL: "#000",
  LINECOL: "#222",
  BGCOL: "#fff",
  SPC: "\u200A",
  TYPE: "line",
  LEGEND: "right",
  FUTURE: null,
  PARENT: null
};

Common.symbols = {};
SOBS.ICONS = SOBS.PATH + "res/";
SOBS.SCOPES = SOBS.PATH + "probes/";
SOBS.LV  = SOBS.PATH + "lv/";
