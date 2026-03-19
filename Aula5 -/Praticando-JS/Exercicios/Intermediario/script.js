//* Exercicio 1: Exibir os números pares de 1 a 50.
// for(let i = 1; i < 51; i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i)
//     }
// }

//* Exercicio 2: Jogo de adivinhação.
// let numeroAleatorio = Math.floor(Math.random() * 100);
// console.log(numeroAleatorio);

// let numeroChute = prompt("chute um numero");
// while (numeroChute != numeroAleatorio && numeroChute != null) {
//     console.log("errouuuuuuuu kakakkakakkak");
//     numeroChute = prompt("chute outro numero numero");
// }

// if (numeroChute == numeroAleatorio) {
//     console.log("finalmenteeee!!! Parabens, você acertou");
//     alert("finalmenteeee!!! Parabens, você acertou");
// }

//* Exercicio 3: Contagem regressiva.
// let numeroUsuario = prompt("Digite um numero para iniciar a contagem regressiva: ")
// for (let i = numeroUsuario; i >= 0; i--) {
//     console.log(i)
// } 

//* Exercicio 4: Validação de senha.
// let senha = "1234";
// let senhaUsuario = prompt("Chute uma senha numerica");
// while (senhaUsuario != null && senhaUsuario != senha) {
//     console.log("errouuuuuuuu kakakkakakkak");
//     let senhaUsuario = prompt("Chute outra senha numerica");
// }

// if (senhaUsuario == senha) {
//     console.log("finalmenteeee!!! Parabens, você acertou");
//     alert("finalmenteeee!!! Parabens, você acertou");
// }

//TODO Exercicio 5: Soma até parar.
// let numeroUsuario = prompt("Digite um numero");
// let segundoNumeroUsuario = prompt("Outro numero");
// let numeroAnterior = numeroUsuario;
// let resultado;

// while (numeroUsuario != 0 && numeroUsuario != null) {
//     resultado = numeroUsuario + segundoNumeroUsuario
//     console.log(resultado)
//     segundoNumeroUsuario = resultado;
//     resultado = 0;
//     let numeroUsuario = prompt("Digite um numero");
// }

//TODO Exercicio 6: Média de valores.
// let contagem = 0;
// while (contagem <= 3) {
//     contagem++;
//     if (contagem == 1) {
//         let numero1 = prompt("Digite o primeiro numero:")
//     }
//     if (contagem == 2) {
//         let numero2 = prompt("Digite o segundo numero:")
//     }
//     if (contagem == 3) {
//         let numero1 = prompt("Digite o terceiro numero:")
//         let media = numero1 + numero2 + numero3 / contagem;
//         console.log(media);
//     }
// }