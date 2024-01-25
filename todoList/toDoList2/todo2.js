const $input = document.querySelector('.input-form'),
$BtnAddNewTaskInput = document.querySelector('.Add-ListTask'),
$ulTaskList = document.querySelector('.task-List'),
$EmptyDivList = document.querySelector('.empty');

const $title = document.querySelector('.title');

$BtnAddNewTaskInput.addEventListener('click', (e) =>{
    e.preventDefault();
    // console.log(e);

const content = $input.value;

if(!content.trim()){
    console.log('form no valid')
    $title.textContent = 'Empty form!';
    
    setTimeout( () =>{
$title.textContent = 'form';
    },2000)
    return
}if(content !== ''){
    const $li = document.createElement('li')
    $li.classList.add('crossed-out');
    $pList = document.createElement('p');
    $pList.textContent = content;
    console.log(content)

$li.appendChild($pList)
$ulTaskList.appendChild($li);
$input.value = '';

}
})