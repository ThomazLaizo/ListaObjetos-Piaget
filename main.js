const filmes = [
    {
        nome: "O Poderoso Chefão",
        categoria: "Drama / Crime",
        data_de_lancamento: "1972-03-24",
        diretor: "Francis Ford Coppola"
    },
    {
        nome: "A Origem",
        categoria: "Ficção Científica / Ação",
        data_de_lancamento: "2010-07-16",
        diretor: "Christopher Nolan"
    },
    {
        nome: "Pulp Fiction: Tempo de Violência",
        categoria: "Crime / Drama",
        data_de_lancamento: "1994-10-14",
        diretor: "Quentin Tarantino"
    },
    {
        nome: "Interestelar",
        categoria: "Ficção Científica / Drama",
        data_de_lancamento: "2014-11-06",
        diretor: "Christopher Nolan"
    },
    {
        nome: "Forrest Gump: O Contador de Histórias",
        categoria: "Drama / Romance",
        data_de_lancamento: "1994-07-06",
        diretor: "Robert Zemeckis"
    },
    {
        nome: "Matrix",
        categoria: "Ficção Científica / Ação",
        data_de_lancamento: "1999-05-21",
        diretor: "Lana Wachowski, Lilly Wachowski"
    },
    {
        nome: "O Senhor dos Anéis: A Sociedade do Anel",
        categoria: "Fantasia / Aventura",
        data_de_lancamento: "2001-12-19",
        diretor: "Peter Jackson"
    }
];

const corpoDaTabela = document.getElementById("corpoDaTabela");

for (let filme of filmes){
    const linha = document.createElement("tr")

    linha.innerHTML = `
    <td class = "dado">${filme.nome}</td>
    <td class = "dado">${filme.categoria}</td>
    <td class = "dado">${filme.data_de_lancamento}</td>
    <td class = "dado">${filme.diretor}</td>
    `
    corpoDaTabela.appendChild(linha)
}
