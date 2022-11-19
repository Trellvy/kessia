let menuElem = document.getElementById('languages');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
menuElem.classList.toggle('open');
};