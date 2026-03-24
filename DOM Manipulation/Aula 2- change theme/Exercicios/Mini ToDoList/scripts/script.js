const botaoAdd = document.getElementById("botao-adicionar");
const lista = document.getElementById("lista");





botaoAdd.addEventListener("click", (e) => {
    e.preventDefault

    const novoItem = document.createElement("li");
    const texto = document.createElement("h2");
    const btnLixeira = document.createElement("a");

    btnLixeira.addEventListener("click", () => {
        novoItem.remove()
    })

    texto.innerText = "Novo item"
    btnLixeira.innerText = "🗑️";

    lista.appendChild(novoItem);
    novoItem.appendChild(texto);
    novoItem.appendChild(btnLixeira)
});

