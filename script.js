// variáveis globais importantes ----
//var nomeAlas = ["Ambulátório", "Centro Cirúrgico", "Clínica Médica", "Emergência"];
const URL = "http://localhost:3000/";
var alas = null;
var pacientes = null;
var equipeMedica = null;

/* window.onload = function () {
    //connection(URL);
    //goHome(alas);
    //addNameList(pacientes)
    //console.table(alas);
    //relógio();


    $("#options-ala").empty();
    getAlas(URL);
    home(alas);
    $("#options-ala").show();
    $("#list").empty();
} */

function relógio() {
    var hoje = new Date();
    var h = hoje.getHours();
    var m = hoje.getMinutes();
    var s = hoje.getSeconds();

    m = verify(m);
    s = verify(s);

    $("#rel").text(h + ": " + m + ": " + s);
    var t = setTimeout(relógio, 500);
}

function verify(elem) {
    if (elem < 10) {
        elem = "0" + elem;
    }
    return elem;
}


function home(lista) {
    //futuramente mexer com a trilha de migalhas tambem
    //criação das alas dinamicamente
    $("#list").empty();
    //console.log($("#list"))

    for (let elem of lista) {
        let mainPanelOp = document.createElement("div");
        mainPanelOp.classList.add("main-panel-op", "card-shadow");

        //let img = document.createElement("img");
        //img.src = "./00_sources/01_img/01_visual/icon-gradus-branco.png";
        let texto = document.createElement("h4");
        texto.innerHTML = elem.alaNome;
        //mainPanelOp.appendChild(img);
        mainPanelOp.appendChild(texto);

        $("#options-ala").append(mainPanelOp);
    }
}

// listar nomes ----
function addNameList(lista) {;
    for (const elem of lista) {
        let nomePaciente = document.createElement("div");
        nomePaciente.classList.add("list-element");
        nomePaciente.innerHTML = elem.nome;
        //novaLista.appendChild(nomePaciente);
        $("#list").append(nomePaciente);
        //console.log(nomePaciente)
    }
}

function getAlas(url) {
    $.ajax({
        type: "GET",
        url: url + "alas",
        async: false,
        success: function (data) {
            alas = data;
        }
    })
};
function getPacientes(url) {
    $.ajax({
        type: "GET",
        url: url + "pacientes",
        async: false,
        success: function (data) {
            pacientes = data;
        }
    })
}
function getEquipeMedica(url) {
    $.ajax({
        type: "GET",
        url: url + "equipeMedica",
        async: false,
        success: function (data) {
            equipeMedica = data
        }
    })
}

// interações

/* $("#menu-alas").click(function () {
    $("#options-ala").empty();    
    connection(URL + "alas");
    goHome(unidade);
    $("#options-ala").show();
    $("#list").empty();
}); */

$("#menu-pacientes").click(function() {
    $("#options-ala").hide();
    $("#list").empty();
    //let url = URL + "pacientes"
    getAlas(URL + "pacientes");
    addNameList(pacientes);
    $("#list").show();
});