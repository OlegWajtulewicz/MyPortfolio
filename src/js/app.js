import * as flsFunctions from "./modules/functions.js";


flsFunctions.isWebp();


//import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();




const swiperSliderSpeed = 500;

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

AOS.init({
    disable: 'phone',
    mirror: false,
    once: true
  });
 


///scrollUp

const btnUp = {
	el: document.querySelector('.btn-up'),
	scrolling: false,
	show() {
	  if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
		this.el.classList.remove('btn-up_hide');
		this.el.classList.add('btn-up_hiding');
		window.setTimeout(() => {
		  this.el.classList.remove('btn-up_hiding');
		}, 300);
	  }
	},
	hide() {
	  if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
		this.el.classList.add('btn-up_hiding');
		window.setTimeout(() => {
		  this.el.classList.add('btn-up_hide');
		  this.el.classList.remove('btn-up_hiding');
		}, 300);
	  }
	},
	addEventListener() {
	  // при прокрутке окна (window)
	  window.addEventListener('scroll', () => {
		const scrollY = window.scrollY || document.documentElement.scrollTop;
		if (this.scrolling && scrollY > 0) {
		  return;
		}
		this.scrolling = false;
		// если пользователь прокрутил страницу более чем на 200px
		if (scrollY > 500) {
		  // сделаем кнопку .btn-up видимой
		  this.show();
		} else {
		  // иначе скроем кнопку .btn-up
		  this.hide();
		}
	  });
	  // при нажатии на кнопку .btn-up
	  document.querySelector('.btn-up').onclick = () => {
		this.scrolling = true;
		this.hide();
		// переместиться в верхнюю часть страницы
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	  }
	}
  }

  btnUp.addEventListener();  



  

