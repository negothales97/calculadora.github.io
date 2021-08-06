const calculator = (e) => {
    const inputTotal = document.querySelector('#total');
    let clicked = e.target.innerHTML;

    let reset = localStorage.getItem('reset');
    if (reset === 'true') {
        localStorage.setItem('reset', 'false');
        if (!isNaN(clicked)) {
            inputTotal.value = '0';
        }
    }

    if (clicked === 'DEL') {
        inputTotal.value = inputTotal.value.substring(0, inputTotal.value.length - 1);
    }
    if (clicked === 'C') {
        inputTotal.value = '0';
    }

    if (!isNaN(clicked)) {
        if (inputTotal.value == 0) {
            inputTotal.value = clicked;
        } else {
            inputTotal.value += clicked;
        }
    } else {
        if (clicked === '+' || clicked === '-' || clicked === '/' || clicked === '*') {
            if (inputTotal.value.slice(-1) === '+' || inputTotal.value.slice(-1) === '-' || inputTotal.value.slice(-1) === '/' || inputTotal.value.slice(-1) === '*') {
                inputTotal.value = inputTotal.value.substring(0, inputTotal.value.length - 1);
            }
            if (inputTotal.value == 0) {
                inputTotal.value = 0;
            } else {
                inputTotal.value += clicked;
            }
        }
        if (clicked === '=') {
            let result = eval(inputTotal.value);
            inputTotal.value = result;
            localStorage.setItem('reset', 'true');
        }
    }
}
const executeAction = () => {

}

document.querySelectorAll('button').forEach(button => button.addEventListener("click", calculator));
// document.querySelectorAll('.action').forEach(button => button.addEventListener("click", executeAction));