// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
const inputAmigo = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function limpiarInput() {
    inputAmigo.value = '';
}

function agregarAmigo() {
    if(inputAmigo.value == '') {
        alert('Por favor, debe ingresar un nombre');
        return;
    }        
    
    let nombre = inputAmigo.value;
    nombre = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();

    if(!listaAmigos.includes(nombre)){        
        agregarAmigoMostrar(nombre);
        listaAmigos.push(nombre);
        limpiarInput();
    } else {
        alert('El amigo ya fue ingresado');
        limpiarInput();
    }
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
    if(listaAmigos.length < 2) {
        alert('Debe ingresar al menos dos amigos');
    } else {
        const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        
        resultado.textContent = `El amigo secreto es: ${amigoSorteado}`;

        limpiarLista();
        
        
    }
}