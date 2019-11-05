// You will use that file to import all your scripts
import svgIcons from '../icons/svg-icons';

import addCommentary from './organisms/add-commentary/add-commentary';
import addTime from './organisms/add-time/add-time';
import removeTime from './organisms/remove-time/remove-time';
import resetData from './molecules/data-table/data-table-entry-hours';
import changeWeek from './molecules/calendar-header/calendar-header';

svgIcons(); // Must run as soon as possible

const init = () => {
  // Run your imported scripts
  addCommentary();
  addTime();
  removeTime();
  resetData();
  changeWeek();
};

(function($) {
  $(document).ready(() => init());
})(jQuery);
document.addEventListener('ToolboxReady', () => init());
