const $morpheusInner = document.querySelector('.morpheus')

window.addEventListener('scroll', ()=>{
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement;

    scrollTop + clientHeight >= scrollHeight - 4 && setTimeout(loader, 1000)
})

const loader = () =>{
const newLi = document.createElement('li');
newLi.classList.add('Killer-joy')
$morpheusInner.appendChild(newLi);
}