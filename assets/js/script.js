/**
 * Add an event listener to the document and run the main screen with user log-in
 */
document.addEventListener('DOMContentLoaded', function () {
    runMainScreen();
});

/**
 * Set up of page display variables to display/hide different screens
 */
let mainLoginScreen = document.getElementById("login-screen");
let getInstructions = document.getElementById("instructions-icon");
let errorMessage = document.getElementById("error-message");
let gameScreen = document.getElementById("game-screen");
let wrongScreen = document.getElementById("wrong-screen");

/**
* Show the main screen with user log-in and instruction icon
*/
function runMainScreen() {
    errorMessage.style.display = "none";
    mainLoginScreen.style.display = "block";
    gameScreen.style.display = "none";
    wrongScreen.style.display = "none";
    document.getElementById("user-icon").style.display = "none";
    document.getElementById("username").innerText = "";
    document.getElementById("user").focus(); //focus on input element with cursor ready for username input
}