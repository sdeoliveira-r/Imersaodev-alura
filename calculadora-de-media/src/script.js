var nome = "Rafael";

var notaBimestre1 = 7;
var notaBimestre2 = 8;
var notaBimestre3 = 9;
var notaBimestre4 = 8;

var mediaFinal = (
  (notaBimestre1 + notaBimestre2 + notaBimestre3 + notaBimestre4) /
  4
).toFixed(1);

// .toFixed() fixa o número de casas decimais depois do ponto

console.log("Bem vindo " + nome);
console.log("Sua média final " + mediaFinal);

function pulaLinha() {
  document.write("<br></br>");
}

// Mostrar nota final na página
function mostraNota() {
  document.write("Sua nota final é " + mediaFinal);
  pulaLinha();
  if (mediaFinal > 7) {
    document.write("Parabéns " + nome + ", Você foi Aprovado!!! ");
  } else {
    document.write("Que pena " + nome + ", Você foi Reprovado! ");
  }
}

mostraNota();
