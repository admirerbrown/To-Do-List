/* eslint-disable no-restricted-globals */

// clear all todo list items ...
const taskCleaner = () => {
  const cleaner = document.querySelector('.clear-text');
  cleaner.addEventListener('click', () => {
    const itemsToDelete = JSON.parse(localStorage.getItem('todos'));
    const updatedTodoList = [];
    itemsToDelete.filter((item) => {
      if (item.completed !== true) {
        updatedTodoList.push(item);
        for (let i = 0; i < updatedTodoList.length; i += 1) {
          item.taskIndex = i + 1;
        }
      }
      return '';
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodoList));
    location.reload();
  });
};

export default taskCleaner;