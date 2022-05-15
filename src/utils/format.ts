export const getLocalDateTime = (dateString: string) => {
  if (dateString === '') return '';
  const date = new Date(dateString);
  if (!date || isNaN(date.getTime())) throw new Error('Date could not be parsed');

  return `${date.toLocaleDateString('de-DE')} ${date.toLocaleTimeString('de-DE')}`;
}