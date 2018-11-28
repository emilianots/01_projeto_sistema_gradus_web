// variáveis globais importantes ----
//var nomeAlas = ["Ambulátório", "Centro Cirúrgico", "Clínica Médica", "Emergência"];

var sortByAtribute = function(prop) {
  //ordenar a lista de pacientes por nome
  return function(x, y) {
    return x[prop] === y[prop] ? 0 : x[prop] > y[prop] ? 1 : -1;
  };
};

const URL = "http://localhost:3000/";
var alas = null;
var pacientes = banco.sort(sortByAtribute('nome'));

$("#n-paciente").append(pacientes.length);
$("#n-medico").append(medicos.length);
$('#n-enfermeiro').append(enfermeiros.length)

window.onload = function () {
    $("#btn-paciente").click(function () {
        $("#list-paciente").show();
        $("#list-equipe-medica").hide();
    })
    $("#btn-medico").click(function () {
        $("#list-paciente").hide();
        $("#list-equipe-medica").show();
    })

    relógio();

    for (let elem of pacientes) { // NOMES DOS PACIENTES
        let nome = document.createElement('li');
        
        nome.classList.add('list-group-item')
        nome.innerHTML = elem.nome.toUpperCase();
        $("#lista-paciente").append(nome);
    }
    for (let elem of medicos) { //NOMES MÉDICOS
        let item = document.createElement('li');
        let linha = document.createElement('div');
        let nome = document.createElement('div');
        let crm = document.createElement('div');
        

        item.classList.add('list-group-item');
        linha.classList.add('row');
        nome.classList.add('col');
        crm.classList.add('col');

        nome.innerHTML = elem.nomeMedico.toUpperCase();
        crm.innerHTML = elem.crm;

        linha.append(nome);
        linha.append(crm);
        item.append(linha);
        //item.innerHTML = elem.nomeMedico.toUpperCase();
        $("#list-medicos").append(item);
    }
    for (let elem of enfermeiros) {// LISTAR ENFERMEIROS
        let item = document.createElement("li");
        let linha = document.createElement('div');
        let nome = document.createElement('div');
        let coren = document.createElement('div');


        item.classList.add('list-group-item');
        linha.classList.add('row');
        nome.classList.add('col');
        coren.classList.add('col');

        nome.innerHTML = elem.nomeEnfermeiro.toUpperCase();
        coren.innerHTML = elem.coren;

        linha.append(nome);
        linha.append(coren);
        item.append(linha);

        $("#list-enfermeiros").append(item);
    }
};


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
    ms = "novembro";
  }

  $("#rel").text(h + "h :" + m + "m");
  $("#date").text(d + " de " + ms + " |");
  var t = setTimeout(relógio, 1000);
}

function verify(elem) {
  if (elem < 10) {
    elem = "0" + elem;
  }
  return elem;
}


//requisições get gerais
function getAlas(url) {
  $.ajax({
    type: "GET",
    url: url + "alas",
    async: false,
    success: function(data) {
      alas = data;
    }
  });
}
function getPacientes(url) {
  $.ajax({
    type: "GET",
    url: url + "pacientes",
    async: false,
    success: function(data) {
      pacientes = data;
    }
  });
}
function getEquipeMedica(url) {
  $.ajax({
    type: "GET",
    url: url + "equipeMedica",
    async: false,
    success: function(data) {
      equipeMedica = data;
    }
  });
}

// interações

/* $("#menu-alas").click(function () {
    $("#options-ala").empty();    
    connection(URL + "alas");
    goHome(unidade);
    $("#options-ala").show();
    $("#list").empty();
}); */

$("#menu-alas").click(function() {
  $("#menu-alas").css({
    borderRight: "4px solid white",
    backgroundColor: "#012847"
  });
  $("#menu-pacientes").css({
    borderRight: "4px solid transparent",
    backgroundColor: "transparent"
  });
  $("#menu-equipe").css({
    borderRight: "4px solid transparent",
    backgroundColor: "transparent"
  });
});

$("#menu-equipe").click(function() {
  $("#menu-equipe").css({
    borderRight: "4px solid white",
    backgroundColor: "#012847"
  });
  $("#menu-pacientes").css({
    borderRight: "4px solid transparent",
    backgroundColor: "transparent"
  });
  $("#menu-alas").css({
    borderRight: "4px solid transparent",
    backgroundColor: "transparent"
  });
});

$("#menu-pacientes").click(function() {
  $("#menu-pacientes").css({
    borderRight: "4px solid white",
    backgroundColor: "#012847"
  });
  $("#menu-equipe").css({
    borderRight: "4px solid transparent",
    backgroundColor: "transparent"
  });
  $("#menu-alas").css({
    borderRight: "4px solid transparent",
    backgroundColor: "transparent"
  });

  $("#options-ala").hide();
  $("#list").empty();
  getPacientes(URL);
  addNameList(pacientes);
  $("#list").show();
});

$("#sistem-logo").click(function() {
  location.reload(true);
});
console.log();
