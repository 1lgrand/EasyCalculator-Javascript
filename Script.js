function calculator(val,display){
    display.value += val;
}

function clearDisplay(display){
    display.value = "";
}

function viewResult(display){
    result = eval(display.value);
    display.value = "";
    display.value = result;
}