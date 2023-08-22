let currentSlide = 0
let slideCount = 0

document.addEventListener('DOMContentLoaded', function () {
    moveSlide()
    slideCount = document.querySelectorAll('#slider #slides .slide').length
}, false);

const moveSlide = () => {
    let slides = document.querySelectorAll('#slider #slides .slide');
    slides.forEach(slide => {
        slide.style.transform =  'translateX(' + -100 * currentSlide + '%)'
        slide.style.transition = 'all 0.5s'
        slide.style['transition-timing-function'] = 'ease-in-out'
    })
}
const nextSlide = () => {

    if(currentSlide +1 < slideCount) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }

    moveSlide()
}

const prevSlide = () => {

    if(currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slideCount - 1;
    }
    moveSlide()
}

