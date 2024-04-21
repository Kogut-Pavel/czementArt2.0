
import mobileNav from './modules/mobile-nav.js';
import modal from './modules/modal.js';

import tabs from './modules/tabs.js';
import productCounter from './modules/productCounter.js';
import { tns } from 'tiny-slider';

window.addEventListener('DOMContentLoaded', () => {

    // Мобильная навигация
    mobileNav();
    
    // Модальные окна
    modal();
    
    productCounter();
    


    const catalogLists = document.querySelectorAll('.catalog .catalog__list');
    const catalogListsArr = [];
    
    if (catalogLists) {
        for (let i = 0; i < catalogLists.length; i++) {
            let catalog = tns({
                container: `.catalog-${i + 1}`,
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
        // gutter: 20,
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
        arrowKeys: true,
        loop: false,
        controlsText: [
            '<img src="../../img/slider-nav/chevron-left.svg" alt="left">',
            '<img src="../../img/slider-nav/chevron-right.svg" alt="right">',
        ],
        "responsive": {
            "320": {
              "items": 1,
              "controls": true,
                
            },
            "768": {
                "items": 2,
            }

          },
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
        "responsive": {
            "320": {
              "items": 1,
              "controls": true,
                
            },
            "425": {
                "items": 2,
            },
            "768": {
                "items": 3,
            },
            "1024": {
                "items": 4,
            }
          },
    });
    
    let modalSlider = tns({
        container: '.modal__slider',
        items: 1,
        navContainer: '#customize-thumbnails',
        navAsThumbnails: true,
        swipeAngle: false,
        speed: 400,
        loop: false,
        gutter: 10,
        controlsText: [
            '<img src="../../img/slider-nav/chevron-left.svg" alt="left">',
            '<img src="../../img/slider-nav/chevron-right.svg" alt="right">',
        ],
        "responsive": {
            "320": {
              "items": 1,
              "controls": true,
              "gutter": 10,
            },
        }
    });
    
    
    let card = tns({
        container: `.card__slider`,
        items: 1,
        slideBy: 1,
        gutter: 10,
        swipeAngle: false,
        speed: 400,
        loop: true,
        controlsText: [
            '<img src="../../img/slider-nav/chevron-left.svg" alt="left">',
            '<img src="../../img/slider-nav/chevron-right.svg" alt="right">',
        ],
    });
    
    let detailed = tns({
        container: `.detailed__slider`,
        items: 1,
        slideBy: 1,
        gutter: 10,
        swipeAngle: false,
        speed: 400,
        loop: true,
        controlsText: [
            '<img src="../../img/slider-nav/chevron-left.svg" alt="left">',
            '<img src="../../img/slider-nav/chevron-right.svg" alt="right">',
        ],
    });
    
    tabs();
    
});

