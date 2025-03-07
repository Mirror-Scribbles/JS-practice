
const $btnOn = document.querySelector('.turn-on');

const $btnOff = document.querySelector('.turn-off');

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

    let $TimeZone = document.querySelector('.clockSecond');

    $TimeZone.textContent = time;



let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let curWeekDay = days[date.getDay()];
let curDay = date.getDate();
let curMonth = months[date.getMonth()];
let curYear = date.getFullYear();
let  DateZone = `${curWeekDay} / ${curDay} / ${curMonth} / ${curYear}`;

const $clock2 = document.querySelector('.clockFirst');

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





