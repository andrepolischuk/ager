import type from 'component-type';

function parseDate(year, month, day) {
  if (type(year) === 'array') return parseDate(...year);
  if (type(year) !== 'number') return null;

  if (!month || month > 12) throw new RangeError('Month value is not correct');

  if (!day || day > new Date(year, month, 0).getDate()) {
    throw new RangeError('Day value is not correct');
  }

  const date = new Date(year, month - 1, day);
  date.setFullYear(year);
  return date;
}

export default function ager(year, ...args) {
  const today = new Date();
  const birthday = type(year) === 'date' ? year : parseDate(year, ...args);

  if (!birthday) throw new TypeError('Value is not a date');
  if (birthday > today) throw new RangeError('Date cannot be a birthday');

  return today.getFullYear() - birthday.getFullYear() -
    (today.getMonth() < birthday.getMonth() ? 1 : 0) -
    (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate() ? 1 : 0);
}
