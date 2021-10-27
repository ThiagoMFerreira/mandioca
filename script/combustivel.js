let valorAlcool;
let valorGasolina;
let resultadoCombustivel;
let tipoCombustivel;
let tipoTrajetoA;
let tipoTrajetoB;
let trajetoA;
let trajetoB;

function getValoresCombustivel(){
    valorAlcool = document.querySelector('[name=valorAlcool]').value;
    valorAlcool = parseFloat(valorAlcool);
    valorGasolina = document.querySelector('[name=valorGasolina]').value;
    valorGasolina = parseFloat(valorGasolina);
}

function getValoresTrajetos(){
    tipoTrajetoA = document.getElementById("tipoTrajetoA");
    tipoTrajetoA = tipoTrajetoA.options[tipoTrajetoA.selectedIndex].text;
    tipoTrajetoB = document.getElementById("tipoTrajetoB");
    tipoTrajetoB = tipoTrajetoB.options[tipoTrajetoB.selectedIndex].text;
    trajetoA = document.querySelector('[name=trajetoA]').value;
    trajetoA = parseFloat(trajetoA);
    trajetoB = document.querySelector('[name=trajetoB]').value;
    trajetoB = parseFloat(trajetoB);
}

function qualCombustivelUsar(){
    resultado = valorAlcool / valorGasolina;
    if(resultado <= 0.72){
        resultadoCombustivel = 'Álcool'; 
    }
    else{
        resultadoCombustivel = 'Gasolina';

    }

    return resultadoCombustivel;
}

function displayQualCombustivel(){
    getValoresCombustivel();
    combustivel = qualCombustivelUsar();
    document.getElementById("resultadoAlcoolGasolina").innerHTML = combustivel;
}

function litrosTrajeto(tipoTrajetoUsado,kmsTrajeto){
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

function qualTrajeto(){
    resultadoA = litrosTrajeto(tipoTrajetoA,trajetoA);
    resultadoB = litrosTrajeto(tipoTrajetoB,trajetoB);
    if(resultadoA < resultadoB){
        melhorTrajeto = "Trajeto A";
    }
    else{
        melhorTrajeto = "Trajeto B";
    }

    return melhorTrajeto;
}

function displayMelhorTrajeto(){
    getValoresTrajetos();
    trajeto  = qualTrajeto();
    document.getElementById("resultadoTrajeto").innerHTML = trajeto;
}