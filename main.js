
var tipHeader = document.getElementById('tip-header');
var total= document.getElementById("total");
var serviceWhat= document.getElementById("service-what");
var serviceOkay= document.getElementById("service-okay");
var serviceGood= document.getElementById("service-good");
var serviceGreat= document.getElementById("service-great");
var display=document.getElementById("display");

function displayTip(tipAmount) {
	var tip= total.value * tipAmount;
	display.innerHTML= tip;
}

total.onkeyup= function() { tipHeader.innerHTML = total.value; }

//displaying the tip at 10 %
serviceWhat.onclick= function() {
	displayTip(0.10);
}

//this is displaying the tip at 15%
serviceOkay.onclick= function(){
	displayTip(0.15);
}
//this us showing what the tip is at 20%
serviceGood.onclick= function(){
	displayTip(0.20);
}

//this is showing the tip at 25%
serviceGreat.onclick= function(){
	displayTip(0.25);
}
