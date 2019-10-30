// You will use that file to import all your scripts
import svgIcons from '../icons/svg-icons';

import addCommentary from './organisms/add-commentary/add-commentary';

svgIcons(); // Must run as soon as possible

const init = () => {
  // Run your imported scripts
  addCommentary();
};

(function($) {
  $(document).ready(() => init());
})(jQuery);
document.addEventListener('ToolboxReady', () => init());
