function exercicio1() {
    let fraseOriginal = prompt("Digite uma frase");
    let palavraAntiga = prompt("Escolha uma palavra para trocar");
    let palavraNova = prompt("Qual será a nova palavra?")

    let fraseEditada = fraseOriginal.replace(palavraAntiga, palavraNova);

    console.log("Frase Original: " + fraseOriginal + "\n\nFrase Editada: " + fraseEditada);
}

function exercicio2() {
    let fraseOriginal = prompt("Digite uma frase");
    let apagarPalavra = prompt("Digite uma palavra para remover");

    let fraseAtualizada = fraseOriginal.replaceAll(apagarPalavra, "");

    console.log("Frase Original: " + fraseOriginal + "\n\nFrase Atualizada: " + fraseAtualizada);
}

function exercicio3() {
    let nomeCompleto = prompt("Digite seu nome completo")
    let palavras = nomeCompleto.split(" ");
    let primeiroNome = palavras[0];
    let ultimoNome = palavras[palavras.length - 1];
    let primeiroUltimoNome = primeiroNome + " " + ultimoNome

    console.log("Nome completo: " + nomeCompleto + "\n\nPrimeiro e Ultimo nome: " + primeiroUltimoNome)
}

function exercicio4() {
    let frase = prompt("Digite uma frase");
    let pedacoFrase = frase.substring(5, 12);

    console.log(pedacoFrase)
}

function exercicio5() {
    let frase = prompt("Digite uma frase incluindo vários espaços no começo e final dela");
    let fraseAjustada = frase.trim()

    console.log("Frase Original: " + frase + "\n\nFrase Corrigida: " + fraseAjustada)
}

function exercicio6() {
    let frase = prompt("Digite uma frase incluindo vários espaços no começo dela");
    let fraseAjustada = frase.trimStart()

    console.log("Frase Original: " + frase + "\n\nFrase Corrigida: " + fraseAjustada)
}

function exercicio7() {
    let frase = prompt("Digite uma frase incluindo vários espaços no final dela");
    let fraseAjustada = frase.trimEnd()

    console.log("Frase Original: " + frase + "\n\nFrase Corrigida: " + fraseAjustada)
}
function exercicio8() {
    let celular = prompt("Digite o seu número de celular");
    let apresentar = celular.padStart(11, "47")

    console.log("Numero com DDD " + apresentar)
}

function exercicio9() {
    let numeroContaBancaria = prompt("Digite o número da sua conta")
    let preencherFinal = numeroContaBancaria.padEnd(10, "0");

    console.log(preencherFinal)
}

function exercicio10() {
    let numeroDecimal = parseFloat(prompt("Digite um número com casas decimais").replace(",", "."));

    console.log("R$" + numeroDecimal.toFixed(2).replace(".", ","))
}