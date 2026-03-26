const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const taskList = document.getElementById("task-list");
const box = document.getElementById("box")


let tasks = [
    {
        nameTask: "",
        statusTask: false
    }
];

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

function showTasks() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.innerText = tasks[i].nameTask;

        const btnRemove = document.createElement("button");
        btnRemove.innerText = "🗑️";
        btnRemove.className = "btn-remove"

        const btnStatusBox = document.createElement("button");
        btnStatusBox.innerText = "☐";
        btnStatusBox.className = "btn-status";

        btnStatusBox.addEventListener("click", markRead)

        btnRemove.addEventListener("click", removeTasks);

        li.appendChild(btnRemove);
        li.appendChild(btnStatusBox);
        taskList.appendChild(li)
    };
}

function removeTasks(positionTask) {
    //! SPLICE -> Remove 1 item apartir da posição das tarefas
    tasks.splice(positionTask, 1);
    saveTasks();
    showTasks();
}

function markRead(tasks) {
    if (tasks !== "") {
        tasks.saveTasks = !taskList.saveTasks
        console.log(tasks.nome, tasks.statusTask)
    }
}

function addTasks() {
    const taskValue = inputTask.value;
    if (taskValue === "") {
        return alert("Text is needed to add the task!!!");
    }

    const taskIndex = tasks.includes(taskValue);
    if (taskIndex == true) {
        return alert("Create a inesistent task!!!");
    }

    tasks.push(tasks.nameTask = taskValue, tasks.statusTask = false)
    inputTask.value = "";

    saveTasks();
    showTasks();

    console.log("teste")
}

function chargeSavedTasks() {
    //! Armazena na variavel as tarefas salvas no local storage
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        //! transforma o texto em array / json novamente
        tasks = JSON.parse(savedTasks);
        showTasks();
    }
}

const btnClearAll = document.createElement("button");
btnClearAll.innerText = "Clear all";

if (!tasks.length) {
    box.appendChild(btnClearAll)
}

btnClearAll.addEventListener("click", () => {
    tasks = [];
    saveTasks();
    showTasks();
});

btnAdd.addEventListener("click", addTasks);
chargeSavedTasks();
