const container = document.getElementById('tableBodyCategory');

let content = ``
let categorias1 = getAllCategories()

for (let i in categorias1) {
    content += `<tr>
<th>${categorias1[i].idCategoria}</th>
<td>${categorias1[i].titulo}</td>

<td onclick="deleteCategory(${categorias1[i].idCategoria})"><i class="fa fa-trash column is-centered" aria-hidden="true"></i></td>
</tr>
`}
container.innerHTML = content;

var input = document.getElementById("searchCategory");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        filterByID(input.value)
        // Trigger the button element with a click
        //document.getElementById("myBtn").click();
    }
});
function addNewCategory(){
    var title = document.getElementById("titleNew");
   
addCategory(title.value)
}