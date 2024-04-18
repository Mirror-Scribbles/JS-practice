const $container = document.querySelector('.container');

window.addEventListener('scroll', ()=>{

    const {scrollHeight, clientHeight, scrollTop} = document.documentElement
    
    scrollTop + clientHeight >= scrollHeight - 4 && setTimeout(newContainer, 1000)

})

const newContainer = ()=> {
    const $NowBox = document.createElement('div')
    
    $NowBox.className = 'love-death-robot g'
    $container.appendChild($NowBox);
}