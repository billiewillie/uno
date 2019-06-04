(function(){
  'use strict';

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
  const inputName = document.querySelector('.input__name');
  const inputPhone = document.querySelector('.input__phone');
  const inputEmail = document.querySelector('.input__email');
  const userUrl = document.querySelector('.user_url');
  const tabgroup = document.querySelector('.tabgroup');
  const prostatilenToolLink = Array.from(document.querySelectorAll('.link.text__hidden'));
  const prostatilenToolImg = document.querySelector('.prostatilen__tool--img');
  const prostatilenToolPic = document.querySelector('.prostatilen__tool--pic');
  const indexCases = document.querySelector('.index__cases');

  // // wow
  if($('.wow').length){
    new WOW().init();
  }

  $(document).ready(function(){
    $("form").attr("action", "./mail.php");
  });

  // slider
  if($('.slider').length){
    $('.slider').slick({
      dots: false,
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

  if($('.slider__campaign').length){
    $('.slider__campaign').slick({
      centerMode: true,
      dots: false,
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '30px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: '120px',
            speed: 500,
          }
        },
        {
          breakpoint: 1440,
          settings: {
            centerPadding: '300px',
          }
        },
        {
          breakpoint: 2000,
          settings: {
            centerPadding: '500px',
            speed: 1000,
          }
        },
      ]
    });
  }

  if($('.slider__citovir').length){
    $('.slider__citovir').slick({
      centerMode: true,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '60px',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: '250px',
            slidesToShow: 1,
            speed: 500,
          }
        },
        {
          breakpoint: 1440,
          settings: {
            centerPadding: '350px',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 2000,
          settings: {
            centerPadding: '350px',
            speed: 1000,
            slidesToShow: 3,
          }
        },
      ]
    });
  }

  if($('.prostatilen__slider').length){
    $('.prostatilen__slider').slick({
      centerMode: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '10px',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: '250px',
            slidesToShow: 1,
            speed: 500,
          }
        },
        {
          breakpoint: 1440,
          settings: {
            centerPadding: '350px',
            slidesToShow: 1,
            speed: 500,
          }
        },
        {
          breakpoint: 2000,
          settings: {
            centerPadding: '650px',
            speed: 1000,
            slidesToShow: 1,
          }
        },
      ]
    });
  }

  if (window.innerWidth > 991){
    // video
    var video = $('.iframe').prop('src');
    var cover = $('.video__cover');
    var play = $('.play');
    play.on('click', function(e){
      video += "?autoplay=1";
      $('.iframe').prop('src', video);
      play.addClass('hide');
      cover.addClass('hide');
      return true;
    });
  }
  
  if($('.case__slider').length){
    $('.case__slider').slick({
      dots: false,
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
            slidesToShow: 3,
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

    // email
    $('.form__popup').on('submit', function(e){
      e.preventDefault();
      let fd = new FormData(this);
      let th = $(this);
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        contentType: false, 
        processData: false, 
        data: fd,
        success: function(msg){
          if(inputName.value != '' && inputPhone.value != '' && inputEmail.value != '' && userUrl.value === '') {
            if(msg === 'ok'){
              th.trigger('reset');
              $('.popup__title').text('Cпасибо! Мы скоро c вами свяжемся');
              setTimeout(function(){
                popupBg.classList.toggle('turn');
                popup.classList.toggle('show');
                popupInner.classList.toggle('show');
                $('.popup__title').text('напишите нам');
              }, 2000);
            }
          } else {
            alert('Заполните все поля пожалуйста!');
          }
        }
      })
    });
  
    
    getPopup(btnCoop);
    getPopup(popupClose);
  }

  $('.contacts__form').on('submit', function(e){
    e.preventDefault();
    let fd = new FormData(this);
    let th = $(this);
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      contentType: false, 
      processData: false, 
      data: fd,
      success: function(msg){
        if(inputName.value != '' && inputPhone.value != '' && inputEmail.value != '' && userUrl.value === '') {
          if(msg === 'ok'){
            th.trigger('reset');
            $('.contact__block--form .title').text('Cпасибо! Мы скоро c вами свяжемся');
          }
        } else {
          alert('Заполните все поля пожалуйста!');
        }
      }
    })
  });

  if(tabgroup){
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
      e.preventDefault();
      var $this = $(this),
          tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
          target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabgroup).children('div').hide();
      $(target).show();
    });
  }

  // about selection
  $('.about__title--item').on('click', function (e) {

    e.preventDefault();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    let target = $(this).attr('href');
    $('.about__text--item').not(target).hide();
    $(target).fadeIn(600);
    
  });

  var clickDelay = 500;
  var clickDelayTimer = null;

  $('.burger-click-region').on('click', function () {
    
    if(clickDelayTimer === null) {
      var $burger = $(this);
      $burger.toggleClass('active');
      $burger.parent().toggleClass('is-open');
      $('.bar').toggleClass('active');
      $('.hidden__menu').toggleClass('active');
      $('.bar .logo img').attr('src', 'img/logo_dark.svg');
      $('body').css('overflow', 'hidden');

      if(!$burger.hasClass('active')) {
        $burger.addClass('closing');
        $('.bar .logo img').attr('src', 'img/logo.svg');
        $('body').css('overflow', 'visible');
      }

      clickDelayTimer = setTimeout(function () {
        $burger.removeClass('closing');
        clearTimeout(clickDelayTimer);
        clickDelayTimer = null;
      }, clickDelay);
    }
  });
  
  $(window).on('scroll', function () {
    if($('.bar').length && window.innerWidth < 768){
      if($(document).scrollTop() > $('.header')[0].offsetHeight){
        $('.bar').addClass('show');
      }else if(!$('.header__case').length){
        $('.bar').removeClass('show');
      }
    }
  });

  if($('.bar').length && $('.header__case').length && window.innerWidth < 768){
    $('.bar').addClass('show');
  }

  if (window.innerWidth < 768) {
    $(function() {
      var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('h3');
        // Evento
        links.on('click', 
        {
          el: this.el, 
          multiple: this.multiple
        }, 
        this.dropdown)
      }

      Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
          $this = $(this),
          $next = $this.next();

        $next.slideToggle('fast');
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
          $el.find('.tool__hidden').not($next).slideUp().parent().removeClass('open');
        };
      } 

      var accordion = new Accordion($('.prostatilen__tools--list'), false);
    });
  }

  if(prostatilenToolPic){
    prostatilenToolPic.addEventListener('click', function(e){
      if(e.target !== prostatilenToolImg) prostatilenToolPic.classList.toggle('open');
    })
  };

  prostatilenToolLink.forEach(function(e,i){
    e.addEventListener('click', function(){
      prostatilenToolPic.classList.toggle('open');
      prostatilenToolImg.setAttribute('src', 'img/prostatilen_tool-'+(i+1)+'.jpg');
    });
  });

  if(indexCases){
    window.addEventListener('scroll', function(){
      indexCases.classList.add('main__cases');
    })
  };

})();