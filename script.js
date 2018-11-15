// variáveis globais importantes ----
var nomeAlas = ["Ambulátório", "Centro Cirúrgico", "Clínica Médica", "Emergência"];

window.onload = function () {
    goHome(nomeAlas);
    starTime();
}

function starTime() {
    var hoje = new Date();
    var h = hoje.getHours();
    var m = hoje.getMinutes();
    var s = hoje.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $("#rel").text(h + ": " + m + ": " + s);
    var t = setTimeout(starTime, 500);

}

function checkTime(elem) {
    if (elem < 10) {
        elem = "0" + elem;
    }
    return elem;
}

function goHome(lista) {
    //futuramente mexer com a trilha de migalhas tambem
    //criação das alas dinamicamente
    $("#list").empty();
    console.log($("#list"))

    for (let elem of lista) {
        let mainPanelOp = document.createElement("div");
        mainPanelOp.classList.add("main-panel-op", "card-shadow");

        let img = document.createElement("img");
        img.src = "./00_sources/01_img/01_visual/icon-gradus-branco.png";
        let texto = document.createElement("h4");
        texto.innerHTML = elem;
        mainPanelOp.appendChild(img);
        mainPanelOp.appendChild(texto);

        $("#options-ala").append(mainPanelOp);
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
    //let novaLista = document.createElement("div");
    //novaLista.classList.add("list");
    for (const elem of lista) {
        let nomePaciente = document.createElement("div");
        nomePaciente.classList.add("list-element");
        nomePaciente.innerHTML = elem.nome;
        //novaLista.appendChild(nomePaciente);
        $("#list").append(nomePaciente);
        console.log(nomePaciente)
    }
}

// interações
$("#menu-pacientes").click(function() {
    $("#options-ala").hide();
    $("#list").empty();
    addNameList(pacientes);
    $("#list").show();
});

$("#sistem-logo").click(function() {
    //goHome(nomeAlas);
    $("#options-ala").show();
    $("#list").empty();
});