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

for (let i = 0; i < catalogLists.length; i++) {
    let catalog = tns ({
        container: `.catalog-${i+1}`,
        items: 3,
        slideBy: 1,
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

let trainingSlider = tns({
    container: `.training__slider`,
    items: 2,
    slideBy: 1,
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


import tabs from './modules/tabs.js';
tabs();