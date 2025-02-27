function selectProduct(){
    returnnew Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("product selected")
    })
    
    },2000)
   
}
 
function addToCart(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Added to cart")
             
        },1000)
    })
    
}
 
function payment(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("payment done")
             
        },4000)
       
    })
   
}
 
function delivery(){
    setTimeout(()=>{
        console.log("delivery done")
    },3000)
   
}
 

//  selectProduct()
//  .then(()=>{
//     console.log("resoleved..")
//  })
//  .catch(()=>{
//   console.log("rejected")
//  })

 async function print(){
    await selectProduct()
    await addToCart()
    await payment()
    await delivery()
 }

 print()