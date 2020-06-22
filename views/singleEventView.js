
//TODO 
//ranking imagens inscricao
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var idUserLogged = sessionStorage.getItem("loggedUser")
var idEvento = getParameterByName('idEvent');

let evento = getEventById(idEvento)
// for (i in eventos) {
//     if (eventos[i].id == idEvento) {
//         evento = eventos[i];
//     }
// }

let anfitriao = getUserById(evento.anfitriao)

// background-image: url(${evento.imagem[0]});
// background: linear-gradient(rgba(69, 221, 252, 0.65), rgba(253, 148, 29, 0.65)), rgba(69, 221, 252, 0.55) url(${evento.imagem[0]}) no-repeat;
// background-position-y: 75%;
document.getElementById('hello').innerHTML +=
    `
 .hero {
   
    background-attachment: fixed;
    background-size: cover;
    color: white;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    font-family: 'Poppins', sans-serif;
}
`;

function initMap() {
    // // The location of Uluru
    // var uluru = { lat: -25.344, lng: 131.036 };
    // // The map, centered at Uluru
    // var map = new google.maps.Map(
    //     document.getElementById('map'), { zoom: 4, center: uluru });
    // // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({ position: uluru, map: map });
}
function goBack() {
    window.history.back();
}
const container = document.getElementById('event');

let content = `
<div class="hero-body">
    <div class="container column is-half text" style="background-image: url(${evento.imagem});
     background: linear-gradient(rgba(69, 221, 252, 0.65), rgba(253, 148, 29, 0.65)), rgba(69, 221, 252, 0.55) url(${evento.imagem}) no-repeat;
     background-position-y: 75%;">
        

<div class="columns" >  
<div class="column is-inline">    
`
        if (idUserLogged != null) {
            content += `    
            <div class="column is-inline is-pulled-right">      
            <a style="color:"white;" class="is-narrow is-pulled-right" href="#inscricao">
            <button class="button is-danger text" href="#inscricao" style="text-align:right; text-valign:middle; ">Aderir</button></a>
            
            </div>`
        }
        content+=`
        </div></div>

    </div>
</div>
<div class="container" style="float:left; text-align:center; display: inline-block;">
<span style="float:right;"><h2 class="subtitle"><a href="../html/profile.html?idUser=${anfitriao._id}"style="color:#000000">${anfitriao._nome}</a>
<figure class="image is-32x32" style="text-align:left; display: inline-block;">
<img class="is-rounded" src="${anfitriao.foto}"></figure>
</h2></span>
<div class="content" style="text-align:left; display: inline-block;">
<h1 class="title" style="float:left;padding-top: 0px; padding-right: 100px; color:#000000">
    ${evento.titulo}
</h1>
</div></div>
<div class="columns is-centered">
<div class="tabs is-boxed main-menu text" id="nav">
    <ul>`
        // <li data-target="pane-1" id="1">
        //     <a>
        //         <span class="icon is-small"><i class="fa fa-image"></i></span>
        //         <span>Fotos</span>
        //     </a>
        // </li>
       content+= `
        <li data-target="pane-2" id="2" class="is-active">
            <a>
                <span class="icon is-small"><i class="fa fa-info"></i></span>
                <span>Detalhes</span>
            </a>
        </li>
        <li data-target="pane-3" id="3">
            <a>
                <span class="icon is-small"><i class="fa fa-users"></i></span>`

                content+=`
                <span>Participantes (${evento.aderentes.length})</span>
            </a>
        </li>`


//if (date has passed)
content += `
        <li data-target="pane-4" id="4">
            <a>
                <span class="icon is-small"><i class="fa fa-comments-o"></i></span>
                <span>Feedbacks</span>
            </a>
        </li>
      >`
//END IF-------------------
//LOL
content += `
    </ul>
</div>
</div>

<div class="columns is-centered">
<div class="column is-two-thirds has-background-white-ter is-centered tab-content">
    <div class="tab-pane" id="pane-1"  class="text">
        <figure>
            <img src="https://source.unsplash.com/0_xMuEbpFAQ/400x400" alt="💯" class="cent">
        </figure>
        <figure>
            <img src="https://source.unsplash.com/wPMvPMD9KBI/800x600" alt="💯" class="cent">
        </figure>
    </div>
    <div class="tab-pane" id="pane-3">
        <div class="columns">
            <div class="container">
                <div class="columns">
                `
let counter = 0
let lines = Math.ceil(evento.aderentes.length / 4)
if (counter < evento.aderentes.length && getUserById(evento.aderentes[counter]) != undefined) {
    content += `
        <div class="column">`
    //for line
    for (let i = 0; i < lines; i++) {
        if (counter < evento.aderentes.length && getUserById(evento.aderentes[counter]) != undefined) {
            content += `
                        <article class="media">
                        <div class="media-left">
                        <img src="${getUserById(evento.aderentes[counter]).foto}" class="media-object" style="width:60px">
                      </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>${getUserById(evento.aderentes[counter])._nome}</strong>
                                        <br> Nível: ${getUserById(evento.aderentes[counter]).nivel} 
                                    </p>
                                </div>
                            </div>
                        </article>
                       `
            counter++;
        }
    }
    content += ` </div>`
}
if (counter < evento.aderentes.length && getUserById(evento.aderentes[counter]) != undefined) {
    content += `
    <div class="column">`
    //for line
    for (let i = 0; i < lines; i++) {
        if (counter < evento.aderentes.length && getUserById(evento.aderentes[counter]) != undefined) {
            content += `
                        <article class="media">
                        <div class="media-left image is-64x64">
                        <img src="${getUserById(evento.aderentes[counter]).foto}" class="media-object is-rounded" style="width:60px">
                      </div>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                <strong>${getUserById(evento.aderentes[counter])._nome}</strong>
                                <br> Nível: ${getUserById(evento.aderentes[counter]).nivel} 
                            </p>
                                </div>
                            </div>
                        </article>
                        `
            counter++;
        }
    }
    content += ` </div>`
}
if (counter < evento.aderentes.length && getUserById(evento.aderentes[counter]) != undefined) {
    content += `
    <div class="column">`
    //for line
    for (let i = 0; i < lines; i++) {
        if (counter < evento.aderentes.length && getUserById(evento.aderentes[counter]) != undefined) {
            content += `
                        <article class="media">
                        <div class="media-left image is-64x64">
                        <img src="${getUserById(evento.aderentes[counter]).foto}" class="media-object is-rounded" style="width:60px">
                      </div>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                <strong>${getUserById(evento.aderentes[counter])._nome}</strong>
                                <br> Nível: ${getUserById(evento.aderentes[counter]).nivel} 
                            </p>
                                </div>
                            </div>
                            </article>
                            `
            counter++;
        }
    }
    content += ` </div>`
}
if (counter <= evento.aderentes.length && getUserById(evento.aderentes[counter]) != undefined) {
    content += `
    <div class="column">`
    //for line
    for (let i = 0; i < lines; i++) {
        if (counter < evento.aderentes.length && getUserById(evento.aderentes[counter]) != undefined) {
            content += `
                        <article class="media">
                        <div class="media-left image is-64x64">
                        <img src="${getUserById(evento.aderentes[counter]).foto}" class="media-object is-rounded" style="width:60px">
                      </div>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                <strong>${getUserById(evento.aderentes[counter])._nome}</strong>
                                <br> Nível: ${getUserById(evento.aderentes[counter]).nivel} 
                            </p>
                                </div>
                            </div>
                        </article>
                        `
            counter++;
        }
    }
    content += ` </div>`
}

content += `
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane" id="pane-4">
        <div class="columns is-centered">
            <div class="column is-fullwidth">
            <section class="container">
            <div class="columns">`
            // content+=`
            //     <div class="column is-1">`
// content += `<aside class="menu">
// 						<p class="menu-label">
// 							Tags
// 						</p>
// 						<ul class="menu-list">
// 							<li><span class="tag is-primary is-medium ">Dashboard</span></li>
// 							<li><span class="tag is-link is-medium ">Customers</span></li>
// 						</ul>
// 					</aside>
//                 </div>` 
                
                content+=`
                <div class="column is-fullwidth">
                    <div class="box content" id="yourDiv">`
                    if (idUserLogged != null) {
    content += `             <br>   
<div class="field">
<label id="comentar" class="label">Comentário</label>
<div class="control">
    <textarea class="textarea is-small"></textarea>
</div>
</div>
<div class="control">
<button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium">Comentar</button>
</div>`
}
//foreach comment
for (let i in comentarios) {
    if (comentarios[i].idEvento == evento.id && getUserById(comentarios[i].idUser) != undefined) {

        content += `
						<article class="post">
							<h4>${comentarios[i].comentario}</h4>
							<div class="media">
								<div class="media-left">
									<p class="image is-32x32">
										<img src="${getUserById(comentarios[i].idUser).foto}">
									</p>
								</div>
								<div class="media-content">
									<div class="content">
										<p>
											<a href="#">${getUserById(comentarios[i].idUser)._nome}</a> ${comentarios[i].timestamp} &nbsp;
                                            `
        for (j in evento.aderentes) {
            if (comentarios[i].idUser == evento.aderentes[j]) {
                content += `<span class="tag"><i class="fas fa-check">&nbsp;Participou</i></span>`
            }
        }
        content += `
										</p>
									</div>
                                </div>`
        if (comentarios[i].idUser == idUserLogged) {
            content += `
								<div class="media-right">
									<span class="has-text-grey-light"><i class="fa fa-trash" onclick="deleteComentario(${comentarios[i].idComentario})"></i></span>
                                </div>`}
        content += `
							</div>
                        </article>`
    }
}

content += `
					</div>
				</div>
			</div>
		</section>
            </div>
        </div>
    </div>
  
    <div class="tab-pane is-active" id="pane-2">

            <div class=" columns container is-inline" class="text" style="text-align:center;">`
            content+=`
            <div class="column is-centered" >
            <h1 class="is-inline text"><i class="fas fa-calendar-day is-inline"></i>   Dia ${evento.data} </h1>

            <p class="text">${evento.descricao}</p>

            <h1>Agenda</h1>
            <p>${evento.agenda}</p>
           
            <h1>Localização</h1>
            <!--<div id="map">
            </div>   -->    
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12013.740837715855!2d-8.6788358!3d41.1686739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88f6f84b4820910c!2sParque%20da%20Cidade%20do%20Porto!5e0!3m2!1spt-PT!2spt!4v1592660616957!5m2!1spt-PT!2spt" width="750" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        <h1 style= "padding-top:20px">Inscreve-te Aqui</h1>
        </div>`
if (idUserLogged != null) {
    content += `
        <div class="container has-text-centered" id="inscricao">
				<div class="columns is-8 is-variable ">
					<div class="column has-text-left">
						<div class="field">
							<label class="label">Porque é que te queres juntar a nós?</label>
							<div class="control">
								<textarea id="pedidoDescricao" class="textarea is-medium" required></textarea>
							</div>
						</div>
						<div class="control">
							<button onclick="adicionaPedido()"type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium">Submeter inscrição</button>
						</div>
					</div>
				</div>
			</div>
        </div>
        `} 
        //if user ja esta inscrito
        else {
    content += `<h4>Inicie sessão para se inscrever</h4> </div>`
}
content += `</div>
    </div>
</div>
</div>
`;

// Append newyly created card element to the container
container.innerHTML += content;


function adicionaPedido(){
    // id evento, idUser, descrição, estado(pendente,aceite, recusada)
   let descricao = document.getElementById("pedidoDescricao").value
   let idEvento= evento.id
   let idUser= sessionStorage.getItem("loggedUser")
   let estado ="pendente"
   newRequest(descricao, idUser, idEvento, estado)
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