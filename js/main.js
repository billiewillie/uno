(function(){
  'use strict';

  const search = document.querySelector('.item__search');
  const inputSearch = document.querySelector('.form__search .input');
  const headerContentBottom = document.querySelector('.header__content--bottom');
  const svg = document.querySelector('.svg');
  const polygon = document.querySelector('.polygon');
  const mainFooter = document.querySelector('.main__footer');
  let svgHeight = parseInt(getComputedStyle(svg).height+100);
  let svgWidth = parseInt(getComputedStyle(svg).width+100);

  search.addEventListener('click', function(e){
    e.preventDefault();
    headerContentBottom.classList.toggle('show');
    inputSearch.focus();
  });

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
      x += 0.002;
    }
    return coords;
  }

  function showScreen () {
    setInterval(func, 1);
    mainFooter.classList.add('show');
  }

  document.addEventListener('mousewheel', function(){
  
    showScreen();

  });

  document.addEventListener('touchmove', function(){
  
    showScreen();

  });

  if(window.innerWidth > window.innerHeight){

    

  }

})();