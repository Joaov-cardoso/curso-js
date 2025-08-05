// tudo o que o usuário digita, vem como STRING
function converterStringParaInt(){
    const anoFabricacaoEntradaUsuario = "2025"; //string
    const anoFabricacao = parseInt(anoFabricacaoEntradaUsuario);
    alert ("Ano de Fabricação: " + anoFabricacao)
}

function converterStringParaFloat(){
    const precoDoCarro = "299800.00";
    const preco = parseFloat(precoDoCarro);
    alert("Preço: " + preco);
}

converterStringParaFloat();