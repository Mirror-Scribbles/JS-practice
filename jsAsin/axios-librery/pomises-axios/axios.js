(()=>{
    const $axiosdDocs = document.getElementById('axios'), $fragment = document.createDocumentFragment();

    axios
    .get('https://jsonplaceholder.typicode.com/user').then((res) => {
        console.log(res)
    let json = res.data;

    json.forEach((el) => {
    const $li = document.createElement('li');
    $li.innerHTML = `${el.name} -- ${el.phone} --- ${el.username} --- ${el.address}`
    $fragment.appendChild($li)
    });
    $axiosdDocs.appendChild($fragment)
    }).catch((err) => {
    console.log('we are at the catch', err.response)
    let message = err.response.statusText || 'there is an error'; 
    $axiosdDocs.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => console.log('This will be executed regardless the result'));
}
)();