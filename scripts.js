// hamburger naviagtion

const nav = document.querySelector(".js-nav");
const menu = document.querySelector(".js-menu");
const line = document.querySelectorAll(".js-menu__line");
const header = document.querySelector('.header');
const wrap = document.querySelector('.nav__wrapper');

let navToggle = 1;

menu.addEventListener('click', () => {
    if (navToggle > 0) {
        nav.classList.add('active');
        line.forEach((i => i.classList.add('active')));
        header.classList.add('active');
        wrap.style.top = "0";
        menu.classList.add('active');
    } else {
        nav.classList.remove('active');
        line.forEach((i => i.classList.remove('active')));
        header.classList.remove('active');
        wrap.style.top = "-300";
        menu.classList.remove('active');
    }
    navToggle *= -1;
})

// navigation with anchor points

const links = document.querySelectorAll("a");


links.forEach(i => i.addEventListener('click', clickhandler))

function clickhandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop -150,
        behavior: "smooth"
    })
}

// scroll to top

button = document.querySelector(".js-button");

window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
      top:0,
      behavior: 'smooth'
  })
}