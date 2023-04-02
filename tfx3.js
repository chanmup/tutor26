document.addEventListener('DOMContentLoaded', function () {
		
	var sizeCols = "";
	var sizeRows = "";
	var tableColor = "";
	var tableColor2 = "";
	var tableColor2b = "";
	var tableDesign = "";
	var tableInfo = "";
	var tableHighlight = ""
	var tableJS = "";
	var tableCSS = "";
	var tableHTML = "";
	var pageTableHTML = "";
	var tableEND = "";
	var newTable = "";
	var newTableCode = "";
	var tfHighlight = "";
	var tfHighlightb = "";
	
	function makeTableCode(){

		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		sizeCols = document.getElementById('sizeCols').value;
		sizeRows = document.getElementById('sizeRows').value;
		if (sizeCols == "0"){sizeCols = "3";document.getElementById('sizeCols').value = "3"}
		if (sizeRows == "0"){sizeRows = "4";document.getElementById('sizeRows').value = "4"}
		tableInfo = document.getElementById('tableInfo').value;
		tableHighlight = document.getElementById('tableHighlight').value;
		
		if(tableDesign == "alternating"){
			tableCSS = "";
			if(tableColor == "Blue"){
				var blue1 = "#41baf2";var blue2 = "#42c2fc"; var blue3 = "#39aee3";
				tableColor2 = "#42c2fc";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333;width:100%;border-width: 1px;border-color: #29c922;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#41baf2;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;}\n';
				tableCSS += '.tftable tr {background-color:#42c2fc;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#abdff7;}\n';}}
				tableCSS += '</style>\n\n';
			}else if(tableColor == "Green"){
				var green1 = "#0ae002";var green2 = "#20de18"; var green3 = "#29c922";
				tableColor2 = "#20de18";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333;width:100%;border-width: 1px;border-color: #29c922;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#0ae002;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;}\n';
				tableCSS += '.tftable tr {background-color:#20de18;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#43f23d;}\n';}}
				tableCSS += '</style>\n\n';
              }else if(tableColor == "Red"){
				var green1 = "#ff0000";var green2 = "#ff2424"; var green3 = "#ff0808";
				tableColor2 = "#20de18";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #ff0808;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#ff0000;border-width: 1px;padding: 8px;border-style: solid;border-color: #ff0808;}\n';
				tableCSS += '.tftable tr {background-color:#ff2424;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #ff2424;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:pink;}\n';}}
				tableCSS += '</style>\n\n';
			
			}else if(tableColor == "Grey"){
				var grey1 = "#b8b8b8";var grey2 = "#cdcdcd"; var grey3 = "#a9a9a9";
				tableColor2 = "#cdcdcd";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #a9a9a9;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#b8b8b8;border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;}\n';
				tableCSS += '.tftable tr {background-color:#cdcdcd;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:brown;}\n';}}
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Orange"){
				var orange1 = "#ffd105";var orange2 = "#fcd217"; var orange3 = "#fcd62d";
				tableColor2 = "#fcd217";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #fcd217;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {text-align:center;font-size:12px;background-color:#ffd105;border-width: 1px;padding: 8px;border-style: solid;border-color: #fcd217;}\n';
				tableCSS += '.tftable tr {background-color:#fcd217;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#fcf7ac;}\n';}}
				tableCSS += '</style>\n\n';
              }else if(tableColor == "Yellow"){
				var yellow1 = "#fcfc47";var yellow2 = "#fcfc47"; var orange3 = "#fcfc47";
				tableColor2 = "#fcfc47";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #333;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {text-align:center;font-size:12px;background-color:#fcfc47;border-width: 1px;padding: 8px;border:1px #333 solid;text-align:center;}\n';
				tableCSS += '.tftable tr {background-color:#fcfc47;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#fcf7ac;}\n';}}
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Brown"){
				var brown1 = "#964b00";var brown2 = "#c97016"; var brown3 = "#d98632";
				tableColor2 = "#c97016";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #bcaf91;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#964b00;border-width: 1px;padding: 8px;border-style: solid;border-color: #bcaf91;}\n';
				tableCSS += '.tftable tr {background-color:#c97016;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #d98632;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#ffffff;}\n';}}
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Black"){
				var black1 = "#171515";var black2 = "#2f2f2f"; var black3 = "#686767";
				tableColor2 = "#171515"
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#bbb;width:100%;border-width: 1px;border-color: #686767;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#171515;border-width: 1px;padding: 8px;border-style: solid;border-color: #686767;}\n';
				tableCSS += '.tftable tr {background-color:#2f2f2f;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #686767;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#eee;}\n';}}
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "None"){
				
}		
		}else if(tableDesign == "minimal"){
			tableCSS = "";
			if(tableColor == "Blue"){
				var blue3 = "#39aee3"
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {font-size:12px;color:#333;width:100%;border-width: 1px;border-color: #333333;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {text-align:center;font-size:12px;background-color:#39aee3;border-width: 1px;padding: 8px;border-style: solid;border-color: #333333}\n';
				tableCSS += '.tftable tr {background-color:#ffffff;}\n';
				tableCSS += '.tftable td {color:#333333;font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #333333;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#abdff7;}\n';}}
				tableCSS += '</style>\n\n';
			}else if(tableColor == "Green"){
				var green1 = "#0ae002";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333;width:100%;border-width: 1px;border-color: #29c922;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#0ae002;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;text-align:center;}\n';
				tableCSS += '.tftable tr {background-color:#ffffff;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#43f23d;}\n';}}
				tableCSS += '</style>\n\n';
              }else if(tableColor == "Red"){
				var green1 = "#ff0000";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #ff0808;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#ff0000;border-width: 1px;padding: 8px;border-style: solid;border-color: #ff0808;text-align:center;}\n';
				tableCSS += '.tftable tr {background-color:#ffffff;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #ff2424;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:pink;}\n';}}
				tableCSS += '</style>\n\n';
			
			}else if(tableColor == "Grey"){
				var grey1 = "#b8b8b8";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #a9a9a9;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#b8b8b8;border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;text-align:center;}\n';
				tableCSS += '.tftable tr {background-color:#ffffff;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#ffffff;}\n';}}
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Orange"){
				var orange1 = "#ffd105";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #fcd217;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {text-align:center;font-size:12px;background-color:#ffd105;border-width: 1px;padding: 8px;border-style: solid;border-color: #fcd217;text-align:center;}\n';
				tableCSS += '.tftable tr {background-color:#ffffff;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#fcf7ac;}\n';}}
				tableCSS += '</style>\n\n';
              }else if(tableColor == "Yellow"){
				var yellow1 = "#fcfc47";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #333;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {text-align:center;font-size:12px;background-color:#fcfc47;border-width: 1px;padding: 8px;border:1px #333 solid;text-align:center;}\n';
				tableCSS += '.tftable tr {background-color:#ffffff;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #333;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#fcf7ac;}\n';}}
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Brown"){
				var brown3 = "#ebab3a";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #bcaf91;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#ded0b0;border-width: 1px;padding: 8px;border-style: solid;border-color: #bcaf91;text-align:center;;}\n';
				tableCSS += '.tftable tr {background-color:#ffffff;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #bcaf91;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#ffff99;}\n';}}
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Black"){
				var black1 = "#171515";
				tableColor2 = "#ffffff"
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.tftable {text-align:center;font-size:12px;color:#bbb;width:100%;border-width: 1px;border-color: #686767;border-collapse: collapse;}\n';
				tableCSS += '.tftable th {font-size:12px;background-color:#171515;border-width: 1px;padding: 8px;border-style: solid;border-color: #686767;text-align:center;}\n';
				tableCSS += '.tftable tr {background-color:#fff;}\n';
				tableCSS += '.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #686767;}\n';
				if (tableHighlight != "none"){if(tableColor != "None"){tableCSS += '.tftable tr:hover {background-color:#eee;}\n';}}
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "None"){
				
}		
		}else if(tableDesign == "alternatingXY"){
			tableCSS = "<!-- alternatingXY -->\n";
		}else if(tableDesign == "minimalXY"){
			tableCSS = "<!-- minimalXY -->\n";
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
		tableHTML = '<table class="tftable" border="1">\n<tr>';
		var ii = 0;
		var iii = 0;
		var iiii = 0;
		while(ii< sizeCols){
			iii = ii + 1;
			tableHTML += '<th>Menu '+iii+'</th>';
			ii++;
		}
		tableHTML += "</tr>\n";
		var i = 0;
		while(i< sizeRows -1){
			tableHTML = tableHTML + "<tr>";
			var ii = 0;
			while(ii< sizeCols){
				iii = i + 1;
				iiii = ii + 1;
				if(tableInfo == "yesInfo"){ 
					tableHTML = tableHTML + "<td>Row:"+iii+" Cell:"+iiii+"</td>";
				}else{
					tableHTML = tableHTML + "<td> </td>";
				}
			ii++;
			}
			tableHTML = tableHTML + "</tr>\n";
		i++;
		}
		tableHTML += "</table>\n\n";		
		if(tableInfo == "yesInfo"){
			pageTableHTML = '<table class="tftable" border="1"><tbody><tr><th>Menu 1</th><th>Menu 2</th><th>Menu 3</th></tr><tr><td>Row:1 Cell:1</td><td>Row:1 Cell:2</td><td>Row:1 Cell:3</td><tr><td>Row:2 Cell:1</td><td>Row:2 Cell:2</td><td>Row:2 Cell:3</td><tr><td>Row:3 Cell:1</td><td>Row:3 Cell:2</td><td>Row:3 Cell:3</td></tbody></table>';
		}else{
			pageTableHTML = '<table class="tftable" border="1"><tbody><tr><th> </th><th> </th><th> </th><th> </th><th> </th></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr></tbody></table>';			
		}
		
		tableEND = '';
		

		
		newTable = tableCSS + pageTableHTML;
		newTableCode = tableJS + tableCSS + tableHTML + tableEND;
		
		document.getElementById('newTable').innerHTML = newTable;
		document.getElementById('newCode').value = newTableCode;

		
		
	}
	
	
	//Listener for sizeCols
	var el1 = document.getElementById('sizeCols');
	el1.onkeyup = function() {
		sizeCols = document.getElementById('sizeCols').value;
		sizeCols = sizeCols.replace(/[^0-9]+/g,'').replace(/\s+/, '');
		document.getElementById("sizeCols").value = sizeCols;
		makeTableCode();
	};
 
 	//Listener for sizeRows
	var el2 = document.getElementById('sizeRows');
	el2.onkeyup = function() {
		sizeRows = document.getElementById("sizeRows").value;
		sizeRows = sizeRows.replace(/[^0-9]+/g,'').replace(/\s+/, '');
		document.getElementById("sizeRows").value = sizeRows;
		makeTableCode();
	};
 
 	var el3 = document.getElementById('tableColor');
	el3.onchange = function() {
		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		if (tableColor == "None"){document.getElementById("tableDesign").selectedIndex = 2;}
		if (tableColor != "None" && tableDesign == "noStyle"){document.getElementById("tableDesign").selectedIndex = 0;}
		makeTableCode();
 	};
 
  	var el4 = document.getElementById('tableDesign');
	el4.onchange = function() {
		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		if (tableDesign == "noStyle"){document.getElementById("tableColor").selectedIndex = 6;}
		if (tableDesign != "noStyle" && tableColor == "None"){document.getElementById("tableColor").selectedIndex = 0;}
		makeTableCode(); 
 	};
 
   	var el5 = document.getElementById('tableHighlight');
	el5.onchange = function() {
		makeTableCode()
 	};
	
  	var el6 = document.getElementById('tableInfo');
	el6.onchange = function() {
		makeTableCode();  
 	};	 
	
	
	//intialize on entry
	makeTableCode(); 
	
	var textBox = document.getElementById("newCode");
	textBox.onfocus = function() {
		textBox.select();
		textBox.onmouseup = function() {
			textBox.onmouseup = null;
			return false;
		};
	};

});