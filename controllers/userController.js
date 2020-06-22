function getUserById(idUser) {
    let value = null
    for (let i = 0; i < getAllUsers().length; i++) {

        if (getAllUsers()[i]._id == idUser) {

            value = getAllUsers()[i]
        }
    }
    if (value == null) {
        return "Utilizador não encontrado"

    }
    else {
        return value
    }
}
function filterByID(email) {

    let users = getAllUsers()
    if (email.trim() == "") {
        users = getAllUsers()
    }
    else users = getAllUsers().filter(user => user.email == email)
    let content = ``
    for (let i in users) {

        content += `<tr>
        <th>${users[i]._id}</th>
        <td>${users[i]._nome}</td>
        <td>${users[i].email}</td>
        <td>${users[i].tipoUser}</td>
        <td>${users[i].tipoUser}</td>
        <td>${users[i].nivel}</td>
        <td><a href='#' onclick="loadModalContent(${users[i]._id})"id='edit-preferences'><i class="fa fa-pencil-square-o column is-centered" aria-hidden="true"></i>
        </a></td>
        <td onclick="deleteUser(${users[i]._id})"><i class="fa fa-trash column is-centered" aria-hidden="true"></i></td>
        </tr>
    `}
    container.innerHTML = content;
}



function deleteUser(idUser) {
    if (confirm("Deseja mesmo apagar o utilizador?")) {
        deleteUsers(idUser)
    }
}
function updateUser(click, newName, newEmail, newPassword, newFoto, newUserType) {

    updateObjectUser(click, newName, newEmail, newPassword, newFoto, newUserType)
}
function getUserLevel(events) {

    return Math.floor(events / 5)
}
function getUserLevelToNextLevel(events) {

    let result = Math.ceil(events / 5) - (events / 5)
    return result * 100
}

function sessionLogout() {
if(getUserById(sessionStorage.getItem("loggedUser"))=="admin"){
    window.location.replace('/')
}else    window.location.replace('/')
    // window.location.assign('login.html')
    // window.location.href = 'login.html'
    // document.location.href = 'login.html'
    sessionStorage.removeItem("loggedUser")

}