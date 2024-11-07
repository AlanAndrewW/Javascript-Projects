
document.write(typeof "Word");
document.write(typeof 69);
document.write("20" + 20);
//boolean
document.write(4<6);
document.write(5>6);
//infinity, -infinity
function infinfunct() {
    document.getElementById("-infinity").innerHTML = document.write(-500E400);
}

function infinfunct2() {
    document.getElementById("infinity").innerHTML = document.write(590E900);
}
//console.log
console.log(5 * 30);
console.log(6 > 7);
//Double Equals
document.write(5 == 5);
document.write(6 == 90);
//Triple Equals
x = "variant";
y = "variant";
document.write(x === y);

c = 60;
d = "sixty-five";
document.write("sixty-five" === 60);

a = 30;
b = "Thirty";
document.write(30 === "Thirty");

e = "forty";
f = "thirty";
document.write("forty" === "thirty");

//logical operators AND OR
document.write(50 > 60 && 40 > 50);
document.write(60 > 50 && 50 > 40);

document.write(6 < 10 || 7 < 10);
document.write(7 > 8 || 8 > 9);

//NOT logical operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10);
}

//