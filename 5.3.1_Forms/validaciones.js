// Función que valida los inputs del formulario

function validarCampo(input, funcionValidacion) {
    const errorSpan = input.nextElementSibling; //retorna el siguiente elemento hermano del input, que es el span de error
    const { valido, mensaje } = funcionValidacion(input.value)
    if (valido) {
        input.classList.remove('error');
        input.classList.add('success');
        errorSpan.textContent = ''; // Limpia el mensaje de error
    } else {
        input.classList.remove('success');
        input.classList.add('error');
        errorSpan.textContent = mensaje; // Muestra el mensaje de error
    }
    return valido; // Retorna true si el campo es válido, false si no lo es
}

function validarNombre(nombre) {
    return nombre.length === 0
        ? { valido: false, mensaje: 'El nombre es obligatorio' }
        : nombre.length < 3
            ? { valido: false, mensaje: 'El nombre debe tener al menos 3 caracteres' }
            : { valido: true };
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.length === 0
        ? { valido: false, mensaje: 'El email es obligatorio.' }
        : !regex.test(email)
            ? { valido: false, mensaje: 'El formato del email no es válido.' }
            : { valido: true };
}

function validarPassword(password) {
    switch(true) {
        case password.length === 0:
            return { valido: false, mensaje: 'La contraseña es obligatoria.' };
        case password.length < 8:
            return { valido: false, mensaje: 'La contraseña debe tener al menos 8 caracteres.' };
        default:
            return { valido: true };
    }
}

function validarPais(pais) {
    return pais === ''
        ? { valido: false, mensaje: 'Debe seleccionar un país.' }
        : { valido: true };
}

function validarTerminos(input) {
    const errorSpan = input.parentElement.querySelector('.error-text-inline');
    errorSpan.textContent = !input.checked ? 'Debe aceptar los términos.' : '';
    return input.checked;
}