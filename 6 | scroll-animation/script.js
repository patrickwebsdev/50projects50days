const scrollContainer = document.querySelectorAll('.scroll__container');

const callback = function(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.boundingClientRect.bottom);
    let prevRatio = entry.target.offsetTop;
    if(entry.isIntersecting){
      entry.target.classList.add('scroll__container--show');
    }
    if(!entry.isIntersecting && entry.boundingClientRect.bottom > window.innerHeight) {
      entry.target.classList.remove('scroll__container--show');
      entry.target.classList.add('scroll__container--hide');
    }
  });
};
const observer = new IntersectionObserver(callback, {
  rootMargin: '0px 0px 25px 0px',
  threshold: 1
});

scrollContainer.forEach((element) => {
  observer.observe(element);
})