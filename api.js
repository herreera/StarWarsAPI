function obtenerDatosSWAPI(endpoint) {

}

function obtenerIdURLRecursoSWAPI(url) {
    return Number(url.match(/([0-9]*)\/?$/)[1]);
}

function obtenerPeliculas() {
    return obtenerDatosSWAPI('https://swapi.dev/api/films/');
}

function obtenerPersonaje() {
    return obtenerDatosSWAPI(`https://swapi.dev/api/people/`);
}

function obtenerPlanetas() {
    return obtenerDatosSWAPI(`https://swapi.dev/api/people/`);
}

function obtenerNaves() {
    return obtenerDatosSWAPI(`https://swapi.dev/api/people/`);
}

function obtenerVehiculos() {
    return obtenerDatosSWAPI(`https://swapi.dev/api/people/`);
}

function obtenerEspecies() {
    return obtenerDatosSWAPI(`https://swapi.dev/api/people/`);
}