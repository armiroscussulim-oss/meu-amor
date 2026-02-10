function proximaPagina() {
    const input = document.getElementById('userInput').value;
    const musica = document.getElementById('meuAudio'); // Puxa o áudio

    if (input.trim().length > 2) {
        musica.play(); // FAZ A MÚSICA TOCAR AQUI 🎶

        document.getElementById('resposta-dela').innerText = input;
        document.getElementById('main-card').classList.add('hidden');
        document.getElementById('secret-page').classList.remove('hidden');

        calcularDias();
        setInterval(criarCoracao, 300);
    } else {
        alert("Por favor, escreva algo bem bonito! ❤️");
    }
}

function calcularDias() {
    // Data de início: Outubro (mês 9) dia 1 de 2025
    const dataInicio = new Date(2025, 9, 1);
    const hoje = new Date();
    const diffTempo = Math.abs(hoje - dataInicio);
    const diffDias = Math.floor(diffTempo / (1000 * 60 * 60 * 24));
    document.getElementById('dias-contagem').innerText = diffDias;
}

function criarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

function voltar() {
    location.reload();
}