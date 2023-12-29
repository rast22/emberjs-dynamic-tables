import { helper } from '@ember/component/helper';

type PositionalArgs = [string];

export function formatDate(positional: PositionalArgs) {
  const [dateString] = positional;
  if (!dateString) {
    return '';
  }
console.log(dateString)
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export default helper(formatDate);
