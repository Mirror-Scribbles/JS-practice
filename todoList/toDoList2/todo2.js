

// variables 

let tasks = [];


const $inputTask = document.querySelector('.input-task');

const $addTask = document.querySelector('.Add-ListTask');



// adding tasks to the input

const addTaskValue = () => {

    const itemValue = $inputTask.value.trim();

    console.log(itemValue)

    if(itemValue) {

        tasks.push({text: text});
        $inputTask.value = '';

        updateUI();

    }

};

const updateUI = () => {

    const $listUl = document.querySelector('.task-ul')

    $listUl.innerHTML = '';


  tasks.forEach ( task =>{
    const listItem = document.createElement('.li')

    listItem.innerHTML 
    
    `
                        <li class="li-cons"> 

                        <i class="fa-solid fa-check" ></i>

                        <i class="fa-solid fa-trash-can"></i> 
    `
  });

listItem.addEventListener('change', () => toggle)
};



// Preventing the input loading the page when submitting the task! 

$addTask.addEventListener('click', (e) =>{
    e.preventDefault();



    addTaskValue();
});




























































// const $input = document.querySelector('.input-form'),
// $BtnAddNewTaskInput = document.querySelector('.Add-ListTask'),
// $EmptyDivList = document.querySelector('.empty');

// const $title = document.querySelector('.title');

// const $newLi = document.querySelector('.lik');




// // events




// $BtnAddNewTaskInput.addEventListener('click', (event) =>{
//     event.preventDefault();
//     // console.log(event)

//     const itemValue = $input.value.trim();

//     if(!itemValue){

//         // $title.textContent = 'Empty form content!';

//         // setTimeout(()=>{

//         //     $title.textContent = 'Form';

//         // },2000)


//     };




//     if(itemValue){

//         tasks.push({ itemValue: itemValue, completed: false });
        
//         $liContent.innerText = itemValue;

//         $ulList.appendChild($liContent);

//         $EmptyDivList.style.display = 'none'

//     }

//     $input.value = '';

//     updateTasksUI()

// })



// const updateTasksUI = ()=>{
//     const $ulList = document.querySelector('.task-ul');
//     $ulList.innerHTML = ''; 



//     tasks.forEach((task) => {
        
//         const ItemListLi = document.createElement('li')

//         ItemListLi.innerHTML = `
        
//         `
//     })


// }






// the delete x 

// const deleteButton = () =>{

//     const $deleteBtn = document.createElement('button');
//     $deleteBtn.textContent = 'X';

//     $deleteBtn.addEventListener('click', (e)=>{

//         const item = e.target.parentElement;
//          $ulList.removeChild(item);

//         const items = document.querySelectorAll('li');

//         if (items.length === 0){
            
//             $EmptyDivList.style.display = 'block'
//         }

//     });

//     return $deleteBtn;
// };


