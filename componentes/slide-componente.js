const slider = document.querySelector(".slider")

slider.innerHTML = `
<div class="slides">
      <!-- Radio buttons -->
      <input type="radio" name="radio-btn" id="radio1">
      <input type="radio" name="radio-btn" id="radio2">
      <input type="radio" name="radio-btn" id="radio3">
      <input type="radio" name="radio-btn" id="radio4">
      <!-- Fim radio buttons -->

      <!-- Imagens do slide -->
      <div class="slide first">
        <img src="/src/imagens-projeto/novo_banner1.jpg" alt="banner-principal">
      </div>
      <div class="slide">
        <img src="/src/imagens-projeto/novo_banner2.jpg" alt="slide-2">
      </div>
      <div class="slide">
        <img src="/src/imagens-projeto/novo_banner3.jpg" alt="slide-3">
      </div>
      <div class="slide">
        <img src="/src/imagens-projeto/novo_banner4.jpg" alt="slide-4">
      </div>
      <!-- Fim imagens slide -->

      <!-- Navigation Auto -->
      <div class="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
        <div class="auto-btn4"></div>
      </div>


    </div>
    <div class="manual-navigation">
      <label for="radio1" class="manual-btn"></label>
      <label for="radio2" class="manual-btn"></label>
      <label for="radio3" class="manual-btn"></label>
      <label for="radio4" class="manual-btn"></label>
    </div>
`

// slide-componente.js

document.addEventListener("DOMContentLoaded", function () {
  iniciarSlideAutomatico();
});

// Restante do código do seu componente
