let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo=10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero secreto ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++;    
        limpiarCaja();
    }
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //si ya se sortearon todos los numeros posibles

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', `ya se asignaron todos los numeros posibles`);
    }else{
        //si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Bienvenido al juego Adivina el numero');
    asignarTextoElemento ('p', `Ingresa un numero entre el 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //console.log (numeroSecreto);
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();
