
//Validar formulari registre

var registreForm = registre;

var inputnom = registreForm.elements.nom;
var inputcognoms = registreForm.elements.cognoms;
var inputemaildos = registreForm.elements.emaildos;
var inputcontrasenyados = registreForm.elements.contrasenyados;
var inputconfirmcontra = registreForm.elements.confirmcontra;
var inputlegal = registreForm.elements.legal;
var inputmarketing = registreForm.elements.marketing;

function validacioRegistre() {

	var count = 0;

    if (inputnom.value == 0) {
        inputnom.classList.add("is-invalid");
        errornom.textContent = "Aquest camp es obligatori";
		acumErrores ++;
    }

    if (inputcognoms.value == 0) {
        inputcognoms.classList.add("is-invalid");
        errornom.textContent = "Aquest camp es obligatori";
		acumErrores ++;
    }


    if (count > 0){
        return false;
    }else{
		return true;
	}
}



