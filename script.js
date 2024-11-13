document.addEventListener("DOMContentLoaded", function () {
    const features = [
        "age", "sex", "cigsPerDay", "BPMeds", "prevalentStroke",
        "prevalentHyp", "diabetes", "totChol", "sysBP", "diaBP",
        "BMI", "heartRate", "glucose"
    ];

    const formFieldsDiv = document.getElementById("form-fields");
    const resultDiv = document.getElementById("result");

    // Dynamically add input fields for each feature
    features.forEach(feature => {
        const input = document.createElement("input");
        input.type = "number";
        input.id = feature;
        input.placeholder = feature;
        formFieldsDiv.appendChild(input);
    });

    // Handle form submission
    document.getElementById("chdForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Get user inputs
        const userInput = {};
        features.forEach(feature => {
            userInput[feature] = parseFloat(document.getElementById(feature).value);
        });

        // Simulate a prediction (replace this with a real model/API call in production)
        const prediction = simulatePrediction(userInput);

        // Display result
        resultDiv.textContent = `Predicted outcome: ${prediction}`;
    });
});

// Placeholder prediction function - replace with real model logic/API call
function simulatePrediction(data) {
    // Simple logic for example purposes
    const sum = Object.values(data).reduce((acc, val) => acc + val, 0);
    return sum > 500 ? "High risk of CHD" : "Low risk of CHD";
}
