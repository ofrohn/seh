/* global SSEH */

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

