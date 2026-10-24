// A
const produtosDiv = document.querySelector('#produtos div');

// B
function criarProduto(produto) {
  const artigo = document.createElement('article');
  const imagem = document.createElement('img');
  const titulo = document.createElement('h2');
  const descricao = document.createElement('p');
  const categoria = document.createElement('p');
  const preco = document.createElement('p');
  const rating = document.createElement('p');

  imagem.src = produto.image;
  imagem.alt = produto.title;
  titulo.textContent = produto.title;
  descricao.textContent = produto.description;
  categoria.textContent = produto.category;
  preco.textContent = `Preço: ${produto.price} €`;
  rating.textContent = `Rating: ${produto.rating.rate} (${produto.rating.count})`;

  artigo.append(imagem, titulo, descricao, categoria, preco, rating);

  return artigo;
}

// C. Event handlers
function renderizarProdutos(produtos) {
  produtos.forEach((produto) => {
    console.log(produto.title);
    const artigo = criarProduto(produto);
    produtosDiv.append(artigo);
  });
}

// D. Event Listeners

// E. Inicialização
console.log(produtos[0].description);
renderizarProdutos(produtos);
