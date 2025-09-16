class Article {
    constructor (naziv, cena, opis) {
        this.naziv=naziv
        this.cena=cena
        this.opis=opis
    }
}

function createArticleRows (articles) {
    let table = document.querySelector("#articles-body")

    for(let i=0; i<articles.length; i++) {
        let tr = document.createElement ("tr")

        let rb = document.createElement ("td")
        let naziv = document.createElement ("td")
        let cena = document.createElement ("td")

        rb.textContent = i+1;
        naziv.textContent = articles[i].naziv;
        cena.textContent = articles[i].cena;

        tr.appendChild(rb);
        tr.appendChild(naziv);
        tr.appendChild(cena);

        tr.addEventListener('click', function() {
            displayArticleDetails(articles[i])
        })

        table.appendChild(tr);
    }
}

function displayArticleDetails(article) {
    let p = document.createElement("p")

    p.innerHTML = "Naziv: " + article.naziv + "<br>" + "Cena: " + article.cena + "<br>" + "Opis: " + article.opis

    let articleDetails = document.querySelector("#articleDetails")

    if (articleDetails.firstChild) {
        articleDetails.firstChild.remove()
    }
    articleDetails.appendChild(p)
}

function initializeArticles () {
    let articles = [
        new Article ("Monitor", 165, "LED monitor, dimenzije 26 inca."),
        new Article ("TV", 650, "LED TV, dimenzije 55 inca."),
        new Article ("Mis", 20, "Lagan, kompaktan, bezicni mis.")
    ];

    createArticleRows (articles);
}

document.addEventListener('DOMContentLoaded', initializeArticles);
