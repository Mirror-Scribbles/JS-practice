const $clock = document.querySelector('.clockFirst');

const $activeBtn = document.querySelector('.turn-on');

const $stop = document.querySelector('.turn-off');

const dateTime = () =>{
    
    let interval = setInterval(() => {

        let $date = new Date().toLocaleTimeString();
        const $clock = document.querySelector('.clockFirst').innerHTML = `<h3>${$date}</h3>`;
        console.log($date)
    },1000)

    $activeBtn.disabled = true;

    $stop.addEventListener('click', )
};
$activeBtn.addEventListener('click', dateTime);
