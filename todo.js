let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.onclick = function() {
    let text = taskInput.value;

    if (text === "") {
        return;
    }

    let li = document.createElement("li");
    li.innerText = text;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
};