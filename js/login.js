function realizarLogin() {
  // Busca arquivo JSON com dados dos usuários
  fetch("./usuarios.js").then((response) => {
    response.json().then((dados) => {
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

      // Verifica se o usuário existe na lista de usuários
      const usuarioEncontrado = dados.usuarios.find(u => u.email === usuario);

      // Lógica para usuário
      if (usuarioEncontrado) {
        inputUsuario.classList.add('correct');
      } else {
        inputUsuario.classList.add('error');
        usuarioError.classList.add('visible');
        usuarioError.style.display = 'block';
      }

      // Lógica para senha
      if (usuarioEncontrado && usuarioEncontrado.senha === senha) {
        inputSenha.classList.add('correct');
        senhaError.classList.remove('visible');
        // Verificar qual tipo de usuário está logando e redirecionar para a página de perfil apropriada
        if (usuario === 'empresa-1@exemplo.com') {
          window.location.href = '../pages/perfil-empresa.html';
        } else if (usuario === 'ong-1@exemplo.com') {
          window.location.href = '../pages/perfil-ongs.html';
        }
      } else {
        inputSenha.classList.add('error');
        senhaError.classList.add('visible');
        senhaError.style.display = 'block';
      }
    })
  })
}



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
