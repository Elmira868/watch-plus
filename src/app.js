'use strict';

// English to Farsi number conversion function
function convertToPersianNumbers(str) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.replace(/[0-9]/g, (digit) => persianNumbers[digit]);
}

const numberElms = document.querySelectorAll('.number-fa')

numberElms.forEach((elm) => {
    elm.textContent = convertToPersianNumbers(elm.textContent);
});
  

// Selection of elements
const elements = {
    navbarIcon: document.querySelector('.navbar-icon'),
    navbarMenuContainer: document.querySelector('.navbar-menu'),
    navbarIconSubmenu: document.querySelector('.navbar-submenu__icon'),
    navbarSubmenuContainer: document.querySelector('.navbar-menu__submenu')
};

// Control the class to open or close the menu or submenu
const toggleClass = (element, className) => element.classList.toggle(className);

// Opening and closing the menu
elements.navbarIcon.addEventListener('click', () => toggleClass(elements.navbarMenuContainer, 'undisplayable'));

// Opening and closing the submenu
elements.navbarIconSubmenu.addEventListener('click', () => toggleClass(elements.navbarSubmenuContainer, 'undisplayable'));



