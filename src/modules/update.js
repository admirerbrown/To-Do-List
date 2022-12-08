// getting real time updates
import TaskManager from './crud.js';

const editTask = () => {
  const taskUpdate = document.querySelectorAll('.todo-title');
  taskUpdate.forEach((item, index) => {
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const newUpdate = item.textContent;
        const updateMe = new TaskManager(newUpdate);
        updateMe.updateTask(updateMe.taskName, index);
      }
    });
  });
};

export default editTask;
