export default () => {
  $('#reset').on('click', function() {
    $('.zero').each(function() {
      $(this).text('00:00');
    });
  });

  $('#usual-schedule').on('click', function() {
    $('.number').each(function() {
      $(this).text('09:00');
    });
  });
};
