const like = document.getElementById("like");
const contagem = document.getElementById("contagem");
const tagEstado = document.getElementById("estado");
let contador = 0;
let estado = false;

like.addEventListener("click", () => {
    if (estado === false) {
        like.innerText = "👍 descurtir"
        estado = true
    }
    else {
        like.innerText = "👍 curtir"
        estado = false;
    }
})