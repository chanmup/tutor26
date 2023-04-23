document.getElementById("capitalizeSentences").addEventListener("click", function () {

	var capText = document.getElementById("oldText").value;
	capText = capText.trim();
	
	//re1 = /\s+/g;
	//capText = capText.replace(re1," ");
	capText = capText.replace(/\!\s/g,"##!. "); 
	capText = capText.replace(/\?\s/g,"##?. "); 
	
	//hello.  hello?  hello. hello.
	
	
	var allCaps = document.getElementById("allCaps").checked;
	
	var capLock = document.getElementById("capLock").checked;
	
	
	if(capLock == 1 || capLock == true){
	capText = capText.toLowerCase();
	}
	
	
	if(allCaps == 1 || allCaps == true){
		capText = capText.replace(/\n/g,". [-<br>-] ");
		//Get rid of extra whitespaces now that linebreaks are protected
		re1 = /\s+/g;
		capText = capText.replace(re1," ");
		var wordSplit = ' ';
	}else{
		capText = capText.replace(/\.\n/g,".[-<br>-]. ");
		capText = capText.replace(/\.\s\n/g,". [-<br>-]. ");
		//Get rid of extra whitespaces now that linebreaks are protected
		re1 = /\s+/g;
		capText = capText.replace(re1," ");
		var wordSplit = '. ';
	}
	
	var wordArray = capText.split(wordSplit);
	
	var numWords = wordArray.length;
	
	for(x=0;x<numWords;x++) {
	
		wordArray[x] = wordArray[x].replace(wordArray[x].charAt(0),wordArray[x].charAt(0).toUpperCase());
		
		if(allCaps == 1 || allCaps == true){
				if(x==0) {
					capText = wordArray[x]+" ";
				}else if(x != numWords -1){
					capText = capText+wordArray[x]+" ";
				}else if(x == numWords -1){
					capText = capText+wordArray[x];
				}
		}else{
				if(x==0) {
					capText = wordArray[x]+". ";
				}else if(x != numWords -1){
					capText = capText+wordArray[x]+". ";
				}else if(x == numWords -1){
					capText = capText+wordArray[x];
				}
		
		}
		
		
	}
	
	if(allCaps == 1 || allCaps == true){
		capText = capText.replace(/\.\s\[-<br>-\]\s/g,"\n");
		capText = capText.replace(/\.\s\[-<br>-\]/g,"\n");
	}else{
		capText = capText.replace(/\[-<br>-\]\.\s/g,"\n");
	}
	
	capText = capText.replace(/\si\s/g," I ");    
	
	//var capText = capText.replace("##?. ", "? ");
	var capText = capText.replace(/\##\?\./gm, "?");  
	//var capText = capText.replace("##!. ", "! ");
	var capText = capText.replace(/\##\!\./gm, "!"); 

	document.getElementById("newText").value = capText;
	
});

	//reset text areas
	document.getElementById("clearText").addEventListener("click", function () {
		document.getElementById("oldText").value = "";
		document.getElementById("newText").value = "";
		document.getElementById("oldText").focus();
	});	
	
	var textBox = document.getElementById("newText");
	textBox.onfocus = function() {
		textBox.select();
		textBox.onmouseup = function() {
			textBox.onmouseup = null;
			return false;
		};
	};