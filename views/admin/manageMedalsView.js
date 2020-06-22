const container = document.getElementById('containerdiv');


let content = ``
let medals = getAllMedals()
let numberofLines = Math.ceil(getAllMedals().length / 3)
let cont = 0;
for (let j = 0; j <= numberofLines; j++) {
    content += `<div class='columns is-mobile'>`
    for (let i = 0; i < 3; i++) {


        if (cont < medals.length) {
            content += `<div class='column is-narrow is-4-tablet is-4-mobile'>
<div class='card'>
    <div class='card-image'>
        <figure class='image is-4by3'>
            <img alt='' src='${medals[cont].imagem}'>
        </figure>
    </div>
    <div class='card-content'>
        <div class='content'>
            <!--<span class='tag is-dark subtitle'>#1</span>-->
            <p>${medals[cont].titulo}</p>
        </div>
    </div>
    <footer class='card-footer'>
        <a onclick="fillEditForm(${medals[cont].id})" href='#' data-target="#edit-preferences-modal${medals[cont].id}"class='card-footer-item' href="GerirAtividade.html" id='edit-preferences'>Editar</a>
        <a onclick="deleteMedal(${medals[cont].id})" class='card-footer-item'>Apagar</a>
    </footer>
</div>
<br>
</div>
`}
        cont++;
    }
    content += `</div>`
}
container.innerHTML += content;

var input = document.getElementById("searchMedal");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        filterMedalByID(input.value)
        // Trigger the button element with a click
        //document.getElementById("myBtn").click();
    }
});



function fillEditForm(click) {

    //let userLogged= sessionStorage.getItem('loggedUser')
    let medalInfo = getMedalById(click)

    let content1 = `  <div class='modal' id='edit-preferences-modal${click}'>
<div class='modal-background'></div>

    <div class='modal-card'>
                            <header class='modal-card-head'>
                                <p class='modal-card-title'>Editar dados</p>
                                <button class='delete'></button>
                            </header>
                            <section class='modal-card-body'>
                                <label class='label'>Titulo</label>
                                <p class='control'>
                                    <input class='input' id="name${medalInfo.id}" value="${medalInfo.titulo}" type='text'>
                                </p>
                                <label class='label'>Número de eventos para a atribuição</label>
                                <p class='control'>
                                    <input class='input'  id="numOfEvents${medalInfo.id}" value='${medalInfo.numofEvents}' type='number'>
                                </p>
                                
                                <label class='label'>Imagem da nova medalha</label>
                            <p class='control'>
                                <input class='input' id="newFile${medalInfo.id}" value='${medalInfo.imagem}' placeholder='Insira uma imagem para a medalha' type='text'>
                            </p>
                            </section>
                            <footer class='modal-card-foot'>
                                <a class='button is-danger modal-save'>Save changes</a>
                                <a onlick ="removeActive(${medalInfo.id})"class='button modal-cancel'>Cancel</a>
                            </footer>
                        </div></div>`
    document.getElementById('modal-div').innerHTML += content1
    document.getElementById("edit-preferences-modal" + click).className += " is-active";
    //document.getElementsByClassName(".modal-card-head button.delete, .modal-save, .modal-cancel").addEventListener("click", removeActive(click));
    const onSave = document.querySelectorAll('.modal-save');
    onSave.forEach(el => el.addEventListener('click', event => {
        let newNumOfEvents ;
        if (document.getElementById('numOfEvents' + medalInfo.id).value != medalInfo.numofEvents && document.getElementById('numOfEvents' + medalInfo.id).value.trim != " ") {
            newNumOfEvents = document.getElementById('numOfEvents' + medalInfo.id).value
        } else {
            newNumOfEvents = medalInfo.numofEvents
        }
        let newName;
        if (document.getElementById('name' + medalInfo.id).value != medalInfo.titulo && document.getElementById('name' + medalInfo.id).value.trim != " ") {
            newName = document.getElementById('name' + medalInfo.id).value
        } else {
            newName = medalInfo.titulo
        }
        let newFoto;
        if(document.getElementById('newFile'+medalInfo.id).value!= medalInfo.imagem && document.getElementById('newFile'+medalInfo.id).value.trim !=" "){
      
            newFoto=document.getElementById('newFile'+medalInfo.id).value
        }else {
        newFoto = medalInfo.imagem
        } 

        updateMedal(click,newNumOfEvents, newName, newFoto)

    }));


    const divs = document.querySelectorAll('.modal-card-head button.delete, .modal-save, .modal-cancel');

    divs.forEach(el => el.addEventListener('click', event => {
        removeActive(click)
    }));




}

function removeActive(click) {

    document.getElementById("edit-preferences-modal" + click).classList.remove("is-active")

}
function addNewMedal(){
    var title = document.getElementById("newTitle").value;
    var num = document.getElementById("newNumOfEvents").value;
    var file = document.getElementById("newFile").value;

        addMedal(title, num, file)
}