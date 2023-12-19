(() =>{
const $axiosAsync = document.getElementById('axiosAsyn'), $fragment = document.createDocumentFragment();

async function getData(){
    try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users'),
        json = await res.data;
        // console.log(json)

    json.forEach(item => {
    const $li = document.createElement('li')
    $li.innerHTML = `${item.name} -- ${item.email} -- ${item.phone}`
    $fragment.appendChild($li);
    });

    $axiosAsync.appendChild($fragment);

    } catch (err) {
        // console.log('we are at the catch', err.response)
    let message = err.response.statusText || 'there is an error'; 
    $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    }
}


getData()
})();