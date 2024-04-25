import { tns } from 'tiny-slider';

const sliders = function() {
    
    const catalogLists = document.querySelectorAll('.catalog .catalog__list');
    const catalogListsArr = [];
    
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
                    disable: true,
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
            `<svg class="icon icon--chevron-left">
                <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>
            </svg>`,
            `<svg class="icon icon--chevron-right">
                <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>
            /svg>`,
        ],
        
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
}

export default sliders;