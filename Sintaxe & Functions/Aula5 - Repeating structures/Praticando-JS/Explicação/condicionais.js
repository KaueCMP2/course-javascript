// ESTRUTURA CONDICIONAL

// IF           -> SE (se chover.....)
// ELSE         -> SENÃO (senão......)
// ELSE IF      -> SENÃO SE
// SWITCH       -> SWITCH (como se fosse um menu de opções)

/*
let nome = prompt("Digite seu nome: ");
console.log(nome);
*/

// Exemplos:
// 1. Sistema de verificação de temperatura
/*
let temperatura = Number(prompt("Digite a temperatura atual:"));

if(temperatura < 20) {
    console.log("Está frio!");
} else {
    console.log("Está calor!");
}
    */

// 2. Verificar o nível da bateria
/*
let bateria = Number(prompt("Digite o nível da bateria (%): "));

if(bateria <= 30) {
    alert("Bateria fraca!!");
} else {
    alert("Bateria carregada!");
}
*/

// 3. Sistema de acesso
/*
let tipoUsuario = prompt("Digite o tipo do usuário (admin, cliente):");

if (tipoUsuario == "admin") 
{
    console.log("Acesso total ao sistema.");
} 
else if(tipoUsuario == "cliente") 
{
    console.log("Acesso limitado.");
}
else {
    console.log("Tipo inválido!");
}
    */

// 4. Classificar qualidade de conexão de internet
/*
let velocidade = Number(prompt("Digite a velocidade da internet:"));

if(velocidade >= 100) {
    console.log("Internet rápida.");
} 
else if(velocidade >=50) {
    console.log("Internet é média.");
} 
else {
    console.log("Internet lenta.");
}
*/

// OPERADORES LÓGICOS
/*
    AND ->  &&  -> OPERADOR E
    OR  ->  ||  -> OPERADOR OU
    NOT ->  !   -> NÃO (negação)
*/

// AND - E -> retorna verdadeiro se todas as condições forem verdadeiras.
/*
let operadorAnd = (5 > 3) && (2 < 4)
// 5 é maior que 3?  true
// 2 é menor que 4?  true 

console.log(operadorAnd); // true
*/

/*
// OR - OU -> retorna verdadeiro se pelo menos uma das opções forem verdadeiras.
let operadorOu = (5 < 3) || (2 < 4)
// 5 é menor que 3?  false
// 2 é menor que 4?  true 

console.log(operadorOu); // verdadeiro
*/

/*
// NOT - NÃO
let operadorNao = !(5 > 3) // false
// (5 > 3) -> true
// !(5 > 3) -> false

console.log(operadorNao); // false
*/

/*
// Usando o sinal de exclamação para negar e validar diferença
let diferente = !(5 != 3)
// (5 != 3) -> 5 é diferente de 3? - true
// !(5 != 3) -> negando a expressão - false
console.log(diferente);
*/

// 5. Analisar volume de itens
/*
let quantidade = 10;

if(quantidade === 0) {
    console.log("Nenhum item selecionado");
}
else if (quantidade < 5) {
    console.log("Poucos itens");
}
else if(quantidade >= 5 && quantidade < 10) {
    console.log("Quantidade media de itens");
}
else {
    console.log("Muitos itens");
}
    */

// CONDICIONAL ANINHADA
// 6. uma condicional dentro de outra
/*
const nota = 1;

if(nota >= 7) {
    if(nota === 10) {
        console.log("Aprovado com premiação.");
    }
    else {
        console.log("Aprovado!");
    }
}
else {
    console.log("Reprovado!");
}
*/

// 7. Adaptação de tela de dispositivo
/*
let dispositivo = prompt("Você está usando: celular, tablet ou computador?");

if(dispositivo == "celular" || dispositivo == "tablet") {
    console.log("Modo mobile foi ativado.");
}
else if (dispositivo == "computador") {
    console.log("Modo desktop ativado!");
}
else {
    console.log("Dispositivo desconhecido.");
}
    */

// 8. SWITCH / CASE
// mudar tema do sistema

let tema = prompt("Digite um tema: claro, escuro, azul");

switch(tema) {
    case "claro":
        console.log("Tema claro ativado.");
        break;
    case "escuro":
        console.log("Tema escuro ativado.");
        break;
    case "azul":
        console.log("Tema azul ativado.");
        break;
    default:
        console.log("Tema inválido.");
    
}