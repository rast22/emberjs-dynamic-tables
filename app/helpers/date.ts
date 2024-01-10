import { helper } from '@ember/component/helper';

type PositionalArgs = [string];

export function formatDate(positional: PositionalArgs) {
  const [dateString] = positional;

  // Return an empty string if the input is falsy
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return '';
  }

  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear();

  return `${day}. ${month}. ${year}`;
}

export default helper(formatDate);
