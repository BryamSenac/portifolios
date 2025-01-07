import { resetBtnsBannerSize } from "../../view/js/projects_page/banner_view.js";
import { banners } from "../../model/banner_model.js";

let currentBanner;

export function switchBanner(index) {
    let bannersDiv = document.getElementById('banners_div');

    bannersDiv.style.left = `-${index}00vw`;
    currentBanner = index;

    console.log(index);
    resetBtnsBannerSize(index);
}

export function nextBanner() {
    currentBanner >= banners.length - 1 ?
        currentBanner = 0 :
        currentBanner++;
    switchBanner(currentBanner);
}