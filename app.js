const inputTotal = document.querySelector('#total');

const calculator = (e) => {
    let clicked = e.target.innerHTML;

    let reset = localStorage.getItem('reset');
    if (reset === 'true') {
        localStorage.setItem('reset', 'false');
        if (!isNaN(clicked)) {
            inputTotal.value = '0';
        }
    }
    if (!isNaN(clicked)) {
        if (inputTotal.value == 0) {
            inputTotal.value = clicked;
        } else {
            inputTotal.value += clicked;
        }
    }
}
const executeAction = (e) => {
    const typeActions = ['+', '-', '/', '*'];

    if (typeActions.includes(inputTotal.value.slice(-1))) {
        inputTotal.value = inputTotal.value.substring(0, inputTotal.value.length - 1);
    }
    inputTotal.value = inputTotal.value == 0 ? 0 : inputTotal.value + e.target.dataset.action;
}
const showResult = (e) => inputTotal.value = eval(inputTotal.value); //Mostra o resultado
const clear = () => inputTotal.value = '0'; //Limpa o resultado na tela
const backspace = () => inputTotal.value = inputTotal.value.substring(0, inputTotal.value.length - 1); // limpa o último digito

document.querySelectorAll('button').forEach(button => button.addEventListener("click", calculator));
document.querySelectorAll('.action').forEach(action => action.addEventListener("click", executeAction));
document.querySelector('.result').addEventListener('click', showResult);
document.querySelector('.backspace').addEventListener('click', backspace);
document.querySelector('.clear').addEventListener('click', clear);