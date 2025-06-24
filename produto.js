// Script para carregar foto do produto ao cadastrar e/ou editar

const inputFile = document.querySelector('#picture__input');
const pictureImage = document.querySelector('.picture__image');
const pictureImageTxt = 'Escolha uma imagem';
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function(e) {
            const readerTarget = e.target;
            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture__img');

            pictureImage.innerHTML = '';

            pictureImage.appendChild(img);

        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
    
});


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
    const descricaoAtualProduto = document.getElementById('produtoDescricao').innerText;
    const precoAtualProduto = document.getElementById('produtoPreco').innerText;

    const inputTituloProduto = document.getElementById('tituloProduto');
    inputTituloProduto.value = tituloAtualProduto;

    const inputDescricaoProduto = document.getElementById('descricaoProduto');
    inputDescricaoProduto.value = descricaoAtualProduto;

    const inputPrecoProduto = document.getElementById('precoProduto');
    inputPrecoProduto.value = precoAtualProduto;
});
 
botaoAdicionarProduto.addEventListener('click', () => {
    popupExibirProduto.classList.remove("ativo")
});

botaoFechar.addEventListener('click', () => (
    popupExibirProduto.classList.remove('ativo')
));