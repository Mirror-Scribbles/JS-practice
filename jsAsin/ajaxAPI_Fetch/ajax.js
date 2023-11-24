
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

// const $lixx = document.getElementById('lix'), $fragment = document.createDocumentFragment();

// const request4 = () => {

//     const xmlttp6 = new XMLHttpRequest();
//     xmlttp6.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     xmlttp6.send();
//     xmlttp6.responseType = 'json';
//     xmlttp6.onload = () =>{
//         if(xmlttp6.readyState == 4 && xmlttp6.status == 200){
//             const dataBase = xmlttp6.response;
//             console.log(dataBase)
//         }else{
//             console.log('an error is here')
//         }
//     }

// }
// request4();


// fetch and xmlhttprequest 

// (() => { 

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send();
// xhr.responseType = 'json';
// xhr.onload = () =>{
//     if(xhr.readyState === 4 && xhr.status == 200){
//         const data = xhr.response;
//         console.log(data)
//     }else{
//         console.log('new error')
//     }
// }
// })();

// other

(() =>{
  const xhr2 = new XMLHttpRequest();
  const $xhr = document.getElementById('xhr'),
$fragment = document.createDocumentFragment();
xhr2.addEventListener('readystatechange', (e) =>{
  if(  xhr2.readyState !== 4) return; 
  if(xhr2.status >= 200 && xhr2.status < 300){
    console.log('success');
    // $xhr.innerHTML = xhr2.responseText;
    // console.log(xhr2.responseText);
    const json = JSON.parse(xhr2.responseText);
  console.log(json);
    json.forEach((el) => {
    const $li = document.createElement('li');
    $li.innerHTML = `${el.name} --${el.phone} --${el.email}`;
  $fragment.appendChild($li);
    });
    $xhr.appendChild($fragment);
  }else{
    console.log('error')
    let message = xhr2.statusText || 'an error has happened';
    $xhr.innerHTML = `${xhr2.status} ${message}`;
  }
})


xhr2.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr2.send();
})();



(() =>{
  const xhr3 = new XMLHttpRequest();
  const $xhrOl = document.getElementById('xmr3'), $fragment1 = document.createDocumentFragment();
xhr3.addEventListener('readystatechange', (e) =>{
  if(xhr3.readyState !== 4) return;
  if(xhr3.status >= 200 && xhr3.status < 300){

    const json = JSON.parse(xhr3.responseText)
    json.forEach(item => {
      const $li3 = document.createElement('li');
      $li3.innerHTML = `${item.name}, - ${item.email}`
      $fragment1.appendChild($li3)
        });
        $xhrOl.appendChild($fragment1);
  }else{
    let messageError = xhr3.statusText || ` new error getting the data ready, check the URL`
    $xhrOl.innerHTML = `${xhr3.status}, ${messageError}`
  }
})



  xhr3.open('GET', 'https://jsonplaceholder.typicode.com/user')
  xhr3.send();
})();

// fetch


// fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res => console.log(res))
// .catch(err => console.error(err, 'an error here'))






