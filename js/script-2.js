let temaEscuro = false;

function alterarTema() {
  const corpo = document.body;
  const botao = document.querySelector('button');

  // Alternar entre temas
  corpo.classList.toggle('modo-escuro');
  botao.classList.toggle('modo-claro', temaEscuro);
  botao.classList.toggle('modo-escuro', !temaEscuro);


  botao.innerHTML = `<img class="btn-icone" src="../src/icones-projeto/${temaEscuro ? 'moon' : 'sun'}.png" alt="icone" />`;

  // Inverter o valor
  temaEscuro = !temaEscuro;
}

function navegarParaHome() {
  window.location.href = "../index.html";
}

function navegarParaCadastro() {
  window.location.href = "cadastro.html";
}

function cadastroEmpresas(){
  window.location.href = 'cadastro-doadores.html'
}

function cadastroOngs(){
  window.location.href = 'cadastro-ongs.html'
}

