function exercicio1() {
    let nome = prompt("Qual o seu nome?");
    let idade = parseInt(prompt("Qual a sua idade?"));
    let altura = parseFloat(prompt("Qual a sua altura?").replace(".", ","));

    console.log("Olá, meu nome é " + nome + ", " + "tenho " + idade + " " + "anos e minha altura é de " + altura + " " + "metros");
    alert("Olá, meu nome é " + nome + ", " + "tenho " + idade + " " + "anos e minha altura é de " + altura + " " + "metros");
}

function exercicio2() {
    let idadeAtual = parseInt(prompt("Qual a sua idade atual?"));
    let idadeFutura = idadeAtual + 5;

    console.log("Daqui 5 anos você terá " + idadeFutura + " " + "anos");
    alert("Daqui 5 anos você terá " + idadeFutura + " " + "anos");
}

function exercicio3() {
    let moedaReal = parseFloat(prompt("Digite o valor em R$ para conversão:").replace(",", "."));
    let moedaDolar = moedaReal * 5.43;

    console.log("O valor de R$" + moedaReal + " " + "equivale a " + moedaDolar + " " + "dólares.");
    alert("O valor de R$" + moedaReal + " " + "equivale a " + moedaDolar + " " + "dólares.")
}

function exercicio4() {
    let luzAcesa = false;
    let escolha = prompt("Digite 1 para acenter a luz ou 0 para apagar");

    if (parseInt(escolha) === 1){
        luzAcesa = true
        console.log("A luz está acesa")
    } else if (parseInt(escolha) === 0){
        luzAcesa = false
        console.log("A luz está apagada")
    }else{
        console.log("Comando Inválido")
    }
}

function exercicio5(){
    let altura = parseFloat(prompt("Infome a altura:").replace(",", "."));
    let largura = parseFloat(prompt("Informe a largura").replace(",", "."));
    let area = altura * largura.toFixed(2);

    console.log("Área do retânlugo é de " + area +  " " + "metros quadrados.")
}

function exercicio6(){
    let nota1 = parseFloat(prompt("Digite a nota 1").replace(",", "."));
    let nota2 = parseFloat(prompt("Digite a nota 2").replace(",", "."));
    let nota3 = parseFloat(prompt("Digite a nota 3").replace(",", "."));
    let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

    console.log("A média das notas é " + media)
}

function exercicio7(){
    let valorOriginal = parseFloat(prompt("Digite o valor original").replace(",", "."));
    let desconto = parseInt(prompt("Digite a porcentagem de desconto"));
    let calculoPorcentagem = valorOriginal * (desconto / 100);
    let valorComDesconto = valorOriginal - calculoPorcentagem;
    

    console.log("O valor com desconto é de R$" + valorComDesconto)
}
function exercicio8(){
    let grausCeusius = parseFloat(prompt("Digite a temperatura em graus Celsius:").replace(",", "."));
    let temperaturaFahrenheit = (grausCeusius * 9/5) + 32;

    console.log("A temperatura em Fahrenheit é de " + temperaturaFahrenheit + "ºF");
}

function exercicio9(){
    let numero1 = parseInt(prompt("Digite o primeiro número"));
    let numero2 = parseInt(prompt("Digite o segunto número"));

    let soma = numero1 + numero2;
    let produto = numero1 * numero2;

    console.log("A soma é de " + soma + "\nO produto é de " + produto);
}
