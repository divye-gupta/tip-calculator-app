// tip calculator

let totalTip,tipAmount,nPeople,billAmount,tipPercent;

function displayValues(){
    tipAmount = (tipPercent*billAmount)/100;
    nPeople= document.getElementById("Number-of-people").value;
    totalTip = (nPeople * tipAmount);
    document.getElementById("output2").innerHTML = totalTip;
    document.getElementById("output1").innerHTML = tipAmount;
}

function fbtn5() {
    tipPercent = document.getElementById("btn5").value;   
    console.log("5%");       
}

function fbtn10() {
    tipPercent = document.getElementById("btn10").value; 
    console.log("btn10");         
}

function fbtn15() {
    tipPercent = document.getElementById("btn15").value;  
    console.log("btn15");        
}

function fbtn25() {
    tipPercent = document.getElementById("btn25").value; 
    console.log("btn25");         
}

function fbtn50() {
    tipPercent = document.getElementById("btn50").value;  
    console.log("btn50");       
}

function fCustomBill(bill){
    billAmount=bill;
}

function fCustomTip(tip){
    tipPercent=tip;
}

function reset(){
    totalTip=0;
    tipAmount=0;
    nPeople=0;
    billAmount=0;
    tipPercent=0;
    displayValues();
    console.log("reset");
}


