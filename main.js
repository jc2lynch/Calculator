
var tipHeader = document.getElementById('tip-header');
var total= document.getElementById("total");
var serviceWhat= document.getElementById("service-what")
var serviceOkay= document.getElementById("service-okay")
var serviceGood= document.getElementById("service-good")
var serviceGreat= document.getElementById("service-great")

function displayTip(tipAmount) {
	var tip= total.value * tipAmount;
	alert( tip );
}

total.onkeyup= function() { tipHeader.innerHTML = total.value; }

serviceWhat.onclick= function() {
	displayTip(0.10);
}

serviceOkay.onclick= function(){
	displayTip(0.15);
}
serviceGood.onclick= function(){
	displayTip(0.20);
}

serviceGreat.onclick= function(){
	displayTip(0.25);
}
