let screen =document.getElementById("screen");

function appendNumber(num){
    screen.value+=num;
}
function appendOperation(oper){
    screen.value+=oper;
}
function calculate(){
    try{
        screen.value=eval(screen.value);
}
    catch(error){
        screen.value="Error";
}
}
function Reset(){
    screen.value="";
}