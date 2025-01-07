import { switchBanner } from '../../../controller/projects_page/banner_controller.js';
import { banners } from './../../../model/banner_model.js'

export function createBannersNav(bannersNav) {
    let bannersDiv = creatBanners();
    let bannersButtons = createBannersButtons();

    bannersNav.appendChild(bannersDiv);
    bannersNav.appendChild(bannersButtons);
}

function creatBanners() {
    let bannersDiv = document.createElement('div');
    bannersDiv.id = 'banners_div';

    bannersDiv.style.width = `${banners.length}00vw`

    banners.map((bannerInfos, index) => {
        let banner = document.createElement('div');
        banner.className = 'banner';
        banner.style.backgroundImage = `url(${bannerInfos.img})`;

        let bannerProject = document.createElement('h2');
        bannerProject.className = 'banner_project';
        bannerProject.textContent = bannerInfos.project;

        let bannerDescription = document.createElement('p');
        bannerDescription.className = 'banner_description';
        bannerDescription.textContent = bannerInfos.description;

        banner.appendChild(bannerProject);
        banner.appendChild(bannerDescription);

        bannersDiv.appendChild(banner);
    });

    return bannersDiv;
}

function createBannersButtons() {
    let bannersButtons = document.createElement('div');
    bannersButtons.id = 'banners_buttons';

    banners.map((bannerInfos, index) => {
        let button = document.createElement('div');
        button.className = 'btn_banner';

        button.addEventListener('click', ()=>{
            switchBanner(index);
        })

        bannersButtons.appendChild(button);
    });

    return bannersButtons;
}

export function resetBtnsBannerSize(index){
    let btnsBunners = document.getElementsByClassName('btn_banner');
    for(let i =0; i < btnsBunners.length; i++){
        btnsBunners[i].style.transform = 'scale(1)';
    }
    resizeBtnsBanner(btnsBunners[index]);
}

function resizeBtnsBanner(btn){
    btn.style.transform = 'scale(1.2)';
}