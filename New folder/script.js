const userContainer = document.querySelector(".usercontainer")

function fetchUser() {
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            userInformation(data)
        })
}


function userInformation(data) {
  const users=  data.results.forEach((user)=>{
        const  div = document.createElement("div")
        div.innerHTML = 
       `  <img src="${user.picture.large}" alt="User Picture">
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p>Gender: ${user.gender}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.location.street.number} ${user.location.street.name}, 
            ${user.location.city}, ${user.location.state}, ${user.location.country}</p>`

           
                userContainer.removeChild(userContainer.lastChild);
            
        
    userContainer.appendChild(div)
    })
  



}