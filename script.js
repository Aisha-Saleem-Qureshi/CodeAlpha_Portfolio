document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    alert("Thank you, " + name + "! Your message has been sent successfully to Aisha.");
    this.reset();
});