var keywordsToDisplay = new Array();
var hashMapResults = {};
var numOfInitialKeywords = 0;
var doWork = false;
var keywordsToQuery = new Array();
var keywordsToQueryIndex = 0;
var queryflag = false;

window.setInterval(DoJob, 750);

function StartJob()
{
    if(doWork == false)
    {
        keywordsToDisplay = new Array();
        hashMapResults = {};
        keywordsToQuery = new Array();
        keywordsToQueryIndex = 0;

        hashMapResults[""] = 1;
        hashMapResults[" "] = 1;
        hashMapResults["  "] = 1;

        var ks = $('#input').val().split("\n");
        var i = 0;
        for(i = 0; i < ks.length; i++)
        {
            keywordsToQuery[keywordsToQuery.length] = ks[i];
            keywordsToDisplay[keywordsToDisplay.length] = ks[i];

            var j = 0;
            for(j = 0; j < 26; j++)
            {
                var chr = String.fromCharCode(97 + j);
                var currentx = ks[i] + ' ' + chr;
                keywordsToQuery[keywordsToQuery.length] = currentx;
                hashMapResults[currentx] = 1;
            }
        }
        //document.getElementById("input").value = '';
        //document.getElementById("input").value += "\n";
        numOfInitialKeywords = keywordsToDisplay.length;
        FilterAndDisplay();

        doWork = true;
        $('#startjob').html('Stop Generator');
    }
    else
    {
        doWork = false;
        alert("Stopped");
        $('#startjob').html('Generate');
    }
}

function DoJob()
{
    if(doWork == true && queryflag == false)
    {
        if(keywordsToQueryIndex < keywordsToQuery.length)
        {
            var currentKw = keywordsToQuery[keywordsToQueryIndex];
            QueryKeyword(currentKw);
            keywordsToQueryIndex++;
        }
        else
        {
            if (numOfInitialKeywords != keywordsToDisplay.length)
            {
                alert("Done");
                doWork = false;
                $('#startjob').val('Start Job');
            }
            else
            {
                keywordsToQueryIndex = 0;
            }
        }
    }
}

function QueryKeyword(keyword)
{
    var querykeyword = keyword;
    //var querykeyword = encodeURIComponent(keyword);
    var queryresult = '';
    queryflag = true;

    $.ajax({
        url: "https://suggestqueries.google.com/complete/search",
        jsonp: "jsonp",
        dataType: "jsonp",
        data: {
        q: querykeyword,
        client: "chrome"
        },
        success: function(res) {
            var retList = res[1];

            var i = 0;
            for(i = 0; i < retList.length; i++)
            {
                var currents = CleanVal(retList[i]);
                if(hashMapResults[currents] != 1)
                {
                    hashMapResults[currents] = 1;
                    keywordsToDisplay[keywordsToDisplay.length] = CleanVal(retList[i]);

                    keywordsToQuery[keywordsToQuery.length] = currents;

                    var j = 0;
                    for(j = 0; j < 26; j++)
                    {
                        var chr = String.fromCharCode(97 + j);
                        var currentx = currents + ' ' + chr;
                        keywordsToQuery[keywordsToQuery.length] = currentx;
                        hashMapResults[currentx] = 1;
                    }
                }
            }
            FilterAndDisplay();
            var textarea = document.getElementById("input");
            textarea.scrollTop = textarea.scrollHeight;
            queryflag = false;
        }
    });
}

function CleanVal(input)
{
    var val = input;
    val = val.replace("\\u003cb\\u003e", "");
    val = val.replace("\\u003c\\/b\\u003e", "");
    val = val.replace("\\u003c\\/b\\u003e", "");
    val = val.replace("\\u003cb\\u003e", "");
    val = val.replace("\\u003c\\/b\\u003e", "");
    val = val.replace("\\u003cb\\u003e", "");
    val = val.replace("\\u003cb\\u003e", "");
    val = val.replace("\\u003c\\/b\\u003e", "");
    val = val.replace("\\u0026amp;", "&");
    val = val.replace("\\u003cb\\u003e", "");
    val = val.replace("\\u0026", "");
    val = val.replace("\\u0026#39;", "'");
    val = val.replace("#39;", "'");
    val = val.replace("\\u003c\\/b\\u003e", "");
    val = val.replace("\\u2013", "2013");
    if (val.length > 4 && val.substring(0, 4) == "http") val = "";
    return val;
}

function Filter(listToFilter)
{
    var retList = listToFilter;

    if (document.getElementById("filter-positive").value.length > 0)
    {
        var filteredList = new Array();
        var filterContains = document.getElementById("filter-positive").value.split("\n");
        var i = 0;
        for (i = 0; i < retList.length; i++)
        {
            var currentKeyword = retList[i];
            var boolContainsKeyword = false;
            var j = 0;
            for (j = 0; j < filterContains.length; j++)
            {
                if (filterContains[j].length > 0)
                {
                    if (currentKeyword.indexOf(filterContains[j]) != -1)
                    {
                        boolContainsKeyword = true;
                        break;
                    }
                }
            }

            if (boolContainsKeyword)
            {
                filteredList[filteredList.length] = currentKeyword;
            }
        }

        retList = filteredList;
    }

    if (document.getElementById("filter-negative").value.length > 0)
    {
        var filteredList = new Array();
        var filterContains = document.getElementById("filter-negative").value.split("\n");
        var i = 0;
        for (i = 0; i < retList.length; i++)
        {
            var currentKeyword = retList[i];
            var boolCleanKeyword = true;
            var j = 0;
            for (j = 0; j < filterContains.length; j++)
            {
                if (filterContains[j].length > 0)
                {
                    if (currentKeyword.indexOf(filterContains[j]) >= 0)
                    {
                        boolCleanKeyword = false;
                        break;
                    }
                }
            }

            if (boolCleanKeyword)
            {
                filteredList[filteredList.length] = currentKeyword;
            }
        }

        retList = filteredList;
    }

    var e = document.getElementById("min");
    var min = e.options[e.selectedIndex].value;

    if(min > 0){
        var filteredList = new Array();
        var regex = /\s+/gi;

        for (i = 0; i < retList.length; i++)
        {
            var currentKeyword = retList[i];
            var boolExceedMinimum = false;

            var wordCount = 0;

            if(currentKeyword != null){
                wordCount = currentKeyword.trim().replace(regex, ' ').split(' ').length;
            }

            if (wordCount >= min)
            {
                filteredList.push(currentKeyword);
            }
        }

        retList = filteredList;

    }

    return retList;
}

function FilterAndDisplay()
{
    var i = 0;
    var sb = '';
    var outputKeywords = Filter(keywordsToDisplay);
    for (i = 0; i < outputKeywords.length; i++)
    {
        sb += outputKeywords[i];
        sb += '\n';
    }
    document.getElementById("input").value = sb;
    document.getElementById("numofkeywords").innerHTML = '' + outputKeywords.length + ' : ' + keywordsToDisplay.length;
}

function FilterIfNotWorking()
{
    if (doWork == false)
    {
        FilterAndDisplay();
    }
}