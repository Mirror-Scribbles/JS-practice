
const $btnOn = document.querySelector('.turn-on');

const $btnOff = document.querySelector('.turn-off');

const $btnReset = document.querySelector('.reset-btn');

let $TimeZone = document.querySelector('.clockSecond');

const $clock2 = document.querySelector('.clockFirst');

let stopInterval;

function dayTime() {

    let date = new Date();
    
    let hh = date.getHours();

    let mm = date.getMinutes();

    let ss = date.getSeconds();

    let am;

    hh = (hh < 10) ? '0' + hh : hh;

    mm = (mm < 10) ? '0' + mm : mm;

    ss = (ss < 10) ? '0' + ss : ss; 

    am = ( hh > 11) ? 'PM' : 'AM';
    
    let time = ` ${hh} :  ${mm} : ${ss} ${am}`;

    $TimeZone.textContent = time;



let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let curWeekDay = days[date.getDay()];
let curDay = date.getDate();
let curMonth = months[date.getMonth()];
let curYear = date.getFullYear();
let  DateZone = `${curWeekDay} / ${curDay} / ${curMonth} / ${curYear}`;

$clock2.textContent = DateZone;
};




$btnOn.addEventListener('click', ()=> {

stopInterval = setInterval(dayTime, 1000)
console.log('bnt active,', dayTime)

})

$btnOff.addEventListener('click', ()=> {
clearInterval(stopInterval)
console.log('stopping')
})


$btnReset.addEventListener('click', ()=>{

    $TimeZone.innerHTML = `<div class="clockFirst">Thu / 10 / May / 1999</div>`;


    $clock2.innerHTML = `<div class="clockSecond"> 08 : 50 : 26 AM
        </div>`;

});


