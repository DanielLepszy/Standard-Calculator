	 function clearCE(){
	  	result.txt.value='0';
		present=0;
	  }
	  function myFunction(x) {
		  present=0;
	  		if (document.getElementById("number").value==0){
	  			result.txt.value="";
	  			result.txt.value=result.txt.value+x;
	  						 }
	 		else if (document.getElementById("number").value==0.0 ||document.getElementById("number").value=="-"){

	 			result.txt.value=result.txt.value+x;
	 		}

			else if (document.getElementById("number").value=="+"||
				 document.getElementById("number").value=="*"||document.getElementById("number").value=="/"){
			l1=0;
			document.result.txt.value=perseFloat(l1);
			}

	  		else {
	  			result.txt.value=result.txt.value+x;
	  		 	 }
	  	}

	  function myOperations(x){
		present=0;
	  	l1 = document.getElementById("number").value;
	  	result.txt.value=' ';
		simpleOperation=x;

	  }

	  var simpleOperation;
	  var l1;
	  var l2;


	function myEqual(x){
	  present=0;
	  l2 = document.getElementById("number").value;
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
	function arrowDelete(x) {
		
		var delNumber = document.getElementById("number").value;
		delNumber=parseFloat(delNumber-(delNumber%10))/10;
		result.txt.value=delNumber;
	}

	function plusMinus(x){
	present=0;
	l1=document.getElementById("number").value;
		if (l1==0){
			document.result.txt.value=l1;
		}
		else {
			document.result.txt.value=-1*l1;
		}
	}

	function oneBy(x){
		present=0;
		l1=document.getElementById("number").value;
		if (l1==0){
			alert("DIVISION NOT POSSIBLE");
		}
		else {
			document.result.txt.value=1/l1;
		}
	}
	function mySqrt(z) {
	present=0;
	l1=document.getElementById("number").value;

		if ( l1>=0 ){
		result.txt.value=' ';
		var Sqrte=Math.sqrt(l1);
		document.result.txt.value= Sqrte;

		}
		else{
		alert("NEGATIVE VALUE !");
		}

	}
	function dotSymbol(x){
	present++
    	l1=document.getElementById("number").value;
        if (present==1){
            result.txt.value=result.txt.value+x;
        }
        else if (present > 1){
            result.txt.value=l1;   
        }  
}
