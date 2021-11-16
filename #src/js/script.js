// function to change the new webp picture format do not delete=========================================
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector("body").classList.add("webp");
   } else {
      document.querySelector("body").classList.add("no-webp");
   }
});
// function to change the new webp picture format do not delete=========================================
// bootstrapping =======================================================================================

$(document).ready(function () {
   $(".bootstrapping").delay(4000).fadeToggle(1500);
});

//TABS ==========================================================================
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);
// главная function
function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active")) {
         tabsBtn.forEach(function (item) {
            item.classList.remove("active");
         });

         tabsItems.forEach(function (item) {
            item.classList.remove("active");
         });

         currentBtn.classList.add("active");
         currentTab.classList.add("active");
      }
   });
}

document.querySelector(".tabs__nav-btn").click();

//TABS - END ==========================================================================

//MENU - OPEN =========================================================================

$(document).ready(function () {
   $(".open_menu").click(function () {
      // задаем функцию при нажатиии на элемент с классом hide
      $(".open_menu").slideUp(); // плавно скрываем все элементы <div>
   });
   $(".btn_menu").click(function () {
      // задаем функцию при нажатиии на элемент с классом show
      $(".open_menu").slideDown(); // плавно отображаем все элементы <div>
      $(".open_menu").css("display", "flex");
   });
});

//MENU - OPEN - END =========================================================================

//PAGE ONE SLIDER ===============================================================================
$(document).ready(function () {
   $(".slider_width").slick({
      dots: true,
      infinite: true,
      speed: 700,
      fade: true,
      prevArrow: $(".next_slide"),
      nextArrow: $(".prev_slide"),
      appendDots: $(".inner_dots"),
      autoplay: true,
      autoplaySpeed: 6000,
   });
});

//END - SLIDER ===============================================================================
//Level - SCALE ==============================================================================

let $date = new Date();
let $dateBeginning = new Date(2018, 11, 20); // 20 ноябрь 2020 ?!?
let year = $date.getFullYear() - $dateBeginning.getFullYear();
let scaleLevel = document.querySelector(".scale");
let percent = 100 / 12;
let month = $date.getMonth() + 1;

function time() {
   if (year == 1) {
      year = year + " год и";
   }
   if (year >= 2 && year <= 4) {
      year = year + " года и";
   }
   if (year >= 5) {
      year = year + " лет и";
   }
   document.querySelector(".level_number").textContent = year;
}
time();

function scale() {
   let monthArr = [];
   for (i = 1; i <= $date.getMonth(); i++) monthArr.push(i);
   if (monthArr) {
      scaleLevel.style.width = percent * month + "%";
   }
   if (month == 1) {
      month = month + " месяц";
   }
   if (month >= 2 && month <= 4) {
      month = month + " месяца";
   }
   if (month >= 5) {
      month = month + " месяцев";
   }
   document.querySelector(".month_new").textContent = month;
}
scale();

//Level - SCALE - END=========================================================================

let mainContainer = document.querySelector(".main_container");
var isScrolling; // скролл с последующей очисткой таймаута
var stateCard = 0; // количество завершенных скролов
mainContainer.addEventListener("scroll", function () {
   let percent = (this.scrollTop / this.offsetWidth) * 110;
   console.log(percent);

   window.clearTimeout(isScrolling); // чистим таймаут
   // если скрол больше 100, значит ты проскролил одну секцию
 
   if (percent > 100 && percent < 200) {
      isScrolling = setTimeout(function () {
         // при каждом завершении одного скрола stateCard ростет
         stateCard++;

         if (stateCard == 1) {
            document.querySelector(".block_level__one").classList.add("anime");
            document
               .querySelector(".block_level__two")
               .classList.add("anime_two");
            document
               .querySelector(".block_level__three")
               .classList.add("anime_three");
            document
               .querySelector(".block_level__four")
               .classList.add("anime_four");
            document
               .querySelector(".block_level__five")
               .classList.add("anime_five");
            document
               .querySelector(".block_level__six")
               .classList.add("anime_six");
         }
         let pageThree = document.querySelector(".inner_page_three");
         if (percent >= 190) {
            pageThree.style.opacity = "1";
         }
         let percentSpanFirst = (document.querySelector(".anime").style.height =
            85 + "%");
         let percentSpanSecond = (document.querySelector(
            ".anime_two"
         ).style.height = 75 + "%");
         let percentSpanThird = (document.querySelector(
            ".anime_three"
         ).style.height = 75 + "%");
         let percentSpanFourth = (document.querySelector(
            ".anime_four"
         ).style.height = 65 + "%");
         let percentSpanFifth = (document.querySelector(
            ".anime_five"
         ).style.height = 75 + "%");
         let percentSpanSixth = (document.querySelector(
            ".anime_six"
         ).style.height = 85 + "%");

         let percentSpan = (document.querySelector(
            ".percent_number__one"
         ).textContent = percentSpanFirst);
         let percentSpanTwo = (document.querySelector(
            ".percent_number__two"
         ).textContent = percentSpanSecond);
         let percentSpanThree = (document.querySelector(
            ".percent_number__three"
         ).textContent = percentSpanThird);
         let percentSpanFour = (document.querySelector(
            ".percent_number__four"
         ).textContent = percentSpanFourth);
         let percentSpanFive = (document.querySelector(
            ".percent_number__five"
         ).textContent = percentSpanFifth);
         let percentSpanSix = (document.querySelector(
            ".percent_number__six"
         ).textContent = percentSpanSixth);
         // тут ты обнуляешь скрол когда все анимации выполнились.
         if (stateCard > 10) {
            stateCard = 0;
         }
         console.log(stateCard);
      }, 100);
   }
});

function myFunction(x) {
   if (x.matches) {
      // Если медиа запрос совпадает
      document.querySelector(".block_level__one").classList.add("anime");
      document.querySelector(".block_level__two").classList.add("anime_two");
      document
         .querySelector(".block_level__three")
         .classList.add("anime_three");
      document.querySelector(".block_level__four").classList.add("anime_four");
      document.querySelector(".block_level__five").classList.add("anime_five");
      document.querySelector(".block_level__six").classList.add("anime_six");
      let percentSpanFirst = (document.querySelector(".anime").style.height =
         85 + "%");
      let percentSpanSecond = (document.querySelector(
         ".anime_two"
      ).style.height = 75 + "%");
      let percentSpanThird = (document.querySelector(
         ".anime_three"
      ).style.height = 75 + "%");
      let percentSpanFourth = (document.querySelector(
         ".anime_four"
      ).style.height = 65 + "%");
      let percentSpanFifth = (document.querySelector(
         ".anime_five"
      ).style.height = 75 + "%");
      let percentSpanSixth = (document.querySelector(
         ".anime_six"
      ).style.height = 85 + "%");
   } else {
   }
}

var x = window.matchMedia("(max-width: 1001px)");
myFunction(x); // Вызов функции прослушивателя во время выполнения
x.addListener(myFunction); // Присоединить функцию прослушивателя при изменении состояния

// PAGE THREE Verticl slider ==============================================
$(function () {
   $(".inner_page_three").slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      // autoplay: true,
      prevArrow: $(".next_slide_vertical"),
      nextArrow: $(".prev_slide_vertical"),
   });
});

// page three anime img ===================================================
let animeimg = document.querySelectorAll(".img_portfolio");
for (let i = 0; i < animeimg.length; i++) {
   animeimg[i].addEventListener("click", function () {
      animeimg[i].classList.toggle("anime_img");
      opacity();
   });
}
let blockOpacity = document.querySelectorAll(".block_content_portfolio_text");
function opacity() {
   for (let i = 0; i < blockOpacity.length; i++) {
      blockOpacity[i].classList.toggle("opacity");
   }
}
