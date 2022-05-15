export const getLocalDateTime = (dateString: string) => {
  if (dateString === '') return '';
  const date = new Date(dateString);
  if (!date || isNaN(date.getTime())) throw new Error('Date could not be parsed');

  return `${date.toLocaleDateString('de-DE')} ${date.toLocaleTimeString('de-DE')}`;
}

export const formatLatLong = (latitude: number, longitude: number) => {
  if (latitude === -1 || longitude === -1) return '';
  return `${latitude}, ${longitude}`
}