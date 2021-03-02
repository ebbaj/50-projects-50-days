const mainBtn = document.querySelector('.main-btn');
const startScreen = document.querySelector('.start');
const endScreen = document.querySelector('.end');

mainBtn.addEventListener('click', () => {
    startScreen.classList.add('fadeOut');
    endScreen.classList.add('fadeIn');
});