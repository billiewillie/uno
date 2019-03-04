(function(){
  'use strict';

  const search = document.querySelector('.item__search');
  const inputSearch = document.querySelector('.form__search .input');
  const headerContentBottom = document.querySelector('.header__content--bottom');

  search.addEventListener('click', function(e){
    e.preventDefault();
    headerContentBottom.classList.toggle('show');
    inputSearch.focus();
  });

})();