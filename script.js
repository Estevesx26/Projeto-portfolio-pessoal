document.addEventListener("DOMContentLoaded", function () {

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

  const menu = document.getElementById("menu-lateral");
  const abrir = document.getElementById("burger");

  if (abrir && menu) {
    abrir.addEventListener("click", () => {

      menu.classList.add("animando");

      menu.classList.toggle("ativo");

      setTimeout(() => menu.classList.remove("animando"), 300);

      abrir.textContent = menu.classList.contains("ativo") ? "close" : "menu";
    });

    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener("click", () => {
        if(menu.classList.contains("ativo")){
          menu.classList.add("animando");
          menu.classList.remove("ativo");
          setTimeout(() => menu.classList.remove("animando"), 300);
          abrir.textContent = "menu";
        }
      });
    });
  }

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
      }
    });
  });

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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      if (menu) menu.classList.remove("ativo");
      if (abrir) abrir.textContent = "menu";
    }
  });

});