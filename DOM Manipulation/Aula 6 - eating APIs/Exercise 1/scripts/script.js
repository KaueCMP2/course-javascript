
// base de dados
const cepsMockados = {
    "01001000": {
        logradouro: "Praça da Sé",
        bairro: "Sé",
        localidade: "São Paulo",
        uf: "SP"
    },
    "20040002": {
        logradouro: "Rua da Assembleia",
        bairro: "Centro",
        localidade: "Rio de Janeiro",
        uf: "RJ"
    },
    "30140071": {
        logradouro: "Avenida Brasil",
        bairro: "Santa Efigênia",
        localidade: "Belo Horizonte",
        uf: "MG"
    },
    "80010000": {
        logradouro: "Praça Tiradentes",
        bairro: "Centro",
        localidade: "Curitiba",
        uf: "PR"
    }
};

const campoCep = document.getElementById("cep");
const botaoBuscar = document.getElementById("botao-buscar");
const campoRua = document.getElementById("rua");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");

function preencherCampos(dados) {
    campoRua.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    campoEstado.value = dados.uf;
}

function limparCampos() {
    campoRua.value = "";
    campoBairro.value = "";
    camposCidade.value = "";
    campoEstado.value = "";
}

function buscarCep() {
    const cep = campoCep.value.replace(/\D/g, "").trim();
    if (cep.length !== 8) {
        alert("Cep invalido!");
        limparCampos()
        return;
    }

    const dados = cepsMockados[cep];
    if (!dados) {
        alert("Cep não encontrado na base de dados!");
        limparCampos()
        return;
    }

    preencherCampos(dados);
}

botaoBuscar.addEventListener("click", buscarCep);