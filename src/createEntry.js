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
// create new peoject entry
let testArray = [];
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
    projectPopUpItem.innerHTML = `<button>${projectTitleInput.value}</button>`;
    projectListContainer.appendChild(projectListItem);
    popUpProjectContainer.appendChild(projectPopUpItem);
  });
  console.log(projectArray);
}

// create new todo entry

// let toDoTitleArray = [];
// function createToDo(entry) {
//   entry = {
//     title: 'dog',
//   };
//   const toDo = document.createElement('div');
//   const toDoTitleSideBar = document.createElement('div');
//   toDoTitleSideBar.classList.add('toDoTitleSideBar');
//   toDo.classList.add('newToDo');
//   for (let i = 0; i < testArray.length; i++) {
//     testArray[i].appendChild('toDoTitleSideBar');
//   }
//   toDoTitleSideBar.innerHTML = `${entry.title}`;
//   toDo.innerHTML = `<div class="toDoTitle">${entry.title}</div><div class="toDoContent">${entry.description}</div><div class="toDoPriority">${entry.priority}</div><div class="toDoTimeToComplete">${entry.timeToComplete}</div><div class="toDoCompletionDate">${entry.completionDate}</div>`;

//   const clickedListItem = onclick.projectListItem;
//   clickedListItem.append('toDoTitleSideBar');
// }

export { createProject };
