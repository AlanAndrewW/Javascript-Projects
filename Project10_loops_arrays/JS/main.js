//function using while loop
function While_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("WhileLoop").innerHTML = Digit;
}

//function using a for loop
var Cars = ["Dodge", "Mercedes", "BMW", "Ford"];
var Content = "";
var A;
function For_Loop() {
   for (A = 0; A < Cars.length; A++) {
    Content += Cars[A] + "<br>";
   }
document.getElementById("list_of_cars").innerHTML = Content;
}
//function with an array
function Dog_Pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = "playing";
    Dog_Picture[1] = "sleeping";
    Dog_Picture[2] = "Eating";
    Dog_Picture[3] = "Growling";
    document.getElementById("Dog").innerHTML = "Here, the dog is " + Dog_Picture[0] + ".";
}

//
function constant_function() {
    const Car = {type:"truck", make:"Ford", color:"Black"};
    Car.color = "green";
    Car.price = "$50,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Car.type + " was " + Car.price;
    document.getElementById("Constant").innerHTML = "The color of the " + Car.type + " is " + Car.color;
}
//
var b = 69;
document.write(b);
{
    let b = 96;
    document.write("<br>" + b);
}
document.write("<br>" + b);
//
function pifunct() {
    return Math.PI;
    document.getElementById("pi").innerHTML = pifunct();
}
//creating object with let keyword
let robot = {
    company: "Roboto ",
    model: "Crusher ",
    year: "2024 ",
    color: "Rally Red",
    description : function() {
        return "This Robot is a " + this.year + this.color + " " + this.company;
    }    
};
document.getElementById("Object").innerHTML = robot.description();