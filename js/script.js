// Sticky navbar on scroll
window.onscroll = function() {
  stickyNavbar();
};

let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
