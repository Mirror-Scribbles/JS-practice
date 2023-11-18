const $buttonRed1 = document.querySelector('.button1');
const $buttonBlue2 = document.querySelector('.button2');
const $resetColors = document.querySelector('.reset')

const $manin = document.getElementById('mani_body');

// $button1.addEventListener('click', () =>{
//     console.log('this is working now')
//     document.body.style.backgroundColor = 'red'
// }) normal way to do the code, 

$buttonRed1.addEventListener('click', () =>{
if($manin.classList.contains('blue__color'))
{$manin.classList.remove('blue__color')
}else if ($manin.classList.contains('red__color')){
$manin.classList.remove('red__color')
console.log('removing red color')
}else{
    $manin.classList.add('blue__color')
}
});
$buttonBlue2.addEventListener('click', ()=> {
if($manin.classList.contains('red__color')){
    $manin.classList.remove('red__color')
}else if($manin.classList.contains('blue__color')){
    $manin.classList.remove('blue__color')
    console.log('removing blue color')

}else{ $manin.classList.add('red__color')}
});

$resetColors.addEventListener('click', () => {
if($manin.classList.contains('red__color')){
    $manin.classList.remove('red__color')
}else if($manin.classList.contains('blue__color')){
    $manin.classList.remove('blue__color')
}else{
    alert('There is not background to remove')
}
})



