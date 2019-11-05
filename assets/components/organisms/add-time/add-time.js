export default () => {
  $('#add-time').on('click', function() {
    $('#time').addClass('open');
  });

  $('#close-time').on('click', function() {
    $('#time').removeClass('open');
  });

  $('#valid').on('click', function() {
    $('#time').removeClass('open');
  });
};
