/*
0. Te proporcionamos un código base para poder resolver este proyecto. Lo puedes consultar en el siguiente enlace: 
   https://gist.github.com/heladio-devf-mx/d346481f3833ae89d9c1628832438578.
1. Con base en el código que te proporcionamos, crea un archivo HTML con un formulario simple que contenga los campos: Nombre (texto), Correo electrónico, Contraseña, 
   Un botón para enviar el formulario.
2. Implementa un archivo JavaScript con base en el código proporcionado donde: - Definas un esquema de validación con Zod. 
   - Valides los datos ingresados al enviar el formulario. - Muestres mensajes de error claros si la validación falla.
3. Completa las partes de código que contienen pistas para la solución del problema.
4. Experimenta con distintos escenarios y asegúrate de que funcione como se solicita.
*/

 // ✅ Acceder a window.Zod correctamente
      const { z } = window.Zod;

      const registerSchema = z.object({
        name: z.string().min(1, "El nombre es obligatorio."),
        email: z.string().email("El correo no es válido."),
        password: z
          .string()
          .min(6, "La contraseña debe tener al menos 6 caracteres."),
      });

      document
        .getElementById("registerForm")
        .addEventListener("submit", (event) => {
          event.preventDefault();

          const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value,
          };

          // Limpiar errores anteriores
          document.getElementById("name-error").textContent = "";
          document.getElementById("email-error").textContent = "";
          document.getElementById("password-error").textContent = "";

          const result = registerSchema.safeParse(formData);

          if (result.success) {
            alert("¡Registro exitoso!");
          } else {
            // Mostrar errores debajo de cada campo correspondiente
            result.error.errors.forEach((error) => {
              const field = error.path[0];
              const errorElement = document.getElementById(`${field}-error`);
              if (errorElement) {
                errorElement.textContent = error.message;
              }
            });
          }
        });