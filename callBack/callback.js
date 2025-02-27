function selectProduct(cb){
    setTimeout(()=>{
        console.log("product selected")
        cb()
    },2000)
   
}
 
function addToCart(cb){
    setTimeout(()=>{
        console.log("Added to cart")
        cb()
    },1000)
}
 
function payment(cb){
    setTimeout(()=>{
        console.log("payment done")
        cb()
    },4000)
   
}
 
function delivery(){
    setTimeout(()=>{
        console.log("delivery done")
    },3000)
   
}
 
selectProduct(function(){
    addToCart(function(){
        payment(function(){
            delivery()
        })
       
    })
   
})
 
 