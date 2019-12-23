export const breakWords = ({ text, toCharLimit }) => {
  let newText = text.substr(0, toCharLimit);

  if (text.length >= toCharLimit) {
    newText += '...';
  }

  return newText;
};

export const formatNumber = (number) => {
  const symbols = ['', 'k', 'm', 'g', 't', 'p', 'e'];
  const tier = Math.log10(number) / 3 | 0;

  if (tier === 0) return number;

  const suffix = symbols[tier];
  const scale = Math.pow(10, tier * 3);

  const scaled = number / scale;

  return scaled.toFixed(1) + suffix;
};

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
