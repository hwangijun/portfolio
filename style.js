$(function(){
  $('.button>a').click(function(e){
    e.preventDefault();
    $(this).addClass('select').siblings().removeClass('select');
  })
  $('#header>a').click(function () {
    $('#header>a').removeClass('on')
    $(this).addClass('on')
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  $(window).scroll(function(e){
    e.preventDefault();
    $('#section_wrap > .section').each(function(){
    let idx = $(this).index();
    if($(window).scrollTop() > $(this).offset().top -100){
      $('#header>a').removeClass('on')
      $('#header>a').eq(idx).addClass('on')
    }
  })
})
})