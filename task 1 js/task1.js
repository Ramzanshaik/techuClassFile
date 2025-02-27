// const numberedArray = [23,56,7,12,8,97,12,24,1,4]
 
  
//Q-1 Delete a number  at index 3.(Hint : splice)

var numberedArray = [23,56,7,12,8,97,12,24,1,4]
numberedArray.splice(3,1)
console.log(numberedArray)

//Q-2 Insert a number 45 at the index 5.(Hint: splice)
var numberedArray = [23,56,7,12,8,97,12,24,1,4]
 numberedArray.splice(5,1,45,97)
 console.log(numberedArray)

//Q-3 Print only [12,8,97 ] by using slice method.

const numberedArray = [23,56,7,12,8,97,12,24,1,4]
var new_Array = numberedArray.slice(3,6)
console.log(new_Array)

//Q-4 print the index of 24:(Hint:indexof)

const numberedArray = [23,56,7,12,8,97,12,24,1,4]
var new_Array = numberedArray.indexOf(7)
console.log(new_Array)
