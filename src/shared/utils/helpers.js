/**
 * Helper to break workds and put "..." at end of string
 *
 * @param {String} text to break words
 * @param {String} toCharLimit maximum of chars of the string
 *
 * @return {String} newText
*/
export const breakWords = ({ text, toCharLimit }) => {
  let newText = text.substr(0, toCharLimit);

  if (text.length >= toCharLimit) {
    newText += '...';
  }

  return newText;
};

/**
 * Helper to format numbers with tier scale at SI (1k|1m etc) mainly large numbers
 *
 * @param {number} number number to format
 *
 * @return {number} number formatted
*/
export const formatNumber = (number) => {
  const symbols = ['', 'k', 'm', 'g', 't', 'p', 'e'];

  // determines SI symbol
  const tier = Math.log10(number) / 3 | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  const suffix = symbols[tier];
  const scale = Math.pow(10, tier * 3);

  const scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
};

/**
 * Helper to format date and display for humans
 *
 * @param {String} date to convert to new Date instance
 *
 * @return {String} date with hour
*/
export const formatDate = (date) => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const shortMonth = newDate.toLocaleString('en-us', { month: 'short' });
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  const formattedHour = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  let fullHour = `${formattedHour}:${formattedMinutes}`;

  const formatHourWithMeridian = +fullHour.substr(0, 2);
  const h = (formatHourWithMeridian % 12) || 12;
  const ampm = formatHourWithMeridian < 12 ? 'AM' : 'PM';

  fullHour = `${h}${fullHour.substr(2, 3)} ${ampm}`;

  return `${fullHour} · ${shortMonth} ${day}, ${year}`;
};
