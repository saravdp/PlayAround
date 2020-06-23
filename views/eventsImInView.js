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




//CODIGO DA PAGINA

const container = document.getElementById('containerdiv1');


let content = ``
let eventsIds = getEventsFromUser(sessionStorage.getItem("loggedUser"))
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
        <a href="singleEvent.html?idEvent=${events.id}" class='card-footer-item'>Ver evento</a>
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

var input = document.getElementById("searchEv");

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
