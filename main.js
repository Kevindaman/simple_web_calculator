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
        if(Number.isInteger(num1)){
            num1 = Number.parseInt(num1);
        }
        else{
            num1 = Number.parseFloat(num1);
        }
    }

    if(typeof num2 != "number"){
        if(Number.isInteger(num2)){
            num2 = Number.parseInt(num2);
        }
        else{
            num2 = Number.parseFloat(num2);
        }
    }

    switch (operation){
        case "+":
            return Math.round(Add(num1, num2) * 1000) / 1000;
        case "-":
            return Math.round(Subtract(num1, num2) * 1000) / 1000;
        case "*":
            return Math.round(Multiply(num1, num2) * 1000) / 1000;
        case "/":
            return Math.round(Divide(num1, num2) * 1000) / 1000;
        default:
            return;
    }
}

function PopulateDisplayWithNumber(e, num=null){
    
    if(isDivideByZeroError){
        displayDiv.textContent = "";
        isDivideByZeroError = false;
    }
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
    if(num != null){
        displayDiv.textContent = displayDiv.textContent + num;
        activeNum = activeNum + num;
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
    isDivideByZeroError = false;
    isDecimal = false;
}

function AddLogic(e, s=null){
    let sign;
    if(s == null) sign = e.target.textContent;
    else sign = s;

    if(isTypingFirstNumber && !isStartedTypingFirstNumber){
        return;
    }
    if(isStartedTypingSecondNumber){
        if(activeNum == "0" && operation == "/"){
            ClearEverything();
            displayDiv.textContent = "Divide by 0 ERROR!";
            isDivideByZeroError = true;
            return;
        }
        num2 = activeNum;
        let calculationResult = Operate(num1, operation, num2);
        displayDiv.textContent = calculationResult + "+";
        num1 = calculationResult;
        activeNum = "";
        isStartedTypingSecondNumber = false;
        isDecimal = false;
    }
    if(isOperandSelected){
        operation = "+"
        displayDiv.textContent = displayDiv.textContent.slice(0, displayDiv.textContent.length - 1) + sign;
    }
    else{
        num1 = activeNum;
        activeNum = "";
        operation = "+";
        displayDiv.textContent = displayDiv.textContent + sign;
        isOperandSelected = true;
        isTypingSecondNumber = true;
        isTypingFirstNumber = false;
        isStartedTypingFirstNumber = false;
        isDecimal = false;
    }
}

function SubtractLogic(e, s=null){
    let sign;
    if(s == null) sign = e.target.textContent;
    else sign = s;

    if(isTypingFirstNumber && !isStartedTypingFirstNumber){
        return;
    }
    if(isStartedTypingSecondNumber){
        if(activeNum == "0" && operation == "/"){
            ClearEverything();
            displayDiv.textContent = "Divide by 0 ERROR!";
            isDivideByZeroError = true;
            return;
        }
        num2 = activeNum;
        let calculationResult = Operate(num1, operation, num2);
        displayDiv.textContent = calculationResult + "-";
        num1 = calculationResult;
        activeNum = "";
        isStartedTypingSecondNumber = false;
        isDecimal = false;
    }
    if(isOperandSelected){
        operation = "-"
        displayDiv.textContent = displayDiv.textContent.slice(0, displayDiv.textContent.length - 1)  + sign;
    }
    else{
        num1 = activeNum;
        activeNum = "";
        operation = "-";
        displayDiv.textContent = displayDiv.textContent + sign;
        isOperandSelected = true;
        isTypingSecondNumber = true;
        isTypingFirstNumber = false;
        isStartedTypingFirstNumber = false;
        isDecimal = false;
    }
}

function MultiplyLogic(e, s=null){
    let sign;
    if(s == null) sign = e.target.textContent;
    else sign = s;

    if(isTypingFirstNumber && !isStartedTypingFirstNumber){
        return;
    }
    if(isStartedTypingSecondNumber){
        if(activeNum == "0" && operation == "/"){
            ClearEverything();
            displayDiv.textContent = "Divide by 0 ERROR!";
            isDivideByZeroError = true;
            return;
        }
        num2 = activeNum;
        let calculationResult = Operate(num1, operation, num2);
        displayDiv.textContent = calculationResult + "*";
        num1 = calculationResult;
        activeNum = "";
        isStartedTypingSecondNumber = false;
        isDecimal = false;
    }
    if(isOperandSelected){
        operation = "*"
        displayDiv.textContent = displayDiv.textContent.slice(0, displayDiv.textContent.length - 1)  + sign;
    }
    else{
        num1 = activeNum;
        activeNum = "";
        operation = "*";
        displayDiv.textContent = displayDiv.textContent + sign;
        isOperandSelected = true;
        isTypingSecondNumber = true;
        isTypingFirstNumber = false;
        isStartedTypingFirstNumber = false;
        isDecimal = false;
    }
}

function DivideLogic(e, s=null){
    let sign;
    if(s == null) sign = e.target.textContent;
    else sign = s;

    if(isTypingFirstNumber && !isStartedTypingFirstNumber){
        return;
    }
    if(isStartedTypingSecondNumber){
        if(activeNum == "0"){
            ClearEverything();
            displayDiv.textContent = "Divide by 0 ERROR!";
            isDivideByZeroError = true;
            return;
        }
        num2 = activeNum;
        let calculationResult = Operate(num1, operation, num2);
        displayDiv.textContent = calculationResult + "/";
        num1 = calculationResult;
        activeNum = "";
        isStartedTypingSecondNumber = false;
        isDecimal = false;
    }
    if(isOperandSelected){
        operation = "/"
        displayDiv.textContent = displayDiv.textContent.slice(0, displayDiv.textContent.length - 1)  + sign;
    }
    else{
        num1 = activeNum;
        activeNum = "";
        operation = "/";
        displayDiv.textContent = displayDiv.textContent + sign;
        isOperandSelected = true;
        isTypingSecondNumber = true;
        isTypingFirstNumber = false;
        isStartedTypingFirstNumber = false;
        isDecimal = false;
    }
}

function EqualsLogic(e){
    if(isTypingFirstNumber){
        return;
    }
    if(isTypingSecondNumber && !isStartedTypingSecondNumber){
        return;
    }
    if(operation == "="){
        return;
    }

    if(activeNum == "0" && operation == "/"){
        ClearEverything();
        displayDiv.textContent = "Divide by 0 ERROR!";
        isDivideByZeroError = true;
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
}

function DeleteLogic(e){
    if(operation == "="){
        return;
    }
    if(activeNum == ""){
        return;
    }
    let lastChar = activeNum.at(activeNum.length-1);
    if(lastChar == "."){
        isDecimal = false;
    }
    activeNum = activeNum.slice(0, activeNum.length-1);
    displayDiv.textContent = displayDiv.textContent.slice(0, displayDiv.textContent.length-1)
}

function DecimalLogic(e, s=null){
    let sign;
    if(s == null) sign = e.target.textContent;
    else sign = s;
    if(activeNum != "" && !isDecimal && operation != "="){
        activeNum = activeNum + sign;
        displayDiv.textContent = displayDiv.textContent + sign; 
        isDecimal = true;
    }
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
let isDivideByZeroError = false;
let isDecimal = false;
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

// Decimal press   

document.querySelector(".button.decimal").addEventListener("click", DecimalLogic)

// Delete press

document.querySelector(".button.delete").addEventListener("click", DeleteLogic)


// Equals press

document.querySelector(".button.equals").addEventListener("click", EqualsLogic)

// Add press

document.querySelector(".button.add").addEventListener("click", AddLogic);

// Subtract press

document.querySelector(".button.subtract").addEventListener("click", SubtractLogic);

// Multiply press

document.querySelector(".button.multiply").addEventListener("click", MultiplyLogic);

// Divide press

document.querySelector(".button.divide").addEventListener("click", DivideLogic);


window.addEventListener("keydown", e => {
    if((e.code == "Digit1" || e.code == "Numpad1") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "1");
        Array.from(buttons).find(button => button.textContent == "1").style.backgroundColor = "#d1d1d1ff";
    }

    else if((e.code == "Digit2" || e.code == "Numpad2") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "2");
        Array.from(buttons).find(button => button.textContent == "2").style.backgroundColor = "#d1d1d1ff";
    }

    else if((e.code == "Digit3" || e.code == "Numpad3") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "3");
        Array.from(buttons).find(button => button.textContent == "3").style.backgroundColor = "#d1d1d1ff";
    }

    else if((e.code == "Digit4" || e.code == "Numpad4") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "4");
        Array.from(buttons).find(button => button.textContent == "4").style.backgroundColor = "#d1d1d1ff";
    }

    else if((e.code == "Digit5" || e.code == "Numpad5") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "5");
        Array.from(buttons).find(button => button.textContent == "5").style.backgroundColor = "#d1d1d1ff";
    }

    else if((e.code == "Digit6" || e.code == "Numpad6") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "6");
        Array.from(buttons).find(button => button.textContent == "6").style.backgroundColor = "#d1d1d1ff";
    }

    else if((e.code == "Digit7" || e.code == "Numpad7")&& !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "7");
        Array.from(buttons).find(button => button.textContent == "7").style.backgroundColor = "#d1d1d1ff";
    }

    else if((e.code == "Digit8" || e.code == "Numpad8") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "8");
        Array.from(buttons).find(button => button.textContent == "8").style.backgroundColor = "#d1d1d1ff";
    }

    else if((e.code == "Digit9" || e.code == "Numpad9") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "9");
        Array.from(buttons).find(button => button.textContent == "9").style.backgroundColor = "#d1d1d1ff";
    }

    else if((e.code == "Digit0" || e.code == "Numpad0") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        PopulateDisplayWithNumber(e, "0");
        Array.from(buttons).find(button => button.textContent == "0").style.backgroundColor = "#d1d1d1ff";
    }

    else if(e.code == "Backspace"){
        DeleteLogic(e);
        Array.from(buttons).find(button => button.textContent == "Delete").style.backgroundColor = "#d1d1d1ff";
    }

    else if(e.code == "NumpadAdd" || e.key == "+"){
        AddLogic(e, "+");
        Array.from(buttons).find(button => button.textContent == "+").style.backgroundColor = "#d1d1d1ff";
    }

    else if(e.code == "NumpadSubtract" || e.key == "-"){
        SubtractLogic(e, "-");
        Array.from(buttons).find(button => button.textContent == "-").style.backgroundColor = "#d1d1d1ff";
    }

    else if(e.code == "NumpadMultiply" || e.key == "*"){
        MultiplyLogic(e, "*");
        Array.from(buttons).find(button => button.textContent == "*").style.backgroundColor = "#d1d1d1ff";
    }

    else if(e.code == "NumpadDivide" || e.key == "/"){
        DivideLogic(e, "/");
        Array.from(buttons).find(button => button.textContent == "/").style.backgroundColor = "#d1d1d1ff";
    }

    else if(e.code == "Delete"){
        ClearEverything();
        Array.from(buttons).find(button => button.textContent == "Clear").style.backgroundColor = "#d1d1d1ff";
    }

    else if(e.code == "Enter" || e.code == "NumpadEnter" || e.key == "="){
        EqualsLogic(e);
        Array.from(buttons).find(button => button.textContent == "=").style.backgroundColor = "#d1d1d1ff";
    }

    else if(e.code == "NumpadDecimal" || e.key == "." || e.key == "," || e.code == "Comma" || e.code == "Period"){
        DecimalLogic(e, ".");
        Array.from(buttons).find(button => button.textContent == ".").style.backgroundColor = "#d1d1d1ff";
    }

    
})

window.addEventListener("keyup", e => {
        if((e.code == "Digit1" || e.code == "Numpad1") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "1").style.backgroundColor = "#eeeeee";
    }

    else if((e.code == "Digit2" || e.code == "Numpad2") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "2").style.backgroundColor = "#eeeeee";
    }

    else if((e.code == "Digit3" || e.code == "Numpad3") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "3").style.backgroundColor = "#eeeeee";
    }

    else if((e.code == "Digit4" || e.code == "Numpad4") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "4").style.backgroundColor = "#eeeeee";
    }

    else if((e.code == "Digit5" || e.code == "Numpad5") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "5").style.backgroundColor = "#eeeeee";
    }

    else if((e.code == "Digit6" || e.code == "Numpad6") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "6").style.backgroundColor = "#eeeeee";
    }

    else if((e.code == "Digit7" || e.code == "Numpad7")&& !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "7").style.backgroundColor = "#eeeeee";
    }

    else if((e.code == "Digit8" || e.code == "Numpad8") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "8").style.backgroundColor = "#eeeeee";
    }

    else if((e.code == "Digit9" || e.code == "Numpad9") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "9").style.backgroundColor = "#eeeeee";
    }

    else if((e.code == "Digit0" || e.code == "Numpad0") && !e.shiftKey && !e.altKey && !e.ctrlKey){
        Array.from(buttons).find(button => button.textContent == "0").style.backgroundColor = "#eeeeee";
    }

    else if(e.code == "Backspace"){
        Array.from(buttons).find(button => button.textContent == "Delete").style.backgroundColor = "#eeeeee";
    }

    else if(e.code == "NumpadAdd" || e.key == "+"){
        Array.from(buttons).find(button => button.textContent == "+").style.backgroundColor = "#eeeeee";
    }

    else if(e.code == "NumpadSubtract" || e.key == "-"){
        Array.from(buttons).find(button => button.textContent == "-").style.backgroundColor = "#eeeeee";
    }

    else if(e.code == "NumpadMultiply" || e.key == "*"){
        Array.from(buttons).find(button => button.textContent == "*").style.backgroundColor = "#eeeeee";
    }

    else if(e.code == "NumpadDivide" || e.key == "/"){
        Array.from(buttons).find(button => button.textContent == "/").style.backgroundColor = "#eeeeee";
    }

    else if(e.code == "Delete"){
        Array.from(buttons).find(button => button.textContent == "Clear").style.backgroundColor = "#eeeeee";
    }

    else if(e.code == "Enter" || e.code == "NumpadEnter" || e.key == "="){
        Array.from(buttons).find(button => button.textContent == "=").style.backgroundColor = "#eeeeee";
    }

    else if(e.code == "NumpadDecimal" || e.key == "." || e.key == "," || e.code == "Comma" || e.code == "Period"){
        Array.from(buttons).find(button => button.textContent == ".").style.backgroundColor = "#eeeeee";
    }
})