const corpoPagina = document.body;
const botao = document.getElementById("botao-tema");
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");
const titulo2 = document.getElementsByClassName("novo-titulo");
const text = document.getElementById("texto");


let modoEscuroAtivo = false;
botao.addEventListener("click", () => {
    if (modoEscuroAtivo === false) {
        corpoPagina.style.backgroundColor = "#302f2fff";

        caixa.style.backgroundColor = "#646464ff";
        caixa.style.color = "#ffffff";

        botao.style.backgroundColor = "#646464ff";
        botao.style.color = "#ffffff";
        botao.style.borderColor = "#ffffff";

        titulo2[0].style.backgroundColor = "#646464ff";
        titulo2[0].style.color = "#ffffff";

        botao.innerText = "Ativar modo claro";

        modoEscuroAtivo = !modoEscuroAtivo;
    }

    else {
        corpoPagina.style.backgroundColor = "#ffffff";

        titulo2[0].style.backgroundColor = "#cce3e7";
        titulo2[0].style.color = "#000000ff";

        caixa.style.backgroundColor = "#cce3e7";
        caixa.style.color = "#000000";

        botao.style.backgroundColor = "#cce3e7";
        botao.style.color = "#000000";
        botao.style.borderColor = "#000000";

        botao.innerText = "Ativar modo escuro";

        modoEscuroAtivo = !modoEscuroAtivo;
    }
})
