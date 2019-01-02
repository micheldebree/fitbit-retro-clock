import clock from 'clock';
import document from 'document';
import { preferences } from 'user-settings';

import * as util from '../common/utils';

clock.granularity = 'minutes';

const elTime = document.getElementById('time');
const elDay = document.getElementById('day');
const elDayOfWeek = document.getElementById('dow');
const elMonth = document.getElementById('month');

function updateClock() {
  const now = new Date();
  const minutes = util.zeroPad(now.getMinutes());
  let hours = now.getHours();

  if (preferences.clockDisplay === '12h') {
    hours %= 12;
    hours = hours || 12;
  }

  elTime.text = `${util.monoDigits(hours)}:${util.monoDigits(minutes)}`;
  elDay.text = `${now.getDate()}`;
  elDayOfWeek.text = `${util.getShortDayName(now.getDay())}`;
  elMonth.text = `${util.getShortMonthName(now.getMonth())}`;
}

clock.ontick = () => updateClock();
