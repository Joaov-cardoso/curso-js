let alunos = [
    {
        "id": crypto.randomUUID(),
        "nome": "João",
        "sobrenome": "Cardoso",
        "numero_matricula": 9,
        "turma": "Sup 05",
        "nota1": 10,
        "nota2": 7,
        "nota3": 6.8
    },
    {
        "id": crypto.randomUUID(),
        "nome": "Antônio",
        "sobrenome": "Nunes",
        "numero_matricula": 16,
        "turma": "Sup 07",
        "nota1": 7,
        "nota2": 4.9,
        "nota3": 5
    }
]

// a) Adicionar um aluno com id, nome, sobrenome, notas (lista vazia)
let alunoNovo1 = {}
alunoNovo1.id = crypto.randomUUID()
alunoNovo1.nome = "Carlos"
alunoNovo1.sobrenome = "Henrique"
alunoNovo1.nota1 = 10
alunoNovo1.nota2 = 5
alunoNovo1.nota3 = 7
alunos.push(alunoNovo1)

// b) Adicionar um aluno com id, nome, sobrenome, número da matrícula, turma, notas
let alunoNovo2 = {}
alunoNovo2.id = crypto.randomUUID()
alunoNovo2.nome = "Jorge"
alunoNovo2.sobrenome = "Henrique do Corinthians"
alunoNovo2.numero_matricula = 29
alunoNovo2.turma = "Sup 06"
alunoNovo2.nota1 = 9
alunoNovo2.nota2 = 6
alunoNovo2.nota3 = 8
alunos.push(alunoNovo2)

// c) Adicionar um aluno com id, nome, sobrenome, número da matricula, notas
let alunoNovo3 = {
    "id": crypto.randomUUID(),
    "nome": "Felipe",
    "sobrenome": "Correa",
    "numero_matricula": 30,
    "nota1": 9,
    "nota1": 4,
    "nota1": 3
}
alunos.push(alunoNovo3)

// d) Adicionar um aluno preenchendo id, nome, sobrenome, notas
let alunoNovo4 = {
    "id": crypto.randomUUID(),
    "nome": "Lucas",
    "sobrenome": "Beneva",
    "nota1": 9,
    "nota2": 2,
    "nota3": 0
}
alunos.push(alunoNovo4)

// e) Criar uma lista com os ids dos alunos
let listaPorId = alunos.map(aluno => aluno.id)
console.log(listaPorId)

// f) Criar uma lista com os ids dos alunos filtrando pela turma Sup 07
let idDaTurmaSup07 = alunos.filter(aluno => aluno.turma == "Sup 07").map(alunos => alunos.id)
console.log(idDaTurmaSup07)

// g) Criar uma lista filtrando por alunos com nome menor que 10
let nomeMenorQue10 = alunos.filter(aluno => aluno.nome.length < 10).map(alunos => alunos.nome)
console.log(nomeMenorQue10)

// h) Criar uma lista filtrando com os números das matrículas
let listaNumeroMatricula = alunos.map(aluno => aluno.numero_matricula)
console.log(listaNumeroMatricula)

// i) Criar uma lista filtrando alunos sem número de matricula
let listaSemMatricula = alunos.filter(aluno => aluno.numero_matricula === undefined).map(aluno => aluno.nome)
console.log(listaSemMatricula)
