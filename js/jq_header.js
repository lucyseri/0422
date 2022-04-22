'use strict';

const bottomNav=$('.bottom-nav');
const ulSub=$('ul.sub');
const bottomBack=$('.bottom-back');

bottomNav.on('mouseenter', function(e){
  e.preventDefault();
  e.stopPropagation();
  ulSub.slideDown();
  bottomBack.slideDown();
});
bottomNav.on('mouseleave', function(e){
  e.preventDefault();
  e.stopPropagation();
  ulSub.slideUp();
  bottomBack.slideUp();
});