$(window).ready(() => {
  const btnBackToTop = $('#btn-scroll-to-top');

  $(window).on('scroll', () => {
    const windowScroll = $(window).scrollTop();
    const projectsOffsetTop = $('#projects').offset().top;

    if (windowScroll >= projectsOffsetTop) {
      btnBackToTop.css('margin-right', '20px');
    } else if (windowScroll < projectsOffsetTop / 2) {
      btnBackToTop.css('margin-right', '-60px');
    }
  });

  $('a.back-to-top').on('click', (event) => {
    event.preventDefault();

    const windowScroll = $(window).scrollTop();

    if (windowScroll != 0) {
      $('html, body').stop().animate({ scrollTop: 0 }, 1000);
    }
  });

  $('a.smooth-scroll').on('click', function (event) {
    event.preventDefault();

    // const windowScroll = $(window).scrollTop();
    const sectionOffsetTop = $($(this).attr('href')).offset().top;

    $('html, body').stop().animate({ scrollTop: sectionOffsetTop }, 1000);
  });

  $('a.scroll-about').on('click', function (event) {
    event.preventDefault();

    // const windowScroll = $(window).scrollTop();
    const sectionOffsetTop = $($(this).attr('href')).offset().top - 122;

    $('html, body').stop().animate({ scrollTop: sectionOffsetTop }, 1000);
  });

  $('a.scroll-team').on('click', function (event) {
    event.preventDefault();

    // const windowScroll = $(window).scrollTop();
    const sectionOffsetTop = $($(this).attr('href')).offset().top - 68;

    $('html, body').stop().animate({ scrollTop: sectionOffsetTop }, 1000);
  });
});