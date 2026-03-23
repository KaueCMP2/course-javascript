//?-------------------------------------------------------------------------------------------------
//?                                       MANIPULAÇÃO DE DOM
//?-------------------------------------------------------------------------------------------------
//? DOM => Document Object Model
//?-------------------------------------------------------------------------------------------------

//*-------------------------------------------------------------------------------------------------
//*                     Principais metodos de seleção de elemetos HTML no DOM
//*-------------------------------------------------------------------------------------------------
/*
    //* getElementById => Seleciona um elemento pelo Id.

    //* querySelector => serve para selecionar o 1ro elemento correpondente a um elemento CSS

    //* querySelectorAll => serve para selecionar TODOS os elementos que corresponder ao seletor
*/

//?-------------------------------------------------------------------------------------------------
//?                                         GetElementById
//?-------------------------------------------------------------------------------------------------

// const titulo = document.getElementById("titulo");
// console.log(titulo);

// console.log(titulo.innerText);



//?-------------------------------------------------------------------------------------------------
//?                                         querySelector
//?-------------------------------------------------------------------------------------------------

// const titulo = document.querySelector("#titulo") //* Para chamar id Passar o (#)
// const paragrafo = document.querySelector(".paragrafo") //* Para chamar classe Passar o (.)
// const subtitulo = document.querySelector("h2") //* para chamar tag html passar o nome dela

// console.log(titulo);
// console.log(paragrafo);
// console.log(subtitulo);



//?-------------------------------------------------------------------------------------------------
//?                                        querySelectorAll
//?-------------------------------------------------------------------------------------------------

// const elementos = document.querySelectorAll(".texto");
// console.log(elementos);

// //! percorrendo a lista
// elementos.forEach(elemento => {
//     console.log(elemento.innerText);
//     }
// )


//?-------------------------------------------------------------------------------------------------
//?                                        Alterando itens
//?-------------------------------------------------------------------------------------------------

// const itens = document.querySelectorAll(".texto");
// itens.forEach(item => {
//     item.innerText = "Alterado";
// });

// itens.forEach(item => {
//     item.innerHTML = "<h2>Item</h2>";
// });

// itens.forEach(item => {
//     item.style.color = "#0000ff"
// })




//?-------------------------------------------------------------------------------------------------
//?                                    Eventos com JavaScript
//?-------------------------------------------------------------------------------------------------
//!-------------------------------------------------------------------------------------------------
//! Evento de click
//!-------------------------------------------------------------------------------------------------
// const botao = document.getElementById("btn");
// botao.addEventListener("click", () => {
//     alert("Jokenpooo");
// })



//!-------------------------------------------------------------------------------------------------
//! Eventos de digitação (input / keyup / keydown)
//!-------------------------------------------------------------------------------------------------
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

//! Input
//!-------------------------------------------------------------------------------------------------
// campo.addEventListener("input", ()  => {
//     resultado.innerText = campo.value;
// })

//! keyup
//!-------------------------------------------------------------------------------------------------
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value;
// })

//! keydown
//!-------------------------------------------------------------------------------------------------
// campo.addEventListener("keydown", () => {
//     resultado.innerText = campo.value;
// })



//!-------------------------------------------------------------------------------------------------
//!                                      Eventos de Mouse
//!-------------------------------------------------------------------------------------------------
//! mouseover => mouse sobre
//!-------------------------------------------------------------------------------------------------
// const elemento = document.getElementById("troca-cor");
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#6e6e6eff" 
// })

//! mouseout => mouse sai
//!-------------------------------------------------------------------------------------------------
// elemento.addEventListener("mouseout", () => {
//     elemento.style.backgroundColor = "";
// })

//! mousemove 
//!-------------------------------------------------------------------------------------------------
// document.addEventListener("mousemove", (evento) => {
//     console.log("Posicao X: ", evento.clientX, " Posicao Y: ", evento.clientY)
// }) 



//!-------------------------------------------------------------------------------------------------
//!                                      Eventos de formulario
//!-------------------------------------------------------------------------------------------------
//! submit => enviar formulario
//!-------------------------------------------------------------------------------------------------
// //* Por padão o comportamento de um formulario é reccaregar a pagina
// var formulario = document.getElementById("form");
// formulario.addEventListener("submit", (evento) => {
//     evento.preventDefault(); //* impede o padrão do formulario, ou impede o recarregamento da pagina
//     const nome = document.getElementById("nome").value;
//     console.log(nome);
// })



//!-------------------------------------------------------------------------------------------------
//!                                      Novo elemento na pagina
//!-------------------------------------------------------------------------------------------------
// const novoElemento = document.createElement("p");   //* Cria o elemento
// novoElemento.innerText = "Elemento novo criado!";   //* Coloca um texto dentro do elemento

// const form = document.getElementById("form");
// form.appendChild(novoElemento);                     //* Coloca dentro do formulario o novo element, ultilizando o append child

// const botao = document.createElement("button");     //* Cria o botao
// botao.innerText = "Excluir element"                 //* Inplica o texto no botao    

// form.appendChild(botao)                             //* Adiciona o botao no form

// botao.addEventListener("click", (e) => {
//     e.preventDefault();
//     novoElemento.remove();
//     // form.removeChild(novoElemento)
// })



//!-------------------------------------------------------------------------------------------------
//!                       Adicionando elemetos em uma lista apartir de um input
//!-------------------------------------------------------------------------------------------------

const input = document.getElementById("input");
const botao = document.getElementById("add");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {
    const valor = input.value;
    const li = document.createElement("li");
    li.innerText = valor;

    lista.appendChild(li);
    input.value = "";
})