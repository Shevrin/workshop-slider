const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sideBar.style.top = `-${slidesCount - 1}00vh`;

upBtn.addEventListener('click', () => { changeSlide('up') });
downBtn.addEventListener('click', () => { changeSlide('down') });
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
});
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    }
});


const changeSlide = (direction) => {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction = 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
};
