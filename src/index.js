import "./pages/index.css";
const header = document.querySelector(".header");
const logo = header.querySelector(".header__logo");
const headerHeight = header.clientHeight;

document.onscroll = function () {
  let scroll = window.scrollY;
  if (scroll > headerHeight) {
    header.classList.add("header_scroll");
    logo.classList.add("header__logo_scroll");
    document.body.style.paddingTop = headerHeight + "px";
  } else {
    header.classList.remove("header_scroll");
    logo.classList.remove("header__logo_scroll");
    document.body.removeAttribute("style");
  }
};
