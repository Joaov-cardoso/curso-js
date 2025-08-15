function exercicio1() {
    let n1 = parseFloat(prompt("Digite a Nota 01"));
    let n2 = parseFloat(prompt("Digite a Nota 02"));
    let n3 = parseFloat(prompt("Digite a Nota 03"));

    let mediaPonderada = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;
    let notaExame, trabalhoComplementar, resultadoPosTrabalho;
    let calculoExame = (mediaPonderada + notaExame) / 2;

    if (mediaPonderada >= 7) {
        console.log("Aprovado")
    } else if (mediaPonderada >= 5 && mediaPonderada < 7) {
        notaExame = parseFloat((prompt("Necessário Exame, digite a nota")))

        if (calculoExame >= 6) {
            console.log("Aprovado em exame")

    } else if (calculoExame <= 6.8 || calculoExame >= 6.99){
        trabalhoComplementar = prompt("Fez trabalho complementar? (sim ou não)")

        if (trabalhoComplementar === "sim"){
            
        }
    }
    } 
}