function exercicio1() {
    let n1 = parseFloat(prompt("Digite a Nota 01").replace(",", "."));
    let n2 = parseFloat(prompt("Digite a Nota 02").replace(",", "."));
    let n3 = parseFloat(prompt("Digite a Nota 03").replace(",", "."));

    let mediaPonderada = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;

    if (mediaPonderada >= 7) {
        console.log("Aprovado")
    } else if (mediaPonderada >= 5) {
        let exame = parseFloat(prompt("Digite a nota do exame").replace(",", "."));
        let mediaPosExame = (mediaPonderada + exame) / 2;
        if (mediaPosExame >= 7) {
            console.log("Aprovado em exame")
        } else {
            if (mediaPosExame >= 6.8 && mediaPosExame < 7) {
                let trabalhoExtra = prompt("Fez o trabalho extra? (sim ou não)").toLocaleLowerCase();
                if (trabalhoExtra === "sim") {
                    mediaPosExame + 0.2;

                    if (mediaPosExame > 10) mediaPosExame = 10;
                    console.log("Média depois do trabalho é de ", mediaPosExame)

                    if (mediaPosExame >= 7) {
                        console.log("Aprovado com exame e trabalho extra")
                    } else {
                        console.log("Reprovado")
                    }
                } else {
                    console.log("Reprovado")
                }
            } else {
                console.log("Reprovado")
            }
        }
    } else {
        console.log("Reprovado")
    }
}

function exercicio2(){
    let valor = parseFloat(prompt("Digite o valor da compra").replace(",", "."));
    let cupomDesconto = prompt("Digite o cupom desconto! FRETEGRATIS ou DESC10").toLowerCase();
    let desconto15, desconto10, desconto5;

    if(valor >= 500)


}