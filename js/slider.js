$(document).ready(() => {
  const slider = $('#slider');
  const btnPrev = $('#btn-prev');
  const btnNext = $('#btn-next');

  $('#slider .slide:last').insertBefore('#slider .slide:first');
  $(slider).css('margin-left', '-25%');
});