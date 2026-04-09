const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value.trim();

    if (!nome || !email || !telefone || !cidade || !estado) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    alert('Obrigado! Sua solicitação foi enviada com sucesso.');
    contactForm.reset();
  });
}

const profileCards = document.querySelectorAll('.team-card[data-profile]');

profileCards.forEach((card) => {
  const openProfile = () => {
    const profile = card.dataset.profile;
    if (profile) {
      window.location.href = `${profile}.html`;
    }
  };

  card.addEventListener('click', openProfile);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProfile();
    }
  });
});

const interactiveCards = document.querySelectorAll('.interactive-card');
const interactiveDetail = document.getElementById('interactiveDetail');

interactiveCards.forEach((card) => {
  card.addEventListener('click', () => {
    interactiveCards.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });

    card.classList.add('active');
    card.setAttribute('aria-pressed', 'true');
    interactiveDetail.textContent = card.dataset.detail;
  });
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

reveals.forEach((reveal) => {
  revealObserver.observe(reveal);
});
