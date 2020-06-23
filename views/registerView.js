function register1(){

let lastId = parseInt(getlastId())+1
let newUser = new User(
    lastId, 
    document.getElementById("name").value,
    document.getElementById("email").value,
    document.getElementById("password").value
)
register(newUser)
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