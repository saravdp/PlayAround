function deleteComent(idComentario){
    if(confirm("Deseja mesmo apagar o comentário?")){
        deleteComentario(idComentario)
    }
  }
function filters(){
    
}
function filterByID(name) {
let comments =  getAllComments().filter(activity =>activity.idComentario == name)
let content = ``
for (let i in comments){
content += `<tr>
<th>${comments[i].idComentario}</th>
<td>${getEventById(comments[i].idEvento).titulo}</td>
<td>${getUserById(comments[i].idUser).nome}</td>
<td>${comments[i].comentario}</td>
<td onclick="deleteComent(${comments[i].idComentario})"><i class="fa fa-trash column is-centered" aria-hidden="true"></i></td>
</tr>
`}
container.innerHTML = content;
  }
