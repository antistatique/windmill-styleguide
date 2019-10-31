export default () => {
  $('#button-justify').on('click', function() {
    $('#add-commentary').addClass('open');
  });

  $('#close-commendary').on('click', function() {
    $('#add-commentary').removeClass('open');
  });

  $('#validation').on('click', function() {
    $('#add-commentary').removeClass('open');
  });
};
