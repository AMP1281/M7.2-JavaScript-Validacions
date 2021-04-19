
//Validar formulari registre

const formulario3 = document.getElementById("formulario3");
const inputs = document.querySelectorAll("#formulario3");

const validarFormulario3= () =>{
    
}


inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario3);
    input.addEventListener("blur", validarFormulario3);
});

formulario3.addEventListener("submit", (e) => {
    e.preventDefault();
});
