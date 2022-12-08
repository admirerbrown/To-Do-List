/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-globals */

class TaskManager {
  constructor(taskName, index) {
    this.taskName = taskName;
    this.completed = false;
    this.taskIndex = index;
  }

  addTask = (todoList) => {
    const tasks = todoList;
    localStorage.setItem('todos', JSON.stringify(tasks));
    location.reload();
  };

  // remove task from localStorage && create a todoList
  removeTask = (task) => {
    const oldTodoList = JSON.parse(localStorage.getItem('todos'));
    const currentTodoList = [];

    // get all list todo's not deleted
    oldTodoList.filter((item) => {
      if (item.taskName !== task) {
        currentTodoList.push(item);
        for (let i = 0; i < currentTodoList.length; i += 1) {
          item.taskIndex = i + 1;
        }
      }
      return item;
    });
    localStorage.setItem('todos', JSON.stringify(currentTodoList));
    location.reload();
  };

  // get oldTodoList from localStorage and update appropriate todo task.
  updateTask = (newText, todoIndex) => {
    const oldTodoList = JSON.parse(localStorage.getItem('todos'));
    oldTodoList[todoIndex].taskName = newText;
    localStorage.setItem('todos', JSON.stringify(oldTodoList));
    location.reload();
  };

  isDone = (obj, objIndex) => {
    const oldTaskStatus = JSON.parse(localStorage.getItem('todos'));
    oldTaskStatus[objIndex] = obj;
    localStorage.setItem('todos', JSON.stringify(oldTaskStatus));
    location.reload();
  }
}

export default TaskManager;