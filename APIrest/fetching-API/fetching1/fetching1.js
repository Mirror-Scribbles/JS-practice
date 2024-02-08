const $fetchUl = document.querySelector('.fetch'), $fragment = document.createDocumentFragment();

const $fetchBtn = document.querySelector('.button-fetch');


$fetchBtn.addEventListener('click', () =>{
    const fetchData = () =>{ 
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.ok? res.json() : res.reject(res)).then(json => { 
            console.log(json)

            json.forEach(item => {
                const $li = document.createElement('li');
                $li.innerHTML = `${item.id}, -- ${item.name}, -- ${item.email}`
                $fragment.appendChild($li); 
            });
            $fetchUl.appendChild($fragment);
        })
    };
fetchData();
});








// https://pokeapi.co/api/v2/pokemon/pikachu