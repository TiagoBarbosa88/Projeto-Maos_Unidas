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
    window.location.href = "/index.html";
  } else {
    inputSenha.classList.add('error');
    senhaError.classList.add('visible');
    senhaError.style.display = 'block';
  }
}


function isValidUsuario(usuario, usuarios) {
  return usuarios.some(u => u.email === usuario);
}

function isValidSenha(usuario, senha, usuarios) {
  return usuarios.some(u => u.email === usuario && u.senha === senha);
}


function navegarParaCadastro() {
  window.location.href = "cadastro.html";
}