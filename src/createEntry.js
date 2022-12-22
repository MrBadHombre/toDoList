const createAllElements = function (
  title,
  content,
  priority,
  timeToComplete,
  completionDate
) {
  const newEntry = (
    title,
    content,
    priority,
    timeToComplete,
    completionDate
  ) => {
    return { title, content, priority, timeToComplete, completionDate };
  };

  const createDivElement = (entry) => {
    const contents = document.getElementById('content');
    const divdiv = document.createElement('div');
    divdiv.classList.add('divdiv');
    divdiv.innerHTML = `<div>${entry.title}</div><div>${entry.content}</div><div>${entry.priority}</div><div>${entry.timeToComplete}</div><div>${entry.completionDate}`;
    contents.appendChild(divdiv);
  };

  return {
    title,
    content,
    priority,
    timeToComplete,
    completionDate,
    newEntry,
    createDivElement,
  };
};
export { createAllElements };
