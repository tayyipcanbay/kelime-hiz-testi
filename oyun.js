const kelimeListesi = require('./kelimeListesi');
const { ipcRenderer } = require('electron');
let liste = kelimeListesi.listeOlustur();
liste.unshift("-");
liste.unshift("-");
let skor = 0;
function kutular(sayac) {//Sayaç 2'ten başlamalı
    let birinci = document.getElementById("birinci");
    let ikinci = document.getElementById("ikinci");
    let orta = document.getElementById("orta");
    let ucuncu = document.getElementById("ucuncu");
    let dorduncu = document.getElementById("dorduncu");
    birinci.innerHTML = liste[sayac - 2]
    ikinci.innerHTML = liste[sayac - 1]
    orta.innerHTML = liste[sayac]
    ucuncu.innerHTML = liste[sayac + 1]
    dorduncu.innerHTML = liste[sayac + 2]

}
let dongu;
function kontrolEt(sayac = 2) {
    dongu = setInterval(() => {
        kutular(sayac);
        let orta = document.getElementById("orta");
        let metin = document.getElementById("metin");
        let skorKutusu = document.getElementById("skorKutu");
        if (liste[sayac] == metin.value) {
            sayac += 1
            console.log("Doru")
            console.log(sayac)
            skor += 100;
            skorKutusu.innerHTML = skor;
            metin.value = ""
        }
        console.log(metin.value);

        console.log("Döngü bitti");
    }, 300)
    dongu();
}
function timer() {
    let maxsn = 60;
    let p = document.getElementById("sn");
    setInterval(() => {
        if (maxsn != 0) {
            maxsn -= 1;
            p.innerHTML = maxsn
        }
        if (maxsn == 0) {

            clearInterval(dongu);

        }
    }, 1000);
    ipcRenderer.send("oyunBitti", skor)
}