document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     🌙 TEMA CLARO / ESCURO
  ========================== */

  const botao = document.getElementById('botao-tema');
  const body = document.body;

  const temasalvo = localStorage.getItem('tema');
  temaEscuro(temasalvo === 'escuro');

  function temaEscuro(tipo) {
    if (tipo) {
      body.classList.add('escuro');
      if (botao) {
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }
    } else {
      body.classList.remove('escuro');
      if (botao) {
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    }
  }

  if (botao) {
    botao.addEventListener('click', () => {
      const isescuro = body.classList.toggle('escuro');
      temaEscuro(isescuro);
      localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
    });
  }


  /* =========================
     📜 SCROLL SUAVE MENU
  ========================== */

  const navLinks = document.querySelectorAll('#menu ul a.link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  /* =========================
     🍔 MENU LATERAL
  ========================== */

  const menu = document.getElementById('menu-lateral');
  const abrir = document.getElementById('burger');
  const fechar = document.getElementById('fechar');

  if (abrir && menu) {
    abrir.addEventListener('click', () => {
      menu.classList.add('ativo');
    });
  }

  if (fechar && menu) {
    fechar.addEventListener('click', () => {
      menu.classList.remove('ativo');
    });
  }


  /* =========================
     🎯 HEADER MUDA COR NO SCROLL
  ========================== */

  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("rolando");
      } else {
        header.classList.remove("rolando");
      }
    });
  }

});