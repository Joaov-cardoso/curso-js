function exercicio1() {
    let idade = parseInt(prompt("Digite a sua idade"));

    if (idade >= 18) {
        alert("Maior de idade")
        console.log("Maior de idade")
    } else {
        alert("Menor de idade")
        console.log("Menor de idade")
    }
}

function exercicio2() {
    let numero = parseInt(prompt("Digite um número"));

    if (numero % 2 === 0) {
        alert("Numero par")
        console.log("Numero par")
    } else {
        alert("Número impar")
        console.log("Número impar")
    }
}

function exercicio3() {
    let nota = parseFloat(prompt("Digite a nota da prova"))

    if (nota >= 7) {
        alert("Aprovado")
        console.log("Aprovado")
    } else {
        alert("Reprovado")
        console.log("Reprovado")
    }
}

function exercicio4() {
    let senha = prompt("Digite a senha");
    let senhaCerta = "1234";

    if (senha === senhaCerta) {
        alert("Acesso Permitido")
        console.log("Acesso Permitido")
    } else {
        alert("Senha Incorreta")
        console.log("Senha Incorreta")
    }
}

function exercicio5() {
    let valor = parseFloat(prompt("Digite o valor de compra").replace(",", "."));

    if (valor > 100) {
        alert("Você ganhou um desconto de 10%")
        console.log("Você ganhou um desconto de 10%")
    } else {
        alert("Sem desconto disponível")
        console.log("Sem desconto disponível")
    }
}

function exercicio6() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade >= 0 && idade <= 12) {
        alert("Criança")
        console.log("Criança")
    } else if (idade >= 13 && idade <= 17) {
        alert("Adolescente")
        console.log("Adolescente")
    } else if (idade >= 18 && idade <= 59) {
        alert("Adulto")
        console.log("Adulto")
    } else if (idade >= 60) {
        alert("Idoso")
        console.log("Idoso")
    } else {
        alert("Idade inválida")
        console.log("Idade inválida")
    }
}

function exercicio7() {
    let numero1 = parseInt(prompt("Digite um número"))
    let numero2 = parseInt(prompt("Digite o segundo número"))

    if (numero1 > numero2) {
        alert("O número " + numero1 + " " + "é o número maior")
        console.log("O número " + numero1 + " " + "é o número maior")
    } else if (numero1 < numero2) {
        alert("O número " + numero2 + " " + "é o número maior")
        console.log("O número " + numero2 + " " + "é o número maior")
    } else {
        alert("Os números são iguais")
        console.log("Os números são iguais")
    }
}

function exercicio8() {
    let numero = parseFloat(prompt("Digite um número").replace(",", "."));

    if (numero === 0) {
        alert("Zero")
        console.log("Zero")
    } else if (numero < 0) {
        alert("Negativo")
        console.log("Negativo")
    } else {
        alert("Positivo")
        console.log("Positivo")
    }
}

function exercicio9() {
    let media = parseFloat(prompt("Qual foi a média final do aluno?").replace(",", "."))

    if (media >= 7) {
        alert("Aprovado")
        console.log("Aprovado")
    } else if (media >= 5 && media <= 6, 9) {
        alert("Recuperação")
        console.log("Recuperação")
    } else {
        alert("Reprovado")
        console.log("Reprovado")
    }
}

function exercicio10() {
    let numero = parseInt(prompt("Digite um número inteiro"))

    if (numero % 3 === 0 && numero % 5 === 0) {
        alert("Multiplo de 3 e 5")
        console.log("Multiplo de 3 e 5")
    } else if (numero % 3 === 0) {
        alert("Multiplo de 3")
        console.log("Multiplo de 3")
    } else if (numero % 5 === 0) {
        alert("Multiplo de 5")
        console.log("Multiplo de 5")
    } else {
        alert("Não é múltiplo de 3 nem de 5")
        console.log("Não é múltiplo de 3 nem de 5")
    }
}

function exercicio11() {
    let idade = parseInt(prompt("Digite sua idade"));
    let ingresso = prompt("Você tem um ingresso? (sim ou não)").toLowerCase();

    if (idade >= 18 && ingresso === "sim") {
        alert("Entrada permitida")
        console.log("Entrada permitida")
    } else {
        alert("Entrada negada")
        console.log("Entrada negada")
    }

}

function exercicio12() {
    let valor = parseFloat(prompt("Valor da compra").replace(",", ".").replace("R$", "").replaceAll(" ", ""))
    let vip = prompt("Cliente VIP? (sim ou não)").toLowerCase();

    if (valor > 200 || vip === "sim") {
        alert("Você ganhou um brinde!")
        console.log("Você ganhou um brinde!")
    } else {
        alert("Sem bônus disponível")
        console.log("Sem bônus disponível")
    }
}

function exercicio13() {
    let usuario = prompt("Usuário");
    let senha = prompt("Senha");

    if (usuario === "admin" && senha === "1234") {
        alert("Login bem-sucedido")
        console.log("Login bem-sucedido")
    } else {
        alert("Usuário ou senha inválidos")
        console.log("Usuário ou senha inválidos")
    }
}

function exercicio14() {
    let lado1 = parseFloat(prompt("Lado 1 do triangulo").replace(",", "."));
    let lado2 = parseFloat(prompt("Lado 2 do triangulo").replace(",", "."));
    let lado3 = parseFloat(prompt("Lado 3 do triangulo").replace(",", "."))

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        alert("Triangulo válido")
        console.log("Triangulo válido")
    } else {
        alert("Triangulo inválido")
        console.log("Triangulo inválido")
    }
}

function exercicio15() {
    let ano = parseInt(prompt("Digite um ano"));

    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        alert("Ano bissexto")
        console.log("Ano bissexto")
    } else {
        alert("Ano comum")
        console.log("Ano comum")
    }
}