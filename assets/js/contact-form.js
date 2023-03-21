/**
 * Add an eventListener to listen for the submit.
 * Sends an email to site owner through emailJS if the submit is fired.
 * Script taken from the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
 * and Email Templates Playground environment.
*/
const btn = document.getElementById("btn-send-form");

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        btn.value = "Sending..."; //changing value of the button when sending in progress

        const serviceID = 'service_ye3r4hi';
        const templateID = 'template_o9ejjsc';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            btn.value = 'Send Email';
            formSubmittedMessage();
            //alert('Sent!');
            }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
    });

/**
 * Display a thank you image on the screen once the contact form has been submitted
*/ 
function formSubmittedMessage() {
    let message = `
            <br>        
            <p>Your form has been submitted.</p><br>
            <div class="image-other-screens">
                <img src="assets/images/contact-form-thank-you.jpg" alt="tetris-style image with thank you writing">
            </div><br>
            <p>Your feedback is important to us</p>
            <br>
            <a href="index.html" class="button my-3">Play Tetris</a>
            `;
    document.getElementById("game-container").innerHTML = message;
}

/**
 * Prevent contact form container going off the mobile screen when clicking on input field & keyboard being shown on screen
*/
$(document).ready(function () {
    if ($(window).width() <= 740) { //common horizontal viewport dimension of mobile screens
        document.getElementsByTagName("input")[0].addEventListener("focus", function () {
            document.getElementById("game-container").style.top = "75%";
        });
        document.getElementsByTagName("input")[0].addEventListener("blur", function () { //container returns to its default position when input not focused
            document.getElementById("game-container").style.top = "45%";
        });
    }
});