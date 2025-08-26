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

function Select() {
  $('.select').click(function() {
    $('.select > ul').toggleClass('active')
  });
}
Select();

function Swiper_2() {
  var swiper = new Swiper(".swiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
  });
}
Swiper_2();

function Swiper_3() {
  var swiper = new Swiper(".swiper-3", {
    slidesPerView: 1.5,       // 양옆이 보이도록
    spaceBetween: 20,
    centeredSlides: true,     // 가운데 정렬
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000, // 다음 슬라이드로 넘어가기 전 대기 시간 (3초)
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-box-3 .swiper-button-next",
      prevEl: ".swiper-box-3 .swiper-button-prev",
    },
  });
}
Swiper_3();