let response =('https://api.adviceslip.com/advice');
console.log(response);

    $.ajax('https://api.adviceslip.com/advice',
    {
        success: function (APIResponse) {
            console.log(APIResponse);
            let res = JSON.parse(APIResponse);
            console.log(res);
            let myDiv = document.getElementById("advice");

            // Creating a paragraph element and adding the innerHTML
            let advicetitle = document.createElement('p');
            advicetitle.innerHTML = "Advice of the Day";

            // Creating another paragraph element and adding the innerHTML
            let adviceoftheDay = document.createElement('p');
            adviceoftheDay.innerHTML = res.slip.advice;

            // Appending the paragraph tags to the created div element
            myDiv.appendChild(advicetitle);
            myDiv.appendChild(adviceoftheDay);

            // document.body.appendChild(myDiv);
        }
    })
   