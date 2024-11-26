const cardsSection = document.getElementById('cards');

export function createCards(cards){
    for(let i = 0; i < cards.length; i++){
        const card = document.createElement('div');
        card.className = 'card';
    
        const cardStruct = document.createElement('div');
        cardStruct.className = 'card_struct';
    
        const cardTitle = document.createElement('h3');
        cardTitle.className = 'card_title';
        cardTitle.textContent =  cards[i].title;
    
        const cardImg = document.createElement('div');
        cardImg.className = 'card_img';
        cardImg.style.backgroundImage = `url(${cards[i].img})`
    
        const cardLp = document.createElement('h6');
        cardLp.className = 'card_lp';
        cardLp.textContent = cards[i].lp;
    
        const cardDescription = document.createElement('p');
        cardDescription.className = 'card_description';
        cardDescription.textContent =  cards[i].description;
    
        cardStruct.appendChild(cardTitle);
        cardStruct.appendChild(cardImg);
        cardStruct.appendChild(cardLp);
        cardStruct.appendChild(cardDescription);
        card.appendChild(cardStruct);

        cardsSection.appendChild(card);
    }
}