function goBack() {
    window.history.back();
}
//Nvbar
function navbarcheckLogin(){
    const container = document.getElementById('navbarcontentUser')
    let content= ``
    let userLogged= sessionStorage.getItem("loggedUser")
    if (userLogged != null && userLogged!= undefined){
        content+=`<a class="navbar-item" href="">
        ${getUserById(userLogged)._nome}
    </a>
    <a class="navbar-item" href="../index.html">
        <!-- Painel de utilizador -->
        <figure class="image">
            <img src="${getUserById(userLogged).foto}"
                style="height: 100%; width: auto;" class="is-rounded">
        </figure>
    </a><a onclick="sessionLogout()"class="navbar-item" href="">
    Log out
</a>`
    } 
    else{
        content+=`<a class="navbar-item" href="../login.html">Login</a>`

    }
    container.innerHTML += content;
}
navbarcheckLogin()