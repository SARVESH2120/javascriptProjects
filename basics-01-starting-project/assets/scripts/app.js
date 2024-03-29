const defaultResult = 0; 
let currentResult = defaultResult;
let logEntries = [];



function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription  = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription)

}
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };

    logEntries.push(logEntry);
    console.log(logEntry)
}

function calculateResult(calculationType){

    if(calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" &&
    calculationType !== "MODULO" ||
    !enteredNumber 
    ){
        return;
    }



    const enteredNumber =  getUserInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === "ADD"){
        currentResult = currentResult + parseInt(enteredNumber );
        mathOperator = "+";
    }else if(calculationType === "SUBTRACT"){
        currentResult = currentResult - parseInt(enteredNumber);
        mathOperator = "-";
    }else if(calculationType === "DIVIDE"){
        currentResult = currentResult / parseInt(enteredNumber );
        mathOperator = "/";
    }else if(calculationType === "MULTIPLY"){
        currentResult = currentResult * parseInt(enteredNumber );
        mathOperator = "*";
    }else if(calculationType === "MODULO"){
        currentResult = currentResult % parseInt(enteredNumber );
        mathOperator = "%";
    }

   


    createAndWriteOutput(mathOperator, initialResult, enteredNumber );
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
   
}

function add(){
    calculateResult("ADD");
}

function subtract(){
   calculateResult("SUBTRACT")
}

function multiply(){
   calculateResult("MULTIPLY");
}

function divide(){
   calculateResult("DIVIDE")
}

function modulo(){
   calculateResult("MODULO")

}

addBtn.addEventListener('click' , add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click' , multiply);
divideBtn.addEventListener('click', divide);
moduloBtn.addEventListener('click' , modulo);



