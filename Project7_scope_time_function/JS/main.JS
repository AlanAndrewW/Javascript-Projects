//Global var
var a = 69;
function Add_Numbers1() {
    document.write(63 + a + "<br>");
}
function Add_Numbers2() {
    document.write(a + 1000);
}
Add_Numbers1();
Add_Numbers2();


//Local var
function Add_Numbers_1() {
    var b = 89;
    document.write(50 + b + "<br>"); 
}
function Add_Numbers_2() {
    document.write(b + 100);
    }
Add_Numbers_1();
Add_Numbers_2();

//console.log to debug
function Add_Numbers__1() {
    var c = 89;
    console.log(15 + c);
}
function Add_Numbers__2() {
    console.log(c + 100);
    }
Add_Numbers__1();
Add_Numbers__2();



//if statements
function Get_Date() {
    if (new Date().getHours() > 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Reveal() {
    if (1 < 3) {
        document.getElementById("No").innerHTML = "Absolutely";
    
    }
}
//  if / else statements
function Age_Function() {
    Age = document.getElementById("Age").value; 
    if (Age >= 18) {
        Drive = "You are old enough to drive!";
    }
    else {
        Drive = "You are not old enough to drive! Sorry! :(";
    }
    document.getElementById("age?").innerHTML = Drive;
}
//else  if statements
function Time_Function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_Day").innerHTML = Reply;
}

