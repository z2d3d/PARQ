let maxValue = 100000000;
let A = 50000000; // Initial value of constant A
let B = 50000000; // Initial value of constant B
let C = 50000000; // Initial value of constant C

function updateNumberFromInput(constant) {
    if (constant === 'A') {
        A = parseInt(document.getElementById('numberA').value);
        let percentA = (A / maxValue) * 100;
        document.getElementById('sliderA').value = percentA;
        document.getElementById('valueAPercent').textContent = percentA.toFixed(2);
    } else if (constant === 'B') {
        B = parseInt(document.getElementById('numberB').value);
        let percentB = (B / maxValue) * 100;
        document.getElementById('sliderB').value = percentB;
        document.getElementById('valueBPercent').textContent = percentB.toFixed(2);
    } else if (constant === 'C') {
        C = parseInt(document.getElementById('numberC').value);
        let percentC = (C / maxValue) * 100;
        document.getElementById('sliderC').value = percentC;
        document.getElementById('valueCPercent').textContent = percentC.toFixed(2);
    }
}

function updatePercentFromSlider(constant) {
    if (constant === 'A') {
        let percentA = document.getElementById('sliderA').value;
        A = (percentA / 100) * maxValue;
        document.getElementById('numberA').value = Math.round(A);
        document.getElementById('valueAPercent').textContent = percentA;
    } else if (constant === 'B') {
        let percentB = document.getElementById('sliderB').value;
        B = (percentB / 100) * maxValue;
        document.getElementById('numberB').value = Math.round(B);
        document.getElementById('valueBPercent').textContent = percentB;
    } else if (constant === 'C') {
        let percentC = document.getElementById('sliderC').value;
        C = (percentC / 100) * maxValue;
        document.getElementById('numberC').value = Math.round(C);
        document.getElementById('valueCPercent').textContent = percentC;
    }
}

function startSimulation() {
    // Calculate module values based on A, B, and C
    let module1Value = A + B + C;
    let module2Value = A * 2;
    let module3Value = B * C;
    let module4Value = (A + B) / C;
    let module5Value = (A + B + C) / 3;

    // Display results for each module
    document.getElementById('module1Value').textContent = module1Value.toFixed(2);
    document.getElementById('module2Value').textContent = module2Value.toFixed(2);
    document.getElementById('module3Value').textContent = module3Value.toFixed(2);
    document.getElementById('module4Value').textContent = module4Value.toFixed(2);
    document.getElementById('module5Value').textContent = module5Value.toFixed(2);

    // Display overall simulation result
    const resultText = `Simulation running with A=${A}, B=${B}, C=${C}. (A=${(A/maxValue*100).toFixed(2)}%, B=${(B/maxValue*100).toFixed(2)}%, C=${(C/maxValue*100).toFixed(2)}%)`;
    document.getElementById('simulationResult').textContent = resultText;
}
