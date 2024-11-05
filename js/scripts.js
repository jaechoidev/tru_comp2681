/*
Author: Jae Choi
Date: Oct 23, 2024
Filename:scripts.js

This scripts is to get form values to show if it's submitted correctly.
*/



/* 
resetMessage
input : none
output : none

it is to remove submitted message
*/

function resetMessage(){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ``;
}

/* 
processDate
input : event
output : none

This function is to get onsubmit request from form.html.
It is checking the form's value, and shows a message if it's submitted.
*/
function processDate(event) {
    event.preventDefault();  // Prevents form from submitting traditionally
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;

    if (fName && lName) {
        // Display the results
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <p><strong>submmited by ${fName} ${lName}</strong></p>
        `;
    } else {
        // Display error message if no date is selected
        document.getElementById('result').innerHTML = "<p style='color: red;'>Please select a date!</p>";
    }
    const myTimeout = setTimeout(resetMessage, 3000);
    
}