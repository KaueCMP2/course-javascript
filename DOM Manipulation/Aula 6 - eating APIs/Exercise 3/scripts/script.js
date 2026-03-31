
// base de dados
const cepsMockados = {
    "01001000": {
        nome: "Pao doce",
        preco: 0.80,
        categoria: "Paes",
    },
    "20040002": {
        nome: "Pao frances",
        preco: 0.70,
        categoria: "Paes",
    },
    "30140071": {
        nome: "Hot-dog",
        preco: 12.0,
        categoria: "Lanches",
    },
    "80010000": {
        nome: "Hamburguer",
        preco: 21.0,
        categoria: "Lanches",
    }
};

const campoCodigo = document.getElementById("codigo");
const botaoBuscar = document.getElementById("botao-buscar");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoCategoria = document.getElementById("categoria");


function preencherCampos(dados) {
    campoNome.value = dados.nome;
    campoPreco.value = dados.preco;
    campoCategoria.value = dados.categoria;
}

function limparCampos() {
    campoNome.value = "";
    campoPreco.value = "";
    campoCategoria.value = "";
}

function buscarCod() {
    const cod = campoCodigo.value.replace(/\D/g, "").trim();
    while(cod.length <= 7)
    {
        return;
    }

    if (cod.length !== 8) {
        alert("Codigo invalido!");
        limparCampos()
        return;
    }

    const dados = cepsMockados[cod];
    if (!dados) {
        alert("Cep não encontrado na base de dados!");
        limparCampos()
        return;
    }

    preencherCampos(dados);
}

botaoBuscar.addEventListener("click", buscarCod);
campoCodigo.addEventListener("input", buscarCod);