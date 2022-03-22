function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else if (filmeFavorito.endsWith(".png")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error(
      "Endereço de imagem inválido. Por favor, inserir um endereço com o final .jpg ou .png"
    );
  }
  document.getElementById("filme").value = ""; //apaga o endereço após adicionar o endereço
}

function listarFilmesNaTela(filmeFavorito) {
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
