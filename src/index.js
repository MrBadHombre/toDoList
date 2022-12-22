import './style.css';
import { createAllElements } from './createEntry';
const todayItem = document.querySelector('.todayItem');
const btn = document.querySelector('#addTask');
const header = document.querySelector('.header');
const toDo = document.querySelector('#title');
const description = document.querySelector('#description');
const divdiv = document.getElementById('divdiv');
let entry;
let priority;
let arraaaay = [];

btn.addEventListener('click', () => {
  entry = entry;
  entry = createAllElements(toDo.value, description.value);
  arraaaay.push(entry);
  console.table(arraaaay);
  entry.createDivElement(entry);
  todayItem.innerHTML = `${toDo.value}`;
});
