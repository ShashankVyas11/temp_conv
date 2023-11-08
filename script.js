function convertToCelsius() {
    var fahrenheitInput = parseFloat(document.getElementById('fahrenheitInput').value);
    var celsiusOutput = (fahrenheitInput - 32) * 5 / 9;
    document.getElementById('celsiusOutput').textContent = celsiusOutput.toFixed(2) + " °C";
}

function convertToFahrenheit() {
    var celsiusInput = parseFloat(document.getElementById('celsiusInput').value);
    var fahrenheitOutput = (celsiusInput * 9 / 5) + 32;
    document.getElementById('fahrenheitOutput').textContent = fahrenheitOutput.toFixed(2) + " °F";
}