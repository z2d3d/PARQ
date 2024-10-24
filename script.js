
let A = 50000000;
let B = 50000000;
let C = 50000000;

// Function to calculate the total sum of A, B, and C
function getTotal() {
    return A + B + C;
}

// Update percentage based on total sum
function updatePercentFromInput(constant) {
    let total = getTotal();
    
    if (constant === 'A') {
        A = parseInt(document.getElementById('numberA').value);
        let percentA = (A / total) * 100;
        document.getElementById('sliderA').value = percentA;
        document.getElementById('valueAPercent').textContent = percentA.toFixed(2);
    } else if (constant === 'B') {
        B = parseInt(document.getElementById('numberB').value);
        let percentB = (B / total) * 100;
        document.getElementById('sliderB').value = percentB;
        document.getElementById('valueBPercent').textContent = percentB.toFixed(2);
    } else if (constant === 'C') {
        C = parseInt(document.getElementById('numberC').value);
        let percentC = (C / total) * 100;
        document.getElementById('sliderC').value = percentC;
        document.getElementById('valueCPercent').textContent = percentC.toFixed(2);
    }
}

// Update constants based on percentage change
function updateValueFromSlider(constant) {
    let total = getTotal();
    
    if (constant === 'A') {
        let percentA = document.getElementById('sliderA').value;
        A = (percentA / 100) * total;
        document.getElementById('numberA').value = Math.round(A);
        document.getElementById('valueAPercent').textContent = percentA;
    } else if (constant === 'B') {
        let percentB = document.getElementById('sliderB').value;
        B = (percentB / 100) * total;
        document.getElementById('numberB').value = Math.round(B);
        document.getElementById('valueBPercent').textContent = percentB;
    } else if (constant === 'C') {
        let percentC = document.getElementById('sliderC').value;
        C = (percentC / 100) * total;
        document.getElementById('numberC').value = Math.round(C);
        document.getElementById('valueCPercent').textContent = percentC;
    }
}

// Start simulation logic remains the same
function startSimulation() {
    const total = getTotal();
    const resultText = `Simulation running with A=${A}, B=${B}, C=${C}. (A=${(A/total*100).toFixed(2)}%, B=${(B/total*100).toFixed(2)}%, C=${(C/total*100).toFixed(2)}%)`;
    document.getElementById('simulationResult').textContent = resultText;
}
