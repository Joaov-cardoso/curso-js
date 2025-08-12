function exercicio7() {
    let numero = parseFloat(prompt("Digite um número").replace(",", "."));
    let parImparNeutro;
    let positivoNegativo;
    let maior10;
    let menorOuIgual50;
    let menorQue10Negativo;
    let maiorOuIgual30;
    let diferenteDe1;

    if (numero === 0) {
        parImparNeutro = "Neutro"
    } else if (numero % 2 === 0) {
        parImparNeutro = "Par"
    } else {
        parImparNeutro = "Impar"
    }

    if (numero > 0) {
        positivoNegativo = "Positivo"
    } else {
        positivoNegativo = "Negativo"
    }

    if (numero > 10) {
        maior10 = "Maior que 10"
    } else if (numero === 10) {
        maior10 = "Este número é 10"
    } else {
        maior10 = "Menor que 10"
    }

    if (numero > 50) {
        menorOuIgual50 = "Maior que 50"
    } else if (numero === 50) {
        menorOuIgual50 = "Este número é 50"
    } else {
        menorOuIgual50 = "Menor que 50"
    }

    if (numero > -10) {
        menorQue10Negativo = "Maior que -10"
    } else if (numero === -10) {
        menorQue10Negativo = "Este número é -10"
    } else {
        menorQue10Negativo = "Menor que -10"
    }

    if (numero > 30) {
        maiorOuIgual30 = "Maior que 30"
    } else if (numero === 30) {
        maiorOuIgual30 = "Este número é 30"
    } else {
        maiorOuIgual30 = "Menor que 30"
    }

    if (numero === 1) {
        diferenteDe1 = "Este número é igual a 1"
    } else {
        diferenteDe1 = "Diferente de 1"
    }

    alert(parImparNeutro + "\n" + positivoNegativo + "\n" + maior10 + "\n" + menorOuIgual50 + "\n" + menorQue10Negativo + "\n" + maiorOuIgual30 + "\n" + diferenteDe1)
    console.log(parImparNeutro + "\n" + positivoNegativo + "\n" + maior10 + "\n" + menorOuIgual50 + "\n" + menorQue10Negativo + "\n" + maiorOuIgual30 + "\n" + diferenteDe1)
}

function exercicio9(){
    let numero1 = parseFloat(prompt("Digite um número").replace(",", "."));
    let numero2 = parseFloat(prompt("Digite um número").replace(",", "."));
    let numero3 = parseFloat(prompt("Digite um número").replace(",", "."));
    let numero4 = parseFloat(prompt("Digite um número").replace(",", "."));

    if(numero1 === numero2 &&  numero3 === numero4 && numero1 === numero3 && numero4 === numero2 && numero1 === numero4 && numero2 === numero3){
        alert("Pode ser um quadrado")
        console.log("Pode ser um quadrado")
    }else{
        alert("Não pode ser um quadrado")
        console.log("Não pode ser um quadrado")
    }
}

function exercicicio10(){
    let numero1 = parseFloat(prompt("Digite um número").replace(",", "."));
    let numero2 = parseFloat(prompt("Digite um número").replace(",", "."));
    let numero3 = parseFloat(prompt("Digite um número").replace(",", "."));
    let numero4 = parseFloat(prompt("Digite um número").replace(",", "."));

    if (numero1 === numero2 && numero3 === numero4 && numero1 !== numero3 || numero1 === numero3 && numero2 === numero4 && numero1 !== numero2 || numero1 === numero4 && numero3 === numero2 && numero1 !== numero3){
        console.log("Pode ser um retanglo")
    }else{
        console.log("Não pode ser um retangulo")
    }
}

function exercicio14(){
    let numero1 = parseFloat(prompt("Digite um número").replace(",", "."));
    let numero2 = parseFloat(prompt("Digite um número").replace(",", "."));
    let numero3 = parseFloat(prompt("Digite um número").replace(",", "."));

    if (numero1 > numero2 && numero2 > numero3){
        console.log(numero3 + "\n" + numero2 + "\n" + numero1)
    }else if(numero1 > numero3 && numero3 > numero2){
        console.log(numero2 + "\n" + numero3 + "\n" + numero1)
    }else if(numero2 > numero1 && numero1 > numero3){
        console.log(numero3 + "\n" + numero1 + "\z" + numero2)
    }else if(numero3 > numero1 && numero1 > numero2){
        console.log(numero2 + "\n" + numero1 + "\n" + numero3)
    }else{
        console.log(numero1 + "\n" + numero2 + "\n" + numero3)
    }
}

function exercicio17(){
    let dataNascimento = prompt("Digite o ano de nascimento").trim();
    let separadoDataNascimento = dataNascimento.split("");
    let milhar = parseInt(separadoDataNascimento[0]);
    let centena = parseInt(separadoDataNascimento[1]);
    let dezena = parseInt(separadoDataNascimento[2]);
    let ano = parseInt(separadoDataNascimento[3]);

    let apresentacaoMilhar , apresentacaoCentena, apresentacaoDezena, apresentacaoAno;

    if (milhar === 1){
        apresentacaoMilhar = "Mil "
    }else if(milhar === 2){
        apresentacaoMilhar = "Dois mil "
    }else if(milhar === 3){
        apresentacaoMilhar = "Três mil "
    }else if(milhar === 4){
        apresentacaoMilhar = "Quatro mil "
    }else if(milhar === 5){
        apresentacaoMilhar = "Cinco mil "
    }else if(milhar === 6){
        apresentacaoMilhar = "Seis mil "
    }else if(milhar === 7){
        apresentacaoMilhar = "Sete mil "
    }else if(milhar === 8){
        apresentacaoMilhar = "Oito mil "
    }else if(milhar === 9){
        apresentacaoMilhar = "Nove mil "
    }else{
        apresentacaoMilhar = ""
    }

    
    if (centena === 1 && dezena === 0 & ano === 0){
        apresentacaoCentena = "e cem"
    }else if(centena === 1){
        apresentacaoCentena = "cento e "
    }else if(centena === 2){
        apresentacaoCentena = "duzentos e "
    }else if(centena === 3){
        apresentacaoCentena = "trezentos e "
    }else if(centena === 4){
        apresentacaoCentena = "quatrocentos e "
    }else if(centena === 5){
        apresentacaoCentena = "quinhentos e "
    }else if(centena === 6){
        apresentacaoCentena = "seiscentos e "
    }else if(centena === 7){
        apresentacaoCentena = "setecentos e "
    }else if(centena === 8){
        apresentacaoCentena = "oitocentos e "
    }else if(centena === 9){
        apresentacaoCentena = "novecentos e "
    }else{
        apresentacaoCentena = ""
    }

    if (dezena === 1){
        if(ano === 1){
            apresentacaoDezena = "onze"
        }else if (ano === 2){
            apresentacaoDezena = "doze"
        }else if (ano === 3){
            apresentacaoDezena = "treze"
        }else if(ano === 4){
            apresentacaoDezena = "quatorze"
        }else if(ano === 5){
            apresentacaoDezena = "quinze"
        }else if(ano === 6){
            apresentacaoDezena = "dezeseis"
        }else if(ano === 7){
            apresentacaoDezena = "dezesete"
        }else if(ano === 8){
            apresentacaoDezena = "dezoito"
        }else if(ano === 9){
            apresentacaoDezena = "dezenove"
        }else{
            apresentacaoDezena = ""
        }
    }else if(dezena === 2){
        apresentacaoDezena = "vinte "
    }else if(dezena === 3){
        apresentacaoDezena = "trinta "
    }else if(dezena === 4){
        apresentacaoDezena = "quarenta "
    }else if(dezena === 5){
        apresentacaoDezena = "cinquenta "
    }else if(dezena === 6){
        apresentacaoDezena = "sessenta "
    }else if(dezena === 7){
        apresentacaoDezena = "setenta "
    }else if(dezena === 8){
        apresentacaoDezena = "oitenta "
    }else if(dezena === 9){
        apresentacaoDezena = "noventa "
    }else{
        apresentacaoDezena = ""
    }

    if(ano === 1 && dezena !== 1){
        apresentacaoAno = "e um"
    }else if(ano === 2){
        apresentacaoAno = "e dois"
    }else if(ano === 3){
        apresentacaoAno = "e três"
    }else if(ano === 4){
        apresentacoAno = "e quatro"
    }else if(ano === 5){
        apresentacaoAno = "e cinco"
    }else if(ano === 6){
        apresentacaoAno = "e seis"
    }else if(ano === 7){
        apresentacaoAno = "e sete"
    }else if(ano === 8){
        apresentacaoAno = "e oito"
    }else if(ano === 9){
        apresentacaoAno = "e nove"
    }else{
        apresentacaoAno = ""
    }

    console.log(dataNascimento + "\n\n" + apresentacaoMilhar  + apresentacaoCentena  + apresentacaoDezena  + apresentacaoAno)
}

function exercicio18(){
    
}