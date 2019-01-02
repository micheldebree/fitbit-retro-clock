const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const c0 = String.fromCharCode(0x10);
const c1 = String.fromCharCode(0x11);
const c2 = String.fromCharCode(0x12);
const c3 = String.fromCharCode(0x13);
const c4 = String.fromCharCode(0x14);
const c5 = String.fromCharCode(0x15);
const c6 = String.fromCharCode(0x16);
const c7 = String.fromCharCode(0x17);
const c8 = String.fromCharCode(0x18);
const c9 = String.fromCharCode(0x19);

// Add zero in front of numbers < 10
export function zeroPad(i) {
  return i < 10 ? `0${i}` : `${i}`;
}

export function getShortDayName(index) {
  return days[index];
}

export function getShortMonthName(index) {
  return months[index];
}

function monoDigit(digit) {
  switch (digit) {
    case 0:
      return c0;
    case 1:
      return c1;
    case 2:
      return c2;
    case 3:
      return c3;
    case 4:
      return c4;
    case 5:
      return c5;
    case 6:
      return c6;
    case 7:
      return c7;
    case 8:
      return c8;
    case 9:
      return c9;
    default:
      return digit;
  }
}

export function monoDigits(num) {
  return (num < 10 ? c0 : '') + monoDigit(num);
}
