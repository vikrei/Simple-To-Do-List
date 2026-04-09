let todos = [
    {id: 1, text: "Learn JavaScript"},
    {id: 2, text: "Build a to-do app"},
    {id: 3, text: "Master DOM manipulation"}
];
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');

// Create todo item element
function createTodoElement(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    
    const span = document.createElement('span');
    span.classList.add('todo-text');
    span.textContent = todo.text;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));
    deleteButton.textContent = 'Delete';

    span.add

    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

// Render todos
function renderTodos() {
    todoList.innerHTML = ''; // Clear existing todos
    todos.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });
    if (todos.length === 0) {
        todoList.innerHTML = "<p>No tasks yet!</p>";
        return;
    }
}

// Add todo
function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;

    const newTodo = {
        id: Date.now(),
        text: text
    };

    todos.push(newTodo);
    todoInput.value = '';
    renderTodos();
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}
renderTodos();
addButton.addEventListener('click', addTodo);