const container = document.getElementById('tableBodyEvent');

let content = ``
let eventos1 = getAllEvents()

for (let i in eventos1) {

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


var input = document.getElementById("searchEvent");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        filterEventByID(input.value)
        // Trigger the button element with a click
        //document.getElementById("myBtn").click();
    }
});
function addNewCategory(){
    var title = document.getElementById("titleNew");
   
addCategory(title.value)
}