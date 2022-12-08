import TaskManager from './crud.js';

const statusOperator = () => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  let getTaskList = [];
  if (getTodos !== null) {
    getTaskList = getTodos;
  }

  // controlls activities for boxes not checked
  const checkbox = document.querySelectorAll('.isDone');
  checkbox.forEach((item, index) => {
    item.addEventListener('click', () => {
      getTaskList[index].completed = item.checked;
      const taskTitile = getTaskList[index].taskName;
      const taskId = getTaskList[index].taskIndex;
      const updateStatus = new TaskManager(taskTitile, taskId);
      updateStatus.isDone(getTaskList[index], index);
    });
  });

  // controlls activities for boxes checked.
  const checked = document.querySelectorAll('#complete');
  checked.forEach((item, index) => {
    item.addEventListener('click', () => {
      getTaskList[index].completed = item.checked;
      const taskTitile = getTaskList[index].taskName;
      const taskId = getTaskList[index].taskIndex;
      const updateStatus = new TaskManager(taskTitile, taskId);
      updateStatus.isDone(getTaskList[index], index);
    });
  });
};

export default statusOperator;