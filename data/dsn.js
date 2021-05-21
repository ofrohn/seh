/* global UI, SSEH, Common, Parse, Create, Read, Cdraw, Trig, px */

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

