/*
1. Crea un proyecto nuevo con un archivo HTML y un archivo JavaScript.
2. Enlaza el archivo JavaScript al HTML y configura un entorno básico con un contenedor para los datos y dos botones.
2.1. Las estructuras de HTML y JavaScript sugeridaa se encuentra en el siguiente enlace: https://gist.github.com/heladio-devf-mx/16af1b03cbf6adc855fe4352159f1633
4. Selecciona una API pública (por ejemplo, la API de Rick & Morty: https://rickandmortyapi.com/). 
   Familiarízate con las rutas que usarás, como `/character` para obtener una lista de personajes (consulta la documentación en: https://rickandmortyapi.com/documentation/#get-all-characters).
5. Escribe una función que utilice `fetch` para obtener los datos de la API y los muestre en el `div` con id `data-container`.
6. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.
7. Crea una función para mostrar los personajes en el contenedor `data-container`.
8. Por ejemplo, podrías mostrar el nombre y la imagen de cada personaje.
9. Toma los archivos con código como base para tu solución, sigue las recomendaciones (pistas) y complementa el código faltante.
*/

const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');
const UrlApi = 'https://rickandmortyapi.com/api/character' 

fetchBtn.addEventListener('click', () => {

  dataContainer.innerHTML = "<p> Cargando datos...</p>";
  const UrlApi = 'https://rickandmortyapi.com/api/character' 

  fetch(UrlApi )
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      mostrarDatos(data)
      // Completar: renderizar datos en el contenedor
      // Pista: Usa `data.results` para iterar sobre los personajes obtenidos.
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

function mostrarDatos(datos) {
  dataContainer.innerHTML = ''
  datos.results.forEach(post => {
    const elemento = document.createElement('article');
    elemento.classList.add('post');
    elemento.innerHTML = `
    <p>${post.name}</p>
    <img src="${post.image}" alt="${post.image}">
    <p>${post.name} vive en ${post.location.name}</p>
    <p>Para más información de la ubicación de los personajes, consulte el siguiente enlace: <a href="${post.location.url}" target="_blank">${post.location.url}</a></p>
    `;
    dataContainer.appendChild(elemento)
  })

}



// Implementa las Solicitudes con Axios

// 1. Instala Axios o inclúyelo mediante una CDN:
//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 2. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
  axios.get(UrlApi)
    .then(response => {
      const data = response.data;
      renderCharacters(data)
      // Completar: renderizar datos en el contenedor
      // Pista: Observa que Axios ya convierte la respuesta JSON, por lo que no necesitas usar `.json()`.
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Ejemplo de función de renderizado:
// Puedes adecuar este código
function renderCharacters(characters) {
  dataContainer.innerHTML = '';
  characters.results.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.innerHTML = `
      <h1>${character.name}</h1>
    <img src="${character.image}" alt="${character.image}">
    <h4>${character.name} vive en ${character.location.name}</h4>
    <p>Para más información de la ubicación de los personajes, consulte el siguiente enlace: <a href="${character.location.url}" target="_blank">${character.location.url}</a></p>
    `;
    dataContainer.appendChild(characterElement);
  });
}