
function validarCampos(input, funcionPorCampos){
    const errorMensaje = input.nextElementSibling;
    const {valido, mensaje} = funcionPorCampos(input.value);
    if(valido){
        input.classList.remove('error'); 
        input.classList.add('exito');
        errorMensaje.textContent = '';
    } else if(!valido){
        input.classList.remove('exito');
        input.classList.add('error');
        errorMensaje.textContent = mensaje;
    }
    return valido;
}

// Funciones por campos
function validarNombre(nombre){
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre.length === 0) {
        return  {valido : false, mensaje : 'El nombre es obligatorio'}
    }else if (!soloLetras.test(nombre)){
        return {valido : false, mensaje : 'El nombre debe ser solo texto'}
    }else if(nombre.length < 3){
        return {valido : false, mensaje : 'El nombre debe tener al menos 3 caracteres'}
    }else{return {valido : true}}
}

function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correo.length === 0
        ? { valido: false, mensaje: 'El correo es obligatorio.' }
        : !regex.test(correo)
            ? { valido: false, mensaje: 'El formato del correo no es válido.' }
            : { valido: true };
}

function validarTelefono(telefono){
    const soloNumeros = /^[0-9]+$/;
    
    if (telefono.length === 0) {
        return {valor : false, mensaje : 'El número telefónico es obligatorio'}
    }else if (!soloNumeros.test(telefono)){
        return {valido : false, mensaje : 'Solo se permite ingresar números'}
    }else if (telefono.length < 10){
        return {valido : false, mensaje : 'El número que ingresa debe tener al menos 10 dígitos'}
    }else{return {valido : true}}
}