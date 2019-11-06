export default () => {
  const setChrono = () => {
    let hasVisible = false;

    $('.entry-hours')
      .find('.button-secondary')
      .each(function() {
        const value = $(this)
          .next('.zero')
          .text();

        $(this).removeClass('visible');
        if (value === '00:00' && !hasVisible) {
          $(this).addClass('visible');
          hasVisible = true;
        }

        $(this)
          .next('.zero')
          .removeClass('text-muted');
        if (value === '00:00') {
          $(this)
            .next('.zero')
            .addClass('text-muted');
        }
      });
  };
  setChrono();

  $('#reset').on('click', function() {
    $('.zero').each(function() {
      $(this).text('00:00');
    });
    setChrono();
  });

  $('#usual-schedule').on('click', function() {
    $('#morning-start').text('08:35');
    $('#morning-end').text('12:05');
    $('#afternoon-start').text('13:05');
    $('#afternoon-end').text('17:24');
    setChrono();
  });

  $('#now-start').on('click', function() {
    $('#morning-start').text('08:35');
    setChrono();
  });

  $('#now-end').on('click', function() {
    $('#morning-end').text('12:05');
    setChrono();
  });
};
