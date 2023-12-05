function calculaMdc(numero1, numero2) {
    while (numero2 !== 0) {
        let temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }

    return numero1;
}

const resultado = calculaMdc(420, 245)

console.log('O MDC é:', resultado)