/*
0. Te proporcionamos un código base para poder resolver este proyecto. Lo puedes consultar en el siguiente enlace: https://gist.github.com/heladio-devf-mx/4a1f75b7f422723c2ed52ca446650a3d.
1. Verificar Disponibilidad de Mesas: Completa la función `verificarDisponibilidad(mesasSolicitadas)` 
   para comprobar si el número de mesas solicitadas es menor o igual a las mesas disponibles en el restaurante. 
   Si es así, resuelve la promesa; si no, recházala con un mensaje de error.
2. Simular Envío de Confirmación por Correo: Completa la función `enviarConfirmacionReserva(nombreCliente)` 
   para simular el envío de un correo electrónico de confirmación. Utiliza `Math.random()` para decidir si el correo se envía exitosamente o si ocurre un error.
3. Control de Flujo en la Función Principal: En la función `hacerReserva(nombreCliente, mesasSolicitadas)`, 
   usa `await` para esperar a que se resuelva la promesa de disponibilidad de mesas. Si está disponible, procede a llamar a la función de envío de confirmación. 
   Si ocurre un error en cualquiera de las promesas, maneja el error usando un bloque `catch()`.
4. Probar la solución: Llama a `hacerReserva()` con diferentes valores (ej. un número de mesas menor o igual a las disponibles y otro mayor) 
   para verificar que el sistema maneja correctamente las reservas y los errores.
5. Puedes adecuar el código proporcionado como mejor lo consideres o puedes no utilizar esta pequeña ayuda.
*/


// Código base para el sistema de reservas

let mesasDisponibles = 5; // Número total de mesas disponibles

// 1. Verificar disponibilidad
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        if (mesasDisponibles > mesasSolicitadas){
            resolve()
        }else{
            reject(`No hay suficientes mesas. Disponibilidad. ${mesasDisponibles}, solicitadas: ${mesasSolicitadas}`)
        }
    })
  // COMPLETAR: resolver o rechazar según la disponibilidad
}

// 2. Simular envío de confirmación por correo
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    let exito = Math.random() > 0.3;
    setTimeout(() => {
      if (exito) {
        resolve(`el correo a ${nombreCliente} se ha enviado exitosamente`);
      } else {
        reject(`Error al enviar el correo de confirmación`);
      }
    }, 2000);
  });
}

  // COMPLETAR: simular envío exitoso o fallo usando Math.random()


// 3. Función principal
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    await verificarDisponibilidad(mesasSolicitadas);
    await enviarConfirmacionReserva(nombreCliente);
    console.log(`✅ Reserva confirmada para ${nombreCliente}.`);
  } catch (error) {
    console.error(`❌ Error con la reserva de ${nombreCliente}:`, error);
  }
}
 
// 4. Probar la solución (puedes modificar los valores)
hacerReserva("Eduardo", 1);
hacerReserva("Ana", 6);
