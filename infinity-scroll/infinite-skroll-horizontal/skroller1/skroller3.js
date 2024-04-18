const $scroller = document.querySelectorAll('.scroller');

if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
addAnimation();
}


function addAnimation(){
$scroller.forEach((scroller) =>{
    scroller.setAttribute("data-animated", true);

const scrollerInner = scroller.querySelector('.scroller__inner');
const scrollerContent = Array.from(scrollerInner.children);

scrollerContent.forEach(item =>{ 
    const duplicateItem = item.cloneNode(true);
    duplicateItem.setAttribute("area-hidden", true);
    scrollerInner.appendChild(duplicateItem)
})
})
}