const $btnUpButton = document.querySelector('.bnt-up');

const $IconBtn = document.querySelector('.Icon-bnt-up')


document.addEventListener('scroll', ()=>{
    const YIp = document.documentElement.scrollTop;
    if(YIp === 0){
        $btnUpButton.classList.remove('hide')
        $btnUpButton.classList.add('show')
        console.log('try one')
        
    } else if(YIp >= 100)
    {
        console.log('try two')
        $btnUpButton.classList.remove('show')
        $btnUpButton.classList.add('hide')
    }

})