// var arr = [10,20,30,40]
// var oldarr = arr.reduce(acc,val) => {
//     return acc+val
// },0)
// console.log(oldarr)

// function newFun(val) {
//     var sum = 0;
//     for(var i = 0; i < val.lenght; i= i + 1){
//         sum = sum = val[i]
//     }
//     return sum
// }
// console.log(newFun([10, 20, 30, 40]))


// function GymFun(val) {
//     if (val > 18) {
//         console.log("allow")
//     }else{
//     console.log("not allow")
//     }
// }
// GymFun(21)

// DOM
 
1

var parent = document.querySelector(".parent")
parent.style.border="2px solid red"
 
 
var heads = document.querySelectorAll("h1")
 
heads.forEach((head,index)=>{
 
head.style.border = "2px solid black"
head.style.padding = "5px"
head.style.width = "80%"
if (index%2 == 0){
    head.style.color = "red"
}else{
    head.style.color = "blue"
}
})
 