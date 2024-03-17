const Box =document.querySelector('.box')
const Emoji = document.querySelectorAll('.emoji')
const Btn = document.querySelector('.btn')
const Container = document.querySelector('.container')
 
const selected = 'Satisfied'

Box.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('emoji') && e.target.nextElementSibling) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selected = e.target.nextElementSibling.innerHTML
    } else if(
        e.target.parentNode.classList.contains('emoji') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selected = e.target.innerHTML
    }
})
Btn.addEventListener('click', (e) => {
    Container.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selected}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})
function removeActive() {
    for(let i = 0; i < Emoji.length; i++) {
        Emoji[i].classList.remove('active')
    }
}