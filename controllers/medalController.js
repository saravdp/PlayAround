function getMedalById(idUser) {
    let value = null
    for (let i = 0; i < getAllMedals().length; i++) {

        if (getAllMedals()[i].id === idUser) {

            value = getAllMedals()[i]
        }
    }
    if (value == null) {
        return "Medalha não encontrada"

    }
    else {
        return value
    }
}
function updateMedal(click, newNumOfEvents, newName, newFoto) {

    updateObjectMedal(click, newName, newFoto, newNumOfEvents)
}
function deleteMedal(idMedal) {
    if (confirm("Deseja mesmo apagar a medalha?")) {
        deleteMedalha(idMedal)
    }
}
function filterMedalByID(email) {

    let medals = getAllMedals()
    if (email.trim() == "") {
        medals = getAllMedals()
    }
    else medals = getAllMedals().filter(user => user.titulo == email)
    let content = ``
    let numberofLines = Math.ceil(medals.length / 3)
    let cont = 0;
    for (let j = 0; j <= numberofLines; j++) {
        content += `<div class='columns is-mobile'>`
        for (let i = 0; i < 3; i++) {


            if (cont < medals.length) {
                content += `<div class='column is-narrow is-4-tablet is-4-mobile'>
    <div class='card'>
        <div class='card-image'>
            <figure class='image is-4by3'>
                <img alt='' src='${medals[cont].imagem}'>
            </figure>
        </div>
        <div class='card-content'>
            <div class='content'>
                <!--<span class='tag is-dark subtitle'>#1</span>-->
                <p>${medals[cont].titulo}</p>
            </div>
        </div>
        <footer class='card-footer'>
            <a onclick="fillEditForm(${medals[cont].id})" href='#' data-target="#edit-preferences-modal${medals[cont].id}"class='card-footer-item' href="GerirAtividade.html" id='edit-preferences'>Editar</a>
            <a onclick="deleteMedal(${medals[cont].id})" class='card-footer-item'>Apagar</a>
        </footer>
    </div>
    <br>
    </div>
    `}
            cont++;
        }
        content += `</div>`
    }
    container.innerHTML = content;
}
function addMedal(title, num, file) {
    newMedal(title, num, file)
}
function getMedalsIdsByNumberOfEvents(numEvents) {
    let medals = []
   
    for (let i in getAllMedals()) {
        if(parseInt(numEvents)>getAllMedals()[i].numofEvents)
        {
            medals.push(getAllMedals()[i])
        }
    }
    return medals
}
