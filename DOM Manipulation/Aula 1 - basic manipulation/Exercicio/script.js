const botao = document.getElementById("btn");
const h1 = document.getElementById("h1");
let valor = 0;

botao.addEventListener("click", () => {
    valor++;
    console.log(valor);
    h1.innerText = valor;
});
