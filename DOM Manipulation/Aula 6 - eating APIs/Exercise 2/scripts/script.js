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
    campoCidade.value = "";
    campoEstado.value = "";
}

//! Consumo API 
function buscarCep() {
    const cep = campoCep.value.replace(/\D/g, "").trim();
    if (cep.length !== 8) {
        alert("Cep invalido!");
        limparCampos()
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (dados.erro) {
                alert("CEP não encontrado!")
                limparCampos();
                return;
            }

            preencherCampos(dados);

        }).catch(() =>
            alert("Erro ao buscar o CEP!"));
    console.log(url)
}

botaoBuscar.addEventListener("click", buscarCep);