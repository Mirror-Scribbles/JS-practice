
//1  first try: status filed.



// var request = $.ajax({
//     method: "GET",
//     URL: 'https://jsonplaceholder.typicode.com/users'
// }).done(console.log(request));

// ----------------------------------------------------------------------

// 2  secound try : status pending. peticion ajax

// (() => {
//     const $fetch = document.getElementById('fetch'), $fragment = document.createDocumentFragment();

//     fetch('https://jsonplaceholder.typicode.com/users')
//     // .then((res) =>{
//     //     console.log(res);
//     //     return res.okay ? res.json(): Promise.reject(res);
//     // })
//     .then((res) => res.okay ? res.json(): Promise.reject(res))
//     .then((json) => {
//         console.log(json);
//         // $fetch.innerHTML = json;
//     })
//     .catch((err) => {
//         console.log(err)
//         let message = err.statusText || 'there is an error'; 
//         fetch.innerHTML = `Error ${err.status}: ${message}`;
//     })
//     .finally(() =>{
//         console.log('This is the end of the code')
//     })
// })();

// second chance ajax fetch


const $fetch = document.getElementById('Fetch'), $fragment = document.createDocumentFragment();
(() =>{
    fetch('https://jsonplaceholder.typicode.com/user').then((res) =>{console.log(res)
    return res.ok ? res.json() : Promise.reject(res)
}).then((json)=>{
    console.log(json);
    json.forEach(el => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name}, ${el.email}, ${el.phone}`
        $fragment.appendChild($li)
    });
    $fetch.appendChild($fragment)
}).catch((err) =>{
let message = err.statusText || `We're working on getting this fix for you.`
$fetch.innerHTML = `error; ${err.status}; ${message}`
})
})();


