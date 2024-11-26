import { switchMenu } from "../../../controller/menu_controller.js";

const navBanner = document.getElementById('banners');
const btnsBanner = document.getElementById('btns_banner');

export function createBanners(banners) {

    for (let i = 0; i < 4; i++) {
        let banner = document.createElement('div');
        banner.className = 'banner';

        banner.style.backgroundImage = `linear-gradient(40deg, rgba(0,0,0,0) 30%, ${banners[i].color} 100%), url(${banners[i].img})`;
        banner.style.backgroundSize = 'cover'; 
        banner.style.backgroundPosition = 'center'; 
        banner.style.backgroundRepeat = 'no-repeat'; 

        banner.addEventListener('click', () => { window.open(banners[i].link, '_blank'); });

        let title = document.createElement('h1');
        title.innerText = banners[i].title;

        let description = document.createElement('h5');
        description.innerText = banners[i].description;

        banner.appendChild(title);
        banner.appendChild(description);

        navBanner.appendChild(banner);
    }

    createButtonsBanners();
}


function createButtonsBanners() {
    for (let i = 0; i < 4; i++) {
        let btn = document.createElement('div');
        btn.className = 'btn_banner';
        btn.id = `btn${i}`;

        btn.addEventListener('click', () => {
            switchBanner(i);
        });

        btnsBanner.appendChild(btn);
    }
}