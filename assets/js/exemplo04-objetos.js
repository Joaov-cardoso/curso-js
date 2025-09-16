function exemploDadosPaciente() {
    //Utilizando multiplas variaveis
    let tipoSanguineo = "A+";
    let cpf = "102.123.129-20";
    let idade = 20;
    let nome = "Maria";
    console.log(`Nome: ${nome}
        Tipo Sanguíneo: ${tipoSanguineo}
        Idade: ${idade}
        CPF: ${cpf}`)
    // Criando um objeto para armazenar várias caracteristicas
    let pacienteMaria = {
        tipoSanguineo: "A+",
        cpf: "102.123.129-30",
        idade: 20,
        nome: "Maria"
    }
    // Alterando a idade da Maria
    pacienteMaria.idade = 21;
    console.log(`Nome: ${pacienteMaria.nome}
        Tipo Sanguíneo: ${pacienteMaria.tipoSanguineo}
        Idade: ${pacienteMaria.idade}
        CPF: ${pacienteMaria.cpf}`)
}

function exemploJogo() {
    let nome = "Counter-Strike: Global Ofensive"
    let genero = "Tiro"
    let dataDeLancamento = "2012"
    console.log(`Jogo: ${nome}
        Gênero: ${genero}
        Ano de lançamento: ${dataDeLancamento}`)

    let jogo = {
        nome: "Counter-Strike: Global Ofensive",
        genero: "Tiro",
        dataDeLancamento: "2012"
    }
    console.log(`Jogo: ${jogo.nome}
        Gênero: ${jogo.genero}
        Ano de lançamento: ${jogo.dataDeLancamento}`)

    jogo.publisher = "Valve"
    jogo.preco = 14.99
    console.log(`Jogo: ${jogo.nome}
        Gênero: ${jogo.genero}
        Ano de lançamento: ${jogo.dataDeLancamento}
        Publisher: ${jogo.publisher}
        Preço: ${jogo.preco}
        `)
}

function exemploObjetoEmVetor() {
    let alunos = [];

    let aluno1 = {}
    aluno1.nome = prompt("Digite o nome do aluno");
    aluno1.nota1 = parseFloat(prompt("Digite a nota 1"))
    aluno1.nota2 = parseFloat(prompt("Digite a nota 2"))
    aluno1.nota3 = parseFloat(prompt("Digite a nota 3"))
    //aluno1.media = (aluno1.nota1 + aluno1.nota2 + aluno1.nota3) / 3
    aluno1.media - calcularMedia(aluno1)
    alunos.push(aluno1)

    let aluno2 = {}
    aluno2.nome = prompt("Digite o nome do aluno");
    aluno2.nota1 = parseFloat(prompt("Digite a nota 1"))
    aluno2.nota2 = parseFloat(prompt("Digite a nota 2"))
    aluno2.nota3 = parseFloat(prompt("Digite a nota 3"))
    aluno2.media - calcularMedia(aluno2)
    alunos.push(aluno2)

    console.table(alunos);
}

function calcularMedia(aluno) {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    return media
}

function listaColaboradores() {
    let colaboradores = []

    let colaborador01 = {}
    colaborador01.nome = prompt("Digite o nome do colaborador")
    colaborador01.valorHora = parseFloat(prompt("Digite o valor por hora"))
    colaborador01.quantidadeDeHoras = parseFloat(prompt("Digite a quandide de horas trabalhas"))
    colaborador01.salarioBruto = calcularSalarioBruto(colaborador01)
    colaboradores.push(colaborador01)

    let colaborador02 = {}
    colaborador02.nome = prompt("Digite o nome do colaborador")
    colaborador02.valorHora = parseFloat(prompt("Digite o valor por hora"))
    colaborador02.quantidadeDeHoras = parseFloat(prompt("Digite a quandide de horas trabalhas"))
    colaborador02.salarioBruto = calcularSalarioBruto(colaborador02)
    colaboradores.push(colaborador02)

    let colaborador03 = {}
    colaborador03.nome = prompt("Digite o nome do colaborador")
    colaborador03.valorHora = parseFloat(prompt("Digite o valor por hora"))
    colaborador03.quantidadeDeHoras = parseFloat(prompt("Digite a quandide de horas trabalhas"))
    colaborador03.salarioBruto = calcularSalarioBruto(colaborador03)
    colaboradores.push(colaborador03)

    let colaborador04 = {}
    colaborador04.nome = prompt("Digite o nome do colaborador")
    colaborador04.valorHora = parseFloat(prompt("Digite o valor por hora"))
    colaborador04.quantidadeDeHoras = parseFloat(prompt("Digite a quandide de horas trabalhas"))
    colaborador04.salarioBruto = calcularSalarioBruto(colaborador04)
    colaboradores.push(colaborador04)

    let colaborador05 = {}
    colaborador05.nome = prompt("Digite o nome do colaborador")
    colaborador05.valorHora = parseFloat(prompt("Digite o valor por hora"))
    colaborador05.quantidadeDeHoras = parseFloat(prompt("Digite a quandide de horas trabalhas"))
    colaborador05.salarioBruto = calcularSalarioBruto(colaborador05)
    colaboradores.push(colaborador05)

    console.table(colaboradores)
}

function calcularSalarioBruto(colaborador) {
    const salarioBruto = colaborador.valorHora * colaborador.quantidadeDeHoras
    return salarioBruto
}