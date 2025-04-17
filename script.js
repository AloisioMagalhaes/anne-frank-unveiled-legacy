
// Código JavaScript para o site Anne Frank: Legado Revelado

document.addEventListener('DOMContentLoaded', () => {
  // Gerenciamento do menu de navegação móvel
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('navigation__menu-toggle--active');
      menu.classList.toggle('navigation__menu--active');
    });
  }
  
  // Destacar link atual de navegação
  const highlightCurrentPage = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navigation__link');
    
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      
      // A página inicial é um caso especial
      if (currentPath === '/' && linkPath === '/') {
        link.classList.add('navigation__link--active');
      }
      // Para outras páginas, verifique se o caminho do link está contido no caminho atual
      else if (currentPath !== '/' && linkPath !== '/' && currentPath.includes(linkPath)) {
        link.classList.add('navigation__link--active');
      } else {
        link.classList.remove('navigation__link--active');
      }
    });
  };
  
  highlightCurrentPage();
  
  // Animações ao rolar a página
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature, .quote__block, .about__container');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
      // Configurar estilo inicial para animação
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      // Observar o elemento
      observer.observe(element);
    });
  };
  
  // Iniciar animação após um pequeno atraso para garantir que os estilos iniciais sejam aplicados
  setTimeout(animateOnScroll, 100);
  
  // Easter egg de aniversário de Anne Frank
  const today = new Date();
  const annesBirthday = new Date(today.getFullYear(), 5, 12); // 12 de junho
  
  // Verificar se hoje é o aniversário de Anne Frank
  if (today.getDate() === annesBirthday.getDate() && today.getMonth() === annesBirthday.getMonth()) {
    // Criar um elemento para mostrar a mensagem de aniversário
    const birthdayMessage = document.createElement('div');
    birthdayMessage.className = 'birthday-message';
    birthdayMessage.innerHTML = `
      <div class="birthday-message__content">
        <h3>Hoje é o aniversário de Anne Frank!</h3>
        <p>Em memória de Anne Frank, nascida em 12 de junho de 1929.</p>
        <button class="birthday-message__close">Fechar</button>
      </div>
    `;
    
    // Estilizar o elemento
    const style = document.createElement('style');
    style.textContent = `
      .birthday-message {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: white;
        border-left: 4px solid var(--anne-sepia);
        border-radius: 4px;
        padding: 15px;
        box-shadow: var(--shadow-md);
        z-index: 1000;
        animation: slideIn 0.5s ease forwards;
      }
      
      .birthday-message__content h3 {
        margin-bottom: 8px;
        font-size: 18px;
      }
      
      .birthday-message__content p {
        margin-bottom: 12px;
        font-size: 14px;
        color: var(--anne-gray-dark);
      }
      
      .birthday-message__close {
        background-color: var(--anne-sepia);
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(birthdayMessage);
    
    // Adicionar funcionalidade ao botão de fechar
    const closeButton = birthdayMessage.querySelector('.birthday-message__close');
    closeButton.addEventListener('click', () => {
      birthdayMessage.style.animation = 'slideIn 0.5s ease backwards reverse';
      setTimeout(() => birthdayMessage.remove(), 500);
    });
  }
});
