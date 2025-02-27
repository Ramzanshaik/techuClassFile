function sum(a,b,c){
    return a+b+c
}

sum(10,20,30)


const sum() = (a) => (b) => (c) => a+b+c

console.log(sum(10)(20)(30))