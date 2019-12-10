const jokeServerAddress = "https://api.chucknorris.io/jokes/random"
const jokeContainer = document.querySelector(".jokeContainer");

function convertToJson(response) {
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
    document.body.appendChild(butt);
}

function makeMultiButton() {
    const butt = document.createElement("button");
    butt.type = "button";
    butt.textContent = "Multiple new jokes";
    butt.addEventListener("click", fetchMultiple)
    document.body.appendChild(butt);
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
        .then(r=>r.json())
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


