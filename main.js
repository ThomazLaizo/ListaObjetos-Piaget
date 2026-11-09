const produtos = [
    {
      produto: "Notebook",
      categoria: "Eletrônicos",
      quantidade: 10,
      preco: 3500.00
    },
    {
      produto: "Smartphone",
      categoria: "Eletrônicos",
      quantidade: 15,
      preco: 2200.00
    },
    {
      produto: "Cadeira",
      categoria: "Móveis",
      quantidade: 8,
      preco: 450.00
    },
    {
      produto: "Teclado",
      categoria: "Periféricos",
      quantidade: 20,
      preco: 120.00
    },
    {
      produto: "Monitor",
      categoria: "Eletrônicos",
      quantidade: 12,
      preco: 950.00
    }
  ];

const corpoDaTabela = document.getElementById("corpoDaTabela");

for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
    <td>${produto.produto}</td>
    <td>${produto.categoria}</td>
    <td>${produto.quantidade}</td>
    <td class="preco">${produto.preco.toLocaleString(
        "pt-BR",{
            style: "currency",
            currency: "BRL"
        }
    )}</td>
    `
    corpoDaTabela.appendChild(linha)
}
