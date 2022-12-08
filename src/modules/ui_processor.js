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
                    <input type="checkbox" class="isDone" id="" name="isDone" value=""/>
                    <input type="checkbox" class="" id="complete" name="isDone" value="" checked />
                    <p contenteditable="true" class="todo-title">${todo.taskName}</p>
                </div>
                <i class="fa-regular fa-trash-can del-btn"></i>
                <i class="fa-solid fa-ellipsis-vertical drag-btn"></i>
               
            </div>`,
    )
    .join('');

  // checkbox tick controller ...
  const checkbox = document.querySelectorAll('.isDone');
  const checked = document.querySelectorAll('#complete');
  const cancel = document.querySelectorAll('.todo-title');

  getTaskList.forEach((item, index) => {
    if (getTaskList[index].completed === true) {
      checked[index].style.display = 'block';
      checkbox[index].style.display = 'none';
      cancel[index].style.color = '#AEBDCA';
      cancel[index].style.textDecoration = 'line-through #2B3A55';
    } else {
      checked[index].style.display = 'none';
      checkbox[index].style.display = 'block';
    }
  });
};

export default showToDoList;