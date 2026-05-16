emailjs.init("o8ZsrSEqsEAjbOvCO");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "mungelneha",
        "mungelneha",
        this
    ).then(function() {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message. Please try again!");
    });
});