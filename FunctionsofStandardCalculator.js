var simpleOperation;
let l1;
let l2;

function clearCE(){
	result.txt.value='0';
	present=0;
}
function myZero(x){
	z1=document.getElementById('number').value;
	  if(z1=="0"||z1==undefined||z1==null||z1==NaN){
	  result.txt.value="0";
	  }
	  else
	  result.txt.value=result.txt.value+x;
	  
	}
function diffrentZero(x){
  
	  if(document.getElementById('number').value=="0"){
		  result.txt.value="";
		  result.txt.value=result.txt.value+x;
	  }
	  
	  else 
	  result.txt.value=result.txt.value+x;
}

function myOperations(x){
	l1 = document.getElementById("number").value; 
   
	present=0;
	result.txt.value='0';
	simpleOperation=x;
		
}

function myEqual(x){
present=0;    
l2 = document.getElementById("number").value;
if (l1==undefined){
	  result.txt.value=l2;    
		   }
else {
	  result.txt.value=' ';
		  switch (simpleOperation){
			case "+":
			document.result.txt.value=((parseFloat(l1)+parseFloat(l2))); break;
			case "-":
			document.result.txt.value=((parseFloat(l1)-parseFloat(l2))); break;
			case "*":
			document.result.txt.value=((parseFloat(l1)*parseFloat(l2))); break;
			case "/":
				if(l2==0){
				 alert("DIVISION NOT POSSIBLE"); break;}
			  else{
				document.result.txt.value=((parseFloat(l1)/parseFloat(l2))); break;}
								  }
	  }

						  }
function arrowDelete(x) {
  var delNumber = document.getElementById("number").value;
  if (present==0){
  delNumber=parseFloat(delNumber-(delNumber%10))/10;
  result.txt.value=delNumber;
  }
  else if (present==1){
	  var delDecimal=delNumber.substring(-delNumber.length,delNumber.length-1);
	  result.txt.value=parseFloat(delDecimal);
  }
}

function plusMinus(x){
  present=0;
p1=document.getElementById("number").value;
  if (p1==0){
	  document.result.txt.value=p1;
  }
  else {
	  document.result.txt.value=-1*p1;
  }
}

function oneBy(x){
  present=0;
  o1=document.getElementById("number").value;
  if (o1==0){
	  alert("DIVISION NOT POSSIBLE");
  }
  else {
	  document.result.txt.value=1/l1;
  }
}
function mySqrt(z) {
present=0;
s1=document.getElementById("number").value;

  if ( s1>=0 ){
  result.txt.value=' ';
  var Sqrte=Math.sqrt(s1);
  document.result.txt.value= Sqrte;

  }
  else{
  alert("NEGATIVE VALUE !");
  }
 
}
var present;

function dotSymbol(x){
  present++
  y1=document.getElementById("number").value;
 
	  if (present==1||present==0){
		  result.txt.value=result.txt.value+x;
	  }
	  else if (present > 1){
		  result.txt.value=y1;   
	  }  
}
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode != 46 && charCode > 31
  && (charCode < 48 || charCode > 57))
	  return false;

  return true;
}
