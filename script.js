const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('Add-btn');
const todoList = document.getElementById('todo-list');

const addedTasksTextarea = document.getElementById('added-tasks');
const editedTasksTextarea = document.getElementById('edited-tasks');
const deletedTasksTextarea = document.getElementById('deleted-tasks');

let editIndex = null;

let addedTasks = JSON.parse(localStorage.getItem('addedTasks') || '[]');
let editedTasks = JSON.parse(localStorage.getItem('editedTasks') || '[]');
let deletedTasks = JSON.parse(localStorage.getItem('deletedTasks') || '[]');

function updateTaskTextareas() {
  addedTasksTextarea.value = addedTasks.join('\n');
  editedTasksTextarea.value = editedTasks.join('\n');
  deletedTasksTextarea.value = deletedTasks.join('\n');
}

function renderTodos() {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todoList.innerHTML = '';
  todos.forEach((todo, idx) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    if (editIndex === idx) {
      // Edit mode
      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.value = todo;
      editInput.className = 'edit-input';
      li.appendChild(editInput);

      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';
      saveBtn.onclick = () => {
        const newValue = editInput.value.trim();
        if (newValue) {
          const oldValue = todos[idx];
          todos[idx] = newValue;
          localStorage.setItem('todos', JSON.stringify(todos));
          editIndex = null;
          // Track edited task
          editedTasks.push(`Edited: "${oldValue}" to "${newValue}"`);
          localStorage.setItem('editedTasks', JSON.stringify(editedTasks));
          updateTaskTextareas();
          renderTodos();
        }
      };
      li.appendChild(saveBtn);

      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.onclick = () => {
        editIndex = null;
        renderTodos();
      };
      li.appendChild(cancelBtn);

    } else {
      // Normal view
      const span = document.createElement('span');
      span.textContent = todo;
      li.appendChild(span);

      const actions = document.createElement('div');
      actions.className = 'todo-actions';

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.onclick = () => {
        editIndex = idx;
        renderTodos();
      };
      actions.appendChild(editBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => {
        const deletedTask = todos.splice(idx, 1)[0];
        localStorage.setItem('todos', JSON.stringify(todos));
        // Track deleted task
        deletedTasks.push(`Deleted: "${deletedTask}"`);
        localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
        updateTaskTextareas();
        renderTodos();
      };
      actions.appendChild(deleteBtn);

      li.appendChild(actions);
    }

    todoList.appendChild(li);
  });
}

addBtn.onclick = () => {
  const value = todoInput.value.trim();
  if (value) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    // Track added task
    addedTasks.push(`Added: "${value}"`);
    localStorage.setItem('addedTasks', JSON.stringify(addedTasks));
    updateTaskTextareas();
    renderTodos();
  }
};

todoInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') addBtn.click();
});

// Initial render
updateTaskTextareas();
renderTodos();
