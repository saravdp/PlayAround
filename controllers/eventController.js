function getEventById(idEvent) {
    let result = "";
    for (let i in getAllEvents()) {
        if (getAllEvents()[i].id == idEvent) {
            result = getAllEvents()[i]
        }
    }
    return result
}
//get eventsbyUser
function deleteEvento(idEv) {
    if (confirm("Deseja mesmo apagar o evento?")) {
        deleteEvent(idEv)
    }
}


function filterEventByID(name) {
    let events1
    if (name.trim() == "") {
        events1 = getAllEvents()
    }
    else events1 = getAllEvents().filter(activity => activity.titulo == name)


    let content = ``
    for (let i in events1) {
        content += `<tr>
<th>${eventos1[i].id}</th>
<td>${eventos1[i].titulo}</td>
<td>${getCategoryById(eventos1[i].categoria).titulo}</td>
<td>${eventos1[i].data}</td>
<td>${getUserById(eventos1[i].anfitriao).email}</td>
<td onclick="deleteEvento(${eventos1[i].id})"><i class="fa fa-trash column is-centered" aria-hidden="true"></i></td>
</tr>
`}
    container.innerHTML = content;
}

//Eventos em que o user participa
function getEventsFromUser(userId) {
    let userEvents = []
    for (let i in getAllEvents()) {
        let arrayEventParticipants = getAllEvents()[i].aderentes
        for (j in arrayEventParticipants) {
            if (arrayEventParticipants[j] == userId) {
                userEvents.push(getAllEvents()[i].id)
            }
        }
    }
    return userEvents
}
//Eventos que o user criou
function getUserEvents(userId) {
    let userEvents = []
    for (let i in getAllEvents()) {

        if (getAllEvents()[i].anfitriao == userId) {

            userEvents.push(getAllEvents()[i].id)
        }
    }
    return userEvents
}
function addNewEvent(title, image, category, date, location1, description, agenda) {

    newEvent(title, image, category, date, location1, description, agenda)
}
function filterUserEventsByName(name) {

    let eventsIds = getUserEvents(sessionStorage.getItem("loggedUser"))
    if (name.trim() == "") {
        eventsIds = getUserEvents(sessionStorage.getItem("loggedUser"))
    }
    else {
        let filtered = []
        //eventsIds.filter(user => {getEventById(user).titulo == name})
        //eventsIds=[]
        for (let i in eventsIds) {
            if (getEventById(eventsIds[i]).titulo == name) {
                filtered.push(eventsIds[i])
            }
        }
        eventsIds = filtered

    }
    let content = ``
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
        <a onclick="deleteMedal(${events.id})" class='card-footer-item'>Apagar</a>
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
function updateEvent(click, titulo, anfitriao, imagem, categoriesList, data, coordenadasLat, agenda, descricao) {
    updateObjectEvent(click, titulo, anfitriao, imagem, categoriesList, data, coordenadasLat, coordenadasLat, agenda, descricao)
}
function filterEventByNameInEventList(name) {

    let filtered = getAllEvents()
    if (name.trim() == "") {

        filtered = getAllEvents()
    }
    else {
        let newfil = []
        //eventsIds.filter(user => {getEventById(user).titulo == name})
        //eventsIds=[]
        for (let i in filtered) {
            if (filtered[i].titulo == name) {
                newfil.push(filtered[i])
            }
        }
        filtered = newfil
    }
    updateListEvents(filtered)
}

function updateListEvents(filtered) {
    const numofRows = Math.ceil(filtered.length / 3);
    const container = document.getElementById('allEvents');
    let content = ``
    let cont = 0;


    for (let i = 0; i <= numofRows; i++) {

        if (cont < filtered.length && filtered[cont] != undefined) {
            content += ` 
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
    }
    container.innerHTML = content;

}
function filterEventByCategoryInEventList(name) {
    let filtered = getAllEvents()

    let newfil = []
    //eventsIds.filter(user => {getEventById(user).titulo == name})
    //eventsIds=[]
    for (let j in name) {
        for (let i in filtered) {
            if (filtered[i].categoria == name[j]) {
                newfil.push(filtered[i])
            }
        }
    }
    filtered = newfil
    updateListEvents(filtered)
}
//Eventos em que o user participa
function countEventsFromUser(userId) {
    let userEvents = 0
    for (let i in getAllEvents()) {
        let arrayEventParticipants = getAllEvents()[i].aderentes
        for (j in arrayEventParticipants) {
            if (arrayEventParticipants[j] == userId) {
                userEvents++
            }
        }
    }
    return userEvents
}