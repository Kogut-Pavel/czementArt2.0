
import mobileNav from './modules/mobile-nav.js';
import modal from './modules/modal.js';
import selectMenu from './modules/selectMenu.js';
import sliders from './modules/sliders.js';
import tabs from './modules/tabs.js';
import productCounter from './modules/productCounter.js';


window.addEventListener('DOMContentLoaded', () => {

    // Мобильная навигация
    mobileNav();
    
    // Модальные окна
    modal();
    
    // Счетчик
    productCounter();
    
    // Слайдеры
    sliders();
    
    // Табы
    tabs();

    // Табы в виде выпадающего списка на мобильных устройствах
    selectMenu();
    
});

