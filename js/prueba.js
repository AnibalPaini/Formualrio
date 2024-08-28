document.addEventListener('DOMContentLoaded', () => {
    // Pasar o volver de página
    const steps = document.querySelectorAll(".stp");
    const nextBut = document.querySelectorAll(".boton");
    const backBut = document.querySelectorAll(".boton--atras");
    let actualStep = 0;

    // Formulario, validar datos.
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    // Obtener los mensajes de error
    const nameError = document.getElementById('name-error');
    const mailError = document.getElementById('mail-error');
    const numError = document.getElementById('num-error');

    //Cambiar color del numero del STEP
    const colorStep = document.querySelectorAll(".step")

    //VALIDAR FORMULARIO
    function validarForm() {
        console.log("Verificacion FORM")
        let valid = true;
        // Validar el campo de nombr
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            nameInput.style.border = '1px solid red';
            valid = false;
        } else {
            nameError.style.display = 'none';
            nameInput.style.border = '1px solid green';
            
        }

        // Validar el campo de correo electrónico
        if (emailInput.value.trim() === '') {
            mailError.style.display = 'block';
            emailInput.style.border = '1px solid red';
            valid = false;
        } else {
            mailError.style.display = 'none';
            emailInput.style.border = '1px solid green';
            
        }

        // Validar el campo de número de teléfono
        if (phoneInput.value.trim() === '') {
            numError.style.display = 'block';
            phoneInput.style.border = '1px solid red';
            valid = false;
        } else {
            numError.style.display = 'none';
            phoneInput.style.border = '1px solid green';
            
        }

        return valid;
    }
    
    //CAMBIAR DE STEP (ARTICULO) Y COLOR DEL STEP
    function mostrarStep(stepIndex) {
        steps.forEach((step, index) => {//CAMBIAR DE STEP (ARTICULO)
            step.style.display = (index === stepIndex) ? 'block' : 'none';
            console.log("next")
        });
        colorStep.forEach((colSteps, indice)=>{//CAMBIAR STEP COLOR
            colSteps.style.backgroundColor = (indice === stepIndex) ? 'var(--Pastelblue)' : 'transparent';
            console.log("Pintar")
        });
    };

    //FUNCIONAMIENTO DE BOTON NEXT
    nextBut.forEach((button) => {
        button.addEventListener("click", () => {
            if (actualStep < steps.length - 1 && validarForm()) {
                actualStep++;
                mostrarStep(actualStep);
                console.log("Boton next")
            }

        });
    });

    //FUNCIONAMIENTO DE BOTON BACK
    backBut.forEach((button) => {
        button.addEventListener("click", () => {
            if (actualStep > 0) {
                actualStep--;
                mostrarStep(actualStep);
            }
            console.log("Boton back")
        });
    });

    //MOSTRAR STEP ACTUAL
    mostrarStep(actualStep);
});



