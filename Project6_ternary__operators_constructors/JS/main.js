//function with HTML and JS using ternary operation w/input from browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short to ride!":"You are tall enough to ride!";
    document.getElementById("Ride!").innerHTML = Can_ride + " CONGRATS!";
   }

function Guess_Function() {
    var Guess, can_vote;
    Guess = document.getElementById("Guess").value;
    can_vote = (Guess >= 18) ? "You are old enough to vote!!":"You are not old enough to vote!";
    document.getElementById("Guess2").innerHTML = can_vote;
}

//Constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//Function to display results of constructor in html element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " +
     Erik.Vehicle_Color +
      "-colored " +
       Erik.Vehicle_Model +
        " manufactured in " +
         Erik.Vehicle_Year;
}

//Nested Function
function add_strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}