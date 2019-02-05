/* global objects, SSEH, SOBS */
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
rvp: {name:"Rover"},
hpp: {name:"Hopper"},
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
eu: {name:"Europe", col:"#009", desc:"x:0;y:133"},
cn: {name:"China", col:"#c00", desc:"x:72;y:120"},
es: {name:"Spain", col:"#cc0", desc:"x:72;y:159"},
kz: {name:"Khazakstan", desc:"x:96;y:159"},
fr: {name:"France", col:"#c0c", desc:"x:24;y:133"},
gb: {name:"Great Britain", desc:"x:24;y:159"},
br: {name:"Brazil", desc:"x:24;y:120"},
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

