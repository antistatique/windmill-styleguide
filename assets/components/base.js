// You will use that file to import all your scripts
import svgIcons from '../icons/svg-icons';

import addCommentary from './organisms/add-commentary/add-commentary';
import addTime from './organisms/add-time/add-time';
import resetData from './molecules/data-table/data-table-entry-hours';

svgIcons(); // Must run as soon as possible

const init = () => {
  // Run your imported scripts
  addCommentary();
  addTime();
  resetData();
};

(function($) {
  $(document).ready(() => init());
})(jQuery);
document.addEventListener('ToolboxReady', () => init());
