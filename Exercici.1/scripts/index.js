//Validar formulari cerca

var cercaForm = cerca;

    function validacioCerca() {

        var inputbuscador = cercaForm.elements.buscador;

        var count = 0;

        if (inputbuscador.value == "") {
            inputbuscador.classList.add ("is-invalid");
            errorBuscador.textContent = "Es obligatori introduir una paraula per iniciar la busqueda";
            count ++;
        }
       if (inputbuscador.value.length == 1 || inputbuscador.value.length == 2 || inputbuscador.value.length == 3) {
            inputbuscador.classList.add ("is-invalid");
            errorBuscador.textContent = "La paraula ha de contenir més de 3 caràcters";
            count ++;
        }
        if (count > 0){
            return false;
        }
        else {
            return true;
        }
    }


//Validar formulari registre

var registreForm = registre;

function validacioRegistre() {

    var inputUsuari = registreForm.elements.usuari;
    var inputProvincia = registreForm.elements.provincia;
    var inputEmaildos = registreForm.elements.emaildos;
    var inputContrasenyados = registreForm.elements.contrasenyados;
    var inputConfirmcontra = registreForm.elements.confirmcontra;
    var inputLegal = registreForm.elements.legal;
    var inputMarketing = registreForm.elements.marketing;

	var count = 0;

    if (inputUsuari.value == "") {
        inputUsuari.classList.add ("is-invalid");
        errorUsuari.textContent = "Es obligatori introduir una paraula per iniciar la busqueda";
        count ++;
    }

    if (inputProvincia) {

        inputUsuari.classList.add("is-invalid");
        errorUsuari.textContent = "El nom d'usuari ha de contenir més de tres caracters";
    }


    if (inputEmaildos.value == "") {

        inputEmaildos.classList.add("is-invalid");
        errorEmaildos.textContent = "Aquest camp es obligatori";
    }

    if (inputContrasenyados.value == "") {

        inputContrasenyados.classList.add("is-invalid");
        errorContrasenyados.textContent = "Aquest camp es obligatori";
    }

    if (inputConfirmcontra.value == "") {

        inputConfirmcontra.classList.add("is-invalid");
        errorConfirmcontra.textContent = "Aquest camp es obligatori";
    }

    if(!inputLegal.checked) {
		inputLegal.classList.add("is-invalid");
		errorLegal.textContent = "Aquest camp es obligatori";
	}

		count ++;

        if (count > 0){
            return false;
        }
        else {
            return true;
        }
}





