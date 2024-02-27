// Dados simulados com outros tipos de alimentos
const dados = [
  { quantidade: '100kgs', alimento: 'Arroz', distancia: '10', descricao: ' ' },
  { quantidade: '30kgs', alimento: 'Feijão', distancia: '5', descricao: ' ' },
  { quantidade: '35kgs', alimento: 'Outros', distancia: '15', descricao: 'Macarrão' },
  { quantidade: '25kgs', alimento: 'Legumes', distancia: '20', descricao: ' ' },
  { quantidade: '20kgs', alimento: 'Outros', distancia: '12', descricao: 'Farinha' },
  { quantidade: '20kgs', alimento: 'Feijão', distancia: '8', descricao: ' ' },
  { quantidade: '30kgs', alimento: 'Frutas', distancia: '18', descricao: ' ' },
  { quantidade: '25kgs', alimento: 'Arroz', distancia: '25', descricao: ' ' },
  { quantidade: '20kgs', alimento: 'Legumes', distancia: '6', descricao: ' ' },
  { quantidade: '25kgs', alimento: 'Feijão', distancia: '9', descricao: ' ' },
  { quantidade: '30kgs', alimento: 'Carne', distancia: '15', descricao: ' ' },
  { quantidade: '15kgs', alimento: 'Frutas', distancia: '15', descricao: ' ' }
  // Adicione mais dados conforme necessário
];

// Função para criar um card com base nos dados fornecidos
function criarCard(doacao) {
  const card = document.createElement('div');
  card.classList.add('card-doacao');

  const info = document.createElement('div');
  info.classList.add('info');
  info.innerHTML = `
      <p><strong>${doacao.quantidade}</strong> ${doacao.alimento}</p>
      <p>Há <strong>${doacao.distancia}</strong> Km</p>
      <p><strong>Descrição:</strong> ${doacao.descricao}</p> <!-- Adicionando a descrição como texto -->
  `;

  const button = document.createElement('button');
  button.classList.add('btn-aceitar');
  button.textContent = 'Acompanhar';
  // button.textContent = tipoPerfil === 'empresa' ? 'Acompanhar' : 'Aceitar';

  card.appendChild(document.createElement('h2')).textContent = 'Doação';
  card.appendChild(info);
  card.appendChild(button);

  return card;
}

// Função para adicionar os cards à página
function adicionarCards() {
  const container = document.getElementById('cards-container');
  dados.forEach(doacao => {
      const card = criarCard(doacao);
      container.appendChild(card);
  });
}

// const tipoPerfil = 'empresa'; // ou 'ong'
// Chamar a função para adicionar os cards à página
adicionarCards();
