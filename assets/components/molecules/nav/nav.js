export default () => {
  $('nav a').on('click', function() {
    $('a').removeClass('active');
    $(this).addClass('active');
  });
};
