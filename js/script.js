document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("personal-info-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const step = document.querySelectorAll(".step")
    const primerStep = step[0]
    const segundoStep = step[1];


    if (document.querySelector(".contenedor__info").style.display === "block"){
        primerStep.style.background="var(--Pastelblue)";
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario

        let valid = true;

        // Validar el campo de nombre
        if (nameInput.value.trim() === "") {
            document.getElementById("error-name").style.display = "block";
            valid = false;
        } else {
            document.getElementById("error-name").style.display = "none";
        }

        // Validar el campo de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
            document.getElementById("error-email").style.display = "block";
            valid = false;
        } else {
            document.getElementById("error-email").style.display = "none";
        }

        // Validar el campo de teléfono
        if (phoneInput.value.trim() === "") {
            document.getElementById("error-phone").style.display = "block";
            valid = false;
        } else {
            document.getElementById("error-phone").style.display = "none";
        }

        // Si todos los campos son válidos, mostrar la siguiente pantalla
        if (valid) {
            document.querySelector(".contenedor__info").style.display = "none";
            primerStep.style.background="none";
            document.querySelector(".contenedor__plan").style.display = "block";
            segundoStep.style.background="var(--Pastelblue)";
            
            
        }

    });
});






