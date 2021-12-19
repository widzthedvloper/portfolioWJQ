$(document).ready(() => {
  const slider = $('#slider');
  const btnPrev = $('#btn-prev');
  const btnNext = $('#btn-next');

  $('#slider .slide:last').insertBefore('#slider .slide:first');
  $(slider).css('margin-left', '-25%');

  const moveRight = () => {
    if (!slider.is(':animated')) {
      slider.animate({
        marginLeft: '-75%',
      }, 700, () => {
        $('#slider .slide:first').insertAfter('#slider .slide:last');
        slider.css('margin-left', '-25%');
        resetInterval();
      });
    }
  };

  const moveLeft = () => {
    if (!slider.is(':animated')) {
      $('#slider .slide:last').insertBefore('#slider .slide:first');
      slider.css('margin-left', '-75%');
      slider.animate({
        marginLeft: '-25%',
      }, 700, () => {
        resetInterval();
      });
    }
  };

  btnNext.on('click', moveRight);
  btnPrev.on('click', moveLeft);

  let interval = setInterval(moveRight, 5000);

  const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(moveRight, 5000);
  };
});