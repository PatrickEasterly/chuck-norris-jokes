const jokeServerAddress = "https://api.chucknorris.io/jokes/random"
const jokeContainer = document.querySelector(".jokeContainer");
const buttons = document.querySelector(".buttons");

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
    butt.textContent = "Multiple new jokes";
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
    fetch(jokeServerAddress)
        .then(convertToJson)
        .then(extractJoke)
        .then(rendersJokeToPage)
}
function fetchSingular() {
    clearJokes();
    fetchJoke();
}

function fetchMultiple() {
    clearJokes();
    let count = 0; 
    while (count < 4) {
        fetchJoke();
        count += 1;
    }
}

makeMultiButton()
makeButton()
// clearButton()
fetchJoke()

///      large exercises 
//      Display a list of categories

const jokeCategories = document.querySelector(".jokeCategories");

function arrMapper(item) {
    let li = document.createElement("li");
    li.textContent = item;
    // console.log(li);
    jokeCategories.appendChild(li);
}

const categories = `https://api.chucknorris.io/jokes/categories`;

function displayCategories() {
    fetch(categories)
    .then(convertToJson)
    .then(r=>r.map(arrMapper))
}

displayCategories()
