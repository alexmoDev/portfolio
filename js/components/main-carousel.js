const items = document.querySelector('.main-carousel .items');
const btnRight = document.querySelector('.main-carousel .arrow-button.-right');
const btnLeft = document.querySelector('.main-carousel .arrow-button.-left');
let pixels = 0;

btnRight.addEventListener('click', function() {
    pixels += 130;
    items.style = `transform: translateX(${pixels}px);`;
});

btnLeft.addEventListener('click', function() {
    pixels -= 130;
    items.style = `transform: translateX(${pixels}px);`;
});