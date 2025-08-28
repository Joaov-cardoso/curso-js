function exercicio1(){
    let indice = 0;

    let produtosRegistrados = "";
    let precosRegistrados = 0.0
    while(indice < 13){
        let produto = prompt("Digite o nome da peça:")
        let preco = parseFloat(prompt("Digite o preço da peça:"));


        produtosRegistrados = produtosRegistrados + produto + "\n"
        precosRegistrados = precosRegistrados + preco + "\n"


        indice = indice + 1
    }

    console.log("Produtos: " + produtosRegistrados + "\nPreços: " + precosRegistrados)
}

function exercicio2(){
    let indice = 0;
    let nome = "";
    let nomesRegistrados = "";
}