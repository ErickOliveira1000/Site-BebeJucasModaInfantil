// Script para carregar foto do produto ao cadastrar e/ou editar

const inputFile = document.querySelector('#imgProduto');
const pictureImage = document.querySelector('.picture__image');


const botaoExibirProduto = document.getElementById('botaoExibirProduto');
const botaoAdicionarProduto = document.getElementById('botaoAdicionarProduto');
const botaoFechar = document.getElementById('botaoFechar');
const popupExibirProduto = document.getElementById('popupExibirProduto');
var imgProduto = document.getElementById('produtoImg');
var imgAtual = imgProduto.getAttribute('src');

// Abrir o popup de cadastro de produto pegando os dados do produto existente
botaoExibirProduto.addEventListener('click', () => {      
    popupExibirProduto.classList.add('ativo');          
    const img1 = document.createElement('img');
    img1.classList.add('picture__img');
    img1.src = imgAtual;
    pictureImage.innerHTML = '';
    pictureImage.appendChild(img1);

    const tituloAtualProduto = document.getElementById('produtoTitulo').innerHTML;
    document.getElementById('tituloProduto').innerHTML = tituloAtualProduto
    const descricaoAtualProduto = document.getElementById('produtoDescricao').innerText;
    document.getElementById('descricaoProduto').innerHTML = descricaoAtualProduto
    const precoAtualProduto = document.getElementById('produtoPreco').innerText;
    document.getElementById('precoProduto').innerHTML = precoAtualProduto
   
});
 
botaoAdicionarProduto.addEventListener('click', () => {
    popupExibirProduto.classList.remove("ativo")
});

botaoFechar.addEventListener('click', () => (
    popupExibirProduto.classList.remove('ativo')
));