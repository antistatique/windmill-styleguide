export default () => {
  $('#time').on('click', function() {
    $('#time-add').addClass('open');
  });

  $('#close-time').on('click', function() {
    $('#time-add').removeClass('open');
  });

  $('#validation').on('click', function() {
    $('#time-add').removeClass('open');
  });
};
