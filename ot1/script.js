const container = document.querySelector(".container");
const input = document.querySelector("input");

function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            input.addEventListener("input", () => searchCountry(data)); // Add input event listener
            showCountryData(data); // Show all countries initially
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function searchCountry(data) {
    const query = input.value.toLowerCase().trim(); 

    if (query === "") {
        showCountryData(data);
    } else {
        const filteredData = data.filter(country => 
            country.name.common.toLowerCase().includes(query)
        );
        showCountryData(filteredData);
    }
}

function showCountryData(array) {
    container.innerHTML = ""; 

    if (array.length === 0) {
        container.innerHTML = "";
        return;
    }

    array.forEach(country => {
        const div = document.createElement("div");
        div.classList.add("country-card");

        const head = document.createElement("h1");
        head.innerHTML = `Capital of ${country.capital}`;
        div.appendChild(head);

        const flag = document.createElement("img");
        flag.src = `${country.flags.png}`;
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
}

