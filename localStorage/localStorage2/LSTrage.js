const $backgroundBtn  = document.querySelector('.btn-BackGround');
const $buttonCleaner = document.querySelector('.clean-btn');




const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    }

    $backgroundBtn.addEventListener("click", (e) =>{
        const backColor = localStorage.setItem(setBg, 'My')
        const GetBackColor = localStorage.getItem(setBg())
    });