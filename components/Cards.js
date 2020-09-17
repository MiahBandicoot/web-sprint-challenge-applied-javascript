// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import Axios from "axios"

const parent = document.querySelector(".cards-container")
function makeCard(info){
    const div = document.createElement("div")
    const divHeader = document.createElement("div")
    const divAuth = document.createElement("div")
    const divImg = document.createElement("div")
    const img = document.createElement("img")
    const span = document.createElement("span")
    divImg.classList.add("img-container")
    divAuth.classList.add("author")
    div.classList.add("card")
    divHeader.classList.add("headline")
    div.appendChild(divHeader)
    div.appendChild(divAuth)
    divAuth.appendChild(divImg)
    divImg.appendChild(img)
    div.appendChild(span)
    divAuth.appendChild = "author"
    divHeader.textContent = `${info.headline}`
    img.src = info.authorPhoto
    span.textContent = `By ${info.authorName}`
    div.addEventListener('click', () => {
        div.onclick = console.log(`${info.headline}`)
    })

    return div
}

    Axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(info => {
        const target = info.data.articles.javascript
        target.forEach(article => {
            const data = makeCard(article)
            parent.appendChild(data)
    })
});