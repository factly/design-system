const parseEditorJsData = (desc) => {
  let data = JSON.parse(desc);
  const { blocks } = data;
  let htm = blocks.map((block) => {
    const { data } = block;
    switch (block.type) {
      case 'header':
        return `<h${data.level}> ${data.text} </h${data.level}>`;

      case 'paragraph':
        return `<p> ${data.text} </p>`;

      case 'list':
        let style = data.style === 'unordered' ? 'ul' : 'ol';
        let list = data.items.map((i) => `<li> ${i} </li>`).reduce((a, c) => a + c, '');
        return `<${style}> ${list} </${style}>`;

      default:
        break;
    }
    return console.log(block.type);
  });
  console.log(htm.join(''));
  return htm.join('');
};

export default parseEditorJsData;
