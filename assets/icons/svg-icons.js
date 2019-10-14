const svgIcons = () => {
  const ajax = new XMLHttpRequest();
  const svgPath = data.svg_path || 'icons/icons.svg';
  ajax.open('GET', svgPath, true);
  ajax.send();
  ajax.onload = function (e) {
    if (ajax.status == 200) {
      const div = document.createElement('div');
      div.innerHTML = ajax.responseText;
      document.body.insertBefore(div, document.body.childNodes[0]);
    }
  };
};

export default svgIcons;
