var shell = require('shelljs/global'),
    vm = require('vm'),
    ug = require('uglify-js'),
    //wr = require('wrench'),
    fs = require('fs-extra'),
    version = '';

vm.runInThisContext(fs.readFileSync('data/config.js', 'utf-8'), 'config.js');

version = SSEH.VERSION;

echo('building ' + version);

echo('data.js');

var dat = cat([
  './data/config.js',
  './data/data.js',
  './data/common.js',
  './data/probes.js',
  './data/objects.js',
  './data/lv.js',
  './data/lc.js',
  './data/elements.js'
]);

//dat = dat.replace(/PATH\: \"\.\.\/res\/\"/, "PATH:''");

var out = ug.minify(dat, {fromString: true});
fs.writeFileSync('./data.js', out.code);


echo('app.js');

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
]);


var out = ug.minify(app, {fromString: true});
fs.writeFileSync('./app.js', out.code);


echo('copy files');

//cp('-Rf', ['./index.html', './hist.png', './lo.png'], './pub');
//cat('./style.css').to('./pub/style-' + version + '.css');

var diag='<!DOCTYPE html><html><head><title>History of Solar System Exploration %ver%</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="stylesheet" media="screen" href="style.css" type="text/css"><script type="text/javascript" src="data.js"></script><script type="text/javascript" src="app.js"></script><script type="text/javascript">function init() {var img, param, height; param=Hist.init(); height=window.innerHeight; if (!param.c) { img=new Image(); img.src="images/hist.png"; img.style.width=px(param.w); img.style.height="auto"; img.style.position="absolute"; img.style.top=px(0); param.p.appendChild(img); } else {  setTimeout(Hist.load, 100); } }</script></head><body onload="init()"><noscript> Please enable javascript in your browser.</noscript></body></html>'.replace(/%ver%/g, version);

fs.writeFileSync('./diag.html', diag);


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


