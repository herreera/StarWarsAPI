document.addEventListener('DOMContentLoaded', async () => {
    const lista = document.getElementById('lista');

    try {
        const peliculas = await obtenerPeliculas();
        mostrarPeliculasEnLista(peliculas);
    } catch (error) {
        console.error('Error al obtener las películas:', error);
    }
});

async function obtenerPeliculas() {
    try {
        const response = await fetch('https://swapi.dev/api/films/');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.detail || 'Error al obtener las películas');
        }

        return data.results;
    } catch (error) {
        console.error('Error al obtener las películas:', error.message);
        throw error;
    }
}

function mostrarPeliculasEnLista(peliculas) {
    const lista = document.getElementById('lista');

    peliculas.forEach(pelicula => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `pelicula.html?id=${obtenerIdURLRecursoSWAPI(pelicula.url)}`;
        link.textContent = pelicula.title;
        link.addEventListener('click', (event) => {
            event.preventDefault();
            mostrarDetallesPelicula(pelicula);
        });

        listItem.appendChild(link);
        lista.appendChild(listItem);
    });
}

async function mostrarDetallesPelicula(pelicula) {
    try {
        const peliculaId = obtenerIdURLRecursoSWAPI(pelicula.url);
        const detallesPelicula = await obtenerDatosSWAPI(`films/${peliculaId}`);
        
        window.location.href = `pelicula.html?id=${peliculaId}`;
    } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
    }
}