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

// Trend watches created
const trendWatchesContainer = document.querySelector('.trend-watch__container');
const trendWatches = [
    {
        id: 1,
        name: 'ساعت مچی مردانه کاسیو',
        price: '۱۵۰۰۰۰ تومان',
        img: '../assets/Images/Trend watches/Trend-watch-1.jpg'
    },
    {
        id: 2,
        name: 'ساعت مچی زنانه سونی',
        price: '۲۰۰۰۰۰ تومان',
        img: '../assets/Images/Trend watches/Trend-watch-3.jpg'
    },
    {
        id: 3,
        name: 'ساعت مچی زنانه کاسیو',
        price: '۱۲۰۰۰۰ تومان',
        img: '../assets/Images/Trend watches/Trend-watch-4.jpg'
    },
  
];

trendWatches.forEach((watch) => {
    trendWatchesContainer.insertAdjacentHTML('beforeend', `
      <div class="p-2 border-r border-gray-300">
          <img
            class="lg:w-60 lg:h-60 w-full"
            src="${watch.img}"
            alt="${watch.name}"
          />
          <!-- Title and price box -->
          <div class="text-center mt-3">
            <h3 class="font-VazirmatnBold text-zinc-950">${watch.name}</h3>
            <span class="mt-4 mb-4 font-VazirmatnBold text-zinc-950">${watch.price}</span>
          </div>
          <!-- Add to basket box -->
          <div
            class="flex justify-center items-center text-center gap-x-2 mt-4 mb-4"
          >
            <div>
              <button
                class="flex gap-x-1 border border-zinc-950 p-2 group hover:bg-zinc-950"
              >
                <svg class="w-5 h-5 text-zinc-950 group-hover:text-white">
                  <use href="#shopping-card"></use>
                </svg>
                <span
                  class="text-zinc-950 font-VazirmatnRegular group-hover:text-white"
                  >اضافه کردن به سبد</span
                >
              </button>
            </div>

            <div>
              <button
                class="border border-zinc-950 p-2.5 group hover:bg-zinc-950"
              >
                <svg class="w-5 h-5 group-hover:text-white">
                  <use href="#heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>   
        `)
});




