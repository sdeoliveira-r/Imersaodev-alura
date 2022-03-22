var numSorteado = parseInt(Math.random() * 11);

function Chutar() {
  var numResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numSorteado) {
    numResultado.innerHTML = "Você acertou!!! Click em Run e tente novamente!";
  } else if (chute > 10 || chute < 0) {
    numResultado.innerHTML = "Digite um número de 0 a 10";
  } else if (chute > numSorteado) {
    numResultado.innerHTML =
      "O número é menor que (" + chute + ") Tente novamente!";
  } else if (chute < numSorteado) {
    numResultado.innerHTML =
      "O número é maior que (" + chute + ") Tente novamente!";
  }

  //  else {
  //    numResultado.innerHTML =
  //      "Errou! O número sorteado foi o número (" +
  //      numSorteado +
  //      ") Click em Run e tente novamente!";
  //  }
}
