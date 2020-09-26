const menu = document.querySelector('.menu');
if (menu && window.matchMedia('screen and (max-width: 1279px)').matches) {
  subLists = menu.querySelectorAll('.menu__sublist');
  if (subLists.length) {
    subLists.forEach((item) => {
      let parent = item.closest('.menu__item');
      let link = parent.querySelector('.menu__link');
      link.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('menu__sublist--open');
      });
    });
  }
}
