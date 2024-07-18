import { FreeMode } from 'swiper/modules';
import { tns } from 'tiny-slider';

const sliders = function() {
    
    const catalogLists = document.querySelectorAll('.catalog .catalog__list');
    
    if (catalogLists) {
        for (let i = 0; i < catalogLists.length; i++) {
            let catalog = tns({
                container: `.catalog-${i + 1}`,
                items: 3,
                slideBy: 1,

                mouseDrag: true,
                swipeAngle: false,
                speed: 400,
                arrowKeys: true,
                loop: false,
                controlsText: [
                    `<svg class="icon icon--chevron-left">
                        <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>
                    </svg>`,
                    `<svg class="icon icon--chevron-right">
                        <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>
                    /svg>`,
                ],
                "responsive": {
                    "320": {
                      "disable": true,
                      "items": 1,
                      "controls": true,
                        
                    },
                    "768": {
                        disable: false,
                        "items": 2,
                    },
                    "1440": {
                        "items": 3,
                        gutter: 20,
                    }
        
                  },
            });
    
        }
    }
    
    // let trainingSlider = tns({
    //     container: `.training__slider`,
    //     items: 2,
    //     slideBy: 1,
    //     // gutter: 20,
    //     mouseDrag: true,
    //     swipeAngle: false,
    //     speed: 400,
    //     arrowKeys: true,
    //     loop: false,
    //     controlsText: [
    //         `<svg class="icon icon--chevron-left">
    //             <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>
    //         </svg>`,
    //         `<svg class="icon icon--chevron-right">
    //             <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>
    //         /svg>`,
    //     ],
    //     "responsive": {
    //         "320": {
    //         //   "items": 1,
    //         //   "controls": true,
    //             "disable": true,
    //         },
    //         "450": {
    //             "items": 1,
    //             "controls": true,
    //             "disable": false,
    //         },
    //         "768": {
    //             "items": 2,
    //         }

    //       },
    // });
    
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
            `<svg class="icon icon--chevron-left">
                <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>
            </svg>`,
            `<svg class="icon icon--chevron-right">
                <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>
            /svg>`,
        ],
        "responsive": {
            "320": {
              "items": 1,
              "controls": true,
                
            },
            "450": {
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

    const objects = document.querySelectorAll('.modal__object');

    if (objects) {
        for (let i = 0; i < objects.length; i++) {
            let modalSlider = tns({
                // container: '.modal__slider',
                container: `.object-${i + 1} .modal__slider`,
                items: 1,
                navContainer: `.object-${i + 1} .thumbnails`,
                navAsThumbnails: true,
                swipeAngle: false,
                speed: 400,
                loop: false,
                gutter: 10,
                controlsText: [
                    `<svg class="icon icon--chevron-left">
                        <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>
                    </svg>`,
                    `<svg class="icon icon--chevron-right">
                        <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>
                    /svg>`,
                ],
            });
        }
    }

    let objectsItems = document.querySelectorAll('.objects__gallery [data-modal="object-modal"]');
    let modalObjects = document.querySelectorAll('.modal__object');

    modalObjects.forEach((item) => {
        item.classList.add('none');
    });

    objectsItems.forEach((item) => {
        item.addEventListener('click', ({target}) => {
            modalObjects.forEach((item) => {
                item.classList.add('none');
            });
            let index = [...objectsItems].findIndex((e) => e === target);
            if (modalObjects[index]) {
                modalObjects[index].classList.remove('none');
            } 
            if (modalObjects[index]) {
                document.querySelector('.no-photo').classList.add('none');
            } else {
                document.querySelector('.no-photo').classList.remove('none');
            }
            
    
        });
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
            `<svg class="icon icon--chevron-left">
                <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>
            </svg>`,
            `<svg class="icon icon--chevron-right">
                <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>
            /svg>`,
        ],
        "responsive": {
            "320": {
              
                disable: true,
            },
            "425": {
                disable: false,
            },
        }
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
            `<svg class="icon icon--chevron-left">
                <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>
            </svg>`,
            `<svg class="icon icon--chevron-right">
                <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>
            /svg>`,
        ],
    });


    const advantagesSwiper = new Swiper(".advantages__inner", {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,
        
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
            },
            540: {
                slidesPerView: 2.4,
            },
            767: {  
                slidesPerView: 3,
            }
        }
    });

    const trainingSwiper = new Swiper(".training__list", {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        scrollbar: {
            el: ".training-swiper-scrollbar",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 10,
                slidesPerView: 1.2,
                freeMode: {
                    enabled: true,
                },
            },
            450: {
                slidesPerView: 1,
                FreeMode: false,
            },
            600: {  
                slidesPerView: 2,
            }
        }
    });

    const teamSwiper = new Swiper(".team__list", {
        slidesPerView: 3,
        spaceBetween: 10,
        scrollbar: {
            el: ".team-swiper-scrollbar",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                freeMode: {
                    enabled: true,
                },
            },
            450: {
                slidesPerView: 1.6,
            },
            768: {  
                slidesPerView: 2.2,
                FreeMode: false,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
    
    const contactsSwiper = new Swiper(".contacts__list", {
        spaceBetween: 10,
        scrollbar: {
            el: ".contacts-swiper-scrollbar",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                freeMode: {
                    enabled: true,
                },
            },
            450: {
                slidesPerView: 1.6,
            },
            768: {  
                slidesPerView: 2.2,
                
            },
            1024: {
                slidesPerView: 4,
                freeMode: false,
            }
        }
    });
    

}

export default sliders;