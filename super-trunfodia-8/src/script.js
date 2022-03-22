var carta1 = {
  nome: "CHO KU REI",
  imagem:
    "https://gabrielreisstein.com.br/wp-content/uploads/2020/10/choku-rei.jpg",
  atributos: {
    energiza: 5,
    defesa: 9,
    efeito: 7
  }
};

var carta2 = {
  nome: "SEI HE KI",
  imagem: "https://ogom.org/profissaotransformacao/estilo/imagens/seheiki.jpg",
  atributos: {
    energiza: 7,
    defesa: 8,
    efeito: 6
  }
};

var carta3 = {
  nome: "DAI KO MYO",
  imagem:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F2%2Fdai-ko-myo-is-the-fourth-symbol-of-reiki-daniel-ghioldi.jpg",
  atributos: {
    energiza: 8,
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

  //  exibirOpcoes();
  exibirCartaJogador();
}

// function exibirOpcoes() {
//   var opcoes = document.getElementById("opcoes");
//   var opcoesTexto = "";

//   for (var atributo in cartaJogador.atributos) {
//     opcoesTexto +=
//       "<input type='radio' name='atributo' value='" +
//       atributo +
//       "'>" +
//       atributo;
//   }
//   opcoes.innerHTML = opcoesTexto;
// }

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
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>VENCEU</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>PERDEU</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>EMPATE</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
