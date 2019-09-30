/*name:{name:"str[:long]", url:"acr:url[;acr:url]..", desc:"ag;lv;fam;m;sc", stat:"pr|pl|o|s|f|p|g", 
  parts: [
    {n:"",  ctry:"us|ru|eu|jp|cn|ind..", 
    type:"r|mw|nir|fir|ir|opt|uv|nuv|fuv|x|sx|hx|g|par|gr|emf",  //Spectral type
    pur:"sol|neo|exo|as|sur|cmb|cxb|grb|seis|de|dm|tim|w",       //Special purpose
    id:"copsar-id", 
    url:"acr:url[;acr:url]..", 
    icon:"", 
    desc:"(see main)"}
  ], ev: [
    {pt:"", dt:"", tp:"l|hib|re|eom|nom|mal", loc:"", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"leo|peo|sseo|meo|heeo|geo|sol:ef|sol:el|sol:esl1|sol:esl2|sol:ho", desc:""}
  ], inst: [
    {n:"", tp:"im|sp|acc|ctr|is|par|li|em|psp|msp", //Type, im:imaging,sp:spectrometer,acc:accelerometer,ctr:counter,is:imaging spectrometer,par:particles,li:laser interferometry;em:magnetic/electric field meter;psp:particle spectrometer;msp:mass spectrometer; default:im
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
Tenma, Hakucho, td-1, isee, oao-2, oso 2..7, ariel1-5
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
aditya:{name:"Aditya-L1", url:"hp:aditya.iiap.res.in/", desc:"Solar Coronograph;ag:isro;lv:PSLV XL;m:400kg;sc:0.6;x:-10;y:16", stat:"pl", 
  parts: [
    {n:"आदित्य", ctry:"ind", type:"opt;ir", pur:"sol", id:"", icon:"aditya-l1.png", desc:""}
  ], ev: [
    {pt:"", dt:"2021", tp:"l", loc:"ter:sri", desc:""},
    {pt:"", dt:"l+100d", tp:"sco", loc:"sol:esl1", desc:""}
  ], inst: [
    {n:"VELC:Visible Emission Line Coronagraph", band:"530..640nm", res:"2", d:"0.2", px:"", url:"", desc:"c:nl;cl:nly"},
    {n:"SUIT:Solar Ultraviolet Imaging Telescope", band:"200..400nm", res:"", d:"", px:"", url:"", desc:"c:;cl:n"},
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
ariel:{name:"ARIEL:Atmospheric Remote‐sensing Infrared Exoplanet Large‐survey mission", url:"hp:sci.esa.int/ariel/", desc:"ag:esa;lv:Ariane 62;dim:,m:1200kg;sc:0.6;y:48", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"ir", pur:"exo", id:"", icon:"ariel.png", desc:""}
  ], ev: [
    {pt:"", dt:"2028", tp:"l", loc:"ter:kou:ELA-4", desc:""},
    {pt:"", dt:"2028", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2030", tp:"nom", loc:"", desc:"eom"}
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
asos:{name:"ASO-S:Advanced Space-based Solar Observatory", url:"", desc:"ag:cnsa;m:600kg;lv:CZ-2D", stat:"pl", 
  parts: [
    {n:"", ctry:"cn", type:"x", pur:"sol;w", id:"", icon:"asps.png", desc:""}
  ], ev: [
    {pt:"", dt:"2021", tp:"l", loc:"ter:xch", desc:""},
    {pt:"", dt:"2021", tp:"sco", loc:"ter:sseo:620kmx98.2deg", desc:""}
  ], inst: [
    {n:"FMG:Full-disk Magnetograph", tp:"is", band:"532nm", res:"0.5", tres:"120", sens:"", fov:"33´", desc:"c:;cl:;"},
    {n:"LST:Lyman-alpha Solar Telescope", tp:"is", band:"121.6nm", res:"4.6", tres:"1..10s", fov:"2.5rsol", foc:"", sens:"", desc:"c:;cl:;"},
    {n:"HXI:Hard X-ray Imager", tp:"is", band:"30..300keV", res:"6", sres:"3%@662keV", tres:"0.5", ea:"100cm2", fov:"1deg", foc:"", sens:"", desc:"c:;cl:;"}
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
athenaplus:{name:"Athena:Advanced Telescope for High-energy Astrophysics", url:"hp:www.the-athena-x-ray-observatory.eu/;mpe:www.mpe.mpg.de/Athena;tw:twitter.com/AthenaXobs", desc:"ag:esa;lv:Ariane 64;m:7100kg;fam:L-class;sc:1.2;x:0;y:10", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"x", pur:"", id:"", icon:"athena.png", desc:""}
  ], ev: [
    {pt:"", dt:"2031", tp:"l", loc:"ter:kou:ELA-4", desc:""},
    {pt:"", dt:"2031", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2035", tp:"nom", loc:"sol:esl2", desc:"pend"}
  ], inst: [
    {n:"X-IFU:X-ray Integral Field Unit", tp:"is", band:"0.3..10keV", res:"5", sres:"2.5eV@6keV", fov:"5'", ea:"1.4@1keV", sens:">1Crab", url:"athena2.irap.omp.eu/spip.php?article15", desc:"c:nbr;cl:nly;"},
    {n:"WFI:Wide Field Imager", tp:"im", band:"0.1..12keV", res:"5", sres:"8%@1keV;2.5%@6keV", fov:"40'", ea:"1.33@1keV", sens:"10mCrab", url:"athena2.irap.omp.eu/spip.php?article18", desc:"c:br;cl:n;"}
]},
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
cheops:{name:"CHEOPS:CHaracterising ExOPlanets Satellite", url:"hp:cheops.unibe.ch/;esa:sci.esa.int/cheops/", desc:"ag:esa;fam:S-class;lv:Soyuz STB/Fregat-MT;m:250kg;sc:0.7;x:0;y:0", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"opt;nir", pur:"exo", id:"", icon:"cheops.png", desc:""}
  ], ev: [
    {pt:"", dt:"2019-10-15", tp:"l", loc:"ter:kou:ELS", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:sseo:700kmx98deg", desc:""},
    {pt:"", dt:"2022", tp:"nom", loc:"ter:sseo", desc:""},
  ], inst: [
    {n:"", band:"400..1100nm", res:"", d:"0.33", px:"", desc:"c:;cl:nl;"}
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
einsteinprobe:{name:"Einstein Probe", url:"", desc:"ag:cnsa;m:380kg;lv:", stat:"pl", 
  parts: [
    {n:"", ctry:"cn", type:"x", pur:"grb", id:"", icon:""}
  ], ev: [
    {pt:"", dt:"2022", tp:"l", loc:"ter", desc:""},
    {pt:"", dt:"2022", tp:"sco", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"WXT:Wide-field X-ray Telescope", tp:"", band:"0.5..4keV", res:"300", fov:"60x60deg", ea:"3cm2€0.7keV", tres:"100us", eres:"50%@4keV", url:"", desc:"c:;"},
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
    {pt:"", dt:"2034", tp:"l", loc:"ter:kou:ELA-3", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"sol:ef", desc:""}
  ], inst: [
    {n:"", tp:"li", band:"1e-4..1Hz", url:"", desc:"c:;"}
]},
euclid:{name:"Euclid", url:"hp:www.euclid-ec.org/;esa:sci.esa.int/euclid", desc:"ag:esa;lv:Soyuz-STB/Fregat MT;fam:M-class;sc:0.6;x:10;y:9", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"nir", pur:"de;sur", id:"", icon:"euclid.png", desc:"m:2100kg;dim:4.5x3.1m"}
  ], ev: [
    {pt:"", dt:"2022-06", tp:"l", loc:"ter:kou:ELS", desc:""},
    {pt:"", dt:"l+30d", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2026", tp:"nom", loc:"sol:esl2", desc:"pend"},
  ], inst: [
    {n:"VIS:Visual Imager", band:"550..920nm", res:"0.1", d:1.2, px:0.1, fov:"0.8deg2", desc:"c:n;cl:nly;"},
    {n:"NISP:Near-infrared spectrometer and photometer", band:"1..2um", res:"0.3", d:1.2, px:0.3, fov:"0.7deg2", desc:"c:nr;cl:nl"}
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
/*extp:{name:"eXTP:enhanced X-ray Timing and Polarization", url:"hp:www.isdc.unige.ch/extp/", desc:"ag:cnsa,esa;lv:CZ-7;m:4500kg;sc:1.0;x:-1;y:0", stat:"pl", 
  parts: [
    {n:"", ctry:"cn;eu", type:"x", pur:"", id:"", icon:"extp.png", desc:""}
  ], ev: [
    {pt:"", dt:"2025", tp:"l", loc:"ter:wen", desc:""},
    {pt:"", dt:"2025", tp:"sco", loc:"ter:leo:550km", desc:""}
  ], inst: [
    {n:"SFA:Spectroscopic Focusing Array", band:"0.5..20keV", res:"60", sres:"3%@6keV", ea:"0.9m2@1keV", fov:"12'", url:"", desc:"c:nl;cl:nl;"},
    {n:"PFA:Polarimetry Focusing Array", band:"2..10keV", res:"30", sres:"18%@6keV", ea:"0.9m2@2keV", fov:"12'", url:"", desc:"c:nl;cl:nl;"},
    {n:"WFM:Wide Field Monitor", band:"2..50keV", res:"300", sres:"5%@6keV", ea:"0.9m2@1keV", fov:"70deg", url:"", desc:"c:nl;cl:nl;"},
    {n:"LAD:Large Area Detector", band:"1..30keV", res:"", sres:"4%@6keV", ea:"3.4m2@6keV", fov:"1deg", url:"", desc:"c:nl;"}
]},*/
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
/*gamma400:{name:"Gamma-400", url:"hp:gamma400.lebedev.ru/indexeng.html", desc:"ag:lebedev,rosc;sc:0.8;x:-100;y:-30", stat:"pl", 
  parts: [
    {n:"",  ctry:"ru", type:"g;par", pur:"grb;cr;dm", id:"", icon:"gamma400.png", desc:""}
  ], ev: [
    {pt:"", dt:"2018", tp:"l", loc:"ter:bai?", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:heeo:300000x500kmx51.8deg", desc:""}
  ], inst: [
    {n:"", band:"100MeV..3000GeV", res:"36", sres:"1", ea:"1", desc:"c:n;cl:nlcol:#fdf"}
]},*/
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
goes:{name:"GOES:Geostationary Operational Environmental Satellite", ctry:"us", url:"hp:goespoes.gsfc.nasa.gov/goes/index.html;swpc:swpc.noaa.gov/", desc:"ag:noaa;sc:0.7;x:-18;y:6", stat:"o", 
  parts: [
    {n:"GOES 13", id:"2006-018A", type:"x", pur:"sol;w", desc:"lv:Delta 4M+(4,2)", stat:"s", icon:"goes-nop.png"},
    {n:"GOES 14", id:"2009-033A", type:"x", pur:"sol;w", desc:"lv:Delta 4M+(4,2)", icon:"goes-nop.png"},
    {n:"GOES 15", id:"2010-088A", type:"x", pur:"sol;w", desc:"lv:Delta 4M+(4,2)", icon:"goes-nop.png"},
    {n:"GOES 16", url:"www.goesr.gov", id:"2016-071A", type:"uv,x", pur:"sol;w", stat:"o", desc:"lv:Atlas V 541"}, 
    {n:"GOES S", id:"2018-022A", type:"uv,x", pur:"sol;w", stat:"o", desc:"lv:Atlas V 541"}], 
    // GOES U
  ev: [
    {pt:"0", dt:"2006-05-24", tp:"l", loc:"ter:cap:SLC-37B", desc:""},
    {pt:"0", dt:"2006-07-26", tp:"sco", loc:"ter:geos:35784x35790kmx0.4deg", desc:""},
    {pt:"1", dt:"2009-06-27", tp:"l", loc:"ter:cap:SLC-37B", desc:""},
    {pt:"1", dt:"2009-08-16", tp:"sco", loc:"ter:geos:35783x35790kmx0.4deg", desc:""},
    {pt:"2", dt:"2010-03-04", tp:"l", loc:"ter:cap:SLC-37B", desc:""},
    {pt:"2", dt:"2010-03-18", tp:"sco", loc:"ter:geos:35778x35789kmx0.01deg", desc:""},
    {pt:"3", dt:"2016-11-19", tp:"l", loc:"ter:cap:SLC-41", desc:""},
    {pt:"3", dt:"2017-12-11", tp:"sco", loc:"ter:geos:", desc:"GOES East"},
    {pt:"4", dt:"2018-03-01", tp:"l", loc:"ter:cap:SLC-41", desc:""},
    {pt:"4", dt:"2018-12", tp:"sco", loc:"ter:geos", desc:"GOES West"}
  ], inst: [
    {n:"SXI:Soft X-ray Imager", band:"0.6..6nm", res:"7", url:"sxi.ngdc.noaa.gov/", desc:"c:nr;"},
    {n:"SUVI:Solar Ultraviolet Imager", band:"9.4..30.4nm", res:"", url:"www.goes-r.gov/spacesegment/suvi.html", desc:"c:nr;"},
    {n:"EUVS:Extreme Ultraviolet Sensor", type:"is", band:"5..304nm", res:"", url:"www.goes-r.gov/spacesegment/exis.html", desc:"c:nr;"},
    {n:"XRS:X-ray Irradiance Sensor", type:"is", band:"0.05..0.8nm", res:"", url:"www.goes-r.gov/spacesegment/exis.html", desc:"c:nr;"}
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
hisaki: {name:"Hisaki:Beyond the sun", url:"hp:www.jaxa.jp/projects/sat/sprint_a/index_e.html;isas:www.isas.jaxa.jp/e/enterp/missions/sprint-a/index.shtml", desc:"ag:jaxa;lv:Epsilon;m:383kg", stat:"o", 
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
hxmt:{name:"Huì​yǎn:Insight", url:"hp:www.hxmt.org/;uk:www.integral.soton.ac.uk/missions/HXMT.html", desc:"m:2800kg;lv:CZ-4B;sc:1.3;x:0;y:16", stat:"o", 
  parts: [
    {n:"HXMT:Hard X-ray Modulation Telescope", ctry:"cn", type:"hx", pur:"sur", id:"2017-034A", icon:"hxmt.png", desc:""}
  ], ev: [
    {pt:"", dt:"2017-06-15", tp:"l", loc:"ter:jiu:LC43/603", desc:""},
    {pt:"", dt:"2017-06-15", tp:"sco", loc:"leo:534x546kmx43deg", desc:""},
    {pt:"", dt:"2021", tp:"nom", loc:"leo", desc:""}
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
imap:{name:"IMAP:Interstellar Mapping and Acceleration Probe", url:"hp:soma.larc.nasa.gov/STP/IMAP/", desc:"ag:nasa,jhuapl;lv:;m:", stat:"pl", 
  parts: [
    {n:"", ctry:"us", type:"par", pur:"", id:"", icon:"imap.png", desc:""}
  ], ev: [
    {pt:"", dt:"2024", tp:"l", loc:"ter", desc:""},
    {pt:"", dt:"2024", tp:"sco", loc:"sol:ho:esl1", desc:""}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", url:"", desc:"c:;"}
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
    {n:"JEM-EUSO:Japanese Experiment Module-Extreme Universe Space Observatory", ctry:"jp", type:"par", pur:"cr", url:"hp:jemeuso.riken.jp/en/", stat:"pl", id:"", icon:"", desc:"lv:H-IIB;ag:jaxa"},
    {n:"ACES:Atomic Clock Ensemble in Space", ctry:"eu", type:"Gr", pur:"", url:"hp:pharao.cnes.fr/en/PHARAO/GP_platform_aces.htm", stat:"pl", id:"", icon:"", desc:"ag:esa"},
    {n:"Sun-THz", ctry:"br", type:"", pur:"", url:"hp:fapesp.br/week2019/london/news/technology-developed-in-brazil-will-be-part-of-the-international-space-station", stat:"pl", id:"", icon:"", desc:"ag:FAPESP"}
  ], ev: [
    {pt:"", dt:"1998-11-20", tp:"sco", loc:"ter:leo:350x350kmx51.8deg", desc:""},
    {pt:"1", dt:"2009-07-15", tp:"l", loc:"ter:cap:LC-39A", desc:"STS-127"},
    {pt:"1", dt:"2009-07-24", tp:"pow", loc:"iss", desc:""},
    {pt:"0", dt:"2011-05-16", tp:"l", loc:"ter:cap:LC-39A", desc:"STS-134"},
    {pt:"2", dt:"2015-08-19", tp:"l", loc:"ter:tng:YLP-2", desc:"HTV-5"},
    {pt:"3", dt:"2017-06-03", tp:"l", loc:"ter:ksc:LC-39A", desc:""},
    {pt:"4", dt:"2020", tp:"l", loc:"ter:tng", desc:""},
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
ixpe:{name:"IXPE:Imaging X-Ray Polarimetry Explorer", url:"hp:wwwastro.msfc.nasa.gov/ixpe/", desc:"ag:nasa,msfc;lv:Falcon 9;m:292kg;sc:1.0;y:10", stat:"pl", 
  parts: [
    {n:"", ctry:"ind", type:"x", pur:"", id:"", icon:"ixpe.png", desc:""}
  ], ev: [
    {pt:"", dt:"2021-04", tp:"l", loc:"ter:ksa:LC-39A", desc:""},
    {pt:"", dt:"2021-04", tp:"sco", loc:"ter:leo:540kmx0deg", desc:""},
    {pt:"", dt:"2024", tp:"pom", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"", band:"2..8keV", res:"30", fov:"11'", desc:"c:nr;cl:nl"}
  ]},
jwst:{name:"JWST:James Webb Space Telescope", url:"hp:www.jwst.nasa.gov/;stsci:www.stsci.edu/jwst/;esa:www.esa.int/Our_activities/Space_Science/JWST;tw:twitter.com/JWSTObserver", desc:"lv:Ariane 5 ECA;sc:1.8;x:12;y:-0", stat:"pl", 
  parts: [
    {n:"", ctry:"us;eu", type:"nir;opt", pur:"", id:"", desc:"", icon:"jwst.png"}
  ], ev: [
    {pt:"", dt:"2021-03-30", tp:"l", loc:"ter:kou:ELA-3", desc:"kou"},
    {pt:"", dt:"l+30d", tp:"sco", loc:"sol:esl2", desc:""}
  ], inst: [
    {n:"MIRI", band:"5..28um", res:"1.13..0.1", d:"6.5", px:"0.1", fov:"1.3x1.7'", sres:"100/3000", url:"ircamera.as.arizona.edu/MIRI/", desc:"c:nv;cl:nly;"},
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
longjiang: {name:"Longjiang 2:Dragon River", url:"hp:www.chinaspaceflight.com/satellite/HIT/DSLWP-A1-A2.html", desc:"ag:cnsa,HIT;m:45kg;dim:0.5x0.5x0.4m;lv:CZ-4C;", stat:"o",
  parts:[
    {n:"龙江二号;DSLWP-A2:Discovering the Sky at Longest Wavelengths Pathfinder", type:"r", pur:"lun", ctry:"cn", id:"2018-045B", icon:"dslwp.png"}
   ],  ev:[
    {pt:"", type:"l", dt:"2018-05-21", loc:"ter:xch:LC-2", desc:"Chang'e 4 LRS piggyback"},
    {pt:"", type:"oi", dt:"2018-05-25", loc:"lun:300x3000km", desc:""},
    {pt:"", type:"nom", dt:"2019-06", loc:"lun", desc:"?"}
  ], inst: [
    {n:"", band:"1..30MHz", res:"", desc:"c:nv;"}
]},
qss:{name:"Mozi", url:"", desc:"ag:cnsa;lv:CZ-2D;m:500kg", stat:"o", 
  parts: [
    {n:"QSS:Quantum Science Satellite", ctry:"cn", type:"par", pur:"", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"2016-07", tp:"l", loc:"ter:jiu", desc:""},
    {pt:"", dt:"2016-07", tp:"sco", loc:"ter:sseo:600kmx97.8deg", desc:""},
    {pt:"", dt:"2018-07", tp:"nom", loc:"ter:sseo", desc:""}
]},
/*kuafua:{name:"KuaFu-A", url:"hp:www.spaceweather.ac.cn/english/", desc:"ag:cnsa;m:600kg", stat:"pl", 
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
millimetron:{name:"Spektr-M", url:"hp:asc-lebedev.ru/index2.php?engdep=20", desc:"ag:rosc,lav;lv:Proton-M/Briz-M;sc:1.2;x:0;y:0;m:6600kg", stat:"pl", 
  parts: [
    {n:"Спектр-M;Millimetron", ctry:"ru", type:"mw", pur:"", id:"", icon:"millimetron.png", desc:""}
  ], ev: [
    {pt:"", dt:"2025", tp:"l", loc:"ter:bai", desc:""},
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
    {pt:"", dt:"2021", tp:"l", loc:"ter:Kourou", desc:""},
    {pt:"", dt:"", tp:"sco", loc:"ter:sseo", desc:""}
  ], inst: [
    {n:"", band:"0.6..1um", res:"", d:"", px:"", desc:"c:;"}
]},
neosm:{name:"NEOSM:NEO Surveillance Mission", url:"hp:neocam.ipac.caltech.edu/", desc:"ag:nasa,jpl;lv:;sc:1;x:0;y:10", stat:"pl", 
  parts: [
    {n:"", ctry:"us", type:"ir", pur:"neo", id:"", icon:"neosm.png", desc:""}
  ], ev: [
    {pt:"", dt:"2025", tp:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2025", tp:"sco", loc:"sol:esl1", desc:""}
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
    {pt:"", dt:"2013-09", tp:"re", loc:"sseo", desc:""}
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
plato:{name:"PLATO:Planetary Transits and Oscillations of stars", url:"hp:sci.esa.int/plato/", desc:"ag:esa;lv:Ariane 62;fam:M-class;sc:0.7;x:28;y:0", stat:"pl", 
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
proba3:{name:"Proba-3", url:"hp:www.esa.int/esaMI/Proba/index.html", desc:"ag:esa;lv:Vega;2 spacecraft external coronagraph", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"cor", pur:"sol", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"2020-10", tp:"l", loc:"ter:kou:ZLV", desc:""},
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
    {pt:"", dt:"2022-08", tp:"l", loc:"ter:van", desc:""},
    {pt:"", dt:"2022-11", tp:"sco", loc:"ter:sseo:570kmx98deg", desc:""},
    {pt:"", dt:"2024", tp:"nom", loc:"ter:sseo", desc:""}
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
    {pt:"", dt:"2023", tp:"l", loc:"ter:tng", desc:""},
    {pt:"", dt:"2023", tp:"sco", loc:"ter:sseo", desc:""}
  ], inst: [
    {n:"", band:"", res:"", d:"", px:"", desc:"c:;"}
]},
smile:{name:"SMILE:Solar wind Magnetosphere Ionosphere Link Explorer", url:"hp:sci.esa.int/smile", desc:"ag:CAS,esa;lv:;y:-12", stat:"pl", 
  parts: [
    {n:"", ctry:"cn;eu", type:"sol", pur:"", id:"", icon:"smile.png", desc:""}
  ], ev: [
    {pt:"", dt:"2021", tp:"l", loc:"ter:kou", desc:""},
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
solarorbiter:{name:"Solar Orbiter", url:"hp:www.esa.int/Our_activities/Space_Science/Solar_Orbiter;esa:sci.esa.int/solarorbiter", desc:"High Inclination;ag:esa;fam:M-class;lv:Atlas V 411;sc:1;x:0;y:16", stat:"pl", 
  parts: [
    {n:"", ctry:"eu", type:"uv;par", pur:"sol", id:"", icon:"solarorbiter.png", desc:""}
  ], ev: [
    {pt:"", dt:"2020-02", tp:"l", loc:"ter:kou", desc:""},
    {pt:"", dt:"2020-02", tp:"sco", loc:"sol:ho", desc:""}
  ], inst: [
    {n:"EUI:Extreme Ultraviolet Imager", band:"17.4..30.4nm", res:"1", d:"", px:"", fov:"5.2deg", url:"", desc:"cl:nly;"},
    {n:"EPD:Energetic Particle Detector", band:"8..700keV", tp:"psp", res:"", url:"", desc:"c:"},
    {n:"MAG:Magnetometer", band:"0..64Hz", tp:"em", res:"", url:"", desc:"c:;"},
    {n:"RPW:Radio and Plasma Waves", band:"", tp:"em", res:"", url:"", desc:"c:;"},
    {n:"SWA:Solar Wind Plasma Analyser", band:"1eV..100keV", tp:"psp", res:"", url:"", desc:"c:;"},
    {n:"METIS/COR:Multi-Element Telescope for Imaging and Spectroscopy/Coronagraph", band:"30.4..600nm", res:"", d:"", px:"5.3", fov:"3deg", url:"", desc:"cl:n"},
    {n:"PHI:Polarimetric and Helioseismic Imager", band:"", res:"", d:"", px:"", fov:"16.8'", url:"", desc:"c:;"},
    {n:"SoloHI:Heliospheric Imager", band:"", res:"", d:"", px:"", fov:"40deg", url:"", desc:"c:;"},
    {n:"SPICE:Spectral Imaging of the Coronal Environment", band:"48.5..105nm", tp:"is", res:"", d:"", px:"", url:"", desc:"c:;"},
    {n:"STIX:X-ray Spectrometer/Telescope", band:"4..150keV", tp:"is", res:"", fov:"1.5deg", url:"", desc:"cl:n;"}
]},
spherex:{name:"SPHEREx:Spectro-Photometer for the History of the Universe, Epoch of Reionization, and Ices Explorer,", url:"hp:caltech:spherex.caltech.edu/;jpl:www.jpl.nasa.gov/missions/spherex/", desc:"ag:nasa,caltech;lv:;m:kg;fam:Explorer;sc:0.6;x:0;y:10", stat:"pl", 
  parts: [
    {n:"Explorer", ctry:"us", type:"ir", pur:"sur", id:"", icon:"spherex.png"}
  ], ev: [
    {pt:"", dt:"2023", tp:"l", loc:"ter:cap", desc:""},
    {pt:"", dt:"2023", tp:"sco", loc:"", desc:""},
    {pt:"", dt:"2025", tp:"nom", loc:"", desc:""}
], inst: [
    {n:"", tp:"is", band:"0.75..5um", sres:"41..130", d:"0.2", px:"6.2", sens:"", fov:"3.5x11.3deg", desc:"c:;cl:n;"}
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
spitzer:{name:"Spitzer", url:"hp:ssc.spitzer.caltech.edu/;ipac:irsa.ipac.caltech.edu/Missions/spitzer.html;tw:twitter.com/NASAspitzer", desc:"ag:nasa,jpl;lv:Delta II 7820H;sc:1.1;y:6", stat:"o", 
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
srg:{name:"Spektr-RG:Spectrum Roentgen Gamma", url:"hp:hea.iki.rssi.ru/SRG/en/index.php;tw:twitter.com/eROSITA_SRG", desc:"ag:rosc;lv:Proton-M/DM-3;m:2712.5kg;sc:1.4;x:5;y:-2", stat:"o", 
  parts: [
    {n:"Спектр-РГ", ctry:"ru;de;uk", type:"fuv,sx", pur:"", id:"2019-040A", icon:"srg.png", desc:""}
  ], ev: [
    {pt:"", dt:"2019-07-13", tp:"l", loc:"ter:bai:LC-81/24", desc:""},
    {pt:"", dt:"2019-10", tp:"sco", loc:"sol:esl2", desc:""},
    {pt:"", dt:"2026", tp:"eom", loc:"sol:esl2", desc:"pend"}
  ], inst: [
    {n:"eROSITA", band:"0.3..7keV", res:"18", fov:"0.81deg2", ea:"0.35m2@1.5keV", sres:"7%@1keV", desc:"ag:mpe;c:nl;cl:nly;"},
//    {n:"Lobster", band:"", res:"", desc:"ag:Leicester University;c:nl;"},
    {n:"ART-XC", band:"6..30keV", res:"45", fov:"0.3deg2", desc:"ag:iki;c:nl;"}
]},
spektruv:{name:"Spektr-UV", url:"hp:www.wso-uv.org/wso-uv2/index.php?lang=en;Universidad Complutense:www.wso-uv.es/", desc:"ag:rosc;lv:Proton-M/Briz-M;m:2840kg;sc:1.2;x:10;y:12", stat:"pl", 
  parts: [
    {n:"Спектр-УФ;WSO-UV:World Space Observatory-Ultraviolet", ctry:"ru", type:"uv", pur:"", id:"", icon:"wso-uv.png", desc:""}
  ], ev: [
    {pt:"", dt:"2025-10", tp:"l", loc:"ter:bai", desc:""},
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
svom:{name:"SVOM:Space-based multi-band astronomical Variable Objects Monitor", url:"hp:www.svom.fr/en;cnes:smsc.cnes.fr/SVOM/index.htm;tw:twitter.com/SVOM_mission", desc:"ag:cnsa,cnes;lv:CZ-2D;y:20;x:10;m:950kg", stat:"pl", 
  parts: [
    {n:"", ctry:"cn;fr", type:"gam;x;opt", pur:"mon", id:"", icon:"svom.png", desc:""}
  ], ev: [
    {pt:"", dt:"2021", tp:"l", loc:"ter:jiu", desc:""},
    {pt:"", dt:"2021", tp:"sco", loc:"ter:leo:650kmx30deg", desc:""},
    {pt:"", dt:"2025", tp:"nom", loc:"", desc:""},
    {pt:"", dt:"2026", tp:"pom", loc:"", desc:""}
  ], inst: [
    {n:"GRM:Gamma-Ray Monitor", band:"50..5000keV", res:"", ea:"0.056", url:"", desc:"c:nr;cl:nl;"},
    {n:"MXT:Microchannel X-ray Telescope", band:"0.3..7keV", res:"120", fov:"57'", ea:"0.005@1keV", url:"", desc:"c:nr;cl:ny;"},
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
swift:{name:"Swift", url:"hp:swift.gsfc.nasa.gov/;asi:swift.asdc.asi.it/;psu:www.swift.psu.edu/;tw:twitter.com/NASASwift", desc:"ag:nasa;lv:Delta II 7320-10C;x:-0;y:10", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"uv;x;g", pur:"grb", id:"2004-047A", icon:"swift.png", desc:""}
  ], ev: [
    {pt:"", dt:"2004-11-20", tp:"l", loc:"ter:cap:SLC-17A", desc:""},
    {pt:"", dt:"2004-11-21", tp:"sco", loc:"ter:leo:584x604kmx20.5deg", desc:""}
  ], inst: [
    {n:"UVOT:UV/Optical Telescope", band:"4.61E+14..1.76E+15", res:"0.5", d:0.3, px:0.5, url:"swift.gsfc.nasa.gov/docs/swift/about_swift/uvot_desc.html", desc:"c:nt;cl:nl"},
    {n:"XRT:X-ray Telescope", band:"7.25E+16..2.42E+18", res:"18", url:"swift.gsfc.nasa.gov/docs/swift/about_swift/xrt_desc.html", desc:"c:nr;cl:ny;"},
    {n:"BAT:Burst Alert Telescope", band:"3.63E+18..3.63E+19", res:"120", url:"swift.gsfc.nasa.gov/docs/swift/about_swift/bat_desc.html", desc:"c:nr;cl:nl;"}
]},
swimsat:{name:"SWIMSat:Space Weather and Impact Monitoring Satellite", url:"", desc:"ag:usaf;lv:;x:0;y:0", stat:"pl", 
  parts: [
    {n:"", ctry:"us", type:"", pur:"sol;neo", id:"", icon:"", desc:""}
  ], ev: [
    {pt:"", dt:"2021", tp:"l", loc:"ter", desc:""},
    {pt:"", dt:"2021", tp:"sco", loc:"ter:leo", desc:""},
    {pt:"", dt:"2023", tp:"nom", loc:"ter:leo", desc:""}
]},
tess:{name:"TESS:Transiting Exoplanet Survey Satellite", url:"hp:tess.gsfc.nasa.gov;mast:archive.stsci.edu/tess/;mit:space.mit.edu/TESS/TESS/TESS_Overview.html;tw:twitter.com/NASA_TESS", desc:"ag:nasa;lv:Falcon 9 v1.2;sc:1;x:10;y:0;m:350kg", stat:"o", 
  parts: [
    {n:"", ctry:"us", type:"nir", pur:"exo", id:"2018-038A", icon:"tess.png", desc:""}
  ], ev: [
    {pt:"", dt:"2018-04-18", tp:"l", loc:"ter:cap:SLC-40", desc:""},
    {pt:"", dt:"2018-05-17", tp:"fb", loc:"lun:8000km", desc:"ga"},
    {pt:"", dt:"2018-06-17", tp:"sco", loc:"ter:meo:108000x373000kmx40deg", desc:"2:1 Moon resonance"},
    {pt:"", dt:"2022-09-31", tp:"nom", loc:"ter:meo", desc:"pend"}
  ], inst: [
    {n:"", band:"0.6..1um", res:"", d:"0.105m", px:"21", fov:"24x96deg", tres:"120s", desc:"cl:nl;"}
]},
tiangong2:{name:"Tiangong 2:Heavenly Palace 2", ctry:"cn", url:"", desc:"ag:cnsa;lv:CZ-2F/T;sc:1;x:10;y:0;m:20000kg", stat:"o", id:"", icon:"tiangong2.png",
  parts: [
    {n:"POLAR:Gamma-ray Burst Polarimeter", ctry:"cn;ch;pl", type:"g", pur:"grb", url:"isdc.unige.ch/polar/", desc:""}
  ], ev: [
    {pt:"", dt:"2016-09-15", tp:"l", loc:"ter:jiu:LC-43/SLS-1", desc:""},
    {pt:"", dt:"2016-09-15", tp:"sco", loc:"ter:leo:197x373km42.8deg", desc:""}
  ], inst: [
    {n:"0", band:"50..350keV", ea:"200cm2", res:"", d:"", px:"", fov:"120deg", desc:"cl:;"}
]},
trace:{name:"TRACE:Transition Region And Coronal Explorer", url:"hp:trace.lmsal.com/", desc:"ag:nasa;lv:Pegasus XL;fam:smex", stat:"s", 
  parts: [
    {n:"", ctry:"us", type:"opt;uv", pur:"sol", id:"1998-020A", icon:""}
  ], ev: [
    {pt:"", dt:"1998-04-02", tp:"l", loc:"ter:van:L-1011", desc:""},
    {pt:"", dt:"1998-05-02", tp:"sco", loc:"ter:sseo:597x642kmx97.8deg", desc:""},
    {pt:"", dt:"2010", tp:"tos", loc:"", desc:"eom"}
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
wfirst:{name:"WFIRST:Widefield Infrared Survey Explorer", url:"hp:wfirst.gsfc.nasa.gov;tw:twitter.com/NASAWFIRST", desc:"ag:nasa;lv:Falcon Heavy;sc:0.9;x:40;y:0", stat:"pl", 
  parts: [
    {n:"AFTA:Astrophysics Focused Telescope Assets", ctry:"us", type:"nir", pur:"sur", id:"", icon:"wfirst.png", desc:""}
  ], ev: [
    {pt:"", dt:"2026", tp:"l", loc:"ter", desc:""},
    {pt:"", dt:"2026", tp:"sco", loc:"ter:esl2", desc:"or GEO"},
    {pt:"", dt:"2032", tp:"nom", loc:"", desc:""}
  ], inst: [
    {n:"WFI:Wide Field Instrument", band:"760..2000nm", res:"", d:"2.5", px:"0.11", fov:"0.28deg2", desc:"c:nvt;cl:nl"},
    {n:"CGI:Coronograph Instrument", band:"430..970nm", res:"", d:"2.5", px:"", fov:"", desc:""}
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
wukong:{name:"Wukong:Monkey King", url:"hp:dpnc.unige.ch/dampe/index.html", desc:"ag:cnsa;lv:CZ-2D;m:1900kg", stat:"o", 
  parts: [
    {n:"DAMPE:DArk Matter Particle Explorer", ctry:"cn", type:"par;g", pur:"dm;cr", id:"2015-78A", icon:"dampe.png", desc:""}
  ], ev: [
    {pt:"", dt:"2015-12-17", tp:"l", loc:"ter:jiu:LC43/603", desc:""},
    {pt:"", dt:"2015-12-17", tp:"sco", loc:"ter:sseo:500x500kmx97.4deg", desc:""},
    {pt:"", dt:"2020-12-31", tp:"nom", loc:"ter:sseo", desc:""}
  ], inst: [
    {n:"BGO:Bismuth Germanium Oxide Calorimeter", tp:"cal", band:"5GeV..10TeV", res:"360..1800", sres:"1.5%@100GeV", fov:"", url:"", desc:"Cosmic Rays;c:;0.1deg@100GeV,0.5deg@800GeV"},
    {n:"PSD:Plastic Scintillator Strips Detector", tp:"par", band:"", res:"", fov:"", url:"", desc:"Cosmic Rays;c:;"},
    {n:"STK:Silicon-Tungsten Tracker", tp:"par", band:"", res:"0.2deg@10GeV", fov:"", url:"", desc:"Cosmic Rays;c:;"},
    {n:"NUD:Neutron Detector", tp:"par", band:"", res:"", fov:"", url:"", desc:"Cosmic Rays;c:;"}
]},
xarm:{name:"XRISM:X-ray Imaging and Spectroscopy Mission", url:"hp:astro-h.isas.jaxa.jp/en/;jaxa:global.jaxa.jp/projects/sat/astro_h/;", desc:"ag:jaxa;lv:H-IIA 202;m:2300kg;sc:1.4;x:0;y:-5", stat:"pl",
  parts: [
    {n:"ASTRO-H2", ctry:"jp", type:"sx", pur:"", id:"", icon:"astro-h.png", desc:""}
  ], ev: [
    {pt:"", dt:"2021-03", tp:"l", loc:"ter:tng", desc:""},
    {pt:"", dt:"2021-03", tp:"sco", loc:"ter:leo:550kmx31deg", desc:""},
    {pt:"", dt:"2025", tp:"nom", loc:"ter:leo", desc:""}
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
    {n:"EPIC", band:"3.63E+16..3.63E+18", res:"6", desc:"c:nr;"}
]},
xposat:{name:"XPoSat:X-ray Polariation Satellite", url:"hp:", desc:"ag:isro;lv:PSLV XL;sc:1.6;y:10", stat:"pl", 
  parts: [
    {n:"", ctry:"ind", type:"x", pur:"", id:"", icon:"xpo.png", desc:""}
  ], ev: [
    {pt:"", dt:"2021", tp:"l", loc:"ter:sri", desc:""},
    {pt:"", dt:"2021", tp:"sco", loc:"ter:leo:600kmx30deg", desc:""},
    {pt:"", dt:"2026", tp:"pom", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"POLIX", band:"5..30keV", res:"", desc:"c:nr;cl:nl"}
  ]},
xuntian:{name:"Xuntian:Sky Survey", url:"hp:", desc:"ag:cnsa;lv:CZ-5B;sc:0.9;y:7", stat:"pl", 
  parts: [
    {n:"巡天", ctry:"cn", type:"opt;nir", pur:"sur", id:"", icon:"xuntian.png", desc:""}
  ], ev: [
    {pt:"", dt:"2024", tp:"l", loc:"ter:wen", desc:""},
    {pt:"", dt:"2024", tp:"sco", loc:"ter:leo", desc:""},
    {pt:"", dt:"2034", tp:"pom", loc:"ter:leo", desc:""}
  ], inst: [
    {n:"OS", tp:"is", band:"255..1000nm", res:"0.15", px:0.07, d:2, fov:"1.1deg2", desc:"c:nr;cl:nl"}
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
    {tp:"im", n:"FORCAST:Faint Object infraRed CAmera for the SOFIA Telescope", band:"5..40um", d:2.5, px:0.768, fov:"3.4x3.2'", desc:"c:nv;cl:x;col:#eee"},
    {tp:"im", n:"FPI+:Focal Plane Imager", band:"360..1100nm", d:2.5, px:0.51, fov:"8.7x8.7'", desc:"c:;cl:x;col:#eee"},
    {tp:"sp", n:" GREAT:German REceiver for Astronomy at Terahertz Frequencies", band:"60..220um", d:2.5, px:14.1, sres:"44kHz", det:"1024x1024px", desc:"c:;cl:x;col:#eee"},
    {tp:"is", n:"HAWC+:High-resolution Airborne Wideband Camera-plus", band:"40..300um", d:2.5, res:"20..5", sres:"", fov:"2..8''", desc:"c:;cl:x;col:#eee"}
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
