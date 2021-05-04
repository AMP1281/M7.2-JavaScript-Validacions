
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
const message = {
    usari: "Es seu nom d'usuari ha de contenir entre 3 i 15 caràcters",
    provincia: "Es obligatori seleccionar la seva provincia",
    email: "Introdueix una direcció de correu electrónic vàlida",
    emailConf: "Aquest camp es obligatori, ha de repetir una contrasenya vàlida.",
    legal: "Aquest camp es obligatori",
}

var registreForm = registre;

var inputUsuari = registreForm.elements.usuari;
var inputProvincia = registreForm.elements.provincia;
var inputEmaildos = registreForm.elements.emaildos;
var inputContrasenyados = registreForm.elements.contrasenyados;
var inputConfirmcontra = registreForm.elements.confirmcontra;
var inputLegal = registreForm.elements.legal;
var inputBtnregistre = registreForm.elements.btnRegistre;

var regExpemail = /[\w._-]+@[\wñ._-]+(?:\.[\w]+)+/; 

var loginForm = login;

var logEmail = loginForm.elements.emailuno;
var logPassword = loginForm.elements.contrasenyauno;
var logInici= loginForm.elements.btnInici;

function validacioRegistre() {

    function invalid(ele, error,msg){
        ele.classList.remove("is-valid");
        ele.classList.add("is-invalid");
        error.textContent = msg;
        count ++;
    }
    
    function valid(ele){
        ele.classList.remove("is-invalid");
        ele.classList.add("is-valid");
    }

	var count = 0;

    //Usuari

        if (inputUsuari.value.length < 3 || inputUsuari.value.length > 15) {
            invalid (inputUsuari, errorUsuari, message.usari);
        } 
        else {
            valid(inputUsuari);
        }

    //Provincia

        if (inputProvincia.selectedIndex == 0){
            invalid (inputProvincia, errorProvincia, message.provincia);
        } 
        else {
            valid(inputProvincia);
        }

    //Email

        if (!regExpemail.test(inputEmaildos.value)) {
            invalid (inputEmaildos, errorEmaildos, message.email);
        }
        else {
            valid(inputEmaildos);
        }

    //Contraseña

    var error = new Array();

    var mayuscula= /[A-Z]/;
    var numero= /[0-9]/;
    var length= /[0-9a-zA-Z]{8,}/;

         (!mayuscula.test(inputContrasenyados.value)) ? error.push (" una majúscula"): valid(inputContrasenyados);
         (!numero.test(inputContrasenyados.value)) ? error.push (" un número"): valid(inputContrasenyados);
         (!length.test(inputContrasenyados.value)) ? error.push (" mínim 8 caràcters"): valid(inputContrasenyados);

         if (error.length > 0) {
            invalid(inputContrasenyados);
            errorContrasenyados.textContent = "Per favor introdueixi:" + error.toString();
        }

    //Confirma contrasenya

        if (inputConfirmcontra.value === inputContrasenyados.value && inputConfirmcontra.value != "" && error.length == 0) {
            valid(inputConfirmcontra);
        } 
        else {
            invalid (inputConfirmcontra, errorConfirmcontra, message.emailConf);
        }

    //Legal

        if (!inputLegal.checked) {
            invalid (inputLegal, errorLegal, message.legal);
	    } 
        else {
            valid(inputLegal);
        }

    // Si dades no correctes return false. No avança

        if (count > 0){
            return false;
        }

    // Si dades correctes. Mostra formulari Resultats

        else {

            inputUsuari.setAttribute('disabled', 'true');
            inputProvincia.setAttribute('disabled', 'true');
            inputEmaildos.setAttribute('disabled', 'true');
            inputContrasenyados.setAttribute('disabled', 'true');
            inputConfirmcontra.setAttribute('disabled', 'true');
            inputLegal.setAttribute('disabled', 'true');
            inputBtnregistre.setAttribute('disabled', 'true');

            divResultats.style.display = ''; //Mostra el div on estan els resultats

            var resultados = new Array(); //Array amb dades registrades

            for(var i=0; i < 7; i++){
                resultados.push (registreForm.elements[i].value);
            }

                var resUsuari = resultats.elements.mUsuari;
                var resProvincia = resultats.elements.mProvincia;
                var resEmaildos = resultats.elements.mEmail;
                var resContrasenya = resultats.elements.mContrasenya;
                var resAcceptar = resultats.elements.mAcceptar;

                    //Usuari
                    resUsuari.value = resultados[0];

                    //Provincia
                    if ( resultados[1] == "1") {
                        resProvincia.value = "Barcelona";
                    }
                    if( resultados[1] == "2"){
                        resProvincia.value = "Tarragona";
                    }
                    if( resultados[1] == "3"){
                        resProvincia.value = "LLeida";
                    }
                    if( resultados[1] == "4"){
                        resProvincia.value = "Girona";
                    }

                    //Email
                    resEmaildos.value = resultados[2];

                    //Contrasenya
                    resContrasenya.value = resultados[3];

                    //Boton Aceptar oculta formulari Resultats
                    resAcceptar.addEventListener('click', function (e){
                        e.preventDefault(); 
                        e.stopPropagation();
                        div.style.display = 'none';
                        registreForm.reset();
                        inputUsuari.classList.toggle("is-valid","");
                        inputProvincia.classList.toggle("is-valid","");
                        inputEmaildos.classList.toggle("is-valid","");
                        inputContrasenyados.classList.toggle("is-valid","");
                        inputConfirmcontra.classList.toggle("is-valid","");
                        inputLegal.classList.toggle("is-valid","");
                    });

                //Validar formulari Inicia Sessió

                logInici.addEventListener('click', logInfun);
                
                function logInfun(e) {

                    e.preventDefault(); //El formulari no es tanca

                    //Usuari

                    var errorLogin = new Array();

                        (logEmail.value != resultados[2]) ? errorLogin.push ("Email no registrat"): valid (logEmail);
                        (logEmail.value.length < 1) ? errorLogin.push (("Aquest camp es obligatori") , errorLogin.shift()): valid (logEmail);

                    if (errorLogin.length > 0) {
                        invalid (logEmail);
                        errorEmail.textContent = errorLogin.toString();
                        }

                    //Contrasenya

                    var errorLoginP = new Array();

                        (logPassword.value != resultados [3]) ? errorLoginP.push ("Contrasenya no registrada"): valid (logPassword);
                        (logPassword.value.length < 1) ? errorLoginP.push (("Aquest camp es obligatori") , errorLoginP.shift()): valid (logPassword);

                    if (errorLoginP.length > 0) {
                        invalid (logPassword);
                        errorContrasenya.textContent = errorLoginP.toString();
                        }


                    // Si dades no correctes return false. No avança.

                    if (errorLogin.length > 0 || errorLoginP.length > 0){
                    return false;
                    }

                    // Si dades correctes. Fi validació

                    else {
                        return true;
                    }

                }; //Fi function botó Inicia Sessió


        return false; // 

        } 

    } // Fi function

// Validar formulari Inicia Sessió SENSE REGISTRARSE

logInici.addEventListener('click', noRegistrado);

function noRegistrado(e){

    e.preventDefault();

    if (logEmail.value.length == "") {
        logEmail.classList.add("is-invalid");
        errorEmail.textContent = "Aquest camp es obligatori";
    }

    if (logEmail.value.length != "") {
        logEmail.classList.add("is-invalid");
        errorEmail.textContent = "Usuari no registrat, crea un compte";
    }

    if (logPassword.value.length == "") {
        logPassword.classList.add("is-invalid");
        errorContrasenya.textContent = "Aquest camp es obligatori";
    }

    if (logPassword.value.length != "") {
        logPassword.classList.add("is-invalid");
        errorContrasenya.textContent = "Usuari no registrat, crea un compte";
    }

    logEmail.addEventListener('change', updateEmail); // Si modifica text treu is-invalid

    function updateEmail() {
        logEmail.classList.remove("is-invalid");
    }

    logPassword.addEventListener('change', updatePassword); // Si modifica text treu is-invalid

    function updatePassword() {
        logPassword.classList.remove("is-invalid");
    }
        
}

        

    

                











