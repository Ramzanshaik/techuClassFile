const container = document.querySelector(".container");
const input = document.querySelector("#searchInput");

let countries = [];

function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            countries = data;
            showCountryDetails(countries);
        });
}

function showCountryDetails(countriesData) {
    container.innerHTML = "";

    countriesData.forEach(country => {
        const div = document.createElement("div");
        div.classList.add("country-card");

        const head = document.createElement("h1");
        head.innerHTML = `Capital: ${country.capital ? country.capital : "N/A"}`;
        div.appendChild(head);

        const flag = document.createElement("img");
        flag.src = country.flags.png;
        flag.alt = `${country.name.common} flag`;
        div.appendChild(flag);

        const region = document.createElement("p");
        region.innerHTML = `Region: ${country.region}`;
        div.appendChild(region);

        const population = document.createElement("p");
        population.innerHTML = `Population: ${country.population}`;
        div.appendChild(population);

        container.appendChild(div);
    });

    input.value = ""; // Clear the input
}

function filterCountries() {
    
    const userInput = input.value.trim().toLowerCase();

    const filteredData = countries.filter(country =>
        country.name.common.toLowerCase().includes(userInput)
    );

    showCountryDetails(filteredData); 
}


input.addEventListener("input", filterCountries())


fetchData();
