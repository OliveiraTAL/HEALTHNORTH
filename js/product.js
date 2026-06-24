// Váriaveis que alteram de valor
let preco_Promocional = 289.00;
let preco_Antigo = 349.00;
let desconto = "-17%";
let quantidade = 10;
let favorito = false;

// Váriaveis constantes
const nomeProduto = "Estetoscópio Clínico Profissional";
const cores = ["ROXO", "AZUL", "PRETO"];
const avaliacao = 4.6;

const imagens_mini = [
    "/assets/product2.avif",
    "/assets/product3.webp"
];

const imagem_main = "/assets/product.webp";

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