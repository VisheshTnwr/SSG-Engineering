document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('jobModal');
  const closeModalBtn = document.querySelector('.modal-close');
  const applyButtons = document.querySelectorAll('.apply-btn');

  applyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
