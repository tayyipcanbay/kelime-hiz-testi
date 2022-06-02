const fs = require('fs');
function listeOlustur() {
    let kelimeler = fs.readFileSync("./kelimeler.txt", "utf-8", () => {
    });
    let kelimeListesi = [];
    while (kelimeler.indexOf(",") != -1) {
        let kelime = kelimeler.slice(0, kelimeler.indexOf(","))
        kelime = kelime.slice(2, kelime.length)

        kelimeListesi.push(kelime);
        kelimeler = kelimeler.slice(kelimeler.indexOf(",") + 1, kelimeler.length)
    }
    return kelimeListesi;

}
module.exports = {
    listeOlustur
}