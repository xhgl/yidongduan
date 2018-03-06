 var swiper = new Swiper('.swiper-container.lunbo_1', {
      pagination: {
        el: '.swiper-pagination',
      },
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     loop : true,
    });
  var swiper = new Swiper('.swiper-container.lunbo_2', {
      slidesPerView: 3.4,
      spaceBetween: 4,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });