class Article {
    constructor (naziv, cena, opis) {
        this.naziv=naziv
        this.cena=cena
        this.opis=opis
    }
}

function saveArticles(articles) {
    localStorage.setItem("articles", JSON.stringify(articles))
}

function loadArticles() {
    let values = localStorage.getItem("articles")
    if (values) {
        return JSON.parse(values)
    }
    return []
}


function createArticleRows (articles) {
    let table = document.querySelector("#articles-body")
    table.innerHTML = ''

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

function handleFormSubmission (articles) {
    let submitBtn = document.querySelector("#submit")

    submitBtn.addEventListener('click', function (){
        const form = document.querySelector("#forma")
        const formData = new FormData (form)

        const naziv = formData.get("naziv")
        const cena = formData.get("cena")
        const opis = formData.get("opis")

        for (let i = 0; i<articles.length; i++) {
            if (naziv===articles[i].naziv) {
                return
            }
        }

    const newArticle = new Article(naziv, cena, opis)
    articles.push(newArticle)
    saveArticles(articles)
    createArticleRows(articles)
    })
}

function initializeArticles () {
    let articles = loadArticles()

    createArticleRows(articles)
    handleFormSubmission(articles)
}

document.addEventListener('DOMContentLoaded', initializeArticles);
