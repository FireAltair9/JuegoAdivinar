
let numeroAleatorio = 0;
console.log(numeroAleatorio);

let intentos = 0;

let listadeNumero = [];

let numeroMaximo = 10;

function asignarTextoElementos(elemento, texto) {
    let elementoTexto = document.querySelector(elemento);
    elementoTexto.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('numeroIdentificado').value);
    if(numeroDeUsuario === numeroAleatorio){
        asignarTextoElementos('p', `Felicidades Acertaste con ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else {
        if(numeroDeUsuario > numeroAleatorio){
            asignarTextoElementos('p', 'El numero es menor');
        }else{
            asignarTextoElementos('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCampo();
    }
    return;
}

function asignarNumero(){
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+1;

    if(listadeNumero.length == numeroMaximo){
        asignarTextoElementos('p', 'Ya se intentaron todos los numeros posibles');

    }else{
        
        if(listadeNumero.includes(numeroAleatorio)){
            return asignarNumero();
        }
        else{
            listadeNumero.push(numeroAleatorio)
            return numeroAleatorio;
        }
    }
}

function limpiarCampo(){
    let campoVacio = document.querySelector('#numeroIdentificado')
    campoVacio.value = '';
}

function elementosInicialesDelJuego(){
    asignarTextoElementos('h1', 'Videojuego en el navegador');
    asignarTextoElementos('p', `coloca un numero del 1 al ${numeroMaximo}`);
    numeroAleatorio = asignarNumero();
    intentos = 1;

}
function reiniciarJuego(){
    elementosInicialesDelJuego();
    limpiarCampo();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

elementosInicialesDelJuego();

