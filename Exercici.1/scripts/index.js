
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

var inputUsuari = registreForm.elements.usuari;
var inputProvincia = registreForm.elements.provincia;
var inputEmaildos = registreForm.elements.emaildos;
var inputContrasenyados = registreForm.elements.contrasenyados;
var inputConfirmcontra = registreForm.elements.confirmcontra;
var inputLegal = registreForm.elements.legal;

var regExpemail = /[\w._-]+@[\wñ._-]+(?:\.[\w]+)+/; 



function validacioRegistre() {

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
        error[contador]= " una majúscula";
        contador++
    }
    if (!/[0-9]/.test(inputContrasenyados.value)) {
        error[contador]= " un número";
        contador++
    }
    if (inputContrasenyados.value.length < 8) {
        error[contador]= " mínim 8 caràcters";
        contador++
    }
    if (contador > 0) {
        inputContrasenyados.classList.remove("is-valid");
        inputContrasenyados.classList.add("is-invalid");
        errorContrasenyados.textContent = "Per favor introdueixi:" + error.toString();
        }
    else{
        inputContrasenyados.classList.remove("is-invalid");
        inputContrasenyados.classList.add("is-valid");
    }

    //Confirma contrasenya

    if (inputConfirmcontra.value === inputContrasenyados.value && contador == 0 && inputConfirmcontra.value != "") {

        inputConfirmcontra.classList.remove("is-invalid");
        inputConfirmcontra.classList.add("is-valid");

    } else{
        inputConfirmcontra.classList.remove("is-valid");
        inputConfirmcontra.classList.add("is-invalid");
        errorConfirmcontra.textContent = "Aquest camp es obligatori, ha de repetir una contrasenya vàlida.";
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

    // Loop
    if (count > 0){
        return false;
    }

    // Fin validación
    else {

        div = document.getElementById('test');
        div.style.display = '';




    //  MOSTRAR RESULTADOS
    var resultados = new Array();

    for(var i=0; i < 7; i++){
        resultados.push (registreForm.elements[i].value);
    }


            var resultatsForm = document.getElementById('resultats');

            var resUsuari = resultatsForm.elements.mUsuari;
            var resProvincia = resultatsForm.elements.mProvincia;
            var resEmaildos = resultatsForm.elements.mEmail;
            var resContrasenya = resultatsForm.elements.mContrasenya;
            var resAcceptar = resultatsForm.elements.mAcceptar;

            //Usuari
            resUsuari.value = resultados[0];

            //Provincia
            if( resultados[1] == "1"){
                resProvincia.value = "Barcelona";
            }
            if( resultados[1] == "2"){
                resProvincia.value = "Tarragona";
            }
            if( resultados[1] == "3"){
                resProvincia.value = "LLeida";
            }
            else{
                resProvincia.value = "Girona";
            }

            //Email
            resEmaildos.value = resultados[2];

            //Contrasenya
            resContrasenya.value = resultados[3];

            //Boton Aceptar oculta registro
            resAcceptar.addEventListener('click', function(){div.style.display = 'none';});


        //VALIDAR INICIA SESSIÓ

        var loginForm = login;

        var logEmail = loginForm.elements.emailuno;
        var logPassword = loginForm.elements.contrasenyauno;
        var logInici= loginForm.elements.btnInici;

        logInici.addEventListener('click', function(){

            //Usuari

            var errorLogin = new Array();
            var contadorLogin= 0; 

            if (resultados.includes(logEmail.value) == false) {
                errorLogin[contadorLogin]= "Usuari no registrat";
                contadorLogin++
                }

            if (logEmail.value.length < 1) {
                errorLogin[contadorLogin]= "Aquest camp es obligatori";
                errorLogin.shift();
                contadorLogin++
                }

            if (contadorLogin > 0) {
                logEmail.classList.remove("is-valid");
                logEmail.classList.add("is-invalid");
                errorEmail.textContent = errorLogin.toString();
                }

            else{
            logEmail.classList.remove("is-invalid");
            logEmail.classList.add("is-valid");
            }

            //Contrasenya

            var errorLoginP = new Array();
            var contadorLoginP = 0; 

            if (resultados.includes(logPassword.value) == false) {
                errorLoginP[contadorLoginP]= "Email no registrat";
                contadorLoginP++
                }

            if (logPassword.value.length < 1) {
                errorLoginP[contadorLoginP]= "Aquest camp es obligatori";
                errorLoginP.shift();
                contadorLoginP++
                }

            if (contadorLoginP > 0) {
                logPassword.classList.remove("is-valid");
                logPassword.classList.add("is-invalid");
                errorContrasenya.textContent = errorLoginP.toString();
                }

            else{
            logPassword.classList.remove("is-invalid");
            logPassword.classList.add("is-valid");
            }


            // Loop
            if (contadorLogin > 0 || contadorLoginP > 0){
            return false;
            }

            // Fin validación
            else {
                return true;
            }



        });


        }

        return false;
    }

        

        











