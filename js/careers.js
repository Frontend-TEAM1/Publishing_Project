// HEADER Javascript
const $header = document.querySelector('header');

document.addEventListener('mousewheel', (e)=>{
    if(e.wheelDelta>0){
        $header.style.position = 'sticky';
        $header.style.top = '0';
        $header.style.zIndex = '999';
        $header.style.backgroundColor = '#deeff5'
    }
    if(e.wheelDelta<0){
        $header.style.position = '';
        $header.style.top = '';
        $header.style.zIndex = '';
    }
})


// CAREERS Javascript
const $focusingItem = document.querySelectorAll(".sec3ListItem > div");

for (let i = 0; i < $focusingItem.length; i++) {
  $focusingItem[i].addEventListener("mouseover", focusing); 
  $focusingItem[i].addEventListener("mouseleave", leaving); 
}

function focusing(e) {
  for( let i = 0 ; i < $focusingItem.length ; i++ ) {
    if($focusingItem[i] !== this) {
        $focusingItem[i].setAttribute("style", "opacity: 0.3;");
    } else $focusingItem[i].removeAttribute("style");
  }
}

function leaving() {
    for( let i = 0 ; i < $focusingItem.length ; i++ ) {
        $focusingItem[i].removeAttribute("style");
      }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3.5,
    centeredSlides: false,
  });