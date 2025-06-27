document.addEventListener('DOMContentLoaded', () => {
    
    const formRegistroEvento = document.getElementById('registroEvento')
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha');
    const hora = document.getElementById('hora');

    
    nombre.addEventListener('input', () => validarCampos(nombre, validarNombre))
    correo.addEventListener('input', () => validarCampos(correo, validarCorreo))
    telefono.addEventListener('input', () => validarCampos(telefono, validarTelefono))
     
    
    
    formRegistroEvento.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
    

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });
})

















document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });