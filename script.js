function Menu_1() {
  $('header > nav').mouseenter(function() {
    $('.menu-bg').addClass('active');
    $('header').addClass('active');
  });

  $('header > nav').mouseleave(function() {
    $('.menu-bg').removeClass('active');
    $('header').removeClass('active');
  });
}
Menu_1();