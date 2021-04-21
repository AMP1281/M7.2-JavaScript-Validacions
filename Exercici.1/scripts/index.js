//Validar formulari cerca

var cercaForm = cerca;

var inputbuscador = cercaForm.elements.buscador;

    function validacioCerca() {

        if (inputbuscador.value == 0) {
            inputbuscador.classList.add("is-invalid");
            return false;
        }
    }


//Validar formulari registre

var registreForm = registre;

var nom = nom.value;
var cognoms = cognoms.value;
var emaildos = emaildos.value;
var contrasenyados = contrasenyados.value;
var confirmcontra = confirmcontra.value;
var legal = legal.value;
var marketing = marketing.value;

function validacioRegistre() {

	var count = 0;

    if (inputnom === "")  {

        inputnom.classList.add("is-invalid");
        errorNom.textContent = "Aquest camp es obligatori";
    }
    if (inputcognoms === "");{

        inputcognoms.classList.add("is-invalid");
        errorCognoms.textContent = "Aquest camp es obligatori";
    }
    if (inputemaildos === "");{

        inputemaildos.classList.add("is-invalid");
        errorEmaildos.textContent = "Aquest camp es obligatori";
    }
    if (inputcontrasenyados === "");{

        inputcontrasenyados.classList.add("is-invalid");
        errorContrasenyados.textContent = "Aquest camp es obligatori";
    }
    if (inputconfirmcontra === "");{

        inputconfirmcontra.classList.add("is-invalid");
        errorConfirmcontra.textContent = "Aquest camp es obligatori";
    }

		count ++;
    }







error.textContent = "Aquest camp es obligatori";