const jokeServerAddress = "https://api.chucknorris.io/jokes/random"
const jokeContainer = document.querySelector(".jokeContainer");
const buttons = document.querySelector(".buttons");
let category;

function convertToJson(response) {
    // console.log(response)
    return response.json();
}

function extractJoke(dataObject) {
    return dataObject.value;
    // return 'press f';
}

function rendersJokeToPage(jokeString) {
    // jokeContainer.textContent = "";
    const h1 = document.createElement("p");
    h1.textContent = jokeString;
    jokeContainer.appendChild(h1);
}

function makeButton() {
    const butt = document.createElement("button");
    butt.type = "button";
    butt.textContent = "New Joke";
    butt.addEventListener("click", fetchSingular)
    buttons.appendChild(butt);
}

function makeMultiButton() {
    const butt = document.createElement("button");
    butt.type = "button";
    butt.textContent = "LOTS of jokes";
    butt.addEventListener("click", fetchMultiple)
    buttons.appendChild(butt);
}

// function clearButton() {
//     const butt = document.createElement("button");
//     butt.type = "button";
//     butt.textContent = "ClearJokes";
//     butt.addEventListener("click", clearJokes)
//     document.body.appendChild(butt);
// }

function clearJokes() {
    jokeContainer.textContent = "";
}

function fetchJoke() {
    if(category == undefined){
        fetch(jokeServerAddress)
            .then(convertToJson)
            .then(extractJoke)
            .then(rendersJokeToPage)
    } else {
        let theURL = `https://api.chucknorris.io/jokes/random?category=${category}`
        // console.log(theURL);
        fetch(theURL)
            .then(convertToJson)
            .then(extractJoke)
            .then(rendersJokeToPage)
    }
}
function fetchSingular() {
    clearJokes();
    fetchJoke();
}

function fetchMultiple() {
    clearJokes();
    let count = 0; 
    let jokesArray = [];
    while (count < 10) {
        fetchJoke();
        count += 1;
    }
}

makeButton()
makeMultiButton()
// clearButton()
fetchJoke()

///      large exercises 
//      Display a list of categories

const jokeCategories = document.querySelector(".jokeCategories");
const catTitle = document.querySelector(".catTitle");

function arrMapper(item) {
    let li = document.createElement("li");
    li.textContent = item;
    li.addEventListener("click", catSetter)
    // console.log(li);
    jokeCategories.appendChild(li);
}

const categoriesList = `https://api.chucknorris.io/jokes/categories`;

let categoriesArray;
const stealObject = x => {
    categoriesArray = x;
    return x;
}

function displayCategories() {
    fetch(categoriesList)
    .then(convertToJson)
    .then(stealObject)
    .then(r=>r.map(arrMapper))
}

displayCategories()

//      Click handlers

function catSetter(catObj) {
    category = this.textContent;
    catH2Maker(category);
}

function catH2Maker(cat) {
    let h2 = document.createElement("h2");
    h2.textContent = `${cat}`
    // console.log(h2)
    catTitle.textContent = "";
    catTitle.appendChild(h2);
}

function undefineMe() {
    category = undefined;
    catTitle.textContent = "";
    let h2 = document.createElement("h2");
    h2.textContent = " ";
    catTitle.appendChild(h2);
}

