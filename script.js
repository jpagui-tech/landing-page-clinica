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
