/* ALL USERS
*/
document.getElementById('particitionsCount').innerHTML = getEventsFromUser(sessionStorage.getItem("loggedUser")).length
document.getElementById('hostCount').innerHTML = getUserEvents(sessionStorage.getItem("loggedUser")).length
document.getElementById('userLevel').innerHTML = getUserLevel(getEventsFromUser(sessionStorage.getItem("loggedUser")).length)
document.getElementById('userLevelBar').value = getUserLevelToNextLevel(getEventsFromUser(sessionStorage.getItem("loggedUser")).length)
document.getElementById('username').innerHTML = getUserById(sessionStorage.getItem("loggedUser"))._nome
document.getElementById('userImage').src = getUserById(sessionStorage.getItem("loggedUser")).foto
function fillEditForm() {

    //let userLogged= sessionStorage.getItem('loggedUser')
    let userInfo = getUserById(sessionStorage.getItem("loggedUser"))

    document.getElementById('nameModal').value = userInfo._nome
    document.getElementById('passwordModal').value = userInfo.password
    document.getElementById('emailModal').value = userInfo.email
    document.getElementById('newFileModal').value = userInfo.foto


    document.getElementById("edit-preferences-modal").className += " is-active";
    //document.getElementsByClassName(".modal-card-head button.delete, .modal-save, .modal-cancel").addEventListener("click", removeActive(click));
    const onSave = document.querySelectorAll('.modal-save');
    onSave.forEach(el => el.addEventListener('click', event => {
        let newName;
        if (document.getElementById('nameModal').value != userInfo._nome && document.getElementById('nameModal').value.trim != " ") {
            newName = document.getElementById('nameModal').value
        } else {
            newName = userInfo._nome
        }

        let newPassword;
        if (document.getElementById('passwordModal').value != userInfo._nome && document.getElementById('passwordModal').value.trim != " ") {
            newPassword = document.getElementById('passwordModal').value
        } else {
            newPassword = userInfo.password
        }
        let newEmail;
        if (document.getElementById('emailModal').value != userInfo._nome && document.getElementById('emailModal').value.trim != " ") {
            newEmail = document.getElementById('emailModal').value
        } else {
            newEmail = userInfo.email
        }
        let newFoto;
        // if(document.getElementById('foto'+userInfo._id).value!= userInfo._nome && document.getElementById('foto'+userInfo._id).value.trim !=" "){
        //     let newFoto;
        //     newFoto=document.getElementById('foto'+userInfo._id).value
        // //}else {
        newFoto = userInfo.foto
        //} 

        updateUser(userInfo._id, newName, newEmail, newPassword, newFoto, userInfo.tipoUser)

    }));


}


//PAGE CODE



const container = document.getElementById('containerdiv');


let content = ``
let eventsIds = getUserEvents(sessionStorage.getItem("loggedUser"))
let numberofLines = Math.ceil(eventsIds.length / 3)
let cont = 0;
for (let j = 0; j <= numberofLines; j++) {
    content += `<div class='columns is-mobile'>`
    for (let i = 0; i < 3; i++) {
        let events = getEventById(eventsIds[cont])

        if (cont < eventsIds.length) {
            content += `<div class='column is-narrow is-4-tablet is-4-mobile'>
<div class='card'>
    <div class='card-image'>
        <figure class='image is-4by3'>
            <img alt='' src='${events.imagem}'>
        </figure>
    </div>
    <div class='card-content'>
        <div class='content'>
            <!--<span class='tag is-dark subtitle'>#1</span>-->
            <p>${events.titulo}</p>
        </div>
    </div>
    <footer class='card-footer'>
        <a onclick="fillEditForm(${events.id})" href='#' data-target="#edit-preferences-modal${events.id}"class='card-footer-item' href="GerirAtividade.html" id='edit-preferences'>Editar</a>
        <a onclick="deleteEvento(${events.id})" class='card-footer-item'>Apagar</a>
    </footer>
</div>
<br>
</div>
`}
        cont++;
    }
    content += `</div>`
}
container.innerHTML += content;

var input = document.getElementById("searchEvent");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        filterUserEventsByName(input.value)
        // Trigger the button element with a click
        //document.getElementById("myBtn").click();
    }
});



function fillEditForm(click) {

    //let userLogged= sessionStorage.getItem('loggedUser')
    let eventInfo = getEventById(click)
    let content1 = `  <div class='modal' id='edit-preferences-modal${click}'>
<div class='modal-background'></div>

    <div class='modal-card'>
                            <header class='modal-card-head'>
                                <p class='modal-card-title'>Editar dados</p>
                                <button class='delete'></button>
                            </header>
                            <section class='modal-card-body'>
                                <label class='label'>Titulo</label>
                                <p class='control'>
                                    <input class='input' id="name${eventInfo.id}" value="${eventInfo.titulo}" type='text'>
                                </p>

                                <label class='label'>Imagem da atividade</label>
                            <p class='control'>
                                <input class='input' id="newFile${eventInfo.id}" value='${eventInfo.imagem}' placeholder='Insira uma imagem para a medalha' type='text'>
                            </p>
                            <div class="field">
                            <label class="label">Categoria</label>
                            <div class="control">
                                <div class="select">
                                    <select id="categoriesList${eventInfo.id}" required>
                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field ">
                        <label class="label">Data</label>
                        <div class="control">
                            <input id="date${eventInfo.id}" class="input" type="date" placeholder="Data" value="${eventInfo.data}"required>
                        </div>
                    </div>
                    <div class="field ">
                    <label class="label">Localização</label>
                    <div class="control">
                        <input id="location${eventInfo.id}" class="input" type="text" placeholder="Localização" value="${eventInfo.coordenadasLat}" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Descrição</label>
                    <div class="control">
                        <textarea id="description${eventInfo.id}" class="textarea is-danger" placeholder="Descrição" value="${eventInfo.descricao}"required></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Agenda</label>
                    <div class="control">
                        <textarea id="agenda${eventInfo.id}" class="textarea" placeholder="Agenda" text="${eventInfo.agenda}" required></textarea>
                    </div>
                </div>

                            </section>
                            <footer class='modal-card-foot'>
                                <a class='button is-danger modal-save'>Save changes</a>
                                <a onlick ="removeActive(${eventInfo.id})"class='button modal-cancel'>Cancel</a>
                            </footer>
                        </div></div>`

    document.getElementById('modal-div').innerHTML += content1
    //Adicionar categorias
    let contentCategories = ``
    for (let i in getAllCategories()) {

        contentCategories += `<option value="${getAllCategories()[i].idCategoria}">${getAllCategories()[i].titulo}</option>`
    }
    document.getElementById('categoriesList' + eventInfo.id).innerHTML = contentCategories

    document.getElementById("edit-preferences-modal" + click).className += " is-active";
    //document.getElementsByClassName(".modal-card-head button.delete, .modal-save, .modal-cancel").addEventListener("click", removeActive(click));
    const onSave = document.querySelectorAll('.modal-save');
    onSave.forEach(el => el.addEventListener('click', event => {

        //titulo imagem categoriesList data coordenadasLat agenda descricao
        let newtitulo;
        if (document.getElementById('name' + eventInfo.id).value != eventInfo.titulo && document.getElementById('name' + eventInfo.id).value.trim != " ") {
            newtitulo = document.getElementById('name' + eventInfo.id).value
        } else {
            newtitulo = eventInfo.titulo
        }
        let categoriesList;
        let selected = document.getElementById('categoriesList' + eventInfo.id).options[document.getElementById('categoriesList' + eventInfo.id).selectedIndex].value
        if (document.getElementById('categoriesList' + eventInfo.id).value != eventInfo.categoria && document.getElementById('categoriesList' + eventInfo.id).value.trim != " ") {
            categoriesList = document.getElementById('categoriesList' + eventInfo.id).value
        } else {
            categoriesList = eventInfo.categoria
        }
        let newFoto;
        if (document.getElementById('newFile' + eventInfo.id).value != eventInfo.imagem && document.getElementById('newFile' + eventInfo.id).value.trim != " ") {

            newFoto = document.getElementById('newFile' + eventInfo.id).value
        } else {
            newFoto = eventInfo.imagem
        }
        let newData;
        if (document.getElementById('date' + eventInfo.id).value != eventInfo.data && document.getElementById('date' + eventInfo.id).value.trim != " ") {

            newData = document.getElementById('date' + eventInfo.id).value
        } else {
            newData = eventInfo.data
        }
        let newmap;
        if (document.getElementById('location' + eventInfo.id).value != eventInfo.coordenadasLat && document.getElementById('location' + eventInfo.id).value.trim != " ") {

            newmap = document.getElementById('location' + eventInfo.id).value
        } else {
            newmap = eventInfo.coordenadasLat
        }
        let newAgenda;
        if (document.getElementById('agenda' + eventInfo.id).value != eventInfo.agenda && document.getElementById('agenda' + eventInfo.id).value.trim != " ") {

            newAgenda = document.getElementById('agenda' + eventInfo.id).value
        } else {
            newAgenda = eventInfo.agenda
        }
        let newDescricao;
        if (document.getElementById('description' + eventInfo.id).value != eventInfo.descricao && document.getElementById('description' + eventInfo.id).value.trim != " ") {

            newDescricao = document.getElementById('description' + eventInfo.id).value
        } else {
            newDescricao = eventInfo.descricao
        }

        updateEvent(click, newtitulo, sessionStorage.getItem("loggedUser"), newFoto, categoriesList, newData, newmap, newAgenda, newDescricao)

    }));


    const divs = document.querySelectorAll('.modal-card-head button.delete, .modal-save, .modal-cancel');

    divs.forEach(el => el.addEventListener('click', event => {
        removeActive(click)
    }));




}

function removeActive(click) {

    document.getElementById("edit-preferences-modal" + click).classList.remove("is-active")

}
function addNewMedal() {
    var title = document.getElementById("newTitle").value;
    var num = document.getElementById("newNumOfEvents").value;
    var file = document.getElementById("newFile").value;

    addMedal(title, num, file)
}
//Nvbar
function navbarcheckLogin() {
    const container = document.getElementById('navMenu')
    let content = ``
    let userLogged = sessionStorage.getItem("loggedUser")
    if (userLogged != null && userLogged != undefined) {
        content += `
<div class="navbar-start">
                    <a class="navbar-item" href="../index.html">
                        Home
                    </a>
                    <a class="navbar-item" href="../html/listEvents.html">
                        Eventos
                    </a>
                    <a class="navbar-item is-active" href="../html/profileUser.html">
                        Painel de utilizador
                    </a>
                </div>
                <div id="navbarcontentUser"class="navbar-end">
                <a class="navbar-item" href="">
                ${getUserById(userLogged)._nome}
            </a>
            <a class="navbar-item" href="../index.html">
                <!-- Painel de utilizador -->
                <figure class="image">
                    <img src="${getUserById(userLogged).foto}"
                        style="height: 100%; width: auto;" class="is-rounded">
                </figure>
            </a><a onclick="sessionLogout()"class="navbar-item" >
            Log out
        </a>
                </div>
`
    }
    else {
        content += `
        <div class="navbar-start">
                    <a class="navbar-item" href="../index.html">
                        Home
                    </a>
                    <a class="navbar-item" href="../html/listEvents.html">
                        Eventos
                    </a>
                    
                </div>
                <div id="navbarcontentUser"class="navbar-end">
                <a class="navbar-item" href="../html/login.html">Login</a>
                </div>`

    }
    container.innerHTML = content;
}
navbarcheckLogin()