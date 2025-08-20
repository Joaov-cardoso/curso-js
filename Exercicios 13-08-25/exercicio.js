function exercicio1() {
    let n1 = parseFloat(prompt("Digite a Nota 01").replace(",", "."));
    let n2 = parseFloat(prompt("Digite a Nota 02").replace(",", "."));
    let n3 = parseFloat(prompt("Digite a Nota 03").replace(",", "."));

    let media = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;
    let mediaAtualizada;

    if (media >= 7) {
        console.log("Aprovado")
    } else if (media >= 5) {
        let trabalhoExtra = prompt("Fez o trabalho extra? sim ou não").toLowerCase;

        if (media >= 6.8 && media < 7 && trabalhoExtra === sim) {
            mediaAtualizada = media + 0.2;
            if (mediaAtualizada > 10 || media > 10) {
                mediaAtualizada = 10;
                media = 10;
            }
        }

        if (media >= 7) {
            console.log("Aprovado, média final: " + media)
        } else {
            let exame = parseFloat(prompt("Ditite a nota do exame").replace(",", "."));
            let mediaPosExame = (media + exame) / 2
            if (mediaPosExame >= 6) {
                console.log("Aprovado com exame, média: " + mediaPosExame)
            } else {
                console.log("Reprovado")
            }
        }
    }
    else {
        console.log("Reprovado")
    }
}

function exercicio2() {
    let valorDaCompra = parseFloat(prompt("Digite o valor da compra").replace(",", "."));
    let cupomDesconto = prompt("Digite o cupom desconto! FRETEGRATIS ou DESC10").toLowerCase();
    let desconto = 0;

    if (valorDaCompra >= 500) {
        desconto = 0.15
    } else if (valorDaCompra >= 300) {
        desconto = 0.10
    } else if (valorDaCompra >= 150) {
        desconto = 0.05
    } else {
        desconto = 0
    }
    let valorComDesconto = valorDaCompra - (valorDaCompra * desconto)
    let frete = 25;

    if (cupomDesconto === "DESC10") {
        valorFinal = valorComDesconto * 0.10
    } else if (cupomDesconto === "FRETEGRATIS") {
        frete = 0
        valorFinal = valorComDesconto - frete
    }
    let valorFinal = valorComDesconto + frete;

    console.log("Valor Original: " + valorDaCompra + "\nFrete: " + frete + "\n\nValor final: " + valorFinal)
}

function exercicio3() {
    let horas = parseFloat(prompt("Digite as horas utilizadas (em decimal)"))
    let pernoite = prompt("Pernoite? (sim ou não)").toLowerCase()
    let valor = 0

    if (horas <= 0) {
        console.log("Digite um valor válido de horas")
    }

    if (horas <= 1) {
        valor = 12
    } else {
        if (horas < 4) {
            let horasAdicionais = horas - 1
            valor = 12 + (horasAdicionais * 6)
        } else if (horas >= 4) {
            valor = 30
        }
    }

    if (pernoite === "sim" && horas > 10) {
        valor = valor + 20
    } else {
        valor = valor
    }

    console.log("Valor a pagar: " + valor)

}

function exercicio4() {
    let lado1 = parseFloat(prompt("Digite o lado 1").replace(",", "."))
    let lado2 = parseFloat(prompt("Digite o lado 2").replace(",", "."))
    let lado3 = parseFloat(prompt("Digite o lado 3").replace(",", "."))

    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {

        if (lado1 === lado2 && lado2 === lado3) {
            console.log("Triangulo equilatero")
        } else if (lado1 === lado2 && lado2 !== lado3 || lado1 === lado3 && lado1 !== lado2) {
            console.log("Triangulo isosceles")
        } else {
            console.log("Triangulo escaleno")
        }
    }else{
        console.log("Triangulo inválido")
    }
}

function exercicio5(){
    let x = parseFloat(prompt("Digite o valor de x").replace(",", "."))
    let y = parseFloat(prompt("Digite o valor de y").replace(",", "."))

    if(x === 0 && y === 0){
        console.log("Origem")
    }else if(x===0){
        console.log("Eixo Y")
    }else if(y===0){
        console.log("Eixo X")
    }else if(x > 0 && y > 0){
        console.log("Q1")
    }else if(x < 0 && y > 0){
        console.log("Q2")
    }else if(x < 0 && y < 0){
        console.log("Q3")
    }else if(x > 0 && y < 0){
        console.log("Q4")
    }
}

function exercicio6(){
    let media = parseFloat(prompt("Digite a média").replace(",", "."))
    let rendaFamiliar = parseFloat(prompt("Qual a renda familiar?").replace(",", "."))
    let moradores = parseInt(prompt("Número de moradores"))
    let perCapita = rendaFamiliar / moradores
    
    if (media >= 8 && perCapita <= 1320){
        console.log("Bolsa Integral")
    }else if (media >= 7 && perCapita <= 1980){
        console.log("Bolsa parcial")
    }else{
        console.log("Sem bolsa")
    }
}

function exercicio7(){
    let salario = parseFloat(prompt("Digite o salário").replace(",", ".").replace("R$", "").replace(" ", ""))
    let tempo = parseInt(prompt("Tempo de emprego (em meses)"))
    let parcela = parseFloat(prompt("Valor da parcela desejada"));
    let negativado = prompt("Está negativado (sim ou não)").replace("nao", "não").toLowerCase()
    let aprovado = true;
    let motivoNegativado = ""
    let motivoTempo = ""
    let motivoParcela = ""

    if (negativado === "sim"){
        aprovado = false
        motivoNegativado = "Está negavitado" + "\n"
    }

    if (tempo < 6){
        aprovado = false
        motivoTempo = "Tempo de emprego menor que 6 meses" + "\n"
    }

    if (parcela > 0.3 * salario){
        aprovado = false
        motivoParcela = "Parcela maior que 30% do salario" + "\n"
    }

    if(aprovado){
        console.log("Emprestivo aprovado")
    }else{
        console.log("Reprovado pelos motivos: " + "\n" + motivoNegativado + "\n" + motivoTempo + "\n" + motivoParcela)
    }

}

function exercicio8(){
    let velocidade = parseFloat(prompt("Digite a velocidade").replace(",", "."))
    let limiteDaVia = parseInt(prompt("Limite da Via"))

    if(velocidade <= limiteDaVia){
        console.log("Dentro do limite")
    }else if(velocidade <= limiteDaVia * 1.2){
        console.log("Infração leve")
    }else if(velocidade <= limiteDaVia * 1.5){
        console.log("Infração grave")
    }else{
        console.log("Infração gravissima")
    }
}

function exercicio9(){
    let hora = parseFloat(prompt("Digite a hora (0-23)"))

    if(hora >=0 && hora <= 4 || hora >= 18 && hora <= 23){
        console.log("Boa noite")
    }else if(hora >= 5 && hora <= 11){
        console.log("Bom dia")
    }else if(hora >= 12 && hora <= 17){
        console.log("Boa tarde")
    }else if (hora < 0 || hora > 23){
        console.log("Hora inválida")
    }
}

function exercicio10(){
    let plano = parseInt(prompt("Digite o código do plano (1=Basic, 2=Plus, 3=Pro"))
    let internetExtra = prompt("Quer internet extra (sim ou não)").replace("nao", "não").toLowerCase()
    let valor = 0

    if (plano === 1 && internetExtra === "sim"){
        valor = 39
        console.log("Valor do plano: R$ " + valor + "\nInternet extra nao disponivel para este plano")
    }else if (plano === 1 && internetExtra === "não") {
        valor = 39
        console.log("Valor do plano: R$ " + valor)
    }

    if(plano === 2 && internetExtra === "sim"){
        valor = 59 + 15
        console.log("Valor do plano: R$ " + valor)
    }else if(plano === 2 && internetExtra === "não"){
        valor = 59
        console.log("Valor do plano: R$ " + valor)
    }

    if(plano === 3 && internetExtra === "sim"){
        valor = 79 + 15
        console.log("Valor do plano: R$ " + valor)
    }else if(plano === 3 && internetExtra === "não"){
        valor = 79
        console.log("Valor do plano: R$ " + valor)
    }
}