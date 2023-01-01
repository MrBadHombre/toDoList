// imported modules
import './style.css';
import { createProject } from './createEntry';

// query selectors for html element variables
const todayItem = document.querySelector('.todayItem');
const header = document.querySelector('.header');
const toDo = document.querySelector('#title');
const description = document.querySelector('#description');
const divdiv = document.getElementById('divdiv');
const projectPopUpContainer = document.querySelector('.projectPopUpContainer');
const toDoPopUpContainer = document.querySelector('.toDoPopUpContainer');
const newToDoPopUpBtn = document.querySelector('#addTask');
const ProjectSideBarTitle = document.querySelector('.projectListItem');

const addNewProjectBtn = document.querySelector('.addNewProjectBtn');
const addNewtoDoBtn = document.querySelector('.addNewToDoBtn');
const addNewProjectBtn2 = document.querySelector('.addNewProjectBtn2');
const addNewtoDoBtn2 = document.querySelector('.addNewToDoBtn2');
const submitProjectBtn = document.querySelector('#submitProject');
const submitToDo = document.querySelector('#submitToDo');
const listItemsSideBar = document.querySelector('.projectListItem');

const projectsSideBarContainer = document.querySelector(
  '.projectsSideBarContainer'
);
const projectsBtnSideBar = document.querySelector('#projectsBtn');

let entry;
let priority;
let arraaaay = [];

//Event listeners

// open create new popup
newToDoPopUpBtn.addEventListener('click', () => {
  projectPopUpContainer.classList.remove('hidden');
});

// toggle to new todo in pop up window
addNewtoDoBtn.addEventListener('click', () => {
  projectPopUpContainer.classList.add('hidden');
  toDoPopUpContainer.classList.remove('hidden');
});

// toggle to new todo in pop up window
addNewProjectBtn.addEventListener('click', () => {
  projectPopUpContainer.classList.remove('hidden');
  toDoPopUpContainer.classList.add('hidden');
});
addNewtoDoBtn2.addEventListener('click', () => {
  projectPopUpContainer.classList.add('hidden');
  toDoPopUpContainer.classList.remove('hidden');
});

// toggle to new todo in pop up window
addNewProjectBtn2.addEventListener('click', () => {
  projectPopUpContainer.classList.remove('hidden');
  toDoPopUpContainer.classList.add('hidden');
});

submitProjectBtn.addEventListener('click', createProject);

projectsBtnSideBar.addEventListener('click', () => {
  projectsSideBarContainer.classList.toggle('hidden');
});
