document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if(name && email && message) {
        document.getElementById("response-message").innerText = "Messaggio inviato con successo!";
        document.getElementById("response-message").style.color = "green";
        this.reset();
    } else {
        document.getElementById("response-message").innerText = "Compila tutti i campi.";
        document.getElementById("response-message").style.color = "red";
    }
});
