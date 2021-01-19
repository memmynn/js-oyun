
/**element değişkenleri */
let script = document.getElementsByTagName("script")[0]
let gorsel = document.createElement("img");
/**objects array */
let metinler = [
    /**sonraki, ile düğmeye basınca gelecek nesnenin indeksi veriliyor
     * özellikler ile document.body'ye eklenecek DOM object veriliyor
     * siklar ise butonlar
     */
    {ozellikler:[{"img":"https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_600/MTc0NDE3MjY0NDEyNDY4ODcw/crazy-colors-what-happens-when-you-paint-in-a-dark-room.webp"},
    {"p":"Karanlık bir odada uyandın. Kim olduğunu hatırlamıyorsun. \n Koridora açılan bir kapı var."}],
    siklar:[
    {sik: "Kapıdan çık", sonraki: 1}, {sik: "Odayı araştır", sonraki: 2},{sik: "Yatağın altına saklan", sonraki: 3},
    {sik: "'Kimse var mı' diye seslen", sonraki: 4}]},


{ozellikler:[{"img":"https://i.ytimg.com/vi/TVNpLlAWX2Q/maxresdefault.jpg"}],
siklar:[{sik: "şık1-0", sonraki: 3}, {sik: "şık1-1", sonraki: 2},{sik: "şık1-2", sonraki: 3}]},

    {ozellikler:[{"p" : "Odada herhangi bir şey yok. Ayak sesleri geliyor. \n Birileri yaklaşıyor."}],
    siklar:[{sik: "Yatağın altına saklan", sonraki: 3}, {sik: "Kapıdan çık", sonraki: 1}, {sik: "'Kimsiniz, neredeyim?' diye seslen", sonraki: 4}]},

{ozellikler:[{"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidVGTZzuTny9wTi-o8djdRL9AuQNdK9Mwyw&usqp=CAU"},{"p" : "metin3"}],
siklar:[{sik: "şık3-0", sonraki: 1}, {sik: "şık3-1", sonraki: 2},{sik: "şık3-2", sonraki: 3},
{sik: "şık3-3", sonraki: 4}]},

    {ozellikler:[{"div":"Sesini duyup geldi biri. Elinde jop var ve üniformalı."}],
    siklar:[{sik: "şık4-0", sonraki: 1}, {sik: "şık4-1", sonraki: 2},{sik: "şık4-2", sonraki: 3},
    {sik: "şık4-3", sonraki: 0}]}
];

/* document body düğmeler ekleme */
let counter = 0;
let sonra;
let elementArray = [];
let dugmeArray = [];
let oyunContainer = document.createElement("div"); oyunContainer.id = "oyunContainer";
let dugmeContainer = document.createElement("div"); dugmeContainer.id = "dugmeContainer";


/**ilk el başlatma */
if(counter === 0){
    sonra = counter;
    counter++;
}

function elementEkle(){
    if (metinler[sonra].ozellikler){
        //elementArray temizleme
        elementArray =[];
        /**elementArray'e özellik ekleme */
        for(let j= 0; j<metinler[sonra].ozellikler.length; j++){
            elementArray[j] = document.createElement(Object.keys(metinler[sonra].ozellikler[j]));
            //image'a source ekleme
            if (elementArray[j].tagName=="IMG"){
                elementArray[j].src= Object.values(metinler[sonra].ozellikler[j]);}
           //element e içerik ekleme    
            else {elementArray[j].innerText =Object.values(metinler[sonra].ozellikler[j])}
        }
        //oyunContainer'e element ekleme
        for (let elem=0; elem<elementArray.length; elem++) {
                document.getElementById("oyunContainer").appendChild(elementArray[elem])
        };
    
    }
}

function sifirlama(id){
    /**oyunContainer içeriğini sıfırla */
    if(document.getElementById(id)){
        document.getElementById(id).textContent =''
        }
}
//body,'ye değişken ekle
function ekleme(degisken){
    document.body.append(degisken);
}

//oyunu çalıştırma
function otomat(){
    //oyunContainer ekleme
    ekleme(oyunContainer);
    //oyunContainer içerik sıfırlama
    sifirlama("oyunContainer");
    /**dugmeArray temizle */
    dugmeArray=[];
    //özellik ekle
    elementEkle();
    //dugmeleri ekle
    document.getElementById("oyunContainer").appendChild(dugmeContainer);
    //düğmeContainer temizle
    document.getElementById("dugmeContainer").textContent = '';
    /**dugmeArray'e i indeksi kadar düğme ekleme */
    for(let i= 0; i<metinler[sonra].siklar.length; i++){
        /**dugmeArray'e buton ekleme */
        dugmeArray[i] = document.createElement("button");
        /**eklenen butonun içeriğini ekleme */
        dugmeArray[i].innerText= metinler[sonra].siklar[i].sik;
        /**eklenen düğmeye onclick event yükleme */
        dugmeArray[i].addEventListener("click", function(){
            /** sonra'yı seçilen düğme'nin sonraki'sine bağlama */
            sonra = metinler[sonra].siklar[i].sonraki;        
            otomat()
        })
    }
    /**dugmeContainer'a düğme ekleme */
        for(let dugme=0; dugme<dugmeArray.length; dugme++){
            document.getElementById("dugmeContainer").appendChild(dugmeArray[dugme]);
        }
}

otomat();
