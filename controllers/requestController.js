function newRequest(descricao, idUser, idEvento, estado) {
    addRequest(descricao, idUser, idEvento, estado)
}
function getRequestsOfUserEvents(userId) {
    let eventByUser = getUserEvents(userId) //getUserRequests(userId)
    let event=[]
    for (let i in eventByUser) {
  
        if (typeof getRequestsByIdEvent(eventByUser[i]) != undefined) {
            event += getRequestsByIdEvent(eventByUser[i])
        }
        // userRequests.push(event)

    }


    return event
}
function getRequestById(id) {
    let result = "";
    for (let i in getAllRequests()) {
        if (getAllRequests()[i].id == id) {
            result = getAllRequests()[i]
        }
    }
    return result
}
function respondRequest(id, value) {
    updateObjectRequest(id, value)
}
function getSentRequests(userId) {
    let userEvents = []
    for (let i in getAllRequests()) {

        if (getAllRequests()[i].idUser == userId) {

            userEvents.push(getAllRequests()[i].id)
        }
    }
    return userEvents
}
function getUserRequests(userId) {
    let userEvents = []
    let allReq = getAllRequests()
    for (let i in allReq) {
        if (allReq[i].idUser == userId) {

            userEvents.push(allReq[i].id)
        }
    }
    return userEvents
}
function getRequestsByIdEvent(idEvent) {
    let userEvents = []
    let allReq = getAllRequests()
    for (let i in allReq) {
        if (allReq[i].idEvento == idEvent) {

            userEvents.push(allReq[i].id)
        }
    }
    return userEvents
}