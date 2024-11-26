import { bannersModel } from "../../model/banner_model.js";
import { createBanners } from "../../view/js/projects/banners_view.js";

const banners = document.getElementById('banners');

let bannerActual = 0;
const totalBanners = 4;

export function switchBanner(numeroBanner) {
    banners.style.left = `-${numeroBanner}00vw`;

    for (let i = 0; i < totalBanners; i++) {
        const botao = document.getElementById(`btn${i}`);
        botao.classList.remove('btn_banner_destaque');
    }   
    const botaoAtual = document.getElementById(`btn${numeroBanner}`);
    botaoAtual.classList.add('btn_banner_destaque');
}


export function startAutoSwitchBanner() {
    setInterval(() => {
        bannerActual = (bannerActual + 1) % totalBanners; 
        switchBanner(bannerActual);
    }, 2000);
}

export function startBanners(){
    const banners = bannersModel;

    createBanners(banners);

    startAutoSwitchBanner();
}