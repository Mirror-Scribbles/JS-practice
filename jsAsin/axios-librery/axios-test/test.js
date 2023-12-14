(() =>{
    const $pokeAxios = document.getElementById('pokeId2'), $fragment = document.createDocumentFragment();


    axios
    .get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((res) => {
console.log(res)
    }).catch((err) => {
        
    });
})();