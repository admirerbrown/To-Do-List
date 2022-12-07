import './styles/style.css';

const todoList = [
  {
    discription: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    discription: 'complete To Do list project',
    completed: false,
    index: 1,
  },
  {
    discription: 'implement project code review suggestions',
    completed: false,
    index: 2,
  },
];

// process to do list to UI
const showToDoList = () => {
  const todoItem = document.querySelector('.show-todos');
  todoItem.innerHTML += todoList.map((todo) => `<div class="todo-item compact">
                <div class="todo-left-side">
                    <input type="checkbox" id="complete" name="isDone" value="" />
                    <p class="todo-title">${todo.discription}</p>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>`).join('');
};

showToDoList();
