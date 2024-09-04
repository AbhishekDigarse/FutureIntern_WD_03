function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultElement = document.getElementById('result');

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemperature;

    if (fromUnit === toUnit) {
        resultElement.textContent = `The temperature is already in ${toUnit}: ${temperature.toFixed(2)} ${toUnit}.`;
        return;
    }

    switch (fromUnit) {
        case "Celsius":
            if (toUnit === "Fahrenheit") {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (toUnit === "Kelvin") {
                convertedTemperature = temperature + 273.15;
            }
            break;

        case "Fahrenheit":
            if (toUnit === "Celsius") {
                convertedTemperature = (temperature - 32) * 5/9;
            } else if (toUnit === "Kelvin") {
                convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            }
            break;

        case "Kelvin":
            if (toUnit === "Celsius") {
                convertedTemperature = temperature - 273.15;
            } else if (toUnit === "Fahrenheit") {
                convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            }
            break;

        default:
            resultElement.textContent = "Invalid conversion.";
            return;
    }

    resultElement.textContent = `${temperature} ${fromUnit} = ${convertedTemperature.toFixed(2)} ${toUnit}.`;
    resultElement.style.animation = "bounceIn 1s ease-in"; // Re-apply bounce animation
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}