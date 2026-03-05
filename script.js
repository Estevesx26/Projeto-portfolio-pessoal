document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     🌙 TEMA CLARO / ESCURO
  ========================== */

  const botao = document.getElementById("botao-tema");
  const body = document.body;

  const temaSalvo = localStorage.getItem("tema");
  aplicarTema(temaSalvo === "escuro");

  function aplicarTema(escuro) {
    if (escuro) {
      body.classList.add("escuro");
      if (botao) botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      body.classList.remove("escuro");
      if (botao) botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }

  if (botao) {
    botao.addEventListener("click", () => {
      const escuro = body.classList.toggle("escuro");
      aplicarTema(escuro);
      localStorage.setItem("tema", escuro ? "escuro" : "claro");
    });
  }


  /* =========================
     🍔 MENU LATERAL
  ========================== */

  const menu = document.getElementById("menu-lateral");
  const abrir = document.getElementById("burger");

  if (abrir && menu) {
    abrir.addEventListener("click", () => {

      menu.classList.toggle("ativo");

      if (menu.classList.contains("ativo")) {
        abrir.textContent = "close";
      } else {
        abrir.textContent = "menu";
      }

    });
  }


  /* =========================
     📜 SCROLL SUAVE MENU
  ========================== */

  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {

      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {

        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        // fecha o menu depois de clicar
        if (menu) menu.classList.remove("ativo");
        if (abrir) abrir.textContent = "menu";

      }

    });
  });


  /* =========================
     🎯 HEADER MUDA COR SCROLL
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


  /* =========================
     🛠 CORREÇÃO BUG RESPONSIVO
  ========================== */

  window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
      if (menu) menu.classList.remove("ativo");
      if (abrir) abrir.textContent = "menu";
    }

  });

});