class Pedido {
    constructor(id, descricao, idUser, idEvento, estado) {
        this.id = id;
        this.descricao = descricao
        this.idUser = idUser
        this.idEvento = idEvento
        this.estado = estado

    }
}
const req = [
    new Pedido(0, "pedido1", 3, 1, "pendente"),
    new Pedido(1, "pedido2", 1, 2, "pendente"),
    new Pedido(2, "pedido3", 2, 1, "pendente"),
    new Pedido(3, "pedido4", 3, 1, "pendente")
]
let pedidos = [];
for (i in req) {
    pedidos.push(req[i])
}

if (localStorage.getItem("Pedido") != null && typeof localStorage.getItem("Pedido") !== null) {

    pedidos = localStorage.getItem("Pedido");
    try {
        pedidos = JSON.parse(JSON.stringify(pedidos))

    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        pedidos = localStorage.getItem("Pedido");
    }
}
else {
    localStorage.setItem("Pedido", JSON.stringify(pedidos));
}

//delete reqario
function deleteRequest(idCategory) {
    for (let i in JSON.parse(pedidos)) {
        if (JSON.parse(pedidos)[i].id == idCategory) {
            let newCom = []

            for (let j in JSON.parse(pedidos)) {
                if (j != i) {
                    newCom.push(JSON.parse(pedidos)[j])
                }
            }

            pedidos = newCom
            localStorage.setItem("Pedido", JSON.stringify(newCom));
            location.reload()
        }
    }
    //location.reload()
}
function getAllRequests() {
    return JSON.parse(pedidos)
}
function getlastId() {
    let allrequests = JSON.parse(localStorage.getItem("Pedido"))
    alert(allrequests.length)
    let lastId = JSON.stringify(allrequests[allrequests.length - 1].id)
    return lastId
}
function addRequest(descricao, idUser, idEvento, estado) {
    let newCom = []
    alert(pedidos.length)
    for (let i in JSON.parse(pedidos)) {

        newCom.push(JSON.parse(pedidos)[i])
    }

    newCom.push(new Pedido(parseInt(getlastId()) + 1, descricao, idUser, idEvento, estado))

    localStorage.setItem("Pedido", JSON.stringify(newCom));
    alert("Adicionado!")
    location.reload()

}
function updateObjectRequest(click, response) {
    for (i in JSON.parse(pedidos)) {
        if (JSON.parse(pedidos)[i].id == click) {

            let newCom = []
            let estado;
            if (response == 'true') {
                estado = 'aceite'

                let newEvent = getEventById(JSON.parse(pedidos)[i].idEvento)
                let newParticipantes = []
                for (let i in newEvent.aderentes) {
                    newParticipantes.push(newEvent.aderentes[i])
                }
                newParticipantes.push(JSON.parse(pedidos)[i].idUser)
                //click, titulo, anfitriao, imagem, categoriesList, data, coordenadasLat, agenda, descricao
                updateEventParticipantes(JSON.parse(pedidos)[i].idEvento, newEvent.titulo, newEvent.anfitriao, newEvent.imagem, newEvent.categoria, newEvent.data, newEvent.coordenadasLat, newEvent.agenda, newEvent.descricao, JSON.stringify(newParticipantes))
                //aciona user in event
            } else if (response == 'false') {
                estado = 'recusado'
            }
            else {
                estado = 'cancelado'
            }
            for (let j in JSON.parse(pedidos)) {
                if (j == i) {

                    let descricao = JSON.parse(pedidos)[j].descricao
                    let userId = JSON.parse(pedidos)[j].idUser
                    let eventId = JSON.parse(pedidos)[j].idEvento
                    //id, descricao, idUser, idEvento, estado
                    newCom.push(new Pedido(click, descricao, userId, eventId, estado))
                }
                else {
                    newCom.push(JSON.parse(pedidos)[j])
                }
            }

            localStorage.setItem("Pedido", JSON.stringify(newCom));
            location.reload()



            //JSON.parse(users)[i] = JSON.stringify(new User(click, newName, newEmail, newPassword, newFoto, newUserType,JSON.parse(users)[i].nivel))
            //alert("Atualizado" + JSON.stringify(JSON.parse(users)[i]))
        }
    }
}