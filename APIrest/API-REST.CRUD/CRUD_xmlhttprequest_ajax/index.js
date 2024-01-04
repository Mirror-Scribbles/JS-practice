const d = document, 
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-table"),
$template = d.getElementById(".crud-template").content,
$fragment = d.createDocumentFragment();

const ajax = (Options) =>{
    let {URL, method, success, data, error} = Options
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', (e)=>{
});
xhr.open(method || 'GET', URL)
}