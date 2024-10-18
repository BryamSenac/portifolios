import { buscarCarotes } from "../../../services/projetos/cartoes_services.js";
import { mostraTelaCad } from "../../../controller/projetos/telacad.js";
import { mostraTelaAtt } from "../../../controller/projetos/telaatt.js";
import { mostraTelaDel } from "../../../controller/projetos/confirm_delete.js";

export async function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');
    sectionCartoes.innerHTML = '';

    const cartoes = await buscarCarotes();

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao';
        let h1 = document.createElement('h1');
        h1.textContent = cartoes[i].linguagem;
        let h3 = document.createElement('h3');
        h3.textContent = cartoes[i].nome;
        let imgTag = document.createElement('img');
        imgTag.src = cartoes[i].img;

        let div = document.createElement('div');
        div.style.display = 'flex';
        div.style.width = '100%';
        div.style.justifyContent = 'space-evenly'

        let button = document.createElement('button');
        button.classList.add('button_card');
        button.classList.add('excluir');
        button.addEventListener('click', ()=>{
            mostraTelaDel(i);
        });
        let iconBin = document.createElement('i');
        iconBin.classList.add('fa-solid');
        iconBin.classList.add('fa-trash');

        button.appendChild(iconBin);

        let buttonAtt = document.createElement('button');
        buttonAtt.classList.add('button_card');
        buttonAtt.classList.add('att');
        buttonAtt.textContent = 'ATT';
        buttonAtt.addEventListener('click', ()=>{
            mostraTelaAtt(i);
        });

        div.appendChild(buttonAtt);
        div.appendChild(button);

        cartao.appendChild(h1);
        cartao.appendChild(imgTag);
        cartao.appendChild(h3);
        cartao.appendChild(div);

        sectionCartoes.appendChild(cartao);
    }
    let cartaoAdd = document.createElement('button');
    cartaoAdd.classList.add('cartao');
    cartaoAdd.classList.add('cartao_add');
    cartaoAdd.textContent = '+';
    cartaoAdd.addEventListener('click', ()=>{
        mostraTelaCad();
    });
    sectionCartoes.appendChild(cartaoAdd);
}