/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-globals */

import TaskManager from './crud.js';

const deleteManager = () => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  let getTaskList = [];
  if (getTodos !== null) {
    getTaskList = getTodos;
  }

  const contentClick = document.querySelectorAll('.todo-item');
  const dragBtn = document.querySelectorAll('.drag-btn');
  const delBtn = document.querySelectorAll('.del-btn');
  const newNote = document.querySelector('.input-div');

  let itemIndex = [];
  for (let i = 0; i < contentClick.length; i += 1) {
    const item = contentClick[i];
    item.addEventListener('click', () => {
      itemIndex.push(i);
      item.style.backgroundColor = '#DAE2B6';
      dragBtn[i].style.display = 'none';
      delBtn[i].style.display = 'block';
      if (itemIndex.length === 2) {
        contentClick[itemIndex[0]].style.backgroundColor = '';
        dragBtn[itemIndex[0]].style.display = 'block';
        delBtn[itemIndex[0]].style.display = 'none';
        itemIndex = itemIndex.slice(1);
      }
      if (newNote.addEventListener('click', () => {
        location.reload();
        contentClick[itemIndex[0]].style.backgroundColor = '';
        dragBtn[itemIndex[0]].style.display = 'block';
        delBtn[itemIndex[0]].style.display = 'none';
      })) {
        return '';
      }
      return null;
    });
  }

  // get task to delete details
  delBtn.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const takeOut = new TaskManager(getTaskList[index].taskName, index);
      takeOut.removeTask(takeOut.taskName);
    });
  });
};

export default deleteManager;
