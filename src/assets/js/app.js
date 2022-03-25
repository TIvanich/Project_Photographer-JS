 // переводчик
//   const arrLang = {
//     'en': {
//       'skills': 'Skills',
//       'portfolio': 'Portfolio',
//       'video': 'Video',
//       'price': 'Price',
//       'contacts': 'Contacts',
//       'home' : 'Home',
//       'hero-title': 'Alexa Rise',
//       'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
//       'hire': 'Hire me',
//       'skill-title-1': 'Digital photography',
//       'skill-text-1': 'High-quality photos in the studio and on the nature',
//       'skill-title-2': 'Video shooting',
//       'skill-text-2': 'Capture your moments so that they always stay with you',
//       'skill-title-3': 'Rotouch',
//       'skill-text-3': 'I strive to make photography surpass reality',
//       'skill-title-4': 'Audio',
//       'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
//       'winter': 'Winter',
//       'spring': 'Spring',
//       'summer': 'Summer',
//       'autumn': 'Autumn',
//       'price-description-1-span-1': 'One location',
//       'price-description-1-span-2': '120 photos in color',
//       'price-description-1-span-3': '12 photos in retouch',
//       'price-description-1-span-4': 'Readiness 2-3 weeks',
//       'price-description-1-span-5': 'Make up, visage',
//       'price-description-2-span-1': 'One or two locations',
//       'price-description-2-span-2': '200 photos in color',
//       'price-description-2-span-3': '20 photos in retouch',
//       'price-description-2-span-4': 'Readiness 1-2 weeks',
//       'price-description-2-span-5': 'Make up, visage',
//       'price-description-3-span-1': 'Three locations or more',
//       'price-description-3-span-2': '300 photos in color',
//       'price-description-3-span-3': '50 photos in retouch',
//       'price-description-3-span-4': 'Readiness 1 week',
//       'price-description-3-span-5': 'Make up, visage, hairstyle',
//       'order': 'Order shooting',
//       'contact-me': 'Contact me',
//       'send-message': 'Send message'
//     },
//     'ru': {
//       'skills': 'Навыки',
//       'portfolio': 'Портфолио',
//       'video': 'Видео',
//       'price': 'Цены',
//       'contacts': 'Контакты',
//       'home' : 'Домой',
//       'hero-title': 'Алекса Райс',
//       'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
//       'hire': 'Пригласить',
//       'skill-title-1': 'Фотография',
//       'skill-text-1': 'Высококачественные фото в студии и на природе',
//       'skill-title-2': 'Видеосъемка',
//       'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
//       'skill-title-3': 'Ретушь',
//       'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
//       'skill-title-4': 'Звук',
//       'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
//       'winter': 'Зима',
//       'spring': 'Весна',
//       'summer': 'Лето',
//       'autumn': 'Осень',
//       'price-description-1-span-1': 'Одна локация',
//       'price-description-1-span-2': '120 цветных фото',
//       'price-description-1-span-3': '12 отретушированных фото',
//       'price-description-1-span-4': 'Готовность через 2-3 недели',
//       'price-description-1-span-5': 'Макияж, визаж',
//       'price-description-2-span-1': 'Одна-две локации',
//       'price-description-2-span-2': '200 цветных фото',
//       'price-description-2-span-3': '20 отретушированных фото',
//       'price-description-2-span-4': 'Готовность через 1-2 недели',
//       'price-description-2-span-5': 'Макияж, визаж',
//       'price-description-3-span-1': 'Три локации и больше',
//       'price-description-3-span-2': '300 цветных фото',
//       'price-description-3-span-3': '50 отретушированных фото',
//       'price-description-3-span-4': 'Готовность через 1 неделю',
//       'price-description-3-span-5': 'Макияж, визаж, прическа',
//       'order': 'Заказать съемку',
//       'contact-me': 'Свяжитесь со мной',
//       'send-message': 'Отправить'
//     }
//   }
//   const engLang = document.querySelector('.en')
//   const ruLang = document.querySelector('.ru')
//   const lang = document.querySelectorAll('[text]')

//   ruLang.addEventListener('click', translatePageRu)

//   function translatePageRu(element){
//     lang.forEach(function(elem){
//       elem.innerHTML = arrLang['ru'][elem.getAttribute('text')]
//     })
//   }

//   engLang.addEventListener('click', translatePageEn)

//   function translatePageEn(element){
//     lang.forEach(function(elem){
//       elem.innerHTML = arrLang['en'][elem.getAttribute('text')]
//     })
//   }

// // бургер
// const menuBtn = document.querySelector(".menu-button");
// const menuBtnLine = document.querySelectorAll(".menu-button__line");
// const menuBody = document.querySelector(".nav-menu");
// const menuList = document.querySelector(".nav-menu__list");
// const menuItem = document.querySelector(".nav-menu__item");

// if (menuBtn) {
// menuBtn.addEventListener("click", () => {
//   menuBody.classList.toggle("nav-menu--open");
//   menuList.classList.toggle("nav-menu__list--open");
//   menuBtn.classList.toggle("button-fixed")

//   for (let i = 0; i < menuBtnLine.length; i++) {
//     menuBtnLine[i].classList.toggle("menu-button__line--open");
//   }
// });
// }

// //переключатель темы

const switchBtnMoon = document.querySelector('.moon')
const switchBtnSun = document.querySelector('.sun')
const htmlPage = document.querySelector('html')

switchBtnSun.addEventListener('click', function(){
  html.classList.add('light')
  localStorage.setItem('htmlLight')
})

switchBtnMoon.addEventListener('click', function(){
  html.classList.remove('light')
  localStorage.setItem('htmlLight')
})



// // const switchTheme = () =>{
// //   const html = document.querySelector('html')
// //   html.classList.add('dark')
// //   const switchBtn = document.querySelector('.switch-theme');

// //   const getLocalStorageTheme = ()=>{
// //       const local = localStorage.getItem('theme')
// //       if(local){
// //           const parseTheme = JSON.parse(local)
// //           addActivClassTheme(parseTheme)
// //       }else{
// //           addActivClassTheme('moon')
// //       }
// //   }
// //   const saveLocalStorage = (value) =>{
// //       localStorage.setItem('theme', JSON.stringify(value))
// //   }
// //   switchBtn.addEventListener('click', (e)=>{
// //       const target = e.target.getAttribute('data-theme');
// //       let reversTheme = null;

// //       if(target === 'sun'){
// //           reversTheme = 'moon';
// //       }else{
// //           reversTheme = 'sun';
// //       }

// //       saveLocalStorage(reversTheme)
// //       addActivClassTheme(reversTheme)
// //   })

// //   const removeActivClassTheme = (value)=>{
// //           switchBtn.classList.remove(value);
// //   }

// //   const addActivClassTheme = (value)=>{

// //       let reversTheme = value === 'moon' ? 'sun' : 'moon';

// //       removeActivClassTheme(value);

// //       switchBtn.setAttribute('data-theme', value)
// //       switchBtn.classList.add(reversTheme);

// //       html.classList.remove(reversTheme);
// //       html.classList.add(value)
// //   }
// //   getLocalStorageTheme()
// // }
// // export default switchTheme;

