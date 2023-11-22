
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

// second chance ajax


// third try pending, peticion : XMLHttpRequest. 


// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.send();
// xhr.responseType = "json";
// xhr.onload = () => {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     const data = xhr.response;
//     console.log(data);
//   } else {
//     console.log(`Error: ${xhr.status}`);
//   }
// };



// 2,0 check failed

// (() => {
//     let xhttp = new XMLHttpRequest();
//     const URL = 'https://jsonplaceholder.typicode.com/users';
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status === 200){
//             const data = xhttp.response;
//             console.log(data)
//         }else{console.log(`error ${this.status}`)}
//         xhttp.open('GET');
//         xhttp.send();
//         xhttp.responseType = 'json';
//     }
// })();


// 2.1 // second chance hXMLHttpRequest


// (() =>{
//     const xmlttp = new XMLHttpRequest();
//     xmlttp.open('GET','https://jsonplaceholder.typicode.com/users');
//     xmlttp.send()
//     xmlttp.responseType = 'json'
//     xmlttp.onload = () => {
//         if(xmlttp.readyState == 4 && xmlttp.status == 200){
//             const data = xmlttp.response;
//             console.log(data)
//         }else{
//             console.log(`an error accoured getting the data ready at ${xmlttp.status}`)
//         }
//     }
// })();


// 2.2


// hacer una peticion con xmlttprequest y ponerla en el doom

const $lixx = document.getElementById('lix'), $fragment = document.createDocumentFragment();

const request4 = () => {

    const xmlttp6 = new XMLHttpRequest();
    xmlttp6.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xmlttp6.send();
    xmlttp6.responseType = 'json';
    xmlttp6.onload = () =>{
        if(xmlttp6.readyState == 4 && xmlttp6.status == 200){
            const dataBase = xmlttp6.response;
            console.log(dataBase)
        }else{
            console.log('an error is here')
        }
    }

}
request4();











