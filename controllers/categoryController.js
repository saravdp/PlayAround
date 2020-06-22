function deleteCategory(idComentario){
    if(confirm("Deseja mesmo apagar a categoria?")){
        deleteCategoria(idComentario)
    }
  }
function filters(){
    
}
function filterByID(name) {
    let categories  
    if(name.trim()==""){
        categories = getAllCategories()
}
    else categories = getAllCategories().filter(activity =>activity.titulo == name)


let content = ``
for (let i in categories){
content += `<tr>
<th>${categories[i].idCategoria}</th>
<td>${categories[i].titulo}</td>

<td onclick="deleteCategory(${categories[i]._id})"><i class="fa fa-trash column is-centered" aria-hidden="true"></i></td>
</tr>
`}
container.innerHTML = content;
  }
function addCategory(title){
    newCategory(title)
}
function getCategoryById(id){
    
    return getAllCategories().find(activity =>activity.idCategoria == id)
}