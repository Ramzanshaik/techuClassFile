const container = document.querySelector(".container");
const input = document.querySelector("#input");
const filterContainer = document.querySelector(".filterContainer");

let users = []
function fetchUserData() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            users = [...data]
            showUserDetails(data, container);
        })

}
fetchUserData()


function showUserDetails(users, location) {
    container.innerHTML = "";

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        const name = document.createElement("h2");
        name.textContent = `Name: ${user.name}`;
        userCard.appendChild(name);

        const username = document.createElement("p");
        username.textContent = `Username: ${user.username}`;
        userCard.appendChild(username);

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;
        userCard.appendChild(email);

        const address = document.createElement("p");
        address.innerHTML = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
        userCard.appendChild(address);

        const showMoreButton = document.createElement("button")
        showMoreButton.textContent = "showUserDetails"


        showMoreButton.addEventListener("click", () => {

            const phon = document.createElement("p");
            phon.textContent = `Phone: ${user.phone}`;
            // console.log("phone..",user.phone)
            userCard.appendChild(phon);

            const website = document.createElement("p");
            phone.textContent = `website: ${user.website}`;
            userCard.appendChild(website);

            const catchphares = document.createElement("p");
            catchphares.textContent = `campany :${user.company.catchPhrase}`;
            userCard.appendChild(catchphares);

            showMoreButton.disabled = true;
            showMoreButton.textContent = "detailsshown"



        })
        userCard.appendChild(showMoreButton);
        location.appendChild(userCard);
    });

    input.value = "";
}

function searchUser() {
    const userInput = input.value

    const filteredData = users.filter((user) => {
        return user.name == userInput
    })
    container.style.display = "none"
    filterContainer.style.display = "block"
    showUserDetails(filteredData, filterContainer)
}

