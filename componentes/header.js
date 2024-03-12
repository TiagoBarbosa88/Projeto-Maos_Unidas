const header = document.querySelector("header");

header.innerHTML = ` 
<div class="nav-bar">
  <div class="logo">
    <a href="../index.html">
      <img id="logo" class='logo-grande' src="../src/logo-projeto/logo-projeto-social.png" alt="logo mãos unidas">
      <img id="logo" class='logo-pequeno' src="../src/logo-projeto/logo-maos-unidas-favicon.png" alt="logo mãos unidas">
    </a>
  </div>

  <div class="nav-list">
    <ul class="menu">    
      <li><a href="../pages/nosso-trabalho.html" class='nav-item'>Nosso Trabalho</a></li>
      <li><a href="../pages/ranking.html" class='nav-item'>Destaques</a></li>
      <li><a href="../pages/parceiros.html" class='nav-item'>Parceiros</a></li>  
      <li><a href="../pages/sobre.html" class='nav-item'>Sobre</a></li> 
      <li><a href="../pages/cadastro.html" class='nav-item'>Cadastro</a></li>
      <li><a href="../pages/login.html" class="login nav-item">Login</a></li>
    </ul>        
  </div>
  <div class='alterarTema'>
    <button onclick="alterarTema()" class="modo-claro">
      <img class="btn-icone" src="../src/icones-projeto/moon.png" alt="icone" />
    </button>
  </div>
  <div class="mobile-menu-icon">
    <button onclick="menuShow()"><img class="icon" src="../src/svg-menu/burger-menu-svgrepo-com.svg" alt=""></button>
  </div>
</div>

<div class="mobile-menu">
  <ul class="menu">    
    <li><a href="../pages/nosso-trabalho.html" class='nav-item'>Nosso Trabalho</a></li>
    <li><a href="../pages/ranking.html" class='nav-item'>Destaques</a></li>
    <li><a href="../pages/parceiros.html" class='nav-item'>Parceiros</a></li>  
    <li><a href="../pages/sobre.html" class='nav-item'>Sobre</a></li>
    <li><a href="../pages/cadastro.html" class='nav-item'>Cadastro</a></li>
    <li><a href="../pages/login.html" class="login nav-item">Login</a></li>
  </ul> 
</div>

`;

function menuShow() {
  const menuMobile = document.querySelector('.mobile-menu');
  const icon = document.querySelector('.icon');
  const isOpen = menuMobile.classList.toggle('open'); // Alternar a classe 'open' e armazenar se foi aberto ou fechado

  // Usar uma operação ternária para definir o src e alt do ícone com base no estado do menu
  icon.src = isOpen ? "../src/svg-menu/close-square-svgrepo-com.svg" : "../src/svg-menu/burger-menu-svgrepo-com.svg";
  icon.alt = isOpen ? "Close menu" : "Open menu"; // Define um texto alternativo com base no estado do menu
}

// O trecho que está mechendo começa daqui pra baixo


// Função para verificar se o usuário está autenticado
function isUserAuthenticated() {
  const authenticated = localStorage.getItem('authenticated');
  return authenticated === 'true';
}

// Verificar se o usuário está autenticado ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  const loginLink = document.querySelector('.login .nav-item');
  if (loginLink) {
    if (isUserAuthenticated()) {
      loginLink.textContent = "Sair";
    } else {
      loginLink.textContent = "Login";
    }
  }
});

// Adicionar evento de clique ao link de login/sair
const loginLink = document.querySelector('.nav-item.login');
if (loginLink) {
  loginLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do link

    if (isUserAuthenticated()) {
      // Se o usuário estiver autenticado, deslogar
      localStorage.removeItem('authenticated');
      window.location.href = "../index.html"; // Redirecionar para a página inicial
    } else {
      // Se o usuário não estiver autenticado, redirecionar para a página de login
      window.location.href = "../pages/login.html";
    }
  });
}


// // Função para atualizar o link de login/sair no menu móvel
// function updateMobileLoginLink() {
//   const mobileLoginLink = document.querySelector('.mobile-menu .nav-item.login');
//   if (mobileLoginLink) {
//     mobileLoginLink.textContent = isUserAuthenticated() ? "Sair" : "Login";
//   }
// }

// // Atualizar o link de login/sair no menu móvel ao carregar a página
// window.addEventListener('DOMContentLoaded', function() {
//   updateMobileLoginLink();
// });

// // Adicionar evento de clique ao link de login/sair no menu móvel
// const mobileLoginLink = document.querySelector('.mobile-menu .nav-item.login');
// if (mobileLoginLink) {
//   mobileLoginLink.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevenir o comportamento padrão do link

//     if (isUserAuthenticated()) {
//       // Se o usuário estiver autenticado, deslogar
//       localStorage.removeItem('authenticated');
//       window.location.href = "../index.html"; // Redirecionar para a página inicial
//     } else {
//       // Se o usuário não estiver autenticado, redirecionar para a página de login
//       window.location.href = "../pages/login.html";
//     }
//   });
// }

// // Adicionar a função para mostrar/ocultar o menu móvel
// function menuShow() {
//   const menuMobile = document.querySelector('.mobile-menu');
//   const icon = document.querySelector('.icon');
//   const isOpen = menuMobile.classList.toggle('open'); // Alternar a classe 'open' e armazenar se foi aberto ou fechado

//   // Usar uma operação ternária para definir o src e alt do ícone com base no estado do menu
//   icon.src = isOpen ? "../src/svg-menu/close-square-svgrepo-com.svg" : "../src/svg-menu/burger-menu-svgrepo-com.svg";
//   icon.alt = isOpen ? "Close menu" : "Open menu"; // Define um texto alternativo com base no estado do menu

//   // Atualizar o link de login/sair no menu móvel ao mostrar/ocultar o menu
//   updateMobileLoginLink();
// }

