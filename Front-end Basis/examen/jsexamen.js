var getal1 = "0";
var getal2 = "0";
var operator = "leeg";

function Number(cijfer){
    if(operator == "leeg"){
        if(getal1 == "0"){
            getal1 = cijfer.toString();
        } else {
            getal1 += cijfer.toString();
        }
        document.getElementById("inputB").value = getal1; 
    } else {
        if(getal2 == "0"){
            getal2 = cijfer.toString();
        } else {
            getal2 += cijfer.toString();
        }
        Uitkomst();
        document.getElementById("inputB").value = getal2; 
    }
    if(parseInt(getal1) > 1000 || parseInt(getal2) > 1000){
        document.getElementById("errorT").innerHTML = "Opgelet... Getal is groter dan 1000!"
    }
}

function Operator(op){
    if(op == 1){
        operator = "+";
        document.getElementById("inputB").value = "0";
        document.getElementById("uitkomstB").value = getal1;
    } else {
        operator = "-";
        document.getElementById("inputB").value = "0";
        document.getElementById("uitkomstB").value = getal1;
    }
}

function Uitkomst(){
    switch(operator){
        case '+':
            document.getElementById("uitkomstB").value = parseInt(getal1) + parseInt(getal2); 
            break;
        case '-':
            document.getElementById("uitkomstB").value = parseInt(getal1) - parseInt(getal2); 
            break;
    }
}

function Reset(){
    getal1 = "0";
    getal2 = "0";
    document.getElementById("inputB").value = "0"; 
    document.getElementById("uitkomstB").value = "0"
    operator = "leeg";
    document.getElementById("errorT").innerHTML = " ";
}