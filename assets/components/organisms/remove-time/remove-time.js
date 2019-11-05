export default () => {
  $('#remove-time').on('click', function() {
    $('#less-time').addClass('open');
  });

  $('#close-remove-time').on('click', function() {
    $('#less-time').removeClass('open');
  });

  $('#val').on('click', function() {
    $('#less-time').removeClass('open');
  });
};
