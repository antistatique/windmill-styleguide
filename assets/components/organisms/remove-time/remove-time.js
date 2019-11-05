export default () => {
  $('#remove-time').on('click', function() {
    $('#less-time').addClass('open');
  });

  $('#close-remove-time, #valid-remove-time').on('click', function() {
    $('#less-time').removeClass('open');
  });
};
