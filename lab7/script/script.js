// A.DOM
const produtos = window.produtos;
const produtosDiv = document.querySelector('#produtos div');
const produtosSelecionadosDiv = document.querySelector('#produtos-selecionados');
const precoTotal = document.querySelector('#preco-total');

if (!localStorage.getItem('produtos-selecionados')) {
  localStorage.setItem('produtos-selecionados', '[]');
}

// B. Funçoes utilitárias
function criarProduto(produto) {
  const artigo = document.createElement('article');
  const imagem = document.createElement('img');
  const titulo = document.createElement('h2');
  const descricao = document.createElement('p');
  const categoria = document.createElement('p');
  const preco = document.createElement('p');
  const rating = document.createElement('p');
  const botaoAdicionar = document.createElement('button');

  imagem.src = produto.image;
  imagem.alt = produto.title;
  titulo.textContent = produto.title;
  descricao.textContent = produto.description;
  categoria.textContent = produto.category;
  preco.textContent = `Preço: ${produto.price} €`;
  rating.textContent = `Rating: ${produto.rating.rate} (${produto.rating.count})`;
  botaoAdicionar.textContent = '+ Adicionar ao cesto';

  botaoAdicionar.addEventListener('click', () => {
    const produtosSelecionados = JSON.parse(
      localStorage.getItem('produtos-selecionados')
    );

    produtosSelecionados.push(produto);
    localStorage.setItem(
      'produtos-selecionados',
      JSON.stringify(produtosSelecionados)
    );
    atualizaCesto();
  });

  artigo.append(
    imagem,
    titulo,
    descricao,
    categoria,
    preco,
    rating,
    botaoAdicionar
  );

  return artigo;
}

function criaProdutoCesto(produto) {
  const artigo = document.createElement('article');
  const titulo = document.createElement('h2');
  const preco = document.createElement('p');
  const botaoRemover = document.createElement('button');

  titulo.textContent = produto.title;
  preco.textContent = `Preço: ${produto.price} €`;
  botaoRemover.textContent = 'Remover do cesto';

  botaoRemover.addEventListener('click', () => {
    const produtosSelecionados = JSON.parse(
      localStorage.getItem('produtos-selecionados')
    );
    const indice = produtosSelecionados.findIndex(
      (produtoSelecionado) => produtoSelecionado.id === produto.id
    );

    produtosSelecionados.splice(indice, 1);
    localStorage.setItem(
      'produtos-selecionados',
      JSON.stringify(produtosSelecionados)
    );
    atualizaCesto();
  });

  artigo.append(titulo, preco, botaoRemover);

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

function atualizaCesto() {
  const produtosSelecionados = JSON.parse(
    localStorage.getItem('produtos-selecionados')
  );

  produtosSelecionadosDiv.innerHTML = '';

  produtosSelecionados.forEach((produto) => {
    const artigo = criaProdutoCesto(produto);
    produtosSelecionadosDiv.append(artigo);
  });

  const total = produtosSelecionados.reduce(
    (soma, produto) => soma + produto.price,
    0
  );
  precoTotal.textContent = `Total: ${total.toFixed(2)} €`;
}

// D. Event Listeners

// E. Inicialização
console.log(produtos[0].description);
renderizarProdutos(produtos);
atualizaCesto();
