const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");



// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
    const taskInput = document.getElementById("task").value;

    
    
    
    
});
if (taskText !== "" && taskText.length > 3 && taskText.charAt(0) === taskText.charAt(0).toUpperCase()) {
    // Your code for when all conditions are met
    console.log('Input is valid');
} else {
    // Display appropriate alert messages for failed conditions
    if (taskText === "") {
        alert('Please input task');
    } else if (taskText.length <= 3) {
        alert('Must be more than 3 characters');
    } else if (taskText.charAt(0) !== taskText.charAt(0).toUpperCase()) {
        alert('The first character must be in uppercase (Pascal case)');
    }
}
// Create a new task
function createTask(text) {


    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${text}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);

    // Delete task
    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    // Mark as completed
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
}
