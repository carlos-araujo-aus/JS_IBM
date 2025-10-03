const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllTasksBtn = document.getElementById('clearAllTasksBtn');

let tasks = [];

function addTask(taskInput) {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({
            id: Date.now(),
            text: taskText,
            completed: false,
        })
        taskInput.value = "";
        displayTasks();
    } else {
        alert("Please enter a task");
    }    
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement ("li");
        li.innerHTML = `<input type="checkbox" id="task-${task.id}" ${task.completed ? "checked" : ""}>
        <label for="task-${task.id}">${task.text}</label>
        <label for="task-${task.id}">${task.id}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(task.id));
        taskList.appendChild(li);
    });
}

function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId)
    if (task) {
        task.completed = !task.completed;
        displayTasks();
    }
}

function clearCompletedTasks() {
    tasks = tasks.filter((task) => !task.completed);
    displayTasks();
}

function clearAllTasks() {
    tasks = [];
    displayTasks();
}

addTaskButton.addEventListener("click", () => addTask(taskInput));
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);
