
// first try: status filed.

// var request = $.ajax({
//     method: "GET",
//     URL: 'https://jsonplaceholder.typicode.com/users'
// }).done(console.log(request));

// secound try : status pending. peticion ajax

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






// third try pending, peticion : XMLHttpRequest. 


const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};








