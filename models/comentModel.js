class Comentario {
    constructor(idComentario, idEvento, idUser, comentario, timestamp, participante){
        // super(id, titulo, anfitriao, imagem, categoria, data, hora, descricao, coordenadasLat,coordenadasLng, aderentes, agenda);
        this.idComentario = idComentario;
        this.idEvento = idEvento
        this.idUser = idUser;
        this.comentario = comentario
        this.timestamp = timestamp
        this.participante = participante
    }
  }
const coment= [
  new Comentario(0, 0, 0, "Gostei muito deste evento", "",false),
  new Comentario(1, 1, 0, "Como foi a recepção?", "",false),
  new Comentario(2, 1, 0, "A recepção foi bastante agradável", "",false),
  new Comentario(2, 2, 1, "Foi pena as condições meteorológicas", "",false)
  ]
  let comentarios= [];
  for (i in coment) {
    comentarios.push(coment[i]) 
  }

if ( localStorage.getItem("comentario")!=null && typeof  localStorage.getItem("comentario")!==null) {
  
  comentarios=  localStorage.getItem("comentario");
  try {
    comentarios = JSON.parse(JSON.stringify(comentarios))
  
  } catch (e) {
    // You can read e for more info
    // Let's assume the error is that we already have parsed the payload
    // So just return that
    comentarios = localStorage.getItem("comentario");
  }
}
else{
  localStorage.setItem("comentario", JSON.stringify(comentarios));
}




//delete comentario
function deleteComentario(idComent){
    for (let i in JSON.parse(comentarios)){
      if( JSON.parse(comentarios)[i].idComentario == idComent){
        let newCom =[]

        for (let j in JSON.parse(comentarios)){
          if(j != i){
            newCom.push(JSON.parse(comentarios)[j])
          }
        }

        comentarios= newCom
        localStorage.setItem("comentario", JSON.stringify(newCom));    
        location.reload() 
        //alert(localStorage.getItem('comentarios'))
      }
    }
    //location.reload()
}
function getAllComments(){
    return JSON.parse(comentarios)
}