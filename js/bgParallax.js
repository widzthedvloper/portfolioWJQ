$(document).ready(() => {
  $(window).on('scroll', () => {
    const contact = $('#contact');
    const scrollTop = $(window).scrollTop();
    const contactOffSet = contact.offset().top;
    const contactOuterHeight = contact.outerHeight();

    if (scrollTop >= contactOffSet - contactOuterHeight) {
      const position = (scrollTop - contactOffSet) * 0.2;

      contact.css('background-position', `0 ${position}px`);
    }
  });
});