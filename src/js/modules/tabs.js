const tabs = function () {
    const tabHeaders = document.querySelectorAll('[data-tab]');
    const contentBoxes = document.querySelectorAll('[data-tab-content]');

    tabHeaders.forEach(function (item) {
        item.addEventListener('click', function () {
            tabHeaders.forEach(function (item) {
                item.classList.remove('active');
            });
            item.classList.add('active');
            const contentBox = document.querySelector('#' + this.dataset.tab);
            contentBoxes.forEach(function (item) {
                item.classList.add('none');
            });
            contentBox.classList.remove('none');
        });
    });
};

export default tabs;