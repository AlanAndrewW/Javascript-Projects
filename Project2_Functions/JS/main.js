let firstname = "Andrew"; //strings
let middlename = "Alan";
let lastname = "Wood"; 
let age = 27; //numbers
let student = true; //booleans

age = age + 1;

console.log("Hello", firstname, middlename, lastname); 
console.log("You are", age, "years old"); 
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstname + middlename + lastname; 
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + student; 
