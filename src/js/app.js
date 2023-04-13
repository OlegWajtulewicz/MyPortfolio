import * as flsFunctions from "./modules/functions.js";


flsFunctions.isWebp();


//import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     type: 'progressbar',

//     // breakpoints: {

//     // }
  
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });

//const slider = document.querySelector('.swiper-container');


const swiperSliderSpeed = 2500;

const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--swiper-slider-speed'); //get

document.body.style.setProperty('--swiper-slider-speed', swiperSliderSpeed + 'ms');//set

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
  },
  speed: swiperSliderSpeed,
  // autoplay: {
  //   delay: 3000,
  // },
  pagination: {
    el: '.swiper__pag',
    type: 'bullets',
    clickable: true
  },
  on: {
      init: function () {
        const paginationBullets = document.querySelectorAll('.swiper__pag .swiper-pagination-bullet');

        paginationBullets.forEach(el => {
          el.innerHTML = `<span class="swiper__bar"></span>`;
        });
      },
    },
});


 


function initMap() {
  let coordinates = {lat: 52.18576, lng: 20.97114};

    let  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          mapId: "5ed7fc131b7e827c",
          center: coordinates,
          mapTypeControl: false,
          zoomControl: true,
          zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_TOP,
    },
          scaleControl: false,
          disableDefaultUI: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ["roadmap", "terrain"],
          },
          // zoomControl: boolean,
          // scaleControl: boolean,
          // streetViewControl: boolean,
          // rotateControl: boolean,
          // fullscreenControl: boolean
          // mapTypeControl: boolean,
          
      });

}
window.initMap = initMap;
