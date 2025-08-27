function exercicio1() {
    let desejaCadastrar = "sim";
    let total = 0;
    let maiorPreco = 0;
    let produtoMaisCaro = "";
    let tabela = "";
    let quantidade = 0;
    let separador = "";
    let indice = 0;

    while (desejaCadastrar.toLowerCase().trim() === "sim") {

        if (quantidade === 0) {
            tabela = "Produto".padEnd(20, " ") + "Preço\n";
            while (indice < 30) {
                separador = separador + "-";
                indice = indice + 1;
            }
            tabela = tabela + separador + "\n";
        }

        let nome = prompt("Digite o nome do produto:").trim();
        if (nome.length < 2) {
            alert("Precisa ter no minimo 3 caracteres")
            continue;
        }

        let precoBR = prompt("Digite o preço do produto (ex: R$ 1.299,90):");
        let precoLimpo = precoBR.replaceAll("R$", "").replaceAll(" ", "").replaceAll(".", "").replace(",", ".");
        let preco = parseFloat(precoLimpo);

        tabela = tabela + nome.padEnd(20, " ") + preco.toFixed(2) + "\n";

        total = total + preco;
        quantidade = quantidade + 1;

        if (preco > maiorPreco) {
            maiorPreco = preco;
            produtoMaisCaro = nome;
        }

        desejaCadastrar = prompt("Deseja cadastrar outro? (sim/não)").toLowerCase().trim();
    }

    tabela = tabela + separador + "\n";
    tabela = tabela + "Total:".padEnd(20, " ") + total.toFixed(2) + "\n";
    tabela = tabela + "Média:".padEnd(20, " ") + (total / quantidade).toFixed(2) + "\n";
    tabela = tabela + "Mais caro:".padEnd(20, " ") + produtoMaisCaro + " (" + maiorPreco.toFixed(2) + ")";

    console.log(tabela);
}

function exercicio2() {
    let indice = 0;
    let invalidos = 0;
    let validos = 0;
    let idValido = 0, nomeValido = 0, cpfValido = 0, dataValida = 0;

    while (indice < 5) {
        let csv = prompt("Digite as informações (id;nome;cpf;aaaa-mm-dd)").trim();
        let csvPartes = csv.split(";");

        if (csvPartes.length === 4) {
            let id = csvPartes[0].replace(/\D/g, "");
            let nome = csvPartes[1].trim();
            let cpf = csvPartes[2];
            let data = csvPartes[3];


            if (id === "" || id <= 0) {
                invalidos = invalidos + 1;
                idValido = idValido + 1;
            } else {
                validos = validos + 1
            }


            if (nome.length < 7) {
                invalidos = invalidos + 1;
                nomeValido = nomeValido + 1;
            } else {
                validos = validos + 1
            }


            if (cpf.length !== 14 || cpf.charAt(3) !== "." || cpf.charAt(7) !== "." || cpf.charAt(11) !== "-") {
                invalidos = invalidos + 1;
                cpfValido = cpfValido + 1;
            } else {
                validos = validos + 1
            }


            if (data.length !== 10 || data.charAt(4) !== "-" || data.charAt(7) !== "-") {
                invalidos = invalidos + 1;
                dataValida = dataValida + 1;
            } else {
                validos = validos + 1
            }

        } else { alert("Quantidade de campos incorreto") };

        indice = indice + 1;
    }

    alert("Validos: " + validos +
        "\nInvalidos: " + invalidos +
        "\nID invalidos: " + idValido +
        "\nNomes invalidos: " + nomeValido +
        "\nCPF invalidos: " + cpfValido +
        "\nDatas Invalidas: " + dataValida
    )
}

function exercicio3() {
    let interrogacao = 0;
    let exclamacao = 0;
    let neutro = 0;
    let total = 0;
    let indice = 0;
    while (indice < 6) {
        let frase = prompt("Digite uma frase").trimEnd()
        let pontuacao = frase.substring(frase.length - 1);

        if (pontuacao === "?") {
            interrogacao = interrogacao + 1;
        } else if (pontuacao === "!") {
            exclamacao = exclamacao + 1;
        } else {
            neutro = neutro + 1;
        }
        indice = indice + 1;
    }

    total = interrogacao + exclamacao + neutro;
    alert("Perguntas: " + interrogacao + ", " + ((interrogacao / total) * 100).toFixed(1) + "%" +
        "\nExclamações: " + exclamacao + ", " + (((exclamacao / total) * 100).toFixed(1)) + "%" +
        "\nNeutras: " + neutro + ", " + (((neutro / total) * 100).toFixed(1)) + "%"
    )
}

function exercicio4() {
    let maisAntiga = 0;
    let maisRecente = 0;
    let chaveMaisAntiga = 999999999;
    let chaveMaisRecente = 0;
    let marco = 0;
    let dezembro = 0;
    let indice = 0;

    while (indice < 5) {
        let data = prompt("Digite data (dd/mm/aaaa)");
        let partes = data.split("/");
        let dia = partes[0].padStart(2, "0");
        let mes = partes[1].padStart(2, "0");
        let ano = partes[2];
        let chave = ano + mes + dia;
        chave = parseInt(chave);

        if (chave < chaveMaisAntiga) {
            maisAntiga = dia + "/" + mes + "/" + ano;
            chaveMaisAntiga = chave;
        }

        if (chave > chaveMaisRecente) {
            maisRecente = dia + "/" + mes + "/" + ano;
            chaveMaisRecente = chave;
        }

        if (mes === "03") {
            marco = marco + 1;
        } else if (mes === "12") {
            dezembro = dezembro + 1;
        }

        indice = indice + 1;
    }

    alert("Data mais antiga: " + maisAntiga + "\nData mais recente: " + maisRecente + "\nQuantidade em março: " + marco + "\nQuantidade em dezembro: " + dezembro);
}

function exercicio5() {
    let formatado = "";
    let invalido = 0;
    let indice = 0;

    while (indice < 4) {
        let telefone = prompt("Digite o numero de telefone").replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").replaceAll("-", "");
        let ddd, parte1, parte2;
        if (telefone.length === 10) {
            ddd = telefone.substring(0, 2);
            parte1 = telefone.substring(2, 6);
            parte2 = telefone.substring(6);
            formatado = formatado + "(" + ddd + ") " + parte1 + "-" + parte2 + "\n";
        } else if (telefone.length === 11) {
            ddd = telefone.substring(0, 2);
            parte1 = telefone.substring(2, 7);
            parte2 = telefone.substring(7);
            formatado = formatado + "(" + ddd + ") " + parte1 + "-" + parte2 + "\n";
        } else {
            invalido = invalido + 1;
        }
        indice = indice + 1;
    }
    console.log
        ("Numeros formatado: \n" + formatado + "\nNumeros invalidos: " + invalido
        )
}

function exercicio6() {
    //Massa de dados: Ana@Gmail.com, joao@outlook.com, maria@yahoo.com, x@empresa.com.br, errado@@mail
    let email = "";
    let gmail = 0;
    let outlook = 0;
    let yahoo = 0;
    let invalidos = 0;

    while (email !== "fim") {
        email = prompt("Digite seu email").trim().toLowerCase();

        if (email.includes("@")) {
            let partes = email.split("@");

            if (partes.length === 2 & partes[1].includes(".")) {
                let dominio = partes[1];

                if (dominio === "gmail.com") {
                    gmail = gmail + 1;
                } else if (dominio === "outlook.com") {
                    outlook = outlook + 1;
                } else if (dominio === "yahoo.com") {
                    yahoo = yahoo + 1;
                } else {
                    invalidos = invalidos + 1;
                }
            }
        }
    }
    alert(
        "Gmail:   " + gmail +
        "\nOutlook: " + outlook +
        "\nYahoo:   " + yahoo +
        "\nInválidos:" + invalidos);
}

function exercicio7() {
    let indice = 0;
    let menorLen = 999999999999;
    let menorFrase = 0;
    let maiorLen = 0;
    let maiorFrase = 0;

    while (indice < 5) {
        let frases = prompt("Digite as frases");

        if (frases.length < menorLen) {
            menorLen = frases.length;
            menorFrase = frases;
        }

        if (frases.length > maiorLen) {
            maiorLen = frases.length;
            maiorFrase = frases;
        }

        indice = indice + 1;
    }
    console.log("Menor frase: " + menorLen + "\n" + menorFrase + "\nMaior frase: " + maiorLen + "\n" + maiorFrase)
}

function exercicio8() {
    let invalidos = 0;
    let madrugada = 0;
    let manha = 0;
    let tarde = 0;
    let noite = 0;
    let indice = 0;

    while (indice < 6) {
        let horario = prompt("Digite o horario (hh:mm)").trim();

        if (horario.length === 5 && horario.charAt(2) === ":") {
            let partes = horario.split(":");
            let hora = parseInt(partes[0]);
            let minuto = parseInt(partes[1]);

            if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59) {
                if (hora >= 0 && hora <= 4 && minuto >= 0 && minuto <= 59) {
                    madrugada = madrugada + 1;
                } else if (hora >= 5 && hora <= 11 && minuto >= 0 && minuto <= 59) {
                    manha = manha + 1;
                } else if (hora >= 12 && hora <= 17 && minuto >= 0 && minuto <= 59) {
                    tarde = tarde + 1;
                } else if (hora >= 18 && hora <= 23 && minuto >= 0 && minuto <= 59) {
                    noite = noite + 1;
                }
            } else {
                invalidos = invalidos + 1;
            }
        }
        indice = indice + 1;
    }
    console.log("Madrugada: " + madrugada + "\nManhã: " + manha + "\nTarde: " + tarde + "\nNoite: " + noite + "\nInválidos: " + invalidos)
}

function exercicio9() {
    let validos = 0;
    let invalidos = 0;
    let codigos = "";
    let codigosInvalidos = "";
    let indice = 0;
    while (indice < 5) {
        let codigo = prompt("Digite o código no formato (BLU-aaaa-nnnn)").trim();
        let partes = codigo.split("-");
        let prefixo = partes[0].toUpperCase();
        let ano = partes[1];
        let numero = partes[2].padStart(4, "0");

        if (prefixo === "BLU") {
            if (ano.length === 4 && parseInt(ano) >= 2000) {
                codigos = codigos + prefixo + "-" + ano + "-" + numero + "\n";
                validos = validos + 1;
            } else {
                invalidos = invalidos + 1;
                codigosInvalidos = codigosInvalidos + prefixo + "-" + ano + "-" + numero + "\n";
            }
        } else {
            invalidos = invalidos + 1;
            codigosInvalidos = codigosInvalidos + prefixo + "-" + ano + "-" + numero + "\n";
        }
        indice = indice + 1;
    }
    console.log("Validos: " + validos + "\n" + codigos + "\nInvalidos: " + invalidos + "\n" + codigosInvalidos)
}

function exercicio10(){
    let username = "";
    let id;
    let nomes = "N            | Username\n";
    nomes = nomes + "------------------------------------\n"
    let indice = 0;

    while (indice < 2) {
        let nomeCompleto = prompt("Digite seu nome completo").trim().toLowerCase();
        let partes = nomeCompleto.split(" ");

        username = partes[0].charAt(0) + partes[partes.length - 1];
        id = String(indice + 1).padStart(6, '0');
        nomes = nomes + id + "   | " + username + "\n";

        indice = indice + 1;
    }
    alert(nomes);
}
