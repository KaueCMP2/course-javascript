const usuarioCorreto = "admin@admin.com"
const senhaCorreta = "1234"

const botao = document.getElementById("btn");
const mail = document.getElementById("mail");
const pass = document.getElementById("pass");

const texto = document.createElement("p")

botao.addEventListener("click", () => { 
    if (!mail.value || !pass.value) {
        texto.innerText = "preencha todos os campos";
        return;
    }

    if (mail.value == usuarioCorreto) {
        if (pass.value == senhaCorreta) {
            alert("Login efetuado 👍")
        }
        else {
            texto.innerText = "Dados invalidos";
        }
    }
    else {
        texto.innerText = "Usuario não encontrado";
    }
});