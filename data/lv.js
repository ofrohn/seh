/* global Common */

Common.lv = {
/*ctry: country, m:launch mass (kg), pm:payload leo/gto/ho (kg), d:height x diam (m), pf:payload h x d (m), dt:service period,
  st:stages, ust;upper stages, th:thrust (kN), fuel: fuel type, fam:lv family, desc:l:launch sites;ag;agency, icon:image
add: spec. impulse, manufact.
*/
//Angara 5V
"Angara A5V": {ctry:"ru", m:"821000", pm:"37500/13300/10000",  d:"73.3x2.9", pf:"19.6x5.1", dt:"2025..", st:"2/4", ust:"KVTK/Blok-DM", th:"9600", fam:"Angara", desc:"l:vos;ag:rosc", fuel:"KeroLOX", icon:"angara-a5v.png"},
//Ariane 1
"Ariane 1": {ctry:"eu", m:"207200", pm:"-/1850/1000",  d:"50x3.8", pf:"x3.8", dt:"1979-12-24..1986-02-22", st:"3", th:"2462", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"UDMH/N2O4", icon:"Ariane-1.png"},
//Ariane 5, Ariane 5ECA, Ariane 5G, Ariane 5G+
"Ariane 5G": {ctry:"eu", m:"720000", pm:"18000/6900/3000",  d:"54.0x5.4", pf:"12.7x5.4", dt:"1996-04-06..2005-12-21", st:"2/2", th:"11400", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"LH2/LOX+SRP", icon:"Ariane-5.png"},
"Ariane 5G+": {syn:"Ariane 5G"},
"Ariane 5ECA": {ctry:"eu", m:"764000", pm:"21000/9600/5400",  d:"57.7x5.4", pf:"17x5.4", dt:"2002-12-11..", st:"2/2", th:"11400", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"LH2/LOX+SRP", icon:"Ariane-5.png"},
"Ariane 6": {syn:"Ariane 62"},
"Ariane 62": {ctry:"eu", m:"500000", pm:"11300/5000/2600",  d:"62x5.4", pf:"20x5.4", dt:"2020-07..", st:"2/2", ust:"ULPM", th:"8350", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"LH2/LOX+SRP", icon:"ariane62.png"},
"Ariane 64": {ctry:"eu", m:"900000", pm:"22300/11500/7600",  d:"62x5.4", pf:"20x5.4", dt:"2020-07..", st:"2/4", ust:"ULPM", th:"15350", fam:"Ariane", desc:"l:kou;ag:esa", fuel:"LH2/LOX+SRP", icon:"ariane64.png"},
//Athena 2
"Athena 2": {ctry:"us", m:"120700", pm:"2065/593/300",  d:"28.2x2.3", pf:"x2.36", dt:"1998-01-07..1999-09-24", st:"3", th:"1450", fam:"MX", desc:"l:cap;ag:nasa", fuel:"SRP", icon:"Athena-2.png"},
//Atlas-D Able IV, Atlas-D Able V
"Atlas-D Able": {ctry:"us", m:"120000", pm:"-/-/180",  d:"35x3.05", pf:"", dt:"1959-09-24..1960-12-15", st:"2", ust:"Altair", th:"1629", fam:"Atlas", desc:"l:cap;ag:nasa,usaf", fuel:"KeroLOX", icon:"Atlas-Able.png"},
"Atlas-D Able IV": {syn:"Atlas-D Able"},
"Atlas-D Able V": {syn:"Atlas-D Able"},
//Atlas-LV3 Agena-B, Atlas-LV3 Agena-D, , Atlas-SLV3 Agena-D
"Atlas Agena": {ctry:"us", m:"130000", pm:"-/800/340",  d:"32.1x3.05", pf:"", dt:"1960-02-26..1978-06-27", st:"2", ust:"", th:"1629", fam:"Atlas", desc:"l:cap;ag:nasa", fuel:"KeroLOX", icon:"Atlas-Agena.png"},
"Atlas-LV3 Agena-B": {syn:"Atlas Agena"},
"Atlas-LV3 Agena-D": {syn:"Atlas Agena"},
"Atlas-SLV3 Agena-D": {syn:"Atlas Agena"},
//Atlas-LV3C Centaur-C, Atlas-LV3C Centaur-D, Atlas-SLV3C Centaur-D, Atlas-SLV3D Centaur-D1A, Atlas-SLV3D Centaur-D1AR
"Atlas-LV3 Centaur": {ctry:"us", m:"136100", pm:"-/1700/1000",  d:"33x3.05", pf:"", dt:"1962-05-09..1967-07-14", st:"2", ust:"", th:"1629", fam:"Atlas", desc:"l:cap;ag:nasa", fuel:"KeroLOX", icon:"Atlas-LV-3C.png"},
"Atlas-LV3C Centaur-C": {syn:"Atlas-LV3 Centaur"},
"Atlas-LV3C Centaur-D": {syn:"Atlas-LV3 Centaur"},
"Atlas-SLV3 Centaur": {ctry:"us", m:"148400", pm:"-/1800/1000",  d:"40.2x3.05", pf:"", dt:"1967-09-08..1983-05-19", st:"2", ust:"Star-37E", th:"1740", fam:"Atlas", desc:"l:cap;ag:nasa", fuel:"KeroLOX", icon:"Atlas-SLV-3C.png"},
"Atlas-SLV3C Centaur-D": {syn:"Atlas-SLV3 Centaur"},
"Atlas-SLV3D Centaur-D1A": {syn:"Atlas-SLV3 Centaur"},
"Atlas-SLV3D Centaur-D1AR": {syn:"Atlas-SLV3 Centaur"},
//Atlas IIAS
"Atlas IIAS": {ctry:"us", m:"204300", pm:"8618/3719/2700",  d:"47.54x3.05", pf:"x3.05", dt:"1993-12-16..2004-08-31", st:"2/4", ust:"", th:"3800", fam:"Atlas", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Atlas-IIAS.png"},
//Atlas V 401, Atlas V 411, Atlas V 541, Atlas V 551
"Atlas V 401": {ctry:"us", m:"333320", pm:"9800/4750/3700",  d:"58.3x3.81", pf:"10-12x4.2", dt:"2002-08-21..", st:"2/0", ust:"", th:"4152", fam:"Atlas", desc:"l:cap;van;ag:nasa", fuel:"KeroLOX", icon:"Atlas-V401.png"},
"Atlas V 411": {ctry:"us", m:"374120", pm:"12030/5950/4500",  d:"58.3x3.81", pf:"10-12x4.2", dt:"2006-04-20..", st:"2/1", ust:"", th:"5422", fam:"Atlas", desc:"l:cap;van;ag:nasa", fuel:"KeroLOX+SRP",  icon:"Atlas-V411.png"},
"Atlas V 541": {ctry:"us", m:"522330", pm:"17410/8290/6300",  d:"62.2x3.81", pf:"20-26x5.4", dt:"2011-11-26..", st:"2/4", ust:"", th:"9232", fam:"Atlas", desc:"l:cap;van;ag:nasa", fuel:"KeroLOX+SRP",  icon:"Atlas-V500.png"},
"Atlas V 551": {ctry:"us", m:"568590", pm:"18850/8900/6700",  d:"62.2x3.81", pf:"20-26x5.4", dt:"2006-01-19..", st:"2/5", ust:"Star-48B", th:"10502", fam:"Atlas", desc:"l:cap;van;ag:nasa", fuel:"KeroLOX+SRP",  icon:"Atlas-V500.png"},
//CZ-2C
"CZ-2C": {n:"Long March 2C", alt:"长征二号丙", ctry:"cn", m:"245000", pm:"3850/1440/500",  d:"43.0x3.35", pf:"x3.35", dt:"1975-11-26..", st:"2", ust:"SM/SMA", th:"2962", fam:"Long March", desc:"l:xch,jiu,tai;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-2C.png"},
//CZ-3A, CZ-3B, CZ-3C
"CZ-3A": {n:"Long March 3A", alt:"长征三号甲", ctry:"cn", m:"241000", pm:"7200/2650/1420",  d:"52.5x3.35", pf:"8.9x3.35", dt:"1994-02-08..", st:"3", th:"2962", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3A.png"},
"CZ-3B": {n:"Long March 3B", alt:"长征三号乙", ctry:"cn", m:"425800", pm:"13500/5100/3300",  d:"54.8x3.35", pf:"9.6x4.0", dt:"1996-02-14..", st:"3/4", th:"5923", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3B.png"},
"CZ-3B G3Z": {n:"Long March 3B/G3Z", alt:"长征三号乙", ctry:"cn", m:"458000", pm:"14000/5500/3400",  d:"56.3x3.35", pf:"9.6x4.0", dt:"2013-12-01..", st:"3/4", th:"5923", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3B.png"},
"CZ-3C": {n:"Long March 3C", alt:"长征三号丙", ctry:"cn", m:"345000", pm:"9100/3800/2300",  d:"54.8x3.35", pf:"9.6x4.0", dt:"2008-04-25..", st:"3/2", th:"4443", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3C.png"},
"CZ-3C G2": {n:"Long March 3C/G3", alt:"长征三号丙", ctry:"cn", m:"377000", pm:"9400/3900/2400",  d:"56.3x3.35", pf:"9.6x4.0", dt:"2014-10-23..", st:"3/2", th:"4443", fam:"Long March", desc:"l:xch;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-3C.png"},
//CZ-4B
"CZ-4B": {n:"Long March 4B", alt:"长征四号乙火箭", ctry:"cn", m:"249200", pm:"4200/1500/1000",  d:"45.8x3.35", pf:"x3.35", dt:"1999-05-10..", st:"3", ust:"", th:"2962", fam:"Long March", desc:"l:jiu,tai;ag:cnsa", fuel:"UDMH/N2O4", icon:"CZ-4B.png"},
//CZ-5
"CZ-5": {n:"Long March 5", alt:"长征五号运载火箭", ctry:"cn", m:"878560", pm:"25000/14000/8000",  d:"56.97x5", pf:"12x5.2", dt:"2016..", st:"2/4", ust:"YZ-2", th:"10572", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"LH2/LOX+KeroLOX", icon:"CZ-5.png"},
"CZ-5B": {n:"Long March 5B", alt:"长征五号乙运载火箭", ctry:"cn", m:"837500", pm:"22000/-/-",  d:"53.66x5", pf:"12x5.2", dt:"2020..", st:"1/4", ust:"", th:"10572", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"LH2/LOX+KeroLOX", icon:"CZ-5B.png"},
//CZ-7
"CZ-7": {n:"Long March 7", alt:"长征七号运载火箭", ctry:"cn", m:"597000", pm:"13500/5500/-", d:"53x3.35", pf:"12.7x4.2", dt:"2016..", st:"2/4", ust:"YZ-1A", th:"7200", fam:"Long March", desc:"l:wen;ag:cnsa", fuel:"KeroLOX", icon:"CZ-7.png"},
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
"Delta II 7326": {ctry:"us", m:"155000", pm:"2800/934/630",  d:"38.4x2.44", pf:"8.5-9.3x3.0", dt:"1998-10-24..", st:"2/3", ust:"Star-37FM", th:"2500", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7326.png"},
"Delta II 7326-9.5": {syn:"Delta II 7326"},
//Delta II 7425-9.5
"Delta II 7425": {ctry:"us", m:"170000", pm:"3150/1110/804",  d:"39x2.44", pf:"8.5-9.3x3.0", dt:"1998-12-11..", st:"2/4", ust:"Star-48B", th:"3020", fam:"Delta", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7425.png"},
"Delta II 7425-9.5": {syn:"Delta II 7425"},
//Delta II 7426-9.5
"Delta II 7426": {ctry:"us", m:"170000", pm:"3150/1058/711",  d:"39x2.44", pf:"8.5-9.3x3.0", dt:"1999-02-07..", st:"2/4", ust:"Star-37FM", th:"3020", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7426.png"},
"Delta II 7426-9.5": {syn:"Delta II 7426"},
//Delta II 7920-8
"Delta II 7920": {ctry:"us", m:"220000", pm:"4500/1750/790", d:"39x2.44", pf:"8.5-9.3x3.0", dt:"1995-11-04..", st:"2/9", ust:"", th:"4000", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7925.png"},
"Delta II 7920-8": {syn:"Delta II 7920"},
//Delta II 7920H-10
"Delta II 7920H": {ctry:"us", m:"283000", pm:"5500/2100/930",  d:"39x2.44", pf:"8.5-9.3x3.0", dt:"2003-08-25..2011-09-10", st:"2/9", ust:"", th:"5030", fam:"Delta", desc:"l:cap;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7920H.png"},
"Delta II 7920H-10": {syn:"Delta II 7920H"},
//Delta II 7925, Delta II 7925-10, Delta II 7925-10C, Delta II 7925-10L, Delta II 7925-8, Delta II 7925-9.5
"Delta II 7925": {ctry:"us", m:"2300000", pm:"5000/1820/1250",  d:"39x2.44", pf:"8.5-9.3x3.0", dt:"1990-11-26..", st:"2/9", ust:"Star-48B", th:"4000", fam:"Delta", desc:"l:cap,van;ag:nasa", fuel:"KeroLOX+SRP", icon:"Delta-7925.png"},
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
//Epsilon
"Epsilon": {ctry:"jp", m:"91000", pm:"1200/-/-",  d:"24.4x2.5", pf:"", dt:"2013-09-14..", st:"3", ust:"CLPS", th:"2271", fam:"Epsilon", desc:"l:uch;ag:jaxa", fuel:"SRP", icon:"epsilon1.png"},
//Epsilon
"Epsilon-2": {ctry:"jp", m:"96100", pm:"1500/-/500",  d:"26.0x2.5", pf:"", dt:"2016-12-20..", st:"3", ust:"CLPS", th:"2271", fam:"Epsilon", desc:"l:uch;ag:jaxa", fuel:"SRP", icon:"epsilon2.png"},
//Falcon 9
"Falcon 9": {ctry:"us", m:"506000", pm:"13150/4850/2473",  d:"69.2x3.65", pf:"13.1x5.2", dt:"2010-06-04..", st:"2", th:"5886", fam:"Falcon", desc:"l:cap,van;ag:spx", fuel:"KeroLOX", icon:"falcon-9v11.png"},
"Falcon 9 v1.1": {syn:"Falcon 9"},
"Falcon 9 v1.2": {ctry:"us", m:"549100", pm:"22800/8300/4020",  d:"70x3.65", pf:"13.1x5.2", dt:"2015-12-21..", st:"2", th:"7607", fam:"Falcon", desc:"l:cap,van;ag:spx", fuel:"KeroLOX+SRP", icon:"falcon-9v12.png"},
"Falcon Heavy": {ctry:"us", m:"1420800", pm:"63800/26700/16800",  d:"70.0x3.65", pf:"15.0x5.2", dt:"2018-02-06..", st:"2/2", th:"22819", fam:"Falcon", desc:"l:cap,van;ag:spx", fuel:"KeroLOX+SRP", icon:"falcon-h.png"},
//GSLV 2
"GSLV MkII": {n:"Geosynchronous Satellite Launch Vehicle Mk. II", alt:"भूस्थिर उपग्रह प्रक्षेपण यान", ctry:"ind", m:"402000", pm:"5000/2500/1300",  d:"49x2.8", pf:"", dt:"2010-04-15..", st:"2/4", ust:" CUS12", th:"7420", fam:"GSLV", desc:"l:sri;ag:isro", fuel:"SRP+UDMH/N2O4", icon:"gslv-mk2.png"},
"GSLV MkIII": {n:"Geosynchronous Satellite Launch Vehicle Mk. III", alt:"भूस्थिर उपग्रह प्रक्षेपण यान-३", ctry:"ind", m:"630000", pm:"10000/4000/2300",  d:"42.4x4", pf:"4.5", dt:"2014-12..", st:"2/2", ust:"C-25", th:"11300", fam:"GSLV", desc:"l:sri;ag:isro", fuel:"UDMH/N2O4+SRP", icon:"gslv-mk3.png"},
//H-IIA 202, H-IIA 2022
"H-IIA 202": {ctry:"jp", m:"289000", pm:"10000/4100/1600",  d:"53x4", pf:"12x5.1", dt:"2001-08-29..", st:"2/2", th:"5600", fam:"H-II", desc:"l:tng;ag:jaxa", fuel:"LH2/LOX+SRP", icon:"H2A-202.png"},
"H-IIA 2022": {ctry:"jp", m:"348000", pm:"-/5000/2000",  d:"53x4", pf:"12x5.1", dt:"2005-02-26..2007-09-14", st:"2/4", th:"8580", fam:"H-II", desc:"l:tng;g:jaxa", fuel:"LH2/LOX+SRP", icon:"H2A-2022.png"},
"H-IIA": {syn:"H-IIA 202"},
"H-IIB": {ctry:"jp", m:"531000", pm:"19000/8000/4000",  d:"56.6x5.2", pf:"13x5.2", dt:"2009-09-10..", st:"2/4", th:"11200", fam:"H-II", desc:"l:tng;ag:jaxa", fuel:"LH2/LOX+SRP", icon:"H2B.png"},
"H-III": {syn:"H-III 24L"},
"H-III 24L": {ctry:"jp", m:"574000", pm:"/6500/",  d:"63x5.27", pf:"13x5.3", dt:"2021..", st:"2/0..4", th:"11500", fam:"H-III", desc:"l:tng;ag:jaxa", fuel:"LH2/LOX+SRP", icon:"h3-24l.png"},
//Juno II
"Juno II": {ctry:"us", m:"55300", pm:"50/-/6",  d:"23.4x2.67", pf:"", dt:"1958-12-06..1961-05-24", st:"4", th:"667", fam:"Jupiter", desc:"l:cap;ag:nasa", fuel:"KeroLOX", icon:"Juno-2.png"},
//KSLV-II
"KSLV-II": {ctry:"sk", m:"200000", pm:"2600/-/500",  d:"47.5x3.3", pf:"", dt:"2018..", st:"3", th:"2275", fam:"KSLV", desc:"l:nar;ag:kari", fuel:"KeroLOX", icon:"kslv-2.png"},
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
//OmegA
"OmegA": {syn:"OmegA 500"},
"OmegA 500": {n:"", alt:"", ctry:"us", m:"", pm:"~30/4900..10100/-",  d:"59.8x3.7", pf:"5.3x15", dt:"2021..", st:"3/2-6", th:"12000", fam:"OmegA", desc:"ag:atk", fuel:"SRP/LH2+LOX", icon:"omega500.png"},
//Pegasus-XL
"Pegasus-XL": {n:"", alt:"", ctry:"us", m:"23269", pm:"475/175/-",  d:"17.6x6.7", pf:"2.2x1.1", dt:"1990-04-05..", st:"3/L-1011", th:"726", fam:"Pegasus", desc:"ag:atk", fuel:"SRP", icon:"pegasus-xl.png"},
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
"SLS 1": {n:"Space Launch System Block 1", ctry:"us", m:"2750000", pm:"70k/30k/26k", d:"98.1x8.4", pf:"", dt:"2019..", st:"2/2", ust:"iCPS", th:"39150", fam:"SLS", desc:"l:cap;ag:nasa", fuel:"LH2/LOX+SRP", icon:"sls-1.png"},
"SLS 1B": {n:"Space Launch System Block 1B", ctry:"us", m:"2850000", pm:"105k/46k/34k",  d:"110.9x8.4", pf:"27.4x8.4", dt:"2023..", st:"2/2", ust:"EUS", th:"39150", fam:"SLS", desc:"l:cap;ag:nasa", fuel:"LH2/LOX+SRP", icon:"sls-1b.png"},
"SLS 2": {n:"Space Launch System Block 2", ctry:"us", m:"2950000", pm:"130k/64k/45k",  d:"111.6x8.4", pf:"27.4x10.0", dt:"2028..", st:"2/2", ust:"EUS", th:"52900", fam:"SLS", desc:"l:cap;ag:nasa", fuel:"LH2/LOX+SRP?", icon:"sls-2.png"},
//Soyuz 2.1a, Soyuz 2.1b, Soyuz-FG Fregat, Soyuz 2-1A Volga
"Soyuz 2.1": {alt:"Союз 2.1", ctry:"ru,eu", m:"313000", pm:"7600/3000/1200",  d:"46.3x2.95", pf:"", dt:"2006-10-19..", st:"2/4", ust:"Fregat/Volga", th:"4146", fam:"R-7", desc:"l:bai,ple,kou;ag:rosc,esa", fuel:"KeroLOX", icon:"Soyuz-ST.png"},
"Soyuz 2.1A": {syn:"Soyuz 2.1"},
"Soyuz 2.1B": {syn:"Soyuz 2.1"},
"Soyuz STA": {syn:"Soyuz 2.1"},
"Soyuz STB": {syn:"Soyuz 2.1"},
"Soyuz-FG": {alt:"Союз-ФГ", ctry:"ru", m:"308000", pm:"7200/2400/1200",  d:"46x2.95", pf:"", dt:"2003-06-02..2012-07-22", st:"2/4", ust:"Fregat", th:"4146", fam:"R-7", desc:"l:bai", fuel:"KeroLOX", icon:"Soyuz-FG.png"},
"Soyuz-5": {alt:"Союз-5", ctry:"ru", m:"530000", pm:"18000/4500/2300",  d:"65.9x4.1", pf:"", dt:"2024", st:"2", ust:"DM-3", th:"7257", fam:"", desc:"l:bai", fuel:"KeroLOX", icon:"soyuz-5.png"},
//STS-30 Atlantis/IUS, STS-34 Atlantis/IUS, STS-41 Discovery/PAM-S
"STS": {n:"Space Shuttle", ctry:"us", m:"2040000", pm:"24400/4944/3550",  d:"56x23.8", pf:"18.3x4.6", dt:"1981-04-12..2011-07-08", st:"1/2", ust:"IUS/PAM-S", th:"28200", fam:"STS", desc:"l:ksc;ag:nasa", fuel:"LH2/LOX+SRP", icon:"STS.png"},
"STS-30 Atlantis": {syn:"STS"},
"STS-34 Atlantis": {syn:"STS"},
"STS-41 Discovery": {syn:"STS"},
//Thor-Able I, Thor-Able IV
"Thor-Able": {ctry:"us", m:"52000", pm:"100/-/40",  d:"27x2.44", pf:"", dt:"1958-04-24..1960-04-01", st:"3", th:"700", fam:"Thor/Delta", desc:"l:cap;ag:nasa", fuel:"KeroLOX", icon:"Thor-Able.png"},
"Thor-Able I": {syn:"Thor-Able"},
"Thor-Able IV": {syn:"Thor-Able"},
//Titan 401B-Centaur T, Titan IIG, Titan III/TOS, Titan IIIE-Centaur D1T
"Titan 401B Centaur T": {ctry:"us", m:"939000", pm:"21900/9000/8600",  d:"62.2x3.05", pf:"17-26x4.5", dt:"1997-10-15..2003-09-09", st:"3/2", ust:"", th:"15000", fam:"Titan", desc:"l:cap;ag:nasa", fuel:"A50/N2O4+SRP", icon:"Titan-4B.png"},
"Titan IIG": {ctry:"us", m:"150000", pm:"3600/-/1000",  d:"32.8x3.05", pf:"", dt:"1988-09-05..2003-10-18", st:"2", ust:"Star-37FM", th:"2090", fam:"Titan", desc:"l:van;ag:nasa,usn", fuel:"A50/N2O4", icon:"Titan-23G.png"},
"Titan III": {ctry:"us", m:"680000", pm:"14742/4990/4000",  d:"47.3x3.05", pf:"12.4-16x3.6", dt:"1990-01-01..1992-09-25", st:"2/2", ust:"TOS", th:"12450", fam:"Titan", desc:"l:cap;ag:nasa", fuel:"A50/N2O4+SRP", icon:"Titan-3.png"},
"Titan IIIE Centaur D1T": {ctry:"us", m:"633000", pm:"17000/6800/5000",  d:"48.8x3.05", pf:"12.4-16x3.6", dt:"1974-02-12..1977-09-05", st:"3/2", ust:"Star-37E", th:"10600", fam:"Titan", desc:"l:cap;ag:nasa", fuel:"A50/N2O4+SRP", icon:"Titan-3E.png"},
//Vega
"Vega": {alt:"", ctry:"eu", m:"139000", pm:"2300/-/",  d:"30x3", pf:"7.88x2.6", dt:"2012-02-13..", st:"3", ust:"AVUM", th:"2261", fam:"", desc:"l:kou;ag:esa", fuel:"SRP", icon:"vega.png"},
//Vostok-L 8K72
"Vostok-L 8K72": {alt:"Восток-Л", ctry:"su", m:"279100", pm:"4000/-/400",  d:"33.5x2.95", pf:"", dt:"1958-09-23..1960-04-16", st:"1/4", ust:"Blok-E", th:"3998", fam:"R-7", desc:"l:bai;ag:okb", fuel:"KeroLOX", icon:"Luna.png"},
// Vulcan
"Vulcan": {syn:"Vulcan-Centaur"},
"Vulcan-Centaur": {ctry:"us", m:"546700", pm:"18850/15100/",  d:"58.3x5.4", pf:"x5.4", dt:"2019..", st:"2/0-6", ust:"", th:"12520", fam:"Vulcan", desc:"l:cap;van;ag:nasa", fuel:"CH4/Lox+SRP",  icon:"Vulcan1.png"},
//Zenit 2SB
"Zenit 2SB": {alt:"Зенит-2SLБ", ctry:"ru", m:"459000", pm:"13500/5200/2000",  d:"57x3.9", pf:"", dt:"2007-06-29..", st:"2", ust:"Fregat-SB", th:"7259", fam:"Zenit", desc:"l:bai", fuel:"KeroLOX", icon:"Zenit-2.png"},
"Zenit 2M": {syn:"Zenit 2SB"}
};
