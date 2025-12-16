import dayjs from 'dayjs';

export function getTimestamp() {
  return dayjs().unix();
}

export function formatDate(timestamp: number) {
  return dayjs.unix(timestamp).format('MMMM D, YYYY');
}
