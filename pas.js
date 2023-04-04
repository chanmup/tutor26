document.addEventListener('DOMContentLoaded', function () {
	
	//Create the arrays - some characters removed for human legibility
	var theNumbers = ["2","3","4","5","6","7","8","9"];
	var theLetters = ["a","b","c","d","e","f","g","h","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
	var theSpecials = ["!","@","#","$","%","&","*","+","="];

	document.getElementById("tfSubmit1").addEventListener("click", function () {
		var a= 1;
		var x = 0;
		
		while(x < a){
			//THIS GOES HERE?
			var allPwds = "";
			var newPwd = "";
			
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			allPwds += newPwd;
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			newPwd = newPwd.toUpperCase(); 
			allPwds += newPwd;
			newPwd = theSpecials[Math.floor(Math.random()*theSpecials.length)];
			allPwds += newPwd;
			newPwd = theNumbers[Math.floor(Math.random()*theNumbers.length)];
			allPwds += newPwd;
			var xx = 0;
			while(xx < 4){
				newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
				allPwds += newPwd;
				xx++;
			}
			
			//scramble the word
			allPwds = allPwds.split('').sort(function(){return 0.5-Math.random()}).join('');
			x++;
			//Put new password in place
			document.getElementById("newText1").value = allPwds;
		}
	});


	document.getElementById("tfSubmit2").addEventListener("click", function () {
		var a= 1;
		var x = 0;
		
		while(x < a){
			//THIS GOES HERE?
			var allPwds = "";
			var newPwd = "";
			
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			allPwds += newPwd;
			newPwd = theNumbers[Math.floor(Math.random()*theNumbers.length)];
			allPwds += newPwd;
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			newPwd = newPwd.toUpperCase(); 
			allPwds += newPwd;
			var xx = 0;
			while(xx < 2){
				newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
				allPwds += newPwd;
				xx++;
			}			
			allPwds += newPwd;
			newPwd = theSpecials[Math.floor(Math.random()*theSpecials.length)];
			allPwds += newPwd;
			newPwd = theNumbers[Math.floor(Math.random()*theNumbers.length)];
			allPwds += newPwd;
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			newPwd = newPwd.toUpperCase(); 
			allPwds += newPwd;
			var xxx = 0;
			while(xxx < 2){
				newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
				allPwds += newPwd;
				xxx++;
			}
			newPwd = theSpecials[Math.floor(Math.random()*theSpecials.length)];
			allPwds += newPwd;
			//scramble the word
			allPwds = allPwds.split('').sort(function(){return 0.5-Math.random()}).join('');
			x++;
			//Put new password in place
			document.getElementById("newText2").value = allPwds;
		}
	});
	
		document.getElementById("tfSubmit3").addEventListener("click", function () {
		var a= 1;
		var x = 0;
		
		while(x < a){
			//THIS GOES HERE?
			var allPwds = "";
			var newPwd = "";
			
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			allPwds += newPwd;
			newPwd = theNumbers[Math.floor(Math.random()*theNumbers.length)];
			allPwds += newPwd;
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			newPwd = newPwd.toUpperCase(); 
			allPwds += newPwd;
			var xx = 0;
			while(xx < 5){
				newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
				allPwds += newPwd;
				xx++;
			}			
			allPwds += newPwd;
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			newPwd = newPwd.toUpperCase(); 
			allPwds += newPwd;
			newPwd = theSpecials[Math.floor(Math.random()*theSpecials.length)];
			allPwds += newPwd;
			newPwd = theNumbers[Math.floor(Math.random()*theNumbers.length)];
			allPwds += newPwd;
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			newPwd = newPwd.toUpperCase(); 
			allPwds += newPwd;
			var xxx = 0;
			while(xxx < 5){
				newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
				allPwds += newPwd;
				xxx++;
			}
			newPwd = theNumbers[Math.floor(Math.random()*theNumbers.length)];
			allPwds += newPwd;
			newPwd = theSpecials[Math.floor(Math.random()*theSpecials.length)];
			allPwds += newPwd;
			//scramble the word
			allPwds = allPwds.split('').sort(function(){return 0.5-Math.random()}).join('');
			x++;
			//Put new password in place
			document.getElementById("newText3").value = allPwds;
		}
        
  	});
	
		document.getElementById("tfSubmit4").addEventListener("click", function () {
		var a= 1;
		var x = 0;
		
		while(x < a){
			//THIS GOES HERE?
			var allPwds = "";
			var newPwd = "";
			
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			allPwds += newPwd;
			newPwd = theNumbers[Math.floor(Math.random()*theNumbers.length)];
			allPwds += newPwd;
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			newPwd = newPwd.toUpperCase(); 
			allPwds += newPwd;
			var xx = 0;
			while(xx < 11){
				newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
				allPwds += newPwd;
				xx++;
			}			
			allPwds += newPwd;
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			newPwd = newPwd.toUpperCase(); 
			allPwds += newPwd;
			newPwd = theSpecials[Math.floor(Math.random()*theSpecials.length)];
			allPwds += newPwd;
			newPwd = theNumbers[Math.floor(Math.random()*theNumbers.length)];
			allPwds += newPwd;
			newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
			newPwd = newPwd.toUpperCase(); 
			allPwds += newPwd;
			var xxx = 0;
			while(xxx < 11){
				newPwd = theLetters[Math.floor(Math.random()*theLetters.length)];
				allPwds += newPwd;
				xxx++;
			}
			newPwd = theNumbers[Math.floor(Math.random()*theNumbers.length)];
			allPwds += newPwd;
			newPwd = theSpecials[Math.floor(Math.random()*theSpecials.length)];
			allPwds += newPwd;
			//scramble the word
			allPwds = allPwds.split('').sort(function(){return 0.5-Math.random()}).join('');
			x++;
			//Put new password in place
			document.getElementById("newText4").value = allPwds;
		}
        
  	});

});