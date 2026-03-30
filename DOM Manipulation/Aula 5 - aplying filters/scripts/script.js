const produtos = [
    {
        id: 1,
        nome: "Teclado gamer",
        categoria: "Perifiericos",
        preco: 129.90
    },
    {
        id: 2,
        nome: "Mouse sem fio",
        categoria: "Perifiericos",
        preco: 79.90
    },
    {
        id: 3,
        nome: "Monitor",
        categoria: "Perifericos",
        preco: 757.90
    },
    {
        id: 4,
        nome: "Headset",
        categoria: "Perifericos",
        preco: 149.90
    },
    {
        id: 5,
        nome: "Notebook",
        categoria: "Computadores",
        preco: 3299.90
    },
    {
        id: 6,
        nome: "Webcam hd",
        categoria: "Acessorios",
        preco: 299.90
    }
]

const camposBusca = document.getElementById("campo-busca");
const filtroCheck = document.getElementById("ordenacao");
const listaProdutos = document.getElementById("lista-produtos");

function mostrarProdutos() {
    let textoBusca = camposBusca.value.toLowerCase();
    let produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(textoBusca))

    if (filtroCheck.value == "nome-az") {
        produtosFiltrados.sort((a, b) =>
            a.nome.localeCompare(b.nome)
        );
    }

    if (filtroCheck.value == "nome-za") {
        produtosFiltrados.sort((a, b) =>
            b.nome.localeCompare(a.nome)
        );
    }

    if (filtroCheck.value == "preco-menor") {
        produtosFiltrados.sort((a, b) =>
            a.preco - b.preco
        );
    }


    if (filtroCheck.value == "preco-maior") {
        produtosFiltrados.sort((a, b) =>
            b.preco - a.preco
        );
    }

    listaProdutos.innerHTML = "";

    if (produtosFiltrados.length === 0) {
        listaProdutos.innerHTML = "<p class='mensagem'> Nenhum produto encontrado </p>";
        return;
    }

    for (let i = 0; i <= produtosFiltrados.length; i++) {
        let produto = produtosFiltrados[i];

        listaProdutos.innerHTML +=
            "<div class='card'>" +
            "<h2>" + produto.nome + "</h2>" +
            "<p clss='descricao'> Categoria: " + produto.categoria + "</p>" +
            "<p class='preco'> R$: " + produto.preco.toFixed(2).replace('.', ',') + "</p>" +
            "</div>";
    }
}

camposBusca.addEventListener("change", () => {
    mostrarProdutos();
});

filtroCheck.addEventListener("click", () => {
    mostrarProdutos();
})

mostrarProdutos();