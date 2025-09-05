
$(document).ready(function(){
  const $scroll = $(".scroll-container");
  const $video = $(".section-1 video");
  let scrollPos = 0;

  $scroll.on("scroll", function(){
    // 애니메이션 걸지 말고 단순 값 동기화만
    scrollPos = this.scrollLeft;
  });

  $scroll.on("wheel", function(e){
    e.preventDefault();
    const delta = e.originalEvent.deltaY;

    const speed = 3;
    scrollPos += delta * speed;

    const maxScroll = $scroll[0].scrollWidth - $scroll[0].clientWidth;
    if(scrollPos < 0) scrollPos = 0;
    if(scrollPos > maxScroll) scrollPos = maxScroll;

    // 부드럽게 이동 duration 0.4~0.5초
    gsap.to($scroll[0], {
      scrollLeft: scrollPos,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto"
    });

    // 비디오 opacity 조절
    let videoOpacity = 1 - scrollPos / $scroll[0].clientWidth;
    if(videoOpacity < 0) videoOpacity = 0;
    if(videoOpacity > 1) videoOpacity = 1;

    gsap.to($video, {
      opacity: videoOpacity,
      duration: 0.45,
      ease: "power2.out"
    });
  });
});

$(function(){
  const $header = $("header"); 
  const $scroll = $(".scroll-container"); // 스크롤되는 요소

  $scroll.on("scroll", function(){
    if ($(this).scrollLeft() > 500) {
      $header.addClass("black");
    } else {
      $header.removeClass("black");
    }
  });
});

function Menu_Op() {
  $('.ico-box > .menu-btn').click(function (){
    $('.allmenu').addClass('active')
  });

  $('.allmenu > .container > .close-btn').click(function (){
    $('.allmenu').removeClass('active')
  });
}
Menu_Op();

function search_Op() {
  $('.ico-box > .search-btn').click(function (){
    $('.search').addClass('active')
    $('.search-bg').addClass('active')
    $('header').addClass('black')
  });

  $('.search-bg').click(function (){
    $('.search').removeClass('active')
    $('.search-bg').removeClass('active')
  });
}
search_Op();

$(function(){
  const $scroll = $(".scroll-container");
  const $LeftBtn = $(".left-btn");

  // 버튼 클릭 시 맨 처음으로 이동
  $LeftBtn.click(function(){
    $scroll.animate({ scrollLeft: 0 }, 600);
  });

  // 스크롤 감지해서 버튼 표시/숨김
  $scroll.on("scroll", function(){
    if ($scroll.scrollLeft() > 500) {  // 300px 이상 이동하면 표시
      $LeftBtn.addClass("show");
    } else {
      $LeftBtn.removeClass("show");
    }
  });
});

$(function(){
  const $txt_2 = $(".txt-box-2");
  const $txt_3 = $(".txt-box-3");
  const $txt_4 = $(".txt-box-4");
  const $txt_5 = $(".txt-box-5");
  const $txt_6 = $(".txt-box-6");
  const $txt_7 = $(".txt-box-7");
  const $scroll = $(".scroll-container"); // 스크롤되는 요소

  $scroll.on("scroll", function(){
    if ($(this).scrollLeft() > 3000) {
      $txt_2.addClass("show");
    } else {
      $txt_2.removeClass("show");
    }
  });

  $scroll.on("scroll", function(){
    if ($(this).scrollLeft() > 6300) {
      $txt_3.addClass("show");
    } else {
      $txt_3.removeClass("show");
    }
  });

  $scroll.on("scroll", function(){
    if ($(this).scrollLeft() > 9600) {
      $txt_4.addClass("show");
    } else {
      $txt_4.removeClass("show");
    }
  });

  $scroll.on("scroll", function(){
    if ($(this).scrollLeft() > 12900) {
      $txt_5.addClass("show");
    } else {
      $txt_5.removeClass("show");
    }
  });

  $scroll.on("scroll", function(){
    if ($(this).scrollLeft() > 16200) {
      $txt_6.addClass("show");
    } else {
      $txt_6.removeClass("show");
    }
  });

  $scroll.on("scroll", function(){
    if ($(this).scrollLeft() > 20100) {
      $txt_7.addClass("show");
    } else {
      $txt_7.removeClass("show");
    }
  });
});

$(function(){
  const $scroll = $(".scroll-container");
  const $sec = $(".section-2");
  const $img = $(".img-box-2");

  $scroll.on("scroll", function(){
    // 현재 수평 스크롤 위치
    let scrollLeft = $scroll.scrollLeft();

    // section-2의 시작 위치와 너비
    let secOffset = $sec[0].offsetLeft;
    let secWidth = $sec.outerWidth();

    // progress 계산 (0~1)
    let progress = (scrollLeft - secOffset) / secWidth;
    progress = Math.max(0, Math.min(progress, 1));

    // img-box-2 y 이동 (1.2배)
    gsap.set($img, { x: -progress * 200 * 10 });
  });
});

$(function(){
  $(".tap-menu > div").click(function(){
    $(".tap-menu > div").removeClass("active");
    $(this).addClass("active");
    $(".img-box-5 > a").fadeOut().eq($(this).index()).fadeIn();
  }).eq(0).click(); // 처음 상태 세팅
});

function Swiper_2() {
  var swiper = new Swiper(".swiper-2", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000, // 3초마다 자동 슬라이드
      disableOnInteraction: false, // 사용자가 슬라이드 조작해도 자동 재생 유지
    },
    speed: 800,
  });
}

Swiper_2();

$(function(){
  const $box = $(".swiper-box-3");
  const maxX = $box.width() - $(window).width();

  $(window).on("scroll", function(){
    gsap.to($box, {
      x: -Math.min($(this).scrollTop() / $(window).height(), 1) * maxX,
      ease: "power2.out",
      overwrite: "auto",
      duration: 0.3
    });
  });
});

$(function(){
  const $scroll = $(".scroll-container");
  const $sec = $(".section-3");
  const $img = $(".img-box-3");

  $scroll.on("scroll", function(){
    // 현재 수평 스크롤 위치
    let scrollLeft = $scroll.scrollLeft();

    // section-2의 시작 위치와 너비
    let secOffset = $sec[0].offsetLeft;
    let secWidth = $sec.outerWidth();

    // progress 계산 (0~1)
    let progress = (scrollLeft - secOffset) / secWidth;
    progress = Math.max(0, Math.min(progress, 1));

    // img-box-2 y 이동 (1.2배)
    gsap.set($img, { x: -progress * 200 * 10 });
  });
});


function Swiper_3() {
  var swiper = new Swiper(".swiper-3", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000, // 3초마다 자동 슬라이드
      disableOnInteraction: false, // 사용자가 슬라이드 조작해도 자동 재생 유지
    },
    speed: 800,
  });
}

Swiper_3();

$(function(){
  const $box = $(".swiper-box-4");
  const maxX = $box.width() - $(window).width();

  $(window).on("scroll", function(){
    gsap.to($box, {
      x: -Math.min($(this).scrollTop() / $(window).height(), 1) * maxX,
      ease: "power2.out",
      overwrite: "auto",
      duration: 0.3
    });
  });
});

function Swiper_4() {
  var swiper = new Swiper(".swiper-4", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000, // 3초마다 자동 슬라이드
      disableOnInteraction: false, // 사용자가 슬라이드 조작해도 자동 재생 유지
    },
    speed: 800,
  });
}
Swiper_4();

$(function(){
  const $scroll = $(".scroll-container");
  const $sec = $(".section-4");
  const $img = $(".img-box-4");

  $scroll.on("scroll", function(){
    // 현재 수평 스크롤 위치
    let scrollLeft = $scroll.scrollLeft();

    // section-2의 시작 위치와 너비
    let secOffset = $sec[0].offsetLeft;
    let secWidth = $sec.outerWidth();

    // progress 계산 (0~1)
    let progress = (scrollLeft - secOffset) / secWidth;
    progress = Math.max(0, Math.min(progress, 1));

    // img-box-2 y 이동 (1.2배)
    gsap.set($img, { x: -progress * 200 * 10 });
  });
});

$(function(){
  const $box = $(".swiper-box-5");
  const maxX = $box.width() - $(window).width();

  $(window).on("scroll", function(){
    gsap.to($box, {
      x: -Math.min($(this).scrollTop() / $(window).height(), 1) * maxX,
      ease: "power2.out",
      overwrite: "auto",
      duration: 0.3
    });
  });
});

$(function(){
  const $scroll = $(".scroll-container");
  const $sec = $(".section-7");
  const $sns = $(".sns-1");
  const $sns_2 = $(".sns-2");
  const $sns_3 = $(".sns-3");
  const $sns_4 = $(".sns-4");
  const $sns_5 = $(".sns-5");
  const $sns_6 = $(".sns-6");
  const $sns_7 = $(".sns-7");
  const $sns_8 = $(".sns-8");
  const $sns_9 = $(".sns-9");
  const $sns_10 = $(".sns-10");
  const $sns_11 = $(".sns-11");

  $scroll.on("scroll", function(){
    // 현재 수평 스크롤 위치
    let scrollLeft = $scroll.scrollLeft();

    // section-2의 시작 위치와 너비
    let secOffset = $sec[0].offsetLeft;
    let secWidth = $sec.outerWidth();

    // progress 계산 (0~1)
    let progress = (scrollLeft - secOffset) / secWidth;
    progress = Math.max(0, Math.min(progress, 1));

    // img-box-2 y 이동 (1.2배)
    gsap.set($sns, { x: -progress * 200 * 4 });
    gsap.set($sns_2, { x: -progress * 200 * 5 });
    gsap.set($sns_3, { x: -progress * 200 * 6 });
    gsap.set($sns_4, { x: -progress * 200 * 5.5 });
    gsap.set($sns_5, { x: -progress * 200 * 7 });
    gsap.set($sns_6, { x: -progress * 200 * 4 });
    gsap.set($sns_7, { x: -progress * 200 * 5 });
    gsap.set($sns_8, { x: -progress * 200 * 3 });
    gsap.set($sns_9, { x: -progress * 200 * 4.2 });
    gsap.set($sns_10, { x: -progress * 200 * 3.6 });
    gsap.set($sns_11, { x: -progress * 200 * 4.2 });
  });
});
