import "./pages/index.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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


const viewSkillBtn = document.querySelector('h1'), //нужен класс кнопки "Смотреть все навыки"
  popupCourses = document.querySelector('#course-python'),
  partnerLWBBtn = document.querySelector('#lecturers'),
  partnerOpenHorizonsBtn = document.querySelector('#horizont'), //
  partnerChemBioBtn = document.querySelector('#himbio'), //
  popupLWB = document.querySelector('#partner-lecturers'), //
  popupOpenHorizon = document.querySelector('#partner-horizont'), //
  popupChemBio = document.querySelector('#partner-himbio'),
  popupCloseBtn = document.querySelector('.popup__close-btn'),
  closeBtn = document.querySelector('.popup__close');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', handleEsc);
  window.addEventListener('mousedown', closeByOverlay);
  closeBtn.addEventListener('click', () => closePopup(popupCourses));
  popupCloseBtn.addEventListener('click', () => closePopup(popupCourses));
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', handleEsc);
  window.removeEventListener('click', closeByOverlay);
  closeBtn.removeEventListener('click', () => closePopup(popupCourses));
  popupCloseBtn.removeEventListener('click', () => closePopup(popupCourses));
}

//закрытие по esc
function handleEsc(evt) {
  if ((evt.key === 'Escape') && (document.querySelector('.popup_opened'))) { //проверяем, что (нажат Esc) и (на странице присутствует открытый попап)
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

//Закрытие кликом на оверлей
function closeByOverlay (evt) {
  if (evt.target.classList.contains('.popup')) {
    closePopup(evt.target);
  }
}


viewSkillBtn.addEventListener('click', () => openPopup(popupCourses));
partnerLWBBtn.addEventListener('click', () => openPopup(popupLWB));
partnerOpenHorizonsBtn.addEventListener('click', () => openPopup(popupOpenHorizon));
partnerChemBioBtn.addEventListener('click', () => openPopup(popupChemBio));