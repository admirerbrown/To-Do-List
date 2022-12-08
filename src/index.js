/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-globals */

import './styles/style.css';
import editTask from './modules/update.js';
import deleteManager from './modules/delete_todo.js';
import addTaskManager from './modules/add_todo.js';
import showToDoList from './modules/ui_processor.js';

// call addTaskManager here ...
addTaskManager();

// process to do list to UI
showToDoList();

// call delete function on this line..
deleteManager();

// call edit function here..
editTask();
