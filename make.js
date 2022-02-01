var shell = require('shelljs/global'),
    vm = require('vm'),
    ug = require('uglify-js'),
    //wr = require('wrench'),
    fs = require('fs-extra'),
    version = '';

vm.runInThisContext(fs.readFileSync('data/config.js', 'utf-8'), 'config.js');

version = SSEH.VERSION;
var shortversion = version.replace(/\.\d+$/, '');

echo('building ' + version);

echo('seh-data.js');

var dat = cat([
  './data/config.js',
  './data/data.js',
  './data/common.js',
  './data/probes.js',
  './data/objects.js',
  './data/lv.js',
  './data/lc.js',
  './data/dsn.js',
  './data/elements.js'
]).toString();

//echo('data');

fs.writeFileSync('./seh-data.js', dat);

//echo('min');

var out = ug.minify(dat, {fromString: true});

if (out.error) echo(out.error);

fs.writeFileSync('./seh-data.min.js', out.code);

dat = dat.replace(/PATH\: \"(.*?\/)\"/, "PATH:'../$1'");
var out = ug.minify(dat, {fromString: true});
fs.writeFileSync('./pub/seh-data-' + shortversion + '.min.js', out.code);


echo('seh-app.js');

var app = cat([
  './src/canvas.js',
  './src/math.js',
  './src/ui.js',
  './src/utils.js',
  './src/parse.js',
  './src/hist.js',
  './src/mission.js',
  './src/destination.js',
  './src/moons.js',
  './src/panel.js',
  './src/info.js',
  './src/launch.js',
  './src/pos.js'
]).toString();


var out = ug.minify(app, {fromString: true});

if (out.error) echo(out.error);

fs.writeFileSync('./seh-app.min.js', out.code);
fs.writeFileSync('./seh-app.js', app);
fs.writeFileSync('./pub/seh-app-' + shortversion + '.min.js', out.code);

echo('obs-data.js');

var dat = cat([
  './data/common.js',
  './data/config-obs.js',
  './data/data-obs.js',
  './data/scopes.js',
  './data/lv.js',
]).toString();

var out = ug.minify(dat, {fromString: true});

if (out.error) echo(out.error);

fs.writeFileSync('./obs-data.min.js', out.code);
fs.writeFileSync('./obs-data.js', dat);

echo('obs-app.js');

var app = cat([
  './src/canvas.js',
  './src/math.js',
  './src/ui.js',
  './src/utils.js',
  './src/parse.js',
  './src/obs.js',
  './src/sobs.js',
  './src/diag.js'
]).toString();

var out = ug.minify(app, {fromString: true});

if (out.error) echo(out.error);

fs.writeFileSync('./obs-app.js', app);
fs.writeFileSync('./obs-app.min.js', out.code);


echo('copy files');

//cp('-Rf', ['./index.html', './hist.png', './lo.png'], './pub');
//cat('./style.css').to('./pub/style-' + version + '.css');

var diag='<!DOCTYPE html><html><head><title>History of Solar System Exploration %ver1%</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="stylesheet" media="screen" href="%path%seh.css" type="text/css"><script type="text/javascript" src="seh-data%ver2%.min.js"></script><script type="text/javascript" src="seh-app%ver2%.min.js"></script><script type="text/javascript">function init() {var img, param, height; param=Hist.init(); height=window.innerHeight; if (!param.c) { img=new Image(); img.src="images/hist.png"; img.style.width=px(param.w); img.style.height="auto"; img.style.position="absolute"; img.style.top=px(0); param.p.appendChild(img); } else {  setTimeout(Hist.load, 100); } }</script></head><body onload="init()"><noscript> Please enable javascript in your browser.</noscript></body></html>';

var d1 = diag.replace(/%ver1%/g, version).replace(/%ver2%/g, '').replace(/%path%/g, '');
fs.writeFileSync('./diag.html', d1);

var d2 = diag.replace(/%ver1%/g, version).replace(/%ver2%/g, '-' + shortversion).replace(/%path%/g, '../');
fs.writeFileSync('./pub/diag-' + shortversion + '.html', d2);

echo('copy data');
var opt = {preserveTimestamps:true};

fs.emptyDirSync('./images/res');
fs.copySync('../../blog/res/res/', './images/res', opt);
fs.emptyDirSync('./images/probes');
fs.copySync('../../blog/res/probes/', './images/probes', opt);
fs.emptyDirSync('./images/planets');
fs.copySync('../../blog/res/planets/', './images/planets', opt);
fs.emptyDirSync('./images/maps');
fs.copySync('../../blog/res/maps/', './images/maps', opt);
fs.emptyDirSync('./images/lv');
fs.copySync('../../blog/res/lv/', './images/lv', opt);
fs.emptyDirSync('./images/lc');
fs.copySync('../../blog/res/lc/', './images/lc', opt);


echo('done');


