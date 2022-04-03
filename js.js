const closedface = document.querySelector('.closed');
const openface = document.querySelector('.open');
const nospeak = document.querySelector('.no-speak');

closedface.addEventListener('click', () => {
   if( openface.classList.contains('open')){
       openface.classList.add('active');
       closedface.classList.remove('active');
       nospeak.classList.remove('active');
   }
});

openface.addEventListener('click', () => {
    if(nospeak.classList.contains('no-speak')){
        nospeak.classList.add('active');
        closedface.classList.remove('active');
        openface.classList.remove('active');
    }
});

nospeak.addEventListener('click', () => {
    if(closedface.classList.contains('closed')){
        closedface.classList.add('active');
        openface.classList.remove('active');
        nospeak.classList.remove('active');
    }
})