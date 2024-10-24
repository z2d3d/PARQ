
let A = 50000000;
let B = 50000000;
let C = 50000000;

function getTotal() {
    return A + B + C;
}

// Update percentage based on total sum when input value changes
function updatePercentFromInput(constant) {
    let total = getTotal();
    
    if (constant === 'A') {
        A = parseInt(document.getElementById('numberA').value);
        total = getTotal(); // Update total after changing A
        let percentA = (A / total) * 100;
        document.getElementById('sliderA').value = percentA;
        document.getElementById('valueAPercent').textContent = percentA.toFixed(2);
    } else if (constant === 'B') {
        B = parseInt(document.getElementById('numberB').value);
        total = getTotal(); // Update total after changing B
        let percentB = (B / total) * 100;
        document.getElementById('sliderB').value = percentB;
        document.getElementById('valueBPercent').textContent = percentB.toFixed(2);
    } else if (constant === 'C') {
        C = parseInt(document.getElementById('numberC').value);
        total = getTotal(); // Update total after changing C
        let percentC = (C / total) * 100;
        document.getElementById('sliderC').value = percentC;
        document.getElementById('valueCPercent').textContent = percentC.toFixed(2);
    }

    // Update percentages for all constants after any change
    updateAllPercentages();
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
    
    // Update percentages for all constants after any change
    updateAllPercentages();
}

// Update all percentages for constants A, B, C
function updateAllPercentages() {
    let total = getTotal();
    
    let percentA = (A / total) * 100;
    let percentB = (B / total) * 100;
    let percentC = (C / total) * 100;

    document.getElementById('sliderA').value = percentA;
    document.getElementById('sliderB').value = percentB;
    document.getElementById('sliderC').value = percentC;

    document.getElementById('valueAPercent').textContent = percentA.toFixed(2);
    document.getElementById('valueBPercent').textContent = percentB.toFixed(2);
    document.getElementById('valueCPercent').textContent = percentC.toFixed(2);
}

// Start simulation logic remains the same
function startSimulation() {
    let total = getTotal();

    // Calculate module values based on A, B, and C
    let module1Value = A + B + C;
    let module2Value = A * 2;
    let module3Value = B * C;
    let module4Value = (A + B) / C;
    let module5Value = (A + B + C) / 3;

    // Display results in the modules
    document.getElementById('module1Value').textContent = module1Value.toFixed(2);
    document.getElementById('module2Value').textContent = module2Value.toFixed(2);
    document.getElementById('module3Value').textContent = module3Value.toFixed(2);
    document.getElementById('module4Value').textContent = module4Value.toFixed(2);
    document.getElementById('module5Value').textContent = module5Value.toFixed(2);

    // Display overall simulation result
    const resultText = `Simulation running with A=${A}, B=${B}, C=${C}. (A=${(A/total*100).toFixed(2)}%, B=${(B/total*100).toFixed(2)}%, C=${(C/total*100).toFixed(2)}%)`;
    document.getElementById('simulationResult').textContent = resultText;
}
