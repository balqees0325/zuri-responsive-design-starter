const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.navbar');

// create function that checks if hamburger menu is present and then toggle it and vice visa.
const showNav = () => {
  if(hamburger.src.endsWith('icon-hamburger.svg')) {
    hamburger.src = './icon-close.svg';
  } else {
    hamburger.src = "./icon-hamburger.svg";
  }
  navLink.classList.toggle('toggleShow');
}

hamburger.addEventListener('click', showNav);