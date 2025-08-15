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

    if (numero1 >= numero2 && numero2 >= numero3){
        console.log(numero3 + "\n" + numero2 + "\n" + numero1)
    }else if(numero1 >= numero3 && numero3 >= numero2){
        console.log(numero2 + "\n" + numero3 + "\n" + numero1)
    }else if(numero2 >= numero1 && numero1 >= numero3){
        console.log(numero3 + "\n" + numero1 + "\n" + numero2)
    }else if(numero3 >= numero1 && numero1 >= numero2){
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
    let pegarHora = prompt("Digite a hora (hh:mm:ss):");
    let partesHora = pegarHora.split(":");
    let hora = parseInt(partesHora[0]);
    let minuto = parseInt(partesHora[1]);
    let segundo = parseInt(partesHora[2]);
    let horaT, minutoT, segundoT;

    if (hora === 0) {
        horaT = "Zero hora, "
    } else if (hora === 1) {
        hora = "Uma hora, "
    }
    else if (hora === 2) {
        horaT = "Duas horas, "
    }
    else if (hora === 3) {
        horaT = "Três horas, "
    }
    else if (hora === 4) {
        horaT = "Quatro horas, "
    }
    else if (hora === 5) {
        horaT = "Cinco horas, "
    }
    else if (hora === 6) {
        horaT = "Seis horas, "
    }
    else if (hora === 7) {
        horaT = "Sete horas, "
    }
    else if (hora === 8) {
        horaT = "Oito horas, "
    }
    else if (hora === 9) {
        horaT = "nove horas, "
    }
    else if (hora === 10) {
        horaT = "Dez horas, "
    }
    else if (hora === 11) {
        horaT = "Onze horas, "
    }
    else if (hora === 12) {
        horaT = "Doze horas, "
    }
    else if (hora === 13) {
        horaT = "Treze horas, "
    }
    else if (hora === 14) {
        horaT = "Quatorze horas, "
    }
    else if (hora === 15) {
        horaT = "Quinze horas, "
    }
    else if (hora === 16) {
        horaT = "Dezeseis horas, "
    }
    else if (hora === 17) {
        horaT = "Dezesete horas, "
    }
    else if (hora === 18) {
        horaT = "Dezoito horas, "
    }
    else if (hora === 19) {
        horaT = "Dezenove horas, "
    }
    else if (hora === 20) {
        horaT = "Vinte horas, "
    }
    else if (hora === 21) {
        horaT = "Vinte e uma horas, "
    }
    else if (hora === 22) {
        horaT = "Vinte e duas horas, "
    }
    else if (hora === 23) {
        horaT = "Vinte e três horas, "
    } else {
        horaT = "Hora inválida, ";
    }

    if (minuto === 0) {
        minutoT = "zero minutos e ";
    } else if (minuto === 1) {
        minutoT = "um minuto e ";
    } else if (minuto === 2) {
        minutoT = "dois minutos e ";
    } else if (minuto === 3) {
        minutoT = "três minutos e ";
    } else if (minuto === 4) {
        minutoT = "quatro minutos e ";
    } else if (minuto === 5) {
        minutoT = "cinco minutos e ";
    } else if (minuto === 6) {
        minutoT = "seis minutos e ";
    } else if (minuto === 7) {
        minutoT = "sete minutos e ";
    } else if (minuto === 8) {
        minutoT = "oito minutos e ";
    } else if (minuto === 9) {
        minutoT = "nove minutos e ";
    } else if (minuto === 10) {
        minutoT = "dez minutos e ";
    } else if (minuto === 11) {
        minutoT = "onze minutos e ";
    } else if (minuto === 12) {
        minutoT = "doze minutos e ";
    } else if (minuto === 13) {
        minutoT = "treze minutos e ";
    } else if (minuto === 14) {
        minutoT = "quatorze minutos e ";
    } else if (minuto === 15) {
        minutoT = "quinze minutos e ";
    } else if (minuto === 16) {
        minutoT = "dezesseis minutos e ";
    } else if (minuto === 17) {
        minutoT = "dezessete minutos e ";
    } else if (minuto === 18) {
        minutoT = "dezoito minutos e ";
    } else if (minuto === 19) {
        minutoT = "dezenove minutos e ";
    } else if (minuto === 20) {
        minutoT = "vinte minutos e ";
    } else if (minuto === 21) {
        minutoT = "vinte e um minutos e ";
    } else if (minuto === 22) {
        minutoT = "vinte e dois minutos e ";
    } else if (minuto === 23) {
        minutoT = "vinte e três minutos e ";
    } else if (minuto === 24) {
        minutoT = "vinte e quatro minutos e ";
    } else if (minuto === 25) {
        minutoT = "vinte e cinco minutos e ";
    } else if (minuto === 26) {
        minutoT = "vinte e seis minutos e ";
    } else if (minuto === 27) {
        minutoT = "vinte e sete minutos e ";
    } else if (minuto === 28) {
        minutoT = "vinte e oito minutos e ";
    } else if (minuto === 29) {
        minutoT = "vinte e nove minutos e ";
    } else if (minuto === 30) {
        minutoT = "trinta minutos e ";
    } else if (minuto === 31) {
        minutoT = "trinta e um minutos e ";
    } else if (minuto === 32) {
        minutoT = "trinta e dois minutos e ";
    } else if (minuto === 33) {
        minutoT = "trinta e três minutos e ";
    } else if (minuto === 34) {
        minutoT = "trinta e quatro minutos e ";
    } else if (minuto === 35) {
        minutoT = "trinta e cinco minutos e ";
    } else if (minuto === 36) {
        minutoT = "trinta e seis minutos e ";
    } else if (minuto === 37) {
        minutoT = "trinta e sete minutos e ";
    } else if (minuto === 38) {
        minutoT = "trinta e oito minutos e ";
    } else if (minuto === 39) {
        minutoT = "trinta e nove minutos e ";
    } else if (minuto === 40) {
        minutoT = "quarenta minutos e ";
    } else if (minuto === 41) {
        minutoT = "quarenta e um minutos e ";
    } else if (minuto === 42) {
        minutoT = "quarenta e dois minutos e ";
    } else if (minuto === 43) {
        minutoT = "quarenta e três minutos e ";
    } else if (minuto === 44) {
        minutoT = "quarenta e quatro minutos e ";
    } else if (minuto === 45) {
        minutoT = "quarenta e cinco minutos e ";
    } else if (minuto === 46) {
        minutoT = "quarenta e seis minutos e ";
    } else if (minuto === 47) {
        minutoT = "quarenta e sete minutos e ";
    } else if (minuto === 48) {
        minutoT = "quarenta e oito minutos e ";
    } else if (minuto === 49) {
        minutoT = "quarenta e nove minutos e ";
    } else if (minuto === 50) {
        minutoT = "cinquenta minutos e ";
    } else if (minuto === 51) {
        minutoT = "cinquenta e um minutos e ";
    } else if (minuto === 52) {
        minutoT = "cinquenta e dois minutos e ";
    } else if (minuto === 53) {
        minutoT = "cinquenta e três minutos e ";
    } else if (minuto === 54) {
        minutoT = "cinquenta e quatro minutos e ";
    } else if (minuto === 55) {
        minutoT = "cinquenta e cinco minutos e ";
    } else if (minuto === 56) {
        minutoT = "cinquenta e seis minutos e ";
    } else if (minuto === 57) {
        minutoT = "cinquenta e sete minutos e ";
    } else if (minuto === 58) {
        minutoT = "cinquenta e oito minutos e ";
    } else if (minuto === 59) {
        minutoT = "cinquenta e nove minutos e ";
    } else {
        minutoT = "minutos inválidos e ";
    }

    if (segundo === 0) {
        segundoT = "zero segundos.";
    } else if (segundo === 1) {
        segundoT = "um segundo.";
    } else if (segundo === 2) {
        segundoT = "dois segundos.";
    } else if (segundo === 3) {
        segundoT = "três segundos.";
    } else if (segundo === 4) {
        segundoT = "quatro segundos.";
    } else if (segundo === 5) {
        segundoT = "cinco segundos.";
    } else if (segundo === 6) {
        segundoT = "seis segundos.";
    } else if (segundo === 7) {
        segundoT = "sete segundos.";
    } else if (segundo === 8) {
        segundoT = "oito segundos.";
    } else if (segundo === 9) {
        segundoT = "nove segundos.";
    } else if (segundo === 10) {
        segundoT = "dez segundos.";
    } else if (segundo === 11) {
        segundoT = "onze segundos.";
    } else if (segundo === 12) {
        segundoT = "doze segundos.";
    } else if (segundo === 13) {
        segundoT = "treze segundos.";
    } else if (segundo === 14) {
        segundoT = "quatorze segundos.";
    } else if (segundo === 15) {
        segundoT = "quinze segundos.";
    } else if (segundo === 16) {
        segundoT = "dezesseis segundos.";
    } else if (segundo === 17) {
        segundoT = "dezessete segundos.";
    } else if (segundo === 18) {
        segundoT = "dezoito segundos.";
    } else if (segundo === 19) {
        segundoT = "dezenove segundos.";
    } else if (segundo === 20) {
        segundoT = "vinte segundos.";
    } else if (segundo === 21) {
        segundoT = "vinte e um segundos.";
    } else if (segundo === 22) {
        segundoT = "vinte e dois segundos.";
    } else if (segundo === 23) {
        segundoT = "vinte e três segundos.";
    } else if (segundo === 24) {
        segundoT = "vinte e quatro segundos.";
    } else if (segundo === 25) {
        segundoT = "vinte e cinco segundos.";
    } else if (segundo === 26) {
        segundoT = "vinte e seis segundos.";
    } else if (segundo === 27) {
        segundoT = "vinte e sete segundos.";
    } else if (segundo === 28) {
        segundoT = "vinte e oito segundos.";
    } else if (segundo === 29) {
        segundoT = "vinte e nove segundos.";
    } else if (segundo === 30) {
        segundoT = "trinta segundos.";
    } else if (segundo === 31) {
        segundoT = "trinta e um segundos.";
    } else if (segundo === 32) {
        segundoT = "trinta e dois segundos.";
    } else if (segundo === 33) {
        segundoT = "trinta e três segundos.";
    } else if (segundo === 34) {
        segundoT = "trinta e quatro segundos.";
    } else if (segundo === 35) {
        segundoT = "trinta e cinco segundos.";
    } else if (segundo === 36) {
        segundoT = "trinta e seis segundos.";
    } else if (segundo === 37) {
        segundoT = "trinta e sete segundos.";
    } else if (segundo === 38) {
        segundoT = "trinta e oito segundos.";
    } else if (segundo === 39) {
        segundoT = "trinta e nove segundos.";
    } else if (segundo === 40) {
        segundoT = "quarenta segundos.";
    } else if (segundo === 41) {
        segundoT = "quarenta e um segundos.";
    } else if (segundo === 42) {
        segundoT = "quarenta e dois segundos.";
    } else if (segundo === 43) {
        segundoT = "quarenta e três segundos.";
    } else if (segundo === 44) {
        segundoT = "quarenta e quatro segundos.";
    } else if (segundo === 45) {
        segundoT = "quarenta e cinco segundos.";
    } else if (segundo === 46) {
        segundoT = "quarenta e seis segundos.";
    } else if (segundo === 47) {
        segundoT = "quarenta e sete segundos.";
    } else if (segundo === 48) {
        segundoT = "quarenta e oito segundos.";
    } else if (segundo === 49) {
        segundoT = "quarenta e nove segundos.";
    } else if (segundo === 50) {
        segundoT = "cinquenta segundos.";
    } else if (segundo === 51) {
        segundoT = "cinquenta e um segundos.";
    } else if (segundo === 52) {
        segundoT = "cinquenta e dois segundos.";
    } else if (segundo === 53) {
        segundoT = "cinquenta e três segundos.";
    } else if (segundo === 54) {
        segundoT = "cinquenta e quatro segundos.";
    } else if (segundo === 55) {
        segundoT = "cinquenta e cinco segundos.";
    } else if (segundo === 56) {
        segundoT = "cinquenta e seis segundos.";
    } else if (segundo === 57) {
        segundoT = "cinquenta e sete segundos.";
    } else if (segundo === 58) {
        segundoT = "cinquenta e oito segundos.";
    } else if (segundo === 59) {
        segundoT = "cinquenta e nove segundos.";
    } else {
        segundoT = "segundos inválidos.";
    }

    console.log(horaT + minutoT + segundoT);
    alert(horaT + minutoT + segundoT);
}