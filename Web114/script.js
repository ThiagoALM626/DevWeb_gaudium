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
document.getElementById("contato").addEventListener("submit", function(e) {
            e.preventDefault();

            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let mensagem = document.getElementById("mensagem").value;
            let saida = document.getElementById("mensagem");

            // Limpa mensagem anterior
            saida.textContent = "";

            // Validações
            if (nome.length < 3) {
                saida.textContent = "Nome deve ter no mínimo 3 caracteres.";
                saida.className = "erro";
                return;
            }

            if (email.indexOf("@") === -1) {
                saida.textContent = "E-mail inválido (falta @).";
                saida.className = "erro";
                return;
            }

            if (mensagem.length < 10) {
                saida.textContent = "Mensagem deve ter no mínimo 10 caracteres.";
                saida.className = "erro";
                return;
            }

            
            saida.textContent = "✅ Formulário enviado com sucesso!";
            saida.className = "sucesso";

            
            document.getElementById("contato").reset();
        });
