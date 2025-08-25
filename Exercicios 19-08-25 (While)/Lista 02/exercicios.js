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

function exercico2() {
    let indice = 0;
    let validas = 0;
    let invalidas = 0;
    let indicesInvalidos = "";

    while (iindice < 5) {
        let linha = prompt("Digite no formato id;nome;cpf;aaaa-mm-dd");
        let partes = linha.split(";");

        let ok = true;

        if (partes.length !== 4) {
            ok = false;
        } else {
            let id = partes[0];
            let nome = partes[1].trim();
            let cpf = partes[2];
            let data = partes[3];

            if (id.replace(/\d/g, "") !== "" || parseInt(id) <= 0) {
                ok = false;
            }

            if (nome.length < 7) {
                ok = false;
            }

            if (cpf.length !== 14 ||cpf.charAt(3) !== "." ||cpf.charAt(7) !== "." ||cpf.charAt(11) !== "-") {
                ok = false;
            }

            if (data.length !== 10 ||data.charAt(4) !== "-" || data.charAt(7) !== "-") {
                ok = false;
            }
        }

        if (ok) {
            validas = validas + 1;
        } else {
            invalidas = invalidas + 1;
            indicesInvalidos = indicesInvalidos + indice + " ";
        }
        indice = indice + 1;
    }

    console.log("Válidas: " + validas + "\nInválidas: " + invalidas + "\nÍndices inválidos: " + indicesInvalidos.trim());
}


