const array = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "category": "men's clothing",
    "rating": {
      "rate": 3.9,
      "count": 120
    },
    "products": [
      {
        "productId": 18,
        "quantity": 1
      }]
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "category": "men's clothing",
    "rating": {
      "rate": 4.1,
      "count": 259
    },
    "products": [
      {
        "productId": 7,
        "quantity": 6
      }]
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "category": "men's clothing",
    "rating": {
      "rate": 4.7,
      "count": 500
    },
    "products": [
      {
        "productId": 12,
        "quantity": 8
      }]
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "category": "men's clothing",
    "rating": {
      "rate": 2.1,
      "count": 430
    }, "products": [
      {
        "productId": 11,
        "quantity": 10
      }]

  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "category": "jewelery",
    "rating": {
      "rate": 4.6,
      "count": 400
    }, "products": [
      {
        "productId": 7,
        "quantity": 6
      }]

  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "category": "jewelery",
    "rating": {
      "rate": 3.9,
      "count": 70
    }, "products": [
      {
        "productId": 0,
        "quantity": 8
      }]

  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "category": "jewelery",
    "rating": {
      "rate": 3,
      "count": 400
    },
    "products": [
      {
        "productId": 9,
        "quantity": 4
      }]
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "category": "jewelery",
    "rating": {
      "rate": 1.9,
      "count": 100
    }, "products": [
      {
        "productId": 7,
        "quantity": 3
      }]
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "category": "electronics",
    "rating": {
      "rate": 3.3,
      "count": 203
    }, "products": [
      {
        "productId": 71,
        "quantity": 88
      }]
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "category": "electronics",
    "rating": {
      "rate": 2.9,
      "count": 470
    }, "products": [
      {
        "productId": 12,
        "quantity": 21
      }]
  }
]

// //  

//Q-4 Print the sum of price of all the products from the given array.

// var reducedata = array.reduce((acc, val)=>{
//   return acc + val.price
// },0)
// console.log(reducedata)


//Q-5 print the quantity of each products:
// var new_Array = array.map((res)=>{
//   return res.products[0].quantity
// })
// console.log(new_Array)

//Q-1 Print only the category which is equal to men's clothing and price details which are above 100 .

// var condition = array.filter((res)=>{
//   if((res.category=== "men's clothing" && (res.price>100))){
//     return res
//   }
// })
// console.log(condition)/

//Q-2 Print all the titles from the given array.

// var new_Array = array.map((res)=>{
//   return res.title
// })

// console.log(new_Array)

//Q-3 Print the price details which are above 100 ,.

// var new_Array = array.filter((res)=>{
//   return res.price>100

// })

// console.log(new_Array)

//Q-6 print the sum of price where catagery is men's clothing:

// var mensPrice = array.filter((res) => {
//   return res.category === "men's clothing"
//   )
// }

//   var mensPrice (sum, item) = array.reduce((acc + val) => {
//         return sum + itemprices 
//         )
// }
// console.log(mensPrice)

