

const $input = document.querySelector('.input-form'),
$BtnAddNewTaskInput = document.querySelector('.Add-ListTask'),
$EmptyDivList = document.querySelector('.empty');

const $title = document.querySelector('.title');

const $newLi = document.querySelector('.lik');

const $ulList = document.querySelector('.task-ul')


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

        const $liContent = document.createElement('li');
        $EmptyDivList.style.display = 'none'


        $liContent.innerText = value;
        $ulList.appendChild($liContent);
        $liContent.appendChild(deleteButton());
        $ulTaskList.appendChild($liContent);

   

    }

    $input.value = '';

})






// the delete x 

const deleteButton = () =>{

    const $deleteBtn = document.createElement('button');
    $deleteBtn.textContent = 'X';

    $deleteBtn.addEventListener('click', (e)=>{

        const item = e.target.parentElement;
         $ulList.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0){
            
            $EmptyDivList.style.display = 'block'
        }

    });

    return $deleteBtn;
};


