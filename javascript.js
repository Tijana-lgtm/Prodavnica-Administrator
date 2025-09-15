class Artikal {
    constructor (naziv, cena, opis) {
        this.naziv=naziv
        this.cena=cena
        this.opis=opis
    }
}

let monitor = new Artikal ("Monitor", 165, "Monitor 20 inca")
let tv = new Artikal ("TV", 650, "TV 55 inca") 
let mis = new Artikal ("Mis", 20, "Bezicni mis")

let artikli = [monitor, tv, mis]

function createArticalRows() {
    let table = document.querySelector("#tabela-artikli-body");
    table.innerHTML = '';

    for (let i = 0; i < artikli.length; i++) {
        let tr = document.createElement("tr");

        let tdBr = document.createElement("td");
        tdBr.textContent = i + 1;
        tdBr.style.textAlign = "center";
        tr.appendChild(tdBr);

        let tdNaziv = document.createElement("td");
        tdNaziv.textContent = artikli[i].naziv;
        tdNaziv.style.textAlign = "center";
        tr.appendChild(tdNaziv);

        let tdCena = document.createElement("td");
        tdCena.textContent = artikli[i].cena;
        tdCena.style.textAlign = "center";
        tr.appendChild(tdCena);

        table.appendChild(tr); 
    }
}

document.addEventListener("DOMContentLoaded", createArticalRows)
