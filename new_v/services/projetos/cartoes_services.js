import { criarCartoes } from "../../view/js/projetos/cartoes_view.js";

export async function buscarCarotes() {
    try {
        const response = await fetch('http://localhost:3000/cartoes');
        if (response.status === 200) {
            const data = await response.json();
            const cartoes = data.cartoes;
            return cartoes;
        } else {
            alert('Erro ao carregar cartões');
            const cartoes = [];
            return cartoes;
        }
    }
    catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}

export async function excluirCartoes(index) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartao: index }),
        });

        if(response.status === 201){
            criarCartoes();
        }else{
            const data = response.json();
            alert(data.mensagem);
        }      
    }
    catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}

export async function cadastrarCatao(linguagem, nome, img) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                linguagem: linguagem,
                nome: nome,
                img: img,
            }),
        });
        
        if(response.status === 201){
            criarCartoes();
        }else{
            const data = response.json();
            alert(data.mensagem);
        }
    }
    catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}

export async function atualizarCartao(id, linguagem, nome, img) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                linguagem: linguagem,
                nome: nome,
                img: img,
                id: id,
            }),
        });
        if(response.status === 201){
            criarCartoes();
        }else{
            const data = response.json();
            alert(data.mensagem);
        }
    } catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}