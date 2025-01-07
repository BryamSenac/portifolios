import { socialMedias } from "../../../model/social_medias_model.js";

export function createSocialMediaPrimaryTamplate(){
    let socialMediaPrimaryTamplate = document.getElementById('social_media_primary_tamplate');

    let socialMediaButtons = createSocialMediasButtons();

    socialMediaPrimaryTamplate.appendChild(socialMediaButtons);
}

 function createSocialMediasButtons(){
    let socialMediaArea = document.createElement('div');
    socialMediaArea.id = 'social_medias_primary_tamplate_buttons';

    socialMedias.map((socialMedia, index) => {
        let btn = document.createElement('button');
        btn.className = 'btn_medias';
        
        btn.addEventListener('click', () => {
            navigationFooter(socialMedia.link);
        });

        let btnIcon = document.createElement('i');
        btnIcon.className = socialMedia.icon;

        btn.appendChild(btnIcon);

        socialMediaArea.appendChild(btn);
    }); 

    return socialMediaArea;
}