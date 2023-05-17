const buttons = document.querySelector('.buttons');
const audios = document.querySelectorAll('.audios__audio');

buttons.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON'){
    stopSound();
    document.getElementById(e.target.getAttribute('data-sound')).play();
  }
});

const stopSound = () => {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}