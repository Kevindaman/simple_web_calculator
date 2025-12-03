function Add(num1, num2){
    return num1 + num2;
}

function Subtract(num1, num2){
    return num1 - num2;
}

function Multiply(num1, num2){
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return Math.round(num1 * num2 * 1000) / 1000;
    }
    else{
        return num1 * num2;
    }
}

function Divide(num1, num2){
    return Math.round((num1 / num2) * 1000) / 1000;
}

function Operate(num1, operation, num2){
    if(typeof num1 != "number"){
        num1 = Number.parseInt(num1);
    }

    if(typeof num2 != "number"){
        num2 = Number.parseInt(num2);
    }

    switch (operation){
        case "+":
            return Add(num1, num2);
        case "-":
            return Subtract(num1, num2);
        case "*":
            return Multiply(num1, num2);
        case "/":
            return Divide(num1, num2);
        default:
            return;
    }
}

function PopulateDisplayWithNumber(e){
    if(operation == "="){
        ClearEverything();
    }
    if(displayDiv.scrollWidth > displayDiv.clientWidth){
        displayDiv.style.fontSize = parseInt(window.getComputedStyle(displayDiv).fontSize - 1) + "px";
    }
    if(isTypingFirstNumber) isStartedTypingFirstNumber = true;
    if(isTypingSecondNumber) isStartedTypingSecondNumber = true;
    if(e.target.textContent == "0" && activeNum == "0"){
        return;
    }
    if(activeNum == "0"){
        return;
    }
    displayDiv.textContent = displayDiv.textContent + e.target.textContent;
    activeNum = activeNum + e.target.textContent;
}

function ClearEverything(e){
    displayDiv.textContent = "";
    num1 = "";
    num2 = "";
    activeNum = "";
    operation = "";
    isOperandSelected = false;
    isTypingSecondNumber = false;
    isTypingFirstNumber = true;
    isStartedTypingSecondNumber = false;
    isStartedTypingFirstNumber = false;
}


let num1 = "";
let num2 = "";
let operation = "";
let activeNum = "";
let isOperandSelected = false;
let isTypingSecondNumber = false;
let isTypingFirstNumber = true;
let isStartedTypingSecondNumber = false;
let isStartedTypingFirstNumber = false;
let displayDiv = document.querySelector("#display");

// Add click listener to all buttons. Change color on mousedown and mouse up

let buttons = document.getElementsByClassName("button");
for (let button of buttons){
    button.addEventListener("mousedown", e => {
        e.target.style.backgroundColor = "#d1d1d1ff";
    })
    button.addEventListener("mouseup", e => {
        e.target.style.backgroundColor = "#eeeeee";
    })
}

// Add click listener to all numbered buttons. Populate the display with the number pressed

let numberButtons = document.getElementsByClassName("button number");
for (let numberButton of numberButtons){
    numberButton.addEventListener("click", PopulateDisplayWithNumber);
}

// Clear press

document.querySelector(".button.clear").addEventListener("click", ClearEverything)


// Equals press

document.querySelector(".button.equals").addEventListener("click", e => {
    if(isTypingFirstNumber){
        return;
    }
    if(isTypingSecondNumber && !isStartedTypingSecondNumber){
        return;
    }
    if(operation == "="){
        return;
    }
    
    num2 = activeNum;
    let calculationResult = Operate(num1, operation, num2);
    displayDiv.textContent = calculationResult;
    activeNum = calculationResult;
    operation = "=";
    isOperandSelected = false;
    isTypingSecondNumber = false;
    isStartedTypingSecondNumber = false;
})

// Add press

document.querySelector(".button.add").addEventListener("click", e =>{
    if(isTypingFirstNumber && !isStartedTypingFirstNumber){
        return;
    }
    if(isStartedTypingSecondNumber){
        return;
    }
    if(isOperandSelected){
        operation = "+"
        displayDiv.textContent = displayDiv.textContent.slice(0, displayDiv.textContent.length - 1) + e.target.textContent;
    }
    else{
        num1 = activeNum;
        activeNum = "";
        operation = "+";
        displayDiv.textContent = displayDiv.textContent + e.target.textContent;
        isOperandSelected = true;
        isTypingSecondNumber = true;
        isTypingFirstNumber = false;
        isStartedTypingFirstNumber = false;
    }
});

// Subtract press

document.querySelector(".button.subtract").addEventListener("click", e =>{
    if(isTypingFirstNumber && !isStartedTypingFirstNumber){
        return;
    }
    if(isStartedTypingSecondNumber){
        return;
    }
    if(isOperandSelected){
        operation = "-"
        displayDiv.textContent = displayDiv.textContent.slice(0, displayDiv.textContent.length - 1)  + e.target.textContent;
    }
    else{
        num1 = activeNum;
        activeNum = "";
        operation = "-";
        displayDiv.textContent = displayDiv.textContent + e.target.textContent;
        isOperandSelected = true;
        isTypingSecondNumber = true;
        isTypingFirstNumber = false;
        isStartedTypingFirstNumber = false;
    }
});

// Multiply press

document.querySelector(".button.multiply").addEventListener("click", e =>{
    if(isTypingFirstNumber && !isStartedTypingFirstNumber){
        return;
    }
    if(isStartedTypingSecondNumber){
        return;
    }
    if(isOperandSelected){
        operation = "*"
        displayDiv.textContent = displayDiv.textContent.slice(0, displayDiv.textContent.length - 1)  + e.target.textContent;
    }
    else{
        num1 = activeNum;
        activeNum = "";
        operation = "*";
        displayDiv.textContent = displayDiv.textContent + e.target.textContent;
        isOperandSelected = true;
        isTypingSecondNumber = true;
        isTypingFirstNumber = false;
        isStartedTypingFirstNumber = false;
    }
});

// Divide press

document.querySelector(".button.divide").addEventListener("click", e =>{
    if(isTypingFirstNumber && !isStartedTypingFirstNumber){
        return;
    }
    if(isStartedTypingSecondNumber){
        return;
    }
    if(isOperandSelected){
        operation = "/"
        displayDiv.textContent = displayDiv.textContent.slice(0, displayDiv.textContent.length - 1)  + e.target.textContent;
    }
    else{
        num1 = activeNum;
        activeNum = "";
        operation = "/";
        displayDiv.textContent = displayDiv.textContent + e.target.textContent;
        isOperandSelected = true;
        isTypingSecondNumber = true;
        isTypingFirstNumber = false;
        isStartedTypingFirstNumber = false;
    }
});

