document.documentElement.className+=" js";var devices=["phone","phablet","tablet","laptop","desktop","largescreen"],window_to_device=function(){for(var e=[480,768,992,1200,1880,2180],t=[],n="",d=document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth||window.innerWidth,c=0;c<devices.length;++c)d>=e[c]&&t.push(devices[c]);for(0==t.length&&t.push(devices[0]),n=t[t.length-1],c=0;c<devices.length;++c)document.documentElement.className=document.documentElement.className.replace(devices[c],""),c==devices.length-1&&(document.documentElement.className+=" "+n),document.documentElement.className=document.documentElement.className.replace(/\s+/g," ");if("laptop"==n||"desktop"==n){var o=document.getElementById("pop-box-mask");null!==o&&o.parentNode.removeChild(o)}};window_to_device(),window.onresize=window_to_device;function jQueryLoaded(){!function(n,d){n.each(readyQ,function(d,e){n(e)}),n.each(bindReadyQ,function(e,i){n(d).bind("ready",i)})}(jQuery,document)}!function(n,d,e){function i(d,e){"ready"==d?n.bindReadyQ.push(e):n.readyQ.push(d)}n.readyQ=[],n.bindReadyQ=[];var u={ready:i,bind:i};n.$=n.jQuery=function(n){return n===d||void 0===n?u:void i(n)}}(window,document);