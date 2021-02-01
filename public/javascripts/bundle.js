(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
module.exports=[{"paralel":0,"meridyen":0,"isim":["Ağaçlık"],"konum":[0,0],"icindekiler":[],"tanım":[null,["Ağaçlık"]],"ziyaretEdildi":false},{"paralel":0,"meridyen":1,"isim":["Ağaçlık"],"konum":[0,1],"icindekiler":[],"tanım":[null,["Ağaçlık"]],"ziyaretEdildi":false},{"paralel":0,"meridyen":2,"isim":["Ağaçlık"],"konum":[0,2],"icindekiler":[],"tanım":[null,["Ağaçlık"]],"ziyaretEdildi":false},{"paralel":0,"meridyen":3,"isim":["Ağaçlık"],"konum":[0,3],"icindekiler":[],"tanım":[null,["Ağaçlık"]],"ziyaretEdildi":false},{"paralel":0,"meridyen":4,"isim":"Asfalt yol","konum":[0,4],"icindekiler":[],"tasvir":"Önünde asfalt yol uzanıyor, muhtemelen şehre gidiyor, herkesin bahsettiği büyük şehre...","tanım":["Önünde asfalt yol uzanıyor, muhtemelen şehre gidiyor, herkesin bahsettiği büyük şehre...","Asfalt yol"],"ziyaretEdildi":false},{"paralel":0,"meridyen":5,"isim":"Asfalt yol","konum":[0,5],"icindekiler":[],"tasvir":"Önünde asfalt yol uzanıyor, muhtemelen şehre gidiyor, herkesin bahsettiği büyük şehre...","tanım":["Önünde asfalt yol uzanıyor, muhtemelen şehre gidiyor, herkesin bahsettiği büyük şehre...","Asfalt yol"],"ziyaretEdildi":false},{"paralel":0,"meridyen":6,"isim":"Asfalt yol","konum":[0,6],"icindekiler":[],"tasvir":"Önünde asfalt yol uzanıyor, muhtemelen şehre gidiyor, herkesin bahsettiği büyük şehre...","tanım":["Önünde asfalt yol uzanıyor, muhtemelen şehre gidiyor, herkesin bahsettiği büyük şehre...","Asfalt yol"],"ziyaretEdildi":false},{"paralel":1,"meridyen":0,"isim":["Bizim ev"],"konum":[1,0],"icindekiler":[],"tanım":[null,["Bizim ev"]],"ziyaretEdildi":false},{"paralel":1,"meridyen":1,"isim":["Ağaçlık"],"konum":[1,1],"icindekiler":[],"tanım":[null,["Ağaçlık"]],"ziyaretEdildi":false},{"paralel":1,"meridyen":2,"isim":["Ağaçlık"],"konum":[1,2],"icindekiler":[],"tanım":[null,["Ağaçlık"]],"ziyaretEdildi":false},{"paralel":1,"meridyen":3,"isim":["Ağaçlık"],"konum":[1,3],"icindekiler":[],"tanım":[null,["Ağaçlık"]],"ziyaretEdildi":false},{"paralel":1,"meridyen":4,"isim":"Patika","konum":[1,4],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":1,"meridyen":5,"isim":"Patika","konum":[1,5],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":1,"meridyen":6,"isim":"Muhtarın evi","konum":[1,6],"icindekiler":[],"tasvir":"Muhtar burada. Gece gündüz evde takılıyor","tanım":["Muhtar burada. Gece gündüz evde takılıyor","Muhtarın evi"],"ziyaretEdildi":false},{"paralel":2,"meridyen":0,"isim":["Kaldırım"],"konum":[2,0],"icindekiler":[],"tanım":[null,["Kaldırım"]],"ziyaretEdildi":false},{"paralel":2,"meridyen":1,"isim":["Kaldırım"],"konum":[2,1],"icindekiler":[],"tanım":[null,["Kaldırım"]],"ziyaretEdildi":false},{"paralel":2,"meridyen":2,"isim":["Ağaçlık"],"konum":[2,2],"icindekiler":[],"tanım":[null,["Ağaçlık"]],"ziyaretEdildi":false},{"paralel":2,"meridyen":3,"isim":"Patika","konum":[2,3],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":2,"meridyen":4,"isim":"Patika","konum":[2,4],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":2,"meridyen":5,"isim":["Ağaçlık"],"konum":[2,5],"icindekiler":[],"tanım":[null,["Ağaçlık"]],"ziyaretEdildi":false},{"paralel":3,"meridyen":0,"isim":["Kasap"],"konum":[3,0],"icindekiler":[],"tanım":[null,["Kasap"]],"ziyaretEdildi":false},{"paralel":3,"meridyen":1,"isim":["Köfteci"],"konum":[3,1],"icindekiler":[],"tanım":[null,["Köfteci"]],"ziyaretEdildi":false},{"paralel":3,"meridyen":2,"isim":"Patika","konum":[3,2],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":3,"meridyen":3,"isim":"Patika","konum":[3,3],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":3,"meridyen":4,"isim":["fırın"],"konum":[3,4],"icindekiler":[],"tanım":[null,["fırın"]],"ziyaretEdildi":false},{"paralel":3,"meridyen":5,"isim":["Kahvehane"],"konum":[3,5],"icindekiler":[],"tanım":[null,["Kahvehane"]],"ziyaretEdildi":false},{"paralel":4,"meridyen":0,"isim":"Patika","konum":[4,0],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":4,"meridyen":1,"isim":"Patika","konum":[4,1],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":4,"meridyen":2,"isim":"Patika","konum":[4,2],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":4,"meridyen":3,"isim":"Patika","konum":[4,3],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":4,"meridyen":4,"isim":"Bakkal","konum":[4,4],"icindekiler":[],"tasvir":"Bakkal Rıza abi. Eskiden bu dükkanda herşey olurdu.","tanım":["Bakkal Rıza abi. Eskiden bu dükkanda herşey olurdu.","Bakkal"],"ziyaretEdildi":false},{"paralel":5,"meridyen":0,"isim":"Mezarlık","konum":[5,0],"icindekiler":[],"tasvir":"Küçük bir köy mezarlığı, deden burada yatıyor.","tanım":["Küçük bir köy mezarlığı, deden burada yatıyor.","Mezarlık"],"ziyaretEdildi":false},{"paralel":5,"meridyen":1,"isim":"Patika","konum":[5,1],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":5,"meridyen":2,"isim":"Patika","konum":[5,2],"icindekiler":[],"tasvir":"Köyün patika yolları","tanım":["Köyün patika yolları","Patika"],"ziyaretEdildi":false},{"paralel":5,"meridyen":3,"isim":"Park","konum":[5,3],"icindekiler":[],"tasvir":"Burası köyün tek parkı. Çocukken burada Abdullah ile oynardınız.","tanım":["Burası köyün tek parkı. Çocukken burada Abdullah ile oynardınız.","Park"],"ziyaretEdildi":false}]
},{}],3:[function(require,module,exports){
(function (process){(function (){
"use strict";
///İmportlar
const data = require('./dönüştürülmüşHarita.json');
const sınıflar = require('./sınıflar');
const temelFonksiyonlar = require('./temel fonksiyonlar');


//DOCUMENT ELEMENTLERİ OLUŞTURMA VE BELGEYE EKLEME
// ileride kullanılacak indeks variablelar
let i;
let j;
let k;
let l;

//INTRO VE MENU
//CSS STYLE'lar
//Rakamın başına 0 ekleme (saat için)
Number.prototype.zeroPad = function() {
    return ('0'+this).slice(-2);
 };
//DOM elementini merkezleme (menü butonları için)
HTMLElement.prototype.centre = function(){
    var w = document.documentElement.clientWidth,
        h = document.documentElement.clientHeight;
    this.style.position = 'absolute';
    this.style.left = (w - this.offsetWidth)/2 + 'px';
    this.style.top = (h - this.offsetHeight)/2 + window.pageYOffset + 'px';
  }

//tüm belgenin arka fonunu siyah yapma
document.body.style.backgroundColor = "black";



//chrome'un autoloop engelleme özelliğini kaldırmak için sessiz bir iframe yaratıp ekliyoruz
let iframeYarat = document.createElement('iframe'); iframeYarat.id ='iframeYarat';
iframeYarat.src = '/statik/sesler/müzikler/silence.mp3'; 
iframeYarat.allow = 'autoplay';
iframeYarat.style.display = 'none';
document.body.appendChild(iframeYarat);
let iframeSessiz = document.getElementById('iframeYarat')

//oyun intro müzik loopu

let koyLoop = new temelFonksiyonlar.sound('/images/statik/sesler/müzikler/looperman-l-0623169-0240428-drop-splash-rod-wave-tjay-part1-nofuk.wav');
koyLoop.play();
koyLoop.volume(0.03);
koyLoop.loop = 'loop';

//MENÜ
//oyun introsu için introDiv elementi
let introYarat = document.createElement("div"); introYarat.id = "introDiv"; 
document.body.appendChild(introYarat); 
let introDiv = document.getElementById('introDiv');

//introDiv'e menü butonları yaratma
let butonYarat = document.createElement('button'); butonYarat.id = 'menuButon';

//Menü butonlarının css ayarı
//merkezleme
butonYarat.centre();

//Menü butonlarına buton ekleme
introDiv.appendChild(butonYarat);
let menuButon = document.getElementById('menuButon');
menuButon.innerText = 'BAŞLA';
menuButon.addEventListener('click', function(){
    //Oyunu başlatma
    anaOyun();
    //butonu silme
    menuButon.remove();
})

//INTRO BİTİMİ


//ANA OYUN
function anaOyun(){

//intro müziğini durdurma
koyLoop.stop();

//saati saracak saatDiv elementi
let saatYarat = document.createElement('div'); saatYarat.id='saatDiv';
document.body.appendChild(saatYarat); 
let saatDiv = document.getElementById('saatDiv');

//kanvas ve içine resim
let kanvasYarat = document.createElement("canvas"); kanvasYarat.id="kanvas";  
introDiv.appendChild(kanvasYarat); 
let kanvas = document.getElementById('kanvas');
let resim = kanvas.getContext('2d');

//herşeyi kapsar div
let herseyDivYarat = document.createElement('div'); herseyDivYarat.id = 'herseyDiv';
document.body.appendChild(herseyDivYarat);
let herseyDiv = document.getElementById('herseyDiv');

//saat elementi
let akrepYelkovanYarat = document.createElement('p'); akrepYelkovanYarat.id='akrepYelkovan'; 
saatDiv.appendChild(akrepYelkovanYarat); 
let akrepYelkovan = document.getElementById('akrepYelkovan');


//resim oluşturma değişkeni
let kanvasResim = new Image();

//herseyDiv'e oyun metinlerinin girileceği 'metinAkis' div ekleme
let metinAkisYarat = document.createElement('div'); metinAkisYarat.id = 'metinAkisDiv';
herseyDiv.appendChild(metinAkisYarat);
let metinAkisDiv = document.getElementById('metinAkisDiv');

//herseyDiv'e Player'ın konulması
let playerDivYarat = document.createElement('div'); playerDivYarat.id='playerEkran';
herseyDiv.appendChild(playerDivYarat);
let playerEkran = document.getElementById('playerEkran');


//kanvas css style
kanvas.style.height = 'auto'; 
kanvas.style.width = '76%';
kanvas.style.display = 'none';

//saat elementinin css style'ı
saatDiv.style.color = 'white';

//herseyDiv elementinin style'ı
herseyDiv.style.width = '500px';

//playerEkran elementinin fontlarını beyaz yapar, borderlarını yeşil yapar
playerEkran.style.color = 'white';
playerEkran.style.borderStyle = 'solid';
playerEkran.style.width = '200 px';
playerEkran.style.borderWidth='1px 1px';
playerEkran.style.borderColor = 'green';
playerEkran.style.float = 'left';

//metinAkisDiv elementinin fontlarını beyaz yapar, borderlarını kırmızı yapar
metinAkisDiv.style.color = 'white';
metinAkisDiv.style.borderStyle = 'solid';
metinAkisDiv.style.width = '300 px';
metinAkisDiv.style.borderWidth="1px 1px"
metinAkisDiv.style.borderColor = 'blue';
metinAkisDiv.style.float = 'left';



//OYUN DİNAMİKLERİ
//harita
let oyunHarita = JSON.parse(JSON.stringify(data));

//oyuncunu nesnesi 
let player = new sınıflar.İnsan(1, 0, 'Mehmet');
player.yaş = 33;
player.envanter = ['taş'];
player.güç = 10;
player.hp = 10;

//oyuncu konumunu haritadan kontrol edecek geçici değişken
let temporary;

//resim oluşturma fonksiyonu
kanvasaResimEkle();
function kanvasaResimEkle(){
    kanvasResim.src = '/images/statik/resimler/harita.png';
    kanvasResim.onload = function () {
        resim.drawImage(kanvasResim, 0, 0, kanvas.width, kanvas.height);
    };
};


//oyun saatini belirleyen akrepYelkovan nesnesi
let Saat = {
    saat : 0,
    dakika: 0,

    //hamledeSaatGeçir metodu ile her hamlede saat 10 dakika geçer
    hamledeSaatGeçir(){
        
        this.dakika += 1;
        
        if(this.dakika === 6){
            this.saat +=1;
            this.dakika = 0;
        };

        if(this.saat === 24){
            this.saat = 0;
        };
        //saat 10'dan küçükse saat hanesinin başına 0 ekleme, öyle return etme
        if(this.saat.toString().length < 2){
            return this.saat.zeroPad()+ ":" + this.dakika + "0";
        };

        return this.saat + ":" + this.dakika + "0";
    }
};


//array kıyaslama
function arrayComparison (ar1, ar2){
    if(JSON.stringify(ar1) === JSON.stringify(ar2)){
        return true
    }else{return false}
}

//HER HAREKETTE GERÇEKLEŞECEK FONKSİYONLAR
//klavyede 'w' tuşuna basılınca
function hareketW(){
    temporary =[...player.konum];
    temporary[0]++;
    if(haritadanKıyas(temporary, oyunHarita)){
        player.konum = [...temporary];
        process();
    }
}
//klavyede 's' tuşuna basılınca
function hareketS(){
    temporary =[...player.konum];
    temporary[0]--;
    if(haritadanKıyas(temporary, oyunHarita)){
        player.konum = [...temporary];
        process();
    };
        
} 
//klavyede 'a' tuşuna basılınca
function hareketA(){
    temporary =[...player.konum];
    temporary[1]--;
    if(haritadanKıyas(temporary, oyunHarita)){
        player.konum = [...temporary];
        process();
    };
        
}
//klavyede 'd' tuşuna basılınca
function hareketD(){
    temporary =[...player.konum];
    temporary[1]++;
    if(haritadanKıyas(temporary, oyunHarita)){
        player.konum = [...temporary];
        process();
    };
        
}   

//Tüm fonksiyonları toplayan hareket fonksiyonu
function hareket(event){
    if (event.key === 'w') { 
        hareketW()
    }
    else if (event.key === 's') {
        hareketS()
    }  
    else if (event.key === 'a') {
        hareketA()
    }
    else if (event.key === 'd') {
        hareketD()
    } 
      
}

//haritadan paralel-meridyen kıyaslar
function haritadanKıyas (oyuncukonum, harita){
    for (j = 0; j < harita.length; j++){
        //arrayComparison ile aldığı argümanların eşitliğini kıyaslar
        if(arrayComparison(oyuncukonum, harita[j].konum)){
            return true;
        }
    };
    return false;
}

//haritadan konum kontrol eder, tanım çıkarır
function konumOkuma (arrayArgument, arrayOfArrays){
    for (j = 0; j < arrayOfArrays.length; j++){
        if(arrayComparison(arrayArgument, arrayOfArrays[j].konum)){
            if (!arrayOfArrays[j].ziyaretEdildi){
                arrayOfArrays[j].ziyaretEdildi = true;
                return arrayOfArrays[j].tanım;
            };
            return arrayOfArrays[j].isim;
        }
    };
    }

//koordinatlardaki tanımı metinAkisDiv elementine yazdırır
function process() {
    //setttimeout ile yarım saniye bekletme
    setTimeout(function() {
        metinAkisDiv.innerText = (konumOkuma(player.konum, oyunHarita));}, 500);

    akrepYelkovan.innerText = '';
    akrepYelkovan.innerText = Saat.hamledeSaatGeçir()
    metinAkisDiv.innerText = '';
};



document.addEventListener('keydown', function(event) {
    hareket(event);
    }
)

//ilk el konum ve saat
metinAkisDiv.innerText = konumOkuma(player.konum, oyunHarita);
akrepYelkovan.innerText = Saat.saat.zeroPad()+ ":" + Saat.dakika + "0";
}
}).call(this)}).call(this,require('_process'))
},{"./dönüştürülmüşHarita.json":2,"./sınıflar":4,"./temel fonksiyonlar":5,"_process":1}],4:[function(require,module,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///SINIFLAR



// Oyunun temelini oluşturan nesneler
class Nesne {
    constructor(paralel, meridyen, isim){
        this.paralel = paralel;
        this.meridyen = meridyen;
        this.isim = isim;
        this.konum = [this.paralel, this.meridyen];
        this.icindekiler = [];
    };
};
class Araç extends Nesne {
    en;
    boy;
    genislik;
    agirlik;
    hp;
}

class DenizAracı extends Araç{
    hız;
    kapasite;
}

// Harita Parsel nesnesi
class Parsel extends Nesne {
    tasvir;
    ziyaretEdildi = false;
};

class GeçilmezParsel extends Parsel{
    geçilmez = true;
    gereklilik = [];
};

class Deniz extends GeçilmezParsel{
    denizAracıKontrol (obje){
        if(obje.constructor.name === 'DenizAracı'){
            return true;
        };
    };
    gereklilik = [this.denizAracıKontrol(obje)];
}

class KapalıMekan extends GeçilmezParsel {

    git(istikamet){
        return istikamet;
    };
    icindekiler =   [{'Gir':git(iceri)}, 
                    {'Çıkış':anaOyun()}];
    iceri = {
            icindekiler : [{'Çıkış':anaOyun()}]
            };
};

class İnsan extends Nesne{
    yaş;
    güç;
    hp;
    tasvir;
    tanımla(){
        return `${this.tasvir}
        ${this.yaş} yaşlarında`
    };
    icindekiler = [];
    
    envanter = [];
    saldır(kim) {
        savaş(this, kim)
    };
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {Nesne, İnsan}
},{}],5:[function(require,module,exports){
///FONKSİYONLAR
//ses oluşturma sınıfı (arka fon müziği için)
let sound = function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.loop = 'loop';
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
    this.volume = function(vol){
        this.sound.volume = vol;
    }
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
};

function savaş(taraf1, taraf2){
    taraf1.hareket();
    taraf2.hareket();
}
//array'den rastgele bir element seç
function arraydenRastgeleElementSec(array){
    return array[Math.floor(Math.random() * Math.floor(array.length-1))];
};

//sonraki diyaloga ilerle
function diyalogİlerlet(sonrakiDiyalog){
    return sonrakiDiyalog.diyaloglar.forEach(element => {
        sonrakiDiyalog.diyaloglar[element];
    });
};

let girişKonuşması = {
    diyaloglar : ["Selam", "Selamın aleyküm", "Merhaba", "İyi günler", "Selam beyim"],
};

let gelişmeKonuşması = { 
    diyaloglar : [["Ticaret yapalım mı?[Ticaret]", 'Para kazanmaya ne dersin?[Ticaret]', 'Elinde güzel şeyler varsa alabilirim.[Ticaret]'],
    ["Şu an meşgulüm", "Konuşmaktan önemli işlerim var", "Kusura bakma müsait değilim birader."]],
};

let sonuçKonuşması = {
    diyaloglar : ["Hoşçakal.", "İyi günler", "Seni tanımak güzeldi"],
};

module.exports = {sound}
},{}]},{},[3]);
