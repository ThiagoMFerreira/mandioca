let kgsComCasca;
let valorComCasca;
let kgsSemCasca;
let valorSemCasca;

function getValores(){
    kgsComCasca = document.querySelector('[name=kgsComCasca]').value;
    kgsComCasca = parseFloat(kgsComCasca);
    valorComCasca = document.querySelector('[name=valorComCasca]').value;
    valorComCasca = parseFloat(valorComCasca);
    kgsSemCasca = document.querySelector('[name=kgsSemCasca]').value;
    kgsSemCasca = parseFloat(kgsSemCasca);
    valorSemCasca = document.querySelector('[name=valorSemCasca]').value;
    valorSemCasca = parseFloat(valorSemCasca);
}

function valorTotal(kgs,valor,id){
    resultadoMandioca = kgs * valor;
    document.getElementById(id).innerHTML = resultadoMandioca;
    return resultadoMandioca;
}

function displayResult(){
    getValores();
    valorTotal(kgsComCasca,valorComCasca,"resultadoComCasca");
    valorTotal(kgsSemCasca,valorSemCasca,"resultadoSemCasca");
}

let litrosKm;
let kms;
let precoLitro;

function getValoresComb(){
    litrosKm = document.querySelector('[name=litrosKm]').value;
    litrosKm = parseFloat(litrosKm);
    kms = document.querySelector('[name=kms]').value;
    kms = parseFloat(kms);
    precoLitro = document.querySelector('[name=precoLitro]').value;
    precoLitro = parseFloat(precoLitro);
}

function gastoCombustivel(){
    resultadoCombustivel = kms / litrosKm;
    resultadoCombustivel = resultadoCombustivel * precoLitro;
    document.getElementById("resultadoCombustivel").innerHTML = resultadoCombustivel;
    return resultadoCombustivel;
}

function displayResultCombustivel(){
    getValoresComb();
    gastoCombustivel();
}

function valoresTotais(){
    getValores();    
    semCasca = valorTotal(kgsSemCasca,valorSemCasca,"resultadoSemCasca");
    comCasca = valorTotal(kgsComCasca,valorComCasca,"resultadoComCasca");
    getValoresComb();    
    combustivel = gastoCombustivel();
    resultadoSemCasca = semCasca + combustivel;
    resultadoComCasca = comCasca + combustivel;
    document.getElementById("resultadoMandiocaSemCascaCombustivel").innerHTML = resultadoSemCasca;
    document.getElementById("resultadoMandiocaComCascaCombustivel").innerHTML = resultadoComCasca;
}
