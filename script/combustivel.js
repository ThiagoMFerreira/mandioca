let valorAlcool;
let valorGasolina;
let resultadoCombustivel;
let tipoCombustivel;
let tipoTrajetoA;
let tipoTrajetoB;
let trajetoA;
let trajetoB;

function displayQualCombustivel(){
    getValoresCombustivel();
    combustivel = getAlcoolOuGasolina();
    document.getElementById("resultadoAlcoolGasolina").innerHTML = combustivel;
}

function getValoresCombustivel(){
    valorAlcool = parseFloat(document.querySelector('[name=valorAlcool]').value);
    valorGasolina = parseFloat(document.querySelector('[name=valorGasolina]').value);
}

function getAlcoolOuGasolina(){
    resultado = valorAlcool / valorGasolina;
    if(resultado <= 0.72){
        return resultadoCombustivel = 'Álcool'; 
    }
    else{
        return resultadoCombustivel = 'Gasolina';

    }
}

function displayMelhorTrajeto(){
    getValoresTrajetos();
    trajeto  = getMelhorTrajeto();
    document.getElementById("resultadoTrajeto").innerHTML = trajeto;
}

function getValoresTrajetos(){
    tipoTrajetoA = document.getElementById("tipoTrajetoA");
    tipoTrajetoA = tipoTrajetoA.options[tipoTrajetoA.selectedIndex].text;
    tipoTrajetoB = document.getElementById("tipoTrajetoB");
    tipoTrajetoB = tipoTrajetoB.options[tipoTrajetoB.selectedIndex].text;
    trajetoA = parseFloat(document.querySelector('[name=trajetoA]').value);
    trajetoB = parseFloat(document.querySelector('[name=trajetoB]').value);
}

function getMelhorTrajeto(){
    resultadoA = getLitrosUsadoNoTrajeto(tipoTrajetoA,trajetoA);
    resultadoB = getLitrosUsadoNoTrajeto(tipoTrajetoB,trajetoB);
    if(resultadoA < resultadoB){
        return melhorTrajeto = "Trajeto A";
    }
    else if(resultadoA == resultadoB){
        return melhorTrajeto = "Ambos trajeto vão gastar a mesma quantidade de combustível";
    }
    else {
        return melhorTrajeto = "Trajeto B";
    }
}

function getLitrosUsadoNoTrajeto(tipoTrajetoUsado,kmsTrajeto){
    if(tipoTrajetoUsado === "Cidade"){
        return resultado = kmsTrajeto/9.2
    }
    else if(tipoTrajetoUsado === "Misto"){
       return  resultado = kmsTrajeto/11.3
    }
    else{
       return resultado = kmsTrajeto/13.5
    } 
    
}