let banners = document.getElementById('banners');
let numeroAtual = 0;

export function trocarBanner(numeroBanner) {
    numeroAtual = numeroBanner;
    banners.style.left = '-' + numeroBanner + '00vw';

    for (let i = 0; i < 4; i++) {
        document.getElementById('btn' + i).classList.remove('botao-ativo');
        document.getElementById('btn' + i).classList.add('botao');
    }
    document.getElementById('btn' + numeroBanner).classList.add('botao-ativo');}

export function iniciarTrocaAutomatica() {
    setInterval(() => {
        if (numeroAtual >= 3) {
            numeroAtual = 0;
        } else {
            numeroAtual += 1;
        }
        trocarBanner(numeroAtual);
    }, 2000);
}