const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const taskList = document.getElementById("task-list");

let tasks = [];

function saveTasks() {
    //?-------------------------------------------------
    //?                 LocalStorage
    //?-------------------------------------------------
    //?   Salva no armazenamento o conteudo recebido
    //?-------------------------------------------------
    //?            Json.StringFy(tarefas)
    //?-------------------------------------------------
    //?   pega a lista e converte para json e salva
    //?-------------------------------------------------

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function removeTasks() {

}

function showTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = task;
    })
}