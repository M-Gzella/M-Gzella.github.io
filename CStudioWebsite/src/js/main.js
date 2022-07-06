let navItems
let navBtn
let allImg
let moduloImg
let clickedImg
let moduloCloseBtn
let modalShadow
let arrows
let photoBody
let arrowsUp
let photoBtn
let videoBtn
let photoSection
let videoSection


AOS.init({
    once: true
  });

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    navItems = document.querySelectorAll('.nav-link')
    navBtn = document.querySelector('.navbar-collapse')
    allImg = document.querySelectorAll('.img')
    moduloImg = document.querySelector('.zoom-img')
    clickedImg = document.querySelector('img')
    moduloCloseBtn = document.querySelector('.close-btn')
    modalShadow = document.querySelector('.zoom-shadow')
    arrows = document.querySelectorAll('.show-body-btn')
    photoBody = document.querySelectorAll('.photo-body')
    arrowsUp = document.querySelectorAll('.arrow-up')
    photoBtn = document.querySelector('.photo-btn')
    videoBtn = document.querySelector('.video-btn')
    photoSection = document.querySelector('.photo-list')
    videoSection = document.querySelector('.video-list')
}





const prepareDOMEvents = () => {
    navItems.forEach(item =>{
        item.addEventListener('click', handleNav)
    })

    allImg.forEach(img =>{
        img.addEventListener('click', imgClick)
    })

    moduloCloseBtn.addEventListener('click', closeModulo)

   
    arrows.forEach(arrow =>{
        arrow.addEventListener('click', handleBody)
    })

    arrowsUp.forEach(arrow =>{
        arrow.addEventListener('click', handleHideBody)
    })

    photoBtn.addEventListener('click', showPhotoSection)

    videoBtn.addEventListener('click', showVideoSection)

}






const imgClick = (e) => {
    const currentImg = e.target.src
    clickedImg.setAttribute('src', `${currentImg}`)

    moduloImg.style.display = 'flex';
}

const closeModulo = () => {
    moduloImg.style.display = 'none';
}




const handleNav = () => {
    navBtn.classList.remove('show')
}


const handleBody = (e) => {
   const photoImg = e.target.closest('.photo-img');
   const photoBody = photoImg.nextElementSibling;
 
   photoBody.style.display = 'block'
   e.target.style.display ='none'
}

const handleHideBody = (e) => {
    const photoBtns = e.target.closest('.photo-btns')
    const photoBody = photoBtns.parentElement
    const photoImg = photoBody.previousElementSibling
    const arrowButton = photoImg.lastElementChild
    const arrowDown = arrowButton.lastChild

    arrowDown.style.display = 'block'
    photoBody.style.display = 'none'
}


const showPhotoSection = () => {
    videoSection.style.display = 'none'
    photoSection.style.display = 'flex'
}

const showVideoSection = () => {
    photoSection.style.display = 'none'
    videoSection.style.display = 'flex'
}






window.addEventListener('click', (e) => e.target === modalShadow ? closeModulo() : false)
document.addEventListener('DOMContentLoaded', main);