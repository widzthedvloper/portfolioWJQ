$(document).ready(() => {
  let num = 1;

  $('#btn-menu').on('click', (e) => {
    e.preventDefault();

    if (num == 1) {
      $('.menu-mobile .menu-principal').animate({ left: 0 }, 300, () => {
        num = 0;
      });
    } else {
      $('.menu-mobile .menu-principal').animate({ left: '-100%' }, 300, () => {
        num = 1;
      });
    }
  });

  $('.menu-mobile .menu-principal a').on('click', () => {
    $('.menu-mobile .menu-principal').animate({ left: '-100%' }, 300, () => {
      num = 1;
    });
  });
});