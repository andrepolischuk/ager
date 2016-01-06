import type from 'component-type';
const today = new Date();

export default function (year, month, day) {
  let birthday;
  if (type(year) === 'date') birthday = year;
  if (type(year) === 'array') birthday = parse(...year);
  if (type(year) === 'number') birthday = parse(year, month, day);
  if (!birthday || birthday > today) return;
  let age = today.getFullYear() - birthday.getFullYear();
  age -= today.getMonth() < birthday.getMonth() ? 1 : 0;
  age -= today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate() ? 1 : 0;
  return age;
};

function parse(year, month, day) {
  if (!month || month > 12) return;
  if (!day || day > new Date(year, month, 0).getDate()) return;
  let date = new Date(year, month - 1, day);
  date.setFullYear(year);
  return date;
}
