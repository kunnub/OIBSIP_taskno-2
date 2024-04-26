function addTasks() {
    var input = document.getElementById("todoInput");
    var task = input.value;
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    var listItem = document.createElement("div");
    listItem.className = "todo-item";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            moveCompletedTask(listItem);
        } else {
            moveTodoTask(listItem);
        }
    });
    listItem.appendChild(checkbox);

    var span = document.createElement("span");
    span.innerText = task;
    listItem.appendChild(span);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteTask(listItem);
    });
    listItem.appendChild(deleteButton);

    var todoList = document.getElementById("todoList");
    todoList.appendChild(listItem);

    input.value = "";
}


function moveCompletedTask(taskItem) {
    var todoList = document.getElementById("todoList");
    var completedList = document.getElementById("completedList");
    todoList.removeChild(taskItem);
    completedList.appendChild(taskItem);
}

function moveTodoTask(taskItem) {
    var todoList = document.getElementById("todoList");
    var completedList = document.getElementById("completedList");
    completedList.removeChild(taskItem);
    todoList.appendChild(taskItem);
}

function deleteTask(taskItem) {
    taskItem.parentNode.removeChild(taskItem);
}