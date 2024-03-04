const vagas  = []


function listarVagas(){
    const vacanciesInText = vagas.reduce(function (finalText, vaga, indice){
        finalText += indice + "."
        finalText += vaga.name
        finalText += " (" + vaga.candidates.length + " candidatos)\n"
        return finalText

        alert(vacanciesInText)
    })
}



function newVacancie (){
    const name = prompt("Informe um nome para a vaga:")
    const description = prompt("Informe uma descrição para a vaga:")
    const limitDate = prompt("Informe uma data limite para a vaga:")
    const confirmation = confirm("Deseja criar uma vaga?")
    if (confirmation){
        const newVacancie = {name, description, limitDate, candidates: []}
        vagas.push(newVacancie)
        alert("Vaga criada.")
    }
}
newVacancie()
function showVacancie (){
    const indice = prompt("Indique o número da vaga:")
    const vaga = vagas[indice]

    const candidatesInText = vaga.candidates.reduce((finalText, candidates) => finalText + "\n -" + candidate, "")
    alert("Vaga n°:" + indice + "\n Nome:" + vaga.name)
}

function inscriptionCandidate(){
    const candidate =  prompt("Informe o nome do candidato:")
    const indice = prompt("Informe o indice do candidato")
    const vaga = vaga[indice]

    const confirmation = confirm("Deseja inscrever o candidato?")
    if (confirmation){
        vaga.candidates.push()
    }
}