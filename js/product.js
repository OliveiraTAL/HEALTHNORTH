// Váriaveis que alteram de valor
let preco_Promocional = 289.00;
let preco_Antigo = 349.00;
let desconto = "-17%";
let quantidade = 10;
let favorito = false;
let btn_calcular_frete;
const tamanhos = ["P", "M", "G"];

// Váriaveis constantes
const nomeProduto = "Estetoscópio Clínico Profissional";
const cores = ["ROXO", "AZUL", "PRETO"];
const avaliacao = 4.6;

const imagens_mini = [
    "/assets/produto1.png",
    "/assets/produto2.png",
    "/assets/produto3.png"
];

const imagem_main = "/assets/produto1.png";

const descricao = "Desenvolvido para profissionais que exigem precisão absoluta. Possui alta sensibilidade acústica para captar as nuances mais sutis, auscultador em aço inoxidável cirúrgico e olivas selantes macias que proporcionam isolamento acústico superior e conforto excepcional durante turnos prolongados.";

// Referências aos elementos do DOM
const containerInferior = document.getElementById("img-inferior");
const imgPrincipal = document.getElementById("img-principal");

// Define a imagem principal inicial
imgPrincipal.src = imagem_main;

// Cria as miniaturas dinamicamente
imagens_mini.forEach(imagem => {
    // Cria uma NOVA tag img para cada imagem
    const img = document.createElement("img");
    img.src = imagem;
    img.alt = "Miniatura do produto";
    
    // Adiciona o evento de clique para trocar a imagem principal
    img.addEventListener("click", () => {
        imgPrincipal.src = imagem;
    });
    
    // Anexa a imagem ao container
    containerInferior.appendChild(img);
});

// preencher a imagem principal
document.getElementById("imagem-maior").src = imgPrincipal;



// -------------------PREENCHER DADOS DO PRODUTO-----------------

document.getElementById("nome-produto").textContent = nomeProduto;
document.getElementById("valor-avaliacao").textContent = avaliacao;
document.getElementById("preco-antigo").textContent =preco_Antigo;
document.getElementById("preco-promocional").textContent = preco_Promocional;
document.getElementById("desconto").textContent = desconto;
// -------CORES DO PRODUTO-----------------------------
// ELE VAI LER QUANTAS CORES O PRODUTO E
// VAI CRIAR BOTÕES PARA AS CORES
const listaCores = document.getElementById("cores");
cores.forEach(cores => { // percorrer as cores cadastradas
    const botao = document.createElement("button");
    //criar um botão para cada cor que ele encontrar
    botao.textContent = cores;
    listaCores.appendChild(botao);
});

// -------TAMANHOS DO PRODUTO-----------------------------
// ELE VAI LER QUANTAS TAMANHOS O PRODUTO E
// VAI CRIAR BOTÕES PARA OS TAMANHOS
const listaTamanhos = document.getElementById("tamanhos");
tamanhos.forEach(tamanho => { // percorrer as cores cadastradas
    const botao = document.createElement("button");
    //criar um botão para cada cor que ele encontrar
    botao.textContent = tamanho;
    listaTamanhos.appendChild(botao);
});

//------------QUANTIDADE DE PRODUTO -----------------------------

/* O limite de quantidade vai ser igual a quantidade de produtos que o lojista cadastrou no estoque,
Quando o cliente clicar no botão de "+" a quantidade comprada aumente de 1 em 1.
E quando ele clicar no botão de "-" diminui de 1 em 1
Inicialmente o valor da quantidade aparece como "1". */

let quantidade_inicial = 1;
const btn_add_quantidade = document.getElementById("aumentar");
const btn_remover_quantidade = document.getElementById("diminuir");
let numeroqtt = document.getElementById("quantidade-numero");

//passando o valor inicial para a tag HTMl
numeroqtt.textContent = quantidade_inicial;


// Criando o código de aumentar a quantidade de 1 em 1
btn_add_quantidade.addEventListener("click", () => {
    quantidade_inicial++; // Aumentar de 1 em 1
    numeroqtt.textContent = quantidade_inicial;
})