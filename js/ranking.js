document.addEventListener('DOMContentLoaded', function () {
  const data = [
    {"pontuacao": 1000, "competition_username":"Parceiro 1", "user_id": "parceiro_1"},
    {"pontuacao": 980, "competition_username": "Parceiro 2", "user_id": "parceiro_2"},
    {"pontuacao": 950, "competition_username": "Parceiro 3", "user_id": "parceiro_3"},
    {"pontuacao": 900, "competition_username": "Parceiro 4", "user_id": "parceiro_4"},
    {"pontuacao": 880, "competition_username": "Parceiro 5", "user_id": "parceiro_5"}
  ];

  const ulElement = document.getElementById('empresas-list');
  const destaquesList = document.getElementById('destaques-list');

  data.forEach((empresa, index) => {
    const posicao = index + 1;

    const liElement = document.createElement('li');
    liElement.innerHTML = `
      <span class="posicao-top">${posicao}</span>
      <img src="../src/imagens-parceiros/parceiro-${posicao}.png" alt="${empresa.competition_username}" />
      <p data-name>${empresa.competition_username}</p>
      <span data-revenue class="revenue">${empresa.pontuacao} KGs</span>
    `;

    // console.log(`class="posicao-top ${'step-'+card}"`)

    ulElement.appendChild(liElement);

    // Adicionar destaque aos três primeiros elementos
    if (posicao <= 3) {
      const destaqueLiElement = liElement.cloneNode(true);
      destaqueLiElement.classList.add('destaque');
      destaquesList.appendChild(destaqueLiElement);
    }
  });
});