let currentInput = '';
let currentOperation = '';
let preveiousInput = '';

function appendNumber(number){
    currentInput += number;
    document.getElementById('screen').value = `${preveiousInput} ${currentOperation} ${currentInput}`;

}

function appendOperation(operation){
    if(currentInput === '') return;
    if(preveiousInput !==''){
        calculate();
    }
    currentOperation = operation;
    preveiousInput=currentInput;
    currentInput='';
    document.getElementById('screen').value=`${preveiousInput} ${currentOperation}`;
}

function calculate(){
    if(preveiousInput ==='' || currentInput==='')return;
    let result;
    let prev=parseFloat(preveiousInput);
    let current =parseFloat(currentInput);
    switch(currentOperation){
        case '+':
            result=prev+current;
            break;
        case '-':
            result=prev-current;
            break;
        case '*':
            result=prev*current;
            break;
        case '/':
            if (current===0){
                alert("Cannot divide by ZERO !");
                return;
            }
                result=prev/current;
            break;
        default:
            return;
    }
    currentInput=result.toString();
    currentOperation='';
    preveiousInput='';
    document.getElementById('screen').value=currentInput;
}