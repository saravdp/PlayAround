class Categoria {
  constructor(idCategoria, titulo) {
    // super(id, titulo, anfitriao, imagem, categoria, data, hora, descricao, coordenadasLat,coordenadasLng, aderentes, agenda);
    this.idCategoria = idCategoria;
    this.titulo = titulo

  }
}
const cat = [
  new Categoria(0, "cat1"),
  new Categoria(1, "cat2"),
  new Categoria(2, "cat3")
]
let categorias = [];
for (i in cat) {
  categorias.push(cat[i])
}

if (localStorage.getItem("Categoria") != null && typeof localStorage.getItem("Categoria") !== null) {

  categorias = localStorage.getItem("Categoria");
  try {
    categorias = JSON.parse(JSON.stringify(categorias))

  } catch (e) {
    // You can read e for more info
    // Let's assume the error is that we already have parsed the payload
    // So just return that
    categorias = localStorage.getItem("Categoria");
  }
}
else {
  localStorage.setItem("Categoria", JSON.stringify(categorias));
}




//delete comentario
function deleteCategoria(idCategory) {
  for (let i in JSON.parse(categorias)) {
    if (JSON.parse(categorias)[i].idCategoria == idCategory) {
      let newCom = []

      for (let j in JSON.parse(categorias)) {
        if (j != i) {
          newCom.push(JSON.parse(categorias)[j])
        }
      }

      categorias = newCom
      localStorage.setItem("Categoria", JSON.stringify(newCom));
      location.reload()
    }
  }
  //location.reload()
}
function getAllCategories() {
  return JSON.parse(categorias)
}
function getlastId() {
  let allCategories = JSON.parse(localStorage.getItem("Categoria"))
  let lastId = JSON.stringify(allCategories[allCategories.length - 1].idCategoria)
  return lastId
}
function newCategory(title) {
  let newCom = []
  for (let i in JSON.parse(categorias)) {

    newCom.push(JSON.parse(categorias)[i])
  }

  newCom.push(new Categoria(parseInt(getlastId())+1, title))

 localStorage.setItem("Categoria", JSON.stringify(newCom));    
  location.reload()

}