const $input = document.querySelector('.input-form'),
$BtnAddNewTaskInput = document.querySelector('.Add-ListTask'),
$ulTaskList = document.querySelector('.task-List'),
$EmptyDivList = document.querySelector('.empty');

const $title = document.querySelector('.title');

const $newLi = document.querySelector('lik');

$BtnAddNewTaskInput.addEventListener('click', (event) =>{
    event.preventDefault();
    // console.log(event)

    const value = $input.value;
    if(!value.trim()){
        $title.textContent = 'Empty form content!';

        setTimeout(()=>{
            $title.textContent = 'Form';
        },2000)
    };
    if(value){
        const $liContent = document.createElement('li'),
        $pContent = document.createElement('p');
        $EmptyDivList.style.display = 'none'



        $pContent.innerHTML = value;
        $liContent.appendChild($pContent);
        $liContent.appendChild(deleteButton());
        $ulTaskList.appendChild($liContent);

        $input.value = '';

    }
})

const deleteButton = () =>{
    const $deleteBtn = document.createElement('button');
    $deleteBtn.textContent = 'X';

    $deleteBtn.addEventListener('click', (e)=>{
        const item = e.target.parentElement;
        $ulTaskList.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0){
            $EmptyDivList.style.display = 'block'
        }
    });

    return $deleteBtn;
};



// if(!content.trim()){
//     console.log('form no valid')
//     $title.textContent = 'Empty form!';
    
//     setTimeout( () =>{
// $title.textContent = 'form';
//     },2000)
//     return
// }if(content !== ''){};