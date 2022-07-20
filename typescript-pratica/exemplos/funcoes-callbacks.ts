type input = number | string;

function somarValores(input1: input, input2: input) {

    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString()
    } else { return input1 + input2 }

}



// console.log(somarValores(1, 5))
// console.log(somarValores("O preço do leite é ", 5))
// console.log(somarValores("1", 5))

// assim como fazemos pra tipar o tipo do parâmetro, também podemos tipar o retorno da função da seguinte maneira ==> function exemplo(numero1: number, numero2: number) : number {
//     return numero1 + numero2
// }


// utilizando callback tipado no Typescript
function somarValoresETratar(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado)
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}

console.log(somarValoresETratar(1,3, aoQuadrado));
console.log(somarValoresETratar(1,3, dividirPorEleMesmo));