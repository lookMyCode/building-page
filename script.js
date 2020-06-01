'use strict';
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.menu__link');
const workCardDescription = document.querySelectorAll('.work-card__description');

checkScroll();
window.addEventListener('scroll', checkScroll);

for(let i = links.length - 1; i >= 0; i--) {
  links[i].addEventListener('click', (e) => {
    e.preventDefault();
    let targetId = e.target.href;
    targetId = targetId.substr(targetId.indexOf('#'));
    
    window.scroll({
      top: document.querySelector(targetId).offsetTop - document.querySelector('#menu').clientHeight,
      behavior: 'smooth'
    });
  });
}

function checkScroll() {
  const position = window.pageYOffset || document.documentElement.scrollTop;

  if(position > 50) {
    menu.classList.contains('scrolled') ? null : menu.classList.add('scrolled');
  } else {
    menu.classList.contains('scrolled') ? menu.classList.remove('scrolled') : null;
  }
}