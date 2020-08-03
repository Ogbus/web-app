let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/* Changing the image that is shown when the img element is clicked */
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/google-download-image.png') {
        myImage.setAttribute('src', 'images/google-download-image2.jpg');
    } else {
        myImage.setAttribute('src', 'images/google-download-image.png');
    }
}

/* 
   Creating a user name and storing it in the local storage
*/
function setUserName() {
    let userName = prompt('Please enter your name.');
    if(!userName) {
        setUserName();
    } else {
        localStorage.setItem('name', userName);
        myHeading.textContent = 'Google is awesome, ' + userName;
    }
}

/* 
   Checking if the userName is in the local storage. 
   If not, it calls the setUserName() to create a new one and store it.
   If yes, it gets the name in the localStorage and displays it on the screen
*/ 
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Google is awesome, ' + storedName;
}

// Creating a new username
myButton.onclick = function() {
    setUserName();
}



// const heading = document.querySelector('h1');
// heading.textContent = 'Hello World';