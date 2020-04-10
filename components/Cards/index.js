// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.
function Card({headline, authorPhoto, authorName}){
    const card = document.createElement("div")
    const headlineDiv = document.createElement("div")
    const author = document.createElement("div")
    const imgContainer = document.createElement("div")
    const img = document.createElement("img")
    const nameAuthor = document.createElement("span")
    
    card.appendChild(headlineDiv)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(nameAuthor)
    imgContainer.appendChild(img)

    card.classList.add("card")
    headlineDiv.classList.add("headline")
    author.classList.add("author")
    imgContainer.classList.add("img-container")

    img.setAttribute("src", authorPhoto)
    headlineDiv.textContent = headline
    nameAuthor.textContent = `By ${authorName}`

    return card
}

function Cards(){
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
        .then(
            response =>{
                const cardContainer = document.querySelector(".cards-container")
                // convert object to array
                const articles = Object.entries(response.data.articles)

                articles.forEach( topic =>{
                    topic[1].forEach( article =>{
                        const card = Card(article)
                        cardContainer.appendChild(card)
                    })
                })
            }
        )
        .catch(
            error =>{
                console.log(error)
            }
        )
}

Cards()