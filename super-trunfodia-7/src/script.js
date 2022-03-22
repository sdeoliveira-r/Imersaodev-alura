var carta1 = {
  nome: "CHO KU REI",
  atributos: {
    ataque: 5,
    defesa: 9,
    efeito: 7
  }
};

var carta2 = {
  nome: "SEI HE KI",
  atributos: {
    ataque: 7,
    defesa: 8,
    efeito: 6
  }
};

var carta3 = {
  nome: "DAI KO MYO",
  atributos: {
    ataque: 8,
    defesa: 9,
    efeito: 5
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numCartaMaquina];

  var numCartaJogador = parseInt(Math.random() * 3);
  while (numCartaMaquina == numCartaJogador) {
    numCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você Venceu!!!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você Perdeu, a carta sorteada é maior!";
  } else {
    elementoResultado.innerHTML = "Empate!";
  }
  console.log(cartaMaquina);
}
