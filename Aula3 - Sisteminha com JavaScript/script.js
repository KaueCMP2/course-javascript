let nomeCliente = prompt("Digite seu nome:");
alert("Olá, " + nomeCliente + " seja bem vindo ao HuFood!!");

prompt("Opção 1 - Cardapio\nOpção 2 - Login\nOpção 3 - Cadastro\n\nDigite o numero da opção escolhida, para prosseguir:");
if (typeof opcao === "number") {
    alert("valor invalido!!");
}
if (opcao > 3 || opcao < 0) {
    alert("Opção não listada!!")
}

let Produtos = [
    {
        nome: "Hamburguer",
        valor: 12.00
    },
    {
        nome: "Hot-Dog",
        valor: 9.00
    },
    {
        nome: "Pizza",
        valor: 21.00
    },
    {
        nome: "Refri",
        valor: 3.00
    },
];

switch (opcao) {
    case 1:
        alert("Cardapio");
        
}