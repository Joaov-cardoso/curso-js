function exercicio1(){
    let idade = parseInt(prompt("Digite a sua idade"));

    if (idade >= 18){
        console.log("Maior de idade")
    }else{
        console.log("Menor de idade")
    }
}

function exercicio2(){
    let numero = parseInt(prompt("Digite um número"));

    if (numero % 2 === 0){
        console.log("Numero par")
    } else{
        console.log("Número impar")
    }
}

function exercicio3(){
    let nota1 = parseFloat(prompt("Digite a primeira nota").replace(",", "."));
    let nota2 = parseFloat(prompt("Digite a segunda nota").replace(",", "."));
    let nota3 = parseFloat(prompt("Digite a terceira nota".replace(",", ".")));

    let media = ((nota1 + nota2 + nota3) / 3).toFixed(2)

    if (media >=7){
        console.log("Média: " + media + "\n\nAprovado")
    } else {
        console.log("Média: " + media + "\n\nReprovado")
    }
}

function exercicio4(){
    let senha = prompt("Digite a senha");
    let senhaCerta = "1234";

    if(senha === senhaCerta){
        console.log("Acesso Permitido")
    }else{
        console.log("Senha Incorreta")
    }
}

function exercicio5(){
    let valor = parseFloat(prompt("Digite o valor de compra").replace(",", "."));

    if (valor > 100){
        console.log("Você ganhou um desconto de 10%")
    }else{
        console.log("Sem desconto disponível")
    }
}

function exercicio7() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade >= 0 && idade <= 12) {
        console.log("Criança");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Adolescente");
    } else if (idade >= 18 && idade <= 59) {
        console.log("Adulto");
    } else if (idade >= 60) {
        console.log("Idoso");
    } else {
        console.log("Idade inválida");
    }
}

function exercicio8(){
    let numero1 = parseInt(prompt("Digite um número"))
    let numero2 = parseInt(prompt("Digite o segundo número"))

    if (numero1 > numero2){
        console.log("O número " + numero1 + " " + "é o número maior")
    } else if (numero1 < numero2){
        console.log("O número " + numero2 + " " + "é o número maior")
    } else {
        console.log("Os números são iguais")
    }
}

///trocar a 8 pela 3