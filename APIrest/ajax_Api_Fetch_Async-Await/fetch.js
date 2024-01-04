(()=>{
   const $FetchAsync = document.getElementById('fetch-async'), $fragment = document.createDocumentFragment();
async function getData(){
try {
    let res = await fetch('https://jsonplaceholder.typicode.com/users-'); 
    let json = await res.json();
    console.log(json, res);

    // if(!res.ok)throw new Error('An error has occurred getting the data');
    if(!res.ok)throw {status: res.status, statusText: res.statusText}

json.forEach(el => {
    const $li = document.createElement('li');
    $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
    $fragment.appendChild($li);
});
$FetchAsync.appendChild($fragment);
} catch (err){
let message = err.statusText || 'An error has occurred'
$FetchAsync.innerHTML = `Error ${err.status}: ${message}`;
}finally{
console.log('this is the finally')
}
}
getData();
})();