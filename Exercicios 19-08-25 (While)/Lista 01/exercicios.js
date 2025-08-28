function exercicio1() {
    let indice = 0;
    let precoTotal = 0;
    while (indice < 4) {
        let precos = parseFloat(prompt("Digite os valores:").replace(",", "."))

        precoTotal = precoTotal + precos
        indice = indice + 1
    }

    let media = precoTotal / indice

    console.log("Preço Total: " + precoTotal + "\nMédia: " + media)
}

function exercicio2() {
    let indice = 0;
    let comecaComA = 0, outrosComecos = 0;

    while (indice < 5) {
        let palavras = prompt("Digite as palavras:")

        if (palavras.toLowerCase().trim().startsWith("a")) {
            comecaComA = comecaComA + 1
        } else {
            outrosComecos = outrosComecos + 1
        }

        indice = indice + 1
    }
    console.log("Quantidade que começa com 'A': " + comecaComA + "\nOutras palavras: " + outrosComecos)
}

function exercicio3() {
    let idade = 0;
    while (idade < 1 || idade > 120) {
        idade = parseInt(prompt("Digite a idade"));

        if (idade < 1) {
            alert("Idade inválida, digite novamente")
        } else if (idade > 120) {
            alert("Idade inválida, digite novamente")
        } else {
            alert("Idade cadastrada: " + idade)
        }

    }
}

function exercicio4() {
    let indice = 0;     
    let maiorAltura = 0;
    while (indice < 3) {
        let altura = parseFloat(prompt("Digite a altura").replace(",", "."));

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        indice = indice + 1;
    }
    alert("Maior Altura: " + maiorAltura.toFixed(2));
}

function exercicio5() {
    let menu = `Menu:
    1 - Saudação
    2 - Par ou ímpar

    100 - Sair
    Digite a opção`
    let opcaoEscolhida = 0;
    while (opcaoEscolhida !== 100) {
        opcaoEscolhida = parseInt(prompt(menu));

        if (opcaoEscolhida === 1) {
            let nome = prompt("Digite seu nome");
            alert("Olá, " + nome)
        } else if (opcaoEscolhida === 2) {
            let numero = parseInt(prompt("Digite um número"));
            if (numero % 2 === 0) {
                alert("O número " + numero + " é par")
            } else {
                alert("O número " + numero + " é impar")
            }
        } else if (opcaoEscolhida !== 100) {
            alert("Opção inválida")
        } else {
            alert("Sistema encerrado")
        }
    }
}

function exercicio6() {
    let indice = 0;
    let nome = "";
    let nomesRegistrados = "";

    while (nome.toLowerCase().trim() !== "fim") {
        nome = prompt("Digite o nome ou 'fim' para encerrar");

        if (nome.toLowerCase().trim() !== "fim") {
            nomesRegistrados = nomesRegistrados + nome + "\n"
            indice = indice + 1
        }
    }
    console.log("Nomes registrados: " + nomesRegistrados + "\nQuantidades de nome: " + indice)
}

function exercicio7() {
    let indice = 0;
    let precosTotal = 0;
    while (indice < 4) {
        let preco = parseFloat(prompt("Digite o valor").replace("R$", "").replace(" ", "").replace(",", "."));


        precosTotal = precosTotal + preco
        indice = indice + 1
    }
    let media = precosTotal / indice

    console.log("Soma dos preços: " + precosTotal.toFixed(2) + "\nMédia dos preços: " + media.toFixed(2))
}

function exercicio8() {
    let indice = 0;
    let perguntas = 0, naoPerguntas = 0;
    while (indice < 5) {
        let frases = prompt("Digite uma pergunta ou uma afirmação.")

        if (frases.trimEnd().endsWith("?")) {
            perguntas = perguntas + 1
        } else {
            naoPerguntas = naoPerguntas + 1
        }
        indice = indice + 1
    }

    console.log("Quantidade de perguntas: " + perguntas + "\nQuantidade de não perguntas: " + naoPerguntas)
}

function exercicio9() {
    let indice = 0;
    let quantidadeVip = 0;
    let quantidadeOff = 0;
    let outrosCupons = 0;
    while (indice < 5) {
        let cupom = prompt("Digite os cupons");

        if (cupom.toLowerCase().trim().startsWith("vip")) {
            quantidadeVip = quantidadeVip + 1
        } else if (cupom.toLowerCase().trim().endsWith("off")) {
            quantidadeOff = quantidadeOff + 1
        } else {
            outrosCupons = outrosCupons + 1
        }

        indice = indice + 1
    }

    console.log("Cupons VIP: " + quantidadeVip + "\nCupons OFF: " + quantidadeOff + "\nOutros cupons: " + outrosCupons)
}

function exercicio10() {
    let indice = 0;
    let nomeCompleto = "";
    let nomesRegistrados = "";
    while (indice < 3) {
        nomeCompleto = prompt("Digite o nome completo").trim();
        let partesNome = nomeCompleto.split(" ");
        let primeiroNome = partesNome[0];

        nomesRegistrados = nomesRegistrados + primeiroNome + "\n"

        indice = indice + 1
    }
    console.log("Primeiros nomes: " + nomesRegistrados)
}
