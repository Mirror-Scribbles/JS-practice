const $activeBtn = document.querySelector('.turn-on');

const $stopClock = document.querySelector('.turn-off');


    let clockInter;



function digitalClock (){

const NewDate = new Date();
console.log(NewDate);

 let mill =  NewDate.getMilliseconds()
 console.log(mill)

 let min = NewDate.getMinutes()
 console.log(min)

 let hur = NewDate.getHours()
 console.log(hur)

 let day = NewDate.getDay()
 console.log(day)

 let year = NewDate.getFullYear()

 console.log(year)








    $activeBtn.addEventListener('click', () => {

        clockInter = setInterval(() => {

            let $date = new Date().toLocaleTimeString();
    
            const $clock = document.querySelector('.clockFirst').innerHTML = `<h3> ${$date} </h3>`;
            console.log($date);
    
        },1000);
    
    
        $activeBtn.disabled = true;
    
    // $activeBtn.addEventListener('click', dateTime);
    
    })

    $stopClock.addEventListener('click', () => {

        clearInterval(clockInter);

        $activeBtn.disabled = false;
    
    })
}
digitalClock();