
function convert(type) {
    let result;
    if (type === 'C') {
        const celsius = parseFloat(document.getElementById('inputCelsius').value);
        if (!isNaN(celsius)) {
            result = (celsius * 9/5) + 32;
        } else {
            alert('Invalid input for Celsius. Please enter a number.');
            return;
        }
    } else if (type === 'F') {
        const fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
        if (!isNaN(fahrenheit)) {
            result = (fahrenheit - 32) * 5/9;
        } else {
            alert('Invalid input for Fahrenheit. Please enter a number.');
            return;
        }
    }
    document.getElementById('result').textContent = `Result: ${result}°${type === 'C' ? 'F' : 'C'}`;
    document.querySelector('.d1').showModal();
}

function closeDialog() {
    document.querySelector('.d1').close();
}
function openDialog() {
    document.querySelector('.d2').showModal();
}
function closeConv(){
    document.querySelector('.d2').close();
}

