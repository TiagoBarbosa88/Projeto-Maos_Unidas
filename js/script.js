let temaEscuro = false;

function alterarTema() {
  const corpo = document.body;
  const botao = document.querySelector('button');

  // Alternar entre temas
  corpo.classList.toggle('modo-escuro');
  botao.classList.toggle('modo-claro', temaEscuro);
  botao.classList.toggle('modo-escuro', !temaEscuro);


  botao.innerHTML = `<img class="btn-icone" src="src/icones-projeto/${temaEscuro ? 'moon' : 'sun'}.png" alt="icone" />`;

  // Inverter o valor
  temaEscuro = !temaEscuro;
}

function navegarParaHome() {
  window.location.href = "../index.html";
}

function navegarParaCadastro() {
  window.location.href = "cadastro.html";
}

function cadastroEmpresas() {
  window.location.href = 'cadastro-doadores.html';
}

function cadastroOngs() {
  window.location.href = 'cadastro-ongs.html';
}


/* Efeitos de scroll */

window.scrollSuave = ScrollReveal({ reset: true });

scrollSuave.reveal('.slider', { duration: 1000, delay: 200, distance: '90px' });
scrollSuave.reveal('.container-card', { duration: 1000, delay: 200 });
scrollSuave.reveal('.card1', { duration: 500, delay: 500 });
scrollSuave.reveal('.card2', { duration: 500, delay: 1000 });
scrollSuave.reveal('.card3', { duration: 500, delay: 1300 });
scrollSuave.reveal('.cards', { duration: 500, delay: 1000 });
scrollSuave.reveal('.card4', { duration: 500, delay: 2500 });
scrollSuave.reveal('.card5', { duration: 500, delay: 3000 });


scrollSuave.reveal('.container-h1', { duration: 1200, delay: 1000 });
scrollSuave.reveal('.container-video', { duration: 1000, delay: 200 });
scrollSuave.reveal('.info-left', { origin: 'top', delay: 800 });
scrollSuave.reveal('.info-right', { origin: 'bottom', delay: 800 });


scrollSuave.reveal('.container-contador', { duration: 1000, delay: 200 });
scrollSuave.reveal('.container-img', { duration: 1000, delay: 200 });
scrollSuave.reveal('.contador-title', { duration: 1000, delay: 200 });
scrollSuave.reveal('.lista', { duration: 1000, delay: 200 });


/* Efeitos scroll suave nosso-trabalho */

scrollSuave.reveal('.texto-1', { duration: 1000, delay: 500 });
scrollSuave.reveal('.texto-2', { duration: 1000, delay: 1500 });

scrollSuave.reveal('.efeito-right', { duration: 1000, delay: 500, origin: 'left', distance: '3.12rem' });
scrollSuave.reveal('.efeito-left', { duration: 1000, delay: 500, origin: 'right', distance: '3.12rem' });
scrollSuave.reveal('.efeito-topo', { duration: 1000, delay: 500, origin: 'top', distance: '3.12rem' });
scrollSuave.reveal('.efeito-bottom', { duration: 1000, delay: 500, origin: 'bottom', distance: '3.12rem' });

scrollSuave.reveal('.step-1', { duration: 1000, delay: 500, distance: '3.12rem' });
scrollSuave.reveal('.step-2', { duration: 1000, delay: 1000, distance: '3.12rem' });
scrollSuave.reveal('.step-3', { duration: 1000, delay: 1500, distance: '3.12rem' });
scrollSuave.reveal('.step-4', { duration: 1000, delay: 1800, distance: '3.12rem' });
scrollSuave.reveal('.step-5', { duration: 1000, delay: 2100, distance: '3.12rem' });



