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


// function valideForms(form) {
//   $(form).validate({
//     rules: {
//       name: {
//         required: true,
//         minlength: 2
//       },
//       email: {
//         required: true,
//         email: true
//       }
//     },
//     messages: {
//       name: {
//         required: "Please specify your name"
//         //minlength: jQuery.validator.format("At least {0} characters required!")
//       }, 
//       email: {
//         required: "We need your email address to contact you",
//         email: "Your email address must be in the format of name@domain.com"
//       }
//     }
//   });

  
// };

// valideForms('#contacts__form');



// // отправка писем
// $('form').submit(function(e) {
//   e.preventDefault();

//   if (!$(this).valid()) {
//     return;
//   }

//   $.ajax({
//     type: "POST",
//     url: "mailer/smart.php",
//     data: $(this).serialize()
//   }).done(function() {
//     $(this).find("input").val("");
//     $('form').trigger('reset');
//   });
//   return false; 
// });



//smooth scrolling to all links

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    } 
  });
});


document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		// formData.append('image', formImage.files[0]);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	//Получаем инпут file в переменную
	// const formImage = document.getElementById('formImage');
	// //Получаем див для превью в переменную
	// const formPreview = document.getElementById('formPreview');

	// //Слушаем изменения в инпуте file
	// formImage.addEventListener('change', () => {
	// 	uploadFile(formImage.files[0]);
	// });

	// function uploadFile(file) {
	// 	// провераяем тип файла
	// 	if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
	// 		alert('Разрешены только изображения.');
	// 		formImage.value = '';
	// 		return;
	// 	}
	// 	// проверим размер файла (<2 Мб)
	// 	if (file.size > 2 * 1024 * 1024) {
	// 		alert('Файл должен быть менее 2 МБ.');
	// 		return;
	// 	}

	// 	var reader = new FileReader();
	// 	reader.onload = function (e) {
	// 		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
	// 	};
	// 	reader.onerror = function (e) {
	// 		alert('Ошибка');
	// 	};
	// 	reader.readAsDataURL(file);
	// }
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
			let target_block_class = el.getAttribute('href').replace('#', '');
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