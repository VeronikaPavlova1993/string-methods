function truncate(text) {
  let index = 37;
  text = text.trim();
  if( text.length <= index) return text;
  text = text.slice(0, index);
  const match = text.match(/[!.,?]/);
  let lastSpace = text.lastIndexOf(" ");
  let lastIndex = text.lastIndexOf(match);
  if( lastSpace > 0) {
    text = text.substr(0, lastSpace).substr(0, lastIndex);;
  }
  return text + "...";
} 