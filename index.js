var sakibTaka = 10;
var rakibTAka =  5;
var salmanBank = 3;

let name1 = "salman";
var name2 = 'rakib';
// let name1 = "kabir"


var totalTaka = sakibTaka + rakibTAka;



// if(salmanBank > 10){
//     console.log("I am borolox");
// }
// else{
//     console.log("biye hobe na");
// }

// console.log(salmanBank);
// console.log(parseInt(salmanBank))

// looping - for loop, while loop
// 1, 2, 3, ... ,10
// console.log(1) i = 1;
// console.log(2) i = 2; i= 1+1;
// console.log(i) i = ;
var i;

// printName();
function printName() {
    console.log(name1);
    console.log(name2)
}

person1 = { name: '', age: 30}

var person = {
    person1 : '3',
    person2 : 32
}
console.log(person.person1);
// for (let i = 0; i < person.length; i++) {
//     var container = person[i];
// //    console.log(container);
    
// }

// for (const key in person) {
//    console.log(key);
// }

//5! = 5 * 4 * 3 * 2 * 1
//n! = n * (n-1) * (n-2) ... * 3 * 2 * 1
function factorial (n) {
    var result = 1;
    for(var i=n; i>=1; i--){
        result = result * i;
    }
    return result;
}
console.log(factorial(0))






