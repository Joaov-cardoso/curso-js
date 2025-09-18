//Criar uma lista de 7 carros com os atributos (marca, placa, modelo, data de emplacamento, cor).
let infosCarros = [
    {
        "marca": "Toyota",
        "placa": "ABC1A23 ",
        "modelo": "Corolla ",
        "data_emplacamento": "2021-03-15",
        "cor": "Prata"
    },
    {
        "marca": "Honda",
        "placa": "DEF2B34 ",
        "modelo": "Civic ",
        "data_emplacamento": "2020-07-08",
        "cor": "Preto"
    },
    {
        "marca": "Ford",
        "placa": "GHI3C45",
        "modelo": "Ka",
        "data_emplacamento": "2019-11-23",
        "cor": "Branco"
    },
    {
        "marca": "Chevrolet",
        "placa": "JKL4D56",
        "modelo": "Onix",
        "data_emplacamento": "2022-05-10",
        "cor": "Vermelho"
    },
    {
        "marca": "Volkswagen ",
        "placa": "MNO5E67",
        "modelo": "Gol",
        "data_emplacamento": "2019-01-19",
        "cor": "Azul"
    },
    {
        "marca": "Hyundai",
        "placa": "PQR6F78",
        "modelo": "HB20",
        "data_emplacamento": "2025-09-03",
        "cor": "Cinza"
    },
    {
        "marca": "Nissan",
        "placa": "STU7G89",
        "modelo": "Kicks",
        "data_emplacamento": "2025-12-27",
        "cor": "Branco"
    },
    {
        "marca": "Fiat",
        "placa": "BCD0J34",
        "modelo": "Argo",
        "data_emplacamento": "2025-05-15",
        "cor": "Vermelho"
    }]
console.log(infosCarros);

//a) Criar uma lista de string com as marcas a partir da lista de carros (utilizar map)
let marcasCarros = infosCarros.map(infoCarro => infoCarro.marca);
console.log(marcasCarros);

//b) Criar uma lista de objetos com placa, modelo da lista de carros (utilizar map)
let listaObjetosPlacaEModelo = infosCarros.map(infoCarro => {
    return {
        carro: infoCarro.modelo,
        cor: infoCarro.data_emplacamento
    }
})
console.log(listaObjetosPlacaEModelo)

//c) Criar uma lista de string com os modelos filtrando por marca Fiat (lista de string)
let listaComFiltro = infosCarros.filter(infoCarro => infoCarro.marca == "Fiat")
let carrosFiat = listaComFiltro.map(fiat => fiat.modelo)
console.log(carrosFiat)

//d) Criar uma lista de (marca, modelo) filtrando por Azul
let listaAzul = infosCarros.filter(infoCarro => infoCarro.cor == "Azul")
let carrosAzuis = listaAzul.map(azuis => {
    return {
        marca: azuis.marca,
        modelo: azuis.modelo
    }
})
console.log(carrosAzuis)

//e) Criar uma lista filtrando por ano de emplacamento 2025 **********
let comAno2025 = infosCarros.filter(infoCarro =>{
    let dataEmplacamento = new Date(infoCarro.data_emplacamento)
    if(dataEmplacamento.getFullYear() === 2025){
        return true
    }else{
        return false
    }
})
console.log(comAno2025)