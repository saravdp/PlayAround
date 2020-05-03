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
const comentarios=[
new Comentario(0, 0, 0, "Este é um comentário", "",false),
new Comentario(1, 0, 0, "Este é um comentário", "",false),
new Comentario(2, 0, 1, "Este é um comentário", "",false)
]
// alert(JSON.stringify(comentarios))
//delete comentario
function deleteComentario(idComentario){
  if(confirm("Deseja mesmo apagar o comentário?")){
    for (let i in comentarios){
      if(comentarios[i].idComentario == idComentario){
        comentarios.splice(i, 1);
        alert(JSON.stringify(comentarios))
      }
    }
  }
}