(function(){
  'use strict';

  const search = document.querySelector('.item__search');
  const inputSearch = document.querySelector('.form__search .input');
  const headerContentBottom = document.querySelector('.header__content--bottom');
  const svg = document.querySelector('.svg');
  const polygon = document.querySelector('.polygon');
  let svgHeight = parseInt(getComputedStyle(svg).height);
  let svgWidth = parseInt(getComputedStyle(svg).width);

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

  document.addEventListener('mousewheel', function(){
  
    setInterval(func, 1);

  });

  document.addEventListener('touchmove', function(){
  
    setInterval(func, 1);

  });

})();