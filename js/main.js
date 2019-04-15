(function(){
  'use strict';

  // // wow
  if($('.wow').length){
    new WOW().init();
  }


  // slider
  if($('.slider').length){
    $('.slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: true
          }
        },
      ]
    });
  }
  
  if($('.case__slider').length){
    $('.case__slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }
  

  // year
  const currentTime = new Date();
  let getYear = currentTime.getFullYear();
  let year = document.querySelector('.year');
  if(year){
    year.innerHTML = getYear;
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
  const aboutTitles = Array.from(document.querySelectorAll('.about__title--item'));
  const aboutText = Array.from(document.querySelectorAll('.about__text--item'));

  // about selection
  $('.about__title--item').on('click', function (e) {
  
    e.preventDefault();
    
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    
    let target = $(this).attr('href');
  
    $('.about__text--item').not(target).hide();
    
    $(target).fadeIn(600);
    
  });

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
  if(search){
    search.addEventListener('click', function(e){
      e.preventDefault();
      headerContentBottom.classList.toggle('show');
      inputSearch.classList.toggle('show');
      inputSearch.focus();
    });
  }
  
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
    
    setTimeout(function(){
      showScreen();
    }, 1000);
    
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

    // //email
    $('.form__popup').on('submit', function(e){
      e.preventDefault();
      var fd = new FormData(this);
      var th = $(this);
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        contentType: false, 
        processData: false, 
        data: fd,
        success: function(msg){
          if(msg == 'ok') {
            th.trigger('reset');
            $('.popup__title').text('Cпасибо! Мы скоро c вами свяжемся');
            setTimeout(function(){
              popupBg.classList.toggle('turn');
              popup.classList.toggle('show');
              popupInner.classList.toggle('show');
              $('.popup__title').text('напишите нам');
            }, 2000);
          } else {
            alert('не отправлено');
          }
        }
      })
    });
  
    getPopup(btnCoop);
    getPopup(popupClose);
  }
  

})();