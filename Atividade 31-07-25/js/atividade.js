/*
Título: Exercícios 2025-08-01
Exercício 01: Criar uma função exercicio01, apresentar a seguinte mensagem "SuperDev 7ª Edição"*/
function mensagemSuperDev() {
    console.log("SuperDev 7ª Edição")
    alert("SuperDev7ª Edição")
}

/*Exercício 02: Criar uma função exercicio02, criar as variáveis abaixo para armazenar:
- seu nome (string)
- sua idade (int)
- seu peso 
- sua altura
Apresentar os seus dados no console.*/
function infosPessoais() {
    let nome = "Janete";
    let idade = 55;
    let peso = 80;
    let altura = 1.55;

    console.log(
        "Nome: " + nome +
        "\nIdade: " + idade +
        "\nPeso: " + peso +
        "\nAltura: " + altura
    )

    alert(
        "Nome: " + nome +
        "\nIdade: " + idade +
        "\nPeso: " + peso +
        "\nAltura: " + altura
    )
}

/*Exercício 03: Criar uma função exercicio03, criar as variáveis abaixo para armazenar:
- personagem
- raça
- skill
- país de origem
- rota
Para 3 personagens*/
function personagensLeague() {
    let personagem1 = "Anivia";
    let raca1 = "Passarinho de Gelo";
    let skill1 = "Tempestade Glacial";
    let pais1 = "Freljord";
    let rota1 = "Mid";

    let personagem2 = "Viktor";
    let raca2 = "Homem de lata";
    let skill2 = "Tempestade Arcana";
    let pais2 = "Zaun";
    let rota2 = "Mid";

    let personagem3 = "Yasuo";
    let raca3 = "Humano";
    let skill3 = "Ultimo Suspiro";
    let pais3 = "Ionia";
    let rota3 = "Mid";

    console.log(
        "Personagem 01: " + personagem1 +
        "\nRaça: " + raca1 +
        "\nUltimate: " + skill1 +
        "\nOrigem: " + pais1 +
        "\nRota Sugerida: " + rota1 +

        "\n\nPersonagem 02: " + personagem2 +
        "\nRaça: " + raca2 +
        "\nUltimate: " + skill2 +
        "\nOrigem: " + pais2 +
        "\nRota Sugerida: " + rota2 +

        "\n\nPersonagem 03: " + personagem3 +
        "\nRaça: " + raca3 +
        "\nUltimate: " + skill3 +
        "\nOrigem: " + pais3 +
        "\nRota Sugerida: " + rota3
    )

    alert(
        "Personagem 01: " + personagem1 +
        "\nRaça: " + raca1 +
        "\nUltimate: " + skill1 +
        "\nOrigem: " + pais1 +
        "\nRota Sugerida: " + rota1 +

        "\n\nPersonagem 02: " + personagem2 +
        "\nRaça: " + raca2 +
        "\nUltimate: " + skill2 +
        "\nOrigem: " + pais2 +
        "\nRota Sugerida: " + rota2 +

        "\n\nPersonagem 03: " + personagem3 +
        "\nRaça: " + raca3 +
        "\nUltimate: " + skill3 +
        "\nOrigem: " + pais3 +
        "\nRota Sugerida: " + rota3
    )
}

/*Exercício 04: ...., com as variáveis:
- Nome
- Peso
- Altura
Calcular IMC do paciente*/
function calculadoraIMC() {
    let nome = "Ximbinha";
    let peso = 80;
    let altura = 1.85;

    let indiceDeMassaCorporal = peso / (altura * altura);
    let resultadoIMC = indiceDeMassaCorporal.toFixed(2)

    console.log(
        "Nome: " + nome +
        "\nPeso: " + peso +
        "\nAltura: " + altura +
        "\n\nIMC: " + resultadoIMC
    )

    alert(
        "Nome: " + nome +
        "\nPeso: " + peso +
        "\nAltura: " + altura +
        "\n\nIMC: " + resultadoIMC
    )
}
function calculadoraIMCPromptEIfElse() {
    let nome = prompt("Qual o seu nome?");
    let peso = Number(prompt("Peso"));
    let altura = Number(prompt("Altura (metros, usar ponto)"));

    let indiceDeMassaCorporal = peso / (altura * altura);
    let resultadoIMC = indiceDeMassaCorporal.toFixed(2)

    let classificacao = ""
    if (resultadoIMC < 18.5) {
        classificacao = "Abaixo do Peso";
    } else if (resultadoIMC < 25) {
        classificacao = "Peso Normal";
    } else if (resultadoIMC < 30) {
        classificacao = "Sobrepeso";
    } else if (resultadoIMC < 35) {
        classificacao = "Obesidade Grau 1";
    } else if (resultadoIMC < 40) {
        classificacao = "Obesidade Grau 2";
    } else if (resultadoIMC < 45)
        classificacao = "Obesidade Grau 3";

    console.log(
        "Nome: " + nome +
        "\nPeso: " + peso +
        "\nAltura: " + altura +
        "\n\nIMC: " + resultadoIMC +
        "\nClassificação: " + classificacao
    )

    alert(
        "Nome: " + nome +
        "\nPeso: " + peso +
        "\nAltura: " + altura +
        "\n\nIMC: " + resultadoIMC +
        "\nClassificação: " + classificacao
    )
}
/*Exercício 05: ...:
- Numero1
- Numero2 
Apresentar soma, subtração, multiplicação e divisão*/
function somaNumeros() {
    let numero1 = 18;
    let numero2 = 3;

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    console.log(
        "Primeiro Núumero: " + numero1 +
        "\nSegundo Número: " + numero2 +
        "\n\nResultados: " +
        "\nSoma: " + soma +
        "\nSubtração: " + subtracao +
        "\nMultiplicação: " + multiplicacao +
        "\nDivisão: " + divisao
    )
    alert(
        "Primeiro Número: " + numero1 +
        "\nSegundo Número: " + numero2 +
        "\n\nResultados: " +
        "\nSoma: " + soma +
        "\nSubtração: " + subtracao +
        "\nMultiplicação: " + multiplicacao +
        "\nDivisão: " + divisao
    )
}
function somaNumerosPrompt() {
    let numero1 = parseInt(prompt("Primeiro Número"));
    let numero2 = parseInt(prompt("Segundo Número"));

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    let classificacaoSoma = "";
    if (soma > 0) {
        classificacaoSoma = "Número Positivo"
    } else if (soma && subtracao < 0) {
        classificacaoSoma = "Número Negativo"
    } else if (soma && subtracao === 0) {
        classificacaoSoma = "Este número é zero"
    }

    let positivoNegativo = "";
    if (subtracao > 0) {
        positivoNegativo = "Número Positivo"
    } else if (subtracao < 0) {
        positivoNegativo = "Número Negativo"
    } else if (subtracao === 0) {
        positivoNegativo = "Este número é zero"
    }

    console.log(
        "Primeiro Núumero: " + numero1 +
        "\nSegundo Número: " + numero2 +
        "\n\nResultados: " +
        "\nSoma: " + soma + " " + classificacaoSoma +
        "\nSubtração: " + subtracao + " " + positivoNegativo +
        "\nMultiplicação: " + multiplicacao +
        "\nDivisão: " + divisao
    )
    alert(
        "Primeiro Número: " + numero1 +
        "\nSegundo Número: " + numero2 +
        "\n\nResultados: " +
        "\nSoma: " + soma + " " + classificacaoSoma +
        "\nSubtração: " + subtracao + " " + positivoNegativo +
        "\nMultiplicação: " + multiplicacao +
        "\nDivisão: " + divisao
    )
}

/*Exercício 06: Solicitar para o usuário:
- Modelo e Preço Placa Mãe
- Modelo e Preço Placa de Vídeo
- Modelo e Preço Processador
- Modelo e Preço Memória RAM
- Modelo e Preço Fonte
Apresentar todos os dados e total do computador (soma das peças)*/
/*para pagina*/
function formularioComponentes() {
    let modeloPlacaMae = document.getElementById("modelo-placa-de-mae").value;
    let precoPlacaMae = Number(document.getElementById("preco-placa-de-mae").value);

    let modeloPlacaDeVideo = document.getElementById("modelo-placa-de-video").value;
    let precoPlacaDeVideo = Number(document.getElementById("preco-placa-de-video").value);

    let modeloProcessador = document.getElementById("modelo-processador").value;
    let precoProcessador = Number(document.getElementById("preco-processador").value);

    let modeloRam = document.getElementById("modelo-ram").value;
    let precoRam = Number(document.getElementById("preco-ram").value);

    let modeloFonte = document.getElementById("modelo-fonte").value;
    let precoFonte = Number(document.getElementById("preco-fonte").value);

    let somaComponentes = precoPlacaMae + precoPlacaDeVideo + precoProcessador + precoRam + precoFonte

    console.log(
        "Placa Mae: " + modeloPlacaMae +
        "\nPreço da Placa Mae: " + precoPlacaMae +

        "\n\nModelo da Placa de Video: " + modeloPlacaDeVideo +
        "\nPreço da Placa de Video: " + precoPlacaDeVideo +

        "\n\nModelo do Processador : " + modeloProcessador +
        "\nPreço do Processador: " + precoProcessador +

        "\n\nModelo da Memória RAM: " + modeloRam +
        "\nPreço da Memória RAM: " + precoRam +

        "\n\nModelo da Fonte: " + modeloFonte +
        "\nPreço da Fonte: " + precoFonte +

        "\n\nValor total dos componentes: " + somaComponentes
    )
    alert(
        "Placa Mae: " + modeloPlacaMae +
        "\nPreço da Placa Mae: " + precoPlacaMae +

        "\n\nModelo da Placa de Video: " + modeloPlacaDeVideo +
        "\nPreço da Placa de Video: " + precoPlacaDeVideo +

        "\n\nModelo do Processador : " + modeloProcessador +
        "\nPreço do Processador: " + precoProcessador +

        "\n\nModelo da Memória RAM: " + modeloRam +
        "\nPreço da Memória RAM: " + precoRam +

        "\n\nModelo da Fonte: " + modeloFonte +
        "\nPreço da Fonte: " + precoFonte +

        "\n\nValor total dos componentes: " + somaComponentes
    )
}
/*para prompt*/
function formularioComponentesPrompt() {
    let modeloPlacaMae = prompt("Qual a sua Placa Mãe?");
    let precoPlacaMae = Number(prompt("Preço da sua Placa Mãe?"));

    let modeloPlacaDeVideo = prompt("Qual a sua Placa de Vídeo?");
    let precoPlacaDeVideo = Number(prompt("Preço da sua Placa de Vídeo?"));

    let modeloProcessador = prompt("Qual o modelo do seu Processador?");
    let precoProcessador = Number(prompt("Qual o preço do seu Processador?"));

    let modeloRam = prompt("Qual o modelo da sua Memória RAM?");
    let precoRam = Number(prompt("Qual o preço da sua Memória RAM?"));

    let modeloFonte = prompt("Qual o modelo da Sua Fonte?");
    let precoFonte = Number(prompt("Qual o preço da sua Fonte?"));

    let somaComponentes = precoPlacaMae + precoPlacaDeVideo + precoProcessador + precoRam + precoFonte

    console.log(
        "Placa Mae: " + modeloPlacaMae +
        "\nPreço da Placa Mae: " + precoPlacaMae +

        "\n\nModelo da Placa de Video: " + modeloPlacaDeVideo +
        "\nPreço da Placa de Video: " + precoPlacaDeVideo +

        "\n\nModelo do Processador : " + modeloProcessador +
        "\nPreço do Processador: " + precoProcessador +

        "\n\nModelo da Memória RAM: " + modeloRam +
        "\nPreço da Memória RAM: " + precoRam +

        "\n\nModelo da Fonte: " + modeloFonte +
        "\nPreço da Fonte: " + precoFonte +

        "\n\nValor total dos componentes: " + somaComponentes
    )
    alert(
        "Placa Mae: " + modeloPlacaMae +
        "\nPreço da Placa Mae: " + precoPlacaMae +

        "\n\nModelo da Placa de Video: " + modeloPlacaDeVideo +
        "\nPreço da Placa de Video: " + precoPlacaDeVideo +

        "\n\nModelo do Processador : " + modeloProcessador +
        "\nPreço do Processador: " + precoProcessador +

        "\n\nModelo da Memória RAM: " + modeloRam +
        "\nPreço da Memória RAM: " + precoRam +

        "\n\nModelo da Fonte: " + modeloFonte +
        "\nPreço da Fonte: " + precoFonte +

        "\n\nValor total dos componentes: " + somaComponentes
    )
}
/*Exercício 07: Procurar sobre if, if else, if else if*/
function exercicio07If() {
    let idade1 = parseFloat(document.getElementById("idade1").value);


    if (idade1 >= 18) {
        document.getElementById("resultadoIf").innerHTML = "Maior de idade";
        console.log("Maior de idade");
    }
}

function exercicio07IfElse() {
    let idade2 = parseFloat(document.getElementById("idade2").value);
    let maiorOuMenor;

    if (idade2 >= 18) {
        maiorOuMenor = "Maior de idade";
    } else {
        maiorOuMenor = "Menor de idade";
    }

    document.getElementById("resultadoIfElse").innerHTML = maiorOuMenor;
    console.log(maiorOuMenor);
}

function exercicio07IfElseIf() {
    let idade3 = parseFloat(document.getElementById("idade3").value);
    let faseDaVida;

    if (idade3 >= 0 && idade3 <= 11) {
        faseDaVida = "Criança";
    } else if (idade3 >= 12 && idade3 <= 17) {
        faseDaVida = "Adolescente";
    } else if (idade3 >= 18 && idade3 <= 59) {
        faseDaVida = "Adulto";
    } else if (idade3 >= 60) {
        faseDaVida = "Idoso";
    } else {
        faseDaVida = "Idade inválida";
    }

    document.getElementById("resultadoIfElseIf").innerHTML = faseDaVida;
}

/*Exercício 08: While*/
function exercicio08() {
    let idade = 19;
    let chute;

    while (chute != idade) {
        chute = prompt("Acerte a idade do Harry Potter entre 0 a 100 anos");

        if (chute == idade) {
            alert(`Você acertou a idade do Harry Potter, ${idade} anos`);
        } else {
            if (chute > idade) {
                alert(`A idade é menor que ${chute}`);
            } else {
                alert(`A idade é maior que ${chute}`);
            }
        }
    }
}

/*Exercício 09: Vetor*/

    //Vetor inicial.
let nomes = ["Hermione", "Harry", "Rony"];

//Mostra os nomes na tela.
function mostrarNomes() {
    //nomes.join(", "): deixa o vetor em uma string separada por vírgulas.
    //textContent: coloca essa string no parágrafo com id resultado.
    document.getElementById("resultado09").textContent = nomes.join(", ");
}

//Adiciona um novo nome ao vetor.
function adicionarNome() {
    let input = document.getElementById("novoNome");
    //pega o que o usuário digitou. /remove espaços extras.
    let nome = input.value.trim();

    if (nome !== "") {
        //adiciona o nome ao vetor.
        nomes.push(nome);
        //limpa o campo de texto.
        input.value = "";
        //atualiza os nomes mostrados na tela.
        mostrarNomes();
    }
}

//Chama a função ao final para garantir que os nomes iniciais sejam carregados quando abrir a pagina
mostrarNomes();
/*Exercício 10: For*/
function exercicio10() {
    //Pega o elemento <ul> do HTML e armazena na variável.
    let lista = document.getElementById("lista-numeros");

/*
Início do loop for.
Começa com i = 1.
Executa enquanto i for menor ou igual a 5.
A cada repetição, incrementa i em 1.
*/
    for (let i = 1; i <= 5; i++) {
        //Cria um novo elemento <li>.
        const item = document.createElement("li");
        item.textContent = `Número ${i}`;   
        //Adiciona o novo <li> como filho da lista <ul>
        lista.appendChild(item);
    }
}