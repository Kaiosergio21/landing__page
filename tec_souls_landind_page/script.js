// Funções da sidebar
function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Define a largura da sidebar para 250px
    document.getElementById("main").style.marginLeft = "250px"; // Define a margem esquerda do conteúdo principal para 250px
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Define a largura da sidebar para 0, escondendo-a
    document.getElementById("main").style.marginLeft = "0"; // Define a margem esquerda do conteúdo principal para 0
}

// Funções do carrossel
let slideIndex = 1; // Define o índice inicial do slide como 1
showSlides(slideIndex); // Chama a função para mostrar o slide inicial

// Função para mudar o slide ao clicar nos botões "prev" e "next"
function plusSlides(n) {
    showSlides(slideIndex += n); // Incrementa ou decrementa o índice do slide e chama a função para mostrar o slide correspondente
}

// Função para mostrar o slide atual ao clicar nos pontos de navegação
function currentSlide(n) {
    showSlides(slideIndex = n); // Define o índice do slide como o número do ponto clicado e chama a função para mostrar o slide correspondente
}

// Função para mostrar os slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide"); // Obtém todos os elementos com a classe "slide"
    let dots = document.getElementsByClassName("dot"); // Obtém todos os elementos com a classe "dot"
    
    if (n > slides.length) {slideIndex = 1} // Se o índice do slide for maior que o número de slides, define o índice como 1
    if (n < 1) {slideIndex = slides.length} // Se o índice do slide for menor que 1, define o índice como o número total de slides
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todos os slides
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Remove a classe "active" de todos os pontos
    }
    
    slides[slideIndex-1].style.display = "block"; // Mostra o slide atual
    dots[slideIndex-1].className += " active"; // Adiciona a classe "active" ao ponto correspondente ao slide atual
}
