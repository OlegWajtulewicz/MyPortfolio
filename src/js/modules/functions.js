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



window.onload = function() {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(function() {
        preloader.classList.add('preloader-hidden');
  }, 990);
}

//smooth scrolling to all links
// $(document).ready(function(){
//   $("a").on('click', function(event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       let hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 500, function(){
//         window.location.hash = hash;
//       });
//     } 
//   });
// });



$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
    $('.pageup').fadeIn();
    } else {
    $('.pageup').fadeOut();
    }
}); 

  

  (function () {
    const docBody         = document.body;
    const themeChangeIcon = document.getElementById('themeChangeIcon');
    let metaThemeColor  = document.querySelector("meta[name=theme-color]");
  
    function setMetaThemeColor() {
      let pageStyle       = getComputedStyle(docBody);
      let backgroundColor = pageStyle.getPropertyValue('--background-color');
          metaThemeColor.setAttribute('content', backgroundColor);     
    }
     
    themeChangeIcon.addEventListener('click', function () {
  
      if ( docBody.className == '' ) {
        docBody.classList.toggle('dark-theme');
        setMetaThemeColor();
      } else if ( docBody.className == 'dark-theme' ) {
        docBody.classList.replace('dark-theme', 'light');
        themeChangeIcon.classList.remove( 'icon-icon_sun');
        themeChangeIcon.classList.add( 'icon-moon-solid');
        setMetaThemeColor();
      } else if ( docBody.className == 'light' ) {
        docBody.classList.replace('light', 'dark-theme');
        themeChangeIcon.classList.add( 'icon-icon_sun');
        themeChangeIcon.classList.remove( 'icon-moon-solid');
        setMetaThemeColor();
      }
      localStorage.setItem('themeType', docBody.className);
    });

      
  
  
    if ( localStorage.getItem('themeType') != null ) {
      let getThemeType      = localStorage.themeType;
          docBody.className = getThemeType;
      setMetaThemeColor();
      if ( localStorage.getItem('themeType') == 'dark-theme' ) {
        themeChangeIcon.checked = true;
        themeChangeIcon.classList.remove( 'icon-moon-solid');
        themeChangeIcon.classList.add( 'icon-icon_sun');
      } 
    }
  
  
    let darkThemeQuery = '(prefers-color-scheme: dark)';
    let matchMedia = window.matchMedia;
    if (matchMedia && matchMedia(darkThemeQuery).matches) {
      //themeChangeIcon.click();
    }
  
  })();

  

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu__link'),
          burger = document.querySelector('.burger'),
          body = document.querySelector('body'),
          close = document.querySelector('.menu__overlay');
      
  
          burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            body.classList.toggle('lock');
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
            }); 
            })}) 

            
            
           
                      