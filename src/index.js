// imported modules
import './style.css';
import { createAllElements } from './createEntry';

// query selectors for html element variables
const todayItem = document.querySelector('.todayItem');
const header = document.querySelector('.header');
const toDo = document.querySelector('#title');
const description = document.querySelector('#description');
const divdiv = document.getElementById('divdiv');
const projectPopUpContainer = document.querySelector('.projectPopUpContainer');
const toDoPopUpContainer = document.querySelector('.toDoPopUpContainer');
const newToDoPopUpBtn = document.querySelector('#addTask');

const addNewProjectBtn = document.querySelector('.addNewProjectBtn');
const addNewtoDoBtn = document.querySelector('.addNewToDoBtn');
const addNewProjectBtn2 = document.querySelector('.addNewProjectBtn2');
const addNewtoDoBtn2 = document.querySelector('.addNewToDoBtn2');

let entry;
let priority;
let arraaaay = [];

//Event listeners

// btn.addEventListener('click', () => {
//   entry = entry;
//   entry = createAllElements(toDo.value, description.value);
//   arraaaay.push(entry);
//   console.table(arraaaay);
//   entry.createDivElement(entry);
//   todayItem.innerHTML = `${toDo.value}`;
// });

// open create new popup
newToDoPopUpBtn.addEventListener('click', () => {
  projectPopUpContainer.classList.remove('hidden');
});

// toggle to new todo in pop up window
addNewtoDoBtn.addEventListener('click', () => {
  console.log('works');
  projectPopUpContainer.classList.add('hidden');
  toDoPopUpContainer.classList.remove('hidden');
});

// toggle to new todo in pop up window
addNewProjectBtn.addEventListener('click', () => {
  console.log('works');
  projectPopUpContainer.classList.remove('hidden');
  toDoPopUpContainer.classList.add('hidden');
});
addNewtoDoBtn2.addEventListener('click', () => {
  console.log('works');
  projectPopUpContainer.classList.add('hidden');
  toDoPopUpContainer.classList.remove('hidden');
});

// toggle to new todo in pop up window
addNewProjectBtn2.addEventListener('click', () => {
  console.log('works');
  projectPopUpContainer.classList.remove('hidden');
  toDoPopUpContainer.classList.add('hidden');
});
