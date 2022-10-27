const comprar = document.querySelectorAll("#comprateste");
let carrinho = [];
const tbody = document.querySelector(".tbody");

comprar.forEach((btn) => {
  btn.addEventListener("click", adicionanocarrinho);
});

function adicionanocarrinho(e) {
  const botao = e.target;
  const item = botao.closest(".card");
  const tituloitem = item.querySelector(".nomeProduto").innerHTML;
  const itempreco = item.querySelector(".precoProduto").innerHTML;
  const itemdescri = item.querySelector(".descricaoProduto").innerHTML;
  const itemImg = item.querySelector(".imgCard").src;

  const novoItem = {
    Titulo: tituloitem,
    Preco: itempreco,
    Imagem: itemImg,
    Descricao: itemdescri,
    Quantidade: 1,
  };

  adicionaritemcarrinho(novoItem);
}

function adicionaritemcarrinho(novoItem) {
  const inputelemento = tbody.getElementsByClassName("input-elemento");
  for (let i = 0; i < carrinho.length; i++)
    if (carrinho[i].Titulo.trim() === novoItem.Titulo.trim()) {
      carrinho[i].Quantidade++;
      const inputvalor = inputelemento[i];
      inputvalor.value++;
      carrinhototal();
      return null;
    }
  carrinho.push(novoItem);
  carregarcarrinho();
}

function carregarcarrinho() {
  tbody.innerHTML = "";
  carrinho.map((item) => {
    const div = document.createElement("div");
    div.classList.add("itemcarrinho");
    const conteudo = `
        <div class="card-sm" style="margin-left: 5%;">
                                    
                                               
        <div class="imageCropper">
                                        <img class="imgCard" src=${item.Imagem}>
                                    </div>
                                    <div class="descricaoContainer">
                                        <h2 class="nomeProd">${item.Titulo}</h2>
                                        <p class="descricaoProd">${item.Descricao}</p>
                                    </div>
                                    <div class="precoContainer">
                                        <p class="precoProduto">${item.Preco}</p>
                                        <select class="qntdComprar">
                                            <option class="input-elemento">${item.Quantidade}X</option>
                                        </select>
                                    </div>
                                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
                                    </div>
        `;
    div.innerHTML = conteudo;
    tbody.appendChild(div);

    div
      .querySelector(".fa-trash")
      .addEventListener("click", removeritemcarrinho);
    div
      .querySelector(".input-elemento")
      .addEventListener("change", suaquantidade);
  });
  carrinhototal();
}

function carrinhototal() {
  let subtotal = 0;
  let total = 0;
  const itemcarrinhosubtotal = document.querySelector("#subTotal");
  const itemcarrinhototal = document.querySelector("#total");
  carrinho.forEach((item) => {
    const preco = parseInt(item.Preco.replace("R$", " "));
    subtotal = subtotal + preco * item.Quantidade;
    total = total + preco * item.Quantidade;
  });

  itemcarrinhosubtotal.innerHTML = `R$ ${subtotal
    .toFixed(2)
    .replace(".", ",")}`;
  itemcarrinhototal.innerHTML = `R$ ${total.toFixed(2).replace(".", ",")}`;
  adicionalocalstorage();
}

function removeritemcarrinho(e) {
  const botaodelete = e.target;
  const div = botaodelete.closest(".itemcarrinho");
  const Titulo = div.querySelector(".nomeProd").textContent;
  for (let i = 0; i < carrinho.length; i++) {
    if (carrinho[i].Titulo.trim() === Titulo.trim()) {
      carrinho.splice(i, 1);
    }
  }
  console.log(div);
  div.remove();
  carrinhototal();
}

function suaquantidade(e) {
  const meuselect = e.target;
  const div = meuselect.closest(".itemcarrinho");
  const Titulo = div.querySelector(".nomeProd").textContent;
  carrinho.forEach((item) => {
    if (item.Titulo.trim() === Titulo) {
      meuselect.value < 1 ? (meuselect.value = 1) : meuselect.value;
      item.Quantidade = meuselect.value;
      carrinhototal();
    }
  });
}

function adicionalocalstorage() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
window.onload = function () {
  const storage = JSON.parse(localStorage.getItem("carrinho"));
  if (storage) {
    carrinho = storage;
    carregarcarrinho();
  }
};
