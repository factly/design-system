const parseEditorJsData = (desc) => {
  const { blocks } = desc;

  let htm = blocks.map((block) => {
    const { data } = block;
    let elem = '';
    switch (block.type) {
      case 'header':
        elem = `<h${data.level}> ${data.text} </h${data.level}>`;
        break;

      case 'paragraph':
        elem = `<p> ${data.text} </p>`;
        break;

      case 'list':
        let style = data.style === 'unordered' ? 'ul' : 'ol';
        let list = data.items.map((i) => `<li> ${i} </li>`).reduce((a, c) => a + c, '');
        elem = `<${style}> ${list} </${style}>`;
        break;

      default:
        break;
    }
    return elem;
  });

  return htm.join('');
};

export default parseEditorJsData;
