function criarHeader() {
  const header = document.createElement('header');

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = './src/logo-projeto/logo-projeto-social.png';
  logo.alt = 'logo mãos unidas';

  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-container';

  const menuList = document.createElement('ul');
  menuList.className = 'menu';

  const menuItems = [
    { text: 'Fome <br>no Brasil', href: '#fome-brasil' },
    { text: 'Nosso<br>Trabalho', href: './pages/nosso-trabalho.html' },
    { text: 'Cadastro <br> Empresas', href: './pages/cadastro-doadores.html' },
    { text: 'Cadastro <br> Ongs', href: './pages/cadastro-ongs.html' },
    { text: 'Parceiros', href: './pages/parceiros.html' },
  ];

  menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.innerHTML = item.text;
    listItem.appendChild(link);
    menuList.appendChild(listItem);
  });

  menuContainer.appendChild(menuList);
  header.appendChild(logo);
  header.appendChild(menuContainer);

  document.body.insertBefore(header, document.body.firstChild);
}

// Chame a função para criar o header
criarHeader();
