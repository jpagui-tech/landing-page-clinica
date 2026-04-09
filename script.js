const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value.trim();

    if (!nome || !email || !cidade || !estado) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    alert('Obrigado! Sua solicitação foi enviada com sucesso.');
    contactForm.reset();
  });
}
