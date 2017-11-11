let simpleOperation;
let l1;
let l2;
let keyValue;

function clearCE() {
	l1 = undefined;
	l2 = undefined;
	result.txt.value = '0';
	present = 0;
}

function diffrentZero(keyValue) {

	if (document.getElementById('number').value == "0") {
		result.txt.value="";
		result.txt.value = result.txt.value + keyValue;
	}
	else if (l1 != undefined && l2 != undefined) {
		result.txt.value = keyValue;
		l2 = keyValue;
	}
	else{
		l1=keyValue;
		result.txt.value = result.txt.value + keyValue;
	}
}

function operators(operators) {


	present = 0;
	simpleOperation = operators;
	if (l1 == undefined && l2 == undefined) {
		l1 = document.getElementById("number").value;
		result.txt.value = ' ';
	}
	else if (l1 != undefined && l2 == undefined) {
		l2 = document.getElementById("number").value;
		result.txt.value = ' ';
		present = 0;
		executeOperation(simpleOperation);
		l1 = document.getElementById("number").value;

	}
	else if (l1 != undefined && l2 != undefined) {
		result.txt.value = keyValue;
		result.txt.value = ' ';
		
		executeOperation(simpleOperation);
		l1 = document.getElementById("number").value;
	}
	
	l2 = 0;
}

function executeOperation(operator) {
	switch (operator) {
		case "+":
			document.result.txt.value = ((parseFloat(l1) + parseFloat(l2))); break;
		case "-":
			document.result.txt.value = ((parseFloat(l1) - parseFloat(l2))); break;
		case "*":
			document.result.txt.value = ((parseFloat(l1) * parseFloat(l2))); break;
		case "/":
			if (l2 == 0) {
				alert("DIVISION NOT POSSIBLE"); break;
			}
			else {
				document.result.txt.value = ((parseFloat(l1) / parseFloat(l2))); break;
			}

	}
}
function equalSymbol() {
	present = 0;
	l2 = document.getElementById("number").value;
	if (l1 == undefined) {
		result.txt.value = l2;
	}
	else {
		result.txt.value = ' ';
		executeOperation(simpleOperation);
	}

}
function arrowDelete() {
	var delNumber = document.getElementById("number").value;
	if (present == 0) {
		delNumber = parseFloat(delNumber - (delNumber % 10)) / 10;
		result.txt.value = delNumber;
	}
	else if (present == 1) {
		var delDecimal = delNumber.substring(-delNumber.length, delNumber.length - 1);
		result.txt.value = parseFloat(delDecimal);
	}
}

function positiveOrNegative() {
	present = 0;
	p1 = document.getElementById("number").value;
	if (p1 == 0) {
		document.result.txt.value = p1;
	}
	else {
		document.result.txt.value = -1 * p1;
	}
}

function oneByValue() {
	present = 0;
	o1 = document.getElementById("number").value;
	if (o1 == 0) {
		alert("DIVISION NOT POSSIBLE");
	}
	else {
		document.result.txt.value = 1 / o1;
	}
}
function theSecondRoot() {
	present = 0;
	s1 = document.getElementById("number").value;

	if (s1 >= 0) {
		result.txt.value = ' ';
		var Sqrte = Math.sqrt(s1);
		document.result.txt.value = Sqrte;

	}
	else {
		alert("NEGATIVE VALUE !");
	}

}
var present;

function symbolDot(dot) {
	present++
	y1 = document.getElementById("number").value;

	if (present == 1 || present == 0) {
		result.txt.value = result.txt.value + dot;
	}
	else if (present > 1) {
		result.txt.value = y1;
	}
}
function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode != 46 && charCode > 31
		&& (charCode < 48 || charCode > 57))
		return false;

	return true;
}
function percentage() {
	var parcentageValue = document.getElementById("number").value;
	result.txt.value = ' ';
	result.txt.value = parcentageValue / 100;
}

