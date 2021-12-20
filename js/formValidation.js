$(document).ready(() => {
  const form = $('#form');
  const name = $('#name');
  const email = $('#email');
  const message = $('#message');

  const nameValue = (e) => {
    if (name.val() == '' || name.val() == null) {
      e.preventDefault();
      $('input[type="text"] + .error').css('display', 'block');
    } else {
      $('input[type="text"] + .error').css('display', 'none');
    }
  };

  const emailValue = (e) => {
    if (email.val() == '' || email.val() == null) {
      e.preventDefault();
      $('input[type="email"] + .error').css('display', 'block');
    } else {
      $('input[type="email"] + .error').css('display', 'none');
    }
  };

  const messageValue = (e) => {
    if (message.val() == '' || message.val() == null) {
      e.preventDefault();
      $('textarea + .error').css('display', 'block');
    } else {
      $('textarea + .error').css('display', 'none');
    }
  };

  const validation = (e) => {
    nameValue(e);
    emailValue(e);
    messageValue(e);
  };

  form.on('submit', validation);
});