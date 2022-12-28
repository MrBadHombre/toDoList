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
// create new project entry
let projectArray = [];
function createProject() {
  const projectsSideBarContainer = document.querySelector(
    '.projectsSideBarContainer'
  );
  const projectListContainer = document.createElement('div');
  const projectSubmitInput = document.querySelector('#projectPopUpTitle');
  const popUpProjectContainer = document.querySelector(
    '.popUpProjectContainer'
  );
  const projectListItem = document.createElement('div');
  const projectPopUpItem = document.createElement('div');
  const projectTitleInput = projectSubmitInput;
  projectsSideBarContainer.appendChild(projectListContainer);
  projectListContainer.classList.add('projectListContainer');
  projectListItem.classList.add('projectListItem');
  projectPopUpItem.classList.add('projectPopUpItem');

  projectArray.push(projectTitleInput.value);
  projectArray.forEach(() => {
    projectListItem.innerHTML = `<div>${projectTitleInput.value}</div>`;
    projectListContainer.appendChild(projectListItem);
    popUpProjectContainer.appendChild(projectListItem);
    projectPopUpItem.innerHTML = `<div>${projectTitleInput.value}</div>`;
    projectListContainer.appendChild(projectListItem);
    popUpProjectContainer.appendChild(projectPopUpItem);
  });
  console.log(projectArray);
}

export { createAllElements, createProject };
