const input = document.querySelector('.todo__header input');
const addButton = document.querySelector('.addTodo');
const todoContainer = document.querySelector('.todo__content');
const template = document.querySelector('template');
const deleteButton = document.querySelector('.delete');
const todo = document.querySelector('.todo');

addButton.addEventListener('click', () => {
  const clone = template.content.cloneNode(true);
  const todo = clone.querySelector('.todo__body');
  todo.innerHTML = input.value;
  todoContainer.appendChild(clone);
});

deleteButton.addEventListener('click', () => {
  todoContainer.removeChild(todo);
});
