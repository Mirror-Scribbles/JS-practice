const $morpheusDiv = document.querySelector('.morpheus');
const $spinner = document.querySelector('.spinner');
const $divSpinner = document.querySelector('.div-spinner');
const $upButton = document.getElementById('up-btn');


window.addEventListener('scroll', ()=>{
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight - 4){
        
        setTimeout(()=>{
            const loader = () =>{

                const $KillerMorpheusUl = document.querySelector('.Killer-morpheus');
                const KillerMorpheusContent = Array.from($KillerMorpheusUl.children)
                KillerMorpheusContent.forEach(item =>{
                
                    const duplicateNode = item.cloneNode(true)
                    $KillerMorpheusUl.appendChild(duplicateNode)
                })
                }
                loader();
        }, 1000)

    }if(scrollTop + clientHeight >= scrollHeight - 4){
        $spinner.classList.add('spinner-hidden')
    }else if(scrollTop + clientHeight < scrollHeight - 4){
        $spinner.classList.remove('spinner-hidden')  
    }
    
})

document.addEventListener('click', (e) =>{
    if(e.target == $upButton ||e.target.matches('.icon-bnt-up')){
    alert('here! JS')
    }
    });

    console.log($divSpinner)
    console.log($morpheusDiv)
    console.log($upButton)
