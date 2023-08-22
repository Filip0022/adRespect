let galleryShowed = false

const toggleGallery = () => {
    const rel = document.getElementById('realization');
    const button = document.getElementById('realization-button');
    if (galleryShowed) {
        rel.style.height = '100rem'
        button.innerText = 'Rozwiń'
    } else {
        rel.style.height = 'auto'
        button.innerText = 'Ukryj'
    }
    galleryShowed = !galleryShowed
}