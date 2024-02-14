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

