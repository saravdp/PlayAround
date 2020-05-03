//TODO geolocalizacao, filtros(categoria, data)
const numofRows = Math.ceil(eventos.length / 3);
const container = document.getElementById('allEvents');
let cont = 0;
function getDistance() {
    //
}
function applyFilter(value) {
    return value.categoria != "xadrez"
}
const filtered = eventos//.filter(applyFilter)
// alert(JSON.stringify(filtered))
for (let i = 0; i <= numofRows; i++) {
    let content = ``
    if (cont < filtered.length && filtered[cont] != undefined) {
        content = ` 
        <div class="row columns">
     <div class="column is-one-third" >
         <div class="card large" style="height: auto;">
             <div class="card-image">
                 <figure class="image">
                     <img src="${filtered[cont].imagem[0]}" alt="Image">
                 </figure>
             </div>
             <div class="card-content">
                 <div class="media">
                     <div class="media-content">
                     <p class="title is-4 no-padding">${filtered[cont].titulo}</p>
                     <p><span class="title is-6"><a href="VerEvento.html?idEvent=${filtered[cont].id}">Ver mais</a></span></p>
                     <p class="subtitle is-6">${filtered[cont].data}</p>
                     </div>
                 </div>
                 <div class="content">
                     
                 </div>
             </div>
         </div>
     </div>`
        cont++;
    }
    if (cont < filtered.length && filtered[cont] != undefined) {
        content += `<div class="column is-one-third" >
         <div class="card large" style="height: auto;">
             <div class="card-image">
                 <figure class="image">
                     <img src="${filtered[cont].imagem[0]}" alt="Image">
                 </figure>
             </div>
             <div class="card-content">
                 <div class="media">
                     <div class="media-content">
                         <p class="title is-4 no-padding">${filtered[cont].titulo}</p>
                         <p><span class="title is-6"><a href="VerEvento.html?idEvent=${filtered[cont].id}">Ver mais</a></span></p>
                         <p class="subtitle is-6">${filtered[cont].data}</p>
                     </div>
                 </div>
                 <div class="content">
                     
                 </div>
             </div>
         </div>
     </div>`
        cont++;
        if (cont < filtered.length && filtered[cont] != undefined) {
            content += `<div class="column is-one-third" >
     <div class="card large" style="height: auto;">
         <div class="card-image">
             <figure class="image">
                 <img src="${filtered[cont].imagem[0]}" alt="Image">
             </figure>
         </div>
         <div class="card-content">
             <div class="media">
                 <div class="media-content">
                 <p class="title is-4 no-padding">${filtered[cont].titulo}</p>
                 <p><span class="title is-6"><a href="VerEvento.html?idEvent=${filtered[cont].id}">Ver mais</a></span></p>
                 <p class="subtitle is-6">${filtered[cont].data} </p>
                 </div>
             </div>
             <div class="content">
                 
             </div>
         </div>
     </div>
 </div>
 </div>`;
            cont++;

        }
    }
    // Append newyly created card element to the container
    container.innerHTML += content;
}
