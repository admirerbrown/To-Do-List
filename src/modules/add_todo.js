import TaskManager from './crud.js';

const addTaskManager = () => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  let getTaskList = [];
  if (getTodos !== null) {
    getTaskList = getTodos;
  }

  const task = document.querySelector('.todo-name');
  const addbtn = document.querySelector('.add-to-list');

  // create todo when task is added..
  addbtn.addEventListener('click', () => {
    if (task.value) {
      const noteIndex = getTaskList.length;

      const newTask = new TaskManager(task.value, noteIndex + 1);
      getTaskList.push(newTask);

      // send todoList to localStorage
      newTask.addTask(getTaskList);
      task.value = '';
    }
  });
};

export default addTaskManager;