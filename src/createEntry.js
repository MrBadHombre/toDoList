const createAllElements = function (title, content, priority) {
  const newEntry = (title, content, priority) => {
    return { title, content, priority };
  };

  const createDivElement = (entry) => {
    const contents = document.getElementById('content');
    const divdiv = document.createElement('div');
    divdiv.innerHTML = `${entry.title}`;
    contents.appendChild(divdiv);
  };

  return {
    title,
    content,
    priority,
    newEntry,
    createDivElement,
  };
};
export { createAllElements };
