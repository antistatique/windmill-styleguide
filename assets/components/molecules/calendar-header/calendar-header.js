export default () => {
  let x = 32;

  $('#left').on('click', function() {
    x -= 1;
    $('#num-week').text(x);
  });

  $('#right').on('click', function() {
    x += 1;
    $('#num-week').text(x);
  });
};
