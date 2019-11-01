export default () => {
  const x = 32;

  $('#left').on('click', function() {
    $('#num-week').replaceWith(x - 1);
  });

  $('#right').on('click', function() {
    $('#week').replaceWith('<div class="week">semaine 33</div>');
  });
};
