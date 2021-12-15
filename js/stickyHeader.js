$(document).ready(() => {
  const fixedHeader = $('#fixed-header');

  $(window).on('scroll', () => {
    const projectsOffsetTop = $('#projects').offset().top;
    const windowScroll = $(window).scrollTop();

    if (windowScroll >= projectsOffsetTop) {
      fixedHeader.css('margin-top', 0);
    } else if (windowScroll < projectsOffsetTop / 2) {
      fixedHeader.css('margin-top', '-4.25rem');
    }
  });
});
