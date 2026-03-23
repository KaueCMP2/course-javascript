//?----------------------------------------------------------------------------------------------------//
//?                                           Funções                                                  //
//?----------------------------------------------------------------------------------------------------//

//* Ajudam a manter o codigo limpo e organizado
//* Evita repetição de codigo
//* Usamos principalmente quando trabalhamos com listar(array)



//?----------------------------------------------------------------------------------------------------//
//? MAP => Percorre uma lista e cria uma nova lista com base na condição
//?----------------------------------------------------------------------------------------------------//

// let numeros = [1, 2, 3];
// let numerosDobrados = numeros.map(function (num) {
//     return num * 2;
// });
// console.log(numerosDobrados);        //todo | Retorna [2, 3, 6]
//                                      //todo | Oo seja, retorna os "numeros" com conteudo dobrado ou * 2; 

// //* Mesma coisa, de um jeito mais compacto

// let numerosDobradosArrow = numeros.map(num => num * 2);
// console.log(numerosDobradosArrow);   //todo | Retorna [2, 3, 6]
//                                      //todo | Oo seja, retorna os "numeros" com conteudo dobrado ou * 2; 



//?----------------------------------------------------------------------------------------------------//
//? FILTER => Filtra com base em uma condicao
//?----------------------------------------------------------------------------------------------------//

// let numeros = [5, 10, 15, 20];
// let maioresQueDez = numeros.filter(num => num > 10)
// console.log(maioresQueDez)              //todo Retorna somente os maiores que 15 e 20



//?----------------------------------------------------------------------------------------------------//
//? REDUCE => Reduz os valores de um array / lista, para um unico valor
//?----------------------------------------------------------------------------------------------------//

// //todo | Acumulado se chama total
// //todo | Variavel auxiliar se chama num
// //todo | O zero é o acumulador inicial do acumulador(total)
// let numeros = [1, 2, 3, 4];
// let soma = numeros.reduce((total, num) => total * num, 0);  //todo | Basicamente o num que é o auxiliar pega
//                                                             //todo | em ordem no array, o proximo valor
//                                                             //todo | e aí ele soma com o soma com o numero atual do acumulador
//                                                             //todo | assim então guardando o resultado.   

// console.log(soma);



//?----------------------------------------------------------------------------------------------------//
//? FIND => Retorna o primeiro elemento que atenda a condição
//?----------------------------------------------------------------------------------------------------//

// let produtos = [
//     {
//         id: 1,
//         nome: "Teclado",
//         preco: 22
//     },
//     {
//         id: 2,
//         nome: "Mouse",
//         preco: 12
//     },
//     {
//         id: 3,
//         nome: "Cabo Usb",
//         preco: 7
//     },
// ]

// let item = produtos.find(produto => produto.id == 2)   //todo | Retorna somente o primeiro elemento que ele encontrar no array
//                                                        //todo | diferente do FILTER que retorna uma lista
// console.log(item) //* | O retorno é: {id: 2, nome: 'Mouse', preco: 12} 



//?----------------------------------------------------------------------------------------------------//
//? SPLIT => Pega uma string em partes, tranformando em uma lista
//?----------------------------------------------------------------------------------------------------//

// let frase = "JavaScript tem uma semantica lower bonitinha";
// let palavras = frase.split(" ")     //todo | Separa a string "frase", por espaço e retorna um array
// let letras = frase.split('')        //todo | Separa a string "frase", por caractere e retorna um array
// console.log(palavras)               //* retorno é: ['JavaScript', 'tem', 'uma', 'semantica', 'lower', 'bonitinha']
// console.log(letras)                 //* retorno é: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 't', 'e'...




//?----------------------------------------------------------------------------------------------------//
//? TRIM => Remove espaços em strings
//?----------------------------------------------------------------------------------------------------//

// let nomeEspaco = "            J a v a S c r i p t                 ";
// let nome = nomeEspaco.trim();           //todo | limpa os espaços que nao fora de chars, ou seja, 
//                                         //todo | somente os que estao antes ou depois de um caractere.
// console.log(nome);                      //* retorno é: J a v a S c r i p t



//?----------------------------------------------------------------------------------------------------//
//? INCLUDES => Verifica se existe um valor dentro de uma lista ou string
//?----------------------------------------------------------------------------------------------------//

// let frutas = ["Maça", "Banana"]

// let frutaIncludes = frutas.includes("Banana"); //todo | Retorna true ou false
// console.log(frutasIncludes);




//?----------------------------------------------------------------------------------------------------//
//? TOUPPERCASE => Tranforma a string em MAIUSCULA
//?----------------------------------------------------------------------------------------------------//

// let nome = "kaue";
// let nomeUpper = nome.toUpperCase();  //todo | torna a string "nome" maiuscula
// console.log(nomeUpper);



//?----------------------------------------------------------------------------------------------------//
//? TOLOWERCASE => Tranforma a string em MAIUSCULA
//?----------------------------------------------------------------------------------------------------//

// let nome = "KAUE";
// let nomeLower = nome.toLowerCase();   //todo | torna a string "nome" minuscula
// console.log(nomeLower);



//?----------------------------------------------------------------------------------------------------//
//? FOREACH => Percorre todos os elementos do array
//?----------------------------------------------------------------------------------------------------//

// let nomes = ["JaFoi", "JaVai", "JaEra"];
// nomes.forEach(nome => {                  //todo | percorre tudo podendo ter condição...
//     if (nome !== "JaEra") {
//         console.log("Seu nome é", nome) //* retorna: JaFoi, JaVai...
//     }
// }) 



//?----------------------------------------------------------------------------------------------------//
//? SOME => Verificar se pelo menos um numero atende a condição
//?----------------------------------------------------------------------------------------------------//

// let numeros = [1, 2, 3, 4, 5];
// let temPar = numeros.some(num => num % 2 === 0);    //todo | Verifica se pelo menos um numero é par
// console.log(temPar);                                //* retorna: true || false



//?----------------------------------------------------------------------------------------------------//
//? EVERY => Verifica se todas os elementos atendem a uma condição
//?----------------------------------------------------------------------------------------------------//

// let numeros = [1, 2, 3, 4, 5];
// let todosPares = numeros.every(num => num % 2 === 0);   //todo | Verifica se pelo menos um numero é par
// console.log(todosPares);                                //* retorna: true || false



//?----------------------------------------------------------------------------------------------------//
//? SORT => Ordena os elementos do array em ordem aleatoria
//?----------------------------------------------------------------------------------------------------//

// let numeros = [5, 1, 2, 3, 4]
// numeros.sort((a, b) => a - b)   //todo | ordena por ordem numerica os numeros, com o -
// console.log(numeros)            //* retorna: [1, 2, 3, 4, 5]

// let letras = ["z","c","a","b"]
// letras.sort()                   //todo | orderna por ordem alfabetica, sem o -
// console.log(letras)             //* retorna: ["a", "b", "c", "z"]



//?----------------------------------------------------------------------------------------------------//
//? REVERSE => Inverte a ordem de um array / lista
//?----------------------------------------------------------------------------------------------------//

// let numeros = [1, 2, 3];
// console.log(numeros.reverse()); //* retorna: [3, 2, 1]



//?----------------------------------------------------------------------------------------------------//
//? JOIN => Junta os elementos de um array / uma lista, em uma string
//?----------------------------------------------------------------------------------------------------//

// let palavras = ["Cachorro", "Gato", "Peixe"];
// let frase = palavras.join(" ");     //todo | junta os elementos do array, colocando um espaço entre eles
// console.log(frase)                  //* retorna: Cachorro Gato Peixe



//?----------------------------------------------------------------------------------------------------//
//? PUSH =>  Adiciona elementos no final do array
//?----------------------------------------------------------------------------------------------------//

// let lista = ["A", "B"];               
// lista.push("C");                        //todo | adiciona a letra "C" a lista
// console.log(lista);                     //* retorna: ["A"],["B"],["C"]



//?----------------------------------------------------------------------------------------------------//
//? POP => Remove elementos no final do array
//?----------------------------------------------------------------------------------------------------//


// let lista = ["A", "B", "C"];               
// lista.push("C");                        //todo | remove a letra "C" a lista
// console.log(lista);                     //* retorna: ["A"],["B"]



//?----------------------------------------------------------------------------------------------------//
//? SHIFT => remove do ínicio do array
//?----------------------------------------------------------------------------------------------------//

// let lista = ["B", "C"];
// lista.unshift("A");                        //todo | Adiciona
// console.log(lista)                         //* retorna: ["A"],["B"],["C"]



//?----------------------------------------------------------------------------------------------------//
//? SHIFT => remove do ínicio do array
//?----------------------------------------------------------------------------------------------------//

// let lista = ["A","B", "C"];
// lista.shift("A");                        //todo | Remove
// console.log(lista)                       //* retorna: ["B"],["C"]



//?----------------------------------------------------------------------------------------------------//
//? SLICE => Cria uma cópia de uma parte da lista
//?----------------------------------------------------------------------------------------------------//

// let numeros = [1, 2, 3, 4];
// let parte = numeros.slice(1, 3);            //todo | pega o numero que esta na posicao 1 e o que vem
//                                             //todo | e o que vem antes da poisição 3
// console.log(parte)                          //* retorna: [2, 3]



//?----------------------------------------------------------------------------------------------------//
//? SPLICE => Splice remove ou adiciona elementos em qualquer posição
//?----------------------------------------------------------------------------------------------------//

//! Remover elementos 
// let numeros = [1, 2, 3, 4];
// numeros.splice(1, 1);   //todo | remove o elemento 2, o primero numero é onde começa o splice,
//                         //todo | e o segundo, representa o numero a ser remover
// console.log(numeros)

// //! Removendo elemento e adicionando
// let frutas = ["Banana", "Laranja", "Maça", "Manga"];
// frutas.splice(0, 1, "Acerola", "Kiwi");     //todo | Inicia no indice 0, remove 1 indice, adiciona no lugar dele,
//                                             //todo | adiciona a acerola e kiwi no indice 2
// console.log(frutas)

// //! Adicionando um elemento
// let frutasNovas = ["Banana", "Laranja", "Maça", "Manga"];
// frutasNovas.splice(0, 1, "Acerola", "Kiwi");     //todo | Inicia no indice 0, remove 1 indice, adiciona no lugar dele,
//                                             //todo | adiciona a acerola e kiwi no indice 2
// console.log(frutasNovas)



//?----------------------------------------------------------------------------------------------------//
//? REPLACE => Substitui 
//?----------------------------------------------------------------------------------------------------//

let texto = "Cachorro";
let novoTexo = texto.replace("Cachorro", "Singaro");
console.log(novoTexo);