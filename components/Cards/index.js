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



function createCard(article){
    //card
    const myCard = document.createElement('div');
    myCard.classList.add('card');

    //headline
    const myHeadline = document.createElement('div');
    myHeadline.classList.add('headline');
    myHeadline.textContent = article.headline;
    myCard.appendChild(myHeadline);

    //author
    const myAuthor = document.createElement('div');
    myAuthor.classList.add('author');

    //img container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    //authors img
    const authorsImg = document.createElement('img');
    authorsImg.src = article.authorPhoto;
    imgContainer.appendChild(authorsImg);
    myAuthor.appendChild(imgContainer);

    //authors name
    const authorsName = document.createElement('span');
    authorsName.textContent = article.authorName;
    myAuthor.appendChild(authorsName);

    //append
    myCard.appendChild(myAuthor);

    //return  
    return myCard;

    
}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response) => {
        
        for (let article in response.data.articles){
            
            response.data.articles[article].map((item)=>{
                console.log(item);
                const newArticle = document.querySelector('.cards-container');
                newArticle.appendChild(createCard(item));
            })
        }
        
    })
    .catch((error) => { 
        console.log(error);
    })