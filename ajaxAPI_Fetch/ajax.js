
// first try: status filed.

// var request = $.ajax({
//     method: "GET",
//     URL: 'https://jsonplaceholder.typicode.com/posts'
// }).done(console.log(request));


// secound try : status pending.

(() => {
    const $fetch = document.getElementById('fetch'), $fragment = document.createDocumentFragment();

    fetch('https://jsonplaceholder.typicode.com/users')
    // .then((res) =>{
    //     console.log(res);
    //     return res.okay ? res.json(): Promise.reject(res);
    // })
    .then((res) => { return res.okay ? res.json() : Promise.reject(res);
    })
    .then((json) => {
        console.log(json);
        // $fetch.innerHTML = json;
    })
    .catch((err) => {
        console.log(err)
        let message = err.statusText || 'there is an error'; 
        fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() =>{
        console.log('This is the end of the code')
    })
})();