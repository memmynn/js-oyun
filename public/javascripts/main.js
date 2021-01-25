"use strict";

//DOCUMENT ELEMENTLERİ OLUŞTURMA VE BELGEYE EKLEME
// ileride kullanılacak indeks variablelar
let i;
let j;
let k;
let l;

//INTRO VE MENU
//CSS STYLE'lar
//DOM elementini merkezleme
HTMLElement.prototype.centre = function(){
    var w = document.documentElement.clientWidth,
        h = document.documentElement.clientHeight;
    this.style.position = 'absolute';
    this.style.left = (w - this.offsetWidth)/2 + 'px';
    this.style.top = (h - this.offsetHeight)/2 + window.pageYOffset + 'px';
  }

//tüm belgenin arka fonunu siyah yapma
document.body.style.backgroundColor = "black";

//ses oluşturma sınıfı
function sound(src) {
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
}

//chrome'un autoloop engelleme özelliğini kaldırmak için sessiz bir iframe yaratıp ekliyoruz
let iframeYarat = document.createElement('iframe'); iframeYarat.id ='iframeYarat';
iframeYarat.src = '/public/images/statik/sesler/müzikler/silence.mp3'; 
iframeYarat.allow = 'autoplay';
iframeYarat.style.display = 'none';
document.body.appendChild(iframeYarat);
let iframeSessiz = document.getElementById('iframeYarat')

//oyun intro müzik loopu
let koyLoop = new sound('/public/images/statik/sesler/müzikler/looperman-l-0623169-0240428-drop-splash-rod-wave-tjay-part1-nofuk.wav');
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

introDiv.appendChild(butonYarat);
let menuButon = document.getElementById('menuButon');
menuButon.innerText = 'BAŞLA';
menuButon.addEventListener('click', function(){
    anaOyun();
    menuButon.remove();
})

//INTRO BİTİMİ

//ANA OYUN
function anaOyun(){
koyLoop.stop();
//saati saracak saatDiv elementi
let saatYarat = document.createElement('div'); saatYarat.id='saatDiv';
document.body.appendChild(saatYarat); 
let saatDiv = document.getElementById('saatDiv');

//saat elementi
let saatAkrepYarat = document.createElement('p'); saatAkrepYarat.id='saatAkrep'; 
saatDiv.appendChild(saatAkrepYarat); 
let saatAkrep = document.getElementById('saatAkrep');

//kanvas ve içine resim
let kanvasYarat = document.createElement("canvas"); kanvasYarat.id="kanvas";  
introDiv.appendChild(kanvasYarat); 
let kanvas = document.getElementById('kanvas');
let resim = kanvas.getContext('2d');

//resim oluşturma değişkeni
let kanvasResim = new Image();

//belgeye oyun metinlerinin girileceği 'metinAkis' div ekleme
let metinAkisYarat = document.createElement('div'); metinAkisYarat.id = 'metinAkisDiv';
document.body.appendChild(metinAkisYarat);
let metinAkisDiv = document.getElementById('metinAkisDiv')

//kanvas css style
kanvas.style.height = 'auto'; 
kanvas.style.width = '76%';

//saat elementinin css style'ı
saatAkrep.style.color = 'white';

//metinAkisDiv elementinin fontlarını beyaz yapar
metinAkisDiv.style.color = 'white'

//OYUN DİNAMİKLERİ
//harita
let oyunHarita = [{"tanım":"Ağaçlık","konum":[0,0]},{"tanım":"Ağaçlık","konum":[0,1]},{"tanım":"Ağaçlık","konum":[0,2]},{"tanım":"Ağaçlık","konum":[0,3]},{"tanım":"Asfalt yol","konum":[0,4]},{"tanım":"Asfalt yol","konum":[0,5]},{"tanım":"Asfalt yol","konum":[0,6]},{"tanım":"Bizim ev","konum":[1,0]},{"tanım":"Ağaçlık","konum":[1,1]},{"tanım":"Ağaçlık","konum":[1,2]},{"tanım":"Ağaçlık","konum":[1,3]},{"tanım":"Yol","konum":[1,4]},{"tanım":"Yol","konum":[1,5]},{"tanım":"Muhtarın evi","konum":[1,6]},{"tanım":"Kaldırım","konum":[2,0]},{"tanım":"Kaldırım","konum":[2,1]},{"tanım":"Ağaçlık","konum":[2,2]},{"tanım":"Yol","konum":[2,3]},{"tanım":"Yol","konum":[2,4]},{"tanım":"Ağaçlık","konum":[2,5]},{"tanım":"Kasap","konum":[3,0]},{"tanım":"Köfteci","konum":[3,1]},{"tanım":"Yol","konum":[3,2]},{"tanım":"Yol","konum":[3,3]},{"tanım":"fırın","konum":[3,4]},{"tanım":"Kahvehane","konum":[3,5]},{"tanım":"Yol","konum":[4,0]},{"tanım":"Yol","konum":[4,1]},{"tanım":"Yol","konum":[4,2]},{"tanım":"Yol","konum":[4,3]},{"tanım":"Bakkal","konum":[4,4]},{"tanım":"Mezarlık","konum":[5,0]},{"tanım":"Yol","konum":[5,1]},{"tanım":"Yol","konum":[5,2]},{"tanım":"park","konum":[5,3]}];

//oyuncunun başlangıç paralel meridyeni
let oyuncuKonumu = [1,0];

//oyuncu konumunu haritadan kontrol edecek geçici değişken
let temporary;

//resim oluşturma fonksiyonu
kanvasaResimEkle();
function kanvasaResimEkle(){
    kanvasResim.src = '/public/images/statik/resimler/harita.png';
    kanvasResim.onload = function () {
        resim.drawImage(kanvasResim, 0, 0, kanvas.width, kanvas.height);
    };
};




//oyun saatini belirleyen akrepYelkovan nesnesi
let akrepYelkovan = {
    sifir : "0",
    saat : 0,
    dakika: 0,

    //hamledeSaatGeçir metodu ile her hamlede saat 10 dakika geçer
    hamledeSaatGeçir(){
        this.dakika += 1
        if(this.dakika === 6){
            this.saat +=1;
            this.dakika = 0;
        }
        if(this.saat === 24){
            this.saat = 0
        }
        return this.saat + ':' + this.dakika + '0'
    }
}


//array kıyaslama
function arrayComparison (ar1, ar2){
    if(JSON.stringify(ar1) === JSON.stringify(ar2)){
        return true
    }else{return false}
}

//HER HAREKETTE GERÇEKLEŞECEK FONKSİYONLAR
//klavyede 'w' tuşuna basılınca
function hareketW(){
    temporary =[...oyuncuKonumu];
    temporary[0]++;
    if(haritadanKıyas(temporary, oyunHarita)){
        oyuncuKonumu = [...temporary]
    }
}
//klavyede 's' tuşuna basılınca
function hareketS(){
    temporary =[...oyuncuKonumu];
    temporary[0]--;
    if(haritadanKıyas(temporary, oyunHarita)){
        oyuncuKonumu = [...temporary]}
} 
//klavyede 'a' tuşuna basılınca
function hareketA(){
    temporary =[...oyuncuKonumu];
    temporary[1]--;
    if(haritadanKıyas(temporary, oyunHarita)){
        oyuncuKonumu = [...temporary]}
}
//klavyede 'd' tuşuna basılınca
function hareketD(){
    temporary =[...oyuncuKonumu];
    temporary[1]++;
    if(haritadanKıyas(temporary, oyunHarita)){
        oyuncuKonumu = [...temporary]}
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
    oku();   
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
            return arrayOfArrays[j].tanım
        }
    };
    }

//koordinatlardaki tanımı metinAkisDiv elementine yazdırır
function oku() {
    metinAkisDiv.innerText = '';
    metinAkisDiv.innerText = (konumOkuma(oyuncuKonumu, oyunHarita))
};



document.addEventListener('keydown', hareket)
oku();
}