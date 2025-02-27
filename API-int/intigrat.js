// 


const container = document.querySelector(".container")

function fetchData(){
    fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
    creatingHeading(data)
})
}


function creatingHeading(product){
    product.forEach((val) =>{
        const head = document.createElement("h1")
        head.innerHTML = val.title
        container.appendChild(head)
    })
}