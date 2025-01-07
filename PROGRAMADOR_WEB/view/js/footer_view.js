import { socialMedias } from "../../model/social_medias_model.js";
import { navigationFooter } from "../../controller/footer_controller.js";

export function createFooter(footer){
    let contactsFooter = createContactsFooter();
    let socialMediasFooter = createSocialMediasButtons();

    footer.appendChild(contactsFooter);
    footer.appendChild(socialMediasFooter);
}

function createContactsFooter(){
    let contactsFooter = document.createElement('div');
    contactsFooter.id = 'contacts_footer';

    let nameFooter = document.createElement('h3');
    nameFooter.id = 'name_footer';
    nameFooter.textContent = 'Bryam Assolini';

    let emailFooter = document.createElement('h4');
    emailFooter.id = 'email_footer';
    emailFooter.textContent = 'bryamafl@gmail.com';

    let phoneFooter = document.createElement('h4');
    phoneFooter.id = 'phone_footer';
    phoneFooter.textContent = '(46) 98400-4056';

    contactsFooter.appendChild(nameFooter);
    contactsFooter.appendChild(emailFooter);
    contactsFooter.appendChild(phoneFooter);

    return contactsFooter;
}

function createSocialMediasButtons(){
    let socialMediaArea = document.createElement('div');
    socialMediaArea.id = 'social_medias';

    socialMedias.map((socialMedia, index) => {
        let btn = document.createElement('button');
        btn.className = 'btn_footer';
        
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