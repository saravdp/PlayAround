const container = document.getElementById('tableBodyUser');


let content = ``
let utilizadores = getAllUsers()

for (let i in utilizadores) {
    content += `<tr>
<th>${utilizadores[i]._id}</th>
<td>${utilizadores[i]._nome}</td>
<td>${utilizadores[i].email}</td>
<td>${utilizadores[i].tipoUser}</td>
<td>${utilizadores[i].tipoUser}</td>
<td>${utilizadores[i].nivel}</td>
 
<td onclick="fillEditForm(${utilizadores[i]._id})" href='#' data-target="#edit-preferences-modal${utilizadores[i]._id}" id='edit-preferences'><i class="fa fa-pencil-square-o column is-centered" aria-hidden="true"></i></td>

<td onclick="deleteUser(${utilizadores[i]._id})"><i class="fa fa-trash column is-centered" aria-hidden="true"></i></td>
</tr>
`}
container.innerHTML = content;

var input = document.getElementById("searchUser");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        filterByID(input.value)
        // Trigger the button element with a click
       // document.getElementById("myBtn").click();
    }
});
// function fillEditForm(){
//     let userLogged= sessionStorage.getItem('loggedUser')
//     let userInfo= getUserById(userLogged)
//     alert(userInfo)
//     const container = document.getElementById('tableBodyUser');
//     document.getElementById("loggedName").value = userInfo._nome
// }
function fillEditForm(click) {

    //let userLogged= sessionStorage.getItem('loggedUser')
    let userInfo = getUserById(click)

    let content1 = `  <div class='modal' id='edit-preferences-modal${click}'>
<div class='modal-background'></div>

    <div class='modal-card'>
                            <header class='modal-card-head'>
                                <p class='modal-card-title'>Editar dados</p>
                                <button class='delete'></button>
                            </header>
                            <section class='modal-card-body'>
                                <label class='label'>Nome</label>
                                <p class='control'>
                                    <input class='input' id="name${userInfo._id}" value="${userInfo._nome}" type='text'>
                                </p>
                                <label class='label'>Password</label>
                                <p class='control'>
                                    <input class='input'  id="password${userInfo._id}" value='${userInfo.password}' type='password'>
                                </p>
                                <label class='label'>Email</label>
                                <p class='control has-icon has-icon-right'>
                                    <input class='input'  id="email${userInfo._id}" type='email' value='${userInfo.email}'>
                                </p>
                                <label class='label'>Imagem de perfil</label>
                                <div class="file has-name is-fullwidth">
                                    <label class="file-label">
                                        <input class="file-input" id="foto${userInfo._id}" value="${userInfo.foto}" type="file" name="resume">
                                        <span class="file-cta">
                                            <span class="file-icon">
                                                <i class="fa fa-upload"></i>
                                            </span>
                                            <span class="file-label">
                                                Selecione uma imagem de perfil...
                                            </span>
                                        </span>
                                        <span class="file-name">
                                            ${document.getElementsByClassName('file-input').value}
                                        </span>
                                    </label>
                                </div>
                                <div class='control'>
                                        <label class='label'>Tipo de utilizador</label>
                                    
                                        <span class='select' id="userType" >
                                            <select id="userType${userInfo._id}">`
    if (userInfo.tipoUser == "admin") {
        content1 += `
                                                <option selected value="admin">Administrador</option>
                                                <option value="user">Utilizador</option>`
    } else {
        content1 +=`<option value="admin">Administrador</option>
        <option selected value="user">Utilizador</option>`
    } content1 += `
                                            </select>
                                    </span>
                                </div>
                            </section>
                            <footer class='modal-card-foot'>
                                <a class='button is-danger modal-save'>Save changes</a>
                                <a onlick ="removeActive(${userInfo._id})"class='button modal-cancel'>Cancel</a>
                            </footer>
                        </div></div>`
    document.getElementById('modal-div').innerHTML += content1
    document.getElementById("edit-preferences-modal" + click).className += " is-active";
    //document.getElementsByClassName(".modal-card-head button.delete, .modal-save, .modal-cancel").addEventListener("click", removeActive(click));
    const onSave = document.querySelectorAll('.modal-save');
    onSave.forEach(el => el.addEventListener('click', event => {
        let newName;
        if(document.getElementById('name'+userInfo._id).value!= userInfo._nome && document.getElementById('name'+userInfo._id).value.trim !=" "){
            newName=document.getElementById('name'+userInfo._id).value
        }else {
            newName=userInfo._nome
        }

        let newPassword;
        if(document.getElementById('password'+userInfo._id).value!= userInfo._nome && document.getElementById('password'+userInfo._id).value.trim !=" "){
            newPassword=document.getElementById('password'+userInfo._id).value
        }else {
            newPassword=userInfo.password
        }
        let newEmail;
        if(document.getElementById('email'+userInfo._id).value!= userInfo._nome && document.getElementById('email'+userInfo._id).value.trim !=" "){
            newEmail=document.getElementById('email'+userInfo._id).value
        }else {
            newEmail=userInfo.email
        } 
        let newFoto;
        // if(document.getElementById('foto'+userInfo._id).value!= userInfo._nome && document.getElementById('foto'+userInfo._id).value.trim !=" "){
        //     let newFoto;
        //     newFoto=document.getElementById('foto'+userInfo._id).value
        // //}else {
            newFoto=userInfo.foto
        //} 
        let newUserType;
        if(document.getElementById('userType'+userInfo._id).value!= userInfo._nome ){
            newUserType=document.getElementById('userType'+userInfo._id).value
        }else {
            newUserType=userInfo.tipoUser
        }
        //alert(newName+ newEmail+ newPassword+ newFoto +newUserType)
        updateUser(click, newName, newEmail, newPassword, newFoto, newUserType)

    }));
    
    
    const divs = document.querySelectorAll('.modal-card-head button.delete, .modal-save, .modal-cancel');

    divs.forEach(el => el.addEventListener('click', event => {
        removeActive(click)
    }));
 

   

}

function removeActive(click) {

    document.getElementById("edit-preferences-modal" + click).classList.remove("is-active")

}