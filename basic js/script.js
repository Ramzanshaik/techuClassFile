// function sayHello(theName, theGender){

//     if(theGender == "Male"){
//         console.log(`Hello Mr ${theName}`)
//     }
//     else{
//         console.log(`Hello Miss ${theName}`)
//     }
//     else{
//         console.log(`Hello ${theName}`)
//     }
    
// }

// 1.

// let friends = ["Ahmed","Eman","osama","gamal"];

//  let friend = friends.splice(1,2);

// console.log(friend);
 
// 2.

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i=start; i<=end; i=i+10)
// {
//     if (i=== excclude) {continue
//     }
// console.log(i)
// }

3.


// for(var i=10 ; i>=3 ; --i){
//     if(i<10){
//         console.log(`0${i}`)
//     }
//     console.log(i)
// }

var members = {
    name:'Elzero',
    Age:38,
    country:'egypt',
    fullDetails : function(){
        return `My Name is ${name},my age is 38,i live in ${this.country}`
    }
}
console.log(members.fullDetails());


