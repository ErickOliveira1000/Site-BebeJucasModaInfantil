//Carrossel

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img")

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carrossel, 1800);

//Script do Popup do Cadastro de usuário

const botaoCadastrarUsuario = document.getElementById('cadastrarUsuario');
const botaoSair = document.getElementById('sairDoCadastro');
const botaoSalvarUsuario = document.getElementById('salvarUsuario');
const popupCadastro = document.getElementById('popup-cadastro');

botaoCadastrarUsuario.addEventListener("click", () => (
    popupCadastro.classList.add("ativo")
));

botaoSair.addEventListener("click", () => (
    popupCadastro.classList.remove("ativo")
));
 
botaoSalvarUsuario.addEventListener('click', () => {
    popupCadastro.classList.remove("ativo")
});

//Função para padronizar o input de telefone

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}
  
const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

// Ocultar senha do input de cadastro

document.addEventListener('DOMContentLoaded', () => {
    icone.classList.add('esconder')
});

const sennhaDeUsuario = document.getElementById('senhaDeCadastroUsuario');
const icone = document.getElementById('icone');

function mostrarEsconder(){
    if(sennhaDeUsuario.type === 'password'){
        sennhaDeUsuario.setAttribute('type', 'text');
        icone.classList.remove('esconder')
    }
    else{
        sennhaDeUsuario.setAttribute('type', 'password');
        icone.classList.add('esconder')
    }
}

// Script do popup de Dados de Usuario

const botaoMostrarDadosUsuario = document.getElementById('mostrarDadosUsuario');
const botaoSairPopupDadosUsuario = document.getElementById('sairPopupDadosUsuario');
const botaoEditarUsuario = document.getElementById('editarUsuario');
const popupDadosUsuario = document.getElementById('popup-dadosUsuario');

botaoMostrarDadosUsuario.addEventListener("click", () => (
    popupDadosUsuario.classList.add("ativo1")
));

botaoSairPopupDadosUsuario.addEventListener("click", () => (
    popupDadosUsuario.classList.remove("ativo1")
));
 
botaoEditarUsuario.addEventListener('click', () => {
    popupDadosUsuario.classList.remove("ativo1")
});