/*MODULE 2-lesson 4*/
/*Question 1*/
function logPhrase() {
    console.log("What the func is this nonsense?");
}

logPhrase();

/*Question 2*/
function logName(firstName, lastName) { 
    var fullName = firstName + " " + lastName;
    console.log(fullName);
}

logName("Johannes", "Phillips");

/*Question 3*/
function multiply(firstNumber, secondNumber) {
var typeofFirst = typeof firstNumber;
var typeofSecond = typeof secondNumber;

if (typeofFirst !== "number" || typeofSecond !=="number") {
    return "Please supply number values";
}

return firstNumber * secondNumber;

}

var result = multiply(3, 5);
console.log(result);



/*Question 4*/
function addition(num1, num2, num3) {
var convertedNum1 = parseFloat(num1);
var convertedNum2 = parseFloat(num2);
var convertedNum3 = parseFloat(num3);

if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {

    return "Invalid argument types";
}

return convertedNum1 + convertedNum2 + convertedNum3;

}

var paragraph = document.querySelector("p");
var sum = addition (6, true, "f");

paragraph.innerHTML = sum;


/*Question 5*/
var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
    var heading = document.querySelector("h1");
    heading.innerHTML += ": Updated";
};

/*Question 6*/
var buttonTitle = document.querySelector(".title");
function changeTitle() {

    document.title = "I´ve been updated";
}

buttonTitle.onclick = changeTitle;

/*Question 7*/
var buttonRed = document.querySelector(".red");
var buttonOrange = document.querySelector(".orange");
var buttonPink = document.querySelector(".pink");

function changeBackground(colour) {
document.body.style.backgroundColor = colour;

}

buttonRed.onclick = function () {
    changeBackground("red");
};

buttonOrange.onclick = function () {
    changeBackground("orange");
};

buttonPink.onclick = function () {
    changeBackground("pink");
};