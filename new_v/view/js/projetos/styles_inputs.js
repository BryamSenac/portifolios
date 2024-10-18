export function errorInputs(input){
    input.placeholder = 'Valor invalido!';
    input.style.borderColor = '#d40707';
}

export function resetInputs(input){
    input.value = '';
    input.placeholder = '';
    input.style.borderColor = '#333333';
}