const container = document.getElementById('tableBodyFed');




let content = ``
let comments = getAllComments()
for (let i in comments){
content += `<tr>
<th>${comments[i].idComentario}</th>
<td>${getEventById(comments[i].idEvento).titulo}</td>
<td>${getUserById(comments[i].idUser).email}</td>
<td>${comments[i].comentario}</td>
<td onclick="deleteComent(${comments[i].idComentario})"><i class="fa fa-trash column is-centered" aria-hidden="true"></i></td>
</tr>
`}
container.innerHTML += content;

var input = document.getElementById("searchFed");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    
    
    //TODO filterByID(input.value)


    // Trigger the button element with a click
   // document.getElementById("myBtn").click();
  }
});