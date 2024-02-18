const slider = document.querySelector("aside")

slider.innerHTML = `
<div>
  <div>
    <img id="fotoPerfil" src="../src/imagens-parceiros/parceiro-1.png" alt="">
  </div>
  <small id="nomeUsuario">Parceiro 1</small>
</div>
<div>
  <ul>
    <a href="../pages/painel-doacoes.html">
    <li>
      Painel de Doações
    </li>
    </a>
    <a href="../pages/doacao-doador.html">
      <li>
        Cadastrar Doações
      </li>
    </a>
    <a href="#">
      <li>
        Editar perfil
      </li>
    </a>
    <a href="../index.html">
      <li>
        Sair
      </li>
    </a>
  </ul>
</div>
`

// slide-componente.js

document.addEventListener("DOMContentLoaded", function () {
  iniciarSlideAutomatico();
});

// Restante do código do seu componente
