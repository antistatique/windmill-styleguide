export default () => {
  $('#add-time').on('click', function() {
    $('#time').addClass('open');
  });

  $('#close-time').on('click', function() {
    $('#time').removeClass('open');
  });

  $('#validation').on('click', function() {
    $('#time').removeClass('open');
  });
};
