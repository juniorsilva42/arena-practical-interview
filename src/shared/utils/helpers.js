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
