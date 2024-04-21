// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Модальные окна
import modal from './modules/modal.js';
modal();

// Табы в каталоге

import { tns } from 'tiny-slider';

const catalogLists = document.querySelectorAll('.catalog .catalog__list');
const catalogListsArr = [];

if (catalogLists) {
    for (let i = 0; i < catalogLists.length; i++) {
        let catalog = tns ({
            container: `.catalog-${i+1}`,
            items: 3,
            slideBy: 1,
            gutter: 20,
            mouseDrag: true,
            swipeAngle: false,
            speed: 400,
            arrowKeys: true,
            loop: false,
            controlsText: [
                '<img src="../../img/slider-nav/chevron-left.svg" alt="left">',
                '<img src="../../img/slider-nav/chevron-right.svg" alt="right">',
            ],
        });
    
        catalogListsArr.push(catalog);
        
    }
}

let trainingSlider = tns({
    container: `.training__slider`,
    items: 2,
    slideBy: 1,
        gutter: 20,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    arrowKeys: true,
    loop: false,
    controlsText: [
        '<img src="../../img/slider-nav/chevron-left.svg" alt="left">',
        '<img src="../../img/slider-nav/chevron-right.svg" alt="right">',
    ],
});

let objectsSlider = tns({
    container: `.objects__slider`,
    items: 4,
    slideBy: 1,
    gutter: 10,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    arrowKeys: true,
    loop: false,
    controlsText: [
        '<img src="../../img/slider-nav/chevron-left.svg" alt="left">',
        '<img src="../../img/slider-nav/chevron-right.svg" alt="right">',
    ],
});


let modalSlider = tns({
    container: ".modal__slider",
    items: 1,
    navContainer: "#customize-thumbnails",
    navAsThumbnails: true,
    swipeAngle: false,
    speed: 400,
    loop: false,
    gutter: 10,
    controlsText: [
        '<img src="../../img/slider-nav/chevron-left.svg" alt="left">',
        '<img src="../../img/slider-nav/chevron-right.svg" alt="right">',
    ],
});



import tabs from './modules/tabs.js';
tabs();