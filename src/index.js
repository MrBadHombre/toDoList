import './style.css';
import { createAllElements } from './createEntry';

const btn = document.querySelector('#addTask');
const header = document.querySelector('.header');
const toDo = document.querySelector('#title');
const description = document.querySelector('#description');
let entry;
let priority;
let arraaaay = [];
// entryList(newEntry(title, description, priority));
// createToDoList(entryArray);

btn.addEventListener('click', () => {
  entry = createAllElements(toDo.value, description.value, priority);
  arraaaay.push(entry);
  console.table(arraaaay);
  for (let i = 0; i < arraaaay.length; i++) {
    entry.createDivElement(entry);
  }
});
