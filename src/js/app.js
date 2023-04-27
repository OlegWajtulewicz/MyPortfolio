import * as flsFunctions from "./modules/functions.js";


flsFunctions.isWebp();


//import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();




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

AOS.init({
	disable: 'phone',
});
 


////validation
const form = document.getElementById("form");
form.addEventListener("submit", () => {
e.preventDefault();
const formData = new FormData(form);
axios
.post("https://usebasin.com/f/5013a8a412fc", formData, options)
.then((response) => {
if (response.status === 200) {
	form.classList.add('_sending');
	form.reset();
	console.log("success");
} else {
	console.log("fail");
	alert("Ошибка");
	form.classList.remove('_sending');
}
})
.catch((error) => console.log(error));
});



//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#', '');
		if (block_name != '' && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener('click', function (e) {
			if (document.querySelector('.menu__body._active')) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		})
	}

	window.addEventListener('scroll', function (el) {
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if (old_current_link) {
			for (let index = 0; index < old_current_link.length; index++) {
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for (let index = 0; index < blocks.length; index++) {
			let block = blocks[index];
			let block_item = document.querySelector('.' + block);
			if (block_item) {
				let block_offset = offset(block_item).top;
				let block_height = block_item.offsetHeight;
				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
					for (let index = 0; index < current_links.length; index++) {
						let current_link = current_links[index];
						current_link.classList.add('_active');
					}
				}
			}
		}
	})
}



