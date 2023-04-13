/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}


//preloader
$(window).on('load', function() {
    $('#preloader').delay(1).fadeOut(1500, function() {
        $('body').css('overflow','visible');
        $(this).remove();
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
    $('.pageup').fadeIn();
    } else {
    $('.pageup').fadeOut();
    }
}); 


// window.onload = function(){
//     //hide the preloader
//     document.querySelector("#preloader").style.display = "none";
// }

// window.addEventListener('scroll', function () {
// 	let
// 		$header = document.querySelector('.header'),
// 		top = pageYOffset;
// 	if (top > 0) {
// 		$header.classList.add('scrolled');
// 	} else {
// 		$header.classList.remove('scrolled');
// 	}
// })

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu__link'),
          burger = document.querySelector('.burger'),
          body = document.querySelector('body'),
          close = document.querySelector('.menu__overlay');
        //   social = document.querySelector('.menu__social'),
        //   closeAnimate = document.querySelector('.close');
       
        // const disScroll = () => {
        //   let pagePosition = window.scrollY;
        //   document.body.classList.add('dis-scroll');
        //   document.body.dataset.position = pagePosition;
        //   document.body.style.top = -pagePosition + 'px';
        // }
        
        // const enScroll = () => {
        //   let pagePosition = parseInt(document.body.dataset.position, 10);
        //   document.body.style.top = 'auto';
        //   document.body.classList.remove('dis-scroll');
        //   window.scrollTo({
        //     top: pagePosition,
        //     left: 0
        //   });
        //   document.body.removeAttribute('data-position');
        // }

          burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            //close.classList.toggle('active');
            body.classList.toggle('lock');
            // if (burger.classList.contains('burger active')) {
            //   disScroll();
            // } else {
            //   enScroll();
            // } 
        });
    
        menuItem.forEach(item => {
          item.addEventListener('click', () => {
                burger.classList.toggle('active');
                menu.classList.toggle('active');
                //close.classList.toggle('active');
                body.classList.toggle('lock');
            });
        close.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('active');
                body.classList.remove('lock');
                //close.classList.toggle('active');
            }); 
        // social.addEventListener('click', () => {
        //         burger.classList.remove('active');
        //         menu.classList.remove('active');
        //         body.classList.remove('lock');
        //     });  
        
        
        // $(document).ready(function() {
        //     $('header__burger').click(function(event) {
        //       $('header__burger, .header__menu').toggleClass('active');
        //       $('body').toggleClass('lock');
        //     });
        //   });
            })})



           

            
           


