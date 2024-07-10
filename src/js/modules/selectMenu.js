const selectMenu = function () { 
    const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");
  
    selectBtn.addEventListener("click", () =>
        optionMenu.classList.toggle("active")
    );
    
    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.innerText;
            sBtn_text.innerText = selectedOption;
        
            optionMenu.classList.remove("active");
        });
    });

    // const options = document.querySelectorAll('.option'); 
    // const tabsContent = document.querySelectorAll('[data-tab-content]'); 
    // const catalogHeader = document.querySelector('.select-menu'); 
    
    // // Проверяем, нашли ли мы нужные элементы 
    // if (!options.length || !tabsContent.length || !catalogHeader) { 
    //     console.error('Не удалось найти необходимые элементы. Проверьте классы и разметку.'); 
    //     return; 
    // } 
    
    // options.forEach(option => { 
    //     option.addEventListener('click', () => { 
    //     const target = option.getAttribute('data-tab'); 
    
    //     // Проверяем, есть ли у option атрибут data-tab 
    //     if (!target) { 
    //         console.error('Элемент не имеет атрибута data-tab:', option); 
    //         return; 
    //     } 
    
    //     console.log(`Нажата кнопка с data-tab: ${target}`); 
    
    //     // Снимаем активный класс со всех кнопок 
    //     options.forEach(btn => btn.classList.remove('active')); 
    //     option.classList.add('active'); 
    
    //     // Скрываем все контенты 
    //     tabsContent.forEach(content => { 
    //         content.classList.add('none'); 
    //         if (content.getAttribute('id') === target) { 
    //         content.classList.remove('none'); 
    //         } 
    //     }); 
    
    //     // Добавляем класс 'active' к catalogHeader 
    //     catalogHeader.classList.add('active'); 
    //     }); 
    // }); 
    

}

export default selectMenu;