// Criando váriaveis

// Váriaveis que alteram de valor
let preco_Promocional = 289.00;
let preco_Antigo = 349.00;
let desconto = "-17%";
// let preco;  
let quantidade = 10;
let favorito = false;

// Váriaveis que são constantes/ não alteram de valor

const nomeProduto = "Estetoscópio Clínico Profissional";
// const Tamanho; //
const cores = ["ROXO", "AZUL", "PRETO"];
const avaliacao = 4.6;
const imagens_mini= 
[
    "/assets/product2.avif",
    "/assets/product3.webp"
]; 

const imagens_main= "/assets/product.webp";
const descricao = "Desenvolvido para profissionais que exigem precisão absoluta. Possui alta sensibilidade acústica para captar as nuances mais sutis, auscultador em aço inoxidável cirúrgico e olivas selantes macias que proporcionam isolamento acústico superior e conforto excepcional durante turnos prolongados.";

let frete;
// Botões e arquivos
let pagamento;
let addcarrinho;
let comprarAgora;
let removerQuantidade;
let calcularFrete;

// Código para preencher as imagens no HTML

// Criando uma váriavel para reconher o ID da IMG inferior

const inferior= document.getElementById("img-inferior");

// Criando um váriavel que crie a tag img na div do HTMl
const img= document.createElement("img");

// Lendo a quantidade de imagens cadastradas e criando as tags IMG

// ForEach: Pecorre uma lista de itens até o final. - ele pecorre o primeiro, se ver que tem outro, ele lê o outro - quando chega no último ele para de ler.
/* Imagens_mini é chamado porque é ele que contém a lista de imagens
Depois o ForEach é chamado para ler a lista
E dentro do ForEach passamos o tipo de documento lido (imagens)
*/
imagens_mini.forEach(imagem => {
// Criando o código que mostra as imagens no site
    img.src=imagem; // Ele joga o camninho da imagem na tag IMG
    img.classList.add("img-inferior"); // Jogar a tag criada na Div

    /* Criando o código que substitui a imagem principal pela miniatura clicada.*/
});