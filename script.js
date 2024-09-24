function showVideo() {
    const container = document.querySelector('.imgg');
    const audio = document.getElementById('audio');

    container.classList.toggle('rotated');

    if (container.classList.contains('rotated')) {
        // Reproduzir o áudio quando a classe 'rotated' for adicionada
        audio.play();
    } else {
        // Pausar o áudio se a classe 'rotated' for removida
        audio.pause();
        audio.currentTime = 0; // Voltar ao início da música
    }
}
