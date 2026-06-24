let preco_Promocional = 289.00;
let preco_Antigo = 349.00;
let desconto = "-17%";
let quantidade = 10;

const nomeProduto = "Estetoscópio Clínico Profissional";

const descricao =
    "Desenvolvido para profissionais que exigem precisão absoluta. Possui alta sensibilidade acústica para captar as nuances mais sutis, auscultador em aço inoxidável cirúrgico e olivas selantes macias que proporcionam isolamento acústico superior e conforto excepcional durante turnos prolongados.";


const imagens_mini = [
    "../assets/produto1.png",
    "../assets/produto2.png",
    "../assets/produto3.png"
];

const imgPrincipal =
    document.getElementById("img-principal");

const imgInferior =
    document.getElementById("img-inferior");

/* IMAGEM PRINCIPAL */

imgPrincipal.src = imagens_mini[0];

/* MINIATURAS */

imagens_mini.forEach(imagem => {

    const img = document.createElement("img");

    img.src = imagem;

    img.addEventListener("click", () => {
        imgPrincipal.src = imagem;
    });

    imgInferior.appendChild(img);
});

/* DADOS */

document.getElementById("nome-produto").textContent =
    nomeProduto;

document.getElementById("descricao-produto").textContent =
    descricao;

document.getElementById("preco-promocional").textContent =
    `R$ ${preco_Promocional.toFixed(2)}`;

document.getElementById("preco-antigo").textContent =
    `R$ ${preco_Antigo.toFixed(2)}`;

document.getElementById("desconto").textContent =
    desconto;

/* CORES 

const listaCores =
    document.getElementById("cores");

cores.forEach(cor => {

    const botao = document.createElement("button");

    botao.textContent = cor;

    listaCores.appendChild(botao);
});*/

/* TAMANHOS 

const listaTamanhos =
    document.getElementById("tamanhos");

tamanhos.forEach(tamanho => {

    const botao = document.createElement("button");

    botao.textContent = tamanho;

    listaTamanhos.appendChild(botao);
});*/

/* QUANTIDADE */

let quantidadeSelecionada = 1;

const numero =
    document.getElementById("quantidade-numero");

document.getElementById("aumentar")
.addEventListener("click", () => {

    if (quantidadeSelecionada < quantidade) {

        quantidadeSelecionada++;

        numero.textContent =
            quantidadeSelecionada;
    }
});

document.getElementById("diminuir")
.addEventListener("click", () => {

    if (quantidadeSelecionada > 1) {

        quantidadeSelecionada--;

        numero.textContent =
            quantidadeSelecionada;
    }
});