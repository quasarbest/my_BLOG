
// function to change the new webp picture format do not delete=========================================
function testWebP(callback) {
var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
// function to change the new webp picture format do not delete=========================================

//TABS ==========================================================================
const tabsBtn   = document.querySelectorAll(".tabs__nav-btn")
const tabsItems = document.querySelectorAll(".tabs__item")

tabsBtn.forEach(onTabClick);
// главная function
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active')
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active')
            });
    
            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    });
}

document.querySelector('.tabs__nav-btn').click()

//TABS - END ==========================================================================