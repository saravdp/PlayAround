const container = document.getElementById('center');

function comparaData() {
    let result = eventos.filter(element => new Date(element.data) > new Date())
    //&& element.categoria=="futebol")
    return result
}
function procurarUtilizador(){
    let texto=""
    alert(utilizadores.search(texto))

}


let eventosFiltered = comparaData()

let content = ``

content += `    <div class="columns">
<div class="column is-3 ">
<aside class="menu is-hidden-mobile">
<p class="menu-label">
    Geral
</p>
<ul class="menu-list">
    <li><a class="is-active">Dashboard</a></li>

</ul>
<p class="menu-label">
    Administração
</p>
<ul class="menu-list">
    <li><a href="gestaoUtilizadores.html">Utilizadores</a></li>
    <li><a href="gestaoEventos.html">Eventos</a></li>
    <li><a href="GestaoCategorias.html">Gestão de categorias</a></li>
</ul>
<p class="menu-label">
    Definições de gamificação
</p>
<ul class="menu-list">
<li><a href="GestaoMedalhas.html">Medalhas</a></li>
<li><a href="GestaoNiveis.html">Niveis</a></li>
<li><a href="GestaoFeedbacks.html">Feedbacks</a></li>
</ul>
</aside>
</div>
<div class="column is-9">
    <!-- <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="../">Bulma</a></li>
            <li><a href="../">Templates</a></li>
            <li><a href="../">Examples</a></li>
            <li class="is-active"><a href="#" aria-current="page">Admin</a></li>
        </ul>
    </nav> -->
    <section class="hero is-info welcome is-small">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Bem vindo, Admin.
                </h1>
                <h2 class="subtitle">
                    I hope you are having a great day!
                </h2>
            </div>
        </div>
    </section>
    <section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">${users.length}</p>
                    <p class="subtitle">Utilizadores</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">${eventos.length}</p>
                    <p class="subtitle">Eventos</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">${comentarios.length}</p>
                    <p class="subtitle">Comentários</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">19</p>
                    <p class="subtitle">Exceptions</p>
                </article>
            </div>
        </div>
    </section>
    <div class="columns">
        <div class="column is-6">
            <div class="card events-card">
                <header class="card-header">
                    <p class="card-header-title">
                        Próximos Eventos
                    </p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </a>
                </header>
                <div class="card-table">
                    <div class="content">
                        <table class="table is-fullwidth is-striped">
                            <tbody>`

for (let i = 0; i < eventosFiltered.length; i++) {
    content += `
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>   ${eventosFiltered[i].data} ${eventosFiltered[i].titulo}</td>
                                    <td class="level-right"><a class="button is-small is-primary"
                                            href="../Publico/VerEvento.html?idEvent=${eventosFiltered[i].id}">Ver +</a></td>
                                </tr>`
}
content += `
                            </tbody>
                        </table>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item">Ver todos</a>
                </footer>
            </div>
        </div>
        <div class="column is-6">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Procurar evento
                    </p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </a>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-large" type="text" placeholder="">
                            <span class="icon is-medium is-left">
                                <i class="fa fa-search"></i>
                            </span>
                            <span class="icon is-medium is-right">
                                <i class="fa fa-check"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Procurar utilizadores
                    </p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </a>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-large" type="text" placeholder="" id="searchUser">
                            <span class="icon is-medium is-left">
                                <i class="fa fa-search"></i>
                            </span>
                            <span class="icon is-medium is-right" >
                                <i class="fa fa-check" ><span onmouseup="procurarUtilizador()"></span></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`
container.innerHTML += content;