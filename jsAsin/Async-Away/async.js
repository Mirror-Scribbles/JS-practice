// async function myDisplay(){
//     let promise = new promise(function(resolve, reject){
//         resolve('I love you');
//     });
    
//     document.querySelector('.PClass').innerHTML = await promise;
// }
// myDisplay() away failed






// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((json) => console.log(json)).catch((err) => {
//     console.log(err)
// });

// const functionPromiseWithAsyncAway = async () =>{
// fetch('https://jsonplaceholder.typicode.com/users')
// const json = await dateUser.json();
// if(dateUser.readystate == 4 &&  dateUser.status == 200){
// return json;
// }else{
//     throw Error('file does not exist')
// }
// }
// functionPromiseWithAsyncAway().then(res => consol(res)).catch(err => console.log(err))


// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then((result) => result.json()  
// ).then((json) => { 
// console.log(json)
// }).catch((err) => {
//     console.log(err)
// }).finally( ()=> console.log('the promise has ended'));

// reference : https://www.youtube.com/watch?v=iqtpnzXVmsk

async function fetchPokeAPI1() {
    try {
        const pokeIPA = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        const jsonData = await pokeIPA.json() 
        console.log(jsonData)
    } catch (error) {
        console.log('error in the a AIP');
    }
}fetchPokeAPI1()

const fetchPokeAPI2 = async () =>{
    try {
        const pokeIPA = await  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        const pokeData =  await pokeIPA.json()
        console.log(pokeData);
    } catch {
        console.log(err)
    }
}
fetchPokeAPI2();

// https://www.youtube.com/watch?v=rKK1q7nFt7M

const placeHolderAsyncAwait = async () => {
try {
    const datafetch = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonData =  await datafetch.json()
    console.log(jsonData)
} catch (error) {
    console.log('no file as been found in your local storage')
}
}
placeHolderAsyncAwait();

(() => {
const promise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(promise => promise.json())
.then(json => console.log(json))
})();