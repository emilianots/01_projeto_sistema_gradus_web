
window.onload = function () {
    goHome(nomeAlas)
}
// variáveis globais importantes ----
var nomeAlas = ["Ambulátório", "Centro Cirúrgico", "Clínica Médica", "Emergência"];

$("#menu-pacientes").click(function () {
    $("#op-panel").empty();
    addNameList(pacientes);
})
$("#sistem-logo").click(function () {
    goHome(nomeAlas)
})


function goHome(lista) {
    //futuramente mexer com a trilha de migalhas tambem
    $("#op-panel").empty();

    for (let elem of lista) {
        let mainPanelOp = document.createElement("div");
        mainPanelOp.classList.add("main-panel-op", "card-shadow");

        let img = document.createElement("img");
        img.src = "./00_sources/01_img/01_visual/icon-gradus-branco.png";
        let texto = document.createElement("h4");
        texto.innerHTML = elem;
        mainPanelOp.appendChild(img);
        mainPanelOp.appendChild(texto);

        $("#op-panel").append(mainPanelOp);
    }
}

// trilha de migalhas
function addTrilha(nome) {
    let step = document.createElement("div");
    step.classList.add("step");
    step.innerHTML = nome + "&gt";
    trilhaDeMigalha.appendChild(step);
}

// listar nomes ----
function addNameList(lista) {
    let novaLista = document.createElement("div");
    novaLista.classList.add("list");
    for (const elem of lista) {
        let nomePaciente = document.createElement("div");

        nomePaciente.classList.add("list-element");
        nomePaciente.innerHTML = elem.nome;
        novaLista.appendChild(nomePaciente);
    }
    $("#op-panel").append(novaLista);
}

/* for (let elem of listas) {
    console.log(elem.nome);
} */
/*
for (let i = 0; i < 20; i++){
    addNameList(i);
} */

/* let url = "http://localhost:3000/pacientes";
function connection() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if ((this.readyState = 4) && (this.status == 200)) {
            console.log(this.responseText);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

connection() */
alert("Adicionado:\nlogo clicável;\nlistagem de pacientes do banco de dados\n \nAdições de elementos dinamicamente criados\n \nPrimeiros testes com dinamicidade e jQuery")