//import TodoMaster from './todoClass.js';
import './style.css';

/*
const form = document.getElementById('todoform');
const taskList = document.getElementById('task-list');
const winFooter = document.getElementById('win-footer');

const loadButtons = () => {
  const btnsInfo = document.querySelectorAll('.article-info');
  const btnsDelete = document.querySelectorAll('.article-btn');
  const todoAxn = new TodoMaster();

  btnsInfo.forEach((btn) => {
    btn.addEventListener('click', () => {
      todoAxn.complete(btn.getAttribute('id').slice(3));
      loadButtons();
    });
  });

  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(btn.dataset.id);
      todoAxn.del(btn.getAttribute('id').slice(3));
      loadButtons();
    });
  });
};

class TodoClass extends TodoMaster {
  constructor() {
    super();
    return undefined;
  }

  addTask(task) {
    this.add(task);
    document.getElementById('taskText').blur();
    loadButtons();
  }

  clearAll() {
    this.clear();
    loadButtons();
  }

  #listTask() {
    this.show();
    loadButtons();
  }

  makeOrder() {
    this.reorder();
    loadButtons();
  }
}

const todo = new TodoClass();

winFooter.addEventListener('click', () => todo.clearAll());

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = document.getElementById('taskText');

  todo.addTask(task.value);
  task.value = '';
});

Sortable.create(taskList, {
  onEnd() { todo.makeOrder(); },
});

todo.listTask();
*/