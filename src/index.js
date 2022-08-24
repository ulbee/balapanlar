import './pages/index.css';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Настройка анимации для галереи
 */
let mm = gsap.matchMedia();

mm.add("(min-width: 801px)", () => {
    let galleryItems = gsap.utils.toArray('.gallery__item');

    console.log(-100 * (galleryItems.length - 1));

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

