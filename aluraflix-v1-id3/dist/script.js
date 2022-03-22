var listaFilmes = [
  "https://br.web.img2.acsta.net/pictures/210/513/21051366_20131021213607144.jpg",
  "https://1.bp.blogspot.com/-w-GUu2_zGg8/Ugd1zac8IuI/AAAAAAAAF5E/Gs7PyzH2_AM/s1600/Revolver.jpg",
  "https://br.web.img2.acsta.net/pictures/18/09/26/21/24/5505701.jpg",
  "https://wp.ufpel.edu.br/empauta/files/2015/10/Travessia1.jpg"
];

// i = 0 (ínicio/índice da lista)
// .length (o tamanho da lista)
// i++ (incrementa o próximo elemento em uma lista)
for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}