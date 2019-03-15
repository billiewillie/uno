(function(){
  'use strict';

  // year
  const currentTime = new Date();
  let getYear = currentTime.getFullYear();
  let year = document.querySelector('.year');
  if(year){
    year.innerHTML = getYear;
  }


  //circle
  const triangle = document.querySelector('.circle');
  let triangleWidth = getComputedStyle(triangle).width;
  if(triangle){
    triangle.style.height = triangleWidth;
  }
  
  
  // varibles
  const search = document.querySelector('.item__search');
  // const searchLink = document.querySelector('.contacts__item--link');
  const inputSearch = document.querySelector('.form__search .input');
  // const inputMenuSearch = document.querySelector('.form__search--menu .input');
  const headerContentBottom = document.querySelector('.header__content--bottom');
  // const menuForm = document.querySelector('.form__search--menu');
  const svg = document.querySelector('.svg');
  const polygon = document.querySelector('.polygon');
  const mainFooter = document.querySelector('.main__footer');
  const popup = document.querySelector('.popup');
  const btnCoop = document.querySelector('.btn__coop');
  const popupClose = document.querySelector('.popup__close');
  const popupInner = document.querySelector('.popup__inner');
  const popupBg = document.querySelector('.popup__bg');
  const serviceItemTitle = Array.from(document.querySelectorAll('.service__item--title'));
  const serviceItemListItem = Array.from(document.querySelectorAll('.service__item--list-item'));

  // service page decorations
  function service(el1, name, content) {
    for(let i = 0; i < el1.length; i++) {
      let el = document.createElement('span');
      el.classList.add(name);
      el.textContent = content;
      el1[i].append(el);
    }
  }
  if(serviceItemTitle) {
    service(serviceItemTitle, 'title__dot', '.');
  }

  if(serviceItemListItem) {
    service(serviceItemListItem, 'service__slash', '/');
  }
  
  // search on mobile
  search.addEventListener('click', function(e){
    e.preventDefault();
    headerContentBottom.classList.toggle('show');
    inputSearch.focus();
  });

  
  // first screen effect
  
  if(document.querySelector('.main__index')) {
    const svgHeight = parseInt(getComputedStyle(svg).height);
    const svgWidth = parseInt(getComputedStyle(svg).width);
    function getPolygon(){
      svg.setAttribute('viewBox', '0 0 '+svgWidth+' '+svgHeight);
      polygon.setAttribute('points', '0,0 '+svgWidth+',0 '+svgWidth+','+svgHeight+' 0,'+svgHeight);
      return polygon;
    };
  
    let coords = getPolygon();
  
    let x = 0.1;
    function func(){
      if(x <= 1.1){
        coords = getPolygon();
        coords = polygon.setAttribute('points', '0,0 '+svgWidth+',0 '+svgWidth+','+svgHeight+' '+(0+svgWidth*x)+','+(svgHeight-svgHeight*x));
        x += 0.003;
      }
      return coords;
    }
  
    function showScreen () {
      setInterval(func, 1);
      mainFooter.classList.add('show');
    }
  
    showScreen();
  }

  //popup
  if(popup){
    function getPopup(el) {
      el.addEventListener('click', function(e){
        e.preventDefault();
        popup.classList.toggle('show');
        popupInner.classList.toggle('show');
        setTimeout(function(){
          popupBg.classList.toggle('turn');
        }, 1000);
      });
    }
  
    getPopup(btnCoop);
    getPopup(popupClose);
  }
  

  //E-mail Ajax Send
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "e.levina@uno-agency.ru", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Спасибо");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 500);
	// 	});
	// 	return false;
	// });

})();