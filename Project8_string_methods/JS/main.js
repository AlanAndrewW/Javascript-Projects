//full_sentence() function
function full_sentence() {
    console.log(full_sentence);
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}



//slice_Method() function
function slice_Method() {
    var Sentence = "All work and no play makes jack a dull boy.";
    var Section = "Sentence.slice(27,33)";
    document.getElementById("Slice").innerHTML = Section;
}
//touppercase() function
function upper() {
    let text_1 = "i am upper.";
    let text_2 = text_1.toUpperCase();
    document.getElementById("Upper").innerHTML = text_2;
}
//tolowercase() function
function lower() {
    let text1 = "I AM LOWER.";
    let text2 = text1.toLowerCase();
    document.getElementById("Lower").innerHTML = text2;
}
//search method
let text = 'Howdy there, pardner!';
let position = text.search('ard');
//Number method
function string_Method() {
    var x =200;
    document.getElementById("Nums_string").innerHTML = x.toString();
}
//toPrecision() method
function precision_Method() {
    var X = 67885.4857894848333;
    document.getElementById("Precision").innerHTML = X.toPrecision(15);
}
//toFixed() method check console in devtools
const num = 8774.099885;
console.log(num.toFixed(4))
//valueof() method
Number = new Number(789);
str = new String("Hello");
console.log(Number);
console.log(Number.valueOf());
console.log(str.valueOf());