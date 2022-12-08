const getTodos = JSON.parse(localStorage.getItem('todos'));
let getTaskList = [];
if (getTodos !== null) {
  getTaskList = getTodos;
}

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

export default showToDoList;