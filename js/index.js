$(() => {
  initSlider()
})

// Header function
$("#btn_open_menu").click(() => {
  const navigation = $(".navigation")
  navigation.css('marginTop', '0')
})
$("#btn_close_menu").click(() => {
  const navigation = $(".navigation")
  navigation.css('marginTop', '-100%')
  setTimeout(() => {
    navigation.css('marginTop', '-300%')
  }, 500)
})

// Slider function
const initSlider = () => {
  const slider = $('.slider')
  const btnRight = $('.slider__btn--right')
  const btnLeft = $('.slider__btn--left')

  $('.slider .slider__item:last').insertBefore('.slider .slider__item:first')

  slider.css('margin-left', '-43%')

  const moveRight = () => {
    if (!slider.is(':animated')) {
      slider.animate({
        marginLeft: '-105.6%'
      }, 700, () => {
        $('.slider .slider__item:first').insertAfter('.slider .slider__item:last')
        slider.css('margin-left', '-43%')
        resetInterval()
      })
    }
  }

  btnRight.on('click', moveRight)

  const moveLeft = () => {
    if (!slider.is(':animated')) {
      $('.slider .slider__item:last').insertBefore('.slider .slider__item:first');
      slider.css('margin-left', '-105.6%');
      slider.animate({
        marginLeft: '-43%'
      }, 700, function () {
        resetInterval()
      });
    }
  }
  btnLeft.on('click', moveLeft)

  let interval = setInterval(moveRight, 5000)

  function resetInterval() {
    clearInterval(interval)
    interval = setInterval(moveRight, 5000)
  }
}
