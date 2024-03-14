// saving items onto the localStorage

// let mirror =  localStorage.setItem('mirror','andres');
// localStorage.setItem('mirror2','julian');

// getting the item from local storage!

// console.log(localStorage.getItem('mirror2'))

// deleting one item from the localStorage.
// localStorage.removeItem('mirror');

// deleting all elements from the localStorage

// localStorage.clear();


// Creating a list and saving it onto the localStorage!

// console.log(localStorage.getItem('mirror2'))

// Lst = [{
//     name: 'ector',
//     age: 35
// },
// {
//     name: 'carlos',
//     age: 49
// }
// ];

// localStorage.setItem('List', JSON.stringify(Lst))

const List1 = JSON.parse(localStorage.getItem('List'));

console.log(List1);

List1.forEach(element => {
let $documents = document.querySelector('.Dive');
let $newDiv = document.createElement('div');

$newDiv.innerHTML = `${element.name}, ${element.age}`

$documents.appendChild($newDiv);
});



