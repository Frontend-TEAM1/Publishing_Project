// AOS 기능
AOS.init();

// Swiper 기능
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3.5,
  centeredSlides: false,
});

// header
const $header = document.querySelector('header');

document.addEventListener('mousewheel', (e) => {
  if (e.wheelDelta > 0) {
    $header.style.position = 'sticky';
    $header.style.top = '0';
    $header.style.zIndex = '999';
    $header.style.backgroundColor = '#fff';
  }
  if (e.wheelDelta < 0) {
    $header.style.position = '';
    $header.style.top = '';
    $header.style.zIndex = '';
  }
});
