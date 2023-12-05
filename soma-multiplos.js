function somaMultiplos () {
    let soma = 0;

    for (let i = 1; i <= 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }

    return soma;

}

const resultado = somaMultiplos();
console.log("A soma dos multiplos de 5 e 7 no intervalo entre 1 e 1000 é igual a:", resultado)
