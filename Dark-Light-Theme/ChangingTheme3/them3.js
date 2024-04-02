const d = document;

const $buttonTheme = d.querySelector('.dark-theme-btn'),

$selectors = d.querySelectorAll('[data-dark]');

console.log($selectors)

let moon = '🌚';

let sun = '☀️';

d.addEventListener('click', (e)=>{
if($buttonTheme.textContent === moon){
$selectors.forEach(el => el.classList.add('dark-mode'))
$buttonTheme.textContent = sun;
}else{
    $selectors.forEach(el => el.classList.remove('dark-mode'))
    $buttonTheme.textContent = moon; 
}
})
console.log($buttonTheme.textContent)
