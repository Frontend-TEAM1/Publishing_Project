const $header = document.querySelector('header');


document.addEventListener('mousewheel', (e)=>{
    if(e.wheelDelta>0){
        $header.style.position = 'sticky';
        $header.style.top = '0';
        $header.style.zIndex = '999';
        $header.style.backgroundColor = '#000000'
    }
    if(e.wheelDelta<0){
        $header.style.position = '';
        $header.style.top = '';
        $header.style.zIndex = '';
    }
})