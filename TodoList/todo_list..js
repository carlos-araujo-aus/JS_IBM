const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

const tasks = [];

function addTask(taskInput) {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({
            id: Date.now(),
            text: taskText,
        })
        taskInput.value = "";
        displayTasks();
    } else {
        alert("Please enter a task");
    }    
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement ("li");
        li.innerHTML = `<input type="checkbox" id+"task-${task.id}" ${task.completed ? "checked" : ""}>`
        li.querySelector("input").addEventListener("change", () => toggleTask(task.id));
        taskList.appendChild(li);
    });
}

function toggleTask(taskId) {
    tasks[taskId].completed = !tasks[taskId].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter((task) => !task.completed);
    displayTasks();
}

addTaskButton.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
displayTasks();