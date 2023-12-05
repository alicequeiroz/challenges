function comparaValores(valoresArray) {

    let maior = valoresArray[0]
    let menor = valoresArray[0]

    for (let i = 0; i < valoresArray.length; i++) {

        if (valoresArray[i] > maior) {
            maior = valoresArray[i];

        }

        if (valoresArray[i] < menor) {
            menor = valoresArray[i];

        }

    }

    return { maior, menor }
}

const resultado = comparaValores([-1, 30, 0.5, 60, 55.17, 16, 84]);

console.log( `O menor número é ${resultado.menor} e o maior é ${resultado.maior}`)
