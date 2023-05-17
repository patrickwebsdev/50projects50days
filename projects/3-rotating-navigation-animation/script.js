const menu = document.querySelector('.menu');
const main = document.querySelector('.main__container');
const nav = document.querySelector('.nav');


menu.addEventListener("click", (e) => {
  if(menu.classList.contains('active')){
    menu.classList.remove('active');
    main.classList.remove('active');
    nav.classList.remove('active');
  }
  else {
    menu.classList.add('active');
    main.classList.add('active');
    nav.classList.add('active');
  }
});