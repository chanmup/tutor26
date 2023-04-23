document.getElementById("changeCase").addEventListener("click", function () {

    var thecase = document.getElementById("lowerCase").checked;
    var caseText = document.getElementById("oldText").value;
    
    if(thecase == 1 || thecase ==  true){
    caseText = caseText.toLowerCase();
    }else{
    caseText = caseText.toUpperCase();
    }
    
    document.getElementById("newText").value = caseText;
    })
    
    
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