/*
    COMENTÁRIO EM BLOCOS
*/

// COMENTÁRIO EM LINHA

// VARIÁVEIS - O que são?

// Palavras chave para criar variáveis:
/*
    const
    let
    var
*/

// CONST -> Quando um valor não pode mudar (+ seguro)
const idade = 30; // caixinha idade recebe o valor 30.

// LET -> Quando um valor pode mudar (+ utilizado)
let nome = "Késsia";

// VAR -> Forma antiga de declarar variáveis (evitar usar)
var cidade = "São Caetano do Sul";

// imprindo os valores
/*
    console.log(idade); // imprimir o valor 30
    console.log(nome); // imprimir o valor "Késsia"
    console.log(cidade); // imprimir o valor "São Caetano do Sul"
*/

// ALTERANDO VALORES
/*
    console.log(nome); // antes de alterar o nome
    nome = "Lucas";
    console.log(nome); // depois de alterar o nome

    console.log(idade);
    idade = 25;
    console.log(idade);
*/

/*
let tamanho; // permite criar variavel vazia
const cor; // não permite criar variavel vazia
*/

// INTERPOLAÇÃO
/*
    console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade.`);
    console.log("Juntando nome " + nome + " com idade " + idade)
*/

/*
// TIPOS PRIMITIVOS

// 1. String (textos em geral)
let mensagem = "Olá mundo!";
console.log(typeof mensagem); // imprime o tipo do dado

// 2. Number (numero -> armazena números inteiros ou decimais)
let quantidade = 5;         // número inteiro
let temperatura = 36.5;     // número decimal (casas depois da vírgula)
console.log(typeof quantidade)

// 3. Boolean -> true/false (verdadeiro ou falso) 
let estaChovendo = true;
let temSol = false;
console.log(typeof temSol);

// 4. Undefined -> variável ainda não recebeu valor
let pedido;
console.log(typeof pedido);

// 5. Null -> usado para representar ausência intencional de valor
let endereco = null;
console.log(typeof endereco);
*/


/*
// CONVERSÃO DE TIPOS

// Conversão Implícita (automática)
console.log("5" + 3);   // concatenação -> 53 (tipo string)
console.log("5" - 3);   // 2 (tipo number)

// Conversão Explícita (manual)
// acontece usando funções:

// converter para número:
let numero = "42"; // string(texto)
console.log(typeof numero);

let numeroConvertido = Number(numero); // converteu para Number
console.log(typeof numeroConvertido);

// converter para string:
let num = 100;
console.log(typeof num);

let texto = String(num); // convertendo o número para texto
console.log(typeof texto);

// converter booleano para numero
let trueConvertido = Number(true); // 1
console.log(trueConvertido);

let falseConvertido = Number(false); // 0
console.log(falseConvertido);

*/


// OPERADORES RELACIONAIS
// servem para comparar valores

/*
    >       maior que
    <       menor que
    >=      maior ou igual
    <=      menor ou igual
    ==      igualdade (ignora o tipo)
    ===     igualdade (verifica o tipo)
    !=      diferente (ignora o tipo)
    !==     diferente (verifica o tipo)
*/

/*
// exemplos:
console.log(10 > 5);    // true     (verdadeiro)
console.log(10 < 5);    // false    (falso)

// diferença entre == e ===
console.log(5 == "5");      // ignora o tipo (true)
console.log(5 === "5");     // verifica o tipo (false)
*/

// OPERADORES MATEMÁTICOS
// são usados para fazer cálculos - como soma, multiplicação, etc.

/*
    +   Soma
    -   Subtração
    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    **  Potência
*/

// exemplos:
let a = 10;
let b = 5;

console.log(a + b);     // soma             -> 15
console.log(a - b);     // subtração        -> 5
console.log(a * b);     // multiplicação    -> 50
console.log(a / b);     // divisão          -> 2

// exemplo:
// OPERADOR DE RESTO
console.log(10 % 3); // retornar o resto -> 1

// OPERADOR DE POTÊNCIA
console.log(2 ** 3); // 2 elevado a 3 -> 2 * 2 * 2