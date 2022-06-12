$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });

  $(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });

  $(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 650) {
      $('.camera-img').addClass('from-left');
      $('.mission-text').addClass('from-right');
    } else {
      $('.camera-img').removeClass('from-left');
      $('.mission-text').removeClass('from-right');
    }
  });

  $('.gallery-list-item').click(function(){
    let filterValue = $(this).attr('data-filter');
    if(filterValue == 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + filterValue).hide(300);
      $('.filter').filter('.' + filterValue).show(300);
    }
  });

  $('.gallery-list-item').click(function(){
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

  $(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 4300) {
      $('.card-1').addClass('price-from-left');
      $('.card-2').addClass('price-from-bottom');
      $('.card-3').addClass('price-from-right');
    } else {
      $('.card-1').removeClass('price-from-left');
      $('.card-2').removeClass('price-from-bottom');
      $('.card-3').removeClass('price-from-right');
    }
  });

});
