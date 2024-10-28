let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() {
    let numeroSecreto = 7;
    let chute = parseInt(prompt('Digite um número entre 1 e 10'));

    if (chute === numeroSecreto) {
        alert('Parabéns, você acertou!');
    } else {
        alert('Que pena, tente novamente!');
        verificarChute();
    }
}

verificarChute();