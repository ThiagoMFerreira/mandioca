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

export function valorTotal(kgs,valor,id){
    console.log("Passei aqui");
    resultadoMandioca = kgs * valor;
    document.getElementById(id).innerHTML = resultadoMandioca;
    return resultadoMandioca;
}

function displayResult(){
    getValores();
    valorTotal(kgsComCasca,valorComCasca,"resultadoComCasca");
    valorTotal(kgsSemCasca,valorSemCasca,"resultadoSemCasca");
}

 