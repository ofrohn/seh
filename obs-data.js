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

var SOBS = SOBS || {
  TITLE: "Space Observatories",
  VERSION: "1.6.1",
  DATE: "2022-02 ",
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
﻿SOBS.legend = {
  en:{freq:"Frequency [Hz]", wav:"Wavelength/\nEnergy Band", tel:"Space Telescopes\n& Observatories", fut:"Future Missions", abs:"Atmospheric\nAbsorption [%]", grnd:"Some Ground/Air Based Telescopes", ion:"Ionosph.", h2o:"H2O/CO2", o23:"O2 + O3 + Raleigh Scattering", bnd:""},
  de:{freq:"Frequenz [Hz]", wav:"Wellenlänge/Energieband", tel:"Weltraumteleskope", fut:"Zukünftige Missionen", abs:"Atmosphärische\nAbsorption [%}", grnd:"Boden/Luftbasierte\nTeleskope", ion:"Ionosph.", h2o:"H2O/CO2", o23:"O2 + O3 + Raleighstreuung", bnd:""},
  es:{freq:"Frecuencia [Hz]", wav:"Longitud de Onda/\nEnergia", tel:"Telescopio Espacial", fut:"Misión Futuro", abs:"Absorción\nAtmosférica [%]", grnd:"Telescopios\nTerestres/Volantes", ion:"Ionosf.", h2o:"H2O/CO2", o23:"O2 + O3 + Dispersión Raleigh", bnd:""},
  ru:{freq:"Частота [Гц]", wav:"Длина волны/Энергия", tel:"Космические\nтелескопы", fut:"Будущие миссии", abs:"Поглощение\nатмосферы [%]", grnd:"Наземные/воздушные\nнаблюдения", ion:"Ионосф.", h2o:"H2O/CO2", o23:"O2 + O3 + рэлеевское рассеяние", bnd:""}
};

SOBS.units = [
{n:"100m", t:"w", u:1e2, ru:"100м"},
{n:"1m", t:"w", u:1e0, ru:"1м"},
{n:"1mm", t:"w", u:1e-3, ru:"1мм"},
{n:"1μm", t:"w", u:1e-6, ru:"1мкм"},
{n:"10nm", t:"w", u:1e-8, ru:"10нм"},
{n:"1keV", t:"e", u:1e3, ru:"1КэВ"},
{n:"1MeV", t:"e", u:1e6, ru:"1МэВ"},
{n:"1GeV", t:"e", u:1e9, ru:"1ГэВ"},
{n:"1TeV", t:"e", u:1e12, ru:"1ТэВ"}
];

SOBS.range = [
{n:"Radio", s:"Radio", f0:1e5, c0:"rgba(255,0,0,0.2)", f1:3e9, c1:"rgba(255,0,0,0.4)", ru:"Радиоволны"},
{n:"Microwave", s:"\u03bcW", f0:3e9, c0:"rgba(255,0,0,0.4)", f1:3e11, c1:"rgba(255,0,0,0.55)", de:"Mikrowellen", es:"Microondas", ru:"Суб-мм"},
{n:"Infrared", s:"IR", f0:3e11, c0:"rgba(255,0,0,0.55)", f1:4.3e14, c1:"rgba(255,0,0,1)", de:"Infrarot", es:"Infrarojo", ru:"Инфракрасный"},
{n:"Visual", s:"Vis.", f0:4.3e14, c0:"#f00", f1:7.9e14, c1:"#00f", de:"Optisch", ru:"Оптический"},
{n:"Ultraviolet", s:"UV", f0:7.9e14, c0:"rgba(0,0,255,1)", f1:3e16, c1:"rgba(0,0,255,0.65)", de:"Ultraviolett", es:"Ultravioleta", ru:"Ультрафиолет"},
{n:"X-Ray", s:"X", f0:3e16, c0:"rgba(0,0,255,0.65)", f1:3e19, c1:"rgba(0,0,255,0.4)", de:"Röntgen", es:"Rayos X", ru:"Рентген"},
{n:"Gamma Ray", s:"\u03b3", f0:3e19, c0:"rgba(0,0,255,0.4)", f1:3e26, c1:"rgba(0,0,255,0.2)", de:"Gammastrahlen", es:"Rayos Gamma", ru:"Гамма-излучение"}
];


//  type:"r|mw|nir|fir|ir|opt|uv|nuv|fuv|x|sx|hx|g|par|gr|emf",  //Spectral type
SOBS.mtype = {
r: {name:"Radio", sym:"R", col:"#ef9f9f"}, //
mw: {name:"Microwave", sym:"\u03bcW", col:"#e46e6e"}, //
fir: {name:"Far IR", sym:"FIR", col:"#cd3434"}, //
nir: {name:"Near IR", sym:"NIR", col:"#b60101"}, //
ir: {name:"Infrared", sym:"IR", col:"#c41313"}, //
opt: {name:"Visual", sym:"OPT", col:"#6de369"}, //
uv: {name:"Ultraviolet", sym:"UV", col:"#0606bf"}, //
nuv: {name:"Near UV", sym:"NUV", col:"#0000b3"}, //
fuv: {name:"Far UV", sym:"FUV", col:"#1a1acd"}, //
euv: {name:"Extrem UV", sym:"EUV", col:"#2a2acf"}, //
x: {name:"X-Ray", sym:"X", col:"#5a5ae4"}, //
sx: {name:"Soft X-Ray", sym:"SX", col:"#7a7ae4"}, //
hx: {name:"Hard X-Ray", sym:"HX", col:"#5151d1"}, //
g: {name:"Gamma Ray", sym:"\u03b3", col:"#a5a5ff"}, //
par: {name:"Particles", sym:"PAR", col:"#777"}, //
gr: {name:"Gravity", sym:"GR", col:"#555"}, //
emf: {name:"EMF", sym:"EMF", col:"#f0f"} //
};

//  pur:"sol|neo|exo|as|sur|cmb|cxb|grb|seis|de|dm|tim|w",       //Special purpose
SOBS.mpur = {
sol: {name:"Solar", col:"#"}, //
neo: {name:"NEO:Near Earth Objects", col:"#"}, //
exo: {name:"Exoplanet", col:"#"}, //
as: {name:"Astrometry", col:"#"}, //
sur: {name:"Survey", col:"#"}, //
cmb: {name:"CMB:Cosmic Microwave Background", col:"#"}, //
cxb: {name:"CXB:Cosmic X-Ray Background", col:"#"}, //
grb: {name:"GRB:Gamma Ray Burst", col:"#"}, //
seis: {name:"Seismology", col:"#"}, //
de: {name:"Dark Energy", col:"#"}, //
dm: {name:"Dark Matter", col:"#"}, //
tim: {name:"Timing", col:"#"}, //
w: {name:"Weather", col:"#"} //
};


SOBS.images = {
earth: SOBS.PLANETS + "earth.png",
moon: SOBS.PLANETS + "moon2.png",
sun: SOBS.PLANETS + "sun.png",
cc: SOBS.ICONS + "cc.png",
sprite:  SOBS.ICONS + "sprites.png"
};


SOBS.absorp =[
{f:﻿0.300, a:1},{f:0.350, a:0.4},{f:0.400, a:0.2},{f:0.500, a:0.05},{f:0.600, a:0.01},{f:0.700, a:0},{f:0.890, a:0},{f:0.900, a:0.029},{f:0.910, a:0.0265},{f:0.920, a:0.0169},{f:0.930, a:0.0838},{f:0.940, a:0.1253},{f:0.950, a:0.0955},{f:0.960, a:0.0528},{f:0.970, a:0.0225},{f:0.980, a:0.0109},{f:0.990, a:0.0011},{f:1.000, a:0.0004},{f:1.010, a:0.0005},{f:1.020, a:0.0003},{f:1.030, a:0.0002},{f:1.040, a:0},{f:1.050, a:0},{f:1.060, a:0.0002},{f:1.070, a:0.0009},{f:1.080, a:0.004},{f:1.090, a:0.0093},{f:1.100, a:0.0231},{f:1.110, a:0.0579},{f:1.120, a:0.1791},{f:1.170, a:0.0122},{f:1.180, a:0.0144},{f:1.190, a:0.0115},{f:1.200, a:0.0111},{f:1.210, a:0.009},{f:1.220, a:0.0043},{f:1.230, a:0.0013},{f:1.240, a:0.0001},{f:1.250, a:0.0012},{f:1.260, a:0.0176},{f:1.270, a:0.0297},{f:1.280, a:0.0058},{f:1.290, a:0.0034},{f:1.300, a:0.0122},{f:1.310, a:0.0296},{f:1.320, a:0.048},{f:1.330, a:0.0936},{f:1.340, a:0.1232},{f:1.350, a:0.3519},{f:1.360, a:0.6607},{f:1.370, a:0.6006},{f:1.380, a:0.5702},{f:1.390, a:0.5613},{f:1.400, a:0.5343},{f:1.410, a:0.4245},{f:1.420, a:0.3289},{f:1.430, a:0.2924},{f:1.440, a:0.2635},{f:1.450, a:0.196},{f:1.460, a:0.1436},{f:1.470, a:0.1864},{f:1.480, a:0.1401},{f:1.490, a:0.0783},{f:1.500, a:0.0332},{f:1.510, a:0.0175},{f:1.520, a:0.005},{f:1.530, a:0.0027},{f:1.540, a:0.0027},{f:1.550, a:0.0003},{f:1.560, a:0.0002},{f:1.570, a:0.0161},{f:1.580, a:0.0161},{f:1.590, a:0.0012},{f:1.600, a:0.0155},{f:1.610, a:0.0176},{f:1.620, a:0.0017},{f:1.630, a:0.0003},{f:1.640, a:0.0032},{f:1.650, a:0.004},{f:1.660, a:0.0032},{f:1.670, a:0.0029},{f:1.680, a:0.0014},{f:1.690, a:0.0015},{f:1.700, a:0.0013},{f:1.710, a:0.0023},{f:1.720, a:0.0045},{f:1.730, a:0.0072},{f:1.740, a:0.0133},{f:1.750, a:0.0176},{f:1.760, a:0.0252},{f:1.770, a:0.031},{f:1.780, a:0.0548},{f:1.790, a:0.0828},{f:1.800, a:0.1877},{f:1.810, a:0.2824},{f:1.820, a:0.394},{f:1.830, a:0.5399},{f:1.840, a:0.6729},{f:1.850, a:0.6386},{f:1.860, a:0.5945},{f:1.870, a:0.7089},{f:1.880, a:0.5639},{f:1.890, a:0.4608},{f:1.900, a:0.6064},{f:1.910, a:0.5973},{f:1.920, a:0.489},{f:1.930, a:0.3652},{f:1.940, a:0.2796},{f:1.950, a:0.2885},{f:1.960, a:0.3273},{f:1.970, a:0.1768},{f:1.980, a:0.0533},{f:1.990, a:0.0427},{f:2.000, a:0.3182},{f:2.020, a:0.2526},{f:2.040, a:0.0323},{f:2.060, a:0.2005},{f:2.080, a:0.0367},{f:2.090, a:0.0142},{f:2.100, a:0.0072},{f:2.110, a:0.0061},{f:2.120, a:0.0048},{f:2.130, a:0.0021},{f:2.140, a:0.0004},{f:2.150, a:0.0025},{f:2.160, a:0.0038},{f:2.170, a:0.0035},{f:2.180, a:0.0046},{f:2.190, a:0.0048},{f:2.200, a:0.0037},{f:2.210, a:0.002},{f:2.220, a:0.0009},{f:2.230, a:0.0003},{f:2.240, a:0.0002},{f:2.250, a:0.0015},{f:2.270, a:0.0025},{f:2.290, a:0.0007},{f:2.310, a:0.0004},{f:2.330, a:0.0023},{f:2.340, a:0.0156},{f:2.350, a:0.0471},{f:2.360, a:0.0327},{f:2.370, a:0.0632},{f:2.380, a:0.0491},{f:2.390, a:0.0549},{f:2.400, a:0.0414},{f:2.410, a:0.0643},{f:2.420, a:0.0703},{f:2.430, a:0.0689},{f:2.440, a:0.0913},{f:2.450, a:0.1056},{f:2.460, a:0.0631},{f:2.470, a:0.106},{f:2.480, a:0.1551},{f:2.490, a:0.2291},{f:2.500, a:0.2079},{f:2.520, a:0.3716},{f:2.540, a:0.649},{f:2.560, a:0.7401},{f:2.570, a:0.9343},{f:2.580, a:0.9649},{f:2.590, a:0.9887},{f:2.600, a:0.9846},{f:2.610, a:0.995},{f:2.620, a:0.9801},{f:2.630, a:0.9339},{f:2.640, a:0.8318},{f:2.650, a:0.8811},{f:2.660, a:0.9867},{f:2.670, a:0.9999},{f:2.680, a:1},{f:2.690, a:0.9999},{f:2.700, a:0.9999},{f:2.710, a:0.997},{f:2.720, a:0.9904},{f:2.730, a:0.9405},{f:2.740, a:0.9826},{f:2.750, a:0.9926},{f:2.760, a:1},{f:2.770, a:0.9997},{f:2.780, a:0.9995},{f:2.790, a:0.9759},{f:2.800, a:0.9551},{f:2.810, a:0.9036},{f:2.820, a:0.8075},{f:2.830, a:0.6849},{f:2.840, a:0.6836},{f:2.850, a:0.6627},{f:2.860, a:0.5608},{f:2.870, a:0.4419},{f:2.880, a:0.3501},{f:2.890, a:0.2998},{f:2.900, a:0.3174},{f:2.910, a:0.2512},{f:2.920, a:0.2838},{f:2.930, a:0.1877},{f:2.940, a:0.2018},{f:2.950, a:0.2332},{f:2.960, a:0.1617},{f:2.970, a:0.2479},{f:2.980, a:0.2279},{f:2.990, a:0.1104},{f:3.000, a:0.1701},{f:3.010, a:0.1628},{f:3.020, a:0.1993},{f:3.030, a:0.1942},{f:3.040, a:0.242},{f:3.050, a:0.2748},{f:3.060, a:0.2301},{f:3.070, a:0.189},{f:3.080, a:0.1971},{f:3.090, a:0.2434},{f:3.100, a:0.265},{f:3.110, a:0.2921},{f:3.120, a:0.1772},{f:3.130, a:0.1546},{f:3.140, a:0.1551},{f:3.150, a:0.1444},{f:3.160, a:0.0657},{f:3.170, a:0.0507},{f:3.180, a:0.0888},{f:3.190, a:0.1918},{f:3.200, a:0.3464},{f:3.210, a:0.4159},{f:3.220, a:0.3914},{f:3.230, a:0.3484},{f:3.240, a:0.2575},{f:3.250, a:0.2649},{f:3.260, a:0.2308},{f:3.270, a:0.259},{f:3.280, a:0.1524},{f:3.290, a:0.1581},{f:3.300, a:0.292},{f:3.310, a:0.4569},{f:3.320, a:0.5724},{f:3.330, a:0.1788},{f:3.340, a:0.1826},{f:3.350, a:0.1998},{f:3.360, a:0.1878},{f:3.370, a:0.1479},{f:3.380, a:0.145},{f:3.390, a:0.1317},{f:3.400, a:0.1446},{f:3.410, a:0.1836},{f:3.420, a:0.1248},{f:3.430, a:0.0965},{f:3.440, a:0.0711},{f:3.450, a:0.0673},{f:3.460, a:0.059},{f:3.470, a:0.0509},{f:3.480, a:0.0425},{f:3.490, a:0.0355},{f:3.500, a:0.0263},{f:3.510, a:0.0219},{f:3.520, a:0.0187},{f:3.530, a:0.0436},{f:3.540, a:0.0723},{f:3.550, a:0.0517},{f:3.560, a:0.0431},{f:3.570, a:0.0577},{f:3.580, a:0.0589},{f:3.590, a:0.0508},{f:3.600, a:0.0415},{f:3.610, a:0.0444},{f:3.620, a:0.0345},{f:3.630, a:0.0385},{f:3.640, a:0.034},{f:3.650, a:0.0373},{f:3.660, a:0.0292},{f:3.670, a:0.056},{f:3.680, a:0.0478},{f:3.690, a:0.0352},{f:3.700, a:0.0265},{f:3.710, a:0.037},{f:3.720, a:0.0321},{f:3.730, a:0.04},{f:3.740, a:0.0392},{f:3.750, a:0.0387},{f:3.760, a:0.0437},{f:3.770, a:0.0444},{f:3.780, a:0.0426},{f:3.790, a:0.0487},{f:3.800, a:0.0454},{f:3.810, a:0.0497},{f:3.820, a:0.048},{f:3.830, a:0.0486},{f:3.840, a:0.0565},{f:3.850, a:0.0596},{f:3.860, a:0.0724},{f:3.870, a:0.1063},{f:3.880, a:0.1365},{f:3.890, a:0.1296},{f:3.900, a:0.098},{f:3.910, a:0.1202},{f:3.920, a:0.1311},{f:3.930, a:0.1237},{f:3.940, a:0.1113},{f:3.950, a:0.1029},{f:3.960, a:0.1012},{f:3.970, a:0.105},{f:3.980, a:0.1141},{f:3.990, a:0.1198},{f:4.000, a:0.13},{f:4.010, a:0.1443},{f:4.030, a:0.1799},{f:4.040, a:0.2016},{f:4.050, a:0.215},{f:4.070, a:0.254},{f:4.080, a:0.2863},{f:4.090, a:0.3157},{f:4.110, a:0.3858},{f:4.120, a:0.4341},{f:4.130, a:0.4925},{f:4.150, a:0.6425},{f:4.160, a:0.7332},{f:4.170, a:0.8287},{f:4.180, a:0.9213},{f:4.190, a:0.9859},{f:4.200, a:0.9999},{f:4.210, a:1},{f:4.220, a:1},{f:4.230, a:1},{f:4.240, a:1},{f:4.250, a:1},{f:4.260, a:1},{f:4.280, a:1},{f:4.290, a:1},{f:4.300, a:1},{f:4.320, a:1},{f:4.330, a:1},{f:4.340, a:1},{f:4.360, a:1},{f:4.370, a:0.9988},{f:4.380, a:0.9957},{f:4.400, a:0.9989},{f:4.410, a:0.997},{f:4.420, a:0.9908},{f:4.430, a:0.9697},{f:4.440, a:0.9355},{f:4.450, a:0.8946},{f:4.460, a:0.8873},{f:4.470, a:0.8729},{f:4.480, a:0.822},{f:4.490, a:0.6601},{f:4.500, a:0.5919},{f:4.510, a:0.6882},{f:4.530, a:0.6672},{f:4.540, a:0.5874},{f:4.550, a:0.5166},{f:4.570, a:0.3877},{f:4.580, a:0.301},{f:4.590, a:0.2258},{f:4.610, a:0.1682},{f:4.620, a:0.1655},{f:4.630, a:0.1527},{f:4.650, a:0.1199},{f:4.660, a:0.1058},{f:4.670, a:0.1044},{f:4.680, a:0.1457},{f:4.690, a:0.1488},{f:4.700, a:0.2398},{f:4.710, a:0.303},{f:4.720, a:0.2935},{f:4.730, a:0.2217},{f:4.740, a:0.213},{f:4.750, a:0.2318},{f:4.760, a:0.2224},{f:4.780, a:0.264},{f:4.790, a:0.2433},{f:4.800, a:0.2004},{f:4.820, a:0.3099},{f:4.830, a:0.2124},{f:4.840, a:0.3188},{f:4.860, a:0.2241},{f:4.870, a:0.1654},{f:4.880, a:0.156},{f:4.900, a:0.212},{f:4.910, a:0.0891},{f:4.920, a:0.0456},{f:4.930, a:0.1013},{f:4.940, a:0.1287},{f:4.950, a:0.2654},{f:4.960, a:0.2849},{f:4.970, a:0.0761},{f:4.980, a:0.1277},{f:4.990, a:0.0421},{f:5.000, a:0.1205},{f:5.010, a:0.1773},{f:5.030, a:0.2384},{f:5.040, a:0.0482},{f:5.050, a:0.0395},{f:5.070, a:0.0427},{f:5.080, a:0.3683},{f:5.090, a:0.2989},{f:5.110, a:0.2199},{f:5.120, a:0.1728},{f:5.130, a:0.1744},{f:5.140, a:0.5402},{f:5.150, a:0.4991},{f:5.160, a:0.1159},{f:5.170, a:0.2368},{f:5.180, a:0.1669},{f:5.190, a:0.1883},{f:5.200, a:0.57},{f:5.210, a:0.6625},{f:5.220, a:0.4587},{f:5.230, a:0.4054},{f:5.240, a:0.5627},{f:5.250, a:0.3128},{f:5.260, a:0.1522},{f:5.270, a:0.3067},{f:5.280, a:0.4716},{f:5.290, a:0.5783},{f:5.300, a:0.4894},{f:5.310, a:0.2813},{f:5.320, a:0.1451},{f:5.330, a:0.1528},{f:5.340, a:0.4062},{f:5.350, a:0.9167},{f:5.360, a:0.6334},{f:5.370, a:0.2898},{f:5.380, a:0.3456},{f:5.390, a:0.209},{f:5.400, a:0.261},{f:5.410, a:0.6258},{f:5.420, a:0.9325},{f:5.430, a:0.669},{f:5.440, a:0.5714},{f:5.450, a:0.5813},{f:5.460, a:0.7873},{f:5.470, a:0.9025},{f:5.480, a:0.8267},{f:5.490, a:0.4508},{f:5.500, a:0.2764},{f:5.510, a:0.3467},{f:5.520, a:0.7368},{f:5.530, a:0.6493},{f:5.540, a:0.5587},{f:5.550, a:0.8459},{f:5.560, a:0.8994},{f:5.570, a:0.9369},{f:5.580, a:0.9715},{f:5.590, a:0.7115},{f:5.600, a:0.6627},{f:5.610, a:0.8368},{f:5.620, a:0.8753},{f:5.630, a:0.8838},{f:5.640, a:0.9958},{f:5.650, a:0.9791},{f:5.660, a:0.8166},{f:5.670, a:0.8546},{f:5.680, a:0.9188},{f:5.690, a:0.9014},{f:5.700, a:0.8518},{f:5.710, a:0.9739},{f:5.720, a:0.9979},{f:5.730, a:0.9887},{f:5.740, a:0.9887},{f:5.750, a:0.9946},{f:5.760, a:0.9957},{f:5.770, a:0.9965},{f:5.780, a:0.9368},{f:5.790, a:0.7703},{f:5.800, a:0.8051},{f:5.810, a:0.9316},{f:5.820, a:0.9954},{f:5.830, a:0.9977},{f:5.840, a:0.9586},{f:5.850, a:0.9551},{f:5.860, a:0.9895},{f:5.870, a:0.9998},{f:5.890, a:1},{f:5.900, a:0.9965},{f:5.910, a:0.9826},{f:5.920, a:0.9949},{f:5.930, a:0.9995},{f:5.940, a:0.9997},{f:5.950, a:0.993},{f:5.960, a:0.9837},{f:5.970, a:0.9973},{f:5.980, a:0.9982},{f:5.990, a:0.9972},{f:6.002, a:0.9694},{f:6.010, a:0.9713},{f:6.020, a:0.9569},{f:6.031, a:0.9533},{f:6.040, a:0.989},{f:6.050, a:1},{f:6.061, a:1},{f:6.070, a:0.9999},{f:6.081, a:0.9847},{f:6.090, a:0.9656},{f:6.101, a:0.9737},{f:6.110, a:0.9957},{f:6.121, a:0.9648},{f:6.130, a:0.9319},{f:6.140, a:0.9403},{f:6.150, a:0.9907},{f:6.161, a:0.9891},{f:6.171, a:0.9881},{f:6.180, a:0.991},{f:6.190, a:0.9635},{f:6.200, a:0.8776},{f:6.210, a:0.852},{f:6.220, a:0.7971},{f:6.231, a:0.7501},{f:6.241, a:0.6801},{f:6.250, a:0.5464},{f:6.260, a:0.5759},{f:6.270, a:0.7053},{f:6.281, a:0.7336},{f:6.290, a:0.5892},{f:6.300, a:0.4627},{f:6.311, a:0.5003},{f:6.320, a:0.669},{f:6.331, a:0.8694},{f:6.340, a:0.9802},{f:6.350, a:0.9918},{f:6.361, a:0.9907},{f:6.370, a:0.9867},{f:6.381, a:0.9904},{f:6.391, a:0.9895},{f:6.400, a:0.9983},{f:6.410, a:0.9995},{f:6.420, a:1},{f:6.430, a:0.999},{f:6.441, a:0.9963},{f:6.451, a:0.9819},{f:6.461, a:0.9824},{f:6.471, a:0.9872},{f:6.480, a:1},{f:6.490, a:1},{f:6.500, a:0.9997},{f:6.510, a:0.9997},{f:6.521, a:0.9959},{f:6.531, a:0.9861},{f:6.540, a:0.9861},{f:6.551, a:0.999},{f:6.561, a:1},{f:6.570, a:0.9999},{f:6.581, a:0.9999},{f:6.590, a:0.9995},{f:6.601, a:0.9935},{f:6.610, a:0.9928},{f:6.621, a:0.9986},{f:6.630, a:0.9998},{f:6.640, a:0.9986},{f:6.651, a:0.9942},{f:6.660, a:0.9938},{f:6.670, a:0.9976},{f:6.680, a:0.9927},{f:6.691, a:0.9687},{f:6.701, a:0.9687},{f:6.711, a:0.986},{f:6.720, a:0.9744},{f:6.730, a:0.8537},{f:6.740, a:0.8174},{f:6.750, a:0.7448},{f:6.760, a:0.8335},{f:6.770, a:0.8661},{f:6.781, a:0.9891},{f:6.791, a:0.9877},{f:6.801, a:0.929},{f:6.810, a:0.9171},{f:6.820, a:0.9317},{f:6.831, a:0.9439},{f:6.841, a:0.9413},{f:6.850, a:0.9521},{f:6.861, a:0.9972},{f:6.870, a:0.9681},{f:6.880, a:0.9109},{f:6.891, a:0.8545},{f:6.900, a:0.8748},{f:6.911, a:0.7799},{f:6.920, a:0.6199},{f:6.930, a:0.4831},{f:6.941, a:0.6035},{f:6.950, a:0.7967},{f:6.961, a:0.9257},{f:6.971, a:0.9086},{f:6.980, a:0.888},{f:6.990, a:0.8621},{f:7.001, a:0.7541},{f:7.011, a:0.744},{f:7.021, a:0.7645},{f:7.030, a:0.9136},{f:7.040, a:0.937},{f:7.050, a:0.942},{f:7.060, a:0.7876},{f:7.070, a:0.6632},{f:7.080, a:0.5473},{f:7.090, a:0.4803},{f:7.100, a:0.4872},{f:7.110, a:0.6095},{f:7.120, a:0.6618},{f:7.131, a:0.7269},{f:7.141, a:0.7617},{f:7.150, a:0.8955},{f:7.160, a:0.9626},{f:7.171, a:0.834},{f:7.181, a:0.7426},{f:7.190, a:0.6775},{f:7.200, a:0.7684},{f:7.211, a:0.6714},{f:7.220, a:0.557},{f:7.231, a:0.3477},{f:7.240, a:0.4253},{f:7.251, a:0.4751},{f:7.260, a:0.6745},{f:7.271, a:0.7667},{f:7.280, a:0.7589},{f:7.291, a:0.6849},{f:7.300, a:0.537},{f:7.321, a:0.5621},{f:7.330, a:0.6477},{f:7.351, a:0.6527},{f:7.361, a:0.5041},{f:7.370, a:0.459},{f:7.380, a:0.4285},{f:7.391, a:0.4526},{f:7.401, a:0.4141},{f:7.411, a:0.4957},{f:7.421, a:0.4323},{f:7.431, a:0.3621},{f:7.440, a:0.4365},{f:7.450, a:0.6249},{f:7.460, a:0.8369},{f:7.470, a:0.8342},{f:7.481, a:0.6212},{f:7.491, a:0.5003},{f:7.501, a:0.2924},{f:7.511, a:0.2931},{f:7.530, a:0.2671},{f:7.540, a:0.2617},{f:7.551, a:0.2694},{f:7.561, a:0.3583},{f:7.570, a:0.523},{f:7.580, a:0.5985},{f:7.591, a:0.5808},{f:7.610, a:0.5162},{f:7.621, a:0.4692},{f:7.630, a:0.4509},{f:7.641, a:0.4505},{f:7.660, a:0.758},{f:7.680, a:0.711},{f:7.701, a:0.5753},{f:7.710, a:0.5635},{f:7.721, a:0.5608},{f:7.730, a:0.463},{f:7.751, a:0.5009},{f:7.760, a:0.4525},{f:7.770, a:0.4131},{f:7.781, a:0.3943},{f:7.791, a:0.3442},{f:7.800, a:0.3971},{f:7.810, a:0.3988},{f:7.831, a:0.4098},{f:7.841, a:0.436},{f:7.851, a:0.5065},{f:7.860, a:0.5386},{f:7.870, a:0.5965},{f:7.880, a:0.5714},{f:7.890, a:0.499},{f:7.900, a:0.4425},{f:7.910, a:0.3868},{f:7.920, a:0.4677},{f:7.930, a:0.4437},{f:7.940, a:0.3968},{f:7.950, a:0.3248},{f:7.961, a:0.2356},{f:7.971, a:0.2195},{f:7.981, a:0.1882},{f:8.000, a:0.1456},{f:8.010, a:0.1606},{f:8.021, a:0.2182},{f:8.031, a:0.2268},{f:8.050, a:0.1596},{f:8.061, a:0.1052},{f:8.080, a:0.0936},{f:8.091, a:0.0877},{f:8.110, a:0.0337},{f:8.121, a:0.0507},{f:8.130, a:0.0445},{f:8.141, a:0.0695},{f:8.161, a:0.0868},{f:8.181, a:0.0882},{f:8.190, a:0.077},{f:8.201, a:0.0725},{f:8.210, a:0.0636},{f:8.221, a:0.051},{f:8.230, a:0.0625},{f:8.251, a:0.0869},{f:8.260, a:0.087},{f:8.281, a:0.0105},{f:8.290, a:0.0083},{f:8.300, a:0.0086},{f:8.321, a:0.0093},{f:8.331, a:0.0402},{f:8.340, a:0.0408},{f:8.350, a:0.0411},{f:8.381, a:0.0178},{f:8.391, a:0.0192},{f:8.401, a:0.0243},{f:8.410, a:0.0625},{f:8.420, a:0.0615},{f:8.430, a:0.0641},{f:8.440, a:0.0638},{f:8.450, a:0.0279},{f:8.460, a:0.0276},{f:8.470, a:0.0281},{f:8.480, a:0.0291},{f:8.490, a:0.0387},{f:8.501, a:0.0793},{f:8.511, a:0.078},{f:8.521, a:0.076},{f:8.531, a:0.0721},{f:8.560, a:0.0292},{f:8.570, a:0.036},{f:8.581, a:0.0389},{f:8.610, a:0.0259},{f:8.621, a:0.0269},{f:8.640, a:0.0275},{f:8.651, a:0.0285},{f:8.670, a:0.0396},{f:8.681, a:0.0496},{f:8.700, a:0.0434},{f:8.711, a:0.0364},{f:8.731, a:0.0225},{f:8.750, a:0.0191},{f:8.770, a:0.0272},{f:8.790, a:0.0598},{f:8.811, a:0.0613},{f:8.831, a:0.0246},{f:8.840, a:0.023},{f:8.861, a:0.0282},{f:8.881, a:0.0294},{f:8.890, a:0.0308},{f:8.921, a:0.0375},{f:8.930, a:0.0413},{f:8.951, a:0.025},{f:8.961, a:0.0223},{f:8.970, a:0.023},{f:9.001, a:0.0249},{f:9.011, a:0.0303},{f:9.020, a:0.0289},{f:9.030, a:0.0229},{f:9.091, a:0.027},{f:9.101, a:0.0256},{f:9.111, a:0.0235},{f:9.121, a:0.0194},{f:9.131, a:0.0195},{f:9.141, a:0.0241},{f:9.151, a:0.026},{f:9.161, a:0.025},{f:9.171, a:0.0273},{f:9.230, a:0.0357},{f:9.240, a:0.036},{f:9.251, a:0.0365},{f:9.261, a:0.0382},{f:9.290, a:0.0402},{f:9.301, a:0.0407},{f:9.311, a:0.0418},{f:9.330, a:0.0493},{f:9.341, a:0.0633},{f:9.370, a:0.1708},{f:9.381, a:0.2387},{f:9.400, a:0.3866},{f:9.411, a:0.4702},{f:9.430, a:0.5555},{f:9.450, a:0.6011},{f:9.461, a:0.6022},{f:9.480, a:0.6406},{f:9.500, a:0.6326},{f:9.520, a:0.5983},{f:9.540, a:0.5252},{f:9.560, a:0.363},{f:9.580, a:0.3386},{f:9.601, a:0.4685},{f:9.621, a:0.6568},{f:9.630, a:0.6707},{f:9.651, a:0.5904},{f:9.681, a:0.4721},{f:9.711, a:0.4466},{f:9.720, a:0.4558},{f:9.741, a:0.4606},{f:9.750, a:0.447},{f:9.781, a:0.4552},{f:9.790, a:0.4627},{f:9.800, a:0.456},{f:9.831, a:0.4084},{f:9.841, a:0.395},{f:9.850, a:0.3644},{f:9.901, a:0.3115},{f:9.911, a:0.2876},{f:9.921, a:0.2634},{f:9.930, a:0.2413},{f:9.940, a:0.2216},{f:9.950, a:0.1967},{f:9.960, a:0.1749},{f:9.970, a:0.1637},{f:9.980, a:0.149},{f:9.990, a:0.1328},{f:10.000, a:0.1188},{f:10.038, a:0.0683},{f:10.077, a:0.0404},{f:10.128, a:0.0232},{f:10.167, a:0.0158},{f:10.206, a:0.0133},{f:10.246, a:0.0156},{f:10.286, a:0.0144},{f:10.339, a:0.0083},{f:10.380, a:0.0035},{f:10.421, a:0.002},{f:10.462, a:0.008},{f:10.504, a:0.0094},{f:10.560, a:0.0129},{f:10.602, a:0.0063},{f:10.645, a:0.0046},{f:10.688, a:0.0029},{f:10.732, a:0.0016},{f:10.790, a:0.0039},{f:10.834, a:0.0065},{f:10.879, a:0.0017},{f:10.924, a:0.0004},{f:10.970, a:0.006},{f:11.030, a:0.0061},{f:11.077, a:0.0001},{f:11.123, a:0.0002},{f:11.171, a:0.0002},{f:11.218, a:0.0015},{f:11.282, a:0.0091},{f:11.330, a:0.0036},{f:11.379, a:0.0034},{f:11.429, a:0},{f:11.478, a:0.005},{f:11.545, a:0.0022},{f:11.596, a:0.001},{f:11.647, a:0.0002},{f:11.699, a:0.0186},{f:11.751, a:0.0202},{f:11.820, a:0},{f:11.874, a:0.0055},{f:11.927, a:0.0042},{f:11.982, a:0.0003},{f:12.037, a:0.0025},{f:12.109, a:0.0093},{f:12.165, a:0.0023},{f:12.222, a:0.0044},{f:12.279, a:0.0141},{f:12.337, a:0.0183},{f:12.413, a:0.0313},{f:12.472, a:0.0362},{f:12.531, a:0.0816},{f:12.591, a:0.0891},{f:12.652, a:0.0516},{f:12.732, a:0.0446},{f:12.794, a:0.0464},{f:12.857, a:0.0566},{f:12.920, a:0.0468},{f:12.984, a:0.0529},{f:13.068, a:0.0584},{f:13.134, a:0.0853},{f:13.200, a:0.143},{f:13.266, a:0.2166},{f:13.333, a:0.2558},{f:13.423, a:0.3504},{f:13.492, a:0.5194},{f:13.561, a:0.4917},{f:13.631, a:0.5384},{f:13.702, a:0.573},{f:13.797, a:0.5055},{f:13.870, a:0.7958},{f:13.943, a:0.7516},{f:14.017, a:0.7364},{f:14.092, a:0.8527},{f:14.192, a:0.9513},{f:14.269, a:0.9899},{f:14.347, a:0.9974},{f:14.426, a:0.9998},{f:14.505, a:1},{f:14.611, a:1},{f:14.693, a:1},{f:14.775, a:1},{f:14.859, a:1},{f:14.943, a:1},{f:15.056, a:1},{f:15.142, a:1},{f:15.230, a:1},{f:15.319, a:1},{f:15.408, a:1},{f:15.528, a:1},{f:15.620, a:0.9997},{f:15.713, a:0.9963},{f:15.808, a:0.9809},{f:15.903, a:0.9332},{f:16.031, a:0.7757},{f:16.129, a:0.7733},{f:16.229, a:0.8013},{f:16.329, a:0.6052},{f:16.431, a:0.5736},{f:16.567, a:0.5197},{f:16.672, a:0.5118},{f:16.779, a:0.5274},{f:16.886, a:0.5338},{f:16.995, a:0.3643},{f:17.141, a:0.3684},{f:17.253, a:0.3167},{f:17.367, a:0.244},{f:17.483, a:0.2587},{f:17.599, a:0.3696},{f:17.756, a:0.1405},{f:17.876, a:0.0625},{f:17.999, a:0.1458},{f:18.123, a:0.1891},{f:18.248, a:0.4239},{f:18.416, a:0.2449},{f:18.546, a:0.1854},{f:18.678, a:0.1706},{f:18.811, a:0.0555},{f:18.947, a:0.2831},{f:19.128, a:0.2359},{f:19.268, a:0.5513},{f:19.410, a:0.392},{f:19.554, a:0.1782},{f:19.701, a:0.3766},{f:19.897, a:0.4001},{f:20.048, a:0.134},{f:20.202, a:0.1776},{f:20.358, a:0.2702},{f:20.517, a:0.2358},{f:20.730, a:0.3949},{f:20.894, a:0.174},{f:21.062, a:0.4918},{f:21.231, a:0.6391},{f:21.404, a:0.3013},{f:21.636, a:0.2903},{f:21.815, a:0.6813},{f:21.997, a:0.614},{f:22.183, a:0.3509},{f:22.371, a:0.3531},{f:22.624, a:0.5897},{f:22.821, a:0.3386},{f:23.020, a:0.4168},{f:23.223, a:0.3697},{f:23.430, a:0.4828},{f:23.652, a:0.8034},{f:23.923, a:0.8559},{f:24.143, a:0.3833},{f:24.366, a:0.1629},{f:24.594, a:0.2199},{f:24.900, a:0.6174},{f:25.138, a:0.9876},{f:25.381, a:0.754},{f:25.628, a:0.3827},{f:25.880, a:0.721},{f:26.219, a:0.6239},{f:26.483, a:0.7837},{f:26.752, a:0.9124},{f:27.027, a:0.7926},{f:27.307, a:0.48},{f:27.685, a:0.7087},{f:27.980, a:0.966},{f:28.281, a:0.9996},{f:28.588, a:0.9675},{f:28.902, a:0.896},{f:29.326, a:0.9522},{f:29.656, a:0.9512},{f:29.994, a:0.9646},{f:30.340, a:0.9709},{f:30.694, a:1},{f:31.075, a:0.957},{f:31.546, a:0.9054},{f:31.928, a:0.9239},{f:32.321, a:0.9206},{f:32.723, a:0.9842},{f:33.267, a:0.9991},{f:33.693, a:0.9611},{f:34.130, a:0.967},{f:34.578, a:0.9992},{f:35.039, a:0.9991},{f:35.100, a:1},{f:299.800, a:1},{f:311.319, a:1},{f:312.292, a:0.96},{f:312.944, a:0.92},{f:313.598, a:0.96},{f:314.256, a:0.88},{f:314.916, a:0.83},{f:315.579, a:0.86},{f:316.245, a:0.8},{f:316.913, a:0.83},{f:317.249, a:0.75},{f:317.585, a:0.76},{f:318.259, a:0.74},{f:319.616, a:0.72},{f:320.985, a:0.7},{f:321.674, a:0.83},{f:322.366, a:0.705},{f:323.060, a:0.71},{f:323.758, a:0.725},{f:324.459, a:0.805},{f:325.163, a:0.73},{f:325.870, a:0.8},{f:326.580, a:0.86},{f:327.650, a:1},{f:329.451, a:1},{f:330.540, a:0.86},{f:330.905, a:0.856},{f:331.637, a:0.755},{f:332.373, a:0.75},{f:333.111, a:0.7},{f:333.853, a:0.6},{f:334.598, a:0.62},{f:335.347, a:0.595},{f:336.099, a:0.72},{f:336.854, a:0.6},{f:337.613, a:0.58},{f:338.375, a:0.56},{f:339.140, a:0.69},{f:339.909, a:0.55},{f:340.295, a:0.706},{f:340.682, a:0.54},{f:342.237, a:0.53},{f:343.807, a:0.522},{f:345.392, a:0.521},{f:346.189, a:0.53},{f:346.590, a:0.52},{f:346.991, a:0.585},{f:347.796, a:0.524},{f:348.605, a:0.735},{f:349.417, a:0.52},{f:350.234, a:0.71},{f:351.054, a:0.515},{f:351.878, a:0.53},{f:352.706, a:0.518},{f:353.538, a:0.52},{f:354.374, a:0.58},{f:355.213, a:0.525},{f:356.057, a:0.91},{f:356.905, a:0.59},{f:357.757, a:0.89},{f:358.612, a:0.58},{f:359.472, a:0.68},{f:360.337, a:0.88},{f:361.205, a:1},{f:361.641, a:0.73},{f:362.077, a:0.79},{f:362.954, a:0.57},{f:363.835, a:0.78},{f:364.720, a:0.6},{f:365.610, a:0.55},{f:366.504, a:0.57},{f:367.402, a:0.606},{f:368.305, a:0.56},{f:369.212, a:0.58},{f:370.123, a:0.75},{f:371.040, a:0.59},{f:371.960, a:0.61},{f:372.886, a:0.77},{f:373.815, a:0.62},{f:374.750, a:0.65},{f:375.689, a:0.64},{f:376.161, a:0.68},{f:376.633, a:0.66},{f:377.582, a:0.7},{f:378.535, a:0.82},{f:379.494, a:0.73},{f:380.457, a:0.74},{f:381.425, a:0.76},{f:382.398, a:0.8},{f:382.886, a:0.88},{f:383.376, a:0.92},{f:384.359, a:0.86},{f:385.347, a:0.92},{f:386.340, a:0.987},{f:387.339, a:0.994},{f:388.342, a:0.998},{f:389.351, a:1},{f:390.365, a:0.995},{f:391.384, a:1},{f:406.233, a:1},{f:408.447, a:0.993},{f:409.563, a:0.985},{f:410.685, a:0.98},{f:411.813, a:0.95},{f:412.948, a:0.92},{f:413.517, a:0.9},{f:414.661, a:0.84},{f:415.235, a:0.88},{f:417.549, a:0.78},{f:419.888, a:1},{f:421.067, a:0.8},{f:422.254, a:0.69},{f:423.446, a:0.72},{f:424.646, a:0.64},{f:427.066, a:0.58},{f:428.286, a:0.665},{f:429.513, a:0.58},{f:431.988, a:0.54},{f:433.237, a:0.665},{f:434.493, a:0.5},{f:435.756, a:0.64},{f:437.026, a:0.495},{f:438.304, a:0.52},{f:439.589, a:0.48},{f:440.882, a:0.475},{f:444.807, a:0.47},{f:446.131, a:0.55},{f:447.463, a:0.61},{f:448.802, a:0.465},{f:450.150, a:0.625},{f:451.506, a:0.46},{f:452.870, a:0.53},{f:454.242, a:0.46},{f:455.623, a:0.5},{f:457.012, a:0.78},{f:457.710, a:0.62},{f:458.410, a:0.85},{f:459.816, a:0.68},{f:460.522, a:0.62},{f:462.654, a:0.48},{f:464.087, a:0.6},{f:465.528, a:0.5},{f:466.978, a:0.7},{f:468.438, a:0.59},{f:469.906, a:0.51},{f:471.384, a:0.74},{f:472.871, a:0.54},{f:474.367, a:0.63},{f:475.873, a:0.56},{f:477.389, a:0.64},{f:478.914, a:0.7},{f:480.449, a:0.9},{f:481.994, a:1},{f:483.548, a:1},{f:485.113, a:0.85},{f:488.274, a:0.73},{f:489.869, a:0.8},{f:491.475, a:0.69},{f:493.092, a:0.79},{f:494.719, a:0.7},{f:498.007, a:0.72},{f:499.667, a:0.76},{f:501.338, a:0.8},{f:503.020, a:0.78},{f:504.714, a:0.8},{f:506.419, a:0.88},{f:507.276, a:0.84},{f:509.864, a:0.88},{f:511.604, a:0.92},{f:513.356, a:0.94},{f:515.120, a:0.96},{f:516.897, a:0.98},{f:518.685, a:0.99},{f:520.486, a:0.995},{f:522.300, a:1},{f:555.185, a:1},{f:557.249, a:0.995},{f:559.328, a:0.99},{f:561.423, a:0.98},{f:563.534, a:0.96},{f:565.660, a:0.94},{f:567.803, a:0.92},{f:568.880, a:0.85},{f:571.048, a:0.91},{f:572.137, a:0.8},{f:574.330, a:0.82},{f:576.538, a:0.74},{f:578.764, a:0.76},{f:583.268, a:0.68},{f:590.157, a:0.59},{f:592.490, a:0.67},{f:594.841, a:0.55},{f:599.600, a:0.5},{f:600.802, a:0.48},{f:603.219, a:0.59},{f:605.657, a:0.46},{f:609.350, a:0.48},{f:614.344, a:0.7},{f:616.872, a:1},{f:619.421, a:0.7},{f:621.992, a:0.43},{f:624.583, a:0.55},{f:624.583, a:0.64},{f:629.832, a:0.54},{f:632.489, a:0.83},{f:635.169, a:0.68},{f:637.872, a:0.43},{f:640.598, a:0.54},{f:643.348, a:0.345},{f:647.516, a:0.38},{f:651.739, a:0.34},{f:654.585, a:0.4},{f:657.456, a:0.56},{f:660.352, a:0.42},{f:663.274, a:0.56},{f:666.222, a:0.8},{f:669.196, a:1},{f:672.197, a:1},{f:675.225, a:0.9},{f:678.281, a:0.8},{f:681.364, a:0.6},{f:684.475, a:0.74},{f:687.615, a:0.36},{f:690.783, a:0.6},{f:693.981, a:0.33},{f:697.209, a:0.43},{f:700.467, a:0.55},{f:703.756, a:0.8},{f:707.075, a:1},{f:710.427, a:0.8},{f:713.810, a:0.6},{f:717.225, a:0.44},{f:720.673, a:0.25},{f:724.155, a:0.355},{f:727.670, a:0.21},{f:731.220, a:0.25},{f:734.804, a:0.185},{f:738.424, a:0.41},{f:742.079, a:0.19},{f:745.771, a:0.51},{f:747.631, a:0.199},{f:749.500, a:0.32},{f:753.266, a:0.2},{f:757.071, a:0.21},{f:760.914, a:0.22},{f:764.796, a:0.24},{f:768.718, a:0.32},{f:770.694, a:0.26},{f:776.684, a:0.5},{f:780.729, a:0.7},{f:784.817, a:0.9},{f:793.122, a:1},{f:801.604, a:0.65},{f:810.270, a:0.37},{f:814.674, a:0.99},{f:819.126, a:0.4},{f:823.626, a:0.3},{f:828.177, a:0.2},{f:832.778, a:0.26},{f:837.430, a:0.15},{f:842.135, a:0.22},{f:846.893, a:0.12},{f:856.571, a:0.115},{f:866.474, a:0.11},{f:871.512, a:0.1},{f:876.608, a:0.13},{f:881.765, a:0.105},{f:886.982, a:0.101},{f:892.262, a:0.1},{f:897.605, a:0.11},{f:903.012, a:0.13},{f:908.485, a:0.28},{f:914.024, a:0.2},{f:919.632, a:0.3},{f:925.309, a:0.69},{f:931.056, a:0.3},{f:936.875, a:0.2},{f:948.734, a:0.1},{f:954.777, a:0.09},{f:960.897, a:0.08},{f:967.097, a:0.078},{f:973.377, a:0.076},{f:979.739, a:0.074},{f:986.184, a:0.072},{f:992.715, a:0.24},{f:999.333, a:0.07},{f:1006.040, a:0.068},{f:1012.838, a:0.065},{f:1019.728, a:0.062},{f:1026.712, a:0.06},{f:1033.793, a:0.1},{f:1037.370, a:0.059},{f:1040.972, a:0.135},{f:1044.599, a:0.0585},{f:1048.252, a:0.165},{f:1055.634, a:0.058},{f:1063.121, a:0.056},{f:1070.714, a:0.054},{f:1078.417, a:0.07},{f:1086.232, a:0.052},{f:1094.161, a:0.09},{f:1098.168, a:0.05},{f:1118.657, a:0.0496},{f:1127.068, a:0.06},{f:1131.321, a:0.0495},{f:1135.606, a:0.18},{f:1144.275, a:0.049},{f:1153.077, a:0.136},{f:1162.016, a:0.0488},{f:1171.094, a:0.0486},{f:1189.683, a:0.048},{f:1199.200, a:0.14},{f:1208.871, a:0.0475},{f:1228.689, a:0.047},{f:1233.745, a:0.14},{f:1238.843, a:0.046},{f:1249.167, a:0.046},{f:1259.664, a:0.18},{f:1281.197, a:0.045},{f:1286.695, a:0.044},{f:1292.241, a:0.11},{f:1303.478, a:0.043},{f:1362.727, a:0.04},{f:1394.419, a:0.036},{f:1400.935, a:0.045},{f:1407.512, a:0.035},{f:1414.151, a:0.05},{f:1434.450, a:0.034},{f:1499.000, a:0.036},{f:1529.592, a:0.04},{f:1545.361, a:0.09},{f:1561.458, a:0.045},{f:1577.895, a:0.05},{f:1603.209, a:0.1},{f:1620.541, a:0.2},{f:1647.253, a:0.64},{f:1665.556, a:0.2},{f:1703.409, a:0.1},{f:1722.989, a:0.055},{f:1763.529, a:0.04},{f:1806.024, a:0.03},{f:1828.049, a:0.08},{f:1850.617, a:0.03},{f:1873.750, a:0.025},{f:1998.667, a:0.02},{f:2081.944, a:0.02},{f:2111.268, a:0.05},{f:2141.429, a:0.02},{f:2271.212, a:0.03},{f:2342.188, a:0.04},{f:2379.365, a:0.06},{f:2417.742, a:0.1},{f:2457.377, a:0.18},{f:2498.333, a:1},{f:2540.678, a:0.18},{f:2584.483, a:0.1},{f:2629.825, a:0.06},{f:2676.786, a:0.04},{f:2775.926, a:0.03},{f:2998.000, a:0.02},{f:3059.184, a:0.021},{f:3122.917, a:0.022},{f:3189.362, a:0.0218},{f:3258.696, a:0.0219},{f:3331.111, a:0.022},{f:3406.818, a:0.0224},{f:3486.047, a:0.023},{f:3569.048, a:0.024},{f:3656.098, a:0.0255},{f:3747.500, a:0.0277},{f:3843.590, a:0.035},{f:3944.737, a:0.046},{f:4051.351, a:0.058},{f:4163.889, a:0.078},{f:4282.857, a:0.1},{f:4408.824, a:0.2},{f:4542.424, a:0.5},{f:4684.375, a:0.8},{f:4758.730, a:1},{f:5551.852, a:0.5},{f:5551.852, a:1},{f:5765.385, a:0.2},{f:5765.385, a:0.8},{f:5996.000, a:0.1},{f:6245.833, a:0.07},{f:6517.391, a:0.05},{f:6813.636, a:0.044},{f:7495.000, a:0.03},{f:8327.778, a:0.022},{f:9084.848, a:0.018},{f:9670.968, a:0.04},{f:9993.333, a:0.1},{f:11000.000, a:0.2},{f:12600.000, a:0.35},{f:13500.000, a:0.3},{f:15000.000, a:0.1},{f:16000.000, a:0.05},{f:17000.000, a:0.02},{f:18000.000, a:0.01},{f:19000.000, a:0.001},{f:20000.000, a:0},{f:15000000.000, a:0},{f:15500000.000, a:0.001},{f:16000000.000, a:0.005},{f:17000000.000, a:0.01},{f:18000000.000, a:0.02},{f:19000000.000, a:0.03},{f:20000000.000, a:0.1},{f:26000000.000, a:0.97},{f:27000000.000, a:0.98},{f:28000000.000, a:0.995},{f:29000000.000, a:0.999},{f:30000000.000, a:1}];
﻿/*name:{name:"str[:long]", url:"acr:url[;acr:url]..", desc:"ag;lv;fam;m;sc", stat:"pr|pl|o|s|f|p|g", 
  parts: [
    {n:"",  ctry:"us|ru|eu|jp|cn|ind..", 
    type:"r|mw|nir|fir|ir|opt|uv|nuv|fuv|x|sx|hx|g|par|gr|emf",  //Spectral type
    pur:"sol|neo|exo|as|sur|cmb|cxb|grb|seis|de|dm|tim|w|cr",       //Special purpose
    id:"cospar-id", 
    url:"acr:url[;acr:url]..", 
    icon:"", 
    desc:"(see main)"}
  ], ev: [
    {pt:"", dt:"", tp:"l|hib|re|eom|nom|mal", loc:"", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"leo|peo|sseo|meo|heeo|geo|sol:ef|sol:el|sol:esl1|sol:esl2|sol:ho", desc:""}
  ], inst: [
    {n:"", tp:"im|sp|acc|ctr|is|par|li|em|psp|msp|cor", //Type, im:imaging,sp:spectrometer,acc:accelerometer,ctr:counter,is:imaging spectrometer,par:particles,li:laser interferometry;em:magnetic/electric field meter;psp:particle spectrometer;msp:mass spectrometer; cor:coronagraph; default:im
     band:"lo..hi|cent/width",   //Bandwidth Low..High or Center/Width;  freq hz (def.), wavel. [k..a]m, ener. [k..T]eV
     res:"",  //Angular resolution  in arcsec, lo..hi
     tres:"", //Temporal resolution in seconds
     sres:"", //Spectral resolution in f/delta f (R)
     d:"",    //Aperture in meters
     px:"",   //Pixel size in arcsec
     sens:"", //Sensitivity flux mJy (r), mCrab (x,g), mag (opt)
     fov:"",  //Field of view in deg [x deg]
     foc:"",  //Focal length in meters
     ea:"",   //Effective Area in m^2
     url:"",  //Instrument links
     desc:"c:;"}  //desc: c:l r v t b  left right vertical top bottom, cl
]},
Tenma, Hakucho, td-1, isee, oao-2, oso 2..7, ariel1-5, smm
rae-b 25 kHz to 13.1 MHz 
P78-1/SOLWIND http://heasarc.nasa.gov/docs/heasarc/missions/p78-1.html
  http://www.planetary.org/blogs/guest-blogs/2014/0829-the-pivotal-discovery.html
Nano-jasmine http://www.jasmine-galaxy.org/spec-en.html
*/
var scopes = {
ace:{name:"ACE:Advanced Composition Explorer", url:"hp:www.srl.caltech.edu/ACE/", desc:"ag:nasa,gsfc;fam:Explorer;lv:Delta II 7920-8", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"par", pur:"sol", id:"1997-045A", icon:"ace.png", desc:"m:752kg"}
  ], ev: [
    {pt:"", dt:"1997-08-25", tp:"l", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", dt:"1997-12-06", tp:"sco", loc:"sol:esl1", desc:""}
  ], inst: [
    {n:"CRIS:Cosmic Ray Isotope Spectrometer", tp:"psp", band:"100..500MeV", res:"", fov:"90x90deg", url:"", desc:"c:"},
    {n:"SIS:Solar Isotope Spectrometer", tp:"psp", band:"10..100MeV", res:"", fov:"104deg", url:"", desc:"c:"},
    {n:"ULEIS:Ultra Low Energy Isotope Spectrometer", tp:"psp", band:"45..10000keV", res:"", fov:"24x20deg", url:"", desc:"c:"},
    {n:"SEPICA:Solar Energetic Particle Ionic Charge Analyzer", tp:"psp", band:"0.5..10MeV", res:"", fov:"61.5x17.5deg", url:"", desc:" Ionic charge state, elemental composition and energy spectra;c:"},
    {n:"SWICS:Solar Wind Ion Composition Spectrometer", tp:"psp", band:"0.1..10keV", res:"", fov:"82x10deg", url:"", desc:"Elemental and ionic charge state composition, temperature and speeds"},
    {n:"SWIMS:Solar Wind Ion Mass Spectrometer", tp:"msp", band:"0.1..5keV", res:"", fov:"62x62deg", url:"", desc:"c:"},
    {n:"EPAM:Electron, Proton and Alpha Monitor", tp:"par", band:"0.03..5MeV", res:"", fov:"80deg", tres:"2min", url:"", desc:"c:"},
    {n:"SWEPAM:Solar Wind Electron, Proton and Alpha Monitor", tp:"par", band:"1eV..35keV", res:"", fov:"160x30deg", tres:"2min", url:"", desc:"c:"},
    {n:"MAG:Magnetic Field Monitor", tp:"em", band:"4..60000nT", res:"", tres:"0.35s", url:"", desc:"c:"}
]},
aditya:{name:"Aditya-L1", url:"hp:aditya.iiap.res.in/", desc:"Solar Coronograph;ag:isro;lv:PSLV XL;m:400kg;sc:0.6;x:-10;y:16", stat:"o", 
  parts: [
    {n:"आदित्य", ctry:"ind", type:"opt;ir", pur:"sol", id:"", icon:"aditya-l1.png", desc:""}
  ], ev: [
    {pt:"", dt:"2023-09-02", tp:"l", loc:"ter:sri", desc:""},
    {pt:"", dt:"2024-01-06", tp:"sco", loc:"sol:esl1", desc:""}
  ], inst: [
    {n:"VELC:Visible Emission Line Coronagraph", band:"530..640nm", res:"2", d:"0.2", px:"", url:"", desc:"c:nl;cl:nly"},
    {n:"SUIT:Solar Ultraviolet Imaging Telescope", band:"200..400nm", res:"", d:"", px:"", url:"", desc:"c:nl;cl:nl"},
    {n:"SoLEXS:Solar Low Energy X-ray Spectrometer", band:"", res:"", d:"", px:"", url:"", desc:"c:;"},
    {n:"ASPEX:Aditya Solar wind Particle Experiment", band:"", res:"", d:"", px:"", url:"", desc:"c:;"},
    {n:"PAPA:Plasma Analyser Package For Aditya", band:"", res:"", d:"", px:"", url:"", desc:"c:;"},
    {n:"HEL1OS:High Energy L1 Orbiting X-ray Spectrometer", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
agile:{name:"AGILE:Astrorivelatore Gamma ad Immagini LEggero", url:"hp:agile.asdc.asi.it/", desc:"ag:asi;lv:PSLV-CA;sc:0.7;x:18;y:0", stat:"o", 
  parts: [
    {n:"", ctry:"it", type:"g;x", pur:"", id:"2007-013A", icon:"agile.png", desc:""}], 
  ev:[{pt:"", dt:"2007-04-23", tp:"l", loc:"ter:sri:SLP", desc:""},
      {pt:"", dt:"2007-05-05", tp:"sco", loc:"ter:leo:523x552kmx2.4deg", desc:""}
  ], inst: [
    {n:"AGRID", band:"7.25E+21..1.21E+25", res:"36000..720", desc:"c:nl;cl:nl;"},
    {n:"Super-AGILE", band:"4.35E+18..1.45E+19", res:"360", desc:"c:nr;"}
]},
akari:{name:"Akari", url:"hp:www.ir.isas.jaxa.jp/ASTRO-F/Outreach/index_e.html;jaxa:www.isas.ac.jp/e/enterp/missions/akari/index.shtml", desc:"ag:jaxa;lv:M-V;dim:5.5x1.9x3.7m", stat:"s", 
  parts: [
    {n:"Astro-F", ctry:"jp", type:"ir", pur:"", id:"2006-005A", icon:"", desc:"m:952kg"}
  ], ev: [
    {pt:"", dt:"2006-02-21", tp:"l", loc:"ter:uch:M-5", desc:""},
    {pt:"", dt:"2006-03-21", tp:"sco", loc:"ter:sseo:696x711kmx98.2deg", desc:""},
    {pt:"", dt:"2011-11-24", tp:"tos", loc:"", desc:"eom"}
  ], inst: [
    {n:"", band:"1.7..180um", d:"0.685", px:"1.5", fov:"10x10'", desc:"warm:<5.5um;c:nr;"},
    {n:"", band:"50..180um", d:"", px:"", desc:"c:nr;"}
]},
ariel:{name:"ARIEL:Atmospheric Remote‐sensing Infrared Exoplanet Large‐survey mission", url:"hp:arielmission.space;esa:sci.esa.int/ariel/;tw:twitter.com/ArielTelescope", desc:"ag:esa;lv:Ariane 62;dim:,m:1200kg;sc:0.6;y:48", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"ir", pur:"exo", id:"", icon:"ariel.png", desc:""}
  ], ev: [
    {pt:"", dt:"2029", tp:"l", loc:"ter:kou:ELA-4", desc:""},
    {pt:"", dt:"2029", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2031", tp:"nom", loc:"", desc:"eom"}
  ], inst: [
    {type:"is", n:"AIRS", band:"1.95..7.8um", d:"1.1x0.73m", px:"", sres:"30..100", fov:"", desc:"c:nl;cl:nly"},
    {type:"is", n:"NIRSpec", band:"1.25..1.95um", d:"1.1x0.73m", px:"", sres:"10", fov:"", desc:"c:nr;cl:nry;"},
    {type:"im", n:"FGS", band:"0.8..1.2um", d:"1.1x0.73m", px:"", fov:"", desc:"c:nr;c:nry;"},
    {type:"im", n:"VISPhot", band:"0.5..0.55um", d:"1.1x0.73m", px:"", fov:"", desc:"c:nr;cl:nr;"}
]},
asca:{name:"ASCA:Advanced Satellite for Cosmology and Astrophysics", url:"hp:www.isas.ac.jp/e/enterp/missions/asca/index.shtml", desc:"ag:jaxa;lv:M-3SII", stat:"s", 
  parts: [
    {n:"Astro-D", ctry:"jp", type:"x", pur:"", id:"1993-011A", icon:"", desc:"m:420kg"}
  ], ev: [
    {pt:"", dt:"1993-02-20", tp:"l", loc:"ter:uch:M-1", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:leo:525x615kmx31deg", desc:""},
    {pt:"", dt:"2000-07-14", tp:"los", loc:"", desc:"eom"}
]},
asos:{name:"KuaFu-1", url:"", desc:"ag:cnsa;m:888kg;lv:CZ-2D", stat:"o", 
  parts: [
    {n:"ASO-S:Advanced Space-based Solar Observatory", ctry:"cn", type:"x", pur:"sol;w", id:"2022-129A", icon:"kuafu.png", desc:""}
  ], ev: [
    {pt:"", dt:"2022-10-08", tp:"l", loc:"ter:jiu", desc:""},
    {pt:"", dt:"2022-10-08", tp:"sco", loc:"ter:sseo:720kmx98.2deg", desc:""},
    {pt:"", dt:"2026", tp:"nom", loc:"", desc:"?"}
  ], inst: [
    {n:"FMG:Full-disk Magnetograph", tp:"is", band:"532nm", res:"0.5", tres:"120", sens:"", fov:"33´", desc:"c:;cl:nl;"},
    {n:"LST:Lyman-alpha Solar Telescope", tp:"is", band:"121.6nm", res:"4.6", tres:"1..10s", fov:"2.5rsol", foc:"", sens:"", desc:"c:;cl:nl;"},
    {n:"HXI:Hard X-ray Imager", tp:"is", band:"30..300keV", res:"6", sres:"3%@662keV", tres:"0.5", ea:"100cm2", fov:"1deg", foc:"", sens:"", desc:"c:nr;cl:nl;"}
]},
astro1:{name:"ASTRO-1", url:"hp:nssdc.gsfc.nasa.gov/nmc/spacecraftDisplay.do?id=ASTRO-1;MAST:archive.stsci.edu/astro/", desc:"ag:nasa;lv:STS-35 Columbia", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"uv;x", pur:"", id:"1990-106A", icon:"", desc:"m:12453kg"}
  ], ev: [
    {pt:"", dt:"1990-12-02", tp:"l", loc:"ter:ksc", desc:""},
    {pt:"", dt:"1990-12-02", tp:"sco", loc:"ter:leo:500kmx28deg", desc:""},
    {pt:"", dt:"1990-12-11", tp:"edl", loc:"", desc:"eom"}
  ], inst: [
    {n:"UIT:Ultraviolet Imaging Telescope", tp:"im", band:"120..310nm", res:"", sres:"", ea:"", sens:"", fov:"", desc:"c:;cl:;"},
    {n:"HUT:Hopkins Ultraviolet Telescope", tp:"is", band:"42.5..185nm", res:"", sres:"", fov:"", foc:"", sens:"", desc:"c:;cl:;"},
    {n:"WUPPE:Wisconsin Ultraviolet Photopolarimetry Experiment", tp:"sp", band:"125..320nm", res:"", sres:"", fov:"", foc:"", sens:"", desc:"c:;cl:;"},
    {n:"BBXRT:Broad Band X-ray Telescope", tp:"im", band:"0.3..12keV", res:"", sres:"", fov:"", foc:"", sens:"", desc:"c:;cl:;"}
]},
astro2:{name:"ASTRO-2", url:"hp:nssdc.gsfc.nasa.gov/nmc/spacecraftDisplay.do?id=ASTRO-2;MAST:archive.stsci.edu/astro/", desc:"ag:nasa;lv:STS-67 Endeavour", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"uv", pur:"", id:"1995-007A", icon:"", desc:"m:12453kg"}
  ], ev: [
    {pt:"", dt:"1995-03-02", tp:"l", loc:"ter:ksc", desc:""},
    {pt:"", dt:"1995-03-02", tp:"sco", loc:"ter:leo:349x363kmx28deg", desc:""},
    {pt:"", dt:"1995-03-18", tp:"edl", loc:"", desc:"eom"}
  ], inst: [
    {n:"UIT:Ultraviolet Imaging Telescope", tp:"im", band:"120..310nm", res:"", sres:"", ea:"", sens:"", fov:"", desc:"c:;cl:;"},
    {n:"HUT:Hopkins Ultraviolet Telescope", tp:"is", band:"42.5..185nm", res:"", sres:"", fov:"", foc:"", sens:"", desc:"c:;cl:;"},
    {n:"WUPPE:Wisconsin Ultraviolet Photopolarimetry Experiment", tp:"sp", band:"125..320nm", res:"", sres:"", fov:"", foc:"", sens:"", desc:"c:;cl:;"}
]},
astron:{name:"Astron", url:"hp:heasarc.gsfc.nasa.gov/docs/heasarc/missions/astron.html", desc:"ag:rosc,iki;lv:Proton-K/Blok D1", stat:"s", 
  parts: [
    {n:"Астрон", ctry:"su", type:"uv;x", pur:"", id:"1983-020A", icon:"", desc:"m:3250kg"}
  ], ev: [
    {pt:"", dt:"1983-03-23", tp:"l", loc:"ter:bai:LC200/39", desc:""},
    {pt:"", dt:"1983-04-03", tp:"sco", loc:"ter:heeo:2000x200000kmx51.5deg", desc:""},
    {pt:"", dt:"1989-06", tp:"los", loc:"", desc:"eom"}
  ], inst: [
    {n:"SKR-02M", tp:"sp", band:"2..25keV", res:"", sres:"", tres:"", ea:"0.17m^2", sens:"", fov:"3deg", desc:"c:;cl:;"},
    {n:"UV Telescope", tp:"is", band:"150..350nm", res:"", fov:"'", d:0.8, foc:"5m", tres:"", sens:"", desc:"c:;cl:;"}
]},
astrosat:{name:"Astrosat", url:"hp:astrosat.iucaa.in/;isro:www.isro.gov.in/Spacecraft/astrosat", desc:"ag:isro;lv:PSLV-XL;sc:1.3;x:0;y:0;m0:1470kg;m:1513kg", stat:"o",
  parts: [
    {n:"", ctry:"ind", type:"uv;x", pur:"", id:"2015-052A", icon:"astrosat.png", desc:""}
  ], ev: [
    {pt:"", dt:"2015-09-28", tp:"l", loc:"ter:sri:SLP", desc:""},
    {pt:"", dt:"2015-09-28", tp:"sco", loc:"ter:leo:644.6x651.5kmx6deg", desc:""},
    {pt:"", dt:"2020", tp:"nom", loc:"", desc:"pend"}
  ], inst: [
    {n:"SXT:Soft X-ray imaging Telescope", band:"0.3..8keV", res:"180", sres:"5..6%@1.5keV;2.5%@6keV", tres:"2.4s;278ms", ea:"128@1.5kV;22@6keV", sens:"15uCrab@1000s", fov:"40'", desc:"c:nl;cl:nl;"},
    {n:"UVIT:Ultra Violet Imaging Telescope", tp:"is", band:"130..650nm", res:"1.8", fov:"28'", d:0.38, px:1.8, foc:"4.75m", tres:"1.7ms", sens:"20@2000s", desc:"c:r;cl:n;"},
    {n:"CZTI:Cadmium-Zinc-Telluride Imager", band:"10..100keV", res:"480", ea:"480", fov:"6x6deg", sres:"6%@100keV", tres:"20us", sens:"1mCrab@1000s", desc:"c:nl;"},
    {n:"SSM:Scanning Sky Monitor", tp:"ctr", band:"2.5..10keV", res:"300..600", sres:"25%@6keV", tres:"1ms", fov:"10x90deg", sens:"28mCrab@600s", desc:"c:nl;"},
    {n:"LAXPC:Large Area X-ray Proportional Counters", tp:"ctr", band:"3..80keV", res:"300", sres:"22%@22keV", tres:"10us", ea:"8000@5..20keV", fov:"1x1deg", sens:"1mCrab@100s", desc:"c:nl;"}
]},
athenaplus:{name:"Athena:Advanced Telescope for High-energy Astrophysics", url:"hp:www.the-athena-x-ray-observatory.eu/;mpe:www.mpe.mpg.de/Athena;tw:twitter.com/AthenaXobs", desc:"ag:esa;lv:Ariane 64;m:7100kg;fam:L-class;sc:1.6;x:0;y:0", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"x", pur:"", id:"", icon:"athena.png", desc:""}
  ], ev: [
    {pt:"", dt:"2037", tp:"l", loc:"ter:kou:ELA-4", desc:""},
    {pt:"", dt:"2037", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2041", tp:"nom", loc:"sol:esl2", desc:"pend"}
  ], inst: [
    {n:"X-IFU:X-ray Integral Field Unit", tp:"is", band:"0.3..10keV", res:"5", sres:"2.5eV@6keV", fov:"5'", ea:"1.4@1keV", sens:">1Crab", url:"athena2.irap.omp.eu/spip.php?article15", desc:"c:nbr;cl:nly;"},
    {n:"WFI:Wide Field Imager", tp:"im", band:"0.1..12keV", res:"5", sres:"8%@1keV;2.5%@6keV", fov:"40'", ea:"1.33@1keV", sens:"10mCrab", url:"athena2.irap.omp.eu/spip.php?article18", desc:"c:br;cl:n;"}
]},
/*axis:{name:"AXIS:Advanced X-ray Imaging Satellite", url:"hp:https://axis.astro.umd.edu/;tw:witter.com/AXISprobe", desc:"ag:nasa;lv:TBA;sc:1.8;x:30;y:16", stat:"pl", 
  parts: [
    {n:"", ctry:"us", type:"x", pur:"", id:"", icon:"axis.png", desc:""}
  ], ev: [
    {pt:"", dt:"2024", tp:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2024", tp:"sco", loc:"ter:heeo", desc:""}
  ], inst: [
    {n:"", band:"0.2..10keV", res:"1", desc:"c:nr;cl:nly;"}
]},*/
bepposax:{name:"Beppo-SAX", url:"hp:www.asdc.asi.it/bepposax/", desc:"ag:asi;lv:Atlas I Centaur", stat:"s", 
  parts: [
    {n:"", ctry:"it", type:"x", pur:"", id:"1996-027A", icon:""}
  ], ev: [
    {pt:"", dt:"1996-04-30", tp:"l", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", dt:"1996-06-10", tp:"sco", loc:"ter:leo:581x604kmx3.9deg", desc:""},
    {pt:"", dt:"2003-04-29", tp:"ae", loc:"ter", desc:"eom"}
]}, 
brite:{name:"BRITE:BRIght-star Target Explorer", type:"opt", pur:"seis", url:"hp:www.brite-constellation.at/;Can-X3:www.utias-sfl.net/nanosatellites/CanX3/", desc:"m:10kg;sc:0.7;x:12", stat:"o", 
  parts: [
    {n:"BRITE-U;UniBRITE", ctry:"at", url:"www.univie.ac.at/brite-constellation/html/brite_austria.html", id:"2013-009G", icon:"brite.png", desc:"ag:uvie;lv:PSLV"},
    {n:"BRITE-A;TUGSat-1", ctry:"at", url:"www.tugsat.tugraz.at/", id:"2013-009F", icon:"brite.png", desc:"ag:tug;lv:PSLV"},
    {n:"BRITE-PL-1;Lem", ctry:"pl", url:"www.brite-pl.pl/pliki/main_en.html", id:"2013-066", icon:"brite.png", desc:"lv:Dnjepr-1"},
    {n:"BRITE-PL-2;Heweliusz", ctry:"pl", url:"www.brite-pl.pl/pliki/main_en.html", id:"2014-049B", icon:"brite.png", desc:"lv:CZ-4B"},
    {n:"BRITE-CA1;BRITE-Toronto", ctry:"ca", url:"www.asc-csa.gc.ca/eng/satellites/brite/default.asp", id:"2014-033L", icon:"brite.png", desc:"ag:csa;lv:Dnjepr-1"},
    {n:"BRITE-CA2;BRITE-Montreal", ctry:"ca", url:"www.asc-csa.gc.ca/eng/satellites/brite/default.asp", id:"2014-033AS", icon:"brite.png", desc:"ag:csa;lv:Dnjepr-1", stat:"f"}
  ], ev: [
    {pt:"0", dt:"2013-02-25", tp:"l", loc:"ter:sri:FLP", desc:""},
    {pt:"0", dt:"2013-02-26", tp:"sco", loc:"ter:sseo:770x783kmx98.6deg", desc:""},
    {pt:"1", dt:"2013-02-25", tp:"l", loc:"ter:sri:FLP", desc:""},
    {pt:"1", dt:"2013-02-27", tp:"sco", loc:"ter:sseo:771x783kmx98.6deg", desc:""},
    {pt:"2", dt:"2013-11-22", tp:"l", loc:"ter:yas:LC-370/13", desc:""},
    {pt:"2", dt:"2013-11-24", tp:"sco", loc:"ter:sseo:~700kmx97.7deg", desc:""},
    {pt:"4", dt:"2014-06-19", tp:"l", loc:"ter:yas:LC-370/13", desc:""},
    {pt:"4", dt:"2014-06-22", tp:"sco", loc:"ter:sseo:613x739kmx97.97deg", desc:""},
    {pt:"5", dt:"2014-06-19", tp:"l", loc:"ter:yas:LC-370/13", desc:""},
    {pt:"5", dt:"2014-06-22", tp:"sco", loc:"ter:sseo", desc:"fail:los"},
    {pt:"3", dt:"2014-08-19", tp:"l", loc:"ter:tai:LC-9", desc:""},
    {pt:"3", dt:"2014-08-19", tp:"sco", loc:"ter:sseo:610x632kmx98.02deg", desc:""}
  ], inst: [
    {n:"", band:"4.28E+14..7.69E+14", d:0.03, px:23.6, foc:0.07, fov:"25x19.8deg", desc:"c:nt;cl:nl;"}
]},
chandra:{name:"Chandra", url:"hp:chandra.harvard.edu/;Map:chandra.harvard.edu/photo/map/index.html;tw:twitter.com/chandraxray", desc:"ag:nasa;lv:STS-93 Columbia/IUS;sc:1.8;x:30;y:16", stat:"o", 
  parts: [
    {n:"CXO:Chandra X-ray Observatory", ctry:"us", type:"x", pur:"", id:"1999-040B", icon:"chandra.png", desc:""}
  ], ev: [
    {pt:"", dt:"1999-07-23", tp:"l", loc:"ter:cap:LC-39B", desc:""},
    {pt:"", dt:"1999-07-27", tp:"sco", loc:"ter:heeo:9999x138825kmx28.5deg", desc:""}
  ], inst: [
    {n:"HRC", band:"2.42E+16..2.42E+18", res:"0.5", url:"hea-www.harvard.edu/HRC/HomePage.html", desc:"c:nr;cl:nly;"},
    {n:"ACIS", band:"2.42E+16..2.42E+18", res:"1", url:"acis.mit.edu/acis", desc:"cl:n;"},
    {n:"HETG", band:"", res:"", url:"space.mit.edu/HETG/", desc:"c:n;"},
    {n:"LETG 1", band:"", res:"", url:"www.mpe.mpg.de/xray/home.php", desc:"c:;"},
    {n:"LETG 2", band:"", res:"", url:"www.sron.nl/divisions/hea/chandra/short.html", desc:"c:n;"}
]},
cheops:{name:"CHEOPS:CHaracterising ExOPlanets Satellite", url:"hp:cheops.unibe.ch/;esa:sci.esa.int/cheops/;tw:twitter.com/ESA_CHEOPS", desc:"ag:esa;fam:S-class;lv:Soyuz STB/Fregat-MT;m:250kg;sc:0.7;x:0;y:0", stat:"o", 
  parts: [
    {n:"", ctry:"eu", type:"opt;nir", pur:"exo", id:"2019-092B", icon:"cheops.png", desc:""}
  ], ev: [
    {pt:"", dt:"2019-12-18", tp:"l", loc:"ter:kou:ELS", desc:""},
    {pt:"", dt:"2020-04-16", tp:"sco", loc:"ter:sseo:598x709kmx98.2deg", desc:""},
    {pt:"", dt:"2023-06", tp:"nom", loc:"ter:sseo", desc:""},
  ], inst: [
    {n:"", band:"330..1100nm", res:"", d:"0.32", px:"1.125", fov:"0.32x0.32deg", desc:"c:nb;cl:nl;"}
]},
cobe:{name:"COBE", url:"hp:lambda.gsfc.nasa.gov/product/cobe/", desc:"ag:nasa;lv:Delta 5920-8", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"mw", pur:"cmb;sur", id:"1989-089A", icon:""}
  ], ev: [
    {pt:"", dt:"1989-11-18", tp:"l", loc:"ter:van:SLC-2W", desc:""},
    {pt:"", dt:"1989-12-19", tp:"sco", loc:"ter:sseo:886x896kmx99deg", desc:""},
    {pt:"", dt:"1993", tp:"tos", loc:"", desc:"eom"}
]},
compton:{name:"Compton:Compton Gamma Ray Observatory", url:"hp:cossc.gsfc.nasa.gov/cossc/cossc.html", desc:"ag:nasa;lv:STS-37 Atlantis", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"g", pur:"", id:"1991-027B", icon:""}
  ], ev: [
    {pt:"", dt:"1991-04-05", tp:"l", loc:"ter:cap:LC-39B", desc:""},
    {pt:"", dt:"1001-05-05", tp:"sco", loc:"ter:leo:441x455kmx28.4deg", desc:""},
    {pt:"", dt:"2000-06-04", tp:"ae", loc:"ter", desc:"eom"}
  ], inst: [
    {tp:"sp", n:"OSSE:Oriented Scintillation Spectrometer Experiment", band:"0.05..10MeV", d:"", ea:"550cm2@0.3MeV", sres:"10.5%@0.66MeV", eres:"", fov:"3.8x11.4deg", desc:"c:nr;"},
    {tp:"is", n:"COMPTEL:Imaging Compton Telescope ", band:"0.8..30MeV", res:"300..1800", ea:"", sres:"", eres:"5..10%fwhm", fov:"", desc:"c:nr;"},
    {tp:"", n:"EGRET", band:"20MeV..30GeV", d:"", ea:"1500cm2@200..1000MeV", sres:"", eres:"", fov:"", desc:"c:nr;"},
    {tp:"", n:"BATSE:Burst And Transient Source Experiment", band:"10keV..100MeV", d:"", ea:"", sres:"", eres:"", fov:"", desc:"c:nr;"}
]},
copernicus:{name:"Copernicus", url:"hp:heasarc.nasa.gov/docs/copernicus/copernicus.html", desc:"ag:nasa;Atlas SLV-3C Centaur", stat:"s", 
  parts: [
    {n:"OAO-4", ctry:"us", type:"uv;x", pur:"", id:"1972-065A", icon:""}
  ], ev: [
    {pt:"", dt:"1972-08-21", tp:"l", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", dt:"1972-09-22", tp:"sco", loc:"ter:leo:735x747kmx35deg", desc:""},
    {pt:"", dt:"1981", tp:"tos", loc:"", desc:"eom"}
]},
corot:{name:"CoRoT:COnvection ROtation and planetary Transits", url:"hp:smsc.cnes.fr/COROT/;esa:www.esa.int/esaMI/COROT/", desc:"ag:cnes,esa;lv:Soyuz 2.1B/Fregat", stat:"s", 
  parts: [
    {n:"", ctry:"fr;eu", type:"opt", pur:"exo;seis", id:"2006-063A", icon:"corot.png", desc:"m:630kg"}
  ], ev: [
    {pt:"", dt:"2006-12-27", tp:"l", loc:"ter:bai:LC-31", desc:""},
    {pt:"", dt:"2007-01-03", tp:"sco", loc:"ter:peo:895x906kmx90deg", desc:""},
    {pt:"", dt:"2012-11-02", tp:"eom", loc:"ter", desc:"fail:Computer malfunction"}
  ], inst: [
    {n:"", band:"400..900nm", d:"0.27", px:"2.46", tres:"32..512s", fov:"2.7x3.05deg", desc:"c:nr;"}
]},
cosb:{name:"COS-B", url:"hp:www.esa.int/Our_activities/Space_Science/Cos-B_overview2;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=34", desc:"ag:esa;lv:Delta 2913", stat:"s", 
  parts: [
    {n:"", ctry:"eu", type:"g", pur:"", id:"1975-072A", icon:""}
  ], ev: [
    {pt:"", dt:"1975-08-09", tp:"l", loc:"ter:van:SLC-2W", desc:""},
    {pt:"", dt:"1976-01-01", tp:"sco", loc:"ter:heeo:2536x96895kmx92deg", desc:""},
    {pt:"", dt:"1982", tp:"tos", loc:"", desc:"eom"}
]},
cosi:{name:"COSI:Compton Spectrometer and Imager", url:"hp:cosi.ssl.berkeley.edu", desc:"ag:nasa;fam:Astrophysics Explorers;lv:Falcon 9", stat:"pl", 
  parts: [
    {n:"", ctry:"us", type:"g", pur:"", id:"", icon:""}
  ], ev: [
    {pt:"", dt:"2027-08", tp:"l", loc:"ter", desc:""},
    {pt:"", dt:"2027-08", tp:"sco", loc:"ter:leo", desc:""},
    {pt:"", dt:"2029", tp:"nom", loc:"ter", desc:"?"}
  ], inst: [
    {tp:"g", n:"", band:"0.2..5MeV", d:"", px:"", tres:"", fov:"", desc:"c:nr;"}
]},
cxbn:{name:"CXBN:Cosmic X-ray Background Nanosatellite", url:"hp:universe.sonoma.edu/CXBNanosat/", desc:"lv:Atlas V 401;ag:msuky;m:2.4kg", stat:"p", 
  parts: [
    {n:"Unbridled Spirit", ctry:"us", type:"x", pur:"cxb", id:"2012-048E", icon:"cxbn.png", desc:""}
  ], ev: [
    {pt:"", dt:"2012-09-13", tp:"l", loc:"ter:van:SLC-3E", desc:""},
    {pt:"", dt:"2012-09-14", tp:"sco", loc:"ter:leo:469x778kmx64.6deg", desc:""},
    {pt:"", dt:"2013-01", tp:"eom", loc:"", desc:"Low power"}
  ], inst: [
    {n:"", band:"30..50keV", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
dscovr:{name:"DSCOVR:Deep Space Climate Observatory", url:"hp:www.nesdis.noaa.gov/DSCOVR/;nasa:www-pm.larc.nasa.gov/triana.html;tw:twitter.com/DS_COVR", desc:"lv:Falcon 9 v1.1;m:570kg", stat:"o", 
  parts: [
    {n:"Triana", ctry:"us", type:"", pur:"sol", id:"", icon:"dscovr.png", desc:""}
  ], ev: [
    {pt:"", dt:"2015-01-29", tp:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2015-06", tp:"sco", loc:"sol:esl1", desc:""}
  ], inst: [
    {n:"PlasMag Magnetometer:Solar Wind Plasma Sensor and Magnetometer", tp:"em", band:"", res:"", url:"", desc:"c:;"},
    {n:"PlasMag Faraday Cup:Solar Wind Plasma Sensor and Magnetometer", tp:"psp", band:"", res:"", url:"", desc:"c:;"},
    {n:"NISTAR:National Institute of Standards and Technology Advanced Radiometer", tp:"rad", band:"", res:"", d:"", px:"", url:"", desc:"c:;"},
    {n:"EPIC:Earth Polychromatic Imaging Camera", band:"", res:"", d:"", px:"", url:"", desc:"c:;"},
    {n:"ES:Electron Spectrometer", tp:"psp", band:"", res:"", d:"", px:"", url:"", desc:"c:;"},
    {n:"PHA:Pulse Height Analyzer", tp:"par", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
einsteinprobe:{name:"Einstein Probe", url:"", desc:"ag:cnsa;m:1380kg;lv:CZ-2C", stat:"o", 
  parts: [
    {n:"爱因斯坦探针", ctry:"cn", type:"x", pur:"grb", id:"2024_007A", icon:"einsteinprobe.png"}
  ], ev: [
    {pt:"", dt:"2024-01-09", tp:"l", loc:"ter:xch", desc:""},
    {pt:"", dt:"2024-01-09", tp:"sco", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"WXT:Wide-field X-ray Telescope", tp:"", band:"0.5..4keV", res:"300", fov:"60x60deg", ea:"3cm2€0.7keV", tres:"100us", eres:"50%@4keV", url:"", desc:"c:nl;"},
    {n:"FXT:Follow-up X-ray Telescope", tp:"", band:"0.5..4keV", res:"300", fov:"1deg", ea:"60cm2€1keV", tres:"1s", eres:"100ev@1keV", url:"", desc:"c:;"}
]},
einstein:{name:"Einstein", url:"hp:heasarc.gsfc.nasa.gov/docs/einstein/heao2.html", desc:"ag:nasa;lv:Atlas SLV-3D Centaur", stat:"s", 
  parts: [
    {n:"HEAO-2:High Energy Astronomy Observatory 2", ctry:"us", type:"x", pur:"", id:"1978-103A", icon:""}
  ], ev: [
    {pt:"", dt:"1978-11-13", tp:"l", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", dt:"1978-12-14", tp:"sco", loc:"ter:leo:520x541kmx23.5deg", desc:""},
    {pt:"", dt:"1982-03-25", tp:"ae", loc:"", desc:"eom"}
]},
elisa:{name:"LISA:Laser Interferometer Space Antenna", url:"hp:www.elisascience.org/;tw:twitter.com/LISACommunity", desc:"Gravity Waves;ag:esa;fam:L-class;m:6100hg;lv:Ariane 64", stat:"pr", 
  parts: [
    {n:"", ctry:"eu", type:"gr", pur:"", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"2035", tp:"l", loc:"ter:kou:ELA-3", desc:""},
    {pt:"2035", dt:"", tp:"sco", loc:"sol:ef", desc:""},
    {pt:"2041", dt:"", tp:"sco", loc:"sol:ef", desc:""},
    {pt:"2047", dt:"", tp:"sco", loc:"sol:ef", desc:""}    
  ], inst: [
    {n:"", tp:"li", band:"1e-4..1Hz", url:"", desc:"c:;"}
]},
euclid:{name:"Euclid", url:"hp:www.euclid-ec.org/;esa:sci.esa.int/euclid", desc:"ag:esa;lv:Falcon 9;fam:M-class;sc:0.6;x:10;y:9", stat:"o", 
  parts: [
    {n:"", ctry:"eu", type:"nir", pur:"de;sur", id:"2023-092A", icon:"euclid.png", desc:"m:2160kg;dim:4.5x3.1m"}
  ], ev: [
    {pt:"", dt:"2023-07-01", tp:"l", loc:"ter:cap:LC-40", desc:""},
    {pt:"", dt:"2023-08-01", tp:"sco", loc:"sol:esl2", desc:"1M km  Lissajous orbit"},
    {pt:"", dt:"2028", tp:"nom", loc:"sol:esl2", desc:"pend"},
  ], inst: [
    {n:"VIS:Visual Imager", band:"550..900nm", res:"0.1", d:1.3, px:0.1, fov:"0.8deg2", desc:"c:nr;cl:nly;"},
    {n:"NISP:Near-infrared spectrometer and photometer", band:"0.92..2um", res:"0.3", d:1.3, px:0.3, sres:"250", fov:"0.75deg2", desc:"c:nr;cl:nl"}
]},
euve:{name:"EUVE", url:"hp:www.ssl.berkeley.edu/euve/", desc:"ag:nasa;lv:Delta II 6920-10", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"euv", pur:"", id:"1992-031A", icon:""}
  ], ev: [
    {pt:"", dt:"1992-05-07", tp:"l", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", dt:"1992-07-11", tp:"sco", loc:"ter:leo:514x527kmx28.4", desc:""},
    {pt:"", dt:"2001", tp:"tos", loc:"", desc:"eom"}
  ], inst: [
    {n:"3 Grazing Incidence Telescopes", tp:"is", band:"7..76nm", res:"360", sres:"", ea:"", sens:"", fov:"", desc:"c:;cl:;"}
]},
euvst:{name:"EUVST:EUV High-throughput Spectroscopic Telescope", url:"hp:solar-c.nao.ac.jp/en/", desc:"ag:jaxa;lv:Epsilon;m:500kg;x:0;y:5", stat:"pl", 
  parts: [
    {n:"Solar-C", ctry:"jp", type:"euv", pur:"sol", id:"", icon:"euvst.png"}
  ], ev: [
    {pt:"", dt:"2026", tp:"l", loc:"ter:uch", desc:""},
    {pt:"", dt:"2026", tp:"sco", loc:"ter:sseo:600kmx98deg", desc:""},
    {pt:"", dt:"2028", tp:"tos", loc:"", desc:"eom"}
  ], inst: [
    {n:"", tp:"is", band:"14..285nm", d:"0.28", sres:"10000..5000", ea:"", res:"0.4", tres:"1s", foc:"2.8", fov:"300x300''", desc:"c:nl;cl:nly"}
]},
exosat:{name:"Exosat", url:"hp:www.cosmos.esa.int/web/exosat/;esa:sci.esa.int/exosat", desc:"ag:esa;lv:Delta 3914", stat:"s", 
  parts: [
    {n:"", ctry:"eu", type:"x", pur:"", id:"1983-051A", icon:""}
  ], ev: [
    {pt:"", dt:"1983-05-26", tp:"l", loc:"ter:van:SLC-2W", desc:""},
    {pt:"", dt:"1983-07-02", tp:"sco", loc:"ter:heeo:583x191510km71deg", desc:""},
    {pt:"", dt:"1986-05-06", tp:"ae", loc:"", desc:"eom"}
  ], inst: [
    {n:"LEIT", band:"0.1..2keV", res:"24", fov:"2deg", url:"", desc:"c:;cl:;"},
    {n:"ME", tp:"sp", band:"1..50keV", res:"", fov:"0.75x0.75deg", url:"", desc:"c:;"},
    {n:"GSPC", tp:"ctr", band:"2..32keV", res:"", url:"", desc:"c:;"}
]},
extp:{name:"eXTP:enhanced X-ray Timing and Polarization", url:"hp:www.isdc.unige.ch/extp/", desc:"ag:cnsa,esa;lv:CZ-7;m:4500kg;sc:1.0;x:-1;y:30", stat:"pl", 
  parts: [
    {n:"", ctry:"cn;eu", type:"x", pur:"", id:"", icon:"extp.png", desc:""}
  ], ev: [
    {pt:"", dt:"2027", tp:"l", loc:"ter:wen", desc:""},
    {pt:"", dt:"2027", tp:"sco", loc:"ter:leo:550km", desc:""}
  ], inst: [
    {n:"SFA:Spectroscopic Focusing Array", band:"0.5..20keV", res:"60", sres:"3%@6keV", ea:"0.9m2@1keV", fov:"12'", url:"", desc:"c:nl;cl:nly;"},
    {n:"PFA:Polarimetry Focusing Array", band:"2..10keV", res:"30", sres:"18%@6keV", ea:"0.9m2@2keV", fov:"12'", url:"", desc:"c:nl;cl:ny;"},
    {n:"WFM:Wide Field Monitor", band:"2..50keV", res:"300", sres:"5%@6keV", ea:"0.9m2@1keV", fov:"70deg", url:"", desc:"c:nl;cl:n;"},
    {n:"LAD:Large Area Detector", band:"1..30keV", res:"", sres:"4%@6keV", ea:"3.4m2@6keV", fov:"1deg", url:"", desc:"c:;"}
]},
fermi:{name:"Fermi", url:"hp:fermi.gsfc.nasa.gov/", desc:"ag:nasa;lv:Delta 7920H;sc:1.4;x:-60;y:38", stat:"o", 
  parts: [
    {n:"GLAST:Gamma-ray Large Area Space Telescope", ctry:"us", type:"g", pur:"sur", id:"2008-29A", icon:"fermi.png", desc:""}
  ], ev: [
    {pt:"", dt:"2008-06-11", tp:"l", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", dt:"2008-06-19", tp:"sco", loc:"ter:leo:542x560kmx25.5deg", desc:""}
  ], inst: [
    {n:"LAT", band:"20MeV..2TeV", res:"14400..240", sres:"5..20%", url:"glast.stanford.edu/", desc:"c:nl;cl:nl;"},
    {n:"GBM", band:"", res:"", url:"gammaray.msfc.nasa.gov/gbm", desc:"c:nl;"}
]},
fuse:{name:"FUSE;Far UV Spectrum Explorer", url:"hp:fuse.pha.jhu.edu/;MAST:archive.stsci.edu/fuse/", desc:"ag:nasa,csa,cnes;lv:Delta II 7320-10", stat:"s", 
  parts: [
    {n:"Explorer 77", ctry:"us", type:"fuv", pur:"", id:"1999-035A", icon:""}
  ], ev: [
    {pt:"", dt:"1999-06-24", tp:"l", loc:"ter:cap:SLC-17A", desc:""},
    {pt:"", dt:"1999-07-24", tp:"sco", loc:"ter:leo:753x770kmx24.9deg", desc:""},
    {pt:"", dt:"2007-07-12", tp:"tos", loc:"", desc:"eom"}
  ], inst: [
    {n:"", tp:"is", band:"90..119nm", d:"0.39x0.35", sres:"", ea:"", sens:"", fov:"", desc:"c:;cl:;"}
]},
gaia:{name:"Gaia", url:"hp:gaia.esa.int/;tw:twitter.com/ESAGaia", desc:"ag:esa;lv:Soyuz 2.1B/Fregat-MT;sc:0.8;x:8", stat:"o", 
  parts: [
    {n:"", ctry:"eu", type:"opt", pur:"as;sur", id:"", icon:"gaia.png", desc:""}
  ], ev: [
    {pt:"", dt:"2013-12-19", tp:"l", loc:"ter:kou", desc:""},
    {pt:"", dt:"l+30d", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2018-12-31", tp:"nom", loc:"sol:esl2", desc:"pend"}
  ], inst: [
    {n:"ASTRO", band:"2.86E+14..9.37E+14", res:"0.118", d:0.975, px:0.118, desc:"c:nr;cl:nl;"}
]},
gamma400:{name:"Gamma-400", url:"hp:gamma400.lebedev.ru/indexeng.html", desc:"ag:lebedev,rosc;lv:Angara-A5M/DM-03;sc:0.8;x:-100;y:-30", stat:"pl", 
  parts: [
    {n:"",  ctry:"ru", type:"g;par", pur:"grb;cr;dm", id:"", icon:"gamma400.png", desc:""}
  ], ev: [
    {pt:"", dt:"2030", tp:"l", loc:"ter:bai?", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:heeo:300000x500kmx51.8deg", desc:""}
  ], inst: [
    {n:"", band:"100MeV..3000GeV", res:"36", sres:"1", ea:"1", desc:"c:n;cl:nlcol:#fdf"}
]},
galex:{name:"GALEX:GALaxy Evolution eXplorer", url:"hp:www.galex.caltech.edu/", desc:"lv:Pegasus XL;fam:smex;ag:nasa;m:312kg", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"uv", pur:"sur", id:"2003-017A", icon:"galex.png", desc:""}
  ], ev: [
    {pt:"", dt:"2003-04-28", tp:"l", loc:"ter:cap:L-1011", desc:""},
    {pt:"", dt:"2003-05-01", tp:"sco", loc:"ter:leo:693x699kmx29.0deg", desc:""}
  ], inst: [
    {n:"FUV", band:"134..179nm", px:5.3, d:0.5, desc:"c:nt;"},
    {n:"NUV", band:"177..283nm", px:4.3, d:0.5, desc:"c:;"}
]},
ginga:{name:"Ginga", url:"hp:heasarc.nasa.gov/docs/ginga/ginga.html", desc:"ag:jaxa;lv:M-3SII", stat:"s", 
  parts: [
    {n:"Astro-C", ctry:"jp", type:"x", pur:"", id:"1987-012A", icon:""}
  ], ev: [
    {pt:"", dt:"1987-02-05", tp:"l", loc:"ter:uch:M-1", desc:""},
    {pt:"", dt:"1987-03-09", tp:"sco", loc:"ter:leo:509x673kmx31deg", desc:""},
    {pt:"", dt:"1991-11-01", tp:"ae", loc:"", desc:"eom"}
]},
gecam:{name:"GECAM:Gravitational wave high-energy Electromagnetic Counterpart All-sky Monitor;引力波暴高能电磁对应体全天监测器", url:"", desc:"ag:cnsa;lv:CZ-11;m:140kgx2;y:11;sc:0.7", stat:"o", 
  parts: [
    {n:"Xiaoji", ctry:"cn", type:"x;g", pur:"", id:"2020-094A", icon:"gecam.png"},
    {n:"Xiaomu", ctry:"cn", type:"x;g", pur:"", id:"2020-094B", icon:"gecam.png"}
  ], ev: [
    {pt:"", dt:"2020-12-09", tp:"l", loc:"ter:jiu", desc:""},
    {pt:"", dt:"2020-12-09", tp:"sco", loc:"ter:leo:588x604kmx29deg", desc:""},
    {pt:"", dt:"2024", tp:"pom", loc:"", desc:""}
  ], inst: [
    {n:"", band:"6keV..5MeV", res:"3600", p:"", fov:"360deg", ea:"500cm2@10keV", desc:"c:nr;cl:nl"}
]},
goes:{name:"GOES:Geostationary Operational Environmental Satellite", ctry:"us", url:"hp:goespoes.gsfc.nasa.gov/goes/index.html;swpc:swpc.noaa.gov/", desc:"ag:noaa;sc:0.7;x:-18;y:6", stat:"o", 
  parts: [
    {n:"GOES 13", id:"2006-018A", type:"x", pur:"sol;w", desc:"lv:Delta 4M+(4,2)", stat:"s", icon:"goes-nop.png"},
    {n:"GOES 14", id:"2009-033A", type:"x", pur:"sol;w", desc:"lv:Delta 4M+(4,2)", icon:"goes-nop.png"},
    {n:"GOES 15", id:"2010-088A", type:"x", pur:"sol;w", desc:"lv:Delta 4M+(4,2)", icon:"goes-nop.png"},
    {n:"GOES 16", url:"www.goesr.gov", id:"2016-071A", type:"uv,x", pur:"sol;w", stat:"o", desc:"lv:Atlas V 541"}, 
    {n:"GOES 17", id:"2018-022A", type:"uv,x", pur:"sol;w", stat:"o", desc:"lv:Atlas V 541"}, 
    {n:"GOES-18", id:"2022-021A", type:"uv,x", pur:"sol;w", stat:"pl", desc:"lv:Atlas V 541"}, 
    {n:"GOES-U", id:"", type:"uv,x", pur:"sol;w", stat:"pl", desc:"lv:Falcon Heavy"}
  ], ev: [
    {pt:"0", dt:"2006-05-24", tp:"l", loc:"ter:cap:SLC-37B", desc:""},
    {pt:"0", dt:"2006-07-26", tp:"sco", loc:"ter:geos:35784x35790kmx0.4deg", desc:""},
    {pt:"1", dt:"2009-06-27", tp:"l", loc:"ter:cap:SLC-37B", desc:""},
    {pt:"1", dt:"2009-08-16", tp:"sco", loc:"ter:geos:35783x35790kmx0.4deg", desc:""},
    {pt:"2", dt:"2010-03-04", tp:"l", loc:"ter:cap:SLC-37B", desc:""},
    {pt:"2", dt:"2010-03-18", tp:"sco", loc:"ter:geos:35778x35789kmx0.01deg", desc:""},
    {pt:"3", dt:"2016-11-19", tp:"l", loc:"ter:cap:SLC-41", desc:""},
    {pt:"3", dt:"2017-12-11", tp:"sco", loc:"ter:geos:", desc:"GOES East"},
    {pt:"4", dt:"2018-03-01", tp:"l", loc:"ter:cap:SLC-41", desc:""},
    {pt:"4", dt:"2018-12", tp:"sco", loc:"ter:geos", desc:"GOES West"},
    {pt:"5", dt:"2022-03-01", tp:"l", loc:"ter:cap:SLC-41", desc:""},    
    {pt:"6", dt:"2024", tp:"l", loc:"ter:cap", desc:""}
], inst: [
    {n:"SXI:Soft X-ray Imager", band:"0.6..6nm", res:"7", url:"sxi.ngdc.noaa.gov/", desc:"c:nr;"},
    {n:"SUVI:Solar Ultraviolet Imager", band:"9.4..30.4nm", res:"", url:"www.goes-r.gov/spacesegment/suvi.html", desc:"c:nr;"},
    {n:"EUVS:Extreme Ultraviolet Sensor", type:"is", band:"5..304nm", res:"", url:"www.goes-r.gov/spacesegment/exis.html", desc:"c:nr;"},
    {n:"XRS:X-ray Irradiance Sensor", type:"is", band:"0.05..0.8nm", res:"", url:"www.goes-r.gov/spacesegment/exis.html", desc:"c:nr;"},
    {n:"CCOR:Compact Coronagraph ", band:"", tp:"cor", res:"50", fov:"3-22Rsun", url:"", desc:"GOES-U only;c:;"}
]},
granat:{name:"Granat", url:"hp:heasarc.nasa.gov/docs/granat/granat.html", desc:"ag:rosc,iki;lv:Proton-K/Blok-D1", stat:"s", 
  parts: [
    {n:"Гранат", ctry:"su", type:"x;g", pur:"", id:"1989-096A", icon:""}
  ], ev: [
    {pt:"", dt:"1989-12-01", tp:"l", loc:"ter:bai:LC-200/40", desc:""},
    {pt:"", dt:"1990-05-25", tp:"sco", loc:"ter:heeo:1813x201796kmx53.2deg", desc:""},
    {pt:"", dt:"1998-11-27", tp:"tos", loc:"", desc:"eom"}
  ], inst: [
    {n:"SIGMA", band:"35keV..1.3MeV", res:"900", sres:"", tres:"", ea:"800cm^2", sens:"", fov:"5deg", desc:"c:;cl:;"},
    {n:"ART-P", band:"4..60keV", res:"300", sres:"22%@6keV", tres:"4ms", ea:"600cm^2", sens:"", fov:"1.8deg", desc:"c:;cl:;"},
    {n:"ART-S", tp:"sp", band:"3..100keV", res:"", sres:"", tres:"0.2ms", ea:"2400cm^2@10keV;800cm^2@100keV", sens:"", fov:"2deg", desc:"c:;cl:;"},
    {n:"PHEBUS", tp:"ctr", band:"100keV..100MeV", res:"", sres:"", tres:"", sens:"", fov:"", desc:"c:;cl:;"},
    {n:"WATCH", tp:"ctr", band:"6..180keV", res:"1800", sres:"30%@60keV", tres:"1s", ea:"", sens:"", fov:"", desc:"c:;cl:;"},
    {n:"KONUS-B", tp:"ctr", band:"10keV..8MeV", res:"", sres:"", tres:"0.25ms", sens:"", fov:"5deg", desc:"c:;cl:;"},
    {n:"TOURNESOL", tp:"", band:"2keV..20MeV", res:"", sres:"", tres:"", ea:"", sens:"", fov:"", desc:"c:;cl:;"}
]},
halca:{name:"HALCA:Highly Advanced Laboratory for Communications and Astronomy", url:"hp:www.vsop.isas.ac.jp/vsop2e/", desc:"Space-based Radio Interferometry;ag:isas;lv:M-V", stat:"s", 
  parts: [
    {n:"Haruka;MUSES-B", ctry:"jp", type:"r", pur:"int", id:"1997-005A", icon:""}
  ], ev: [
    {pt:"", dt:"1997-02-12", tp:"l", loc:"ter:uch:M-5", desc:""},
    {pt:"", dt:"1997-03-14", tp:"sco", loc:"ter:heeo:573x21401kmx31.3deg", desc:""},
    {pt:"", dt:"2005", tp:"tos", loc:"", desc:"eom"}
  ], inst: [
    {n:"", band:"", d:"8m", p:"", desc:"c:nvt;"},
    {n:"SVLBI", band:"", d:"", p:"", desc:"c:niv;"}
]},
heao1:{name:"HEAO-1:High Energy Astronomy Observatory 1", url:"hp:heasarc.nasa.gov/docs/heao1/heao1.html", desc:"ag:nasa;lv:Atlas SLV-3D Centaur", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"x;g", pur:"", id:"1977-075A", icon:""}
  ], ev: [
    {pt:"", dt:"1977-08-12", tp:"l", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", dt:"1977-09-15", tp:"sco", loc:"ter:leo:428x449kmx22.7deg", desc:""},
    {pt:"", dt:"1979-03-15", tp:"ae", loc:"ter", desc:"eom"}
]}, 
heao3:{name:"HEAO-3:High Energy Astronomy Observatory 3", url:"hp:heasarc.nasa.gov/docs/heao3/heao3.html", desc:"ag:nasa;lv:Atlas SLV-3D Centaur", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"x;g", pur:"", id:"1979-082A", icon:""}
  ], ev: [
    {pt:"", dt:"1979-09-20", tp:"l", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", dt:"1979-10-28", tp:"sco", loc:"ter:leo:481x497kmx43.6deg", desc:""},
    {pt:"", dt:"1981-12-07", tp:"ae", loc:"", desc:"eom"}
]},
herschel:{name:"Herschel",  url:"hp:www.esa.int/Our_activities/Space_Science/Herschel;esa:sci.esa.int/herschel/", desc:"ag:esa;lv:Ariane 5ECA;m:3300kg", stat:"s", 
  parts: [
    {n:"FIRST:Far Infrared and Sub-millimetre Telescope",ctry:"eu", type:"mw;fir", pur:"", id:"2009-026A", icon:"herschel.png", desc:""}
  ], ev: [
    {pt:"", dt:"2009-05-14", tp:"l", loc:"ter:kou:ELA 3", desc:""},
    {pt:"", dt:"2009-05-15", tp:"toi", loc:"ter:273x1149048kmx5deg", desc:""},
    {pt:"", dt:"2009-06", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2013-06-17", tp:"tos", loc:"sol:esl2", desc:"eom"}
  ], inst: [
    {n:"HIFI:Heterodyne Instrument for the Far Infrared", tp:"sp", band:"157..625um", res:"", sres:"10e7", url:"www.sron.nl/divisions/lea/hifi/", desc:"c:;"},
    {n:"SPIRE:Spectral and Photometric Imaging Receiver", tp:"is", band:"194..672um", d:3.5, px:6.4, res:"47..14.3", sres:"40..1000", foc:"28.5", ea:"9.6", url:"www.astro.cf.ac.uk/research/instr/projects/?page=spire", desc:"c:;"},
    {n:"PACS:Photodetector Array Camera and Spectrometer", tp:"is", band:"55..210um", res:"6.4", d:3.5, px:3.2, sres:"1000..5000", foc:"28.5m", url:"pacs.mpe.mpg.de/", desc:"c:nv;"},
]},
hete2:{name:"HETE 2", url:"hp:space.mit.edu/HETE/", desc:"ag:nasa;Pegasus H;fam:Explorer", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"x", pur:"grb", id:"2000-061A", icon:"", desc:"m:124kg"}
  ], ev: [
    {pt:"", dt:"2000-10-09", tp:"l", loc:"ter:Kwajalein:L-1011", desc:""},
    {pt:"", dt:"2000-10-10", tp:"sco", loc:"ter:leo:595x636kmx1.9deg", desc:""},
    {pt:"", dt:"2007", tp:"tos", loc:"", desc:"eom"}
]}, 
hinode: {name:"Hinode:Sunrise", url:"hp:hinode.nao.ac.jp/index_e.shtml;isas:www.isas.jaxa.jp/e/enterp/missions/hinode/;darts:darts.isas.jaxa.jp/solar/hinode/", desc:"ag:jaxa,isas;lv:M-V;m:900kg;sc:1.2;y:20", stat:"o", 
  parts: [
    {n:"ひので;Solar-B", ctry:"jp", type:"opt;euv;x", pur:"sol", id:"2006-041A", icon:"hinode.png", desc:""}
  ], ev: [
    {pt:"", dt:"2006-09-22", tp:"l", loc:"ter:uch", desc:""},
    {pt:"", dt:"2006-09-25", tp:"sco", loc:"ter:sseo:279x572kmx98.3deg", desc:""}
  ], inst: [
    {n:"SOT:Solar Optical Telescope", band:"4.49E+14..7.73E+14", d:0.5, px:0.22, url:"solar-b.nao.ac.jp/sot_e/", desc:"cl:n;"},
    {n:"XRT:X-Ray Telescope", band:"1.5E+16..1.5E+18", res:"2", url:"solar-b.nao.ac.jp/xrt_e/", desc:"c:nr;cl:ny;"},
    {n:"EIS:Extreme-ultraviolet Imaging Spectrometer", band:"1.03E+15..1.76E+15", d:0.15, px:1, url:"msslxr.mssl.ucl.ac.uk:8080/SolarB/", desc:"cl:n;"}
]},    
hipparcos:{name:"Hipparcos", url:"hp:www.esa.int/Our_activities/Space_Science/Hipparcos_overview;esa:www.rssd.esa.int/hipparcos", desc:"ag:esa;lv:Ariane 44LP", stat:"s", 
  parts: [
    {n:"", ctry:"eu", type:"opt", pur:"as;sur", id:"1989-062B", icon:""}
  ], ev: [
    {pt:"", dt:"1989-08-08", tp:"l", loc:"ter:kou:ELA-2", desc:""},
    {pt:"", dt:"1990-08-07", tp:"sco", loc:"ter:gto:513x35890kmx7.3deg", desc:""},
    {pt:"", dt:"1993", tp:"tos", loc:"", desc:"eom"}
]}, 
hisaki: {name:"Hisaki:Beyond the sun", url:"hp:global.jaxa.jp/projects/sas/sprint_a/;isas:www.isas.jaxa.jp/home/sprint-a/index_en.html", desc:"ag:jaxa;lv:Epsilon;m:383kg", stat:"o", 
  parts: [
    {n:"ひさき;SPRINT-A:Spectroscopic Planet Observatory for Recognition of Interaction of Atmosphere", ctry:"jp", type:"euv", pur:"Planetary Atmospheres", id:"2013-049A", icon:"sprint-a.jpg", desc:""}
  ], ev: [
    {pt:"", dt:"2013-09-14", tp:"l", loc:"ter:uch", desc:""},
    {pt:"", dt:"2013-09-14", tp:"sco", loc:"ter:leo:1157x947kmx29.7deg", desc:""}
  ], inst: [
    {n:"EXCEED", tp:"sp", band:"60..135nm", sr:"0.3..1nm", d:"0.2", px:"", url:"", desc:"c:;"}
]},
hitomi:{name:"Hitomi:Eye", url:"hp:astro-h.isas.jaxa.jp/en/;jaxa:global.jaxa.jp/projects/sat/astro_h/;isas:astro-h.isas.jaxa.jp/en/", desc:"ag:jaxa;lv:H-IIA 202;m:2700kg;sc:1.4;x:0;y:15", stat:"f",
  parts: [
    {n:"ひとみ;Astro-H", ctry:"jp", type:"sx", pur:"", id:"2016-012A", icon:"astro-h.png", desc:""}
  ], ev: [
    {pt:"", dt:"2016-02-17", tp:"l", loc:"ter:tng", desc:""},
    {pt:"", dt:"2016-03-28", tp:"los", loc:"ter:leo:551x579kmx31deg", desc:"fail:Attitude control;eom"}
  ], inst: [
    {n:"SXI:Soft X-ray Imaging System", band:"0.3..12keV", res:"78", sres:"150eV@6keV", ea:"360cm2@6keV", fov:"35x35'", desc:"c:nr;cl:nl;"},
    {n:"SGD:Soft Gamma-ray Detector", band:"10..600keV", res:"", sres:"2keV@40keV", ea:"30cm2@100keV", fov:"0.55x0.55deg", desc:"c:;cl:ny;"},
    {n:"HXI:Hard X-ray Imaging System", band:"5..80keV", res:"102", sres:"1.5keV@60keV", ea:"1000cm2@10keV;300cm2@30keV", fov:"9x9'", desc:"c:;cl:n;"},
    {n:"SXS:Soft X-ray Spectrometer", tp:"sp", band:"0.3..12keV", res:"78", sres:"7eV@7keV", fov:"3x3'", ea:"160cm2@1keV;310cm2@6keV", desc:"c:;cl:n;"},
]},
hst: {name:"HST:Hubble Space Telescope", url:"hp:hubblesite.org/;esa:www.spacetelescope.org/;heritage:heritage.stsci.edu/;hla:hla.stsci.edu/;tw:twitter.com/HUBBLE_space;tw:twitter.com/NASA_Hubble", desc:"lv:STS-31 Discovery;ag:nasa,esa;sc:1.4;x:0;y:24", stat:"o", 
  parts: [
    {n:"", ctry:"us;eu", type:"opt;nir;nuv", pur:"", id:"1990-037B", icon:"hst.png", desc:""}
  ], ev: [
    {pt:"", dt:"1990-04-24", tp:"l", loc:"ter:cap:LC-39B", desc:""},
    {pt:"", dt:"1990-05-24", tp:"sco", loc:"ter:leo:611x620kmx28.4deg", desc:""},
    {pt:"", dt:"2016-12-31", tp:"nom", loc:"ter:leo", desc:"pend"}
  ], inst: [
    {n:"NICMOS", band:"0.8..2.5um", res:"0.26..0.1", d:2.4, px:0.04, fov:"11x11''", desc:"c:;cl:nly;"},
    {n:"WFC3 IR", band:"0.9..1.7um", res:"0.22..0.15", d:2.4, px:0.13, fov:"136x123''", desc:"c:;cl:ny;"},
    {n:"WFC3 UVIS", band:"0.2..1um", res:"0.11..0.045", d:2.4, px:0.04, fov:"162x162''", desc:"c:r;cl:ny;"},
    {n:"ACS", band:"0.35..1.1um", res:"0.18..0.03", d:2.4, px:0.05, fov:"202x202''", desc:"c:nv;cl:n;"},
    {n:"COS FUV", tp:"sp", band:"90..205nm", sres:"1500..4000R", fov:"", desc:"c:;cl:n;"},
    {n:"COS NUV", tp:"sp", band:"165..320nm", sres:"2100..3900R", fov:"", desc:"c:;cl:n;"},
    {n:"STIS FUV", tp:"sp", band:"115..170nm", sres:"1000R", px:0.025, fov:"25x25''", desc:"c:;cl:n;"},
    {n:"STIS NUV", tp:"sp", band:"165..310nm", sres:"500..1005R", px:0.025, fov:"25x25''", desc:"c:;cl:n;"},
]},
hxmt:{name:"Huìyǎn:Insight", url:"hp:www.hxmt.org/;uk:www.integral.soton.ac.uk/missions/HXMT.html", desc:"m:2800kg;lv:CZ-4B;sc:1.3;x:0;y:16", stat:"o", 
  parts: [
    {n:"HXMT:Hard X-ray Modulation Telescope", ctry:"cn", type:"hx", pur:"sur", id:"2017-034A", icon:"hxmt.png", desc:""}
  ], ev: [
    {pt:"", dt:"2017-06-15", tp:"l", loc:"ter:jiu:SLS-2", desc:""},
    {pt:"", dt:"2017-06-15", tp:"sco", loc:"leo:534x546kmx43deg", desc:""},
    {pt:"", dt:"2025", tp:"nom", loc:"leo", desc:""}
  ], inst: [
    {n:"HE", band:"20..250keV", res:"300", ea:"5096cm2", tres:"25us", sres:"15%@60keV", fov:"5.2deg", sens:"0.5mCrab", desc:"c:nr;cl:nl"},
    {n:"LE", band:"1..15keV", res:"300", ea:"384cm2", tres:"1ms", sres:"140eV@6keV", fov:"4x6deg", desc:"c:;cl:ny"},
    {n:"ME", band:"5..30keV", res:"300", ea:"952cm2", tres:"255us", sres:"3keV@20keV", fov:"4deg", desc:"cl:n"}
]},
ibex:{name:"IBEX:Interstellar Boundary EXplorer", url:"hp:ibex.swri.edu/index.shtml;tw:twitter.com/IBEX_NASA", desc:"ag:nasa;lv:Pegasus XL;m:110kg", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"par", pur:"", id:"2008-051A", icon:"ibex.png", desc:""}
  ], ev: [
    {pt:"", dt:"2008-10-19", tp:"l", loc:"ter:Kwajalein:L-1011", desc:""},
    {pt:"", dt:"2009-09-25", tp:"sco", loc:"ter:heeo:12260x304347kmx21.3deg", desc:""}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
imap:{name:"IMAP:Interstellar Mapping and Acceleration Probe", url:"hp:imap.princeton.edu;nasa:soma.larc.nasa.gov/STP/IMAP/", desc:"ag:nasa,jhuapl;lv:Falcon 9;m:", stat:"pl", 
  parts: [
    {n:"", ctry:"us", type:"par", pur:"", id:"", icon:"imap.png", desc:""}
  ], ev: [
    {pt:"", dt:"2025-02", tp:"l", loc:"ter", desc:""},
    {pt:"", dt:"2025-07", tp:"sco", loc:"sol:ho:esl1", desc:""},
    {pt:"", dt:"2028-07", tp:"nom", loc:"sol:ho:esl1", desc:""}
  ], inst: [
    {n:"IMAP-Lo", band:"10..1000eV", tp:"par", res:"9deg", fov:"9x9deg", url:"", desc:"ISN/ENA:Interstellar/Energetic Neutral Atoms;c:;"},
    {n:"IMAP-Hi", band:"0.4..15.6keV", tp:"par", mres:"4", fov:"4deg", eres:"0.45", url:"", desc:"ENA:Energetic Neutral Atoms;c:;"},
    {n:"IMAP-Ultra", band:"3..5000keV", tp:"par", res:"2..10deg", eres:"14%", fov:"90x120deg", url:"", desc:"ENA:Energetic Neutral Atoms;c:;"},
    {n:"MAG:Magnetometer", band:"", tp:"mag", sres:"10pT", url:"", desc:"c:;"},
    {n:"SWE:Solar Wind Electrons", band:"1..5000eV", tp:"par", fov:"12%", tres:"15s", url:"", desc:"c:;"},
    {n:"SWAPI:Solar Wind and Pickup Ion", band:"0.1..20keV", tp:"par", eres:"8.5%", tres:"15s", url:"", desc:"PUI:Interstellar Pickup Ions;c:;"},
    {n:"CoDICE-Lo:Compact Dual Ion Composition Experiment", band:"0.5..80keV", tp:"msp", res:"15x5deg", mres:"2..19", url:"", desc:"ST/EP:Suprathermal Ions/Energetic Particles;c:;"},
    {n:"CoDICE-Hi:Compact Dual Ion Composition Experiment", band:"0.03..5MeV", tp:"msp", res:"", mres:"7", url:"", desc:"ST/EP:Suprathermal Ions/Energetic Particles;c:;"},
    {n:"HIT:High-energy Ion Telescope", band:"2..40MeV", tp:"msp", mres:"7", url:"", desc:"EP:Energetic Particles;c:;"},
    {n:"IDEX:Interstellar Dust Experiment", band:"", tp:"msp", mres:"200", url:"", desc:"ISD:Interstellar Dust;c:;"},
    {n:"GLOWS:Global Solar Wind Structure", band:"58.4..121.6nm", tp:"im", res:"", url:"", desc:"UV glow;c:;"}
]},
integral:{name:"Integral:International Gamma Ray Astrophysics Laboratory", url:"hp:sci.esa.int/integral/;tw:twitter.com/ESA_Integral", desc:"ag:esa;lv:Proton-K/Blok-DM2;sc:1;y:20", stat:"o", 
  parts: [
    {n:"", ctry:"eu", type:"x;g", pur:"", id:"2002-048A", icon:"integral.png", desc:""}
  ], ev: [
    {pt:"", dt:"2002-10-17", tp:"l", loc:"ter:bai:LC-200/39", desc:""},
    {pt:"", dt:"2002-10-28", tp:"sco", loc:"ter:heeo:2284x152812kmx52.1deg", desc:""},
    {pt:"", dt:"2018-12-31", tp:"nom", loc:"ter:heeo", desc:"pend"},
    {pt:"", dt:"2023-12-31", tp:"pom", loc:"ter:heeo", desc:"pend"}
  ], inst: [
    {n:"JEM-X", band:"7.25E+17..8.46E+18", res:"180", sres:"1.3keV@10keV", fov:"4.8deg", desc:"c:nr;cl:nl"},
    {n:"OMC", band:"5.0E+14..6.0E+14", res:"18", px:17.5, d:0.05, fov:"5x5deg", desc:"c:nl;cl:nly"},
    {n:"SPI", band:"20keV..8MeV", res:"7200", sres:"2.2keV@1.33MeV", fov:"16deg", desc:"c:nr;cl:nly;"},
    {n:"IBIS", band:"3.63E+18..2.42E+21", res:"720", sres:"9keV@100keV", fov:"9x9deg", desc:"c:nr;cl:n"}
]},
interheliozond:{name:"Interhelio-Zond", url:"hp:dec1.sinp.msu.ru/smdc/datasource/interhelios/index.html;rsw:www.russianspaceweb.com/igz.html", desc:"Close Approach", stat:"pl", 
  parts: [
    {n:"", ctry:"ru", type:"", pur:"sol", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"2025", tp:"l", loc:"ter:bai?", desc:""},
    {pt:"", dt:"2025", tp:"sco", loc:"sol:ho", desc:""}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
iras:{name:"IRAS:Infrared Astronomical Satellite", url:"hp:lambda.gsfc.nasa.gov/product/iras;ipac:irsa.ipac.caltech.edu/IRASdocs/iras.html", desc:"ag:nasa,nivr;lv:Delta 3910;dim:3.6x3.2x2.1m;m:1083kg", stat:"s", 
  parts: [
    {n:"", ctry:"us;nl", type:"ir", pur:"sur", id:"1983-004A", icon:"", desc:"m:1083kg"}
  ], ev: [
    {pt:"", dt:"1983-01-26", tp:"l", loc:"ter:van:SLC-2W", desc:""},
    {pt:"", dt:"1983-03-04", tp:"sco", loc:"ter:sseo:893x911kmx99.1deg", desc:""},
    {pt:"", dt:"1983-11-23", tp:"tos", loc:"ter:sseo", desc:"eom;Coolant depletion"}
  ], inst: [
    {n:"", band:"12..100um", res:"12..60", d:"0.57", px:"", fov:"5'", url:"", desc:"c:;"}
]},
iris:{name:"IRIS:Interface Region Imaging Spectrograph", url:"hp:iris.lmsal.com/;nasa:www.nasa.gov/mission_pages/iris/", desc:"ag:nasa;lv:Pegasus XL;fam:smex;m:183kg", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"uv", pur:"sol", id:"2013-033A", icon:"iris.png", desc:""}], 
  ev:[
    {pt:"", dt:"2013-06-28", tp:"l", loc:"ter:van:L-1011", desc:""},
    {pt:"", dt:"2013-07-05", tp:"sco", loc:"ter:sseo:621x662kmx97.9deg", desc:""}
  ], inst: [ 
    {n:"", tp:"sp", band:"1.07E+15..2.31E+15", sres:"0.04..0.08nm", tres:"1..2s", d:0.2, px:0.16, foc:"6.9m", fov:"170", desc:"c:n;"}
]},
iso:{name:"ISO:Infrared Space Observatory", url:"hp:www.esa.int/Our_activities/Space_Science/ISO_overview;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=18", desc:"ag:esa;lv:Ariane 44P", stat:"s", 
  parts: [
    {n:"", ctry:"eu", type:"ir", pur:"", id:"1995-062A", icon:""}
  ], ev: [
    {pt:"", dt:"1995-11-17", tp:"l", loc:"ter:kou:ELA-2", desc:""},
    {pt:"", dt:"1995-12-17", tp:"sco", loc:"ter:heeo:1109x70504kmx5.0deg", desc:""},
    {pt:"", dt:"1998", tp:"tos", loc:"", desc:"eom"}
  ], inst: [
    {n:"", band:"2.4..240um", res:"", d:"0.6", px:"12", fov:"3x3'", desc:"warm:<4.6um;c:nvt;"}
]},
iss:{name:"ISS:International Space Station", ctry:"us;ru;eu;jp;ca", id:"1998-067A", url:"nasa:http://www.nasa.gov/mission_pages/station;tw:twitter.com/Space_Station", icon:"iss.png", desc:"sc:3;x:60;y:-0", stat:"o", 
  parts: [
    {n:"AMS 2:Alpha Magnetic Spectrometer 2", type:"par", pur:"cr;dm", url:"hp:www.ams02.org/", id:"2011-020A", desc:"lv:STS-134 Endeavour;m:8500kg"}, 
    {n:"MAXI:Monitor of All-sky X-ray Image", ctry:"jp", type:"x", pur:"", id:"", url:"hp:maxi.riken.jp/top/", desc:"ISS Kibo laboratory"},
    {n:"CALET:CALorimetric Electron Telescope", ctry:"jp", type:"par", pur:"cr", url:"hp:calet.phys.lsu.edu/", stat:"o", id:"", icon:"", desc:"lv:H-IIB;ag:jaxa"},
    {n:"NICER:Neutron Star Interior Composition Explorer", ctry:"us", type:"x", pur:"tim", url:"hp:heasarc.gsfc.nasa.gov/docs/nicer/", stat:"o", id:"", icon:"", desc:"ag:nasa;lv:Falcon 9 v1.2"},
    {n:"JEM-EUSO:Japanese Experiment Module-Extreme Universe Space Observatory", ctry:"jp", type:"par", pur:"cr", url:"hp:jemeuso.org", stat:"pl", id:"", icon:"", desc:"lv:H-IIB;ag:jaxa"},
    {n:"ACES:Atomic Clock Ensemble in Space", ctry:"eu", type:"Gr", pur:"", url:"hp:pharao.cnes.fr/en/PHARAO/GP_platform_aces.htm", stat:"pl", id:"", icon:"", desc:"ag:esa"},
    {n:"Sun-THz", ctry:"br", type:"", pur:"", url:"hp:fapesp.br/week2019/london/news/technology-developed-in-brazil-will-be-part-of-the-international-space-station", stat:"pl", id:"", icon:"", desc:"ag:FAPESP"}
  ], ev: [
    {pt:"", dt:"1998-11-20", tp:"sco", loc:"ter:leo:350x350kmx51.8deg", desc:""},
    {pt:"1", dt:"2009-07-15", tp:"l", loc:"ter:cap:LC-39A", desc:"STS-127"},
    {pt:"1", dt:"2009-07-24", tp:"pow", loc:"iss", desc:""},
    {pt:"0", dt:"2011-05-16", tp:"l", loc:"ter:cap:LC-39A", desc:"STS-134"},
    {pt:"2", dt:"2015-08-19", tp:"l", loc:"ter:tng:YLP-2", desc:"HTV-5"},
    {pt:"3", dt:"2017-06-03", tp:"l", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"4", dt:"2022", tp:"l", loc:"ter:tng", desc:""},
    {pt:"5", dt:"2019", tp:"l", loc:"", desc:"HTV-8"},
    {pt:"6", dt:"2022", tp:"l", loc:"", desc:""}
  ], inst: [
    {pt:"0", tp:"par", n:"", band:"0.5..359GeV", sres:"2..4%", desc:"cl:nlp;"},
    {pt:"1", n:"SSC:Solid-state Slit Camera", band:"1.21E+17..2.42E+18", res:"5400", desc:"c:nlp;cl:nlpy;"},
    {pt:"1", n:"GSC:Gas Slit Camera", band:"4.84E+17..7.25E+18", res:"5400", desc:"cl:ny;"},
    {pt:"2", n:"", tp:"par", band:"1..10000GeV", sres:"2.5%", fov:"", url:"", desc:"c:;"},
    {pt:"3", n:"", band:"0.2..12keV", res:"5", sres:"85eV@1keV;137eV@6keV", tres:"100ns", ea:"2200cm2@2keV;600cm2@6keV", sens:"3e-14erg", url:"", desc:"c:np;cl:nlp;"},
    {pt:"4", n:"", tp:"par", band:">3e10GeV", tres:"2.5ms", fov:"60deg", url:"", desc:"c:;"},
    {pt:"6", n:"", tp:"", band:"0.2..15THz", tres:"", fov:"", url:"", desc:"c:;"}
]},
iue:{name:"IUE:International Ultraviolet Explorer", url:"hp:www.esa.int/Our_activities/Space_Science/IUE_overview;MAST:archive.stsci.edu/iue", desc:"ag:nasa,esa;lv:Delta 2914;m:669kg", stat:"s", 
  parts: [
    {n:"Explorer 57", ctry:"us;eu", type:"uv", pur:"", id:"1978-012A", icon:"iue.png"}
  ], ev: [
    {pt:"", dt:"1978-01-26", tp:"l", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", dt:"1978-03-03", tp:"sco", loc:"ter:geo:25687x45892kmx28.5deg", desc:""},
    {pt:"", dt:"1996-09-30", tp:"tos", loc:"ter:geo", desc:"eom"}
], inst: [
    {n:"", tp:"is", band:"115..325nm", res:"", sres:"", d:"0.45", sens:"", fov:"", desc:"c:;cl:;"}
]}, 
ixpe:{name:"IXPE:Imaging X-Ray Polarimetry Explorer", url:"hp:ixpe.msfc.nasa.gov/", desc:"ag:nasa,msfc;fam:smex;lv:Falcon 9;m:325kg;sc:1.0;y:10", stat:"o", 
  parts: [
    {n:"", ctry:"ind", type:"x", pur:"", id:"2021-121A", icon:"ixpe.png", desc:""}
  ], ev: [
    {pt:"", dt:"2021-12-09", tp:"l", loc:"ter:ksa:LC-39A", desc:""},
    {pt:"", dt:"2021-12-09", tp:"sco", loc:"ter:leo:588x603kmx0.2deg", desc:""},
    {pt:"", dt:"2024", tp:"pom", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"", band:"2..8keV", res:"30", fov:"11'", desc:"c:nr;cl:nl"}
  ]},
jwst:{name:"JWST:James Webb Space Telescope", url:"hp:webb.nasa.gov/;stsci:www.stsci.edu/jwst/;esa:www.esa.int/Our_activities/Space_Science/JWST;tw:twitter.com/NASAWebb;", desc:"lv:Ariane 5 ECA;sc:1.8;x:-2;y:10", stat:"o", 
  parts: [
    {n:"", ctry:"us;eu", type:"nir;opt", pur:"", id:"2021-130A", desc:"", icon:"webb.png"}
  ], ev: [
    {pt:"", dt:"2021-12-25", tp:"l", loc:"ter:kou:ELA-3", desc:"kou"},
    {pt:"", dt:"2022-01-23", tp:"oi", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2022-06", tp:"sco", loc:"sol:esl2", desc:"First Light"}
  ], inst: [
    {n:"MIRI", band:"5..28um", res:"1.13..0.1", d:"6.5", px:"0.1", fov:"1.3x1.7'", sres:"100/3000", url:"ircamera.as.arizona.edu/MIRI/", desc:"c:nv;cl:nry;"},
    {n:"NIRCam", band:"0.6..5um", res:"0.1..0.1", d:"6.5", px:"0.04", fov:"2.2x4.4'", desc:"c:v;"},
    {n:"NIRSpec", band:"0.6..5um", tp:"sp", res:"", d:"6.5", px:"", fov:"3.4x3.6'", sres:"100/1000/2700", desc:"c:v;"},
    {n:"FGS/NIRISS", band:"1.0..2.5um", tp:"sp", res:"", d:"6.5", px:"", fov:"2.2x2.2'", sres:"100/1000/2700", desc:"c:v;"}
]},
kepler:{name:"Kepler", url:"hp:kepler.nasa.gov/;tw:twitter.com/NASAKepler", desc:"ag:nasa;lv:Delta 7935-10L;sc:0.8", stat:"s", 
  parts: [
    {n:"K2", ctry:"us", type:"opt", pur:"exo;seis", id:"2009-011A", icon:"kepler.png", desc:""}
  ], ev: [
    {pt:"", dt:"2009-03-07", tp:"l", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", dt:"2009-03-18", tp:"sco", loc:"sol:ef:0.95x1.05aux5.5deg", desc:""},
    {pt:"", dt:"2018-10-23", tp:"eom", loc:"", desc:"Fuel depletion"}
  ], inst: [
    {n:"", band:"423..897nm", d:"1.4", px:"10", tres:"59..1766s", fov:"16deg", desc:"c:n;cl:nl;"}
]},
litebird:{name:"LiteBIRD:Lite satellite for the studies of B-mode polarization and Inflation from cosmic background Radiation Detection", url:"hp:litebird.jp/eng/", desc:"ag:jaxa,isas;lv:H-III;m:2600kg;sc:0.8", stat:"pl", 
  parts: [
    {n:"ライトバード", ctry:"jp", type:"mw", pur:"cmb", id:"", icon:"litebird.png", desc:""}
  ], ev: [
    {pt:"", dt:"2027", tp:"l", loc:"ter:tng", desc:""},
    {pt:"", dt:"2027", tp:"sco", loc:"sol:esl2", desc:"Lissajous orbit"},
    {pt:"", dt:"2030", tp:"nom", loc:"", desc:"?"}
  ], inst: [
    {n:"LFT", band:"34..161GHz", d:"0.42", px:"", res:"4200..1440", fov:"20x10deg", desc:"c:n;cl:nly;"},
    {n:"MFT", band:"89..224GHz", d:"0.32", px:"", res:"2280..1680", fov:"28deg", desc:"c:n;cl:nly;"},
    {n:"HFT", band:"166..448GHz", d:"0.19", px:"", res:"1740..1080", fov:"28deg", desc:"c:n;cl:nl;"}
]},
longjiang: {name:"Longjiang 2:Dragon River", url:"hp:www.chinaspaceflight.com/satellite/HIT/DSLWP-A1-A2.html", desc:"ag:cnsa,HIT;m:45kg;dim:0.5x0.5x0.4m;lv:CZ-4C;", stat:"s",
  parts:[
    {n:"龙江二号;DSLWP-A2:Discovering the Sky at Longest Wavelengths Pathfinder", type:"r", pur:"lun", ctry:"cn", id:"2018-045B", icon:"dslwp.png"}
   ],  ev:[
    {pt:"", type:"l", dt:"2018-05-21", loc:"ter:xch:LC-2", desc:"Chang'e 4 LRS piggyback"},
    {pt:"", type:"oi", dt:"2018-05-25", loc:"lun:300x3000km", desc:""},
    {pt:"", type:"nom", dt:"2019-06", loc:"lun", desc:"?"}
  ], inst: [
    {n:"", band:"1..30MHz", res:"", desc:"c:nv;"}
]},/*
hwo:{name:"HWO:Habitable Worlds Observatory", url:"hp:webb.nasa.gov/;stsci:www.stsci.edu/jwst/;esa:www.esa.int/Our_activities/Space_Science/JWST;tw:twitter.com/NASAWebb;", desc:"lv:Ariane 5 ECA;sc:1.8;x:-2;y:10", stat:"o", 
  parts: [
    {n:"", ctry:"us;eu", type:"nir;opt", pur:"", id:"2021-130A", desc:"", icon:"webb.png"}
  ], ev: [
    {pt:"", dt:"2021-12-25", tp:"l", loc:"ter:kou:ELA-3", desc:"kou"},
    {pt:"", dt:"2022-01-23", tp:"oi", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2022-06", tp:"sco", loc:"sol:esl2", desc:"First Light"}
  ], inst: [
    {n:"MIRI", band:"5..28um", res:"1.13..0.1", d:"6.5", px:"0.1", fov:"1.3x1.7'", sres:"100/3000", url:"ircamera.as.arizona.edu/MIRI/", desc:"c:nv;cl:nry;"},
    {n:"NIRCam", band:"0.6..5um", res:"0.1..0.1", d:"6.5", px:"0.04", fov:"2.2x4.4'", desc:"c:v;"},
    {n:"NIRSpec", band:"0.6..5um", tp:"sp", res:"", d:"6.5", px:"", fov:"3.4x3.6'", sres:"100/1000/2700", desc:"c:v;"},
    {n:"FGS/NIRISS", band:"1.0..2.5um", tp:"sp", res:"", d:"6.5", px:"", fov:"2.2x2.2'", sres:"100/1000/2700", desc:"c:v;"}
]},*/
qss:{name:"Mozi", url:"", desc:"ag:cnsa;lv:CZ-2D;m:500kg", stat:"o", 
  parts: [
    {n:"QSS:Quantum Science Satellite", ctry:"cn", type:"par", pur:"", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"2016-07", tp:"l", loc:"ter:jiu", desc:""},
    {pt:"", dt:"2016-07", tp:"sco", loc:"ter:sseo:600kmx97.8deg", desc:""},
    {pt:"", dt:"2018-07", tp:"nom", loc:"ter:sseo", desc:""}
]},
/*kuafua:{name:"-A", url:"hp:www.spaceweather.ac.cn/english/", desc:"ag:cnsa;m:600kg", stat:"pl", 
  parts: [
    {n:"", ctry:"cn", type:"x", pur:"sol;w", id:"", icon:"kuafu.png", desc:""}
  ], ev: [
    {pt:"", dt:"2017", tp:"l", loc:"ter:xch", desc:""},
    {pt:"", dt:"2017", tp:"sco", loc:"sol:esl1", desc:""}
]},*/
/*lattes:{name:"LATTES", url:"hp:www.dem.inpe.br/projetos.html", desc:"m:430kg;sc:1.1;x:0;y:16", stat:"pl", 
  parts: [
    {n:"", ctry:"br", type:"x", pur:"tim", id:"", icon:"lattes.png", desc:""}
  ], ev: [
    {pt:"", dt:"2018", tp:"l", loc:"ter:?", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:leo:650kmx15deg", desc:""}
  ], inst: [
    {n:"SXI:Soft X-ray Imager", band:"4.84E+17..4.35E+18", res:"300", desc:"c:nl;cl:nly;"},
    {n:"HXI:Hard X-ray Imager", band:"10..200keV", res:"420", sres:"<5keV@60keV", fov:"58x26deg", desc:"cl:n;"}
]},*/
lisapathfinder:{name:"LISA Pathfinder", url:"hp:www.esa.int/Our_activities/Space_Science/LISA_Pathfinder_overview;esa:sci.esa.int/science-e/www/area/index.cfm?fareaid=40;tw:twitter.com/ESA_LPF", desc:"Gravity Waves;lv:Vega;m:1910kg", stat:"s", 
  parts: [
    {n:"", ctry:"eu", type:"gr", pur:"", id:"2015-70A", icon:"lisapf.png", desc:""}
  ], ev: [
    {pt:"", dt:"2015-12-03", tp:"l", loc:"ter:kou:ZLV", desc:""},
    {pt:"", dt:"2016-01-22", tp:"sco", loc:"sol:esl1:500000x800000km", desc:"Lissajous orbit"},
    {pt:"", dt:"2016-07-18", tp:"tos", loc:"sol:esl1:leo", desc:"eom"}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
lomonosow:{name:"Lomonosov", url:"hp:lomonosov.sinp.msu.ru/en/", desc:"lv:Soyuz 2.1A/Volga;sc:1.2;x:0;y:20", stat:"p", 
  parts: [
    {n:"", ctry:"ru", type:"uv,x,g,par", pur:"grb;cr", id:"2016-026A", icon:"lomonosov.png", desc:""}
  ], ev: [
    {pt:"", dt:"2016-04-27", tp:"l", loc:"ter:vos:LC-1C", desc:""},
    {pt:"", dt:"2016-04-27", tp:"sco", loc:"ter:sseo:471x486kmx97.3deg", desc:""},
    {pt:"", dt:"2018-06-30", tp:"los", loc:"ter:sseo", desc:"eom"}
  ], inst: [
    {n:"BRDG", band:"10..3000keV", res:"3600..10800", d:"", px:"", url:"", desc:"c:nl;cl:nl;"},
    {n:"TUS", band:"300..400nm", res:"", d:"1.4m", px:"", foc:"1.5m", url:"", desc:"c:;cl:ny;"},
    {n:"UFFO SMT", band:"200..650nm", res:"", d:"0.1m", px:"4", fov:"17'", url:"", desc:"c:;cl:n;"},
    {n:"UBAT", band:"5..200keV", res:"600", d:"", px:"", fov:"90.2deg", ea:"191.1cm2", url:"", desc:"c:;cl:n;"},
    {n:"DEPRON ELFIN-L", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
 ]},
microscope:{name:"MicroSCOPE:Micro-Satellite a traînee Compensee pour l'Observation du Principe d'Equivalence", url:"hp:smsc.cnes.fr/MICROSCOPE/index.htm", desc:"fam:Myriade;l:Soyuz STA", stat:"o", 
  parts: [
    {n:"", ctry:"fr", type:"gr", pur:"", id:"2016-025B", icon:"", desc:"m:330kg"}
  ], ev: [
    {pt:"", dt:"2016-04-25", tp:"l", loc:"", desc:"ter:kou:ELS"},
    {pt:"", dt:"2016-04-25", tp:"sco", loc:"ter:sseo:711x714kmx98.2deg", desc:""},
    {pt:"", dt:"2017-10", tp:"eom", loc:"ter:sseo", desc:""}
  ], inst: [
    {n:"T-SAGE:Twin-Space Accelerometer for Gravity Experiment", tp:"acc", sens:"10e-12ms^-2.", url:"smsc.cnes.fr/MICROSCOPE/t-sage.htm", desc:"c:;"}
]},
millimetron:{name:"Spektr-M", url:"hp:asc-lebedev.ru/index2.php?engdep=20", desc:"ag:rosc,lav;lv:Angara-A5M/KVTK;sc:1.2;x:0;y:0;m:6600kg", stat:"pl", 
  parts: [
    {n:"Спектр-M;Millimetron", ctry:"ru", type:"mw", pur:"", id:"", icon:"millimetron.png", desc:""}
  ], ev: [
    {pt:"", dt:"2029", tp:"l", loc:"ter:vos", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"sol:esl2", desc:""}
  ], inst: [
    {n:"", band:"1.50E+10..9.99E+11", res:"420..6", d:10, px:3, desc:"c:nv;"},
    {n:"SVLBI", band:"9.99E+10..8.57E+11", res:"0.0004..0.000045", desc:"c:niv;cl:x"}
]},
most:{name:"MOST:Microvariability and Oscillations of STars", url:"hp:www.astro.ubc.ca/MOST/index.html", desc:"ag:csa;lv:Rokot;sc:0.45;x:4;y:10", stat:"o", 
  parts: [
    {n:"", ctry:"ca", type:"opt", pur:"seis", id:"2003-031D", icon:"most.png", desc:""}
  ], ev: [
    {pt:"", dt:"2003-06-30", tp:"l", loc:"ter:ple:LC-133/3", desc:""},
    {pt:"", dt:"2003-07-07", tp:"sco", loc:"ter:sseo:818x832kmx98.7deg", desc:""}
  ], inst: [
    {n:"", band:"4.28E+14..8.57E+14", res:"0.2", d:"0.15", px:"12", desc:"c:nl;cl:nl;"}
]},
nanojasmine:{name:"Nano-JASMINE", url:"www.jasmine-galaxy.org/index.html", desc:"fam:JASMINE;lv:Vega-C", stat:"pl", 
  parts: [
    {n:"", ctry:"jp", type:"nir", pur:"as", id:"", icon:"nano-jasmine.png", desc:""}
  ], ev: [
    {pt:"", dt:"2022", tp:"l", loc:"ter:Kourou", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:sseo", desc:""}
  ], inst: [
    {n:"", band:"0.6..1um", res:"", d:"0.0525", px:"", desc:"c:;"}
]},
neosm:{name:"NEO Surveyor:Near Earth Object Surveyor Mission", url:"hp:neocam.ipac.caltech.edu/", desc:"ag:nasa,jpl;lv:;sc:1;x:0;y:10", stat:"pl", 
  parts: [
    {n:"NEOSM:NEO Surveillance Mission", ctry:"us", type:"ir", pur:"neo", id:"", icon:"neosm.png", desc:""}
  ], ev: [
    {pt:"", dt:"2026", tp:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2026", tp:"sco", loc:"sol:esl1", desc:""}
  ], inst: [
    {n:"", band:"4..10um", d:0.5, px:1, fov:"12.7deg2", desc:"c:n;cl:nl;"}
]},
neossat:{name:"NEOSSat:Near-Earth Object Surveillance Satellite", url:"hp:www.neossat.ca/;csa:www.asc-csa.gc.ca/eng/satellites/neossat/", desc:"ag:csa;lv:PSLV;sc:0.8;x:0;y:10", stat:"o", 
  parts: [
    {n:"", ctry:"ca", type:"opt", pur:"neo", id:"2013-009D", icon:"neossat.png", desc:""}
  ], ev: [
    {pt:"", dt:"2013-02-25", tp:"l", loc:"ter:sri:FLP", desc:""},
    {pt:"", dt:"2013-02-26", tp:"sco", loc:"ter:sseo:771x786kmx98.6deg", desc:""}
  ], inst: [
    {n:"", band:"2.86E+14..8.57E+14", d:0.15, px:3, desc:"c:n;cl:nl;"}
]},
neowise:{name:"NEOWISE:Near Earth Object WISE", url:"hp:wise.ssl.berkeley.edu/;ipac:irsa.ipac.caltech.edu/Missions/wise.html;tw:twitter.com/WISE_Mission", desc:"ag:nasa,jpl;lv:Delta II 7320-10C;dim:2.9x2.0x1.7m;m:750kg;sc:0.9;x:0;y:10", stat:"o", 
  parts: [
    {n:"WISE:Widefield Infrared Survey Explorer", ctry:"us", type:"nir", pur:"sur;neo", id:"2009-071A", icon:"wise.png", desc:""}
  ], ev: [
    {pt:"", dt:"2009-12-14", tp:"l", loc:"ter:van:SLC-2W", desc:""},
    {pt:"", dt:"2009-12-16", tp:"sco", loc:"ter:sseo:526x530kmx97.5deg", desc:""},
    {pt:"", dt:"2011", tp:"hib", loc:"sseo", desc:""},
    {pt:"", dt:"2013-09", tp:"re", loc:"sseo", desc:""},
    {pt:"", dt:"2023-09", tp:"nom", loc:"sseo", desc:"?"}
  ], inst: [
    {n:"", band:"3.4..28um", res:"", d:"0.4", px:"2.75", fov:"47x47'", desc:"warm:<4.6um;c:nvt;"}
]},
nustar:{name:"NuSTAR:Nuclear Spectroscopic Telescope Array", url:"hp:www.nustar.caltech.edu/;tw:twitter.com/NASANuSTAR", desc:"ag:nasa;lv:Pegasus XL;fam:smex;sc:1.6;x:16;y:-5", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"hx", pur:"bh", id:"2012-031A", icon:"nustar.png", desc:""}
  ], ev: [
    {pt:"", dt:"2012-06-13", tp:"l", loc:"ter:Kwajalein:L-1011", desc:""},
    {pt:"", dt:"2012-06-17", tp:"sco", loc:"ter:leo:614x632kmx8deg", desc:""}
  ], inst: [
    {n:"", band:"1.45E+18..1.91E+19", res:"10", desc:"c:nr;cl:nl"}
]},
odin:{name:"Odin", url:"hp:www.ssc.se/?id=7700", desc:"sg:ssc;lv:Start-1", stat:"s", 
  parts: [
    {n:"", ctry:"sw", type:"mw;opt", pur:"", id:"2001-007A", icon:"odin.png", desc:"m:250kg"}
  ], ev: [
    {pt:"", dt:"2001-02-20", tp:"l", loc:"vos:LC-5", desc:""},
    {pt:"", dt:"2001-03-02", tp:"sco", loc:"ter:sseo:611x620kmx97.8deg", desc:""},
    {pt:"", dt:"2007", tp:"eom", loc:"", desc:"Earth obs. only after 2007"}
  ], inst: [
    {n:"", band:"1.07E+15..4.61E+14", res:"", desc:"c:n"},
    {n:"", band:"1.18E+11..5.8E+11", res:"540..120", desc:"c:n"}
]},
oso1:{name:"OSO 1:Orbiting Solar Observatory", url:"hp:", desc:"ag:nasa,gsfc;lv:Delta", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"uv,x,gam", pur:"sol", id:"1962-006A", icon:"oso.png", desc:"m:207.7kg"}
  ], ev: [
    {pt:"", dt:"1962-03-07", tp:"l", loc:"cap:LC-17A", desc:""},
    {pt:"", dt:"1962-03-07", tp:"sco", loc:"ter:sseo:510x530kmx32.8deg", desc:""},
    {pt:"", dt:"1964-05", tp:"eom", loc:"", desc:""}
  ], inst: [
    {n:"", tp:"sp", band:"1..40nm", res:"", desc:"c:n"},
    {n:"", tp:"ctr",  band:"20..100keV", res:"", desc:"c:n"},
    {n:"", tp:"ctr",  band:"0.05..3MeV", res:"", desc:"c:n"}
]},
pamela:{name:"PAMELA:Payload for Antimatter Matter Exploration and Light-nuclei Astrophysics", url:"pamela.roma2.infn.it/index.php", desc:"on Resurs-DK1 satellite;lv:Soyuz-U-PVB", stat:"o", 
  parts: [
    {n:"", ctry:"it;ru", type:"par", pur:"cr", id:"2006-021A", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"2006-06-15", tp:"l", loc:"bai:LC-1", desc:""},
    {pt:"", dt:"2006-06-17", tp:"sco", loc:"ter:leo:191x340kmx69.9deg", desc:""}
  ], inst: [
    {n:"", tp:"par", band:"10..1000GeV", sres:"3%@100GeV", d:"", px:"", url:"", desc:"c:;"}
]},
picard:{name:"PICARD", url:"smsc.cnes.fr/PICARD/", desc:"ag:cnes;lv:Dnepr", stat:"s", 
  parts: [
    {n:"", ctry:"fr", type:"", pur:"sol", id:"2010-028A", icon:"picard.png", desc:""}
  ], ev: [
    {pt:"", dt:"2010-06-15", tp:"l", loc:"ter:Dombarovsky:LC-370/13", desc:""},
    {pt:"", dt:"2010-06-22", tp:"sco", loc:"ter:sseo:726x727kmx98.2deg", desc:""},
    {pt:"", dt:"2014-04-04", tp:"los", loc:"ter:sseo", desc:"eom"}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
planck:{name:"Planck", url:"hp:www.esa.int/Our_activities/Space_Science/Planck", desc:"ag:esa;lv:Ariane 5ECA", stat:"s", 
  parts: [
    {n:"", ctry:"eu", type:"mw", pur:"cmb;sur", id:"2009-026B", icon:"planck.png", desc:""}
  ], ev: [
    {pt:"", dt:"2009-05-14", tp:"l", loc:"ter:kou:ELA-3", desc:""},
    {pt:"", dt:"2009-05-22", tp:"toi", loc:"ter:to:370x1135587kmx3deg", desc:""},
    {pt:"", dt:"2009-06", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2013-10-23", tp:"tos", loc:"sol:esl2", desc:"eom;Depletion Burn"}
  ], inst: [
    {n:"LFI", band:"2.30E+10..8.4E+10", res:"2980..840", d:1.5, px:640, desc:"c:;"},
    {n:"HFI", band:"6.6E+10..8.57E+11", res:"300", d:1.5, px:300, desc:"c:;"}
]},
plato:{name:"PLATO:Planetary Transits and Oscillations of stars", url:"hp:sci.esa.int/plato/;tw:twitter.com/PLATOMissionCon", desc:"ag:esa;lv:Ariane 62;fam:M-class;sc:0.7;x:28;y:0", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"opt;nir", pur:"exo", id:"", icon:"plato.png", desc:""}
  ], ev: [
    {pt:"", dt:"2026", tp:"l", loc:"ter:kou:ELA-4", desc:""},
    {pt:"", dt:"2026", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2030", tp:"nom", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2034", tp:"pom", loc:"sol:esl2", desc:""}
  ], inst: [
    {n:"", band:"500..1000nm", tres:"2.5..25s", d:"0.12", px:"15", fov:"48.5deg", desc:"34 Cameras;c:n;cl:nl;"}
]},
proba2:{name:"Proba-2", url:"hp:www.esa.int/Our_activities/Technology/Proba_Missions/About_Proba-2;esa:www.esa.int/esaMI/Proba/index.html;swap:proba2.sidc.be/", desc:"ag:esa;lv:Rokot", stat:"o", 
  parts: [
    {n:"", ctry:"eu", type:"", pur:"sol", id:"2009-059B", icon:"proba2.png", desc:""}
  ], ev: [
    {pt:"", dt:"2009-11-02", tp:"l", loc:"ter:ple:LC-133/2", desc:""},
    {pt:"", dt:"2009-11-09", tp:"sco", loc:"ter:sseo:710x727kmx98.3deg", desc:""}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
proba3:{name:"Proba-3", url:"hp:www.esa.int/Enabling_Support/Space_Engineering_Technology/Proba_Missions/About_Proba-3", desc:"ag:esa;lv:PSLV;2 spacecraft external coronagraph", stat:"pl", 
  parts: [
    {n:"Coronagraph", ctry:"eu", type:"cor", pur:"sol", id:"", icon:"", desc:"m:340kg"},
    {n:"Occulter", ctry:"eu", type:"cor", pur:"sol", id:"", icon:"", desc:"m:200kg"}
  ], ev: [
    {pt:"", dt:"2024-09", tp:"l", loc:"ter:sri", desc:""},
    {pt:"", dt:"l+1d", tp:"sco", loc:"ter:heeo:600x60530km", desc:""}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
punch:{name:"PUNCH:Polarimeter to Unify the Corona and Heliosphere", url:"hp:punch.space.swri.edu/", desc:"ag:nasa,gsfc,swri;fam:SMEX;lv:;m:;sc:0.4;x:30;y:6", stat:"pl", 
  parts: [
    {n:"1", ctry:"us", type:"opt;uv", pur:"sol", id:"", icon:"punch-1.png", desc:""},
    {n:"2", ctry:"us", type:"opt;uv", pur:"sol", id:"", icon:"punch-2.png", desc:"Coronagraph"},
    {n:"3", ctry:"us", type:"opt;uv", pur:"sol", id:"", icon:"punch-3.png", desc:""},
    {n:"4", ctry:"us", type:"opt;uv", pur:"sol", id:"", icon:"punch-4.png", desc:""}
  ], ev: [
    {pt:"", dt:"2023-02", tp:"l", loc:"ter:van", desc:""},
    {pt:"", dt:"2023-05", tp:"sco", loc:"ter:sseo:570kmx98deg", desc:""},
    {pt:"", dt:"2025", tp:"nom", loc:"ter:sseo", desc:""}
  ], inst: [
    {n:"NFI:Narrow Field Imager", band:"300..650nm", res:"", d:"", px:"", desc:"c:;cl:nl;"},
    {n:"WFI:Wide Field Imagers", band:"300..650nm", res:"", d:"", px:"", desc:"c:;cl:;"}
]},
queqiao:{name:"Queqiao", url:"China Spaceflight:www.chinaspaceflight.com/satellite/Deepspace/CE-4/CE-4.html", desc:"ag:cnsa;lv:CZ-4C", stat:"o", 
  parts: [
    {n:"", ctry:"cn", type:"r", pur:"", id:"", icon:"chang-e4-relay.png", desc:""}
  ], ev: [
    {pt:"", dt:"2018-05-21", tp:"l", loc:"ter:xch:LC-2", desc:""},
    {pt:"", dt:"2018-06-14", tp:"sco", loc:"lun:eml2:13000km", desc:"Halo orbit"},
    {pt:"", tp:"nom", dt:"2023-06", loc:"lun", desc:"?"}
  ], inst: [
    {n:"NCLE:Netherlands Chinese Low-Frequency Explorer", band:"1..30MHz", res:"", d:"5", px:"", url:"www.astron.nl/r-d-laboratory/ncle/netherlands-china-low-frequency-explorer-ncle", desc:"c:;cl:n;"}
]},
radioastron:{name:"Spektr-R", url:"hp:www.asc.rssi.ru/radioastron/index.htm", desc:"ag:rosc;lv:Zenit-3SLBF/Fregat SB;sc:1.4;3850kg", stat:"s", 
  parts: [
    {n:"Спектр-Р;RadioAstron", ctry:"ru", type:"r", pur:"int", id:"2011-037A", icon:"radioastron.png", desc:""}
  ], ev: [
    {pt:"", dt:"2011-07-18", tp:"l", loc:"ter:bai:LC-45/1", desc:""},
    {pt:"", dt:"2011-07-25", tp:"sco", loc:"ter:heeo:1248x334727kmx51.8deg", desc:""},
    {pt:"", dt:"2019-01-11", tp:"los", loc:"ter:heeo", desc:"eom"}
  ], inst: [
    {n:"CRT", band:"3.24E+08..2.5132e10", res:"21960..300", d:10, px:60, w:4e6, desc:"c:nv;"},
    {n:"SVLBI", band:"3.24E+08..2.1750E+10", res:"5.3e-4..7e-6", desc:"c:niv;cl:x;"}
    //PLASMA-F mag;par
]},
rhessi:{name:"RHESSI:Reuven Ramaty High Energy Solar Spectroscopic Imager", url:"hp:hesperia.gsfc.nasa.gov/hessi/", desc:"ag:nasa;lv:Pegasus XL", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"x", pur:"sol", id:"2002-004A", icon:"rhessi.png", desc:""}
  ], ev: [
    {pt:"", dt:"2002-02-05", tp:"l", loc:"ter:cap:L-1011", desc:""},
    {pt:"", dt:"2002-02-05", tp:"sco", loc:"ter:leo:588x609kmx38.0deg", desc:""}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
rosat:{name:"ROSAT:Röntgensatellit", url:"hp:www.mpe.mpg.de/xray/wave/rosat/index.php", desc:"ag:dlr;lv:Delta II 6920-10", stat:"s", 
  parts: [
    {n:"", ctry:"de", type:"euv;x", pur:"sur", id:"1990-049A", icon:"rosat.png", desc:"m:2400kg"}
  ], ev: [
    {pt:"", dt:"1990-06-01", tp:"l", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", dt:"1990-07-06", tp:"sco", loc:"ter:leo:562x584kmx52.9deg", desc:""},
    {pt:"", dt:"1999-02-12", tp:"tos", loc:"", desc:"eom"}
], inst: [
    {n:"PSPC", tp:"ctr", band:"0.1..2.5keV", res:"", eres:"", fov:"2deg", ea:"240cm2@1keV", sens:"", desc:"c:;cl:;"},
    {n:"HRI", tp:"is", band:"0.1..2.5keV", res:"2", eres:"", fov:"38'", ea:"80cm2@1keV", sens:"", desc:"c:;cl:;"},
    {n:"WFC", tp:"im", band:"62..206eV", res:"", sres:"", fov:"5deg", foc:"", sens:"", desc:"c:;cl:;"}
]}, 
rxte:{name:"RXTE:Rossi X-ray Timing Explorer", url:"hp:xte.mit.edu/", desc:"ag:nasa;lv:Delta II 7920-10;m:3038kg", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"x", pur:"tim", id:"1995-074A", icon:"rxte.png", desc:""}
  ], ev: [
    {pt:"", dt:"1995-12-30", tp:"l", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", dt:"1996-01-29", tp:"sco", loc:"ter:564x583kmx22.9deg", desc:""},
    {pt:"", dt:"2012-01-05", tp:"tos", loc:"ter", desc:"eom"}
  ], inst: [
    {n:"PCA", band:"4.84E+17..6.05E+19", res:"3600", desc:"c:nr"}
]},
sampex:{name:"SAMPEX:Solar Anomalous and Magnetospheric Particle Explorer", url:"hp:lasp.colorado.edu/home/sampex/", desc:"ag:nasa;fam:SMEX;lv:Scout G1;m:158kg", stat:"s", 
  parts: [
    {n:"Explorer 68", ctry:"us", type:"par", pur:"sol", id:"1992-038A", icon:"sampex.png", desc:""}
  ], ev: [
    {pt:"", dt:"1992-07-03", tp:"l", loc:"ter:van:slc-5", desc:""},
    {pt:"", dt:"1992-07-03", tp:"sco", loc:"ter:520x670kmx82deg", desc:""},
    {pt:"", dt:"2004-06-30", tp:"tos", loc:"ter", desc:"eom"}
  ], inst: [
    {n:"", tp:"par", band:"0.4..350MeV", res:"", desc:"c:;cl:"}
]},
sas2:{name:"SAS-2:Small Astronomy Satellite 2", url:"hp:heasarc.gsfc.nasa.gov/docs/sas2/sas2.html", desc:"ag:nasa;lv:Scout D-1;fam:Explorer", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"g", pur:"", id:"1972-091A", icon:""}
  ], ev: [
    {pt:"", dt:"1972-11-15", tp:"l", loc:"ter:smp", desc:""},
    {pt:"", dt:"1972-11-15", tp:"sco", loc:"ter:leo:444x632kmx1.0deg", desc:""},
    {pt:"", dt:"1973", tp:"tos", loc:"", desc:"eom"}
]}, 
sas3:{name:"SAS-3", url:"hp:heasarc.gsfc.nasa.gov/docs/sas3/sas3.html", desc:"ag:nasa;lv:Scout F-1;fam:Explorer", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"x", pur:"", id:"1975-037A", icon:""}
  ], ev: [
    {pt:"", dt:"1975-05-07", tp:"l", loc:"ter:smp", desc:""},
    {pt:"", dt:"1975-06-24", tp:"sco", loc:"ter:502x509kmx3deg", desc:""},
    {pt:"", dt:"1979", tp:"tos", loc:"", desc:"eom"}
]},
sdo:{name:"SDO:Solar Dynamics Observatory", url:"hp:sdo.gsfc.nasa.gov/;tw:twitter.com/NASASunEarth", desc:"ag:nasa;lv:Atlas V 401;sc:0.8;y:12", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"opt;euv;x", pur:"sol", id:"2010-005A", icon:"sdo.png", desc:""}
  ], ev: [
    {pt:"", dt:"2010-02-11", tp:"l", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", dt:"2010-03-18", tp:"sco", loc:"ter:geo:35781x35789kmx28.1deg", desc:""}
  ], inst: [
    {n:"AIA:Atmospheric Imaging Assembly", band:"4.85E+14..4.87E+14", res:"1", url:"aia.lmsal.com/", desc:"c:;cl:n;"},
    {n:"HMI:Helioseismic and Magnetic Imager", band:"1.76E+15..6.00E+16", d:0.2, px:0.6, url:"hmi.stanford.edu/", desc:"c:n;"},
    {n:"EVE:Extreme Ultraviolet Variability Experiment", band:"", url:"lasp.colorado.edu/eve/", desc:"c:n;"}
]},
smalljasmine:{name:"Small-JASMINE", url:"hp:www.jasmine-galaxy.org/index.html", desc:"fam:Jasmine;lv:Epsilon", stat:"pl", 
  parts: [
    {n:"", ctry:"jp", type:"nir", pur:"as;sur", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"2024", tp:"l", loc:"ter:tng", desc:""},
    {pt:"", dt:"2024", tp:"sco", loc:"ter:sseo", desc:""}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", desc:"c:;"}
]},
smile:{name:"SMILE:Solar wind Magnetosphere Ionosphere Link Explorer", url:"hp:sci.esa.int/smile", desc:"ag:CAS,esa;lv:Vega C;y:-12", stat:"pl", 
  parts: [
    {n:"", ctry:"cn;eu", type:"sol", pur:"", id:"", icon:"smile.png", desc:""}
  ], ev: [
    {pt:"", dt:"2025", tp:"l", loc:"ter:kou", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:heeo:5000x120000kmx90deg", desc:""}
  ], inst: [
    {n:"SXI:Soft X-ray Imager", band:"0.2..2.5keV", res:"", d:"", px:"", fov:"15.5x26.5deg", desc:"c:;cl:nl;"},
    {n:"UVI:UltraViolet Imager", band:"160..180nm", res:"", d:"", px:"", fov:"10deg", desc:"c:;cl:n;"},
    {n:"LIA:Light Ion Analyser", tp:"par", band:"0.2..20keV", tres:"0.5s", d:"", px:"", desc:"c:;"},
    {n:"MAG:Magnetometer", tp:"mag", band:"", res:"", d:"", px:"", desc:"c:;"}
]},
soho:{name:"SOHO:Solar & Heliospheric Observatory", url:"hp:sohowww.nascom.nasa.gov/;arch:sohowww.nascom.nasa.gov/data/archive/index_ssa.html;esa:www.esa.int/Our_activities/Space_Science/SOHO_overview2", desc:"ag:nasa,esa;lv:Atlas II AS;sc:1;y:26", stat:"o", 
  parts: [
    {n:"", ctry:"us;eu", type:"opt;uv;par", pur:"sol", id:"1995-065A", icon:"soho.png", desc:""}
  ], ev: [
    {pt:"", dt:"1995-12-02", tp:"l", loc:"ter:cap:LC-36B", desc:""},
    {pt:"", dt:"1995-12-02", tp:"toi", loc:"ter:heeo:177x1115746kmx29deg", desc:""},
    {pt:"", dt:"1995", tp:"sco", loc:"sol:esl1", desc:""}
  ], inst: [
    {n:"SUMER:Solar Ultraviolet Measurements of Emitted Radiation", band:"1.87E+15..6.00E+15", res:"1.3", url:"www.mps.mpg.de/en/projekte/soho/sumer/", desc:"c:nt;cl:ny;"},
    {n:"CDS:Coronal Diagnostic Spectrometer", tp:"sp", band:"3.75E+15..2.00E+16", res:"3", url:"solar.bnsc.rl.ac.uk/", desc:"c:n;"},
    {n:"EIT:Extreme ultraviolet Imaging Telescope", band:"9.99E+15..1.67E+16", res:"2.5", url:"umbra.nascom.nasa.gov/eit/", desc:"c:nr;"},
    {n:"CELIAS:Charge, Element, and Isotope Analysis System", tp:"psp", band:"", res:"", url:"www.space.unibe.ch/soho/", desc:""},
    {n:"COSTEP:Comprehensive Suprathermal and Energetic Particle Analyzer", tp:"psp", band:"", res:"", url:"www.ieap.uni-kiel.de/et/ag-heber/costep", desc:""},
    {n:"ERNE:Energetic and Relativistic Nuclei and Electron experiment", tp:"psp", band:"", res:"", url:"www.srl.utu.fi/projects/erne/index_english.html", desc:""},
    {n:"GOLF:Global Oscillations at Low Frequencies", band:"", res:"", url:"golfwww.medoc-ias.u-psud.fr/", desc:""},
    {n:"LASCO:Large Angle and Spectrometric Coronagraph", band:"", res:"", url:"lasco-www.nrl.navy.mil/;mpg:star.mpae.gwdg.de/", desc:""},
    {n:"MDI:Michelson Doppler Imager", band:"", res:"", url:"soi.stanford.edu/", desc:""},
    {n:"SWAN:Solar Wind Anisotropies", band:"", res:"", url:"www.fmi.fi/research_space/space_7.html;latmos:www.aerov.jussieu.fr/projet/SWAN/", desc:""},
    {n:"UVCS:Ultraviolet Coronagraph Spectrometer", band:"", res:"", url:"www.cfa.harvard.edu/uvcs/", desc:""},
    {n:"VIRGO:Variability of Solar Irradiance and Gravity Oscillations", band:"", res:"", url:"www.ias.u-psud.fr/virgo/", desc:""}
]},
solarorbiter:{name:"SolO:Solar Orbiter", url:"hp:www.esa.int/Our_activities/Space_Science/Solar_Orbiter;esa:sci.esa.int/solarorbiter;tw:twitter.com/ESASolarOrbiter", desc:"High Inclination;ag:esa;fam:M-class;lv:Atlas V 411;sc:1.8;x:0;y:1", stat:"o", 
  parts: [
    {n:"", ctry:"eu", type:"uv;par", pur:"sol", id:"2020-010A", icon:"solarorbiter.png", desc:""}
  ], ev: [
    {pt:"", dt:"2020-02-10", tp:"l", loc:"ter:kou", desc:""},
    {pt:"", dt:"2020-02-10", tp:"sco", loc:"sol:ho", desc:""}
  ], inst: [
    {n:"EUI:Extreme Ultraviolet Imager", band:"17.4..30.4nm", res:"1", d:"", px:"", fov:"5.2deg", url:"", desc:"cl:nly;c:nr"},
    {n:"EPD:Energetic Particle Detector", band:"8..700keV", tp:"psp", res:"", url:"", desc:"c:"},
    {n:"MAG:Magnetometer", band:"0..64Hz", tp:"em", res:"", url:"", desc:"c:;"},
    {n:"RPW:Radio and Plasma Waves", band:"", tp:"em", res:"", url:"", desc:"c:;"},
    {n:"SWA:Solar Wind Plasma Analyser", band:"1eV..100keV", tp:"psp", res:"", url:"", desc:"c:;"},
    {n:"METIS/COR:Multi-Element Telescope for Imaging and Spectroscopy/Coronagraph", band:"30.4..600nm", res:"20", d:"0.04", px:"5.3", fov:"2.9deg", url:"", desc:"cl:n;c:nl"},
    {n:"PHI:Polarimetric and Helioseismic Imager", band:"", res:"", d:"", px:"", fov:"16.8'", url:"", desc:"c:;"},
    {n:"SoloHI:Heliospheric Imager", band:"", res:"", d:"", px:"", fov:"40deg", url:"", desc:"c:;"},
    {n:"SPICE:Spectral Imaging of the Coronal Environment", band:"48.5..105nm", tp:"is", res:"", d:"", px:"", url:"", desc:"c:;"},
    {n:"STIX:X-ray Spectrometer/Telescope", band:"4..150keV", tp:"is", res:"", fov:"1.5deg", url:"", desc:"cl:n;"}
]},
spherex:{name:"SPHEREx:Spectro-Photometer for the History of the Universe, Epoch of Reionization, and Ices Explorer,", url:"hp:spherex.caltech.edu/;jpl:www.jpl.nasa.gov/missions/spherex/", desc:"ag:nasa,caltech;lv:Falcon 9;m:kg;fam:Explorer;sc:0.6;x:0;y:10", stat:"pl", 
  parts: [
    {n:"Explorer", ctry:"us", type:"ir", pur:"sur", id:"", icon:"spherex.png"}
  ], ev: [
    {pt:"", dt:"2025-06", tp:"l", loc:"ter:van:SLC-4E", desc:""},
    {pt:"", dt:"2025-06", tp:"sco", loc:"ter:sseo", desc:""},
    {pt:"", dt:"2029", tp:"nom", loc:"", desc:""}
], inst: [
    {n:"", tp:"is", band:"0.75..5um", sres:"41..130", d:"0.2", px:"6.2", sens:"22mag", fov:"3.5x11.3deg", desc:"c:;cl:n;"}
]}, 
spp:{name:"Parker Solar Probe", url:"hp:solarprobe.jhuapl.edu/;nasa:solarprobe.gsfc.nasa.gov/;tw:twitter.com/SolarProbePlus", desc:"Close Approach;ag:nasa,apl;lv:Delta IV Heavy;sc:1;x:-40;y:2", stat:"o", 
  parts: [
    {n:"SPP:Solar Probe Plus", ctry:"us", type:"", pur:"sol", id:"2018-065A", icon:"spp.png", desc:""}
  ], ev: [
    {pt:"", dt:"2018-08-12", tp:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2018-08-12", tp:"sco", loc:"sol:ho", desc:""}
  ], inst: [
    {n:"HI:Heliospheric Imager", band:"500..600nm", res:"720", fov:"160x160deg", url:"", desc:"c:nl;cl:nl"},
    {n:"FIA:Fast Ion Analyzer", band:"50..20keV", tp:"par", sres:"0.05", tres:"0.1s", fov:"330x90deg", url:"", desc:"c:"},
    {n:"FEA:Fast Electron Analyzer", band:"1eV..5keV", tp:"par", sres:"0.1", tres:"0.1s", fov:"30x30deg", url:"", desc:"c:"},
    {n:"MAG:Magnetometer", band:"", tp:"em", tres:"0.05s", url:"", desc:"c:"},
    {n:"ICA:Ion Composition Analyzer", band:"100eV..60keV", tp:"par", sres:"0.04", tres:"10s", fov:"120x120deg", url:"", desc:"c:"},
    {n:"PWI:Plasma Wave Instrument", band:"10Hz..10MHz", tp:"par", res:"", tres:"0.1s", url:"", desc:"c:"},
    {n:"EPI:Energetic Particle Instrument", band:"0.02..100MeV", tp:"par", res:"", tres:"5s", url:"", desc:"c:"},
    {n:"Neutron Spectrometer", tp:"sp", band:"0.02..10MeV", sres:"0.5", fov:"~360deg", url:"", desc:"c:"},
    {n:"CD:Coronal Dust", band:"0.05..50um", tp:"msp", tres:"10s", fov:"~360deg", url:"", desc:"c:"}
]},
spitzer:{name:"Spitzer", url:"hp:ssc.spitzer.caltech.edu/;ipac:irsa.ipac.caltech.edu/Missions/spitzer.html;tw:twitter.com/NASAspitzer", desc:"ag:nasa,jpl;lv:Delta II 7820H;sc:1.1;y:6", stat:"s", 
  parts: [
    {n:"SST:Spitzer Space Telescope;SIRTF", ctry:"us", type:"nir", pur:"", id:"2003-038A", icon:"spitzer.png", desc:"Earth Following"}
  ], ev: [
    {pt:"", dt:"2003-08-25", tp:"l", loc:"ter:cap:LC-17B", desc:""},
    {pt:"", dt:"2003-08-25", tp:"sco", loc:"sol:ef", desc:""},
    {pt:"", dt:"2020-01-30", tp:"eom", loc:"sol:ef", desc:""}
  ], inst: [
    {n:"IRAC", band:"3.6..10um", res:"2.7..1.6", d:0.85, px:1.2, fov:"5.2x5.2'", desc:"warm:<8um;c:nv;"},
    {n:"MIPS", band:"24..160um", res:"57..7.0", d:0.85, px:1.2, desc:"c:nv;", stat:"s"}
]},
srg:{name:"Spektr-RG:Spectrum Roentgen Gamma", url:"hp:hea.iki.rssi.ru/SRG/en/index.php;tw:twitter.com/eROSITA_SRG", desc:"ag:rosc;lv:Proton-M/DM-3;m:2712.5kg;sc:1.4;x:5;y:-2", stat:"p", 
  parts: [
    {n:"Спектр-РГ", ctry:"ru;de;uk", type:"fuv,sx", pur:"", id:"2019-040A", icon:"srg.png", desc:""}
  ], ev: [
    {pt:"", dt:"2019-07-13", tp:"l", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", dt:"2019-10", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2026", tp:"eom", loc:"sol:esl2", desc:"pend"}
  ], inst: [
    {n:"eROSITA", band:"0.3..10keV", res:"15", fov:"0.81deg2", ea:"0.35m2@1.5keV", px:"", sres:"7%@1keV", desc:"ag:mpe;c:nl;cl:nly;"},
//    {n:"Lobster", band:"", res:"", desc:"ag:Leicester University;c:nl;"},
    {n:"ART-XC", band:"6..30keV", res:"45", fov:"0.3deg2", desc:"ag:iki;c:nl;"}
]},
spektruv:{name:"Spektr-UV", url:"hp:www.wso-uv.org/wso-uv2/index.php?lang=en;Universidad Complutense:www.wso-uv.es/", desc:"ag:rosc;lv:Angara-A5M/DM-03;m:2840kg;sc:1.2;x:10;y:12", stat:"pl", 
  parts: [
    {n:"Спектр-УФ;WSO-UV:World Space Observatory-Ultraviolet", ctry:"ru", type:"uv", pur:"", id:"", icon:"wso-uv.png", desc:""}
  ], ev: [
    {pt:"", dt:"2025-10", tp:"l", loc:"ter:vos", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:geo:40deg", desc:""},
    {pt:"", dt:"2028", tp:"nom", loc:"ter:geo", desc:""}
  ], inst: [
    {n:"FUV", band:"110..310nm", res:"0.2", l:5, d:1.7, px:0.2, fov:0.5, foc:"17m", desc:"c:nr;cl:nly;"},
    {n:"UVO", band:"5.0E+14..2.0E+15", res:"0.12..0.04", d:1.7, px:0.03, fov:0.5, foc:"17m", desc:"c:nr;"}
]},
step:{name:"STEP:Satellite Test Of the Equivalence Principle", url:"hp:einstein.stanford.edu/STEP/", desc:"", stat:"pr", 
  parts: [
    {n:"", ctry:"us;eu", type:"gr", pur:"", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"", tp:"l", loc:"", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
]},
stereo:{name:"Stereo:Solar Terrestrial Relations Observatory", url:"hp:stereo.gsfc.nasa.gov/", desc:"ag:nasa;lv:Delta II 7926-10L;sc:1;x:0;y:0", stat:"o", 
  parts: [
    {n:"Stereo A", id:"2006-047A", ctry:"us", type:"euv;par", pur:"sol", icon:"stereo-a.png", desc:""},
          {n:"Stereo B", id:"2006-047B", ctry:"us", type:"euv;par", pur:"sol", icon:"stereo-b.png", desc:""}
  ], ev: [
    {pt:"", dt:"2006-10-26", tp:"l", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"0", dt:"2006-10-26", tp:"sco", loc:"sol:el", desc:""},
    {pt:"1", dt:"2006-10-26", tp:"sco", loc:"sol:ef", desc:""}
  ], inst: [
    {n:"EUVI", band:"9.99E+15..1.67E+16", d:0.105, px:1.6, desc:"c:nr;cl:ny;"},
    {n:"COR", band:"6.51E+15..6.00E+15", res:"7.5", desc:"c:nl;"},
    {n:"SECCHI", band:"", url:"secchi.nrl.navy.mil/", desc:"c:n;"},
    {n:"SWAVES", band:"", url:"swaves.gsfc.nasa.gov/", desc:"c:n;"},
    {n:"IMPACT", band:"", url:"sprg.ssl.berkeley.edu/impact/", desc:"c:n;"},
    {n:"PLASTIC", band:"", url:"stereo.sr.unh.edu/", desc:"c:n;"}
]},
sunrise:{name:"SunRISE:Sun Radio Interferometer Space Experiment", url:"hp:www.jpl.nasa.gov/missions/sun-radio-interferometer-space-experiment", desc:"ag:nasa,jpl,U-M;lv:;sc:1;x:0;y:10", stat:"pl", 
  parts: [
    {n:"", id:"", ctry:"us", type:"r", pur:"sol", icon:"sunrise.png", desc:"6 6U Cubesats"}
  ], ev: [
    {pt:"", dt:"2024-04", tp:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2024-04", tp:"sco", loc:"ter:geo", desc:""},
    {pt:"", dt:"2026-04", tp:"nom", loc:"ter:geo", desc:""}
  ], inst: [
    {n:"", band:"0.1..25MHz", d:10000, px:null, desc:"c:nr;cl:ny;"}
]},
suzaku:{name:"Suzaku", url:"hp:www.astro.isas.ac.jp/suzaku/", desc:"ag:jaxa;lv:M-5-6;sc:0.9;x:0;y:0", stat:"s", 
  parts: [
    {n:"Astro-EII", ctry:"jp", type:"x", pur:"", id:"2005-025A", icon:"suzaku.png", desc:""}
  ], ev: [
    {pt:"", dt:"2005-07-10", tp:"l", loc:"ter:uch:M-5", desc:""},
    {pt:"", dt:"2005-07-10", tp:"sco", loc:"ter:leo:548x540kmx31.3deg", desc:""},
    {pt:"", dt:"2015-09-02", tp:"tos", loc:"ter:leo", desc:"eom"}
  ], inst: [
    {n:"XIS", band:"4.84E+16..2.90E+18", res:"108", desc:"c:nl;cl:nl;"},
    {n:"HXD", band:"2.42E+18..1.45E+20", res:"16200..1800", desc:"c:nl;"}
]},
svom:{name:"SVOM:Space-based multi-band astronomical Variable Objects Monitor", url:"hp:www.svom.fr/en;cnes:smsc.cnes.fr/SVOM/index.htm;tw:twitter.com/SVOM_mission", desc:"ag:cnsa,cnes;lv:CZ-2D;y:10;x:-30;m:950kg", stat:"pl", 
  parts: [
    {n:"", ctry:"cn;fr", type:"gam;x;opt", pur:"mon", id:"", icon:"svom.png", desc:""}
  ], ev: [
    {pt:"", dt:"2024-06-22", tp:"l", loc:"ter:jiu", desc:""},
    {pt:"", dt:"2024-06-22", tp:"sco", loc:"ter:leo:650kmx30deg", desc:""},
    {pt:"", dt:"2028", tp:"nom", loc:"", desc:""},
    {pt:"", dt:"2030", tp:"pom", loc:"", desc:""}
  ], inst: [
    {n:"GRM:Gamma-Ray Monitor", tp:"sp", band:"50..5000keV", res:"", ea:"0.056", url:"", desc:"c:nr;cl:nl;"},
    {n:"MXT:Microchannel X-ray Telescope", band:"0.3..7keV", res:"120", fov:"57'", ea:"0.005@1keV", url:"", desc:"c:nly;cl:nl;"},
    {n:"ECLAIRs", band:"4..250keV", res:"600", fov:"80x80deg", ea:"0.1024", url:"", desc:"c:nt;"},
    {n:"VT:Visible Telescope", band:"400..950nm", res:"", d:0.45, px:0.77, fov:"21x21'", url:"", desc:"c:nt;"}
]},
swas:{name:"SWAS:Submillimeter Wave Astronomy Satellite", url:"hp:www.cfa.harvard.edu/swas/", desc:"ag:nasa;lv:Pegasus XL;fam:smex", stat:"s", 
  parts: [
    {n:"Explorer 74", ctry:"us", type:"mw", pur:"", id:"1998-071A", icon:"", desc:"m:288kg"}
  ], ev: [
    {pt:"", dt:"1998-12-06", tp:"l", loc:"ter:cap:L-1011", desc:""},
    {pt:"", dt:"1999-01-07", tp:"sco", loc:"ter:638x650kmx69.9deg", desc:""},
    {pt:"", dt:"2005-08", tp:"tos", loc:"", desc:"eom"}
], inst: [
    {n:"", tp:"is", band:"487..557GHz", res:"", sres:"", fov:"'", d:"0.55x0.71", sens:"", desc:"c:;cl:;"}
]}, 
swfol1:{name:"SWFO-L1:Space Weather Follow-On-L1", url:"hp:www.nesdis.noaa.gov/OPPA/swfo-L1.php", desc:"ag:nasa,noaa;lv:;m:", stat:"pl", 
  parts: [
    {n:"", ctry:"us", type:"sol", pur:"", id:"", icon:"swfo-l1.png", desc:""}
  ], ev: [
    {pt:"", dt:"2025-02", tp:"l", loc:"ter", desc:"IMAP secondary"},
    {pt:"", dt:"2025-07", tp:"sco", loc:"sol:ho:esl1", desc:""}
  ], inst: [
    {n:"CCOR:Compact Coronagraph ", band:"", tp:"cor", res:"50", fov:"3-22Rsun", url:"", desc:";c:;"},
    {n:"MAG:Magnetometer", band:"", tp:"mag", sres:"", url:"", desc:"c:;"},
    {n:"SWPS:Solar Wind Plasma Sensor", band:"", tp:"par", fov:"", tres:"", url:"", desc:"c:;"},
    {n:"STIS:Supra Thermal Ion Sensor ", band:"", tp:"par", eres:"", tres:"", url:"", desc:"c:;"}
]},
swift:{name:"Swift", url:"hp:swift.gsfc.nasa.gov/;asi:swift.asdc.asi.it/;psu:www.swift.psu.edu/;tw:twitter.com/NASASwift", desc:"ag:nasa;lv:Delta II 7320-10C;x:-0;y:10", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"uv;x;g", pur:"grb", id:"2004-047A", icon:"swift.png", desc:""}
  ], ev: [
    {pt:"", dt:"2004-11-20", tp:"l", loc:"ter:cap:SLC-17A", desc:""},
    {pt:"", dt:"2004-11-21", tp:"sco", loc:"ter:leo:584x604kmx20.5deg", desc:""}
  ], inst: [
    {n:"UVOT:UV/Optical Telescope", band:"4.61E+14..1.76E+15", res:"0.5", d:0.3, px:0.5, url:"swift.gsfc.nasa.gov/docs/swift/about_swift/uvot_desc.html", desc:"c:nb;cl:nl"},
    {n:"XRT:X-ray Telescope", band:"7.25E+16..2.42E+18", res:"18", url:"swift.gsfc.nasa.gov/docs/swift/about_swift/xrt_desc.html", desc:"c:nr;cl:ny;"},
    {n:"BAT:Burst Alert Telescope", band:"3.63E+18..3.63E+19", res:"120", url:"swift.gsfc.nasa.gov/docs/swift/about_swift/bat_desc.html", desc:"c:nr;cl:nl;"}
]},
/*swimsat:{name:"SWIMSat:Space Weather and Impact Monitoring Satellite", url:"ASU:meteorites.asu.edu/news/swimsat", desc:"ag:usaf,asu;lv:;x:0;y:0", stat:"pl", 
  parts: [
    {n:"", ctry:"us", type:"", pur:"sol;neo", id:"", icon:"swimsat.png", desc:""}
  ], ev: [
    {pt:"", dt:"2021", tp:"l", loc:"ter", desc:""},
    {pt:"", dt:"2021", tp:"sco", loc:"ter:leo", desc:""},
    {pt:"", dt:"2023", tp:"nom", loc:"ter:leo", desc:""}
]},*/
tess:{name:"TESS:Transiting Exoplanet Survey Satellite", url:"hp:tess.gsfc.nasa.gov;mast:archive.stsci.edu/tess/;mit:space.mit.edu/TESS/TESS/TESS_Overview.html;tw:twitter.com/NASA_TESS", desc:"ag:nasa;lv:Falcon 9 v1.2;sc:1;x:10;y:0;m:350kg", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"nir", pur:"exo", id:"2018-038A", icon:"tess.png", desc:""}
  ], ev: [
    {pt:"", dt:"2018-04-18", tp:"l", loc:"ter:cap:SLC-40", desc:""},
    {pt:"", dt:"2018-05-17", tp:"fb", loc:"lun:8000km", desc:"ga"},
    {pt:"", dt:"2018-06-17", tp:"sco", loc:"ter:meo:108000x373000kmx40deg", desc:"2:1 Moon resonance"},
    {pt:"", dt:"2025-09-31", tp:"nom", loc:"ter:meo", desc:"pend"}
  ], inst: [
    {n:"", band:"0.6..1um", res:"", d:"0.105m", px:"21", fov:"24x96deg", tres:"120s", desc:"cl:nl;"}
]},
tiangong2:{name:"Tiangong 2:Heavenly Palace 2", ctry:"cn", url:"", desc:"ag:cnsa;lv:CZ-2F/T;sc:1;x:10;y:0;m:20000kg", stat:"s", id:"2016-057A", icon:"tiangong2.png",
  parts: [
    {n:"POLAR:Gamma-ray Burst Polarimeter", ctry:"cn;ch;pl", type:"g", pur:"grb", url:"isdc.unige.ch/polar/", desc:""}
  ], ev: [
    {pt:"", dt:"2016-09-15", tp:"l", loc:"ter:jiu:LC-43/SLS-1", desc:""},
    {pt:"", dt:"2016-09-15", tp:"sco", loc:"ter:leo:393x381kmx42.8deg", desc:""},
    {pt:"", dt:"2019-07-19", tp:"eom", loc:"ter", desc:"Controlled reentry"}
  ], inst: [
    {n:"0", band:"50..350keV", ea:"400cm2", res:"", d:"", px:"", fov:"120deg", desc:"cl:;"}
]},
tiangong3:{name:"Tiangong 3:Heavenly Palace 3", ctry:"cn", url:"", desc:"ag:cnsa;lv:CZ-5B/T;sc:1;x:10;y:0;m:62000kg", stat:"o", id:"2021-035A", icon:"tiangong3.png",
  parts: [
    {n:"HERD:High Energy Cosmic-Radiation Detection facility", ctry:"ch;pl;de;ch", type:"g,par", pur:"cr", url:"herd.ihep.ac.cn/", desc:""},
    {n:"POLAR2:Gamma-ray Burst Polarimeter 2", ctry:"cn;ch;pl", type:"g", pur:"grb", url:"www.unige.ch/dpnc/en/groups/xin-wu/experiments/polar-2/", desc:""},
    {n:"SING:Spectroscopic Investigations of Nebular Gas", ctry:"ru;ind", type:"uv", pur:"", url:"", desc:""}
  ], ev: [
    {pt:"", dt:"2021-04-29", tp:"l", loc:"ter:wen:LC-101", desc:""},
    {pt:"", dt:"2021-04-29", tp:"sco", loc:"ter:leo:360x390kmx41.5deg", desc:""},
    {pt:"0", dt:"2027", tp:"l", loc:"ter:wen:LC-102", desc:"CZ-7"}
  ], inst: [
    {n:"0", band:"0.5GeV..100TeV", ea:"", sres:"1%@200GeV", res:"0.1deg", px:"", fov:"", desc:"cl:;"},
    {n:"0", tp:"par", band:"10GeV..100TeV", ea:"", sres:"1%@200GeV", d:"", px:"", fov:"", desc:"cl:;"},
    {n:"0", tp:"par", band:"30GeV..3PeV", ea:"", sres:"20%@100GeV..1PeV", d:"", px:"", fov:"", desc:"cl:;"},
    {n:"1", band:"50..500keV", ea:"1400cm2", res:"", d:"", px:"", fov:"120deg", desc:"cl:;"},
    {n:"2", band:"140..279nm", ea:"", res:"", d:"30cm", px:"", fov:"", desc:"cl:;"}
]},
tianqin1:{name:"TianQin-1:Heavenly Harp 1", url:"hp:", desc:"ag:cnsa;m:35kg;lv:CZ-4B;sc:0.9;y:7", stat:"pl", 
  parts: [
    {n:"天琴", ctry:"cn", type:"gr", pur:"test", id:"2019-093A", icon:"tianqin-1.png", desc:""}
  ], ev: [
    {pt:"", dt:"2019-12-20", tp:"l", loc:"ter:tai", desc:""},
    {pt:"", dt:"2019-12-21", tp:"sco", loc:"ter:sseo:642x662kmx97.2deg", desc:""},
    {pt:"", dt:"2022", tp:"pom", loc:"ter:sseo", desc:""}
  ], inst: [
    {n:"", tp:"li", band:"", res:"", fov:"", desc:"c:nr;cl:nl"}
  ]},
tianqin2:{name:"TianQin-2:Heavenly Harp 2", url:"hp:", desc:"ag:cnsa;lv:CZ-5B;sc:0.9;y:7", stat:"pl", 
  parts: [
    {n:"天琴", ctry:"cn", type:"gr", pur:"", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"2030", tp:"l", loc:"ter:wen", desc:""},
    {pt:"", dt:"2030", tp:"sco", loc:"ter:heo:100000km", desc:""},
    {pt:"", dt:"2040", tp:"pom", loc:"ter:heo", desc:""}
  ], inst: [
    {n:"", tp:"li", band:"", res:"", px:null, d:null, fov:"", desc:"c:nr;cl:nl"}
]},
trace:{name:"TRACE:Transition Region And Coronal Explorer", url:"hp:trace.lmsal.com/", desc:"ag:nasa;lv:Pegasus XL;fam:smex", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"opt;uv", pur:"sol", id:"1998-020A", icon:""}
  ], ev: [
    {pt:"", dt:"1998-04-02", tp:"l", loc:"ter:van:L-1011", desc:""},
    {pt:"", dt:"1998-05-02", tp:"sco", loc:"ter:sseo:597x642kmx97.8deg", desc:""},
    {pt:"", dt:"2010", tp:"tos", loc:"", desc:"eom"}
]}, 
twinkle:{name:"Twinkle", url:"hp:www.twinkle-spacemission.co.uk/", desc:"ag:;lv:TBA;m:380kg;sc:1;x:10;y:0", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"opt;nir", pur:"exo", id:"", icon:"twinkle.png", desc:""}
  ], ev: [
    {pt:"", dt:"2024", tp:"l", loc:"ter", desc:""},
    {pt:"", dt:"2024", tp:"sco", loc:"ter:sseo", desc:""},
    {pt:"", dt:"2026", tp:"nom", loc:"ter:sseo", desc:"pend"}
  ], inst: [
    {n:"", band:"0.5..4.5um", res:"", d:"0.45m", px:"", fov:"", sres:"70..50", desc:"cl:nl;"}
]},
uhuru:{name:"Uhuru", url:"hp:heasarc.gsfc.nasa.gov/docs/uhuru/uhuru.html", desc:"ag:nasa;lv:Scout B;fam:Explorer", stat:"s", 
  parts: [
    {n:"SAS-1", ctry:"us", type:"x", pur:"", id:"1970-107A", icon:""}
  ], ev: [
    {pt:"", dt:"1970-12-12", tp:"l", loc:"ter:smp", desc:""},
    {pt:"", dt:"1971-01-15", tp:"sco", loc:"ter:leo:534x573kmx3deg", desc:""},
    {pt:"", dt:"1973", tp:"tos", loc:"", desc:"eom"}
  ], inst: [
    {n:"", band:"2..20keV", res:"60", fov:"1deg", desc:"c:"}
]}, 
vsop2:{name:"VSOP-2", url:"hp:www.vsop.isas.jaxa.jp/vsop2/;nrao:www.vsop2.nrao.edu/", desc:"Suspended", stat:"pr", 
  parts: [
    {n:"Astro-G", ctry:"jp", type:"r", pur:"", id:"", icon:"vsop2.png", desc:""}
  ], ev: [
    {pt:"", dt:"", tp:"", loc:"", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"", desc:""}
  ], inst: [
    {n:"", band:"8.0E+9..4.5e10", res:"1040..185", desc:"c:nvt;col:#f99"},
    {n:"SVLBI", band:"8.4E+9..4.3E+10", res:"0.0002..0.000038", desc:"c:niv;col:#f99"}
]},
wind:{name:"WIND", url:"hp:wind.nasa.gov/;ucb:cse.ssl.berkeley.edu/stereo_solarwind/mission_WIND.html", desc:"lv:Delta II 7925-10;fam:istp", stat:"o", 
  parts: [
    {n:"", ctry:"", type:"emf;par", pur:"sol;grb", id:"1994-071A", icon:"wind.png", desc:"m:1195kg"}
  ], ev: [
    {pt:"", dt:"1994-11-01", tp:"l", loc:"ter:cap:LV-17B", desc:""},
    {pt:"", dt:"1997-10-25", tp:"sco", loc:"sol:esl1", desc:""}
  ], inst: [
    {n:"MFI:Magnetic Field Investigation", tp:"em", url:"", desc:""},
    {n:"SWE:Solar Wind Experiment", tp:"par", band:"", url:"web.mit.edu/afs/athena/org/s/space/www/wind.html", desc:""},
    {n:"3D PLASMA", tp:"par", band:"", url:"sprg.ssl.berkeley.edu/wind3dp/esahome.html", desc:""},
    {n:"SMS:Suprathermal Particle Data", tp:"par", band:"", url:"", desc:""},
    {n:"EPACT:Energetic Particle Acceleration, Composition, and Transport", tp:"par", band:"", url:"", desc:""},
    {n:"WAVES:Radio and Plasma Wave", band:"", res:"", url:"", desc:""},
    {n:"TGRS:Transient Gamma-Ray Spectrometer", tp:"sp", band:"2.42E+18..2.42E+21", url:"lheawww.gsfc.nasa.gov/docs/gamcosray/legr/tgrs/tgrs_home.html", desc:""},
    {n:"KRONUS", band:"", res:"", url:"", desc:""}
]},
wfirst:{name:"RST:Nancy Grace Roman Space Telescope", url:"hp:roman.gsfc.nasa.gov;tw:twitter.com/NASAWFIRST", desc:"ag:nasa;lv:Falcon Heavy;sc:0.9;x:40;y:0", stat:"pl", 
  parts: [
    {n:"WFIRST:Widefield Infrared Survey Explorer", ctry:"us", type:"nir", pur:"sur", id:"", icon:"ngrst.png", desc:""}
  ], ev: [
    {pt:"", dt:"2027-05", tp:"l", loc:"ter", desc:""},
    {pt:"", dt:"2027-05", tp:"sco", loc:"ter:esl2", desc:"or GEO"},
    {pt:"", dt:"2033", tp:"nom", loc:"", desc:""},
    {pt:"", dt:"2038", tp:"pom", loc:"", desc:""},
  ], inst: [
    {n:"WFI:Wide Field Instrument", band:"480..2300nm", res:"", d:"2.4", px:"0.11", sres:"2.2..6", ea:"3m2@1.5um", fov:"0.8x0.4deg", desc:"c:nvt;cl:nl"},
    {n:"CGI:Coronograph Instrument", band:"550..900nm", res:"", d:"2.4", px:"0.021", fov:"9x9''", desc:""}
]},
wmap:{name:"WMAP:Wilkinson Microwave Anisotropy Probe", url:"hp:map.gsfc.nasa.gov/", desc:"ag:nasa;m:2900kg;lv:Delta II 7425-10", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"mw", pur:"cmb", id:"2001-027A", icon:""}
  ], ev: [
    {pt:"", dt:"2001-06-30", tp:"l", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", dt:"2001-07-10", tp:"toi", loc:"ter:heeo:3144x347874kmx28.3deg", desc:""},
    {pt:"", dt:"2010", tp:"tos", loc:"", desc:"eom"}
  ], inst: [
    {n:"", band:"22..90GHz", res:"3348..720", d:"", px:"", desc:""}
]},
wukong:{name:"Wukong:Monkey King", url:"hp:dpnc.unige.ch/dampe/index.html;data:dgdb.pmo.ac.cn/dampe/", desc:"ag:cnsa;lv:CZ-2D;m:1900kg", stat:"o", 
  parts: [
    {n:"DAMPE:DArk Matter Particle Explorer", ctry:"cn", type:"par;g", pur:"dm;cr", id:"2015-78A", icon:"dampe.png", desc:""}
  ], ev: [
    {pt:"", dt:"2015-12-17", tp:"l", loc:"ter:jiu:SLS-2", desc:""},
    {pt:"", dt:"2015-12-17", tp:"sco", loc:"ter:sseo:500x500kmx97.4deg", desc:""},
    {pt:"", dt:"2020-12-31", tp:"nom", loc:"ter:sseo", desc:""}
  ], inst: [
    {n:"BGO:Bismuth Germanium Oxide Calorimeter", tp:"cal", band:"5GeV..10TeV", res:"360..1800", sres:"1.5%@100GeV", fov:"", url:"", desc:"Cosmic Rays;c:;0.1deg@100GeV,0.5deg@800GeV"},
    {n:"PSD:Plastic Scintillator Strips Detector", tp:"par", band:"", res:"", fov:"", url:"", desc:"Cosmic Rays;c:;"},
    {n:"STK:Silicon-Tungsten Tracker", tp:"par", band:"", res:"0.2deg@10GeV", fov:"", url:"", desc:"Cosmic Rays;c:;"},
    {n:"NUD:Neutron Detector", tp:"par", band:"", res:"", fov:"", url:"", desc:"Cosmic Rays;c:;"}
]},
xarm:{name:"XRISM:X-ray Imaging and Spectroscopy Mission", url:"hp:xrism.isas.jaxa.jp/en/;jaxa:global.jaxa.jp/projects/sat/astro_h/;", desc:"ag:jaxa;lv:H-IIA 202;m:2300kg;sc:1.4;x:0;y:-5", stat:"o",
  parts: [
    {n:"ASTRO-H2", ctry:"jp", type:"sx", pur:"", id:"2023-137A", icon:"xrism.png", desc:""}
  ], ev: [
    {pt:"", dt:"2023-08-26", tp:"l", loc:"ter:tng", desc:""},
    {pt:"", dt:"2023-09", tp:"sco", loc:"ter:leo:550kmx31deg", desc:""},
    {pt:"", dt:"2026", tp:"nom", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"Xtend;SXI:Soft X-ray Imaging System", band:"0.4..13keV", res:"72", sres:"150eV@6keV", ea:"360cm2@6keV", fov:"38x38'", desc:"c:nr;cl:nl;"},
    {n:"Resolve;SXS:Soft X-ray Spectrometer", tp:"sp", band:"0.3..12keV", res:"72", sres:"5eV@7keV", fov:"2.9x2.9'", ea:"250cm2@1keV;310cm2@6keV", desc:"c:;cl:n;"},
]},
xmm:{name:"XMM:XMM-Newton", url:"hp:www.esa.int/Our_activities/Space_Science/XMM-Newton_overview;esa:xmm.esac.esa.int/;tw:twitter.com/ESA_XMM", desc:"ag:esa;lv:Ariane 5G;sc:1.6;y:10", stat:"o", 
  parts: [
    {n:"", ctry:"eu", type:"x", pur:"", id:"1999-055A", icon:"xmm.png", desc:""}
  ], ev: [
    {pt:"", dt:"1999-12-11", tp:"l", loc:"ter:kou:ELA-3", desc:""},
    {pt:"", dt:"2000-01-09", tp:"sco", loc:"ter:heeo:7079x114027kmx28.4deg", desc:""},
    {pt:"", dt:"2018-12-31", tp:"nom", loc:"ter:heeo", desc:"pend"},
    {pt:"", dt:"2028-12-31", tp:"pom", loc:"ter:heeo", desc:""}
  ], inst: [
    {n:"OM", band:"4.61E+14..1.76E+15", res:"4", desc:"c:nr;cl:nl"},
    {n:"EPIC", band:"3.63E+16..3.63E+18", res:"6", desc:"c:nt;"}
]},
xposat:{name:"XPoSat:X-ray Polarimeter Satellite", url:"hp:", desc:"ag:isro;lv:PSLV DL;m:469kg;sc:1.6;y:10", stat:"o", 
  parts: [
    {n:"", ctry:"ind", type:"x", pur:"", id:"2024-001A", icon:"xpo.png", desc:""}
  ], ev: [
    {pt:"", dt:"2024-01-01", tp:"l", loc:"ter:sri", desc:""},
    {pt:"", dt:"2024-01-01", tp:"sco", loc:"ter:leo:600kmx30deg", desc:""},
    {pt:"", dt:"2029", tp:"pom", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"POLIX:Polarimeter Instrument in X-rays", band:"8..30keV", res:"", fov:"3deg", desc:"c:nr;cl:nly"},
    {n:"XSPECT:X-ray Spectroscopy and Timing", band:"0.8..15keV", res:"", desc:"c:nr;cl:nl"}
  ]},
xuntian:{name:"Xuntian:Sky Survey", url:"hp:", desc:"ag:cnsa;lv:CZ-5B;sc:0.9;y:7", stat:"pl", 
  parts: [
    {n:"巡天", ctry:"cn", type:"opt;nir", pur:"sur", id:"", icon:"xuntian.png", desc:""}
  ], ev: [
    {pt:"", dt:"2024", tp:"l", loc:"ter:wen", desc:""},
    {pt:"", dt:"2024", tp:"sco", loc:"ter:leo:400km", desc:""},
    {pt:"", dt:"2034", tp:"pom", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"OS", tp:"is", band:"255..1700nm", res:"0.15", px:0.07, d:2, fov:"1.1deg2", desc:"c:nr;cl:nl"}
  ]},
yokoh:{name:"Yohkoh:Sunbeam ", url:"hp:www.isas.jaxa.jp/e/enterp/missions/yohkoh/index.shtml;lmsal:www.lmsal.com/SXT/main2.html", desc:"ag:isas;lv:M-3SII", stat:"s", 
  parts: [
    {n:"ようこう;Solar-A", ctry:"jp", type:"x", pur:"sol", id:"1991-062A", icon:""}
  ], ev: [
    {pt:"", dt:"1991-08-30", tp:"l", loc:"ter:uch:M-1", desc:""},
    {pt:"", dt:"1991-10-06", tp:"sco", loc:"ter:leo:521x788kmx31.3deg", desc:""},
    {pt:"", dt:"2001-12-14", tp:"los", loc:"", desc:"eom;fail:Attitude control"}
]},

alma: {name:"ALMA:Atacama Large Millimeter Array", url:"science.nrao.edu/alma/index.shtml", desc:"sc:2;x:0;y:-8", stat:"g",
  parts: [{n:"", ctry:"us;eu", type:"mw", icon:"alma2.png", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"43..900GHz", d:16000, px:4.5e-3, desc:"c:nv;cl:n;"}
]},
chara: {name:"CHARA:Center for High Angular Resolution Astronomy", url:"www.chara.gsu.edu/CHARA/", desc:"", stat:"g",
  parts: [{n:"", ctry:"", type:"r", icon:"", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"1.25e+14..7.5e+14", res:"1.8e-3..3e-4", d:330, px:2e-4, desc:"c:nv;"}
]},
eelt: {name:"EELT:European Extremely Large Telescope", url:"www.eso.org/public/teles-instr/e-elt.html", desc:"sc:1.3;x:-10;y:-6", stat:"g",
  parts: [{n:"", ctry:"", type:"opt,nir", icon:"eelt.png", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"1.25e+13..9.99e+14", d:39.3, px:0.001, desc:"c:nv;"}
]},
emt: {name:"EHT:Event Horizon Telescope", url:"eventhorizontelescope.org/index.html", desc:"", stat:"g",
  parts: [{n:"", ctry:"", type:"mw", icon:"", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"2.3e+11..3.45e+11", res:"2.3e-7..1.6e-7", desc:"c:nv;"}
]},
evla: {name:"EVLA:Expanded Very Large Array", url:"www.vla.nrao.edu/", desc:"sc:2;x:26;y:0", stat:"g",
  parts: [{n:"", ctry:"", type:"r", icon:"vla.png", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"1e+9..5.00e+10", res:"0.2..0.004", desc:"c:nv;cl:nl;"}
]},
cta: {name:"CTA:Cherenkov Telescope Array", url:"https://www.cta-observatory.org/", desc:"sc:1.3;x:-70;y:-50", stat:"g",
  parts: [{n:"", ctry:"", type:"r", icon:"cta.png", desc:""}],
  ev: [{pt:"", dt:"2021", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"20GeV..300TeV", res:"900..72", desc:"c:nt;cl:nl;"}
]},
lofar: {name:"LOFAR:LOw Frequency ARray", url:"www.lofar.org/", desc:"sc:1.4;x:0;y:10", stat:"g",
  parts: [{n:"", ctry:"", type:"r", icon:"lofar.png", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"30...200MHz", res:"3.3..0.2", px:0.1, d:1.158e6, desc:"c:nv;"}
]},
sofia: {name:"SOFIA:Stratospheric Observatory for Infrared Astronomy", url:"www.sofia.usra.edu/;www.dsi.uni-stuttgart.de/index.en.html;",  desc:"ag:nasa,dlr;sc:2;x:0;y:-6", stat:"g",
  parts: [{n:"", ctry:"us;de", type:"ir", icon:"sofia.png", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [
    {tp:"sp", n:"EXES:Echelon-Cross-Echelle Spectrograph", band:"4.5..28.3um", d:2.5, px:2.3, sres:"1000..50000", det:"1024x1024px", desc:"c:;cl:x;col:#eee"},
    {tp:"sp", n:"FIFI-LS blue:Far Infrared Field-Imaging Line Spectrometer", band:"51..120um", d:2.5, px:6, fov:"0.5'", desc:"c:;cl:x;col:#eee"},
    {tp:"im", n:"FLITECAM: First Light Infrared TEst CAMera", band:"115..203um", d:2.5, px:12, fov:"1'", sres:"500..2000", desc:"c:;cl:nl;col:#eee"},
    {tp:"sp", n:"FIFI-LS:Far Infrared Field-Imaging Line Spectrometer", band:"1..5.5um", d:2.5, px:0.475, fov:"8'", det:"1024x1024px", desc:"c:;cl:x;col:#eee"},
    {tp:"im", n:"FORCAST:Faint Object infraRed CAmera for the SOFIA Telescope", band:"5..40um", d:2.5, px:0.768, fov:"3.4x3.2'", desc:"c:;cl:x;col:#eee"},
    {tp:"im", n:"FPI+:Focal Plane Imager", band:"360..1100nm", d:2.5, px:0.51, fov:"8.7x8.7'", desc:"c:;cl:x;col:#eee"},
    {tp:"sp", n:" GREAT:German REceiver for Astronomy at Terahertz Frequencies", band:"60..220um", d:2.5, px:14.1, sres:"44kHz", det:"1024x1024px", desc:"c:;cl:x;col:#eee"},
    {tp:"is", n:"HAWC+:High-resolution Airborne Wideband Camera-plus", band:"40..300um", d:2.5, px:8.9, res:"5..20", sres:"", fov:"2..8'", desc:"c:nl;cl:x;col:#eee"}
    //{n:"", band:"1.6mm..10um", d:2.5, px:2.3, desc:"c:nb;cl:nl;col:#eee"},
    //{n:"", band:"10um..900nm", res:"2.5..5.5", desc:"c:b;col:#eee"}
]},
vlba: {name:"VLBA:Very Long Baseline Array", url:"", desc:"", stat:"g",
  parts: [{n:"", ctry:"", type:"r", icon:"", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"0.3..86GHz", res:"0.021..0.000028", px:1.7e-4, d:8.6e6, desc:"c:nvt;cl:nl;"}
]},
evn: {name:"EVN:European VLBI Network", url:"", desc:"", stat:"g",
  parts: [{n:"", ctry:"", type:"r", icon:"", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"1.6..22GHz", res:"0.021..0.000028", px:3e-4, d:1e7, desc:"c:nv;cl:nl;"}
]},
/*eht: {name:"EHT:Event Horizon Telescope", url:"", desc:"", stat:"g",
  parts: [{n:"", ctry:"", type:"r", icon:"", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"230..450GHz", res:"", px:3e-4, d:1.1e7, desc:"c:nv;cl:nl;"}
]},*/
vlti: {name:"VLTi:Very Large Telescope interferometer", url:"eso.org/paranal/", desc:"sc:2;x:0;y:0", stat:"g",
  parts: [{n:"", ctry:"", type:"opt,nir", icon:"vlti.png", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"1.25e+13..9.99e+14", d:202, px:0.001, desc:"c:nr;cl:nl;"}
]}/*,
ska: {name:"SKA:Square Kilometre Array", url:"skatelescope.org/", desc:"sc:2;x:0;y:0", stat:"g",
  parts: [{n:"", ctry:"", type:"r", icon:"ska.png", desc:""}],
  ev: [{pt:"", dt:"", tp:"l", loc:"ter", desc:""}
  ], inst: [{n:"", band:"50..24000MHz", d:3000000, px:0.001, desc:"c:nr;cl:nl;"}
]}*/
//ska 10m..10mm, cta 50..300000GeV, 900..72 https://www.cta-observatory.org 2021
};
/*
name:{name:"", url:"", desc:"", stat:"", 
  parts: [
    {n:"", ctry:"", type:"", pur:"", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"", tp:"l", loc:"", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"", desc:""}
  ], inst: [
    {n:"", tp:"", band:"", res:"", d:"", px:"", sens:"", fov:"", ea:"", url:"", desc:"c:;"}
]},
name:{name:"", url:"", desc:"", stat:"", 
  parts: [
    {n:"", ctry:"", type:"", pur:"", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"", tp:"l", loc:"", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"", desc:""}
]},

*/
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
