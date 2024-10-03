const $input = document.querySelector('.form-control');
const $buttonAddNewTask = document.querySelector('.btn-addTask');
const $ul = document.querySelector('.TaskList');
const $EmptyDiv = document.querySelector('.empty');

$buttonAddNewTask.addEventListener('click', (e)=>{
e.preventDefault();
    console.log(e)

    const text = $input.value;

    if(text !==''){
        const $li = document.createElement('li');
        $p.textContent = text;
    
        $li.appendChild($p);
        $li.appendChild(AddDeleteBtn());
        $ul.appendChild($li);
    
        $input.value ='';
        $EmptyDiv.style.display = 'none';
    };
    
});


const AddDeleteBtn = () =>{
    const $deleteBtn = document.createElement('button');
    $deleteBtn.textContent = 'X';
    $deleteBtn.className = 'btn-delete';

    $deleteBtn.addEventListener('click', (e)=>{
        const item = e.target.parentElement;
        $ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0){
            $EmptyDiv.style.display = 'block'
        }
    });

    return $deleteBtn;
};