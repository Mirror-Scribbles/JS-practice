const $backgroundBtn  = document.querySelector('.btn-BackGround');
const $buttonCleaner = document.querySelector('.clean-btn');


const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.innerHTML = "#" + randomColor;
    }
    $backgroundBtn.addEventListener('click', setBg)


    // const $button1 = document.querySelector('.button1');
    // const $button2 = document.querySelector('.button2');
    // const $button3 = document.querySelector('.button3');
    // const $button4 = document.querySelector('.button4');

    // $button1.addEventListener('click', () => {
    //     console.log("you did click in the first button")
    // });

    // $button2.addEventListener('click', () => {
    //     console.log("you did click in the second button")
    // });

    // $button3.addEventListener('click', () => {
    //     console.log("you did click in the third button")
    // });

    // $button4.addEventListener('click', () => {
    //     console.log("you did click in the fourth button")
    // });