document.addEventListener("DOMContentLoaded", () => {
  // 1. ANIMAÇÃO DE REVEAL AO SCROLL (EFEITO MODERNO E SUAVE)
  // Criamos um observador que detecta quando os elementos entram na tela
  const revealOptions = {
    threshold: 0.15, // Ativa a animação quando 15% do elemento estiver visível
    rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de chegar ao topo para dar fluidez
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Para de observar após animar (melhor performance)
      }
    });
  }, revealOptions);

  // Seleciona os elementos para animar. Adicionei os cards de depoimento também!
  const elementsToReveal = document.querySelectorAll(".reveal, .testimonial-card, .features-video");
  
  elementsToReveal.forEach(el => {
    // Adiciona a classe base de animação dinamicamente se ela não existir no HTML
    if (!el.classList.contains("reveal")) {
      el.classList.add("reveal");
    }
    revealObserver.observe(el);
  });

  // 2. SCROLL SUAVE PARA OS LINKS DE NAVEGAÇÃO
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // 3. EFEITO PARALLAX SUTIL NO BANNER HERO (MAIS MODERNIDADE)
  const heroSection = document.querySelector(".hero");
  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;
    // Move o fundo do hero mais devagar que o scroll da página, criando profundidade
    if (heroSection && window.innerWidth > 768) {
      heroSection.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
    }
  });

  // 4. INTERATIVIDADE NOS INPUTS DO FORMULÁRIO (MICRO-INTERAÇÕES)
  const formInputs = document.querySelectorAll("input, textarea");
  formInputs.forEach(input => {
    // Efeito visual extra quando o usuário digita algo
    input.addEventListener("blur", () => {
      if (input.value.trim() !== "") {
        input.style.borderColor = "#ff6a00";
      } else {
        input.style.borderColor = "#ccc";
      }
    });
  });
});