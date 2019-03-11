(function(){
  'use strict';

  // year
  const currentTime = new Date();
  let getYear = currentTime.getFullYear();
  let year = document.querySelector('.year');
  year.innerHTML = getYear;

  // varibles
  const search = document.querySelector('.item__search');
  const inputSearch = document.querySelector('.form__search .input');
  const headerContentBottom = document.querySelector('.header__content--bottom');
  const svg = document.querySelector('.svg');
  const polygon = document.querySelector('.polygon');
  const mainFooter = document.querySelector('.main__footer');
  const svgHeight = parseInt(getComputedStyle(svg).height);
  const svgWidth = parseInt(getComputedStyle(svg).width);
  const popup = document.querySelector('.popup');
  const btnCoop = document.querySelector('.btn__coop');
  const popupClose = document.querySelector('.popup__close');
  const popupInner = document.querySelector('.popup__inner');
  const popupBg = document.querySelector('.popup__bg');

  // search on mobile
  search.addEventListener('click', function(e){
    e.preventDefault();
    headerContentBottom.classList.toggle('show');
    inputSearch.focus();
  });

  // first screen effect
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


  //popup
  function getPopup(el1, el2) {
    el1.addEventListener('click', function(e){
      e.preventDefault();
      el2.classList.toggle('show');
    });
  } 

  function getBg(el1, el2, el3) {
    el1.addEventListener('click', function(e){
      e.preventDefault();
      el2.classList.toggle('show');
      setTimeout(function(){
        el3.classList.toggle('turn');
      }, 1000);
    });
  }

  getPopup(btnCoop, popup);
  getPopup(popupClose, popup);
  getBg(btnCoop, popupInner, popupBg);

  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "e.levina@uno-agency.ru", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 500);
		});
		return false;
	});

})();