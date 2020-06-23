
class Eventos {
  constructor(id, titulo, anfitriao, imagem, categoria, data, descricao, coordenadasLat, coordenadasLng, aderentes, agenda) {
    this.id = id;
    this.titulo = titulo;
    this.anfitriao = anfitriao;
    this.imagem = imagem;
    this.categoria = categoria;
    this.data = data;
    this.descricao = descricao;
    this.coordenadasLat = coordenadasLat;
    this.coordenadasLng = coordenadasLng;
    this.aderentes = aderentes;
    this.agenda = agenda
  }
}

class Prestacao extends Eventos {
  constructor(id, idUser, prestacaoTempo) {
    this.id = id;
    this.idUser = idUser;
    this.prestacao = prestacaoTempo
  }
}

const event1 = [
  new Eventos(0, "Torneio de Tenis", 0, "https://www.medis.pt/media/1910/a-hora-certa-para-praticar-desporto-medis.jpg?anchor=center&mode=crop&width=1440&height=895&rnd=131719921750000000", 1, "04/19/2020 08:00:00",
  "Este é um evento", "-25.344", "131.036", [1, 3], "12:00 Brunch"),
  new Eventos(1, "Jogo de futebol", 2, "https://linktoleaders.com/wp-content/uploads/2019/10/desporto.jpg", 2, "10/21/2021 08:00:00", "Este é um evento", "-25.344", "131.036", [2, 3], "12:00 Definição de equipas. \n 12:30 Inicio da partida"),
  new Eventos(2, "Sessão de Yoga", 0, "../images/yoga.jpg", 0, "10/21/2020 08:00:00",
  "Este é um evento", "-25.344", "131.036", [2, 3], "12:00 Brunch"),
  new Eventos(3, "Jogo de Tenis", 3, "https://linktoleaders.com/wp-content/uploads/2019/10/desporto.jpg", 1, "10/21/2020 08:00:00",
    "Este é um evento", "-25.344", "131.036", [1], "12:00 Inicio"),

 
  new Eventos(4, "Partida de futebol", 1, "https://linktoleaders.com/wp-content/uploads/2019/10/desporto.jpg", 2, "10/21/2020 08:00:00",
    "Este é um evento", "-25.344", "131.036", [1, 2], "12:00 Brunch"),


]


let eventos = [];
for (i in event1) {
  eventos.push(event1[i])
}

if (localStorage.getItem("Eventos") != null && typeof localStorage.getItem("Eventos") !== null) {

  eventos = localStorage.getItem("Eventos");
  try {
    eventos = JSON.parse(JSON.stringify(eventos))

  } catch (e) {
    // You can read e for more info
    // Let's assume the error is that we already have parsed the payload
    // So just return that
    eventos = localStorage.getItem("Eventos");
  }
}
else {
  localStorage.setItem("Eventos", JSON.stringify(eventos));
}




// const eventosAderentes = [{ id: 0, edicao:0 }]
// const eventLocal = localStorage.getItem("eventos")
// if (typeof eventLocal != null && eventLocal != "") {
//     for (event in eventLocal) {
//         eventos.push(eventLocal[event])
//     }
// }
function getEvento(id) {
  for (i = 0; i < eventos.length; i++) {
    if (typeof eventos[i] != undefined && eventos[i] != "") {
      if (eventos[i].id == id) {
        return eventos[i]
      }
    }
  }
}
function getAllEvents() {
  return JSON.parse(eventos)
}

//delete comentario
function deleteEvent(idEvent) {
  for (let i in JSON.parse(eventos)) {
    if (JSON.parse(eventos)[i].id == idEvent) {
      let newCom = []

      for (let j in JSON.parse(eventos)) {
        if (j != i) {
          newCom.push(JSON.parse(eventos)[j])
        }
      }

      eventos = newCom
      localStorage.setItem("Eventos", JSON.stringify(newCom));
      location.reload()
      //alert(localStorage.getItem('comentarios'))
    }
  }
  //location.reload()
}
function getEventlastId() {
  let allEvents = JSON.parse(localStorage.getItem("Eventos"))
  let lastId = JSON.stringify(allEvents[allEvents.length - 1].id)
  return lastId
}
function newEvent(title, image, category, date, location1, description, agenda) {
  let newCom = []
  for (let i in JSON.parse(eventos)) {

    newCom.push(JSON.parse(eventos)[i])
  }
  //id, titulo, anfitriao, imagem, categoria, data, descricao, coordenadasLat,coordenadasLng, aderentes, agenda
  newCom.push(new Eventos(parseInt(getEventlastId()) + 1, title, sessionStorage.getItem("userLogged"), image, category, date, description, location1, location1, [], agenda))

  localStorage.setItem("Eventos", JSON.stringify(newCom));
  location.reload()

}
function updateObjectEvent(click, titulo, anfitriao, imagem, categoriesList, data, coordenadasLat, coordenadasLat, agenda, descricao) {
  for (i in JSON.parse(eventos)) {
    if (JSON.parse(eventos)[i].id == click) {

      let newCom = []

      for (let j in JSON.parse(eventos)) {
        if (j == i) {
          newCom.push(new Eventos(click, titulo, anfitriao, imagem, categoriesList, data, descricao, coordenadasLat, coordenadasLat, JSON.parse(eventos)[i].aderentes, agenda))

        }
        else {
          newCom.push(JSON.parse(eventos)[j])
        }
      }

      localStorage.setItem("Eventos", JSON.stringify(newCom));
      location.reload()
    }
  }
}
function updateEventParticipantes(click, titulo, anfitriao, imagem, categoriesList, data, coordenadasLat, agenda, descricao, aderentes) {
  for (i in JSON.parse(eventos)) {
    if (JSON.parse(eventos)[i].id == click) {

      let newCom = []

      for (let j in JSON.parse(eventos)) {
        if (j == i) {


          newCom.push(
            new Eventos(
              click,
              titulo,
              anfitriao,
              imagem,
              categoriesList,
              data,
              descricao,
              coordenadasLat,
              coordenadasLat,
              JSON.parse(aderentes),
              agenda))

        }
        else {
          newCom.push(JSON.parse(eventos)[j])
        }
      }
      localStorage.setItem("Eventos", JSON.stringify(newCom));
      return true
    }
  }
}
