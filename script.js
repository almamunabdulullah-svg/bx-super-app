// Global Master Configuration
const MASTER_CONTRACT = "0x30Ad271CcBA208215E80b607eFBd389486c9CF6A";
const SECRET_PASSWORD = "420MM420";

function updateCurrency() {
    const currency = document.getElementById('currencySelector').value;
    const balanceDisplay = document.getElementById('balanceDisplay');
    if(currency === 'USD') balanceDisplay.innerText = '$0.000005';
    if(currency === 'BDT') balanceDisplay.innerText = '৳0.00005';
    if(currency === 'EUR') balanceDisplay.innerText = '€0.000004';
    if(currency === 'AED') balanceDisplay.innerText = 'د.إ0.00002';
}

function openGodModeModal() {
    document.getElementById('godModal').style.display = 'flex';
}

function closeGodModeModal() {
    document.getElementById('godModal').style.display = 'none';
}

function verifyGodMode() {
    const inputPass = document.getElementById('masterPass').value;
    if(inputPass === SECRET_PASSWORD) {
        alert("🎉 God Mode Activated Successfully!\nMaster Contract Linked: " + MASTER_CONTRACT);
        closeGodModeModal();
        // Here you can unlock hidden backend features
    } else {
        alert("❌ Invalid Master Password!");
    }
}

// Gaming Logic (70% Company / 30% User Win Rate)
function playGame() {
    const randomChance = Math.random() * 100;
    const resultDisplay = document.getElementById('gameResult');
    
    // 70% chance to house win, 30% chance to user win
    if(randomChance <= 30) {
        resultDisplay.style.color = '#22c55e';
        resultDisplay.innerText = "🎉 You Won! 30% Payout Credited.";
    } else {
        resultDisplay.style.color = '#ef4444';
        resultDisplay.innerText = "😢 House Won (70% Profit Sent to Master Vault).";
    }
}
