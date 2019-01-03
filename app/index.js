import clock from 'clock';
import document from 'document';
import { preferences } from 'user-settings';

clock.granularity = 'minutes';

const elH1 = document.getElementById('h1');
const elH2 = document.getElementById('h2');
const elM1 = document.getElementById('m1');
const elM2 = document.getElementById('m2');

function updateClock() {
  const now = new Date();
  const minutes = now.getMinutes();
  let hours = now.getHours();

  if (preferences.clockDisplay === '12h') {
    hours %= 12;
    hours = hours || 12;
  }

  elH1.image = `${Math.floor(hours / 10)}.png`;
  elH2.image = `${hours % 10}.png`;
  elM1.image = `${Math.floor(minutes / 10)}.png`;
  elM2.image = `${minutes % 10}.png`;
}

clock.ontick = () => updateClock();
