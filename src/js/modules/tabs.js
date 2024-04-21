const tabs = function () {
    const tabHeaders = document.querySelectorAll('[data-tab]');
    const contentBoxes = document.querySelectorAll('[data-tab-content]');
    const tnsControls = document.querySelectorAll('.catalog .tns-controls');
    let arrTnsControls = [...tnsControls];
    let filteredTnsControls = arrTnsControls.filter(item => !item.closest('.card'));

    
    filteredTnsControls.forEach(function (item) {  
        item.classList.add('none');
    });
    filteredTnsControls[0].classList.remove('none');

    
    tabHeaders.forEach(function (item) {
        item.addEventListener('click', function () {
            let dataTab = this.dataset.tab;
            let tabNumber = dataTab[dataTab.length - 1];
            const contentBox = document.querySelector('#' + dataTab);

            tabHeaders.forEach(function (item) {
                item.classList.remove('active');
            });
            filteredTnsControls.forEach(function (item) {  
                item.classList.add('none');
            });

            filteredTnsControls[tabNumber - 1].classList.remove('none');
            
            item.classList.add('active');
            
            contentBoxes.forEach(function (item) {
                item.classList.add('none');
            });
            contentBox.classList.remove('none');
        });
    });
};

export default tabs;