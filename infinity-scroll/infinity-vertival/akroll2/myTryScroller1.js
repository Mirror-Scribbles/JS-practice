const $morpheusDiv = document.querySelector('.morpheus')
const $spinner = document.querySelector('.spinner')
const $divSpinner = document.querySelector('.div-spinner')

window.addEventListener('scroll', ()=>{
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement;

    scrollTop + clientHeight >= scrollHeight - 4 && setTimeout(loader, 1000);

    $spinner.classList.add('.spinner-hidden');
    $spinner.addEventListener('transitioned', (e)=>{
        document.body.removeChild($divSpinner)

        console.log(e)
    })
})

const loader = () =>{

const $KillerMorpheusUl = document.querySelector('.Killer-morpheus');
const KillerMorpheusContent = Array.from($KillerMorpheusUl.children)
KillerMorpheusContent.forEach(item =>{

    const duplicateNode = item.cloneNode(true)
    $KillerMorpheusUl.appendChild(duplicateNode)
})
}
