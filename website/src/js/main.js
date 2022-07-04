let nav
let burgerBtn
let navItems
let allSections
let sendBtn
let nameInput
let emailInput
let textInput
let emailError
let sentText


let root = document.documentElement;



const main = () => {
    preapreDOMElements()
    prepareDOMEvents()
}

const preapreDOMElements = () => {
    nav = document.querySelector('.nav')
    burgerBtn = document.querySelector('.hamburger-box__btn')
    navItems = document.querySelectorAll('.nav__list__item')
    allSections = document.querySelectorAll('section')
    sendBtn = document.querySelector('.send-btn')
    nameInput = document.querySelector('#name')
    emailInput = document.querySelector('#email')
    textInput = document.querySelector('#message')
    emailError = document.querySelector('.wrong-email')
    sentText = document.querySelector('.sent-text')
}

const prepareDOMEvents = () => {
    burgerBtn.addEventListener('click', handleNav)

    navItems.forEach(item =>{
        item.addEventListener('click', handleCloseNav)
    })

    window.addEventListener('scroll', handleObserver)

    sendBtn.addEventListener('click', checkInputs)
}




const handleNav = () => {
    nav.classList.toggle('nav-active')
}

const handleCloseNav = () => {
    nav.classList.remove('nav-active')
}

const handleObserver = () => {
    const currentSection = window.scrollY

    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            root.style.setProperty('--bars', '#000000')
            
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            root.style.setProperty('--bars', '#ffffff')
        }

    })
}

const checkInputs = () => {
    checkForm([nameInput,emailInput,textInput])
    checkEmail(emailInput)
    sendMsg([nameInput,emailInput,textInput])
}

const checkForm = (input) => {
    input.forEach(el =>{
        if(el.value===''){
            el.classList.add('input-error')
        }else{
            el.classList.remove('input-error')
        }
    })
    
}

const checkEmail = (emailInput) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(re.test(emailInput.value)){
        emailError.lastChild.innerHTML = ''
    }else{
        emailError.lastChild.innerHTML = 'Wrong e-mail!'
        emailInput.classList.add('input-error')
       
    }
}

const sendMsg = (inputs) => {
    let error = 0
    inputs.forEach(input =>{
    if(input.classList.contains('input-error')){
        error++;
    }
 })
 if(error===0){
    sentText.classList.add('sent-msg-animation')
    clear()
 }
}

const clear = () => {
    nameInput.value='';
    emailInput.value='';
    textInput.value='';
    setTimeout( () =>{
        sentText.classList.remove('sent-msg-animation')
    }, 10000)
}







document.addEventListener('DOMContentLoaded', main)