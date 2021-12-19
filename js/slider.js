$(document).ready(() => {
  const slider = $('#slider');
  const btnPrev = $('#btn-prev');
  const btnNext = $('#btn-next');

  $('#slider .slide:last').insertBefore('#slider .slide:first');
  $(slider).css('margin-left', '-25%');

  function moveRight() {
    slider.animate({
      marginLeft: '-75%',
    }, 700, () => {
      $('#slider .slide:first').insertAfter('#slider .slide:last');
      slider.css('margin-left', '-25%');
    });
  }

  btnNext.on('click', moveRight);
});