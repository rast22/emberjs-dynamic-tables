import { helper } from '@ember/component/helper';

type PositionalArgs = [string];

export function formatDate(positional: PositionalArgs) {
  const [dateString] = positional;

  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear();

  return `${day}. ${month}. ${year}`;
}

export default helper(formatDate);
