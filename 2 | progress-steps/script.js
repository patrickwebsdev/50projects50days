const progressSteps = document.querySelectorAll('.progress__circle');
const prevButton = document.querySelector('[data-button="prev"]');
const nextButton = document.querySelector('[data-button="next"]');
const calcPercentage = 100 / (progressSteps.length-1);
const progressBar = document.querySelector('.progress');

prevButton.addEventListener('click', () => {
  const progressActive = document.querySelectorAll('.progress__circle--active')
  if(progressActive.length === 2){
    prevButton.disabled = true;
  }
  if(progressSteps.length !== progressActive.length+1) {
    nextButton.disabled = false;
  }
  progressSteps[progressActive.length-1].classList.remove('progress__circle--active');
  const calcMultiply = progressActive.length-2;
  progressBar.style.setProperty('--line-percentage', `${calcPercentage*calcMultiply}%`);
});

nextButton.addEventListener('click', (e) => {
  const progressActive = document.querySelectorAll('.progress__circle--active')
  if(progressSteps.length === progressActive.length+1){
    nextButton.disabled = true;
  }
  if(progressActive.length !== 2){
    prevButton.disabled = false;
  }
  progressSteps[progressActive.length].classList.add('progress__circle--active');
  const calcMultiply = progressActive.length;
  progressBar.style.setProperty('--line-percentage', `${calcPercentage*calcMultiply}%`);
});