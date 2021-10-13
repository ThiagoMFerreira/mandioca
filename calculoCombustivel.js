//import {resultadoMandioca} from './CascaVsSemCasca';
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

export function gastoCombustivel(){
    resultadoCombustivel = kms / litrosKm;
    resultadoCombustivel = resultadoCombustivel * precoLitro;
    document.getElementById("resultadoCombustivel").innerHTML = resultadoCombustivel;
    return resultadoCombustivel;
}

// function somaCombustivelMandioca(){
//     resultado = resultadoCombustivel + resultadoMandioca;
//     document.getElementById("resultadoMandiocaCombustivel").innerHTML = resultado;
// }

function displayResultCombustivel(){
    getValoresComb();
    gastoCombustivel();
    //somaCombustivelMandioca();
}

// export {gastoCombustivel};

