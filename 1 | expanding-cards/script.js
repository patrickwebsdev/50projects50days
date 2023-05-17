const cards = document.querySelector('.card');

cards.addEventListener('click', (e) => {
  if(e.target.classList.contains('card__container')) {
    document.querySelector('.card__container.card__container--active').classList.remove('card__container--active');
    e.target.classList.add('card__container--active');
  }
});