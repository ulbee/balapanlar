import "./pages/index.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(".header");
const logo = header.querySelector(".header__logo");
const headerHeight = header.clientHeight;

document.onscroll = function () {
  let scroll = window.scrollY;

  console.log('headerHeight', headerHeight);
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

/**
 * Настройка анимации для галереи
 */
let mm = gsap.matchMedia();
let galleryItems = gsap.utils.toArray('.gallery__item');

mm.add("(min-width: 801px)", () => {    

    gsap.to(galleryItems, {
        scrollTrigger: {
            trigger: ".gallery", // триггерный блок для анимации
            start: "top top", // начало анимации, когда триггер наверху экрана
            scrub: 1, // "смягчение" перехода между анимацией и скроллом
            snap: 0, // продолжение анимации после того, как пользователь перестал скроллить
            pin: true // фиксация блока на определенном месте при скролле
        },
        xPercent: -100 * (galleryItems.length - 1), // анимация по горизонтали на всю ширину всех слайдов
        ease: "none" // функция для определения скорости отображения анимации
    });
    
});
