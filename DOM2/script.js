var container =  document.querySelector(".container")

function createSquare(){
    var square =  document.createElement("div")
    square.classList.add("square")
    container.appendChild(square)
}

function createCircle(){
    var circle =  document.createElement("div")
    circle.classList.add("circle")
    container.appendChild(circle)
}


function colorRed(){
    var cir = document.querySelectorAll(".circle")


    var squ = document.querySelectorAll(".square")

    cir.forEach((val)=>{
        val.style.backgroundColor = "red"
    })
    squ.forEach((val)=>{
        val.style.backgroundColor = "red"
    })
}

function colorBlue(){
    var cir = document.querySelectorAll(".circle")


    var squ = document.querySelectorAll(".square")

    cir.forEach((val)=>{
        val.style.backgroundColor = "blue"
    })
    squ.forEach((val)=>{
        val.style.backgroundColor = "blue"
    })
}