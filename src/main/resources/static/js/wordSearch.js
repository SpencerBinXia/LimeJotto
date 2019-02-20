$(document).ready(function()
{
    $.ajax({
        type: "GET",
        url: "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf",
        headers: {"X-RapidAPI-Key": "993b4d7194msh67d124ac55fcfafp1969a1jsn8fba7d647451"},
        success: function(wordData)
        {
            console.log(wordData);
            console.log(wordData.body);
            console.log(wordData.status);
            //console.log(wordData.body);

        },
        error: function(e){
            console.log("Failure", e);
        }
    })
});