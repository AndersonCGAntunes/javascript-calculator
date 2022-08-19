
window.onload = () => {
    let display = document.getElementById('display');
    const CLEAR = document.getElementById('clear');
    CLEAR.addEventListener('click', limpaDisplay);
    
    function limpaDisplay() {
        display.innerHTML = 0;
    }
}

const insertNum = num => display.textContent += num;

const resultado = () => {
    //(display.textContent) ? display.textContent : false;
}