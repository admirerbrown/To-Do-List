/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-globals */

import './styles/style.css';
import editTask from './modules/update.js';
import deleteManager from './modules/delete_todo.js';
import addTaskManager from './modules/add_todo.js';
import showToDoList from './modules/ui_processor.js';
import statusOperator from './modules/status_manager.js';
import taskCleaner from './modules/clear_completed.js';

// call addTaskManager here ...
addTaskManager();

// process to do list to UI
showToDoList();

// call delete function on this line..
deleteManager();

// call edit function here..
editTask();

// check if todo is completed
statusOperator();

// clean todo list of all completed tasks..
taskCleaner();