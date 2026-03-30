const { createElement } = require("react");

const input = document.getElementById("inputPedido");
const btnAdd = document.getElementById("btnAdicionar");
const listOrders = document.getElementById("listaPedidos");
const btnConclud = document.getElementById("btnAtender");
const actOrder = document.getElementById("pedidoAtual");

let orders = [];

function showOrder() {
    const li = document.createElement("li");
    li.innerText = input.value;
}

function addOrder() {

}

btnConclud.addEventListener("click", createOrder)

function createOrder() {
    const inputValue = input.value;
    const actualDate = new Date()
    if (inputValue === "") {
        return alert("Read a value!!!");
    }

    orders.push({
        nameOrder: inputValue,
        statusTask: false,
        createDate: actualDate,
        quantity: 1
    })
    addOrder();
    showOrder();
}
