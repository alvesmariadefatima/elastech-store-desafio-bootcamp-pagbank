//Declarar const produtos como array de objetos
const produtos = [
    {nome:"Conjunto de pincéis", preco:60, emEstoque:true, img: "img/produto01.jpg"},
    {nome:"Batom", preco:40, emEstoque:true, img: "img/produto02.jpg"},
    {nome:"Sombra glitter", preco:30, emEstoque:false, img: "img/produto03.jpg"},
    {nome:"Base", preco:50, emEstoque:false, img: "img/produto04.jpg"}
];

const grid = document.getElementById("product-grid");
const valorTotalSpan = document.getElementById("valor-total-estoque");
const logLoops = document.getElementById("log-loops");

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currecy", currency: "BRL "});
}

function renderizarProdutos(lista) {
    grid.innerHTML = "";

    lista.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imagem = document.createElement("img");
        imagem.src = "produto.nome";

        const titulo = document.createElement("p");
        preco.classList.add("price");
        preco.textContent = formatarPreco(produto.preco);

        const status = document.createElement("span");
        status.textContent = produto.emEstoque ? "Disponível" : "Esgotado";
        status.classList.add(produto.emEstoque ? "status" : "out-of-stock");

        card.appendChild(imagem);
        card.appendChild(titulo);
        card.appendChild(preco);
        card.appendChild(status);

        grid.appendChild(card);
    });
}

function calcularValorEstoque() {
    const total = produtos
        .filter(p => p.emEstoque)
        .reduce((acc, p) => acc + p.preco, 0);
    
    valorTotalSpan.textContent = formatarPreco(total);
}

function demonstrarLoops() {
    let resultado =  "";

    resultado += "<strong>FOR...OF:</strong><br>";
    for (let p of produtos) {
        resultado += p.nome + "<br>";
    }

    resultado += "<br><strong>WHILE: </strong><br>";
    let i = 0;
    while (i < produtos.length) {
        resultado += produtos[i].nome + "<br>";
        i++;
    }

    resultado += "<br><strong>DO...WHILE</strong><br>"
    let restante = produtos.length;
    do {
        resultado += `Faltam ${restante} produtos para processar...<br>`;
        restante--;
    } while (restante > 0);
        logLoops.innerHTML = resultado;
}

document.getElementById("btn-filtrar").addEventListener("click", () => {
    const disponiveis = produtos.filter(p => p.emEstoque);
    renderizarProdutos(disponiveis);
});

document.getElementById("btn-mostrar-todos").addEventListener("click", () => {
    renderizarProdutos(produtos);
});

document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos(produtos);
    calcularValorEstoque();
    demonstrarLoops();
});