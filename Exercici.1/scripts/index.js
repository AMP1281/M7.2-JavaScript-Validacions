
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

    var RegExpemail = /^[a-zA-Z 0-9.ñ!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9ñ-]+(?:\.[a-zA-Z0-9-]+)*$/; 

	var count = 0;

    if (inputUsuari.value.length < 3 || inputUsuari.value.length > 10) {
        inputUsuari.classList.add ("is-invalid");
        errorUsuari.textContent = "Es seu nom d'usuari ha de contenir entre 3 i 10 caràcters";
        count ++;
    } else{
        inputUsuari.classList.add("is-valid");
    }

    if (inputProvincia.selectedIndex == 0){

        inputProvincia.classList.add( "is-invalid");
        errorProvincia.textContent = "Es obligatori seleccionar la seva provincia";
        count ++;
    } else{
        inputProvincia.classList.add("is-valid");
    }

    if (RegExpemail.test(inputEmaildos)) {

        inputEmaildos.classList.add("is-invalid");
        errorEmaildos.textContent = "Introdueix una direcció de correu electrónic vàlida";
        count ++;

    } else{
        inputEmaildos.classList.add("is-valid");
    }

    if (inputContrasenyados.value == "") {

        inputContrasenyados.classList.add ("is-invalid");
        errorContrasenyados.textContent = "Aquest camp es obligatori";
        count ++;
    } else{
        inputContrasenyados.classList.add("is-valid");
    }

    if (inputConfirmcontra.value == "") {

        inputConfirmcontra.classList.add("is-invalid");
        errorConfirmcontra.textContent = "Aquest camp es obligatori";
        count ++;
    } else{
        inputConfirmcontra.classList.add("is-valid");
    }

    if(!inputLegal.checked) {
		inputLegal.classList.add("is-invalid");
		errorLegal.textContent = "Aquest camp es obligatori";
        count ++;
	} else{
        inputLegal.classList.add("is-valid");
    }

        if (count > 0){
            return false;
        }
        else {
            return true;
        }
}





