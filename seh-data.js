var SSEH = SSEH || {
  TITLE: "Solar System Exploration History",
  VERSION: "1.6.40",
  DATE: "2024-10 ",
  AUTHOR: "Olaf Frohn",
  CLICK: "Click on anything for more details",
  PATH: "images/",  //Relative path to resources
  IDLNK: "http://nssdc.gsfc.nasa.gov/nmc/spacecraftDisplay.do?id=",
  SSELNK: "http://solarsystem.nasa.gov/planets/",
  GEOLNK: "https://www.google.com/maps/d/view?mid=%ref%",  
  //http://www.openstreetmap.org/#map=11/;https://www.google.com/maps/@%ref%,11z
  STARTDATE: new Date(1957,10,4),  //Begin of shown period
  ENDDATE: new Date(2040,1,1),     //End of shown period
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


﻿/* global SSEH */

SSEH.mtype = {
test: {name:"Test Flight", col:"#ccc"}, //light grey
fbm: {name:"Flyby", col:"#fdbf6f"}, //lorange 
im: {name:"Impactor", col:"#b15928"}, //brown
om: {name:"Orbiter", col:"#e31a1c"}, //red 
slm: {name:"Lander", col:"#1f78b4"}, //blue
pm: {name:"Descent Probe", col:"#cab2d6"}, //purpleblue
bm: {name:"Balloon Probe", col:"#a6cee3"}, //lblue
dm: {name:"Drone", col:"#a6cee3"}, //lblue
rvm: {name:"Rover", col:"#33a02c"}, //dgreen 
hpm: {name:"Hopper", col:"#b2df8a"}, //lgreen
srm: {name:"Sample Return", col:"#ff7f00"}, //orange
hm: {name:"Human Spaceflight", col:"#ffbfdf"}, //pink
obm: {name:"Observatory", col:"#9a3d9a"}, //purple 
erm: {name:"Return", col:"#fb9a99"}, //blue
etm: {name:"Escape Trajectory", col:"#999"} //grey
};


SSEH.icons = {
lf: {name:"Launch Failure", desc:"x:0;y:0"},
fb: {name:"Flyby", desc:"x:16;y:0"},
oi: {name:"Orbit Insertion", desc:"x:48;y:0"},
edl: {name:"EDL", desc:"x:64;y:0"},
td: {name:"Touchdown", desc:"x:64;y:0"},
imp: {name:"Impact", desc:"x:80;y:0"},
app: {name:"Approach", desc:"x:32;y:0"},
up: {name:"Less Details", desc:"x:96;y:12"},
down: {name:"More Details", desc:"x:100;y:5"},
ext: {name:"More Info", desc:"x:76;y:105"},
mbgn: {name:"Fullscreen Mode", desc:"x:96;y:72"},
smlfy: {name:"End Fullscreen", desc:"x:96;y:96"},
mbgnb: {name:"Fullscreen Mode", desc:"x:96;y:24"},
smlfyb: {name:"End Fullscreen", desc:"x:96;y:48"}
};


SSEH.abbrevs = ["alsj", "ea", "edl", "eom", "esl1", "esl2", "et", "eto", "eva", "fail", "geo", "gto", "heasarc", "heeo", "hto", "ihw", "kbo", "leo", "leto", "loirp", "los", "lpi", "lto", "msss", "nom", "nssdc", "oi", "pds", "rsw", "tba", "toi", "tos", "tps", "nasa", "esa", "jaxa", "isro", "cnsa", "okb", "iki", "psa", "issdc", "darts", "isas", "dlr", "asi", "clep", "tsk", "apl", "jpl", "larc", "gsfc", "arc", "td_", "imp_", "tc", "acrsma", "acrincl", "acrecc", "acrapo", "acrperi", "acrau", "acrflat", "tid", "the", "thi", "tha", "tper", "ttemp", "tdens", "tsdens", "trot", "tgrav", "cap", "van", "wal", "bai", "vos", "ple", "kou", "uch", "tng", "wen", "xch", "sri", "usgs", "noaa", "b612", "fb_", "app_", "ksc", "usaf", "usn", "usa", "abma", "bmd", "bmdo", "za", "sse", "hist", "glxp", "acrlv", "sf101", "eop", "cnes", "ssi", "stsci"
];

﻿/* global objects, SSEH, SOBS */
var Common = Common || {};

Common.loc = {
mb: {name:"Main Asteroid Belt", par:"sol", desc:""},
tno: {name:"TNO: Transneptunian Objects", par:"sol", desc:"url:solarsystem.nasa.gov/planets/kbos"},
kui: {name:"Kuiper Belt", par:"sol", desc:""},
kbo: {name:"KBO:Kuiper Belt Object", par:"sol", desc:"Kuiper Belt Object"},
isp: {name:"Interstellar Space", par:"", desc:""},
ism: {name:"Interstellar", par:"", desc:""},
plut: {name:"Plutinos:Resonant Kuiper Belt Object"},
cube: {name:"Cubewanos:Classical Kuiper Belt Object"},
sdo: {name:"Scattered Disk"},
nept: {name:"Neptune Trojans", par:"nep"},
censd: {name:"Centaurs/Scattered Disk", par:"tno"},
otno: {name:"Other TNOs", par:"tno"},
deto: {name:"Detached Objects", par:"tno"},
oort: {name:"Oort Cloud", par:"tno"},

ast: {name:"Asteroid", par:"sol", desc:"url:nssdc.gsfc.nasa.gov/planetary/planets/asteroidpage.html"},
mba: {name:"Main Belt:Main Belt Asteroid"},
com: {name:"Comet", par:"sol", desc:"url:nssdc.gsfc.nasa.gov/planetary/planets/cometpage.html"},
neo: {name:"NEO:Near Earth Object", par:"sol", desc:""},
nea: {name:"NEA:Near Earth Asteroid", par:"sol", desc:""},
pha: {name:"PHA:Potentially Hazardous Asteroid", par:"sol", desc:""},
atir: {name:"Atiras", par:"neo"},
aten: {name:"Atens", par:"neo"},
apol: {name:"Apollos", par:"neo"},
amor: {name:"Amors", par:"neo"},
hung: {name:"Hungarias", par:"mab"},
marc: {name:"Mars-Crossers", par:"mab"},
mbas: {name:"Main-Belt Asteroids", par:"mab"},
hild: {name:"Hildas", par:"jup"},
jtro: {name:"Jupiter Trojans", par:"jup"},

eml1:  {name:"E/M L1:Earth/Moon Lagrange Point 1", par:"*", desc:""},
eml2:  {name:"E/M L2:Earth/Moon Lagrange Point 2", par:"*", desc:""},
esl1:  {name:"E/S L1:Earth/Sun Lagrange Point 1", par:"*", desc:""},
esl2:  {name:"E/S L2:Earth/Sun Lagrange Point 2", par:"*", desc:""},
esl3:  {name:"E/S L3:Earth/Sun Lagrange Point 3", par:"*", desc:""},
esl4:  {name:"E/S L4:Earth/Sun Lagrange Point 4", par:"*", desc:""},
esl5:  {name:"E/S L5:Earth/Sun Lagrange Point 5", par:"*", desc:""},
et: {name:"ET:Escape Trajectory", par:"ism", desc:""},
orb: {name:"Orbit", par:"*", desc:""},
po: {name:"Polar Orbit", par:"", desc:""},
sso: {name:"SSO:Sun Synchroneous Orbit", par:"*", desc:""},
so: {name:"Solar", par:"sol", desc:""},
ho: {name:"Solar Orbit", par:"sol", desc:""},
to: {name:"Transfer Orbit", par:"sol", desc:""},
hto: {name:"HTO:Hohmann Transfer Orbit", par:"sol", desc:""},
leo: {name:"LEO:Low Earth Orbit", par:"ter", desc:""},
peo: {name:"PEO:Polar Earth Orbit", par:"ter", desc:""},
geo: {name:"GEO:Geostationary Earth Orbit", par:"ter", desc:""},
gto: {name:"GTO:Geostationary Transfer Orbit", par:"ter", desc:""},
leto: {name:"LETO:Low Energy Transfer Orbit", par:"ter", desc:""},
heeo: {name:"HEEO:Highly Elliptical Orbit", par:"ter", desc:""},
heo: {name:"HEO:Highly Elliptical Orbit", par:"ter", desc:""},
lto: {name:"LTO:Lunar Transfer (Earth) Orbit", par:"ter", desc:""},
eto: {name:"ETO:Earth Transfer Orbit", par:"ter", desc:""},
dro: {name:"DRO:Distant Retrograde Orbit", par:"lun", desc:""},
llo: {name:"LLO:Low Lunar Orbit", par:"lun", desc:""},
pco: {name:"PCO:Prograde Circular Orbit", par:"lun", desc:""},
flo: {name:"FLO:Froyen Lunar Orbit", par:"lun", desc:""},
elo: {name:"ELO:Elliptical Lunar Orbit", par:"lun", desc:""},
nrho: {name:"NRHO:Near-Rectilinear Halo Orbit", par:"lun", desc:""}
};

Common.desc = {
//Status Captions
fail: {name:"Fail:Cause of Failure"},  
mal: {name:"Malfunction"},  
eom: {name:"EOM:End of Mission"}, 
nom: {name:"[NOM]:Nominal End of Mission"}, 
pom: {name:"[Prob. EOM]:Probable End of Mission"}, 
f: {name:"Failure", desc:"col:#f00"},
s: {name:"Success", desc:"col:#0d0"},
p: {name:"Partial Success", desc:"col:#ed0"},
o: {name:"Ongoing", desc:"col:#00f"},
pl: {name:"Planned", desc:"col:#ccc"},
lf: {name:"LF:Launch Failure", desc:"col:#c00"},
fl: {name:"Failure (Launch)"},
sp: {name:"Success (Partial)"},

//Space agencies
ag: {name:"Agency"},
nasa: {name:"NASA:National Aeronautics and Space Administration", desc:"url:www.nasa.gov/;ctry:us"},
usaf: {name:"USAF:United States Air Force", desc:"url:www.af.mil/publicwebsites/sitecmd.asp?id=5;ctry:us"},
usa: {name:"US Army:United States Army", desc:"url:www.army.mil/info/organization/unitsandcommands/commandstructure/smdc/;ctry:us"},
usn: {name:"USN:United States Navy", desc:"url:www.navy.mil/local/spawar/;ctry:us"},
abma: {name:"ABMA:Army Ballistic Missile Agency", desc:"url:www.garrison.redstone.army.mil/;ctry:us"},
bmd: {name:"AFBMD:Air Force Ballistic Missile Division", desc:"url:www.mda.mil/;ctry:us"},
bmdo: {name:"BMDO:Ballistic Missile Defense Organization ", desc:"url:www.mda.mil/;ctry:us"},
arc: {name:"ARC:Ames Research Center", desc:"url:www.nasa.gov/centers/ames/home/index.html;ctry:us"},
gsfc: {name:"GSFC:Goddard Space Flight Center", desc:"url:www.nasa.gov/centers/goddard/home/index.html;ctry:us"},
msfc: {name:"MSFC:Marshall Spaceflight Center", desc:"url:www.nasa.gov/centers/marshall/home/index.html;ctry:us"},  
jsc: {name:"JSC:Johnson Space Center", desc:"url:www.nasa.gov/centers/johnson/home/index.html;ctry:us"},
jpl: {name:"JPL:Jet Propulsion Laboratory", desc:"url:www.nasa.gov/centers/jpl/home/index.html;ctry:us"},
larc: {name:"LaRC:Langley Research Center", desc:"url:www.nasa.gov/centers/langley/home/index.html;ctry:us"},
apl: {name:"APL:Johns Hopkins Applied Physics Laboratory", desc:"url:www.jhuapl.edu/"},
asu: {name:"ASU:Arizona State University", desc:"url:www.asu.edu/"},
swri: {name:"SwRI:Southwest Research Institute", desc:"url:www.swri.org/"},
noaa: {name:"NOAA:National Oceanic and Atmospheric Administration", desc:"url:www.noaa.gov/"},
b612: {name:"B612:B612 Foundation", desc:"url:b612foundation.org"},
glxp: {name:"GLXP:Google Lunar X-Prize", desc:"url:www.googlelunarxprize.org/"},
clps: {name:"CLPS: Commercial Lunar Payload Services", desc:"url:nasa.gov/content/commercial-lunar-payload-services"},

rosc: {name:"Roscosmos:Russian State Corporation", desc:"url:en.federalspace.ru;ctry:ru"},
rsf: {name:"Russian Space Forces", desc:"ctry:ru"},
okb: {name:"OKB-1:Experimental Design Bureau No. 1", desc:"url:www.energia.ru/english/index.html;ctry:su"},
lav: {name:"NPO Lavochkin:Lavochkin Scientific Production Association", desc:"url:www.laspace.ru/rus/index.php;ctry:su,ru"},
tsk: {name:"TsKBEM:Central Design Bureau of Experimental Machine Building", desc:"url:www.energia.ru/english/index.html;ctry:su"},
iki: {name:"IKI:Space Research Institute", desc:"url:www.iki.rssi.ru/eng/index.htm;ctry:su,ru"},

esa: {name:"ESA:European Space Agency", desc:"url:www.esa.int/esaCP/index.html;ctry:eu"},
dfvlr: {name:"DFVLR:Deutsche Forschungs- und Versuchsanstalt für Luft- und Raumfahrt", desc:"url:www.dlr.de/dlr/en/desktopdefault.aspx/tabid-10002/"},
dlr: {name:"DLR:Deutsches Zentrum für Luft- und Raumfahrt", desc:"url:www.dlr.de/dlr/en/desktopdefault.aspx/tabid-10002/"},
cnes: {name:"CNES:Centre national d'études spatiales", desc:"url:www.cnes.fr/web/455-cnes-en.php"},
asi: {name:"ASI:Agenzia Spaziale Italiana", desc:"url:www.asi.it/en"},

isas: {name:"ISAS:Institute of Space and Astronautical Science (JAXA)", desc:"url:www.isas.jaxa.jp/e/index.shtml;ctry:jp"},
jaxa: {name:"JAXA:Japan Aerospace Exploration Agency", desc:"url:www.jaxa.jp/index_e.html;ctry:jp"},
ut: {name:"UT:University of Tokyo", desc:"url:www.u-tokyo.ac.jp/en/"},
artsat: {name:"Artsat:Artsat Project", desc:"url:artsat.jp"},
kit: {name:"KIT:Kyushu Institute of Technology", desc:"url:www.kyutech.ac.jp/english/"},

cnsa: {name:"CNSA:China National Space Administration", desc:"url:www.cnsa.gov.cn/n615709/cindex-linshi.html;ctry:cn"},
clep: {name:"CLEP:Chinese Lunar Exploration Program"},

kari: {name:"KARI:Korea Aerospace Research Institute", desc:"url:www.kari.re.kr/eng.do;ctry:sk"},
klep: {name:"KLEP:Korean Lunar Exploration Program"},

stp: {name:"STP:Solar Terrestrial Probes"},
exom: {name:"ExoMars:Exobiology on Mars"},
isro: {name:"ISRO:Indian Space Research Organisation", desc:"url:www.isro.org/index.aspx;ctry:ind"},
lgarde: {name:"L'Garde", desc:"url:www.lgarde.com;ctry:us;"},
uaesa: {name:"UAESA:UAE Space Agency", desc:"url:www.space.gov.ae/;ctry:ue;"},
csa: {name:"CSA:Canadian Space Agency", desc:"url:www.asc-csa.gc.ca/eng/;ctry:ca"},

//Spacecraft    
lv: {name:"Launch Vehicle"},
mp: {name:"Main Craft"},
bus: {name:"Bus:Spacecraft Bus/Flight Platform"},
fbp: {name:"Flyby Probe"},
fp: {name:"Flyby Probe"},
dp: {name:"Descent Probe"},
bp: {name:"Balloon Probe"},
ip: {name:"Impact Probe"},
ap: {name:"Atmospheric Probe"},
src: {name:"Sample Return Capsule"},
rc: {name:"Return Capsule"},
as: {name:"Ascend Stage"},
lp: {name:"Lander"},
slp: {name:"Lander"},
rvp: {name:"Rover"},
hpp: {name:"Hopper"},
drp: {name:"Drone"},
op: {name:"Orbiter"},
ssp: {name:"Subsatellite"},
s4b: {name:"S-IVB:Saturn IVB Third Stage"},
csm: {name:"CSM:Crew and Service Module"},
lm: {name:"LM:Lunar Module"},
lmas: {name:"LM-AS:Lunar Module Ascend Stage"},
sm: {name:"SM:Service Module"},
lrv: {name:"LRV:Lunar Roving Vehicle"},
alsep: {name:"ALSEP:Apollo Lunar Surface Experiments Package"},

//Links
hp: {name:"Homepage"},
nssdc: {name:"NSSDC:National Space Science Data Center", desc:"url:nssdc.gsfc.nasa.gov"},
ea: {name:"EA:Encyclopedia Astronautica", desc:"url:astronautix.com/"},
za: {name:"Zarya:Zarya.info", desc:"url:www.zarya.info"},
eop: {name:"eoPortal:Earth Observation Portal", desc:"url:directory.eoportal.org/web/eoportal/satellite-missions/"},
dis: {name:"Dragon in Space", desc:"url:www.dragoninspace.com"},
sf101: {name:"Spaceflight 101", desc:"url:www.spaceflight101.com/"},
sse: {name:"SSE:NASA Solar System Exploration", desc:"url:solarsystem.nasa.gov/missions/"},
ql:  {name:"JPL:JPL Mission Profile", desc:"space.jpl.nasa.gov/missions"},
msss: {name:"MSSS:Malin Space Science Systems", desc:"url:www.msss.com/"},
rsw:  {name:"Russian Spaceweb", desc:"url:www.russianspaceweb.com/"},
hist: {name:"NASA History:NASA History Monograph", desc:"url:history.nasa.gov/"},
alsj: {name:"ALSJ:Apollo Lunar Surface Journal", desc:"url:www.hq.nasa.gov/alsj/frame.html"},
lpi: {name:"LPI:Lunar & Planetary Institute", desc:"url:www.lpi.usra.edu"},
ssi: {name:"SSI:Space Science Institute", desc:"url:www.spacescience.org"},
stsci: {name:"STScI:Space Telescope Science Institute", desc:"url:www.stsci.edu"},
loirp: {name:"LOIRP:Lunar Orbiter Image Recovery Project", desc:"url:www.moonviews.com/"},
tps: {name:"Planetary Society", desc:"url:www.planetary.org/"},
heasarc: {name:"HEASARC:High Energy Astrophysics Science Archive Research Center", desc:"url:heasarc.gsfc.nasa.gov"},
ihw: {name:"IHW:International Halley Watch", desc:"url:sbn.pds.nasa.gov/data_sb/missions/ihw/"},
dat: {name:"Data:Science Data"},
pds: {name:"PDS:Planetary Data System (NASA)", desc:"url:pds.nasa.gov/"},
psa: {name:"PSA:Planetary Science Archive (ESA)", desc:"url:www.rssd.esa.int/index.php?project=PSA"},
darts: {name:"DARTS:Data ARchives and Transmission System (JAXA)", desc:"url:darts.jaxa.jp/planet/"},
issdc: {name:"ISSDC:Indian Space Science Data Centre (ISRO)", desc:"url:www.issdc.gov.in/"},
sacmde: {name:"SACMDE:Science and Application Center for Moon and Deepspace Exploration", desc:"url:http://moon.bao.ac.cn/"},
usgs: {name:"USGS:U.S. Geological Survey Astrogeology Science Center", desc:"url:astrogeology.usgs.gov/"},
raw: {name:"Images"},
globe: {name:"Georef", desc:"x:168;y:144"},
weather: {name:"Weather", desc:"x:120;y:144"},
haz: {name:"Hazards", desc:"x:144;y:144"},
tw: {name:"Twitter", desc:"x:52;y:105"},

//Captions
alt: {name:"Altitude"},
nad: {name:"Nadir"},
per: {name:"Period"},
tm: {name:"Duration"},
rv: {name:"Traverse distance"},
v: {name:"V:Velocity"},
trr: {name:"Travel radius"},
trv: {name:"Travel distance"},
ga: {name:"Gravity Assist"},
mat: {name:"Collected material"},
i: {name:"Inclination"},
dist: {name:"Distance"},
end: {name:"Until"},
pend: {name:"Pending mission extension"},

tfam:{name:"Program/Family"},
tid:{name:"Cospar-ID:Committee On SPace Research International Designator"},
turl:{name:"Links"},
tmass:{name:"Mass"},
tlmass:{name:"Mass:Launch Mass"},
tdmass:{name:"Dry Mass:Unfueled Mass"},
tlv:{name:"Launch Vehicle"},
tdim:{name:"Dimensions:width x depth x height"},


tother: {name:"Alt. Name"},
tmisn: {name:"Missions:Total Missions launched / successfull / ongoing / planned"},
trad: {name:"Radius:Equatorial Radius/Flattening"},
tdiam: {name:"Diameter:Equatorial Diameter/Flattening"},
ttilt: {name:"Axial Tilt"},
//trot: {name:"Rotation Period"},
tcom: {name:"Known Comets"},
tast: {name:"Known Asteroids"},
torbit: {name:"Orbit:Semi-major axis x Eccentricity x Inclination"},
tper: {name:"Period:Orbital Period"},
te: {name:"Eccentricity"},
ttemp: {name:"Temp.:Surface Temperature"},
tdens: {name:"Dens.:Density"},
tsdens: {name:"S. Dens.:Surface Density"},
talb: {name:"Albedo:Visual Geometric Albedo"},
tlen: {name:"Arc Length"},
trot: {name:"Rot. Period:Rotation Period"},
tgrav: {name:"Grav.:Surface Gravity"},
tdisc: {name:"Discovery"},
tcomp: {name:"Composition"},
tatm: {name:"Atmosphere"},
tmag: {name:"Mag. Field"},
tirad: {name:"Irradiance"},
tmoons: {name:"Assoc. Moons"},
tnmoons: {name:"Moons"},
tplanets: {name:"Planets"},
tgr: {name:"Group"},
tgroup: {name:"Group"},
ttno: {name:"Known Objects"},
tcen: {name:"Group Census"},
tperi: {name:"Next Perihelion"},
 
thdate:{name:"Date"},
thevent:{name:"Event"},
thdetail:{name:"Details"},
thdesig: {name:"Nº"},
thname: {name:"Name"},
thfname: {name:"Name"},
thorbit: {name:"Orbit (a\u00d7e\u00d7i):Semi-major axis x Eccentricity x Inclination"},
tha: {name:"SMA:Semi-major Axis"},
the: {name:"Ecc.:Eccentricity"},
thi: {name:"Incl.:Inclination"},
thradius: {name:"Radius"},
thdiam: {name:"Diameter"},
thper: {name:"Period:Orbital Period"},
thmass: {name:"Mass"},
thdyr: {name:"Disc.:Discovery"},
thperi: {name:"Inner Radius:Inner Edge Distance to Planet Center"},
thdist: {name:"Inner Rad.:Inner Edge Distance to Planet Center"},
thw: {name:"Width"},
thh: {name:"Thickness"},
thopt: {name:"Opt. Depth:Optical Depth"},
thmisc: {name:"Other"},

//m d st ust pf pm th fam dt (l ag stat)
lvm: {name:"Mass:at Launch"},
lvd: {name:"Dimensions:Height x Diameter (center stage)"},
lvst: {name:"Stages:Core Stages/Boosters"},
lvust: {name:"Upper Stage"},
lvpf: {name:"Fairing:Payload Fairing Length x Diameter"},
lvpm: {name:"Payload:LEO/GTO/HO"},
lvth: {name:"Thrust:Total Thrust at Launch"},
lvfam: {name:"Family"},
lvfuel: {name:"Fuel"},
lvdt: {name:"Service live"},
lvl: {name:"Launch pads"},
lvstat: {name:"Stats:Total/Successful/Planned launches"},

lcaz: {name:"Launch Azimuth"},

/*lvd: {name:"Dimensions (m)"},
lvst: {name:"Stages/Boosters"},
lvth: {name:"Thrust (kN)"},
lvm: {name:"Mass (kg)"},*/
lvdt1: {name:"In Service"},
lvdt2: {name:" "},
lvpm0: {name:"LEO (kg)"},
lvpm1: {name:"GTO (kg)"},
lvpm2: {name:"HO (kg)"},

more: {name:"More"},
sync: {name:"Sync.:Synchronous (Bound) Rotation"},
chao: {name:"Chaotic:Irregular Rotation"},
dust: {name:"Dust"},
all: {name:"All"},
inc: {name:"Inclination"},
tba: {name:"TbA:To be announced"},
lpyr: {name:"Launches/Year"},
mstat: {name:"Mission Status"},
mitp: {name:"Mission Types"},
evic: {name:"Event Icons"},
acro: {name:"Terms & Acronyms"},
info: {name:"Info"},
legnd: {name:"Legend"},
abrev: {name:"Glossary"},
lnch: {name:"Stats"},
lvs: {name:"LV Stats"},
creds: {name:"Credits"},
credits: {name:"Image Credits"},
lvstt: {name:"Launch Vehicle Statistics"},
acrau: {name:"AU:Astronomical unit (=150 million km)"},
acrperi: {name:"Periapsis:Point of an orbit that is closest to the parent body (perihelion\u2236 ..to the Sun)"},
acrapo: {name:"Apoapsis:Point of an orbit that is farthest from the parent body (aphelion\u2236 ..from the Sun)"},
acrecc: {name:"Eccentricity:Measure of the extent of deviation of an orbit from circularity"},
acrincl: {name:"Inclination:Angle between the plane of an orbit and the ecliptic or the equator of the parent body"},
acrsma: {name:"Semi-major Axis:Half the major axis, which runs between the widest points of an orbit"},
acrflat: {name:"Flattening:Compression of a body's polar radius toward the equator"},
acrlv: {name:"LV:Launch vehicle"}
};

Common.evnt = {
l: {name:"Launch"}, 
oi: {name:"OI:Orbit Insertion"}, 
toi: {name:"TOI:Transfer Orbit Injection"}, 
sco: {name:"Science Orbit"}, 
deo: {name:"Descent Orbit"}, 
obs: {name:"Observation"}, 
fb: {name:"Flyby"}, 
ft: {name:"Flythrough"}, 
fo: {name:"Pass"}, 
app: {name:"Approach"}, 
arr: {name:"Arrival"}, 
dep: {name:"Departure"}, 
enc: {name:"Encounter Phase"},
imp: {name:"Impact"}, 
ex: {name:"Excursion"},
eva: {name:"EVA:Extravehicular Activity"},
dsc: {name:"Descent"}, 
edl: {name:"EDL:Entry, Descent & Landing"}, 
ae: {name:"Entry:Atmospheric Entry"}, 
td: {name:"Landing:Soft Landing Touchdown"}, 
tdn: {name:"Touchdown"}, 
sep: {name:"Separation"}, 
doc: {name:"Rendezvous"}, 
los: {name:"LoS:Loss of Signal"}, 
tos: {name:"ToS:Termination of Signal"}, 
tr: {name:"Transition"}, 
tc: {name:"TC:Trajectory Change"}, 
ev: {name:""},
sc: {name:"Sample Collection"},
hib: {name:"Hibernation"},
td_: {name:"TD:Touchdown"},
imp_: {name:"IMP:Impact"},
app_: {name:"APP:Close Approach"},
fb_: {name:"FB:Close Flyby or Gravity Assist"}
};

Common.ctry = {
us: {name:"United States", col:"#00f", desc:"x:48;y:159"},
su: {name:"Soviet Union", col:"#f00", desc:"x:0;y:159"},
ru: {name:"Russia", col:"#f00", desc:"x:72;y:146"},
jp: {name:"Japan", col:"#0cc", desc:"x:96;y:133"},
ind: {name:"India", col:"#e90", desc:"x:48;y:133"},
de: {name:"Germany", col:"#fe0", desc:"x:96;y:120"},
it: {name:"Italy", col:"#0c0", desc:"x:72;y:133"},
eu: {name:"Europe", col:"#009", desc:"x:24;y:185"},
cn: {name:"China", col:"#c00", desc:"x:72;y:120"},
es: {name:"Spain", col:"#cc0", desc:"x:72;y:159"},
kz: {name:"Khazakstan", desc:"x:96;y:159"},
fr: {name:"France", col:"#c0c", desc:"x:24;y:133"},
gb: {name:"Great Britain", desc:"x:24;y:159"},
br: {name:"Brazil", desc:"x:24;y:120"},
ca: {name:"Canada", desc:"x:48;y:120"},
ua: {name:"Ukraine", desc:"x:0;y:172"},
ar: {name:"Australia", desc:"x:24;y:172"},
au: {name:"Argentina", desc:"x:48;y:172"},
gu: {name:"French Guyana", desc:"x:72;y:172"},
ue: {name:"United Arab Emirates", desc:"x:96;y:172"},
sk: {name:"South Korea", col:"#666", desc:"x:0;y:146"},
il: {name:"Israel", desc:"x:0;y:185"}
};


//Find short and long names, radius or color of objects {n:name, l:long name, r:radius, c:color}
function Names(par) {
  var t, tar,
  
  get = function(s) {
    if (!s) return; 
    var t = s.split(":");
    if (t.length > 1) return {n:t[0], l:t[1]}; 
    else return {n:t[0]}; 
  },
  copy = function(o) {
    var res = {};
    for (var attr in o) {
      if (o.hasOwnProperty(attr)) { res[attr] = o[attr]; }
    }
    return res;
  };
  

  this.createIf = function(abbr, s) {
    if (this.hasOwnProperty(abbr)) return; 
    this[abbr] = {n:s};
  };

  this.find = function(abbr, toupper) {
    var res = {};
    if (!abbr) return; 
    res.n = toupper?abbr.toUpperCase():abbr;
    if (this.hasOwnProperty(abbr)) { res = copy(this[abbr]); }
    return res;
  };
  
  this.findRadius = function(abbr) {
    if (!abbr) return; 
    if (this.hasOwnProperty(abbr) && this[abbr].r) {
      return this[abbr].r;
    } else {
      return 1;
    }
  };

  this.findMass = function(abbr) {
    if (!abbr) return; 
    if (this.hasOwnProperty(abbr) && this[abbr].m) {
      return this[abbr].m;
    } else {
      return 1;
    }
  };
  

  this.findLV = function(s) { 
    var id = s.split(/\//)[0];
    if (Common.lv.hasOwnProperty(id)) {
      if (Common.lv[id].hasOwnProperty("syn")) return Common.lv[id].syn;
      else return id; 
    }
    return null;
  };

  this.findColor = function(abbr) {
    if (!abbr) return; 
    if (this.hasOwnProperty(abbr) && this[abbr].c) {
      return this[abbr].c;
    } else {
      return "#000";
    }
  };
  //if (typeof loc === "undefined") return;
  for (t in Common.loc) {
    if (Common.loc.hasOwnProperty(t)) {
      this[t] = get(Common.loc[t].name);
      if (Common.loc[t].desc) {
        tar = Common.loc[t].desc.match(/url\:([^\b\;]+)/);
        if (tar !== null) { this[t].u = tar[1]; }
      }
    }
  }
  for (t in Common.lc) {
    if (Common.lc.hasOwnProperty(t)) {
      this[t] = get(Common.lc[t].name);
      if (Common.lc[t].desc) {
        tar = Common.lc[t].desc.match(/reg\:([^;]+)/);
        if (tar !== null) { this[t].l += ", " + tar[1]; }
        tar = Common.lc[t].desc.match(/url\:([^\b\;]+)/);
        if (tar !== null) { this[t].u = tar[1]; }
      }
    }
  }
  for (t in Common.desc) {
    if (Common.desc.hasOwnProperty(t)) {
      this[t] = get(Common.desc[t].name);
      if (Common.desc[t].desc) {
        tar = Common.desc[t].desc.match(/col\:([^\b\;]+)/);
        if (tar !== null) { this[t].c = tar[1]; }
        tar = Common.desc[t].desc.match(/url\:([^\b\;]+)/);
        if (tar !== null) { this[t].u = tar[1]; }
      }
    }
  }
  
  if (par == "SSEH") {
    for (t in objects) {
      if (objects.hasOwnProperty(t)) {
        this[t] = get(objects[t].name);
        if (objects[t].rad) {
          this[t].r = parseFloat(objects[t].rad);
        }
        if (objects[t].mass && objects[t].mass.search(/kg/) != -1) {
          this[t].m = parseFloat(objects[t].mass);
        }
        //if (objects[t].col) this[t].c = objects[t].col;
      }
    }
    for (t in SSEH.mtype) {
      if (SSEH.mtype.hasOwnProperty(t)) {
        this[t] = get(SSEH.mtype[t].name);
        if (SSEH.mtype[t].col) {
          this[t].c = SSEH.mtype[t].col;
        }
      }
    }
  }

  if (par == "SOBS") {
    for (t in SOBS.mtype) {
      if (SOBS.mtype.hasOwnProperty(t)) {
        this[t] = get(SOBS.mtype[t].name);
        if (SOBS.mtype[t].col) {
          this[t].c = SOBS.mtype[t].col;
        }
        if (SOBS.mtype[t].sym) {
          this[t].s = SOBS.mtype[t].sym;
        }
      }
    }
    for (t in SOBS.mpur) {
      if (SOBS.mpur.hasOwnProperty(t)) {
        this[t] = get(SOBS.mpur[t].name);
      }
    }
  }
  
  for (t in Common.evnt) {
    if (Common.evnt.hasOwnProperty(t)) {
      this[t] = get(Common.evnt[t].name);
    }
  }
  for (t in Common.ctry) {
    if (Common.ctry.hasOwnProperty(t)) {
      this[t] = get(Common.ctry[t].name);
      if (Common.ctry[t].col !== "") { this[t].c = Common.ctry[t].col; }
    }
  }
}

﻿var missions = { 
/* missionid: {
   name:"", Common (short) name of the mission; name|abbr:fullname,
   desc:"", Common details; lv:Launch vehicle, m:overall launch mass, m0:overall  dry mass
   stat:""  Overall status of the mission, in case of ambiguity; s|p|f|o|pl
   parts: [
    {names:"",  Other name(s) of the spacecraft; name|abbr:fullname
     type:"",   Type of mission;  in mtype{}  
     dest:"",   Destinations; in loc{};  dest|dest:sub
     stat:""    Status of the mission part;  in desc{}  s|p|f|o|pl
     ctry:"",  Country(s) of origin; in ctry{}
     desc:"",   Further details; ag:agency, fam:s/c family, m:s/c launch mass, m0:dry mass, dim:dimesions (m x m x m), special achievements, in desc{}
     id:"",     COSPAR-ID(s)
     url:"",    Mission website, or links to further descriptions/resources
     icon:""}   Spacecraft icon(s)
   , ..],       Further parts, sub|ext
   events: [    List of important mission-events
    {pt:"",     Ref to s/c-part
     type:"",   Event-type; in evnt{}
     dt:"",     Date, yyyy-mm-dd[Thh:mm:ss] or l(aunch)+nnn[yr|mo|dy]; period: dt.dt
     loc:"",    Location; as body:dist/coordinate/orbit/name; in locn{}
     desc:""}   Further description; in desc{} or evnt{}
   , ..],
]}*/
// --- 1958 --- 7 Missions
pioneer0: {name:"Pioneer 0", desc:"lv:Thor-Able I",
  parts:[
    {names:"Able 1", type:"om", dest:"lun", stat:"f", ctry:"us", desc:"ag:usaf,bmd;fam:Pioneer-Able;m:38kg;dim:0.7x0.7x1.1m;sc:0.2;First attempted deep space launch", id:"ABLE1", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer0QL.html", icon:"pioneer-able.png"}], 
  events:[
    {pt:"", type:"l", dt:"1958-08-17", loc:"ter:cap:LC-17A", desc:"fail:First stage explosion at T+77s;alt:15.2km"}
]},
luna1958a: {name:"Luna E-1 #1", desc:"lv:Vostok-L 8K72",
  parts:[
    {names:"Луна-1А;[Luna 1958A]", type:"im", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-1;m:361kg;dim:1.0x1.0x3.4m;sc:0.25", id:"", url:"ea:www.astronautix.com/craft/lunae1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e1.png"}], 
  events:[
    {pt:"", type:"l", dt:"1958-09-23", loc:"ter:bai:LC-1", desc:"fail:Booster explosion at T+93s"}
]},
pioneer1: {name:"Pioneer 1", desc:"lv:Thor-Able I",
  parts:[
    {names:"Able 2", type:"om", dest:"lun", stat:"f", ctry:"us", desc:"ag:nasa,usaf,bmd;fam:Pioneer-Able;m:38.3kg;dim:0.74x0.74x1.1m;sc:0.2", id:"1958-007A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer0QL.html", icon:"pioneer-able.png"}], 
  events:[
    {pt:"", type:"l", dt:"1958-10-11", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"toi", dt:"1958-10-11", loc:"ter:lto", desc:"fail:Second stage premature shutdown"}
]},
luna1958b: {name:"Luna E-1 #2", desc:"lv:Vostok-L 8K72",
  parts:[
    {names:"Луна-1B;[Luna 1958B]", type:"im", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-1;m:361kg;dim:1.0x1.0x3.4m;sc:0.25", id:"", url:"ea:www.astronautix.com/craft/lunae1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e1.png"}], 
  events:[
    {pt:"", type:"l", dt:"1958-10-11", loc:"ter:bai:LC-1", desc:"fail:Booster explosion at T+104s"}
]},
pioneer2: {name:"Pioneer 2", desc:"lv:Thor-Able I",
  parts:[
    {names:"Able 3", type:"om", dest:"lun", stat:"f", ctry:"us", desc:"ag:nasa,usaf,bmd;fam:Pioneer-Able;m:42.6kg;dim:0.74x0.74x1.1m;sc:0.2", id:"PION2", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer0QL.html", icon:"pioneer-able.png"}], 
  events:[
    {pt:"", type:"l", dt:"1958-11-08", loc:"ter:cap:LC-17A", desc:"fail:Third stage ignition"}
]},
luna1958c: {name:"Luna E-1 #3", desc:"lv:Vostok-L 8K72",
  parts:[
    {names:"Луна-1C;[Luna 1958C]", type:"im", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-1;m:361kg;dim:1.0x1.0x3.4m;sc:0.25", id:"", url:"ea:www.astronautix.com/craft/lunae1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e1.png"}], 
  events:[
    {pt:"", type:"l", dt:"1958-12-04", loc:"ter:bai:LC-1", desc:"fail:Core stage shutdown at T+245"}
]},
pioneer3: {name:"Pioneer 3", desc:"lv:Juno II",
  parts:[
    {names:"", type:"fbm", dest:"lun", stat:"p", ctry:"us", desc:"ag:nasa,jpl,abma;fam:Pioneer;m:5.87kg;dim:0.25x0.25x0.58m", id:"1958-008A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer3QL.html", icon:"pioneer3-4.png"}], 
  events:[
    {pt:"", type:"l", dt:"1958-12-06", loc:"ter:cap:LC-5", desc:""},
    {pt:"", type:"toi", dt:"1958-12-06", loc:"ter:lto", desc:"fail:Main engine premature shutdown"},
    {pt:"", type:"obs", dt:"1958-12-06", loc:"ter:heeo", desc:"Van Allen radiation belts"}
]},
// --- 1959 --- 6 Missions
luna1: {name:"Luna 1", desc:"lv:Vostok-L 8K72",
  parts:[
    {names:"Луна-1;Мечта:Dream;Luna E-1 #4", type:"im", dest:"lun", stat:"p", ctry:"su", desc:"ag:okb;fam:E-1;First lunar flyby;First probe to escape Earth's gravity;m:361.3kg;dim:1.0x1.0x3.4m;sc:0.25", id:"1959-012A", url:"rsw:www.russianspaceweb.com/luna1.html;ea:www.astronautix.com/craft/lunae1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e1.png"}], 
  events:[
    {pt:"", type:"l", dt:"1959-01-02", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1959-01-02", loc:"ter:lto", desc:"mal:Guidance system error"},
    {pt:"", type:"ev", dt:"1959-01-03", loc:"ter:119500km", desc:"Sodium gas release experiment"},
    {pt:"", type:"fb", dt:"1959-01-04", loc:"lun:5965km", desc:""},
    {pt:"", type:"los", dt:"1959-01-05", loc:"sol:ho:0.988x1.318aux0deg", desc:"dist:373125mi;eom"}
]},
pioneer4: {name:"Pioneer 4", desc:"lv:Juno II",
  parts:[
    {names:"", type:"fbm", dest:"lun", stat:"p", ctry:"us", desc:"ag:nasa,jpl,abma;fam:Pioneer;m:6.1kg;dim:0.25x0.25x0.58m", id:"1959-013A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer3QL.html", icon:"pioneer3-4.png"}], 
  events:[
    {pt:"", type:"l", dt:"1959-03-03", loc:"ter:cap:LC-5", desc:""},
    {pt:"", type:"toi", dt:"1959-03-03", loc:"sol:ho:0.98x1.13aux1.3deg", desc:""},
    {pt:"", type:"fb", dt:"1959-03-04", loc:"lun:60000km", desc:"nad:5.7S,7.2E"},
    {pt:"", type:"los", dt:"1959-03-06", loc:"sol:ho:0.987x1.142aux0.13deg", desc:"dist:406620mi;eom"}
]},
luna1959a: {name:"Luna E-1A #5", desc:"lv:Vostok-L 8K72",
  parts:[
    {names:"Луна-2А;[Luna 1959A]", type:"im", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-1A;m:387kg;dim:1.0x1.0x3.4m;sc:0.25", id:"", url:"ea:www.astronautix.com/craft/lunae1a.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e1a.png"}], 
  events:[
    {pt:"", type:"l", dt:"1959-06-18", loc:"ter:bai:LC-1", desc:"fail:Guidance system malfunction at T+153s"}
]},
luna2: {name:"Luna 2", desc:"lv:Vostok-L 8K72",
  parts:[
    {names:"Луна-2;Luna E-1A #7", type:"im", dest:"lun", stat:"s", ctry:"su", desc:"ag:okb;fam:E-1A;First lunar impact;m:390.2kg;dim:1.0x1.0x3.4m;sc:0.25", id:"1959-014A", url:"za:www.zarya.info/Diaries/Luna/Luna02.php;ea:www.astronautix.com/craft/lunae1a.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e1a.png"}], 
  events:[
    {pt:"", type:"l", dt:"1959-09-12", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"imp", dt:"1959-09-14", loc:"lun:29.1N,0E", desc:"Palus Putredinis;eom;show:L2:NW"}
]},
luna3: {name:"Luna 3", desc:"lv:Vostok-L 8K72",
  parts:[
    {names:"Луна-3;Luna E-2A;Automatic Interplanetary Station", type:"fbm", dest:"lun", stat:"s", ctry:"su", desc:"ag:okb;fam:E-3;First lunar flyby;First images of the lunar farside;m:278.5kg;dim:1.19x1.19x1.80m;sc:0.2", id:"1959-008A", url:"za:www.zarya.info/Diaries/Luna/Luna03.php;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e3.png"}], 
  events:[
    {pt:"", type:"l", dt:"1959-10-04", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1959-10-04", loc:"ter:heeo" , desc:""},
    {pt:"", type:"fb", dt:"1959-10-06", loc:"lun:6200km", desc:""},
    {pt:"", type:"los", dt:"1959-10-22", loc:"ter:heeo", desc:"eom"},
    {pt:"", type:"ae", dt:"1960-04-20", loc:"ter", desc:""}
]},
pioneerp3: {name:"Pioneer P-3", desc:"lv:Atlas-D Able IV",
  parts:[
    {names:"Pioneer-X;Able 4B", type:"om", dest:"lun", stat:"f", ctry:"us", desc:"ag:nasa,usaf,bmd;fam:Pioneer-Able;m:169kg;dim:2.7x2.7x1.4m", id:"PIONX", url:"sse:solarsystem.nasa.gov/missions/profile.cfm?Sort=Target&Target=Moon&MCode=Pioneer_P3", icon:"pioneer-p3.png"}], 
  events:[
    {pt:"", type:"l", dt:"1959-11-26", loc:"ter:cap:LC-14", desc:"fail:Payload fairing malfunction at T+70s"}
]},
// --- 1960 --- 7 Missions
pioneer5: {name:"Pioneer 5", desc:"lv:Thor-Able IV",
  parts:[
    {names:"Pioneer P-2;Able 6", type:"obm", dest:"sol", stat:"s", ctry:"us", desc:"ag:nasa,gsfc;fam:Pioneer-Able;First solar orbiter probe;m:47.4kg;dim:1.4x1.4x0.66m;sc:0.2", id:"1960-001A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer5QL.html", icon:"pioneer5.png"}], 
  events:[
    {pt:"", type:"l", dt:"1960-03-11", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"oi", dt:"1960-03-11", loc:"sol:ho:0.806x0.995aux3.35deg", desc:""},
    {pt:"", type:"los", dt:"1960-04-30", loc:"so", desc:"Last data received"},
    {pt:"", type:"eom", dt:"1960-06-26", loc:"so", desc:""}
]},
luna1960a: {name:"Luna E-3 #1", desc:"lv:Vostok-L 8K72",
  parts:[
    {names:"Луна-4А;[Luna 1960A]", type:"fbm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-3;m:279kg;dim:1.19x1.19x1.80m", id:"", url:"ea:www.astronautix.com/craft/lunae3.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e3.png"}], 
  events:[
    {pt:"", type:"l", dt:"1960-04-15", loc:"ter:bai:LC-1", desc:"fail:Third stage premature shutdown"}
]},
luna1960b: {name:"Luna E-3 #2", desc:"lv:Vostok-L 8K72",
  parts:[
    {names:"Луна-4B;[Luna 1960B]", type:"fbm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-3;m:279kg;dim:1.19x1.19x1.80m", id:"", url:"ea:www.astronautix.com/craft/lunae3.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e3.png"}], 
  events:[
    {pt:"", type:"l", dt:"1960-04-19", loc:"ter:bai:LC-1", desc:"fail:Booster breakaway at T+0.4s"}
]},
pioneerp30: {name:"Pioneer P-30", desc:"lv:Atlas-D Able V",
  parts:[
    {names:"Pioneer-Y;Able 5A", type:"om", dest:"lun", stat:"f", ctry:"us", desc:"ag:nasa,usaf,bmd;fam:Pioneer-Able;m:175.5kg;dim:2.7x2.7x1.4m", id:"PIONY", url:"sse:solarsystem.nasa.gov/missions/profile.cfm?Sort=Target&Target=Moon&MCode=Pioneer_P-30", icon:"pioneer-p3.png"}], 
  events:[
    {pt:"", type:"l", dt:"1960-09-25", loc:"ter:cap:LC-12", desc:"fail:Second stage ignition"}
]},
marsnik1: {name:"Mars 1M #1", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Марс-1М №1;Корабль 4;Marsnik 1", type:"fbm", dest:"mar", stat:"f", ctry:"su", desc:"ag:okb;fam:1M;m:480kg;dim:3.5x1.05x2.03m;sc:0.25;First attempted Mars probe", id:"MARSNIK1", url:"ea:www.astronautix.com/craft/mars1m.htm", icon:"mars-1m.png"}], 
  events:[
    {pt:"", type:"l", dt:"1960-10-10", loc:"ter:bai:LC-1", desc:"fail:Guidance system malfunction"}
]},
marsnik2: {name:"Mars 1M #2", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Марс-1М №2;Корабль 5;Marsnik 2", type:"fbm", dest:"mar", stat:"f", ctry:"su", desc:"ag:okb;fam:1M;m:480kg;dim:3.5x1.05x2.03m;sc:0.25", id:"MARSNIK2", url:"ea:www.astronautix.com/craft/mars1m.htm", icon:"mars-1m.png"}], 
  events:[
    {pt:"", type:"l", dt:"1960-10-14", loc:"ter:bai:LC-1", desc:"fail:Third stage ignition"}
]},
pioneerp31: {name:"Pioneer P-31", desc:"lv:Atlas-D Able V",
  parts:[
    {names:"Pioneer-Z;Able 5B", type:"om", dest:"lun", stat:"f", ctry:"us", desc:"ag:nasa,usaf,bmd;fam:Pioneer-Able;m:176kg;dim:2.7x2.7x1.4m", id:"PIONZ", url:"sse:solarsystem.nasa.gov/missions/profile.cfm?Sort=Target&Target=Moon&MCode=Pioneer_P-31", icon:"pioneer-p3.png"}], 
  events:[
    {pt:"", type:"l", dt:"1960-12-15", loc:"ter:cap:LC-12", desc:"fail:Premature second stage ignition"}
]},
// --- 1961 --- 4 Missions
sputnik7: {name:"Sputnik 7", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Спутник-7;Venera 1VA #1", type:"im", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:1VA;m:~645kg;dim:3.5x1.05x2.03m;First attempted Venus probe", id:"1961-002A", url:"ea:www.astronautix.com/craft/venra1va.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-1va.png"}], 
  events:[
    {pt:"", type:"l", dt:"1961-02-04", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1961-02-04", loc:"sol:hto", desc:"fail:Upper stage ullage motor"}
]},
venera1: {name:"Venera 1", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Венера-1;Venera 1VA #2", type:"im", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:1VA;m:643.5kg;dim:3.5x1.05x2.03m", id:"1961-003A", url:"ea:www.astronautix.com/craft/venra1va.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-1va.png"}], 
  events:[
    {pt:"", type:"l", dt:"1961-02-12", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1961-02-12", loc:"sol:hto:0.718x1.019aux0.58deg", desc:""},
    {pt:"", type:"los", dt:"1961-03-04", loc:"so", desc:"fail:Thermal control system malfunction;eom"},
    {pt:"", type:"fb", dt:"1961-05-20", loc:"ven:16.5", desc:""}
]},
ranger1: {name:"Ranger 1", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"P-32", type:"test", dest:"ter:heeo", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Ranger;m:306.18kg;dim:5.2x1.5x4.0m;sc:0.5", id:"1961-021A", url:"nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/ranger.html;hist:history.nasa.gov/SP-4210/pages/Cover.htm", icon:"ranger1-2.png"}], 
  events:[
    {pt:"", type:"l", dt:"1961-08-23", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"oi", dt:"1961-08-23", loc:"ter:leo:179x446kmx32.9deg", desc:"fail:Upper stage reingnition"},
    {pt:"", type:"los", dt:"1961-08-30", loc:"ter:leo", desc:"ae"}
]},
ranger2: {name:"Ranger 2", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"P-33", type:"test", dest:"ter:heeo", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Ranger;m:306.18kg;dim:5.2x1.5x4.0m;sc:0.5", id:"1961-032A", url:"hnssdcnssdc.gsfc.nasa.gov/planetary/lunar/ranger.html;hist:history.nasa.gov/SP-4210/pages/Cover.htm", icon:"ranger1-2.png"}], 
  events:[
    {pt:"", type:"l", dt:"1961-11-18", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"oi", dt:"1961-11-18", loc:"ter:leo:150x242kmx33.3deg", desc:"fail:Upper stage reignition"},
    {pt:"", type:"los", dt:"1961-11-20", loc:"ter:leo", desc:"ae"}
]},
// --- 1962 --- 11 Missions
ranger3: {name:"Ranger 3", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"P-34", type:"im", dest:"lun", stat:"p", ctry:"us", desc:"ag:nasa,jpl;fam:Ranger;m:330kg;dim:5.2x1.5x3.1m;sc:0.4", id:"1962-001A", url:"lpi:www.lpi.usra.edu/lunar/missions/ranger/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/ranger.html;hist:history.nasa.gov/SP-4210/pages/Cover.htm", icon:"ranger3-5.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-01-26", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1962-01-26", loc:"ter:lto", desc:""},
    {pt:"", type:"imp", dt:"1962-01-28", loc:"lun", desc:"fail:Guidance system malfunction;los"},
    {pt:"", type:"fb", dt:"1962-01-28", loc:"lun:36800km", desc:""},
    {pt:"", type:"tc", dt:"1962-01-28", loc:"sol:ho:0.984x1.163aux0.4deg", desc:""},
    {pt:"", type:"obs", dt:"", loc:"sol:ho", desc:"Interplanetary Gamma Ray Flux"}
]},
ranger4: {name:"Ranger 4", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"P-35", type:"im", dest:"lun", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Ranger;m:331.12kg;dim:5.2x1.5x3.1m;sc:0.4", id:"1962-012A", url:"lpi:www.lpi.usra.edu/lunar/missions/ranger/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/ranger.html;hist:history.nasa.gov/SP-4210/pages/Cover.htm", icon:"ranger3-5.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-04-23", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1962-04-23", loc:"ter:lto", desc:""},
    {pt:"", type:"imp", dt:"1962-04-26", loc:"lun:15.5S,229.3E", desc:"Joffe Crater;fail:Computer malfunction;los"}
]},
mariner1: {name:"Mariner 1", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"P-37", type:"fbm", dest:"ven", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-R;m:202.8kg;dim:5.05x3.66x1.04m", id:"MARIN1", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/mariner12QL.html", icon:"mariner1-2.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-07-22", loc:"ter:cap:LC-12", desc:"fail:Navigation error"}
]},
sputnik19: {name:"Sputnik 19", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Спутник-19;Venera 2MV-1 #3", type:"pm", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:2MV;m:890kg;dim:4.0x1.1x3.3m", id:"1962-040A", url:"www.mentallandscape.com/V_Venus.htm;ea:www.astronautix.com/craft/mars2mv1.htm", icon:"venera-2mv.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-08-25", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1962-08-28", loc:"sol:hto", desc:"fail:Upper stage ullage motor at T+60.8min"}
]},
mariner2: {name:"Mariner 2", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"Mariner Venus 62B;P-38", type:"fbm", dest:"ven", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-R;First successful Venus flyby;m:203.6kg;dim:5.05x3.66x1.04m", id:"1962-041A", url:"hp:www.jpl.nasa.gov/mariner2/;jpl:space.jpl.nasa.gov/msl/QuickLooks/mariner12QL.html;hist:history.nasa.gov/SP-59.pdf", icon:"mariner1-2.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-08-27", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1962-08-27", loc:"sol:hto:0.68x1.02aux1.84deg", desc:""},
    {pt:"", type:"fb", dt:"1962-12-14", loc:"ven:34773km", desc:""},
    {pt:"", type:"los", dt:"1963-01-03", loc:"sol:ho:0.705x1.227aux1.74deg", desc:"eom"}
]},
sputnik20: {name:"Sputnik 20", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Спутник-20;Venera 2MV-1 #4", type:"pm", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:2MV;m:~890kg;dim:4.0x1.1x3.3m", id:"1962-043A", url:"www.mentallandscape.com/V_Venus.htm;ea:www.astronautix.com/craft/mars2mv1.htm", icon:"venera-2mv.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-09-01", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1962-09-01", loc:"sol:hto", desc:"fail:Upper stage ignition at T+61.5min;eom"},
    {pt:"", type:"los", dt:"1962-09-05", loc:"ter", desc:""}
]},
sputnik21: {name:"Sputnik 21", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Спутник-21;Venera 2MV-2 #1", type:"fbm", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:2MV;m:~890kg;dim:4.0x1.1x3.3m", id:"1962-045A", url:"ea:www.astronautix.com/craft/mars2mv2.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-2mv.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-09-12", loc:"ter:bai:LC-1", desc:"fail:Upper stage ignition at T+531s"}
]},
ranger5: {name:"Ranger 5", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"P-36", type:"im", dest:"lun", stat:"p", ctry:"us", desc:"ag:nasa,jpl;fam:Ranger;m:342.6kg;dim:5.2x1.5x3.1m;sc:0.4", id:"1962-055A", url:"lpi:www.lpi.usra.edu/lunar/missions/ranger/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/ranger.html;hist:history.nasa.gov/SP-4210/pages/Cover.htm", icon:"ranger3-5.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-10-18", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1962-10-18", loc:"ter:lto", desc:""},
    {pt:"", type:"imp", dt:"1962-10-20", loc:"lun", desc:"fail:Power loss;los"},
    {pt:"", type:"fb", dt:"1962-10-20", loc:"lun:725km", desc:""},
    {pt:"", type:"tc", dt:"1962-10-20", loc:"sol:ho:0.951x1.064aux0.41deg", desc:""},
]},
sputnik22: {name:"Sputnik 22", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Спутник-22;Корабль-11;Mars 2MV-4 #3", type:"fbm", dest:"mar", stat:"f", ctry:"su", desc:"ag:okb;fam:2MV;m:894kg;dim:4.0x1.1x3.3m", id:"1962-057A", url:"ea:www.astronautix.com/craft/mars2mv4.htm", icon:"mars-2mv4.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-10-24", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1962-10-24", loc:"sol:hto", desc:"fail:Upper stage explosion"}
]},
mars1: {name:"Mars 1", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Марс-1;Sputnik 23;Mars 2MV-4 #5", type:"fbm", dest:"mar", stat:"p", ctry:"su", desc:"ag:okb;fam:2MV;m:893.5kg;dim:4.0x1.1x3.3m;First probe towards Mars", id:"1962-061A", url:"ea:www.astronautix.com/craft/mars2mv4.htm", icon:"mars-2mv4.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-11-01", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1962-11-01", loc:"sol:hto", desc:""},
    {pt:"", type:"los", dt:"1963-03-21", loc:"so", desc:"fail:Attitude control malfunction;eom"},
    {pt:"", type:"fb", dt:"1963-06-19", loc:"mar:193000km", desc:""},
    {pt:"", type:"tc", dt:"1963-06-19", loc:"sol:ho:0.924x1.604aux2.68deg", desc:""}
]},
sputnik24: {name:"Sputnik 24", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Спутник-24;Mars 2MV-3 #1", type:"slm", dest:"mar", stat:"f", ctry:"su", desc:"ag:okb;fam:2MV;m:1097kg;dim:4.0x1.1x3.3m", id:"1962-062A", url:"ea:www.astronautix.com/craft/mars2mv3.htm", icon:"mars-2mv3.png"}], 
  events:[
    {pt:"", type:"l", dt:"1962-11-04", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1962-11-04", loc:"sol:hto", desc:"fail:Upper stage premature shutdown"}
]},
// --- 1963 --- 5 Missions
sputnik25: {name:"Sputnik 25", desc:"lv:Molniya 8K78L/Blok-L",
  parts:[
    {names:"Спутник-25;Luna E-6 #2", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1420kg;dim:1.5x1.0x2.7m", id:"1963-001A", url:"ea:www.astronautix.com/craft/lunae6.htm", icon:"luna-e6.png"}], 
  events:[
    {pt:"", type:"l", dt:"1963-01-04", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1963-01-04", loc:"sol:hto", desc:"fail:Upper stage ignition"}
]},
luna1963b: {name:"Luna E-6 #3", desc:"lv:Molniya 8K78L/Blok-L",
  parts:[
    {names:"Луна-4D;[Luna 1963B]", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1420kg;dim:1.5x1.0x2.7m", id:"", url:"ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e6.png"}], 
  events:[
    {pt:"", type:"l", dt:"1963-02-03", loc:"ter:bai:LC-1", desc:"fail:Guidance system malfunction"}
]},
luna4: {name:"Luna 4", desc:"lv:Molniya 8K78L/Blok-L",
  parts:[
    {names:"Луна-4;Luna E-6 #4", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1422kg;dim:1.5x1.0x2.7m", id:"1963-008B", url:"ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6.png"}], 
  events:[
    {pt:"", type:"l", dt:"1963-04-02", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1963-04-02", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1963-04-05", loc:"lun", desc:"fail:Attitude control malfunction"},
    {pt:"", type:"fb", dt:"1963-04-05", loc:"lun:8400km", desc:""},
    {pt:"", type:"los", dt:"1963-04-14", loc:"sol:ho", desc:"eom"},
]},
cosmos21: {name:"Kosmos 21", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Космос-21;Zond 3MV-1A #2", type:"erm", dest:"ter", stat:"f", ctry:"su", desc:"ag:okb;fam:3MV;Test Flight?;m:~800kg;dim:4.0x1.1x3.6m;w:0.2", id:"1963-044A", url:"ea:www.astronautix.com/craft/ven3mv1a.htm", icon:"zond-3mv1a.png"}], 
  events:[
    {pt:"", type:"l", dt:"1963-11-11", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1963-11-11", loc:"sol:hto", desc:"fail:Upper stage explosion"}
]},
// --- 1964 --- 12 Missions
ranger6: {name:"Ranger 6", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"Ranger-A;P-53", type:"im", dest:"lun", stat:"p", ctry:"us", desc:"ag:nasa,jpl;fam:Ranger;m:364.69kg;dim:4.6x1.5x3.6m;sc:0.5", id:"1964-007A", url:"lpi:www.lpi.usra.edu/lunar/missions/ranger/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/ranger.html;hist:history.nasa.gov/SP-4210/pages/Cover.htm", icon:"ranger6-9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-01-30", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1964-01-30", loc:"ter:lto", desc:""},
    {pt:"", type:"imp", dt:"1964-02-02", loc:"lun:9.358N,21.480E", desc:"Mare Tranquilitatis;fail:Camera malfunction"}
]},
venera1964A: {name:"Zond 3MV-1A #4A", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Зонд-64A;[Venera 1964A]", type:"fbm", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:3MV;m:~800kg;dim:4.0x1.1x3.6m", id:"", url:"ea:www.astronautix.com/craft/ven3mv1a.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"zond-3mv1a.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-02-19", loc:"ter:bai:LC-1", desc:"fail:Third stage explosion"}
]},
luna1964A: {name:"Luna E-6 #6", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-5A;[Luna 1964A]", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1420kg;dim:1.5x1.0x2.7m", id:"", url:"ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e6.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-03-21", loc:"ter:bai:LC-1", desc:"fail:Third stage ignition"}
]},
cosmos27: {name:"Kosmos 27", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Космос-27;Zond 3MV-1 #5", type:"fbm", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:3MV;m:948kg;dim:4.0x1.1x3.6m", id:"1964-014A", url:"ea:www.astronautix.com/craft/vena3mv1.htm", icon:"zond-3mv1a.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-03-27", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1964-03-27", loc:"sol:hto", desc:"fail:Upper stage ignition"}
]},
zond1: {name:"Zond 1", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Зонд-1;Zond 3MV-1 #4", type:"pm", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:3MV;m:948kg;dim:4.0x1.1x3.6m", id:"1964-016D", url:"ea:www.astronautix.com/craft/vena3mv1.htm", icon:"zond-3mv1a.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-04-02", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1964-04-02", loc:"sol:hto:0.652x1.001aux3.7deg", desc:""},
    {pt:"", type:"los", dt:"1964-05-24", loc:"sol", desc:"fail:Spacecraft depressurization;eom"},
    {pt:"", type:"fb", dt:"1964-07-14", loc:"ven:100000km", desc:""}
]},
luna1964B: {name:"Luna E-6 #5", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-5B;[Luna 1964B]", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1420kg;dim:1.5x1.0x2.7m", id:"", url:"ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e6.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-04-20", loc:"ter:bai:LC-1", desc:"fail:Third stage premature shutdown"}
]},
ranger7: {name:"Ranger 7", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"Ranger-B;P-54", type:"im", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Ranger;m:365.6kg;dim:4.6x1.5x3.6m;sc:0.5", id:"1964-041A", url:"lpi:www.lpi.usra.edu/lunar/missions/ranger/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/ranger.html;hist:history.nasa.gov/SP-4210/pages/Cover.htm", icon:"ranger6-9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-07-28", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1964-07-28", loc:"ter:lto", desc:""},
    {pt:"", type:"dsc", dt:"1964-07-31", loc:"lun", desc:"tm:17mn;4308 images returned"},
    {pt:"", type:"imp", dt:"1964-07-31", loc:"lun:10.35S,339.42E", desc:"Mare Cognitum;eom;show:R7:SE"}
]},
mariner3: {name:"Mariner 3", desc:"lv:Atlas-LV3 Agena-D",
  parts:[
    {names:"Mariner Mars 64C", type:"fbm", dest:"mar", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-64;m:260.8kg;dim:6.88x6.88x2.89m", id:"1964-073A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/mariner34QL.html;nssdc:nssdc.gsfc.nasa.gov/planetary/mars/mariner.html", icon:"mariner3-4.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-11-05", loc:"ter:cap:LC-13", desc:""},
    {pt:"", type:"toi", dt:"1964-11-05", loc:"sol:hto:0.983x1.311aux0.52deg", desc:"fail:Payload fairing malfunction"}
]},
//1.38x0.46m, 1.76x0.9mx4 p, 1.17x0.53m a
mariner4: {name:"Mariner 4", desc:"lv:Atlas-LV3 Agena-D",
  parts:[
    {names:"Mariner Mars 64D", type:"fbm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-64;First successful Mars flyby;m:260.8kg;dim:6.88x6.88x2.89m", id:"1964-077A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/mariner34QL.html;nssdc:nssdc.gsfc.nasa.gov/planetary/mars/mariner.html", icon:"mariner3-4.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-11-28", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1964-11-28", loc:"sol:hto", desc:""},
    {pt:"", type:"fb", dt:"1965-07-15", loc:"mar:9846km", desc:""},
    {pt:"", type:"los", dt:"1967-12-21", loc:"sol:ho:1.107x1.561aux2.54deg", desc:"eom"}
]},
zond2: {name:"Zond 2", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Зонд-2;Zond 3MV-4A #2", type:"fbm", dest:"mar", stat:"p", ctry:"su", desc:"ag:okb;fam:3MV;m:996kg;m0:1145kg;dim:4.0x1.1x3.6m;sc:0.4", id:"1964-078C", url:"ea:www.astronautix.com/craft/mar3mv4a.htm", icon:"zond-3mv4.png"}], 
  events:[
    {pt:"", type:"l", dt:"1964-11-30", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1964-11-30", loc:"sol:hto:0.98x1.52aux6.4deg", desc:"mal:Solar panel deployment"},
    {pt:"", type:"ev", dt:"1964-12-15", loc:"so", desc:"Solar panels deployed"},
    {pt:"", type:"los", dt:"1965-01-01", loc:"so", desc:"eom"},
    {pt:"", type:"fb", dt:"1965-08-06", loc:"mar:1500km", desc:""}
]},
// --- 1965 --- 18 Missions
pegasus1: {name:"Pegasus 1", desc:"lv:Saturn I",
  parts:[
    {names:"Saturn SA-9 Test", type:"obm", dest:"ter", stat:"s", ctry:"us", desc:"ag:nasa;fam:Pegasus;Micrometeorite Research;m0:1451.5kg;m:10500g;dim:29.3x4.3x5.3m;sc:1", id:"1965-009A", url:"ea:www.astronautix.com/p/pegasussatellite.html;hist:history.msfc.nasa.gov/ess/pegasus.html", icon:"pegasus.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-02-16", loc:"ter:cap:LC-37B", desc:""},
    {pt:"", type:"oi", dt:"1965-02-16", loc:"ter:500x731kmx31.7deg", desc:""},
    {pt:"", type:"tos", dt:"1968-08-29", loc:"ter", desc:"eom"}
]},
ranger8: {name:"Ranger 8", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"Ranger-C", type:"im", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Ranger;m:366.87kg;dim:4.6x1.5x3.6m;sc:0.5", id:"1965-010A", url:"lpi:www.lpi.usra.edu/lunar/missions/ranger/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/ranger.html;hist:history.nasa.gov/SP-4210/pages/Cover.htm", icon:"ranger6-9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-02-17", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1965-02-17", loc:"ter:lto", desc:""},
    {pt:"", type:"dsc", dt:"1965-02-20", loc:"lun", desc:"tm:23mn;7137 images returned"},
    {pt:"", type:"imp", dt:"1965-02-20", loc:"lun:2.67N,24.65E", desc:"Mare Tranquilitatis;show:R8:NE;eom"}
]},
sd1: {name:"Surveyor SD1:Surveyor Dynamic Model 1", desc:"lv:Atlas-LV3C Centaur-C",
  parts:[
    {names:"Atlas Centaur 5", type:"test", dest:"ter:leo", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;Surveyor Test Flight 1;m:951kg;dim:3.05x3.05x16.2m;w:0.3;sc:0.7", id:"ATCEN5", url:"ea:www.astronautix.com/lvs/atlrlv3c.htm;www.spacelaunchreport.com/aclv3cb.html", icon:"surveyor-sd.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-03-02", loc:"ter:cap:LC-36A", desc:"fail:First stage shutdown"}
]},
cosmos60: {name:"Kosmos 60", desc:"lv:Molniya 8K78L/Blok-L",
  parts:[
    {names:"Космос-60;Luna E-6 #9", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1470kg;dim:1.5x1.0x2.7m", id:"1965-018A", url:"ea:www.astronautix.com/craft/lunae6.htm", icon:"luna-e6.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-03-12", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1965-03-12", loc:"ter:lto", desc:"fail:Upper stage ignition"}
]},
ranger9: {name:"Ranger 9", desc:"lv:Atlas-LV3 Agena-B",
  parts:[
    {names:"Ranger-D", type:"im", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Ranger;m:366.87kg;dim:4.6x1.5x3.6m;sc:0.5", id:"1965-023A", url:"lpi:www.lpi.usra.edu/lunar/missions/ranger/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/ranger.html;hist:history.nasa.gov/SP-4210/pages/Cover.htm", icon:"ranger6-9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-03-21", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1965-03-21", loc:"ter:lto", desc:""},
    {pt:"", type:"dsc", dt:"1965-03-24", loc:"lun", desc:"tm:19mn;5814 images returned"},
    {pt:"", type:"imp", dt:"1965-03-24", loc:"lun:12.83S,357.63E", desc:"Alphonsus Crater;eom;show:R9:SE"}
]},
luna1965A: {name:"Luna E-6 #8", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Луна-5D;[Luna 1965A]", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1470kg;dim:1.5x1.0x2.7m", id:"", url:"ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e6.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-04-10", loc:"ter:bai:LC-1", desc:"fail:Third stage ignition"}
]},
luna5: {name:"Luna 5", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-5;Luna E-6 #10", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1476kg;dim:1.5x1.0x2.7m;First soft landing attempt", id:"1965-036A", url:"ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6.png"},
    {names:"{Luna 5 Lander}", desc:"sc:0.75", icon:"luna-e6p.png"}],
  events:[
    {pt:"", type:"l", dt:"1965-05-09", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1965-05-09", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1965-05-12", loc:"lun", desc:"fail:Guidance system malfunction;alt:40km"},
    {pt:"", type:"imp", dt:"1965-05-12", loc:"lun:8N,23W", desc:"near Crater Copernicus;show:L5:NW"}
]},
pegasus2: {name:"Pegasus 2", desc:"lv:Saturn I",
  parts:[
    {names:"Saturn SA-8 Test", type:"obm", dest:"ter", stat:"s", ctry:"us", desc:"ag:nasa;fam:Pegasus;Micrometeorite Research;m0:1451.5kg;m:10460g;dim:29.3x4.3x5.3m;sc:1", id:"1965-039A", url:"ea:www.astronautix.com/p/pegasussatellite.html;hist:history.msfc.nasa.gov/ess/pegasus.html", icon:"pegasus.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-05-25", loc:"ter:cap:LC-37B", desc:""},
    {pt:"", type:"oi", dt:"1965-05-25", loc:"ter:502x740kmx31.7deg", desc:""},
    {pt:"", type:"tos", dt:"1968-08-29", loc:"ter", desc:"eom"}
]},
luna6: {name:"Luna 6", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-6;Luna E-6 #7", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1442kg;dim:1.5x1.0x2.7m", id:"1965-044A", url:"ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-06-08", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1965-06-08", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1965-06-11", loc:"lun", desc:"fail:Command error;eom"},
    {pt:"", type:"fb", dt:"1965-06-11", loc:"lun:161000km", desc:""}
]},
zond3: {name:"Zond 3", desc:"lv:Molniya 8K78/Blok-L", stat:"p",
  parts:[
    {names:"Зонд-3;Zond 3MV-4 #3", type:"fbm", dest:"lun", stat:"s", ctry:"su", desc:"ag:okb;fam:3MV;m:1145kg;m0:950kg;dim:4.0x1.1x3.6m;sc:0.4", id:"1965-056A", url:"za:www.zarya.info/Diaries/Luna/Zond3.php;ea:www.astronautix.com/craft/mars3mv4.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"zond-3mv4.png"},
    {type:"fbm", dest:"mar", stat:"f", ctry:"su"}], 
  events:[
    {pt:"", type:"l", dt:"1965-07-18", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1965-07-18", loc:"sol:ho:0.90x1.56aux0.25deg", desc:""},
    {pt:"", type:"fb", dt:"1965-07-20", loc:"lun:9200km", desc:""},
    {pt:"1", type:"los", dt:"1966-03-03", loc:"so", desc:"fail:Communication system malfunction"}
]},
pegasus3: {name:"Pegasus 3", desc:"lv:Saturn I",
  parts:[
    {names:"Saturn SA-10 Test", type:"obm", dest:"ter", stat:"s", ctry:"us", desc:"ag:nasa;fam:Pegasus;Micrometeorite Research;m0:1451.5kg;m:10500g;dim:29.3x4.3x5.3m;sc:1", id:"1965-060A", url:"ea:www.astronautix.com/p/pegasussatellite.html;hist:history.msfc.nasa.gov/ess/pegasus.html", icon:"pegasus.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-07-30", loc:"ter:cap:LC-37B", desc:""},
    {pt:"", type:"oi", dt:"1965-07-30", loc:"ter:441x449kmx28.9deg", desc:""},
    {pt:"", type:"tos", dt:"1968-08-29", loc:"ter", desc:"eom"}
]},
sd2: {name:"Surveyor SD2:Surveyor Dynamic Model 2", desc:"lv:Atlas-LV3C Centaur-D",
  parts:[
    {names:"Atlas Centaur 6", type:"test", dest:"ter:heeo", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;Surveyor Test Flight 2;m:950kg;dim:3.05x3.05x16.2m;sc:0.7", id:"1965-064A", url:"ea:www.astronautix.com/lvs/atlrlv3c.htm;www.spacelaunchreport.com/aclv3cb.html", icon:"surveyor-sd.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-08-11", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"oi", dt:"1965-08-11", loc:"ter:166x815085kmx28.6deg", desc:"eom"}
]},
luna7: {name:"Luna 7", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Луна-7;Luna E-6 #11", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1506kg;dim:1.5x1.0x2.7m", id:"1965-077A", url:"ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6.png"},
    {names:"{Luna 7 Lander}", desc:"sc:0.75", icon:"luna-e6p.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-10-04", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1965-10-04", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1965-10-07", loc:"lun", desc:"fail:Attitude control malfunction;eom"},
    {pt:"", type:"imp", dt:"1965-10-07", loc:"lun:9.8N,47.8W", desc:"Ocenaus Procellarum"}
]},
venera2: {name:"Venera 2", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Венера-2;Venera 3MV-4 #4", type:"fbm", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:3MV;m:963kg;dim:4.0x1.1x3.6m", id:"1965-091A", url:"ea:www.astronautix.com/craft/vena3mv4.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-3mv4.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-11-12", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1965-11-12", loc:"sol:hto:0.716x1.197aux4.29deg", desc:""},
    {pt:"", type:"fb", dt:"1966-02-27", loc:"ven:24000km", desc:"fail:Thermal control malfunction;los"}
]},
venera3: {name:"Venera 3", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Венера-2;Venera 3MV-3 #1", type:"pm", dest:"ven", stat:"p", ctry:"su", desc:"ag:okb;fam:3MV;First Venus impact;m:958kg;dim:4.0x1.1x3.6m", id:"1965-092A", url:"ea:www.astronautix.com/craft/vena3mv3.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-3mv3.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-11-16", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1965-11-16", loc:"sol:hto:0.68x0.99aux4.29deg", desc:""},
    {pt:"", type:"edl", dt:"1966-03-01", loc:"ven", desc:"fail:Thermal controlmMalfunction;los"},
    {pt:"", type:"imp", dt:"1966-03-01", loc:"ven", desc:"20S-20N, 60-80E?"}
]},
cosmos96: {name:"Kosmos 96", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Космос-96;Venera 3MV-4 #6", type:"pm", dest:"ven", stat:"f", ctry:"su", desc:"ag:okb;fam:3MV;m:~950kg;dim:4.0x1.1x3.6m", id:"1965-094A", url:"ea:www.astronautix.com/craft/vena3mv4.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-3mv4.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-11-23", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1965-11-23", loc:"sol:hto", desc:"fail:Third stage explosion at T+528"}
]},
luna8: {name:"Luna 8", desc:"lv:Molniya 8K78/Blok-L",
  parts:[
    {names:"Луна-8;Luna E-6 #12", type:"slm", dest:"lun", stat:"f", ctry:"su", desc:"ag:okb;fam:E-6;m:1552kg;dim:1.5x1.0x2.7m", id:"1965-099A", url:"ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6.png"},
    {names:"{Luna 8 Lander}", desc:"sc:0.75", icon:"luna-e6p.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-12-03", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1965-12-03", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1965-12-06", loc:"lun", desc:"fail:Uncontroled spin"},
    {pt:"", type:"imp", dt:"1965-12-06", loc:"lun:9.1N,63.3W", desc:"Oceanus Procellarum"}
]},
pioneer6: {name:"Pioneer 6", desc:"lv:Delta E",
  parts:[
    {names:"Pioneer A", type:"obm", dest:"sol", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Pioneer;m:146kg;dim:4.5x4.5x2.6m", id:"1965-105A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer6QL.html;arc:www.nasa.gov/centers/ames/missions/archive/pioneer.html", icon:"pioneer6-9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1965-12-16", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"oi", dt:"1965-12-18", loc:"sol:ho:0.814x0.985aux0.17deg", desc:""},
    {pt:"", type:"tos", dt:"2000-12-06", loc:"so", desc:"eom"}
]},
// --- 1966 --- 13 Missions
luna9: {name:"Luna 9", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-9;Luna E-6M #13/202", type:"slm", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-6M;First successful Moon landing;m:1584kg;dim:1.5x1.0x2.7m", id:"1966-006A", url:"rsw:www.russianspaceweb.com/luna9.html;ea:www.astronautix.com/craft/lunae6.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6m.png"},
    {names:"{Luna 9 Lander}", desc:"sc:0.75", icon:"luna-e6p.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-01-31", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1966-01-31", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1966-02-03", loc:"lun:7.08N,64.37W", desc:"Planitia Descensus;show:L9:SW"},
    {pt:"", type:"los", dt:"1966-02-06", loc:"lun", desc:"eom"}
]},
cosmos111: {name:"Kosmos 111", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Космос-111;Luna E-6S #204", type:"om", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-6S;m:1580kg;m0:540kg;dim:1.5x1.0x3.0m;sc:0.25", id:"1966-017A", url:"ea:www.astronautix.com/craft/lunae6s.htm", icon:"luna-e6s-cr.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-03-01", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1966-03-01", loc:"ter:lto", desc:"fail:Upper stage ignition"}
]},
luna10: {name:"Luna 10", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-10;Luna E-6S #206", type:"om", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-6S;First Moon orbiter;m:1582kg;m0:540kg;dim:1.5x1.0x3.0m;sc:0.25", id:"1966-027A", url:"rsw:www.russianspaceweb.com/luna10.html;ea:www.astronautix.com/craft/lunae6s.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6s.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-03-31", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1966-03-31", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1966-04-03", loc:"lun:349x1015kmx71.9deg", desc:"per:178.05mn"},
    {pt:"", type:"los", dt:"1966-05-30", loc:"lun:378x985kmx72deg", desc:"460 orbits;eom"}
]},
sd3: {name:"Surveyor SD3:Surveyor Dynamic Model 3", desc:"lv:Atlas-LV3C Centaur-D",
  parts:[
    {names:"Atlas Centaur 8", type:"test", dest:"ter:heeo", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;Surveyor Test Flight 3;m:784kg;dim:3.05x3.05x16.2m;sc:0.7", id:"1966-030A", url:"ea:www.astronautix.com/lvs/atlrlv3c.htm;www.spacelaunchreport.com/aclv3cb.html", icon:"surveyor-sd.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-04-07", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"oi", dt:"1966-04-07", loc:"ter:175x344kmx30.7deg", desc:"fail:Upper stage reignition;eom"}
]},
surveyor1: {name:"Surveyor 1", desc:"lv:Atlas-LV3C Centaur-D",
  parts:[
    {names:"Surveyor A", type:"slm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;m:995.2kg;dim:4.27x4.27x3.05m", id:"1966-045A", url:"lpi:www.lpi.usra.edu/lunar/missions/surveyor/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html", icon:"surveyor.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-05-30", loc:"ter:cap:LC-36A", desc:""},
    {pt:"", type:"td", dt:"1966-06-02", loc:"lun:2.45S,43.21W", desc:"Flamsteed P Crater;show:S1:SW"},
    {pt:"", type:"los", dt:"1967-01-07", loc:"lun", desc:"eom"}
]},
explorer33: {name:"AIMP 1:Anchored Interplanetary Monitoring Platform 1", desc:"lv:Delta E1",
  parts:[
    {names:"Explorer 33;IMP-D:Interplanetary Monitoring Platform D", type:"om", dest:"lun", stat:"p", ctry:"us", desc:"ag:nasa,gsfc;fam:Explorer;m:93.4kg;dim:4.5x2.8x1.2m;sc:0.5", id:"1966-058A", url:"sse:solarsystem.nasa.gov/missions/profile.cfm?Sort=Target&Target=Moon&MCode=Explorer_33", icon:"imp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-07-01", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"toi", dt:"1966-07-01", loc:"ter:heeo", desc:""},
    {pt:"", type:"oi", dt:"1966-07-04", loc:"lun", desc:"mal:Insufficient Delta-V"},
    {pt:"", type:"los", dt:"1971-09-21", loc:"ter:heeo:30550x449174kmx28.9deg", desc:""}
]},
lunarorbiter1: {name:"Lunar Orbiter 1", desc:"lv:Atlas-SLV3 Agena-D",
  parts:[
    {names:"Lunar Orbiter A", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,larc;fam:LO;m:385.6kg;dim:5.33x8.0x2.08m;sc:0.6;First image of Earth from the Moon", id:"1966-073A", url:"lpi:www.lpi.usra.edu/resources/lunar_orbiter/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarorb.html;hist:www.hq.nasa.gov/office/pao/History/TM-3487/top.htm;loirp:www.moonviews.com/lunar-orbiter-1-i-or-a/;tw:twitter.com/LunarOrbiter", icon:"lunarorbiter.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-08-10", loc:"ter:cap:LC-13", desc:""},
    {pt:"", type:"toi", dt:"1966-08-10", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1966-08-14", loc:"lun:189.1x1866.8kmx12.2deg", desc:"per:208.1mn"},
    {pt:"", type:"sco", dt:"1966-08-16", loc:"lun:50x1850kmx12deg", desc:""},
    {pt:"", type:"imp", dt:"1966-10-29", loc:"lun:6.7N,162E", desc:"Mandel'shtam Crater;eom;show:0"}
]},
pioneer7: {name:"Pioneer 7", desc:"lv:Delta E1",
  parts:[
    {names:"Pioneer B", type:"obm", dest:"sol", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Pioneer;m:138kg;dim:4.5x4.5x2.6m", id:"1966-075A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer6QL.html;arc:www.nasa.gov/centers/ames/missions/archive/pioneer.html", icon:"pioneer6-9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-08-17", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"oi", dt:"1966-08-17", loc:"sol:ho:1.012x1.125aux0.1deg", desc:""},
    {pt:"", type:"tos", dt:"1995-03", loc:"so", desc:"eom"}
]},
luna11: {name:"Luna 11", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-11;Luna E-6LF #101", type:"om", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-6LF;m:1640kg;dim:1.6x1.5x2.7m", id:"1966-073A", url:"ea:www.astronautix.com/craft/lunae6lf.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6lf.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-08-24", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1966-08-24", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1966-08-28", loc:"lun:164x1194kmx10.7deg", desc:"per:178mn"},
    {pt:"", type:"los", dt:"1966-10-01", loc:"lun", desc:"277 orbits;eom"}
]},
surveyor2: {name:"Surveyor 2", desc:"lv:Atlas-LV3C Centaur-D",
  parts:[
    {names:"Surveyor B", type:"slm", dest:"lun", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;m:995.2kg;dim:4.27x4.27x3.05m", id:"1966-084A", url:"lpi:www.lpi.usra.edu/lunar/missions/surveyor/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html", icon:"surveyor.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-09-20", loc:"ter:cap:LC-36A", desc:""},
    {pt:"", type:"td", dt:"1966-09-23", loc:"lun", desc:"fail:Vernier engine malfunction"},
    {pt:"", type:"imp", dt:"1966-09-23", loc:"lun:5.5N,12W", desc:"Mare Insularum"}
]},
luna12: {name:"Luna 12", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-11;Luna E-6LF #102", type:"om", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-6LF;m:1620kg;dim:1.6x1.5x2.7m", id:"1966-094A", url:"za:www.zarya.info/Diaries/Luna/Luna12.php;ea:www.astronautix.com/craft/lunae6lf.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6lf.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-10-22", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1966-10-22", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1966-10-25", loc:"lun", desc:"per:205mn"},
    {pt:"", type:"sco", dt:"1966-10-26", loc:"lun:103x1742kmx37deg", desc:""},
    {pt:"", type:"los", dt:"1967-01-19", loc:"lun", desc:"602 orbits;eom"}
]},
lunarorbiter2: {name:"Lunar Orbiter 2", desc:"lv:Atlas-SLV3 Agena-D",
  parts:[
    {names:"Lunar Orbiter B", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,larc;fam:LO;m:385.6kg;dim:5.33x8.0x2.08m;sc:0.6", id:"1966-100A", url:"lpi:www.lpi.usra.edu/resources/lunar_orbiter/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarorb.html;hist:www.hq.nasa.gov/office/pao/History/TM-3487/top.htm;loirp:www.moonviews.com/lunar-orbiter-2-images/;tw:twitter.com/LunarOrbiter", icon:"lunarorbiter.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-11-06", loc:"ter:cap:LC-13", desc:""},
    {pt:"", type:"toi", dt:"1966-11-06", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1966-11-10", loc:"lun:196x1850.8kmx11.8deg", desc:"per:208.07mn"},
    {pt:"", type:"sco", dt:"1966-11-18", loc:"lun:50x1850kmx12deg", desc:""},
    {pt:"", type:"imp", dt:"1967-10-11", loc:"lun:3.0N,119.1E", desc:"eom;show:0"}
]},
luna13: {name:"Luna 13", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-13;Luna E-6M #205", type:"slm", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-6M;m:1584kg;dim:1.5x1.0x2.7m", id:"1966-116A", url:"rsw:www.russianspaceweb.com/luna9.html;ea:www.astronautix.com/craft/lunae6m.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6m.png"},
    {names:"{Luna 13 Lander}", desc:"sc:0.75", icon:"luna-e6p.png"}], 
  events:[
    {pt:"", type:"l", dt:"1966-12-21", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1966-12-21", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1966-12-24", loc:"lun:18.87N,62.05W", desc:"Oceanus Procellarum"},
    {pt:"", type:"los", dt:"1966-12-28", loc:"lun", desc:"eom"}
]},
// --- 1967 --- 14 Missions
lunarorbiter3: {name:"Lunar Orbiter 3", desc:"lv:Atlas-SLV3 Agena-D",
  parts:[
    {names:"Lunar Orbiter C", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,larc;fam:LO;m:385.6kg;dim:5.33x8.0x2.08m;sc:0.6", id:"1967-008A", url:"lpi:www.lpi.usra.edu/resources/lunar_orbiter/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarorb.html;hist:www.hq.nasa.gov/office/pao/History/TM-3487/top.htm;loirp:www.moonviews.com/lunar-orbiter-3-images/;tw:twitter.com/LunarOrbiter", icon:"lunarorbiter.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-02-05", loc:"ter:cap:LC-13", desc:""},
    {pt:"", type:"toi", dt:"1967-02-05", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1967-02-08", loc:"lun:210.2x1801.9kmx20.9deg", desc:"per:208.1mn"},
    {pt:"", type:"sco", dt:"1967-02-15", loc:"lun:55x1850kmx21deg", desc:""},
    {pt:"", type:"imp", dt:"1967-10-09", loc:"lun:14.3N,97.7W", desc:"Einstein Crater;eom;show:0"}
]},
surveyor3: {name:"Surveyor 3", desc:"lv:Atlas-LV3C Centaur-D",
  parts:[
    {names:"Surveyor C", type:"slm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;First spacecraft visited by humans beyond Earth (Apollo 12);m:997.9kg;dim:4.27x4.27x3.05m", id:"1967-035A", url:"lpi:www.lpi.usra.edu/lunar/missions/surveyor/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html", icon:"surveyor.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-04-17", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"toi", dt:"1967-04-17", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1967-04-20", loc:"lun:3.0159S,23.4178W", desc:"Oceanus Procellarum;mal:Engine firing, lifted off twice before shutdown;show:S3:SW"},
    {pt:"", type:"los", dt:"1967-05-04", loc:"lun", desc:"eom"}
]},
lunarorbiter4: {name:"Lunar Orbiter 4", desc:"lv:Atlas-SLV3 Agena-D",
  parts:[
    {names:"Lunar Orbiter D", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,larc;fam:LO;m:385.6kg;dim:5.33x8.0x2.08m;sc:0.6", id:"1967-041A", url:"lpi:www.lpi.usra.edu/resources/lunar_orbiter/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarorb.html;hist:www.hq.nasa.gov/office/pao/History/TM-3487/top.htm;loirp:www.moonviews.com/lunar-orbiter-4-iv-or-d/;tw:twitter.com/LunarOrbiter", icon:"lunarorbiter.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-05-04", loc:"ter:cap:LC-13", desc:""},
    {pt:"", type:"toi", dt:"1967-05-04", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1967-05-08", loc:"lun:2706x6111kmx85.5deg", desc:"per:721mn"},
    {pt:"", type:"sco", dt:"1967-05-11", loc:"lun:2700x6110kmx85deg", desc:""},
    {pt:"", type:"los", dt:"1967-07-17", loc:"lun", desc:"eom"},
    {pt:"", type:"imp", dt:"1967-10-31", loc:"lun", desc:"22-30W?;show:0"}
]},
cosmos159: {name:"Kosmos 159", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Космос-159;Luna E-6LS #111", type:"test", dest:"ter:heeo", stat:"p", ctry:"su", desc:"ag:lav,iki;fam:E-6LS;Test Flight;m:~1700kg;dim:1.6x1.5x2.7m", id:"1967-046A", url:"ea:www.astronautix.com/craft/lunae6ls.htm", icon:"luna-e6s-cr.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-05-16", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1967-05-16", loc:"ter:heeo", desc:"mal:Upper Stage Premature Shutdown"},
    {pt:"", type:"ae", dt:"1967-11-11", loc:"ter", desc:"eom"}
]},
venera4: {name:"Venera 4", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Венера-4;Venera 1V #310", type:"pm", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:1V (V-67);First Venus atmospheric probe;m:1106kg;dim:4.0x1.4x3.5m", id:"1967-058A", url:"ea:www.astronautix.com/craft/ven1vv67.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-1v.png"},
    {names:"{Venera 4 Descent Probe}", type:"pm", dest:"ven", stat:"s", ctry:"su", desc:"m:377kg;sc:0.75", icon:"venera-1vp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-06-12", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1967-06-12", loc:"sol:hto:0.71x1.02aux4.3deg", desc:""},
    {pt:"", type:"ae", dt:"1967-10-18", loc:"ven", desc:"tm:93mn"},
    {pt:"", type:"los", dt:"1967-10-18", loc:"ven", desc:"alt:24.96km;eom"},
    {pt:"", type:"imp", dt:"1967-10-18", loc:"ven:19N,38E", desc:"Eisila Regio"}
]},
mariner5: {name:"Mariner 5", desc:"lv:Atlas-SLV3 Agena-D",
  parts:[
    {names:"Mariner Venus 67E", type:"fbm", dest:"ven", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-67;m:244.9kg;dim:5.56x5.56x2.89m", id:"1967-060A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/mariner5QL.html", icon:"mariner5.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-06-14", loc:"ter:cap:LC-12", desc:""},
    {pt:"", type:"toi", dt:"1967-06-14", loc:"sol:hto", desc:""},
    {pt:"", type:"fb", dt:"1967-10-19", loc:"ven:4000km", desc:""},
    {pt:"", type:"los", dt:"1967-12-04", loc:"sol:ho:0.579x0.735aux1.37", desc:"eom"},
    {pt:"", type:"ev", dt:"1968-10-14", loc:"so", desc:"Carrier wave detected, Communication unsuccessful"}
]},
cosmos167: {name:"Kosmos 167", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Космос-167;Venera 1V #311", type:"pm", dest:"ven", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:1V (V-67);m:~1100kg;dim:4.0x1.4x3.5m", id:"1967-058A", url:"ea:www.astronautix.com/craft/ven1vv67.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-1v.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-06-17", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1967-06-17", loc:"sol:hto", desc:"fail:Upper stage ignition"}
]},
surveyor4: {name:"Surveyor 4", desc:"lv:Atlas-LV3C Centaur-D",
  parts:[
    {names:"Surveyor D", type:"slm", dest:"lun", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;m:1037.4kg;dim:4.27x4.27x3.05m", id:"1967-068A", url:"lpi:www.lpi.usra.edu/lunar/missions/surveyor/", icon:"surveyor.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-07-14", loc:"ter:cap:LC-36A", desc:""},
    {pt:"", type:"toi", dt:"1967-07-14", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1967-07-17", loc:"lun", desc:"fail:Retrorocket explosion?;2.5 min before TD"},
    {pt:"", type:"imp", dt:"1967-07-17", loc:"lun:0.4N,1.33W", desc:"Sinus Medii"}
]},
explorer35: {name:"AIMP 2:Anchored Interplanetary Monitoring Platform 2", desc:"lv:Delta E1",
  parts:[
    {names:"Explorer 35;IMP-E:Interplanetary Monitoring Platform E", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,gsfc;fam:Explorer;m:104.3kg;dim:4.5x2.8x1.2m;sc:0.5", id:"1967-070A", url:"sse:solarsystem.nasa.gov/missions/profile.cfm?Sort=Target&Target=Moon&MCode=Explorer_33", icon:"imp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-07-19", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", type:"oi", dt:"1967-07-21", loc:"lun:800x7692kmx147deg", desc:""},
    {pt:"", type:"tos", dt:"1973-06-24", loc:"lun:orb", desc:"eom"}
]},
lunarorbiter5: {name:"Lunar Orbiter 5", desc:"lv:Atlas-SLV3 Agena-D",
  parts:[
    {names:"Lunar Orbiter E", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,larc;fam:LO;m:390kg;dim:5.33x8.0x2.08m;sc:0.6", id:"1967-075A", url:"lpi:www.lpi.usra.edu/resources/lunar_orbiter/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarorb.html;hist:www.hq.nasa.gov/office/pao/History/TM-3487/top.htm;loirp:www.moonviews.com/lunar-orbiter-5-images/;tw:twitter.com/LunarOrbiter", icon:"lunarorbiter.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-08-01", loc:"ter:cap:LC-13", desc:""},
    {pt:"", type:"toi", dt:"1967-08-01", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1967-08-05", loc:"lun:194.5x6023kmx85deg", desc:"per:510.08mn"},
    {pt:"", type:"sco", dt:"1967-08-06", loc:"lun:100x6092kmx85deg", desc:""},
    {pt:"", type:"imp", dt:"1968-01-31", loc:"lun:2.8S,83.0W", desc:"Cordillera Montes;eom;show:0"}
]},
surveyor5: {name:"Surveyor 5", desc:"lv:Atlas-SLV3C Centaur-D",
  parts:[
    {names:"Surveyor E", type:"slm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;First in-situ soil analysis;m:1006kg;dim:4.27x4.27x3.05m", id:"1967-084A", url:"lpi:www.lpi.usra.edu/lunar/missions/surveyor/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html", icon:"surveyor.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-09-08", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"toi", dt:"1967-09-08", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1967-09-11", loc:"lun:1.41N,23.18E", desc:"Mare Tranquilitatis;show:S5:SE"},
    {pt:"", type:"tos", dt:"1967-12-17", loc:"lun", desc:"eom"}
]},
zond1967A: {name:"Zond 7K-L1 #4L", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Зонд-4A;[Zond 1967A]", type:"fbm", dest:"lun", stat:"f", ctry:"su", desc:"ag:tsk;fam:7K-L1;m:5680kg;m0:4980kg;dim:9.8x2.7x5.3m;sc:0.75", id:"", url:"ea:www.astronautix.com/craft/soyz7kl1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"7k-l1.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-09-27", loc:"ter:bai:LC-81/23", desc:"fail:First stage engine malfunction"}
]},
surveyor6: {name:"Surveyor 6", desc:"lv:Atlas-SLV3C Centaur-D",
  parts:[
    {names:"Surveyor F", type:"slm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;First liftoff from the Moon;m:1008.3kg;dim:4.27x4.27x3.05m", id:"1967-112A", url:"lpi:www.lpi.usra.edu/lunar/missions/surveyor/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html", icon:"surveyor.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-11-07", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"toi", dt:"1967-11-07", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1967-11-10", loc:"lun:0.46N,1.38W", desc:"Sinus Medii;show:S6:SE"},
    {pt:"", type:"l", dt:"1967-11-17", loc:"lun", desc:"alt:4m;TD 2.5m from original site"},
    {pt:"", type:"tos", dt:"1967-12-14", loc:"lun", desc:"eom"}
]},
zond1967B: {name:"Zond 7K-L1 #5L", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Зонд-4B;[Zond 1967B]", type:"fbm", dest:"lun", stat:"f", ctry:"su", desc:"ag:tsk;fam:7K-L1;m:5680kg;m0:4980kg;dim:9.8x2.7x5.3m;sc:0.75", id:"", url:"ea:www.astronautix.com/craft/soyz7kl1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"7k-l1.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-11-22", loc:"ter:bai:LC-81/24", desc:"fail:Second stage engine malfunction"}
]},
pioneer8: {name:"Pioneer 8", desc:"lv:Delta E1",
  parts:[
    {names:"Pioneer C", type:"obm", dest:"sol", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Pioneer;m:146kg;dim:4.5x4.5x2.6m", id:"1965-123A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer6QL.html;arc:www.nasa.gov/centers/ames/missions/archive/pioneer.html", icon:"pioneer6-9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1967-12-13", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", type:"oi", dt:"1967-12-13", loc:"sol:ho:0.990x1.087aux0.06deg", desc:""},
    {pt:"", type:"tos", dt:"1996-08-22", loc:"so", desc:"eom"}
]},
// --- 1968 --- 9 Missions
surveyor7: {name:"Surveyor 7", desc:"lv:Atlas-SLV3C Centaur-D",
  parts:[
    {names:"Surveyor G", type:"slm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Surveyor;m:1040.1kg;dim:4.27x4.27x3.05m", id:"1968-001A", url:"lpi:www.lpi.usra.edu/lunar/missions/surveyor/;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html", icon:"surveyor.png"}], 
  events:[
    {pt:"", type:"l", dt:"1968-01-07", loc:"ter:cap:LC-36A", desc:""},
    {pt:"", type:"toi", dt:"1968-01-07", loc:"ter:lto", desc:""},
    {pt:"", type:"td", dt:"1968-01-10", loc:"lun:41.01S,11.41W", desc:"Tycho crater outer rim"},
    {pt:"", type:"tos", dt:"1968-02-21", loc:"lun", desc:"eom"}
]},
luna1968A: {name:"Luna E-6LS #112", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-14A;[Luna 1968A]", type:"om", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-6LS;m:~1700kg;dim:1.6x1.5x2.7m", id:"", url:"ea:www.astronautix.com/craft/lunae6ls.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e6lf.png"}], 
  events:[
    {pt:"", type:"l", dt:"1968-02-07", loc:"ter:bai:LC-1", desc:"fail:Third stage premature shutdown"}
]},
zond4: {name:"Zond 4", desc:"lv:Proton-K/Blok-D", stat:"p",
  parts:[
    {names:"Зонд-4;Zond 7K-L1 #6L", type:"test", dest:"ter:heeo", ctry:"su", desc:"ag:tsk;fam:7K-L1;Test Flight;m:5680kg;m0:4980kg;dim:9.8x2.7x5.3m;sc:0.75", id:"1968-013A", url:"nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"7k-l1.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"1968-03-02", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"oi", dt:"1968-03-02", loc:"ter:heeo", desc:"180\u00ba away from Moon"},
    {pt:"", type:"edl", dt:"1968-03-07", loc:"ter", desc:"Self destruct at ~10km;eom"}
]},
luna14: {name:"Luna 14", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Луна-14;Luna E-6LS #113", type:"om", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-6LS;m:1670kg;dim:1.6x1.5x2.7m", id:"1968-027A", url:"ea:www.astronautix.com/craft/lunae6ls.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e6lf.png"}], 
  events:[
    {pt:"", type:"l", dt:"1968-04-07", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1968-04-07", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1968-04-10", loc:"lun:160x870kmx42deg", desc:"per:160mn"},
    {pt:"", type:"los", dt:"1968-06-24", loc:"lun", desc:"eom"}
]},
zond1968A: {name:"Zond 7K-L1 #7L", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Зонд-5A;[Zond 1968A]", type:"fbm", dest:"lun", stat:"f", ctry:"su", desc:"ag:tsk;fam:7K-L1;m:5680kg;m0:4980kg;dim:9.8x2.7x5.3m;sc:0.75", id:"", url:"ea:www.astronautix.com/craft/soyz7kl1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"7k-l1.png"}], 
  events:[
    {pt:"", type:"l", dt:"1968-04-22", loc:"ter:bai:LC-81/24", desc:"fail:Second stage premature shutdown"}
]},
zond5: {name:"Zond 5", desc:"lv:Proton-K/Blok-D", stat:"s", 
  parts:[
    {names:"Зонд-5;Zond 7K-L1 #9L", type:"fbm", dest:"lun",ctry:"su", desc:"ag:tsk;fam:7K-L1;First circumlunar Earth return;Carried turtles, flies, worms, plants, seeds, bacteria;m:5680kg;m0:4980kg;dim:9.8x2.7x5.3m;sc:0.75", id:"1968-076A", url:"ea:www.astronautix.com/craft/soyz7kl1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"7k-l1.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"1968-09-14", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1968-09-14", loc:"ter:lto", desc:""},
    {pt:"", type:"fb", dt:"1968-09-18", loc:"lun:1950km", desc:""},
    {pt:"", type:"edl", dt:"1968-09-21", loc:"ter:32.63S,65.55E", desc:"Indian Ocean;eom"}
]},
apollo7: {name:"Apollo 7", desc:"lv:Saturn IB", stat:"s", 
  parts:[
    {names:"", type:"hm;test", dest:"ter:leo", ctry:"us", desc:"ag:nasa;fam:Apollo;m:14781kg;dim:3.91x3.91x11.03m;sc:0.75", id:"1968-089A", url:"hist:spaceflight.nasa.gov/history/apollo/apollo7/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-7/apollo-7.html", icon:"apollo-csm.png;apollo7.png"}], 
  events:[
    {pt:"", type:"l", dt:"1968-10-11", loc:"ter:cap:LC-34", desc:""},
    {pt:"", type:"oi", dt:"1968-10-11", loc:"ter:232x309km", desc:""},
    {pt:"", type:"imp", dt:"1968-10-18", loc:"ter", desc:"Indian Ocean;s4b"},
    {pt:"", type:"edl", dt:"1968-10-22", loc:"ter:27.533N,64.067W", desc:"200nm SSW of Bermuda;eom;show:A7:SE"}
]},
pioneer9: {name:"Pioneer 9", desc:"lv:Delta E1",
  parts:[
    {names:"Pioneer D", type:"obm", dest:"sol", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Pioneer;m:147kg;dim:4.5x4.5x2.6m", id:"1968-100A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer6QL.html;arc:www.nasa.gov/centers/ames/missions/archive/pioneer.html", icon:"pioneer6-9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1968-11-08", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", type:"oi", dt:"1968-11-08", loc:"sol:ho:0.756x0.990aux0.09deg", desc:""},
    {pt:"", type:"tos", dt:"1983-05", loc:"so", desc:"eom"}
]},
zond6: {name:"Zond 6", desc:"lv:Proton-K/Blok-D", stat:"s", 
  parts:[
    {names:"Зонд-6;Zond 7K-L1 #12L", type:"fbm", dest:"lun", ctry:"su", desc:"ag:tsk;fam:7K-L1;Carried Biological Specimens;m:5680kg;m0:4980kg;dim:9.8x2.7x5.3m;sc:0.75", id:"1968-101A", url:"ea:www.astronautix.com/craft/soyz7kl1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"7k-l1.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"1968-11-10", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1968-11-10", loc:"ter:lto", desc:""},
    {pt:"", type:"fb", dt:"1968-11-14", loc:"lun:2420km", desc:""},
    {pt:"", type:"edl", dt:"1968-11-17", loc:"ter", desc:"fail:Parachute deployment;eom"},      
    {pt:"", type:"imp", dt:"1968-11-17", loc:"ter:45.7N,62.5E", desc:"Kazakhstan;show:Z6:SW"}
]},
apollo8: {name:"Apollo 8", desc:"lv:Saturn V",
  parts:[
    {names:"", type:"hm;om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa;fam:Apollo;First crewed lunar orbiter;m:28817kg;dim:3.91x3.91x11.03m;sc:0.75", id:"1968-118A;1968-118B", url:"hist:spaceflight.nasa.gov/history/apollo/apollo8/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-8/apollo-8.html", icon:"apollo-csm.png;apollo8.png"}], 
  events:[
    {pt:"", type:"l", dt:"1968-12-21", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"1968-12-21", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1968-12-24", loc:"lun:310.6x111.2kmx12deg", desc:""},
    {pt:"", type:"tc", dt:"1968-12-24", loc:"sol:ho:0.923x0.988aux0.5deg", desc:"s4b"},
    {pt:"", type:"sco", dt:"1968-12-24", loc:"lun:110.4x112.3kmx12deg", desc:""},
    {pt:"", type:"toi", dt:"1968-12-25", loc:"ter:eto", desc:""},
    {pt:"", type:"edl", dt:"1968-12-27", loc:"ter:8.125N,165.02W", desc:"1600km SSW of Hawaii;show:A8:SW;eom"}
]},
// --- 1969 --- 20 Missions 
venera5: {name:"Venera 5", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:";Венера-5;Venera 2V #330", type:"pm", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:2V (V-69);m:1130kg;dim:4.0x1.4x3.5m", id:"1969-001A", url:"ea:www.astronautix.com/craft/ven2vv69.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-2v.png"},
    {names:"{Venera 5 Descent Probe}", type:"pm", dest:"ven", stat:"s", ctry:"su", desc:"m:410kg;sc:0.75", icon:"venera-1vp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-01-05", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1969-01-05", loc:"sol:hto:0.72x0.98aux2deg", desc:""},
    {pt:"", type:"ae", dt:"1969-05-16", loc:"ven", desc:"tm:53mn"},
    {pt:"", type:"los", dt:"1969-05-16", loc:"ven", desc:"alt:23.8km;eom"},
    {pt:"", type:"imp", dt:"1969-05-16", loc:"ven:3S,18E", desc:"Guinevere Planitia"}
]},
venera6: {name:"Venera 6", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Венера-6;Venera 2V #331", type:"pm", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:2V (V-69);m:1130kg;dim:4.0x1.4x3.5m", id:"1969-002A", url:"ea:www.astronautix.com/craft/ven2vv69.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-2v.png"},
    {names:"{Venera 6 Descent Probe}", type:"pm", dest:"ven", stat:"s", ctry:"su", desc:"m:410kg;sc:0.75", icon:"venera-1vp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-01-10", loc:"ter:bai:LC-1", desc:""},
    {pt:"", type:"toi", dt:"1969-01-10", loc:"sol:hto:0.71x0.98aux0.2deg", desc:""},
    {pt:"", type:"ae", dt:"1969-05-17", loc:"ven", desc:"tm:51mn"},
    {pt:"", type:"los", dt:"1969-05-17", loc:"ven", desc:"alt:11km;eom"},
    {pt:"", type:"imp", dt:"1969-05-17", loc:"ven:5S,23E", desc:"Guinevere Planitia;show:V6:SE"}
]},
zond1969A: {name:"Zond 7K-L1 #13L", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Зонд-7A;[Zond 1969A]", type:"fbm", dest:"lun", stat:"f", ctry:"su", desc:"ag:tsk;fam:7K-L1;m:5680kg;m0:4980kg;dim:9.8x2.7x5.3m;sc:0.75", id:"", url:"ea:www.astronautix.com/craft/soyz7kl1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"7k-l1.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-01-20", loc:"ter:bai:LC-81/23", desc:"fail:Second stage premature shutdown"}
]},
luna1969A: {name:"Luna E-8 #201", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-15A;[Luna 1969A]", type:"rvm", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-8;m:5590kg;m0:1814kg;dim:3.4x3.3x4.4m;sc:0.3", id:"", url:"ea:www.astronautix.com/craft/lunaye8.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"lunokhod-lander.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-02-19", loc:"ter:bai:LC-81/24", desc:"fail:Payload fairing disintegration"}
]},
zondl1s1: {name:"Zond 7K-L1S #3S", desc:"lv:N-1",
  parts:[
    {names:"Зонд-7К-Л1С", type:"om", dest:"lun", stat:"f", ctry:"su", desc:"ag:tsk;fam:7K-L1S;m:6900kg;dim:2.9x2.9x7.4m;sc:0.6", id:"", url:"ea:www.astronautix.com/craft/soy7kl1a.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"7k-l1s.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-02-21", loc:"ter:bai:LC-110R", desc:"fail:First stage premature shutdown"}
]},
mariner6: {name:"Mariner 6", desc:"lv:Atlas-SLV3C Centaur-D",
  parts:[
    {names:"Mariner Mars 69F", type:"fbm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-69;m:381kg;dim:5.79x5.79x3.35m", id:"1969-014A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/mariner67QL.html;nssdc:nssdc.gsfc.nasa.gov/planetary/mars/mariner.html", icon:"mariner6-7.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-02-24", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"toi", dt:"1969-02-24", loc:"sol:hto:0.990x1.588aux1.9deg", desc:""},
    {pt:"", type:"fb", dt:"1969-07-31", loc:"mar:3431km", desc:""},
    {pt:"", type:"los", dt:"1970-12-23", loc:"sol:hto:1.142x1.754aux1.8deg", desc:"eom"}
]},
apollo9: {name:"Apollo 9", desc:"lv:Saturn V",
  parts:[
    {names:"Gumdrop/Spider", type:"hm;test", dest:"ter:leo", stat:"s", ctry:"us", desc:"ag:nasa;fam:Apollo;m:26801kg,14575kg;dim:4.3x4.1x16.8m", id:"1969-018A;1969-018B", url:"hist:spaceflight.nasa.gov/history/apollo/apollo9/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-9/apollo-9.html", icon:"apollo-csm-lm.png;apollo9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-03-03", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"oi", dt:"1969-03-03", loc:"ter:189.6x192.5km", desc:""},
    {pt:"", type:"oi", dt:"1969-03-03", loc:"sol:ho:0.546x0.991aux0.5deg", desc:"s4b"},
    {pt:"", type:"edl", dt:"1969-03-13", loc:"ter:23.25N,67.933W", desc:"160nm E of Bahamas;eom;show:A9:SE"}
]},
mariner7: {name:"Mariner 7", desc:"lv:Atlas-SLV3C Centaur-D",
  parts:[
    {names:"Mariner Mars 69G", type:"fbm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-69;m:381kg;dim:5.79x5.79x3.35m", id:"1969-030A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/mariner67QL.html;nssdc:nssdc.gsfc.nasa.gov/planetary/mars/mariner.html", icon:"mariner6-7.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-03-27", loc:"ter:cap:LC-36A", desc:""},
    {pt:"", type:"toi", dt:"1969-03-27", loc:"sol:hto:0.971x1.568aux1.6deg", desc:""},
    {pt:"", type:"fb", dt:"1969-08-05", loc:"mar:3430km", desc:""},
    {pt:"", type:"los", dt:"1970-12-28", loc:"sol:hto:1.118x1.670aux1.8deg", desc:"eom"}
]},
mars1969A: {name:"Mars M-69 #521", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Марс-69A;[Mars 1969A]", type:"om", dest:"mar", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:2M (M-69);m:4850kg;dim:7.0x2.5x4.8m;sc:0.6", id:"MARS69A", url:"ea:www.astronautix.com/craft/marsm69.htm", icon:"mars-m69.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-03-27", loc:"ter:bai:LC-81/23", desc:"fail:Third stage premature shutdown"}
]},
mars1969B: {name:"Mars M-69 #522", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Марс-69B;[Mars 1969B]", type:"om", dest:"mar", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:2M (M-69);m:4850kg;dim:7.0x2.5x4.8m;sc:0.6", id:"MARS69B", url:"ea:www.astronautix.com/craft/marsm69.htm", icon:"mars-m69.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-04-02", loc:"ter:bai:LC-81/24", desc:"fail:First stage engine explosion"}
]},
apollo10: {name:"Apollo 10", desc:"lv:Saturn V",
  parts:[
    {names:"Charlie Brown/Snoopy", type:"hm;om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa;fam:Apollo;m:28834kg,13941kg;dim:4.3x4.1x16.8m", id:"1969-043A;1969-043B", url:"hist:spaceflight.nasa.gov/history/apollo/apollo10/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-10/apollo-10.html", icon:"apollo-csm-lm.png;apollo10.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-05-18", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"toi", dt:"1969-05-18", loc:"ter:lto", desc:""},
    {pt:"", type:"tc", dt:"1969-05-21", loc:"sol:ho:0.908x1.017aux0.5deg", desc:"s4b"},
    {pt:"", type:"oi", dt:"1969-05-21", loc:"lun:315.5x110.4km", desc:""},
    {pt:"", type:"imp", dt:"1969-05-22", loc:"lun", desc:"lm;show:0"},
    {pt:"", type:"toi", dt:"1969-05-24", loc:"ter:eto", desc:""},
    {pt:"", type:"edl", dt:"1969-05-26", loc:"ter:15.03S,164.65W", desc:"600km E of American Samoa;eom"}
]},
luna1969C: {name:"Luna E-8-5 #402", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-15B;[Luna 1969C]", type:"srm", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-8-5;m:5725kg;dim:3.3x3.1x3.0m", id:"", url:"ea:www.astronautix.com/craft/lunaye85.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e85.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-06-14", loc:"ter:bai:LC-81/24", desc:"fail:Upper stage ignition"}
]},
zondl1s2: {name:"Zond 7K-L1S #5L", desc:"lv:N-1",
  parts:[
    {names:"Зонд 7К-Л1С", type:"om", dest:"lun", stat:"f", ctry:"su", desc:"ag:tsk;fam:7K-L1S;m:~5900kg;dim:2.9x2.9x7.4m;sc:0.6", id:"", url:"ea:www.astronautix.com/craft/soy7kl1a.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"7k-l1s.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-07-03", loc:"ter:bai:LC-110R", desc:"fail:First stage explosion"}
]},
luna15: {name:"Luna 15", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-15;Luna E-8-5 #401", type:"srm", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-8-5;m:5667kg;dim:3.3x3.1x3.0m;First sample return attempt", id:"1969-058A", url:"ea:www.astronautix.com/craft/lunaye85.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e85.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-07-13", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1969-07-13", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1969-07-16", loc:"lun:16x110kmx127deg", desc:""},
    {pt:"", type:"td", dt:"1969-07-21", loc:"lun", desc:"fail:Crash into mountainside?;eom"},
    {pt:"", type:"imp", dt:"1969-07-21", loc:"lun:17N,60E", desc:"Mare Crisum;show:L15:N"}
]},
apollo11: {name:"Apollo 11", desc:"lv:Saturn V",
  parts:[
    {names:"Columbia/Eagle", type:"hm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa;fam:Apollo;First crewed lunar lander;First lunar sample return;m:28801kg,15065kg;dim:4.3x4.1x16.8m", id:"1969-059A;1969-059B;1969-059C", url:"hist:spaceflight.nasa.gov/history/apollo/apollo11/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-11/apollo-11.html;alsj:www.hq.nasa.gov/office/pao/History/alsj/a11/;pds:an.rsl.wustl.edu/apollo/mainnavSp.aspx?tab=home&m=A11", icon:"apollo-csm-lm.png;apollo11.png"},
{names:"", type:"slm", dest:"lun", stat:"s", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"1969-07-16", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"1969-07-16", loc:"ter:lto", desc:""},
    {pt:"", type:"tc", dt:"1969-07-19", loc:"sol:ho:0.891x1.016aux0.38deg", desc:"s4b"},
    {pt:"", type:"oi", dt:"1969-07-19", loc:"lun:111x314kmx0deg", desc:""},
    {pt:"", type:"sco", dt:"1969-07-19", loc:"lun:101x122kmx0deg", desc:""},
    {pt:"", type:"sep", dt:"1969-07-20", loc:"lun", desc:"csm/lm"},
    {pt:"", type:"td", dt:"1969-07-20", loc:"lun:0.674N,23.473E", desc:"Statio Tranquilitatis;show:A11:E;lm"},
    {pt:"", type:"eva", dt:"1969-07-21", loc:"lun", desc:"1 Walk;tm:2.53hr;rv:800m"},
    {pt:"0", type:"sc", dt:"1969-07-21", loc:"lun", desc:"lm;mat:21.55kg"},
    {pt:"0", type:"l", dt:"1969-07-21", loc:"lun", desc:"lm"},
    {pt:"0", type:"doc", dt:"1969-07-21", loc:"lun", desc:"csm/lm"},
    {pt:"0", type:"toi", dt:"1969-07-22", loc:"ter:eto", desc:""},
    {pt:"0", type:"edl", dt:"1969-07-24", loc:"ter:13.32N,169.1W", desc:"600km SSW of Wake Island;eom:hm"},
    {pt:"1", type:"los", dt:"1969-08-27", loc:"lun", desc:"EASEP: Early Apollo Scientific Experiment Package ;eom"}
]},
zond7: {name:"Zond 7", desc:"lv:Proton-K/Blok-D", stat:"s", 
  parts:[
    {names:"Зонд-7;Zond 7K-L1 #11", type:"fbm", dest:"lun", ctry:"su", desc:"ag:tsk;fam:7K-L1;Carried Turtles;m:5680kg;m0:4980kg;dim:9.8x5.3x2.5m;sc:0.75", id:"1969-067A", url:"ea:www.astronautix.com/craft/soyz7kl1.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"7k-l1.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"1969-08-07", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1969-08-07", loc:"ter:lto", desc:""},
    {pt:"", type:"fb", dt:"1969-08-11", loc:"lun:1984.6km", desc:""},
    {pt:"", type:"edl", dt:"1969-08-14", loc:"ter:53N,63E", desc:"show:Z7:NW;eom"}
]},
pioneere: {name:"Pioneer-E", desc:"lv:Delta L",
  parts:[
    {names:"", type:"obm", dest:"sol", stat:"f", ctry:"us", desc:"ag:nasa,arc;fam:Pioneer;m:147kg;dim:4.5x4.5x2.6m", id:"PIONE", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer6QL.html;arc:www.nasa.gov/centers/ames/missions/archive/pioneer.html", icon:"pioneer6-9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-08-27", loc:"ter:cap:LC-17A", desc:"fail:First stage premature shutdown"}
]},
cosmos300: {name:"Kosmos 300", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Космос-300;Luna E-8-5 #403", type:"srm", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-8-5;m:5725kg;dim:3.3x3.1x3.0m", id:"1969-080A", url:"ea:www.astronautix.com/craft/lunaye85.htm", icon:"luna-e85.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-09-23", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1969-09-23", loc:"ter:lto", desc:"fail:Upper stage ignition"}
]},
cosmos305: {name:"Kosmos 305", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Космос-305;Luna E-8-5 #404", type:"srm", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-8-5;m:5725kg;dim:3.3x3.1x3.0m", id:"1969-092A", url:"ea:www.astronautix.com/craft/lunaye85.htm", icon:"luna-e85.png"}], 
  events:[
    {pt:"", type:"l", dt:"1969-10-22", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1969-10-22", loc:"ter:lto", desc:"fail:Programming error"}
]},
apollo12: {name:"Apollo 12", desc:"lv:Saturn V",
  parts:[
    {names:"Yankee Clipper/Intrepid", type:"hm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa;fam:Apollo;m:28790kg,15116kg;dim:4.3x4.1x16.8m", id:"1969-099A;1969-099B;1969-099C", url:"hist:spaceflight.nasa.gov/history/apollo/apollo12/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-12/apollo-12.html;alsj:www.hq.nasa.gov/office/pao/History/alsj/a12/;pds:an.rsl.wustl.edu/apollo/mainnavSp.aspx?tab=home&m=A12", icon:"apollo-csm-lm.png;apollo12.png"},
{names:"", type:"slm", dest:"lun", stat:"s", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"1969-11-14", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"1969-11-14", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1969-11-18", loc:"lun:116x257kmx32.5deg", desc:""},
    {pt:"", type:"sep", dt:"1969-11-19", loc:"lun", desc:"csm/lm"},
    {pt:"0", type:"td", dt:"1969-11-19", loc:"lun:3.012S,23.422W", desc:"Oceanus Procellarum;lm"},
    {pt:"0", type:"eva", dt:"", loc:"lun", desc:"lm;2 Walks;tm:7.75hr;rv:2.2km"},
    {pt:"0", type:"sc", dt:"1969-11-20", loc:"lun", desc:"lm;mat:21.55kg"},
    {pt:"0", type:"l", dt:"1969-11-20", loc:"lun", desc:"lm"},
    {pt:"0", type:"doc", dt:"1969-11-20", loc:"lun", desc:"csm/lm"},
    {pt:"0", type:"imp", dt:"1969-11-20", loc:"lun:3.94S,21.2W", desc:"Mare Insularum;lmas;show:0"},
    {pt:"0", type:"toi", dt:"1969-11-21", loc:"ter:eto", desc:""},
    {pt:"0", type:"imp", dt:"1969-11-20", loc:"lun:3.94S,21.2W", desc:"lmas;show:0"},
    {pt:"0", type:"edl", dt:"1969-11-24", loc:"ter:15.78S,165.15W", desc:"Near American Samoa;show:A12:E;eom:hm"},
    {pt:"1", type:"tos", dt:"1977-09-30", loc:"lun", desc:"alsep;eom"}
]},
// --- 1970 --- 8 Missions 
luna1970A: {name:"Luna E-8-5 #405", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-16C;[Luna 1970A]", type:"srm", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-8-5;m:5725kg;dim:3.3x3.1x3.0m", id:"", url:"ea:www.astronautix.com/craft/lunaye85.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e85.png"}], 
  events:[
    {pt:"", type:"l", dt:"1970-02-06", loc:"ter:bai:LC-81/23", desc:"fail:Second stage premature shutdown"}
]},
apollo13: {name:"Apollo 13", desc:"lv:Saturn V",
  parts:[
    {names:"Odyssey/Aquarius", type:"hm", dest:"lun", stat:"p", ctry:"us", desc:"ag:nasa;fam:Apollo;Human Altitude Record:400171km;m:28945kg,15196kg;dim:4.3x4.1x16.8m", id:"1970-029A;1970-029B;1970-029C", url:"hist:spaceflight.nasa.gov/history/apollo/apollo13/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-13/apollo-13.html;alsj:www.hq.nasa.gov/office/pao/History/alsj/a13/", icon:"apollo-csm-lm.png;apollo13.png"},
{names:"", type:"slm", dest:"lun", stat:"f", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"1970-04-11", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"1970-04-11", loc:"ter:lto", desc:""},
    {pt:"", type:"ev", dt:"1970-04-14", loc:"lto", desc:"mal:Oxygen Tank Rupture"},
    {pt:"", type:"imp", dt:"1970-04-14", loc:"lun:2.75S,27.86W", desc:"Lansberg B Crater;s4b;show:0"},
    {pt:"", type:"fb", dt:"1970-04-15", loc:"lun:400km", desc:""},
    {pt:"0", type:"edl", dt:"1970-04-17", loc:"ter:21.63S,165.37W", desc:"SE of American Samoa;show:A13:SE;eom"}
]},
venera7: {name:"Venera 7", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Венера-7;Venera 3V #630", type:"slm", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:3V (V-70);First Venus lander;m:1180kg;dim:4.0x1.4x3.5m", id:"1970-060A", url:"rsw:www.russianspaceweb.com/venera7.html;ea:www.astronautix.com/craft/ven3vv70.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-3v.png"},
{names:"{Venera 7 Lander}", type:"slm", dest:"ven", stat:"s", ctry:"su", desc:"m:495kg;sc:0.75", icon:"venera-3vp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1970-08-17", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1970-08-17", loc:"sol:hto:0.69x1.01aux2deg", desc:""},
    {pt:"1", type:"edl", dt:"1970-12-15", loc:"ven", desc:"tm:35mn"},
    {pt:"1", type:"tdn", dt:"1970-12-15", loc:"ven:5S,351E", desc:"Guinevere Planitia-Alpha Regio"},
    {pt:"1", type:"los", dt:"1970-12-15", loc:"ven", desc:"tm:22mn;eom"}
]},
cosmos359: {name:"Kosmos 359", desc:"lv:Molniya 8K78M/Blok-L",
  parts:[
    {names:"Космос-359;Venera 3V #631", type:"slm", dest:"ven", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:3V (V-70);m:~1200kg;dim:4.0x1.4x3.5m", id:"1970-065A", url:"ea:www.astronautix.com/craft/ven3vv70.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-3v.png"}], 
  events:[
    {pt:"", type:"l", dt:"1970-08-22", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1970-08-22", loc:"sol:hto", desc:"fail:Upper stage ignition"}
]},
luna16: {name:"Luna 16", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-16;Luna E-8-5 #406", type:"srm", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-8-5;First robotic sample return;m:5725kg;m0:1880kg;dim:3.3x3.1x3.0m", id:"1970-072A", url:"za:www.zarya.info/Diaries/Luna/Luna16.php;ea:www.astronautix.com/craft/lunaye85.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e85.png"},
    {names:"{Luna 16 Sample Return Capsule}", type:"srm", dest:"lun", stat:"s", ctry:"su", desc:"m:34kg;sc:1", icon:"luna-e85-src.png"}], 
  events:[
    {pt:"", type:"l", dt:"1970-09-12", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1970-09-12", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1970-09-17", loc:"lun:103x118kmx70deg", desc:""},
    {pt:"", type:"td", dt:"1970-09-20", loc:"lun:0.68S,56.3E", desc:"Mare Fecunditatis;show:L16:SE"},
    {pt:"", type:"sc", dt:"1970-09-20", loc:"lun", desc:"mat:101g"},
    {pt:"", type:"l", dt:"1970-09-21", loc:"lun", desc:""},
    {pt:"", type:"edl", dt:"1970-09-24", loc:"ter:47.2N,68.4E", desc:"80km SE of Jezkazgan;eom"}
]},
zond8: {name:"Zond 8", desc:"lv:Proton-K/Blok-D", stat:"s", 
  parts:[
    {names:"Зонд-8;Zond 7K-L1 #14", type:"fbm", dest:"lun", ctry:"su", desc:"ag:tsk;fam:7K-L1;m:5680kg;m0:4980kg;dim:9.8x5.3x2.5m;sc:0.75", id:"1970-088A", url:"ea:www.astronautix.com/craft/soyz7kl1.htm;usgs:astrogeology.usgs.gov/maps/moon-zond8-historical-data-archive;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"7k-l1.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"1970-10-20", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1970-10-20", loc:"ter:lto", desc:""},
    {pt:"", type:"fb", dt:"1970-10-24", loc:"lun:1110.4km", desc:""},
    {pt:"", type:"edl", dt:"1970-10-27", loc:"ter:10S,76E", desc:"eom"}
]},
luna17: {name:"Luna 17", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-17;Lunokhod 1;Luna E-8 #203", type:"rvm", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-8;First lunar rover;m:5600kg;m0:756kg;dim:4.4x2.2x1.9m", id:"1970-095A", url:"za:www.zarya.info/Diaries/Luna/Luna17.php;ea:www.astronautix.com/craft/lunaye8.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"lunokhod.png"}], 
  events:[
    {pt:"", type:"l", dt:"1970-11-10", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1970-11-10", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1970-11-15", loc:"lun", desc:""},
    {pt:"", type:"td", dt:"1970-11-17", loc:"lun:38.238N,35.197W", desc:"Mare Imbrium;show:L17:SW"},
    {pt:"", type:"los", dt:"1971-09-14", loc:"lun:38.315N,35.008W", desc:"rv:9.93km;eom"}
]},
// --- 1971 --- 9 Missions  
apollo14: {name:"Apollo 14", desc:"lv:Saturn V",
  parts:[
    {names:"Kitty Hawk/Antares", type:"hm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa;fam:Apollo;m:29229kg,15277kg;dim:4.3x4.1x16.8m;w:0.45", id:"1971-008A;1971-008B;1971-008C", url:"hist:spaceflight.nasa.gov/history/apollo/apollo14/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-14/apollo-14.html;alsj:www.hq.nasa.gov/office/pao/History/alsj/a14/;pds:an.rsl.wustl.edu/apollo/mainnavSp.aspx?tab=home&m=A14", icon:"apollo-csm-lm.png;apollo14.png"},
{names:"", type:"slm", dest:"lun", stat:"s", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"1971-01-31", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"1971-01-31", loc:"ter:lto", desc:""},
    {pt:"", type:"imp", dt:"1971-02-04", loc:"lun:8.09S,26.02W", desc:"Mare Cognitum;s4b;show:0"},
    {pt:"", type:"oi", dt:"1971-02-04", loc:"lun:108x314km", desc:""},
    {pt:"", type:"sep", dt:"1971-02-05", loc:"lun", desc:"csm/lm"},
    {pt:"0", type:"td", dt:"1971-02-05", loc:"lun:3.645S,17.471W", desc:"Fra Mauro;lm;show:A14:SE"},
    {pt:"0", type:"eva", dt:"", loc:"lun", desc:"2 Walks;tm:9.38hr;rv:3.6km"},
    {pt:"0", type:"sc", dt:"1971-02-05", loc:"lun", desc:"lm;mat:42.28kg"},
    {pt:"0", type:"l", dt:"1971-02-06", loc:"lun", desc:"lm"},
    {pt:"0", type:"doc", dt:"1971-02-06", loc:"lun", desc:"csm/lm"},
    {pt:"0", type:"imp", dt:"1971-02-07", loc:"lun:3.42S,19.67W", desc:"Oceanus Procellarum;lmas;show:0"},
    {pt:"0", type:"toi", dt:"1971-02-07", loc:"ter:eto", desc:""},
    {pt:"0", type:"edl", dt:"1971-02-09", loc:"ter:27.02S,172.65W", desc:"1300km S of American Samoa;show:A14:SE;eom:hm"},
    {pt:"1", type:"tos", dt:"1977-09-30", loc:"lun", desc:"alsep;eom"}
]},
mariner8: {name:"Mariner 8", desc:"lv:Atlas-SLV3C Centaur-D",
  parts:[
    {names:"Mariner 71H", type:"om", dest:"mar", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-71;m:997.9kg;m0:658.8kg;dim:6.89x6.89x2.28m", id:"MARINH", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/mariner89QL.html;nssdc:nssdc.gsfc.nasa.gov/planetary/mars/mariner.html", icon:"mariner9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1971-05-09", loc:"ter:cap:LC-36A", desc:"fail:Attitude control malfunction"}
]},
cosmos419: {name:"Kosmos 419", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Космос-419;Mars M-71S #170", type:"om", dest:"mar", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:3MS (M-71);m:~3400kg;dim:5.9x2.0x3.0m;sc:0.6", id:"1971-042A", url:"ea:www.astronautix.com/craft/marsm71.htm", icon:"mars-m71s.png"}], 
  events:[
    {pt:"", type:"l", dt:"1971-05-10", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1971-05-10", loc:"sol:hto", desc:"fail:Programming error"}
]},
mars2: {name:"Mars 2", desc:"lv:Proton-K/Blok-D", stat:"p",
  parts:[
    {names:"Марс-2;Mars M-71 #171", type:"om", dest:"mar", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4M (M-71);m:4650kg;m0:2265kg;dim:5.9x2.0x4.1m;sc:0.6", id:"1971-045A", url:"ea:www.astronautix.com/craft/marsm71.htm", icon:"mars-m71p.png"},
    {names:"{Mars 2 Lander}", type:"slm", dest:"mar", stat:"f", ctry:"su", desc:"First Mars impact;m:1210kg;sc:0.75", id:"1971-045D", icon:"mars-m71p-dp.png"},
{names:"PROP-M:Terrain Evaluation Device-Mars", type:"rvm", dest:"mar", stat:"f", ctry:"su", desc:"First attempted Mars rover;m:4.3kg;sc:0.75", id:"", icon:"mars-m71p-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"1971-05-19", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1971-05-19", loc:"sol:hto:1.01x1.47aux2.2deg", desc:""},
    {pt:"", type:"sep", dt:"1971-11-27", loc:"so", desc:"op/lp"},
    {pt:"1", type:"td", dt:"1971-11-27", loc:"mar", desc:"lp;fail:Control system malfunction;eom:slm"},
    {pt:"1", type:"imp", dt:"1971-11-27", loc:"mar:44.2S,313.2W", desc:"lp;Hellespontus Montes;show:Mars 2:SW"},
    {pt:"0", type:"oi", dt:"1971-11-27", loc:"mar:1380x24940kmx48.9deg", desc:""},
    {pt:"0", type:"tos", dt:"1972-08-22", loc:"mar", desc:"eom"}
]},
mars3: {name:"Mars 3", desc:"lv:Proton-K/Blok-D", stat:"p",
  parts:[
    {names:"Марс-3;Mars M-71 #172", type:"om", dest:"mar", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4M (M-71);m:4650kg;m0:2265kg;dim:5.9x2.0x4.1m;sc:0.6", id:"1971-049A", url:"ea:www.astronautix.com/craft/marsm71.htm", icon:"mars-m71p.png"},
    {names:"{Mars 3 Lander}", type:"slm", dest:"mar", stat:"p", ctry:"su", desc:"First soft landing on Mars;m:1210kg;sc:0.75", id:"1971-049F", icon:"mars-m71p-dp.png"},
{names:"PROP-M:Terrain Evaluation Device-Mars", type:"rvm", dest:"mar", stat:"f", ctry:"su", desc:"m:4.3kg;sc:0.75", id:"", icon:"mars-m71p-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"1971-05-28", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1971-05-28", loc:"sol:hto:1.01x1.50aux2.2deg", desc:""},
    {pt:"", type:"sep", dt:"1971-12-02", loc:"so", desc:"op/lp"},
    {pt:"1", type:"edl", dt:"1971-12-02", loc:"mar:45.045S,157.977W", desc:"Sirenum Terra;lp;show:Mars 3"},
    {pt:"1", type:"los", dt:"1971-12-02", loc:"mar", desc:"lp;tm:20s;eom:slm"},
    {pt:"0", type:"oi", dt:"1971-12-02", loc:"mar:1530x214500kmx60deg", desc:"op"},
    {pt:"0", type:"tos", dt:"1972-01-07", loc:"mar", desc:"eom"}
]},
mariner9: {name:"Mariner 9", desc:"lv:Atlas-SLV3C Centaur-D",
  parts:[
    {names:"Mariner Mars 71I", type:"om", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-71;First Mars orbiter;m:997.9kg;m0:658.8kg;dim:6.89x6.89x2.28m", id:"1971-051A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/mariner89QL.html;nssdc:nssdc.gsfc.nasa.gov/planetary/mars/mariner.html;pds:pds-imaging.jpl.nasa.gov/portal/mariner9_mission.html", icon:"mariner9.png"}], 
  events:[
    {pt:"", type:"l", dt:"1971-05-30", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"toi", dt:"1971-05-30", loc:"sol:hto:0.99x1.57aux2.2deg", desc:""},
    {pt:"", type:"oi", dt:"1971-11-14", loc:"mar:1398x17915kmx64.34deg", desc:""},
    {pt:"", type:"sco", dt:"1971-12-30", loc:"mar:1650x16860kmx64.34deg", desc:"per:719mn"},
    {pt:"", type:"tos", dt:"1972-10-27", loc:"mar", desc:"eom"}
]},
apollo15: {name:"Apollo 15", desc:"lv:Saturn V",
  parts:[
    {names:"Endeavor/Falcon", type:"hm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa;fam:Apollo;First crewed lunar rover;m:30371kg,16434kg;dim:4.3x4.1x16.8m", id:"1971-063A;1971-063B;1971-063C", url:"hist:spaceflight.nasa.gov/history/apollo/apollo15/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-15/apollo-15.html;alsj:www.hq.nasa.gov/office/pao/History/alsj/a15/;pds:an.rsl.wustl.edu/apollo/mainnavSp.aspx?tab=home&m=A15", icon:"apollo-csm-lm.png;apollo15.png"},
{names:"", type:"slm", dest:"lun", stat:"s", ctry:"us"},
{names:"PFS-1:Particle & Fields Satellite 1", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"m:35.6kg;dim:3.4x3.4x0.8m", id:"1971-063D"}], 
  events:[
    {pt:"", type:"l", dt:"1971-07-26", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"1971-07-26", loc:"ter:lto", desc:""},
    {pt:"", type:"imp", dt:"1971-07-29", loc:"lun:1.51S,11.81W", desc:"Fra Mauro;s4b;show:0"},
    {pt:"", type:"oi", dt:"1971-07-29", loc:"lun:1.05x1.07x154deg", desc:""},
    {pt:"", type:"sep", dt:"1971-07-30", loc:"lun", desc:"csm/lm"},
    {pt:"", type:"td", dt:"1971-07-30", loc:"lun:26.132N,3.634E", desc:"Palus Putredinis, Hadley Rille;lm"},
    {pt:"", type:"eva", dt:"", loc:"lun", desc:"lrv;3 Drives;tm:19.13hr;rv:27.9km;trr:5km"},
    {pt:"", type:"sc", dt:"1971-07-30..1971-08-02", loc:"lun", desc:"lm;mat:77.31kg"},
    {pt:"", type:"l", dt:"1971-08-02", loc:"lun", desc:"lm"},
    {pt:"", type:"doc", dt:"1971-08-02", loc:"lun", desc:"csm/lm"},
    {pt:"", type:"imp", dt:"1971-08-03", loc:"lun:26.36N,0.25E", desc:"Palus Putredinis;lmas;show:0"},
    {pt:"", type:"sep", dt:"1971-08-04", loc:"lun:102.0x141.3kmx151.3deg", desc:"PFS-1"},
    {pt:"", type:"toi", dt:"1971-08-04", loc:"ter:eto", desc:""},
    {pt:"", type:"edl", dt:"1971-08-07", loc:"ter:26.12N,158.13W", desc:"500km N of Hawaii;eom:hm"},
    {pt:"", type:"tos", dt:"1972-02-03", loc:"lun:52x186kmx151.41deg", desc:"PFS-1;eom:om"},
    {pt:"", type:"tos", dt:"1977-09-30", loc:"lun", desc:"alsep;eom"}
]},
luna18: {name:"Luna 18", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-18;Luna E-8-5 #407", type:"srm", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-8-5;m:5725kg;dim:3.3x3.1x3.0m", id:"1971-073A", url:"ea:www.astronautix.com/craft/lunaye85.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e85.png"}], 
  events:[
    {pt:"", type:"l", dt:"1971-09-02", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1971-09-02", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1971-09-07", loc:"lun:1.055x1.058x35deg", desc:""},
    {pt:"", type:"td", dt:"1971-09-11", loc:"lun", desc:"fail:Engine malfunction;eom"},
    {pt:"", type:"imp", dt:"1971-09-11", loc:"lun:3.57N,56.5E", desc:"Mare Fecunditatis;show:L18:E"}
]},
luna19: {name:"Luna 19", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-19;Luna E-8LS #408", type:"om", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-8LS;m:5810kg;dim:3.3x3.2x2.3m;sc:0.3", id:"1971-081A", url:"ea:www.astronautix.com/craft/lunye8ls.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e8ls.png"}], 
  events:[
    {pt:"", type:"l", dt:"1971-09-28", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1971-09-28", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1971-10-03", loc:"lun:134x141kmx40.5deg", desc:"per:121.13mn"},
    {pt:"", type:"sco", dt:"1971-10-06", loc:"lun:126x973kmx40.1deg", desc:""},
    {pt:"", type:"tos", dt:"1972-11-01", loc:"lun:77x385kmx40.68deg", desc:"eom"}
]},
// --- 1972 --- 7 Missions  
luna20: {name:"Luna 20", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-20;Luna E-8-5 #408", type:"srm", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-8-5;m:5725kg;dim:3.3x3.1x3.0m;sc:0.5", id:"1972-007A", url:"ea:www.astronautix.com/craft/lunaye85.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e85p.png"},
    {names:"{Luna 20 Sample Return Capsule}", type:"srm", dest:"lun", stat:"s", ctry:"su", desc:"m:34kg;sc:1", icon:"luna-e85-src.png"}], 
  events:[
    {pt:"", type:"l", dt:"1972-02-14", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1972-02-14", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1972-02-18", loc:"lun:100kmx65deg", desc:""},
    {pt:"", type:"td", dt:"1972-02-21", loc:"lun:3.57N,56.55E", desc:"Mare Fecunditatis;show:L20:NW"},
    {pt:"", type:"sc", dt:"1972-02-22", loc:"lun", desc:"mat:55g"},
    {pt:"", type:"l", dt:"1972-02-23", loc:"lun", desc:""},
    {pt:"", type:"edl", dt:"1972-02-25", loc:"ter:48.1N,67.8E", desc:"40km NW of Jezkazgan;show:L20:SE;eom"}
]},
pioneer10: {name:"Pioneer 10", desc:"lv:Atlas-SLV3C Centaur-D",
  parts:[
    {pt:"pri", names:"Pioneer F", type:"fbm", dest:"jup", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Pioneer;First asteroid belt flythrough;First Jupiter flyby;m:258kg;dim:8.0x5.0x2.02m;sc:0.7", id:"1972-012A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer10QL.html;hist:history.nasa.gov/SP-349/sp349.htm;arc:www.nasa.gov/centers/ames/missions/archive/pioneer.html", icon:"pioneer10-11.png"},
{pt:"ext", names:"{Pioneer plaque}", type:"etm", dest:"ism", stat:"s", ctry:"us", desc:"First escape trajectory", icon:"pioneer-plaque.png"}], 
  events:[
    {pt:"", type:"l", dt:"1972-03-03", loc:"ter:cap:LC-36A", desc:""},
    {pt:"", type:"toi", dt:"1972-03-03", loc:"sol:ho:0.99x5.97aux1.92deg", desc:""},
    {pt:"", type:"enc", dt:"1973-11-06..1974-01-01", loc:"jup", desc:""},
    {pt:"0", type:"fb", dt:"1973-12-04", loc:"jup:2.82x13.8deg", desc:""},
    {pt:"1", type:"tc", dt:"1973-12-04", loc:"sol:et:5.1aux1.74ex3.14deg", desc:"eom:fbm"},
    {pt:"1", type:"tos", dt:"2003-01-23", loc:"et:82.13au", desc:"eom;v:12.15kms;"}
]},
venera8: {name:"Venera 8", desc:"lv:Molniya 8K78M/Blok-MVL",
  parts:[
    {names:"Венера-8;Venera 3V #670", type:"slm", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:3V (V-72);m:1184kg;dim:4.0x1.4x3.5m", id:"1972-021A", url:"ea:www.astronautix.com/craft/ven3vv72.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-3v.png"},
{names:"{Venera 8 Lander}", type:"slm", dest:"ven", stat:"s", ctry:"su", desc:"m:495kg;sc:0.75", icon:"venera-3vp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1972-03-27", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1972-03-27", loc:"sol:hto:0.70x1.00aux2deg", desc:""},
    {pt:"1", type:"edl", dt:"1972-07-22", loc:"ven", desc:"tm:55mn"},
    {pt:"1", type:"tdn", dt:"1972-07-22", loc:"ven:10.7S,335.25E", desc:"Navka Planitia;show:V8:SE"},
    {pt:"1", type:"los", dt:"1972-07-22", loc:"ven", desc:"tm:50mn;eom"}
]},
cosmos482: {name:"Kosmos 482", desc:"lv:Molniya 8K78M/Blok-MVL",
  parts:[
    {names:"Космос-482;Venera 3V #671", type:"slm", dest:"ven", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:3V (V-72);m:~1180kg;dim:4.0x1.4x3.5m", id:"1972-023A", url:"rsw:www.russianspaceweb.com/venera72_kosmos482.html;ea:www.astronautix.com/craft/ven3vv72.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-3v.png"}], 
  events:[
    {pt:"", type:"l", dt:"1972-03-31", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"1972-03-31", loc:"sol:hto", desc:"fail:Upper stage premature shutdown after 125s"}
]},
apollo16: {name:"Apollo 16", desc:"lv:Saturn V",
  parts:[
    {names:"Caspar/Orion", type:"hm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa;fam:Apollo;m:30354kg,16428kg;dim:4.3x4.1x16.8m;w:0.5", id:"1972-031A;1972-031B;1972-031C", url:"hist:spaceflight.nasa.gov/history/apollo/apollo16/index.html;ksc:science.ksc.nasa.gov/history/apollo/apollo-16/apollo-16.html;alsj:www.hq.nasa.gov/office/pao/History/alsj/a16/;pds:an.rsl.wustl.edu/apollo/mainnavSp.aspx?tab=home&m=A16", icon:"apollo-csm-lm.png;apollo16.png"},
{names:"", type:"slm", dest:"lun", stat:"s", ctry:"us"},
{names:"PFS-2:Particle & Fields Satellite 2", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"m:38kg;dim:3.4x3.4x0.8m", id:"1972-031D"}], 
  events:[
    {pt:"", type:"l", dt:"1972-04-16", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"1972-04-16", loc:"ter:lto", desc:""},
    {pt:"", type:"imp", dt:"1972-04-19", loc:"lun:1.921N,24.723W", desc:"Mare Insularum;s4b;show:0"},
    {pt:"", type:"oi", dt:"1972-04-19", loc:"lun:1.05x1.07x168deg", desc:""},
    {pt:"", type:"sep", dt:"1972-04-20", loc:"lun", desc:"csm/lm"},
    {pt:"", type:"td", dt:"1972-04-21", loc:"lun:8.973S,15.50E", desc:"Descartes Highlands;lm;show:A16:SE"},
    {pt:"", type:"eva", dt:"", loc:"lun", desc:"lrv;3 Drives;tm:20.23hr;rv:26.7km;trr:4.5km"},
    {pt:"0", type:"sc", dt:"1972-04-21..1972-04-24", loc:"lun", desc:"lm;mat:95.71kg"},
    {pt:"0", type:"l", dt:"1972-04-24", loc:"lun", desc:"lm"},
    {pt:"0", type:"doc", dt:"1972-04-24", loc:"lun", desc:"csm/lm"},
    {pt:"0", type:"sep", dt:"1972-04-24", loc:"lun:90x130.3kmx169.3deg", desc:"PFS-2"},
  //{pt:"", type:"imp", dt:"1972-04-24", loc:"lun:?", desc:"LM"},
    {pt:"0", type:"toi", dt:"1972-04-25", loc:"ter:eto", desc:""},
    {pt:"0", type:"edl", dt:"1972-04-27", loc:"ter:0.72S,156.22W", desc:"300km SE of Christmas Island;eom:hm"},
    {pt:"2", type:"imp", dt:"1972-05-29", loc:"lun:10.16N,111.94E", desc:"Lobachevskiy Crater;PFS-2;show:0;eom:om"},
    {pt:"1", type:"tos", dt:"1977-09-30", loc:"lun", desc:"alsep;eom"}
]},
soyuzl3: {name:"Soyuz 7K-LOK #6A", desc:"lv:N-1",
  parts:[
    {names:"Союз-7К-ЛОК:Лунный Орбитальный Корабль;Soyuz L3", type:"om", dest:"lun", stat:"f", ctry:"su", desc:"ag:tsk;fam:7K-LOK;m:~7500kg;dim:2.9x2.9x10.1m;sc:0.6", id:"", url:"ea:www.astronautix.com/craft/soy7klok.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"7k-lok.png"}], 
  events:[
    {pt:"", type:"l", dt:"1972-11-23", loc:"ter:bai:LC-110L", desc:"fail:First stage explosion"}
]},
apollo17: {name:"Apollo 17", desc:"lv:Saturn V",
  parts:[
    {names:"America/Challenger", type:"hm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa;fam:Apollo;m:30320kg,16448kg;dim:4.3x4.1x16.8m", id:"1972-096A;1972-096B;1972-096C", url:"hist:spaceflight.nasa.gov/history/apollo/apollo17/index.html;KSC:science.ksc.nasa.gov/history/apollo/apollo-17/apollo-17.html;alsj:www.hq.nasa.gov/office/pao/History/alsj/a11/;pds:an.rsl.wustl.edu/apollo/mainnavSp.aspx?tab=home&m=A17;A17:apollo17.org", icon:"apollo-csm-lm.png;apollo17.png"},
{names:"", type:"slm", dest:"lun", stat:"s", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"1972-12-07", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"1972-12-07", loc:"ter:lto", desc:""},
    {pt:"", type:"imp", dt:"1972-12-10", loc:"lun:4.21S,12.31W", desc:"s4b;show:0"},
    {pt:"", type:"oi", dt:"1972-12-10", loc:"lun:1.05x1.07x159deg", desc:""},
    {pt:"", type:"sep", dt:"1972-12-11", loc:"lun", desc:"csm/lm"},
    {pt:"", type:"td", dt:"1972-12-11", loc:"lun:20.191N,30.772E", desc:"Taurus-Littrow;lm"},
    {pt:"", type:"eva", dt:"", loc:"lun", desc:"lrv;3 Drives;tm:22.07hr;rv:35.74km;trr:7.5km"},
    {pt:"0", type:"sc", dt:"1972-12-11..1972-12-14", loc:"lun", desc:"lm;mat:110.52kg"},
    {pt:"0", type:"l", dt:"1972-12-14", loc:"lun", desc:"lm"},
    {pt:"0", type:"doc", dt:"1972-12-14", loc:"lun", desc:"CSM/LM"},
    {pt:"0", type:"imp", dt:"1972-12-14", loc:"lun:19.96N,30.50E", desc:"Taurus Littrow;lmas;show:0"},
    {pt:"0", type:"toi", dt:"1972-12-16", loc:"ter:eto", desc:""},
    {pt:"0", type:"edl", dt:"1972-12-19", loc:"ter: 17.88S,166.12W", desc:"650km SE of Samoa;show:A17:SE;eom:hm"},
    {pt:"1", type:"tos", dt:"1977-09-30", loc:"lun", desc:"alsep;eom"}
]},
// --- 1973 --- 8 Missions  
luna21: {name:"Luna 21", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-21;Lunokhod 2;Luna E-8 #204", type:"rvm", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-8;m:5950kg;m0:836kg;;dim:4.4x2.2x1.9", id:"1973-001A", url:"za:www.zarya.info/Diaries/Luna/Luna21.php;ea:www.astronautix.com/craft/lunaye8.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"lunokhod2.png"}], 
  events:[
    {pt:"", type:"l", dt:"1973-01-08", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1973-01-08", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1973-01-12", loc:"lun:90x110kmx62deg", desc:""},
    {pt:"", type:"td", dt:"1973-01-15", loc:"lun:25.85N,30.45E", desc:"Le Monnier Crater"},
    {pt:"", type:"los", dt:"1973-05-09", loc:"lun:25.47N,30.54E", desc:"rv:39km;eom"}
]},
pioneer11: {name:"Pioneer 11", desc:"lv:Atlas-SLV3D Centaur-D1A",
  parts:[
    {names:"Pioneer G", type:"fbm", dest:"jup", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Pioneer;First Saturn flyby;m:258.5kg;dim:8.0x5.0x2.02m;sc:0.7", id:"1973-019A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer10QL.html;hist:history.nasa.gov/SP-349/sp349.htm;arc:www.nasa.gov/centers/ames/missions/archive/pioneer.html", icon:"pioneer10-11.png"},
{type:"fbm", dest:"sat", stat:"s", ctry:"us"},
{names:"{Pioneer plaque}", pt:"ext", type:"etm", dest:"ism", stat:"s", ctry:"us", icon:"pioneer-plaque.png"}], 
  events:[
    {pt:"", type:"l", dt:"1973-04-06", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"toi", dt:"1973-04-06", loc:"sol:ho:1.0x6.01aux1.3deg", desc:""},
    {pt:"0", type:"enc", dt:"1974-11-03..1975-01-01", loc:"jup", desc:""},
    {pt:"0", type:"fb", dt:"1974-12-03", loc:"jup:1.6x51.8deg", desc:"eom:fbm:jup"},
    {pt:"0", type:"tc", dt:"1974-12-03", loc:"sol:ho:3.72x36.16aux15.7deg", desc:""},
    {pt:"0", type:"enc", dt:"1979-07-31..1979-10-05", loc:"sat", desc:""},
    {pt:"0", type:"fb", dt:"1979-09-01", loc:"sat:1.34x10deg", desc:"eom:fbm:sat"},
    {pt:"1", type:"tc", dt:"1979-09-01", loc:"sol:et:9.34aux12.6deg", desc:""},
    {pt:"1", type:"los", dt:"1995-09-30", loc:"et:44.07au", desc:"eom;v:11.66kms"}
]},
explorer49: {name:"Explorer 49", desc:"lv:Delta 1913",
  parts:[
    {names:"RAE-B:Radio Astronomy Explorer B", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,gsfc;fam:Explorer;Radio Astromony;m:330.2kg;dim:458x258x37m;sc:1", id:"1973-039A", url:"sse:solarsystem.nasa.gov/missions/profile.cfm?Sort=Target&Target=Moon&MCode=Explorer_33", icon:"rae-b.png"}], 
  events:[
    {pt:"", type:"l", dt:"1973-06-10", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", type:"oi", dt:"1973-06-15", loc:"lun:1123x1334kmx61.3deg", desc:""},
    {pt:"", type:"los", dt:"1977-08", loc:"lun", desc:"eom"}
]},
mars4: {name:"Mars 4", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Марс-4;Mars M-73S #52S", type:"om", dest:"mar", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:3MS (M-73);m:3440kg;m0:2270kg;dim:5.9x2.0x3.0m;sc:0.6", id:"1973-047A", url:"ea:www.astronautix.com/craft/marsm73.htm", icon:"mars-m73s.png"}], 
  events:[
    {pt:"", type:"l", dt:"1973-07-21", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1973-07-21", loc:"sol:hto:1.02x1.63aux2.2deg", desc:""},
    {pt:"", type:"oi", dt:"1974-02-10", loc:"mar", desc:"fail:Control system malfunction"},
    {pt:"", type:"fb", dt:"1974-02-10", loc:"mar:2200km", desc:""},
    {pt:"", type:"los", dt:"1974-04", loc:"sol:ho:1.02x1.63aux2.2deg", desc:"eom"}
]},
mars5: {name:"Mars 5", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Марс-5;Mars M-73S #53S", type:"om", dest:"mar", stat:"p", ctry:"su", desc:"ag:lav,iki;fam:3MS (M-73);m:3440kg;m0:2270kg;dim:5.9x2.0x3.0m;sc:0.6", id:"1973-049A", url:"ea:www.astronautix.com/craft/marsm73.htm", icon:"mars-m73s.png"}], 
  events:[
    {pt:"", type:"l", dt:"1973-07-25", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1973-07-25", loc:"sol:hto:1.01x1.65aux2.2deg", desc:""},
    {pt:"", type:"oi", dt:"1974-02-12", loc:"mar:1755x32555kmx35.33deg", desc:""},
    {pt:"", type:"los", dt:"1974-02-28", loc:"mar", desc:"fail:Slow spacecraft depressurization"}
]},
mars6: {name:"Mars 6", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Марс-6;Mars M-73P #50P", type:"slm", dest:"mar", stat:"p", ctry:"su", desc:"ag:lav,iki;fam:3MP (M-73);m:3260kg;dim:5.9x2.0x4.1m", id:"1973-052A", url:"ea:www.astronautix.com/craft/marsm73.htm", icon:"mars-m73p.png"},
    {names:"{Mars 6 Lander}", desc:"m:355kg;sc:0.75", icon:"mars-m73l.png"}], 
  events:[
    {pt:"", type:"l", dt:"1973-08-05", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1973-08-05", loc:"sol:hto:1.01x1.67aux2.2deg", desc:""},
    {pt:"", type:"sep", dt:"1974-03-12", loc:"mar", desc:"bus/lp"},
    {pt:"0", type:"fb", dt:"1974-03-12", loc:"mar:1600km", desc:"bus"},
    {pt:"1", type:"edl", dt:"1974-03-12", loc:"mar", desc:"lp;tm:224s;fail:Control system malfunction;los"},
    {pt:"1", type:"imp", dt:"1974-03-12", loc:"mar:23.90S,19.42W", desc:"Margaritifer Terra;lp;eom:slm;show:Mars 6"},
    {pt:"0", type:"tc", dt:"1974-03-12", loc:"sol:ho:1.01x1.67aux2.2deg", desc:"bus"}
]},
mars7: {name:"Mars 7", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Марс-7;Mars M-73P #51P", type:"slm", dest:"mar", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:3MP (M-73);m:3260kg;dim:5.9x2.0x4.1m", id:"1973-053A", url:"ea:www.astronautix.com/craft/marsm73.htm", icon:"mars-m73p.png"},
    {names:"{Mars 7 Lander}", desc:"m:355kg;sc:0.75", icon:"mars-m73l.png"}], 
  events:[
    {pt:"", type:"l", dt:"1973-08-09", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1973-08-09", loc:"sol:hto:1.01x1.69aux2.2deg", desc:""},
    {pt:"", type:"sep", dt:"1974-03-09", loc:"mar", desc:"bus/lp"},
    {pt:"0", type:"fb", dt:"1974-03-09", loc:"mar", desc:"bus"},
    {pt:"1", type:"edl", dt:"1974-03-09", loc:"mar", desc:"lp;fail:Attitude control error at separation;eom"},
    {pt:"1", type:"fb", dt:"1974-03-09", loc:"mar:1300km", desc:"lp"},
    {pt:"0", type:"tc", dt:"1974-03-09", loc:"sol:ho:1.01x1.69aux2.2deg", desc:"bus;lp"},
    {pt:"0", type:"los", dt:"1974-03-25", loc:"sol:ho", desc:"bus"}
]},
mariner10: {name:"Mariner 10", desc:"lv:Atlas-SLV3D Centaur-D1A",
  parts:[
    {names:"Mariner Venus/Mercury 73J", type:"fbm", dest:"ven", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Mariner-73;First gravity assist;First Mercury flyby;m:502.9kg;dim:8.0x1.4x3.7m;sc:0.75", id:"1973-085A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/mariner10QL.html;hist:history.nasa.gov/SP-424/sp424.htm;pds:pds-imaging.jpl.nasa.gov/portal/mariner10_mission.html", icon:"mariner10.png"},
{names:"", type:"fbm", dest:"mer", stat:"s", ctry:"us", desc:"First Mercury flyby"}], 
  events:[
    {pt:"", type:"l", dt:"1973-11-03", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"toi", dt:"1973-11-03", loc:"sol:hto:0.70x1.11aux2.6deg", desc:""},
    {pt:"", type:"fb", dt:"1974-02-05", loc:"ven:5768km", desc:"ga"},
    {pt:"", type:"tc", dt:"1974-02-05", loc:"sol:ho:0.387x0.839aux2.6deg", desc:"ga"},
    {pt:"", type:"fb", dt:"1974-03-29", loc:"mer:704km", desc:""},
    {pt:"", type:"fb", dt:"1974-09-21", loc:"mer:48069km", desc:""},
    {pt:"", type:"fb", dt:"1975-03-16", loc:"mer:327km", desc:""},
    {pt:"", type:"los", dt:"1975-03-24", loc:"sol:ho:0.47x0.76au", desc:"eom"}
]},
// --- 1974 --- 3 Missions  
luna22: {name:"Luna 22", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-22;Luna E-8LS #220", type:"om", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-8LS;m:5835kg;dim:3.3x3.2x2.3m;sc:0.3", id:"1974-037A", url:"ea:www.astronautix.com/craft/lunye8ls.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e8ls.png"}], 
  events:[
    {pt:"", type:"l", dt:"1974-05-29", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1974-05-30", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1974-06-02", loc:"lun:25x244kmx19.35deg", desc:""},
    {pt:"", type:"sco", dt:"1974-06-13", loc:"lun:181x299kmx19.5deg", desc:""},
    {pt:"", type:"ev", dt:"1975-09-02", loc:"lun", desc:"Fuel depletion"},
    {pt:"", type:"tos", dt:"1975-11-11", loc:"lun:171x1437kmx19.5deg", desc:"eom;per:192mn"}
    //{pt:"", type:"imp", dt:"1975-11-02", loc:"lun", desc:""}
]},
luna23: {name:"Luna 23", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-23;Luna E-8-5M #410", type:"srm", dest:"lun", stat:"p", ctry:"su", desc:"ag:lav,iki;fam:E-8-5M;m:5795kg;m0:4800kg;dim:3.3x3.1x3.1m", id:"1974-084A", url:"ea:www.astronautix.com/craft/lunye85m.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e85m.png"}], 
  events:[
    {pt:"", type:"l", dt:"1974-10-28", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1974-10-28", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1974-11-02", loc:"lun:104x94kmx138deg", desc:""},
    {pt:"", type:"td", dt:"1974-11-06", loc:"lun:12.69N,62.28E", desc:"Mare Crisium;fail:Drill system damage;show:L23:NE"},
    {pt:"", type:"los", dt:"1974-11-09", loc:"lun", desc:""}
]},
helios1: {name:"Helios 1", desc:"lv:Titan IIIE Centaur D1T",
  parts:[
    {names:"Helios A", type:"obm", dest:"sol", stat:"s", ctry:"us;de", desc:"ag:nasa,gsfc,dfvlr;m:370kg;dim:2.77x2.77x2.18m", id:"1974-097A", url:"hp:www.mps.mpg.de/en/projekte/helios/", icon:"helios.png"}], 
  events:[
    {pt:"", type:"l", dt:"1974-12-10", loc:"ter:cap:LC-41", desc:""},
    {pt:"", type:"oi", dt:"1974-12-10", loc:"sol:ho:0.309x0.985aux0deg", desc:""},
    {pt:"", type:"tos", dt:"1985-02-18", loc:"so", desc:"eom"}
]},
// --- 1975 --- 5 Missions  
venera9: {name:"Venera 9", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Венера-9;Venera 4V-1 #660", type:"om", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4V;First Venus orbiter;m:4936kg;dim:5.7x2.4x5.1m", id:"1975-050A", url:"rsw:www.russianspaceweb.com/venera75.html;ea:www.astronautix.com/craft/venra4v1.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-4v1s.png"},
{names:"{Venera 9 Lander}", type:"slm", dest:"ven", stat:"s", ctry:"su", id:"1975-050D", url:"", desc:"m:660kg;sc:0.75;First images from the surface of Venus", icon:"venera-4v1p.png"}], 
  events:[
    {pt:"", type:"l", dt:"1975-06-08", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1975-06-08", loc:"sol:hto:0.72x1.02aux2.3deg", desc:""},
    {pt:"", type:"sep", dt:"1975-10-20", loc:"ven", desc:"op/lp"},
    {pt:"0", type:"oi", dt:"1975-10-22", loc:"ven:1510x111700kmx34.14deg", desc:"op"},
    {pt:"1", type:"edl", dt:"1975-10-22", loc:"ven", desc:"lp"},
    {pt:"1", type:"tdn", dt:"1975-10-22", loc:"ven:31.01N,291.64E", desc:"Beta Regio;lp"},
    {pt:"1", type:"los", dt:"1975-10-22", loc:"ven", desc:"tm:53mn;eom:slm"},
    {pt:"0", type:"los", dt:"1976-03-22", loc:"ven", desc:"op;eom"}
]},
venera10: {name:"Venera 10", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Венера-10;Venera 4V-1 #661", type:"om", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4V;m:5033kg;dim:5.7x2.4x5.1m", id:"1975-054A", url:"rsw:www.russianspaceweb.com/venera75.html;ea:www.astronautix.com/craft/venra4v1.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-4v1s.png"},
{names:"{Venera 10 Lander}", type:"slm", dest:"ven", stat:"s", ctry:"su", id:"1975-054D", url:"", desc:"sc:0.75", icon:"venera-4v1p.png"}], 
  events:[
    {pt:"", type:"l", dt:"1975-06-14", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1975-06-14", loc:"sol:hto:0.72x1.02aux2.3deg", desc:""},
    {pt:"", type:"sep", dt:"1975-10-23", loc:"ven", desc:"op/lp"},
    {pt:"0", type:"oi", dt:"1975-10-25", loc:"ven:1620x113900kmx29.5deg", desc:"op"},
    {pt:"1", type:"edl", dt:"1975-10-25", loc:"ven", desc:"lp"},
    {pt:"1", type:"tdn", dt:"1975-10-25", loc:"ven:15.42N,291.51E", desc:"Beta Regio;lp"},
    {pt:"1", type:"los", dt:"1975-10-25", loc:"ven", desc:"tm:65mn;eom:slm"},
    {pt:"0", type:"los", dt:"1976-06", loc:"ven", desc:"op;eom"}
]},
viking1: {name:"Viking 1", desc:"lv:Titan IIIE Centaur D1T",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Viking;m:3527kg;dim:9.75x9.75x3.29m;sc:0.75", id:"1975-075A", url:"nssdc:nssdc.gsfc.nasa.gov/planetary/viking.html;hist:history.nasa.gov/SP-441/cover.htm;pds:pds-imaging.jpl.nasa.gov/portal/vikingo_mission.html", icon:"viking-o.png"},
{names:"{Viking 1 Lander}", type:"slm", dest:"mar", stat:"s", ctry:"us", desc:"m:First successful Mars lander;First images and soil analysis from Mars surface", id:"1975-075C", url:"hist:history.nasa.gov/SP-425/cover.htm;pds:pds-imaging.jpl.nasa.gov/portal/vikingl_mission.html", icon:"viking-l.png"}], 
  events:[
    {pt:"", type:"l", dt:"1975-08-20", loc:"ter:cap:LC-41", desc:""},
    {pt:"", type:"toi", dt:"1975-08-20", loc:"sol:hto:1.003x1.672aux4.5deg", desc:""},
    {pt:"", type:"oi", dt:"1976-06-19", loc:"mar:1513x32600kmx37.9deg", desc:""},
    {pt:"", type:"sep", dt:"1976-07-20", loc:"mar", desc:"op/lp"},
    {pt:"1", type:"edl", dt:"1976-07-20", loc:"mar:22.533N,48.264W", desc:"Chryse Planitia;Mutch Memorial Station;lp;show:Viking1:NW"},
    {pt:"0", type:"sco", dt:"1976-09-11", loc:"mar:1500kmx39deg", desc:"op"},
    {pt:"0", type:"fb", dt:"1977-02-20", loc:"phob:88km", desc:"op"},
    {pt:"0", type:"sco", dt:"1977-03-11", loc:"mar:300kmx39deg", desc:"op"},
    {pt:"0", type:"tos", dt:"1980-08-17", loc:"mar:411x56275kmx38deg", desc:"op;eom:om"},
    {pt:"1", type:"los", dt:"1982-11-13", loc:"mar", desc:"lp;eom"}
]},
viking2: {name:"Viking 2", desc:"lv:Titan IIIE Centaur D1T",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Viking;m:3527kg;dim:9.75x9.75x3.29m;sc:0.75", id:"1975-083A", url:"nssdc:nssdc.gsfc.nasa.gov/planetary/viking.html;hist:history.nasa.gov/SP-441/cover.htm;pds:pds-imaging.jpl.nasa.gov/portal/vikingo_mission.html", icon:"viking-o.png"},
{names:"{Viking 2 Lander}", type:"slm", dest:"mar", stat:"s", ctry:"us", desc:"", id:"1975-083C", url:"hist:history.nasa.gov/SP-425/cover.htm;pds:pds-imaging.jpl.nasa.gov/portal/vikingl_mission.html", icon:"viking-l.png"}], 
  events:[
    {pt:"", type:"l", dt:"1975-09-09", loc:"ter:cap:LC-41", desc:""},
    {pt:"", type:"toi", dt:"1975-09-09", loc:"sol:hto:1.006x1.669aux2.9deg", desc:""},
    {pt:"", type:"oi", dt:"1976-08-07", loc:"mar:1502x35728kmx55.6deg", desc:""},
    {pt:"", type:"sco", dt:"1976-08-27", loc:"mar:1500kmx55.4deg", desc:""},
    {pt:"", type:"sep", dt:"1976-09-03", loc:"mar", desc:"op/lp"},
    {pt:"1", type:"edl", dt:"1976-09-03", loc:"mar:48.039N,226.032W", desc:"Utopia Planitia;Stoffen Memorial Station;lp;show:Viking2:NW"},
    {pt:"0", type:"sco", dt:"1976-12-20", loc:"mar:750kmx80.1deg", desc:"op"},
    {pt:"0", type:"fb", dt:"1977-10-15", loc:"deim:23km", desc:"op"},
    {pt:"0", type:"sco", dt:"1977-10-23", loc:"mar:300kmx80.3deg", desc:"op"},
    {pt:"0", type:"tos", dt:"1978-07-25", loc:"mar:302x33240kmx80.3deg", desc:"op;eom:om"},
    {pt:"1", type:"los", dt:"1980-04-12", loc:"mar", desc:"lp;eom"}
]},
luna1975A: {name:"Luna E-8-5M #412", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-24A;[Luna 1975A]", type:"srm", dest:"lun", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:E-8-5M;m:5795kg;dim:3.3x3.1x3.1m", id:"", url:"ea:www.astronautix.com/craft/lunye85m.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/tent_launch.html", icon:"luna-e85m.png"}], 
  events:[
    {pt:"", type:"l", dt:"1975-10-16", loc:"ter:bai:LC-81/23", desc:"fail:Upper stage ignition"}
]},
// --- 1976 --- 2 Missions
helios2: {name:"Helios 2", desc:"lv:Titan IIIE Centaur D1T",
  parts:[
    {names:"Helios B", type:"obm", dest:"sol", stat:"s", ctry:"us;de", desc:"ag:nasa,dfvlr;First close solar approach;m:370kg;dim:2.77x2.77x2.18m", id:"1976-003A", url:"hp:www.mps.mpg.de/en/projekte/helios/", icon:"helios.png"}], 
  events:[
    {pt:"", type:"l", dt:"1976-01-15", loc:"ter:cap:LC-41", desc:""},
    {pt:"", type:"oi", dt:"1976-01-15", loc:"sol:ho:0.280x0.995aux0deg", desc:""},
    {pt:"", type:"tos", dt:"1979-12-23", loc:"so", desc:"eom"}
]},
luna24: {name:"Luna 24", desc:"lv:Proton-K/Blok-D",
  parts:[
    {names:"Луна-24;Luna E-8-5M #413", type:"srm", dest:"lun", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:E-8-5M;m:5795kg;m0:4800kg;dim:3.3x3.1x3.1m", id:"1976-081A", url:"rsw:www.russianspaceweb.com/luna24.html;ea:www.astronautix.com/craft/lunye85m.htm;nssdc:nssdc.gsfc.nasa.gov/planetary/lunar/lunarussr.html", icon:"luna-e85m.png"},
    {names:"{Luna 24 Sample Return Capsule}", type:"srm", dest:"lun", stat:"s", ctry:"su", desc:"m:34kg;sc:1", icon:"luna-e85-src.png"}], 
  events:[
    {pt:"", type:"l", dt:"1976-08-09", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1976-08-09", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"1976-08-14", loc:"lun:115kmx120deg", desc:""},
    {pt:"", type:"td", dt:"1976-08-18", loc:"lun:12.75N,62.2E", desc:"Mare Crisium;show:L24:E"},
    {pt:"", type:"sc", dt:"1976-08-18", loc:"lun", desc:"mat:170.1g"},
    {pt:"", type:"l", dt:"1976-08-19", loc:"lun", desc:""},
    {pt:"", type:"edl", dt:"1976-08-22", loc:"ter:60N,76E", desc:"200km SE of Surgut;eom"}
]},
// --- 1977 --- 2 Missions   
voyager2: {name:"Voyager 2", desc:"lv:Titan IIIE Centaur D1T", stat:"o",
  parts:[
    {names:"Mariner Jupiter/Saturn B", type:"fbm", dest:"jup", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:VGR77,Flagship;m:2020kg;m0:808g;dim:7.6x3.7x4.7m;w:0.16", id:"1977-076A", url:"hp:voyager.jpl.nasa.gov/;tps:www.planetary.org/explore/resource-library/voyager-mission-status.html;pds:pds-imaging.jpl.nasa.gov/portal/voyager_mission.html", icon:"voyager1-2.png"},
{type:"fbm", dest:"sat", stat:"s", ctry:"us"},
{type:"fbm", dest:"ura", stat:"s", ctry:"us", desc:"First Uranus flyby"},
{type:"fbm", dest:"nep", stat:"s", ctry:"us", desc:"First Neptune flyby"},
{names:"Voyager Interstellar Mission", type:"etm", dest:"ism", stat:"o", ctry:"us", url:"tw:twitter.com/NASAVoyager2", icon:"voyager-disk.png"}], 
  events:[
    {pt:"", type:"l", dt:"1977-08-20", loc:"ter:cap:LC-41", desc:""},
    {pt:"", type:"toi", dt:"1977-08-20", loc:"sol:ho:1.003x8.57aux4.83deg", desc:""},
    {pt:"0", type:"enc", dt:"1979-04-24..1979-08-05", loc:"jup", desc:""},
    {pt:"0", type:"fb", dt:"1979-07-09", loc:"jup:10.11x6.91deg", desc:"eom:fbm:jup"},
    {pt:"1", type:"enc", dt:"1981-06-05..1981-09-25", loc:"sat", desc:""},
    {pt:"1", type:"fb", dt:"1981-08-05", loc:"sat:2.67x6.9deg", desc:"eom:fbm:sat"},
    {pt:"2", type:"enc", dt:"1985-11-04..1986-02-25", loc:"ura", desc:""},
    {pt:"2", type:"fb", dt:"1986-01-24", loc:"ura:4.19x11.23deg", desc:"eom:fbm:ura"},
    {pt:"3", type:"enc", dt:"1989-06-05..1989-10-02", loc:"nep", desc:""},
    {pt:"3", type:"fb", dt:"1989-08-25", loc:"nep:1.18x116deg", desc:""},
    {pt:"4", type:"tc", dt:"1989-08-25", loc:"sol:et:30.06aux6.28ex78.8deg", desc:""},
    {pt:"3", type:"fb", dt:"1989-08-25", loc:"trit:39800km", desc:"eom:fbm:nep;Targeted flyby"},
    {pt:"4", type:"obs", dt:"1990-02-14", loc:"et:32au", desc:"Solar System Family Portrait"},
    {pt:"4", type:"ft", dt:"2007-08", loc:"sol:et:84au", desc:"Termination Shock"},
    {pt:"4", type:"tr", dt:"2018-11-05", loc:"et:119.7au", desc:"isp"},
    {pt:"4", type:"nom", dt:"2030-12-31", loc:"et", desc:"?;Power depletion"}
]},
voyager1: {name:"Voyager 1", desc:"lv:Titan IIIE Centaur D1T", stat:"o",
  parts:[
    {names:"Mariner Jupiter/Saturn A", type:"fbm", dest:"jup", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:VGR77,Flagship;m:2080kg;m0:808g;dim:7.6x3.7x4.7m", id:"1977-084A", url:"hp:voyager.jpl.nasa.gov/;tps:www.planetary.org/explore/resource-library/voyager-mission-status.html;pds:pds-imaging.jpl.nasa.gov/portal/voyager_mission.html", icon:"voyager1-2.png"},
{type:"fbm", dest:"sat", stat:"s", ctry:"us"},
{names:"Voyager Interstellar Mission", type:"etm", dest:"ism", stat:"o", ctry:"us", desc:"Farthest human-made object;First probe in interstellar space", url:"tw:twitter.com/NASAVoyager", icon:"voyager-disk.png"}], 
  events:[
    {pt:"", type:"l", dt:"1977-09-05", loc:"ter:cap:LC-41", desc:""},
    {pt:"", type:"toi", dt:"1977-09-05", loc:"sol:ho:1.0x8.96aux1.03deg", desc:""},
    {pt:"0", type:"enc", dt:"1979-01-04..1979-04-13", loc:"jup", desc:""},
    {pt:"0", type:"fb", dt:"1979-03-05", loc:"jup:4.89x3.98deg", desc:"eom:fbm:jup"},
    {pt:"1", type:"enc", dt:"1980-08-22..1980-12-14", loc:"sat", desc:""},
    {pt:"1", type:"fb", dt:"1980-11-12", loc:"tita:6490km", desc:"Targeted flyby"},
    {pt:"1", type:"fb", dt:"1980-11-12", loc:"sat:3.09x65deg", desc:"eom:fbm:sat"},
    {pt:"2", type:"tc", dt:"1980-11-12", loc:"sol:et:9.54aux3.72ex35deg", desc:""},
    {pt:"2", type:"ev", dt:"1998-02-17", loc:"et:69.4au", desc:"Farthest human-made object"},
    {pt:"2", type:"ft", dt:"2004-12", loc:"sol:et:94au", desc:"Termination shock"},
    {pt:"2", type:"tr", dt:"2012-08-25", loc:"et:122.6au", desc:"isp;Leaves Heliosphere"},
    {pt:"2", type:"nom", dt:"2030-12-31", loc:"et", desc:"?;Power Depletion"}
]},
// --- 1978 --- 5 Missions   
pioneervenus1: {name:"Pioneer Venus 1", desc:"lv:Atlas-SLV3D Centaur-D1AR",
  parts:[
    {names:"Pioneer Venus Orbiter;Pioneer 12", type:"om", dest:"ven", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Pioneer;m:582kg;m0:370kg;dim:7.3x4.0x2.0m;sc:0.6", id:"1978-051A", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer12QL.html;nssdc:nssdc.gsfc.nasa.gov/planetary/pioneer_venus.html;arc:www.nasa.gov/centers/ames/missions/archive/pioneer.html", icon:"pioneer-venus-o.png"}], 
  events:[
    {pt:"", type:"l", dt:"1978-05-20", loc:"ter:cap:LC-36A", desc:""},
    {pt:"", type:"toi", dt:"1978-05-20", loc:"sol:ho0.70x1.30aux2.3deg", desc:""},
    {pt:"", type:"oi", dt:"1978-12-04", loc:"ven:378x11900kmx105deg", desc:""},
    {pt:"", type:"sco", dt:"1978-12-20", loc:"ven:150x66900kmx105deg", desc:"per:24h"},
    {pt:"", type:"los", dt:"1992-10-08", loc:"ven", desc:"ae;eom"}
]},
pioneervenus2: {name:"Pioneer Venus 2", desc:"lv:Atlas-SLV3D Centaur-D1AR",
  parts:[
    {names:"Pioneer Venus Multiprobe;Pioneer 13", type:"pm", dest:"ven", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Pioneer;m:904kg;dim:2.5x2.5x2.0m", id:"", url:"ql:space.jpl.nasa.gov/msl/QuickLooks/pioneer13QL.html;nssdc:nssdc.gsfc.nasa.gov/planetary/pioneer_venus.html;arc:www.nasa.gov/centers/ames/missions/archive/pioneer.html", icon:"pioneer-venus-p.png"},
{names:"{Pioneer Venus Bus}", type:"pm", dest:"ven", stat:"s", ctry:"us", desc:"m:290kg", id:"1978-078A"},
{names:"{Pioneer Venus Large Probe}", type:"pm", dest:"ven", stat:"s", ctry:"us", desc:"m:315kg", id:"1978-078D"},
{names:"{Pioneer Venus Small Probe (North)}", type:"pm", dest:"ven", stat:"s", ctry:"us", desc:"m:90kg", id:"1978-078E"},
{names:"{Pioneer Venus Small Probe (Night)}", type:"pm", dest:"ven", stat:"s", ctry:"us", desc:"m:90kg", id:"1978-078F"},
{names:"{Pioneer Venus Small Probe (Day)}", type:"pm", dest:"ven", stat:"s", ctry:"us", desc:"m:90kg", id:"1978-078G"}], 
  events:[
    {pt:"", type:"l", dt:"1978-08-08", loc:"ter:cap:LC-36A", desc:""},
    {pt:"", type:"toi", dt:"1978-08-08", loc:"sol:hto:0.70x1.11aux2deg", desc:""},
    {pt:"", type:"sep", dt:"1978-11-16", loc:"so", desc:"bus/Large Probe"},
    {pt:"", type:"sep", dt:"1978-11-20", loc:"so", desc:"bus/Small Probes"},
    {pt:"", type:"ae", dt:"1978-12-09", loc:"ven", desc:"alt:165km"},
    {pt:"1", type:"imp", dt:"1978-12-09", loc:"ven:37.9N,290.9E", desc:"Themis Regio;dp:bus;show:PV Bus:NW"},
    {pt:"2", type:"imp", dt:"1978-12-09", loc:"ven:4.4N,304.0E", desc:"Navka Planitia;dp:Large Probe;show:PV Large"},
    {pt:"5", type:"imp", dt:"1978-12-09", loc:"ven:31.3S,317.0E", desc:"Themis Regio, Innini Montes;dp:Small Probe (Day);show:PV Day"},    
    {pt:"5", type:"los", dt:"1978-12-09", loc:"ven", desc:"Small Probe (Day);tm:67.5mn"},
    {pt:"4", type:"imp", dt:"1978-12-09", loc:"ven:28.7S,56.7E", desc:"Aino Planitia;dp:Small Probe (Night);show:PV Night"},
    {pt:"3", type:"imp", dt:"1978-12-09", loc:"ven:59.3N,4.8E", desc:"Maxwell Montes, Ishtar Terra;dp:Small Probe (North);show:PV North:SE"}
]},
isee3: {name:"ICE:International Cometary Explorer", desc:"lv:Delta 2914", stat:"s",
  parts:[
    {names:"ISEE-3: International Sun-Earth Explorer 3", type:"obm", dest:"sol", stat:"s", ctry:"us", desc:"ag:nasa,gsfc;fam:Explorer;First L1 halo orbiter;m:479kg;dim:91x91x14m;sc:0.5", id:"1978-079A", url:"hp:spacecollege.org/isee3;sse:solarsystem.nasa.gov/missions/profile.cfm?MCode=ISEEICE;heasarc:heasarc.gsfc.nasa.gov/docs/heasarc/missions/isee3.html;tw:twitter.com/isee3reboot", icon:"isee3.png"},
{pt:"ext", names:"", type:"fbm", dest:"com", stat:"s", ctry:"us", desc:"First comet tail flythrough", icon:"isee3-reboot.png"}], 
  events:[
    {pt:"", type:"l", dt:"1978-08-12", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", type:"toi", dt:"1978-08-12", loc:"sol:leto:0.99x1.00aux0deg", desc:""},
    {pt:"0", type:"oi", dt:"1978-11-20", loc:"sol:esl1:665000x110000kmx0deg", desc:"Halo Orbit"},
    {pt:"0", type:"toi", dt:"1982-06-10", loc:"ter:leto", desc:"eom:obm"},
    {pt:"0", type:"fb", dt:"1983-03-30", loc:"lun:21307km", desc:"Magnetotail Traverse"},
    {pt:"0", type:"fb", dt:"1983-04-23", loc:"lun:22875km", desc:"Magnetotail Traverse"},
    {pt:"0", type:"fb", dt:"1983-09-27", loc:"lun:24527km", desc:"Magnetotail Traverse"},
    {pt:"0", type:"fb", dt:"1983-10-21", loc:"lun:19178km", desc:"Magnetotail Traverse"},
    {pt:"0", type:"fb", dt:"1983-12-22", loc:"lun:119.4km", desc:"ga"},
    {pt:"1", type:"tc", dt:"1983-12-27", loc:"sol:ho:0.926x1.033aux0.1deg", desc:""},
    {pt:"1", type:"ft", dt:"1985-09-11", loc:"com:7800km", desc:"com:21P/Giacobini-Zinner;Plasma Tail"},
    {pt:"1", type:"app", dt:"1986-03-28", loc:"com:0.21au", desc:"com:1P/Halley;Distant flyby"},
    {pt:"1", type:"ev", dt:"2014-04", loc:"sol:ho", desc:"Control taken over by ISSE3 Reboot Project"},
    {pt:"1", type:"fb", dt:"2014-08-10", loc:"ter:190000km", desc:"Flyby"},
    {pt:"1", type:"los", dt:"2014-09-16", loc:"sol:ho", desc:"eom"}
]},
venera11: {name:"Venera 11", desc:"lv:Proton-K/Blok-D1",
  parts:[
    {names:"Венера-11;Venera 4V-1 #360", type:"fbm", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4V;m:4447kg;dim:5.7x2.4x5.1m", id:"1978-084A", url:"ea:www.astronautix.com/craft/venra4v1.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-4v1s.png"},
{names:"{Venera 11 Lander}", type:"slm", dest:"ven", stat:"s", ctry:"su", id:"1978-084D", desc:"sc:0.75;m:1645kg", icon:"venera-4v1p.png"}], 
  events:[
    {pt:"", type:"l", dt:"1978-09-09", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"", type:"toi", dt:"1978-09-09", loc:"sol:hto:0.69x1.01aux2.3deg", desc:""},
    {pt:"", type:"sep", dt:"1978-12-23", loc:"ven", desc:"bus/lp"},
    {pt:"0", type:"fb", dt:"1978-12-25", loc:"ven:34000km", desc:"bus"},
    {pt:"1", type:"edl", dt:"1978-12-25", loc:"ven", desc:"tm:63mn;lp"},
    {pt:"1", type:"tdn", dt:"1978-12-25", loc:"ven:14S,299E", desc:"Phoebe Regio;lp;show:V11:SW"},
    {pt:"1", type:"los", dt:"1978-12-25", loc:"ven", desc:"tm:95mn;eom:slm"},
    {pt:"0", type:"los", dt:"1980-02-01", loc:"sol:ho:0.712x1.078aux2deg", desc:"bus;eom"}
]},
venera12: {name:"Venera 12", desc:"lv:Proton-K/Blok-D1",
  parts:[
    {names:"Венера-12;Venera 4V-1 #361", type:"fbm", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4V;m:4458kg;dim:5.7x2.4x5.1m", id:"1978-086A", url:"ea:www.astronautix.com/craft/venra4v1.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-4v1s.png"},
{names:"{Venera 12 Lander}", type:"slm", dest:"ven", stat:"s", ctry:"su", id:"1978-086C", desc:"sc:0.75;m:1645kg", icon:"venera-4v1p.png"}], 
  events:[
    {pt:"", type:"l", dt:"1978-09-14", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", type:"toi", dt:"1978-09-14", loc:"sol:hto:0.67x1.01aux2.3deg", desc:""},
    {pt:"", type:"sep", dt:"1978-12-19", loc:"ven", desc:"bus/lp"},
    {pt:"0", type:"fb", dt:"1978-12-21", loc:"ven:34000km", desc:"bus"},
    {pt:"1", type:"edl", dt:"1978-12-21", loc:"ven", desc:"tm:62mn;lp"},
    {pt:"1", type:"tdn", dt:"1978-12-21", loc:"ven:7S,294E", desc:"Phoebe Regio;lp;show:V12:NW"},
    {pt:"1", type:"los", dt:"1978-12-21", loc:"ven", desc:"tm:110mn;eom:slm"},
    {pt:"0", type:"obs", dt:"1980-02-13", loc:"ven", desc:"Comet Bradfield; 50 milion km dist."},
    {pt:"0", type:"los", dt:"1980-04-18", loc:"sol:ho:0.725x1.192au", desc:"bus;eom"}
]},
// --- 1981 --- 2 Missions   
venera13: {name:"Venera 13", desc:"lv:Proton-K/Blok-D1",
  parts:[
    {names:"Венера-13;Venera 4V-1M #760", type:"fbm", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4V;m:4398kg;dim:5.7x2.4x5.1m", id:"1981-106A", url:"ea:www.astronautix.com/craft/venra4v1.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-4v1s.png"},
{names:"{Venera 13 Lander}", type:"slm", dest:"ven", stat:"s", ctry:"su", id:"1981-106D", desc:"sc:0.75;First Venus soil analysis", icon:"venera-4v1mp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1981-10-30", loc:"ter:bai:LC-200/40", desc:""},
    {pt:"", type:"toi", dt:"1981-10-30", loc:"sol:hto:0.70x0.99aux2.3deg", desc:""},
    {pt:"", type:"sep", dt:"1982-03-01", loc:"ven", desc:"bus/lp"},
    {pt:"0", type:"fb", dt:"1982-03-01", loc:"ven:36000km", desc:"bus"},
    {pt:"1", type:"edl", dt:"1982-03-01", loc:"ven", desc:"tm:62mn;lp"},
    {pt:"1", type:"tdn", dt:"1982-03-01", loc:"ven:7.5S,303.18E", desc:"Phoebe Regio;lp"},
    {pt:"1", type:"los", dt:"1982-03-01", loc:"ven", desc:"tm:127mn;eom:slm"},
    {pt:"0", type:"los", dt:"1983-04-25", loc:"sol:ho:0.715x1.123aux5deg", desc:"bus;eom"}
]},
venera14: {name:"Venera 14", desc:"lv:Proton-K/Blok-D1",
  parts:[
    {names:"Венера-14;Venera 4V-1M #761", type:"fbm", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4V;m:4395kg;dim:5.7x2.4x5.1m", id:"1981-110A", url:"ea:www.astronautix.com/craft/venra4v1.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-4v1s.png"},
{names:"{Venera 14 Lander}", type:"slm", dest:"ven", stat:"s", ctry:"su", id:"1981-110D", desc:"sc:0.75;m:1634kg", icon:"venera-4v1mp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1981-11-04", loc:"ter:bai:LC-200/39", desc:""},
    {pt:"", type:"toi", dt:"1981-11-04", loc:"sol:hto:0.71x0.99aux2.3deg", desc:""},
    {pt:"", type:"sep", dt:"1982-03-05", loc:"ven", desc:"bus/lp"},
    {pt:"0", type:"fb", dt:"1982-03-05", loc:"ven:36000km", desc:"bus"},
    {pt:"1", type:"edl", dt:"1982-03-05", loc:"ven", desc:"tm:62mn;lp"},
    {pt:"1", type:"tdn", dt:"1982-03-05", loc:"ven:13.25S,310.15E", desc:"Phoebe Regio;lp"},
    {pt:"1", type:"los", dt:"1982-03-05", loc:"ven", desc:"tm:57mn;eom:slm"},
    {pt:"0", type:"los", dt:"1983-04-09", loc:"sol:ho:0.71x0.99aux2.3deg", desc:"bus;eom"}
]},
// --- 1983 --- 2 Missions   
venera15: {name:"Venera 15", desc:"lv:Proton-K/Blok-D1",
  parts:[
    {names:"Венера-15;Venera 4V-2 #860", type:"om", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4V;m:5250kg;dim:5.7x2.4x5.0m;First radar cartography of Venus", id:"1983-053A", url:"ea:www.astronautix.com/craft/venra4v2.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-4v-2.png"}], 
  events:[
    {pt:"", type:"l", dt:"1983-06-02", loc:"ter:bai:LC-200/39", desc:""},
    {pt:"", type:"toi", dt:"1983-06-02", loc:"sol:hto:0.71x1.01aux2.3deg", desc:""},
    {pt:"", type:"oi", dt:"1983-10-10", loc:"ven:905x64687kmx87.5deg", desc:""},
    {pt:"", type:"sco", dt:"1983-10-17", loc:"ven:873x65000kmx87.5deg", desc:"per:24h"},
    {pt:"", type:"los", dt:"1985-01-05", loc:"ven", desc:"eom"}
]},
venera16: {name:"Venera 16", desc:"lv:Proton-K/Blok-D1",
  parts:[
    {names:"Венера-16;Venera 4V-2 #861", type:"om", dest:"ven", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:4V;m:5300kg;dim:5.7x2.4x5.0m", id:"1983-054A", url:"ea:www.astronautix.com/craft/venra4v2.htm;www.mentallandscape.com/V_Venus.htm", icon:"venera-4v-2.png"}], 
  events:[
    {pt:"", type:"l", dt:"1983-06-07", loc:"ter:bai:LC-200/40", desc:""},
    {pt:"", type:"toi", dt:"1983-06-07", loc:"sol:hto:0.71x1.02aux2.3deg", desc:""},
    {pt:"", type:"oi", dt:"1983-10-14", loc:"ven:977x67078kmx92.5deg", desc:""},
    {pt:"", type:"sco", dt:"1983-10-22", loc:"ven:944x65336kmx92.5deg", desc:"per:24h"},
    {pt:"", type:"los", dt:"1985-06-13", loc:"ven", desc:"eom"}
]},
// --- 1984 --- 2 Missions   
vega1: {name:"Vega 1", desc:"lv:Proton-K/Blok-D1",
  parts:[
    {names:"Вега-1;Venera-Halley 1;Venera 5VK #901", type:"fbm", dest:"com", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:5VK;m:4924kg;dim:8.4x2.4x5.1m;sc:0.75;First distant comet flyby", id:"1984-125A", url:"hp:arc.iki.rssi.ru/IPL/vega.html;ea:www.astronautix.com/craft/vega5vk.htm;ihw:pdssbn.astro.umd.edu/data_sb/missions/ihw/", icon:"vega.png"},
{names:"{Vega 1 Lander}", type:"slm", dest:"ven", stat:"p", ctry:"su", desc:"m:716kg;sc:0.65", id:"1984-125E",  icon:"vega-l.png"},
{names:"{Vega 1 Baloon Probe}", type:"bm", dest:"ven", stat:"s", ctry:"su", desc:"m:122kg;sc:0.3;First Venus baloon probe", id:"1984-125F", icon:"vega-b.png"}], 
  events:[
    {pt:"", type:"l", dt:"1984-12-15", loc:"ter:bai:LC-200/39", desc:""},
    {pt:"", type:"toi", dt:"1984-12-15", loc:"sol:ho:0.70x0.98aux2.3deg", desc:""},
    {pt:"", type:"sep", dt:"1985-06-09", loc:"ven", desc:"fp/lp/bp"},
    {pt:"2", type:"ae", dt:"1985-06-11", loc:"ven:8.1N,176.9E:53.5km", desc:"bp"},
    {pt:"1", type:"edl", dt:"1985-06-11", loc:"ven:7.2N,177.8E", desc:"Rusalka Planitia;lp;show:Vega1:NW"},
    {pt:"1", type:"los", dt:"1985-06-11", loc:"ven", desc:"tm:56mn;eom:slm"},
    {pt:"0", type:"fb", dt:"1985-06-11", loc:"ven:39000km", desc:"fp"},
    {pt:"2", type:"los", dt:"1985-06-13", loc:"ven:8.1N,68.8E",  desc:"bp;trv:11600km;tm:46.5h;eom:bm"},
    {pt:"0", type:"fb", dt:"1986-03-06", loc:"com:10000km", desc:"com:1P/Halley"},
    {pt:"0", type:"los", dt:"1987-01-30", loc:"so", desc:"?;eom"}
]},
vega2: {name:"Vega 2", desc:"lv:Proton-K/Blok-D1",
  parts:[
    {names:"Вега-2;Venera-Halley 2;Venera 5VK #902", type:"fbm", dest:"com", stat:"s", ctry:"su", desc:"ag:lav,iki;fam:5VK;m:4926kg;dim:8.4x2.4x5.1m;sc:0.75", id:"1984-128A", url:"hp:arc.iki.rssi.ru/IPL/vega.html;ea:www.astronautix.com/craft/vega5vk.htm;ihw:pdssbn.astro.umd.edu/data_sb/missions/ihw/", icon:"vega.png"},
{names:"{Vega 2 Lander}", type:"slm", dest:"ven", stat:"s", ctry:"su", desc:"m:716kg;sc:0.65", id:"1984-128E", icon:"vega-l.png"},
{names:"{Vega 2 Baloon Probe}", type:"bm", dest:"ven", stat:"s", ctry:"su", desc:"m:122kg;sc:0.3", id:"1984-128F", icon:"vega-b.png"}], 
  events:[
    {pt:"", type:"l", dt:"1984-12-21", loc:"ter:bai:LC-200/40", desc:""},
    {pt:"", type:"toi", dt:"1984-12-21", loc:"sol:ho:0.70x0.98aux2.3deg", desc:""},
    {pt:"", type:"sep", dt:"1985-06-13", loc:"ven", desc:"fp/lp/bp"},
    {pt:"2", type:"ae", dt:"1985-06-15", loc:"ven:7.45S,179.8E:53.6km", desc:"bp"},
    {pt:"1", type:"edl", dt:"1985-06-15", loc:"ven:7.14S,177.67E", desc:"Atla Regio, Aphrodite Terra;lp;show:Vega2:NW"},
    {pt:"1", type:"los", dt:"1985-06-15", loc:"ven", desc:"tm:57mn;eom:slm"},
    {pt:"0", type:"fb", dt:"1985-06-15", loc:"ven:24500km", desc:"fp"},
    {pt:"2", type:"los", dt:"1985-06-17", loc:"ven:7.5S,76.3E", desc:"bp;tm:46.5h;trv:11100km;eom:bm"},
    {pt:"0", type:"fb", dt:"1986-03-09", loc:"com:3000km", desc:"com:1P/Halley"},
    {pt:"0", type:"los", dt:"1987-03-24", loc:"so", desc:"?;eom"}
]},
// --- 1985 --- 3 Missions   
sakigake: {name:"Sakigake:Pioneer", desc:"lv:M-3SII",
  parts:[
    {names:"さきがけ;MS-T5", type:"fbm", dest:"com", stat:"s", ctry:"jp", desc:"ag:isas;m:138.1kg;dim:1.4x1.4x1.5m", id:"1985-001A", url:"hp:www.isas.jaxa.jp/e/enterp/missions/sakigake.shtml;ihw:pdssbn.astro.umd.edu/data_sb/missions/ihw/", icon:"sakigake.png"}], 
  events:[
    {pt:"", type:"l", dt:"1985-01-08", loc:"ter:uch:M-1", desc:""},    
    {pt:"", type:"toi", dt:"1985-01-08", loc:"sol:ho:0.817x1.014aux1.52deg", desc:""},
    {pt:"", type:"fb", dt:"1986-03-11", loc:"com:6990000km", desc:"com:1P/Halley;"},
    {pt:"", type:"fb", dt:"1992-01-08", loc:"ter:88997km", desc:"ga;Magnetotail Traverse"},
    {pt:"", type:"tc", dt:"1992-01-08", loc:"sol:ho:0.916x1.115aux0.07deg", desc:""},
    {pt:"", type:"fb", dt:"1993-06-14", loc:"ter:1841500km", desc:"ga;Magnetotail Traverse"},
    {pt:"", type:"fb", dt:"1994-10-28", loc:"ter:54610km", desc:"ga;Magnetotail Traverse"},
    {pt:"", type:"los", dt:"1995-11-15", loc:"sol:ho:0.916x1.154aux0.07deg", desc:"eom"}
  //{pt:"", type:"fb", dt:"1996-02-03", loc:"com:10000km", desc:"45P/Honda-Mrkos-Pajdusakova"},
  //{pt:"", type:"fb", dt:"1998-11-29", loc:"com:14000000km", desc:"21P/Giacobini-Zinner"}
]},
giotto: {name:"Giotto", desc:"lv:Ariane 1",
  parts:[
    {names:"", type:"fbm", dest:"com", stat:"s", ctry:"eu", desc:"ag:esa;First Earth gravity assist;First close comet flyby;m:960kg;dim:1.85x1.85x2.85m", id:"1985-056A", url:"hp:www.esa.int/Our_Activities/Space_Science/Giotto_overview;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=15;ihw:pdssbn.astro.umd.edu/data_sb/missions/ihw/;psa:www.sciops.esa.int/index.php?project=PSA&page=giotto", icon:"giotto.png"}], 
  events:[
    {pt:"", type:"l", dt:"1985-07-02", loc:"ter:kou:ELA-1", desc:""},
    {pt:"", type:"toi", dt:"1985-07-02", loc:"ter:gto", desc:"3 revolutions"},
    {pt:"", type:"toi", dt:"1985-07-03", loc:"sol:ho:0.731x1.078aux2.1deg", desc:""},
    {pt:"", type:"fb", dt:"1986-03-14", loc:"com:596km", desc:"com:1P/Halley;"},
    {pt:"", type:"fb", dt:"1990-07-02", loc:"ter:16300km", desc:"ga"},
    {pt:"", type:"fb", dt:"1992-07-10", loc:"com:200km", desc:"com:26P/Grigg-Skjellerup;"},
    {pt:"", type:"tos", dt:"1992-07-23", loc:"sol:ho:0.994x1.165aux5.5deg", desc:"eom"}
]},
susei: {name:"Suisei:Comet", desc:"lv:M-3SII",
  parts:[
    {names:"すいせい;Planet-A", type:"fbm", dest:"com", stat:"s", ctry:"jp", desc:"ag:isas;m:139.5kg;dim:1.4x1.4x1.5m", id:"1985-073A", url:"hp:www.isas.jaxa.jp/e/enterp/missions/suisei.shtml;ihw:pdssbn.astro.umd.edu/data_sb/missions/ihw/", icon:"susei.png"}], 
  events:[
    {pt:"", type:"l", dt:"1985-08-18", loc:"ter:uch:M-1", desc:""},
    {pt:"", type:"toi", dt:"1985-08-18", loc:"sol:ho:0.679x1.013aux0.9deg", desc:""},
    {pt:"", type:"fb", dt:"1986-03-08", loc:"com:151000km", desc:"com:1P/Halley;"},
    {pt:"", type:"tos", dt:"1991-02-22", loc:"sol:ho:0.672x1.012aux0.89deg", desc:"Fuel Depletion, en Route to Comet 21P/Giacobini-Zinner;eom"}
]},
// --- 1988 --- 2 Missions  
phobos1: {name:"Phobos 1", desc:"lv:Proton-K/Blok-D2",
  parts:[
    {names:"Фобос-1;Fobos 1F #101", type:"om", dest:"mar", stat:"f", ctry:"su", desc:"ag:lav,iki;fam:UMVL;m:5500kg;dim:7.5x2.4x2.5m", id:"1988-058A", url:"hp:arc.iki.rssi.ru/IPL/phobos.html;rsw:www.russianspaceweb.com/phobos.html;nssdc:nssdc.gsfc.nasa.gov/planetary/phobos.html", icon:"fobos1.png"},
{names:"DAS:Long-duration Automatic Probe", type:"slm", dest:"mar:phob", stat:"f", ctry:"su"}], 
  events:[
    {pt:"", type:"l", dt:"1988-07-07", loc:"ter:bai:LC-200/39", desc:""},
    {pt:"", type:"toi", dt:"1988-07-07", loc:"sol:hto:0.90x1.77aux2.97deg", desc:""},
    {pt:"", type:"los", dt:"1988-09-02", loc:"so", desc:"fail:Attitude control malfunction, programming error"}
]},
phobos2: {name:"Phobos 2", desc:"lv:Proton-K/Blok-D2",
  parts:[
    {names:"Фобос-2;Fobos 1F #102", type:"om", dest:"mar", stat:"p", ctry:"su", desc:"ag:lav,iki;fam:UMVL;m:5500kg;dim:7.5x2.4x2.5m", id:"1988-059A", url:"hp:arc.iki.rssi.ru/IPL/phobos.html;rsw:www.russianspaceweb.com/phobos.html;nssdc:nssdc.gsfc.nasa.gov/planetary/phobos.html", icon:"fobos2.png"},
{names:"PROP-F:Terrain Evaluation Device-Phobos", type:"hpm", dest:"mar:phob", stat:"f", ctry:"su", desc:"sc:0.5", icon:"fobos-hp.png"},
{names:"DAS:Long-duration Automatic Probe", type:"slm", dest:"mar:phob", stat:"f", ctry:"su", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"1988-07-12", loc:"ter:bai:LC-200/40", desc:""},
    {pt:"", type:"toi", dt:"1988-07-12", loc:"sol:hto:0.90x1.77aux3.0deg", desc:""},
    {pt:"", type:"oi", dt:"1989-01-29", loc:"mar:819x81214kmx1.5deg", desc:""},
    {pt:"", type:"fb", dt:"1989-02-12", loc:"phob:820km", desc:""},
    {pt:"", type:"fb", dt:"1989-02-28", loc:"phob:310km", desc:""},
    {pt:"", type:"fb", dt:"1989-03-25", loc:"phob:120km", desc:""},
    {pt:"", type:"los", dt:"1989-03-27", loc:"mar:6145x6409kmx1.3deg", desc:"fail:Control system malfunction"}
]},
// --- 1989 --- 2 Missions   
magellan: {name:"Magellan", desc:"lv:STS-30 Atlantis/IUS",
  parts:[
    {names:"Venus Radar Mapper", type:"om", dest:"ven", stat:"s", ctry:"us", desc:"ag:nasa,jpl;Full radar mapping of Venus;First aerobraking test;m:3445kg;dim:9.2x3.7x6.4m;sc:0.75", id:"1989-033B", url:"hp:www2.jpl.nasa.gov/magellan/;hist:history.nasa.gov/JPL-400-345/magellan.htm;sts:science.ksc.nasa.gov/shuttle/missions/sts-30/mission-sts-30.html;pds:pds-imaging.jpl.nasa.gov/portal/magellan_mission.html", icon:"magellan.png"}], 
  events:[
    {pt:"", type:"l", dt:"1989-05-04", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"toi", dt:"1989-05-04", loc:"sol:hto:0.70x1.01aux0.65deg", desc:""},
    {pt:"", type:"oi", dt:"1990-08-10", loc:"ven:297x8463kmx85.5deg", desc:""},
    {pt:"", type:"sco", dt:"1990-09-15", loc:"ven:1.03x2.41x85.5deg", desc:"Radar mapping"},
    {pt:"", type:"ev", dt:"1993-05-24..1993-08-02", loc:"ven", desc:"Aerobraking"},
    {pt:"", type:"sco", dt:"1993-08-03", loc:"ven:180x560x85.5deg", desc:"Gravity Data acquisition"},
    {pt:"", type:"ae", dt:"1994-10-13", loc:"ven", desc:"los;eom"}
]},
galileo: {name:"Galileo", desc:"lv:STS-34 Atlantis/IUS",
  parts:[
    {type:"fbm", dest:"ast", stat:"s", ctry:"us", desc:"First asteroid flyby;sc:0.5;w:0.25"},
    {names:"", type:"om", dest:"jup", stat:"s", ctry:"us", desc:"ag:nasa;fam:Flagship;First Jupiter orbiter;m:2223kg;dim:10.9x4.6x9.0m", id:"1989-084B", url:"hp:solarsystem.nasa.gov/galileo/;nssdc:nssdc.gsfc.nasa.gov/planetary/galileo.html;sts:science.ksc.nasa.gov/shuttle/missions/sts-34/mission-sts-34.html;pds:pds-imaging.jpl.nasa.gov/portal/galileo_mission.html;tps:www.planetary.org/explore/resource-library/galileo-messengers.html;hist:history.nasa.gov/sp4231.pdf", icon:"galileo.png"},
    {names:"{Galileo Descent Module}", type:"pm", dest:"jup", stat:"s", ctry:"us", desc:"First Jupiter atmospheric entry;m:339kg;sc:0.75", id:"1989-084E", icon:"galileo-dp.png"}], 
  events:[
    {pt:"", type:"l", dt:"1989-10-18", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"toi", dt:"1989-10-26", loc:"sol:ho:0.668x1.00aux4.31deg", desc:""},
    {pt:"0", type:"fb", dt:"1990-02-10", loc:"ven:16000km", desc:"ga"},
    {pt:"0", type:"fb", dt:"1990-12-08", loc:"ter:960km", desc:"ga"},
    {pt:"0", type:"tc", dt:"1990-12-08", loc:"sol:ho:0.905x2.272aux4.54deg", desc:""},
    {pt:"0", type:"fb", dt:"1991-10-29", loc:"ast:1610km", desc:"ast:(951) Gaspra"},
    {pt:"0", type:"fb", dt:"1992-12-08", loc:"ter:303km", desc:"ga"},
    {pt:"0", type:"tc", dt:"1992-12-08", loc:"sol:ho:0.97x5.29aux1.5deg", desc:""},
    {pt:"0", type:"fb", dt:"1993-08-28", loc:"ast:2400km", desc:"ast:(243) Ida;eom:fbm"},
    {pt:"1", type:"obs", dt:"1994-07", loc:"so", desc:"Shoemaker-Levy 9 Impact on Jupiter"},
    {pt:"1", type:"sep", dt:"1995-07-13", loc:"so", desc:"op/ap"},
    {pt:"1", type:"fb", dt:"1995-12-07", loc:"Io:892km", desc:"op;ga"},
    {pt:"2", type:"ae", dt:"1995-12-07", loc:"jup:6.5N,4.4W", desc:"ap"},
    {pt:"2", type:"los", dt:"1995-12-07", loc:"jup", desc:"ae:140km;tm:61.4mn;ap;eom:pm"},
    {pt:"1", type:"oi", dt:"1995-12-08", loc:"jup:214000kmx0.036deg", desc:""},
    {pt:"1", type:"obs", dt:"", loc:"jup", desc:"35 Jupiter-Moon Flybys in 34 Jupiter Orbits"},
    {pt:"1", type:"obs", dt:"2000-12-30", loc:"jup", desc:"Simultaneous Observations with Cassini"},
    {pt:"1", type:"ae", dt:"2003-09-21", loc:"jup:9300km", desc:"los;eom"}
]},
// --- 1990 --- 2 Missions  
hiten: {name:"Hiten:Celestial Maiden", desc:"lv:M-3SII",
  parts:[
    {names:"ひてん;MUSES-A", type:"fbm", dest:"lun", stat:"s", ctry:"jp", desc:"ag:isas;First aerobraking maneuver;m:197.4kg;dim:1.4x1.4x1.2m", id:"1990-007A", url:"hp:www.isas.jaxa.jp/e/enterp/missions/hiten.shtml", icon:"hiten.png"},
    {type:"om", dest:"lun", stat:"s", ctry:"jp"},
    {names:"Hagoromo:MUSES-A Subsatellite", type:"om", dest:"lun", stat:"f", ctry:"jp", id:"1990-007B", desc:"sc:0.75", icon:"hiten-op.png"}], 
  events:[
    {pt:"", type:"l", dt:"1990-01-24", loc:"ter:uch:M-1", desc:""},
    {pt:"", type:"toi", dt:"1990-01-24", loc:"ter:leto", desc:""},
    {pt:"", type:"sep", dt:"1990-03-18", loc:"ter:leto", desc:"fbp/op"},
    {pt:"2", type:"oi", dt:"1990-03-18", loc:"lun", desc:"op:Hagoromo;los;fail:Unknown;"},
    {pt:"0", type:"fb", dt:"1990-03-19", loc:"lun:16472km", desc:"ga;(10 more Lunar Flybys)"},
    {pt:"0", type:"fb", dt:"1991-03-19", loc:"ter:125.5km", desc:"ga;Aerobraking;(1 more Earth Flyby);eom:fbm"},
    {pt:"1", type:"oi", dt:"1991-10-02", loc:"lun", desc:"Moon-L4-L5 Loop Orbit"},
    {pt:"1", type:"oi", dt:"1992-02-15", loc:"lun:9590x49377kmx34.7deg", desc:""},
    {pt:"1", type:"sco", dt:"1992-02-17", loc:"lun:2289.67x49013.93x38.9deg", desc:""},
    {pt:"1", type:"imp", dt:"1993-04-10", loc:"lun:34.3S,55.6E", desc:"Furnerius Crater;eom;show:0"}
]},
ulysses: {name:"Ulysses", desc:"lv:STS-41 Discovery/IUS/PAM-S",
  parts:[
    {names:"ISPM:International Solar Polar Mission", type:"obm", dest:"sol", stat:"s", ctry:"eu;us", desc:"ag:nasa,jpl,esa;First solar polar orbiter;m:371kg;dim:72x10.5x8m;sc:0.5;w:0.89", id:"1990-090B", url:"hp:www.esa.int/Our_Activities/Space_Science/Ulysses_overview;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=11;jpl:ulysses.jpl.nasa.gov/;sts:science.ksc.nasa.gov/shuttle/missions/sts-41/mission-sts-41.html", icon:"ulysses.png"},
    {names:"", type:"fbm", dest:"jup", stat:"s", ctry:"eu;us", desc:""}], 
  events:[
    {pt:"", type:"l", dt:"1990-10-06", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"toi", dt:"1990-10-08", loc:"sol:hto:0.994x16.99aux2deg", desc:""},
    {pt:"1", type:"fb", dt:"1992-02-08", loc:"jup:378400kmx154.6deg", desc:"ga;eom:fbm"},
    {pt:"0", type:"tc", dt:"1992-02-08", loc:"sol:ho:1.35x5.4aux79.1deg", desc:"po"},
    {pt:"0", type:"obs", dt:"1994-07-16", loc:"so", desc:"Shoemaker-Levy 9 Impact on Jupiter"},
    {pt:"0", type:"ev", dt:"1994-06-26..1994-11-05", loc:"so:80.2S", desc:"1st Solar South Pole Pass"},
    {pt:"0", type:"ev", dt:"1995-06-19..1995-09-29", loc:"so:80.2N", desc:"1st Solar North Pole Pass"},
    {pt:"0", type:"obs", dt:"1996-05-01", loc:"so", desc:"Comet C/1996 B2 Hyakutake Tail"},
    {pt:"0", type:"ev", dt:"2000-09-06..2001-01-16", loc:"so:80.2S", desc:"2nd Solar South Pole Pass"},
    {pt:"0", type:"obs", dt:"2000-10-18", loc:"so", desc:"Comet C/1999 T1 McNaught-Hartley Tail"},
    {pt:"0", type:"ev", dt:"2001-08-31..2001-12-10", loc:"so:80.2N", desc:"2nd Solar North Pole Pass"},
    {pt:"0", type:"ev", dt:"2007-11-17..2007-04-03", loc:"so:79.7S", desc:"3rd Solar South Pole Pass"},
    {pt:"0", type:"obs", dt:"2007-02-04", loc:"so:2.4au", desc:"Comet C/2006 P1 McNaught Tail"},
    {pt:"0", type:"ev", dt:"2007-11-30..2008-03-15", loc:"so:79.8N", desc:"3rd Solar North Pole Pass"},
    {pt:"0", type:"tos", dt:"2009-06-30", loc:"sol:ho:1.394x5.410aux78.66deg", desc:"Fuel Depletion;eom"}
]},
// --- 1992 --- 1 Mission   
marsobserver: {name:"Mars Observer", desc:"lv:Titan III/TOS",
  parts:[
    {names:"MGCO:Mars Geoscience/Climatology Orbiter", type:"om", dest:"mar", stat:"f", ctry:"us", desc:"ag:nasa,jpl;m:2573kg;dim:14.1x5.2x7.6m;sc:0.5", id:"1992-063A", url:"sse:solarsystem.nasa.gov/missions/profile.cfm?MCode=MarsObserver", icon:"marsobserver.png"}], 
  events:[
    {pt:"", type:"l", dt:"1992-09-25", loc:"ter:cap:LC-40", desc:""},
    {pt:"", type:"toi", dt:"1992-09-26", loc:"sol:hto:1.003x1.633aux1.29deg", desc:""},
    {pt:"", type:"los", dt:"1993-08-21", loc:"so", desc:"fail:Fuel line rupture?;eom"},
    {pt:"", type:"tc", dt:"1993-08-24", loc:"sol:ho:1.131x1.609aux6.7deg", desc:"?;Fate unknown"}
]},
// --- 1994 --- 2 Missions
clementine: {name:"Clementine", desc:"lv:Titan IIG", stat:"p",
  parts:[
    {names:"DSPSE:Deep Space Program Science Experiment", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,usn,bmdo;m:424kg;m0:227kg;dim:2.8x1.14x1.88m", id:"1994-004A", url:"hp:www.lpi.usra.edu/lunar/missions/clementine/;nssdc:nssdc.gsfc.nasa.gov/planetary/clementine.html;pds:pds-imaging.jpl.nasa.gov/portal/clementine_mission.html;usgs:astrogeology.usgs.gov/maps/moon-clementine-near-ir-global-map", icon:"clementine.png"},
    {type:"fbm", dest:"ast", stat:"f", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"1994-01-25", loc:"ter:van:SLC-4W", desc:""},
    {pt:"", type:"toi", dt:"1994-02-03", loc:"ter:heeo", desc:"Phasing Orbits"},
    {pt:"0", type:"oi", dt:"1994-02-19", loc:"lun:2162x4594kmx90deg", desc:""},
    {pt:"0", type:"sco", dt:"1994-02-26", loc:"lun:400x1225kmx90deg", desc:""},
    {pt:"1", type:"toi", dt:"1994-05-05", loc:"ter:heeo", desc:"to Asteroid (1620) Geographos;eom:om"},
    {pt:"1", type:"ev", dt:"1994-05-07", loc:"ter", desc:"fail:Control system malfunction"},
    {pt:"1", type:"los", dt:"1995-05-10", loc:"ter:heeo", desc:"eom"}
]},
wind: {name:"Wind", desc:"lv:Delta II 7925-10",
  parts:[
    {names:"ISTP/Wind:International Solar Terrestrial Physics", type:"obm", dest:"sol", stat:"o", ctry:"us", desc:"ag:nasa,gsfc;Solar Wind Monitor;m:1250kg;dim:100x15x12m;sc:0.5", id:"1994-071A", url:"hp:wind.nasa.gov/;gsfc:pwg.gsfc.nasa.gov/wind.shtml", icon:"wind.png"}], 
  events:[
    {pt:"", type:"l", dt:"1994-11-01", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", type:"toi", dt:"1994-11-01", loc:"ter:leto", desc:"to L1"},
    {pt:"", type:"oi", dt:"1997-10-25", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", type:"oi", dt:"1998-11-17", loc:"ter:heeo", desc:"Petal Orbit with Multiple Lunar Flybys"},
    {pt:"", type:"oi", dt:"2004-05", loc:"esl1:18000x600000km", desc:""},
    {pt:"", type:"nom", dt:"2020-08-08", loc:"esl1", desc:"?"},
    {pt:"", type:"pom", dt:"2025-12-31", loc:"esl1", desc:""}
]},
// --- 1995 --- 1 Mission   
soho: {name:"SOHO:Solar and Heliospheric Observatory", desc:"lv:Atlas IIAS",
  parts:[
    {names:"", type:"obm", dest:"sol", stat:"o", ctry:"us;eu", desc:"ag:nasa,gsfc,esa;m:1864kg;m0:610kg;dim:9.5x2.7x4.3m;sc:0.75;Heliophysics Observatory", id:"1995-065A", url:"hp:sohowww.nascom.nasa.gov/;esa:www.esa.int/Our_Activities/Space_Science/SOHO_overview2;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=14", icon:"soho.png"}], 
  events:[
    {pt:"", type:"l", dt:"1995-12-02", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", type:"toi", dt:"1995-12-02", loc:"ter:leto", desc:""},
    {pt:"", type:"oi", dt:"1996-03-17", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", type:"los", dt:"1998-06-24", loc:"esl1", desc:"mal:Attitude Control"},
    {pt:"", type:"ev", dt:"1998-09-16", loc:"esl1", desc:"Regain of Contact"},
    {pt:"", type:"nom", dt:"2018-12-31", loc:"esl1", desc:"?"},
    {pt:"", type:"pom", dt:"2025-12-31", loc:"esl1", desc:""}    
]},
// --- 1996 --- 4 Missions   
near: {name:"NEAR Shoemaker:Near Earth Asteroid Rendezvous", desc:"lv:Delta II 7925-8",
  parts:[
    {names:"", type:"fbm", dest:"ast", stat:"s", ctry:"us", desc:"ag:nasa,gsfc,apl;fam:Discovery;m:805kg;dim:5.4x5.4x1.8m;sc:0.5", id:"1996-008A", url:"hp:near.jhuapl.edu/", icon:"near.png"},
    {type:"om", dest:"ast", stat:"s", ctry:"us", desc:"First asteroid orbiter"},
    {type:"slm", dest:"ast", stat:"s", ctry:"us", desc:"First asteroid lander"}], 
  events:[
    {pt:"", type:"l", dt:"1996-02-17", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", type:"toi", dt:"1996-02-17", loc:"sol:ho", desc:""},
    {pt:"0", type:"fb", dt:"1997-06-27", loc:"ast:1200km", desc:"ast:(253) Mathilde"},
    {pt:"0", type:"fb", dt:"1998-01-23", loc:"ter:540km", desc:"ga"},
    {pt:"0", type:"ev", dt:"1998-12-20", loc:"sol", desc:"mal:Unfiltered accelerometer reading;OI postponed"},
    {pt:"0", type:"fb", dt:"1998-12-23", loc:"ast:3827km", desc:"ast:(433) Eros;eom:fbm"},
    {pt:"1", type:"oi", dt:"2000-02-14", loc:"ast:321x366km", desc:"ast:(433) Eros"},
    {pt:"1", type:"sco", dt:"2000-04-30", loc:"ast:50km", desc:"eom:om"},
    {pt:"2", type:"td", dt:"2001-02-12", loc:"ast", desc:"ast:(433) Eros;Himeros Crater"},
    {pt:"2", type:"los", dt:"2001-03-01", loc:"ast", desc:"eom"}
]},
mgs: {name:"MGS:Mars Global Surveyor", desc:"lv:Delta II 7925",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Mars Surveyor;m:1062.1kg;dim:10.2x1.2x5.9m;sc:0.75;First use of aerobraking to achieve science orbit", id:"1996-062A", url:"hp:mars.jpl.nasa.gov/mgs/;nasa:www.nasa.gov/mission_pages/mgs/index.html;pds:pds-imaging.jpl.nasa.gov/portal/mgs_mission.html", icon:"mgs.png"}], 
  events:[
    {pt:"", type:"l", dt:"1996-11-07", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"toi", dt:"1996-11-07", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"1997-09-12", loc:"mar:258x54021kmx93.26deg", desc:""},
    {pt:"", type:"ev", dt:"1997-09-17", loc:"mar", desc:"Start of Aerobraking"},
    {pt:"", type:"sco", dt:"1999-02-04", loc:"mar:334x421kmx92.9deg", desc:"sso"},
    {pt:"", type:"los", dt:"2006-11-02", loc:"mar", desc:"eom"}
]},
mars96: {name:"Mars 96", desc:"lv:Proton-K/Blok-D2",
  parts:[
    {names:"Марс-96;Mars 8;Mars M1 #520", type:"om", dest:"mar", stat:"f", ctry:"ru", desc:"ag:rsf,iki;fam:UMVL;m:6200kg;dim:7.5x2.4x2.5m;sc:0.9", id:"1996-064A", url:"hp:www.iki.rssi.ru/mars96/mars96hp.html;rsw:www.russianspaceweb.com/mars96.html;ea:www.astronautix.com/craft/marsm1.htm;msss:www.msss.com/mars/mars9x/mars9x.html", icon:"mars96.png"},
    {type:"slm", dest:"mar", stat:"f", ctry:"ru", desc:""},
   {type:"im", dest:"mar", stat:"f", ctry:"ru", desc:""}], 
  events:[
    {pt:"", type:"l", dt:"1996-11-16", loc:"ter:cap:LC-200/39", desc:""},
    {pt:"", type:"toi", dt:"1996-11-17", loc:"sol:hto", desc:"fail:Upper stage premature shutdown"}
]},
marspathfinder: {name:"MPF:Mars Pathfinder", desc:"lv:Delta II 7925",
  parts:[
    {names:"", type:"slm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Discovery;m:870kg;m0:570kg;dim:3.5x3.0x1.5m", id:"1996-068A", url:"hp:mars.nasa.gov/MPF/index1.html;nasa:www.nasa.gov/mission_pages/mars-pathfinder/index.html;pds:pds-imaging.jpl.nasa.gov/portal/mpf_mission.html", icon:"marspf.png"},
    {names:"Sojourner", type:"rvm", dest:"mar", stat:"s", ctry:"us", desc:"First successful Mars rover;m:16kg;sc:0.75", icon:"sojourner.png"}], 
  events:[
    {pt:"", type:"l", dt:"1996-12-04", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", type:"toi", dt:"1996-12-04", loc:"sol:hto", desc:""},
    {pt:"", type:"edl", dt:"1997-07-04", loc:"mar:19.33N,33.55W", desc:"Ares Vallis;Sagan Memorial Station;show:MPF"},
    {pt:"", type:"sep", dt:"1997-07-05", loc:"mar", desc:"lp/rvp"},
    {pt:"", type:"los", dt:"1997-09-27", loc:"mar", desc:"rv:100m"}
]},
// --- 1997 --- 3 Missions
ace: {name:"ACE:Advanced Composition Explorer", desc:"lv:Delta II 7920-8",
  parts:[
    {names:"Explorer 71", type:"obm", dest:"sol", stat:"o", ctry:"us", desc:"ag:nasa,gsfc,apl;fam:Explorer;Observation of Energetic Particles;m:785kg;m0:596kg;dim:8.3x8.3x1.0m;sc:0.5", id:"1997-045A", url:"hp:www.srl.caltech.edu/ACE/;nasa:science.nasa.gov/missions/ace", icon:"ace.png"}], 
  events:[
    {pt:"", type:"l", dt:"1997-08-25", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"toi", dt:"1997-08-25", loc:"ter:leto:177x1370000km", desc:""},
    {pt:"", type:"oi", dt:"1997-12-12", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", type:"nom", dt:"2025-09-30", loc:"esl1", desc:"?"},
    {pt:"", type:"pom", dt:"2025-09-30", loc:"esl1", desc:"?;Fuel Depletion"}
]},
cassini: {name:"Cassini-Huygens", desc:"lv:Titan 401B Centaur T", stat:"s",
  parts:[
    {type:"fbm", dest:"ast", stat:"s", desc:"sc:0.5", ctry:"us;it"},
    {type:"fbm", dest:"jup", stat:"s", ctry:"us;it"},
    {names:"Cassini", type:"om", dest:"sat", stat:"o", ctry:"us;it", desc:"ag:nasa,jpl,asi;fam:Flagship;First Saturn orbiter;m:5655kg;m0:2523kg;dim:14.0x4.0x6.7m", id:"1997-061A", url:"hp:saturn.jpl.nasa.gov/;ciclops:www.ciclops.org/;raw:saturn.jpl.nasa.gov/photos/raw/;tps:www.planetary.org/explore/space-topics/space-missions/cassinis-tour.html;pds:pds-imaging.jpl.nasa.gov/portal/cassini_mission.html;hist:history.nasa.gov/SP-533.pdf;tw:twitter.com/CassiniSaturn", icon:"cassini2.png"},
{names:"Huygens", type:"pm", dest:"sat:tita", stat:"s", ctry:"eu", desc:"ag:esa;First Titan lander;m:319kg;sc:0.75", id:"1997-061C", url:"esa:www.esa.int/Our_Activities/Space_Science/Cassini-Huygens;psa:www.sciops.esa.int/index.php?project=PSA&page=huygens", icon:"huygens.png"}], 
  events:[
    {pt:"", type:"l", dt:"1997-10-15", loc:"ter:cap:LC-40", desc:""},
    {pt:"0", type:"fb", dt:"1998-04-26", loc:"ven:234km", desc:"ga"},
    {pt:"0", type:"toi", dt:"1998-04-26", loc:"sol:ho:0.67x1.01aux1.24deg", desc:""},
    {pt:"0", type:"fb", dt:"1999-06-24", loc:"ven:600km", desc:"ga"},
    {pt:"0", type:"fb", dt:"1999-08-18", loc:"ter:1171km", desc:"ga"},
    {pt:"0", type:"tc", dt:"1998-08-18", loc:"sol:ho:0.86x7.16aux0.71deg", desc:""},
    {pt:"0", type:"fb", dt:"2000-01-23", loc:"ast:1500000km", desc:"ast:(2685) Masursky;eom:fbm:ast"},
    {pt:"1", type:"fb", dt:"2000-12-30", loc:"jup:138x0deg", desc:"ga;Simultaneous Observations with Galileo;eom:fbm:jup"},
    {pt:"0", type:"tc", dt:"2000-12-30", loc:"sol:ho:1.40x9.28aux0.70deg", desc:""},
    {pt:"2", type:"oi", dt:"2004-06-30", loc:"sat:20000x9000000kmx36.8deg", desc:""},
    {pt:"2", type:"sep", dt:"2004-12-25", loc:"sat", desc:"op/dp"},
    {pt:"3", type:"edl", dt:"2005-01-14", loc:"tita", desc:"tm:2.5h;dp"},
    {pt:"3", type:"tdn", dt:"2005-01-14", loc:"tita:10.2S,192.4W", desc:"Shangri-La;dp"},
    {pt:"3", type:"los", dt:"2005-01-14", loc:"tita", desc:"tm:30mn;dp;eom:pm"},
    {pt:"2", type:"obs", dt:"", loc:"sat", desc:"175 Saturn-Moon Flybys in 317 Orbits;op"},
    {pt:"2", type:"sco", dt:"2016-11-29", loc:"sat:90000x1200000kmx6deg", desc:"F-Ring Orbits"},
    {pt:"2", type:"sco", dt:"2017-04-22", loc:"sat:4000x1200000kmx6deg", desc:"Grand Finale Orbits"},
    {pt:"2", type:"ae", dt:"2017-09-15", loc:"sat", desc:"eom"}
]},
hgs1: {name:"Asiasat 3", desc:"lv:Proton K/Blok-DM3",
  parts:[
    {names:"HGS 1", type:"om", dest:"ter", stat:"s", ctry:"cn", desc:"ag:Asiasat;Hughes;m:3465kg;dim:26.2x10.0x4.0m", id:"1997-086A", url:"sse:solarsystem.nasa.gov/missions/profile.cfm?MCode=Asiasat", icon:"asiasat3.png"},
{names:"PAS-22", type:"fbm", dest:"lun", stat:"s", ctry:"us", desc:""}], 
  events:[
    {pt:"", type:"l", dt:"1997-12-24", loc:"ter:bai:LC-81/23", desc:""},
    {pt:"0", type:"oi", dt:"1997-12-24", loc:"ter:geo", desc:"mal:Upper Stage Premature Shutdown"},
    {pt:"1", type:"fb", dt:"1998-05-13", loc:"lun:6200km", desc:"ga"},
    {pt:"1", type:"fb", dt:"1998-06-06", loc:"lun:34300km", desc:"ga"},
    {pt:"0", type:"oi", dt:"1998-06-17", loc:"ter:geo", desc:""},
    {pt:"0", type:"tos", dt:"2002-07", loc:"ter:geo", desc:"Graveyard Orbit;eom"}
]},
// --- 1998 --- 4 Missions   
lunarprospector: {name:"Lunar Prospector", desc:"lv:Athena 2",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Discovery;Carried remains of Eugene Shoemaker;m:300kg;m0:126kg;dim:5.0x5.0x2.0m", id:"1998-001A", url:"hp:lunar.arc.nasa.gov/;lpi:www.lpi.usra.edu/lunar/missions/prospector/", icon:"lunar-prospector.png"}], 
  events:[
    {pt:"", type:"l", dt:"1998-01-07", loc:"ter:cap:LC-46", desc:""},
    {pt:"", type:"oi", dt:"1998-01-11", loc:"lun:83x8469kmx89.72deg", desc:""},
    {pt:"", type:"sco", dt:"1998-01-15", loc:"lun:99.5x101.2kmx90.55deg", desc:""},
    {pt:"", type:"imp", dt:"1999-07-31", loc:"lun:87.7S,42.35E", desc:"near South Pole;eom;show:0"}
]},
nozomi: {name:"Nozomi:Hope", desc:"lv:M-V",
  parts:[
    {names:"のぞみ;Planet-B", type:"om", dest:"mar", stat:"f", ctry:"jp", desc:"ag:isas;m:536kg;m0:258kg;dim:8.6x7.6x1m;sc:0.75", id:"1998-041A", url:"hp:www.isas.ac.jp/e/enterp/missions/nozomi/index.shtml", icon:"nozomi.png"}], 
  events:[
    {pt:"", type:"l", dt:"1998-07-03", loc:"ter:uch:M-5", desc:""},
    {pt:"", type:"toi", dt:"1998-07-03", loc:"ter:heeo:340x400000kmx28.4deg", desc:""},
    {pt:"", type:"fb", dt:"1998-09-24", loc:"lun", desc:"ga"},
    {pt:"", type:"fb", dt:"1998-12-18", loc:"lun", desc:"ga"},
    {pt:"", type:"fb", dt:"1998-12-20", loc:"ter:1000km", desc:"ga"},
    {pt:"", type:"toi", dt:"1998-12-20", loc:"sol:ho:0.976x1.444aux3deg", desc:"mal:Fuel Loss through Valve"},
    {pt:"", type:"ev", dt:"2002-04-21", loc:"so", desc:"mal:Solar Flare Damage"},
    {pt:"", type:"fb", dt:"2002-12", loc:"ter", desc:"ga"},
    {pt:"", type:"fb", dt:"2003-06-19", loc:"ter:11000km", desc:"ga"},
    {pt:"", type:"oi", dt:"2003-12-14", loc:"mar", desc:"fail:Attitude control malfunction"},
    {pt:"", type:"fb", dt:"2003-12-14", loc:"mar:1000km", desc:"eom"}
]},
deepspace1: {name:"DS1:Deep Space 1", desc:"lv:Delta II 7326-9.5",
  parts:[
    {names:"", type:"fbm", dest:"ast", stat:"s", ctry:"us", desc:"ag:nasa,jpl;First use of ion propulsion;m:486.3kg;m0:373.kg;11.75x2.1x2.5m", id:"1998-061A", url:"hp:nmp.jpl.nasa.gov/ds1/", icon:"ds1.png"},
{type:"fbm", dest:"com", stat:"s", desc:"First spacecraft to encounter an asteroid and a comet", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"1998-10-24", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"toi", dt:"1998-10-24", loc:"sol:ho", desc:""},
    {pt:"0", type:"fb", dt:"1999-07-29", loc:"ast:26km", desc:"ast:(9969) Braille"},
    {pt:"1", type:"fb", dt:"2001-09-22", loc:"com:2171km", desc:"com:19P/Borrelly"},
    {pt:"1", type:"tos", dt:"2001-12-18", loc:"sol:ho:1.225x1.462aux0.07deg", desc:"eom"}
]},
mco: {name:"MCO:Mars Climate Orbiter", desc:"lv:Delta II 7425-9.5",
  parts:[
    {names:"Mars Surveyor 98 Orbiter", type:"om", dest:"mar", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Mars Surveyor;m:629kg;m0:338kg;dim:5.5x4x3.8m;sc:0.6", id:"1998-073A", url:"hp:mpfwww.jpl.nasa.gov/msp98/orbiter/", icon:"mco.png"}], 
  events:[
    {pt:"", type:"l", dt:"1998-12-11", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"toi", dt:"1998-12-11", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"1999-09-23", loc:"mar", desc:"fail:Command error;Atmospheric entry?"}
]},
// --- 1999 --- 2 Missions  
mpl: {name:"MPL:Mars Polar Lander;", desc:"lv:Delta II 7425-9.5",
  parts:[
    {names:"Mars Surveyor 98 Lander", type:"slm", dest:"mar", stat:"f", ctry:"us", desc:"ag:nasa,jpl;fam:Mars Surveyor;m:583kg;m0:290kg;dim:3.6x2.4x2.2m;sc:0.5", id:"1999-001A", url:"hp:www.marspolarlander.com/", icon:"mpl.png"},
{names:"DS2:Deep Space 2;Scott & Amundsen", type:"im", dest:"mar", stat:"f", ctry:"us", desc:"3.5kg", icon:"ds2.png"}], 
  events:[
    {pt:"", type:"l", dt:"1999-01-03", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", type:"toi", dt:"1999-01-03", loc:"sol:hto", desc:""},
    {pt:"", type:"edl", dt:"1999-12-03", loc:"mar", desc:"fail:Control system malfunction"},
    {pt:"", type:"imp", dt:"1999-12-03", loc:"mar:76S,195W", desc:"Ultimi Scopuli;show:MPL:NW"}
]},
stardust: {name:"Stardust-NExT", desc:"lv:Delta II 7426-9.5",
  parts:[
    {names:"Stardust", type:"srm", dest:"ism:Interstellar Dust", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Discovery;m:385kg;m0:300kg;dim:4.8x2.0x0.8m;w:0.75", id:"1999-003A", url:"hp:stardust.jpl.nasa.gov/;nasa:www.nasa.gov/mission_pages/stardust/main/index.html", icon:"stardust.png"},
    {type:"srm", dest:"com", stat:"s", ctry:"us", desc:"First cometary coma sample return;sc:0.75", icon:"stardust-srp.png"},
    {type:"ext", names:"NExT:New Exploration of Tempel 1", type:"fbm", dest:"com", stat:"s", ctry:"us", url:"NExT:stardustnext.jpl.nasa.gov/"},
    {type:"fbm", dest:"ast", stat:"s", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"1999-02-07", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"toi", dt:"1999-02-07", loc:"sol:ho", desc:""},
    {pt:"", type:"ev", dt:"2000-02-22..2000-05-01", loc:"sol:ho", desc:"Sample Collection"},
    {pt:"", type:"fb", dt:"2001-02-15", loc:"ter:6008km", desc:"ga"},
    {pt:"0", type:"ev", dt:"2002-07..2002-12", loc:"sol:ho", desc:"Sample Collection"},
    {pt:"2", type:"fb", dt:"2002-11-02", loc:"ast:3300km", desc:"ast:(5535) Annefrank"},
    {pt:"1", type:"enc", dt:"2003-12-24..2004-01-02", loc:"com", desc:"com:81P/Wild 2;Dust Collection;mat:~1mg;"},
    {pt:"1", type:"fb", dt:"2003-12-31", loc:"com:250km", desc:"com:81P/Wild 2"},
    {pt:"", type:"sep", dt:"2006-01-15", loc:"so", desc:"src/fbp"},
    {pt:"", type:"edl", dt:"2006-01-15", loc:"ter:40.37N,113.52W", desc:"src;show:Star:NW;eom:srm;eom:srm"},
    {pt:"3", type:"fb", dt:"2009-01-15", loc:"ter:9200km", desc:"ga"},
    {pt:"3", type:"fb", dt:"2011-02-15", loc:"com", desc:"com:9P/Tempel 1"},
    {pt:"3", type:"tos", dt:"2011-03-24", loc:"sol:ho:0.971x1.728aux8.5deg", desc:"Fuel Depletion;eom"}
]},
// --- 2001 --- 2 Missions   
marsodyssey: {name:"Mars Odyssey", desc:"lv:Delta II 7425-9.5",
  parts:[
    {names:"Mars Surveyor 2001 Orbiter", type:"om", dest:"mar", stat:"o", ctry:"us", desc:"ag:nasa,jpl;m:725kg;m0:376.3kg;dim:7.6x5.5x3.8m", id:"2001-014A", url:"hp:mars.jpl.nasa.gov/odyssey/;themis:themis.asu.edu/;pds:pds-imaging.jpl.nasa.gov/portal/odyssey_mission.html", icon:"mars-odyssey.png"}], 
  events:[
    {pt:"", type:"l", dt:"2001-04-07", loc:"ter:cap:SLC-17A", desc:""},
    {pt:"", type:"toi", dt:"2001-04-07", loc:"sol:hto:0.98x1.38aux3.04deg", desc:""},
    {pt:"", type:"oi", dt:"2001-10-24", loc:"mar:272x26818kmx93.42deg", desc:""},
    {pt:"", type:"ev", dt:"2001-10-26", loc:"mar", desc:"Start of Aerobraking"},
    {pt:"", type:"sco", dt:"2002-01-30", loc:"mar:387x450kmx93deg", desc:"sso"},
    {pt:"", type:"obs", dt:"2014-10-19..2014-10-20", loc:"mar", desc:"Comet C 2013 A1 Siding Spring"},
    {pt:"", type:"nom", dt:"2025-09-30", loc:"mar", desc:"pend"},
    {pt:"", type:"pom", dt:"2025-12", loc:"mar", desc:"Fuel Depletion?"}
]},
genesis: {name:"Genesis", desc:"lv:Delta II 7326-9.5",
  parts:[
    {names:"", type:"obm", dest:"sol", stat:"s", ctry:"us", desc:"ag:nasa,gsfc;fam:Discovery;m:636kg;m0:494kg;dim:6.8x1.5x1.3m;sc:0.5;w:0.9;First return to Earth from beyond lunar orbit", id:"2001-034A", url:"hp:genesismission.jpl.nasa.gov/;nasa:www.nasa.gov/mission_pages/genesis/main/index.html", icon:"genesis.png"},
{names:"{Genesis Sample Return Capsule}", type:"srm", dest:"sol:Solar Wind", stat:"s", ctry:"us", desc:"First solar wind sample return;m:205kg;sc:0.75", id:"2001-034D", icon:"genesis-src.png"}], 
  events:[
    {pt:"", type:"l", dt:"2001-08-08", loc:"ter:cap:SLC-17A", desc:""},
    {pt:"", type:"toi", dt:"2001-08-08", loc:"ter:leto", desc:""},
    {pt:"0", type:"oi", dt:"2001-11-16", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"0", type:"sc", dt:"2001-12-03..2004-04-02", loc:"esl1", desc:"mat:0.4mg"},
    {pt:"1", type:"toi", dt:"2004-04-22", loc:"sol:leto", desc:"eom:obm"},
    {pt:"1", type:"fb", dt:"2004-05-02", loc:"ter", desc:"Flyby of Earth and Earth-Sun L2"},
    {pt:"1", type:"sep", dt:"2004-09-08", loc:"so", desc:"src/bus"},
    {pt:"1", type:"edl", dt:"2004-09-08", loc:"ter", desc:"src;mal:Parachute Deployment"},
    {pt:"1", type:"imp", dt:"2004-09-08", loc:"ter:40.128N,113.51W", desc:"show:Gen;eom"},
    {pt:"0", type:"fb", dt:"2004-09-08", loc:"ter:242km", desc:"bus"},
    {pt:"0", type:"oi", dt:"2004-11-17", loc:"sol:ho:0.896x0.990aux0.27deg", desc:"bus"}  
]},
// --- 2002 --- 1 Mission    
contour: {name:"CONTOUR", desc:"lv:Delta II 7425-9.5",
  parts:[
    {names:"Comet Nucleus Tour", type:"fbm", dest:"com", stat:"f", ctry:"us", desc:"ag:nasa,gsfc,apl;fam:Discovery;m:775kg;m0:328kg;dim:1.8x1.8x2.6m", id:"2002-034A", url:"hp:discovery.nasa.gov/contour.cfml;mishap:www.nasa.gov/pdf/52352main_contour.pdf", icon:"contour.png"}], 
  events:[
    {pt:"", type:"l", dt:"2002-07-03", loc:"ter:cap:SLC-17A", desc:""},
    {pt:"", type:"toi", dt:"2002-07-03", loc:"sol:ho:0.876x1.131aux8.7deg", desc:"fail:Upper stage ignition"}
  //{pt:"", type:"fb", dt:"2003-11-12", loc:"com:100km", desc:"com:2P/Encke"},
  //{pt:"", type:"fb", dt:"2006-06-18", loc:"com:100km", desc:"com:73P/Schwassmann-Wachmann-3"},
  //{pt:"", type:"fb", dt:"2008-08-16", loc:"com:100km", desc:"com:6P/d'Arrest"}
]},
// --- 2003 --- 5 Missions    
hayabusa: {name:"Hayabusa:Peregrine Falcon", desc:"lv:M-V",
  parts:[
    {names:"はやぶさ;MUSES-C", type:"srm", dest:"ast", stat:"s", ctry:"jp", desc:"ag:isas;First asteroid sample return;m:530kg;m0:415kg;dim:6.0x4.2x3.1m;sc:0.75;w:0.8", id:"2003-019A", url:"hp:www.jaxa.jp/projects/sat/muses_c/index_e.html;darts:darts.isas.jaxa.jp/planet/project/hayabusa/index.html", icon:"hayabusa.png"},
    {names:"Minerva:Micro/Nano Experimental Robot Vehicle for Asteroid", type:"hpm", dest:"ast", stat:"f", ctry:"jp", desc:"m:0.6kg"}, 
    {names:"{Hayabusa Sample Return Capsule}", desc:"m:20kg;sc:0.75", icon:"hayabusa-srp.png"}],
  events:[
    {pt:"", type:"l", dt:"2003-05-09", loc:"ter:uch:M-5", desc:""},
    {pt:"", type:"toi", dt:"2003-05-09", loc:"sol:ho", desc:""},
    {pt:"", type:"fb", dt:"2004-05-19", loc:"ter:3725km", desc:"ga"},
    {pt:"", type:"app", dt:"2005-09-12", loc:"ast:20km", desc:"ast:(25143) Itokawa"},
    {pt:"1", type:"td", dt:"2005-11-12", loc:"ast", desc:"dp:Minerva;fail:Trajectory error;fb;eom:hpm"},
    {pt:"0", type:"imp", dt:"2005-11-19", loc:"ast", desc:"Marker probe"},
    {pt:"0", type:"dsc", dt:"2005-11-19", loc:"ast", desc:"mal:Sample collection?"},
    {pt:"0", type:"dsc", dt:"2005-11-24", loc:"ast", desc:"mal:Sample collection;mat:<1g"},
    {pt:"0", type:"los", dt:"2005-12-09", loc:"so", desc:"mal:Attitude control Loss"},
    {pt:"0", type:"ev", dt:"2006-03", loc:"so", desc:"Contact reacquired"},
    {pt:"0", type:"toi", dt:"2007-04-25", loc:"so", desc:"Earth return trajectory"},
    {pt:"0", type:"sep", dt:"2010-06-13", loc:"ter", desc:"bus/src"},
    {pt:"0", type:"edl", dt:"2010-06-13", loc:"ter:30.34S,135.67E", desc:"Woomera Test Range, Australia;show:Haya:SW;eom"}
]},
mex: {name:"MEX:Mars Express", desc:"lv:Soyuz-FG/Fregat",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"o", ctry:"eu", desc:"ag:esa;m:1123kg;m0:637kg;dim:12x1.8x1.5m", id:"2003-022A", url:"hp:www.esa.int/Our_Activities/Space_Science/Mars_Express;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=9;vmc:blogs.esa.int/vmc/;psa:www.sciops.esa.int/index.php?project=PSA&page=mex;tw:twitter.com/esamarswebcam", icon:"mars-express.png"},
{names:"Beagle 2", type:"slm", dest:"mar", stat:"f", ctry:"eu", desc:"ag:esa;m:69kg;m0:33.2kg;sc:0.75", id:"2003-022C", url:"Beagle:beagle2.open.ac.uk/index.htm", icon:"beagle.png"}], 
  events:[
    {pt:"", type:"l", dt:"2003-06-02", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"2003-06-02", loc:"sol:hto", desc:""},
    {pt:"", type:"sep", dt:"2003-12-19", loc:"so", desc:"lp/op"},
    {pt:"1", type:"edl", dt:"2003-12-25", loc:"mar", desc:"fail:Unknown;eom:slm"},
    {pt:"1", type:"imp", dt:"2003-12-25", loc:"mar:11.517N,269.570W", desc:"Isidis Planitia?;show:Beagle 2"},
    {pt:"0", type:"oi", dt:"2003-12-25", loc:"mar:250x150000kmx25deg", desc:""},
    {pt:"0", type:"sco", dt:"2004-01", loc:"mar:298x10107kmx86.3deg", desc:""},
    {pt:"0", type:"fb", dt:"2010-02..2010-03", loc:"Phobos", desc:"12 close Phobos flybys 60-1300km"},
    {pt:"0", type:"fb", dt:"2013-12-29", loc:"Phobos:47km", desc:"Closest Phobos flyby"},
    {pt:"0", type:"obs", dt:"2014-10-17..2014-10-22", loc:"mar", desc:"Comet C 2013 A1 Siding Spring"},
    {pt:"0", type:"sco", dt:"2014-12", loc:"mar:353x10333kmx86.8deg", desc:""},
    {pt:"0", type:"nom", dt:"2020-12-31", loc:"mar", desc:"pend"},
    {pt:"0", type:"pom", dt:"2022-12-31", loc:"mar", desc:""}    
]},
spirit: {name:"Spirit", desc:"lv:Delta II 7925-9.5",
  parts:[
    {names:"MER-A:Mars Exploration Rover A", type:"rvm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:MER;m:1062kg;m0:174kg;dim:2.3x1.6x1.5m;sc:0.5", id:"2003-027A", url:"hp:marsrovers.jpl.nasa.gov/home/index.html;raw:marsrovers.jpl.nasa.gov/gallery/all/spirit.html;tps:www.planetary.org/explore/space-topics/space-missions/mer-updates/;pds:an.rsl.wustl.edu/mer/merbrowser/default.aspx?m=MERA", icon:"mer.png"}], 
  events:[
    {pt:"", type:"l", dt:"2003-06-10", loc:"ter:cap:SLC-17A", desc:""},
    {pt:"", type:"toi", dt:"2003-06-10", loc:"sol:hto:1.02x1.51aux2.57deg", desc:""},
    {pt:"", type:"edl", dt:"2004-01-04", loc:"mar:14.572S,175.478E", desc:"Gusev Crater;Columbia Memorial Station;show:Spirit:SW"},
    {pt:"", type:"sep", dt:"2004-01-15", loc:"mar", desc:"rvp/lp"},
    {pt:"", type:"arr", dt:"2004-03-11", loc:"mar", desc:"Bonneville Crater"},
    {pt:"", type:"arr", dt:"2004-06-17", loc:"mar", desc:"Columbia Hills"},
    {pt:"", type:"arr", dt:"2005-08-21", loc:"mar", desc:"Husband Hill Summit"},
    {pt:"", type:"arr", dt:"2006-02-05", loc:"mar", desc:"Home Plate"},
    {pt:"", type:"ev", dt:"2009-05-01", loc:"mar", desc:"Troy;Stuck in soft soil"},
    {pt:"", type:"los", dt:"2010-03-22", loc:"mar", desc:"rv:7.73km;eom"}
]},
opportunity: {name:"Opportunity", desc:"lv:Delta II 7925H-9.5",
  parts:[
    {names:"MER-B:Mars Exploration Rover B", type:"rvm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:MER;m:1062kg;m0:174kg;dim:2.3x1.6x1.5m;sc:0.5", id:"2003-032A", url:"hp:marsrovers.jpl.nasa.gov/home/index.html;raw:marsrovers.jpl.nasa.gov/gallery/all/opportunity.html;tps:www.planetary.org/explore/space-topics/space-missions/mer-updates/;pds:an.rsl.wustl.edu/mer/merbrowser/default.aspx?m=MERB;tw:twitter.com/MarsRovers", icon:"mer.png"}], 
  events:[
    {pt:"", type:"l", dt:"2003-07-08", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", type:"toi", dt:"2003-07-08", loc:"sol:hto:1.00x1.52aux7.23deg", desc:""},
    {pt:"", type:"edl", dt:"2004-01-25", loc:"mar:1.946S,354.473E", desc:"Meridiani Planum;Challenger Memorial Station;show:Opportunity"},
    {pt:"", type:"sep", dt:"2004-01-29", loc:"mar", desc:"rvp/lp"},
    {pt:"", type:"arr", dt:"2004-04-20", loc:"mar", desc:"Endurance Crater"},
    {pt:"", type:"ev", dt:"2005-04-26", loc:"mar", desc:"Purgatory;mal:Stuck in Sand"},
    {pt:"", type:"ev", dt:"2005-06-04", loc:"mar", desc:"End of Purgatory"},
    {pt:"", type:"arr", dt:"2006-09-27", loc:"mar", desc:"Victoria Crater"},
    {pt:"", type:"arr", dt:"2011-08-09", loc:"mar", desc:"Endeavour Crater"},
    {pt:"", type:"obs", dt:"2014-10-19", loc:"mar", desc:"Comet C 2013 A1 Siding Spring"},
    {pt:"", type:"ex", dt:"", loc:"mar", desc:"rv:45.161km"},
    {pt:"", type:"los", dt:"2018-06-10", loc:"mar", desc:"eom"}    
]},
smart1: {name:"SMART 1:Small Missions for Advanced Research in Technology 1", desc:"lv:Ariane 5G",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"s", ctry:"eu", desc:"ag:esa;m:366.5kg;m0:255kg;dim:14x1.0x1.0m", id:"2003-043C", url:"hp:www.esa.int/Our_Activities/Space_Science/SMART-1;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=10;psa:www.sciops.esa.int/index.php?project=PSA&page=smart1", icon:"smart1.png"}], 
  events:[
    {pt:"", type:"l", dt:"2003-09-27", loc:"ter:kou:ELA-3", desc:""},
    {pt:"", type:"toi", dt:"2003-09-27", loc:"ter:gto", desc:"leto"},
    {pt:"", type:"fb", dt:"2004-08-19", loc:"lun:197000km", desc:"5\u20441 orbit resonance"},
    {pt:"", type:"fb", dt:"2004-09-15", loc:"lun:?", desc:"4\u20441 orbit resonance"},
    {pt:"", type:"fb", dt:"2004-10-12", loc:"lun:?", desc:"3\u20441 orbit resonance"},
    {pt:"", type:"oi", dt:"2004-11-15", loc:"lun:6700x53200kmx81deg", desc:"2\u20441 orbit resonance"},
    {pt:"", type:"sco", dt:"2005-02-18", loc:"lun:2200x4600kmx90deg", desc:""},
    {pt:"", type:"imp", dt:"2006-09-03", loc:"lun:34.262S,46.193W", desc:"Lacus Excellentiae;eom;show:0"}
]},
// --- 2004 --- 2 Missions    
rosetta: {name:"Rosetta", desc:"lv:Ariane 5G+", stat:"o",
  parts:[
    {names:"", type:"fbm", dest:"ast", stat:"s", ctry:"eu", desc:"ag:esa;m:3000kg;m0:1330kg;dim:32x2.8x4.4m;sc:1;w:0.5", id:"2004-006A", url:"hp:www.esa.int/Our_Activities/Space_Science/Rosetta;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=13;psa:www.sciops.esa.int/index.php?project=PSA&page=rosetta;tw:twitter.com/ESA_Rosetta", icon:"rosetta.png"},
{type:"om", dest:"com", stat:"s", desc:"First comet orbiter", ctry:"eu"},
{names:"Philae Lander", type:"slm", dest:"com", stat:"s", ctry:"eu", desc:"sc:0.75;m:100kg;First comet landing", url:"tw:twitter.com/Philae2014", icon:"philae.png"}], 
  events:[
    {pt:"", type:"l", dt:"2004-03-02", loc:"ter:kou:ELA-3", desc:""},
    {pt:"0", type:"toi", dt:"2004-03-02", loc:"sol:ho", desc:""},
    {pt:"0", type:"fb", dt:"2005-03-04", loc:"ter", desc:"ga"},
    {pt:"0", type:"app", dt:"2006-07-06", loc:"com:0.06au", desc:"com:45P/Honda-Mrkos-Pajdusakova"},
    {pt:"0", type:"fb", dt:"2007-02-25", loc:"mar:250km", desc:"ga"},
    {pt:"0", type:"fb", dt:"2007-11-13", loc:"ter:5295km", desc:"ga"},
    {pt:"0", type:"fb", dt:"2008-09-05", loc:"ast:800km", desc:"ast:2867 Steins"},
    {pt:"0", type:"fb", dt:"2009-11-13", loc:"ter:2481km", desc:"ga"},
    {pt:"0", type:"fb", dt:"2010-07-10", loc:"ast:3000km", desc:"ast:21 Lutetia;eom:fbm"},
    {pt:"0", type:"ev", dt:"2011-06-08..2014-01-20", loc:"sol:ho:0.98x5.09aux4.4deg", desc:"hib"},
    {pt:"1", type:"app", dt:"2014-05..2014-08", loc:"com", desc:"com:67P/Churyumov-Gerasimenko"},
    {pt:"1", type:"oi", dt:"2014-08-06", loc:"com:100km", desc:"Triangular Survey Trajectory"},
    {pt:"1", type:"sco", dt:"2014-08-24", loc:"com:50km", desc:"Triangular Survey Trajectory"},
    {pt:"1", type:"sco", dt:"2014-09-10", loc:"com:30km", desc:"Global Mapping Orbit"},
    {pt:"1", type:"sco", dt:"2014-09-29", loc:"com:20..10km", desc:"Close Observation Orbit"},
    {pt:"2", type:"td", dt:"2014-11-12", loc:"com", desc:"Abydos;SDL:Separation, Descent and Landing;after 2 bounces;dp:Philae"},
    {pt:"2", type:"los", dt:"2014-11-15", loc:"com", desc:"dp:Philae; Hibernation"},
    {pt:"1", type:"fb", dt:"2015-02-14", loc:"com:6km", desc:"Closest ever flyby"},
    {pt:"2", type:"ev", dt:"2015-06-13", loc:"com", desc:"dp:Philae;Wakeup from hibernation"},
    {pt:"2", type:"los", dt:"2015-07-09", loc:"com", desc:"dp:Philae;eom"},
    {pt:"1", type:"td", dt:"2016-09-30", loc:"com", desc:"eom;Comet touchdown"}    
]},
messenger: {name:"MESSENGER:Mercury Surface, Space Environment, Geochemistry and Ranging", desc:"lv:Delta II 7925H-9.5", stat:"s",
  parts:[
    {names:"", type:"fbm", dest:"mer", stat:"s", ctry:"us", desc:"ag:nasa,gsfc,apl;fam:Discovery;First Mercury orbiter;m:1093kg;m0:485.2kg;dim:6.0x5.0x2.5m;sc:0.5", id:"2004-030A", url:"hp:messenger.jhuapl.edu/;nasa:www.nasa.gov/mission_pages/messenger/main/index.html;pds:pds-imaging.jpl.nasa.gov/portal/messenger_mission.html;tw:twitter.com/MESSENGER2011", icon:"messenger.png"},
    {type:"om", dest:"mer", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"2004-08-03", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", type:"toi", dt:"2004-08-03", loc:"sol:hto:0.92x1.08aux6.4deg", desc:""},
    {pt:"1", type:"fb", dt:"2005-08-02", loc:"ter:2347km", desc:"ga"},
    {pt:"1", type:"fb", dt:"2006-10-24", loc:"ven:2990km", desc:"ga"},
    {pt:"1", type:"fb", dt:"2007-06-05", loc:"ven:337km", desc:"ga"},
    {pt:"1", type:"fb", dt:"2008-01-14", loc:"mer:201km", desc:""},
    {pt:"1", type:"fb", dt:"2008-10-06", loc:"mer:200km", desc:""},
    {pt:"1", type:"fb", dt:"2009-09-29", loc:"mer:228km", desc:"eom:fbm"},
    {pt:"0", type:"oi", dt:"2011-03-18", loc:"mer", desc:""},
    {pt:"0", type:"sco", dt:"2011-04-04", loc:"mer:200x15193kmx80deg", desc:""},
    {pt:"0", type:"imp", dt:"2015-04-30", loc:"mer:54.4398N,210.1205E", desc:"Shakespeare basin;eom;show:MESSENGER"}
]},
// --- 2005 --- 3 Missions    
deepimpact: {name:"Deep Impact", desc:"lv:Delta II 7425-9.5", stat:"s",
  parts:[
    {names:"", type:"fbm", dest:"com", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Discovery;m:650kg;dim:3.2x1.7x2.3m;sc:0.3", id:"2005-001A", url:"hp:deepimpact.jpl.nasa.gov/", icon:"deep-impact.png"},
{names:"DII:Deep Impact Impactor", type:"im", dest:"com", stat:"s", ctry:"us", desc:"First comet impact;sc:0.5;m:370kg", icon:"dii.png"},
{names:"EPOXI", type:"fbm", dest:"com", stat:"s", ctry:"us", url:"epoxi:www.nasa.gov/epoxi"},
{type:"fbm", dest:"ast", stat:"f"}], 
  events:[
    {pt:"", type:"l", dt:"2005-01-12", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", type:"toi", dt:"2005-01-12", loc:"sol:ho:0.981x1.628aux0.6", desc:""},
    {pt:"", type:"sep", dt:"2005-07-03", loc:"so", desc:"ip/fbp"},
    {pt:"1", type:"imp", dt:"2005-07-04", loc:"com", desc:"ip;eom:im;com:9P/Tempel 1"},
    {pt:"0", type:"fb", dt:"2005-07-04", loc:"com:500km", desc:"com:9P/Tempel 1"},
    {pt:"2", type:"fb", dt:"2007-12-31", loc:"ter:?km", desc:""},
    {pt:"2", type:"fb", dt:"2008-12-29", loc:"ter:?km", desc:""},
    {pt:"2", type:"fb", dt:"2010-06-27", loc:"ter:30496km", desc:""},
    {pt:"2", type:"fb", dt:"2010-11-04", loc:"com:700km", desc:"com:103P/Hartley 2"},
    {pt:"3", type:"tc", dt:"2011-11-24", loc:"so", desc:"to Asteroid (163249) 2002GT"},
    {pt:"3", type:"obs", dt:"2012-02", loc:"so", desc:"Comet C/2009 P1 (Garradd)"},
    {pt:"3", type:"obs", dt:"2013-01", loc:"so", desc:"Comet C/2012 S1 (ISON)"},
    {pt:"3", type:"los", dt:"2013-08-14", loc:"sol:ho:0.97x1.21aux3.2deg", desc:"fail:Timer overrun?;eom"}
]},
mro: {name:"MRO:Mars Reconnaissance Orbiter", desc:"lv:Atlas V 401",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"o", ctry:"us", desc:"ag:nasa,jpl;m:2180kg;m0:1031kg;dim:12x2x6m", id:"2005-029A", url:"hp:mars.jpl.nasa.gov/mro/;raw:hirise.lpl.arizona.edu/katalogos.php;pds:pds-imaging.jpl.nasa.gov/portal/mro_mission.html", icon:"mro.png"}], 
  events:[
    {pt:"", type:"l", dt:"2005-08-12", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"toi", dt:"2005-08-12", loc:"sol:hto:1.00x1,68aux3.06deg", desc:""},
    {pt:"", type:"oi", dt:"2006-03-10", loc:"mar:426x43000kmx93.3deg", desc:""},
    {pt:"", type:"ev", dt:"2006-03-30..2006-10-01", loc:"mar", desc:"Aerobraking"},
    {pt:"", type:"sco", dt:"2006-11-01", loc:"mar:255x320kmx93deg", desc:"sso"},
    {pt:"", type:"obs", dt:"2014-10-09..2014-10-22", loc:"mar", desc:"Comet C 2013 A1 Siding Spring"},
    {pt:"", type:"nom", dt:"2025-09-30", loc:"mar", desc:"pend"},
    {pt:"", type:"pom", dt:"2025-12-31", loc:"mar", desc:""}
]},
vex: {name:"VEX:Venus Express", desc:"lv:Soyuz-FG/Fregat",
  parts:[
    {names:"", type:"om", dest:"ven", stat:"s", ctry:"eu", desc:"ag:esa;m:1240kg;m0:670kg;dim:6.6x1.7x1.4m;sc:0.5", id:"2005-045A", url:"hp:www.esa.int/Our_Activities/Space_Science/Venus_Express;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=64;psa:www.sciops.esa.int/index.php?project=PSA&page=vex", icon:"vex.png"}], 
  events:[
    {pt:"", type:"l", dt:"2005-11-09", loc:"ter:bai:LC-31", desc:""},
    {pt:"", type:"toi", dt:"2005-11-09", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"2006-04-11", loc:"ven:400x350000kmx82deg", desc:""},
    {pt:"", type:"sco", dt:"2006-05-07", loc:"ven:250x66000kmx82deg", desc:""},
    {pt:"", type:"sco", dt:"2008-08-03", loc:"ven:185x66600kmx82deg", desc:"per:24h"},
    //{pt:"", type:"ev", dt:"2014-05-15", loc:"ven", desc:"End of Science Operations"},
    {pt:"", type:"ev", dt:"2014-06-18..2014-07-11", loc:"ven", desc:"Experimental Aerobraking"},
    {pt:"", type:"ev", dt:"2014-11-28", loc:"ven", desc:"Fuel depletion"},
    {pt:"", type:"los", dt:"2015-01-19", loc:"ven", desc:"eom;Last carrier signal heard"}
]},
// --- 2006 --- 3 Missions
newhorizons: {name:"New Horizons", desc:"lv:Atlas V 551", stat:"o",
  parts:[
    {names:"", type:"fbm", dest:"jup", stat:"s", ctry:"us", desc:"ag:nasa,gsfc,apl;fam:New Frontiers;m:465kg;m0:385kg;dim:3.11x2.74x1m", id:"2006-001A", url:"hp:pluto.jhuapl.edu;nasa:www.nasa.gov/mission_pages/newhorizons/main/index.html;tw:twitter.com/NASANewHorizons", icon:"new-horizons.png"},
{type:"fbm", dest:"tno:plu", stat:"s", ctry:"us", desc:"First Pluto flyby"},
{type:"fbm", dest:"tno:kbo", stat:"o", ctry:"us", desc:"First KBO flyby"},
{type:"etm", dest:"ism", stat:"o", ctry:"us"}], 
  events:[
    {pt:"", type:"l", dt:"2006-01-19", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"toi", dt:"2006-01-19", loc:"sol:ho", desc:""},
    {pt:"0", type:"fb", dt:"2006-06-13", loc:"ast:101867km", desc:"ast:(268729) APL"},
    {pt:"0", type:"enc", dt:"2006-09-04..2007-06-30", loc:"jup", desc:""},
    {pt:"0", type:"fb", dt:"2007-02-28", loc:"jup:32x0deg", desc:"eom:fbm:jup"},
    {pt:"3", type:"tc", dt:"2007-02-28", loc:"sol:et:2.26aux1.4ex2.34deg", desc:""},
    {pt:"1", type:"app", dt:"2015-01-06", loc:"plu", desc:"Begin Approach Phase"},
    {pt:"1", type:"enc", dt:"2015-07-13..2016-07-15", loc:"plu", desc:""},
    {pt:"1", type:"fb", dt:"2015-07-14", loc:"plu:13700km", desc:"eom:fbm:plu"},
    {pt:"3", type:"tc", dt:"2015-07-14", loc:"sol:et:2.25aux1.4ex2.4deg", desc:""},
    {pt:"1", type:"obs", dt:"2015-11..2016-04", loc:"sol:et", desc:"1994 JR1, 111..280 million km dist."},
    {pt:"1", type:"dep", dt:"2016-01-15", loc:"plu", desc:"End Departure Phase"},
    {pt:"2", type:"ft", dt:"2016..2022", loc:"kui", desc:""},
    {pt:"2", type:"fb", dt:"2019-01-01", loc:"kbo:3500km", desc:"2014 MU69;eom:fbm"},
    {pt:"3", type:"tr", dt:"2023", loc:"sol:et", desc:"isp"},
    {pt:"3", type:"nom", dt:"2029", loc:"et", desc:"?"}
]},
stereoa: {name:"STEREO A:Solar Terrestrial Relations Observatory A", desc:"lv:Delta II 7925-10L",
  parts:[
    {names:"STEREO Ahead", type:"obm", dest:"sol", stat:"o", ctry:"us", desc:"ag:nasa,gsfc,apl;m:620kg;dim:6.47x2.03x4.0m;fam:stp;Heliophysics Observatory", id:"2006-047A", url:"hp:stereo.gsfc.nasa.gov/;apl:stereo.jhuapl.edu/;raw:stereo-ssc.nascom.nasa.gov/beacon/beacon_secchi.shtml", icon:"stereo.png"}], 
  events:[
    {pt:"", type:"l", dt:"2006-10-26", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", type:"fb", dt:"2006-12-15", loc:"lun:7340km", desc:"ga"},
    {pt:"", type:"oi", dt:"2006-12-15", loc:"sol:ho:0.956x0.967aux0.13deg", desc:"Earth-leading Orbit"},
    {pt:"", type:"ev", dt:"2011-02-06", loc:"so", desc:"180\u00b0 Separation from Stereo B"},
    {pt:"", type:"nom", dt:"2024-09-30", loc:"so", desc:""},
    {pt:"", type:"pom", dt:"2026-10-01", loc:"so", desc:""}
]},
stereob: {name:"STEREO B:Solar Terrestrial Relations Observatory B", desc:"lv:Delta II 7925-10L",
  parts:[
    {names:"STEREO Behind", type:"obm", dest:"sol", stat:"o", ctry:"us", desc:"ag:nasa,gsfc,apl;m:620kg;dim:6.47x2.03x4.0m;fam:stp;Heliophysics Observatory", id:"2006-047B", url:"hp:stereo.gsfc.nasa.gov/;apl:stereo.jhuapl.edu/;raw:stereo-ssc.nascom.nasa.gov/beacon/beacon_secchi.shtml", icon:"stereo.png"}], 
  events:[
    {pt:"", type:"l", dt:"2006-10-26", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", type:"fb", dt:"2006-12-15", loc:"lun:11776km", desc:"ga"},
    {pt:"", type:"fb", dt:"2007-01-21", loc:"lun:8818km", desc:"ga"},
    {pt:"", type:"oi", dt:"2007-01-21", loc:"sol:ho:1.00x1.086aux0.29deg", desc:"Earth-following Orbit"},
    {pt:"", type:"ev", dt:"2011-02-06", loc:"so", desc:"180\u00b0 Separation from Stereo A"},
    {pt:"", type:"los", dt:"2014-10-01", loc:"so", desc:"fail:Attitude control system;hib"},
    {pt:"", type:"ev", dt:"2016-08-21", loc:"so", desc:"Reestablishment of contact;wake"},
    {pt:"", type:"los", dt:"2016-09-23", loc:"so", desc:"eom;Final loss of contact"}
]},
// --- 2007 --- 5 Missions     
artemis: {name:"ARTEMIS:Acceleration, Reconnection, Turbulence and Electrodynamics of the Moon's Interaction with the Sun", desc:"lv:Delta II 7925-10C",
  parts:[
    {names:"THEMIS B/C;Explorer 86/87", type:"om", dest:"lun", stat:"o", ctry:"us", desc:"ag:nasa,gsfc;fam:Explorer;m:125kg;m0:77kg;dim:40x10x3m", id:"2007-004B;2007-004C", url:"hp:artemis.ssl.berkeley.edu/;nasa:www.nasa.gov/mission_pages/artemis/;lpi:www.lpi.usra.edu/decadal/leag/KrishanKhuranav2.pdf", icon:"artemis.png"}], 
  events:[
    {pt:"", type:"l", dt:"2007-02-17", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", type:"sco", dt:"2007-07-17", loc:"ter:heeo:470x87330kmx16deg", desc:""},
    {pt:"", type:"toi", dt:"2009-10", loc:"ter:heeo", desc:"TLI"},
    {pt:"", type:"sco", dt:"2010-10", loc:"lun", desc:"Lunar Lissajous Orbits"},
    {pt:"", type:"oi", dt:"2011-07-02", loc:"lun", desc:"ARTEMIS P1"},
    {pt:"", type:"oi", dt:"2011-07-17", loc:"lun", desc:"ARTEMIS P2"},
    {pt:"", type:"sco", dt:"2012-08-15", loc:"lun:3543x27000km", desc:""},
    {pt:"", type:"nom", dt:"2020-12-31", loc:"lun", desc:"?;Fuel Depletion"},
    {pt:"", type:"pom", dt:"2021-09-30", loc:"lun", desc:""},
]},
phoenix: {name:"Phoenix", desc:"lv:Delta II 7925-9.5",
  parts:[
    {names:"Phoenix Mars Lander", type:"slm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Mars Scout;m:680kg;m0:350kg;dim:5.5x2.4x2.2m;sc:0.7", id:"2007-034A", url:"hp:phoenix.lpl.arizona.edu/mission.php;nasa:www.nasa.gov/mission_pages/phoenix/main/index.html;pds:an.rsl.wustl.edu/phx", icon:"phoenix.png"}], 
  events:[
    {pt:"", type:"l", dt:"2007-08-04", loc:"ter:cap:SLC-17A", desc:""},
    {pt:"", type:"toi", dt:"2007-08-04", loc:"sol:hto:0.975x1.667aux3.4deg", desc:""},
    {pt:"", type:"edl", dt:"2008-05-25", loc:"mar:68.15N,125.9W", desc:"Vastitas Borealis;show:Phoenix"},
    {pt:"", type:"los", dt:"2008-11-02", loc:"mar", desc:"eom"}
]},
kaguya: {name:"Kaguya:Moon Princess", desc:"lv:H-IIA 2022",
  parts:[
    {names:"かぐや;SELENE:Selenological and Engineering Explorer", type:"om", dest:"lun", stat:"s", ctry:"jp", desc:"ag:jaxa;m:2885kg;m0:1984kg;dim:32x32x12.8m;sc:0.5", id:"2007-039A", url:"hp:www.kaguya.jaxa.jp/en/index.htm;darts:l2db.selene.darts.isas.jaxa.jp/index.html.en", icon:"kaguya.png"},
    {names:"Okina;R-STAR", type:"om", dest:"lun", stat:"s", ctry:"jp", id:"2007-039B", desc:"sc:0.5", icon:"kaguya-i.png"},
    {names:"Ouna; VRAD", type:"om", dest:"lun", stat:"s", ctry:"jp", id:"2007-039C", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2007-09-14", loc:"ter:tng:YLP-1", desc:""},
    {pt:"", type:"toi", dt:"2007-09-17", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"2007-10-03", loc:"lun:101x11471kmx90deg", desc:""},
    {pt:"", type:"sep", dt:"2007-10-09", loc:"lun", desc:"ssp/op;Okina"},
    {pt:"1", type:"sco", dt:"2007-10-09", loc:"lun:100x2400kmx90deg", desc:"ssp:Okina"},
    {pt:"", type:"sep", dt:"2007-10-12", loc:"lun", desc:"ssp/op;Ouna"},
    {pt:"2", type:"sco", dt:"2007-10-12", loc:"lun:100x800kmx90deg", desc:"ssp:Ouna"},
    {pt:"0", type:"sco", dt:"2007-10-19", loc:"lun:100kmx90deg", desc:"op"},
    {pt:"0", type:"sco", dt:"2009-02-01", loc:"lun:50kmx90deg", desc:"op"},
    {pt:"1", type:"imp", dt:"2009-02-12", loc:"lun:28.213N,200.967E", desc:"Mineur Crater;ssp:Okina;show:0"},
    {pt:"0", type:"imp", dt:"2009-06-10", loc:"lun:65.5S,80.4E", desc:"Gill Crater;op;eom;show:0"},
    {pt:"2", type:"imp", dt:"2009-06-29", loc:"lun", desc:"ssp:Ouna;show:0"}
]},
dawn: {name:"Dawn", desc:"lv:Delta II 7925H-9.5", stat:"s",
  parts:[
    {names:"", type:"om", dest:"ast:Vesta", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Discovery;First orbiter around two destinations other than Earth;m:1217.7kg;m0:747m;dim:19.7x6.64x1.77m;sc:1", id:"2007-043A", url:"hp:www-ssc.igpp.ucla.edu/dawn/;jpl:dawn.jpl.nasa.gov/;tw:twitter.com/NASA_Dawn", icon:"dawn.png"},
{names:"", type:"om", dest:"ast:Ceres", stat:"o", ctry:"us", desc:"First dwarf planet orbiter"}], 
  events:[
    {pt:"", type:"l", dt:"2007-09-27", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", type:"toi", dt:"2007-09-27", loc:"sol:ho", desc:""},
    {pt:"", type:"fb", dt:"2009-02-18", loc:"mar:542km", desc:"ga"},
    {pt:"0", type:"oi", dt:"2011-07-16", loc:"ast", desc:"ast:(4) Vesta"},
    {pt:"0", type:"sco", dt:"2011-08-02", loc:"ast:2735km", desc:"Survey orbit"},
    {pt:"0", type:"sco", dt:"2011-09-29", loc:"ast:685km", desc:"HAMO1:High Altitude Mapping Orbit 1"},
    {pt:"0", type:"sco", dt:"2011-12-02", loc:"ast:210km", desc:"LAMO:Low Altitude Mapping Orbit"},
    {pt:"0", type:"sco", dt:"2012-06-15", loc:"ast:685km", desc:"HAMO2:High Altitude Mapping Orbit 2"},
    {pt:"0", type:"dep", dt:"2012-09-05", loc:"ast", desc:"ast:(4) Vesta"},
    {pt:"1", type:"oi", dt:"2015-03-06", loc:"ast:13000x76000kmx31deg", desc:"ast:(1) Ceres"},
    {pt:"1", type:"sco", dt:"2015-04-23", loc:"ast:13600km", desc:"RC3 orbit"},
    {pt:"1", type:"sco", dt:"2015-06-06", loc:"ast:4400km", desc:"Survey orbit"},
    {pt:"1", type:"sco", dt:"2015-08-17", loc:"ast:1470km", desc:"HAMO:High Altitude Mapping Orbit"},
    {pt:"1", type:"sco", dt:"2015-12-16", loc:"ast:385km", desc:"LAMO/XMO1:Low Altitude Mapping Orbit/Extended Mission Orbit 1"},
    {pt:"1", type:"sco", dt:"2016-10-16", loc:"ast:1480km", desc:"XMO2:Extended Mission Orbit 2"},
    {pt:"1", type:"sco", dt:"2017-01-27", loc:"ast:7520x9350km", desc:"XMO3:Extended Mission Orbit 3"},
    {pt:"1", type:"sco", dt:"2017-04-22", loc:"ast:13830x52800km", desc:"XMO4:Extended Mission Orbit 4"},
    {pt:"1", type:"sco", dt:"2017-06-30", loc:"ast:4400x39100km", desc:"XMO5:Extended Mission Orbit 5"},
    {pt:"1", type:"sco", dt:"2018-05-14", loc:"ast:375x4800km", desc:"XMO6:Extended Mission Orbit 6"},
    {pt:"1", type:"sco", dt:"2018-06-07", loc:"ast:35x4000km", desc:"XMO7:Extended Mission Orbit 7"},
    {pt:"1", type:"los", dt:"2018-10-31", loc:"ast", desc:"eom"}
]},
change1: {name:"Chang'e 1", desc:"lv:CZ-3A",
  parts:[
    {names:"嫦娥一号", type:"om", dest:"lun", stat:"s", ctry:"cn", desc:"ag:cnsa;fam:clep;m:2350kg;m0:1150kg;dim:18x2.2x2.2m;sc:0.75", id:"2007-051A", url:"hp:www.cnsa.gov.cn/n615709/n772514/n772543/93747.html;data:moon.bao.ac.cn/index_en.jsp;directory.eoportal.org/web/eoportal/satellite-missions/c-missions/chang-e-1;ea:www.astronautix.com/craft/change.htm", icon:"chang-e1.png"}], 
  events:[
    {pt:"", type:"l", dt:"2007-10-24", loc:"ter:xch:LC-3", desc:""},
    {pt:"", type:"oi", dt:"2007-10-24", loc:"ter:heeo", desc:"Phasing orbits"},
    {pt:"", type:"toi", dt:"2007-10-31", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"2007-11-05", loc:"lun", desc:""},
    {pt:"", type:"sco", dt:"2007-11-07", loc:"lun:200kmx64deg", desc:""},
    {pt:"", type:"sco", dt:"2008-12-19", loc:"lun:15x100kmx64deg", desc:""},
    {pt:"", type:"imp", dt:"2009-03-01", loc:"lun:1.50S,52.36E", desc:"Mare Fecunditatis;eom;show:0"}
]},
// --- 2008 --- 1 Mission     
chandrayaan1: {name:"Chandrayaan 1:Moon Craft", desc:"lv:PSLV-XL",
  parts:[
    {names:"चन्द्रयान-१", type:"om", dest:"lun", stat:"s", ctry:"ind", desc:"ag:isro;m:1050kg;m0:523kg;dim:3.5x1.5x1.5m", id:"2008-052A", url:"hp:www.isro.org/chandrayaan/htmls/home.htm;issdc:www.issdc.gov.in/chandrayaan1.html", icon:"chandrayaan1.png"},
{names:"{Chandrayaan Moon Impact Probe};MIP:Moon Impact Probe", type:"im", dest:"lun", stat:"s", ctry:"ind", desc:"sc:0.5", icon:"chandrayaan-mip.png"}], 
  events:[
    {pt:"", type:"l", dt:"2008-10-21", loc:"ter:sri:SLP", desc:""},
    {pt:"", type:"toi", dt:"2008-10-22", loc:"ter:heeo", desc:"Phasing Orbit"},
    {pt:"", type:"oi", dt:"2008-11-08", loc:"lun:504x7502km", desc:""},
    {pt:"", type:"sep", dt:"2008-11-14", loc:"lun", desc:"op/ip"},
    {pt:"1", type:"imp", dt:"2008-11-14", loc:"lun:89S,30W", desc:"Shackleton Crater;ip:MIP;eom:im;show:CH1 MIP"},
    {pt:"0", type:"sco", dt:"2008-12", loc:"lun:100x100kmx90deg", desc:"op"},
    {pt:"0", type:"los", dt:"2009-08-28", loc:"lun", desc:"eom"}
]},
// --- 2009 --- 2 Missions     
lro: {name:"LRO:Lunar Reconnaissance Orbiter", desc:"lv:Atlas V 401",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"o", ctry:"us", desc:"ag:nasa,gsfc;fam:Lunar Quest;m:1846kg;m0:949kg;dim:6.0x4.27x7.0m;sc:0.6", id:"2009-031A", url:"hp:lro.gsfc.nasa.gov/;nasa:www.nasa.gov/mission_pages/LRO/main/index.html;raw:lroc.sese.asu.edu/;pds:pds-imaging.jpl.nasa.gov/portal/lro_mission.html;tw:twitter.com/LRO_NASA", icon:"lro.png"}], 
  events:[
    {pt:"", type:"l", dt:"2009-06-18", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"oi", dt:"2009-06-23", loc:"lun:220x3100kmx90deg", desc:""},
    {pt:"", type:"sco", dt:"2009-09-18", loc:"lun:50kmx90deg", desc:"Survey Orbit"},
    {pt:"", type:"sco", dt:"2010-09-16", loc:"lun:30x216kmx90deg", desc:""},
    {pt:"", type:"nom", dt:"2025-09-30", loc:"lun", desc:"pend"},
    {pt:"", type:"pom", dt:"2025-12-31", loc:"lun", desc:"?"}
]},
lcross: {name:"LCROSS:Lunar Crater Observation and Sensing Satellite", desc:"lv:Atlas V 401",
  parts:[
    {names:"S-SC:Shepherding Spacecraft;Centaur Upper Stage", type:"im", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,arc;m:891kg,2300kg;m0:534kg;dim:2.6x2.6x15m;w:0.55", id:"2009-031B", url:"hp:lcross.arc.nasa.gov/;nasa:www.nasa.gov/mission_pages/LCROSS/main/index.html;pds:an.rsl.wustl.edu/lcross", icon:"lcross.png"}], 
  events:[
    {pt:"", type:"l", dt:"2009-06-18", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"toi", dt:"2009-06-18", loc:"ter:leto", desc:""},
    {pt:"", type:"fb", dt:"2009-06-23", loc:"lun:3200km", desc:""},
    {pt:"", type:"sep", dt:"2009-10-09", loc:"lun", desc:"S-SC/Centaur"},
    {pt:"", type:"imp", dt:"2009-10-09", loc:"lun:84.678S,311.275E", desc:"Cabeus Crater;Centaur Stage;show:LCROSS:NW"},
    {pt:"", type:"imp", dt:"2009-10-09", loc:"lun:84.72S,310.38E", desc:"Cabeus Crater;S-SC:Shepherding Spacecraft;show:0;eom"}
]},
// --- 2010 --- 3 Missions     
akatsuki: {name:"Akatsuki:Dawn", desc:"lv:H-IIA 202",
  parts:[
    {names:"あかつき;VCO:Venus Climate Orbiter;Planet-C", type:"om", dest:"ven", stat:"o", ctry:"jp", desc:"ag:jaxa;m:517kg;m0:320kg;dim:7.0x1.7x1.6m;sc:0.4", id:"2010-020D", url:"hp:akatsuki.isas.jaxa.jp/en/;jaxa:www.isas.jaxa.jp/en/missions/spacecraft/current/akatsuki.html;darts:darts.isas.jaxa.jp/planet/project/akatsuki/;tw:twitter.com/Akatsuki_JAXA", icon:"akatsuki.png"},
{type:"fbm", dest:"ven", stat:"o", ctry:"jp"}], 
  events:[
    {pt:"", type:"l", dt:"2010-05-20", loc:"ter:tng:YLP-1", desc:""},
    {pt:"", type:"toi", dt:"2010-05-20", loc:"sol:hto", desc:""},
    {pt:"1", type:"oi", dt:"2010-12-07", loc:"ven:300x79000km", desc:"mal:Premature Engine Shutdown"},
    {pt:"1", type:"fb", dt:"2010-12-07", loc:"ven:1300km", desc:""},
    {pt:"1", type:"tc", dt:"2010-12-07", loc:"sol:ho:0.72x1.07aux2deg", desc:""},
    {pt:"0", type:"oi", dt:"2015-12-07", loc:"ven:400x440000kmx3deg", desc:"Second VOI Attempt;eom:fbm"},
    {pt:"0", type:"sco", dt:"2016-04-04", loc:"ven:1000x360000kmx5deg", desc:"per:9d"},
    {pt:"0", type:"nom", dt:"2018-04-01", loc:"ven", desc:"?"},
    {pt:"0", type:"pom", dt:"2024-12-31", loc:"ven", desc:""}
]},
ikaros: {name:"IKAROS:Interplanetary Kite-craft Accelerated by Radiation Of the Sun", desc:"lv:H-IIA 202",
  parts:[
    {names:"", type:"om", dest:"sol", stat:"s", ctry:"jp", desc:"ag:jaxa;Solar Sail;m:310kg;m0:290kg;dim:20x20x0.8m;sc:0.75", id:"2010-020E", url:"hp:www.isas.jaxa.jp/e/enterp/missions/ikaros/index.shtml;jaxa:www.jspec.jaxa.jp/e/activity/ikaros.html;isas:www.isas.jaxa.jp/e/forefront/2011/tsuda/index.shtml;news:global.jaxa.jp/projects/sat/ikaros/topics.html", icon:"ikaros.png"}], 
  events:[
    {pt:"", type:"l", dt:"2010-05-20", loc:"ter:tng:YLP-1", desc:""},
    {pt:"", type:"toi", dt:"2010-05-20", loc:"sol:ho", desc:""},
    {pt:"", type:"fb", dt:"2010-12-08", loc:"ven", desc:""},
    {pt:"", type:"ev", dt:"2012-01-06", loc:"so", desc:"Start of hibernation"},
    {pt:"", type:"ev", dt:"2012-09-06", loc:"so", desc:"End of hibernation"},
    {pt:"", type:"eom", dt:"2013-04", loc:"so:ho", desc:"Mission team dissolved"},
    {pt:"", type:"obs", dt:"2013-06..", loc:"so", desc:"Signal detection after Wakeup every 10 month"},
    {pt:"", type:"eom", dt:"2015-05-20", loc:"so", desc:""}
]},
unitec1: {name:"Shin'en", desc:"lv:H-IIA 202",
  parts:[
    {names:"しんえん;UNITEC-1:UNISEC Technology Experiment Carrier 1", type:"fbm", dest:"ven", stat:"f", ctry:"jp", desc:"ag:jaxa, 	UNISEC;m:20kg;dim:0.4x0.4x0.4m;sc:0.2", id:"2010-020F", url:"hp:www.unisec.jp/unitec-1/en/top.html", icon:"shinen1.png"}], 
  events:[
    {pt:"", type:"l", dt:"2010-05-20", loc:"ter:tng:YLP-1", desc:""},
    {pt:"", type:"toi", dt:"2010-05-20", loc:"sol:ho", desc:""},
    {pt:"", type:"los", dt:"2010-05-21", loc:"sol:ho", desc:"dist:320000km;eom"}
]},
change2: {name:"Chang'e 2", desc:"lv:CZ-3C", stat:"s",
  parts:[
    {names:"嫦娥二号", type:"om", dest:"lun", stat:"s", ctry:"cn", desc:"ag:cnsa;fam:clep;m:2480kg;m0:1180kg;dim:18x2.2x2.6m", id:"2010-050A", url:"data:moon.bao.ac.cn/index_en.jsp;eop:directory.eoportal.org/web/eoportal/satellite-missions/c-missions/chang-e-2", icon:"chang-e2.png"},
{names:"", type:"fbm", dest:"ast", stat:"o", ctry:"cn"}], 
  events:[
    {pt:"", type:"l", dt:"2010-10-01", loc:"ter:xch:LC-2", desc:""},
    {pt:"", type:"toi", dt:"2010-10-01", loc:"ter:lto", desc:""},
    {pt:"0", type:"oi", dt:"2010-10-06", loc:"lun", desc:""},
    {pt:"0", type:"sco", dt:"2010-10-09", loc:"lun:100km", desc:""},
    {pt:"0", type:"toi", dt:"2011-06-09", loc:"lun", desc:"eom:om"},
    {pt:"1", type:"oi", dt:"2011-08-25", loc:"esl2", desc:"Halo Orbit"},
    {pt:"1", type:"toi", dt:"2012-04-15", loc:"sol:ho:1.02x1.03aux0.2deg", desc:""},
    {pt:"1", type:"fb", dt:"2012-12-13", loc:"ast:1.9km", desc:"ast:(4179) Toutatis"},
    {pt:"1", type:"tos", dt:"2013-07", loc:"sol:ho", desc:"dist:50000000km;eom;Hibernation"},
    {pt:"1", type:"fb", dt:"2020", loc:"ter", desc:"Poss. Reactivation"}
]},
// --- 2011 --- 4 Missions     
juno: {name:"Juno", desc:"lv:Atlas V 551", stat:"o", 
  parts:[
    {names:"", type:"om", dest:"jup", ctry:"us", desc:"ag:nasa,jpl;fam:New Frontiers;m:3626kg;m0:1593kg;dim:22x16x3.5m;sc:0.75;First solar powered outer planets mission", id:"2011-040A", url:"hp:missionjuno.swri.edu/;raw:www.missionjuno.swri.edu/junocam/processing;nasa:www.nasa.gov/mission_pages/juno/main/index.html;tw:twitter.com/NASAJuno", icon:"juno.png"}], 
  events:[
    {pt:"", type:"l", dt:"2011-08-05", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"toi", dt:"2011-08-05", loc:"sol:ho:1.0x2.26aux0.1deg", desc:""},
    {pt:"", type:"fb", dt:"2013-10-09", loc:"ter:560km", desc:"ga"},
    {pt:"", type:"tc", dt:"2013-10-09", loc:"sol:ho:0.98x5.44aux4.5deg", desc:""},
    {pt:"", type:"app", dt:"2016-06-06", loc:"jup", desc:"Close approach phase"},
    {pt:"", type:"oi", dt:"2016-07-05", loc:"jup:3900x8029000kmx89.8deg", desc:"per:53.5d;75 polar orbits"},
    //{pt:"", type:"sco", dt:"2016-12-11", loc:"jup:5000x3500000kmx89.9deg", desc:"per:14d;Polar orbit"},
    {pt:"", type:"fb", dt:"2021-06-07", loc:"gany:1038km", desc:"PJ #34"},
    {pt:"", type:"ev", dt:"2021-07-20", loc:"jup", desc:"Begin extended mission of 42 orbits & moon flybys"},
    {pt:"", type:"fb", dt:"2022-09-29", loc:"euro:320km", desc:"PJ #45"},
    {pt:"", type:"fb", dt:"2023-12-30", loc:"io:1500km", desc:"PJ #57"},
    {pt:"", type:"fb", dt:"2024-02-03", loc:"io:1500km", desc:"PJ #58"},
    {pt:"", type:"ae", dt:"2025-07", loc:"jup", desc:"eom"}
]},
grail: {name:"GRAIL:Gravity Recovery And Interior Laboratory", desc:"lv:Delta II 7920H-10",
  parts:[
    {names:"Ebb & Flow", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,gsfc;fam:Discovery;m:202.4kg;m0:132.6kg;dim:2.2x1.2x1.0m;sc:0.4", id:"2011-046A;2011-046B", url:"hp:moon.mit.edu/;MoonKAM:moonkam.ucsd.edu/;nasa:www.nasa.gov/mission_pages/grail/main/index.html", icon:"grail.png"}], 
  events:[
    {pt:"", type:"l", dt:"2011-09-10", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", type:"toi", dt:"2011-09-10", loc:"ter:leto", desc:"via Earth-Sun L1"},
    {pt:"", type:"oi", dt:"2011-12-31", loc:"lun:90x8362kmx87.2deg", desc:"GRAIL-A"},
    {pt:"", type:"oi", dt:"2012-01-01", loc:"lun:111x8359kmx88.3deg", desc:"GRAIL-B"},
    {pt:"", type:"tc", dt:"2012-02-08", loc:"lun:po", desc:"Start of formation flight"},
    {pt:"", type:"sco", dt:"2012-03-07", loc:"lun:50kmx90deg", desc:""},
    {pt:"", type:"sco", dt:"2012-08-30", loc:"lun:23kmx90deg", desc:""},
    {pt:"", type:"sco", dt:"2012-12-06", loc:"lun:11kmx90deg", desc:""},
    {pt:"", type:"imp", dt:"2012-12-17", loc:"lun:75.62N,26.63W", desc:"Goldschmidt Crater;Sally K. Ride Impact Site;eom;show:0"}
]},
phobosgrunt: {name:"Fobos-Grunt:Phobos Soil", desc:"lv:Zenit 2SB",
  parts:[
    {names:"Фобос-Грунт", type:"srm", dest:"mar:phob", stat:"f", ctry:"ru", desc:"ag:rosc,lav,iki;m:13505kg;m0:2300kg;dim:4.6x1.4x5.0m", id:"2011-065A", url:"hp:phobos.cosmos.ru/index.php?id=285&L=2;rsw:www.russianspaceweb.com/phobos_grunt.html", icon:"phobos-grunt.png"},
{type:"om", dest:"mar", stat:"f", ctry:"ru"},
{names:"Yinghuo 1:Firefly 1;萤火", type:"om", dest:"mar", stat:"f", ctry:"cn", desc:"ag:cnsa;m:115kg", url:"", icon:"yinghuo.png"}], 
  events:[
    {pt:"", type:"l", dt:"2011-11-08", loc:"ter:bai:LC-45/1", desc:""},
    {pt:"", type:"toi", dt:"2011-11-08", loc:"sol:hto", desc:"fail:Upper stage ignition"}
]},
msl: {name:"Curiosity", desc:"lv:Atlas V 541",
  parts:[
    {names:"MSL:Mars Science Laboratory", type:"rvm", dest:"mar", stat:"o", ctry:"us", desc:"ag:nasa,jpl;fam:Flagship;m:3839kg;m0:899kg;dim:3.0x2.7x2.2m;sc:0.75", id:"2011-070A", url:"hp:mars.jpl.nasa.gov/msl/;jpl:msl-scicorner.jpl.nasa.gov/index.cfm;raw:mars.jpl.nasa.gov/msl/multimedia/raw/;tps:www.planetary.org/explore/space-topics/space-missions/curiosity-sols.html;pds:an.rsl.wustl.edu/msl;tw:twitter.com/MarsCuriosity", icon:"curiosity.png"}], 
  events:[
    {pt:"", type:"l", dt:"2011-11-26", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"toi", dt:"2011-11-26", loc:"sol:hto:0.98x1,54aux1.67deg", desc:""},
    {pt:"", type:"edl", dt:"2012-08-06", loc:"mar:4.59S,137.44E", desc:"Gale Crater;Bradbury Landing;show:MSL:SW"},
    {pt:"", type:"ev", dt:"2012-08-15..2013-06-05", loc:"mar", desc:"Instrument checkout;Drive to Glenelg"},
    {pt:"", type:"arr", dt:"2014-09-11", loc:"mar", desc:"Mt. Sharp"},
    {pt:"", type:"obs", dt:"2014-10-19", loc:"mar", desc:"Comet C 2013 A1 Siding Spring"},
    {pt:"", type:"ex", dt:"", loc:"mar", desc:"Drive up Mt. Sharp;rv:26.5km;and counting"},
    {pt:"", type:"nom", dt:"2025-09-30", loc:"mar", desc:"pend"},
    {pt:"", type:"pom", dt:"2027-12-31", loc:"mar", desc:"?"}
]},
// --- 2013 --- 4 Missions   
change3: {name:"Chang'e 3", desc:"lv:CZ-3B G3Z",
  parts:[
    {names:"嫦娥三号", type:"slm", dest:"lun", stat:"o", ctry:"cn", desc:"ag:cnsa;fam:clep;m:3780kg;m0:1200kg;dim:4.76x3.65x3.45m", id:"2013-070A", url:"CCTV:english.cntv.cn/special/lunarmission/index.shtml;data:moon.bao.ac.cn/index_en.jsp", icon:"chang-e3-l.png"},
{names:"Yùtù (Rover):Jade Rabbit;玉兔", type:"rvm", dest:"lun", stat:"s", ctry:"cn", desc:"m:120kg", icon:"chang-e3-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2013-12-01", loc:"ter:xch", desc:""},
    {pt:"", type:"oi", dt:"2013-12-06", loc:"lun:100kmx90deg", desc:""},
    {pt:"", type:"ev", dt:"2013-12-10", loc:"lun:100x15kmx90deg", desc:""},
    {pt:"", type:"td", dt:"2013-12-14", loc:"lun:44.12N,19.51W", desc:"Mare Imbrium;Guang Han Gong:Moon Palace;show:CE3/Yutu"},
    {pt:"", type:"sep", dt:"2013-12-14", loc:"lun", desc:"lp/rvp"},
    {pt:"1", type:"ex", dt:"2013-12..2014-01", loc:"lun", desc:"rvp;rv:100m"},
    {pt:"1", type:"ev", dt:"2014-01-25", loc:"lun", desc:"rvp;mal:Electric control fault"},
    {pt:"1", type:"los", dt:"2016-07-31", loc:"lun", desc:"rvp;eom:rvm"},
    {pt:"0", type:"nom", dt:"2020-12", loc:"lun", desc:"lp;pend"}
]},
ladee: {name:"LADEE:Lunar Atmosphere and Dust Environment Explorer", desc:"lv:Minotaur V",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,arc;fam:Lunar Quest;m:383kg;m0:248kg;dim:1.85x1.85x2.37m;sc:0.2;Laser Communications Demonstration", id:"2013-047A", url:"hp:www.nasa.gov/mission_pages/LADEE/main/;tw:twitter.com/NASALADEE", icon:"ladee.png"}], 
  events:[
    {pt:"", type:"l", dt:"2013-09-07", loc:"ter:wal:LP-0B", desc:""},
    {pt:"", type:"toi", dt:"2013-09-07", loc:"ter:heeo", desc:"Phasing orbits"},
    {pt:"", type:"oi", dt:"2013-10-07", loc:"lun:250km", desc:"Staging orbit"},
    {pt:"", type:"sco", dt:"2013-11-21", loc:"lun:12x60kmx180deg", desc:"Varies 20..150km"},
    {pt:"", type:"sco", dt:"2014-04-11", loc:"lun:2x60kmx180deg", desc:"Final orbits <2km"},
    {pt:"", type:"imp", dt:"2014-04-18", loc:"lun:12N,93W", desc:"eom;show:0;Sundman V Crater"}
]},
maven: {name:"MAVEN:Mars Atmosphere and Volatile Evolution Mission", desc:"lv:Atlas V 401",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"o", ctry:"us", desc:"ag:nasa,jpl;fam:Mars Scout;m:2454kg;m0:809kg;dim:11.4x2.3x2.0m;sc:0.6", id:"2013-063A", url:"hp:lasp.colorado.edu/home/maven/;nasa:www.nasa.gov/mission_pages/maven/main/index.html;tw:twitter.com/MAVEN2Mars", icon:"maven.png"}], 
  events:[
    {pt:"", type:"l", dt:"2013-11-18", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"toi", dt:"2013-11-18", loc:"sol:hto:0.96x1.45aux2deg", desc:""},
    {pt:"", type:"oi", dt:"2014-09-22", loc:"mar:380x44600kmx75deg", desc:""},
    {pt:"", type:"obs", dt:"2014-10-17..2014-10-21", loc:"mar", desc:"Comet C 2013 A1 Siding Spring"},
    {pt:"", type:"sco", dt:"2014-11-17", loc:"mar:150x6200kmx75deg", desc:""},
    {pt:"", type:"sco", dt:"2015-02-10..2015-02-18", loc:"mar:125km", desc:"Deep dip campaign"},
    {pt:"", type:"nom", dt:"2025-09-30", loc:"mar", desc:"pend"},
    {pt:"", type:"pom", dt:"2027-12-31", loc:"mar", desc:"?"}
]},
mangalyaan: {name:"MOM-1:Mars Orbiter Mission", desc:"lv:PSLV-XL",
  parts:[
    {names:"मंगल ग्रह परिक्रमा मिशन;Mangalyaan:Mars Craft", type:"om", dest:"mar", stat:"s", ctry:"ind", desc:"ag:isro;m:1337kg;m0:475kg;dim:5.4x3.5x2.2m;sc:0.7", id:"2013-060A", url:"hp:www.isro.gov.in/pslv-c25-mars-orbiter-mission;issdc:www.issdc.gov.in/marsmission.html;data:mrbrowse.issdc.gov.in/MOMLTA/;Atw:twitter.com/MarsOrbiter", icon:"mom.png"}], 
  events:[
    {pt:"", type:"l", dt:"2013-11-05", loc:"ter:sri", desc:""},
    {pt:"", type:"oi", dt:"2013-11-05", loc:"ter:heeo", desc:"Phasing orbits"},
    {pt:"", type:"toi", dt:"2013-11-30", loc:"sol:hto:0.98x1.44aux2.5deg", desc:""},
    {pt:"", type:"oi", dt:"2014-09-24", loc:"mar:427x78500kmx150deg", desc:""},
    {pt:"", type:"obs", dt:"2014-10-19", loc:"mar", desc:"Comet C 2013 A1 Siding Spring"},
    {pt:"", type:"eom", dt:"2022-09-27", loc:"mar", desc:"Out of fuel"}
]},
// --- 2014  4 Missions
change5test: {name:"Chang'e 5 T1", desc:"lv:CZ-3C G2", stat:"o", 
  parts:[
    {names:"嫦娥五号 试验器;Xiaofei;Return Reentry Flight Vehicle Service Module", type:"fbm", dest:"lun", ctry:"cn", stat:"s", desc:"ag:cnsa;fam:clep;m:?kg;dim:22x2.2x3.4m;sc:0.75;Re-entry Vehicle Test Mission", id:"2014-065A", url:"China Spaceflight:www.chinaspaceflight.com/satellite/Deepspace/CE5T1/CE5-T1.html", icon:"chang-e5t1.png"},
    {type:"erm", dest:"ter", stat:"s"},
    {type:"om", dest:"lun"},
    {names:"Manfred Memorial Moon Mission (4M)", type:"fbm", dest:"lun", stat:"s", ctry:"", desc:"ag:LuxSpace;m:?kg;dim:?m", id:"2014-065B", url:"4M:moon.luxspace.lu/", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2014-10-23", loc:"ter:xch:LC-2", desc:""},
    {pt:"", type:"toi", dt:"2014-10-23", loc:"ter:-1282x404729kmx30.5deg", desc:"Lunar Free Return Trajectry"},
    {pt:"", type:"sep", dt:"2014-10-23", loc:"ter", desc:"fbp/4M"},
    {pt:"1", type:"fb", dt:"2014-10-27", loc:"lun:11300km", desc:""},
    {pt:"1", type:"tc", dt:"2014-10-27", loc:"ter:327x402812kmx46.1deg", desc:""},
    {pt:"3", type:"tc", dt:"2014-10-27", loc:"ter:141090x416326kmx54deg", desc:"4M"},
    {pt:"1", type:"sep", dt:"2014-10-31", loc:"ter", desc:"rc/sm"},
    {pt:"2", type:"edl", dt:"2014-10-31", loc:"ter:42N,111E", desc:"Siziwang Banner, Inner Mongolia (approx. Location);show:CE5-T1:NW;eom:fbm"},
    {pt:"3", type:"los", dt:"2014-11-10", loc:"ter", desc:"4M;eom:fbm"},
    {pt:"1", type:"oi", dt:"2014-11-28", loc:"ter:eml2:20000x40000x35000km", desc:"sm;Lissajous Orbit"},
    {pt:"1", type:"dep", dt:"2015-01-04", loc:"ter:eml2", desc:""},
    {pt:"1", type:"oi", dt:"2015-01-10", loc:"lun:200x5300kmx43.7deg", desc:""},
    {pt:"1", type:"sco", dt:"2015-01-12", loc:"lun:200kmx43.7deg", desc:""},
    {pt:"1", type:"pom", dt:"2020", loc:"lun", desc:"?"}
]},
hayabusa2: {name:"Hayabusa 2:Peregrine Falcon 2", desc:"lv:H-IIA 202",
  parts:[
    {names:"はやぶさ2", type:"srm", dest:"ast", stat:"o", ctry:"jp", desc:"ag:jaxa,dlr;m:590kg;m0:500kg;dim:6.0x4.23x1.4m;w:0.65", id:"2014-076A", url:"hp:www.hayabusa2.jaxa.jp/en;jaxa:www.jspec.jaxa.jp/e/activity/hayabusa2.html;tw:twitter.com/haya2e_jaxa", icon:"hayabusa2.png"},
    {names:"SCI:Small Carry-on Impactor", type:"im", dest:"ast", stat:"o", ctry:"jp", desc:"ag:jaxa;sc:0.4;m:18kg", id:"", url:"", icon:"sci.png"},
    {names:"MINERVA II 1A/1B/2:Micro/Nano Experimental Robot Vehicle for Asteroid", type:"hpm", dest:"ast", stat:"o", ctry:"jp", desc:"ag:jaxa;m:3kg;sc:1.0", id:"", url:"", icon:"minerva2.png"},
    {names:"MASCOT:Mobile Asteroid Surface Scout", type:"slm", dest:"ast", stat:"o", ctry:"de;fr", desc:"ag:dlr,cnes;m:11.3kg;sc:0.6", id:"", url:"dlr:www.dlr.de/irs/en/desktopdefault.aspx/tabid-7902/13482_read-34316;tw:twitter.com/MASCOT2018", icon:"mascot.png"}], 
  events:[
    {pt:"", type:"l", dt:"2014-12-03", loc:"ter:tng:YLP-1", desc:""},
    {pt:"", type:"toi", dt:"2014-12-03", loc:"sol:ho:0.915x1.089aux6.8deg", desc:"EDVEGA:Electric Delta-V Earth Gravity Assist"},
    {pt:"", type:"fb", dt:"2015-12-03", loc:"ter:3100km", desc:"GA"},
    {pt:"", type:"tc", dt:"2015-12-03", loc:"sol:ho:0.95x1.30au", desc:""},
    {pt:"", type:"app", dt:"2018-06-04", loc:"ast:2500km", desc:"ast:(162173) Ryugu"},
    {pt:"", type:"arr", dt:"2018-06-21", loc:"ast", desc:"alt:20km"},
    {pt:"2", type:"td", dt:"2018-09-21", loc:"ast", desc:"hpp:MINERVA II1 A&B;Hibou & Owl"},
    {pt:"3", type:"td", dt:"2018-10-03", loc:"ast", desc:"lp:MASCOT"},
    {pt:"3", type:"los", dt:"2018-10-04", loc:"ast", desc:"lp:MASCOT;eom:slm"},
    {pt:"0", type:"dsc", dt:"2019-02-21", loc:"ast", desc:"1. Sample Collection;Tamatebako;mat:5.4g"},
    {pt:"1", type:"imp", dt:"2019-04-05", loc:"ast", desc:"ip:SCI;Cratering Experiment;eom:im"},
    {pt:"0", type:"dsc", dt:"2019-07-11", loc:"ast", desc:"2. Sample Collection;Uchide-no-kozuchi"},
    {pt:"2", type:"td", dt:"2019-10-08", loc:"ast", desc:"hpp:MINERVA II2;eom:hpm"},
    {pt:"0", type:"dep", dt:"2019-11-13", loc:"ast", desc:""},
    {pt:"0", type:"sep", dt:"2020-12-05", loc:"sol:ho", desc:"fbp/src"},
    {pt:"0", type:"edl", dt:"2020-12-06", loc:"ter", desc:"src"},
    {pt:"0", type:"fb", dt:"2020-12-06", loc:"ter", desc:"fbp;Begin extended mission"},
    {pt:"0", type:"fb", dt:"2026-07", loc:"ast", desc:"2001 CC21"},
    {pt:"0", type:"fb", dt:"2027-12", loc:"ter", desc:"GA"},
    {pt:"0", type:"fb", dt:"2028-06", loc:"ter", desc:"GA"},
    {pt:"0", type:"fb", dt:"2031-07", loc:"ast", desc:"nom;1998 KY26"}
]},
procyon: {name:"PROCYON:PRoximate Object Close flYby with Optical Navigation", desc:"lv:H-IIA 202",
  parts:[
    {names:"", type:"fbm", dest:"ast:2000 DP107", stat:"p", ctry:"jp", desc:"Hayabusa 2 piggyback missions;ag:jaxa,ut;m:67kg;dim:0.55x0.55x0.63m;sc:0.5", id:"2014-076D", url:"eo:directory.eoportal.org/web/eoportal/satellite-missions/p/procyon", icon:"procyon.png"},
    {names:"Artsat 2 Despatch:DEep SPace Amateur Troubadour's CHallenge", type:"test", dest:"ho", stat:"s", ctry:"jp", desc:"First Deep Space Art Probe;ag:artsat;m:32kg;dim:0.50x0.50x0.45m;sc:0.5", id:"2014-076C", url:"artsat:artsat.jp/en;tw:twitter.com/DESPATCH_ARTSAT", icon:"artsat2.png"},
    {names:"Shin-en 2;しんえん２", type:"test", dest:"ho", stat:"s", ctry:"jp", desc:"ag:kit;m:2.85kg;dim:0.49x0.49x0.475m;sc:0.9", id:"2014-076B", url:"shinen:kit-okuyama-lab.com/en/", icon:"shinen2.png"}], 
  events:[
    {pt:"", type:"l", dt:"2014-12-03", loc:"ter:tng:YLP-1", desc:""},
    {pt:"", type:"oi", dt:"2014-12-03", loc:"sol:ho:0.9x1.1aux6.8deg", desc:""},
    {pt:"2", type:"los", dt:"2014-12-10", loc:"sol:ho", desc:"Shin-en 2"},
    {pt:"1", type:"los", dt:"2015-01-03", loc:"sol:ho", desc:"ARTSAT;eom:test"},
    {pt:"0", type:"ev", dt:"2015-03", loc:"sol:ho", desc:"mal:Ion engine"},
    {pt:"0", type:"fb", dt:"2015-12-03", loc:"ter:2700000km", desc:""},
    {pt:"", type:"ev", dt:"2015-12-06", loc:"sol:ho", desc:"eom:test;eom:fb"}
    //{pt:"0", type:"nom", dt:"2017", loc:"sol:ho", desc:"eom"}
]},
eft1: {name:"EFT-1:Exploration Flight Test 1", desc:"lv:Delta IV Heavy", stat:"s", 
  parts:[
    {names:"Orion Test 1", type:"test", dest:"ter:heeo",ctry:"us", desc:"ag:nasa,jsc;m:21250kg;sc:1", id:"2014-077A", url:"hp:www.nasa.gov/exploration/systems/mpcv/index.html;tw:twitter.com/NASA_Orion", icon:"orion-eft1.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"2014-12-05", loc:"ter:cap:SLC-37B", desc:""},
    {pt:"", type:"toi", dt:"2014-12-05", loc:"ter:192x878kmx28.8deg", desc:""},
    {pt:"", type:"oi", dt:"2014-12-05", loc:"ter:-20x5808kmx28.7deg", desc:""},
    {pt:"", type:"edl", dt:"2014-12-05", loc:"ter:23.61N,114.46W", desc:"965km SW of San Diego;show:EFT1:SW;eom"}
]},
// --- 2015  1 Mission
dscovr: {name:"DSCOVR:Deep Space Climate Observatory", desc:"lv:Falcon 9 v1.1",
  parts:[
    {names:"Tirana", type:"obm", dest:"sol", stat:"o", ctry:"us", desc:"ag:nasa,noaa,usaf;m:570kg;dim:4.0x1.0x1.85m;Earth and Space Weather Monitor", id:"2015-007A", url:"hp:www.nesdis.noaa.gov/DSCOVR/;epic:epic.gsfc.nasa.gov/;nasa:www-pm.larc.nasa.gov/triana.html", icon:"dscovr.png"}], 
  events:[
    {pt:"", type:"l", dt:"2015-02-11", loc:"ter:cap:SLC-40", desc:""},
    {pt:"", type:"toi", dt:"2015-02-12", loc:"ter:leto:187x1371156kmx33.1deg", desc:""},
    {pt:"", type:"oi", dt:"2015-06-06", loc:"sol:esl1", desc:"Lissajous Orbit"},
    {pt:"", type:"nom", dt:"2025", loc:"sol:esl1", desc:"?"}    
]},
// --- 2016   2 Missions
exomarstgo: {name:"ExoMars TGO:Exomars Trace Gas Orbiter", desc:"lv:Proton-M/Briz-M",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"o", ctry:"eu;ru", desc:"ag:esa,rosc;m:4332kg;m0:1365kg;dim:17.5x5.0x5.5m;sc:0.8;fam:exom", id:"2016-017A", url:"hp:exploration.esa.int/science-e/www/object/index.cfm?fobjectid=46124;rsw:www.russianspaceweb.com/exomars_2016.html;tw:twitter.com/ESA_TGO", icon:"exomars-tgo.png"},
    {names:"Schiaparelli EDM:Entry, Descent and Landing Demonstrator Module", type:"slm", dest:"mar", stat:"f", ctry:"eu", desc:"ag:esa;m:577kg;m0:280kg;sc:0.75", url:"tw:twitter.com/ESA_EDM", icon:"exomars-edm.png"}], 
  events:[
    {pt:"", type:"l", dt:"2016-03-14", loc:"ter:bai:LC-200/39", desc:""},
    {pt:"", type:"toi", dt:"2016-03-14", loc:"sol:hto", desc:""},
    {pt:"", type:"sep", dt:"2016-10-16", loc:"so", desc:"op/dp"},
    {pt:"0", type:"oi", dt:"2016-10-19", loc:"mar:295x97600kmx9.5deg", desc:"op;4 sol orbit"},
    {pt:"1", type:"edl", dt:"2016-10-19", loc:"mar", desc:"Meridiani Planum;dp;fail:Premature engine shutdown"},
    {pt:"1", type:"imp", dt:"2016-10-19", loc:"mar:6.21W,2.07S", desc:"dp;eom:slm;show:Schiaparelli:SW"},
    {pt:"0", type:"ev", dt:"2017-03-15", loc:"mar", desc:"Start of Aerobraking"},
    {pt:"0", type:"sco", dt:"2018-04-09", loc:"mar:370x420kmx74deg", desc:""},
    {pt:"0", type:"nom", dt:"2022-12", loc:"mar", desc:"?"},
    {pt:"0", type:"pom", dt:"2028-12", loc:"mar", desc:"?"}
]},
osirisrex: {name:"OSIRIS-APEx:Origins-Spectral Interpretation-Resource Identification-Apophis Explorer", desc:"lv:Atlas V 411",
  parts:[
    {names:"OSIRIS-REx:Origins-Spectral Interpretation-Resource Identification-Security-Regolith Explorer", type:"srm", dest:"ast", stat:"o", ctry:"us", desc:"ag:nasa,gsfc;fam:New Frontiers;m:2110kg;m0:880kg;dim:6.2x2.4x3.2m;sc:0.5", id:"2016-055A", url:"hp:www.asteroidmission.org/;nasa:www.nasa.gov/mission_pages/osiris-rex/;tw:twitter.com/OSIRISRex", icon:"osirisrex.png"},
    {names:"{Sample Return Capsule}", desc:"m:46kg;sc:0.5", icon:"osirisrex-src.png"}], 
  events:[
    {pt:"", type:"l", dt:"2016-09-08", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"oi", dt:"2016-09-08", loc:"sol:ho:0.77x1.17aux0.2deg", desc:""},
    {pt:"", type:"fb", dt:"2017-09-23", loc:"ter:17000km", desc:"ga"},
    {pt:"", type:"app", dt:"2018-08-17", loc:"ast", desc:"ast:(101955) Bennu"},
    {pt:"", type:"arr", dt:"2018-12-03", loc:"ast", desc:"Preliminary survey"},
    {pt:"", type:"sco", dt:"2018-12-31", loc:"ast:1.75km", desc:"Mapping phase Orbital A"},
    {pt:"", type:"sco", dt:"2019-02", loc:"ast", desc:"Detailed survey, Baseball diamond"},
    {pt:"", type:"sco", dt:"2019-04", loc:"ast", desc:"Detailed survey, Equatorial stations"},
    {pt:"", type:"sco", dt:"2019-06-12", loc:"ast:0.68km", desc:"Orbital B"},
    {pt:"", type:"obs", dt:"2019-09", loc:"ast", desc:"Detailed survey of candidate sample sites"},
    {pt:"", type:"app", dt:"2020-04-14", loc:"ast:75m", desc:"Sample acquisition rehearsal 1"},
    {pt:"", type:"app", dt:"2020-06", loc:"ast", desc:"Sample acquisition rehearsal 2"},
    {pt:"", type:"sc", dt:"2020-10-20", loc:"ast", desc:"Nightingale crater;mat:126.1g"},
    {pt:"", type:"fb", dt:"2021-04-07", loc:"ast:3.7km", desc:"Close flyby"},
    {pt:"", type:"dep", dt:"2021-05-10", loc:"ast", desc:"Begin Earth Return Cruise"},
    {pt:"", type:"edl", dt:"2023-09-24", loc:"ter:40.4N,113.4E", desc:"src;UTTR, Utah;eom:srm"},
    {pt:"", type:"fb", dt:"2025-09-25", loc:"ter", desc:"ga"},
    {pt:"", type:"fb", dt:"2027-03-17", loc:"ter", desc:"ga"},
    {pt:"", type:"fb", dt:"2029-04-13", loc:"ter", desc:"ga"},
    {pt:"", type:"oi", dt:"2029-04-22", loc:"ast", desc:"op;ast:(99942) Apophis"},
	
    {pt:"", type:"nom", dt:"2029-12-31", loc:"ter", desc:"pend"}
]}, 
// --- 2018  7 Missions
fh1: {name:"Falcon Heavy Test 1", desc:"lv:Falcon Heavy", stat:"s", 
  parts:[
    {names:"Tesla Roadster", type:"test", dest:"sol:ho",ctry:"us", desc:"ag:spacex;m:1250kg;sc:0.5", id:"2018-017A", url:"hp:www.spacex.com/falcon-heavy", icon:"tesla.png"}], 
  events:[
    {pt:"", type:"l", dt:"2018-02-06", loc:"ter:cap:LC-39A", desc:""},
    {pt:"", type:"oi", dt:"2018-02-06", loc:"sol:ho:0.99x1.71aux1.1deg", desc:""},
    {pt:"", type:"los", dt:"2018-02-07", loc:"sol:ho", desc:"eom"}
]},
insight: {name:"InSIGHT:Interior Exploration using Seismic Investigations, Geodesy and Heat Transport", desc:"lv:Atlas V 401",
  parts:[
    {names:"", type:"slm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;fam:Discovery;m:694kg;m0:358kg;dim:6x2.7x1.2m;sc:0.75", id:"2018-042A", url:"hp:insight.jpl.nasa.gov/;tw:twitter.com/NASAInsight", icon:"insight.png"}], 
  events:[
    {pt:"", type:"l", dt:"2018-05-05", loc:"ter:van:SLC-3E", desc:""},
    {pt:"", type:"toi", dt:"2018-05-05", loc:"sol:ho:1.0x1.4aux2.3deg", desc:""},
    {pt:"", type:"edl", dt:"2018-11-26", loc:"mar:4.50N,135.62E", desc:"Elysium Planitia;show:InSIGHT"},
    {pt:"", type:"los", dt:"2022-12-15", loc:"mar", desc:"eom"}
]},
marco: {name:"MarCO:Mars Cube One", desc:"lv:Atlas V 401;part:insight",
  parts:[
    {names:"MarCO A;Wall-E", type:"fbm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl;InSIGHT EDL Communication Relay;m:13.5kg;dim:0.36x0.72x0.58m;sc:0.3", id:"2018-042B", url:"hp:www.jpl.nasa.gov/cubesat/missions/marco.php", icon:"marco.png"},
    {names:"MarCO B;Eve", type:"fbm", dest:"mar", stat:"s", ctry:"us", desc:"ag:nasa,jpl", id:"2018-042C", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2018-05-05", loc:"ter:van:SLC-3E", desc:""},
    {pt:"", type:"fb", dt:"2018-11-26", loc:"mar:3500km", desc:""},
    {pt:"1", type:"los", dt:"2018-12-29", loc:"sol:ho", desc:"fbp:MarCO B"},
    {pt:"0", type:"los", dt:"2019-01-04", loc:"sol:ho", desc:"fbp:MarCO A;eom"}
]},
change4relay: {name:"Queqiao 1:Magpie Bridge 1", desc:"lv:CZ-4C",
  parts:[
    {names:"鹊桥;Chang'e 4 LRS:Lunar Relay Satellite", type:"om", dest:"lun", stat:"o", ctry:"cn", desc:"ag:cnsa;fam:clep;sc:0.4;m:425kg;dim:4.2m", id:"2018-045A", url:"China Spaceflight:www.chinaspaceflight.com/satellite/Deepspace/CE-4/CE-4.html", icon:"chang-e4-relay.png"}
   ], 
  events:[
    {pt:"", type:"l", dt:"2018-05-21", loc:"ter:xch:LC-2", desc:""},
    {pt:"", type:"fb", dt:"2018-05-25", loc:"lun:100km", desc:"ga"},
    {pt:"", type:"oi", dt:"2018-05-30", loc:"lun:eml2", desc:""},
    {pt:"", type:"sco", dt:"2018-06-14", loc:"lun:eml2:13000km", desc:"Halo orbit"},
    {pt:"", type:"nom", dt:"2023-06", loc:"lun", desc:"?"}
]},
dslwp: {name:"Longjiang 1 & 2:Dragon River", desc:"lv:CZ-4C;part:change4relay", stat:"p",
  parts:[
    {names:"龙江一号;DSLWP-A1:Discovering the Sky at Longest Wavelengths Pathfinder", type:"obm", dest:"lun", stat:"f", ctry:"cn", desc:"ag:cnsa,HIT;m:45kg;dim:0.5x0.5x0.4m;sc:0.3", id:"2018-045B", url:"hp:lilacsat.hit.edu.cn/;China Spaceflight:www.chinaspaceflight.com/satellite/HIT/DSLWP-A1-A2.html", icon:"dslwp.png"},
    {names:"龙江二号;DSLWP-A2:Discovering the Sky at Longest Wavelengths Pathfinder", type:"obm", dest:"lun", stat:"s", ctry:"cn", desc:"", id:"2018-045C", url:"Longjiang:lilacsat.hit.edu.cn/dashboard/pages/pics-b.html", icon:""}
   ], 
  events:[
    {pt:"", type:"l", dt:"2018-05-21", loc:"ter:xch:LC-2", desc:"Chang'e 4 LRS piggyback"},
    {pt:"0", type:"los", dt:"2018-05-21", loc:"ter:lto", desc:"eom;Longjiang 1"},
    {pt:"1", type:"oi", dt:"2018-05-25", loc:"lun:350x13700km", desc:"Longjiang 2"},
    {pt:"1", type:"imp", dt:"2019-07-31", loc:"lun:16.6956N,159.517°E", desc:"eom;show:0"}
]},
bepicolombo: {name:"Bepi Colombo", desc:"lv:Ariane 5ECA",
  parts:[
    {names:"", type:"fbm", dest:"mer", stat:"o", ctry:"eu;jp", desc:"ag:asi,esa,jaxa;m0:2700kg;m:4100kg;dim:30x4.5x4m;sc:0.7;w:0.5", id:"2018-080A", url:"hp:www.esa.int/Our_Activities/Space_Science/BepiColombo_overview2;psa:www.sciops.esa.int/index.php?project=PSA&page=bepi;tw:twitter.com/BepiColombo", icon:"bepicolombo.png"},
{names:"MPO:Mercury Planetary Orbiter", type:"om", dest:"mer", stat:"pl", ctry:"eu", desc:"ag:asi,esa;m:1838kg;sc:0.75", url:"esa:sci.esa.int/home/bepicolombo/;tw:twitter.com/ESA_Bepi", icon:"bepicolombo-mpo.png"},
{names:"MMO:Mercury Magnetospheric Orbiter", type:"om", dest:"mer", stat:"pl", ctry:"jp", desc:"ag:jaxa;m:275kg", url:"jaxa:mio.isas.jaxa.jp/en/;tw:twitter.com/JAXA_MMO", icon:"bepicolombo-mmo.png"}], 
  events:[
    {pt:"", type:"l", dt:"2018-10-20", loc:"ter:kou:ELA-3", desc:""},
    {pt:"", type:"fb", dt:"2020-04-10", loc:"ter:12700km", desc:"ga"},
    {pt:"", type:"fb", dt:"2020-10-15", loc:"ven:10000km", desc:"ga"},
    {pt:"", type:"fb", dt:"2021-08-10", loc:"ven:550km", desc:"ga"},
    {pt:"", type:"fb", dt:"2021-10-01", loc:"mer:200km", desc:"ga"},
    {pt:"", type:"fb", dt:"2022-06-23", loc:"mer:200km", desc:"ga"},
    {pt:"", type:"fb", dt:"2023-06-20", loc:"mer:236km", desc:"ga"},
    {pt:"", type:"fb", dt:"2024-09-04", loc:"mer:200km", desc:"ga"},
    {pt:"", type:"fb", dt:"2024-12-01", loc:"mer:40000km", desc:"ga"},
    {pt:"", type:"fb", dt:"2025-01-08", loc:"mer:393km", desc:"ga;eom:fbm"},
    {pt:"", type:"sep", dt:"2026-10", loc:"mer", desc:"MTM/MPO+MMO"},
    {pt:"", type:"oi", dt:"2026-11", loc:"mer:674x178000kmx90deg", desc:""},
    {pt:"", type:"sep", dt:"2026-12", loc:"mer", desc:"MPO/MMO"},
    {pt:"2", type:"sco", dt:"2026-12", loc:"mer:590x11640kmx90deg", desc:"MMO"},
    {pt:"1", type:"sco", dt:"2027-03", loc:"mer:480x1500kmx90deg", desc:"MPO"},
    {pt:"", type:"nom", dt:"2028-05", loc:"mer", desc:"pend"},
    {pt:"", type:"pom", dt:"2029-05", loc:"mer", desc:"?"}
]},
spp: {name:"Parker Solar Probe", desc:"lv:Delta IV Heavy",
  parts:[
    {names:"SPP:Solar Probe Plus", type:"obm", dest:"sol", stat:"o", ctry:"us", desc:"ag:nasa,gsfc,apl;fam:Living With a Star;First flight through solar corona;m:685kg;sc:0.5", id:"2018-065A", url:"hp:solarprobe.jhuapl.edu/;nasa:lws.gsfc.nasa.gov/missions.html;tw:twitter.com/ParkerSunProbe", icon:"spp.png"}], 
  events:[
    {pt:"", type:"l", dt:"2018-08-12", loc:"ter:cap:SLC-37B", desc:""},
    {pt:"", type:"toi", dt:"2018-08-12", loc:"sol:ho:0.21x1.01aux5.6deg", desc:""},
    {pt:"", type:"fb", dt:"2018-10-03", loc:"ven:2428km", desc:"ga"},
    {pt:"", type:"fb", dt:"2019-12-26", loc:"ven:3000km", desc:"ga"},
    {pt:"", type:"fb", dt:"2020-07-11", loc:"ven", desc:"ga"},
    {pt:"", type:"fb", dt:"2021-02-20", loc:"ven", desc:"ga"},
    {pt:"", type:"fb", dt:"2021-10-16", loc:"ven", desc:"ga"},
    {pt:"", type:"fb", dt:"2023-08-21", loc:"ven", desc:"ga"},
    {pt:"", type:"fb", dt:"2024-11-06", loc:"ven", desc:"ga"},
    {pt:"", type:"app", dt:"2024-12-24", loc:"sol:9.86", desc:"First Close Approach;16 More Solar Orbits"},
    {pt:"", type:"nom", dt:"2025-12-31", loc:"sol:ho:0.04x0.73aux3.4deg", desc:"?"},
    {pt:"", type:"pom", dt:"2026-06", loc:"so", desc:""}
]},
change4: {name:"Chang'e 4", desc:"lv:CZ-3B/G3Z",
  parts:[
    {names:"嫦娥四号", type:"slm", dest:"lun", stat:"o", ctry:"cn", desc:"ag:cnsa;fam:clep;m:3780kg;m0:1200kg;dim:4.76x3.65x3.45m;First lunar far side landing", id:"2018-103A", url:"China Spaceflight:www.chinaspaceflight.com/satellite/Deepspace/CE-4/CE-4.html;CCTV:english.cntv.cn/special/lunarmission/index.shtml;data:moon.bao.ac.cn/index_en.jsp", icon:"chang-e4-l.png"},
    {names:"Yutu-2", type:"rvm", dest:"lun", stat:"o", ctry:"cn", desc:"m:140kg", icon:"chang-e3-rv.png"}
   ], 
  events:[
    {pt:"", type:"l", dt:"2018-12-07", loc:"ter:xch", desc:""},
    {pt:"", type:"oi", dt:"2018-12-12", loc:"lun:100x400kmx90deg", desc:""},
    {pt:"", type:"sco", dt:"2018-12-26", loc:"lun:100kmx90deg", desc:""},
    {pt:"", type:"sco", dt:"2018-12-30", loc:"lun:100x15kmx90deg", desc:""},
    {pt:"", type:"td", dt:"2019-01-03", loc:"lun:45.471S,177.606E", desc:"Statio Tianhe, Von Karman crater, SPA;show:CE4:NW"},
    {pt:"", type:"sep", dt:"2019-01-03", loc:"lun", desc:"lp/rvp"}, 
    {pt:"1", type:"ex", dt:"", loc:"lun", desc:"rvp;rv:1.5km"},    
    {pt:"1", type:"nom", dt:"2023", loc:"lun", desc:"rvp;?;eom:rvm"},
    {pt:"0", type:"nom", dt:"2023", loc:"lun", desc:"lp;?"}
]},
// --- 2019  - 2 missions
chandrayaan2: {name:"Chandrayaan 2:Moon Craft 2", desc:"lv:LVM3",
  parts:[
    {names:"चंद्रयान-२", type:"om", dest:"lun", stat:"o", ctry:"ind", desc:"ag:isro;m:2379kg;dim:3.2x5.8x2.1m;sc:0.5", id:"2019-042A", url:"hp:www.isro.gov.in/chandrayaan2-home-0;data:pradan.issdc.gov.in/pradan/", icon:"chandrayaan2-o.png"},
    {names:"Vikram", type:"slm", dest:"lun", stat:"f", ctry:"ind", desc:"ag:isro;m:1471kg;dim:2.5x2x1.2m;sc:1", icon:"chandrayaan2-l.png"},
    {names:"Pragyan", type:"rvm", dest:"lun", stat:"f", ctry:"ind", desc:"ag:isro;m:27kg;dim:0.9x0.75x0.85m;sc:0.5", icon:"chandrayaan2-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2019-07-22", loc:"ter:sri:SLP", desc:""},
    {pt:"", type:"oi", dt:"2019-07-22", loc:"ter:170x40400km", desc:"5 Phasing Orbits"},
    {pt:"", type:"toi", dt:"2019-08-13", loc:"ter:lto", desc:"tli"},
    {pt:"0", type:"oi", dt:"2019-08-20", loc:"lun:114x18072kmx87.8deg", desc:""},
    {pt:"0", type:"sco", dt:"2019-09-01", loc:"lun:114x128km", desc:""},
    {pt:"0", type:"sep", dt:"2019-09-02", loc:"lun", desc:"op/lp"},
    {pt:"1", type:"td", dt:"2019-09-06", loc:"lun:70.881S,22.784E", desc:"fail;Between Manzinus C & Simpelius N Crater;show:CH2-Vikram:NW;eom:slm;eom:rvm"},
    //{pt:"0", type:"sco", dt:"2019-09-08", loc:"lun:90km", desc:"Sun Synchronous"},
    //{pt:"0", type:"nom", dt:"2020-08", loc:"lun", desc:"?"},
    {pt:"0", type:"nom", dt:"2027", loc:"lun", desc:"?"}
]},
spaceil: {name:"Beresheet", desc:"lv:Falcon 9",
  parts:[
    {names:"בְּרֵאשִׁית", type:"slm", dest:"lun", stat:"p", ctry:"il", desc:"ag:SpaceIL;m:585kg;m0:160kg;dim:2.29x2.29x1.54m;sc:0.3", id:"2019-009B", url:"hp:beresheet.space;SpaceIL:www.spaceil.com/", icon:"spaceil.png"}
  ], 
  events:[
    {pt:"", type:"l", dt:"2019-02-22", loc:"ter:cap", desc:""},
    {pt:"", type:"toi", dt:"2019-02-22", loc:"ter:heeo:242x68845kmx27.6deg", desc:"Phasing loops"},
    {pt:"", type:"oi", dt:"2019-04-04", loc:"lun:10000x500km", desc:""},
    {pt:"", type:"sco", dt:"2019-04-10", loc:"lun:10x15km", desc:""},
    {pt:"", type:"imp", dt:"2019-04-11", loc:"lun:32.5956N,19.3496E", desc:"Mare Serenitatis;fail:Main Engine;eom"}
]},
// --- 2020  5 missions
solarorbiter: {name:"Solar Orbiter", desc:"lv:Atlas V 411",
  parts:[
    {names:"SolO", type:"obm", dest:"sol", stat:"o", ctry:"eu", desc:"ag:esa;fam:M-class;m0:1500kg;m:1750kg;dim:18x3.0x2.5m;sc:0.75;Heliophysics Observatory", id:"2020-010A", url:"hp:www.esa.int/Our_Activities/Space_Science/Solar_Orbiter;esa:sci.esa.int/solarorbiter/;tw:twitter.com/ESASolarOrbiter", icon:"solarorbiter.png"}], 
  events:[
    {pt:"", type:"l", dt:"2020-02-10", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"oi", dt:"2020-02-10", loc:"sol:ho:0.661x1.014aux2.9deg", desc:""},
    {pt:"", type:"fb", dt:"2020-12-27", loc:"ven:7449km", desc:"ga"},
    {pt:"", type:"ft", dt:"2021-05-31", loc:"sol:ho", desc:"com:C/2019 Y4 (ATLAS);Ion Tail"},
    {pt:"", type:"fb", dt:"2021-08-09", loc:"ven:7995km", desc:"ga"},
    {pt:"", type:"fb", dt:"2021-11-27", loc:"ter:460km", desc:"ga;Perhelion 0.321AU"},
    {pt:"", type:"fb", dt:"2022-09-03", loc:"ven", desc:"ga;Perhelion 0.292AU"},
    {pt:"", type:"fb", dt:"2025-02-18", loc:"ven", desc:"ga;Perhelion 0.294AU"},
    {pt:"", type:"sco", dt:"2025-02-18", loc:"sol:ho:0.294x0.901aux17.2deg", desc:"Start of high inclination phase"},
    {pt:"", type:"fb", dt:"2026-12-24", loc:"ven", desc:"ga;Perhelion 0.284AU;Inclination 24.4deg"},
    {pt:"", type:"fb", dt:"2028-03-17", loc:"ven", desc:"ga;Perhelion 0.331AU;Inclination 30.2deg"},
    {pt:"", type:"fb", dt:"2029-06-10", loc:"ven", desc:"ga;Perhelion 0.373AU;Inclination 33.4deg"},
    {pt:"", type:"fb", dt:"2030-09-02", loc:"ven", desc:"ga"},
    {pt:"", type:"nom", dt:"2030-09-02", loc:"sol:ho:0.373x0.770aux33deg", desc:"?"},
    {pt:"", type:"pom", dt:"2032-02", loc:"so", desc:""}
]},
mars2020rover: {name:"Perseverance", desc:"lv:Atlas V 541",
  parts:[
    {names:"Mars 2020", type:"rvm", dest:"mar", stat:"o", ctry:"us", desc:"ag:nasa,jpl;m:1025kg;dim:3.0x2.7x2.2m;sc:0.5;Sample Caching Mission", id:"2020-052A", url:"hp:www.nasa.gov/mars2020;tw:twitter.com/NASAPersevere;raw:mars.nasa.gov/mars2020/multimedia/raw-images/", icon:"mars2020.png"},
    {names:"Ingenuity;MHS:Mars Helicopter Scout", type:"dm", dest:"mar", stat:"o", ctry:"us", desc:"ag:nasa,jpl;fam:MSR;m:1.8kg;dim:;sc:0.7;", id:"", url:"Ingenuity:mars.nasa.gov/technology/helicopter/", icon:"ingenuity.png"}], 
  events:[
    {pt:"", type:"l", dt:"2020-07-30", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"toi", dt:"2020-07-30", loc:"sol:hto", desc:""},
    {pt:"", type:"edl", dt:"2021-02-18", loc:"mar:18.4446N,77.4508E", desc:"Jezero Crater;Octavia E. Butler Landing;show:Perseverance"},
    {pt:"", type:"sep", dt:"2021-04-04", loc:"mar", desc:"Rover/Helicopter probe"},
    {pt:"1", type:"l", dt:"2021-04-19", loc:"mar", desc:"Helicopter probe"},
    {pt:"1", type:"eom", dt:"2024-01-18", loc:"mar", desc:"fail:Rotor failure;rv:17.2km;Helicopter probe"},
    {pt:"0", type:"nom", dt:"2025-01", loc:"mar", desc:"rv:23.7km"},
    {pt:"0", type:"pom", dt:"2030", loc:"mar", desc:"?"}
]},
mgrso: {name:"Tianwen-1:Skyquest-1", desc:"lv:CZ-5",
  parts:[
    {names:"天问一号;MGRSO:Mars Global Remote Sensing Orbiter", type:"om", dest:"mar", stat:"o", ctry:"cn", desc:"ag:cnsa;fam:Tianwen;m:3175kg;sc:0.75", id:"2020-049A", url:"China Space Report:chinaspacereport.com/unmanned/planetary/mars-mission/", icon:"mgrso.png"},
    {names:"", type:"slm", dest:"mar", stat:"o", ctry:"cn", desc:"ag:cnsa;m:1745kg;sc:0.75", id:"", url:"", icon:"mgrso-l.png"}, 
    {names:"Zhurong;祝融", type:"rvm", dest:"mar", stat:"o", ctry:"cn", desc:"m:240kg;dim:2.6x3.0x1.85m;ag:cnsa;sc:0.5", id:"", url:"", icon:"tianwen-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2020-07-23", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"2020-07-23", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"2021-02-10", loc:"mar:445x180011kmx10.4deg", desc:"Capture orbit"},
    {pt:"", type:"sco", dt:"2021-02-24", loc:"mar:280x59000kmx87.7deg", desc:"Polar reconnaissance orbit;per:2d"},
    {pt:"1", type:"edl", dt:"2021-05-14", loc:"mar:25.066N,109.926E", desc:"lp;Utopia Planitia;show:Zhurong:NE"},
    {pt:"0", type:"sco", dt:"2021-05-17", loc:"mar:260x16000kmx86.9deg", desc:"op;Scientific orbit;per:8.2h"},
    {pt:"2", type:"sep", dt:"2021-05-22", loc:"mar", desc:"rvp/slp;eom:slm"},
    {pt:"2", type:"nom", dt:"2021-08", loc:"mar", desc:"rvp;rv:1.5km;eom:rvm"},
    {pt:"0", type:"sco", dt:"2022", loc:"mar:265x12000kmx87.7deg", desc:"Final scientific orbit;per:7.8h"},
    {pt:"0", type:"nom", dt:"2023", loc:"mar", desc:"op;?"}
]},
emm: {name:"Al Amal:Hope", desc:"lv:H-IIA 202",
  parts:[
    {names:"مسبار الأمل;EMM:Emirates Mars Mission", type:"om", dest:"mar", stat:"o", ctry:"ue", desc:"ag:uaesa;m:1350kg;m0:550kg;dim:7.9x3x3.5m;sc:0.5", id:"2020-047A", url:"hp:www.emiratesmarsmission.ae/;MBRSC:www.mbrsc.ae/emirates-mars-mission;tw:twitter.com/HopeMarsMission", icon:"emm-hope.png"}], 
  events:[
    {pt:"", type:"l", dt:"2020-07-19", loc:"ter:tng:YLP-1", desc:""},
    {pt:"", type:"toi", dt:"2020-07-24", loc:"sol:hto:1.02x1.63aux2.2deg", desc:""},
    {pt:"", type:"oi", dt:"2021-02-09", loc:"mar:1000x49380kmx19.6deg", desc:""},
    {pt:"", type:"sco", dt:"2021-04", loc:"mar:20000x43000kmx25deg", desc:""},
    {pt:"", type:"nom", dt:"2023-03", loc:"mar", desc:""},
    {pt:"", type:"pom", dt:"2025-05", loc:"mar", desc:""}
]},
change5: {name:"Chang'e 5", desc:"lv:CZ-5",
  parts:[
    {names:"嫦娥五号", type:"om", dest:"lun", stat:"o", ctry:"cn", desc:"ag:cnsa;fam:clep;m:8200kg;sc:0.75;w:0.67", id:"2020-087A", url:"China Spaceflight:www.chinaspaceflight.com/satellite/Deepspace/CE-5/CE-5.html", icon:"chang-e5.png"},
    {names:"{Chang'e 5 Lander}", type:"slm", dest:"lun", stat:"s", ctry:"cn", desc:"", id:"", url:"", icon:"chang-e5l.png"},
    {names:"{Chang'e 5 Return Stage}", type:"srm", dest:"ter", stat:"s", ctry:"cn", desc:"sc:0.6", id:"", url:"", icon:"chang-e5sr.png"}], 
  events:[
    {pt:"", type:"l", dt:"2020-11-23", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"2020-11-23", loc:"ter:lto:201x392980kmx21.3deg", desc:""},
    {pt:"", type:"oi", dt:"2020-11-28", loc:"lun:217x5585kmx42.4deg", desc:""},
    {pt:"", type:"sco", dt:"2020-11-29", loc:"lun:220kmx42.4deg", desc:""},
    {pt:"", type:"sep", dt:"2020-11-29", loc:"lun", desc:"op/lp"},
    {pt:"", type:"deo", dt:"2020-11-30", loc:"lun:220x18kmx42.4deg", desc:"lp"},
    {pt:"", type:"td", dt:"2020-12-01", loc:"lun:51.92W,43.06N", desc:"lp;NW Oceanus Procellarum, Louville Omega, Statio Tianchuan;show:CE5"},
    {pt:"", type:"l", dt:"2020-12-03", loc:"lun", desc:"as;eom:slm"},
    {pt:"", type:"doc", dt:"2020-12-05", loc:"lun", desc:"op/as"},
    {pt:"", type:"ev", dt:"2020-12-05", loc:"lun", desc:"as/src;Sample Transfer"},
    {pt:"", type:"sep", dt:"2020-12-06", loc:"lun", desc:"op/as"},
    {pt:"", type:"toi", dt:"2020-12-13", loc:"lun", desc:"op/src"},
    {pt:"", type:"edl", dt:"2020-12-17", loc:"ter:42.339N,111.439E", desc:"eom:srm;src;Siziwang Banner, Inner Mongolia;show:CE5:NE"},
    {pt:"", type:"fb", dt:"2020-11-17", loc:"ter", desc:"op"},
    {pt:"", type:"oi", dt:"2021-03-15", loc:"sol:esl1", desc:"op;Halo orbit"},
    {pt:"", type:"dep", dt:"2021-08-29", loc:"sol:esl1", desc:"op"},
    {pt:"", type:"fb", dt:"2021-09-12", loc:"lun", desc:"op"},
    {pt:"", type:"oi", dt:"2021-12-03", loc:"lun:70000x100000km", desc:"op:dro"}
]},
// --- 2021   2 missions
lucy: {name:"Lucy", desc:"lv:Atlas V 401",
  parts:[
    {names:"", type:"fbm", dest:"ast", stat:"o", ctry:"us", desc:"ag:nasa,gsfc,swri;fam:discovery;m:1550kg;m0:821kg;dim:15.8x7.2x2.78m;sc:0.4", id:"2021-093A", url:"hp:www.nasa.gov/lucy;tw:twitter.com/LucyMission", icon:"lucy.png"}
  ], events:[
    {pt:"", type:"l", dt:"2021-10-16", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"oi", dt:"2021-10-16", loc:"sol:ho:1x0.8aux0.21deg", desc:""},
    {pt:"", type:"fb", dt:"2022-10-16", loc:"ter:298km", desc:"ga"},
    {pt:"", type:"tc", dt:"2022-10-16", loc:"sol:ho:1.63x0.39aux0.02deg", desc:""},
    {pt:"", type:"fb", dt:"2023-11-01", loc:"ast:450km", desc:"ast:(152830) Dinkinesh"},
    {pt:"", type:"fb", dt:"2024-12-12", loc:"ter:347km", desc:"ga"},
    {pt:"", type:"tc", dt:"2024-12-12", loc:"sol:ho:3.36x0.71aux4.41deg", desc:""},
    {pt:"", type:"fb", dt:"2025-04-20", loc:"ast", desc:"ast:52246 Donaldjohanson"},
    {pt:"", type:"fb", dt:"2027-08", loc:"ast", desc:"ast:3548 Eurybates"},
    {pt:"", type:"fb", dt:"2027-09", loc:"ast", desc:"ast:15094 Polymele"},
    {pt:"", type:"fb", dt:"2028-04", loc:"ast", desc:"ast:11351 Leucus"},
    {pt:"", type:"fb", dt:"2028-11", loc:"ast", desc:"ast:21900 Orus"},
    {pt:"", type:"fb", dt:"2030-12-25", loc:"ter:640km", desc:"ga"},
    {pt:"", type:"tc", dt:"2030-12", loc:"sol:ho:3.30x0.71aux10.74deg", desc:""},
    {pt:"", type:"fb", dt:"2033-03", loc:"ast", desc:"ast:617 Patroclus/Menoetius"},  
    {pt:"", type:"nom", dt:"2033-03", loc:"sol:ho", desc:"?"}
]},
dart: {name:"DART:Double Asteroid Redirection Test", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"im", dest:"ast", stat:"s", ctry:"us", desc:"ag:nasa,apl;fam:AIDA;dim:19x2x2.6m;m:676kg;m0:500kg;sc:0.7", id:"2021-110A", url:"hp:dart.jhuapl.edu/;nasa:www.nasa.gov/planetarydefense/dart", icon:"dart.png"},
    {names:"LICIACube:Light Italian Cubesat for Imaging of Asteroids", type:"fbm", dest:"ast", stat:"s", ctry:"it", desc:"ag:asi,Argotec;sc:0.4", id:"", url:"LICIACube:www.argotec.it/online/what-we-do/small-satellite-unit/#tab-4", icon:"licia.png"}
  ], events:[
    {pt:"", type:"l", dt:"2021-11-24", loc:"ter:van:SLC-4E", desc:""},
    {pt:"", type:"oi", dt:"2021-11-24", loc:"sol:ho", desc:""},
    {pt:"", type:"sep", dt:"2022-09-11", loc:"sol:ho", desc:"ip/fbp"},
    //{pt:"", type:"fb", dt:"2022-09", loc:"ast", desc:"ast:didy"},
    {pt:"0", type:"imp", dt:"2022-09-26", loc:"ast", desc:"ip;ast:Dimorphos;eom:im"},
    {pt:"1", type:"fb", dt:"2022-09-26", loc:"ast", desc:"fbp:LICIACube"},
    {pt:"1", type:"eom", dt:"2022-11", loc:"ast", desc:"eom:fbm"}
]},
// --- 2022   15 missions
capstone: {name:"CAPSTONE:Cislunar Autonomous Positioning System Technology Operations and Navigation Experiment", desc:"lv:Electron",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"o", ctry:"us", desc:"ag:nasa,ames,Advanced Space;fam:SBIR;12U Cubesat;m:25kg;sc:0.5", id:"2022-070A", url:"hp:www.nasa.gov/directorates/spacetech/small_spacecraft/capstone;RocketLab:www.rocketlabusa.com/missions/lunar/", icon:"capstone.png"}], 
  events:[
    {pt:"", type:"l", dt:"2022-06-28", loc:"ter:mah:LC-1", desc:"Q3"},
    {pt:"", type:"toi", dt:"2022-07-04", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"2022-11-13", loc:"lun:nrho", desc:""},
    {pt:"", type:"nom", dt:"2024", loc:"lun", desc:""}
]},
artemis1: {name:"Artemis 1", desc:"lv:SLS 1", stat:"s", 
  parts:[
    {names:"EM-1:Exploration Mission 1;Orion MPCV Test Flight:Multi-Purpose Crew Vehicle", type:"fbm", dest:"lun",ctry:"us;eu", desc:"ag:nasa,jsc,esa;m:21250kg;sc:0.6", id:"2022-156A", url:"hp:www.nasa.gov/artemisprogram;esa:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion/Artemis_1;tw:twitter.com/NASAArtemis", icon:"orion.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"", type:"fb", dt:"2022-11-21", loc:"lun:125km", desc:"Outbound Powered Flyby"},
    {pt:"", type:"oi", dt:"2022-11-25", loc:"lun:70000km", desc:"Distant Retrograde Orbit"},
    {pt:"", type:"ev", dt:"2022-11-28", loc:"ter:432194km", desc:"Maximum distance from Earth"},
    {pt:"", type:"dep", dt:"2022-12-01", loc:"lun", desc:""},
    {pt:"", type:"fb", dt:"2022-12-05", loc:"lun:127km", desc:"Return Flyby"},
    {pt:"", type:"oi", dt:"2022-12-06", loc:"ter", desc:"eto"},
    {pt:"", type:"edl", dt:"2022-12-11", loc:"ter", desc:"eom"}
]},
lunaricecube: {name:"Lunar IceCube", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"p", 
  parts:[
    {names:"", type:"om", dest:"lun", ctry:"us", desc:"ag:Morehouse State University,nasa;m:~14kg;dim:0.7x0.2x0.3m;sc:1", id:"L-ICECUBE", url:"IceCube:www.nasa.gov/feature/goddard/lunar-icecube-to-take-on-big-mission-from-small-package", icon:"icecube.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"}, 
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"0", type:"toi", dt:"2022-11-16", loc:"ter", desc:"leto"},
    {pt:"0", type:"fb", dt:"2022-11-16", loc:"lun", desc:""},
    {pt:"0", type:"oi", dt:"2023-01-13", loc:"lun:5kmx90deg", desc:""},
    //{pt:"0", type:"sco", dt:"", loc:"lun:100kmx90deg", desc:""},
    //{pt:"0", type:"sco", dt:"2023-05", loc:"lun", desc:""},
    {pt:"0", type:"loc", dt:"2023-02-15", loc:"lun", desc:"eom"}
]},
lunarhmap: {name:"LunaH-Map:Lunar Polar Hydrogen Mapper", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"p", 
  parts:[
    {names:"", type:"om", dest:"lun", ctry:"us", desc:"ag:nasa,asu;sc:0.6", id:"LUNAH-MAP", url:"H-Map:lunahmap.asu.edu/;tw:twitter.com/lunahmap", icon:"lunahmap.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"},
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"1", type:"fb", dt:"2022-11-21", loc:"lun:1300km", desc:""},
    {pt:"1", type:"oi", dt:"2023-11-21", loc:"sol:ho", desc:""},
    {pt:"", type:"eom", dt:"2023-08-03", loc:"sol:ho", desc:""}
]},
omotenashi: {name:"OMOTENASHI:Outstanding Moon exploration Technologies demonstrated by Nano Semi-Hard Impactor", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"f", 
  parts:[    
    {names:"", type:"im", dest:"lun", ctry:"jp", desc:"ag:jaxa;sc:0.6", id:"OMOTENASH", url:"hp:www.isas.jaxa.jp/home/omotenashi/index.html;tw:twitter.com/OMOTENASHI_JAXA", icon:"omotenashi.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"},
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"", type:"los", dt:"2022-11-16", loc:"ter", desc:"Tumbling;No contact established;eom"}
]},
equuleus: {name:"EQUULEUS:EQUilibriUm Lunar-Earth point 6U Spacecraft", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"o", 
  parts:[    
    {names:"", type:"om", dest:"ter:eml2", ctry:"jp", desc:"ag:jaxa;sc:0.6", id:"EQUULEUS", url:"hp:www.space.t.u-tokyo.ac.jp/equuleus/en/;tw:twitter.com/EQUULEUS_en", icon:"equuleus.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"},
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"", type:"fb", dt:"2022-11-22", loc:"lun", desc:""},
    {pt:"", type:"oi", dt:"2024-05", loc:"eml2", desc:""},
//    {pt:"0", type:"sco", dt:"", loc:"lun:100kmx90deg", desc:""},
    {pt:"", type:"pom", dt:"2025", loc:"lun", desc:""}
]},
neascout: {name:"NEA-Scout:Near Asteroid Scout", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"f", 
  parts:[    
    {names:"", type:"fbm", dest:"ast", ctry:"us", desc:"Solar Sail;ag:nasa,msfc;m:12kg;dim:9x9x0.3m;sc:0.6", id:"NEA-SCOUT", url:"NEA-Scout:www.nasa.gov/content/nea-scout", icon:"nea-scout.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"},
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"0", type:"eom", dt:"2022-11-16", loc:"lun", desc:"No signal received"}
]},
biosentinel: {name:"BioSentinel", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"o", 
  parts:[    
    {names:"BioSentinel", type:"om", dest:"sol", ctry:"us", desc:"ag:nasa,arc;sc:0.6", id:"BIOSENTNL", url:"BioSentinel:www.nasa.gov/centers/ames/engineering/projects/biosentinel.html", icon:"biosentinel.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"},
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"1", type:"fb", dt:"2022-11-20", loc:"lun", desc:""},
    {pt:"1", type:"pom", dt:"2024", loc:"sol:ho", desc:""}
]},
cusp: {name:"CuSP:CubeSat to study Solar Particles", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"f", 
  parts:[    
    {names:"", type:"om", dest:"sol", ctry:"us", desc:"ag:nasa,swri;sc:0.8", id:"CUSP", url:"CuSP:www.nasa.gov/feature/goddard/2016/heliophysics-cubesat-to-launch-on-nasa-s-sls", icon:"cusp.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"},
    {pt:"2", type:"los", dt:"2022-11-16", loc:"ter", desc:"eom"}
/*    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"2", type:"sco", dt:"2022-11-23", loc:"sol:ho", desc:""},
    {pt:"2", type:"pom", dt:"2024", loc:"sol:ho", desc:""}*/
]},
argomoon: {name:"ArgoMoon", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"o", 
  parts:[    
    {names:"ArgoMoon", type:"test", dest:"ter:heeo", ctry:"it", desc:"ag:asi;sc:0.6", id:"ARGOMOON", url:"ArgoMoon:www.argotec.it/online/what-we-do/small-satellite-unit/#tab-3", icon:"argomoon.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"},
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"3", type:"sep", dt:"2022-11-16", loc:"ter:lto", desc:"Proximity operations"},
    {pt:"3", type:"oi", dt:"2022-11-19", loc:"ter:heeo", desc:""},
    {pt:"3", type:"nom", dt:"2023-05", loc:"ter:heeo", desc:""}
]},
lunir: {name:"LunIR:Lunar Infrared Imaging", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"o", 
  parts:[    
{names:"", type:"om", dest:"ter:geo", ctry:"us", desc:"ag:nasa;m:14kg;sc:0.6", id:"LUNIR", url:"LunIR:www.nasa.gov/feature/nasa-selects-lockheed-martin-s-lunir-cubesat-for-artemis-i-secondary-payload", icon:"lunir.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"},
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"4", type:"fb", dt:"2022-11-20", loc:"lun", desc:""},
    {pt:"4", type:"pom", dt:"2024", loc:"ter:geo", desc:""}
]},
teammiles: {name:"Team Miles", desc:"lv:SLS;part:artemis1;6U CubeSat", stat:"o", 
  parts:[    
    {names:"", type:"om", dest:"sol", ctry:"us", desc:"ag:nasa,Fluid and Reason;sc:0.6", id:"TEAMMILES", url:"Team Miles:miles-space.com", icon:"tmiles.png"}],
  events:[
    {pt:"", type:"l", dt:"2022-11-16", loc:"ter:ksc:LC-39B", desc:"Artemis-1 piggyback"},
    {pt:"", type:"toi", dt:"2022-11-16", loc:"ter", desc:"lto"},
    {pt:"0", type:"eom", dt:"2022-11-16", loc:"lun", desc:"No signal received"}
]},
kplo: {name:"Danuri", desc:"lv:Falcon 9",
  parts:[
    {names:"KPLO:Korean Pathfinder Lunar Orbiter", type:"om", dest:"lun", stat:"o", ctry:"sk", desc:"ag:kari;fam:klep;sc:0.6;m:678kg;dim:6.3x3.2x2.7m", id:"2022-094A", url:"hp:www.kari.re.kr/eng/sub03_04.do", icon:"danuri.png"}
   ], 
  events:[
    {pt:"", type:"l", dt:"2022-08-04", loc:"ter:cap", desc:""},
    {pt:"", type:"toi", dt:"2022-08-04", loc:"ter:heeo", desc:"Ballistic Lunar Transfer (BLT)"},
    {pt:"", type:"oi", dt:"2022-12-17", loc:"lun", desc:""},
    {pt:"", type:"sco", dt:"2022-12-26", loc:"lun:100kmx90deg", desc:""},
    {pt:"", type:"nom", dt:"2025-12", loc:"lun", desc:"pend"}
]},
hakutor1: {name:"Hakuto-R M1", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"slm", dest:"lun", stat:"p", ctry:"jp;eu", desc:"ag:ispace;m:340kg;sc:0.5", id:"2022-168A", url:"hp:ispace-inc.com/hakuto-r/eng/", icon:"hakuto-r.png"},
    {names:"Rashid;رشيد", type:"rvm", dest:"lun", stat:"f", ctry:"ue", desc:"ag:MBRSC;m:10kg;dim:0.5x0.5x0.8m;sc:0.5", id:"", url:"MBRSC:www.mbrsc.ae/", icon:"rashid.png"},
	{names:"SORA-Q;ソラキュー", type:"hpm", dest:"lun", stat:"f",ctry:"us", desc:"ag:jaxa,Takara-Tomy;m:250g", id:"", url:"SORA-Q:www.takaratomy.co.jp/products/sora-q/", icon:"soraq.png"}], 
  events:[
    {pt:"", type:"l", dt:"2022-12-11", loc:"ter:cap:LC-40", desc:""},
    {pt:"1", type:"oi", dt:"2023-03-21", loc:"lun:100x6000km", desc:""},
    {pt:"1", type:"sco", dt:"2023-04-13", loc:"lun:100km", desc:""},
    {pt:"1", type:"td", dt:"2023-04-25", loc:"lun:47.581N,44.094E", desc:"Atlas Crater;fail:Navigation software"},
    {pt:"1", type:"eom", dt:"2023-04-25", loc:"lun", desc:"Loss of communication"}
    //{pt:"0", type:"nom", dt:"2023-05", loc:"lun", desc:"slp"}
]},
lunarflashlight: {name:"Lunar Flashlight", desc:"lv:Falcon 9;part:hakutor1",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"p", ctry:"us", desc:"ag:nasa,jpl;m:~12kg;dim:0.7x0.7x0.3m;sc:0.2", id:"2022-168B", url:"hp:www.jpl.nasa.gov/missions/lunar-flashlight/", icon:"lunar-flashlight.png"}], 
  events:[
    {pt:"", type:"l", dt:"2022-12-11", loc:"ter:cap:LC-40", desc:""},
    {pt:"2", type:"fb", dt:"2023-04", loc:"lun", desc:""},
    {pt:"2", type:"oi", dt:"2023-05", loc:"lun:nrho", desc:"fail:Insufficient propulsion"},
    {pt:"2", type:"fb", dt:"2023-05-17", loc:"ter:65000km", desc:""},
    {pt:"2", type:"nom", dt:"l+2yr", loc:"lun", desc:""}
]},
// --- 2023
novac: {name:"IM-1", desc:"lv:Falcon 9",
  parts:[
    {names:"NOVA-C Odysseus", type:"slm", dest:"lun", stat:"s", ctry:"us", desc:"ag:nasa,Intuitive Machines;fam:clps;m:1900kg;sc:0.3", id:"2024-030A", url:"hp:intuitivemachines.com/;clps:science.nasa.gov/lunar-discovery/deliveries/op-to2-intuitive-machines", icon:"novac.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024-02-15", loc:"ter:cap", desc:""},
    {pt:"", type:"oi", dt:"2024-02-21", loc:"lun:100kmx90deg", desc:""},
    {pt:"", type:"td", dt:"2024-02-22", loc:"lun:80.13S,1.44E", desc:" Malapert A crater, Oceanus Procellarum;show:NOVA-C"},
    {pt:"0", type:"eom", dt:"2024-02-27", loc:"lun", desc:""}
]},
//CubeRover, Colmena
// --- 2022   15 missions
rlabvenus: {name:"Venus Life Finder 1", desc:"lv:Electron",
  parts:[
    {names:"", type:"aem", dest:"ven", stat:"pl", ctry:"us", desc:"ag:Rocket Lab, MIT;m:20kg;sc:0.5", id:"", url:"RocketLab:www.rocketlabusa.com/missions/upcoming-missions/first-private-mission-to-venus/", icon:"rlab-venus.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025", loc:"ter:mah:LC-1", desc:""},
    {pt:"", type:"ae", dt:"l+3mo", loc:"ven", desc:""},
    {pt:"", type:"nom", dt:"l+3mo", loc:"sol:ho", desc:""}
]},
peregrine1: {name:"Peregrine 1", desc:"lv:Vulcan Centaur-2S",
  parts:[
    {names:"M1:Mission 1", type:"slm", dest:"lun", stat:"f", ctry:"us", desc:"ag:nasa,Astrobotic;fam:clps;dim:1.9x1.9x2.5m;m:1313kg;sc:0.3", id:"2024-006A", url:"hp:www.astrobotic.com/peregrine;clps:science.nasa.gov/lunar-discovery/deliveries/to2-astrobotic", icon:"peregrin.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024-01-08", loc:"ter:cap", desc:"Q3"},
    {pt:"", type:"oi", dt:"2024-01-08", loc:"ter:lto", desc:""},
    {pt:"", type:"mal", dt:"2024-01-08", loc:"ter:lto", desc:"Propulsion anomaly, stuck valve"},
    /*{pt:"", type:"td", dt:"2024-02-23", loc:"lun:36.2N,40.2W", desc:"near Gruithuisen volcanic dome;show:Per."},*/
    {pt:"", type:"eom", dt:"2024-01-19", loc:"ter", desc:"Earth atmosphere reentry"}
]},
chandrayaan3: {name:"Chandrayaan 3:Moon Craft 3", desc:"lv:LVM3",
  parts:[
	{names:"Vikram", type:"slm", dest:"lun", stat:"o", ctry:"ind", desc:"ag:isro;m:1752kg;dim:2.5x2x1.2m", url:"hp:www.isro.gov.in/Chandrayaan3_New.html", id:"2023-098A", icon:"chandrayaan2-l.png"},
    {names:"Pragyan", type:"rvm", dest:"lun", stat:"o", ctry:"ind", desc:"ag:isro;m:27kg;dim:0.9x0.75x0.85m;sc:0.5", icon:"chandrayaan2-rv.png"},
    {names:"चंद्रयान-२", type:"om", dest:"lun", stat:"o", ctry:"ind", desc:"ag:isro;m:2148kg;dim:3.2x5.8x2.1m;sc:1", id:"", url:"", icon:"chandrayaan2-o.png"}], 
  events:[
    {pt:"", type:"l", dt:"2023-07-14", loc:"ter:sri:SLP", desc:""},
    {pt:"", type:"oi", dt:"2023-08-05", loc:"lun:170x186000km", desc:""},
    {pt:"", type:"sco", dt:"2023-08-14", loc:"lun:150x177km", desc:""},
    {pt:"", type:"sep", dt:"2023-08-17", loc:"lun", desc:"op/slp"},
    {pt:"0", type:"td", dt:"2023-08-23", loc:"lun:69.373S,32.319E", desc:"slp;near crater Manzinus;show:CH3-Vikram"},
    {pt:"", type:"sep", dt:"2023-08-24", loc:"lun", desc:"slp/rvp"},	
    {pt:"0", type:"eom", dt:"2023-09-04", loc:"lun", desc:"slp/rvp"},
    {pt:"1", type:"toi", dt:"2023-10-08", loc:"lun:eto", desc:"Orbit raising maneuvers;op"},
    {pt:"1", type:"oi", dt:"2023-11-10", loc:"ter", desc:"op"},
    {pt:"1", type:"nom", dt:"2024", loc:"lun", desc:"?;op"}
]},
slim:{name:"SLIM:Smart Lander for Investigating Moon", desc:"lv:H-IIA 202", stat:"p", 
  parts: [
    {names:"スリム;SPRINT-C", ctry:"jp", type:"slm", dest:"lun", id:"2023-137D", icon:"slim.png", desc:"ag:jaxa;m:730kg;m0:200kg;dim:2.4x1.7x2.7m;sc:0.3", url:"hp:global.jaxa.jp/projects/sas/slim/;isas:www.isas.jaxa.jp/home/slim/SLIM;tw:twitter.com/SLIM_JAXA"},
	{names:"LEV-1", ctry:"jp", type:"hpm", dest:"lun", id:"", icon:"slim-lev1.png", desc:"ag:jaxa;m:2.1kg;sc:0.3", url:""},
	{names:"LEV-2", ctry:"jp", type:"rvm", dest:"lun", id:"", icon:"slim-lev2.png", desc:"ag:jaxa;m:0.25kg;sc:0.3", url:""}], 
  events: [
    {pt:"", dt:"2023-09-06", type:"l", loc:"ter:tan", desc:""},
    {pt:"", dt:"2023-10-04", type:"fb", loc:"lun:5000km", desc:""},
    {pt:"", dt:"2023-12-25", type:"oi", loc:"lun", desc:""},
    {pt:"", dt:"2024-01-14", type:"sco", loc:"lun:600km", desc:"Circularization orbit"},
    {pt:"", dt:"2024-01-18", type:"sco", loc:"lun:600x15km", desc:"Landing orbit"},
    {pt:"", type:"td", dt:"2024-01-19", loc:"lun:13.316S,25.251E", desc:"Mare Nectaris, Shioli Crater"},
    {pt:"", type:"los", dt:"2024-01-19", loc:"lun:", desc:"mal:Thruster failure"},
    {pt:"", type:"ev", dt:"2024-01-29", loc:"lun:", desc:"Contact reestablished"},
    {pt:"", type:"eom", dt:"2024-04", loc:"lun", desc:""}
]},
luna25: {name:"Luna 25", desc:"lv:Soyuz 2.1B/Fregat-MT",
  parts:[
    {names:"Луна-Глоб посадочный;Luna Glob Lander:Lunar Sphere Lander", type:"slm", dest:"lun", stat:"f", ctry:"ru", desc:"ag:rosc,iki;m:1750kg;m0:780kg;sc:0.45", id:"2023-118A", url:"rsw:www.russianspaceweb.com/luna_glob.html", icon:"luna25.png"}], 
  events:[
    {pt:"", type:"l", dt:"2023-08-11", loc:"ter:vos:LC-1S", desc:""},
    {pt:"", type:"oi", dt:"2023-08-16", loc:"lun:100x100kmx90deg", desc:""},
//    {pt:"", type:"td", dt:"2023-08-21", loc:"lun:69.3S,43.9E", desc:"Near South Pole, Boguslavsky Crater"},
//    {pt:"", type:"nom", dt:"2023-11", loc:"lun", desc:"?"},
    {pt:"", type:"imp", dt:"2024-08-19", loc:"lun:57.865,61.360E", desc:"fail:Landing burn too long;eom"}
]},
aditya:{name:"Aditya-L1", desc:"lv:PSLV XL", stat:"o", 
  parts: [
    {names:"आदित्य", ctry:"ind", type:"obm", dest:"sol", id:"2023-131A", icon:"aditya-l1.png", desc:"Solar Coronograph;ag:isro;m:1475kg;sc:0.5", url:"hp:www.isro.gov.in/Aditya_L1.html"}], 
  events: [
    {pt:"", dt:"2023-09-02", type:"l", loc:"ter:sri", desc:"Q3"},
    {pt:"", dt:"2024-01-06", type:"sco", loc:"sol:esl1:209000x67000km", desc:"Halo Orbit;per:178dy"},
    {pt:"", type:"nom", dt:"2025", loc:"sol:esl1", desc:"?"},
    {pt:"", type:"pom", dt:"2033", loc:"sol:esl1", desc:"?"},
]},
juice: {name:"JUICE:JUpiter ICy moons Explorer", desc:"lv:Ariane 5ECA",
  parts:[
    {names:"", type:"om", dest:"jup", stat:"o", ctry:"eu", desc:"ag:esa;m:5963kg;m0:2900kg;fam:L-class;dim:28.4x3.9x4.0m;sc:1", id:"2023-053A", url:"hp:www.esa.int/Science_Exploration/Space_Science/Juice;sci:sci.esa.int/juice;jaxa:juice.stp.isas.jaxa.jp/home/;tw:twitter.com/ESA_JUICE", icon:"juice.png"},
{type:"om", dest:"jup:gany", stat:"o", ctry:"eu"}], 
  events:[
    {pt:"", type:"l", dt:"2023-04-14", loc:"ter:kou:ELA-3", desc:""},
    {pt:"", type:"fb", dt:"2024-08", loc:"lun:300km", desc:"ga"},
//    {pt:"", type:"fb", dt:"2024-08", loc:"ter:180000km", desc:"ga"},
    {pt:"", type:"fb", dt:"2024-08", loc:"ter:13400km", desc:"ga"},
    {pt:"", type:"fb", dt:"2025-08", loc:"ven:5100km", desc:"ga"},
    {pt:"", type:"fb", dt:"2026-09", loc:"ter:8600km", desc:"ga"},
//    {pt:"", type:"fb", dt:"2025-02", loc:"mar:1118km", desc:"ga"},
    {pt:"", type:"fb", dt:"2029-01", loc:"ter:3683km", desc:"ga"},
    {pt:"", type:"fb", dt:"2031-07", loc:"gany", desc:"ga"},
    {pt:"0", type:"oi", dt:"2031-07", loc:"jup", desc:""},
    {pt:"0", type:"sco", dt:"", loc:"jup", desc:"35 icy moon flybys"},
    {pt:"1", type:"oi", dt:"2034-12", loc:"gany", desc:""},
    {pt:"0", type:"sco", dt:"2035-12", loc:"gany:500km", desc:""},
    {pt:"1", type:"nom", dt:"2036-12", loc:"jup", desc:"?"}    
]},
psyche: {name:"Psyche", desc:"lv:Falcon Heavy",
  parts:[
    {names:"", type:"om", dest:"ast", stat:"o", ctry:"us", desc:"ag:nasa,jpl,asu;fam:Discovery;m0:1616kg;m:2747kg;dim:24.7x7.3x4,9m;sc:0.9", id:"2023-157A", url:"hp:psyche.asu.edu/;jpl:jpl.nasa.gov/missions/psyche/;tw:twitter.com/NASAPsyche", icon:"psyche.png"}
  ], events:[
    {pt:"", type:"l", dt:"2023-10-13", loc:"ter:cap:LC-39A", desc:""},
    {pt:"", type:"oi", dt:"2023-10-13", loc:"sol:ho:1.0x2.5aux1.1deg", desc:""},
    {pt:"", type:"fb", dt:"2026-05", loc:"mar", desc:"ga"},
    {pt:"0", type:"oi", dt:"2029-08", loc:"ast:709kmx90deg", desc:"ast:16 Psyche;Orbit A"},  
    {pt:"0", type:"sco", dt:"2029-10", loc:"ast:303kmx90deg", desc:"Orbit B1+B2"},  
    {pt:"0", type:"sco", dt:"2030-01", loc:"ast:190kmx90deg", desc:"Orbit C"},  
    {pt:"0", type:"sco", dt:"2030-05", loc:"ast:75kmx160deg", desc:"Orbit D"},  
    {pt:"0", type:"nom", dt:"2031-11", loc:"ast", desc:"?"},
    {pt:"0", type:"pom", dt:"2033-11", loc:"ast", desc:"?"}
]},
/*
xl1: {name:"Xelene", desc:"lv:Falcon 9",
  parts:[
    {names:"XL-1", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Masten;fam:clps;m:2700kg;sc:0.3", id:"", url:"hp:www.masten.aero/moon", icon:"masten-xl1.png"},
    {names:"MoonRanger", type:"rvm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:CMU,Astrobotic;fam:clps;sc:0.7", id:"", url:"hp:www.astrobotic.com/lunar-delivery/manifest/", icon:"moonranger.png"}], 
  events:[
    {pt:"", type:"l", dt:"2023-11", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"Near South pole"},
    {pt:"", type:"nom", dt:"l+12dy", loc:"lun", desc:""}
]},*/
// Sherpa Orbit Transfer Vehicle
prime1: {name:"PRIME-1:Polar Resources Ice Mining Experiment", desc:"lv:Falcon 9",
  parts:[
    {names:"NOVA-C IM-2", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Intuitive Machines;fam:clps;m:1700kg;sc:0.3", id:"", url:"hp:intuitivemachines.com/;clps:science.nasa.gov/lunar-discovery/deliveries/prime-1%E2%80%93intuitive-machines", icon:"novac.png"},
    {names:"MAPP Rover:Mobile Autonomous Prospecting Platform", type:"rvm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:Lunar Outpost;fam:clps;", id:"", url:"Rover:lunaroutpost.com/nokia-and-intuitive-machines-select-lunar-outpost-for-first-rover-mission-at-lunar-south-pole/", icon:"mapp.png"},
    {names:"Micro-Nova", type:"hpm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:Intuitive Machines;fam:clps;sc:0.3", id:"", url:"Hopper:www.intuitivemachines.com/post/intuitive-machines-and-nasa-finalize-contract-for-extreme-lunar-mobility-spacecraft", icon:"micronova.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024-12", loc:"ter:cap", desc:"Q2"},
    {pt:"", type:"oi", dt:"l+6d", loc:"lun", desc:""},
    {pt:"", type:"td", dt:"l+7d", loc:"lun", desc:"South pole;Near Shackelton Crater"},
    {pt:"0", type:"nom", dt:"l+20dy", loc:"lun", desc:""}
]},
lunartrailblazer: {name:"Lunar Trailblazer", desc:"lv:Vulcan Centaur;part:prime1",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,jpl,Caltech;fam:SIMPLEx;m:210kg;sc:0.5", id:"", url:"hp:trailblazer.caltech.edu", icon:"lunar-trailblazer.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024-12", loc:"ter", desc:""},
    {pt:"", type:"oi", dt:"l+4m", loc:"lun:100km", desc:"Polar orbit"},
    {pt:"", type:"nom", dt:"2026", loc:"lun", desc:""}
]},
//   2024
droab: {name:"DRO-A/B:Distant Retrograde Orbit", desc:"lv:CZ-4C/-YZ-1S",
  parts:[
    {names:"卫星", type:"om", dest:"lun", stat:"o", ctry:"cn", desc:"ag:CASC;sc:0.4", id:"2024-048A", url:"", icon:"dro-ab.png"},
    {names:"", type:"om", dest:"lun", stat:"", ctry:"cn", desc:"Navigation satellites", id:"", url:"", icon:""}
   ], 
  events:[
    {pt:"", type:"l", dt:"2024-03-13", loc:"ter:xch:LC-3", desc:""},
    {pt:"", type:"oi", dt:"2024-03-13", loc:"ter:lto", desc:"mal:Upper stage;eom"},
    {pt:"", type:"oi", dt:"2024-07", loc:"lun:dro", desc:""}
]},
viper: {name:"VIPER:Volatiles Investigating Polar Exploration Rover", desc:"lv:Falcon Heavy",
  parts:[
    {names:"", type:"rvm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,ames,jsc;m:430kg;dim:1.8x1.8x2.6m;fam:clps;sc:0.3", 
	id:"", url:"hp:www.nasa.gov/viper", icon:"viper.png"},
    {names:"Griffin Lander", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Astrobotic;fam:clps", id:"", url:"Griffin:www.astrobotic.com/griffin;clps:science.nasa.gov/lunar-discovery/deliveries/20a%E2%80%93astrobotic", icon:"griffin.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024-11", loc:"ter:cap", desc:""},
    {pt:"", type:"oi", dt:"l+5d", loc:"lun", desc:"South pole, Nobile Crater"},
    {pt:"", type:"td", dt:"l+10d", loc:"lun", desc:""},
    {pt:"", type:"sep", dt:"l+10d", loc:"lun", desc:"slp/rvp"},
    {pt:"", type:"nom", dt:"l+130d", loc:"lun", desc:""}
]},
blueghost: {name:"Blue Ghost 1", desc:"lv:Falcon 9",
  parts:[
    {names:"Blue Ghost", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Firefly;fam:clps;m:600kg;sc:0.3", id:"", url:"hp:firefly.com/lunar-lander/;clps:science.nasa.gov/lunar-discovery/deliveries/19d-firefly-aerospace", icon:"blueghost.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024-11-16", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun:18.56N,61.81E", desc:"Mare Crisium"},
    {pt:"", type:"nom", dt:"l+20dy", loc:"lun", desc:""}
]},
lupex: {name:"LUPEX:Lunar Polar Exploration", desc:"lv:H-III",
  parts:[
    {names:"月極域探査機;Chandrayaan 4", type:"slm", dest:"lun", stat:"pl", ctry:"ind;jp", desc:"ag:isro,jaxa;m:6000kg;sc:0.5", id:"", url:"jaxa:www.exploration.jaxa.jp/e/program/lunarpolar/;tw:twitter,com/lupex_jaxa", icon:"lupex-l.png"},
    {names:"", type:"rvm", dest:"lun", stat:"pl", ctry:"jp", desc:"ag:jaxa;m:350kg", id:"", url:"", icon:"lupex-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2028", loc:"ter:tng", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"South pole"},
    {pt:"", type:"nom", dt:"l+6mo", loc:"lun", desc:""}
]},
change6relay: {name:"Queqiao 2:Magpie Bridge 2", desc:"lv:CZ-8",
  parts:[
    {names:"Chang'e 6 LRS:Lunar Relay Satellite", type:"om", dest:"lun", stat:"o", ctry:"cn", desc:"ag:cnsa;fam:clep;sc:0.4;m:600kg;dim:4.2m", id:"2024-051A", url:"", icon:"chang-e4-relay.png"},
    {names:"Tiandu-1", type:"om", dest:"lun", stat:"o", ctry:"cn", desc:"Navigation satellites;ag:cnsa;fam:clep;sc:0.4;m:61kg", id:"2024-051B", url:"", icon:"tiandu.png"},
    {names:"Tiandu-2", type:"om", dest:"lun", stat:"o", ctry:"cn", desc:"sc:0.4;m:15kg", id:"2024-051C", url:"", icon:""}
   ], 
  events:[
    {pt:"", type:"l", dt:"2024-03-20", loc:"ter:wen:LC-201", desc:""},
    {pt:"0", type:"oi", dt:"2024-03-25", loc:"lun:200x16000kmx62.4deg", desc:"ELFO:Elliptical Lunar Frozen Orbit"},
    {pt:"", type:"nom", dt:"2032", loc:"lun", desc:"?"}
]},
change7: {name:"Chang'e 7", desc:"lv:CZ-5",
  parts:[
    {names:"嫦娥 7", type:"slm", dest:"lun", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:clep;m:8200kg;sc:0.3;w:0.67", id:"", url:"", icon:"chang-e7.png"},
    {names:"{Chang'e 7 Orbiter}", type:"om", dest:"lun", stat:"pl", ctry:"cn", desc:"", icon:""},
    {names:"{Chang'e 7 Relay}", type:"om", dest:"lun", stat:"pl", ctry:"cn", desc:"", icon:""},
    {names:"Yutu-3", type:"rvm", dest:"lun", stat:"pl", ctry:"cn", desc:"m:140kg", icon:"chang-e3-rv.png"}
    //Feiyueqi1 hopper, rover Yutu 3
    ], 
  events:[
    {pt:"", type:"l", dt:"2026", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"l+1hr", loc:"ter:lto", desc:"Near South pole"},
    {pt:"", type:"oi", dt:"l+5dy", loc:"lun:200km", desc:""},
    {pt:"2", type:"oi", dt:"l+5dy", loc:"lun", desc:"Polar orbit;Relay satellite"},
    {pt:"0", type:"td", dt:"l+?dy", loc:"lun", desc:"SP Aitken Basin"},
    //{pt:"", type:"sep", dt:"l+?dy", loc:"lun", desc:"lp/rvp"},
    {pt:"0", type:"nom", dt:"l+1yr", loc:"lun", desc:"lp;?"},
    {pt:"1", type:"nom", dt:"l+2yr", loc:"lun", desc:"op;?"}
]},
artemis2: {name:"Artemis-2", desc:"lv:SLS 1", stat:"pl", 
  parts:[
    {names:"EM-2:Exploration Mission 2", type:"hm", dest:"lun", ctry:"us;eu", desc:"ag:nasa,jsc,esa;m:21250kg;sc:0.6", id:"", url:"hp:www.nasa.gov/artemisprogram;esa:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion/Artemis_2;tw:twitter.com/NASAArtemis", icon:"orion.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025-09", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"toi", dt:"2025-09", loc:"ter", desc:"lto"},
    {pt:"0", type:"fb", dt:"l+4dy", loc:"lun", desc:"Free return trajectory"},
    {pt:"0", type:"edl", dt:"l+9dy", loc:"ter", desc:"eom"}
]},
//TENACIOUS rover
hakutor2: {name:"HAKUTO-R M2", desc:"lv:Falcon 9",
  parts:[
    {names:"RESILIENCE", type:"slm", dest:"lun", stat:"pl", ctry:"jp;eu", desc:"ag:ispace;sc:0.5", id:"", url:"hp:ispace-inc.com/hakuto-r/eng/", icon:"hakuto-r.png"},
	{names:"TENACIOUS", type:"rvm", dest:"lun", stat:"pl", ctry:"jp;eu", desc:"ag:ispace;sc:0.5", id:"", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2024-12", loc:"ter:cap", desc:"Q4"},
    {pt:"", type:"td", dt:"l+1mo", loc:"lun:60.5N,4.6W", desc:""},
    {pt:"", type:"nom", dt:"l+2mo", loc:"lun", desc:""}
]},
// --- 2024
destinyplus:{name:"DESTINY+:Demonstration and Experiment of Space Technology for INterplanetary voYage Phaethon fLyby dUSt science", desc:"lv:Epsilon-2", stat:"pl", 
  parts: [
    {names:"深宇宙探査技術実験ミッション", ctry:"jp", type:"fbm", dest:"ast", id:"", icon:"destinyplus.png", desc:"ag:jaxa,isas;Interplanetary dust observation;m:480kg;m0:365kg;sc:0.7", url:"hp:destiny.isas.jaxa.jp/DestinyPlus%202017.html"}/*,
    {names:"PROCYON Mini:PRoximate Object Close flYby with Optical Navigation", ctry:"jp", type:"fbm", dest:"ast", id:"", icon:"", desc:"ag:jaxa,isas;", url:""}*/], 
  events: [
    {pt:"", type:"l", dt:"2025", loc:"ter:uch", desc:""},
    {pt:"", type:"toi", dt:"l+1mo", loc:"ter:heeo:230x50000kmx30deg", desc:"Spiral orbit raising phase"},
    {pt:"", type:"fb", dt:"l+1.5yr", loc:"lun", desc:"GA"},
    {pt:"", type:"fb", dt:"l+2yr", loc:"lun", desc:"GA"},
    {pt:"", type:"fb", dt:"l+4.5yr", loc:"ast:500km", desc:"ast:phae"},
    {pt:"", type:"fb", dt:"l+6yr", loc:"ter", desc:"GA"},
    {pt:"", type:"fb", dt:"l+?yr", loc:"ast", desc:"ast:2005 UD"}
    // 2005 UD fb
]},
europaclipper: {name:"Europa Clipper", desc:"lv:Falcon Heavy",
  parts:[
    {names:"EMFM:Europa Multi-Flyby Mission", type:"om", dest:"jup", stat:"o", ctry:"us", desc:"ag:nasa,jpl,apl;m:6065kg;m0:2616kg;dim.22x3x6.3m;sc:1.0", id:"2024-182A", url:"hp:europa.nasa.gov/;tw:twitter.com/NASAEuropa", icon:"europaclipper.png"}
  ], events:[
    {pt:"", type:"l", dt:"2024-10-14", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"2024-10-14", loc:"sol:hto:1x2.7aux2deg", desc:""},
    {pt:"", type:"fb", dt:"2025-02-27", loc:"mar", desc:"GA"},
    {pt:"", type:"fb", dt:"2026-12-01", loc:"ter", desc:"GA"},
    {pt:"", type:"oi", dt:"2030-04-11", loc:"jup", desc:""},
    {pt:"", type:"fb", dt:"", loc:"euro", desc:"45 Flybys planned"},
    {pt:"", type:"nom", dt:"2034-10", loc:"jup", desc:"?"}
]},
halo_ppe: {name:"Gateway", desc:"lv:Falcon Heavy",
  parts:[
    {names:"PPE:Power and Propulsion Element", type:"om", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Maxar;m:9000kg;sc:1.0", id:"", url:"hp:www.nasa.gov/gateway", icon:"gateway1.png"},
    {names:"HALO:Habitation and Logistics Outpost", type:"om", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,NGIS;sc:1", id:"", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2026", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"oi", dt:"l+4m", loc:"lun:nrho", desc:""},
    {pt:"", type:"nom", dt:"2039", loc:"lun", desc:""}
]},
//Lunar Vertex rover, CADRE
im3: {name:"PRISM-1A:Payloads and Research Investigations on the Surface of the Moon 1A", desc:"lv:Falcon 9",
  parts:[
    {names:"NOVA-C IM-3", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Intuitive Machines;fam:clps;m:1700kg;sc:0.3", id:"", url:"hp:intuitivemachines.com/;clps:science.nasa.gov/lunar-discovery/deliveries/cp-11", icon:"novac.png"},
    {names:"MAPP rover", type:"rvm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,apl;fam:clps;", id:"", url:"Vertex:www.jhuapl.edu/NewsStory/211018b-lunar-vertex", icon:"vertex.png"},
    {names:"CADRE:Cooperative Autonomous Distributed Robotic Explorers", type:"rvm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa;fam:clps;", id:"", url:"CADRE:www.nasa.gov/directorates/spacetech/game_changing_development/projects/CADRE", icon:"cadre.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025-10", loc:"ter:cap", desc:""},
    {pt:"", type:"oi", dt:"l+6d", loc:"lun", desc:""},
    {pt:"", type:"td", dt:"l+7d", loc:"lun:7.5N,59.0W", desc:"Reiner Gamma;show:P1A"},
    {pt:"", type:"nom", dt:"l+20dy", loc:"lun", desc:""}
]},
mom2: {name:"MOM-2:Mars Observation Mission 2", desc:"lv:GSLV MkIII",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"pl", ctry:"ind", desc:"ag:isro,cnes;sc:0.5", id:"", url:"hp:www.isro.gov.in/", icon:"mobm.png"},
    {names:"", type:"slm", dest:"mar", stat:"pl", ctry:"ind", desc:"ag:isro;", icon:""},
    {names:"", type:"rvm", dest:"mar", stat:"pl", ctry:"ind", desc:"ag:isro;", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2024", loc:"ter:sri", desc:""},
    {pt:"", type:"toi", dt:"2024", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"l+7mo", loc:"mar:200x2000km", desc:""},
    {pt:"", type:"nom", dt:"l+2yr", loc:"mar", desc:"?"},
    {pt:"", type:"pom", dt:"l+4yr", loc:"mar", desc:"?"}    
]},
mbre: {name:"MBR Explorer", desc:"lv:tba",
  parts:[
    {names:"لاستكشاف حزام الكويكبات", type:"fbm;om", dest:"ast", stat:"pl", ctry:"ue", desc:"ag:uaesa;m:2300kg;dim:16x7x3.5m;sc:0.5", id:"", url:"hp:space.gov.ae/", icon:"mbre.png"}], 
  events:[
    {pt:"", type:"l", dt:"2028-03", loc:"ter", desc:""},
    {pt:"", type:"toi", dt:"2028-03", loc:"sol:hto", desc:""},
    {pt:"", type:"fb", dt:"2028-07", loc:"ven", desc:"ga"},
    {pt:"", type:"fb", dt:"2030-02", loc:"ast", desc:"10253 Westerwald"},
    {pt:"", type:"fb", dt:"2030-06", loc:"ast", desc:"623 Chimaera"},
    {pt:"", type:"fb", dt:"2031-01", loc:"ast", desc:"13294 Rockox"},
    {pt:"", type:"fb", dt:"2031-09", loc:"mar", desc:"ga"},
    {pt:"", type:"fb", dt:"2032-07", loc:"ast", desc:"88055 (2000 VA28)"},
    {pt:"", type:"fb", dt:"2032-12", loc:"ast", desc:"23871 (1998 RC76)"},
    {pt:"", type:"fb", dt:"2033-08", loc:"ast", desc:"59980 (1999 SG6)"},
    {pt:"", type:"oi", dt:"2034-10", loc:"ast", desc:"69 Justitia"},
    {pt:"", type:"nom", dt:"2035", loc:"ast", desc:""}
]},
shukrayaan: {name:"Shukrayaan-1:Venus Craft", desc:"lv:LVM3",
  parts:[
    {names:"शुक्रयान-१", type:"om", dest:"ven", stat:"pl", ctry:"ind", desc:"ag:isro;m:2500kg;sc:0.4", id:"", url:"hp:www.isro.gov.in/", icon:"shukrayaan.png"}], 
  events:[
    {pt:"", type:"l", dt:"2031", loc:"ter:sri", desc:""},
    {pt:"", type:"toi", dt:"l+1d", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"l+5mo", loc:"ven:500x60000km", desc:""},
    {pt:"", type:"sco", dt:"l+17mo", loc:"ven:200x600kmx90deg", desc:""},
    {pt:"", type:"nom", dt:"l+4yr", loc:"ven", desc:"?"},
    {pt:"", type:"pom", dt:"l+6yr", loc:"ven", desc:"?"}    
]},
// Draper
drapers2: {name:"APEX 1.0", desc:"lv:TBA",
  parts:[
    {names:"", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Draper;fam:clps;m:600kg;sc:0.3", id:"", url:"hp:www.draper.com/business-areas/space/clps;clps:https://science.nasa.gov/lunar-discovery/deliveries/cp-12", icon:"drapers2.png"}], 
  events:[
    {pt:"", type:"l", dt:"2026-03", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"Schrödinger crater"},
    {pt:"", type:"nom", dt:"l+20dy", loc:"lun", desc:""}
]},
change6: {name:"Chang'e 6", desc:"lv:CZ-5",
  parts:[
    {names:"嫦娥六号", type:"srm", dest:"lun", stat:"o", ctry:"cn", desc:"ag:cnsa;fam:clep;m:7800kg;sc:0.4;w:0.67", id:"2024-083A", url:"", icon:"chang-e5.png"},
    {names:"{Chang'e 6 Lander}", type:"slm", dest:"lun", stat:"s", ctry:"cn", desc:"", id:"", url:"", icon:"chang-e5l.png"},
    {names:"{Chang'e 6 Return Stage}", type:"srm", dest:"ter", stat:"s", ctry:"cn", desc:"sc:0.6", id:"", url:"", icon:"chang-e5sr.png"}
	//ICUBE Q pk
	], 
  events:[
    {pt:"", type:"l", dt:"2024-05-03", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"2024-05-03", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"2024-05-30", loc:"lun:200x8600km", desc:""},
    {pt:"", type:"sco", dt:"2024-06-01", loc:"lun:200km", desc:""},
    {pt:"", type:"sep", dt:"2024-05-30", loc:"lun", desc:"op/lp"},
    {pt:"", type:"td", dt:"2024-06-01", loc:"lun:41.64S,153.99E", desc:"lp;SP Aitken, Apollo crater;show:CE6"},
    {pt:"", type:"sc", dt:"2024-06-02", loc:"lun", desc:"lp;mat:1.935.3kg"},
    {pt:"", type:"l", dt:"2024-06-03", loc:"lun", desc:"as"},
    {pt:"", type:"doc", dt:"2024-06-06", loc:"lun", desc:"op/as"},
    {pt:"", type:"ev", dt:"2024-06-06", loc:"lun", desc:"as/src;Sample Transfer"},
    {pt:"", type:"sep", dt:"2024-06-06", loc:"lun", desc:"op/as"},
    {pt:"", type:"toi", dt:"2024-06-20", loc:"lun:lto", desc:"op/src"},
    {pt:"", type:"edl", dt:"2024-06-25", loc:"ter:42.3452N,111.4181E", desc:"src;Siziwang Banner, Inner Mongolia;eom"}
]},
hera: {name:"Hera", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"om", dest:"ast", stat:"o", ctry:"eu", desc:"ag:esa;fam:AIDA;m:870kg;sc:0.55", id:"2024-180A", url:"hp:www.esa.int/Safety_Security/Hera", icon:"hera.png"},
    {names:"Milani;APEX:Asteroid Prospection Explorer", type:"om", dest:"ast", stat:"pl", ctry:"eu", desc:"ag:esa;sc:0.5", id:"", url:"Milani:www.esa.int/Safety_Security/Hera/CubeSat_will_sift_asteroid_secrets_from_reflected_sunshine", icon:"hera-milani.png"},
    {names:"Juventas", type:"om", dest:"ast", stat:"pl", ctry:"eu", desc:"ag:GomSpace,GMV;sc:0.6", id:"", url:"Juventas:www.esa.int/Safety_Security/Hera/Hera_s_radar_CubeSat_will_peer_into_asteroid_s_heart", icon:"hera-juventas.png"}
  ], events:[
    {pt:"", type:"l", dt:"2024-10-07", loc:"ter:ksc:SLC-40", desc:""},
    {pt:"", type:"oi", dt:"2024-10-07", loc:"sol:ho:0.99x2.27aux2.3deg", desc:""},
    {pt:"", type:"fb", dt:"2025-03", loc:"mar:5000km", desc:""},
    {pt:"", type:"oi", dt:"2026-12-14", loc:"ast", desc:"ast:didy"},
    {pt:"", type:"nom", dt:"2028-12", loc:"ast", desc:"?"}
]},
mmx: {name:"MMX:Martian Moons eXploration", desc:"lv:H-III",
  parts:[
    {names:"火星衛星探査機", type:"srm", dest:"mar:phob", stat:"pl", ctry:"jp", desc:"ag:jaxa,isas;m:4000kg;m0:;dim:14x2.1x4.5m;sc:0.5", id:"", url:"hp:mmx.isas.jaxa.jp/en/;blog:mmx-news.isas.jaxa.jp/?lang=en;tw:twitter.com/mmx_jaxa_en", icon:"mmx.png"},
    {names:"{MMX Sample Return Module}", desc:"m:1300kg;sc:1.0", icon:""},
    {names:"{DLR/CNES Rover}", type:"rvm", dest:"mar:phob", stat:"pl", ctry:"de;fr", desc:"ag:dlr,cnes;m:29kg;sc:0.6", id:"", url:"dlr:www.dlr.de/content/en/articles/news/2019/02/20190619_a_rover_for_phobos_and_deimos.html", icon:"mmx-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2026", loc:"ter:tng", desc:""},
    {pt:"", type:"oi", dt:"2027", loc:"mar", desc:""},
    {pt:"", type:"sco", dt:"2027", loc:"mar", desc:"Phobos QSO"},
    {pt:"", type:"td", dt:"2028", loc:"mar:Phobos", desc:"Sample collection;show:0"},
    {pt:"", type:"oi", dt:"2029", loc:"sol:ho", desc:"ETO"},
    {pt:"", type:"edl", dt:"2030", loc:"ter", desc:"eom"}
]},
artemis3: {name:"Artemis-3", desc:"lv:SLS 1B", stat:"pl", 
  parts:[
    {names:"EM-3:Exploration Mission 3", type:"hm", dest:"lun", ctry:"us;eu", desc:"ag:nasa,jsc,esa;m:21250kg;sc:0.6", id:"", url:"hp:www.nasa.gov/artemisprogram;esa:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion/Artemis_3;tw:twitter.com/NASAArtemis", icon:"orion.png"},
    {names:"HLS", type:"hm", dest:"lun", ctry:"us", desc:"ag:nasa,spacex;m:1320000kg;sc:0.6", id:"", url:"HLS:www.spacex.com/human-spaceflight/moon/index.html", icon:"moonship-hls.png"}
    ],
  events:[
    {pt:"", type:"l", dt:"2026-09", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"td", dt:"l+4dy", loc:"lun", desc:"HLS;Near South pole"},
    {pt:"0", type:"edl", dt:"l+30dy", loc:"ter", desc:"eom"}
]},
/*rashid: {name:"Rashid", desc:"",
  parts:[
    {names:"رشيد", type:"rvm", dest:"lun", stat:"pl", ctry:"ue", desc:"ag:MBRSC;m:10kg;dim:0.5x0.5x0.8m;sc:0.5", id:"", url:"MBRSC:www.mbrsc.ae/", icon:"rashid.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024", loc:"ter", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:""},
    {pt:"", type:"nom", dt:"l+18d", loc:"lun", desc:""},
    {pt:"", type:"pom", dt:"l+18d", loc:"lun", desc:""}
]},*/
beresheet2: {name:"Beresheet 2", desc:"lv:TBA",
  parts:[
    {names:"براشيت 2", type:"om", dest:"lun", stat:"pl", ctry:"il", desc:"ag:SpaceIL;m:630kg;dim:2.5x1.6m;sc:0.3", id:"", url:"hp:beresheet.space;SpaceIL:www.spaceil.com/;tw:twitter.com/TeamSpaceIL", icon:"beresheet2-o.png"},
    {names:"", type:"slm", dest:"lun", stat:"pl", ctry:"il", desc:"ag:SpaceIL;dim:1.5x1.74m;sc:1", id:"", url:"", icon:"beresheet2-l.png"}
  ], 
  events:[
    {pt:"", type:"l", dt:"2025", loc:"ter:cap", desc:""},
    {pt:"", type:"oi", dt:"2025", loc:"lun", desc:""},
    {pt:"", type:"td", dt:"2025", loc:"lun", desc:""}
]},
zhenghe: {name:"Tianwen 2", desc:"lv:CZ-3B",  
  parts:[
    {names:"Zheng He;鄭和;", type:"srm", dest:"ast", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:Tianwen;sc:0.7;Near-Earth Asteroid Sample Return", id:"", url:"", icon:"tianwen2.png"},
    {names:"", type:"om", dest:"com", stat:"pl", ctry:"cn", desc:"ag:cnsa", id:"", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2025-05", loc:"ter:wen", desc:""},
    {pt:"", type:"toi", dt:"2025-05", loc:"sol:ho", desc:""},
    {pt:"", type:"app", dt:"2026", loc:"ast", desc:"ast:(469219) Kamoʻoalewa"},
    {pt:"", type:"dep", dt:"2027", loc:"ast", desc:"ast:(469219) Kamoʻoalewa"},
    {pt:"0", type:"edl", dt:"2027", loc:"ter", desc:"eom:srm"},
    {pt:"1", type:"fb", dt:"2027", loc:"ter", desc:"ga"},
    {pt:"1", type:"fb", dt:"2028", loc:"mar", desc:"ga"},
    {pt:"1", type:"app", dt:"2033", loc:"com", desc:"com:311P/PANSTARRS"},
    {pt:"1", type:"oi", dt:"2034", loc:"com", desc:""},
    {pt:"1", type:"nom", dt:"2036", loc:"com", desc:""}
]},
luna26: {name:"Luna 26", desc:"lv:Soyuz 2.1B/Fregat-MT",
  parts:[
    {names:"Луна-Ресурс орбитальный;Luna Resurs Orbiter:Lunar Resource Orbiter", type:"om", dest:"lun", stat:"pl", ctry:"ru", desc:"ag:rosc,iki;m:2250kg;sc:0.75", id:"", url:"rsw:www.russianspaceweb.com/luna_glob.html", icon:"luna26.png"}], 
  events:[
    {pt:"", type:"l", dt:"2027", loc:"ter:vos", desc:""},
    {pt:"", type:"oi", dt:"l+4dy", loc:"lun", desc:""},
    {pt:"", type:"sco", dt:"l+?dy", loc:"lun:60x80kmx90deg", desc:"Working Orbit"},
    {pt:"", type:"sco", dt:"l+1yr", loc:"lun:500kmx90deg", desc:"Final Operation Orbit"},
    {pt:"", type:"nom", dt:"l+3yr", loc:"lun", desc:"?"},
    {pt:"", type:"pom", dt:"l+4yr", loc:"lun", desc:"?"}
]},
escapade: {name:"ESCAPADE:Escape and Plasma Acceleration and Dynamics Explorers", desc:"lv:New Glenn",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"pl", ctry:"us", desc:"ag:nasa,UCB,Rocket Lab;fam:SIMPLEx;m:90kg;sc:0.4", id:"", url:"hp:escapade.ssl.berkeley.edu;tw:twitter.com/escapade_mars", icon:"escapade.png"},
    {names:"Gold", type:"om", dest:"mar", stat:"pl", ctry:"us", desc:"m:90kg", id:"", url:"", icon:"escapade.png"}],
  events:[
    {pt:"", type:"l", dt:"2024-10", loc:"ter:cap", desc:""},
    {pt:"", type:"oi", dt:"2025-09", loc:"mar", desc:""},
    {pt:"", type:"sco", dt:"2027-09", loc:"mar:150x10000kmx60deg", desc:""},
    {pt:"", type:"nom", dt:"2031-09", loc:"mar", desc:"?"}
]},
// --- 2025
interheliozond: {name:"Interhelio-Zond", desc:"lv:Proton-M/Briz-M",
  parts:[
    {names:"Интергелиозонд", type:"obm", dest:"sol", stat:"pl", ctry:"ru", desc:"ag:rosc,iki;m:8120kg;sc:0.7;w:0.7", id:"", url:"hp:www.izmiran.ru/projects/space/INTERHELIOPROBE/;rsw:www.russianspaceweb.com/igz.html", icon:"interhelio-zond.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025", loc:"ter:bai", desc:""},
    {pt:"", type:"oi", dt:"l+1dy", loc:"sol:ho", desc:""},
    {pt:"", type:"fb", dt:"l+?yr", loc:"ter", desc:""},
    {pt:"", type:"fb", dt:"l+?yr", loc:"ven", desc:"Multiple flybys"},
    {pt:"", type:"sco", dt:"l+5yr", loc:"sol:0.28x0.72aux30deg", desc:""},
    {pt:"", type:"nom", dt:"l+7yr", loc:"lun", desc:"?"},
    {pt:"", type:"pom", dt:"l+9yr", loc:"lun", desc:"?"}
]},
luna27: {name:"Luna 27", desc:"lv:Angara",
  parts:[
    {names:"Луна-Ресурс посадочный;Luna Resurs Lander", type:"slm", dest:"lun", stat:"pl", ctry:"ru;eu", desc:"ag:rosc,iki,esa;m:2220kg;sc:0.4", id:"", url:"hp:ofo.ikiweb.ru/en/p_luna_resurs.php;rsw:www.russianspaceweb.com/luna_resurs.html", icon:"lunaresurs.png"}], 
  events:[
    {pt:"", type:"l", dt:"2028", loc:"ter:vos", desc:""},
    {pt:"", type:"td", dt:"l+4dy", loc:"lun:87.2S,68E", desc:"Near South Pole; Shoemaker Crater;show:0"},
    {pt:"", type:"nom", dt:"l+1yr", loc:"lun", desc:"?"}
]},
solarcruiser: {name:"Solar Cruiser", desc:"Falcon 9",
  parts:[
    {names:"", type:"test", dest:"sol", stat:"pl", ctry:"us", desc:"ag:nasa;dim:40x40m;fam:stp;sc:0.75;Solar Sail", id:"", url:"hp:www.nasa.gov/mission_pages/sunearth/index.html", icon:"solarcruiser.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025-02", loc:"ter:cap:LC-36B", desc:"IMAP piggyback"},
    {pt:"", type:"sco", dt:"2025-07", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", type:"pom", dt:"2035", loc:"esl1", desc:""}    
]},
swfol1: {name:"SWFO-L1:Space Weather Follow-On L1", desc:"Falcon 9",
  parts:[
    {names:"", type:"obm", dest:"sol", stat:"pl", ctry:"us", desc:"ag:nasa,noaa;m:400kg;sc:0.75;Heliophysics Observatory", id:"", url:"hp:swww.nesdis.noaa.gov/OPPA/swfo-L1.php", icon:"swfo-l1.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025-02", loc:"ter:cap:LC-36B", desc:"IMAP piggyback"},
    {pt:"", type:"sco", dt:"2025-07", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", type:"pom", dt:"2035", loc:"esl1", desc:""}    
]},
bluemoon1: {name:"Blue Moon Mark 1", desc:"lv:New Glenn",
  parts:[
    {names:"", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:Blue Origin;fam:;m:;sc:0.3", id:"", url:"hp:blueorigin.com/blue-moon/mark-1", icon:"bluemoon1.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:""},
    {pt:"0", type:"nom", dt:"l+20dy", loc:"lun", desc:"slp"}
]},
// --- 2026
heracles: {name:"Argonaut", desc:"lv:Ariane 64",
  parts:[
    {names:"EL3:European Large Logistics Lander", type:"srm", dest:"lun", stat:"pl", ctry:"eu", desc:"ag:esa;m:8500kg;dim:4.5x6m;sc:0.3", id:"", url:"hp:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Landing_on_the_Moon_and_returning_home_Heracles", icon:"heracles.png"},
    {names:"{LDE:Lunar Descent Element}", type:"slm", dest:"lun", stat:"pl", ctry:"jp", desc:"ag:jaxa;sc:0.4", icon:"heracles-lde.png"},
    {names:"{Heracles Rover}", type:"rvm", dest:"lun", stat:"pl", ctry:"ca", desc:"ag:csa;sc:0.3", icon:"heracles-rv.png"}],
  events:[
    {pt:"", type:"l", dt:"2030", loc:"ter:kou", desc:""},
    {pt:"", type:"td", dt:"2030", loc:"lun", desc:"Schrödinger crater"},
    {pt:"", type:"l", dt:"2030", loc:"lun", desc:""},
    {pt:"0", type:"doc", dt:"2030", loc:"lun:nrho", desc:"Gateway station"}
]},
peregrine2: {name:"Peregrine 2", desc:"lv:Falcon Heavy",
  parts:[
    {names:"M2:Mission 2", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Astrobotic;fam:clps;dim:1.9x1.9x2.5m;m:1313kg;sc:0.3", id:"", url:"hp:www.astrobotic.com/peregrine;clps:nasa.gov/content/commercial-lunar-payload-services", icon:"peregrin.png"}], 
  events:[
    {pt:"", type:"l", dt:"2026", loc:"ter:cap", desc:""},
    {pt:"", type:"oi", dt:"l+15d", loc:"lun:100x8700kmx56deg", desc:""},
    {pt:"", type:"td", dt:"l+1mo", loc:"lun", desc:"South pole;show:Per2."},
    {pt:"", type:"eom", dt:"l+2mo", loc:"lun", desc:""}
]},
blueghost2: {name:"Blue Ghost 2", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Firefly;fam:clps;m:600kg;sc:0.3", id:"", url:"hp:firefly.com/lunar-lander/;clps:www.nasa.gov/CLPS", icon:"blueghost.png"}], 
  events:[
    {pt:"", type:"l", dt:"2026-03", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"(Lunar far side)"},
    {pt:"0", type:"nom", dt:"l+20dy", loc:"lun", desc:"slp"}
]},
lunarpathfinder: {name:"Lunar Pathfinder", desc:"part:blueghost2",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"pl", ctry:"eu", desc:"ag:esa,SSTL,GES;sc:0.3", id:"", url:"hp:www.sstl.co.uk/what-we-do/lunar-mission-services/lunar-pathfinder", icon:"lunar-pathfinder.png"}], 
  events:[
    {pt:"", type:"l", dt:"2026", loc:"ter", desc:""},
    {pt:"", type:"oi", dt:"l+4d", loc:"lun:500x7500kmx58deg", desc:"Elliptical Lunar Frozen Orbit (ELFO)"},
    {pt:"", type:"nom", dt:"2034", loc:"lun", desc:""}
]},
exomarsrv: {name:"ExoMars Rover", desc:"lv:Ariane 6;m:2900kg",
  parts:[
    {names:"Rosalind Franklin", type:"rvm", dest:"mar", stat:"pl", ctry:"eu", desc:"ag:esa;m:345kg;dim:2.0x1.5x1.7m;fam:exom;sc:0.4", id:"", url:"hp:exploration.esa.int/mars/48088-mission-overview/;tw:twitter.com/ESA_Exomars", icon:"exomars-rv.png"},
{names:"Descent Module", type:"slm", dest:"mar", stat:"pl", ctry:"eu", desc:"ag:esa;m:2000kg", id:"", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2028", loc:"ter:kou", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:hto", desc:""},
    {pt:"", type:"edl", dt:"l+7mo", loc:"mar:18.20N,335.45E", desc:"Oxia Planum;show:ExoMars:SE"},
    {pt:"", type:"nom", dt:"l+13mo", loc:"mar", desc:"?"},
    {pt:"", type:"pom", dt:"2035", loc:"mar", desc:"?"}
]},
neosm: {name:"NEO Surveyor:Near Earth Object Surveyor", desc:"",
  parts: [
    {names:"NEOSM:NEO Surveillance Mission", type:"obm", dest:"ast", stat:"pl", ctry:"us", desc:"ag:nasa,jpl;m:1300kg;sc:0.5", id:"", url:"hp:neocam.ipac.caltech.edu/", icon:"neosm.png"}], 
  events: [
    {pt:"", dt:"2028", type:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2028", type:"sco", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", dt:"2040", type:"nom", loc:"sol:esl1", desc:""}
]},
/*
srl: {name:"SRL:Sample Retrieval Lander", desc:"",
  parts:[
    {names:"", type:"slm", dest:"mar", stat:"pl", ctry:"us", desc:"ag:nasa,jpl;m:2500kg;dim:;sc:0.5;fam:MSR;Sample Return Mission", id:"", url:"hp:mars.nasa.gov/msr/", icon:"msr-l.png"},
    {names:"2 Sample Fetch Helicopters", type:"dm", dest:"mar", stat:"pl", ctry:"us", desc:"ag:nasa;m:;dim:;sc:0.5", id:"", url:"", icon:"sfh.png"},
    {names:"MAV:Mars Ascent Vehicle", type:"om", dest:"mar", stat:"pl", ctry:"us", desc:"ag:nasa;m:380kg;dim:;sc:0.3", id:"", url:"", icon:"msr-mav.png"}], 
  events:[
    {pt:"", type:"l", dt:"2028", loc:"ter:cap", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:hto", desc:""},
    {pt:"", type:"edl", dt:"2028-08", loc:"mar:18.5N,77.5E", desc:"Jezero Crater;show:SRL:SW"},
    {pt:"1", type:"sep", dt:"2028-08", loc:"mar", desc:"rvp/lp;Sample fetching"},
    {pt:"2", type:"l", dt:"2029-03", loc:"mar", desc:"as"},
    {pt:"2", type:"doc", dt:"2029-03", loc:"mar:340km", desc:"as/ERO;eom:om"},
    {pt:"", type:"pom", dt:"l+10yr", loc:"mar", desc:"?"}
]},
ero: {name:"ERO:Earth Return Orbiter", desc:"lv:Ariane 6",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"pl", ctry:"eu", desc:"ag:esa;fam:MSR;m:6000kg;sc:1.2", id:"", url:"hp:esa:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Mars_sample_return", icon:"ero.png"},
    {names:"{EEV:Earth Entry Vehicle}", type:"srm", dest:"ter", stat:"pl", ctry:"us", desc:"ag:nasa", icon:""}],
  events:[
    {pt:"", type:"l", dt:"2027", loc:"ter:kou", desc:""},
    {pt:"", type:"oi", dt:"l+1yr", loc:"mar", desc:""},
    {pt:"", type:"doc", dt:"l+2.5yr", loc:"mar:340km", desc:"op/SRL MAV"},
    {pt:"", type:"dep", dt:"l+3.8yr", loc:"mar", desc:""},
    {pt:"1", type:"edl", dt:"l+5yr", loc:"ter", desc:"UTTR, Utah;eom:srm"}
]},*/
artemis4: {name:"Artemis-4" , desc:"lv:SLS 1B",
  parts:[
    {names:"Orion", type:"om", dest:"lun", stat:"pl", ctry:"us;eu", desc:"ag:nasa,jsc,esa;m:21250kg;sc:0.6", id:"", url:"hp:www.nasa.gov/artemisprogram;tw:twitter.com/NASAArtemis", icon:"orion.png"},
    {names:"Lunar I-HAB:International Habitat", type:"om", dest:"lun", stat:"pl", ctry:"eu", desc:"ag:esa,Thales;sc:0.5", id:"", url:"Lunar I-HAB:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Gateway_Lunar_I-Hab;Thales:www.thalesgroup.com/en/worldwide/space/press-release/thales-alenia-space-its-way-reach-moon", icon:"ihab.png"}], 
  events:[
    {pt:"", type:"l", dt:"2028-09", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"oi", dt:"l+4d", loc:"lun:nrho", desc:""},
    {pt:"", type:"edl", dt:"l+14d", loc:"ter", desc:"?;Orion;eom"}
//    {pt:"", type:"nom", dt:"2030s", loc:"lun", desc:""}
]},
/*ramses: {name:"RAMSES:Rapid Apophis Mission for Space Safety", desc:"lv:Ariane 62",
  parts: [
    {names:"", type:"fbm", dest:"ast", stat:"pl", ctry:"eu", desc:"ag:esa;m:;sc:0.5", id:"", url:"hp:www.esa.int/Space_Safety/Planetary_Defence/Introducing_Ramses_ESA_s_mission_to_asteroid_Apophis", icon:"ramses.png"}], 
  events: [
    {pt:"", dt:"2028-04", type:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2029-02", type:"fb", loc:"ast", desc:"Apophis"},
    {pt:"", dt:"2029-04", type:"nom", loc:"sol:ho", desc:""}
]},*/
// --- 2027
change8: {name:"Chang'e 8", desc:"lv:CZ-5",
  parts:[
    {names:"嫦娥 8", type:"slm", dest:"lun", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:clep;m:8200kg;sc:0.3;w:0.67", id:"", url:"", icon:"chang-e7.png"},
    {names:"{Chang'e 8 Orbiter}", type:"om", dest:"lun", stat:"pl", ctry:"cn", desc:"", icon:""},
    {names:"Yutu-4", type:"rvm", dest:"lun", stat:"pl", ctry:"cn", desc:"m:140kg", icon:"chang-e3-rv.png"}],
  events:[
    {pt:"", type:"l", dt:"2028", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"l+1hr", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"l+5dy", loc:"lun:200km", desc:""},
    {pt:"0", type:"td", dt:"l+?dy", loc:"lun", desc:"SP Aitken Basin"},
    //{pt:"", type:"sep", dt:"l+?dy", loc:"lun", desc:"lp/rvp"},
    {pt:"0", type:"nom", dt:"l+1yr", loc:"lun", desc:"lp;?"},
    {pt:"1", type:"nom", dt:"l+2yr", loc:"lun", desc:"op;?"}
]},
dragonfly: {name:"Dragonfly", desc:"lv:Vulcan Centaur", stat:"pl", 
  parts:[
    {names:"", type:"dm", dest:"sat:Titan", ctry:"us", desc:"ag:nasa,apl;fam:New Frontiers;m:450kg;sc:0.4", id:"", url:"hp:dragonfly.jhuapl.edu", icon:"dragonfly.png"}],
  events:[
    {pt:"", type:"l", dt:"2028-07", loc:"ter:ksc", desc:""},
    /*{pt:"", type:"fb", dt:"2027-04-15", loc:"ven:3770km", desc:"ga"},
    {pt:"", type:"fb", dt:"2028-05-27", loc:"ter:1355km", desc:"ga"},
    {pt:"", type:"fb", dt:"2031-09-05", loc:"ter:1093km", desc:"ga"},*/
    {pt:"", type:"edl", dt:"2034-12", loc:"tita:7.0N,199.0W", desc:"Shangri-La, Selk Crater"},
    {pt:"", type:"nom", dt:"2037", loc:"tita", desc:"rv:175km;?"}
]},
artemis5: {name:"Artemis-5" , desc:"lv:SLS 1B",
  parts:[
    {names:"Orion", type:"om", dest:"lun", stat:"pl", ctry:"us;eu", desc:"ag:nasa,jsc,esa;m:21250kg;sc:0.6", id:"", url:"hp:www.nasa.gov/artemisprogram;tw:twitter.com/NASAArtemis", icon:"orion.png"},
    {names:"Gateway Lunar Link:European System Providing Refueling, Infrastructure and Telecommunications", type:"om", dest:"lun", stat:"pl", ctry:"eu", desc:"ag:esa,Thales;sc:1.0", id:"", url:"Lunar Link:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Gateway_Lunar_Link"},
    {names:"Gateway Lunar View", type:"om", dest:"lun", stat:"pl", ctry:"eu", desc:"ag:esa,Thales;sc:1.0", id:"", url:"Lunar View:https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Gateway_Lunar_View"}], 
  events:[
    {pt:"", type:"l", dt:"2030", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"oi", dt:"l+4d", loc:"lun:nrho", desc:""},
    {pt:"", type:"edl", dt:"l+14d", loc:"ter", desc:"?;Orion;eom"}
//    {pt:"", type:"nom", dt:"2030s", loc:"lun", desc:""}
]},
// --- 2028
tianwen3o: {name:"Tianwen-3 Orbiter:Skyquest-3", desc:"lv:CZ-5",
  parts:[
    {names:"天问三号", type:"srm", dest:"mar", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:Tianwen;sc:0.75", id:"", url:"", icon:"tianwen3-o.png"}], 
  events:[
    {pt:"", type:"l", dt:"2028", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"2028", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"2029", loc:"mar", desc:""},
    {pt:"2", type:"doc", dt:"2030", loc:"mar", desc:"op/as"},
    {pt:"0", type:"edl", dt:"2031", loc:"ter", desc:"srp;"}
]},
tianwen3l: {name:"Tianwen-3 Lander:Skyquest-3", desc:"lv:CZ-5",
  parts:[
    {names:"天问三号", type:"slm", dest:"mar", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:Tianwen;sc:0.75", id:"", url:"", icon:"tianwen3-ld.png"}], 
  events:[
    {pt:"", type:"l", dt:"2028", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"2028", loc:"sol:hto", desc:""},
    {pt:"", type:"edl", dt:"2029", loc:"mar", desc:"Northern Hemisphere"},
    {pt:"", type:"l", dt:"2030", loc:"mar", desc:"as"},
    {pt:"", type:"doc", dt:"2030", loc:"mar", desc:"as/op"},
    {pt:"", type:"nom", dt:"2030", loc:"mar", desc:"lp;?"}
]},
oryoll01: {name:"Oryol L-01", desc:"lv:Yenisei", stat:"pl", 
  parts:[
    {names:"Орёл;PTK-NP:Pilotiruemyi Transportny Korabl Novogo Pokoleniya (New Generation Piloted Transport Ship)", type:"test", dest:"lun", ctry:"ru", desc:"ag:rosc;m:22300kg;dim:4.47x13.9x6.08m;Uncrewed test flight;sc:0.7", id:"", url:"rsw:www.russianspaceweb.com/ptk_flight_testing.html", icon:"orel.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"2028", loc:"ter:vos:LC-2Y", desc:""},
    {pt:"", type:"fb", dt:"l+4dy", loc:"lun", desc:""},
    {pt:"", type:"edl", dt:"l+8dy", loc:"ter", desc:"eom"}
]},
veritas: {name:"VERITAS:Venus Emissivity, Radio Science, InSAR, Topography, and Spectroscopy", desc:"lv:TBA",
  parts:[
    {names:"", type:"om", dest:"ven", stat:"pl", ctry:"us", desc:"ag:nasa,jpl;sc:0.4", id:"", url:"hp:www.jpl.nasa.gov/news/veritas-exploring-the-deep-truths-of-venus", icon:"veritas.png"}], 
  events:[
    {pt:"", type:"l", dt:"2031", loc:"ter:cap", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:ho", desc:""},
    {pt:"", type:"fb", dt:"l+1yr", loc:"ter", desc:""},
    {pt:"", type:"oi", dt:"l+1.5yr", loc:"ven", desc:""},
    {pt:"", type:"sco", dt:"l+2.5yr", loc:"ven:250kmx89deg", desc:""},
    {pt:"", type:"nom", dt:"l+6.5yr", loc:"ven", desc:"pend"}
]},
// --- 2029
cometinterceptor: {name:"Comet Interceptor", desc:"lv:Ariane 62", 
  parts: [
    {names:"A", type:"fbm", dest:"com", stat:"pl", ctry:"eu", desc:"ag:esa;dim:;m:900kg;sc:0.75;fam:F-Class", id:"", url:"hp:www.cometinterceptor.space/;tw:twitter.com/CometIntercept",  icon:"comet-interceptor.png"},
    {names:"B1", type:"fbm", dest:"com", stat:"pl", ctry:"jp", desc:"ag:jaxa;dim:;m:;sc:0.25", id:"", url:"", icon:"comet-interceptor-b1.png"},
    {names:"B2", type:"", dest:"com", stat:"pl", ctry:"eu", desc:"ag:esa;dim:;m:;sc:0.5", id:"", url:"",  icon:"comet-interceptor-b2.png"}
  ], events: [
    {pt:"", dt:"2029", type:"l", loc:"ter:kou:ELA-4", desc:""},
    {pt:"", dt:"2029", type:"oi", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2031", type:"fb", loc:"com", desc:"?"},
    {pt:"", dt:"2033", type:"nom", loc:"sol:ho", desc:""}
]},
venerad: {name:"Venera-D", desc:"lv:Angara-A5/Blok-DM",
  parts:[
    {names:"Венера-Д", type:"om", dest:"ven", stat:"pl", ctry:"ru", desc:"ag:rosc,iki;m:3600kg;sc:0.55", id:"", url:"hp:venera-d.cosmos.ru/index.php?id=658&L=2", icon:"venera-d.png"},
    {names:"", type:"slm", dest:"ven", stat:"pl", ctry:"ru", desc:"", id:"", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2029", loc:"ter:bai", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:ho", desc:""},
    {pt:"", type:"oi", dt:"l+?yr", loc:"ven", desc:""},
    {pt:"0", type:"td", dt:"l+?yr", loc:"ven", desc:""},
    {pt:"1", type:"nom", dt:"l+3yr", loc:"ven", desc:""},
    {pt:"1", type:"pom", dt:"l+4yr", loc:"ven", desc:"?"}
]},
// --- 2030
davinciplus: {name:"DAVINCI+:Deep Atmosphere Venus Investigation of Noble gases, Chemistry, and Imaging", desc:"lv:TBA",
  parts:[
    {names:"", type:"pm", dest:"ven", stat:"pl", ctry:"us", desc:"ag:nasa,gsfc;sc:0.3", id:"", url:"hp:ssed.gsfc.nasa.gov/davinci/mission", icon:"davinci.png"},
    {names:"", type:"om", dest:"ven", stat:"pl", ctry:"us", desc:"ag:nasa,gsfc", id:"", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2029-03", loc:"ter:cap", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:ho", desc:""},
    {pt:"", type:"fb", dt:"l+7mo", loc:"ven", desc:"ga"},
    {pt:"1", type:"fb", dt:"l+17mo", loc:"ven", desc:"ga"},
    {pt:"0", type:"edl", dt:"l+24mo", loc:"ven", desc:"dp;Alpha Regio"},
    {pt:"1", type:"oi", dt:"l+24mo", loc:"ven", desc:"op"},
    {pt:"", type:"nom", dt:"l+3yr", loc:"ven", desc:"pend"}
]},
tianwen4: {name:"Tianwen-4:Skyquest-4", desc:"lv:CZ-5",
  parts:[
    {names:"天问三号", type:"om", dest:"jup", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:Tianwen;sc:0.75", id:"", url:"", icon:"tianwen4j.png"},
	{names:"", type:"fbm", dest:"ura", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:Tianwen;sc:0.75", id:"", url:"", icon:"tianwen4u.png"}], 
  events:[
    {pt:"", type:"l", dt:"2030", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"2030", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"2030", loc:"jup", desc:""},
    {pt:"0", type:"nom", dt:"2040", loc:"jup", desc:""}
]},
vigil: {name:"Vigil", desc:"lv:Ariane 62", 
  parts: [
    {names:"", type:"obm", dest:"sol", stat:"pl", ctry:"eu", desc:"ag:esa;dim:;m:2600kg;sc:0.75", id:"", url:"hp:https://www.esa.int/Space_Safety/Vigil",  icon:"vigil.png"}
  ], events: [
    {pt:"", dt:"2031", type:"l", loc:"ter:kou:ELA-4", desc:""},
    {pt:"", dt:"2034", type:"oi", loc:"sol:esl5", desc:""},
    {pt:"", dt:"2039", type:"nom", loc:"sol:ho", desc:""}
]},
// --- 2032
envision: {name:"EnVision", desc:"lv:Ariane 62",
  parts:[
    {names:"", type:"om", dest:"ven", stat:"pl", ctry:"eu", desc:"ag:esa;m0:1350kg;m:2600kg;sc:0.6", id:"", url:"hp:envisionvenus.eu;tw:twitter.com/envisionvenus", icon:"envision.png"}], 
  events:[
    {pt:"", type:"l", dt:"2032-05", loc:"ter:kou", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:ho", desc:""},
    /*{pt:"", type:"fb", dt:"l+1yr", loc:"ter", desc:""},*/
    {pt:"", type:"oi", dt:"l+16mo", loc:"ven", desc:""},
    {pt:"", type:"ev", dt:"l+16.5mo", loc:"ven", desc:"Start aerobraking"},
    {pt:"", type:"sco", dt:"l+31mo", loc:"ven:220x540kmx88deg", desc:""},
    {pt:"", type:"nom", dt:"l+6.5yr", loc:"ven", desc:"pend"}
]}
};
﻿/*{name:   Name (string) 
   other:  Alternative name (string)
   desig:  Designation (string)
   type:   Type (char) s=star, p=planet, d=dwarf pl., m=moon, r=ring, a=asteroid, c=comet, t=tno, b=belt
   par:    Parent body (string)
   disc:   Discoverer (string)
   dyr:    Discovery year (year number)
   cen:    Census (for belts)
   a:      Semimajor axis (AU|km)
   e:      Eccentricity
   i:      Inclination (deg)
   per:    Orbital period (years) 
   rot:    Rotation period (days, S=synchron, C=chaotic)
   daylen: Day length (days)
   gr:     Group membership (for moons, comests, asteroids, tnos)
   peri:   Next perihelion dist/AU+date (for comets)
   h:      Abs. magitude (mag)
   mass:   Mass (kg|relative to parent body)
	 rad:    radius (km)
   dia:    Diameter (km[x km][x km]|km/flat)
   tilt:   Axis tilt (deg)
   irad:   Solar const (W/m2)
   alb:    Geom. albedo
   grav:   Equatorial surface gravity (g)
   hill:   Hill sphere (planet radii)
   roche:  Roche limit (planet radii)
   rrl:    Rigid Roche limit (planet radii)
   frl:    Fluid Roche limit (planet radii)
   rcrit:  Critical radius (planet radii)
   comp:   Composition (main components;porosity/%)
   dens:   Mean density (g/cm3)
   temp:   Surface temperature min..mean..max (K)
*  spec:   Tholen Spectral class (astreroids) A,B,C,D,E,F,G,M,P,Q,R,S,T,V
           SMASS Spectral class (add. to Tholen) Cb,Ch,Cg,Chg,K,L,Ld,O,Sa,Sk,Sl,Sq,Sr,X,Xc,Xe,Xk
   atm:    Atmospheric main components (%)
   atp:    Atm. pressure (g/cm2)
   dip:    Magnetic dipole surface stength min..max (gauss)
   dipt:   Magnetic dipole tilt x oset (degxm)
   img:    Icon (image file  name)
   map:    Planet/system map (image file  name)
   ind:    Sort index for all main bodies/belts
   desc:   Misc data (x,y=image size in pixels; url=link to further info; sc= rel. scale; rsize=
           orb:orbital data rel. to ec=ecliptic (default), eq=planet equator, lp=local laplace plane & epoch 
*/
var objects = {
sol:
  {name:"Sun", other:"Sol", desig:"a", type:"s", par:"gc", disc:"(Prehistoric)", dyr:"",
   a:"2.5e17km", e:"", i:"", per:"230Ma", rot:"24.47..38d", 
   h:"4.83", mass:"1.9891e30kg", dia:"1392684km/9e-6", rad:"696342/9e-6", tilt:"7.25", 
   roche:"2.73", rrl:"0.80..1.41", frl:"1.54..2.72",
   alb:"", grav:"27.94", comp:"H:91.2+He:8.7", dens:"1.408", atm:"Plasma", atp:"1e-8..1e-18", temp:"5777K", dip:"1..3000", dipt:"0",
   img:"sun-l.png", imgo:"sun.png", map:"", col:"#ff0", ind:"0", 
   url:"weather:www.swpc.noaa.gov/SWN/",
   desc:"url:solarscience.msfc.nasa.gov/;rsize:2183,76;x:0;y:24"},
//Planets
mer:
  {name:"Mercury", other:"Hermes", desig:"b", type:"p", par:"sol", disc:"(Prehistoric)", dyr:"",
   a:"0.387au", e:"0.2056", i:"7.004", per:"0.2409a", rot:"58.646d", daylen:"175.94d",
   h:"-0.6", mass:"3.301e23kg", dia:"4861.4km/0", rad:"2430.7/0", tilt:"0",
   irad:"9126.6", alb:"0.142", grav:"0.378", hill:"94.4", rrl:"2.21", frl:"4.26",
   comp:"Rock+Metal+core:82", dens:"5.427", atm:"O2:42+Na:29+H2:22+He:6", atp:"1e-15", temp:"90..340..720K", dip:"2.5e-3..7e-3", dipt:"0x410",
   img:"mercury.png", map:"mercury-topo.jpg", col:"#aa9", ind:"1",
   desc:"sc:3;url:nssdc.gsfc.nasa.gov/planetary/planets/mercurypage.html;x:24;y:24"},
ven:
  {name:"Venus", other:"", desig:"c", type:"p", par:"sol", disc:"(Prehistoric)", dyr:"",
   a:"0.723au", e:"0.0068", i:"3.395", per:"0.615a", rot:"243.0226d", daylen:"116.749d",
   h:"-4.47", mass:"4.867e24kg", dia:"12103.6km/0", rad:"6051.8/0", tilt:"177.36",
   irad:"2613.9", alb:"0.67", grav:"0.905", hill:"167.1", rrl:"2.19", frl:"4.21",
   comp:"Rock+Metal+core:53", dens:"5.243", atm:"CO2:96.5+N2:3.5", atp:"92", temp:"738K",
   img:"venus2.png", map:"venus-topo.jpg", col:"#ddc", ind:"2",
   desc:"sc:3;url:nssdc.gsfc.nasa.gov/planetary/planets/venuspage.html;x:48;y:24"},
//Earth system
ter:
  {name:"Earth", other:"Terra", desig:"d", type:"p", par:"sol", disc:"(Prehistoric)", dyr:"",
   a:"1.000au", e:"0.0167", i:"0", per:"1.000a", rot:"23.9345h", daylen:"24.000h",
   h:"-3.86", mass:"5.972e24kg", dia:"12756.24km/0.00335", rad:"6378.14/0.00335", tilt:"23.45",
   irad:"1367.6", alb:"0.367", grav:"1.0", hill:"234.9", rrl:"1.49..2.22", frl:"2.86..4.28",
   comp:"Rock+Metal+core:56", dens:"5.513", atm:"N2:78+O2:21+Ar:~1", atp:"1", temp:"184..288..330K", dip:"0.24..0.66", dipt:"11.5x480",
   img:"earth.png", map:"earth-topo.jpg", col:"#00f", ind:"3", 
   url:"weather:earth.nullschool.net/",
   desc:"sc:3;url:nssdc.gsfc.nasa.gov/planetary/planets/earthpage.html;x:72;y:24"},
lun:
  {name:"Moon", other:"Luna", desig:"", type:"m", par:"ter", disc:"(Prehistoric)", dyr:"",
   a:"384400km", e:"0.0549", i:"5.145", per:"27.3217d", rot:"S", 
   h:"0.21", mass:"1.230e-2", dia:"3474.8km/0.00125", rad:"1737.4/0.00125", tilt:"1.542", alb:"0.12", grav:"0.165", 
   comp:"Rock+Metal+core:19", dens:"3.3464", atm:"Ne:28+He:25+H2:23+Ar:20", atp:"3e-15", temp:"80..220..390K",
   img:"moon.png", map:"moon-topo.jpg", col:"#888", ind:"4", 
   desc:"sc:3;url:nssdc.gsfc.nasa.gov/planetary/planets/moonpage.html;orb:ec.2000-01-01;x:0;y:96"},
//Mars system
mar:
  {name:"Mars", other:"Ares", desig:"e", type:"p", par:"sol", disc:"(Prehistoric)", dyr:"",
   a:"1.524au", e:"0.0933", i:"1.850", per:"1.881a", rot:"24.6229h", daylen:"24.6597h",
   h:"-1.52", mass:"6.417e23kg", dia:"6792.38km/0.00589", rad:"3396.19/0.00589", tilt:"25.19",
   irad:"589.2", alb:"0.170", grav:"0.377", hill:"319.8", roche:"3.2", rrl:"1.62..1.74", frl:"3.11..3.34",
   comp:"Rock+Metal+core:48", dens:"3.934", atm:"CO2:95.32+N2:2.7+Ar:1.6", atp:"4..8.7e-3", temp:"130..210..308K",
   img:"mars.png", map:"mars-topo.jpg", col:"#f68", ind:"5", 
   url:"weather:www.msss.com/msss_images/latest_weather.html",
   desc:"sc:3;scmoons:0.15;url:nssdc.gsfc.nasa.gov/planetary/planets/marspage.html;x:0;y:48"},
phob:
  {name:"Phobos", other:"", desig:"I", type:"m", par:"mar", disc:"A. Hall", dyr:"1877",
   a:"9376km", e:"0.0151", i:"1.093", per:"0.3189d", rot:"S", 
   h:"11.4", mass:"1.672e-8", dia:"26.1x22.8x18.3km", rad:"13.4x11.2x9.2", tilt:"0.009",
   alb:"0.071", grav:"1.9..8.6e-4", comp:"Rock+poro:30", dens:"1.86", temp:"~233K",
   img:"phobos.png", desc:"sc:100;url:solarsystem.nasa.gov/moons/mars-moons/phobos/in-depth/;orb:eq.2000-01-01"},
deim:
  {name:"Deimos", other:"", desig:"II", type:"m", par:"mar", disc:"A. Hall", dyr:"1877",
   a:"23460km", e:"0.0003", i:"0.93", per:"1.2624d", rot:"S", 
   h:"12.5", mass:"2.43e-9", dia:"15.0x12.2x10.4km", rad:"7.5x6.1x5.2", tilt:"0.889",
   alb:"0.068", grav:"4e-4", comp:"Rock+poro:50", dens:"1.49",  temp:"~233K",
   img:"deimos.png", desc:"sc:100;url:solarsystem.nasa.gov/moons/mars-moons/deimos/in-depth/;orb:eq.2000-01-01"},
//Asteroid belt & NEOs
sbo:
  {name:"Small Bodies", other:"", desig:"", type:"b", par:"sol", disc:"", dyr:"",
   com:"4496", ast:"1269237", cen:"Atiras:50;Atens:2473;Apollos:15975;Amors:12785;Hungarias:30007;Mars-Crossers:21089;Main Belt:1168490;Hildas:5580;Jupiter Trojans:12399;Comets:3396;Damocloids:157",
   img:"mab.png", map:"sbo.png", col:"#9f9", ind:"6", 
   url:"haz:neo.jpl.nasa.gov/risk/",
   desc:"sc:30;scmoons:0.25;url:www.minorplanetcenter.net;rsize:1800,140;x:24;y:48"},
cer:
  {name:"Ceres", other:"", desig:"1", type:"d", par:"sol", disc:"G. Piazzi", dyr:"1801",
   a:"2.767au", e:"0.1162", i:"9.647", per:"4.6039a", rot:"9.074h", gr:"mba",
   h:"3.34", mass:"9.385e20kg", dia:"964x892km", rad:"482x446", tilt:"4.03",
   irad:"179", alb:"0.090", grav:"0.028",
   comp:"Rock+Ice+core:62%", dens:"2.162", atm:"", atp:"", spec:"G", temp:"?..168..235K",
   img:"ceres.png", desc:"sc:6;url:solarsystem.nasa.gov/planets/dwarf-planets/ceres/in-depth/;orb:pr"},
pall:
  {name:"Pallas", other:"", desig:"2", type:"a", par:"sol", disc:"H.W. Olbers", dyr:"1802",
   a:"2.771au", e:"0.2813", i:"33.199", per:"4.613a", rot:"0.326d", gr:"mba",
   h:"4.13", mass:"2.11e20kg", dia:"582x556x500km", rad:"291x278x250", tilt:"78:",
   alb:"0.159", grav:"0.018", comp:"Carbonaceous", dens:"2.8", spec:"B", temp:"?..164..265K",
   img:"pallas.png", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=pallas;orb:pr"},
vest:
  {name:"Vesta", other:"", desig:"4", type:"a", par:"sol", disc:"H.W. Olbers", dyr:"1807",
   a:"2.362au", e:"0.0988", i:"6.292", per:"3.629a", rot:"0.2226d", gr:"mba",
   h:"3.2", mass:"2.591e20kg", dia:"572.6x557.4x446.4km", rad:"286.3x278.7x223.2", tilt:"29",
   alb:"0.423", grav:"0.026", comp:"Rock+Metal:22", dens:"3.456", spec:"V", temp:"85..270K",
   img:"vesta.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/asteroids/4-vesta/in-depth/;orb:pr"},
hygi:
  {name:"Hygiea", other:"", desig:"10", type:"a", par:"sol", disc:"A. de Gasparis", dyr:"1849",
   a:"3.142au", e:"0.1356", i:"5.104", per:"5.571a", rot:"13.8h", gr:"mba",
   h:"5.43", mass:"8.6e19kg", dia:"540x408x370km", rad:"215.5", tilt:"~60",
   alb:"0.0717", grav:"0.0093", comp:"Rock+Ice", dens:"1.944", spec:"C", temp:"?..164..247K",
   img:"hygiea.png", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=hygiea;orb:pr"},
psyc:
  {name:"Psyche", other:"", desig:"16", type:"a", par:"sol", disc:"A. de Gasparis", dyr:"1852",
   a:"2.923au", e:"0.136", i:"3.099", per:"5.0a", rot:"4.196h", gr:"mba",
   h:"5.9", mass:"2.41e19kg", dia:"278x238x171km", rad:"111", tilt:"98",
   alb:"0.15", grav:"0.011", comp:"Metal:82.5+Pyroxene:7+poro:35", dens:"3.99", spec:"M", temp:"160..280K",
   img:"psyche.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/asteroids/16-psyche/in-depth/;orb:ec.2017-02-16"},
lute:
  {name:"Lutetia", other:"", desig:"21", type:"a", par:"sol", disc:"H.M.S. Goldschmidt", dyr:"1852",
   a:"2.435au", e:"0.164", i:"3.064", per:"3.80a", rot:"0.3402d", gr:"mba",
   h:"7.35", mass:"1.70e18kg", dia:"122x102x76km", rad:"61x51x38", tilt:"96",
   alb:"0.19", grav:"0.005", comp:"CHON+Metal?+poro:15", dens:"3.4", spec:"C/M?", temp:"170..245K",
   img:"lutetia.png", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=lutetia;orb:ec.2000-01-01"},
ida:
  {name:"Ida", other:"", desig:"243", type:"a", par:"sol", disc:"J. Palisa", dyr:"1884",
   a:"2.862au", e:"0.0452", i:"1.138", per:"4.841a", rot:"0.193d", gr:"mba:Koronis",
   h:"9.94", mass:"4.2e16kg", dia:"53.8x24.0x15.2km", rad:"26.9x12.0x7.6", tilt:"",
   alb:"0.238", grav:"<0.001", comp:"Silicaceous+poro:30", dens:"2.6", spec:"S", temp:"~200K",
   img:"ida.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/asteroids/243-ida/in-depth/;orb:ec.2000-01-01"},
dact:
  {name:"Dactyl", other:"", desig:"I", type:"m", par:"ida", disc:"A. Harch", dyr:"1994",
   a:"~90km", e:"", i:"8", per:"20h", rot:"S", gr:"",
   h:"", mass:"", dia:"1.6x1.4x1.2km", rad:"0.8x0.7x0.6", tilt:"",
   alb:"0.24", grav:"", comp:"Silicaceous", dens:"", spec:"S", temp:"~200K",
   img:"dactyl.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/asteroids/243-ida/in-depth/;orb:"},
math:
  {name:"Mathilde", other:"", desig:"253", type:"a", par:"sol", disc:"J. Palisa", dyr:"1885",
   a:"2.645au", e:"0.2668", i:"6.743", per:"4.302a", rot:"17.406d", gr:"mba",
   h:"10.3", mass:"1.033e17kg", dia:"66x48x46km", rad:"33x24x23", tilt:"",
   alb:"0.0436", grav:"0.001", comp:"CHON+poro:50", dens:"1.3", spec:"C", temp:"~174K",
   img:"mathilde.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/asteroids/253-mathilde/in-depth/;orb:ec.2000-01-01"},
eros:
  {name:"Eros", other:"1898 DQ", desig:"433", type:"a", par:"sol", disc:"C.G. Witt", dyr:"1898",
   a:"1.458au", e:"0.223", i:"10.829", per:"1.76a", rot:"5.267h", gr:"nea:Amor",
   h:"11.16", mass:"6.69e15kg", dia:"34.4x11.2x11.2km", rad:"17.2x5.6x5.6", tilt:"",
   alb:"0.25", grav:"6e-4", comp:"Silicaceous+poro:30", dens:"2.67", spec:"S", temp:"~227K",
   img:"eros.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/asteroids/433-eros/in-depth/;orb:ec.2000-01-01"},
patr:
  {name:"Patroclus", other:"1906 VY", desig:"617", type:"a", par:"sol", disc:"A. Kopff", dyr:"1906",
   a:"5.217au", e:"0.138", i:"22.074", per:"11.92a", rot:"4.283d", gr:"jtro:Trojans",
   h:"8.19", mass:"1.36e18kg", dia:"140km", rad:"70.181", tilt:"",
   alb:"0.047", grav:"", comp:"Silicaceous", dens:"0.8", spec:"P", temp:"~110K",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=patroclus;orb:ec.2017-02-16"},
meno:
  {name:"Menoetius", other:"S/2001 (617) I", desig:"I", type:"m", par:"patr", disc:"W.J. Merline et al.", dyr:"2001",
   a:"680km", e:"0.02", i:"0", per:"4.283d", rot:"S", gr:"jtro:Trojans",
   h:"", mass:"", dia:"112km", rad:"66", tilt:"",
   alb:"", grav:"", comp:"", dens:"", spec:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=ssd.jpl.nasa.gov/sbdb.cgi?sstr=patroclus;orb:ec.2017-02-16"},
gasp:
  {name:"Gaspra", other:"1916 S45", desig:"951", type:"a", par:"sol", disc:"G.N. Neujmin", dyr:"1916",
   a:"2.210au", e:"0.174", i:"4.102", per:"3.28a", rot:"7.042h", gr:"mba:Flora",
   h:"11.46", mass:"2.5e16:kg", dia:"18.2x10.6x9.0km", rad:"9.1x5.3x4.5", tilt:"72",
   alb:"0.22", grav:"2e-4", comp:"Silicaceous", dens:"2.7", spec:"S", temp:"181K",
   img:"gaspra.png", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=gaspra;orb:ec.2000-01-01"},
stei:
  {name:"Šteins", other:"1969 VC", desig:"2867", type:"a", par:"sol", disc:"N.S. Chernykh", dyr:"1969",
   a:"2.363au", e:"0.146", i:"9.946", per:"3.63a", rot:"6.05h", gr:"mba",
   h:"12.7", mass:"", dia:"6.6x5.4x4.4km", rad:"3.3x2.7x2.2", tilt:"",
   alb:"0.34", grav:"", comp:"Silicaceous", dens:"", spec:"E", temp:"~181K",
   img:"steins.png", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=steins;orb:ec.2000-01-01"},
phae:
  {name:"Phaethon", other:"1983 TB", desig:"3200", type:"a", par:"sol", disc:"S. Green et al.", dyr:"1983",
   a:"1.271au", e:"0.890", i:"22.221", per:"1.433a", rot:"3.604h", gr:"nea:Apollo;pha",
   h:"14.6", mass:"", dia:"5.1km", rad:"2.55", tilt:"",
   alb:"0.1066", grav:"", comp:"Carbonaceous", dens:"", spec:"F/B", temp:"..1025K",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=phaethon;orb:ec.2018-03-19"},
euryb:
  {name:"Eurybates", other:"1973 SO", desig:"3548", type:"a", par:"sol", disc:"C.J. van Houten et al.", dyr:"1973",
   a:"5.198au", e:"0.0896", i:"8.057", per:"11.85a", rot:"8.711h", gr:"jtro:Greeks",
   h:"9.84", mass:"1.51e17", dia:"63.885km", rad:"31.943", tilt:"",
   alb:"0.052", grav:"0.002", comp:"Carbonaceous", dens:"1.1", spec:"C", temp:"~122K",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=eurybates;orb:ec.2020-12-17"},
euryb1:
  {name:"Queta", other:"", desig:"S/2018 (3548) I", type:"m", par:"euryb", disc:"M. Brown et al.", dyr:"2018",
   a:"2350km", e:"0.125", i:"155", per:"82.46d", rot:"", gr:"",
   h:"18.25", mass:"", dia:"0.8km", rad:"0.4", tilt:"",
   alb:"0.05", grav:"", comp:"", dens:"", spec:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=eurybates;orb:2018-09-12"},
tout:
  {name:"Toutatis", other:"1989 AC", desig:"4179", type:"a", par:"sol", disc:"C. Pollas", dyr:"1989",
   a:"2.529au", e:"0.6294", i:"0.446", per:"4.02a", rot:"5.41..7.33d", gr:"nea:Apollo;Mars-crossing",
   h:"15.3", mass:"5.0e13kg", dia:"5.8x2.4x1.8km", rad:"2.9x1.2x0.9", tilt:"",
   alb:"0.13", grav:"1e-4", comp:"Silicaceous", dens:"2.1", spec:"S", temp:"~174K",
   img:"toutatis.png", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=toutatis;orb:ec.2000-01-01"},
anne:
  {name:"Annefrank", other:"1942 EM", desig:"5535", type:"a", par:"sol", disc:"K. Reinnmuth", dyr:"1942",
   a:"2.212au", e:"0.0640", i:"4.247", per:"3.29a", rot:"15.12h", gr:"mba:Augusta",
   h:"13.7", mass:"", dia:"6.6x5.0x3.4km", rad:"3.3x2.5x1.7", tilt:"",
   alb:"0.18..0.24", grav:"", comp:"Silicaceous", dens:"", spec:"S", temp:"",
   img:"annefrank.png", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=annefrank;orb:ec.2000-01-01"},
brai:
  {name:"Braille", other:"1992 KD", desig:"9969", type:"a", par:"sol", disc:"E.F. Hein et al.", dyr:"1992",
   a:"2.344au", e:"0.4312", i:"28.895", per:"3.59d", rot:"226.4h", gr:"Mars-crosser",
   h:"15.9", mass:"7.8e15kg", dia:"3x1x1km", rad:"1.5x0.5x0.5", tilt:"",
   alb:"0.34", grav:"", comp:"Silicaceous", dens:"3.9", spec:"Q", temp:"<238K",
   img:"braille.png", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=braille;orb:ec.2000-01-01"},
leuc:
  {name:"Leucus", other:"1997 TS25", desig:"11351", type:"a", par:"sol", disc:"SCAP", dyr:"1997",
   a:"5.285au", e:"0.063", i:"11.558", per:"12.15a", rot:"21.46d", gr:"jtro:Greeks",
   h:"10.7", mass:"3.9e17", dia:"34.155km", rad:"17.078", tilt:"",
   alb:"0.079", grav:"", comp:"Carbonaceous", dens:"", spec:"D", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=leucus;orb:ec.2017-02-16"},
tukm:
  {name:"Tukmit", other:"1991 BB", desig:"12711", type:"a", par:"sol", disc:"J. Mueller", dyr:"1991",
   a:"1.18au", e:"0.272", i:"38.488", per:"1.29a", rot:"3.484h", gr:"nea:Apollo",
   h:"15.8", mass:"", dia:"", rad:"", tilt:"",
   alb:"", grav:"", comp:"Silicaceous", dens:"", spec:"Sr", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=tukmit;orb:ec.2014-05-23"},
polym:
  {name:"Polymele", other:"1999 WB2", desig:"15094", type:"a", par:"sol", disc:"Catalina Sky Survey", dyr:"1999",
   a:"5.164au", e:"0.094", i:"12.992", per:"11.74a", rot:"", gr:"jtro:Greeks",
   h:"11.7", mass:"", dia:"21.075km", rad:"10.538", tilt:"",
   alb:"0.091", grav:"", comp:"Silicaceous", dens:"", spec:"P", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=polymele;orb:ec.2017-02-16"},
polym1:
  {name:"S/2022 (15094) I", other:"", desig:"", type:"m", par:"polym", disc:"Lucy science team", dyr:"2022",
   a:"200km", e:"~0", i:"~0", per:"", rot:"", gr:"",
   h:"", mass:"", dia:"5km", rad:"2.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", spec:"", temp:"",
   img:"", desc:"sc:6"},// shaun   
orus:
  {name:"Orus", other:"1999 VQ10", desig:"21900", type:"a", par:"sol", disc:"T. Kobayashi", dyr:"1999",
   a:"5.127au", e:"0.0356", i:"8.468", per:"11.61a", rot:"13.45h", gr:"jtro:Greeks",
   h:"10.0", mass:"", dia:"50.81km", rad:"25.41", tilt:"",
   alb:"0.075", grav:"", comp:"Carbonaceous", dens:"", spec:"D", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=orus;orb:ec.2017-02-16"},
itok:
  {name:"Itokawa", other:"1998 SF36", desig:"25143", type:"a", par:"sol", disc:"LINEAR", dyr:"1998",
   a:"1.324au", e:"0.280", i:"1.622", per:"1.52a", rot:"0.5055d", gr:"nea:Apollo;Mars-crosser",
   h:"19.2", mass:"3.55e10kg", dia:"0.52x0.38x0.2km", rad:"0.26x0.19x0.1", tilt:"",
   alb:"0.53", grav:"1e-5", comp:"Silicaceous+poro:45", dens:"1.75..2.85", spec:"S", temp:"~206K",
   img:"itokawa.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/asteroids/25143-itokawa/in-depth/;orb:ec.2000-01-01"},
dona:
  {name:"DonaldJohanson", other:"1981 EQ5", desig:"52246", type:"a", par:"sol", disc:"S.J Bus", dyr:"1981",
   a:"2.384au", e:"0.186", i:"4.419", per:"3.68a", rot:"", gr:"jtro:Greeks",
   h:"15.5", mass:"", dia:"3.895km", rad:"1.948", tilt:"",
   alb:"0.103", grav:"", comp:"", dens:"", spec:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=donaldjohanson;orb:ec.2017-02-16"},
didy:
  {name:"Didymos", other:"1996 GT", desig:"65803", type:"a", par:"sol", disc:"Spacewatch", dyr:"1996",
   a:"1.6446au", e:"0.3839", i:"3.4083", per:"2.11a", rot:"2.26h", gr:"nea:Apollo;pha",
   h:"18.16", mass:"5.3e11kg", dia:"0.78km", rad:"0.39", tilt:"",
   alb:"0.15", grav:"", comp:"Metallic", dens:"2.17", spec:"Xk", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=didymos;orb:ec.2017-09-04"},
didym:
  {name:"Dimorphos", other:"S/2003 (65803)", desig:"", type:"m", par:"didy", disc:"P. Pravec et al.", dyr:"2003",
   a:"1.180km", e:"0.06", i:"", per:"11.9h", rot:"S", gr:"",
   h:"", mass:"", dia:"170m", rad:"0.085", tilt:"",
   alb:"", grav:"", comp:"", dens:"", spec:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=didymos;orb:"},
apop:
  {name:"Apophis", other:"2004 MN4", desig:"99942", type:"a", par:"sol", disc:"R.A. Tucker et al.", dyr:"2004",
   a:"0.922au", e:"0.191", i:"3.331", per:"0.89a", rot:"30.6h", gr:"nea:Aten",
   h:"19.2", mass:"", dia:"0.38km", rad:"0.19", tilt:"",
   alb:"0.23", grav:"", comp:"Silicaceous", dens:"", spec:"Sq", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=apophis;orb:ec.2007-10-12"},
benn:
  {name:"Bennu", other:"1999 RQ36", desig:"101955", type:"a", par:"sol", disc:"LINEAR", dyr:"1999",
   a:"1.126au", e:"0.204", i:"6.035", per:"1.20a", rot:"4.297h", gr:"nea:Apollo",
   h:"20.6", mass:"7.8e10kg", dia:"0.508x0.565x0.535km", rad:"0.25", tilt:"176",
   alb:"0.044", grav:"", comp:"CHON+poro:50", dens:"1.26", spec:"B", temp:"<371K",
   img:"bennu.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/asteroids/101955-bennu/in-depth/;orb:ec.2011-01-01"},
a2006jf56:
  {name:"APL", other:"2006 JF56", desig:"132524", type:"a", par:"sol", disc:"LINEAR", dyr:"2006",
   a:"2.602au", e:"0.2738", i:"4.159", per:"4.20a", rot:"", gr:"mba",
   h:"15.3", mass:"", dia:"2.3km", rad:"1.15", tilt:"",
   alb:"", grav:"", comp:"Silicaceous", dens:"", spec:"S", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=132524;orb:ec.2014-12-09"},
ryug:
  {name:"Ryugu", other:"1999 JU3", desig:"162173", type:"a", par:"sol", disc:"LINEAR", dyr:"1999",
   a:"1.19au", e:"0.1903", i:"5.884", per:"1.30a", rot:"7.633h", gr:"nea:Apollo",
   h:"19.3", mass:"4.5e11kg", dia:"1.004x0.875km", rad:"0.45", tilt:"171.64",
   alb:"0.016", grav:"", comp:"CHON+poro:50", dens:"1.19", spec:"Cb", temp:"",
   img:"ryugu.png", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=ryugu;orb:ec.2000-01-01"},
a1998ky26:
  {name:"1998 KY26", other:"", desig:"", type:"a", par:"sol", disc:"Spacewatch", dyr:"1998",
   a:"1.233au", e:"0.2018", i:"1.481", per:"1.37a", rot:"0.178h", gr:"nea:Apollo",
   h:"25.0", mass:"", dia:"30m", rad:"0.015", tilt:"",
   alb:"0.12", grav:"", comp:"", dens:"", spec:"X", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=1998+ky26;orb:ec.2017-09-04"},
a2001cc21:
  {name:"2001 CC21", other:"", desig:"98943", type:"a", par:"sol", disc:"LINEAR", dyr:"2001",
   a:"1.032au", e:"0.2191", i:"4.808", per:"1.05a", rot:"5.017h", gr:"nea:Apollo",
   h:"18.5", mass:"", dia:"9.5km", rad:"4.75", tilt:"",
   alb:"", grav:"", comp:"", dens:"", spec:"L", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=98943orb:ec.2020-05-21"},
a2002gt:
  {name:"2002 GT", other:"", desig:"163249", type:"a", par:"sol", disc:"Spacewatch", dyr:"2002",
   a:"1.344au", e:"0.335", i:"6.967", per:"1.56a", rot:"3.77h", gr:"nea:Apollo",
   h:"18.5", mass:"", dia:"", rad:"", tilt:"",
   alb:"", grav:"", comp:"", dens:"", spec:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=163249;orb:ec.2000-01-01"},
// 2001 WR1
// Selam
a1999vd57:
  {name:"Dinkinesh", other:"1999 VD57;ድንቅነሽ", desig:"152830", type:"a", par:"sol", disc:"LINEAR", dyr:"1999",
   a:"2.191", e:"0.112", i:"2.094", per:"3.24a", rot:"", gr:"mba",
   h:"17.6", mass:"", dia:"790m", rad:"0.39", tilt:"",
   alb:"0.27", grav:"", comp:"", dens:"", spec:"Sq", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=152830;orb:ec.2023-02-23"},
a1996fg3:
  {name:"1996 FG3", other:"", desig:"175706", type:"a", par:"sol", disc:"R.H. McNaught", dyr:"1996",
   a:"1.054au", e:"0.3497", i:"1.992", per:"1.08a", rot:"3.594h", gr:"nea:Apollo;pha",
   h:"18.4", mass:"", dia:"1.196km", rad:"0.593", tilt:"",
   alb:"0.072", grav:"", comp:"Carbonaceous", dens:"", spec:"C", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=175706;orb:ec.2014-05-23"},
a2000dp107a:
  {name:"2000 DP107", other:"", desig:"185851", type:"a", par:"sol", disc:"LINEAR", dyr:"2000",
   a:"1.356au", e:"0.376", i:"8.671", per:"1.60a", rot:"2.7745h", gr:"nea:Apollo;pha",
   h:"18.2", mass:"4.656e11kg", dia:"0.99x0.92x0.96km", rad:"0.495x0.470x0.480", tilt:"",
   alb:"", grav:"", comp:"poro:29..55", dens:"1.381", spec:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=185851;orb:ec.2014-12-09"},
a2000dp107b:
  {name:"2000 DP107b", other:"", desig:"185851", type:"m", par:"a2000dp107a", disc:"LINEAR", dyr:"2000",
   a:"2.659km", e:"0.019", i:"", per:"1.756d", rot:"S", gr:"nea:Apollo;pha",
   h:"", mass:"1.78e10kg", dia:"0.378x0.314x0.268km", rad:"0.189x0.157x0.134", tilt:"",
   alb:"", grav:"", comp:"", dens:"1.047", spec:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=185851;orb:ec.2014-12-09"},
a1991vg:
  {name:"1991 VG", other:"", desig:"", type:"a", par:"sol", disc:"J. Scotti", dyr:"1991",
   a:"1.0255au", e:"0.0497", i:"1.437", per:"1.04a", rot:"", gr:"nea:Apollo;pha",
   h:"28.3", mass:"", dia:"0.007km", rad:"0.0035", tilt:"",
   alb:"", grav:"", comp:"", dens:"", spec:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=1991+VG;orb:ec.2017-09-04"},
a1991vh:
  {name:"1991 VH", other:"", desig:"35107", type:"a", par:"sol", disc:"McNaught, R.H.", dyr:"1991",
   a:"1.137au", e:"0.1442", i:"13.91", per:"1.21a", rot:"2.62h", gr:"nea:Apollo;pha",
   h:"16.7", mass:"", dia:"0.929km", rad:"0.465", tilt:"",
   alb:"0.408", grav:"", comp:"Silicates", dens:"", spec:"Sk", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=35107;orb:ec.2020-05-31"},
//2016 HO3
kamo:
  {name:"Kamo`oalewa", other:"2016 HO3", desig:"469219", type:"a", par:"sol", disc:"Pan-STARRS", dyr:"2016",
   a:"1.0011au", e:"0.1036", i:"7.781", per:"1.00a", rot:"0.467h", gr:"nea:Apollo",
   h:"24.2", mass:"", dia:"0.041km", rad:"0.02", tilt:"",
   alb:"0.2", grav:"", comp:"", dens:"", spec:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=469219;orb:ec.2019-04-27"},
//Jupiter system
jup:
  {name:"Jupiter", other:"", desig:"f", type:"p", par:"sol", disc:"(Prehistoric)", dyr:"",
   a:"5.203au", e:"0.0484", i:"1.304", per:"11.863a", rot:"9.925h", daylen:"9.9259h",
   h:"-9.4", mass:"1.896e27kg", dia:"142984km/0.06487", rad:"71492/0.06487", tilt:"3.12",
   irad:"50.5", alb:"0.52", grav:"2.530", hill:"740", roche:"2.91", rcrit:"32.17", rrl:"0.93..1.46", frl:"1.78..2.80",
   comp:"H+He+Rock+core:17", dens:"1.327", atm:"H2:89.8+He:10.2", atp:">>1000", temp:"~120K", dip:"4..13", dipt:"9.4x8500",
   img:"jupiter-l.png", imgo:"jupiter.png", rings:"jupiter-rings.png", map:"", col:"#fc6", ind:"7", 
   desc:"sc:1;scmoons:0.5;url:nssdc.gsfc.nasa.gov/planetary/planets/jupiterpage.html;rsize:463,24;x:48;y:48"},
io:  {name:"Io", other:"", desig:"I", type:"m", par:"jup", disc:"G. Galilei", dyr:"1610",
   a:"421800km", e:"0.0041", i:"0.036", per:"1.7691d", rot:"S", gr:"Galilean",
   h:"-1.68", mass:"4.704e-5", dia:"3660x3638x3632km", rad:"1830x1819x1816", tilt:"0", alb:"0.62", grav:"0.183",
   comp:"Rock+Metal+core:45", dens:"3.53", atm:"SO2:90+SO+NaCl", atp:"0.3..3e-9", temp:"90..110..130K",
   img:"io.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/jupiter-moons/io/in-depth/;orb:lp.1997-01-16"},
euro:
  {name:"Europa", other:"", desig:"II", type:"m", par:"jup", disc:"G. Galilei", dyr:"1610",
   a:"671100km", e:"0.0094", i:"0.466", per:"3.5512d", rot:"S", gr:"Galilean",
   h:"-1.41", mass:"2.528e-5", dia:"3126x3120x3118km", rad:"1563x1560x1559", tilt:"0.016", alb:"0.68", grav:"0.134", 
   comp:"Ice+Rock+Metal+core:36", dens:"3.01", atm:"O2:~99", atp:"1e-12", temp:"50..102..125K",
   img:"europa.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/jupiter-moons/europa/in-depth/;orb:lp.1997-01-16"},
gany:
  {name:"Ganymede", other:"", desig:"III", type:"m", par:"jup", disc:"G. Galilei", dyr:"1610",
   a:"1070400km", e:"0.0013", i:"0.177", per:"7.1546d", rot:"S", gr:"Galilean",
   h:"-2.09", mass:"7.805e-5", dia:"5264.4km/0", rad:"2632.2/0", tilt:"0.068", alb:"0.44", grav:"0.146", 
   comp:"Ice+Rock+Metal+core:28", dens:"1.94", atm:"O2:~99", atp:"1e-11", temp:"70..110..152K", dip:"7e-4..14e-4", dipt:"176",
   img:"ganymede.png", ind:"7.3", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/jupiter-moons/ganymede/in-depth/;orb:lp.1997-01-16"},
call:
  {name:"Callisto", other:"", desig:"IV", type:"m", par:"jup", disc:"G. Galilei", dyr:"1610",
   a:"1882700km", e:"0.0074", i:"0.192", per:"16.6890d", rot:"S", gr:"Galilean",
   h:"-1.05", mass:"5.667e-5", dia:"4818.6km/0", rad:"2409.3/0", tilt:"0.356", alb:"0.19", grav:"0.126", 
   comp:"Ice+Rock+Metal", dens:"1.83", atm:"O2:98+CO2:2", atp:"2.6e-11", temp:"80..134..165K",
   img:"callisto.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/jupiter-moons/callisto/in-depth/;orb:lp.1997-01-16"},
amal:
  {name:"Amalthea", other:"", desig:"V", type:"m", par:"jup", disc:"E.E. Barnard", dyr:"1892",
   a:"181400km", e:"0.0032", i:"0.380", per:"0.4982d", rot:"S", gr:"Inner",
   h:"6.3", mass:"1.10e-9", dia:"250x146x128km", rad:"125x73x64", tilt:"0",
   alb:"0.09", grav:"0.002", comp:"", dens:"0.857", temp:"?..120..165K",
   img:"amalthea.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/amalthea/in-depth/;orb:lp.2000-01-01"},
hima:
  {name:"Himalia", other:"", desig:"VI", type:"m", par:"jup", disc:"C.D. Perrine", dyr:"1904",
   a:"11461000km", e:"0.1623", i:"27.496", per:"250.56d", rot:"7.782h", gr:"Himalia (P)",
   h:"8.1", mass:"2.2e-9", dia:"150x120km", rad:"70", tilt:"4.269",
   alb:"0.03", grav:"0.006", comp:"", dens:"1.63", temp:"~124K",
   img:"himalia.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/himalia/in-depth/;orb:lp.2000-01-01"},
elar:
  {name:"Elara", other:"", desig:"VII", type:"m", par:"jup", disc:"C.D. Perrine", dyr:"1905",
   a:"11741000km", e:"0.2174", i:"26.627", per:"259.64d", rot:"", gr:"Himalia (P)",
   h:"10.0", mass:"4.58e-10", dia:"86km", rad:"43", tilt:"4.282",
   alb:"0.03", grav:"", comp:"", dens:"", temp:"~124K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/elara/in-depth/;orb:lp.2000-01-01"},
pasi:
  {name:"Pasiphae", other:"", desig:"VIII", type:"m", par:"jup", disc:"P.J. Melotte", dyr:"1908",
   a:"23624000km", e:"0.4090", i:"151.431", per:"743.63d", rot:"", gr:"Pasiphae (R)",
   h:"9.9", mass:"1.58e-10", dia:"62km", rad:"31", tilt:"3.835",
   alb:"0.04:", grav:"", comp:"", dens:"", temp:"~124K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/pasiphae/in-depth/;orb:lp.2000-01-01"},
sino:
  {name:"Sinope", other:"", desig:"IX", type:"m", par:"jup", disc:"S.B. Nicholson", dyr:"1914",
   a:"23939000km", e:"0.2495", i:"158.109", per:"758.90d", rot:"0.548d", gr:"Pasiphae (R)",
   h:"11.6", mass:"3.95e-11", dia:"37km", rad:"17", tilt:"3.211",
   alb:"0.04:", grav:"", comp:"", dens:"", temp:"~124K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/sinope/in-depth/;orb:lp.2000-01-01"},
lysi:
  {name:"Lysithea", other:"", desig:"X", type:"m", par:"jup", disc:"S.B. Nicholson", dyr:"1938",
   a:"11717000km", e:"0.1124", i:"28.302", per:"259.20d", rot:"0.533d", gr:"Himalia (P)",
   h:"11.1", mass:"3.31e-11", dia:"36km", rad:"18", tilt:"2.953",
   alb:"0.04:", grav:"", comp:"", dens:"", temp:"~124K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/lysithea/in-depth/;orb:lp.2000-01-01"},
carm:
  {name:"Carme", other:"", desig:"XI", type:"m", par:"jup", disc:"S.B. Nicholson", dyr:"1938",
   a:"23404000km", e:"0.25", i:"164.91", per:"702.28d", rot:"", gr:"Carme (R)",
   h:"10.9", mass:"1.3e17kg", dia:"46km", rad:"23", tilt:"",
   alb:"0.04:", grav:"0.0017", comp:"", dens:"2.6:", temp:"~124K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/carme/in-depth/;orb:lp.2000-01-01"},
anan:
  {name:"Ananke", other:"", desig:"XII", type:"m", par:"jup", disc:"S.B. Nicholson", dyr:"1951",
   a:"21276000km", e:"0.2435", i:"148.889", per:"629.77d", rot:"0.35d", gr:"Ananke (R)",
   h:"11.9", mass:"3.0e16kg", dia:"29km", rad:"15", tilt:"4.891",
   alb:"0.04:", grav:"0.001", comp:"", dens:"2.6:", temp:"~124K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/ananke/in-depth/;orb:lp.2000-01-01"},
leda:
  {name:"Leda", other:"", desig:"XIII", type:"m", par:"jup", disc:"C.T. Kowal", dyr:"1974",
   a:"11165000km", e:"0.1636", i:"27.457", per:"240.92d", rot:"", gr:"Himalia (P)",
   h:"13.5", mass:"5.76e-12", dia:"20km", rad:"10:", tilt:"2.788",
   alb:"0.04:", grav:"", comp:"", dens:"", temp:"~124K", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/Leda;orb:lp.2000-01-01"},
theb:
  {name:"Thebe", other:"", desig:"XIV", type:"m", par:"jup", disc:"Voyager", dyr:"1980",
   a:"221900km", e:"0.0176", i:"1.080", per:"0.575d", rot:"S", gr:"Inner",
   h:"9.0", mass:"7.89e-10", dia:"116x98x84km", rad:"58x49x42", tilt:"0",
   alb:"0.05", grav:"0.004", comp:"", dens:"0.86", temp:"~124K",
   img:"thebe.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/thebe/in-depth/;orb:lp.1997-01-16"},
adra:
  {name:"Adrastea", other:"", desig:"XV", type:"m", par:"jup", disc:"Voyager", dyr:"1979",
   a:"129000km", e:"0.0018", i:"0.054", per:"0.298d", rot:"S", gr:"Inner",
   h:"12.4", mass:"3.9e-12", dia:"20x16x14km", rad:"10x8x7", tilt:"0",
   alb:"0.1:", grav:"", comp:"", dens:"", temp:"~124K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/adrastea/in-depth/;orb:lp.1997-01-16"},
meti:
  {name:"Metis", other:"", desig:"XVI", type:"m", par:"jup", disc:"Voyager", dyr:"1980",
   a:"128000km", e:"0.0012", i:"0.019", per:"0.295d", rot:"S", gr:"Inner",
   h:"10.8", mass:"6.31e-11", dia:"60x40x34km", rad:"30x20x17", tilt:"0",
   alb:"0.06", grav:"", comp:"", dens:"", temp:"~124K",
   img:"metis.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/metis/in-depth/;orb:lp.1997-01-16"},
calli:
  {name:"Callirrhoe", other:"S/1999 J1", desig:"XVII", type:"m", par:"jup", disc:"J.V. Scotti et al.", dyr:"1999",
   a:"24102000km", e:"0.2829", i:"147.155", per:"758.77d", rot:"", gr:"Pasiphae (R)",
   h:"13.9", mass:"", dia:"7km:", rad:"3.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", temp:"~124K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/callirrhoe/in-depth/;orb:ec.2002-05-06"},
them:
  {name:"Themisto", other:"S/2000 J1", desig:"XVIII", type:"m", par:"jup", disc:"C.T. Kowal et al.", dyr:"1975",
   a:"7507000km", e:"0.2424", i:"43.068", per:"130.02d", rot:"", gr:"Themisto (P)",
   h:"12.9", mass:"", dia:"8km", rad:"4:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", temp:"~124K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/themisto/in-depth/;orb:ec.2002-05-06"},
mega:
  {name:"Megaclite", other:"S/2000 J8", desig:"XIX", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2000",
   a:"23808000km", e:"0.4211", i:"152.845", per:"752.86d", rot:"", gr:"Pasiphae (R)",
   h:"15.1", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/megaclite/in-depth/;orb:ec.2002-05-06"},
tayg:
  {name:"Taygete", other:"S/2000 J9", desig:"XX", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2000",
   a:"23363000km", e:"0.2518", i:"165.241", per:"732.41d", rot:"", gr:"Carme (R)",
   h:"15.6", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/taygete/in-depth/;orb:ec.2002-05-06"},
chal:
  {name:"Chaldene", other:"S/2000 J10", desig:"XXI", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2000",
   a:"23179000km", e:"0.2514", i:"165.171", per:"723.72d", rot:"", gr:"Carme (R)",
   h:"15.7", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/chaldene/in-depth/;orb:ec.2002-05-06"},
harp:
  {name:"Harpalyke", other:"S/2000 J5", desig:"XXII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2000",
   a:"21104000km", e:"0.2261", i:"148.648", per:"623.32d", rot:"", gr:"Ananke (R)",
   h:"15.2", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/harpalyke/in-depth/;orb:ec.2002-05-06"},
kaly:
  {name:"Kalyke", other:"S/2000 J2", desig:"XXIII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2000",
   a:"23564000km", e:"0.2464", i:"165.181", per:"742.06d", rot:"", gr:"Carme (R)",
   h:"15.3", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/kalyke/in-depth/;orb:ec.2002-05-06"},
ioca:
  {name:"Iocaste", other:"S/2000 J3", desig:"XXIV", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2000",
   a:"21272000km", e:"0.2151", i:"149.436", per:"631.60d", rot:"", gr:"Ananke (R)",
   h:"15.3", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/iocaste/in-depth/;orb:ec.2002-05-06"},
erin:
  {name:"Erinome", other:"S/2000 J4", desig:"XXV", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2000",
   a:"23283000km", e:"0.2656", i:"164.921", per:"728.46d", rot:"", gr:"Carme (R)",
   h:"16.0", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/erinome/in-depth/;orb:ec.2002-05-06"},
ison:
  {name:"Isonoe", other:"S/2000 J6", desig:"XXVI", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2000",
   a:"23231000km", e:"0.2465", i:"165.252", per:"726.23d", rot:"", gr:"Carme (R)",
   h:"15.9", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/isonoe/in-depth/;orb:ec.2002-05-06"},
prax:
  {name:"Praxidike", other:"S/2000 J7", desig:"XXVII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2000",
   a:"21148000km", e:"0.2302", i:"148.985", per:"625.39d", rot:"", gr:"Ananke (R)",
   h:"15.2", mass:"", dia:"7km:", rad:"3.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/praxidike/in-depth/;orb:ec.2002-05-06"},
auto:
  {name:"Autonoe", other:"S/2001 J1", desig:"XXVIII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"24033000km", e:"0.3166", i:"152.284", per:"761.00d", rot:"", gr:"Pasiphae (R)",
   h:"15.4", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/autonoe/in-depth/;orb:ec.2002-05-06"},
thyo:
  {name:"Thyone", other:"S/2001 J2", desig:"XXIX", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"21192000km", e:"0.2377", i:"148.819", per:"627.19d", rot:"", gr:"Ananke (R)",
   h:"15.7", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/thyone/in-depth/;orb:ec.2002-05-06"},
herm:
  {name:"Hermippe", other:"S/2001 J3", desig:"XXX", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"21300000km", e:"0.2123", i:"150.887", per:"633.90d", rot:"", gr:"Ananke (R)",
   h:"15.5", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/hermippe/in-depth/;orb:ec.2002-05-06"},
aitn:
  {name:"Aitne", other:"S/2001 J11", desig:"XXXI", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"23315000km", e:"0.2655", i:"165.058", per:"730.10d", rot:"", gr:"Carme (R)",
   h:"16.1", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/aitne/in-depth/;orb:ec.2002-05-06"},
eury:
  {name:"Eurydome", other:"S/2001 J4", desig:"XXXII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"23148000km", e:"0.2758", i:"150.206", per:"717.34d", rot:"", gr:"Pasiphae (R)",
   h:"16.1", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/eurydome/in-depth/;orb:ec.2002-05-06"},
euan:
  {name:"Euanthe", other:"S/2001 J7", desig:"XXXIII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"21038000km", e:"0.2308", i:"148.998", per:"620.44d", rot:"", gr:"Ananke (R)",
   h:"16.2", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/euanthe/in-depth/;orb:ec.2002-05-06"},
eupo:
  {name:"Euporie", other:"S/2001 J10", desig:"XXXIV", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"19339000km", e:"0.1440", i:"145.499", per:"550.69d", rot:"", gr:"Ananke (R)",
   h:"16.5", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/euporie/in-depth/;orb:ec.2002-05-06"},
orth:
  {name:"Orthosie", other:"S/2001 J9", desig:"XXXV", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"21164000km", e:"0.2780", i:"145.937", per:"622.55d", rot:"", gr:"Ananke (R)",
   h:"16.5", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/orthosie/in-depth/;orb:ec.2002-05-06"},
spon:
  {name:"Sponde", other:"S/2001 J5", desig:"XXXVI", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"23790000km", e:"0.3132", i:"151.153", per:"748.31d", rot:"", gr:"Pasiphae (R)",
   h:"16.4", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/sponde/in-depth/;orb:ec.2002-05-06"},
kale:
  {name:"Kale", other:"S/2001 J8", desig:"XXXVII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"23302000km", e:"0.2521", i:"165.072", per:"729.55d", rot:"", gr:"Carme (R)",
   h:"16.4", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/kale/in-depth/;orb:ec.2002-05-06"},
pasit:
  {name:"Pasithee", other:"S/2001 J6", desig:"XXXVIII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2001",
   a:"23090000km", e:"0.2668", i:"165.033", per:"719.46d", rot:"", gr:"Carme (R)",
   h:"16.6", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/pasithee/in-depth/;orb:ec.2002-05-06"},
hege:
  {name:"Hegemone", other:"S/2003 J8", desig:"XXXIX", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2003",
   a:"23566000km", e:"0.3439", i:"153.977", per:"739.85d", rot:"", gr:"Pasiphae (R)",
   h:"15.9", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/hegemone/in-depth/;orb:ec.2002-05-06"},
mnem:
  {name:"Mneme", other:"S/2003 J21", desig:"XL", type:"m", par:"jup", disc:"B. Gladman", dyr:"2003",
   a:"21036000km", e:"0.2271", i:"148.630", per:"620.06d", rot:"", gr:"Ananke (R)",
   h:"16.3", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/mneme/in-depth/;orb:ec.2002-05-06"},
aoed:
  {name:"Aoede", other:"S/2003 J7", desig:"XLI", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2003",
   a:"23969000km", e:"0.4324", i:"158.253", per:"761.41d", rot:"", gr:"Pasiphae (R)",
   h:"15.8", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/aoede/in-depth/;orb:ec.2002-05-06"},
thel:
  {name:"Thelxinoe", other:"S/2003 J22", desig:"XLII", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2003",
   a:"21165000km", e:"0.2194", i:"151.335", per:"628.10d", rot:"", gr:"Ananke (R)",
   h:"16.4", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/thelxinoe/in-depth/;orb:ec.2002-05-06"},
arch:
  {name:"Arche", other:"S/2002-05-06 J1", desig:"XLIII", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2003",
   a:"23355000km", e:"0.2555", i:"164.937", per:"731.90d", rot:"", gr:"Carme (R)",
   h:"16.4", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/arche/in-depth/;orb:ec.2002-05-06"},
kall:
  {name:"Kallichore", other:"S/2003 J11", desig:"XLIV", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2003",
   a:"23273000km", e:"0.2424", i:"165.121", per:"728.28d", rot:"", gr:"Carme (R)",
   h:"16.8", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/kallichore/in-depth/;orb:ec.2002-05-06"},
heli:
  {name:"Helike", other:"S/2003 J6", desig:"XLV", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2003",
   a:"21064000km", e:"0.1467", i:"154.621", per:"626.32d", rot:"", gr:"Pasiphae (R)",
   h:"16.0", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/helike/in-depth/;orb:ec.2002-05-06"},
carp:
  {name:"Carpo", other:"S/2003 J20", desig:"XLVI", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2003",
   a:"17078000km", e:"0.4436", i:"51.157", per:"456.25d", rot:"", gr:"Carpo (P)",
   h:"15.6", mass:"", dia:"3km:", rad:"1.5:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/carpo/in-depth/;orb:ec.2002-05-06"},
euke:
  {name:"Eukelade", other:"S/2003 J1", desig:"XLVII", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2003",
   a:"23322000km", e:"0.2670", i:"165.246", per:"730.32d", rot:"", gr:"Carme (R)",
   h:"15.0", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/eukelade/in-depth/;orb:ec.2002-05-06"},
cyll:
  {name:"Cyllene", other:"S/2003 J13", desig:"XLVIII", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2003",
   a:"23787000km", e:"0.4175", i:"150.202", per:"752.01d", rot:"", gr:"Pasiphae (R)",
   h:"16.2", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.04:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/cyllene/in-depth/;orb:ec.2002-05-06"},
kore:
  {name:"Kore", other:"S/2003 J14", desig:"XLIX", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"24486000km", e:"0.3315", i:"145.043", per:"776.60d", rot:"", gr:"Pasiphae (R)",
   h:"16.7", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/kore/in-depth/;orb:ec.2002-05-06"},
hers:
  {name:"Herse", other:"S/2003 J17", desig:"L", type:"m", par:"jup", disc:"B. Gladman et al.", dyr:"2003",
   a:"23405000km", e:"0.2493", i:"164.815", per:"734.55d", rot:"", gr:"Carme (R)",
   h:"16.5", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/herse/in-depth/;orb:ec.2002-05-06"},
jli:
  {name:"S/2010 J1", other:"", desig:"LI", type:"m", par:"jup", disc:"R. Jacobson et al.", dyr:"2010",
   a:"23314000km", e:"0.324", i:"163.2", per:"723.2d", rot:"", gr:"Pasiphae (R)",
   h:"16.4", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/jupiter-li/in-depth/;orb:ec.2002-05-06"},
jlii:
  {name:"S/2010 J2", other:"", desig:"LII", type:"m", par:"jup", disc:"C. Veillet", dyr:"2010",
   a:"20307000km", e:"0.307", i:"150.4", per:"588.1d", rot:"", gr:"Ananke (R)",
   h:"17.3", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/jupiter-lii/in-depth/;orb:ec.2002-05-06"},
jliii:
  {name:"Dia", other:"S/2000 J11", desig:"LIII", type:"m", par:"jup", disc:"S.S. Shepard et al.", dyr:"2000",
   a:"12200000km", e:"0.210", i:"28.2", per:"274.4d", rot:"", gr:"Himalia (P)",
   h:"16.1", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/dia/in-depth/;orb:ec.2002-05-06"},
jliv:
  {name:"S/2016 J1", other:"", desig:"LIV", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2016",
   a:"20651000km", e:"0.140", i:"139.8", per:"603.83d", rot:"S", gr:"",
   h:"16.8", mass:"", dia:"1km:", rad:"0.5:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2016-j-1/in-depth/;orb:ec.2017-09-04"},
jlv:
  {name:"S/2003 J18", other:"", desig:"LV", type:"m", par:"jup", disc:"B. Gladman et al.", dyr:"2003",
   a:"20494000km", e:"0.1016", i:"146.007", per:"598.11d", rot:"", gr:"Ananke (R)",
   h:"16.5", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j18/in-depth/;orb:ec.2002-05-06"},
jlvi:
  {name:"S/2011 J2", other:"", desig:"LVI", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2011",
   a:"23330000km", e:"0.387", i:"151.9", per:"726.8d", rot:"S", gr:"Pasiphae (R)",
   h:"16.7", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2011-j2/in-depth/;orb:ec.2002-05-06"},
jlvii:
  {name:"S/2003 J5", other:"", desig:"LVII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"23493000km", e:"0.2459", i:"165.278", per:"738.75d", rot:"", gr:"Carme (R)",
   h:"15.8", mass:"", dia:"8km:", rad:"4:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j5/in-depth/;orb:ec.2002-05-06"},
jlviii:
  {name:"S/2003 J15", other:"", desig:"LVIII", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"22622000km", e:"0.1868", i:"146.405", per:"689.77d", rot:"", gr:"Ananke (R)",
   h:"16.7", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j15/in-depth/;orb:ec.2002-05-06"},
jlix:
  {name:"S/2017 J1", other:"", desig:"LIX", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2017",
   a:"23547000km", e:"0.396", i:"149.2", per:"735.21d", rot:"S", gr:"Pasiphae (R)",
   h:"16.5", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2017-j-1/in-depth/;orb:ec.2017-09-04"},
jlx:
  {name:"S/2003 J3", other:"", desig:"LX", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"20230000km", e:"0.2027", i:"147.772", per:"583.87d", rot:"", gr:"Ananke (R)",
   h:"16.6", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j3/in-depth/;orb:ec.2002-05-06"},
s2003j2:
  {name:"S/2003 J2", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"28332000km", e:"0.4114", i:"157.106", per:"979.33d", rot:"", gr:"",
   h:"16.6", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j2/in-depth/;orb:ec.2002-05-06"},
s2003j4:
  {name:"S/2003 J4", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"22048570km", e:"0.4967", i:"149.401", per:"668.85d", rot:"", gr:"Pasiphae (R)",
   h:"16.7", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.04", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j4/in-depth/;orb:ec.2020-12-17"},
s2003j9:
  {name:"S/2003 J9", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"24168660km", e:"0.1702", i:"166.334", per:"767.60d", rot:"", gr:"Carme (R)",
   h:"16.9", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.04", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j9/in-depth/;orb:ec.2020-12-17"},
s2003j10:
  {name:"S/2003 J10", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"22918000km", e:"0.2699", i:"162.994", per:"705.96d", rot:"", gr:"Carme (R)",
   h:"16.9", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j10/in-depth/;orb:ec.2022-08-09"},
s2003j12:
  {name:"S/2003 J12", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"21557740km", e:"0.3657", i:"154.827", per:"646.64d", rot:"", gr:"Ananke (R)",
   h:"17.0", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.04", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j12/in-depth/;orb:ec.2020-12-17"},
s2003j16:
  {name:"S/2003 J16", other:"", desig:"", type:"m", par:"jup", disc:"B. Gladman et al.", dyr:"2003",
   a:"20512500km", e:"0.3331", i:"151.163", per:"600.18d", rot:"", gr:"Ananke (R)",
   h:"16.3", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.04", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j16/in-depth/;orb:ec.2020-12-17"},
s2003j19:
  {name:"S/2003 J19", other:"", desig:"", type:"m", par:"jup", disc:"B. Gladman et al.", dyr:"2003",
   a:"23532000km", e:"0.2620", i:"165.174", per:"740.39d", rot:"", gr:"Carme (R)",
   h:"16.7", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j19/in-depth/;orb:ec.2002-05-06"},
s2003j23:
  {name:"S/2003 J23", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"24678130km", e:"0.3208", i:"146.154", per:"792.00d", rot:"", gr:"Pasiphae (R)",
   h:"16.8", mass:"", dia:"2km:", rad:"1:", tilt:"",
   alb:"0.04", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2003-j23/in-depth/;orb:ec.2020-12-17"},
s2011j1:
  {name:"S/2011 J1", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard", dyr:"2011",
   a:"20155000km", e:"0.296", i:"162.8", per:"580.7d", rot:"", gr:"Carme (R)",
   h:"16.7", mass:"", dia:"4km:", rad:"2:", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2011-j1/in-depth/;orb:ec.2002-05-06"},
s2016j2:
  {name:"Valetudo", other:"S/2016 J2", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2016",
   a:"18928000km", e:"0.2219", i:"34.01", per:"532.01d", rot:"", gr:"",
   h:"16.9", mass:"", dia:"1km", rad:"0.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2016-j2/in-depth/;orb:ec.2018-03-23"},
s2017j2:
  {name:"S/2017 J2", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2017",
   a:"23241000km", e:"0.2360", i:"166.40", per:"723.83d", rot:"", gr:"Carme (R)",
   h:"16.8", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2017-j2/in-depth/;orb:ec.2018-05-19"},
s2017j3:
  {name:"S/2017 J3", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2017",
   a:"20639000km", e:"0.1477", i:"147.92", per:"605.76d", rot:"", gr:"Ananke (R)",
   h:"16.5", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2017-j3/in-depth/;orb:ec.2018-03-23"},
s2017j4:
  {name:"S/2017 J4", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2017",
   a:"11495000km", e:"0.1800", i:"28.15", per:"251.77d", rot:"", gr:"Himalia",
   h:"16.2", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2017-j4/in-depth/;orb:ec.2018-03-23"},
s2017j5:
  {name:"S/2017 J5", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2017",
   a:"23169000km", e:"0.2842", i:"164.33", per:"720.49d", rot:"", gr:"Carme (R)",
   h:"16.5", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2017-j5/in-depth/;orb:ec.2018-03-23"}, 
s2017j6:
  {name:"S/2017 J6", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2017",
   a:"22395000km", e:"0.5568", i:"155.19", per:"684.66d", rot:"", gr:"Carme (R)",
   h:"16.4", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2017-j6/in-depth/;orb:ec.2018-03-23"},
s2017j7:
  {name:"S/2017 J7", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2017",
   a:"20571000km", e:"0.2147", i:"143.44", per:"602.77d", rot:"", gr:"Ananke (R)",
   h:"16.6", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2017-j7/in-depth/;orb:ec.2018-03-23"},
s2017j8:
  {name:"S/2017 J8", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2017",
   a:"23174000km", e:"0.3118", i:"164.78", per:"720.73d", rot:"", gr:"Carme (R)",
   h:"17.0", mass:"", dia:"1km", rad:"0.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2017-j8/in-depth/;orb:ec.2018-03-23"}, 
s2017j9:
  {name:"S/2017 J9", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2017",
   a:"21430000km", e:"0.2288", i:"152.66", per:"640.90d", rot:"", gr:"Ananke (R)",
   h:"16.1", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2017-j9/in-depth/;orb:ec.2018-03-23"}, 
s2018j1:
  {name:"S/2018 J1", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2018",
   a:"11453000km", e:"0.0944", i:"30.61", per:"250.40d", rot:"", gr:"Himalia",
   h:"15.9", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2018-j1/in-depth/;orb:ec.2018-03-23"}, 
s2018j2:
  {name:"S/2018 J2", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2018",
   a:"11467500km", e:"0.1184", i:"29.40", per:"250.88d", rot:"", gr:"Himalia",
   h:"16.5", mass:"", dia:"3km", rad:"1.5", tilt:"",
   alb:"0.04", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2018-j2/in-depth/;orb:ec.2022-08-09"}, 
s2018j3:
  {name:"S/2018 J3", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2018",
   a:"22826560km", e:"0.2731", i:"164.90", per:"704.56d", rot:"", gr:"Carme (R)",
   h:"17.3", mass:"", dia:"1km", rad:"0.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2018-j3/in-depth/;orb:ec.2023-02-25"}, 
s2018j4:
  {name:"S/2018 J4", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2018",
   a:"16504250km", e:"0.0573", i:"53.18", per:"433.16d", rot:"", gr:"Carpo (P)",
   h:"16.7", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"0.04", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2018-j4/in-depth/;orb:ec.2023-02-25"}, 
s2021j1:
  {name:"S/2021 J1", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2021",
   a:"20667200km", e:"0.2461", i:"149.753", per:"606.99d", rot:"", gr:"Ananke (R)",
   h:"17.3", mass:"", dia:"1km", rad:"0.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2021-j1/in-depth/;orb:ec.2023-02-25"}, 
s2021j2:
  {name:"S/2021 J2", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2021",
   a:"21140600km", e:"0.3413", i:"150.114", per:"627.96d", rot:"", gr:"Ananke (R)",
   h:"17.3", mass:"", dia:"1km", rad:"0.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2021-j2/in-depth/;orb:ec.2023-02-25"}, 
s2021j3:
  {name:"S/2021 J3", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2021",
   a:"21495700km", e:"0.3557", i:"150.104", per:"643.85d", rot:"", gr:"Ananke (R)",
   h:"17.2", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2021-j3/in-depth/;orb:ec.2023-02-25"}, 
s2021j4:
  {name:"S/2021 J4", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2021",
   a:"22946700km", e:"0.1585", i:"164.547", per:"710.13d", rot:"", gr:"Carme (R)",
   h:"17.4", mass:"", dia:"1km", rad:"0.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2021-j4/in-depth/;orb:ec.2023-02-25"}, 
s2021j5:
  {name:"S/2021 J5", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2021",
   a:"2283100km", e:"0.2002", i:"163.175", per:"704.80d", rot:"", gr:"Carme (R)",
   h:"16.8", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2021-j5/in-depth/;orb:ec.2023-02-25"}, 
s2021j6:
  {name:"S/2021 J6", other:"", desig:"", type:"m", par:"jup", disc:"S.S. Sheppard et al.", dyr:"2021",
   a:"23427200km", e:"0.3625", i:"166.4999", per:"732.55d", rot:"", gr:"Carme (R)",
   h:"17.3", mass:"", dia:"1km", rad:"0.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/jupiter-moons/s-2021-j6/in-depth/;orb:ec.2023-02-25"}, 
//Saturn system
sat:
  {name:"Saturn", other:"", desig:"g", type:"p", par:"sol", disc:"(Prehistoric)", dyr:"",
   a:"9.537au", e:"0.0539", i:"2.486", per:"29.447a", rot:"10.561h", 
   h:"-8.88", mass:"5.685e26kg", dia:"120536km/0.09796", rad:"60268/0.09796", tilt:"26.73",
   irad:"15.05", alb:"0.47", grav:"1.065", hill:"1100", roche:"2.19", rcrit:"41.48", rrl:"0.90..1.37", frl:"1.73..2.63",
   comp:"H+He+Ice+Rock+core:27", dens:"0.688", atm:"H2:95.3+He:3.25", atp:">>1000", temp:"~89K", dip:"0.18..0.84", dipt:"0x2300",
   img:"saturn-l0.png", imgo:"saturn.png", rings:"saturn-rings.png", map:"", col:"#fe6", ind:"8", 
   desc:"scmoons:0.8;url:nssdc.gsfc.nasa.gov/planetary/planets/saturnpage.html;rsize:540,49;x:72;y:48"},
mima:
  {name:"Mimas", other:"", desig:"I", type:"m", par:"sat", disc:"W. Herschel", dyr:"1789",
   a:"185539km", e:"0.0196", i:"1.574", per:"0.942d", rot:"S", gr:"Inner Large",
   h:"3.3", mass:"6.51e-8", dia:"415.6x393.4x381.2km", rad:"207.8x196.7x190.6", tilt:"0.002",
   alb:"0.962", grav:"0.00648", comp:"Ice+Rock", dens:"1.149", atm:"", atp:"", temp:"77..92K",
   img:"mimas.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/mimas/in-depth/;orb:lp.2000-01-01"},
ence:
  {name:"Enceladus", other:"", desig:"II", type:"m", par:"sat", disc:"W. Herschel", dyr:"1789",
   a:"238042km", e:"0.0000", i:"0.003", per:"1.370d", rot:"S", gr:"Inner Large",
   h:"2.2", mass:"1.90e-7", dia:"513.2x502.8x496.6km", rad:"256.6x251.4x248.3", tilt:"0.002",
   alb:"1.375", grav:"0.0113", comp:"Ice+Rock", dens:"1.609", atm:"H2O:91+N2:4+CO2:3.2+CH4:1.7", atp:"trace", temp:"33..75..270K",
   img:"enceladus.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/saturn-moons/enceladus/in-depth/;orb:lp.2000-01-01"},
teth:
  {name:"Tethys", other:"", desig:"III", type:"m", par:"sat", disc:"G.D. Cassini", dyr:"1684",
   a:"294672km", e:"0.0001", i:"1.091", per:"1.888d", rot:"S", gr:"Inner Large",
   h:"0.7", mass:"1.09e-6", dia:"1076.8x1056.6x1052.6km", rad:"538.4x528.3x526.3", tilt:"0.001",
   alb:"1.229", grav:"0.0145", comp:"Ice+Rock", dens:"0.985", atm:"", atp:"", temp:"~86K",
   img:"tethys.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/saturn-moons/tethys/in-depth/;orb:lp.2000-01-01"},
dion:
  {name:"Dione", other:"", desig:"IV", type:"m", par:"sat", disc:"G.D. Cassini", dyr:"1684",
   a:"377415km", e:"0.0022", i:"0.028", per:"2.737d", rot:"S", gr:"Inner Large",
   h:"0.88", mass:"1.93e-6", dia:"1126.8x1126.8x1119.2km", rad:"563.4x561.3x559.6", tilt:"0.005",
   alb:"0.998", grav:"0.023", comp:"Ice+Rock", dens:"1.478", atm:"", atp:"", temp:"~87K",
   img:"dione.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/saturn-moons/dione/in-depth/;orb:lp.2000-01-01"},
rhea:
  {name:"Rhea", other:"", desig:"V", type:"m", par:"sat", disc:"G.D. Cassini", dyr:"1672",
   a:"527068km", e:"0.0002", i:"0.333", per:"4.518d", rot:"S", gr:"Outer Large",
   h:"0.16", mass:"4.06e-6", dia:"1530.0x1526.2x1524.8", rad:"765.0x763.1x762.4", tilt:"0.036",
   alb:"0.949", grav:"0.026", comp:"Ice+Rock", dens:"1.237", atm:"O2:70+CO2:30", atp:"2e-15", temp:"53..99K",
   img:"rhea.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/saturn-moons/rhea/in-depth/;orb:lp.2000-01-01"},
tita:
  {name:"Titan", other:"", desig:"VI", type:"m", par:"sat", disc:"C. Huygens", dyr:"1655",
   a:"1221865km", e:"0.0288", i:"0.306", per:"15.95d", rot:"S", gr:"Outer Large",
   h:"-1.2", mass:"2.366e-4", dia:"5149.53km/0.000275", rad:"2574.77/0.000275", tilt:"0.629",
   alb:"0.22", grav:"0.135", comp:"Ice+Rock+core:83", dens:"1.88", atm:"N2:95+CH4:4.9+H2:0.1", atp:"1.47", temp:"~94K",
   img:"titan.png", desc:"sc:2.7;url:solarsystem.nasa.gov/moons/saturn-moons/titan/in-depth/;orb:lp.2000-01-01"},
hype:
  {name:"Hyperion", other:"", desig:"VII", type:"m", par:"sat", disc:"W.C.&G.P. Bond/W. Lassell", dyr:"1848",
   a:"1500933km", e:"0.0232", i:"0.615", per:"21.28d", rot:"C", gr:"Outer Large",
   h:"4.6", mass:"1.00e-8", dia:"360.2x266.0x205.4km", rad:"180.1x133.0x102.7", tilt:"0.564",
   alb:"0.3", grav:"1.7..2.1e-3", comp:"", dens:"0.544", temp:"~93K",
   img:"hyperion.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/saturn-moons/hyperion/in-depth/;orb:lp.2000-01-01"},
iape:
  {name:"Iapetus", other:"", desig:"VIII", type:"m", par:"sat", disc:"G.D. Cassini", dyr:"1671",
   a:"3560854km", e:"0.0293", i:"8.298", per:"79.33d", rot:"S", gr:"Outer Large",
   h:"1.6", mass:"3.177e-6", dia:"1491.4x1491.4x1424.2km", rad:"745.7x745.7x712.1", tilt:"15.210",
   alb:"0.05..0.5", grav:"0.0221", comp:"Ice+Rock", dens:"1.088", atm:"", atp:"", temp:"90..130K",
   img:"iapetus.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/saturn-moons/iapetus/in-depth/;orb:lp.2000-01-01"},
phoe:
  {name:"Phoebe", other:"", desig:"IX", type:"m", par:"sat", disc:"W.H. Pickering", dyr:"1898",
   a:"12947918km", e:"0.1634", i:"158.78", per:"548.02d", rot:"9.2735h", gr:"Norse (R)",
   h:"6.63", mass:"1.454e-4", dia:"218.8x217.0x203.6km", rad:"106.5", tilt:"26.723",
   alb:"0.08", grav:"3.8..5e-3", comp:"", dens:"1.638",  temp:"~75K",
   img:"phoebe.png", desc:"sc:3.5;url:solarsystem.nasa.gov/moons/saturn-moons/phoebe/in-depth/;orb:eq.2000-01-01"},
janu:
  {name:"Janus", other:"S/1980 S1", desig:"X", type:"m", par:"sat", disc:"A. Dollfus/D. Pascu", dyr:"1966/1980",
   a:"151450km", e:"0.0098", i:"0.165", per:"0.695d", rot:"S", gr:"Co-orbitals",
   h:"4.0", mass:"1.9e18kg", dia:"203.0x185.0x152.6km", rad:"101.5x92.5x76.3", tilt:"0.000",
   alb:"0.71", grav:"1.1..1.7e-3", comp:"", dens:"0.63", temp:"~78K",
   img:"janus.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/janus/in-depth/;orb:lp.2000-01-01"},
epim:
  {name:"Epimetheus", other:"S/1980 S3", desig:"XI", type:"m", par:"sat", disc:"J. Fountain et al./D. Cruikshank", dyr:"1977/1980",
   a:"151450km", e:"0.0161", i:"0.353", per:"0.695d", rot:"S", gr:"Co-orbitals",
   h:"5.4", mass:"5.26e17kg", dia:"129.8x114.0x106.2km", rad:"64.9x57.0x53.1", tilt:"0.000",
   alb:"0.73", grav:"0.64..1.12e-3", comp:"", dens:"0.64", temp:"~78K", 
   img:"epimetheus.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/epimetheus/in-depth/;orb:lp.2000-01-01"},
hele:
  {name:"Helene", other:"S/1980 S6", desig:"XII", type:"m", par:"sat", disc:"P. Laques et al.", dyr:"1980",
   a:"377444km", e:"0.0000", i:"0.213", per:"2.737d", rot:"", gr:"Dione Trojans",
   h:"8.4", mass:"4.480e-11", dia:"43.4x38.2x26.0km", rad:"21.7x19.1x13.0", tilt:"0.005",
   alb:"1.67", grav:"", comp:"", dens:"1.30", 
   img:"helene.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/helene/in-depth/;orb:lp.2000-01-01"},
tele:
  {name:"Telesto", other:"S/1980 S13", desig:"XIII", type:"m", par:"sat", disc:"B.A. Smith et al.", dyr:"1980",
   a:"294720km", e:"0.0002", i:"1.180", per:"1.888d", rot:"", gr:"Tethis Trojans",
   h:"8.9", mass:"1.265e-11", dia:"32.6x23.6x20.0km", rad:"16.3x11.8x10.0", tilt:"0.001",
   alb:"1.0", grav:"", comp:"", dens:"1.00", 
   img:"telesto.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/telesto/in-depth/;orb:lp.2000-01-01"},
caly:
  {name:"Calypso", other:"S/1980 S25", desig:"XIV", type:"m", par:"sat", disc:"D. Pascu et al.", dyr:"1980",
   a:"294721km", e:"0.0005", i:"1.500", per:"1.888d", rot:"", gr:"Tethis Trojans",
   h:"9.1", mass:"6.325e-12", dia:"30.2x23.0x14.0km", rad:"15.1x11.5x7.0", tilt:"0.001",
   alb:"1.34", grav:"", comp:"", dens:"1.00", 
   img:"calypso.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/calypso/in-depth/;orb:lp.2000-01-01"},
atla:
  {name:"Atlas", other:"S/1980 S28", desig:"XV", type:"m", par:"sat", disc:"Voyager", dyr:"1980",
   a:"137774km", e:"0.012", i:"3.1e-3", per:"0.602d", rot:"", gr:"Ring shepherds",
   h:"8.4", mass:"6.02e15kg", dia:"40.8x35.4x18.6km", rad:"14.9", tilt:"0.000",
   alb:"0.4", grav:"0.2..2e-4", comp:"Ice+Ridge", dens:"0.412",  temp:"~81K",
   img:"atlas.png", desc:"sc:4;url:solarsystem.nasa.gov/moons/saturn-moons/atlas/in-depth/;orb:lp.2000-01-01"},
prom:
  {name:"Prometheus", other:"S/1980 S27", desig:"XVI", type:"m", par:"sat", disc:"Voyager", dyr:"1980",
   a:"139429km", e:"0.0022", i:"0.007", per:"0.613d", rot:"S", gr:"Ring shepherds",
   h:"6.4", mass:"1.6e17kg", dia:"135.6x79.4x59.4km", rad:"67.8x39.7x29.7", tilt:"0.000",
   alb:"0.6", grav:"1.3..5.8e-4", comp:"", dens:"0.48",  temp:"~74K",
   img:"prometheus.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/prometheus/in-depth/;orb:lp.2000-01-01"},
pand:
  {name:"Pandora", other:"S/1980 S26", desig:"XVII", type:"m", par:"sat", disc:"Voyager", dyr:"1980",
   a:"141810km", e:"0.0042", i:"0.050", per:"0.629d", rot:"S", gr:"Ring shepherds",
   h:"6.4", mass:"1.37e17kg", dia:"104.0x81.0x64.0km", rad:"52.0x40.5x32.0 ", tilt:"0.000",
   alb:"0.6", grav:"2.6..6e-4", comp:"", dens:"0.49", temp:"~78K",
   img:"pandora.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/pandora/in-depth/;orb:lp.2000-01-01"},
pan:
  {name:"Pan", other:"S/1981 S13", desig:"XVIII", type:"m", par:"sat", disc:"M.R. Showalter", dyr:"1981",
   a:"133585km", e:"1.4e-5", i:"1e-4", per:"0.575d", rot:"", gr:"Ring shepherds",
   h:"", mass:"4.95e15kg", dia:"34.6x28.2x21.0km", rad:"13.7", tilt:"0.000",
   alb:"0.5:", grav:"0.1..1.8e-4", comp:"Ice+Ridge", dens:"0.42", temp:"~78K",
   img:"pan.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/pan/in-depth/;orb:lp.2000-01-01"},
ymir:
  {name:"Ymir", other:"S/2000 S1", desig:"XIX", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"23128000km", e:"0.3338", i:"173.496", per:"1315.13d", rot:"11.92h", gr:"Norse (R)",
   h:"12.3", mass:"", dia:"19km", rad:"9.5", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/ymir/in-depth/;orb:ec.2000-01-01"},
paal:
  {name:"Paaliaq", other:"S/2000 S2", desig:"XX", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"15204000km", e:"0.3325", i:"46.230", per:"686.95d", rot:"18.79h", gr:"Inuit (P)",
   h:"11.7", mass:"", dia:"25km", rad:"12.5", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/paaliaq/in-depth/;orb:ec.2000-01-01"},
tarv:
  {name:"Tarvos", other:"S/2000 S4", desig:"XXI", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"18243000km", e:"0.5382", i:"33.725", per:"926.35d", rot:"10.69h", gr:"Gallic (P)",
   h:"12.9", mass:"", dia:"15km", rad:"7.5", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/tarvos/in-depth/;orb:ec.2000-01-01"},
ijir:
  {name:"Ijiraq", other:"S/2000 S6", desig:"XXII", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"11408000km", e:"0.2721", i:"47.483", per:"451.42d", rot:"13.03h", gr:"Inuit (P)",
   h:"13.2", mass:"", dia:"13km", rad:"6.5", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/tjiraq/in-depth/;orb:ec.2000-01-01"},
sutt:
  {name:"Suttungr", other:"S/2000 S12", desig:"XXIII", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"19468000km", e:"0.1139", i:"175.815", per:"1016.68d", rot:"7.67h", gr:"Norse (R)",
   h:"14.5", mass:"", dia:"7km", rad:"3.5", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/suttungr/in-depth/;orb:ec.2000-01-01"},
kivi:
  {name:"Kiviuq", other:"S/2000 S5", desig:"XXIV", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"11384000km", e:"0.3325", i:"46.766", per:"449.22d", rot:"21.97h", gr:"Inuit (P)",
   h:"12.6", mass:"", dia:"17km", rad:"8.5", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/kiviuq/in-depth/;orb:ec.2000-01-01"},
mund:
  {name:"Mundilfari", other:"S/2000 S9", desig:"XXV", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"18654000km", e:"0.2098", i:"167.446", per:"952.80d", rot:"6.74h", gr:"Norse (R)",
   h:"14.5", mass:"", dia:"7km", rad:"3.5", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/mundilfari/in-depth/;orb:ec.2000-01-01"},
albi:
  {name:"Albiorix", other:"S/2000 S11", desig:"XXVI", type:"m", par:"sat", disc:"M. Holman", dyr:"2000",
   a:"16393000km", e:"0.4797", i:"34.059", per:"783.46d", rot:"13.33h", gr:"Gallic (P)",
   h:"11.1", mass:"", dia:"33km", rad:"16.5", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/albiorix/in-depth/;orb:ec.2000-01-01"},
skat:
  {name:"Skathi", other:"S/2000 S8", desig:"XXVII", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"15635000km", e:"0.2718", i:"152.633", per:"728.10d", rot:"11.10h", gr:"Norse (R)",
   h:"14.3", mass:"", dia:"8km", rad:"4", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/skathi/in-depth/;orb:ec.2000-01-01"},
erri:
  {name:"Erriapus", other:"S/2000 S10", desig:"XXVIII", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"17602000km", e:"0.4723", i:"34.481", per:"871.13d", rot:"28.15h", gr:"Gallic (P)",
   h:"13.7", mass:"", dia:"10km", rad:"5", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/erriapus/in-depth/;orb:ec.2000-01-01"},
siar:
  {name:"Siarnaq", other:"S/2000 S3", desig:"XXIX", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"18182000km", e:"0.2801", i:"45.809", per:"895.51d", rot:"10.19h", gr:"Inuit (P)",
   h:"10.6", mass:"", dia:"42km", rad:"21", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/siarnaq/in-depth/;orb:ec.2000-01-01"},
thry:
  {name:"Thrymr", other:"S/2000 S7", desig:"XXX", type:"m", par:"sat", disc:"B. Gladman et al.", dyr:"2000",
   a:"20419000km", e:"0.4661", i:"177.665", per:"1093.38d", rot:"38.79h", gr:"Norse (R)",
   h:"14.3", mass:"", dia:"8km", rad:"4", tilt:"",
   alb:"0.08:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/thrymr/in-depth/;orb:ec.2000-01-01"},
narv:
  {name:"Narvi", other:"S/2003 S1", desig:"XXXI", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"19349000km", e:"0.4295", i:"145.735", per:"1003.92d", rot:"10.21h", gr:"Norse (R)",
   h:"14.4", mass:"", dia:"7km", rad:"3.5", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/narvi/in-depth/;orb:ec.2000-01-01"},
meth:
  {name:"Methone", other:"S/2004 S1", desig:"XXXII", type:"m", par:"sat", disc:"Cassini", dyr:"2004",
   a:"194402km", e:"0.0000", i:"0.013", per:"1.010d", rot:"", gr:"Alkyonides",
   h:"", mass:"", dia:"3.2km", rad:"1.6", tilt:"0.002",
   alb:"", grav:"", comp:"", dens:"", 
   img:"methone.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/methone/in-depth/;orb:lp.2000-01-01"},
palle:
  {name:"Pallene", other:"S/2004 S2", desig:"XXXIII", type:"m", par:"sat", disc:"Cassini", dyr:"2004",
   a:"212282km", e:"0.0040", i:"0.001", per:"1.154d", rot:"", gr:"Alkyonides",
   h:"", mass:"", dia:"5.8x5.6x4.0km", rad:"2.9x2.8x2.0", tilt:"0.001",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/pallene/in-depth/;orb:lp.2000-01-01"},
poly:
  {name:"Polydeuces", other:"S/2004 S5", desig:"XXXIV", type:"m", par:"sat", disc:"Cassini", dyr:"2004",
   a:"377222km", e:"0.0191", i:"0.175", per:"2.737d", rot:"", gr:"Dione Trojans",
   h:"", mass:"", dia:"3.0x2.4x2.0km", rad:"1.5x1.2x1.0", tilt:"0.005",
   alb:"", grav:"", comp:"", dens:"", 
   img:"polydeuces.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/polydeuces/in-depth/;orb:lp.2000-01-01"},
daph:
  {name:"Daphnis", other:"S/2005 S1", desig:"XXXV", type:"m", par:"sat", disc:"Cassini", dyr:"2005",
   a:"136504km", e:"3.3e-5", i:"3.6e-3", per:"0.594d", rot:"", gr:"Ring shepherds",
   h:"", mass:"7.7e13kg", dia:"9.8x8.4x5.6km", rad:"3.9", tilt:"0.000",
   alb:"", grav:"1..4e-5", comp:"", dens:"0.276",  temp:"~78K",
   img:"daphnis.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/daphnis/in-depth/;orb:lp.2000-01-01"},
aegi:
  {name:"Aegir", other:"S/2004 S10", desig:"XXXVI", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"20751000km", e:"0.2524", i:"166.668", per:"1117.83d", rot:"", gr:"Norse (R)",
   h:"15.5", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/aegir/in-depth/;orb:ec.2000-01-01"},
bebh:
  {name:"Bebhionn", other:"S/2004 S11", desig:"XXXVII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"17116000km", e:"0.4682", i:"35.101", per:"834.86d", rot:"16.33", gr:"Gallic (P)",
   h:"15.0", mass:"", dia:"6km", rad:"3", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/bebhionn/in-depth/;orb:ec.2000-01-01"},
berg:
  {name:"Bergelmir", other:"S/2004 S15", desig:"XXXVIII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"19336000km", e:"0.1420", i:"158.557", per:"1005.76d", rot:"8.13h", gr:"Norse (R)",
   h:"15.2", mass:"", dia:"5km", rad:"2.5", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/bergelmir/in-depth/;orb:ec.2000-01-01"},
best:
  {name:"Bestla", other:"S/2004 S18", desig:"XXXIX", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"20145000km", e:"0.5196", i:"145.156", per:"1088.04d", rot:"14.62h", gr:"Norse (R)",
   h:"14.6", mass:"", dia:"7km", rad:"3.5", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/bestla/in-depth/;orb:ec.2000-01-01"},
farb:
  {name:"Farbauti", other:"S/2004 S9", desig:"XL", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"20390000km", e:"0.2414", i:"156.520", per:"1086.65d", rot:"", gr:"Norse (R)",
   h:"15.7", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/farbauti/in-depth/;orb:ec.2000-01-01"},
fenr:
  {name:"Fenrir", other:"S/2004 S16", desig:"XLI", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"22454000km", e:"0.1347", i:"164.963", per:"1260.35d", rot:"", gr:"Norse (R)",
   h:"15.9", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/fenrir/in-depth/;orb:ec.2000-01-01"},
forn:
  {name:"Fornjot", other:"S/2004 S8", desig:"XLII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"25146000km", e:"0.2077", i:"170.372", per:"1494.09d", rot:"9.5h", gr:"Norse (R)",
   h:"14.9", mass:"", dia:"6km", rad:"3", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/fornjot/in-depth/;orb:ec.2000-01-01"},
hati:
  {name:"Hati", other:"S/2004 S14", desig:"XLIII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"19868000km", e:"0.3710", i:"165.808", per:"1040.18d", rot:"5.45h", gr:"Norse (R)",
   h:"15.3", mass:"", dia:"5km", rad:"2.5", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/hati/in-depth/;orb:ec.2000-01-01"},
hyrr:
  {name:"Hyrrokkin", other:"S/2004 S19", desig:"XLIV", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"18440000km", e:"0.3359", i:"151.536", per:"931.87d", rot:"12.76h", gr:"Norse (R)",
   h:"14.3", mass:"", dia:"8km", rad:"4", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/hyrokkin/in-depth/;orb:ec.2000-01-01"},
kari:
  {name:"Kari", other:"S/2006 S2", desig:"XLV", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"22093000km", e:"0.4756", i:"156.067", per:"1231.18d", rot:"7.70h", gr:"Norse (R)",
   h:"14.8", mass:"", dia:"6km", rad:"3", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/kari/in-depth/;orb:ec.2000-01-01"},
loge:
  {name:"Loge", other:"S/2006 S5", desig:"XLVI", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"23059000km", e:"0.1862", i:"167.689", per:"1311.37d", rot:"6.9h", gr:"Norse (R)",
   h:"15.3", mass:"", dia:"5km", rad:"2.5", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/loge/in-depth/;orb:ec.2000-01-01"},
skol:
  {name:"Skoll", other:"S/2006 S8", desig:"XLVII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"17667000km", e:"0.4635", i:"161.008", per:"878.18d", rot:"7.26h", gr:"Norse (R)",
   h:"15.4", mass:"", dia:"5km", rad:"2.5", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/skoll/in-depth/;orb:ec.2000-01-01"},
surt:
  {name:"Surtur", other:"S/2006 S7", desig:"XLVIII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"22941000km", e:"0.4459", i:"169.688", per:"1297.12d", rot:"", gr:"Norse (R)",
   h:"15.8", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/surtur/in-depth/;orb:ec.2000-01-01"},
anth:
  {name:"Anthe", other:"S/2007 S4", desig:"XLIX", type:"m", par:"sat", disc:"Cassini", dyr:"2007",
   a:"196888km", e:"0.0011", i:"0.015", per:"1.036d", rot:"", gr:"Alkyonides",
   h:"", mass:"", dia:"2km:", rad:"1:", tilt:"0.000",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/anthe/in-depth/;orb:lp.2000-01-01"},
jarn:
  {name:"Jarnsaxa", other:"S/2006 S6", desig:"L", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"19354000km", e:"0.2178", i:"163.649", per:"1006.94d", rot:"", gr:"Norse (R)",
   h:"15.6", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/jarnsaxa/in-depth/;orb:ec.2000-01-01"},
grei:
  {name:"Greip", other:"S/2006 S4", desig:"LI", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"18457000km", e:"0.3146", i:"174.800", per:"937.14d", rot:"12.75h", gr:"Norse (R)",
   h:"15.4", mass:"", dia:"5km", rad:"2.5", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/greip/in-depth/;orb:ec.2000-01-01"},
tarq:
  {name:"Tarqeq", other:"S/2007 S1", desig:"LII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2007",
   a:"17962000km", e:"0.1676", i:"46.292", per:"885.15d", rot:"76.13h", gr:"Inuit (P)",
   h:"14.8", mass:"", dia:"6km", rad:"3", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/tarqeq/in-depth/;orb:ec.2000-01-01"},
aega:
  {name:"Aegaeon", other:"S/2008 S1", desig:"LIII", type:"m", par:"sat", disc:"Cassini", dyr:"2008",
   a:"167425km", e:"0.0002", i:"0.001", per:"0.808d", rot:"", gr:"G Ring",
   h:"", mass:"", dia:"0.5km:", rad:"0.25:", tilt:"0.001",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/aegaeon/in-depth/;orb:lp.2000-01-01"},
s2004s20:
  {name:"Gridr", other:"S/2004 S20", desig:"LIV", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"19211000km", e:"0.204", i:"163.1", per:"990.23d", rot:"", gr:"Norse (R)",
   h:"15.8", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s20/in-depth/;orb:ec.2000-01-01"},
s2004s22:
  {name:"Angrboda", other:"S/2004 S22", desig:"LV", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"20379900km", e:"0.257", i:"177.4", per:"1080.4d", rot:"", gr:"Norse (R)",
   h:"16.1", mass:"", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s22/in-depth/;orb:ec.2000-01-01"},
s2004s23:
  {name:"Skrymir", other:"S/2004 S23", desig:"LVI", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"21427000km", e:"0.399", i:"177.7", per:"1164.3d", rot:"", gr:"Norse (R)",
   h:"15.6", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s23/in-depth/;orb:ec.2000-01-01"},
s2004s25:
  {name:"Gerd", other:"S/2004 S25", desig:"LVII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"20544500km", e:"0.457", i:"173.3", per:"1095.0d", rot:"", gr:"Norse (R)",
   h:"15.9", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s25/in-depth/;orb:ec.2000-01-01"},
s2004s26:
  {name:"S/2004 S26", other:"", desig:"LVIII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"26737800km", e:"0.148", i:"171.3", per:"1624.2d", rot:"", gr:"Norse (R)",
   h:"15.8", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s24/in-depth/;orb:ec.2000-01-01"},
s2004s27:
  {name:"Eggther", other:"S/2004 S27", desig:"LIX", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"19776700km", e:"0.120", i:"142.5", per:"1033.0d", rot:"", gr:"Norse (R)",
   h:"15.3", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s24/in-depth/;orb:ec.2000-01-01"},
s2004s29:
  {name:"S/2004 S29", other:"", desig:"LX", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"17470700km", e:"0.472", i:"44.43", per:"858.77d", rot:"", gr:"Inuit (P)",
   h:"15.8", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s29/in-depth/;orb:ec.2000-01-01"},
s2004s30:
  {name:"Beli", other:"S/2004 S30", desig:"LXI", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"20424000km", e:"0.113", i:"156.3", per:"1084.1d", rot:"", gr:"Norse (R)",
   h:"16.2", mass:"", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s30/in-depth/;orb:ec.2000-01-01"},
s2004s32:
  {name:"Gunnlod", other:"S/2004 S32", desig:"LXII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"21564200km", e:"0.262", i:"158.5", per:"1175.3d", rot:"", gr:"Norse (R)",
   h:"15.8", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s32/in-depth/;orb:ec.2000-01-01"},
s2004s33:
  {name:"Thiazzi", other:"S/2004 S33", desig:"LXIII", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"23764800km", e:"0.417", i:"161.5", per:"1361.5d", rot:"", gr:"Norse (R)",
   h:"15.8", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s33/in-depth/;orb:ec.2000-01-01"},
s2004s34:
  {name:"S/2004 S34", other:"", desig:"LXIV", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"24358900km", e:"0.267", i:"165.7", per:"1412.3d", rot:"", gr:"Norse (R)",
   h:"16.1", mass:"", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s34/in-depth/;orb:ec.2000-01-01"},
s2004s35:
  {name:"Alvali", other:"S/2004 S35", desig:"LXV", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"21953200km", e:"0.182", i:"176.4", per:"1208.1d", rot:"", gr:"Norse (R)",
   h:"15.4", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s35/in-depth/;orb:ec.2000-01-01"},
s2004s38:
  {name:"Geirrod", other:"S/2004 S38", desig:"LXVI", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"23006200km", e:"0.381", i:"155.0", per:"1295.8d", rot:"", gr:"Norse (R)",
   h:"15.9", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s38/in-depth/;orb:ec.2000-01-01"},
s2004s7:
  {name:"S/2004 S7", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"21000000km", e:"0.5290", i:"165.693", per:"1140.21d", rot:"", gr:"Norse (R)",
   h:"15.2", mass:"", dia:"5km", rad:"2.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s7/in-depth/;orb:ec.2000-01-01"},
s2004s12:
  {name:"S/2004 S12", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"19886000km", e:"0.3268", i:"165.261", per:"1046.11d", rot:"", gr:"Norse (R)",
   h:"15.7", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s12/in-depth/;orb:ec.2000-01-01"},
s2004s13:
  {name:"S/2004 S13", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"18406000km", e:"0.2591", i:"168.798", per:"933.60d", rot:"", gr:"Norse (R)",
   h:"15.6", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s13/in-depth/;orb:ec.2000-01-01"},
s2004s17:
  {name:"S/2004 S17", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"19448000km", e:"0.1795", i:"168.239", per:"1014.61d", rot:"", gr:"Norse (R)",
   h:"16.0", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s17/in-depth/;orb:ec.2000-01-01"},
s2006s1:
  {name:"S/2006 S1", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"18780000km", e:"0.1412", i:"156.180", per:"962.23d", rot:"", gr:"Norse (R)",
   h:"15.5", mass:"", dia:"4km", rad:"4", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s1/in-depth/;orb:ec.2000-01-01"},
s2006s3:
  {name:"S/2006 S3", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"22428000km", e:"0.3792", i:"158.631", per:"1255.15d", rot:"", gr:"Norse (R)",
   h:"15.6", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s3/in-depth/;orb:ec.2000-01-01"},
s2006s9:
  {name:"S/2006 S9", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"14453000km", e:"0.268", i:"174.1", per:"648.71d", rot:"", gr:"Norse (R)",
   h:"16.5", mass:"1.4e13kg", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s1/in-depth/;orb:ec.2023-02-25"},
s2007s2:
  {name:"S/2007 S2", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2007",
   a:"16718000km", e:"0.1791", i:"174.057", per:"808.15d", rot:"", gr:"Norse (R)",
   h:"15.3", mass:"", dia:"5km", rad:"2.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2007-s2/in-depth/;orb:ec.2000-01-01"},
s2007s3:
  {name:"S/2007 S3", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2007",
   a:"18938000km", e:"0.1853", i:"177.595", per:"977.78d", rot:"", gr:"Norse (R)",
   h:"15.8", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2007-s3/in-depth/;orb:ec.2000-01-01"},
s2009s1:
  {name:"S/2009 S1", other:"", desig:"", type:"m", par:"sat", disc:"Cassini", dyr:"2009",
   a:"117000km", e:"0", i:"0", per:"0.472d", rot:"", gr:"Ring shepherds",
   h:"20", mass:"", dia:"0.6km", rad:"0.3", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2009-s1/in-depth/;orb:ec.2000-01-01"},
s2004s31:
  {name:"S/2004 S31", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"17402800km", e:"0.242", i:"48.11", per:"853.80d", rot:"", gr:"Inuit (P)",
   h:"15.8", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s31/in-depth/;orb:ec.2000-01-01"},
s2004s24:
  {name:"S/2004 S24", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"23231300km", e:"0.049", i:"36.78", per:"1317.6d", rot:"", gr:"Gallic (P)?",
   h:"16.0", mass:"", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s24/in-depth/;orb:ec.2000-01-01"},
s2004s28:
  {name:"S/2004 S28", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"21791300km", e:"0.133", i:"171.0", per:"1197.2d", rot:"", gr:"Norse (R)",
   h:"15.8", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s28/in-depth/;orb:ec.2000-01-01"},
s2004s21:
  {name:"S/2004 S21", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"23810400km", e:"0.312", i:"154.6", per:"1365.1d", rot:"", gr:"Norse (R)",
   h:"16.3", mass:"", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s21/in-depth/;orb:ec.2000-01-01"},
s2004s39:
  {name:"S/2004 S39", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"22790400km", e:"0.081", i:"167.6", per:"1277.5d", rot:"", gr:"Norse (R)",
   h:"16.3", mass:"", dia:"2km", rad:"1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s39/in-depth/;orb:ec.2000-01-01"},
s2004s37:
  {name:"S/2004 S37", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"16003300km", e:"0.506", i:"164.0", per:"752.88d", rot:"", gr:"Norse (R)",
   h:"15.9", mass:"", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s37/in-depth/;orb:ec.2000-01-01"},
s2004s36:
  {name:"S/2004 S36", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"23698700km", e:"0.667", i:"147.6", per:"1354.2d", rot:"", gr:"Norse (R)",
   h:"16.3", mass:"", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s36/in-depth/;orb:ec.2000-01-01"},
s2020s1:
  {name:"S/2020 S1", other:"", desig:"", type:"m", par:"sat", disc:"E.J. Ashton et al.", dyr:"2020",
   a:"11339600km", e:"0.468", i:"47.0", per:"450.83d", rot:"", gr:"Inuit (P)",
   h:"15.9", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2020-s1/in-depth/;orb:ec.2023-02-25"},
s2007s5:
  {name:"S/2007 S5", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2007",
   a:"15899500km", e:"0.116", i:"160.3", per:"748.50d", rot:"", gr:"Norse (R)",
   h:"16.2", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2007-s5/in-depth/;orb:ec.2023-02-25"},
s2004s40:
  {name:"S/2004 S40", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"16145300km", e:"0.317", i:"169.8", per:"765.82d", rot:"", gr:"Norse (R)",
   h:"16.3", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s40/in-depth/;orb:ec.2023-02-25"},
s2019s4:
  {name:"S/2019 S4", other:"", desig:"", type:"m", par:"sat", disc:"E.J. Ashton et al.", dyr:"2019",
   a:"17957200km", e:"0.450", i:"169.5", per:"898.40d", rot:"", gr:"Norse (R)",
   h:"16.5", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2019-s4/in-depth/;orb:ec.2023-02-25"},
s2004s41:
  {name:"S/2004 S41", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"17921900km", e:"0.295", i:"168.3", per:"895.76d", rot:"", gr:"Norse (R)",
   h:"16.3", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s41/in-depth/;orb:ec.2023-02-25"},
s2020s4:
  {name:"S/2020 S4", other:"", desig:"", type:"m", par:"sat", disc:"E.J. Ashton et al.", dyr:"2020",
   a:"18115900km", e:"0.389", i:"43.4", per:"910.34d", rot:"", gr:"Inuit (P)",
   h:"17.0", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2020-s4/in-depth/;orb:ec.2023-02-25"},
s2020s5:
  {name:"S/2020 S5", other:"", desig:"", type:"m", par:"sat", disc:"E.J. Ashton et al.", dyr:"2020",
   a:"18422200km", e:"0.135", i:"48.4", per:"933.52d", rot:"", gr:"Inuit (P)",
   h:"16.6", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2020-s6/in-depth/;orb:ec.2023-02-25"},
s2007s6:
  {name:"S/2007 S6", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2007",
   a:"18563700km", e:"0.172", i:"165.8", per:"944.31d", rot:"", gr:"Norse (R)",
   h:"16.4", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2007-s6/in-depth/;orb:ec.2023-02-25"},
s2004s42:
  {name:"S/2004 S42", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"18119500km", e:"0.157", i:"165.8", per:"910.61d", rot:"", gr:"Norse (R)",
   h:"16.1", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s42/in-depth/;orb:ec.2023-02-25"},
s2006s10:
  {name:"S/2006 S10", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"18837300km", e:"0.154", i:"161.5", per:"965.26d", rot:"", gr:"Norse (R)",
   h:"16.4", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s10/in-depth/;orb:ec.2023-02-25"},
s2019s5:
  {name:"S/2019 S5", other:"", desig:"", type:"m", par:"sat", disc:"E.J. Ashton et al.", dyr:"2019",
   a:"18919000km", e:"0.183", i:"155.6", per:"971.54d", rot:"", gr:"Norse (R)",
   h:"16.6", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2019-s5/in-depth/;orb:ec.2023-02-25"},
s2004s43:
  {name:"S/2004 S43", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"18918200km", e:"0.390", i:"172.0", per:"971.48d", rot:"", gr:"Norse (R)",
   h:"16.3", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s43/in-depth/;orb:ec.2023-02-25"},
s2004s44:
  {name:"S/2004 S44", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"1947800km", e:"0.129", i:"169.0", per:"1014.98d", rot:"", gr:"Norse (R)",
   h:"15.8", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s44/in-depth/;orb:ec.2023-02-25"},
s2004s45:
  {name:"S/2004 S45", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"20037400km", e:"0.464", i:"150.1", per:"1058.95d", rot:"", gr:"Norse (R)",
   h:"16.0", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s45/in-depth/;orb:ec.2023-02-25"},
s2006s11:
  {name:"S/2006 S11", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"19523200km", e:"0.137", i:"172.0", per:"1018.45d", rot:"", gr:"Norse (R)",
   h:"16.5", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s11/in-depth/;orb:ec.2023-02-25"},
s2004s46:
  {name:"S/2004 S46", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"20513000km", e:"0.259", i:"177.2", per:"1107.58d", rot:"", gr:"Norse (R)",
   h:"16.4", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s46/in-depth/;orb:ec.2023-02-25"},
s2004s47:
  {name:"S/2004 S47", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"16050600km", e:"0.291", i:"160.9", per:"762.49d", rot:"", gr:"Norse (R)",
   h:"16.3", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s47/in-depth/;orb:ec.2023-02-25"},
s2004s48:
  {name:"S/2004 S48", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"22136700km", e:"0.374", i:"161.9", per:"1242.40d", rot:"", gr:"Norse (R)",
   h:"16.0", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s48/in-depth/;orb:ec.2023-02-25"},
s2004s49:
  {name:"S/2004 S49", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"22399700km", e:"0.453", i:"159.7", per:"1264.25d", rot:"", gr:"Norse (R)",
   h:"16.0", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s49/in-depth/;orb:ec.2023-02-25"},
s2004s50:
  {name:"S/2004 S50", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"22346000km", e:"0.450", i:"164.0", per:"1269.44d", rot:"", gr:"Norse (R)",
   h:"16.4", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s50/in-depth/;orb:ec.2023-02-25"},
s2004s51:
  {name:"S/2004 S51", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"25208200km", e:"0.201", i:"171.2", per:"1519.43d", rot:"", gr:"Norse (R)",
   h:"16.1", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s51/in-depth/;orb:ec.2023-02-25"},
s2004s52:
  {name:"S/2004 S52", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"26448100km", e:"0.292", i:"165.3", per:"1633.98d", rot:"", gr:"Norse (R)",
   h:"16.5", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s52/in-depth/;orb:ec.2023-02-25"},
s2004s53:
  {name:"S/2004 S53", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2004",
   a:"2379800km", e:"0.240", i:"162.6", per:"1342.44d", rot:"", gr:"Norse (R)",
   h:"16.2", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2004-s53/in-depth/;orb:ec.2023-02-25"},
s2005s4:
  {name:"S/2005 S4", other:"", desig:"", type:"m", par:"sat", disc:"E.J. Ashton et al.", dyr:"2005",
   a:"11324500km", e:"0.315", i:"48.0", per:"450.22d", rot:"", gr:"Inuit (P)",
   h:"15.7", mass:"6.5e13", dia:"5km", rad:"2.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2005-s4/in-depth/;orb:ec.2023-02-25"},
s2005s5:
  {name:"S/2005 S5", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2005",
   a:"21366200km", e:"0.588", i:"169.5", per:"1177.82d", rot:"", gr:"Norse (R)",
   h:"16.4", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2005-s5/in-depth/;orb:ec.2023-02-25"},
s2006s12:
  {name:"S/2006 S12", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"19569800km", e:"0.542", i:"38.6", per:"1035.05d", rot:"", gr:"Gallic (P)",
   h:"16.2", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s12/in-depth/;orb:ec.2023-02-25"},
s2006s13:
  {name:"S/2006 S13", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"19953800km", e:"0.313", i:"162.0", per:"1060.63d", rot:"", gr:"Norse (R)",
   h:"16.1", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s13/in-depth/;orb:ec.2023-02-25"},
s2006s14:
  {name:"S/2006 S14", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"21062100km", e:"0.060", i:"166.7", per:"1152.68d", rot:"", gr:"Norse (R)",
   h:"16.5", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s14/in-depth/;orb:ec.2023-02-25"},
s2006s15:
  {name:"S/2006 S15", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"21799400km", e:"0.117", i:"161.1", per:"1213.96d", rot:"", gr:"Norse (R)",
   h:"16.2", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s15/in-depth/;orb:ec.2023-02-25"},
s2006s16:
  {name:"S/2006 S16", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"21727000km", e:"0.204", i:"164.1", per:"1207.52d", rot:"", gr:"Norse (R)",
   h:"16.5", mass:"1.4e13", dia:"3km", rad:"1.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s16/in-depth/;orb:ec.2023-02-25"},
s2006s17:
  {name:"S/2006 S17", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"22384900km", e:"0.425", i:"168.7", per:"1264.58d", rot:"", gr:"Norse (R)",
   h:"16.0", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s17/in-depth/;orb:ec.2023-02-25"},
s2006s18:
  {name:"S/2006 S18", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"22760700km", e:"0.131", i:"169.5", per:"1298.40d", rot:"", gr:"Norse (R)",
   h:"16.1", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s18/in-depth/;orb:ec.2023-02-25"},
s2006s19:
  {name:"S/2006 S19", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"23801100km", e:"0.467", i:"175.5", per:"1389.33d", rot:"", gr:"Norse (R)",
   h:"16.1", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s19/in-depth/;orb:ec.2023-02-25"},
s2006s20:
  {name:"S/2006 S20", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2006",
   a:"13193900km", e:"0.206", i:"173.1", per:"567.27d", rot:"", gr:"Norse (R)",
   h:"15.7", mass:"6.5e13", dia:"5km", rad:"2.5", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2006-s20/in-depth/;orb:ec.2023-02-25"},
s2007s7:
  {name:"S/2007 S7", other:"", desig:"", type:"m", par:"sat", disc:"S.S. Sheppard et al.", dyr:"2007",
   a:"15931700km", e:"0.217", i:"169.2", per:"754.29d", rot:"", gr:"Norse (R)",
   h:"16.2", mass:"3.4e13", dia:"4km", rad:"2", tilt:"",
   alb:"", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/saturn-moons/s-2007-s7/in-depth/;orb:ec.2023-02-25"},
//Uranus system
ura:
  {name:"Uranus", other:"", desig:"h", type:"p", par:"sol", disc:"W. Herschel", dyr:"1781",
   a:"19.189au", e:"0.0473", i:"0.773", per:"84.017a", rot:"-17.24h",
   h:"-7.19", mass:"8.683e25kg", dia:"51118km/0.02293", rad:"25559/0.02293", tilt:"97.86",
   irad:"3.71", alb:"0.51", grav:"0.905", hill:"2700", roche:"2.77",  rcrit:"54.78", rrl:"1.14..1.23", frl:"2.19..2.76",
   comp:"NH4+Ice+Rock+core:58", dens:"1.270", atm:"H2:82.5+He:15.2+CH4:2.3", atp:">>1000", temp:"~76K",
   dip:"0.1..1", dipt:"53.6x9000",
   img:"uranus.png", rings:"uranus-rings.png", map:"", col:"#9df", ind:"9", 
   desc:"scmoons:0.4;url:nssdc.gsfc.nasa.gov/planetary/planets/uranuspage.html;rsize:240,121;x:0;y:72"},
arie:
  {name:"Ariel", other:"", desig:"I", type:"m", par:"ura", disc:"W. Lassell", dyr:"1851",
   a:"190900km", e:"0.0012", i:"0.041", per:"2.520d", rot:"S", gr:"Large",
   h:"1.7", mass:"1.45e-5", dia:"1162.2x1155.8x1155.4km", rad:"581.1x577.9x577.7", tilt:"",
   alb:"0.39", grav:"0.027", comp:"Ice+CO2+Rock", dens:"1.67", temp:"?..60..84K",
   img:"ariel.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/uranus-moons/ariel/in-depth/;orb:eq.1980-01-01"},
umbr:
  {name:"Umbriel", other:"", desig:"II", type:"m", par:"ura", disc:"W. Lassell", dyr:"1851",
   a:"266000km", e:"0.0039", i:"0.128", per:"4.144d", rot:"S", gr:"Large",
   h:"2.6", mass:"1.35e-5", dia:"1169.4km", rad:"584.7", tilt:"0",
   alb:"0.21", grav:"0.023", comp:"Ice+Rock", dens:"1.40", temp:"?..75..85K",
   img:"umbriel.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/uranus-moons/umbriel/in-depth/;orb:eq.1980-01-01"},
titan:
  {name:"Titania", other:"", desig:"III", type:"m", par:"ura", disc:"W. Herschel", dyr:"1787",
   a:"436300km", e:"0.0011", i:"0.079", per:"8.706d", rot:"S", gr:"Large",
   h:"1.3", mass:"4.06e-5", dia:"1577.8km", rad:"788.9", tilt:"",
   alb:"0.27", grav:"0.038", comp:"Ice+Rock", dens:"1.71", temp:"60..70..89K", atm:"CO2:~99", atp:"<1e-8",
   img:"titania.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/uranus-moons/titania/in-depth/;orb:eq.1980-01-01"},
ober:
  {name:"Oberon", other:"", desig:"IV", type:"m", par:"ura", disc:"W. Herschel", dyr:"1787",
   a:"583500km", e:"0.0014", i:"0.068", per:"13.46d", rot:"S", gr:"Large",
   h:"1.5", mass:"3.47e-5", dia:"1522.8km", rad:"761.4", tilt:"",
   alb:"0.23", grav:"0.038", comp:"Ice+Rock", dens:"1.63", temp:"70..80K",
   img:"oberon.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/uranus-moons/oberon/in-depth/;orb:eq.1980-01-01"},
mira:
  {name:"Miranda", other:"", desig:"V", type:"m", par:"ura", disc:"G.P. Kuiper", dyr:"1948",
   a:"129900km", e:"0.0013", i:"4.338", per:"1.413d", rot:"S", gr:"Large",
   h:"3.8", mass:"8.00e7", dia:"480.8x468.4x463.8km", rad:"240.4x234.2x232.9", tilt:"",
   alb:"0.32", grav:"0.0079", comp:"Ice+Rock", dens:"1.20", temp:"?..60..84K",
   img:"miranda.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/miranda/in-depth/;orb:eq.1980-01-01"},
cord:
  {name:"Cordelia", other:"S/1986 U7", desig:"VI", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"49800km", e:"0.0003", i:"0.085", per:"0.335d", rot:"", gr:"Inner",
   h:"11.4", mass:"5.18e.10", dia:"25km:", rad:"12.5:", tilt:"~0",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~64K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/cordelia/in-depth/;orb:eq.1986-01-19"},
ophe:
  {name:"Ophelia", other:"S/1986 U8", desig:"VII", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"53800km", e:"0.0099", i:"0.104", per:"0.376d", rot:"", gr:"Inner",
   h:"11.1", mass:"6.21e-10", dia:"30km:", rad:"15:", tilt:"~0",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~64K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/ophelia/in-depth/;orb:eq.1986-01-19"},
bian:
  {name:"Bianca", other:"S/1986 U9", desig:"VIII", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"59200km", e:"0.0009", i:"0.193", per:"0.435d", rot:"", gr:"Inner",
   h:"10.3", mass:"1.07e-9", dia:"45km:", rad:"22.5:", tilt:"~0",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~64K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/bianca/in-depth/;orb:eq.1986-01-19"},
cres:
  {name:"Cressida", other:"S/1986 U3", desig:"IX", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"61800km", e:"0.0004", i:"0.006", per:"0.464d", rot:"", gr:"Inner",
   h:"9.5", mass:"3.95e-9", dia:"82km", rad:"32.5:", tilt:"~0",
   alb:"0.07:", grav:"", comp:"", dens:"0.86", temp:"~64K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/cressida/in-depth/;orb:eq.1986-01-19"},
desd:
  {name:"Desdemona", other:"S/1986 U6", desig:"X", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"62700km", e:"0.0001", i:"0.113", per:"0.474d", rot:"", gr:"Inner",
   h:"9.8", mass:"2.05e-9", dia:"60km:", rad:"30:", tilt:"~0",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~64K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/desdemona/in-depth/;orb:eq.1986-01-19"},
juli:
  {name:"Juliet", other:"S/1986 U2", desig:"XI", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"64400km", e:"0.0007", i:"0.065", per:"0.493d", rot:"", gr:"Inner",
   h:"8.8", mass:"6.42e-9", dia:"85km:", rad:"42.5:", tilt:"~0",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~64K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/juliet/in-depth/;orb:eq.1986-01-19"},
port:
  {name:"Portia", other:"S/1986 U1", desig:"XII", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"66100km", e:"0.0001", i:"0.059", per:"0.513d", rot:"", gr:"Inner",
   h:"8.3", mass:"1.92e-8", dia:"110km:", rad:"55:", tilt:"~0",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~64K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/portia/in-depth/;orb:eq.1986-01-19"},
rosa:
  {name:"Rosalind", other:"S/1986 U4", desig:"XIII", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"69900km", e:"0.0001", i:"0.279", per:"0.558d", rot:"", gr:"Inner",
   h:"9.8", mass:"2.93e-9", dia:"60km:", rad:"30:", tilt:"~0",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~64K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/rosalind/in-depth/;orb:eq.1986-01-19"},
beli:
  {name:"Belinda", other:"S/1986 U5", desig:"XIV", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"75300km", e:"0.0001", i:"0.031", per:"0.624d", rot:"", gr:"Inner",
   h:"9.4", mass:"4.11e-9", dia:"68km:", rad:"34:", tilt:"",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~64K",
   img:"belinda.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/belinda/in-depth/;orb:eq.1986-01-19"},
puck:
  {name:"Puck", other:"S/1985 U1", desig:"XV", type:"m", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"86000km", e:"0.0001", i:"0.319", per:"0.762d", rot:"", gr:"Inner",
   h:"7.5", mass:"3.33e-8", dia:"155km:", rad:"77.5:", tilt:"~0",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~64K",
   img:"puck.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/puck/in-depth/;orb:eq.1986-01-19"},
cali:
  {name:"Caliban", other:"S/1997 U1", desig:"XVI", type:"m", par:"ura", disc:"B. Gladman et al.", dyr:"1997",
   a:"7231100km", e:"0.1812", i:"141.529", per:"579.73d", rot:"", gr:"Irregular (R)",
   h:"9.7", mass:"8.45e-9", dia:"60km:", rad:"30:", tilt:"",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/caliban/in-depth/;orb:ec.2000-01-01"},
syco:
  {name:"Sycorax", other:"S/1997 U2", desig:"XVII", type:"m", par:"ura", disc:"P. Nicholson el al.", dyr:"1997",
   a:"12179400km", e:"0.5219", i:"159.420", per:"1288.38d", rot:"", gr:"Irregular (R)",
   h:"8.2", mass:"6.19e-8", dia:"120km:", rad:"60:", tilt:"",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/sycorax/in-depth/;orb:ec.2000-01-01"},
pros:
  {name:"Prospero", other:"S/1999 U3", desig:"XVIII", type:"m", par:"ura", disc:"M. Holman et al.", dyr:"1999",
   a:"16276800km", e:"0.4445", i:"151.830", per:"1978.37d", rot:"", gr:"Irregular (R)",
   h:"11.0", mass:"", dia:"30km:", rad:"15:", tilt:"",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/prospero/in-depth/;orb:ec.2000-01-01"},
sete:
  {name:"Setebos", other:"S/1999 U1", desig:"XIX", type:"m", par:"ura", disc:"J. Kavelaars et al.", dyr:"1999",
   a:"17420400km", e:"0.5908", i:"158.235", per:"2225.08d", rot:"", gr:"Irregular (R)",
   h:"11.1", mass:"", dia:"35km:", rad:"17.5:", tilt:"",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/setebos/in-depth/;orb:ec.2000-01-01"},
step:
  {name:"Stephano", other:"S/1999 U2", desig:"XX", type:"m", par:"ura", disc:"B. Gladman et al.", dyr:"1999",
   a:"8007400km", e:"0.2248", i:"143.819", per:"677.47d", rot:"", gr:"Irregular (R)",
   h:"11.9", mass:"", dia:"20km:", rad:"10:", tilt:"",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/stephano/in-depth/;orb:ec.2000-01-01"},
trin:
  {name:"Trinculo", other:"S/2001 U1", desig:"XXI", type:"m", par:"ura", disc:"M. Holman et al.", dyr:"2001",
   a:"8505200km", e:"0.2194", i:"166.971", per:"749.40d", rot:"", gr:"Irregular (R)",
   h:"12.7", mass:"", dia:"14km:", rad:"7:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/trinculo/in-depth/;orb:ec.2000-01-01"},
fran:
  {name:"Francisco", other:"S/2001 U3", desig:"XXII", type:"m", par:"ura", disc:"J. Kavelaars et al.", dyr:"2001",
   a:"4282900km", e:"0.1324", i:"147.250", per:"267.09d", rot:"", gr:"Irregular (R)",
   h:"12.9", mass:"", dia:"14km:", rad:"7:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/francisco/in-depth/;orb:ec.2000-01-01"},
marg:
  {name:"Margaret", other:"S/2003 U3", desig:"XXIII", type:"m", par:"ura", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"14146700km", e:"0.6772", i:"57.367", per:"1661.00d", rot:"", gr:"Irregular (P)",
   h:"12.7", mass:"", dia:"15km:", rad:"7.5:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/margaret/in-depth/;orb:ec.2000-01-01"},
ferd:
  {name:"Ferdinand", other:"S/2001 U2", desig:"XXIV", type:"m", par:"ura", disc:"D. Milisavljevic et al.", dyr:"2001",
   a:"20430000km", e:"0.3993", i:"169.793", per:"2790.03d", rot:"", gr:"Irregular (R)",
   h:"12.5", mass:"", dia:"16km:", rad:"8:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/ferdinand/in-depth/;orb:ec.2000-01-01"},
perd:
  {name:"Perdita", other:"S/1986 U10", desig:"XXV", type:"m", par:"ura", disc:"E. Karkoschka", dyr:"1986",
   a:"76417km", e:"0.0116", i:"0.470", per:"0.638d", rot:"", gr:"Inner",
   h:"", mass:"", dia:"26.6km:", rad:"13.3:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/perdita/in-depth/;orb:eq.2004-08-25"},
mab:
  {name:"Mab", other:"S/2003 U1", desig:"XXVI", type:"m", par:"ura", disc:"M.R. Showalter et al.", dyr:"2003",
   a:"97736km", e:"0.0025", i:"0.134", per:"0.923d", rot:"", gr:"Inner",
   h:"", mass:"", dia:"24km:", rad:"12:", tilt:"",
   alb:"0.1:", grav:"", comp:"", dens:"", temp:"~63K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/mab/in-depth/;orb:eq.2004-08-25"},
cupi:
  {name:"Cupid", other:"S/2003 U2", desig:"XXVII", type:"m", par:"ura", disc:"M.R. Showalter et al.", dyr:"2003",
   a:"74392km", e:"0.0013", i:"0.099", per:"0.613d", rot:"", gr:"Inner",
   h:"", mass:"", dia:"17.8km:", rad:"8.9:", tilt:"",
   alb:"0.07:", grav:"", comp:"", dens:"", temp:"~65K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/uranus-moons/cupid/in-depth/;orb:eq.2004-08-25"},
//Neptune system
nep:
  {name:"Neptune", other:"", desig:"i", type:"p", par:"sol", disc:"J.G. Galle", dyr:"1846",
   a:"30.070au", e:"0.0086", i:"1.770", per:"164.791a", rot:"16.11h", 
   h:"-6.87", mass:"1.0244e26kg", dia:"49532km/0.0171", rad:"24766/0.0171", tilt:"29.56",
   irad:"1.47", alb:"0.41", grav:"1.138", hill:"4700", roche:"3.02",  rcrit:"72.68", rrl:"1.17..1.63", frl:"2.25..3.14",
   comp:"NH4+Ice+Rock+core:64", dens:"1.638", atm:"H2:80+He:19+CH4:~1", atp:">>1000",  temp:"~50K",
   dip:"0.1..0.9", dipt:"46.9x12000",
   img:"neptune.png", rings:"neptune-rings.png", map:"", col:"#99f", ind:"10", 
   desc:"scmoons:0.9;url:nssdc.gsfc.nasa.gov/planetary/moons/neptune-moons/neptunepage.html;rsize:274,113;x:24;y:72"},
trit:
  {name:"Triton", other:"", desig:"I", type:"m", par:"nep", disc:"W. Lassell", dyr:"1846",
   a:"354759km", e:"0.0000", i:"156.865", per:"5.877d", rot:"S", gr:"Irregular (R)",
   h:"-1.2", mass:"2089e-4", dia:"2706km", rad:"1353", tilt:"0.010", 
   alb:"0.756", grav:"0.078", comp:"Ice+Rock+Metal", dens:"2.05", temp:"~38K", atm:"N2:~99", atp:"~1.6e-5",
   img:"triton.png", desc:"sc:2.5;url:solarsystem.nasa.gov/moons/neptune-moons/triton/in-depth/;orb:lp.2000-01-01"},
nere:
  {name:"Nereid", other:"", desig:"II", type:"m", par:"nep", disc:"G.P. Kuiper", dyr:"1949",
   a:"5513818km", e:"0.7507", i:"7.090", per:"360.13d", rot:"", gr:"Irregular (P)",
   h:"4.0", mass:"3.01e-7", dia:"340km", rad:"170", tilt:"30.011",
   alb:"0.155", grav:"0.0072", comp:"", dens:"1.5:", temp:"~50K",
   img:"nereid.png", desc:"sc:5;url:solarsystem.nasa.gov/moons/neptune-moons/nereid/in-depth/;orb:lp.2000-01-01"},
naia:
  {name:"Naiad", other:"S/1989 N6", desig:"III", type:"m", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"48227km", e:"0.00014", i:"4.728", per:"0.294d", rot:"", gr:"Regular",
   h:"10.0", mass:"7.527e15kg", dia:"96x60x52km", rad:"33", tilt:"0.448",
   alb:"0.072", grav:"0.0012", comp:"", dens:"0.8", temp:"~51K",
   img:"naiad.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/naiad/in-depth/;orb:lp.2000-01-01"},
thal:
  {name:"Thalassa", other:"S/1989 N5", desig:"IV", type:"m", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"50074km", e:"0.00019", i:"0.168", per:"0.311d", rot:"", gr:"Regular",
   h:"9.1", mass:"1.443e16kg", dia:"108x100x52km", rad:"41", tilt:"0.449",
   alb:"0.091", grav:"0.002", comp:"", dens:"1.23", temp:"~51K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/thalassa/in-depth/;orb:lp.2000-01-01"},
desp:
  {name:"Despina", other:"S/1989 N3", desig:"V", type:"m", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"52526km", e:"0.00027", i:"0.039", per:"0.335d", rot:"", gr:"Regular",
   h:"7.9", mass:"8.836e16kg", dia:"180x148x128km", rad:"75", tilt:"0.451",
   alb:"0.090", grav:"0.0026", comp:"", dens:"1.2:", temp:"~51K",
   img:"despina.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/despina/in-depth/;orb:lp.2000-01-01"},
gala:
  {name:"Galatea", other:"S/1989 N4", desig:"VI", type:"m", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"61953km", e:"0.0002", i:"0.010", per:"0.429d", rot:"", gr:"Regular",
   h:"7.6", mass:"1.427e17kg", dia:"204x184x144km", rad:"88", tilt:"0.462",
   alb:"0.079", grav:"0.0018", comp:"", dens:"0.75:", temp:"~51K",
   img:"galatea.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/galatea/in-depth/;orb:lp.2000-01-01"},
lari:
  {name:"Larissa", other:"S/1989 N2", desig:"VII", type:"m", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"73548km", e:"0.00121", i:"0.214", per:"0.555d", rot:"", gr:"Regular",
   h:"7.3", mass:"1.911e17kg", dia:"216x204x168km", rad:"97", tilt:"0.490",
   alb:"0.091", grav:"0.003", comp:"", dens:"1.2:", temp:"~50K",
   img:"larissa.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/larissa/in-depth/;orb:lp.2000-01-01"},
prot:
  {name:"Proteus", other:"S/1989 N1", desig:"VIII", type:"m", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"117646km", e:"0.00047", i:"0.042", per:"1.122d", rot:"S", gr:"Regular",
   h:"5.6", mass:"1.940e18kg", dia:"436x416x402km", rad:"210", tilt:"0.974",
   alb:"0.096", grav:"0.007", comp:"", dens:"1.3:", temp:"~51K",
   img:"proteus.png", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/proteus/in-depth/;orb:lp.2000-01-01"},
hali:
  {name:"Halimede", other:"S/2002 N1", desig:"IX", type:"m", par:"nep", disc:"M. Holman et al.", dyr:"2002",
   a:"16611000km", e:"0.2646", i:"112.712", per:"1879.08d", rot:"", gr:"Irregular (R)",
   h:"10.0", mass:"", dia:"62km:", rad:"31", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/halimede/in-depth/;orb:ec.2003-06-10"},
psam:
  {name:"Psamathe", other:"S/2003 N1", desig:"X", type:"m", par:"nep", disc:"S.S. Sheppard et al.", dyr:"2003",
   a:"48096000km", e:"0.3809", i:"126.312", per:"9074.30d", rot:"", gr:"Irregular (R)",
   h:"11.0", mass:"", dia:"40km:", rad:"20", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/psamathe/in-depth/;orb:ec.2003-06-10"},
sao:
  {name:"Sao", other:"S/2002 N2", desig:"XI", type:"m", par:"nep", disc:"T. Grav et al.", dyr:"2002",
   a:"22228000km", e:"0.1365", i:"53.483", per:"2912.72d", rot:"", gr:"Irregular (P)",
   h:"11.1", mass:"", dia:"44km:", rad:"22", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/sao/in-depth/;orb:ec.2003-06-10"},
laom:
  {name:"Laomedeia", other:"S/2002 N3", desig:"XII", type:"m", par:"nep", disc:"J. Kavelaars et al.", dyr:"2002",
   a:"23567000km", e:"0.3969", i:"37.874", per:"3171.33d", rot:"", gr:"Irregular (P)",
   h:"10.8", mass:"", dia:"42km:", rad:"21", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/laomedeia/in-depth/;orb:ec.2003-06-10"},
neso:
  {name:"Neso", other:"S/2002 N4", desig:"XIII", type:"m", par:"nep", disc:"M. Holman et al.", dyr:"2002",
   a:"49285000km", e:"0.5714", i:"136.439", per:"9740.73d", rot:"", gr:"Irregular (R)",
   h:"10.7", mass:"", dia:"60km:", rad:"30:", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/neso/in-depth/;orb:ec.2003-06-10"},
s2004n1:
  {name:"Hippocamp", other:"S/2004 N1", desig:"XIV", type:"m", par:"nep", disc:"M.R. Showalter et al.", dyr:"2013",
   a:"105283km", e:"0.00001", i:"0.002", per:"0.9362d", rot:"", gr:"Regular",
   h:"", mass:"1.029e15kg", dia:"34km", rad:"17", tilt:"",
   alb:"0.06:", grav:"", comp:"", dens:"", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/moons/neptune-moons/s-2004-n1/in-depth/;orb:ec.2013-01-01"},
tno:
  {name:"Transneptunian Objects", other:"", desig:"", type:"b", par:"sol", disc:"", dyr:"", m:"1.17e23kg",
   tno:"4707", cen:"Neptune Trojans:24;Centaurs/Scattered Disk Objects:1085;Detached:79;Plutinos:~600;Other Resonant:~400;Classical KBOs:~1000",
   img:"kb.png", map:"tno.png", col:"#9fc", ind:"11", 
   desc:"sc:30;scmoons:0.05;url:www.minorplanetcenter.net;rsize:1800,200;x:72;y:72"},
//Pluto system
plu:
  {name:"Pluto", other:"", desig:"134340", type:"d", par:"sol", disc:"C. Tombaugh", dyr:"1930",
   a:"39.482au", e:"0.2488", i:"17.140", per:"247.921a", rot:"-6.387d", gr:"plut",
   h:"-1.0", mass:"1.328e22kg", dia:"2377km/0", rad:"1188/0", tilt:"122.53",
   irad:"0.89", alb:"0.49..0.66", grav:"0.067", hill:"6508", rrl:"1.30..1.55", frl:"2.50..2.98",
   comp:"N2+Ice+Rock+core:77", dens:"1.86", atm:"N2:97+CH4:2.5+CO", atp:"10e-6", temp:"33..44..55K",
   img:"pluto.png", map:"pluto-sys.png", col:"#f9f", 
   desc:"sc:3;scmoons:0.01;url:nssdc.gsfc.nasa.gov/planetary/planets/plutopage.html;;x:48;y:72"},
cha:
  {name:"Charon", other:"", desig:"I", type:"m", par:"plu", disc:"J.W. Christy", dyr:"1978",
   a:"19596km", e:"0.00005", i:"0.0", per:"6.387d", rot:"S", 
   h:"0.9", mass:"1.60e21kg", dia:"1212km", rad:"606", tilt:"0",
   alb:"0.36..0.39", grav:"0.031", comp:"Ice+Rock", dens:"1.70", temp:"~53K",
   img:"charon.png", desc:"sc:4;url:solarsystem.nasa.gov/moons/pluto-moons/charon/in-depth/;orb:eq.2000-01-01"},
styx:
  {name:"Styx", other:"P5", desig:"V", type:"m", par:"plu", disc:"M.R. Showalter et al.", dyr:"2012",
   a:"42656km", e:"0.0006", i:"0.809", per:"20.162d", rot:"3.239d",
   h:"", mass:"1e15kg", dia:"16x9x8km", rad:"5.2", tilt:"91",
   alb:"0.65", grav:"", comp:"", dens:"1.7", 
   img:"styx.png", desc:"sc:4;url:solarsystem.nasa.gov/moons/pluto-moons/styx/in-depth/;orb:eq.2011-07-01"},
nix:
  {name:"Nix", other:"S/2005 P2", desig:"II", type:"m", par:"plu", disc:"H.A. Weaver et al.", dyr:"2005",
   a:"48694km", e:"0.0000", i:"0.133", per:"24.855d", rot:"1.829d", 
   h:"", mass:"5.1e16kg", dia:"50x35x33km", rad:"19.3", tilt:"123",
   alb:"0.56", grav:"0.008", comp:"", dens:"1.7", 
   img:"nix.png", desc:"sc:4;url:solarsystem.nasa.gov/moons/pluto-moons/nix/in-depth/;orb:eq.2011-07-01"},
kerb:
  {name:"Kerberos", other:"P4", desig:"IV", type:"m", par:"plu", disc:"M.R. Showalter et al.", dyr:"2011",
   a:"57783m", e:"0.003", i:"0.389", per:"32.168d", rot:"5.31d", 
   h:"", mass:"1.5e15kg", dia:"19x10x9km", rad:"6.0", tilt:"96",
   alb:"0.56", grav:"", comp:"", dens:"1.7", 
   img:"kerberos.png", desc:"sc:4;url:solarsystem.nasa.gov/moons/pluto-moons/kerberos/in-depth/;orb:eq.2000-01-01"},
hydr:
  {name:"Hydra", other:"S/2005 P1", desig:"III", type:"m", par:"plu", disc:"H.A. Weaver et al.", dyr:"2005",
   a:"64738km", e:"0.00586", i:"0.242", per:"38.202d", rot:"0.4295d", 
   h:"", mass:"6.5e16kg", dia:"65x45x25km", rad:"20.9", tilt:"110", 
   alb:"0.83", grav:"0.007", comp:"", dens:"1.7", 
   img:"hydra.png", desc:"sc:4;url:solarsystem.nasa.gov/moons/pluto-moons/hydra/in-depth/;orb:eq.2011-07-01"},
//Other dwarf planets 
eri:
  {name:"Eris", other:"2003 UB313", desig:"136199", type:"d", par:"sol", disc:"M.E. Brown et al.", dyr:"2005",
   a:"68.01au", e:"0.4358", i:"43.844", per:"560.9a", rot:"15.8d", gr:"sdo",
   h:"-1.1", mass:"1.67e22kg", dia:"2326km", rad:"1163", tilt:"",
   alb:"0.96", grav:"0.0844",
   comp:"CH4 (S)", dens:"2.52", atm:"", atp:"", temp:"30..42.5..55K",
   img:"eris.png", col:"", desc:"moon:dys;sc:3;url:solarsystem.nasa.gov/planets/dwarf-planets/eris/in-depth/;orb:ec.2000-01-01"},
dysn:
  {name:"Dysnomia", other:"S/2005 (2003 UB313) 1", desig:"I", type:"m", par:"eri", disc:"M.E. Brown et al.", dyr:"2005",
   a:"37460km", e:"0.004", i:"61.1", per:"15.786d", rot:"",
   h:"5.6", mass:"2e20kg", dia:"700km", rad:"350:", tilt:"",
   alb:"0.04", grav:"", comp:"", dens:"1.0", 
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/planets/dwarf-planets/eris/in-depth/;orb:ec.2015-02-01"},
hau:
  {name:"Haumea", other:"2003 EL61", desig:"136108", type:"d", par:"sol", disc:"M.E. Brown et al.", dyr:"2004",
   a:"43.132au", e:"0.1950", i:"28.22", per:"283.28a", rot:"3.916h", gr:"cube",
   h:"0.2", mass:"4.006e21kg", dia:"2322x1701x1138km", rad:"816", tilt:"",
   alb:"0.7", grav:"0.04",
   comp:"Ice+Rock", dens:"1.8", atm:"", atp:"", temp:"32K",
   img:"haumea.png", col:"", desc:"moon:hii,nam;sc:3;url:solarsystem.nasa.gov/planets/dwarf-planets/haumea/in-depth/;orb:ec.2000-01-01"},
hiia:
  {name:"Hi'iaka", other:"S/2005 (2003 EL61) 1", desig:"I", type:"m", par:"hau", disc:"M.E. Brown et al.", dyr:"2005",
   a:"49880km", e:"0.0513", i:"126.4", per:"49.462d", rot:"9.8h",
   h:"", mass:"2e19kg", dia:"300km", rad:"150:", tilt:"",
   alb:"", grav:"", comp:"", dens:"1:", temp:"~32K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/planets/dwarf-planets/haumea/in-depth/;orb:eq.2000-01-01"},
nama:
  {name:"Namaka", other:"S/2005 (2003 EL61) 2", desig:"II", type:"m", par:"hau", disc:"M.E. Brown et al.", dyr:"2005",
   a:"25657km", e:"0.249", i:"113.0", per:"18.278d", rot:"",
   h:"", mass:"2e18kg", dia:"150km", rad:"75:", tilt:"",
   alb:"", grav:"", comp:"", dens:"1:", temp:"~32K",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/planets/dwarf-planets/haumea/in-depth/;orb:eq.2000-01-01"},
mak:
  {name:"Makemake", other:"2005 FY9", desig:"136472", type:"d", par:"sol", disc:"M.E. Brown et al.", dyr:"2005",
   a:"45.791au", e:"0.159", i:"28.96", per:"309.88a", rot:"7.771h", gr:"cube",
   h:"-0.2", mass:"3.1e21kg", dia:"1502x1430km", rad:"751x715", tilt:"",
   alb:"0.77", grav:"0.038", 
   comp:"CH4+C2H6 (S)", dens:"2.3", atm:"", atp:"", temp:"32..44K",
   img:"makemake.png", col:"", desc:"sc:3;url:solarsystem.nasa.gov/planets/dwarf-planets/makemake/in-depth/;orb:ec.2000-01-01"},
mk2:
  {name:"MK2", other:"S/2015 (136472) 1", desig:"I", type:"m", par:"mak", disc:"A.H. Parker et al.", dyr:"2015",
   a:"21000", e:"", i:"", per:"12.4d", rot:"",
   h:"", mass:"2.8e18kg", dia:"175km", rad:"87.5", tilt:"",
   alb:"0.01", grav:"", comp:"", dens:"1.0", temp:"",
   img:"", desc:"sc:3;url:solarsystem.nasa.gov/planets/dwarf-planets/makemake/in-depth/;orb:"},
//KBOs
qua:
  {name:"Quaoar", other:"2002 LM60", desig:"50000", type:"t", par:"sol", disc:"C. Trujillo et al.", dyr:"2002",
   a:"43.405au", e:"0.0394", i:"7.996", per:"285.97a", rot:"17.679h", gr:"cube",
   h:"2.4", mass:"1.4e21kg", dia:"1100km", rad:"550", tilt:"", alb:"0.199", grav:"0.26", 
   comp:"", dens:"2.5", atm:"", atp:"", temp:"~43K",
   img:"quaoar.png", col:"", desc:"moon:weyw;sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=quaoar;orb:ec.2010-07-23"},
weyw:
  {name:"Weywot", other:"S/2006 (50000) 1", desig:"I", type:"m", par:"qua", disc:"M.E. Brown et al.", dyr:"2007",
   a:"14500km", e:"0.14", i:"14", per:"12.438d", rot:"",
   h:"", mass:"", dia:"80km:", rad:"40", tilt:"",
   alb:"", grav:"", comp:"", dens:"", temp:"",
   img:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=quaoar;orb:eq.2000-01-01"},
orc:
  {name:"Orcus", other:"2004 DW", desig:"90482", type:"t", par:"sol", disc:"M.E. Brown et al.", dyr:"2004",
   a:"39.173au", e:"0.22718", i:"20.573", per:"245.18a", rot:"13.188h", gr:"plut",
   h:"2.3", mass:"6.41e20kg", dia:"910km", rad:"455", tilt:"", alb:"0.25", grav:"0.25", 
   comp:"", dens:"2.3", atm:"", atp:"", temp:"~44K",
   img:"orcus.png", col:"", desc:"moon:vant;sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=90482;orb:ec.2010-07-23"},
vant:
  {name:"Vanth", other:"S/2005 (90482) 1", desig:"I", type:"m", par:"orc", disc:"M.E. Brown et al.", dyr:"2005",
   a:"9030km", e:"0.007", i:"21", per:"9.5406d", rot:"S",
   h:"4.88", mass:"3e19kg", dia:"475km", rad:"237.5", tilt:"",
   alb:"0.08", grav:"0.1", comp:"", dens:"1.5", temp:"",
   img:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=90482;orb:eq.2000-01-01"},
sed:
  {name:"Sedna", other:"2003 VB12", desig:"90377", type:"t", par:"sol", disc:"M.E. Brown et al.", dyr:"2003",
   a:"518.57au", e:"0.8527", i:"11.927", per:"11400a", rot:"10h", gr:"deto",
   h:"1.5", mass:"1e21kg", dia:"1000km", rad:"500", tilt:"", alb:"0.32", grav:"0.26", 
   comp:"", dens:"2.0", atm:"", atp:"", temp:"~12K",
   img:"sedna.png", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=90377;orb:ec.2010-07-23"},
"2007or10":
  {name:"Gonggong", other:"2007 OR10", desig:"225088", type:"t", par:"sol", disc:"M.E. Schwamb al.", dyr:"2007",
   a:"66.84au", e:"0.505", i:"30.91", per:"550.98a", rot:"44.81h", gr:"sdo",
   h:"2.5", mass:"3.76e21kg", dia:"1250km", rad:"625", tilt:"", alb:"0.089", grav:"", 
   comp:"", dens:"1.6", atm:"", atp:"", temp:"~42K",
   img:"2007or10.png", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=225088;orb:ec.2014-01-13"},
"xiangliu":
  {name:"Xiangliu", other:"S/2016 (225088) 1", desig:"I", type:"m", par:"2007or10", disc:"G. Marton et al.", dyr:"2010",
   a:"15000km", e:"", i:"", per:"6d", rot:"",
   h:"", mass:"", dia:"240km", rad:"120", tilt:"",
   alb:"0.089", grav:"", comp:"", dens:"", temp:"",
   img:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=225088;orb:eq.2000-01-01"},
"2002ms4":
  {name:"2002 MS4", other:"", desig:"307261", type:"t", par:"sol", disc:"C. Trujillo et al.", dyr:"2002",
   a:"41.931au", e:"0.1413", i:"17.693", per:"271.53a", rot:"", gr:"cube",
   h:"3.6", mass:"", dia:"934km", rad:"467", tilt:"", alb:"0.051", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"~43K",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=307261;orb:ec.2009-06-18"},
"sala":
  {name:"Salacia", other:"2004 SB60", desig:"120347", type:"t", par:"sol", disc:"H.G. Roe et al.", dyr:"2004",
   a:"41.962au", e:"0.1063", i:"23.9440", per:"274.03a", rot:"6.09h", gr:"cube",
   h:"4.1", mass:"4.5e20kg", dia:"854km", rad:"427", tilt:"", alb:"0.035", grav:"", 
   comp:"", dens:"1.16", atm:"", atp:"", temp:"~43K",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=120347;orb:ec.2014-05-23"},
"acta":
  {name:"Actaea", other:"S/2006 (120347) 1", desig:"I", type:"m", par:"sala", disc:"K.S. Noll et al.", dyr:"2006",
   a:"5619km", e:"0.0084", i:"", per:"5.4938d", rot:"",
   h:"", mass:"1.86e19kg", dia:"303km:", rad:"151.5", tilt:"",
   alb:"0.035", grav:"", comp:"", dens:"1.16", temp:"",
   img:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=120347;orb:eq.2014-05-23"},
"varu":
  {name:"Varuna", other:"2004 SB60", desig:"20000", type:"t", par:"sol", disc:"H.G. Roe et al.", dyr:"2004",
   a:"42.904au", e:"0.056", i:"17.2", per:"281.03a", rot:"6.3436h", gr:"cube",
   h:"3.6", mass:"3.7e20kg", dia:"900km", rad:"450", tilt:"", alb:"0.07", grav:"0.14", 
   comp:"", dens:"0.992", atm:"", atp:"", temp:"~42K",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=20000;orb:ec.2009-06-18"},
ixi:
  {name:"Ixion", other:"2001 KX76", desig:"28978", type:"t", par:"sol", disc:"Deep Ecliptic Survey", dyr:"2001",
   a:"39.680au", e:"0.242", i:"19.584", per:"249.95a", rot:"", gr:"plut",
   h:"3.6", mass:"", dia:"700km", rad:"350", tilt:"", alb:"0.12", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"~44K",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=28978;orb:ec.2006-12-31"},
"2002aw197":
  {name:"2002 AW197", other:"", desig:"55565", type:"t", par:"sol", disc:"M.E. Brown et al.", dyr:"2002",
   a:"47.507au", e:"0.132", i:"24.333", per:"327.45a", rot:"8.86h", gr:"cube",
   h:"3.57", mass:"4.1e20", dia:"740km", rad:"370", tilt:"", alb:"0.112", grav:"", 
   comp:"", dens:"2.0", atm:"", atp:"", temp:"~40K",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=55565;orb:ec.2006-12-31"},
"2013fy27":
  {name:"2013 FY27", other:"", desig:"532037", type:"t", par:"sol", disc:"S. Sheppard et al.", dyr:"2013",
   a:"58.78au", e:"0.399", i:"33.16", per:"455a", rot:"", gr:"sdo",
   h:"3.2", mass:"", dia:"740km", rad:"370", tilt:"", alb:"0.17", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2013+FY27;orb:ec.2013-07-24"},
"2012vp113":
  {name:"2012 VP113", other:"", desig:"", type:"t", par:"sol", disc:"S. Sheppard et al.", dyr:"2012",
   a:"257.67au", e:"0.6879", i:"24.11", per:"4268a", rot:"", gr:"deto",
   h:"4.0", mass:"", dia:"~500km", rad:"~250", tilt:"", alb:"0.15", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2012+VP113;orb:ec.2014-12-09"},
"chaos":
  {name:"Chaos", other:"1998 WH24", desig:"19521", type:"t", par:"sol", disc:"Deep Ecliptic Survey", dyr:"1998",
   a:"45.796au", e:"0.1057", i:"12.05", per:"309.92a", rot:"3.985d", gr:"cube",
   h:"4.8", mass:"", dia:"~600km", rad:"~300", tilt:"", alb:"0.05", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=1998+WH24;orb:ec.2014-12-09"},
"2007uk126":
  {name:"Gǃkúnǁʼhòmdímà", other:"2007 UK126", desig:"229762", type:"t", par:"sol", disc:"M.E. Schwamb et al.", dyr:"2007",
   a:"72.722au", e:"0.4843", i:"23.38", per:"620.17a", rot:"11.05d", gr:"sdo",
   h:"3.3", mass:"1.361e20", dia:"~600km/0.11", rad:"~300/0.11", tilt:"", alb:"0.15", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"50..55K",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2007+UK126;orb:ec.2019-04-27"},
"S2008_229762_1":
  {name:"Gǃòʼé ǃHú", other:"S/2008 (229762) 1", desig:"I", type:"m", par:"2007uk126", disc:"Noll et al.", dyr:"2008",
   a:"6035km", e:"0.0236", i:"43.75", per:"11.315d", rot:"",
   h:"", mass:"", dia:"140km", rad:"70", tilt:"",
   alb:"", grav:"", comp:"", dens:"", temp:"",
   img:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2007+UK126;orb:eq.2000-01-01"},
"2018ag37":
  {name:"2018 AB37", other:"'FarFarOut'", desig:"", type:"t", par:"sol", disc:"S. Sheppard et al.", dyr:"2018",
   a:"86au", e:"0.685", i:"18.71", per:"797.55a", rot:"", gr:"sdo",
   h:"4.2", mass:"", dia:"~400km", rad:"~200", tilt:"", alb:"", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2018+AB37;orb:ec.2019-02-24"},
//1994 JR1, 
"2014mu69":
  {name:"Arrokoth", other:"2014 MU69", desig:"486958", type:"t", par:"sol", disc:"HST", dyr:"2014",
   a:"44.23au", e:"0.0378", i:"2.45", per:"297.1a", rot:"16h", gr:"cube",
   h:"11.1", mass:"", dia:"36x19.9x9.8km", rad:"16.5", tilt:"98", alb:"~0.04", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"~35K",
   img:"2014mu69.png", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2014+MU69;orb:ec.2014-12-09"},
"2014pn70":
  {name:"2014 PN70", other:"12000JZ", desig:"", type:"t", par:"sol", disc:"HST", dyr:"2014",
   a:"44.42au", e:"0.0514", i:"4.12", per:"296.01a", rot:"", gr:"",
   h:"10.3", mass:"", dia:"40km", rad:"20", tilt:"", alb:"~0.04", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2014+PN70;orb:ec.2014-12-09"},
"2015rr245":
  {name:"2015 RR245", other:"", desig:"", type:"t", par:"sol", disc:"JJ. Kavelaars et al. ", dyr:"2015",
   a:"81.45au", e:"0.5864", i:"7.57", per:"735a", rot:"", gr:"sdo",
   h:"3.7", mass:"", dia:"700km", rad:"350", tilt:"", alb:"", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2015+RR245;orb:ec.2016-07-31"},
"2018vg18":
  {name:"2018 VG18", other:"'Farout'", desig:"", type:"t", par:"sol", disc:"S. Sheppard et al. ", dyr:"2018",
   a:"95.24au", e:"0.7717", i:"31.714", per:"929.43a", rot:"", gr:"sdo",
   h:"3.24", mass:"", dia:"500km", rad:"250", tilt:"", alb:"", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2018+VG18;orb:ec.2018-11-25"},
"2014uz224":
  {name:"2014 UZ224", other:"'DeeDee'", desig:"", type:"t", par:"sol", disc:"DW. Gerdes et al. ", dyr:"2014",
   a:"108.9au", e:"0.6514", i:"26.785", per:"1136.4a", rot:"", gr:"sdo",
   h:"3.5", mass:"", dia:"635km", rad:"368", tilt:"", alb:"0.13", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=2014+UZ224;orb:ec.2016-07-31"},
//Comets
hall:
  {name:"Halley", other:"", desig:"1P", type:"c", par:"sol", disc:"hist./E. Halley", dyr:"1705",
   a:"17.8au", e:"0.967", i:"162.3", per:"75.3a", rot:"2.2d", gr:"Halley", peri:"0.586au:2061-07-28",
   h:"5.5", mass:"2.2e14kg", dia:"15x8km", rad:"7.5x4", tilt:"",
   alb:"0.04", grav:"", comp:"Ice+Rock+poro:60", dens:"0.28", temp:"", atm:"H2O+CO+CH4+NH3", atp:"",
   img:"halley.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/comets/1p-halley/in-depth/;orb:ec.1994-02-17"},
enck:
  {name:"Encke", other:"", desig:"2P", type:"c", par:"sol", disc:"P. Méchain, J.F. Encke", dyr:"1786",
   a:"2.215au", e:"0.8482", i:"11.779", per:"3.296a", rot:"", gr:"Jupiter", peri:"0.33au:2017-03-10",
   h:"11.5", mass:"", dia:"4.8km", rad:"2.4", tilt:"",
   alb:"0.04", grav:"", comp:"Ice+Rock", dens:"", temp:"", atm:"", atp:"",
   img:"", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/comets/2p-encke/in-depth/;orb:ec.2013-10-15"},
darr:
  {name:"d'Arrest", other:"", desig:"6P", type:"c", par:"sol", disc:"H.L. d'Arrest", dyr:"1861",
   a:"3.495au", e:"0.6127", i:"19.515", per:"6.535a", rot:"", gr:"Jupiter", peri:"1.35au:2015-03-02",
   h:"7.5", mass:"", dia:"3.2km", rad:"1.6", tilt:"",
   alb:"0.04", grav:"", comp:"Ice+Rock", dens:"", temp:"", atm:"", atp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=6p;orb:ec.2009-01-10"},
temp:
  {name:"Tempel", other:"Tempel 1", desig:"9P", type:"c", par:"sol", disc:"W. Tempel", dyr:"1867",
   a:"3.124au", e:"0.517", i:"10.5251", per:"5.52a", rot:"40.7h", gr:"Jupiter", peri:"1.543au:2016-08-03",
   h:"5.5", mass:"7.2e13kg", dia:"7.6x5.0km", rad:"3.8x2.5", tilt:"",
   alb:"0.04", grav:"", comp:"Ice+Rock+poro:60", dens:"0.62", temp:"", atm:"",
   img:"tempel1.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/comets/9p-tempel-1/in-depth/;orb:"},
borr:
  {name:"Borrelly", other:"", desig:"19P", type:"c", par:"sol", disc:"A. Borrelly", dyr:"1904",
   a:"3.59au", e:"0.624", i:"30.3", per:"6.8a", rot:"", gr:"Jupiter", peri:"1.349au:2015-05-29",
   h:"4.5", mass:"2e13kg", dia:"8x4x4km", rad:"4x2x2", tilt:"",
   alb:"0.03", grav:"", comp:"Ice+Rock+poro:80", dens:"0.3", temp:"",
   img:"borrelly.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/comets/19p-borelly/in-depth/;orb:ec.2001-09-08"},
giac:
  {name:"Giacobini-Zinner", other:"", desig:"21P", type:"c", par:"sol", disc:"Mi. Giacobini/E. Zinner", dyr:"1900",
   a:"3.526au", e:"0.7056", i:"31.811", per:"6.621a", rot:"", gr:"Jupiter", peri:"1.038au:2018-09-10",
   h:"9.0", mass:"", dia:"~2km", rad:"~1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", temp:"",
   img:"", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/comets/21p-giacobini-zinner/in-depth/;orb:"},
grig:
  {name:"Grigg-Skjellerup", other:"", desig:"26P", type:"c", par:"sol", disc:"J. Grigg", dyr:"1902",
   a:"4.933au", e:"0.6631", i:"22.36", per:"5.31a", rot:"", gr:"Jupiter", peri:"1.082au:2018-10-02",
   h:"12.0", mass:"", dia:"~2.6km", rad:"~1.3", tilt:"",
   alb:"", grav:"", comp:"", dens:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=26p;orb:"},
wirt:
  {name:"Wirtanen", other:"", desig:"46P", type:"c", par:"sol", disc:"C.A. Wirtanen", dyr:"1948",
   a:"3.094au", e:"0.6578", i:"11.738", per:"5.44a", rot:"", gr:"Jupiter", peri:"1.055au:2018-12-13",
   h:"9.0", mass:"", dia:"1.2km", rad:"0.6", tilt:"",
   alb:"", grav:"", comp:"", dens:"", temp:"",
   img:"", desc:"sc:6;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=46p;orb:"},
chur:
  {name:"Churyumov-Gerasimenko", other:"", desig:"67P", type:"c", par:"sol", disc:"K.I. Churyumov/S.I. Gerasimenko", dyr:"1969",
   a:"3.465au", e:"0.6404", i:"7.042", per:"6.57a", rot:"12.40h", gr:"Jupiter", peri:"1.246au:2015-08-13",
   h:"11.0", mass:"1e13kg", dia:"5.0x3.8x3.2km", rad:"2.5x1.9x1.7", tilt:"52",
   alb:"0.06", grav:"", comp:"Ice+Rock+poro:73", dens:"0.47", temp:"23..200..290K",
   img:"chury.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/comets/67p-churyumov-gerasimenko/in-depth/;orb:ec.2010-06-13"},
wild:
  {name:"Wild", other:"Wild 2", desig:"81P", type:"c", par:"sol", disc:"P. Wild", dyr:"1978",
   a:"3.45au", e:"0.5384", i:"3.239", per:"6.408a", rot:"", gr:"Jupiter", peri:"1.592au:2016-07-20",
   h:"7.0", mass:"2.3e13kg", dia:"5.6x4.0x3.6km", rad:"2.8x2.0x1.8", tilt:"",
   alb:"", grav:"", comp:"", dens:"0.6", temp:"",
   img:"wild2.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/comets/81p-wild/in-depth/;orb:"},
hart:
  {name:"Hartley", other:"Hartley 2", desig:"103P", type:"c", par:"sol", disc:"M. Hartley", dyr:"1986",
   a:"3.46au", e:"0.694", i:"13.6", per:"6.46a", rot:"18.1C", gr:"Jupiter", peri:"1.05au:2017-04-20",
   h:"8.5", mass:"3e11kg", dia:"1.6km", rad:"0.8", tilt:"",
   alb:"0.028", grav:"", comp:"", dens:"", temp:"",
   img:"hartley2.png", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/comets/103p-hartley-hartley-2/in-depth/;orb:ec.2010-09-17"},
sids:
  {name:"Siding Spring", other:"", desig:"C/2013 A1", type:"c", par:"sol", disc:"R.H. McNaught", dyr:"2013",
   a:"-2173au", e:"1.00043", i:"129.03", per:"~1e6a", rot:"", gr:"Long Period", peri:"1.399au:2014-10-25",
   h:"8.2", mass:"", dia:"~2km", rad:"~1", tilt:"",
   alb:"", grav:"", comp:"", dens:"", temp:"",
   img:"", desc:"sc:6;url:solarsystem.nasa.gov/small-bodies/comets/c-2013-a1-siding-spring/in-depth/;orb:ec.2014-10-30"},
//133P/Elst-Pizarro
"elst":
  {name:"Elst-Pizarro", other:"7968", desig:"133P", type:"c", par:"sol", disc:"EW. Elst, G. Pizarro", dyr:"1996",
   a:"3.16au", e:"0.1606", i:"1.387", per:"5.62a", rot:"3.471h", gr:"Main Belt",
   h:"15.7", mass:"", dia:"3.8km", rad:"1.9", tilt:"", alb:"0.06", grav:"", 
   comp:"", dens:"", atm:"", atp:"", temp:"160K",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=7968;orb:ec.2016-01-13"},
// 311P/PANSTARRS
"pans311":
  {name:"PANSTARRS", other:"", desig:"311P", type:"c", par:"sol", disc:"Bryce T. Bolin/Pan-STARRS", dyr:"2013",
   a:"2.189au", e:"0.116", i:"4.97", per:"3.24a", rot:"3.471h", gr:"Main Belt",
   h:"18.8", mass:"", dia:"480m", rad:"0.24", tilt:"", alb:"0.06", grav:"", 
   comp:"", dens:"3.3", atm:"", atp:"", temp:"",
   img:"", col:"", desc:"sc:3;url:ssd.jpl.nasa.gov/sbdb.cgi?sstr=311p;orb:ec.2016-01-13"},
//Jupiter Rings
halo:
  {name:"Halo", other:"1979 J1R", desig:"", type:"r", par:"jup", disc:"Voyager", dyr:"1979",
   a:"111200km", e:"", i:"", per:"",
   mass:"", dia:"22400km", rad:"22400", thick:"~5e4", opt:"3e-6:",
   alb:"", comp:"dust:100", sdens:"", desc:"opa:0.45"},
main:
  {name:"Main", other:"1979 J2R", desig:"", type:"r", par:"jup", disc:"Voyager", dyr:"1979",
   a:"125750km", e:"", i:"", per:"",
   mass:"1e13kg", dia:"6700km", rad:"6700", thick:"30..100", opt:"5.9e-6",
   alb:"0.015", comp:"dust:~25", sdens:"5e-6", desc:"opa:0.55;moon:meti,adra"},
amalr:
  {name:"Amalthea Gossamer", other:"1979 J3R", desig:"", type:"r", par:"jup", disc:"Voyager", dyr:"1979",
   a:"151875km", e:"", i:"", per:"",
   mass:"1e7..1e9kg", dia:"58950km", rad:"58950", thick:"2300", opt:"~1e-7",
   alb:"", comp:"dust:~100", sdens:"", desc:"opa:0.25;moon:amal"},
thebr:
  {name:"Thebe Gossamer", other:"1979 J3R", desig:"", type:"r", par:"jup", disc:"Voyager", dyr:"1979",
   a:"172150km", e:"", i:"", per:"",
   mass:"1e7..1e9kg", dia:"99500km", rad:"99500", thick:"8500", opt:"~1e-8",
   alb:"", comp:"dust:~100", sdens:"", desc:"opa:0.15;moon:theb"},
thebx:
  {name:"Thebe Extension", other:"", desig:"", type:"r", par:"jup", disc:"", dyr:"",
   a:"245950km", e:"", i:"", per:"",
   mass:"", dia:"48100km", rad:"48100", thick:"9000", opt:"~1e-9",
   alb:"", comp:"dust:~100", sdens:"", desc:"opa:0.1;moon:theb"},
//Saturn rings
drng:
  {name:"D", other:"", desig:"", type:"r", par:"sat", disc:"P. Guerin", dyr:"1969",
   a:"70740km", e:"", i:"", per:"",
   mass:"", dia:"7540km", rad:"7540", thick:"", opt:"1e-5",
   alb:"", comp:"dust:50..100", sdens:"", desc:"opa:0.3"},
crng:
  {name:"C", other:"", desig:"", type:"r", par:"sat", disc:"W.C.&G.P. Bond", dyr:"1850",
   a:"83255km", e:"", i:"", per:"",
   mass:"1.1e18kg", dia:"17490km", rad:"17490", thick:"0.005", opt:"0.05..0.35",
   alb:"0.12..0.3", comp:"dust:<3", sdens:"1.4..7", desc:"opa:0.8"},
colg:
  {name:"Colombo Gap", other:"", desig:"", type:"r", par:"sat", disc:"Voyager 2", dyr:"1981",
   a:"77800km", e:"", i:"", per:"",
   mass:"", dia:"100km", rad:"100", thick:"", opt:"~0",
   alb:"", comp:"", sdens:"", desc:""},
maxg:
  {name:"Maxwell Gap", other:"", desig:"", type:"r", par:"sat", disc:"Voyager 1", dyr:"1980",
   a:"87500km", e:"0.00034", i:"", per:"",
   mass:"", dia:"270km", rad:"270", thick:"", opt:"~0",
   alb:"", comp:"", sdens:"", desc:""},
brng:
  {name:"B", other:"", desig:"", type:"r", par:"sat", disc:"G. Galileo", dyr:"1610",
   a:"104790km", e:"", i:"", per:"",
   mass:"2.8e19kg", dia:"25580km", rad:"25580", thick:"5e-3..10e-3", opt:"0.4..2.5",
   alb:"0.4..0.6", comp:"dust:<3", sdens:"20..1000", desc:"opa:0.95"},
cassr:
  {name:"Cassini Division", other:"", desig:"", type:"r", par:"sat", disc:"G. Cassini", dyr:"1675",
   a:"119930km", e:"", i:"", per:"",
   mass:"", dia:"4700km", rad:"4700", thick:"0.02", opt:"0.05..0.15",
   alb:"0.2..0.4",  comp:"dust:<3", sdens:"", desc:""},
huyg:
  {name:"Huygens Gap", other:"", desig:"", type:"r", par:"sat", disc:"Voyager 2", dyr:"1981",
   a:"117680km", e:"", i:"", per:"",
   mass:"", dia:"286..440km", rad:"286..440", thick:"", opt:"~0",
   alb:"", comp:"", sdens:"", desc:""},
lapg:
  {name:"Laplace Gap", other:"", desig:"", type:"r", par:"sat", disc:"Voyager 2", dyr:"1981",
   a:"119967km", e:"", i:"", per:"",
   mass:"", dia:"248km", rad:"238", thick:"", opt:"~0",
   alb:"", comp:"", sdens:"", desc:""},
arng:
  {name:"A", other:"", desig:"", type:"r", par:"sat", disc:"G. Galileo", dyr:"1610",
   a:"129475km", e:"", i:"", per:"",
   mass:"4.5e18kg", dia:"14610km", rad:"14610", thick:"0.01..0.03", opt:"0.4..1.0",
   alb:"0.4..0.6",  comp:"dust:<3", sdens:"20..40", desc:"opa:0.9;moon:pan,atla,daph"},
enkg:
  {name:"Encke Gap", other:"", desig:"", type:"r", par:"sat", disc:"J.E. Keeler", dyr:"1888",
   a:"133570km", e:"", i:"", per:"",
   mass:"", dia:"325km", rad:"325", thick:"", opt:"~0",
   alb:"", comp:"", sdens:"", desc:"moon:pan"},
keeg:
  {name:"Keeler Gap", other:"", desig:"", type:"r", par:"sat", disc:"J.E. Keeler", dyr:"1888",
   a:"136505km", e:"", i:"", per:"",
   mass:"", dia:"35km", rad:"35", thick:"", opt:"~0",
   alb:"", comp:"", sdens:"", desc:"moon:daph"},
rochr:
  {name:"Roche Division", other:"", desig:"", type:"r", par:"sat", disc:"", dyr:"",
   a:"138075km", e:"", i:"", per:"",
   mass:"", dia:"2600km", rad:"2600", thick:"", opt:"",
   alb:"", comp:"", sdens:"", desc:""},
frng:
  {name:"F", other:"", desig:"", type:"r", par:"sat", disc:"Pioneer 11", dyr:"1979",
   a:"140180km", e:"0.0026", i:"", per:"",
   mass:"", dia:"50..500km", rad:"50..500", opt:"0.1..0.5",
   alb:"0.6",  comp:"dust:>98", sdens:"", desc:"opa:0.65;moon:prom,pand"},
jerng:
  {name:"Janus/Epimeteus", other:"", desig:"", type:"r", par:"sat", disc:"Cassini", dyr:"2006",
   a:"151500km", e:"", i:"", per:"",
   mass:"", dia:"5000km", rad:"5000", thick:"", opt:"",  
   alb:"",  comp:"", sdens:"", desc:"opa:0.35;moon:janu,epim"},
grng:
  {name:"G", other:"", desig:"", type:"r", par:"sat", disc:"Voyager", dyr:"1980",
   a:"169500km", e:"", i:"", per:"",
   mass:"", dia:"7000km", rad:"7000", thick:"100", opt:"1e-6",
   alb:"",  comp:"dust:~99", sdens:"", desc:"opa:0.3;moon:aega"},
erng:
  {name:"E", other:"", desig:"", type:"r", par:"sat", disc:"W. Feibelmann", dyr:"1967",
   a:"332000km", e:"", i:"", per:"",
   mass:"", dia:"302000km", rad:"302000", thick:"8..16e3", opt:"1.5e-5",
   alb:"",  comp:"dust:100", sdens:"", desc:"opa:0.45;moon:ence,mima,teth,dion"},
methr:
  {name:"Methone Arc", other:"", desig:"", type:"r", par:"sat", disc:"Cassini", dyr:"2006",
   a:"194230km", e:"", i:"", per:"",
   mass:"", dia:"100km", rad:"100", thick:"", opt:"", len:"10",
   alb:"",  comp:"", sdens:"", desc:"opa:0.3;moon:meth"},
anthr:
  {name:"Anthe Arc", other:"", desig:"", type:"r", par:"sat", disc:"Cassini", dyr:"2007",
   a:"197665km", e:"", i:"", per:"",
   mass:"", dia:"100km", rad:"100", thick:"", opt:"", len:"20",
   alb:"",  comp:"", sdens:"", desc:"opa:0.3;moon:anth"},
pallr:
  {name:"Pallene", other:"", desig:"", type:"r", par:"sat", disc:"Cassini", dyr:"2006",
   a:"212000km", e:"", i:"", per:"",
   mass:"", dia:"2500km", rad:"2500", thick:"", opt:"",  
   alb:"",  comp:"", sdens:"", desc:"opa:0.3;moon:palle"},
phoer:
  {name:"Phoebe", other:"", desig:"", type:"r", par:"sat", disc:"A. Verbiscer et al.", dyr:"2009",
   a:"11.35e6km", e:"", i:"27", per:"",
   mass:"", dia:"7.3e6km", rad:"7.3e6", thick:"2.4e6", opt:"2e-8:",
   alb:"",  comp:"dust", sdens:"", desc:"opa:0.25;moon:phoe"},
//Uranus rings
zetccr:
  {name:"ζcc", other:"", desig:"", type:"r", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"30800km", e:"", i:"", per:"",
   mass:"", dia:"8000km", rad:"8000", thick:"0.8", opt:"1e-2:",
   alb:"", comp:"", sdens:"", desc:"opa:0.3;"},
zetcr:
  {name:"ζc", other:"", desig:"", type:"r", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"36300km", e:"", i:"", per:"",
   mass:"", dia:"3000km", rad:"3000", thick:"0.6", opt:"1e-2:",
   alb:"", comp:"", sdens:"", desc:"opa:0.3;"},
zetr:
  {name:"ζ", other:"1986 U2R", desig:"", type:"r", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"39550km", e:"", i:"", per:"",
   mass:"", dia:"3500km", rad:"3500", thick:"1", opt:"1e-2:",
   alb:"", comp:"", sdens:"", desc:"opa:0.4;"},
sixr:
  {name:"6", other:"", desig:"", type:"r", par:"ura", disc:"P.D. Nicholson et al.", dyr:"1978",
   a:"41837km", e:"0.0010", i:"", per:"",
   mass:"", dia:"1.6..2.2km", rad:"1.6..2.2", thick:"0.1", opt:"0.18..0.25",
   alb:"0.015:", comp:"dust:~0", sdens:"", desc:"opa:0.55"},
fivr:
  {name:"5", other:"", desig:"", type:"r", par:"ura", disc:"P.D. Nicholson et al.", dyr:"1978",
   a:"42234km", e:"0.0019", i:"", per:"",
   mass:"", dia:"1.9..4.9km", rad:"1.9..4.9", thick:"0.1", opt:"0.18..0.25",
   alb:"0.015:", comp:"dust:~0", sdens:"", desc:"opa:0.55"},
four:
  {name:"4", other:"", desig:"", type:"r", par:"ura", disc:"P.D. Nicholson et al.", dyr:"1978",
   a:"42570km", e:"0.0011", i:"", per:"",
   mass:"", dia:"2.4..4.4km", rad:"2.4..4.4", thick:"0.1", opt:"0.16..0.30",
   alb:"0.015:", comp:"dust:~0", sdens:"", desc:"opa:0.55"},
alpr:
  {name:"α", other:"", desig:"", type:"r", par:"ura", disc:"J.L. Elliot et al.", dyr:"1977",
   a:"44718km", e:"0.0008", i:"", per:"",
   mass:"", dia:"4.8..10.0km", rad:"4.8..10.0", thick:"0.1", opt:"0.3..0.7",
   alb:"0.015:",  comp:"dust:~0", sdens:"", desc:"opa:0.7"},
betr:
  {name:"β", other:"", desig:"", type:"r", par:"ura", disc:"J.L. Elliot et al.", dyr:"1977",
   a:"45661km", e:"0.0004", i:"", per:"",
   mass:"", dia:"6.1..11.4km", rad:"6.1..11.4", thick:"0.1", opt:"0.20..0.35",
   alb:"0.015:", comp:"dust:~0", sdens:"", desc:"opa:0.6"},
etar:
  {name:"η", other:"", desig:"", type:"r", par:"ura", disc:"P.D. Nicholson et al.", dyr:"1978",
   a:"47175km", e:"", i:"", per:"",
   mass:"", dia:"1.9..2.7km", rad:"1.9..2.7", thick:"0.1", opt:"0.16..0.25",
   alb:"0.015:", comp:"", sdens:"", desc:"opa:0.55"},
gamr:
  {name:"γ", other:"", desig:"", type:"r", par:"ura", disc:"J.L. Elliot et al.", dyr:"1977",
   a:"47627km", e:"0.0011", i:"", per:"",
   mass:"", dia:"3.6..4.7km", rad:"3.6..4.7", thick:"0.15", opt:"0.7..0.9",
   alb:"0.015:", comp:"dust:~0", sdens:"", desc:"opa:0.8"},
delr:
  {name:"δ", other:"", desig:"", type:"r", par:"ura", disc:"J.L. Elliot et al.", dyr:"1977",
   a:"48300km", e:"0.00004", i:"", per:"",
   mass:"", dia:"4.1..6.1km", rad:"4.1..6.1", thick:"0.1", opt:"0.3..0.6",
   alb:"0.015:", comp:"", sdens:"", desc:"opa:0.65"},
lamr:
  {name:"λ", other:"1986 U1R", desig:"", type:"r", par:"ura", disc:"Voyager 2", dyr:"1986",
   a:"50023km", e:"0", i:"", per:"",
   mass:"", dia:"1..2km", rad:"1..2", thick:"0.1", opt:"0.1..0.2",
   alb:"0.015:", comp:"dust:>95", sdens:"", desc:"opa:0.5"},
epsr:
  {name:"ε", other:"", desig:"", type:"r", par:"ura", disc:"J.L. Elliot et al.", dyr:"1977",
   a:"51149km", e:"0.0079", i:"", per:"",
   mass:"", dia:"19.7..96.4km", rad:"19.7..96.4", thick:"15", opt:"0.5..2.3",
   alb:"0.018", comp:"dust:~0", temp:"77K", sdens:"", desc:"opa:0.9;moon:cord,ophe"},
nur:
  {name:"ν", other:"R/2003 U2", desig:"", type:"r", par:"ura", disc:"M.R. Showalter et al.", dyr:"2003",
   a:"68000km", e:"", i:"", per:"",
   mass:"", dia:"3800km", rad:"3800", thick:"", opt:"5.4e-6",
   alb:"", comp:"", sdens:"", desc:"opa:0.3;moon:port,rosa"},
mur:
  {name:"μ", other:"R/2003 U1", desig:"", type:"r", par:"ura", disc:"M.R. Showalter et al.", dyr:"2003",
   a:"94500km", e:"", i:"", per:"",
   mass:"", dia:"17000km", rad:"17000", thick:"", opt:"8.5e-6",
   alb:"", comp:"", sdens:"", desc:"opa:0.3;moon:puck,mab"},
//Neptune rings
gallr:
  {name:"Galle", other:"1989 N3R", desig:"", type:"r", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"41900km", e:"", i:"", per:"",
   mass:"", dia:"2000km", rad:"2000", thick:"0.15", opt:"1.0e-4",
   alb:"0.015", comp:"", sdens:"", desc:"opa:0.35"},
levr:
  {name:"Le Verrier", other:"1989 N2R", desig:"", type:"r", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"53156km", e:"", i:"", per:"",
   mass:"", dia:"113km", rad:"113", thick:"0.7", opt:"6.5e-3",
   alb:"0.015", comp:"dust:40..70", sdens:"", desc:"opa:0.55;moon:desp"},
lassr:
  {name:"Lassell", other:"1989 N4R", desig:"", type:"r", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"55200km", e:"", i:"", per:"",
   mass:"", dia:"4000km", rad:"4000", thick:"0.4", opt:"1.5e-4",
   alb:"0.015", comp:"", sdens:"", desc:"opa:0.35"},
arar:
  {name:"Arago", other:"1989 N4R", desig:"", type:"r", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"57200km", e:"", i:"", per:"",
   mass:"", dia:"100km", rad:"100", thick:"", opt:"", 
   alb:"", comp:"", sdens:"", desc:"opa:0.4"},
adamr:
  {name:"Adams", other:"1989 N1R", desig:"", type:"r", par:"nep", disc:"Voyager 2", dyr:"1989",
   a:"62932km", e:"0.00047", i:"", per:"",
   mass:"", dia:"50km", rad:"50", thick:"0.4", opt:"0.01..0.1",
   alb:"0.015",  comp:"dust:20..40", sdens:"", desc:"opa:0.4;moon:gala"},
carc:
  {name:"Courage Arc", other:"", desig:"", type:"r", par:"nep", disc:"Sicardy, B et al.", dyr:"1989",
   a:"62932km", e:"", i:"", per:"",
   mass:"", dia:"15km", rad:"15", thick:"1.25", opt:"0.03", len:"1",
   alb:"",  comp:"dust:40..70", sdens:"", desc:"opa:0.5"},
liarc:
  {name:"Liberté Arc", other:"", desig:"", type:"r", par:"nep", disc:"Sicardy, B et al.", dyr:"1989",
   a:"62932km", e:"", i:"", per:"",
   mass:"", dia:"15km", rad:"15", thick:"2.15", opt:"0.12", len:"4.1",
   alb:"",  comp:"dust:40..70", sdens:"", desc:"opa:0.65"},
e1arc:
  {name:"Egalité 1 Arc", other:"", desig:"", type:"r", par:"nep", disc:"Sicardy, B et al.", dyr:"1989",
   a:"62932km", e:"", i:"", per:"",
   mass:"", dia:"15km", rad:"15", thick:"2.15", opt:"0.12", len:"1",
   alb:"0.04",  comp:"dust:40..70", sdens:"", desc:"opa:0.65"},
e2arc:
  {name:"Egalité 2 Arc", other:"", desig:"", type:"r", par:"nep", disc:"Sicardy, B et al.", dyr:"1989",
   a:"62932km", e:"", i:"", per:"",
   mass:"", dia:"15km", rad:"15", thick:"2.15", opt:"0.12", len:"3",
   alb:"0.04",  comp:"dust:40..70", sdens:"", desc:"opa:0.65"},
farc:
  {name:"Fraternité Arc", other:"", desig:"", type:"r", par:"nep", disc:"Sicardy, B et al.", dyr:"1989",
   a:"62932km", e:"0", i:"", per:"",
   mass:"", dia:"15km", rad:"15", thick:"2.15", opt:"0.12", len:"9.6",
   alb:"",  comp:"dust:40..70", sdens:"", desc:"opa:0.65"},
//Haumea ring
haur:
  {name:"Ring", other:"", desig:"", type:"r", par:"hau", disc:"Ortiz et al.", dyr:"2017",
   a:"2287km", e:"", i:"0", per:"",
   mass:"", dia:"70km", rad:"70", thick:"", opt:"0.5",
   alb:"0.09", comp:"", sdens:"", desc:""},
//Quaoar ring
quaor:
  {name:"Ring", other:"", desig:"", type:"r", par:"qua", disc:"Morgado et al.", dyr:"2023",
   a:"4110km", e:"", i:"0", per:"",
   mass:"", dia:"", rad:"", thick:"", opt:"",
   alb:"", comp:"", sdens:"", desc:""}
};

var groups = {     //Groups & rings
  jup: {"Inner Moons":{t:"m",x:160000,y:-140},
        "Rings":{t:"r",x:1.3e5,y:24},
        "Galilean Moons":{t:"m",x:900000,y:-140},
        "4   :    2    :    1  Resonance ":{t:"n",x:1.07e6,y:24},
        "Themisto (P)":{x:7400000,i:37},
        "Pasiphae\nGroup (R)":{t:"m",x:4e7,i:25},
        "Himalia\nGroup (P)":{t:"m",x:1e7,i:18},
        "Carpo (P)":{t:"m",x:17078000,i:46},
        "Valetudo (P)":{t:"m",x:18928000,i:34},
        "Carme\nGroup (R)":{t:"m",x:3.7e7,i:10},
        "Ananke Group (R)":{t:"m",x:3e7,i:36}},
  sat: {"Inner Large Moons":{t:"m",x:294000,y:24},
        "E Ring":{t:"r",x:294000,y:-20},
        "Main Rings":{t:"r",x:0.9e5,y:-90,a:-45},
        "Ring Shepherds":{t:"m",x:1.14e5,y:-90,a:-45},
        "Tethis Trojans":{t:"m",x:295000,y:-100,a:-45},
        "Dione Trojans":{t:"m",x:377000,y:-100,a:-45},
        "Co-orbitals":{t:"m",x:161000,y:-100,a:-45},
        "Alkyonides":{t:"m",x:201000,y:-100,a:-45},
        "Outer Large Moons":{t:"m",x:1703000,y:-100},
        "Norse\nGroup (R)":{t:"m",x:4.3e7,i:12},
        "Gallic Group (P)":{t:"m",x:4.3e7,i:31},
        "Phoebe\nRing":{t:"r",x:9000000,i:28},
        "Inuit Group (P)":{t:"m",x:3.8e7,i:40}},
  ura: {"Inner Moons":{t:"m",x:70000,y:-120},
        "Rings":{t:"r",x:70000,y:-100},
        "Large Moons":{t:"m",x:300000,y:-120},
        "Irregular Moons (R)":{t:"m",x:10940000,y:-10},
        "Irregular Moon (P)":{t:"m",x:2e7,i:48}},
  nep: {"Regular Moons":{t:"m",x:70000,y:-120},
        "Rings":{t:"r",x:70000,y:-100},
        "Irregular Moons (R)":{t:"m",x:1940000,y:-110},
        "Irregular Moons (P)":{t:"m",x:2e7,y:-70}},
  sol: {"Terrestrial Planets":{t:"p",x:0.75,y:-54},
        "Giant Planets":{t:"p",x:13,y:-54},
        "Dwarf":{t:"d",x:2.8,y:-54},
        "Gas":{t:"p",x:7,y:-38},
        "Ice":{t:"p",x:24,y:-39},
        "Dwarfs":{t:"d",x:50,y:-54},
        "NEOs":{t:"an",x:0.35,y:110,a:-45},
        "Atiras":{t:"an",x:0.4,y:60,a:-45},
        "Atens":{t:"an",x:0.6,y:60,a:-45},
        "Apollos":{t:"an",x:0.8,y:60,a:-45},
        "Amors":{t:"an",x:1.1,y:60,a:-45},
        "Main Asteroid Belt":{t:"a",x:0.8,y:110,a:-45},
        "Hildas":{t:"a",x:1.5,y:110,a:-45},
        "Jupiter Trojans":{t:"a",x:2.0,y:110,a:-45},
        "Centaurs":{t:"a",x:8,y:100,a:-45},
        "TNOs":{t:"t",x:22,y:100,a:-45},
        "Plutinos":{t:"t",x:22,y:60,a:-45},
        "Cubewanos":{t:"t",x:28,y:60,a:-45},
        "Scattered Disk":{t:"t",x:50,y:70,a:-45},
        "Detached Objects":{t:"t",x:160,y:70,a:-45},
        "Oort Cloud":{t:"t",x:5e4,y:70,a:-45},
        "Main Belt\nComets":{t:"c",x:3.4,y:-75,a:-45},
        "Jupiter\nFamily":{t:"c",x:8,y:-75,a:-45},
        "Halley\nFamily":{t:"c",x:24,y:-75,a:-45},
        "Long Period\nComets":{t:"c",x:250,y:-70,a:-45},
        "Single\nApparition":{t:"c",x:1600,y:-75,a:-45},
        "Heliosheath":{t:"n",x:135,y:110,col:"#cc0"},
        "Termination Shock":{t:"n",x:160,y:121,col:"#cc0"},
        "Habitable Zone":{t:"n",x:0.3,y:-130,col:"#0a0"},
        "Frost Line":{t:"n",x:5.5,y:121,col:"#ccc"}
      }
};
  
/*
{name:"", other:"", desig:"", type:"", par:"", disc:"", dyr:"",
   a:"", e:"", i:"", per:"", rot:"", gr:"",
   h:"", mass:"", dia:"", rad:"", tilt:"",
   irad:"", alb:"", grav:"", hill:"",
   comp:"", dens:"", atm:"", atp:"", temp:""
   img:"", col:"", desc:"sc:1;url:"},
*/
//insol = P/4pi*r^2 = 
//hill = a curt(m/3M)
﻿/* global Common */

Common.lv = {
/*ctry: country, m:launch mass (kg), pm:payload leo/gto/ho (kg), d:height x diam (m), pf:payload h x d (m), dt:service period,
  st:stages, ust;upper stages, th:thrust (kN), fuel: fuel type, fam:lv family, desc:l:launch sites;ag;agency, icon:image
add: spec. impulse, manufact.
cz-8
*/
//Angara 5V
//"Angara-A5V": {ctry:"ru", m:"820000", pm:"35000/12000/7000",  d:"73.3x2.9", pf:"19.6x5.1", dt:"2023..", st:"3/4", ust:"KVTK/Briz-M", th:"10570", fam:"Angara", desc:"l:vos;ag:rosc", fuel:"KeroLOX", icon:"Angara-A5V.png"},
"Angara-A5": {ctry:"ru", m:"773000", pm:"24500/8000/5100",  d:"64x2.9", pf:"19.6x5.1", dt:"2014-12-23..", st:"2/4", ust:"KVTK/Persei", th:"9600", fam:"Angara", desc:"l:vos,ple;ag:rosc", fuel:"KeroLOX", icon:"Angara-A5.png"},
"Angara-A5M": {ctry:"ru", m:"780000", pm:"27000/8000/-", d:"59x2.9", pf:"", dt:"2024..", st:"2/4", ust:"KVTK/DM", th:"9600", fam:"Angara", desc:"l:vos;ag:rosc", fuel:"KeroLOX", icon:"Angara-A5M.png"},
"Angara-A5V": {ctry:"ru", m:"815000", pm:"37500/13300/7000", d:"73.3x2.9", pf:"19.6x5.1", dt:"2027..", st:"3/4", ust:"KVTK", th:"10570", fam:"Angara", desc:"l:vos,ple;ag:rosc", fuel:"KeroLOX", icon:"Angara-A5V.png"},
//Ariane 1
"Ariane 1": {ctry:"eu", m:"207200", pm:"-/1850/1000",  d:"50x3.8", pf:"x3.8", dt:"1979-12-24..1986-02-22", st:"3", th:"2462", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"UDMH/N2O4", icon:"Ariane-1.png"},
//Ariane 5, Ariane 5ECA, Ariane 5G, Ariane 5G+
"Ariane 5G": {ctry:"eu", m:"720000", pm:"18000/6900/3000",  d:"54.0x5.4", pf:"12.7x5.4", dt:"1996-04-06..2005-12-21", st:"2/2", th:"11400", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"LH2/LOX+SRP", icon:"Ariane-5.png"},
"Ariane 5G+": {syn:"Ariane 5G"},
"Ariane 5ECA": {ctry:"eu", m:"764000", pm:"21000/9600/5400",  d:"57.7x5.4", pf:"17x5.4", dt:"2002-12-11..", st:"2/2", th:"11400", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"LH2/LOX+SRP", icon:"Ariane-5.png"},
"Ariane 6": {syn:"Ariane 62"},
"Ariane 62": {ctry:"eu", m:"530000", pm:"11300/5000/2600",  d:"62x5.4", pf:"14-20x5.4", dt:"2022..", st:"2/2", ust:"ULPM/Astris", th:"8350", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"LH2/LOX+SRP", icon:"ariane62.png"},
"Ariane 64": {ctry:"eu", m:"860000", pm:"22300/11500/7600",  d:"62x5.4", pf:"20x5.4", dt:"2022..", st:"2/4", ust:"ULPM/Astris", th:"15350", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"LH2/LOX+SRP", icon:"ariane64.png"},
//Athena 2
"Athena 2": {ctry:"us", m:"120700", pm:"2065/593/300",  d:"28.2x2.3", pf:"x2.36", dt:"1998-01-07..1999-09-24", st:"3", th:"1450", fam:"MX", desc:"l:cap;ag:nasa", fuel:"SRP", icon:"Athena-2.png"},
//Atlas-D Able IV, Atlas-D Able V
"Atlas-D Able": {ctry:"us", m:"120000", pm:"-/-/180",  d:"35x3.05", pf:"", dt:"1959-09-24..1960-12-15", st:"2", ust:"Altair", th:"1629", fam:"Atlas", desc:"l:cap;ag:nasa,usaf", fuel:"KeroLOX", icon:"Atlas-Able.png"},
"Atlas-D Able IV": {syn:"Atlas-D Able"},
"Atlas-D Able V": {syn:"Atlas-D Able"},
//Atlas-LV3 Agena-B, Atlas-LV3 Agena-D, , Atlas-SLV3 Agena-D
"Atlas Agena": {ctry:"us", m:"130000", pm:"2300/800/340",  d:"32.1x3.05", pf:"", dt:"1960-02-26..1978-06-27", st:"2", ust:"", th:"1629", fam:"Atlas", desc:"l:cap;ag:nasa", fuel:"KeroLOX", icon:"Atlas-Agena.png"},
"Atlas-LV3 Agena-B": {syn:"Atlas Agena"},
"Atlas-LV3 Agena-D": {syn:"Atlas Agena"},
"Atlas-SLV3 Agena-D": {syn:"Atlas Agena"},
//Atlas-LV3C Centaur-C, Atlas-LV3C Centaur-D, Atlas-SLV3C Centaur-D, Atlas-SLV3D Centaur-D1A, Atlas-SLV3D Centaur-D1AR
"Atlas-LV3 Centaur": {ctry:"us", m:"136100", pm:"5000/1700/1000",  d:"33x3.05", pf:"10-12x3.3-4.2", dt:"1962-05-09..1967-07-14", st:"2", ust:"", th:"1629", fam:"Atlas", desc:"l:cap;ag:nasa", fuel:"KeroLOX", icon:"Atlas-LV-3C.png"},
"Atlas-LV3C Centaur-C": {syn:"Atlas-LV3 Centaur"},
"Atlas-LV3C Centaur-D": {syn:"Atlas-LV3 Centaur"},
"Atlas-SLV3 Centaur": {ctry:"us", m:"148400", pm:"5200/1800/1000",  d:"40.2x3.05", pf:"10-12x3.3-4.2", dt:"1967-09-08..1983-05-19", st:"2", ust:"Star-37E", th:"1740", fam:"Atlas", desc:"l:cap;ag:nasa", fuel:"KeroLOX", icon:"Atlas-SLV-3C.png"},
"Atlas-SLV3C Centaur-D": {syn:"Atlas-SLV3 Centaur"},
"Atlas-SLV3D Centaur-D1A": {syn:"Atlas-SLV3 Centaur"},
"Atlas-SLV3D Centaur-D1AR": {syn:"Atlas-SLV3 Centaur"},
//Atlas IIAS
"Atlas IIAS": {ctry:"us", m:"204300", pm:"8618/3719/2700",  d:"47.54x3.05", pf:"10-12x3.3-4.2", dt:"1993-12-16..2004-08-31", st:"2/4", ust:"", th:"3800", fam:"Atlas", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Atlas-IIAS.png"},
//Atlas V 401, Atlas V 411, Atlas V 541, Atlas V 551
"Atlas V 401": {ctry:"us", m:"333320", pm:"9800/4750/3700",  d:"58.3x3.81", pf:"12-13.8x4.2", dt:"2002-08-21..", st:"2/0", ust:"", th:"4152", fam:"Atlas", desc:"l:cap;van;ag:nasa", fuel:"KeroLOX", icon:"Atlas-V401.png"},
"Atlas V 411": {ctry:"us", m:"374120", pm:"12030/5950/4500",  d:"58.3x3.81", pf:"12-13.8x4.2", dt:"2006-04-20..", st:"2/1", ust:"", th:"5422", fam:"Atlas", desc:"l:cap;van;ag:nasa", fuel:"KeroLOX+SRP",  icon:"Atlas-V411.png"},
"Atlas V 541": {ctry:"us", m:"522330", pm:"17410/8290/6300",  d:"62.2x3.81", pf:"20.7-23.5x5.4", dt:"2011-11-26..", st:"2/4", ust:"", th:"9232", fam:"Atlas", desc:"l:cap;van;ag:nasa", fuel:"KeroLOX+SRP",  icon:"Atlas-V500.png"},
"Atlas V 551": {ctry:"us", m:"568590", pm:"18850/8900/6700",  d:"62.2x3.81", pf:"20.7-23.5x5.4", dt:"2006-01-19..", st:"2/5", ust:"Star-48B", th:"10502", fam:"Atlas", desc:"l:cap;van;ag:nasa", fuel:"KeroLOX+SRP",  icon:"Atlas-V500.png"},
//CZ-2C
"CZ-2C": {n:"Long March 2C", alt:"长征二号丙", ctry:"cn", m:"245000", pm:"3850/1250/500",  d:"43.0x3.35", pf:"x3.35", dt:"1975-11-26..", st:"2", ust:"SM/SMA", th:"2962", fam:"Long March", desc:"l:xch,jiu,tai;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-2C.png"},
//CZ-3A, CZ-3B, CZ-3C
"CZ-3A": {n:"Long March 3A", alt:"长征三号甲", ctry:"cn", m:"241000", pm:"7200/2650/1420",  d:"52.5x3.35", pf:"8.9x3.35", dt:"1994-02-08..", st:"3", th:"2962", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3A.png"},
"CZ-3B": {n:"Long March 3B", alt:"长征三号乙", ctry:"cn", m:"425800", pm:"13500/5100/3300",  d:"54.8x3.35", pf:"9.6x4.0", dt:"1996-02-14..", st:"3/4", th:"5923", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3B.png"},
"CZ-3B G3Z": {n:"Long March 3B/G3Z", alt:"长征三号乙", ctry:"cn", m:"458000", pm:"14000/5500/3400",  d:"56.3x3.35", pf:"9.6x4.2", dt:"2013-12-01..", st:"3/4", th:"5923", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3B.png"},
"CZ-3C": {n:"Long March 3C", alt:"长征三号丙", ctry:"cn", m:"345000", pm:"9100/3800/2300",  d:"54.8x3.35", pf:"9.6x4.0", dt:"2008-04-25..", st:"3/2", th:"4443", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3C.png"},
"CZ-3C G2": {n:"Long March 3C/G3", alt:"长征三号丙", ctry:"cn", m:"377000", pm:"9400/3900/2400",  d:"56.3x3.35", pf:"9.6x4.2", dt:"2014-10-23..", st:"3/2", th:"4443", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3C.png"},
//CZ-4B
"CZ-4B": {n:"Long March 4B", alt:"长征四号乙火箭", ctry:"cn", m:"249200", pm:"4200/1500/1000",  d:"45.8x3.35", pf:"x3.35", dt:"1999-05-10..", st:"3", ust:"", th:"2962", fam:"Long March", desc:"l:jiu,tai;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-4B.png"},
//CZ-5
"CZ-5": {n:"Long March 5", alt:"长征五号", ctry:"cn", m:"867000", pm:"25000/14000/8200",  d:"62x5", pf:"12x5.2", dt:"2016-11-06..", st:"2/4", ust:"Yuanzheng", th:"12116", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"LH2/LOX+KeroLOX", icon:"CZ-5.png"},
"CZ-5B": {n:"Long March 5B", alt:"长长征五号乙", ctry:"cn", m:"837500", pm:"23000/-/-",  d:"53.7x5", pf:"12-20.5x5.2", dt:"2020-05-05..", st:"1/4", ust:"", th:"12116", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"LH2/LOX+KeroLOX", icon:"CZ-5B.png"},
//CZ-6, CZ-6A
//CZ-7, CZ-7A
"CZ-7": {n:"Long March 7", alt:"长征七号运载火箭", ctry:"cn", m:"594000", pm:"13500/5500/-", d:"53.1x3.35", pf:"12.7x4.2", dt:"2016-06-24..", st:"2/4", ust:"YZ-1A", th:"7200", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"KeroLOX", icon:"CZ-7.png"},
"CZ-7A": {n:"Long March 7A", alt:"长征七号运载火箭", ctry:"cn", m:"620000", pm:"-/7000/-", d:"60.1x3.35", pf:"12.7x4.2", dt:"2020-03-16..", st:"3/4", ust:"H-18", th:"7200", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"KeroLOX+LH2/LOX", icon:"CZ-7A.png"},
//CZ-8
"CZ-8": {n:"Long March 8", alt:"长征八号", ctry:"cn", m:"356000", pm:"8100/2800/-", d:"50.3x3.35", pf:"12.7x4.2", dt:"2020-12-22..", st:"2/2", ust:"YZ-1A", th:"4800", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"KeroLOX", icon:"CZ-8.png"},
//CZ-9
"CZ-9": {n:"Long March 9", alt:"长征九号运载火箭", ctry:"cn", m:"4369000", pm:"150k/70k/54k", d:"114x10.6", pf:"?x10", dt:"2033..", st:"3", ust:"", th:"58840", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"MethaLOX", icon:"CZ-9.png"},
//CZ-10
"CZ-10": {n:"Long March 10", alt:"长征五号登月", ctry:"cn", m:"218700", pm:"70k/-/27k", d:"90x5", pf:"", dt:"2027..", st:"3/2", ust:"", th:"25200", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"KeroLOX", icon:"cz-10.png"},
"CZ-10A": {n:"Long March 10A", alt:"", ctry:"cn", m:"750000", pm:"18k//", d:"86x5", pf:"", dt:"2030..", st:"2", ust:"", th:"", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"KeroLOX", icon:"cz-10a.png"},
//"CZ-X": {n:"Long March X", alt:"长征X号运载火箭", ctry:"cn", m:"2211000", pm:"70k//25k", d:"90x5", pf:"", dt:"2025..", st:"3/2", ust:"", th:"25200", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"KeroLOX", icon:"CZ-X.png"},
//CZ-11
"CZ-11": {n:"Long March 11", alt:"长征十一号运载火箭", ctry:"cn", m:"58000", pm:"700/-/-", d:"20.8x2", pf:"", dt:"2015-09-25..", st:"4", ust:"", th:"1188", fam:"Long March", desc:"l:jiu;ag:cnsa", fuel:"SRP", icon:"cz-11.png"},
//Delta E, Delta E1
"Delta E": {ctry:"us", m:"68000", pm:"530/240/150",  d:"28x2.44", pf:"", dt:"1965-11-06..1971-04-01", st:"3/3", ust:"X-258/FW-4D", th:"1450", fam:"Thor/Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-E.png"},
"Delta E1": {syn:"Delta E"},
//Delta L
"Delta L": {ctry:"us", m:"89900", pm:"-/300/150",  d:"34x2.44", pf:"", dt:"1969-08-27..1972-01-31", st:"3/3", ust:"FW-4D", th:"1590", fam:"Thor/Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-L.png"},
//Delta 1913
"Delta 1913": {ctry:"us", m:"130000", pm:"-/-/330",  d:"35x2.44", pf:"", dt:"1973-06-10", st:"2/9", ust:"Star-37D", th:"2410", fam:"Delta", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-1913.png"},
//Delta 2914
"Delta 2914": {ctry:"us", m:"130400", pm:"2000/724/470",  d:"35x2.44", pf:"", dt:"1974-04-13..1979-08-10", st:"2/9", ust:"Star-37E", th:"2560", fam:"Delta", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-2914.png"},
//Delta II 7326-9.5
"Delta II 7326": {ctry:"us", m:"155000", pm:"2800/934/630",  d:"38.4x2.44", pf:"8.5-9.3x3.0", dt:"1998-10-24..2001-08-08", st:"2/3", ust:"Star-37FM", th:"2500", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7326.png"},
"Delta II 7326-9.5": {syn:"Delta II 7326"},
//Delta II 7425-9.5
"Delta II 7425": {ctry:"us", m:"170000", pm:"3150/1110/804",  d:"39x2.44", pf:"8.5-9.3x3.0", dt:"1998-12-11..2002-07-03", st:"2/4", ust:"Star-48B", th:"3020", fam:"Delta", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7425.png"},
"Delta II 7425-9.5": {syn:"Delta II 7425"},
//Delta II 7426-9.5
"Delta II 7426": {ctry:"us", m:"170000", pm:"3150/1058/711",  d:"39x2.44", pf:"8.5-9.3x3.0", dt:"1999-02-07", st:"2/4", ust:"Star-37FM", th:"3020", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7426.png"},
"Delta II 7426-9.5": {syn:"Delta II 7426"},
//Delta II 7920-8
"Delta II 7920": {ctry:"us", m:"220000", pm:"4500/1750/790", d:"39x2.44", pf:"8.5-9.3x3.0", dt:"1995-11-04..2018-09", st:"2/9", ust:"", th:"4000", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7925.png"},
"Delta II 7920-8": {syn:"Delta II 7920"},
//Delta II 7920H-10
"Delta II 7920H": {ctry:"us", m:"283000", pm:"5500/2100/930",  d:"39x2.44", pf:"8.5-9.3x3.0", dt:"2003-08-25..2011-09-10", st:"2/9", ust:"", th:"5030", fam:"Delta", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7920H.png"},
"Delta II 7920H-10": {syn:"Delta II 7920H"},
//Delta II 7925, Delta II 7925-10, Delta II 7925-10C, Delta II 7925-10L, Delta II 7925-8, Delta II 7925-9.5
"Delta II 7925": {ctry:"us", m:"2300000", pm:"5000/1820/1250",  d:"39x2.44", pf:"8.5-9.3x3.0", dt:"1990-11-26..2009-08-17", st:"2/9", ust:"Star-48B", th:"4000", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7925.png"},
"Delta II 7925-10": {syn:"Delta II 7925"},
"Delta II 7925-10C": {syn:"Delta II 7925"},
"Delta II 7925-10L": {syn:"Delta II 7925"},
"Delta II 7925-8": {syn:"Delta II 7925"},
"Delta II 7925-9.5": {syn:"Delta II 7925"},
//Delta II 7925H-9.5
"Delta II 7925H": {ctry:"us", m:"283000", pm:"6000/2170/1510",  d:"39.7x2.44", pf:"8.5-9.3x3.0", dt:"2003-07-08..2007-09-27", st:"2/9", ust:"Star-48B", th:"5030", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7925H.png"},
"Delta II 7925H-9.5": {syn:"Delta II 7925H"},
//Delta 4H
"Delta IV Heavy": {ctry:"us", m:"732000", pm:"23040/13100/9000",  d:"63x5.1", pf:"19.8x5.1", dt:"2004-12-21..", st:"2/2", ust:"Star-48", th:"9420", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"LH2/LOX", icon:"Delta-4H_Orion.png"},
//Electron
"Electron": {ctry:"us", m:"13000", pm:"300/-/-",  d:"18x1.2", pf:"2.5x1.2-1.7", dt:"2017-05-25..", st:"2", ust:"Photon", th:"225", fam:"Electron", desc:"l:mah,wal;ag:Rocket Lab", fuel:"KeroLOX", icon:"electron.png"},
//Epsilon
"Epsilon": {ctry:"jp", m:"91000", pm:"1200/-/-",  d:"24.4x2.5", pf:"", dt:"2013-09-14..", st:"3", ust:"CLPS", th:"2271", fam:"Epsilon", desc:"l:uch;ag:jaxa", fuel:"SRP", icon:"epsilon1.png"},
//Epsilon
"Epsilon-2": {ctry:"jp", m:"96100", pm:"1500/-/500",  d:"26.0x2.5", pf:"", dt:"2016-12-20..", st:"3", ust:"CLPS", th:"2271", fam:"Epsilon", desc:"l:uch;ag:jaxa", fuel:"SRP", icon:"epsilon2.png"},
//Falcon 9
"Falcon 9 v1.1": {ctry:"us", m:"506000", pm:"13150/4850/2473",  d:"69.2x3.65", pf:"13.1x5.2", dt:"2010-06-04..", st:"2", th:"5886", fam:"Falcon", desc:"l:cap,van;ag:spx", fuel:"KeroLOX", icon:"falcon-9v11.png"},
"Falcon 9 v1.2": {ctry:"us", m:"549100", pm:"22800/8300/4020",  d:"70x3.65", pf:"13.1x5.2", dt:"2015-12-21..", st:"2", th:"7686", fam:"Falcon", desc:"l:cap,van;ag:spx", fuel:"KeroLOX+SRP", icon:"falcon-9v12.png"},
"Falcon 9": {syn:"Falcon 9 v1.2"},
"Falcon Heavy": {ctry:"us", m:"1420800", pm:"63800/26700/16800",  d:"70.0x3.65", pf:"15.0x5.2", dt:"2018-02-06..", st:"2/2", th:"2358", fam:"Falcon", desc:"l:cap,van;ag:spx", fuel:"KeroLOX+SRP", icon:"falcon-h.png"},
//GSLV 2
"GSLV MkII": {n:"Geosynchronous Satellite Launch Vehicle Mk. II", alt:"भूस्थिर उपग्रह प्रक्षेपण यान", ctry:"ind", m:"402000", pm:"5000/2500/1300",  d:"49x2.8", pf:"", dt:"2010-04-15..", st:"2/4", ust:" CUS12", th:"7420", fam:"GSLV", desc:"l:sri;ag:isro", fuel:"SRP+UDMH/N2O4", icon:"gslv-mk2.png"},
"GSLV MkIII": {n:"Geosynchronous Satellite Launch Vehicle Mk. III", alt:"भूस्थिर उपग्रह प्रक्षेपण यान-३", ctry:"ind", m:"640000", pm:"10000/4000/2300",  d:"43.4x4", pf:"4.5", dt:"2014-12..", st:"2/2", ust:"C-25", th:"11300", fam:"GSLV", desc:"l:sri;ag:isro", fuel:"UDMH/N2O4+SRP", icon:"gslv-mk3.png"},
//H-IIA 202, H-IIA 2022
"H-IIA 202": {ctry:"jp", m:"289000", pm:"10000/4100/1600",  d:"53x4", pf:"12x5.1", dt:"2001-08-29..", st:"2/2", th:"5600", fam:"H-II", desc:"l:tng;ag:jaxa", fuel:"LH2/LOX+SRP", icon:"H2A-202.png"},
"H-IIA 2022": {ctry:"jp", m:"348000", pm:"-/5000/2000",  d:"53x4", pf:"12x5.1", dt:"2005-02-26..2007-09-14", st:"2/4", th:"8580", fam:"H-II", desc:"l:tng;g:jaxa", fuel:"LH2/LOX+SRP", icon:"H2A-2022.png"},
"H-IIA": {syn:"H-IIA 202"},
"H-IIB": {ctry:"jp", m:"531000", pm:"19000/8000/4000",  d:"56.6x5.2", pf:"13x5.2", dt:"2009-09-10..", st:"2/4", th:"11200", fam:"H-II", desc:"l:tng;ag:jaxa", fuel:"LH2/LOX+SRP", icon:"H2B.png"},
"H-III": {syn:"H-III 24L"},
"H-III 30S": {ctry:"jp", m:"353000", pm:"3000/2100/-",  d:"58x5.27", pf:"11x5.3", dt:"2024..", st:"2", th:"4413", fam:"H-III", desc:"l:tng;ag:jaxa", fuel:"LH2/LOX+SRP", icon:"h3-30s.png"},
"H-III 22S": {ctry:"jp", m:"440000", pm:"5000/4000/-",  d:"58x5.27", pf:"11x5.3", dt:"2023-03-06..", st:"2/2", th:"7260", fam:"H-III", desc:"l:tng;ag:jaxa", fuel:"LH2/LOX+SRP", icon:"h3-22s.png"},
"H-III 22L": {ctry:"jp", m:"497000", pm:"-/4200/-",  d:"63x5.27", pf:"16x5.3", dt:"2024..", st:"2/2", th:"8732", fam:"H-III", desc:"l:tng;ag:jaxa", fuel:"LH2/LOX+SRP", icon:"h3-22l.png"},
"H-III 24L": {ctry:"jp", m:"574000", pm:"-/6500/-",  d:"63x5.27", pf:"16x5.3", dt:"2024..", st:"2/4", th:"11576", fam:"H-III", desc:"l:tng;ag:jaxa", fuel:"LH2/LOX+SRP", icon:"h3-24l.png"},
//Juno II
"Juno II": {ctry:"us", m:"55300", pm:"50/-/6",  d:"23.4x2.67", pf:"", dt:"1958-12-06..1961-05-24", st:"4", th:"667", fam:"Jupiter", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Juno-2.png"},
//KSLV-II
"KSLV-II": {n:"Nuri:누리", ctry:"sk", m:"200000", pm:"2600/-/500",  d:"47.2x3.5", pf:"", dt:"2022..", st:"3", th:"2612", fam:"KSLV", desc:"l:nar;ag:kari", fuel:"KeroLOX", icon:"kslv-2.png"},
//LVM3
"LVM3": {n:"Launch Vehicle Mk. III", alt:"भूस्थिर उपग्रह प्रक्षेपण यान-३", ctry:"ind", m:"642000", pm:"10000/3895/2300",  d:"43.5x4", pf:"5", dt:"2017-06..", st:"2/2", ust:"C-25", th:"11300", fam:"GSLV", desc:"l:sri;ag:isro", fuel:"UDMH/N2O4+SRP", icon:"gslv-mk3.png"},
//M-3SII
"M-3SII": {alt:"ミュ-3SII", ctry:"jp", m:"61700", pm:"800/-/140",  d:"27.8x1.41", pf:"", dt:"1985-01-07..1995-01-15", st:"3/2", th:"1930", fam:"Mu", desc:"l:uch;ag:jaxa", fuel:"SRP", icon:"M-3-SII.png"},
//M-V
"M-V": {alt:"ミュ-V", ctry:"jp", m:"139000", pm:"1800/-/500",  d:"30.7x2.5", pf:"", dt:"1997-02-12..2006-09-22", st:"3", th:"3786", fam:"M-V", desc:"l:uch;ag:jaxa", fuel:"SRP", icon:"M-V.png"},
//Minotaur V
"Minotaur V": {ctry:"us", m:"36200", pm:"1735/670/460",  d:"23.9x2.35", pf:"", dt:"2013-09-07..", st:"5", th:"1600", fam:"MX", desc:"l:wal;ag:nasa", fuel:"SRP", icon:"Minotaur-V.png"},
//Molniya 8K78/Blok-L, Molniya 8K78L/Blok-L, Molniya 8K78M/Blok-L, Molniya 8K78M/Blok-MVL
"Molniya 8K78": {alt:"Молния", ctry:"su", m:"306000", pm:"4000/2000/1400",  d:"44x2.95", pf:"", dt:"1960-01-20..2010-09-30", st:"2/4", ust:"Blok-L/M", th:"4054", fam:"R-7", desc:"l:bai,ple;ag:lav", fuel:"KeroLOX", icon:"Molniya.png"},
"Molniya 8K78L": {syn:"Molniya 8K78"},
"Molniya 8K78M": {syn:"Molniya 8K78"},
//N-1
"N-1": {alt:"Н-1", ctry:"su", m:"2788000", pm:"70000/-/22000",  d:"105.3x14", pf:"", dt:"1969-02-21..1972-12-23", st:"4", th:"45400", fam:"N-1", desc:"l:bai;ag:tsk", fuel:"KeroLOX", icon:"N1.png"},
//Neutron
"Neutron": {ctry:"us", m:"480000", pm:"8000/-/1500",  d:"40x7", pf:"7", dt:"2024..", st:"2", ust:"", th:"5960", fam:"Neutron", desc:"l:wal;ag:Rocket Lab", fuel:"MethaLOX", icon:"neutron.png"},
//New Glenn
"New Glenn": {alt:"", ctry:"us", m:"", pm:"45000/13000/-",  d:"98x7", pf:"", dt:"2024-09", st:"2", th:"17100", fam:"", desc:"l:cap,van;ag:Blue Origin", fuel:"MethaLOX", icon:"newglenn.png"},
//OmegA
/*"OmegA": {syn:"OmegA Intermediate"},
"OmegA Intermediate": {n:"", alt:"", ctry:"us", m:"", pm:"~30000/4900..10100/-", d:"59.8x3.7", pf:"5.3x15", dt:"2021..", st:"3/2-6", th:"12000", fam:"OmegA", desc:"ag:atk", fuel:"SRP/LH2+LOX", icon:"omega500.png"},*/
//Pegasus-XL
"Pegasus-XL": {n:"", alt:"", ctry:"us", m:"23269", pm:"475/175/-",  d:"17.6x6.7", pf:"2.2x1.27", dt:"1990-04-05..", st:"3/L-1011", th:"726", fam:"Pegasus", desc:"ag:atk", fuel:"SRP", icon:"pegasus-xl.png"},
//PSLV-XL
"PSLV-XL": {n:"Polar Satellite Launch Vehicle", alt:"पी.एस.एल.वी-XL", ctry:"ind", m:"230000", pm:"3800/1300/720",  d:"44.4x2.8", pf:"", dt:"2008-10-22..", st:"4/6", th:"9230", fam:"PSLV", desc:"l:sri;ag:isro", fuel:"SRP", icon:"PSLV-XL.png"},
//Proton K/Blok-DM3, Proton-K/Blok-D, Proton-K/Blok-D1, Proton-K/Blok-D2, Proton-M/Briz-M
"Proton-K": {alt:"Протон-К", ctry:"su,ru", m:"691500", pm:"19760/5000/4800",  d:"55.4x7.4", pf:"4.2-7.5x4.1", dt:"1967-03-10..2012-03-30", st:"3", ust:"Blok-D", /*ust:"Blok-D/D1/D2/DM3",*/ th:"9500", fam:"Proton", desc:"l:bai,ple;ag:lav,rosc", fuel:"UDMH/N2O4", icon:"Proton-K.png"},
"Proton-M": {alt:"Протон-М", ctry:"ru", m:"712800", pm:"21600/6350/5650",  d:"58.2x7.4", pf:"9.5-15.8x4.35", dt:"2001-04-07..", st:"3", ust:"Briz-M", th:"11000", fam:"Proton", desc:"l:bai,ple;ag:rosc", fuel:"UDMH/N2O4", icon:"Proton-M.png"},
//Saturn I
"Saturn I": {ctry:"us", m:"510000", pm:"9000/-/2200",  d:"55x6.52", pf:"", dt:"1961-10-27..1965-07-30", st:"2", th:"6700", fam:"Saturn", desc:"l:cc;ag:nasa", fuel:"KeroLOX+LH2/LOX", icon:"Saturn-I.png"},
"Saturn IB": {ctry:"us", m:"587300", pm:"18600/-/-",  d:"68.1x6.53", pf:"", dt:"1966-02-26..1975-07-15", st:"2", th:"7290", fam:"Saturn", desc:"l:ksc;ag:nasa", fuel:"KeroLOX+LH2/LOX", icon:"Saturn-IB.png"},
//Saturn V
"Saturn V": {ctry:"us", m:"2913000", pm:"118000/-/47000",  d:"110.6x10.1", pf:"", dt:"1967-11-09..1973-05-14", st:"3", th:"34030", fam:"Saturn", desc:"l:ksc;ag:nasa", fuel:"KeroLOX+LH2/LOX", icon:"Saturn-V.png"},
//Scout G1
"Scout": {syn:"Scout G1"},
"Scout G1": {n:"Scout G1", ctry:"us", m:"21500", pm:"220/-/-", d:"23x1.1", pf:"", dt:"1979-10-30..1994-05-09", st:"4", ust:"", th:"465", fam:"Scout", desc:"l:van;ag:nasa", fuel:"SRP", icon:"scout.png"},
//SLS
"SLS": {syn:"SLS 1"},
"SLS 1": {n:"Space Launch System Block 1", ctry:"us", m:"2750000", pm:"70k/30k/26k", d:"98.1x8.4", pf:"8.4x14.3-19.1", dt:"2020..", st:"2/2", ust:"iCPS", th:"39150", fam:"SLS", desc:"l:cap;ag:nasa", fuel:"LH2/LOX+SRP", icon:"sls-1.png"},
"SLS 1B": {n:"Space Launch System Block 1B", ctry:"us", m:"2850000", pm:"105k/46k/37k",  d:"110.9x8.4", pf:"8.4x14.3-19.1", dt:"2024..", st:"2/2", ust:"EUS", th:"39150", fam:"SLS", desc:"l:cap;ag:nasa", fuel:"LH2/LOX+SRP", icon:"sls-1b.png"},
"SLS 2": {n:"Space Launch System Block 2", ctry:"us", m:"2950000", pm:"130k/52k/45k", d:"111.6x8.4", pf:"8.4-10x14.3-27.4", dt:"2028..", st:"2/2", ust:"EUS", th:"52900", fam:"SLS", desc:"l:cap;ag:nasa", fuel:"LH2/LOX+SRP?", icon:"sls-2.png"},
//Soyuz 2.1a, Soyuz 2.1b, Soyuz-FG Fregat, Soyuz 2-1A Volga
"Soyuz 2.1": {alt:"Союз 2.1", ctry:"ru,eu", m:"313000", pm:"7600/3000/2200",  d:"46.3x2.95", pf:"", dt:"2006-10-19..", st:"2/4", ust:"Fregat/Volga", th:"4146", fam:"R-7", desc:"l:bai,ple,kou;ag:rosc,esa", fuel:"KeroLOX", icon:"Soyuz-ST.png"},
"Soyuz 2.1A": {syn:"Soyuz 2.1"},
"Soyuz 2.1B": {syn:"Soyuz 2.1"},
"Soyuz STA": {syn:"Soyuz 2.1"},
"Soyuz STB": {syn:"Soyuz 2.1"},
"Soyuz-FG": {alt:"Союз-ФГ", ctry:"ru", m:"308000", pm:"7200/2400/1200",  d:"49x2.95", pf:"", dt:"2003-06-02..2012-07-22", st:"2/4", ust:"Fregat", th:"4146", fam:"R-7", desc:"l:bai", fuel:"KeroLOX", icon:"Soyuz-FG.png"},
"Soyuz-5": {alt:"Soyuz-5:Союз-5", ctry:"ru", m:"530000", pm:"17000/5000/2300",  d:"65.9x4.1", pf:"", dt:"2024", st:"2", ust:"Korvet", th:"7257", fam:"", desc:"l:bai", fuel:"KeroLOX", icon:"soyuz-5.png"},
//Soyuz-6,9t leo/2.3t gto;2025
//Stardhip/Superheavy
"Starship": {n:"Starship", ctry:"us", m:"5000000", pm:"100K/21K/*",  d:"122x9", pf:"18x9", dt:"2021..", st:"2", ust:"", th:"62900", fam:"", desc:"l:ksc,boc;ag:SpX", fuel:"MethaLOX", icon:"bfr.png"},
//STK;Yenisei;Енисей;100t leo;2028; Don 3281t, 140t leo, 29.5t geo, 33t ip
"Yenisei": {n:"Yenisei", alt:"Енисей", ctry:"ru", m:"3167000", pm:"100K/26K/27K",  d:"80x4.1", pf:"", dt:"2028..", st:"2", ust:"KVTK", th:"43536", fam:"", desc:"l:vos;ag:rosc", fuel:"KeroLOX", icon:"yenisei.png"},
//STS-30 Atlantis/IUS, STS-34 Atlantis/IUS, STS-41 Discovery/PAM-S
"STS": {n:"Space Shuttle", ctry:"us", m:"2040000", pm:"24400/4944/3550",  d:"56x23.8", pf:"18.3x4.6", dt:"1981-04-12..2011-07-08", st:"1/2", ust:"IUS/PAM-S", th:"28200", fam:"STS", desc:"l:ksc;ag:nasa", fuel:"LH2/LOX+SRP", icon:"STS.png"},
"STS-30 Atlantis": {syn:"STS"},
"STS-34 Atlantis": {syn:"STS"},
"STS-41 Discovery": {syn:"STS"},
//Thor-Able I, Thor-Able IV
"Thor-Able": {ctry:"us", m:"52000", pm:"100/-/40",  d:"27x2.44", pf:"", dt:"1958-04-24..1960-04-01", st:"3", th:"700", fam:"Thor/Delta", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Thor-Able.png"},
"Thor-Able I": {syn:"Thor-Able"},
"Thor-Able IV": {syn:"Thor-Able"},
//Titan 401B-Centaur T, Titan IIG, Titan III/TOS, Titan IIIE-Centaur D1T
"Titan 401B Centaur T": {ctry:"us", m:"939000", pm:"21900/9000/8600",  d:"62.2x3.05", pf:"17-26x4.5", dt:"1997-10-15..2003-09-09", st:"3/2", ust:"", th:"15000", fam:"Titan", desc:"l:cap;ag:nasa", fuel:"A50/N2O4+SRP", icon:"Titan-4B.png"},
"Titan IIG": {ctry:"us", m:"150000", pm:"3600/-/1000",  d:"32.8x3.05", pf:"", dt:"1988-09-05..2003-10-18", st:"2", ust:"Star-37FM", th:"2090", fam:"Titan", desc:"l:van;ag:nasa,usn", fuel:"A50/N2O4", icon:"Titan-23G.png"},
"Titan III": {ctry:"us", m:"680000", pm:"14742/4990/4000",  d:"47.3x3.05", pf:"12.4-16x3.6", dt:"1990-01-01..1992-09-25", st:"2/2", ust:"TOS", th:"12450", fam:"Titan", desc:"l:cap;ag:nasa", fuel:"A50/N2O4+SRP", icon:"Titan-3.png"},
"Titan IIIE Centaur D1T": {ctry:"us", m:"633000", pm:"17000/6800/5000",  d:"48.8x3.05", pf:"17.8x3.7", dt:"1974-02-12..1977-09-05", st:"3/2", ust:"Star-37E", th:"10600", fam:"Titan", desc:"l:cap;ag:nasa", fuel:"A50/N2O4+SRP", icon:"Titan-3E.png"},
//Vega
"Vega": {alt:"", ctry:"eu", m:"139000", pm:"2300/-/",  d:"30x3", pf:"7.9x2.6", dt:"2012-02-13..", st:"3", ust:"AVUM", th:"2261", fam:"Vega", desc:"l:kou;ag:esa", fuel:"SRP", icon:"vega.png"},
//Vega-C
"Vega-C": {alt:"", ctry:"eu", m:"210000", pm:"3300/-/",  d:"35x3.4", pf:"9.3x3.3", dt:"2021-06..", st:"3", ust:"AVUM+", th:"4323", fam:"Vega", desc:"l:kou;ag:esa", fuel:"SRP", icon:"vega-c.png"},
//Vostok-L 8K72
"Vostok-L 8K72": {alt:"Восток-Л", ctry:"su", m:"279100", pm:"4000/-/400",  d:"33.5x2.95", pf:"", dt:"1958-09-23..1960-04-16", st:"1/4", ust:"Blok-E", th:"3998", fam:"R-7", desc:"l:bai;ag:okb", fuel:"KeroLOX", icon:"Luna.png"},
// Vulcan
"Vulcan": {syn:"Vulcan Centaur"},
"Vulcan Centaur": {ctry:"us", m:"226300", pm:"10600/2900/2300",  d:"67.3x5.4", pf:"15.5-21.3x5.4", dt:"2024-01-08..", st:"2", ust:"Centaur-5", th:"4900", fam:"Vulcan", desc:"l:cap;van;ag:nasa", fuel:"MethaLOX+SRP",  icon:"vulcan502.png"},
"Vulcan Centaur-2S": {syn:"Vulcan Centaur-2"},
"Vulcan Centaur-2L": {syn:"Vulcan Centaur-2"},
"Vulcan Centaur-2": {ctry:"us", m:"333100", pm:"18500/7600/6300",  d:"67.3x5.4", pf:"15.5-21.3x5.4", dt:"2022-01..", st:"2/2", ust:"Centaur-5", th:"9300", fam:"Vulcan", desc:"l:cap;van;ag:nasa", fuel:"MethaLOX+SRP",  icon:"vulcan522.png"},
"Vulcan Centaur-4": {ctry:"us", m:"439900", pm:"23900/10800/9000",  d:"67.3x5.4", pf:"15.5-21.3x5.4", dt:"2022..", st:"2/4", ust:"Centaur-5", th:"13700", fam:"Vulcan", desc:"l:cap;van;ag:nasa", fuel:"MethaLOX+SRP",  icon:"vulcan542.png"},
"Vulcan Centaur-4S": {syn:"Vulcan Centaur-4"},
"Vulcan Centaur-4L": {syn:"Vulcan Centaur-4"},
"Vulcan Centaur-6": {ctry:"us", m:"546700", pm:"27200/13600/11300",  d:"67.3x5.4", pf:"15.5-21.3x5.4", dt:"2022..", st:"2/6", ust:"Centaur-5", th:"18110", fam:"Vulcan", desc:"l:cap;van;ag:nasa", fuel:"MethaLOX+SRP",  icon:"vulcan562.png"},
"Vulcan Centaur-6S": {syn:"Vulcan Centaur-6"},
"Vulcan Centaur-6L": {syn:"Vulcan Centaur-6"},
"Vulcan Centaur Heavy": {ctry:"us", m:"560000", pm:"27200/14400/12100",  d:"69.2x5.4", pf:"21.3x5.4", dt:"2021..", st:"2/6", ust:"Centaur-5 Long", th:"18110", fam:"Vulcan", desc:"l:cap;van;ag:nasa", fuel:"MethaLOX+SRP",  icon:"vulcan562.png"},
//Zenit 2SB
"Zenit 2SB": {alt:"Зенит-2SLБ", ctry:"ru", m:"459000", pm:"13500/5200/2000",  d:"57x3.9", pf:"", dt:"2007-06-29..", st:"2", ust:"Fregat-SB", th:"7259", fam:"Zenit", desc:"l:bai", fuel:"KeroLOX", icon:"Zenit-2.png"},
"Zenit 2M": {syn:"Zenit 2SB"}
};
/* global Common */

Common.lc = {
ksc: {name:"Cape Canaveral:Kennedy Space Center", ctry:"us", desig:"KSC:Kennedy Space Center", desc:"url:www.nasa.gov/centers/kennedy/home/index.html;loc:28.585N,80.650W;show:KSC:NW;shmap:NW;reg:Florida, USA;az:35..120;kml:zgUqCFI4a2eQ.kYxmouB-sIvs", map:"ksc.png"},
cap: {name:"Cape Canaveral:Cape Canaveral Space Force Station", other:"Eastern Range", ctry:"us", desig:"CCSFS:Cape Canaveral Space Force Station", desc:"url:www.patrick.af.mil/;loc:28.489N,80.578W;show:CCAFS:SW;reg:Florida, USA;x:168;y:96;az:35..120;kml:zgUqCFI4a2eQ.kJnvBYGeXpBY", map:"ccafs.png"},
van: {name:"Vandenberg:Vandenberg Air Force Base", other:"Western Range", ctry:"us", desig:"VAFB:Vandenberg Air Force Base", desc:"url:www.vandenberg.af.mil/;loc:34.7328N,120.5681W;show:VAFB:SW;shmap:W;reg:California, USA;x:192;y:96;az:147..235;kml:zgUqCFI4a2eQ.kXXtLBJrPZRY", map:"vafb.png"},
wal: {name:"Wallops Island:Mid-Atlantic Regional Spaceport", other:"Wallops Island Flight Facility", ctry:"us", desig:"MARS:Mid-Atlantic Regional Spaceport", desc:"url:www.marsspaceport.com/;loc:37.8433N,75.4780W;show:MARS:NE;shmap:W;reg:Wallops Island, Virginia, USA;x:216;y:96;az:60..129;kml:zgUqCFI4a2eQ.kHJ6lFxPAwJQ", map:"wff-mars.png"},
boc: {name:"SpaceX:SpaceX South Texas Launch Site", other:"Boca Chica", ctry:"us", desig:"SpaceX", desc:"url:;loc:25.996N,97.154W;show:SpX;shmap:W;reg:Cameron County, Texas, USA;az:93..113;kml:", map:"spacex-tx.png"},

bai: {name:"Baikonur:Baikonur Cosmodrome", other:"космодром Байконур", ctry:"ru;kz", desig:"NIIP-5:Scientific-Research Test Range #5", desc:"url:www.russianspaceweb.com/baikonur.html;loc:45.965N,63.305E;show:Baikonur:NW;shmap:W;reg:Tyura-Tam, Kazakhstan;az:347..65;kml:zgUqCFI4a2eQ.kARtkNjNWyeg", map:"bai.png"},
ple: {name:"Plesetsk:Plesetsk Cosmodrome", other:"Космодром Плесецк", ctry:"ru", desig:"NIIP-53:Scientific-Research Test Range #53", desc:"url:www.russianspaceweb.com/plesetsk.html;loc:62.9026N,40.6786E;show:Plesetsk:SW;shmap:W;reg:Arkhangelsk, Russia;az:341..90;kml:zgUqCFI4a2eQ.kH9Q9VFiA5M8", map:"ple.png"},
vos: {name:"Vostochny:Vostochny Cosmodrome", other:"Космодром Восточный;Svobodny", ctry:"ru", desig:"Vos:Vostochny Cosmodrome", desc:"url:vostokdrom.ru/;loc:51.8167N,128.25E;show:Vostochny:NE;shmap:W;reg:Amur, Russia;az:347..90;kml:zgUqCFI4a2eQ.kdUuXIs7ggYk", map:"vos.png"},
yas: {name:"Yasny:Yasny Cosmodrome", other:"космодром Я́сный;Dombarovsky", ctry:"ru", desig:"Yas:Yasny Cosmodrome", desc:"url:www.kosmotras.ru/en/yasniy/;loc:51.093N,59.848E;show:Yasny:NW;shmap:W;reg:Orenburg, Russia;az:347..45;kml:zgUqCFI4a2eQ.ksnL51p7MUO0", map:"yas.png"},

kou: {name:"Kourou:Guiana Space Centre", ctry:"eu;gu", desig:"CSG:Centre Spatial Guyanais", desc:"url:www.esa.int/Our_Activities/Launchers/Europe_s_Spaceport/Europe_s_Spaceport2;loc:5.170N,52.688W;show:CSG:SW;shmap:W;reg:Kourou, French Guiana;az:349..90;kml:zgUqCFI4a2eQ.kynamq0ZiCjg", map:"csg.png"},

uch: {name:"Uchinoura:Uchinoura Space Center", other:"内之浦宇宙空間観測所", ctry:"jp", desig:"USC:Uchinoura Space Center", desc:"url:www.jaxa.jp/about/centers/usc/index_e.html;loc:31.2513N,131.0761E;show:USC:NE;shmap:SE;reg:Kagoshima, Japan;az:25..155;kml:zgUqCFI4a2eQ.kN24hi4lP3wE", map:"usc.png"},
tng: {name:"Tanegashima:Tanegashima Space Center", other:"種子島宇宙センター", ctry:"jp", desig:"TNSC:Tanegashima Space Center", desc:"url:www.jaxa.jp/about/centers/tnsc/index_e.html;loc:30.4037N,130.9733E;show:TNSC:SE;shmap:SW;reg:Kagoshima, Japan;az:0..180;kml:zgUqCFI4a2eQ.kFVhciYdMtnQ", map:"tnsc.png"},

jiu: {name:"Jiuquan:Jiuquan Satellite Launch Center", other:"酒泉卫星发射中心", ctry:"cn", desig:"JSLC:Jiuquan Satellite Launch Center", desc:"url:www.spaceflight101.com/jiquan-satellite-launch-center.html;loc:40.985N,100.220E;show:JSLC:NW;shmap:W;reg:Alxa, Inner Mongolia, China;az:134..153;kml:zgUqCFI4a2eQ.kWktCQxSnO-Y", map:"jslc.png"},
tai: {name:"Taiyuan:Taiyuan Satellite Launch Center", other:"太原卫星发射中心", ctry:"cn", desig:"TSLC:Taiyuan Satellite Launch Center", desc:"url:www.cgwic.com/LaunchServices/LaunchSite/TSLC.html;loc:38.848N,111.610E;show:TSLC:NW;shmap:W;reg:Xinzhou, Shanxi, China;az:175..192;kml:zgUqCFI4a2eQ.kMYSeXljzoYc", map:"tslc.png"},
wen: {name:"Wenchang:Wenchang Space Launch Center", other:"文昌卫星发射中心", ctry:"cn", desig:"WSLC:Wenchang Satellite Launch Center", desc:"loc:19.6417N,110.9427E;show:WSLC:SW;shmap:W;reg:Hainan Island, China;az:90..190;kml:zgUqCFI4a2eQ.kNpP8cF6bfLA", map:"wslc.png"},
xch: {name:"Xichang:Xichang Satellite Launch Center", other:"西昌卫星发射中心", ctry:"cn", desig:"XSLC:Xichang Satellite Launch Center", desc:"url:www.cgwic.com/LaunchServices/LaunchSite/XSLC.html;loc:28.234N,102.037E;alt:1825m;show:XSLC:NW;shmap:W;reg:Liangshan, Sichuan, China;az:94..104;kml:zgUqCFI4a2eQ.kKPOhruzqO_o", map:"xslc.png"},

sri: {name:"Sriharikota:Satish Dhawan Space Centre, Sriharikota", other:"सतीश धवन अंतरिक्ष केंद्र", ctry:"ind", desig:"SDSC:Satish Dhawan Space Centre", desc:"url:www.shar.gov.in/sdsc/;loc:13.724N,80.184E;show:SDSC:NW;shmap:E;reg:Andhra Pradesh, India;az:0..140;kml:zgUqCFI4a2eQ.krAUqhsk0xpo", map:"sdsc.png"},

//alc: {name:"Alcântara:Alcântara Launch Center", other:"", ctry:"br", desig:"CLA:Centro de Lançamento de Alcântara", desc:"url:www.cla.aer.mil.br/index.php;loc:2.3730S,44.3964W;show:CLA;reg:Maranhão, Brazil;az:343..90;kml:zgUqCFI4a2eQ.kS2NlNk7_hfQ", map:"cla.png"},

nar: {name:"Naro:Naro Space Center", other:"나로우주센터", ctry:"sk", desig:"NSC:Naro Space Center", desc:"url:http://www.kari.re.kr/eng.do;loc:34.4318N,127.5350E;show:NARO:W;reg:Kohung, Jeollanam-do;az:90..190;kml:12u04inPCpIFUtNWaYrlz__A7IwI", map:"naro.png"},

mah: {name:"Mahia:Mahia Launch Complex", other:"", ctry:"nz", desig:"RLLC1:Rocket Lab Launch Complex 1", desc:"url:http://www.kari.re.kr/eng.do;loc:39.2615S,177.8649E;show:RLLC1:W;reg:Hawke's Bay, North Island;az:90..225;kml:159O6gE8h_4jgMo6HTvirp-1o_vnPMirL", map:"mahia.png"}
};

Common.lpad = [
//{n:"ACS", par:"alc", lv:"Tsiklon-4", loc:"2.2848S,44.3855W"},
{n:"ELA-1", par:"kou", lv:"Ariane 1-3;Vega", loc:"5.236N,52.775W"},
{n:"ELA-2", par:"kou", lv:"Ariane 4;Ariane 6", loc:"5.232N,52.776W"},
{n:"ELA-3", par:"kou", lv:"Ariane 5", loc:"5.239N,52.768W"},
{n:"ELS", par:"kou", lv:"Soyuz", loc:"5.305N,52.834W"},
{n:"SLV", par:"kou", syn:"ELA-1"},
{n:"FLP", par:"sri", lv:"PSLV;GSLV", loc:"13.733N,80.235E"},
{n:"LC-1A", par:"mah", lv:"Electron", loc:"39.2616S,177.8650E"},
{n:"LC-1B", par:"mah", lv:"Electron", loc:"39.2605S,177.8651E"},
{n:"LC-1/5", par:"bai", lv:"R-7;Molniya;Soyuz", loc:"45.920N,63.342E"},
{n:"LC-1S", par:"vos", lv:"Soyuz 2", loc:"51.884N,128.334E"},
{n:"LC-2", par:"xch", lv:"CZ-2E;CZ-3B/C", loc:"28.246N,102.027E"},
{n:"LC-2A", par:"jiu", lv:"CZ-1", loc:"41.309N,100.316E"},
{n:"LC-2B", par:"jiu", lv:"CZ-2A/C/D", loc:"41.280N,100.305E"},
{n:"LC-3", par:"xch", lv:"CZ-3A/B/C", loc:"28.247N,102.029E"},
{n:"LC-7", par:"tai", lv:"CZ-2C;CZ-4A/B/C", loc:"38.849N,111.608E"},  
{n:"LC-9", par:"tai", lv:"CZ-2C;CZ-4B/C", loc:"38.863N,111.590E"},  
{n:"LC-16", par:"tai", lv:"CZ-6", loc:"38.8682N,111.5802E"},  
{n:"LC-16/2", par:"ple", lv:"R-7;Molniya;Soyuz", loc:"62.960N,40.683E"},
{n:"LC-17A", par:"cap", lv:"Delta;Delta II", loc:"28.446N,80.566W"},
{n:"LC-17B", par:"cap", lv:"Delta;Delta II", loc:"28.447N,80.565W"},
{n:"LC-31/6", par:"bai", lv:"R-7;Molniya;Soyuz", loc:"45.996N,63.564E"},
{n:"LC-34", par:"cap", lv:"Saturn IB", loc:"28.522N,80.561W"},
{n:"LC-35", par:"ple", lv:"Angara", loc:"62.928N,40.5756E"},
{n:"LC-36A", par:"cap", lv:"Atlas Centaur;New Glenn", loc:"28.4714N,80.5376W"},
{n:"LC-36B", par:"cap", lv:"Atlas Centaur;Atlas II", loc:"28.4753N,80.5396W"},
{n:"LC-37B", par:"cap", lv:"Saturn IB,Delta IV", loc:"28.531N,80.565W"},
{n:"LC-39A", par:"ksc", lv:"Saturn V;STS;Falcon 9;Falcon Heavy;BFR", loc:"28.608N,80.604W"},
{n:"LC-39B", par:"ksc", lv:"Saturn V;STS;SLS;OmegA", loc:"28.627N,80.621W"},
{n:"LC-40", par:"cap", lv:"Titan;Falcon 9", loc:"28.562N,80.577W"},
{n:"LC-41", par:"cap", lv:"Titan;Atlas V", loc:"28.583N,80.583W"},
{n:"LC-43/3", par:"ple", lv:"R-7;Molniya;Soyuz", loc:"62.927N,40.450E"},
{n:"LC-43/4", par:"ple", lv:"R-7;Molniya;Soyuz", loc:"62.929N,40.457E"},
{n:"LC-45/1", par:"bai", lv:"Zenit;Soyuz-5", loc:"45.943N,63.653E"},
{n:"LC-46", par:"cap", lv:"Athena 2", loc:"28.459N,80.528W"},
{n:"LC-81/23", par:"bai", lv:"Proton-K", loc:"46.074N,62.978E"},
{n:"LC-81/24", par:"bai", lv:"Proton-K", loc:"46.071N,62.985E"},
{n:"LC-90/20", par:"bai", lv:"Tsiklon-2", loc:"46.080N,62.935E"},
{n:"LC-101", par:"wen", lv:"CZ-5", loc:"19.6139N,110.9513E"},
{n:"LC-110/37", par:"bai", lv:"N-1;Energia-Buran", loc:"45.965N,63.305E"},
{n:"LC-110/38", par:"bai", lv:"N-1", loc:"45.962N,63.310E"},
{n:"LC-132/1", par:"ple", lv:"Kosmos", loc:"62.883N,40.869E"},
{n:"LC-132/2", par:"ple", lv:"Kosmos", loc:"62.883N,40.872E"},
{n:"LC-133/1", par:"ple", lv:"Kosmos;Rockot", loc:"62.887N,40.847E"},
{n:"LC-133/3", par:"ple", lv:"Kosmos;Rockot", loc:"62.887N,40.850E"},
{n:"LC-200/39", par:"bai", lv:"Proton-K;Proton-M", loc:"46.040N,63.032E"},
{n:"LC-200/40", par:"bai", lv:"Proton-K;Proton-M", loc:"46.036N,63.038E"},
{n:"LC-201", par:"wen", lv:"CZ-7;CZ-8", loc:"19.6180N,110.9553E"},
{n:"LC-250", par:"bai", lv:"Energia-Polyus", loc:"46.008N,63.305E"},
{n:"LC-370/11", par:"yas", lv:"Dnjepr-1", loc:"51.0945N,59.8424E"},
{n:"LC-370/13", par:"yas", lv:"Dnjepr-1", loc:"51.0934N,59.8446E"},
{n:"LP-0A", par:"wal", lv:"Antares", loc:"37.834N,75.488W"},
{n:"LP-0B", par:"wal", lv:"Minotaur", loc:"37.831N,75.491W"},
{n:"M-1", par:"uch", lv:"M-3SII;Epsilon", loc:"31.2504N,131.0821E"},
{n:"M-5", par:"uch", lv:"M-V", loc:"31.2510N,131.0823E"},
{n:"LC-2", par:"wal", lv:"Electron;Neutron", loc:"37.8348N,75.4864W"},
{n:"SLC-2W", par:"van", lv:"Delta II;OmegA", loc:"34.755N,120.622W"},
{n:"SLC-3E", par:"van", lv:"Atlas V", loc:"34.640N,120.590W"},
{n:"SLC-4W", par:"van", lv:"Atlas-Agena;Titan", loc:"34.633N,120.616W"},
{n:"SLC-4E", par:"van", lv:"Atlas-Agena;Titan;Falcon 9;Falcon Heavy", loc:"34.632N,120.610W"},
{n:"SLC-5", par:"van", lv:"Scout", loc:"34.608N,120.625W"},
{n:"SLC-6", par:"van", lv:"Delta IV;Falcon 9;Falcon Heavy", loc:"34.581N,120.628W"},
{n:"SLC-8", par:"van", lv:"Minotaur", loc:"34.576N,120.632W"},
{n:"LC-576E", par:"van", lv:"Taurus", loc:"34.740N,120.619W"},
{n:"SLC-12", par:"cap", lv:"Atlas Able;Atlas Agena", loc:"28.481N,80.542W"},
{n:"SLC-13", par:"cap", lv:"Atlas Able;Atlas Agena;Falcon 9 LZ-1/LC-2", loc:"28.486N,80.544W"},
{n:"SLC-14", par:"cap", lv:"Mercury Atlas;Atlas Agena", loc:"28.491N,80.546W"},
{n:"SLC-15", par:"cap", lv:"Titan 1;Titan 2;RS1", loc:"28.496N,80.549W"},
{n:"SLC-16", par:"cap", lv:"Terran", loc:"28.502N,80.552W"},
{n:"SLC-17A", par:"cap", syn:"LC-17A"},
{n:"SLC-17B", par:"cap", syn:"LC-17B"},
{n:"SLC-20", par:"cap", lv:"Astra", loc:"28.512N,80.557W"},
{n:"SLC-37B", par:"cap", syn:"LC-37B"},
{n:"SLC-40", par:"cap", syn:"LC-40"},
{n:"SLC-41", par:"cap", syn:"LC-41"},
{n:"SLP", par:"sri", lv:"PSLV;GSLV", loc:"13.720N,80.230E"},
{n:"SLS-1", par:"jiu", lv:"CZ-2F", loc:"40.958N,100.291E"},
{n:"SLS-2", par:"jiu", lv:"CZ-2C/D;CZ-4C;CZ-11", loc:"40.960N,100.298E"},
//{n:"VLS", par:"alc", lv:"VLS", loc:"2.3177S,44.3678W"},
{n:"YLP-1", par:"tng", lv:"H-IIA;H-III", loc:"30.401N,130.977E"},
{n:"YLP-2", par:"tng", lv:"H-IIB;H-III", loc:"30.401N, 130.975E"},
{n:"LC-1A", par:"vos", lv:"Angara-1.2/A5", loc:"51.8756N,128.3615E"},
//{n:"(LP-2)", par:"vos", lv:"Angara-A5/A7", loc:"51.8756N,128.3615E"},
{n:"(LC)", par:"wen", lv:"CZ-9", loc:""},
{n:"(LC-2", par:"nar", lv:"KSLV-II", loc:"34.4319N,127.5362E"}
];/* global UI, SSEH, Common, Parse, Create, Read, Cdraw, Trig, px */

Common.dsn = {
gdscc: {name:"DSN Goldstone:Goldstone Deep Space Communications Complex", ctry:"us", desig:"GDSCC", desc:"url:eyes.nasa.gov/dsn/dsn.html;loc:35.426667N,116.89W;ag:nasa;show:GDSCC:E;reg:California, USA;dish:1x70m,4x34m,1x26m"},
cdscc: {name:"DSN Canberra:Canberra Deep Space Communications Complex", ctry:"us;au", desig:"CDSCC", desc:"url:eyes.nasa.gov/dsn/dsn.html;loc:35.401389S,148.981667E;ag:nasa;show:CDSCC:S;reg:Australia;dish:1x70m,4x34m,1x26m"},
dsa1: {name:"ESTRACK New Norica:Deep Space Antenna 1, New Norica", ctry:"eu;au", desig:"DSA 1", desc:"url:estracknow.esa.int;loc:31.0482S,116.1914E;ag:esa;show:DSA 1:S;reg:Western Australia;dish:1x35m"},
dsa2: {name:"ESTRACK Cebreros:Deep Space Antenna 2, Cebreros", ctry:"eu;es", desig:"DSA 2", desc:"url:estracknow.esa.int;loc:40.4528N,4.3676W;ag:esa;show:DSA 2:SE;reg:Castila y León, Spain;dish:1x35m"},
mdscc: {name:"DSN Madrid:Madrid Deep Space Communications Complex", ctry:"us;es", desig:"MDSCC", desc:"url:eyes.nasa.gov/dsn/dsn.html;loc:40.431389N,4.248056W;ag:nasa;show:MDSCC:SW;reg:Spain;dish:1x70m,3x34m,1x26m"},
dsa3: {name:"ESTRACK Malargüe:Deep Space Antenna 3, Malagüe", ctry:"eu;ar", desig:"DSA 3", desc:"url:estracknow.esa.int;loc:35.776S,69.3982W;ag:esa;show:DSA 3:S;reg:Mendoza, Argentina;dish:1x35m"},
cdsnjia: {name:"CDSN Jiamusi:Chinese DSN Station Jiamusi", other:"佳木斯", ctry:"cn", desig:"", desc:"url:;loc:46.8N,130.317E;ag:cnsa;show:Jiamusi:W;reg:Jiamusi, China;dish:1x64m"},
cdsnkash: {name:"CDSN Kashgar:Chinese DSN Station Kashgar", other:"喀什市", ctry:"cn", desig:"", desc:"url:;loc:39.5N,75.0E;ag:cnsa;show:Kashgar:S;reg:Xinjiang, China;dish:3x35m,1x18m"},
cdsnmi: {name:"CDSN Miyun:Chinese DSN Station Miyun", other:"密云区", ctry:"cn", desig:"", desc:"url:;loc:40.51N,116.89E;ag:cnsa;show:Miyun:S;reg:Beijing, China;dish:1x50m,1x40m"},
cdsnkun: {name:"CDSN Kunming:Chinese DSN Station Kunming", other:"昆明", ctry:"cn", desig:"", desc:"url:;loc:24.84N,102.58E;ag:cnsa;show:Kunming:S;reg:Yunnan, China;dish:1x40m"},
cdsntia: {name:"CDSN Wuqing:Chinese DSN Station Wuqing", other:"", ctry:"cn", desig:"", desc:"url:;loc:39.3844N,117.04439E;ag:cnsa;show:Wuqing:S;reg:Tianjin, China;dish:1x70m"},
cdsnzap: {name:"CDSN Zapala:Chinese DSN Station Zapala", other:"", ctry:"cn;ar", desig:"", desc:"url:;loc:38.19091S,70.14988W;ag:cnsa;show:Zapala:S;reg:Neuquén, Argentina;dish:1x35m,1x18m"},
idsn: {name:"IDSN Byalalu:Indian DSN Station Byalalu", other:"பயலாலு", ctry:"ind", desig:"", desc:"url:http://www.isro.gov.in/about-isro/isro-telemetry-tracking-and-command-network-istrac;loc:12.901631N,77.368619E;ag:isro;show:IDSN:S;reg:Karnataka, India;dish:1x32m,1x18m"},
bear: {name:"CCSDS Medvezhi Ozera:Bear Lakes complex", other:"Медвежьи озёра", ctry:"ru", desig:"", desc:"url:;loc:55.867886N,37.951804E;ag:rosc;show:Bear Lakes:SW;reg:Moscow, Russia;dish:1x64m"},
galen: {name:"CCSDS Ussuriysk:Eastern Deep Space Communication Center\n", other:"Уссури́йск", ctry:"ru", desig:"", desc:"url:;loc:44.0161N,131.757E;ag:rosc;show:Ussuriysk:NE;reg:Primorsky Krai, Russia;dish:1x70m,1x32m,1x25m"},
evpat: {name:"CCSDS Yevpatoria:Yevpatoria RT-70 Radio Telescope\n", other:"Евпатория", ctry:"ru;ua", desig:"", desc:"url:;loc:45.189028N,33.187361E;ag:rosc;show:Yevpatoria:S;reg:Crimea, Ukraine;dish:1x70m,1x32m"},
kalya: {name:"CCSDS Kalyazin:Kalyazin Radio Observatory", other:"Калязин", ctry:"ru", desig:"", desc:"url:;loc:57.2231N,37.9004E;ag:rosc;show:Kalyazin:NE;reg:Tver, Russia;dish:1x64m"},
udsc: {name:"Usuda DSC:Usuda Deep Space Center", other:"臼田宇宙空間観測所", ctry:"jp", desig:"UDSC", desc:"url:global.jaxa.jp/about/centers/udsc/index.html;loc:36.133056N,138.362222E;ag:jaxa;show:UDSC:S;reg:Nagano, Japan;dish:1x64m"},
//Uchinoura USC34
//ktsat: {name:"KTSat:KTSat Satellite communication Center", other:"", ctry:"sk", desig:"KTSat", desc:"url:www.kari.re.kr/eng.do;loc:36.1N,127.5E;ag:kari;show:KTSat:NE;reg:Keumsan, South Korea;dish:1x27.7m"},
dsa4: {name:"Weilheim:Weilheim Deep Space Antenna", ctry:"eu;de", desig:"", desc:"url:www.dlr.de/rb/desktopdefault.aspx/tabid-6856/4253_read-6299/;loc:47.881159N,11.078194E;ag:esa;show:Weilheim:NE;reg:Oberbayern, Germaby;dish:1x30m"},};
    
  
Common.ctrl = {
  gsfc: {name:"GSFC:Goddard Space Flight Center,\nGreenbelt, Md", other:"", ctry:"us", desc:"url:www.nasa.gov/centers/goddard/home;loc:38.996944N,76.848333W;show:GSFC:NW;ag:nasa;reg:Maryland,USA"},
  jpl: {name:"JPL SFOF:Space Flight Operations Facility (JPL),\nPasadena, Ca", other:"", ctry:"us", desc:"url:www.jpl.nasa.gov/;loc:34.201086N,118.173614W;show:SFOF:S;ag:masa;reg:California,USA"},
  esoc: {name:"ESOC:European Space Operations Centre, Darmstadt", other:"", ctry:"eu;de", desc:"url:www.esa.int/esoc;loc:49.871111N,8.622778E;show:ESOC:N;ag:esa;reg:Darmstadt,Germany"},
  rocc: {name:"ROCC:Rover Operations Control Centre, Turin", other:"", ctry:"eu;it", desc:"url:www.altecspace.it/en;loc:45.080350N,7.612482E;show:ROCC:S;ag:esa;reg:Turin,Italy"},
  tsup: {name:"TsUP:RKA Mission Control Center, Korolev", other:"Центр управления полётами", ctry:"ru", desc:"url:www.mcc.rsa.ru/cup.htm;loc:55.912636N,37.810267E;show:TsUP:SE;ag:rosc;reg:Korolyov,Moscow"},
  bacc: {name:"BACC:Beijing Aerospace Command and Control Center", other:"北京航天指挥控制中心", ctry:"cn", desc:"url:;loc:40.071989N,116.257092E;show:BACC:E;ag:cnsa;reg:Beijing,China"},
  tksc: {name:"TKSC:Tsukuba Space Center", other:"筑波宇宙センター", ctry:"jp", desc:"url:www.jaxa.jp/about/centers/tksc/index_e.html;loc:36.065778N,140.129806E;show:TKSC:E;ag:jaxa;reg:Ibaraki,Japan"},
  istrac: {name:"ISTRAC:ISRO Telemetry, Tracking and Command\nNetwork, Bangalore", other:"इस्रो टेलिमेट्री, ट्रॅकिंग अॅन्ड कमांड नेटवर्क", ctry:"ind", desc:"url:istrac.vsnl.net.in;loc:12.966667N,77.566667E;show:ISTRAC:W;ag:isro;reg:Bangalore,India"},
  kari: {name:"KARI:Korea Aerospace Research Institute, Daejeon", other:"한국항공우주연구원", ctry:"sk", desc:"url:www.kari.re.kr/eng.do;loc:36.375686N,127.353892E;show:KARI:W;ag:kari;reg:nDaejeon,South Korea"}
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
  jp: {name:"Japanese Deep Space Network", ag:"jaxa"},
  sk: {name:"KTSat", ag:"kari"}
};

var elem = {
mer:{a:0.38709927, e:0.20563593, i:7.00497902, L:252.25032350, W:77.45779628, N:48.33076593,
    da:0.00000037, de:0.00001906, di:-0.00594749, dL:149472.67411175, dW:0.16047689, dN:-0.12534081, ep:"2000-01-01"},
ven:{a:0.72333566, e:0.00677672, i:3.39467605, L:181.97909950, W:131.60246718, N:76.67984255,
    da:0.00000390, de:-0.00004107, di:-0.00078890, dL:58517.81538729, dW:0.00268329, dN:-0.27769418, ep:"2000-01-01"},
ter:{a:1.00000261, e:0.01671123, i:-0.00001531, L:100.46457166, W:102.93768193, N:0.0,
    da:0.00000562, de:-0.00004392, di:-0.01294668, dL:35999.37244981, dW:0.32327364, dN:0.0, ep:"2000-01-01"},
mar:{a:1.52371034, e:0.09339410, i:1.84969142, L:-4.55343205, W:-23.94362959, N:49.55953891,
    da:0.00001847, de:0.00007882, di:-0.00813131, dL:19140.30268499, dW:0.44441088, dN:-0.29257343, ep:"2000-01-01"},
jup:{a:5.20288700, e:0.04838624, i:1.30439695, L:34.39644051, W:14.72847983, N:100.47390909,
    da:-0.00011607,de :-0.00013253, di:-0.00183714, dL:3034.74612775, dW:0.21252668, dN:0.20469106, ep:"2000-01-01"},
sat:{a:9.53667594, e:0.05386179, i:2.48599187, L:49.95424423, W:92.59887831, N:113.66242448,
    da:-0.00125060, de:-0.00050991, di:0.00193609, dL:1222.49362201, dW:-0.41897216, dN:-0.28867794, ep:"2000-01-01"},
ura:{a:19.18916464, e:0.04725744, i:0.77263783, L:313.23810451, W:170.95427630, N:74.01692503,
    da:-0.00196176, de:-0.00004397, di:-0.00242939, dL:428.48202785, dW:0.40805281, dN:0.04240589, ep:"2000-01-01"},
nep:{a:30.06992276, e:0.00859048, i:1.77004347, L:-55.12002969, W:44.96476227, N:131.78422574,
    da:0.00026291, de:0.00005105, di:0.00035372, dL:218.45945325, dW:-0.32241464, dN:-0.00508664, ep:"2000-01-01"},
plu:{a:39.48211675, e:0.24882730, i:17.14001206, L:238.92903833, W:224.06891629, N:110.30393684,
    da:-0.00031596, de:0.00005170, di:0.00004818, dL:145.20780515, dW:-0.04062942, dN:-0.01183482, ep:"2000-01-01"},
voyager1:{a:-3.220923, e:3.7077088, i:35.8161614995, N:179.24387111, W:517.20722026, L:1765.28942671,
      da:0.0456747606, de:0.0826033524, di:-0.5028168368, dN:-3.7474565526, dW:-0.2240440684, dL:6263.7791785465, ep:"2000-01-01"},
voyager2:{a:-4.025902, e:6.284378, i:78.83546, N:101.671571, W:231.771673, L:975.181866, da:
0.0530559884, de:-0.0449060394, di:0.7727906938, dN:0.3334850496, dW:-0.1837848431, dL:4479.9120077643, ep:"2000-01-01"},
pioneer10:{a:-6.9114239, e:1.74242525, i:3.14407086, N:331.9058351, W:679.0858631, L:1195.7919671, da:
-0.193685478, de:-0.0438764272, di:-0.0913287378, dN:5.7969653469, dW:-1.1396403387, dL:1952.278376122, ep:"2000-01-01"},
pioneer11:{a:-8.15660366, e:2.141714662, i:16.6098857, N:160.4826469, W:173.0229737, L:483.7683459, da:
0.2303943097, de:0.0088439374, di:0.4522746339, dN:-2.8906782035, dW:-0.1844043199, dL:1563.9592571875, ep:"2000-01-01"},
cassini: [ {ep:'1997-10-16', e:0.218449676493516, i:1.350933724972984, N:22.04067684864094, w:199.2746364109003, n:1.300870104069166, M:151.8350689160324, a:0.8310875195442019, de:-3.4868120464447636, di:-23.232766543863324, dN:-59.912656018649315, dw:2.491063900771853, dn:-5.3626966723958756, dM:47026.275153938266, da:2.3238713127726003}, {ep:'1998-05-16', e:0.3690597394940404, i:3.406458744360428, N:76.79671015499551, w:199.9753970346575, n:0.7961313460183342, M:15.67003308415941, a:1.152956441765261, de:2.7547300682835427, di:-2.147553175641426, dN:-7.40359697019091, dw:-21.44002659312349, dn:2.4095390041806057, dM:29555.786136147417, da:-2.2645162080420578}, {ep:'1999-07-16', e:0.5666243197440901, i:1.107720126373041, N:144.4797116412424, w:102.0756650211385, n:0.4592748848651027, M:7.601618758627909, a:1.663748146355356, de:1.594775316817774, di:-25.000208449623205, dN:340.6689036327078, dw:-75.35844292032237, dn:-3.4554341409003153, dM:16721.455940513923, da:8.389658246402892}, {ep:'1999-09-16', e:0.7844563478235494, i:0.713568891563621, N:144.7352909675416, w:131.9952435026094, n:0.1226165331603852, M:7.550959704977669, a:4.012700019571971, de:1.6492746488294678, di:-0.7501480270985904, dN:443.926218285252, dw:-378.09093757423153, dn:-0.7590553568257798, dM:4305.124724648379, da:17.708493488113778}, {ep:'2001-01-16', e:0.7605800257171148, i:0.7781258905130793, N:132.1675255371893, w:160.3447688645509, n:0.07830636297285773, M:42.39458327088259, a:5.410922917912551, de:0.8881473528722503, di:-5.452153627282186, dN:132.3430524948282, dw:-90.61282223148757, dn:0.1379793736406013, dM:2946.101057361723, da:-6.053928116216822}, {ep:'2004-07-16', d:"o:sat"}, {ep:'2017-09-16', d:'eom'}],
dawn: [{ep:'2007-09-28', e:0.2775651499353493, i:0.6137701954770891, N:3.864783811851358, w:5.730946179787922, n:0.6039438286908644, M:357.2099348081088, a:1.38613336501316, de:-9.188027489263058, di:91.79171264035394, dN:3381.4929357853757, dw:24555.11601234343, dn:-3.349372463374807, dM:21241.80146187037, da:5.4636502877651525}, {ep:'2009-02-28', e:0.147416935131532, i:6.161897232504742, N:100.8675141785344, w:233.6460968297006, n:0.4834110241858159, M:336.7827098674119, a:1.607897459750752, de:-2.603429219997568, di:41.080962512469384, dN:127.23481349647966, dw:-3814.7180147061663, dn:-8.988141909348679, dM:13841.121417868411, da:31.70596743553892}, {ep:'2011-07-28', d:'o:ves'}, {ep:'2012-09-28', e:0.08414889843611577, i:7.298156808261677, N:102.509985977232, w:149.3215169005825, n:0.2704006958574439, M:166.9397721666662, a:2.368449773673706, de:0.1024513890135695, di:134.78244777121193, dN:-961.7788858590981, dw:-3380.174496557008, dn:-2.311835797137686, dM:8891.543366612485, da:16.230325776269062}, {ep:'2015-02-28', d:'o:cer'}, {ep:'2016-08-28', d:'eom'}]
};
