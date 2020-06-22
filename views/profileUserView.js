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
function loadMedals() {
    const container = document.getElementById('containerdiv');


    let content = ``
    let countEvents = countEventsFromUser(sessionStorage.getItem("loggedUser"))
    let medals = getMedalsIdsByNumberOfEvents(countEvents)
    let numberofLines = Math.ceil(getMedalsIdsByNumberOfEvents().length / 3)
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

        <a href="http://www.facebook.com/sharer.php?u=${medals[cont].imagem}" target="_blank" class='card-footer-item'>Partilhar no fb</a>
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
}
loadMedals()
function loadLevel() {
    const container = document.getElementById('levelContent');


    let content = `
    <p><progress class="progress is-danger" value="${getUserLevelToNextLevel(getEventsFromUser(sessionStorage.getItem("loggedUser")).length)}" max="100"
    style="max-width: 100%;"></progress>Falta ${100- parseInt(getUserLevelToNextLevel(getEventsFromUser(sessionStorage.getItem("loggedUser")).length))} % para o nivel seguinte</p>`


    container.innerHTML += content;
}
loadLevel()
