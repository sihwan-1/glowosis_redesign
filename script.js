AOS.init();

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

$(function() {
  // 윈도우에서 스크롤 이벤트 발생 시 실행
  $(window).on('scroll', function() {
    function Topbtn() {
      if ($(window).scrollTop() > 150) {
        $('.top-btn').addClass('show');
      } else {
        $('.top-btn').removeClass('show');
      }
    }
    Topbtn();
  });

  // 버튼 클릭 시 맨 위로 부드럽게 스크롤
  $('.top-btn').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 600);
  });
});

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

function Swiper_5() {
  var swiper = new Swiper(".swiper-5", {
    slidesPerView: 2,
    spaceBetween: 60,
    pagination: {
      el: ".swiper-box-5 .swiper-pagination",
      clickable: true,
    },
  });
}
Swiper_5();

function Swiper_6() {
  var swiper = new Swiper(".swiper-6", {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-box-6 .swiper-pagination",
      type: "progressbar",
    },
  });
}
Swiper_6();