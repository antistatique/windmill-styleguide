export default () => {
  $('#time').on('click', function() {
    $('#time-add').addClass('open');
  });

  $('#validation').on('click', function() {
    $('#time-add').removeClass('close');
  });
};
