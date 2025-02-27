const container = document.querySelector("#joke-container")

function fetchData(){
    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            displayData(data)
        })
}

function displayData(jokeData) {
    const head = document.createElement("h1")
    head.innerHTML =
        `<div class="card">
                <img src="${jokeData.icon_url}" alt="Chuck Norris Icon">
                <h2>Chuck Norris Joke</h2>
                <p class="created">Created at: ${jokeData.created_at}</p>
                <p class="updated">Updated at: ${jokeData.updated_at}</p>
                <p class="joke">${jokeData.value}</p>
            </div>
`;
        container.appendChild(head)
}
