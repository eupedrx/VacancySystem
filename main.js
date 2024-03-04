const vagas = [];

function listarVagas() {
    const vacanciesInText = vagas.reduce(function (finalText, vaga, indice) {
        finalText += indice + ". ";
        finalText += vaga.name;
        finalText += " (" + vaga.candidates.length + " candidatos)\n";
        return finalText;
    }, "");
    alert(vacanciesInText);
}

function newVacancie() {
    const name = prompt("Informe um nome para a vaga:");
    const description = prompt("Informe uma descrição para a vaga:");
    const limitDate = prompt("Informe uma data limite para a vaga:");
    const confirmation = confirm("Deseja criar uma vaga?");
    if (confirmation) {
        const newVacancie = { name, description, limitDate, candidates: [] };
        vagas.push(newVacancie);
        alert("Vaga criada.");
    }
}

function showVacancie() {
    const indice = prompt("Indique o número da vaga:");
    const vaga = vagas[indice];

    let candidatesInText = "Candidatos:";
    vaga.candidates.forEach(candidate => {
        candidatesInText += "\n - " + candidate;
    });
    alert("Vaga n°: " + indice + "\n Nome: " + vaga.name + "\n" + candidatesInText);
}

function inscriptionCandidate() {
    const candidate = prompt("Informe o nome do candidato:");
    const indice = prompt("Informe o índice da vaga:");
    const vaga = vagas[indice];

    const confirmation = confirm("Deseja inscrever o candidato?");
    if (confirmation) {
        vaga.candidates.push(candidate);
        alert("Inscrição feita.");
    }
}

function deleteVacation() {
    const indice = prompt("Digite o índice da vaga para excluir:");
    const vaga = vagas[indice];

    const confirmation = confirm("Deseja excluir a vaga de índice: " + indice + "?");
    if (confirmation) {
        vagas.splice(indice, 1);
        alert("Vaga excluída.");
    }
}

function Menu() {
    const opcao = prompt("Cadastro de Vagas " +
        "\n 1 - Vagas disponíveis" +
        "\n 2 - Criar Vaga" +
        "\n 3 - Mostrar Vaga" +
        "\n 4 - Inscrever Candidato" +
        "\n 5 - Deletar Vaga" +
        "\n 6 - Sair");

    return opcao;
}

function execute() {
    let opcao = "";
    do {
        opcao = Menu();
        switch (opcao) {
            case "1":
                listarVagas();
                break;
            case "2":
                newVacancie();
                break;
            case "3":
                showVacancie();
                break;
            case "4":
                inscriptionCandidate();
                break;
            case "5":
                deleteVacation();
                break;
            case "6":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida.");
        }
    } while (opcao !== "6");
}

execute();