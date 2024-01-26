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

    const $liContent = (task) => {
        const liElement = `   
        <li class="" id="">
            <p class="" id="">
                ${task}
            </p>
        </li>`

    
        $ulTaskList.insertAdjacentHTML('beforebegin', liElement);  
    };
    $BtnAddNewTaskInput.addEventListener('click', () => {
        const task = $input.value;
        if(task) {
                addTask(task)
        }
    }
    )

    // const $li = document.createElement('li')
    // $li.classList.add('crossed-out');
    // $li.textContent = content;
    // console.log(content)

// $ulTaskList.appendChild($li);
$input.value = '';
}
}); 
$liContent();