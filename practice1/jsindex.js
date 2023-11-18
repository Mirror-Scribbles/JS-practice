const $button1 = document.querySelector('.button1');
const $button2 = document.querySelector('.button2');

const $manin = document.getElementById('mani_body');

// $button1.addEventListener('click', () =>{
//     console.log('this is working now')
//     document.body.style.backgroundColor = 'red'
// }) normal way to do the code, 

$button1.addEventListener('click', () =>{
if($manin.classList.contains('blue__color'))
{$manin.classList.remove('blue__color')
}else{$manin.classList.add('blue__color')}
});

$button2.addEventListener('click', ()=> {
if($manin.classList.contains('red__color')){
    $manin.classList.remove('red__color')
}else if($manin.classList.contains('blue__color')){
    $manin.classList.remove('blue__color')
}else{ $manin.classList.add('red__color')}
});

