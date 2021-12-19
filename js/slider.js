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
      });
    }
  };

  const moveLeft = () => {
    if (!slider.is(':animated')) {
      $('#slider .slide:last').insertBefore('#slider .slide:first');
      slider.css('margin-left', '-75%');
      slider.animate({
        marginLeft: '-25%',
      }, 700);
    }
  };

  btnNext.on('click', moveRight);
  btnPrev.on('click', moveLeft);
});