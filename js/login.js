// Arrays de usuários
const empresaUsuarios = [
  { nome: 'empresa-1@exemplo.com', senha: '123' },
  { nome: 'empresa-2@exemplo.com', senha: '123' },
  // Adicione mais usuários conforme necessário
];

const ongUsuarios = [
  { nome: 'ong-1@exemplo.com', senha: '123' },
  { nome: 'ong-2@exemplo.com', senha: '123' },
  // Adicione mais ONGs conforme necessário
];

// Adicione aqui a lógica de login e validação de usuário e senha
let botao = document.querySelector(".btn");

botao.addEventListener('click', function realizarLogin(event) {
  event.preventDefault(); // Prevenir o comportamento padrão do formulário

  console.log("Iniciando login...");

  const inputUsuario = document.getElementById('login-usuario');
  const inputSenha = document.getElementById('login-senha');
  const usuarioError = document.getElementById('usuario-error');
  const senhaError = document.getElementById('senha-error');

  const empresaOption = document.getElementById('opcao-empresa');
  const ongOption = document.getElementById('opcao-ong');

  console.log("Usuário:", inputUsuario.value);
  console.log("Senha:", inputSenha.value);

  // Resetando estilos
  inputUsuario.classList.remove('error', 'correct');
  inputSenha.classList.remove('error', 'correct');
  usuarioError.classList.remove('visible');
  senhaError.classList.remove('visible');

  // Verifica se os elementos foram encontrados
  if (empresaOption && ongOption) {
    // Obtendo valores do formulário
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;

    // Verifica qual opção de usuário foi selecionada
    const tipoUsuario = empresaOption.checked ? 'empresa' : (ongOption.checked ? 'ong' : '');

    console.log("Tipo de usuário:", tipoUsuario);

    // Verifica se o usuário existe na lista de usuários
    console.log("Validando usuário...");
    if (tipoUsuario && isValidUsuario(usuario, tipoUsuario)) {
      console.log("Usuário válido!");
      inputUsuario.classList.add('correct');
      // Verificar qual tipo de usuário está logando e redirecionar para a página de perfil apropriada
      if (tipoUsuario === 'empresa') {
        console.log("Redirecionando para o perfil da empresa...");
        window.location.href = '../pages/perfil-empresa.html';
      } else if (tipoUsuario === 'ong') {
        console.log("Redirecionando para o perfil da ONG...");
        window.location.href = '../pages/perfil-ongs.html';
      }
    } else {
      console.log("Usuário inválido!");
      inputUsuario.classList.add('error');
      usuarioError.classList.add('visible');
      usuarioError.style.display = 'block';
    }

    // Verifica se a senha corresponde ao usuário
    console.log("Validando senha...");
    if (tipoUsuario && isValidSenha(usuario, senha, tipoUsuario)) {
      console.log("Senha válida!");
      inputSenha.classList.add('correct');
      senhaError.classList.remove('visible');
    } else {
      console.log("Senha inválida!");
      inputSenha.classList.add('error');
      senhaError.classList.add('visible');
      senhaError.style.display = 'block';
    }
  } else {
    console.log("Elementos não encontrados.");
  }
});

// Funções de validação de usuário e senha
function isValidUsuario(usuario, tipoUsuario) {
  const usuarios = tipoUsuario === 'empresa' ? empresaUsuarios : ongUsuarios;
  return usuarios.some(u => u.nome === usuario);
}

function isValidSenha(usuario, senha, tipoUsuario) {
  const usuarios = tipoUsuario === 'empresa' ? empresaUsuarios : ongUsuarios;
  return usuarios.some(u => u.nome === usuario && u.senha === senha);
}

function navegarParaCadastro() {
  window.location.href = "cadastro.html";
}


/* Efeitos scroll suave nosso-trabalho */
window.scrollSuave = ScrollReveal({ reset: true });

scrollSuave.reveal('.efeito-topo', { duration: 1000, delay: 500, origin: 'top', distance: '3.12rem' });
// scrollSuave.reveal('.step-1', { duration: 1000, delay: 500, distance: '3.12rem' });
// scrollSuave.reveal('.step-2', { duration: 1000, delay: 1000, distance: '3.12rem' });


