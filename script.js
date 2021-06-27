'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnopenmodal = document.querySelectorAll('.show-modal');
const btnclosemodal = document.querySelector('.close-modal');
const displaymodal = () => {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnopenmodal.length; i++){
    btnopenmodal[i].addEventListener('click', displaymodal);
}
const hidemodal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnclosemodal.addEventListener('click', hidemodal);
overlay.addEventListener('click', hidemodal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        hidemodal();
    }
})