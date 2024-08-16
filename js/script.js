document.querySelectorAll('.slider').forEach((number, item) => {
  window[`slider${item + 1}`] = new Swiper(number, {
    freeMode: true,
    centeredSlides: true,
    initialSlide: 1,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 2.25,
  })
})

bindSwipers(slider1, slider2, slider3)