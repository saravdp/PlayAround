function goBack() {
    window.history.back();
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
                    <a class="navbar-item is-active" href="../html/listEvents.html">
                        Eventos
                    </a>
                    <a class="navbar-item " href="../html/profileUser.html">
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
var idUser = getParameterByName('idUser');
function loadMedals() {
    const container = document.getElementById('containerdiv');


    let content = ``
    let countEvents = countEventsFromUser(idUser)
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
    <p><progress class="progress is-danger" value="${getUserLevelToNextLevel(getEventsFromUser(idUser).length)}" max="100"
    style="max-width: 100%;"></progress>Falta ${parseInt(getUserLevelToNextLevel(getEventsFromUser(idUser).length))} % para o nivel seguinte</p>`


    container.innerHTML += content;
}
loadLevel()
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.getElementById('particitionsCount').innerHTML = getEventsFromUser(idUser).length
document.getElementById('hostCount').innerHTML = getUserEvents(idUser).length
document.getElementById('userLevel').innerHTML = getUserLevel(getEventsFromUser(idUser).length)
document.getElementById('userLevelBar').value = getUserLevelToNextLevel(getEventsFromUser(idUser).length)
document.getElementById('username').innerHTML = getUserById(idUser)._nome
document.getElementById('userImage').src = getUserById(idUser).foto