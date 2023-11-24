const $asynchronous = document.getElementById('Asynchronous');
const $noAsynchronous  = document.getElementById('non-asynchronous');

let x = 5;
let y = 9;

let testOut = () => {
   return setTimeout(()=> {
   console.log(x*y)
   }, 3000)
}
$asynchronous.addEventListener('dblclick', testOut);

// non asynchronous try


let noAsynFaction = ()=> {
console.log(5*9)
}

$noAsynchronous.addEventListener('dblclick', noAsynFaction); 