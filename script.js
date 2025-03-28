let clicks = 0;
let perClick = 1;
let autoClickers = 0;

const clicksDisplay = document.getElementById('clicks');
const perClickDisplay = document.getElementById('perClick');
const clickBtn = document.getElementById('clickBtn');
const upgrade1 = document.getElementById('upgrade1');
const upgrade2 = document.getElementById('upgrade2');
const upgrade3 = document.getElementById('upgrade3');
const message = document.getElementById('message');

// Click button increases clicks
clickBtn.addEventListener('click', () => {
    clicks += perClick;
    updateDisplay();
    showMessage(`+${perClick} clicks`);
});

// Upgrades
upgrade1.addEventListener('click', () => {
    if (clicks >= 10) {
        clicks -= 10;
        perClick *= 2;
        updateDisplay();
        showMessage('Clicks doubled!');
    } else {
        showMessage('Need 10 clicks!');
    }
});

upgrade2.addEventListener('click', () => {
    if (clicks >= 50) {
        clicks -= 50;
        autoClickers += 1;
        updateDisplay();
        showMessage('Auto-clicker added!');
    } else {
        showMessage('Need 50 clicks!');
    }
});

upgrade3.addEventListener('click', () => {
    if (clicks >= 100) {
        clicks -= 100;
        perClick += 5;
        updateDisplay();
        showMessage('Click boost added!');
    } else {
        showMessage('Need 100 clicks!');
    }
});

// Auto-clicker runs every second
setInterval(() => {
    clicks += autoClickers * perClick;
    updateDisplay();
}, 1000);

function updateDisplay() {
    clicksDisplay.textContent = clicks;
    perClickDisplay.textContent = perClick;
    upgrade1.disabled = clicks < 10;
    upgrade2.disabled = clicks < 50;
    upgrade3.disabled = clicks < 100;
}

function showMessage(text) {
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, 2000);
}

updateDisplay();
