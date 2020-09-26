const bonus = document.getElementById('bonus');
if (bonus) {
  let closeBonus = bonus.querySelector('.bonus__button');
  let showModal = bonus.querySelector('#show-modal-bonus');
  let modal = document.getElementById('modal-bonus');
  let closeModal = modal.querySelector('.modal-bonus__close');
  let footer = document.querySelector('.footer');

  setTimeout(() => {
    bonus.style.display = 'grid';
    footer.classList.add('footer--padding');
  }, 5000);

  closeBonus.addEventListener('click', () => {
    bonus.style.display = 'none';
    footer.classList.remove('footer--padding');
  });
  
  showModal.addEventListener('click', () => modal.style.display = 'grid');
  closeModal.addEventListener('click', () => modal.style.display = 'none');
}