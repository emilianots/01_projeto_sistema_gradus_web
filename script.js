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
    relógio();


    /* $("#options-ala").empty();
    getAlas(URL);
    home(alas);
    $("#options-ala").show();
    $("#list").empty(); */
    //$("#panel-alas").hide();
    $("#list").hide();
    $("#home-main").hide();
}

function relógio() {
    var hoje = new Date();
    var h = hoje.getHours();
    var m = hoje.getMinutes();
    var s = hoje.getSeconds();
    var d = hoje.getDate();
    var ms = hoje.getMonth() + 1;

    m = verify(m);
    s = verify(s);
    d = verify(d);
    ms = verify(ms);
    if (ms == 11) {
        ms = "novembro"
    }

    $("#rel").text(h + "h :" + m +"m");
    $("#date").text(d + " de " + ms + " |");
    var t = setTimeout(relógio, 1000);
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

$("#sistem-logo").click(function () {
    location.reload(true);
})




// função de printar um elemento html completo
document.onkeyup = function (e) {
    if (e.key == "") {
        $("#main-alas").printThis({
          debug: false, // show the iframe for debugging
          importCSS: true, // import parent page css
          importStyle: true, // import style tags
          printContainer: true, // print outer container/$.selector
          loadCSS:
            "/home/riley/Documentos/designDigital/4_semestre/5_projeto_integrado_2/00_dev_sistema_gradus/01_projeto_sistema_gradus_web/style.css", // path to additional css file - use an array [] for multiple
          pageTitle: "", // add title to print page
          removeInline: false, // remove inline styles from print elements
          removeInlineSelector: "*", // custom selectors to filter inline styles. removeInline must be true
          printDelay: 333, // variable print delay
          header: null, // prefix to html
          footer: null, // postfix to html
          base: false, // preserve the BASE tag or accept a string for the URL
          formValues: true, // preserve input/form values
          canvas: false, // copy canvas content
          doctypeString: "<!DOCTYPE html>", // enter a different doctype for older markup
          removeScripts: false, // remove script tags from print content
          copyTagClasses: false, // copy classes from the html & body tag
          beforePrintEvent: null, // callback function for printEvent in iframe
          beforePrint: null, // function called before iframe is filled
          afterPrint: null // function called before iframe is removed
        });
    }
}