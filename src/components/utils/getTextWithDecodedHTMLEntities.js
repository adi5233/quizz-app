const getTextWithDecodedHTMLEntities = (str) => {
  const text = document.createElement('textarea');
  text.innerHTML = str;
  return text.value;
};

export default getTextWithDecodedHTMLEntities;