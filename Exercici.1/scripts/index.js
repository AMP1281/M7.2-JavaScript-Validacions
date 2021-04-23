
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

    var regExpemail = /[\w._-]+@[\wñ._-]+(?:\.[\w]+)+/; 

	var count = 0;

    //Usuari
    if (inputUsuari.value.length < 3 || inputUsuari.value.length > 15) {
        inputUsuari.classList.remove("is-valid");
        inputUsuari.classList.add("is-invalid");
        errorUsuari.textContent = "Es seu nom d'usuari ha de contenir entre 3 i 15 caràcters";
        count ++;
    } else{
        inputUsuari.classList.remove("is-invalid");
        inputUsuari.classList.add("is-valid");
    }

    //Provincia
    if (inputProvincia.selectedIndex == 0){

        inputProvincia.classList.remove("is-valid");
        inputProvincia.classList.add("is-invalid");
        errorProvincia.textContent = "Es obligatori seleccionar la seva provincia";
        count ++;
    } else{
        inputProvincia.classList.remove("is-invalid");
        inputProvincia.classList.add("is-valid");
    }

    //Email
    if (!regExpemail.test(inputEmaildos.value)) {

        inputEmaildos.classList.remove("is-valid");
        inputEmaildos.classList.add("is-invalid");
        errorEmaildos.textContent = "Introdueix una direcció de correu electrónic vàlida";
        count ++;

    } else{
        inputEmaildos.classList.remove("is-invalid");
        inputEmaildos.classList.add("is-valid");
    }

    //Contraseña

    var error = new Array();
    var contador= 0;

    if (!/[A-Z]/.test(inputContrasenyados.value)) {
        error[contador]= "La contrasenya ha de contenir una majúscula. ";
        contador++
    }
    if (!/[0-9]/.test(inputContrasenyados.value)) {
        error[contador]= "La contrasenya ha de contenir un número. ";
        contador++
    }
    if (inputContrasenyados.value.length < 8) {
        error[contador]= "La contrasenya ha de contenir mínim 8 caràcters. ";
        contador++
    }
    if (contador > 0) {
        inputContrasenyados.classList.remove("is-valid");
        inputContrasenyados.classList.add("is-invalid");
        errorContrasenyados.textContent = error;
        }
    else{
        inputContrasenyados.classList.remove("is-invalid");
        inputContrasenyados.classList.add("is-valid");
    }

    //Confirma contrasenya

    if (inputConfirmcontra.value === inputContrasenyados.value && contador == 0 && inputConfirmcontra.value != "" && inputContrasenyados.value != "") {

        inputConfirmcontra.classList.remove("is-invalid");
        inputConfirmcontra.classList.add("is-valid");

    } else{
        inputConfirmcontra.classList.remove("is-valid");
        inputConfirmcontra.classList.add("is-invalid");
        errorConfirmcontra.textContent = "No coincideixen les contrasenyes";
        count ++;
    }

    if (inputConfirmcontra.value == "") {

        inputConfirmcontra.classList.remove("is-valid");
        inputConfirmcontra.classList.add("is-invalid");
        errorConfirmcontra.textContent = "Aquest camp es obligatori";
        count ++;
    }

    //Legal
    if(!inputLegal.checked) {
		inputLegal.classList.remove("is-valid");
        inputLegal.classList.add("is-invalid");
		errorLegal.textContent = "Aquest camp es obligatori";
        count ++;
	} else{
        inputLegal.classList.remove("is-invalid");
        inputLegal.classList.add("is-valid");
    }

        if (count > 0){
            return false;
        }
        else {
            return true;
        }
}

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);



