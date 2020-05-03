
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
var idUserLogged = 1
var idEvento = getParameterByName('idEvent');

let evento = {}
for (i in eventos) {
    if (eventos[i].id == idEvento) {
        evento = eventos[i];
    }
}
let anfitriao = getUser(evento.anfitriao)
function getUser(id) {
    for (i = 0; i < users.length; i++) {
        if (typeof users[i] != undefined && users[i] != "") {
            if (users[i].id == id) {
                return users[i]
            }
        }
    }
}
document.getElementById('hello').innerHTML +=
    `
 .hero {
    background-image: url(${evento.imagem[0]});
    background: linear-gradient(rgba(69, 221, 252, 0.65), rgba(253, 148, 29, 0.65)), rgba(69, 221, 252, 0.55) url(${evento.imagem[0]}) no-repeat;
    background-position-y: 75%;
    background-attachment: fixed;
    background-size: cover;
    color: white;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    font-family: 'Poppins', sans-serif;
}
`;

function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}
function goBack() {
    window.history.back();
}
const container = document.getElementById('event');

let content = `
<div class="hero-body">
    <div class="container column is-half text" style="background-color: rgba(83,130,147, 0.5);">
        <h1 class="title">
            ${evento.titulo}
        </h1>
        <h2>Dia ${evento.data}</h2>
 `

content+=`
<div class="columns" >  
<div class="column is-inline">    
<div class="container" style="text-align:center; display: inline-block;">
        <span style="float:left;"><h2 class="subtitle"><a href="../Utilizador/perfil.html?idUser=${anfitriao.id}"style="color: white">${anfitriao.nome}</a>
        <figure class="image is-32x32" style="text-align:left; display: inline-block;">
        <img class="is-rounded" src="${anfitriao.foto}"></figure>
        </h2></span></div>`
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
                <span class="icon is-small"><i class="fa fa-users"></i></span>
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
        <li data-target="pane-5" id="5">
            <a>
                <span class="icon is-small"><i class="fa fa-trophy"></i></span>
                <span>Ranking</span>
            </a>
        </li>`
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
if (counter < evento.aderentes.length && getUser(evento.aderentes[counter]) != undefined) {
    content += `
        <div class="column">`
    //for line
    for (let i = 0; i < lines; i++) {
        if (counter < evento.aderentes.length && getUser(evento.aderentes[counter]) != undefined) {
            content += `
                        <article class="media">
                        <div class="media-left">
                        <img src="${getUser(evento.aderentes[counter]).foto}" class="media-object" style="width:60px">
                      </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>${getUser(evento.aderentes[counter]).nome}</strong>
                                        <br> Nível: ${getUser(evento.aderentes[counter]).nivel} 
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
if (counter < evento.aderentes.length && getUser(evento.aderentes[counter]) != undefined) {
    content += `
    <div class="column">`
    //for line
    for (let i = 0; i < lines; i++) {
        if (counter < evento.aderentes.length && getUser(evento.aderentes[counter]) != undefined) {
            content += `
                        <article class="media">
                        <div class="media-left image is-64x64">
                        <img src="${getUser(evento.aderentes[counter]).foto}" class="media-object is-rounded" style="width:60px">
                      </div>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                <strong>${getUser(evento.aderentes[counter]).nome}</strong>
                                <br> Nível: ${getUser(evento.aderentes[counter]).nivel} 
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
if (counter < evento.aderentes.length && getUser(evento.aderentes[counter]) != undefined) {
    content += `
    <div class="column">`
    //for line
    for (let i = 0; i < lines; i++) {
        if (counter < evento.aderentes.length && getUser(evento.aderentes[counter]) != undefined) {
            content += `
                        <article class="media">
                        <div class="media-left image is-64x64">
                        <img src="${getUser(evento.aderentes[counter]).foto}" class="media-object is-rounded" style="width:60px">
                      </div>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                <strong>${getUser(evento.aderentes[counter]).nome}</strong>
                                <br> Nível: ${getUser(evento.aderentes[counter]).nivel} 
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
if (counter <= evento.aderentes.length && getUser(evento.aderentes[counter]) != undefined) {
    content += `
    <div class="column">`
    //for line
    for (let i = 0; i < lines; i++) {
        if (counter <= evento.aderentes.length && getUser(evento.aderentes[counter]) != undefined) {
            content += `
                        <article class="media">
                        <div class="media-left image is-64x64">
                        <img src="${getUser(evento.aderentes[counter]).foto}" class="media-object is-rounded" style="width:60px">
                      </div>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                <strong>${getUser(evento.aderentes[counter]).nome}</strong>
                                <br> Nível: ${getUser(evento.aderentes[counter]).nivel} 
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
            <div class="column is-three-quarters">
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
    if (comentarios[i].idEvento == evento.id && getUser(comentarios[i].idUser) != undefined) {

        content += `
						<article class="post">
							<h4>${comentarios[i].comentario}</h4>
							<div class="media">
								<div class="media-left">
									<p class="image is-32x32">
										<img src="${getUser(comentarios[i].idUser).foto}">
									</p>
								</div>
								<div class="media-content">
									<div class="content">
										<p>
											<a href="#">${getUser(comentarios[i].idUser).nome}</a> ${comentarios[i].timestamp} &nbsp;
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
    <div class="tab-pane" id="pane-5">
        <div class="content">
            <div class="container">
                <div class= "columns is-mobile is-centered">
                    <div class="column is-narrow"> 
                        <div class="card" style="width: 15rem;">
                            <img class="card-img-top" src="../../images/winner1.png" alt="Card image cap">
                            <div class="card-body">
                                <article class="media">
                                    <div class="media-left image is-64x64">
                                        <img src="https://publicdomainvectors.org/photos/Female-Avatar-3.png" class="media-object is-rounded" style="width:60px">
                                    </div>
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                            <strong>J</strong>
                                            <br> Nível: 2
                                            </p>
                                        </div>
                                    </div>
                                </article>
  
                                <p class="card-text">Some quick example text </p>
   </div>
</div></div>
   </div>
   <div class= "columns is-mobile is-centered">
   <div class="column is-narrow" > 
   <div class="card" style="width: 15rem;">
   <img class="card-img-top" src="../../images/winner1.png" alt="Card image cap">
   <div class="card-body">
       <p class="card-text">Some quick example text to build on the card</p>
   </div>
</div></div>
   <div class="column is-narrow"> <div class="card" style="width: 15rem;">
   <img class="card-img-top" src="../../images/winner1.png" alt="Card image cap">
   <div class="card-body">
       <p class="card-text">Some quick example text to build on the </p>
   </div>
</div></div>
</div>
   </div>
   </div>
</div>
    <div class="tab-pane is-active" id="pane-2">
        <div class="content">
            <div class=" columns container is-inline" class="text" style="text-align:center;">`
            content+=`
            <div class="column is-centered" >
            <h3 class="is-inline text"><i class="fas fa-calendar-day is-inline"></i>   Dia ${evento.data} </h3>

            <p class="text">${evento.descricao}</p>

            <h2>Agenda</h2>
            <p>${evento.agenda}</p>
           
            <h3>Localização</h3>
            <div id="map"></div>       
        
        <h3 >Inscreve-te Aqui</h3>
        </div>`
if (idUserLogged != null) {
    content += `
        <div class="container has-text-centered" id="inscricao">
				<div class="columns is-8 is-variable ">
					<div class="column has-text-left">
						<div class="field">
							<label class="label">Porque é que te queres juntar a nós?</label>
							<div class="control">
								<textarea class="textarea is-medium"></textarea>
							</div>
						</div>
						<div class="control">
							<button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium">Submeter inscrição</button>
						</div>
					</div>
				</div>
			</div>
        </div>
        `} else {
    content += `<h4>Inicie sessão para se inscrever</h4> </div>`
}
content += `</div>
    </div>
</div>
</div>
`;

// Append newyly created card element to the container
container.innerHTML += content;


