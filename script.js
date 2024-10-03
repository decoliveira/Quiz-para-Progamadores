// Função para calcular a pontuação do quiz
function calcularPontuacao() {
    let pontuacao = 0;

    // Pergunta 1: Múltipla escolha
    const pergunta1 = document.querySelector('input[name="pergunta1"]:checked');
    if (pergunta1 && pergunta1.value === 'HTML') {
        pontuacao++;
    }

    // Pergunta 2: Texto
    const pergunta2 = document.getElementById('p2').value.toLowerCase().trim();
    if (pergunta2 === 'domínio' || pergunta2 === 'dominio') {
        pontuacao++;
    }

    // Pergunta 3: Senha
    const pergunta3 = document.getElementById('p3').value;
    if (pergunta3.length >= 8) {
        pontuacao++;
    }

    // Pergunta 4: Data
    const pergunta4 = document.getElementById('p4').value;
    if (pergunta4 === '1991-01-01') { // Considerando o ano apenas
        pontuacao++;
    }

    // Pergunta 5: Seleção múltipla
    const checkboxes = document.querySelectorAll('input[name="pergunta5"]:checked');
    const respostasCorretas = ['Javascript', 'Java'];
    checkboxes.forEach((checkbox) => {
        if (respostasCorretas.includes(checkbox.value)) {
            pontuacao++;
        }
    });

    // Pergunta 6: Arquivo (Não será pontuado, pois depende de upload)
    // Pergunta 7: Menu suspenso
    const pergunta7 = document.getElementById('p7').value;
    if (pergunta7 === 'type') {
        pontuacao++;
    }

    // Pergunta 8: Texto
    const pergunta8 = document.getElementById('p8').value.toLowerCase().trim();
    if (pergunta8 === 'java') {
        pontuacao++;
    }

    // Exibir a pontuação no elemento de resultado
    document.getElementById('resultado').innerText = `Sua pontuação: ${pontuacao} de 8`;
}

// Adiciona o evento de clique ao botão
document.getElementById('calcular-pontuacao').addEventListener('click', calcularPontuacao);
