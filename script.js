// instancia o objeto botao
const btnTrocaCor = document.getElementById("trocaCor");

// evento de clique
btnTrocaCor.addEventListener("click", () => {
  // captura o nome do conteudo
  let caixaTexto = document.getElementById('caixa');
 
  // valida o nome da cor
  if( caixaTexto.className === "cinza" ){
      caixaTexto.classList.add('amarelo');
      caixaTexto.classList.remove('cinza');
  }
  lamp.src = "ligada.png"
 
  // exibe no console
  console.log(caixaTexto.className);
});

// instancia o objeto botao
const btnTrocaCor1 = document.getElementById("trocaCor1");
let lamp = document.getElementById('trocaIMG')
 
// evento de clique
btnTrocaCor1.addEventListener("click", () => {
   // captura o nome do conteudo
   let caixaTexto = document.getElementById('caixa');

    // valida o nome da cor
    if( caixaTexto.className === "amarelo" ){
      caixaTexto.classList.add('cinza');
      caixaTexto.classList.remove('amarelo');
  }
  lamp.src = "desligada.png"

})