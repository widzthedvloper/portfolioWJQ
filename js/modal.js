$(document).ready(() => {
  $('.project-image').on('click', function () {
    const imagePath = $(this).attr('src');
    const modal = `<div class="modal" id="modal">
            <img src=${imagePath} alt="image of the first project">
            <div class="btn-close" id="btn-close">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>`;

    $('#projects').after(modal);

    $('#btn-close').on('click', () => {
      $('#modal').remove();
    });
  });

  $(document).on('keyup', (e) => {
    if (e.which == 27) {
      $('#modal').remove();
    }
  });
});