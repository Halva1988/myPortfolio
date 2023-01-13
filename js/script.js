document.querySelectorAll('.slider').forEach((number, item) => {
  window[`slider${item + 1}`] = new Swiper(number, {
    freeMode: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 1.75
  })
})

bindSwipers(slider1, slider2, slider3)