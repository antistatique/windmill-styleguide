export default () => {
  $('#reset').on('click', function() {
    $('.zero').each(function() {
      $(this).text('00:00');
      $(this).css('color', '#d1d5db');
    });
  });

  $('#usual-schedule').on('click', function() {
    $('.zero').each(function() {
      $(this).text('08:35');
    });
  });

  $('#now').on('click', function() {
    $(this).css('display', 'none');
  });
};
