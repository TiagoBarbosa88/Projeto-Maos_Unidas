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


function cadastroEmpresas(){
  window.location.href = 'cadastro-doadores.html'
}

function cadastroOngs(){
  window.location.href = 'cadastro-ongs.html'
}

// function realizarLogin() {
//   const usuarios = [
//     { email: 'empresa-1@exemplo.com', senha: '123' },
//     { email: 'ong-1@exemplo.com', senha: '123' },
//     // Adicione mais usuários conforme necessário
//   ];

//   const inputUsuario = document.getElementById('login-usuario');
//   const inputSenha = document.getElementById('login-senha');
//   const usuarioError = document.getElementById('usuario-error');
//   const senhaError = document.getElementById('senha-error');

//   // Resetando estilos
//   inputUsuario.classList.remove('error', 'correct');
//   inputSenha.classList.remove('error', 'correct');
//   usuarioError.classList.remove('visible');
//   senhaError.classList.remove('visible');

//   // Obtendo valores do formulário
//   const usuario = inputUsuario.value;
//   const senha = inputSenha.value;

//   // Lógica para usuário
//   if (isValidUsuario(usuario, usuarios)) {
//     inputUsuario.classList.add('correct');
//   } else {
//     inputUsuario.classList.add('error');
//     usuarioError.classList.add('visible');
//     usuarioError.style.display = 'block';
//   }

//   // Lógica para senha
//   if (isValidSenha(usuario, senha, usuarios)) {
//     inputSenha.classList.add('correct');
//     senhaError.classList.remove('visible');
//     window.location.href = "/index.html";
//   } else {
//     inputSenha.classList.add('error');
//     senhaError.classList.add('visible');
//     senhaError.style.display = 'block';
//   }
// }


//  function realizarLogin() {
//   const usuarios = [
//     { email: 'empresa-1@exemplo.com', senha: '123' },
//     { email: 'ong-1@exemplo.com', senha: '123' },
//     // Adicione mais usuários conforme necessário
//   ];

//   const inputUsuario = document.getElementById('login-usuario');
//   const inputSenha = document.getElementById('login-senha');
//   const usuarioError = document.getElementById('usuario-error');
//   const senhaError = document.getElementById('senha-error');

//   // Resetando estilos
//   inputUsuario.classList.remove('error', 'correct');
//   inputSenha.classList.remove('error', 'correct');
//   usuarioError.classList.remove('visible');
//   senhaError.classList.remove('visible');

//   // Obtendo valores do formulário
//   const usuario = inputUsuario.value;
//   const senha = inputSenha.value;

//   // Lógica para usuário
//   if (isValidUsuario(usuario, usuarios)) {
//     inputUsuario.classList.add('correct');
//   } else {
//     inputUsuario.classList.add('error');
//     usuarioError.classList.add('visible');
//     usuarioError.style.display = 'block';
//   }

//   // Lógica para senha
//   if (isValidSenha(usuario, senha, usuarios)) {
//     inputSenha.classList.add('correct');
//     senhaError.classList.remove('visible');
//     // Verificar qual tipo de usuário está logando e redirecionar para a página de perfil apropriada
//     if (usuario === 'empresa-1@exemplo.com') {
//       window.location.href = 'perfil-empresa.html';
//     } else if (usuario === 'ong-1@exemplo.com') {
//       window.location.href = 'perfil-ongs.html';
//     }
//   } else {
//     inputSenha.classList.add('error');
//     senhaError.classList.add('visible');
//     senhaError.style.display = 'block';
//   }
// }

function realizarLogin() {
  const usuarios = [
    { email: 'empresa-1@exemplo.com', senha: '123' },
    { email: 'ong-1@exemplo.com', senha: '123' },
    // Adicione mais usuários conforme necessário
  ];

  const inputUsuario = document.getElementById('login-usuario');
  const inputSenha = document.getElementById('login-senha');
  const usuarioError = document.getElementById('usuario-error');
  const senhaError = document.getElementById('senha-error');

  // Resetando estilos
  inputUsuario.classList.remove('error', 'correct');
  inputSenha.classList.remove('error', 'correct');
  usuarioError.classList.remove('visible');
  senhaError.classList.remove('visible');

  // Obtendo valores do formulário
  const usuario = inputUsuario.value;
  const senha = inputSenha.value;

  // Lógica para usuário
  if (isValidUsuario(usuario, usuarios)) {
    inputUsuario.classList.add('correct');
  } else {
    inputUsuario.classList.add('error');
    usuarioError.classList.add('visible');
    usuarioError.style.display = 'block';
  }

  // Lógica para senha
  if (isValidSenha(usuario, senha, usuarios)) {
    inputSenha.classList.add('correct');
    senhaError.classList.remove('visible');
    // Redirecionar para a página de perfil apropriada
    navegarParaPerfil(usuario);
  } else {
    inputSenha.classList.add('error');
    senhaError.classList.add('visible');
    senhaError.style.display = 'block';
  }
}

function navegarParaPerfil(usuario) {
  // Verificar qual tipo de usuário está logando e redirecionar para a página de perfil apropriada
  if (usuario === 'empresa-1@exemplo.com') {
    localStorage.setItem("usuario", usuario.email)
    window.location.href = '../pages/perfil-empresa.html'; // O arquivo perfil-empresa.html está na pasta pages
  } else if (usuario === 'ong-1@exemplo.com') {
    window.location.href = '../pages/perfil-ongs.html'; // O arquivo perfil-ongs.html está na pasta pages
  }
}




/* function isValidUsuario(usuario, usuarios) {
  return usuarios.some(u => u.email === usuario);
}

function isValidSenha(usuario, senha, usuarios) {
  return usuarios.some(u => u.email === usuario && u.senha === senha);
}
 */

// Verifica se o usuário existe na lista de usuários
function isValidUsuario(usuario, usuarios) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === usuario) {
      return true;
    }
  }
  return false;
}

// Verifica se a senha corresponde ao usuário
function isValidSenha(usuario, senha, usuarios) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === usuario && usuarios[i].senha === senha) {
      return true;
    }
  }
  return false;
}

function navegarParaCadastro() {
  window.location.href = "cadastro.html";
}


/* Efeitos scroll suave nosso-trabalho */
window.scrollSuave = ScrollReveal({ reset: true });

scrollSuave.reveal('.efeito-topo', { duration: 1000, delay: 500, origin: 'top', distance: '3.12rem' });
scrollSuave.reveal('.step-1', { duration: 1000, delay: 500, distance: '3.12rem' });
scrollSuave.reveal('.step-2', { duration: 1000, delay: 1000, distance: '3.12rem' });