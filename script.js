//Declarar const produtos como array de objetos
const produtos = [
    {nome:"Conjunto de pincéis", preco:60, emEstoque:true},
    {nome:"Batom", preco:40, emEstoque:true},
    {nome:"Sombra glitter", preco:30, emEstoque:false},
    {nome:"Base", preco:50, emEstoque:false}
];

//Exibir toda a estrutura de produtos com console.table
console.table(produtos);
console.log("\n"); //Adiciona uma linha em branco no console

//Calcular e exibir no console o valor total de itens em estoque, utilizando filter + reduce
let disponivel = produtos.filter(item => item.emEstoque == true);
let valorTotal = disponivel.reduce((subtotal, total) => subtotal.preco + total.preco);

console.log(`Valor total do estoque disponível: R$${valorTotal},00`);

//Criar um novo array de objetos com 10% de desconto em cada preço usando map e exibir com console.log
let desconto = produtos.map((produto) => produto.preco = produto.preco - (produto.preco * 0.10));

console.log(`Preços com 10% de desconto:\nR$${desconto[0]},00\nR$${desconto[1]},00\nR$${desconto[2]},00\nR$${desconto[3]},00\n`);
console.log("\n");

//Filtrar apenas produtos disponíveis com filter e exibir no console
let n = 0;
console.log("Os produtos disponíveis são:");
console.log(disponivel);
console.log("\n");

//Iterar sobre produtos usando:

//FOR...OF para imprimir o nome de cada produto
console.log("Iteração com FOR...OF:")
for (let produto of produtos)
    console.log(produto.nome);
console.log("\n");

//WHILE para percorrer o array e exibir cada nome
console.log("Iteração com WHILE:")
let i = 0;
while (i < produtos.length)
{
    console.log(produtos[i].nome)
    i++;
}
console.log("\n");

//DO...WHILE para fazer uma contagem regressiva de quantos itens faltam processar.
console.log("Iteração com DO...WHILE:");
let numProdutos = produtos.length;
do{
    console.log(`Faltam ${numProdutos} produtos para processar...`);
    numProdutos--;
} while (numProdutos > 0);