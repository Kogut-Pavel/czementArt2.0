const productCounter = function () {
    let buttonCountMinus = document.querySelector('.modal__count-minus');
    let buttonCountPlus = document.querySelector('.modal__count-plus');

    let count = document.querySelector('.modal__count-number');
    let number = 1;

    if (buttonCountPlus && buttonCountMinus) {
        buttonCountPlus.addEventListener('click', function () {
            number++;
            count.textContent = number;
        });
        
        buttonCountMinus.addEventListener('click', function () {
            if (number !== 1) {
                number--;
                count.textContent = number;
            }
        });
    }

}

export default productCounter;