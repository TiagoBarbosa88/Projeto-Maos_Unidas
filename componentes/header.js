const header = document.querySelector("header")

header.innerHTML = ` 
<div class="limitar-secao">
<div>
  <a href="../index.html">
    <img id="logo" src="../src/logo-projeto/logo-projeto-social.png" alt="logo mãos unidas">
  </a>
</div>

<div class="menu-container">
  <ul class="menu">    
    <li><a href="../pages/nosso-trabalho.html">Nosso Trabalho</a></li>
    <li><a href="../pages/ranking.html">Ranking</a></li>
    <li><a href="../pages/parceiros.html">Parceiros</a></li>  
    <li><a href="../pages/cadastro.html">Cadastro</a></li>
    <li><a href="../pages/login.html" class="login">Login</a></li>
  </ul>        
</div>
<div>
  <button onclick="alterarTema()" class="modo-claro">
    <img class="btn-icone" src="../src/icones-projeto/moon.png" alt="icone" />
  </button>
</div>
</div>
`

