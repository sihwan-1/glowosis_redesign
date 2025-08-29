$(document).ready(function(){
  const $scroll = $(".scroll-container");
  const $video = $(".section-1 video");
  let scrollPos = 0;

  $scroll.on("wheel", function(e){
    e.preventDefault();
    const delta = e.originalEvent.deltaY;

    scrollPos += delta;

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

function Swiper_2() {
  var swiper = new Swiper(".swiper-2", {
    effect: "fade",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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

function Swiper_3() {
  var swiper = new Swiper(".swiper-3", {
    effect: "fade",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

Swiper_4();

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
