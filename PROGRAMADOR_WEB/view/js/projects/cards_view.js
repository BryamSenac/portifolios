const cardsSection = document.getElementById('cards');

export function createCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';

        card.addEventListener('click', () => {
            window.open(cards[i].link, '_blank');
        });

        const cardStruct = document.createElement('div');
        cardStruct.className = 'card_struct';

        const cardTitle = document.createElement('h3');
        cardTitle.className = 'card_title';
        cardTitle.textContent = cards[i].title;

        const cardImg = document.createElement('div');
        cardImg.className = 'card_img';
        cardImg.style.backgroundImage = `url(${cards[i].img})`;

        const cardLp = document.createElement('h6');
        cardLp.className = 'card_lp';
        cardLp.textContent = cards[i].lp;

        const cardDescription = document.createElement('p');
        cardDescription.className = 'card_description';
        cardDescription.textContent = cards[i].description;

        cardStruct.appendChild(cardTitle);
        cardStruct.appendChild(cardImg);
        cardStruct.appendChild(cardLp);

        cardStruct.appendChild(cardDescription);

        card.appendChild(cardStruct);

        cardsSection.appendChild(card);
    }
}

export function createEditionsButtons() {
    const cards = document.querySelectorAll('.card_struct');

    cards.forEach((card) => {
        const buttonsCard = document.createElement('div');
        buttonsCard.className = 'btns_card';

        const editButton = createButtonCard('edit_button', 'fa-file-pen', () => { });
        const deleteButton = createButtonCard('delete_button', 'fa-trash', () => { });

        buttonsCard.appendChild(editButton);
        buttonsCard.appendChild(deleteButton);

        card.appendChild(buttonsCard);
    });

    creatAddCard();
}


function createButtonCard(id, i, action) {
    const button = document.createElement('button');
    const icon = document.createElement('i');

    button.id = id;
    button.className = 'card_button';

    icon.classList.add('fa-solid');
    icon.classList.add(i);

    button.appendChild(icon);
    button.addEventListener('click', action);

    return button;
}

function creatAddCard() {
    const addCard = document.createElement('div');
    addCard.className = 'card_struct';

    const icon = document.createElement('i');
    icon.id = 'add_icon';
    icon.classList.add('fa-solid');
    icon.classList.add('fa-plus');

    addCard.appendChild(icon);

    cardsSection.appendChild(addCard);
}

