// variáveis globais importantes ----
//var nomeAlas = ["Ambulátório", "Centro Cirúrgico", "Clínica Médica", "Emergência"];
const URL = "http://localhost:3000/";
var alas = null;
var pacientes = null;
var equipeMedica = null;

window.onload = function () {
    //connection(URL);
    //goHome(alas);
    //addNameList(pacientes)
    //console.table(alas);
    //relógio();


    /* $("#options-ala").empty();
    getAlas(URL);
    home(alas);
    $("#options-ala").show();
    $("#list").empty(); */
    $("#panel-alas").hide();
    $("#list").hide();
    //$("#home").hide();
}

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
        let panelAlas = document.createElement("div");
        panelAlas.classList.add("panel-alas-op", "card-shadow");

        //let img = document.createElement("img");
        //img.src = "./00_sources/01_img/01_visual/icon-gradus-branco.png";
        let texto = document.createElement("h4");
        texto.innerHTML = elem.alaNome;
        //mainPanelOp.appendChild(img);
        panelAlas.appendChild(texto);

        $("#options-ala").append(panelAlas);
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


//requisições get gerais
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


$("#menu-alas").click(function () {
    $("#menu-alas").css({ borderRight: "4px solid white", backgroundColor: "#012847" });
    $("#menu-pacientes").css({ borderRight: "4px solid transparent", backgroundColor: "transparent" });
    $("#menu-equipe").css({ borderRight: "4px solid transparent", backgroundColor: "transparent" });
})

$("#menu-equipe").click(function () {
    $("#menu-equipe").css({ borderRight: "4px solid white", backgroundColor: "#012847" });
    $("#menu-pacientes").css({ borderRight: "4px solid transparent", backgroundColor: "transparent" });
    $("#menu-alas").css({ borderRight: "4px solid transparent", backgroundColor: "transparent" });
})

$("#menu-pacientes").click(function () {
    $("#menu-pacientes").css({ borderRight: "4px solid white", backgroundColor: "#012847"});
    $("#menu-equipe").css({ borderRight: "4px solid transparent", backgroundColor: "transparent" });
    $("#menu-alas").css({ borderRight: "4px solid transparent", backgroundColor: "transparent" });

    $("#options-ala").hide();
    $("#list").empty();
    getPacientes(URL);
    addNameList(pacientes);
    $("#list").show();
});