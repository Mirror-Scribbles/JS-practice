const $morpheusDiv = document.querySelector('.morpheus');
const $spinner = document.querySelector('.spinner');
const $divSpinner = document.querySelector('.div-spinner');
const $upButton = document.getElementById('up-btn');



window.addEventListener('scroll', ()=>{
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight - 4){
        console.log(scrollTop, ' = scrollTop' )
        console.log(clientHeight, '= clientHeight')
        console.log(scrollHeight, ' = scrollHeight')
        
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
        }, 1000) };

     const  yTopUp  = document.documentElement.scrollTop;
     let downY = document.documentElement.clientHeight;
    
    if( yTopUp === 0){
        $spinner.classList.add('spinner-hidden')
        $spinner.classList.remove('active-spinner')
    }else if(downY > 300 ){
        $spinner.classList.add('active-spinner')
        $spinner.classList.remove('spinner-hidden')
    }
    
});

document.addEventListener('scroll', (e)=>{
    let y  = document.documentElement.scrollTop;
    if(y === 0){
     $upButton.classList.add('hide-scroll');
     $upButton.classList.remove('active-scroll');
     console.log('the up top button was hided')
    }else{ 
     $upButton.classList.add('active-scroll');
     $upButton.classList.remove('hide-scroll');
     console.log('the up top button is shown now')
    }
 });


document.addEventListener('click', (e) =>{
    if(e.target == $upButton ||e.target.matches('.icon-bnt-up')){
    window.scrollTo({
        behavior: 'smooth',
        top,
    }
    );
    }
    });

