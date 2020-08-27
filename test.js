const trimNewline = (content, trimText) => {
  if (content.startsWith(trimText)) {
    content = content.substring(trimText.length);
  }
  if (content.endsWith(trimText)) {
    content = content.substring(0, content.length-trimText.length);
  }
  return content
};

const a = '<br>rwerwfoijdfogkj<br>sd;kfas;kdnfsdf<br>'
console.log(trimNewline(a, '<br>'));
