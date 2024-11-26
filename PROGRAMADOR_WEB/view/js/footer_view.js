import { socialMedias } from "../../model/links_model.js";

export function createFooter(footer){
    socialMedias.forEach(socialMedia => {
        const button = document.createElement('button');
        button.className = 'btn_footer';
        button.setAttribute('onclick', `window.location.href='${socialMedia.href}'`);

        const icon = document.createElement('i');
        icon.className = socialMedia.iconClass;

        button.appendChild(icon);
        footer.appendChild(button);
    });
}