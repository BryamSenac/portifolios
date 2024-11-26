import {cards} from './../../model/cards_model.js';
import { createCards } from '../../view/js/projects/cards_view.js';

export function startCards(){
    createCards(cards);
}