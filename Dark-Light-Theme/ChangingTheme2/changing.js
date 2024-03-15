const $changingBackGround = document.querySelector('.button');

$changingBackGround.addEventListener('click', (e)=>{
document.body.classList.toggle('dark-mode');
});