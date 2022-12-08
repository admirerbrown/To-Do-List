/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-globals */
import './styles/style.css';

class TaskManager {
  constructor(taskName) {
    this.taskName = taskName;
    this.completed = false;
    this.itemIndex = 0;
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
}

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
    const newTask = new TaskManager(task.value);
    getTaskList.push(newTask);

    // send todoList to localStorage
    newTask.addTask(getTaskList);
    task.value = '';
  }
});

// process to do list to UI
const showToDoList = () => {
  const todoItem = document.querySelector('.show-todos');
  todoItem.innerHTML += getTaskList
    .map(
      (todo) => `<div class="todo-item compact">
                <div class="todo-left-side">
                    <input type="checkbox" id="complete" name="isDone" value="" />
                    <p contenteditable="true" class="todo-title">${todo.taskName}</p>
                </div>
                <i class="fa-regular fa-trash-can del-btn"></i>
                <i class="fa-solid fa-ellipsis-vertical drag-btn"></i>
               
            </div>`,
    )
    .join('');
};

showToDoList();

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
      // console.log('yeah won');
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

delBtn.forEach((item, index) => {
  item.addEventListener('click', () => {
    const takeOut = new TaskManager(getTaskList[index].taskName);
    takeOut.removeTask(takeOut.taskName);
  });
});

// getting real time updates
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
