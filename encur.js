document.getElementById("encodeURL").addEventListener("click", function () {

	var allURLs = document.getElementById("link1").value;
	
	allURLs = encodeURIComponent(allURLs).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').  replace(/\)/g, '%29').replace(/\*/g, '%2A'); 
	
	var brPref = document.getElementById("plus").checked;
	
	if(brPref == true){
		allURLs = allURLs.replace(/%20/g, '+').replace(/%2B/g, '+');
	}
	allURLs = allURLs.replace(/%0A/g, '\n')
	
	document.getElementById("link2").value = allURLs;
});

//reset text areas
document.getElementById("clear").addEventListener("click", function () {
	document.getElementById("link1").value = "";
	document.getElementById("link2").value = "";
	document.getElementById("link1").focus();
});

var textBox = document.getElementById("link2");
textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};  