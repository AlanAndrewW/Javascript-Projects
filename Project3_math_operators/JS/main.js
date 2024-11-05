//addition
function addition() {
    var add = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + add;
}

console.log(2 + 2)
//subtraction
function subtraction() {
    var sub = 5 - 2;
    document.getElementById("Sub").innerHTML = "5 - 2 = " + sub;
}

console.log(5 - 2)

//multiplication
function multiplication() {
    var mult = 6 * 8;
    document.getElementById("Mlt").innerHTML = "6 x 8 = " + mult;
}
console.log(6 * 8)

//division
function division() {
    var divide = "48 / 6 = " + divide;
    document.getElementById("Div").innerHTML = "48 / 6 = " + divide;
}
console.log(48 / 6)

//multiple operators
function more_Math() {
    var simple_Math = (6 + 10) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "6 plus 10, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}
console.log(6 + 10 * 10 / 2 -5)

//modulous
function modulous_operator() {
    var modulous = 25 % 6;
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulous;
}
console.log(25 % 6)

//negation
function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}
console.log(- 10)

//increment operator
function Increment() {
var value = document.getElementById("IncrementText").innerHTML;
value++;
document.getElementById("IncrementText").innerHTML = value;
}

//decrement operator
function Decrement() {
    var value = document.getElementById(DecrementText).innerHTML;
    value--;
    document.getElementById("DecrementText").innerHTML = value;
}

//random between 0 and 1
function random() {
    document.getElementById("Ran").innerHTML = Math.random()*10;
}


//math objects
console.log(Math.PI);//display PI
console.log(Math.E);//EULERS Number
//round
let a = 3;
let b = 2;
let c;
//c = Math.round(c);
//c = Math.floor(c);
//c = Math.ceil(c);
//c = Math.trunc(c);
c = Math.pow(a, b);
console.log(c);
//