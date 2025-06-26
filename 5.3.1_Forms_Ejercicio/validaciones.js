
function validarCampos(input, funcionPorCampos){
    const errorMensaje = input.nextElementSibling;
    const {valido : mensaje} = funcionPorCampos(input.value);
    if(valido){
        errorMensaje.classList.remove('error'); 
        errorMensaje.classList.add('exito');
        errorMensaje.textContent = '';
    } else if(!valido){
        errorMensaje.classList.remove('exito');
        errorMensaje.classList.add('error');
        errorMensaje.textContent = mensaje;
    }
    return valido;


}

// funiones por campos

function validarNombre (nombre){
    if (typeof nombre != 'string') {
        return  {valido : false, mensaje : 'El nombre debe de ser texto'}
    }else if (nombre.length === 0 ){
        return {valido : false, mensaje : 'El nombre es obligatorio'}
    }else if(nombre.length < 3){
        return {valido : false, mensaje : 'El nombre debe tener al menos 3 caracteres'}
    }else{return {valido : true}}

}