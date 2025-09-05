function somar() {
    //Pegar um elemento da tela pelo ID
    // <elemento id="numero1"
    let campoNumero1 = document.getElementById("numero1")
    console.log(campoNumero1)
    let campoNumero2 = document.getElementById("numero2")
    console.log(campoNumero2)

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);
    console.log(numero1)
    console.log(numero2)

    let soma = numero1 + numero2

    alert("Soma: " + soma)
}

function subtrair() {
    let campoNumero1 = document.getElementById("numero1")
    console.log(campoNumero1)
    let campoNumero2 = document.getElementById("numero2")
    console.log(campoNumero2)

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);
    console.log(numero1)
    console.log(numero2)

    let subtrair = numero1 - numero2

    alert("Subtração: " + subtrair)
}

function multiplicar() {
    let campoNumero1 = document.getElementById("numero1")
    console.log(campoNumero1)
    let campoNumero2 = document.getElementById("numero2")
    console.log(campoNumero2)

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);
    console.log(numero1)
    console.log(numero2)

    let multiplicar = numero1 * numero2

    alert("Multiplicação: " + multiplicar)
}

function divisao() {
    let campoNumero1 = document.getElementById("numero1")
    console.log(campoNumero1)
    let campoNumero2 = document.getElementById("numero2")
    console.log(campoNumero2)

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);
    console.log(numero1)
    console.log(numero2)

    let divisao = numero1 / numero2

    alert("Divisão: " + divisao)
}

// function definirCorAzul() {
//     let itens = document.getElementsByClassName("item")

//     for (let i = 0; i < itens.length; i = i + 1) {
//         let item = itens[i];
//         item.style.backgroundColor = "blue"
//     }
//     // itens[0].style.backgroundColor = "blue"
//     // itens[1].style.backgroundColor = "blue"
//     // itens[2].style.backgroundColor = "blue"
//     // itens[3].style.backgroundColor = "blue"
//     console.log(itens)
// }

function definirCor(nomeCor) {
    let itens = document.getElementsByClassName("item")

    let cor = ""
    if (nomeCor === "azul") {
        cor = "blue"
    } else if (nomeCor === "roxo") {
        cor = "#993399"
    } else if (nomeCor === "verde") {
        cor = "green"
    } else if (nomeCor === "preto") {
        cor = "black"
    } else if (nomeCor === "vermelho") {
        cor = "red"
    }

    for (let i = 0; i < itens.length; i = i + 1) {
        let item = itens[i]
        item.style.backgroundColor = cor
    }
}

function alterarVisibilidade() {
    let iframes = document.getElementsByTagName("iframe")
    // Sei que na 
    //
    if (iframes[0].style.display === "inline") {
        iframes[0].style.display = "none"
    } else {
        iframes[0].style.display = "inline"
    }
}

function limparCampos() {
    let campoNome = document.getElementsByName("nome")[0];
    campoNome.value = ""
    let campoSobrenome = document.getElementsByName("sobrenome")[0];
    campoSobrenome.value = ""
    let resultado = document.getElementById("resultadoNomes")
    resultado.innerText = ""

}

function apresentarNomeCompleto() {
    let campoNome = document.getElementsByName("nome")[0];
    let campoSobrenome = document.getElementsByName("sobrenome")[0]

    let nome = campoNome.value;
    let sobrenome = campoSobrenome.value;

    let nomeCompleto = `${nome} ${sobrenome}`;

    let resultado = document.getElementById("resultadoNomes")
    resultado.innerText = `Nome completo: ${nomeCompleto}`
}

function exemploQuerySelector() {
    let paragrafo = document.querySelector("div#jogos p")
    //Adicionar uma classe ao elemento
    paragrafo.classList.add("alternativo")
}

function exemploQuerySelectorAll() {
    let paragrafos = document.querySelectorAll("div#jogos p");

    for (let i = 0; i < paragrafos.length; i += 1) {
        let paragrafo = paragrafos[i];
        if(i %2 ==0){
            //Adicionar uma classe 'destaque' ao elemento
            paragrafo.classList.add("destaque")
        }else{
            paragrafo.classList.add("elegante")
        }
    }
}

function reset(){
    let paragrafos = document.querySelectorAll("div#jogos p");
    for(let i = 0; i<paragrafos.length; i++){
        let paragrafo = paragrafos[i];
        //aqui, o ... (spread) expande todas as classes atuais do elemento, removendo todas de uma vez
        paragrafo.classList.remove(...paragrafo.classList)
    }
}