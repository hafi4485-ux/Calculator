
function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}

function calculate() {
    let result = document.getElementById('result').value;
    try {
        let calculatedResult = eval(result);
        document.getElementById('result').value = calculatedResult;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
