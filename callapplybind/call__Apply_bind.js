var obj = {
    name : "groot"
    age  : 54,
}

function print(age){
    console.log(this.age)
    console.log(age)
}


// 1.

// print.call(obj,20)

// 2.

// const abc = print.bind(obj.age)
// abc()

// 3.

// print.apply(obj,[10,20,30])