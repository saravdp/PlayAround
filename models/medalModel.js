class Medalha {
    constructor(id, titulo, imagem, numofEvents) {
      // super(id, titulo, anfitriao, imagem, categoria, data, hora, descricao, coordenadasLat,coordenadasLng, aderentes, agenda);
      this.id = id;
      this.titulo = titulo
        this.imagem = imagem
        this.numofEvents = numofEvents
    }
  }
  const medal = [
    new Medalha(0, "Iniciante","https://images-na.ssl-images-amazon.com/images/I/91SgiHf4P4L._AC_SX466_.jpg",1),
    new Medalha(1, "Elementar","https://www.trophymaster.co.uk/ekmps/shops/westbridgford/images/aura-well-done-gold-medal-50mm-2-620695-dv-p.jpg",5),
    new Medalha(2, "Intermédio","https://images-na.ssl-images-amazon.com/images/I/91SgiHf4P4L._AC_SX466_.jpg",10),
    new Medalha(3, "Avançado","https://www.trophymaster.co.uk/ekmps/shops/westbridgford/images/aura-well-done-gold-medal-50mm-2-620695-dv-p.jpg",15)
  ]
  let medalhas = [];
  for (i in medal) {
    medalhas.push(medal[i])
  }
  
  if (localStorage.getItem("Medalha") != null && typeof localStorage.getItem("Medalha") !== null) {
  
    medalhas = localStorage.getItem("Medalha");
    try {
      medalhas = JSON.parse(JSON.stringify(medalhas))
  
    } catch (e) {
      // You can read e for more info
      // Let's assume the error is that we already have parsed the payload
      // So just return that
      medalhas = localStorage.getItem("Medalha");
    }
  }
  else {
    localStorage.setItem("Medalha", JSON.stringify(medalhas));
  }
  
  
  
  
  //delete comentario
  function deleteMedalha(idMedal) {
    for (let i in JSON.parse(medalhas)) {
      if (JSON.parse(medalhas)[i].id == idMedal) {
        let newCom = []
  
        for (let j in JSON.parse(medalhas)) {
          if (j != i) {
            newCom.push(JSON.parse(medalhas)[j])
          }
        }
  
        medalhas = newCom
        localStorage.setItem("Medalha", JSON.stringify(newCom));
        location.reload()
      }
    }
    //location.reload()
  }
  function getAllMedals() {
    return JSON.parse(medalhas)
  }
  function getlastId() {
    let allCategories = JSON.parse(localStorage.getItem("Medalha"))
    let lastId = JSON.stringify(allCategories[allCategories.length - 1].id)
    return lastId
  }
  function  newMedal(title, num, file) {
    let newCom = []
    for (let i in JSON.parse(medalhas)) {
  
      newCom.push(JSON.parse(medalhas)[i])
    }
  
    newCom.push(new Medalha(parseInt(getlastId())+1, title, file, num))
  localStorage.setItem("Medalha", JSON.stringify(newCom));    
    location.reload()
  
  }
  function updateObjectMedal(click, newName, newFoto, newNumOfEvents) {

    for (i in JSON.parse(medalhas)) {
        if (JSON.parse(medalhas)[i].id == click) {

            let newCom = []

            for (let j in JSON.parse(medalhas)) {
                if (j == i) {
                    newCom.push(new Medalha(click, newName, newFoto, newNumOfEvents))
                }
                else {
                    newCom.push(JSON.parse(medalhas)[j])
                }
            }

            localStorage.setItem("Medalha", JSON.stringify(newCom));
            location.reload()
        }
    }
}