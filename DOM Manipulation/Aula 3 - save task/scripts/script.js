const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const taskList = document.getElementById("task-list");
const box = document.getElementById("box")

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

function markRead(task) {
    console.log(task);
    if (task.nameTask !== "") {
        task.statusTask = !task.statusTask
        saveTasks();
        showTasks();
    }
}

function showTasks() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        const liIcons = document.createElement("div");
        liIcons.classList = "div-li-icons";
        li.innerText = tasks[i].nameTask;

        const btnRemove = document.createElement("button");
        btnRemove.innerText = "🗑️";
        btnRemove.className = "btn-remove"

        btnRemove.addEventListener("click", removeTasks)

        const btnStatusBox = document.createElement("button");
        btnStatusBox.addEventListener("click", () => { markRead(tasks[i]) });

        if (tasks[i].statusTask == false) {
            btnStatusBox.innerText = "☐";
            btnStatusBox.className = "btn-status";
        }
        else if (tasks[i].statusTask == true) {
            btnStatusBox.innerText = "✅";
            btnStatusBox.className = "btn-status";
        }
        btnStatusBox.style.color = "white";
        btnStatusBox.style.backgroundColor = "transparent";
        btnStatusBox.style.border = "none";

        if (tasks.length > 0) {
            box.appendChild(btnClearAll)

            btnClearAll.addEventListener("click", () => {
                tasks = [];
                saveTasks();
                showTasks();
                btnClearAll.remove();
            });
        }

        liIcons.appendChild(btnRemove);
        liIcons.appendChild(btnStatusBox);
        li.appendChild(liIcons);
        taskList.appendChild(li)
    };
}

function removeTasks(positionTask) {
    //! SPLICE -> Remove 1 item apartir da posição das tarefas
    tasks.splice(positionTask, 1);
    saveTasks();
    showTasks();
}

function addTasks() {
    const taskValue = inputTask.value;
    if (taskValue === "") {
        return alert("Text is needed to add the task!!!");
    }

    const taskIndex = tasks.some(t => t.nameTask == taskValue);
    console.log(taskIndex)
    if (taskIndex == true) {
        return alert("Create a inesistent task!!!");
    }

    tasks.push(
        {
            nameTask: taskValue,
            statusTask: false
        });

    inputTask.value = "";

    saveTasks();
    showTasks();
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

btnAdd.addEventListener("click", addTasks);
chargeSavedTasks();
