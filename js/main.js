let modalBg = document.querySelector(".modal_bg");
let modalClose = document.querySelector(".modal_close");
let modalOpen = document.querySelector(".modal_open");

modalOpen.addEventListener('click', function (e){
    e.preventDefault();
    modalBg.classList.add('active');
});

modalClose.addEventListener('click', function (){
    modalBg.classList.remove('active');
});

document.addEventListener('click', function (e){
    if(e.target === modalBg) {
    modalBg.classList.remove('active');
    }
});

