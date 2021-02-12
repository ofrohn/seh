var missions = { 
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
    {pt:"1", type:"fb", dt:"1985-09-11", loc:"com:7800km", desc:"com:21P/Giacobini-Zinner;Plasma Tail"},
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
    {names:"Explorer 71", type:"obm", dest:"sol", stat:"o", ctry:"us", desc:"ag:nasa,gsfc,apl;fam:Explorer;Observation of Energetic Particles;m:785kg;m0:596kg;dim:8.3x8.3x1.0m;sc:0.5", id:"1997-045A", url:"hp:www.srl.caltech.edu/ACE/", icon:"ace.png"}], 
  events:[
    {pt:"", type:"l", dt:"1997-08-25", loc:"ter:cap:LC-17A", desc:""},
    {pt:"", type:"toi", dt:"1997-08-25", loc:"ter:leto:177x1370000km", desc:""},
    {pt:"", type:"oi", dt:"1997-12-12", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", type:"nom", dt:"2022-09-30", loc:"esl1", desc:"?"},
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
    {pt:"", type:"nom", dt:"2022-09-30", loc:"mar", desc:"pend"},
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
    {pt:"", type:"nom", dt:"2022-09-30", loc:"mar", desc:"pend"},
    {pt:"", type:"pom", dt:"2024-12-31", loc:"mar", desc:""}
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
    {pt:"3", type:"nom", dt:"2026", loc:"et", desc:"?"}
]},
stereoa: {name:"STEREO A:Solar Terrestrial Relations Observatory A", desc:"lv:Delta II 7925-10L",
  parts:[
    {names:"STEREO Ahead", type:"obm", dest:"sol", stat:"o", ctry:"us", desc:"ag:nasa,gsfc,apl;m:620kg;dim:6.47x2.03x4.0m;fam:stp;Heliophysics Observatory", id:"2006-047A", url:"hp:stereo.gsfc.nasa.gov/;apl:stereo.jhuapl.edu/;raw:stereo-ssc.nascom.nasa.gov/beacon/beacon_secchi.shtml", icon:"stereo.png"}], 
  events:[
    {pt:"", type:"l", dt:"2006-10-26", loc:"ter:cap:SLC-17B", desc:""},
    {pt:"", type:"fb", dt:"2006-12-15", loc:"lun:7340km", desc:"ga"},
    {pt:"", type:"oi", dt:"2006-12-15", loc:"sol:ho:0.956x0.967aux0.13deg", desc:"Earth-leading Orbit"},
    {pt:"", type:"ev", dt:"2011-02-06", loc:"so", desc:"180\u00b0 Separation from Stereo B"},
    {pt:"", type:"nom", dt:"2022-09-30", loc:"so", desc:""},
    {pt:"", type:"pom", dt:"2023-10-01", loc:"so", desc:""}
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
    {pt:"", type:"nom", dt:"2022-09-30", loc:"so", desc:"?"},
    {pt:"", type:"pom", dt:"2023-10-01", loc:"so", desc:""}
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
    {pt:"1", type:"imp", dt:"2008-11-14", loc:"lun:89S,30W", desc:"Shackleton Crater;ip:MIP;eom:im;show:Ch1 MIP"},
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
    {pt:"", type:"nom", dt:"2022-09-30", loc:"lun", desc:"pend"},
    {pt:"", type:"pom", dt:"2024-12-31", loc:"lun", desc:"?"}
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
    {names:"あかつき;VCO:Venus Climate Orbiter;Planet-C", type:"om", dest:"ven", stat:"o", ctry:"jp", desc:"ag:jaxa;m:517kg;m0:320kg;dim:7.0x1.7x1.6m;sc:0.4", id:"2010-020D", url:"hp:www.stp.isas.jaxa.jp/venus/top_english.html;jaxa:www.isas.jaxa.jp/en/missions/spacecraft/current/akatsuki.html;darts:darts.isas.jaxa.jp/planet/project/akatsuki/;tw:twitter.com/Akatsuki_JAXA", icon:"akatsuki.png"},
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
    {pt:"", type:"fb", dt:"2021-06-07", loc:"gany:1000km", desc:"PJ #34"},
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
    {pt:"", type:"ex", dt:"", loc:"mar", desc:"Drive up Mt. Sharp;rv:22.2km;and counting"},
    {pt:"", type:"nom", dt:"2022-09-30", loc:"mar", desc:"pend"},
    {pt:"", type:"pom", dt:"2024-11-15", loc:"mar", desc:"?"}
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
    {pt:"", type:"nom", dt:"2022-09-30", loc:"mar", desc:"pend"},
    {pt:"", type:"pom", dt:"2024-01", loc:"mar", desc:"?"}
]},
mangalyaan: {name:"MOM:Mars Orbiter Mission", desc:"lv:PSLV-XL",
  parts:[
    {names:"मंगल ग्रह परिक्रमा मिशन;Mangalyaan:Mars Craft", type:"om", dest:"mar", stat:"o", ctry:"ind", desc:"ag:isro;m:1337kg;m0:475kg;dim:5.4x3.5x2.2m", id:"2013-060A", url:"hp:www.isro.gov.in/pslv-c25-mars-orbiter-mission;issdc:www.issdc.gov.in/marsmission.html;data:mrbrowse.issdc.gov.in/MOMLTA/;Atw:twitter.com/MarsOrbiter", icon:"mom.png"}], 
  events:[
    {pt:"", type:"l", dt:"2013-11-05", loc:"ter:sri", desc:""},
    {pt:"", type:"oi", dt:"2013-11-05", loc:"ter:heeo", desc:"Phasing orbits"},
    {pt:"", type:"toi", dt:"2013-11-30", loc:"sol:hto:0.98x1.44aux2.5deg", desc:""},
    {pt:"", type:"oi", dt:"2014-09-24", loc:"mar:427x78500kmx150deg", desc:""},
    {pt:"", type:"obs", dt:"2014-10-19", loc:"mar", desc:"Comet C 2013 A1 Siding Spring"},
    {pt:"", type:"nom", dt:"2020-10-30", loc:"mar", desc:"pend"},
    {pt:"", type:"pom", dt:"2022-10-30", loc:"mar", desc:"?"}    
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
    {names:"はやぶさ2", type:"srm", dest:"ast", stat:"o", ctry:"jp", desc:"ag:jaxa,dlr;m:590kg;m0:500kg;dim:6.0x4.23x1.4m;w:0.65", id:"2014-076A", url:"hp:www.hayabusa2.jaxa.jp/;jaxa:www.jspec.jaxa.jp/e/activity/hayabusa2.html;tw:twitter.com/haya2e_jaxa", icon:"hayabusa2.png"},
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
osirisrex: {name:"OSIRIS-REx:Origins-Spectral Interpretation-Resource Identification-Security-Regolith Explorer", desc:"lv:Atlas V 411",
  parts:[
    {names:"", type:"srm", dest:"ast", stat:"o", ctry:"us", desc:"ag:nasa,gsfc;fam:New Frontiers;m:2110kg;m0:880kg;dim:6.2x2.4x3.2m;sc:0.5", id:"2016-055A", url:"hp:www.asteroidmission.org/;nasa:www.nasa.gov/mission_pages/osiris-rex/;tw:twitter.com/OSIRISRex", icon:"osirisrex.png"},
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
    {pt:"", type:"sc", dt:"2020-10-20", loc:"ast", desc:"Nightingale crater"},
    {pt:"", type:"fb", dt:"2021-04", loc:"ast", desc:"Close flyby"},
    {pt:"", type:"dep", dt:"2021-05-10", loc:"ast", desc:"Begin Earth Return Cruise"},
    {pt:"", type:"edl", dt:"2023-09-24", loc:"ter", desc:"src;UTTR, Utah;eom:srm"}
    // Apophis oi 2029-04-21
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
    {names:"", type:"slm", dest:"mar", stat:"o", ctry:"us", desc:"ag:nasa,jpl;fam:Discovery;m:694kg;m0:358kg;dim:6x2.7x1.2m;sc:0.75", id:"2018-042A", url:"hp:insight.jpl.nasa.gov/;tw:twitter.com/NASAInsight", icon:"insight.png"}], 
  events:[
    {pt:"", type:"l", dt:"2018-05-05", loc:"ter:van:SLC-3E", desc:""},
    {pt:"", type:"toi", dt:"2018-05-05", loc:"sol:ho:1.0x1.4aux2.3deg", desc:""},
    {pt:"", type:"edl", dt:"2018-11-26", loc:"mar:4.50N,135.62E", desc:"Elysium Planitia;show:InSIGHT"},
    {pt:"", type:"nom", dt:"2022-11-30", loc:"mar", desc:"?"},
    {pt:"", type:"pom", dt:"2026-12-31", loc:"mar", desc:""}
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
change4relay: {name:"Queqiao:Magpie Bridge", desc:"lv:CZ-4C",
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
{names:"MMO:Mercury Magnetospheric Orbiter", type:"om", dest:"mer", stat:"pl", ctry:"jp", desc:"ag:jaxa;m:275kg", url:"jaxa:www.stp.isas.jaxa.jp/mercury/;tw:twitter.com/JAXA_MMO", icon:"bepicolombo-mmo.png"}], 
  events:[
    {pt:"", type:"l", dt:"2018-10-20", loc:"ter:kou:ELA-3", desc:""},
    {pt:"", type:"fb", dt:"2020-04-10", loc:"ter:12700km", desc:"ga"},
    {pt:"", type:"fb", dt:"2020-10-15", loc:"ven:10000km", desc:"ga"},
    {pt:"", type:"fb", dt:"2021-08-11", loc:"ven:550km", desc:"ga"},
    {pt:"", type:"fb", dt:"2021-10-01", loc:"mer", desc:"ga"},
    {pt:"", type:"fb", dt:"2022-06-23", loc:"mer", desc:"ga"},
    {pt:"", type:"fb", dt:"2023-06-20", loc:"mer", desc:"ga"},
    {pt:"", type:"fb", dt:"2024-09-05", loc:"mer", desc:"ga"},
    {pt:"", type:"fb", dt:"2024-12-02", loc:"mer", desc:"ga"},
    {pt:"", type:"fb", dt:"2025-01-09", loc:"mer", desc:"ga;eom:fbm"},
    {pt:"", type:"sep", dt:"2025-10-25", loc:"mer", desc:"MTM/MPO+MMO"},
    {pt:"", type:"oi", dt:"2025-12-05", loc:"mer:674x178000kmx90deg", desc:""},
    {pt:"", type:"sep", dt:"2025-12-20", loc:"mer", desc:"MPO/MMO"},
    {pt:"2", type:"sco", dt:"2025-12-20", loc:"mer:590x11640kmx90deg", desc:"MMO"},
    {pt:"1", type:"sco", dt:"2026-03-14", loc:"mer:480x1500kmx90deg", desc:"MPO"},
    {pt:"", type:"nom", dt:"2027-05", loc:"mer", desc:"pend"},
    {pt:"", type:"pom", dt:"2028-05", loc:"mer", desc:"?"}
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
    {pt:"1", type:"ex", dt:"", loc:"lun", desc:"rvp;rv:590m"},    
    {pt:"1", type:"nom", dt:"2021-10", loc:"lun", desc:"rvp;?;eom:rvm"},
    {pt:"0", type:"nom", dt:"2021-12", loc:"lun", desc:"lp;?"}
]},
// --- 2019  - 2 missions
chandrayaan2: {name:"Chandrayaan 2:Moon Craft 2", desc:"lv:GSLV MkIII",
  parts:[
    {names:"चंद्रयान-२", type:"om", dest:"lun", stat:"o", ctry:"ind", desc:"ag:isro;m:2379kg;dim:3.2x5.8x2.1m;sc:0.5", id:"2019-042A", url:"hp:www.isro.gov.in/chandrayaan2-home-0", icon:"chandrayaan2-o.png"},
{names:"Vikram", type:"slm", dest:"lun", stat:"f", ctry:"ind", desc:"ag:isro;m:1471kg;dim:2.5x2x1.2m", icon:"chandrayaan2-l.png"},
{names:"Pragyan", type:"rvm", dest:"lun", stat:"f", ctry:"ind", desc:"ag:isro;m:27kg;dim:0.9x0.75x0.85m;sc:0.5", icon:"chandrayaan2-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2019-07-22", loc:"ter:sri:SLP", desc:""},
    {pt:"", type:"oi", dt:"2019-07-22", loc:"ter:170x40400km", desc:"5 Phasing Orbits"},
    {pt:"", type:"toi", dt:"2019-08-13", loc:"ter:lto", desc:"tli"},
    {pt:"0", type:"oi", dt:"2019-08-20", loc:"lun:114x18072kmx87.8deg", desc:""},
    {pt:"0", type:"sco", dt:"2019-09-01", loc:"lun:114x128km", desc:""},
    {pt:"0", type:"sep", dt:"2019-09-02", loc:"lun", desc:"op/lp"},
    {pt:"1", type:"td", dt:"2019-09-06", loc:"lun:70.881S,22.784E", desc:"fail;Between Manzinus C & Simpelius N Crater;show:Ch2-Vikram:NW;eom:slm;eom:rvm"},
    //{pt:"0", type:"sco", dt:"2019-09-08", loc:"lun:90km", desc:"Sun Synchronous"},
    {pt:"0", type:"nom", dt:"2020-08", loc:"lun", desc:"?"},
    {pt:"0", type:"pom", dt:"2027", loc:"lun", desc:"?"}
]},
spaceil: {name:"Beresheet", desc:"lv:Falcon 9",
  parts:[
    {names:"בְּרֵאשִׁית‬", type:"slm", dest:"lun", stat:"p", ctry:"il", desc:"ag:SpaceIL;m:585kg;m0:160kg;dim:2.29x2.29x1.54m;sc:0.3", id:"2019-009B", url:"hp:beresheet.space;SpaceIL:www.spaceil.com/", icon:"spaceil.png"}
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
    {pt:"", type:"fb", dt:"2021-08-08", loc:"ven", desc:"ga"},
    {pt:"", type:"fb", dt:"2021-11-26", loc:"ter", desc:"ga;Perhelion 0.321AU"},
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
mars2020rover: {name:"Mars 2020", desc:"lv:Atlas V 541",
  parts:[
    {names:"Perseverance", type:"rvm", dest:"mar", stat:"o", ctry:"us", desc:"ag:nasa,jpl;m:1025kg;dim:3.0x2.7x2.2m;sc:0.5;Sample Caching Mission", id:"2020-052A", url:"hp:www.nasa.gov/mars2020;tw:twitter.com/NASAPersevere", icon:"mars2020.png"},
    {names:"Ingenuity;MHS:Mars Helicopter Scout", type:"dm", dest:"mar", stat:"o", ctry:"us", desc:"ag:nasa,jpl;fam:MSR;m:1.8kg;dim:;sc:0.7;", id:"", url:"", icon:"ingenuity.png"}], 
  events:[
    {pt:"", type:"l", dt:"2020-07-30", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:hto", desc:""},
    {pt:"", type:"edl", dt:"2021-02-18", loc:"mar:18.5N,77.5E", desc:"Jezero Crater;show:Perseverance"},
    {pt:"", type:"tos", dt:"2021-03", loc:"mar", desc:"eom:dm;Helicopter probe"},
    {pt:"", type:"nom", dt:"2023-01", loc:"mar", desc:"?"},
    {pt:"", type:"pom", dt:"l+10yr", loc:"mar", desc:"?"}
]},
mgrso: {name:"Tianwen-1:Skyquest-1", desc:"lv:CZ-5",
  parts:[
    {names:"天问一号;MGRSO:Mars Global Remote Sensing Orbiter", type:"om", dest:"mar", stat:"o", ctry:"cn", desc:"ag:cnsa;m:3175kg;sc:0.75", id:"2020-049A", url:"China Space Report:chinaspacereport.com/unmanned/planetary/mars-mission/", icon:"mgrso.png"},
    {names:"", type:"slm", dest:"mar", stat:"o", ctry:"cn", desc:"ag:cnsa;m:1745kg;sc:0.75", id:"", url:"", icon:"mgrso-l.png"}, 
    {names:"Lu Zhenrong;露真容", type:"rvm", dest:"mar", stat:"o", ctry:"cn", desc:"m:240kg;dim:2.6x3.0x1.85m;ag:cnsa;sc:0.5", id:"", url:"", icon:"mgrso-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2020-07-23", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"2020-07-23", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"2021-02-10", loc:"mar:400x180000kmx11.8deg", desc:"Capture orbit"},
    {pt:"", type:"sco", dt:"2021-03", loc:"mar:265x60000kmx86.9deg", desc:"2 day polar reconnaissance orbit"},
    {pt:"1", type:"edl", dt:"2021-05", loc:"mar:24.748N,110.318E", desc:"lp;Utopia Planitia;show:Tianwen-1:NE"},
    {pt:"2", type:"nom", dt:"2021-08", loc:"mar", desc:"rvp;eom:slm;eom:rvm"},
    {pt:"0", type:"sco", dt:"2021-08", loc:"mar:400x15000kmx86.9deg", desc:""},
    {pt:"0", type:"nom", dt:"2023", loc:"mar", desc:"op;?"}
]},
emm: {name:"Al Amal:Hope", desc:"lv:H-IIA 202",
  parts:[
    {names:"مسبار الأمل;EMM:Emirates Mars Mission", type:"om", dest:"mar", stat:"o", ctry:"ue", desc:"ag:uaesa;m:1350kg;m0:550kg;dim:7.9x3x3.5m;sc:0.5", id:"2020-047A", url:"hp:www.emiratesmarsmission.ae/;MBRSC:www.mbrsc.ae/emirates-mars-mission;tw:twitter.com/HopeMarsMission", icon:"emm-hope.png"}], 
  events:[
    {pt:"", type:"l", dt:"2020-07-19", loc:"ter:tng:YLP-1", desc:""},
    {pt:"", type:"toi", dt:"2020-07-24", loc:"sol:hto:1.02x1.63aux2.2deg", desc:""},
    {pt:"", type:"oi", dt:"2021-02-09", loc:"mar:1000x49380kmx20deg", desc:""},
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
    {pt:"", type:"td", dt:"2020-12-01", loc:"lun:51.8W,43.1N", desc:"lp;NW Oceanus Procellarum, Louville Omega;show:CE5"},
    {pt:"", type:"sc", dt:"2020-12-02", loc:"lun", desc:"lp;mat:1.731kg"},
    {pt:"", type:"l", dt:"2020-12-03", loc:"lun", desc:"as;eom:slm"},
    {pt:"", type:"doc", dt:"2020-12-05", loc:"lun", desc:"op/as"},
    {pt:"", type:"ev", dt:"2020-12-05", loc:"lun", desc:"as/src;Sample Transfer"},
    {pt:"", type:"sep", dt:"2020-12-06", loc:"lun", desc:"op/as"},
    {pt:"", type:"toi", dt:"2020-12-13", loc:"lun", desc:"op/src"},
    {pt:"", type:"edl", dt:"2020-12-17", loc:"ter:42.339N,111.439E", desc:"eom:srm;src;Siziwang Banner, Inner Mongolia;show:CE5:NE"},
    {pt:"", type:"fb", dt:"2020-11-17", loc:"ter", desc:"om;To Earth/Sun L1"}
]},
// --- 2021
chandrayaan3: {name:"Chandrayaan 3:Moon Craft 3", desc:"lv:GSLV MkIII",
  parts:[
{names:"Vikram", type:"slm", dest:"lun", stat:"pl", ctry:"ind", desc:"ag:isro;m:1471kg;dim:2.5x2x1.2m", icon:"chandrayaan2-l.png"},
{names:"Pragyan", type:"rvm", dest:"lun", stat:"pl", ctry:"ind", desc:"ag:isro;m:27kg;dim:0.9x0.75x0.85m;sc:0.5", icon:"chandrayaan2-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2021-04", loc:"ter:sri:SLP", desc:""},
    {pt:"", type:"oi", dt:"2021-04", loc:"lun:170x186000km", desc:""},
    {pt:"", type:"td", dt:"2021-04", loc:"lun", desc:""},
    {pt:"0", type:"nom", dt:"2022-04", loc:"lun", desc:"?"}
]},
capstone: {name:"CAPSTONE:Cislunar Autonomous Positioning System Technology Operations and Navigation Experiment", desc:"lv:Electron",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Advanced Space;fam:SBIR;12U Cubesat;sc:0.5", id:"", url:"hp:www.nasa.gov/press-release/nasa-funds-cubesat-pathfinder-mission-to-unique-lunar-orbit", icon:"capstone.png"}], 
  events:[
    {pt:"", type:"l", dt:"2021", loc:"ter:wal", desc:""},
    {pt:"", type:"oi", dt:"l+4m", loc:"lun:nrho", desc:""},
    {pt:"", type:"nom", dt:"2023", loc:"lun", desc:""}
]},
em1: {name:"Artemis-1", desc:"lv:SLS 1", stat:"pl", 
  parts:[
    {names:"EM-1:Exploration Mission 1;Orion MPCV Test Flight:Multi-Purpose Crew Vehicle", type:"fbm", dest:"lun",ctry:"us;eu", desc:"ag:nasa,jsc,esa;m:21250kg;sc:0.6", id:"", url:"hp:www.nasa.gov/artemisprogram;esa:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion/Artemis_1;tw:twitter.com/NASAArtemis", icon:"orion.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"2021-11", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"toi", dt:"2021-11", loc:"ter", desc:"lto"},
    {pt:"", type:"fb", dt:"l+9dy", loc:"lun", desc:""},
    {pt:"", type:"oi", dt:"l+9dy", loc:"lun:70000km", desc:"Distant Retrograde Orbit"},
    {pt:"", type:"dep", dt:"l+16dy", loc:"lun", desc:""},
    {pt:"", type:"fb", dt:"l+17dy", loc:"lun", desc:"RPF"},
    {pt:"", type:"oi", dt:"l+17dy", loc:"ter", desc:"eto"},
    {pt:"", type:"edl", dt:"l+26dy", loc:"ter", desc:"eom"}
]},
em1lcube: {name:"Artemis-1 Lunar Cubesats", desc:"lv:SLS;part:em1;6U CubeSats", stat:"pl", 
  parts:[
    {names:"Lunar Flashlight", type:"om", dest:"lun", ctry:"us", desc:"ag:nasa,jpl;m:~12kg;dim:0.7x0.7x0.3m;sc:0.2", id:"", url:"Flashlight:www.jpl.nasa.gov/missions/lunar-flashlight/", icon:"lunar-flashlight.png"},
    {names:"Lunar IceCube", type:"om", dest:"lun", ctry:"us", desc:"ag:nasa,gsfc;m:~14kg;dim:0.7x0.2x0.3m;sc:1", id:"", url:"IceCube:www.nasa.gov/feature/goddard/lunar-icecube-to-take-on-big-mission-from-small-package", icon:"icecube.png"},
    {names:"LunaH-Map:Lunar Polar Hydrogen Mapper", type:"om", dest:"lun", ctry:"us", desc:"ag:nasa,asu;sc:0.6", id:"", url:"H-Map:lunahmap.asu.edu/;tw:twitter.com/lunahmap", icon:"lunahmap.png"},
    {names:"OMOTENASHI:Outstanding Moon exploration Technologies demonstrated by Nano Semi-Hard Impactor", type:"im", dest:"lun", ctry:"jp", desc:"ag:jaxa;sc:0.6", id:"", url:"hp:www.isas.jaxa.jp/home/omotenashi/index.html;tw:twitter.com/OMOTENASHI_JAXA", icon:"omotenashi.png"},
    {names:"EQUULEUS:EQUilibriUm Lunar-Earth point 6U Spacecraft", type:"om", dest:"ter:eml2", ctry:"jp", desc:"ag:jaxa;sc:0.6", id:"", url:"hp:www.space.t.u-tokyo.ac.jp/equuleus/en/;tw:twitter.com/EQUULEUS_en", icon:"equuleus.png"}],
  events:[
    {pt:"", type:"l", dt:"2021-11", loc:"ter:ksc:LC-39B", desc:"EM-1 piggyback"},
    {pt:"", type:"toi", dt:"2021-11", loc:"ter", desc:"lto"},
    {pt:"1", type:"toi", dt:"2021-11", loc:"ter", desc:"leto;IceCube"},
    {pt:"0", type:"fb", dt:"l+5dy", loc:"lun", desc:"op:Flashlight"},
    {pt:"1", type:"fb", dt:"l+4dy", loc:"lun", desc:"IceCube"},
    {pt:"2", type:"fb", dt:"l+4dy", loc:"lun", desc:"H-Map"},
    {pt:"3", type:"imp", dt:"l+4dy", loc:"lun", desc:"OMOTENASHI;eom"},
    {pt:"2", type:"oi", dt:"l+69dy", loc:"lun", desc:"H-Map"},
    {pt:"1", type:"oi", dt:"l+58dy", loc:"lun", desc:"IceCube"},
    {pt:"2", type:"nom", dt:"l+60dy", loc:"lun", desc:"H-Map"},
    {pt:"1", type:"sco", dt:"", loc:"lun:100kmx90deg", desc:"IceCube"},
    {pt:"4", type:"sco", dt:"", loc:"ter:eml2", desc:"EQUULEUS"},
    {pt:"0", type:"fb", dt:"l+3mo", loc:"lun", desc:"Flashlight"},
    {pt:"0", type:"fb", dt:"l+4mo", loc:"lun", desc:"Flashlight"},
    {pt:"0", type:"oi", dt:"l+6mo", loc:"lun:nrho", desc:"per:7dy;15km perilune;Flashlight"},
    {pt:"2", type:"sco", dt:"l+18mo", loc:"lun", desc:"Perilune 5km; H-Map"},
    {pt:"1", type:"sco", dt:"l+18mo", loc:"lun", desc:"IceCube"},
    {pt:"0", type:"sco", dt:"l+18mo", loc:"lun:20x~1000kmx90deg", desc:"Flashlight"},
    {pt:"1", type:"nom", dt:"l+2yr", loc:"lun", desc:"IceCube"},
    {pt:"0", type:"nom", dt:"l+2yr", loc:"lun", desc:"Flashlight"},
    {pt:"", type:"pom", dt:"l+2yr", loc:"lun", desc:""}
]},
em1cubes: {name:"Artemis-1 Cubesats", desc:"lv:SLS;part:em1;6U-CubeSat", stat:"pl", 
  parts:[
    {names:"NEA-Scout:Near Asteroid Scout", type:"fbm", dest:"ast", ctry:"us", desc:"Solar Sail;ag:nasa,msfc;m:12kg;dim:9x9x0.3m;sc:0.6", id:"", url:"NEA-Scout:www.nasa.gov/content/nea-scout", icon:"nea-scout.png"},
    {names:"BioSentinel", type:"om", dest:"sol", ctry:"us", desc:"ag:nasa,arc;sc:0.6", id:"", url:"BioSentinel:www.nasa.gov/centers/ames/engineering/projects/biosentinel.html", icon:"biosentinel.png"},
    {names:"CuSP:CubeSat to study Solar Particles", type:"om", dest:"sol", ctry:"us", desc:"ag:nasa,swri;sc:0.8", id:"", url:"CuSP:www.nasa.gov/feature/goddard/2016/heliophysics-cubesat-to-launch-on-nasa-s-sls", icon:"cusp.png"},
    {names:"ArgoMoon", type:"test", dest:"ter:heeo", ctry:"it", desc:"ag:asi;sc:0.6", id:"", url:"ArgoMoon:www.argotec.it/online/what-we-do/small-satellite-unit/#tab-3", icon:"argomoon.png"},
    {names:"LunIR:Lunar Infrared Imaging", type:"om", dest:"ter:geo", ctry:"us", desc:"ag:nasa;m:14kg;sc:0.6", id:"", url:"LunIR:www.nasa.gov/feature/next-space-technologies-for-exploration-partnerships-nextstep-projects", icon:"lunir.png"},
    {names:"Cislunar Explorers", type:"om", dest:"sol", ctry:"us", desc:"ag:nasa,Cornell;sc:0.6", id:"", url:"Cislunar Explorers:cislunarexplorers.wordpress.com/", icon:"clx.png"},
    {names:"CU-E3:Earth Escape Explorer", type:"om", dest:"sol", ctry:"us", desc:"ag:nasa,CU Boulder;sc:0.6", id:"", url:"CU-E3:www.colorado.edu/cubequest/", icon:"cu-e3.png"},
    {names:"Team Miles", type:"om", dest:"sol", ctry:"us", desc:"ag:nasa,Fluid and Reason;sc:0.6", id:"", url:"Team Miles:miles-space.com", icon:"tmiles.png"}],
  events:[
    {pt:"", type:"l", dt:"2021-11", loc:"ter:ksc:LC-39B", desc:"EM-1 piggyback"},
    {pt:"", type:"toi", dt:"2021-11", loc:"ter", desc:"lto"},
    {pt:"0", type:"fb", dt:"l+3dy", loc:"lun", desc:"NEA-Scout"},
    {pt:"1", type:"fb", dt:"l+4dy", loc:"lun", desc:"BioSentinel"},
    {pt:"4", type:"fb", dt:"l+4dy", loc:"lun", desc:"Skyfire"},
    {pt:"1", type:"sco", dt:"", loc:"sol:ho:0.92x0.98au", desc:"BioSentinel"},
    {pt:"2", type:"sco", dt:"", loc:"sol:ho", desc:"CuSP"},
    {pt:"5", type:"sco", dt:"", loc:"sol:ho", desc:"CLX;2 Spacecraft"},
    {pt:"6", type:"sco", dt:"", loc:"sol:ho", desc:"CU-E3;Earth following"},
    {pt:"7", type:"sco", dt:"", loc:"sol:ho", desc:"Team Miles;Earth following"},
    {pt:"0", type:"fb", dt:"l+100dy", loc:"lun", desc:"poss. 1-2 additional flybys;NEA-Scout"},
    {pt:"0", type:"fb", dt:"l+850dy", loc:"ast", desc:"ast:1991 VG;NEA-Scout"},
    {pt:"0", type:"nom", dt:"l+2.5yr", loc:"sol:ho", desc:"NEA-Scout"},
    {pt:"2", type:"pom", dt:"l+2yr", loc:"sol:ho", desc:"CuSP"},
    {pt:"1", type:"pom", dt:"l+2yr", loc:"sol:ho", desc:"BioSentinel"},
    {pt:"4", type:"pom", dt:"l+2yr", loc:"ter:geo", desc:"Skyfire"},
    {pt:"5", type:"pom", dt:"l+2yr", loc:"sol:ho", desc:"CLX"},
    {pt:"6", type:"pom", dt:"l+2yr", loc:"sol:ho", desc:"CU-E3"},
    {pt:"7", type:"pom", dt:"l+2yr", loc:"sol:ho", desc:"Team Miles"},
    {pt:"0", type:"pom", dt:"l+4.5yr", loc:"sol:ho", desc:"NEA-Scout"}
]},
luna25: {name:"Luna 25", desc:"lv:Soyuz 2.1B/Fregat-MT",
  parts:[
    {names:"Луна-Глоб посадочный;Luna Glob Lander:Lunar Sphere Lander", type:"slm", dest:"lun", stat:"pl", ctry:"ru", desc:"ag:rosc,iki;m:1725kg;m0:780kg;sc:0.45", id:"", url:"rsw:www.russianspaceweb.com/luna_glob.html", icon:"luna25.png"}], 
  events:[
    {pt:"", type:"l", dt:"2021-10-01", loc:"ter:vos:LC-1S", desc:""},
    {pt:"", type:"oi", dt:"l+4dy", loc:"lun:100x100kmx90deg", desc:""},
    {pt:"", type:"td", dt:"l+8dy", loc:"lun:69.545S,43.44E", desc:"Near South Pole, Boguslawsky Crater"},
    {pt:"", type:"nom", dt:"l+3mo", loc:"lun", desc:"?"},
    {pt:"", type:"pom", dt:"l+1yr", loc:"lun", desc:"?"}
]},
lucy: {name:"Lucy", desc:"lv:Atlas V 401",
  parts:[
    {names:"", type:"fbm", dest:"ast", stat:"pl", ctry:"us", desc:"ag:nasa,gsfc,swri;fam:discovery;sc:0.4", id:"", url:"hp:www.nasa.gov/lucy;tw:twitter.com/LucyMission", icon:"lucy.png"}
  ], events:[
    {pt:"", type:"l", dt:"2021-10-16", loc:"ter:cap:SLC-41", desc:""},
    {pt:"", type:"oi", dt:"2021-10-16", loc:"sol:ho:1aux0.16x0.21deg", desc:""},
    {pt:"", type:"fb", dt:"2022-10", loc:"ter:298km", desc:"ga"},
    {pt:"", type:"tc", dt:"2022-10", loc:"sol:ho:1.63aux0.39x0.02deg", desc:""},
    {pt:"", type:"fb", dt:"2024-12", loc:"ter:347km", desc:"ga"},
    {pt:"", type:"tc", dt:"2024-12", loc:"sol:ho:3.36aux0.71x4.41deg", desc:""},
    {pt:"", type:"fb", dt:"2025-04", loc:"ast", desc:"ast:52246 Donaldjohanson"},
    {pt:"", type:"fb", dt:"2027-08", loc:"ast", desc:"ast:3548 Eurybates"},
    {pt:"", type:"fb", dt:"2027-09", loc:"ast", desc:"ast:15094 Polymele"},
    {pt:"", type:"fb", dt:"2028-04", loc:"ast", desc:"ast:11351 Leucus"},
    {pt:"", type:"fb", dt:"2028-11", loc:"ast", desc:"ast:21900 Orus"},
    {pt:"", type:"fb", dt:"2030-12", loc:"ter:640km", desc:"ga"},
    {pt:"", type:"tc", dt:"2030-12", loc:"sol:ho:3.30aux0.71x10.74deg", desc:""},
    {pt:"", type:"fb", dt:"2033-03", loc:"ast", desc:"ast:617 Patroclus/Menoetius"},  
    {pt:"", type:"nom", dt:"2033-03", loc:"sol:ho", desc:"?"}
]},
dart: {name:"DART:Double Asteroid Redirection Test", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"im", dest:"ast", stat:"pl", ctry:"us", desc:"ag:nasa,apl;fam:AIDA;dim:12.5x2.4x2m;m:640kg;sc:0.7", id:"", url:"hp:dart.jhuapl.edu/;nasa:www.nasa.gov/planetarydefense/dart", icon:"dart.png"},
    {names:"LICIACube:Light Italian Cubesat for Imaging of Asteroids", type:"fbm", dest:"ast", stat:"pl", ctry:"it", desc:"ag:asi,Argotec;sc:0.4", id:"", url:"LICIACube:www.argotec.it/online/what-we-do/small-satellite-unit/#tab-4", icon:"licia.png"}
  ], events:[
    {pt:"", type:"l", dt:"2021-07-22", loc:"ter:van:SLC-4E", desc:""},
    {pt:"", type:"oi", dt:"2021-07-22", loc:"sol:ho", desc:""},
    {pt:"", type:"fb", dt:"2022-03", loc:"ast", desc:"ast:2001 CB21;?"},
    {pt:"", type:"fb", dt:"2022-09", loc:"ast", desc:"ast:didy"},
    {pt:"0", type:"imp", dt:"2022-09-30", loc:"ast", desc:"ip;ast:Dimorphos"},
    {pt:"1", type:"fb", dt:"2022-09", loc:"ast", desc:"fbp:LICIACube"},
    {pt:"", type:"nom", dt:"2022-09", loc:"ast", desc:"eom"}
]},
//CubeRover
peregrine: {name:"Peregrine 1", desc:"lv:Vulcan Centaur-522",
  parts:[
    {names:"M1:Mission 1", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Astrobotic;fam:clps;dim:1.9x1.9x2.5m;m:1313kg;sc:0.3", id:"", url:"hp:www.astrobotic.com/peregrine;clps:nasa.gov/content/commercial-lunar-payload-services", icon:"peregrin.png"}], 
  events:[
    {pt:"", type:"l", dt:"2021-07", loc:"ter:cap", desc:""},
    {pt:"", type:"oi", dt:"l+4d", loc:"lun:100x8700kmx56deg", desc:""},
    {pt:"", type:"td", dt:"l+18d", loc:"lun:43.914N,25.148E", desc:"Lacus Mortis"},
    {pt:"", type:"nom", dt:"l+2mo", loc:"lun", desc:""}
]},
novac: {name:"NOVA-C", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Intuitive Machines;fam:clps;m:1700kg;sc:0.3", id:"", url:"hp:intuitivemachines.com/lunarlander;clps:nasa.gov/content/commercial-lunar-payload-services", icon:"novac.png"}], 
  events:[
    {pt:"", type:"l", dt:"2021-10-11", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"Vallis Schröteri, Oceanus Procellarum"},
    {pt:"", type:"nom", dt:"l+20dy", loc:"lun", desc:""}
]},
// --- 2022
aditya:{name:"Aditya-L1", desc:"lv:PSLV XL", stat:"pl", 
  parts: [
    {names:"आदित्य", ctry:"ind", type:"obm", dest:"sol", id:"", icon:"aditya-l1.png", desc:"Solar Coronograph;ag:isro;m:400kg;sc:0.5", url:"hp:aditya.iiap.res.in/"}], 
  events: [
    {pt:"", dt:"2022-01", type:"l", loc:"ter:sri", desc:""},
    {pt:"", dt:"l+100dy", type:"sco", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", type:"nom", dt:"l+2yr", loc:"sol:esl1", desc:"?"},
    {pt:"", type:"pom", dt:"l+10yr", loc:"sol:esl1", desc:"?"},
]},
kplo: {name:"KPLO:Korean Pathfinder Lunar Orbiter", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"pl", ctry:"sk", desc:"ag:kari;fam:klep;sc:0.6;m:678kg;m0:;dim:", id:"", url:"hp:www.kari.re.kr/eng/sub03_04.do", icon:"kplo.png"}
   ], 
  events:[
    {pt:"", type:"l", dt:"2022-08", loc:"ter:cap", desc:""},
    {pt:"", type:"toi", dt:"2022-07", loc:"ter:heeo", desc:"Phasing Loop Transfer"},
    {pt:"", type:"oi", dt:"l+1mo", loc:"lun:100kmx90deg", desc:""},
    {pt:"", type:"nom", dt:"l+1yr", loc:"lun", desc:"?"}
]},
slim:{name:"SLIM:Smart Lander for Investigating Moon", desc:"lv:H-IIA 202", stat:"pl", 
  parts: [
    {names:"スリム;SPRINT-C", ctry:"jp", type:"slm", dest:"lun", id:"", icon:"slim.png", desc:"ag:jaxa;m:590kg;m0:120kg;dim:1.5x1.5x2m;sc:0.3", url:"hp:www.isas.jaxa.jp/home/slim/SLIM/index.html;isas:www.isas.jaxa.jp/en/missions/spacecraft/developing/slim.html;tw:twitter.com/SLIM_JAXA"}], 
  events: [
    {pt:"", dt:"2022-01", type:"l", loc:"ter:uch", desc:""},
    {pt:"", dt:"l+4dy", type:"oi", loc:"lun", desc:""},
    {pt:"", type:"td", dt:"l+1mo", loc:"lun:13.3S,25.2E", desc:"Mare Nectaris"},
    {pt:"", type:"nom", dt:"l+1.1mo", loc:"lun", desc:"?"}
]},
exomarsrv: {name:"ExoMars 2022", desc:"lv:Proton-M/Briz-M;m:2900kg",
  parts:[
    {names:"Rosalind Franklin", type:"rvm", dest:"mar", stat:"pl", ctry:"eu", desc:"ag:esa;m:345kg;dim:2.0x1.5x1.7m;fam:exom;sc:0.4", id:"", url:"hp:exploration.esa.int/mars/48088-mission-overview/;tw:twitter.com/ESA_Exomars", icon:"exomars-rv.png"},
{names:"Kazachok Surface Platform;DM:Descent Module", type:"slm", dest:"mar", stat:"pl", ctry:"eu;ru", desc:"ag:rosc,esa;m:2000kg", id:"", url:"rsw:www.russianspaceweb.com/exomars2018.html", icon:"exomars-dm.png"}], 
  events:[
    {pt:"", type:"l", dt:"2022-09-20", loc:"ter:bai:LC-200/39", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:hto", desc:""},
    {pt:"", type:"edl", dt:"2023-06-10", loc:"mar:18.20N,335.45E", desc:"Oxia Planum;show:ExoMars:SE"},
    {pt:"", type:"nom", dt:"2023-12", loc:"mar", desc:"?"},
    {pt:"", type:"pom", dt:"2029", loc:"mar", desc:"?"}
]},
destinyplus:{name:"DESTINY+:Demonstration and Experiment of Space Technology for INterplanetary voYage Phaethon fLyby dUSt science", desc:"lv:Epsilon-2", stat:"pl", 
  parts: [
    {names:"深宇宙探査技術実験ミッション", ctry:"jp", type:"fbm", dest:"ast", id:"", icon:"destinyplus.png", desc:"ag:jaxa,isas;Interplanetary dust observation;m:440kg;m0:365kg;sc:0.7", url:"hp:destiny.isas.jaxa.jp/DestinyPlus%202017.html"}/*,
    {names:"PROCYON Mini:PRoximate Object Close flYby with Optical Navigation", ctry:"jp", type:"fbm", dest:"ast", id:"", icon:"", desc:"ag:jaxa,isas;", url:""}*/], 
  events: [
    {pt:"", type:"l", dt:"2024", loc:"ter:uch", desc:""},
    {pt:"", type:"toi", dt:"l+1mo", loc:"ter:heeo:230x50000kmx30deg", desc:"Phasing orbits"},
    {pt:"", type:"fb", dt:"l+6mo", loc:"lun", desc:"GA"},
    {pt:"", type:"fb", dt:"l+2yr", loc:"ast:500km", desc:"ast:phae"},
    {pt:"", type:"nom", dt:"l+4yr", loc:"sol:ho", desc:"?"}
    // 2005 UD fb
]},
juice: {name:"JUICE:JUpiter ICy moons Explorer", desc:"lv:Ariane 5ECA",
  parts:[
    {names:"", type:"om", dest:"jup", stat:"pl", ctry:"eu", desc:"ag:esa;m:5250kg;m0:2200kg;fam:L-class;dim:28.4x3.9x4.0m;sc:1", id:"", url:"hp:sci.esa.int/juice;tw:twitter.com/ESA_JUICE", icon:"juice.png"},
{type:"om", dest:"jup:gany", stat:"pl", ctry:"eu"}], 
  events:[
    {pt:"", type:"l", dt:"2022-06", loc:"ter:kou:ELA-3", desc:""},
    {pt:"", type:"fb", dt:"2023-05", loc:"ter:12725km", desc:"ga"},
    {pt:"", type:"fb", dt:"2023-10", loc:"ven:9538km", desc:"ga"},
    {pt:"", type:"fb", dt:"2024-09", loc:"ter:1945km", desc:"ga"},
    {pt:"", type:"fb", dt:"2025-02", loc:"mar:1118km", desc:"ga"},
    {pt:"", type:"fb", dt:"2026-11", loc:"ter:3683km", desc:"ga"},
    {pt:"", type:"fb", dt:"2029-10", loc:"gany", desc:"ga"},
    {pt:"0", type:"oi", dt:"2029-10", loc:"jup", desc:""},
    {pt:"0", type:"sco", dt:"", loc:"jup", desc:"28 Galilean moon flybys"},
    {pt:"1", type:"oi", dt:"2032-08", loc:"gany", desc:""},
    {pt:"0", type:"sco", dt:"2033-01", loc:"gany:500km", desc:""},
    {pt:"1", type:"nom", dt:"2033-09", loc:"jup", desc:"?"}    
]},
psyche: {name:"Psyche", desc:"lv:Falcon Heavy",
  parts:[
    {names:"", type:"om", dest:"ast", stat:"pl", ctry:"us", desc:"ag:nasa,jpl,asu;fam:Discovery;sc:0.9;m0:1300kg", id:"", url:"hp:psyche.asu.edu/;jpl:jpl.nasa.gov/missions/psyche/;tw:twitter.com/NASAPsyche", icon:"psyche.png"},
    {names:"Janus-A", type:"fbm", dest:"ast", stat:"pl", ctry:"us", desc:"ag:nasa,msfc,CU-Boulder;fam:SIMPLEx;sc:0.55;m:180kg", id:"", url:"Janus:www.colorado.edu/today/janus-binary-asteroids", icon:"janus.png"},
    {names:"Janus-B", type:"fbm", dest:"ast", stat:"pl", ctry:"us", desc:"ag:nasa,msfc,CU-Boulder;fam:SIMPLEx;sc:0.55;m:180kg", id:"", url:"", icon:"janus.png"}
  ], events:[
    {pt:"", type:"l", dt:"2022-08", loc:"ter:cap:LC-39A", desc:""},
    {pt:"", type:"oi", dt:"2022-08", loc:"sol:ho", desc:""},
    //{pt:"", type:"fb", dt:"2024", loc:"ter", desc:"ga"},
    {pt:"", type:"fb", dt:"2023-05", loc:"mar", desc:"ga"},
    {pt:"1,2", type:"fb", dt:"2025-08", loc:"ter", desc:"ga;Janus A/B"},
    {pt:"0", type:"oi", dt:"2026-01", loc:"ast", desc:"ast:16 Psyche"},  
    {pt:"0", type:"sco", dt:"2026-01", loc:"ast:806km", desc:"Characterization orbit"},  
    {pt:"0", type:"sco", dt:"2026-03", loc:"ast:399km", desc:"Topography orbit"},  
    {pt:"2", type:"fb", dt:"2026-03-03", loc:"ast", desc:"ast:1991 VH;Janus-B;eom:fbm"},
    {pt:"1", type:"fb", dt:"2026-04-20", loc:"ast", desc:"ast:1996 FG3;Janus-A;eom:fbm"},
    {pt:"1", type:"eom", dt:"2026-05-31", loc:"sol:ho", desc:"Janus-A/B;eom:fbm;eom:fbm"},
    {pt:"0", type:"sco", dt:"2026-06", loc:"ast:279km", desc:"Integrated science orbit"},  
    {pt:"0", type:"sco", dt:"2026-09", loc:"ast:192km", desc:"Elemental mapping orbit"},  
    {pt:"0", type:"nom", dt:"2027-10", loc:"ast", desc:"?"},
    {pt:"0", type:"pom", dt:"2029-10", loc:"ast", desc:"?"}
]},
zhenghe: {name:"Zheng He", desc:"lv:CZ-3B",  
  parts:[
    {names:"鄭和;Near-Earth Asteroid Sample Return", type:"srm", dest:"ast", stat:"pl", ctry:"cn", desc:"ag:cnsa;sc:0.6", id:"", url:"", icon:"cnast.png"},
    {names:"", type:"om", dest:"com", stat:"pl", ctry:"cn", desc:"ag:cnsa", id:"", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2022", loc:"ter:wen", desc:""},
    {pt:"", type:"toi", dt:"2022", loc:"sol:ho", desc:""},
    {pt:"", type:"app", dt:"2023", loc:"ast", desc:"ast:2016 HO3"},
    {pt:"", type:"dep", dt:"2024", loc:"ast", desc:"ast:2016 HO3"},
    {pt:"0", type:"edl", dt:"2024", loc:"ter", desc:"eom:srm"},
    {pt:"1", type:"fb", dt:"2024", loc:"ter", desc:"ga"},
    {pt:"1", type:"fb", dt:"2025", loc:"mar", desc:"ga"},
    {pt:"1", type:"app", dt:"2030", loc:"com", desc:"com:133P/Elst-Pizarro"},
    {pt:"1", type:"nom", dt:"2031", loc:"com", desc:""},
    {pt:"1", type:"pom", dt:"2033", loc:"com", desc:""}
]},
xl1: {name:"XL-1", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Masten;fam:clps;m:2700kg;sc:0.3", id:"", url:"hp:www.masten.aero/moon", icon:"masten-xl1.png"}], 
  events:[
    {pt:"", type:"l", dt:"2022-12", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"Near South pole"},
    {pt:"", type:"nom", dt:"l+12dy", loc:"lun", desc:""}
]},
prime1: {name:"PRIME-1:Polar Resources Ice Mining Experiment", desc:"lv:Falcon 9",
  parts:[
    {names:"NOVA-C Lander", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Intuitive Machines;fam:clps;m:1700kg;sc:0.3", id:"", url:"hp:intuitivemachines.com/lunarlander;clps:nasa.gov/content/commercial-lunar-payload-services", icon:"novac.png"}], 
  events:[
    {pt:"", type:"l", dt:"2022-12-01", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"South pole"},
    {pt:"", type:"nom", dt:"l+20dy", loc:"lun", desc:""}
]},
/*lunarpathfinder: {name:"Lunar Pathfinder", desc:"lv:",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"pl", ctry:"eu", desc:"ag:esa,SSTL,GES;sc:0.5", id:"", url:"hp:www.goonhilly.org/lunar", icon:"lunar-pathfinder.png"}], 
  events:[
    {pt:"", type:"l", dt:"2022", loc:"ter", desc:""},
    {pt:"", type:"oi", dt:"l+4m", loc:"lun", desc:""},
    {pt:"", type:"nom", dt:"2023", loc:"lun", desc:""}
]},*/
// --- 2023
viper: {name:"VIPER:Volatiles Investigating Polar Exploration Rover", desc:"lv:TBA",
  parts:[
    {names:"", type:"rvm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,ames,jsc;m:420kg;dim:1.5x1.5x2m;fam:clps;sc:0.25", id:"", url:"hp:www.nasa.gov/viper", icon:"viper.png"},
    {names:"Griffin Lander", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Astrobotic;fam:clps", id:"", url:"Griffin:www.astrobotic.com/griffin", icon:"griffin.png"}], 
  events:[
    {pt:"", type:"l", dt:"2023-11", loc:"ter:cap", desc:""},
    {pt:"", type:"oi", dt:"l+5d", loc:"lun", desc:"South pole"},
    {pt:"", type:"td", dt:"l+10d", loc:"lun", desc:""},
    {pt:"", type:"sep", dt:"l+10d", loc:"lun", desc:"slp/rvp"},
    {pt:"", type:"nom", dt:"l+100d", loc:"lun", desc:""}
]},
blueghost: {name:"Blue Ghost", desc:"lv:TBA",
  parts:[
    {names:"Blue Ghost", type:"slm", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Firefly;fam:clps;m:600kg;sc:0.3", id:"", url:"hp:firefly.com/lunar-lander/;clps:nasa.gov/content/commercial-lunar-payload-services", icon:"blueghost.png"}], 
  events:[
    {pt:"", type:"l", dt:"2023", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"Mare Crisium"},
    {pt:"", type:"nom", dt:"l+20dy", loc:"lun", desc:""}
]},
lupex: {name:"LUPEX:Lunar Polar Exploration", desc:"lv:H-III",
  parts:[
    {names:"", type:"slm", dest:"lun", stat:"pl", ctry:"ind;jp", desc:"ag:isro,jaxa;m:6000kg;sc:0.5", id:"", url:"jaxa:www.exploration.jaxa.jp/e/program/lunarpolar/", icon:"lupex-l.png"},
    {names:"", type:"rvm", dest:"lun", stat:"pl", ctry:"jp", desc:"ag:jaxa", id:"", url:"", icon:"lupex-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2023", loc:"ter:tng", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"South pole"},
    {pt:"", type:"nom", dt:"l+6mo", loc:"lun", desc:""}
]},
change7: {name:"Chang'e 7", desc:"lv:CZ-5",
  parts:[
    {names:"嫦娥 7", type:"slm", dest:"lun", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:clep;m:8200kg;sc:0.3;w:0.67", id:"", url:"", icon:"chang-e7.png"},
    {names:"{Chang'e 7 Orbiter}", type:"om", dest:"lun", stat:"pl", ctry:"cn", desc:"", icon:""}
    //relay, hopper, rover
    ], 
  events:[
    {pt:"", type:"l", dt:"2023", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"l+1hr", loc:"ter:lto", desc:"Near South pole"},
    {pt:"", type:"oi", dt:"l+5dy", loc:"lun:200km", desc:""},
    {pt:"0", type:"td", dt:"l+?dy", loc:"lun", desc:"SP Aitken Basin"},
    //{pt:"", type:"sep", dt:"l+?dy", loc:"lun", desc:"lp/rvp"},
    {pt:"0", type:"nom", dt:"l+1yr", loc:"lun", desc:"lp;?"},
    {pt:"1", type:"nom", dt:"l+2yr", loc:"lun", desc:"op;?"}
]},
europaclipper: {name:"Europa Clipper", desc:"lv:Falcon Heavy",
  parts:[
    {names:"EMFM:Europa Multi-Flyby Mission", type:"om", dest:"jup", stat:"pl", ctry:"us", desc:"ag:nasa,jpl,apl;m:6000kg;m0:2616kg;dim.26.9x3x6.3m;sc:1.0", id:"", url:"hp:europa.nasa.gov/;tw:twitter.com/NASAEuropa", icon:"europaclipper.png"}
  ], events:[
    {pt:"", type:"l", dt:"2024-10", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:hto", desc:""},
    {pt:"", type:"fb", dt:"2025-02", loc:"mar", desc:"GA"},
    {pt:"", type:"fb", dt:"2026-12", loc:"ter", desc:"GA"},
    {pt:"", type:"oi", dt:"2030-04", loc:"jup", desc:""},
    {pt:"", type:"fb", dt:"", loc:"euro", desc:"45 Flybys planned"},
    {pt:"", type:"pom", dt:"l+10yr", loc:"jup", desc:"?"}
]},
em2: {name:"Artemis-2", desc:"lv:SLS 1", stat:"pl", 
  parts:[
    {names:"EM-2:Exploration Mission 2", type:"hm", dest:"lun", ctry:"us;eu", desc:"ag:nasa,jsc,esa;m:21250kg;sc:0.6", id:"", url:"hp:www.nasa.gov/artemisprogram;esa:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion/Artemis_2;tw:twitter.com/NASAArtemis", icon:"orion.png"}], 
  events:[
    {pt:"", type:"l", dt:"2023-08", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"toi", dt:"2023-08", loc:"ter", desc:"lto"},
    {pt:"0", type:"fb", dt:"l+4dy", loc:"lun", desc:"Free return trajectory"},
    {pt:"0", type:"edl", dt:"l+9dy", loc:"ter", desc:"eom"}
]},
halo_ppe: {name:"Gateway", desc:"lv:Falcon Heavy",
  parts:[
    {names:"PPE:Power and Propulsion Element", type:"om", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,Maxar;m:9000kg;sc:1.0", id:"", url:"hp:www.nasa.gov/gateway", icon:"gateway1.png"},
    {names:"HALO:Habitation and Logistics Outpost", type:"om", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,NGIS;sc:1", id:"", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2024", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"", type:"oi", dt:"l+4m", loc:"lun:nrho", desc:""},
    {pt:"", type:"nom", dt:"2039", loc:"lun", desc:""}
]},
hakutor: {name:"Hakuto-R", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"slm", dest:"lun", stat:"pl", ctry:"jp;eu", desc:"ag:ispace;sc:0.5", id:"", url:"hp:ispace-inc.com/hakuto-r/eng/", icon:"hakuto-r.png"}], 
  events:[
    {pt:"", type:"l", dt:"2023-03", loc:"ter:cap", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:"Lacus Somniorum"},
    {pt:"", type:"nom", dt:"l+3w", loc:"lun", desc:""}
]},
// --- 2024
mom2: {name:"MOM-2:Mars Observation Mission 2", desc:"lv:GSLV MkIII",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"pl", ctry:"ind", desc:"ag:isro,cnes;m:;m0:;dim:", id:"", url:"hp:www.isro.gov.in/;indianspaceprojects:sites.google.com/site/indianspaceprojects/planetary-exploration/mars-orbiter-mission-mom---2", icon:"mobm.png"},
    {names:"", type:"slm", dest:"mar", stat:"pl", ctry:"ind", desc:"ag:isro;m:", icon:""},
    {names:"", type:"rvm", dest:"mar", stat:"pl", ctry:"ind", desc:"ag:isro;m:", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2024", loc:"ter:sri", desc:""},
    {pt:"", type:"toi", dt:"2024", loc:"sol:hto", desc:""},
    {pt:"", type:"oi", dt:"l+7mo", loc:"mar:200x2000km", desc:""},
    {pt:"", type:"nom", dt:"l+2yr", loc:"mar", desc:"?"},
    {pt:"", type:"pom", dt:"l+4yr", loc:"mar", desc:"?"}    
]},
change6: {name:"Chang'e 6", desc:"lv:CZ-5",
  parts:[
    {names:"嫦娥六号", type:"srm", dest:"lun", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:clep;m:7800kg;sc:0.4;w:0.67", id:"", url:"", icon:"chang-e5.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"l+1hr", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"l+5dy", loc:"lun:200km", desc:""},
    {pt:"", type:"sep", dt:"l+?dy", loc:"lun", desc:"op/lp"},
    {pt:"", type:"td", dt:"l+?dy", loc:"lun", desc:"lp;SP Aitken;show:CE6"},
    {pt:"", type:"l", dt:"l+?dy", loc:"lun", desc:"as"},
    {pt:"", type:"doc", dt:"l+?dy", loc:"lun", desc:"op/as"},
    {pt:"", type:"ev", dt:"l+?dy", loc:"lun", desc:"as/src;Sample Transfer"},
    {pt:"", type:"sep", dt:"l+?dy", loc:"lun", desc:"op/as"},
    {pt:"", type:"toi", dt:"l+25dy", loc:"lun", desc:"op/src"},
    {pt:"", type:"edl", dt:"l+30dy", loc:"ter", desc:"src;Siziwang Banner, Inner Mongolia;eom"}
]},
hera: {name:"Hera", desc:"lv:Soyuz 2.1B",
  parts:[
    {names:"", type:"om", dest:"ast", stat:"pl", ctry:"eu", desc:"ag:esa;fam:AIDA;m:870kg;sc:0.7", id:"", url:"hp:www.esa.int/Safety_Security/Hera", icon:"hera.png"},
    {names:"APEX:Asteroid Prospection Explorer", type:"om", dest:"ast", stat:"pl", ctry:"eu", desc:"ag:esa;sc:0.5", id:"", url:"APEX:www.esa.int/Safety_Security/Hera/Deep_space_CubeSats", icon:"apex.png"},
    {names:"Juventas", type:"om", dest:"ast", stat:"pl", ctry:"eu", desc:"ag:GomSpace,GMV;sc:0.6", id:"", url:"Juventas:www.esa.int/Safety_Security/Hera/Hera_s_CubeSat_to_perform_first_radar_probe_of_an_asteroid", icon:"juventas.png"}
  ], events:[
    {pt:"", type:"l", dt:"2024-10", loc:"ter:kou", desc:""},
    {pt:"", type:"oi", dt:"2024-10", loc:"sol:ho", desc:""},
    {pt:"", type:"oi", dt:"2026-12", loc:"ast", desc:"ast:didy"},
    {pt:"", type:"nom", dt:"2028-12", loc:"ast", desc:"?"}
]},
mmx: {name:"MMX:Martian Moons eXploration", desc:"lv:H-III",
  parts:[
    {names:"火星衛星探査機", type:"srm", dest:"mar:phob", stat:"pl", ctry:"jp", desc:"ag:jaxa,isas;m:4000kg;m0:;dim:14x2.1x4.5m;sc:0.5", id:"", url:"hp:mmx.isas.jaxa.jp/en/;tw:twitter.com/mmx_jaxa_en", icon:"mmx.png"},
    {names:"{MMX Sample Return Module}", desc:"m:1300kg;sc:1.0", icon:""},
    {names:"{DLR/CNES Rover}", type:"rvm", dest:"mar:phob", stat:"pl", ctry:"de;fr", desc:"ag:dlr,cnes;m:29kg;sc:0.6", id:"", url:"dlr:www.dlr.de/content/en/articles/news/2019/02/20190619_a_rover_for_phobos_and_deimos.html", icon:"mmx-rv.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024-09", loc:"ter:tng", desc:""},
    {pt:"", type:"oi", dt:"2025-08", loc:"mar", desc:""},
    {pt:"", type:"td", dt:"2027", loc:"mar:Phobos", desc:"Sample collection;show:0"},
    {pt:"", type:"oi", dt:"2028-08", loc:"sol:ho", desc:"ETO"},
    {pt:"", type:"edl", dt:"2029-09", loc:"ter", desc:"eom"}
]},
swfol1: {name:"SWFO-L1:Space Weather Follow-On L1", desc:"Falcon 9",
  parts:[
    {names:"", type:"obm", dest:"sol", stat:"pl", ctry:"us", desc:"ag:nasa,noaa;m:400kg;sc:0.75;Heliophysics Observatory", id:"", url:"hp:swww.nesdis.noaa.gov/OPPA/swfo-L1.php", icon:"swfo-l1.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025-02", loc:"ter:cap:LC-36B", desc:"IMAP piggyback"},
    {pt:"", type:"sco", dt:"2025-07", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", type:"pom", dt:"2035", loc:"esl1", desc:""}    
]},
solarcruiser: {name:"Solar Cruiser", desc:"Falcon 9",
  parts:[
    {names:"", type:"test", dest:"sol", stat:"pl", ctry:"us", desc:"ag:nasa;dim:40x40m;fam:stp;sc:0.75;Solar Sail", id:"", url:"hp:www.nasa.gov/mission_pages/sunearth/index.html", icon:"solarcruiser.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025-02", loc:"ter:cap:LC-36B", desc:"IMAP piggyback"},
    {pt:"", type:"sco", dt:"2025-07", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", type:"pom", dt:"2035", loc:"esl1", desc:""}    
]},
lunartrailblazer: {name:"Lunar Trailblazer", desc:"lv:Falcon 9",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"pl", ctry:"us", desc:"ag:nasa,jpl,Caltech;sc:0.5", id:"", url:"hp:trailblazer.caltech.edu", icon:"lunar-trailblazer.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025-02", loc:"ter", desc:""},
    {pt:"", type:"oi", dt:"l+4m", loc:"lun:100km", desc:"Polar orbit"},
    {pt:"", type:"nom", dt:"2026", loc:"lun", desc:""}
]},
em3: {name:"Artemis-3", desc:"lv:SLS 1B", stat:"pl", 
  parts:[
    {names:"EM-3:Exploration Mission 3", type:"hm", dest:"lun", ctry:"us;eu", desc:"ag:nasa,jsc,esa;m:21250kg;sc:0.6;ESPRIT Module", id:"", url:"hp:www.nasa.gov/artemisprogram;esa:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion/Artemis_3;tw:twitter.com/NASAArtemis", icon:"orion.png"}],
  events:[
    {pt:"", type:"l", dt:"2024", loc:"ter:ksc:LC-39B", desc:""},
    {pt:"", type:"td", dt:"l+4dy", loc:"lun", desc:"?"},
    {pt:"0", type:"edl", dt:"l+30dy", loc:"ter", desc:"eom"}
]},
rashid: {name:"Rashid", desc:"",
  parts:[
    {names:"رشيد", type:"rvm", dest:"lun", stat:"pl", ctry:"ue", desc:"ag:MBRSC;m:10kg;dim:0.5x0.5x0.8m;sc:0.5", id:"", url:"MBRSC:www.mbrsc.ae/", icon:"rashid.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024", loc:"ter", desc:""},
    {pt:"", type:"td", dt:"l+4d", loc:"lun", desc:""},
    {pt:"", type:"nom", dt:"l+18d", loc:"lun", desc:""},
    {pt:"", type:"pom", dt:"l+18d", loc:"lun", desc:""}
]},
beresheet2: {name:"Beresheet 2", desc:"lv:TBA",
  parts:[
    {names:"براشيت 2‬", type:"om", dest:"lun", stat:"pl", ctry:"il", desc:"ag:SpaceIL;m:630kg;dim:2.5x1.6m;sc:0.3", id:"", url:"hp:beresheet.space;SpaceIL:www.spaceil.com/", icon:"beresheet2-o.png"},
    {names:"‬", type:"slm", dest:"lun", stat:"pl", ctry:"il", desc:"ag:SpaceIL;dim:1.5x1.74m;sc:1", id:"", url:"", icon:"beresheet2-l.png"}
  ], 
  events:[
    {pt:"", type:"l", dt:"2024", loc:"ter:cap", desc:""},
    {pt:"", type:"oi", dt:"2024", loc:"lun", desc:""},
    {pt:"", type:"td", dt:"2024", loc:"lun", desc:""}
]},
/*ptknp: {name:"Oryol 1L1", desc:"lv:Angara-A5P", stat:"pl", 
  parts:[
    {names:"Орёл;PTK-NP:Pilotiruemyi Transportny Korabl Novogo Pokoleniya (New Generation Piloted Transport Ship)", type:"test", dest:"ter", ctry:"ru", desc:"ag:rosc;m:22300kg;dim:4.47x13.9x6.08m;Uncrewed test flight;sc:0.7", id:"", url:"rsw:www.russianspaceweb.com/ptk_flight_testing.html", icon:"orel.png"},
    {type:"erm", dest:"ter"}], 
  events:[
    {pt:"", type:"l", dt:"2023-09", loc:"ter:vos:LC-1A", desc:""},
    {pt:"", type:"fb", dt:"l+4dy", loc:"lun", desc:""},
    {pt:"", type:"edl", dt:"l+8dy", loc:"ter", desc:"eom"}
]},*/
luna26: {name:"Luna 26", desc:"lv:Soyuz 2.1B/Fregat-MT",
  parts:[
    {names:"Луна-Ресурс орбитальный;Luna Resurs Orbiter:Lunar Resource Orbiter", type:"om", dest:"lun", stat:"pl", ctry:"ru", desc:"ag:rosc,iki;m:2200kg;sc:0.75", id:"", url:"rsw:www.russianspaceweb.com/luna_glob.html", icon:"luna26.png"}], 
  events:[
    {pt:"", type:"l", dt:"2024-11-13", loc:"ter:vos", desc:""},
    {pt:"", type:"oi", dt:"l+4dy", loc:"lun", desc:""},
    {pt:"", type:"sco", dt:"l+?dy", loc:"lun:100kmx90deg", desc:"Working Orbit"},
    {pt:"", type:"sco", dt:"l+1yr", loc:"lun:500kmx90deg", desc:"Final Operation Orbit"},
    {pt:"", type:"nom", dt:"l+3yr", loc:"lun", desc:"?"},
    {pt:"", type:"pom", dt:"l+4yr", loc:"lun", desc:"?"}
]},
// --- 2025
neosm: {name:"NEO Surveyor:Near Earth Object Surveyor", desc:"",
  parts: [
    {names:"", type:"obm", dest:"ast", stat:"pl", ctry:"us", desc:"ag:nasa,jpl;m:1300kg;sc:0.5", id:"", url:"hp:neocam.ipac.caltech.edu/", icon:"neosm.png"}], 
  events: [
    {pt:"", dt:"2025", type:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2025", type:"sco", loc:"sol:esl1", desc:"Halo Orbit"},
    {pt:"", dt:"2037", type:"nom", loc:"sol:esl1", desc:""}
]},
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
luna27: {name:"Luna 27", desc:"lv:Soyuz 2.1B/Fregat-MT",
  parts:[
    {names:"Луна-Ресурс посадочный;Luna Resurs Lander", type:"slm", dest:"lun", stat:"pl", ctry:"ru;eu", desc:"ag:rosc,iki,esa;m:2150kg;sc:0.4", id:"", url:"hp:ofo.ikiweb.ru/en/p_luna_resurs.php;rsw:www.russianspaceweb.com/luna_resurs.html", icon:"lunaresurs.png"}], 
  events:[
    {pt:"", type:"l", dt:"2025-08", loc:"ter:vos", desc:""},
    {pt:"", type:"td", dt:"l+4dy", loc:"lun:87.2S,68E", desc:"Near South Pole; Shoemaker Crater;show:0"},
    {pt:"", type:"nom", dt:"l+1yr", loc:"lun", desc:"?"}
]},
// --- 2026
dragonfly: {name:"Dragonfly", desc:"lv:Vulcan Centaur", stat:"pl", 
  parts:[
    {names:"", type:"dm", dest:"sat:Titan", ctry:"us", desc:"ag:nasa,apl;fam:New Frontiers;m:450kg;sc:0.4", id:"", url:"hp:dragonfly.jhuapl.edu", icon:"dragonfly.png"}],
  events:[
    {pt:"", type:"l", dt:"2027", loc:"ter:ksc", desc:""},
    {pt:"", type:"edl", dt:"2034", loc:"tita", desc:"Shangri-La"},
    {pt:"", type:"nom", dt:"2037", loc:"tita", desc:"rv:175km;?"}
]},
heracles: {name:"HERACLES:Human-Enhanced Robotic Architecture and Capability for Lunar Exploration and Science", desc:"lv:Ariane 64",
  parts:[
    {names:"EL3:European Large Lunar Lander", type:"srm", dest:"lun", stat:"pl", ctry:"eu", desc:"ag:esa;m:8500kg;dim:4.5x6m;sc:0.3", id:"", url:"hp:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Landing_on_the_Moon_and_returning_home_Heracles", icon:"heracles.png"},
    {names:"{LDE:Lunar Descent Element}", type:"slm", dest:"lun", stat:"pl", ctry:"jp", desc:"ag:jaxa;sc:0.4", icon:"heracles-lde.png"},
    {names:"{Heracles Rover}", type:"rvm", dest:"lun", stat:"pl", ctry:"ca", desc:"ag:csa;sc:0.3", icon:"heracles-rv.png"}],
  events:[
    {pt:"", type:"l", dt:"2026", loc:"ter:kou", desc:""},
    {pt:"", type:"td", dt:"2026", loc:"lun", desc:"Schrödinger crater"},
    {pt:"", type:"l", dt:"2026", loc:"lun", desc:""},
    {pt:"0", type:"doc", dt:"2026", loc:"lun:nrho", desc:"Gateway station"}
]},
srl: {name:"SRL:Sample Retrieval Lander", desc:"",
  parts:[
    {names:"", type:"slm", dest:"mar", stat:"pl", ctry:"us", desc:"ag:nasa,jpl;m:;dim:;sc:0.5;fam:MSR;Sample Return Mission", id:"", url:"hp:mars.nasa.gov/mars-exploration/missions/mars-sample-return/", icon:"srl.png"},
    {names:"SFR:Sample Fetch Rover", type:"rvm", dest:"mar", stat:"pl", ctry:"eu", desc:"ag:esa;m:;dim:;sc:0.5", id:"", url:"esa:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Mars_sample_return", icon:"sfr.png"},
    {names:"MAV:Mars Ascent Vehicle", type:"om", dest:"mar", stat:"pl", ctry:"us", desc:"ag:nasa;m:;dim:;sc:0.3", id:"", url:"", icon:"mav.png"}], 
  events:[
    {pt:"", type:"l", dt:"2026-07", loc:"ter:cap", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:hto", desc:""},
    {pt:"", type:"edl", dt:"2028-08", loc:"mar:18.5N,77.5E", desc:"Jezero Crater;show:SRL:SW"},
    {pt:"1", type:"sep", dt:"2028-08", loc:"mar", desc:"rvp/lp;Sample fetching"},
    {pt:"2", type:"l", dt:"2029-03", loc:"mar", desc:"as"},
    {pt:"2", type:"doc", dt:"2029-03", loc:"mar:340km", desc:"as/ERO;eom:om"},
    {pt:"", type:"pom", dt:"l+10yr", loc:"mar", desc:"?"}
]},
ero: {name:"ERO:Earth Return Orbiter", desc:"",
  parts:[
    {names:"", type:"om", dest:"mar", stat:"pl", ctry:"eu", desc:"ag:esa;m:6000kg;sc:1.2", id:"", url:"hp:esa:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Mars_sample_return", icon:"ero.png"},
    {names:"{EEV:Earth Entry Vehicle}", type:"srm", dest:"ter", stat:"pl", ctry:"us", desc:"ag:nasa", icon:""}],
  events:[
    {pt:"", type:"l", dt:"2026-09", loc:"ter:kou", desc:""},
    {pt:"", type:"oi", dt:"2027-09", loc:"mar", desc:""},
    {pt:"", type:"doc", dt:"2029-03", loc:"mar:340km", desc:"op/SRL MAV"},
    {pt:"", type:"dep", dt:"2030-07", loc:"mar", desc:""},
    {pt:"1", type:"edl", dt:"2031-09", loc:"ter", desc:"eom:srm"}
]},
ihab: {name:"Gateway I-HAB:International Habitat" , desc:"",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"pl", ctry:"eu", desc:"ag:esa,Thales;sc:0.5", id:"", url:"hp:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Gateway;Thales:www.thalesgroup.com/en/worldwide/space/press-release/thales-alenia-space-its-way-reach-moon", icon:"ihab.png"}], 
  events:[
    {pt:"", type:"l", dt:"2026", loc:"ter", desc:""},
    {pt:"", type:"oi", dt:"l+4m", loc:"lun:nrho", desc:""},
    {pt:"", type:"nom", dt:"2030s", loc:"lun", desc:""}
]},
// --- 2027
change8: {name:"Chang'e 8", desc:"lv:CZ-5",
  parts:[
    {names:"嫦娥 8", type:"slm", dest:"lun", stat:"pl", ctry:"cn", desc:"ag:cnsa;fam:clep;m:8200kg;sc:0.3;w:0.67", id:"", url:"", icon:"chang-e7.png"},
    {names:"{Chang'e 8 Orbiter}", type:"om", dest:"lun", stat:"pl", ctry:"cn", desc:"", icon:""}],
  events:[
    {pt:"", type:"l", dt:"2027", loc:"ter:wen:LC-101", desc:""},
    {pt:"", type:"toi", dt:"l+1hr", loc:"ter:lto", desc:""},
    {pt:"", type:"oi", dt:"l+5dy", loc:"lun:200km", desc:""},
    {pt:"0", type:"td", dt:"l+?dy", loc:"lun", desc:"SP Aitken Basin"},
    //{pt:"", type:"sep", dt:"l+?dy", loc:"lun", desc:"lp/rvp"},
    {pt:"0", type:"nom", dt:"l+1yr", loc:"lun", desc:"lp;?"},
    {pt:"1", type:"nom", dt:"l+2yr", loc:"lun", desc:"op;?"}
]},
venerad: {name:"Venera-D", desc:"lv:Angara-A5/Blok-DM",
  parts:[
    {names:"Венера-Д", type:"om", dest:"ven", stat:"pl", ctry:"ru", desc:"ag:rosc,iki;m:3600kg;sc:0.7", id:"", url:"hp:venera-d.cosmos.ru/index.php?id=658&L=2", icon:"venera-d.png"},
    {names:"", type:"slm", dest:"ven", stat:"pl", ctry:"ru", desc:"", id:"", url:"", icon:""}], 
  events:[
    {pt:"", type:"l", dt:"2027", loc:"ter:bai", desc:""},
    {pt:"", type:"toi", dt:"l+1dy", loc:"sol:ho", desc:""},
    {pt:"", type:"oi", dt:"l+?yr", loc:"ven", desc:""},
    {pt:"0", type:"td", dt:"l+?yr", loc:"ven", desc:""},
    {pt:"1", type:"nom", dt:"l+3yr", loc:"ven", desc:""},
    {pt:"1", type:"pom", dt:"l+4yr", loc:"ven", desc:"?"}
]},
esprit: {name:"Gateway ESPRIT:European System Providing Refueling, Infrastructure and Telecommunications" , desc:"",
  parts:[
    {names:"", type:"om", dest:"lun", stat:"pl", ctry:"eu", desc:"ag:esa,Thales;sc:1.0", id:"", url:"hp:www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Gateway", icon:"gateway2.png"}], 
  events:[
    {pt:"", type:"l", dt:"2027", loc:"ter", desc:""},
    {pt:"", type:"oi", dt:"l+4m", loc:"lun:nrho", desc:""},
    {pt:"", type:"nom", dt:"2030s", loc:"lun", desc:""}
]},
// --- 2028
cometinterceptor: {name:"Comet Interceptor", desc:"lv:Ariane 62", 
  parts: [
    {names:"A", type:"fbm", dest:"com", stat:"pl", ctry:"eu", desc:"ag:esa;dim:;m:900kg;sc:0.4;fam:F-Class", id:"", url:"hp:www.cometinterceptor.space/;tw:twitter.com/CometIntercept",  icon:"comint-a.png"},
    {names:"B1", type:"fbm", dest:"com", stat:"pl", ctry:"jp", desc:"ag:jaxa;dim:;m:;sc:0.5", id:"", url:"", icon:"comint-b1.png"},
    {names:"B2", type:"", dest:"com", stat:"pl", ctry:"eu", desc:"ag:esa;dim:;m:;sc:0.3", id:"", url:"",  icon:"comint-b2.png"}
  ], events: [
    {pt:"", dt:"2029", type:"l", loc:"ter:kou:ELA-4", desc:""},
    {pt:"", dt:"2029", type:"oi", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2031", type:"fb", loc:"com", desc:"?"},
    {pt:"", dt:"2033", type:"nom", loc:"sol:ho", desc:""}
]}

};
