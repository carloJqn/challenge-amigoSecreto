// Fortalece tus habilidades de lógica con este desafío de programación.
let listaAmigos = [];
const inputAmigo = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const btnSortear = document.getElementById('btnSortear');

function limpiarInput() {
    inputAmigo.value = '';
}

function agregarAmigo() {
    if (resultado.textContent) {
        resetearResultado();
    }

    const nombre = formatearNombre(inputAmigo.value.trim());
    if (!nombre) {
        mostrarAlerta('Por favor, ingrese un nombre.');
        return;
    }

    if (listaAmigos.includes(nombre)) {
        mostrarAlerta('El amigo ya fue ingresado.');
    } else {
        agregarAmigoMostrar(nombre);
        listaAmigos.push(nombre);
    }
    limpiarInput();
}

function formatearNombre(nombre) {
    return nombre ? nombre[0].toUpperCase() + nombre.slice(1).toLowerCase() : '';
}

function agregarAmigoMostrar(nombre) {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
}

function limpiarLista() {
    listaAmigos = [];
    lista.innerHTML = '';
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        mostrarAlerta('Debe ingresar al menos dos amigos.');
        return;
    }
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    resultado.textContent = `El amigo secreto es: ${amigoSorteado}`;
    limpiarLista();
    btnSortear.disabled = true;
}

function resetearResultado() {
    resultado.textContent = '';
    btnSortear.disabled = false;
}

function mostrarAlerta(mensaje) {
    alert(mensaje);
}
