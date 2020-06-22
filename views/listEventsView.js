//TODO geolocalizacao, filtros(categoria, data)
const numofRows = Math.ceil(getAllEvents().length / 3);
const container = document.getElementById('allEvents');
let cont = 0;
function getDistance() {
    //
}
function applyFilter(value) {
    document.getElementById('allEvents')
}

function loadCategories() {
    let categorias = getAllCategories()
    let loadCategories = ``
    for (let i in categorias) {
        loadCategories += `<li>
<a><label class="checkbox"> <input type="checkbox"  id = "categoryfilter${categorias[i].idCategoria}" name="surf" value="${categorias[i].titulo}">
${categorias[i].titulo}</label> </a>
</li>`

    }
    document.getElementById('filtros').innerHTML += loadCategories
}
loadCategories()

const filtered = getAllEvents()//.filter(applyFilter)
// alert(JSON.stringify(filtered))
for (let i = 0; i <= numofRows; i++) {
    let content = ``
    if (cont < filtered.length && filtered[cont] != undefined) {
        content = ` 
        <div class="row columns">
     <div class="column is-one-third" >
         <div class="card large" style="height: auto;">
             <div class="card-image">
                 <figure class="image" >
                     <img  style="height:150px; width:600px" src="${filtered[cont].imagem}" alt="Image">
                 </figure>
             </div>
             <div class="card-content">
                 <div class="media">
                     <div class="media-content">
                     <p class="title is-4 no-padding">${filtered[cont].titulo}</p>
                     <p><span class="title is-6"><a href="singleEvent.html?idEvent=${filtered[cont].id}">Ver mais</a></span></p>
                     <p class="subtitle is-6">${filtered[cont].data}</p>
                     </div>
                 </div>
                 <div class="content">
                     
                 </div>
             </div>
         </div>
     </div>`
        cont++;
    }
    if (cont < filtered.length && filtered[cont] != undefined) {
        content += `<div class="column is-one-third" >
         <div class="card large" style="height: auto;">
             <div class="card-image">
                 <figure class="image">
                     <img style="height:150px; width:600px" src="${filtered[cont].imagem}" alt="Image">
                 </figure>
             </div>
             <div class="card-content">
                 <div class="media">
                     <div class="media-content">
                         <p class="title is-4 no-padding">${filtered[cont].titulo}</p>
                         <p><span class="title is-6"><a href="singleEvent.html?idEvent=${filtered[cont].id}">Ver mais</a></span></p>
                         <p class="subtitle is-6">${filtered[cont].data}</p>
                     </div>
                 </div>
                 <div class="content">
                     
                 </div>
             </div>
         </div>
     </div>`
        cont++;
        if (cont < filtered.length && filtered[cont] != undefined) {
            content += `<div class="column is-one-third" >
     <div class="card large" style="height: auto;">
         <div class="card-image">
             <figure class="image">
                 <img style="height:150px; width:600px" src="${filtered[cont].imagem}" alt="Image">
             </figure>
         </div>
         <div class="card-content">
             <div class="media">
                 <div class="media-content">
                 <p class="title is-4 no-padding">${filtered[cont].titulo}</p>
                 <p><span class="title is-6"><a href="singleEvent.html?idEvent=${filtered[cont].id}">Ver mais</a></span></p>
                 <p class="subtitle is-6">${filtered[cont].data} </p>
                 </div>
             </div>
             <div class="content">
                 
             </div>
         </div>
     </div>
 </div>
 </div>`;
            cont++;

        }
    }
    // Append newyly created card element to the container
    container.innerHTML += content;
}
function filterByName() {
    filterEventByNameInEventList(document.getElementById('inputText').value)
}
function filterByCategories() {
    let categorias = getAllCategories()
    let filters = []
    for (let i in categorias) {
        if (document.getElementById("categoryfilter" + categorias[i].idCategoria).checked==true) {
            filters.push(categorias[i].idCategoria)
        }
    }
    filterEventByCategoryInEventList(filters)
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