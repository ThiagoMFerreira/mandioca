import { valorTotal } from "./calculoMandioca.js";
import { gastoCombustivel } from "./calculoCombustivel.js";

export function valoresTotais(){
    mandioca = valorTotal();
    combustivel = gastoCombustivel();
    resultado = madioca + combustivel;
    document.getElementById("resultadoMandiocaCombustivel").innerHTML = resultado;
}
