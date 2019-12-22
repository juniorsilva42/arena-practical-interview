export const breakWords = ({ text, toCharLimit }) => {
  let newText = text.substr(0, toCharLimit);

  if (text.length >= toCharLimit) {
    newText += '...';
  }

  return newText;
};
