$(document).ready(() => {
  const banner = $('#banner');

  function bannerHight() {
    const vpHight = $(window).height();
    banner.css('height', vpHight);
  }

  bannerHight();

  $(window).resize(bannerHight);
});
