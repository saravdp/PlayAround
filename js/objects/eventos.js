
class Eventos {
    constructor(id, titulo, anfitriao, imagem, categoria, data, descricao, coordenadasLat,coordenadasLng, aderentes, agenda) {
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
        this.agenda= agenda
    }
}
class Categoria{
  constructor(idCategoria, categoria){
    this.idCategoria=idCategoria
    this.categoria=categoria
  }
}
class Prestacao extends Eventos {
  constructor(id, idUser, prestacaoTempo) {
      this.id = id;
      this.idUser = idUser;
      this.prestacao = prestacaoTempo
  }
}

const eventos = [ 
    new Eventos(0,"Jogo de xadrez", 0, ["../../images/sports.jpeg", "../../images/yoga.jpg"], "xadrez", "10/21/2021 08:00:00", 
      "Este é um evento", "-25.344", "131.036", [2, 3,0], "12:00 Brunch"), 
    new Eventos(1,"Futebol", 1, ["../../images/sports.jpeg","../../images/yoga.jpg" ], "futebol", "10/21/2020 08:00:00",
      "Este é um evento", "-25.344", "131.036", [1, 0, 1, 0, 1], "12:00 Brunch"),
    new Eventos(2,"Jogo", 0, ["../../images/sports.jpeg", "../../images/yoga.jpg"], "futebol", "10/21/2020 08:00:00",
      "Este é um evento", "-25.344", "131.036", [1, 0, 1, 0, 1], "12:00 Brunch"),
    new Eventos(3,"Yoga", 0, [ "../../images/yoga.jpg","../../images/sports.jpeg"], "yoga", "10/21/2020 08:00:00",
      "Este é um evento", "-25.344", "131.036", [2, 3,0], "12:00 Brunch"), 
    new Eventos(4,"Tenis", 1, [ "../../images/sports.jpeg","../../images/yoga.jpg"], "tenis", "04/19/2020 08:00:00",
      "Este é um evento", "-25.344", "131.036", [1, 0, 1, 0, 1], "12:00 Brunch"),

]
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