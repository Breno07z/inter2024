// Dados dos produtos (exemplo)
const produtos = [
  {
    id: 1,
    nome: "Aliança de Prata",
    preco: 299.99,
    imagem: "img/artesanato-para-vender-37.png",
    // ... outros dados
  },
  // ... outros produtos
]

// Função para renderizar os cards
function renderizarCards(produtos, paginaAtual) {
  const produtosPorPagina = 9 // Ajuste o número de produtos por página
  const inicio = (paginaAtual - 1) * produtosPorPagina
  const fim = inicio + produtosPorPagina
  const produtosPaginaAtual = produtos.slice(inicio, fim)

  const productList = document.getElementById("product-list")
  productList.innerHTML = ""

  produtosPaginaAtual.forEach((produto) => {
    // Crie um template para cada card e adicione ao productList
    // ... (código para criar o template)
  })
}

// Função para carregar os detalhes do produto no offcanvas
function loadCardContent(button) {
  const card = button.closest(".card")
  const productId = card.dataset.productId // Assuma que cada card tem um atributo data-product-id
  const produto = produtos.find((p) => p.id === productId)

  // Preencha o conteúdo do offcanvas com os dados do produto
  const offcanvasBody = document.querySelector(".offcanvas-body")
  offcanvasBody.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h2>${produto.nome}</h2>
    <p>Preço: R$ ${produto.preco}</p>
    <div class="quantidade">
      <button class="btn btn-decrement">-</button>
      <span class="quantidade-valor">1</span>
      <button class="btn btn-increment">+</button>
    </div>
    <button class="btn btn-danger">Remover</button>
  `

  // ... (implemente a lógica para adicionar/remover produtos do carrinho)
}

// Função para lidar com a paginação
function changePage(pagina) {
  renderizarCards(produtos, pagina)
}

// Chamada inicial para renderizar a primeira página
renderizarCards(produtos, 1)

// ... (implemente outros eventos e funções, como o botão de finalizar compra, etc.)
