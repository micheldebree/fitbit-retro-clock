import clock from 'clock';
import document from 'document';
import { preferences } from 'user-settings';

clock.granularity = 'seconds';

const elH1 = document.getElementById('h1');
const elH2 = document.getElementById('h2');
const elM1 = document.getElementById('m1');
const elM2 = document.getElementById('m2');
const elSep = document.getElementById('sep');

function updateClock() {
  const now = new Date();
  const minutes = now.getMinutes();
  let hours = now.getHours();

  // use 12 or 24 hour display
  if (preferences.clockDisplay === '12h') {
    hours %= 12;
    hours = hours || 12;
  }

  // set digits
  const h1 = Math.floor(hours / 10);
  elH1.image = `${h1}.png`;
  elH1.style.display = h1 > 0 ? 'inline' : 'none';
  elH2.image = `${hours % 10}.png`;
  elM1.image = `${Math.floor(minutes / 10)}.png`;
  elM2.image = `${minutes % 10}.png`;

  // flash separator
  elSep.style.display = now.getSeconds() % 2 === 0 ? 'inline' : 'none';
}


clock.ontick = () => updateClock();
