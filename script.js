let response =('https://api.adviceslip.com/advice');
console.log(response);

function AdiviceofDay(){
    $.ajax('https://api.adviceslip.com/advice',
    {
        success: function (APIResponse) {
            // console.log(APIResponse);
            let myDiv = document.createElement('div');

            // Creating a paragraph element and adding the innerHTML
            let advicetitle = document.createElement('p');
            advicetitle.innerHTML = "Advice of the Day";

            // Creating another paragraph element and adding the innerHTML
            let adviceoftheDay = document.createElement('p');
            adviceoftheDay.innerHTML = APIResponse.advice;

            // Appending the paragraph tags to the created div element
            myDiv.appendChild(advicetitle);
            myDiv.appendChild(adviceoftheDay);

            document.body.appendChild(myDiv);
        }
    })
}


    // function solarresults(){
    //     $.ajax(myURL,
    //     {
    //         success: function (APIResponse) {
    //             console.log(APIResponse);
    //              let myDiv = document.createElement('div');
    
    //             let myResponselat = document.createElement('p');
    //             myResponselat.innerHTML = "Sunrise Time: " + APIResponse.results.sunrise;
    
    //             let myResponselng = document.createElement('p');
    //             myResponselng.innerHTML = "Sunset Time: " + APIResponse.results.sunset;
    
    //             myDiv.appendChild(myResponselat);
    //             myDiv.appendChild(myResponselng);
    
    //             document.body.appendChild(myDiv);
    //         }
    //     })
    // }