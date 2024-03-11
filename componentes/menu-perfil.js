const slider = document.querySelector("aside")

// Defina o tipo de perfil (empresa ou ONG)
const tipoPerfil = 'empresa'; // ou 'ong'

// Determina qual imagem e se deve mostrar a li de cadastro de doações com base no tipo de perfil
let imagemPerfil, mostrarCadastrarDoacoes;
if (tipoPerfil === 'empresa') {
  imagemPerfil = '../src/imagens-parceiros/parceiro-1.png';
  mostrarCadastrarDoacoes = true; // Mostrar a li de cadastro de doações para o perfil empresa
} else {
  imagemPerfil = '../src/imagens-parceiros/ong-fantasia.jpg';
  mostrarCadastrarDoacoes = false; // Não mostrar a li de cadastro de doações para o perfil ONG
}

slider.innerHTML = `
<div>
  <div>
    <img id="fotoPerfil" src="${imagemPerfil}" alt="">
  </div>
  <small id="nomeUsuario">${tipoPerfil === 'empresa' ? 'Empresa Parceira 1' : 'Ong Parceira 1'}</small>
</div>
<div>
  <ul>
    <a href="../pages/painel-doacoes.html">
      <li>
        Painel de Doações
      </li>
    </a>
    ${mostrarCadastrarDoacoes ? `<a href="../pages/doacao-doador.html">
      <li>
        Cadastrar Doações
      </li>
    </a>` : ''}
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
`;

// slide-componente.js

document.addEventListener("DOMContentLoaded", function () {
  iniciarSlideAutomatico();
});

// Restante do código do seu componente
