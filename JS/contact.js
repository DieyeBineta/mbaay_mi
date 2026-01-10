console.log("contact.js chargé");

const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // empêche le rechargement

    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();

    if (prenom === "" || nom === "" || email === "") {
        message.style.color = "red";
        message.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Merci, votre message a bien été envoyé.";

    form.reset();
});
