export function createAlert(body){
    let alert_container = document.createElement('div');
    alert_container.id = 'alert_container';

    let exit_alert_button = document.createElement('i');
    exit_alert_button.id = 'exit_alert_button';
    exit_alert_button.className = 'fa-solid fa-xmark';

    exit_alert_button.addEventListener('click', () => {
        hidenAlert();
    });
    
    let text_alert =document.createElement('h3');
    text_alert.id = 'alert_text';

    alert_container.appendChild(exit_alert_button);
    alert_container.appendChild(text_alert);

    body.appendChild(alert_container);
}

export function showAlert(text){
    let loginSection = document.getElementById('alert_container');
    let textAlert = document.getElementById('alert_text');
    textAlert.textContent = text;

    loginSection.style.top = '5vh';
}

function hidenAlert(){
    let loginSection = document.getElementById('alert_container');
    loginSection.style.top = '-50vh';
}