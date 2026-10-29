// Saudação conforme o horário
const header = document.querySelector("header");
const hora = new Date().getHours();

alert("Bem-vindo(a) ao meu portfólio!");

function apresentacao() {
    alert("Olá! Meu nome é Thiago Santos e sou estudande de ADS.");
}

let saudacao;
if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

const mensagem = document.createElement("p");
mensagem.textContent = saudacao + " Seja bem-vindo ao meu portfólio.";
header.appendChild(mensagem);
// Mudar cor do titulo
function mudarCor() {
    const titulo = document.getElementById("titulo");
    const cores = ["red", "blue", "green", "purple", "orange", "deeppink", "teal"];
    const sorteada = cores[Math.floor(Math.random() * cores.length)];
    titulo.style.color = sorteada;
}
