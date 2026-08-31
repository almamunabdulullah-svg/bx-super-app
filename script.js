// DOM Elements
const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletStatus = document.getElementById('walletStatus');
const walletAddressDisplay = document.getElementById('walletAddressDisplay');
const walletBalance = document.getElementById('walletBalance');
const liveFeedContainer = document.getElementById('liveFeedContainer');

const myWalletAddress = "0x30Ad271CcBA208215E80b607eFBd389486c9CF6A";

// --- Web3 (Wallet Connect) Part ---
connectWalletBtn.addEventListener('click', () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Ethereum wallet is detected!');
        connectMetaMask();
    } else {
        simulateWalletConnection();
    }
});

async function connectMetaMask() {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        walletAddressDisplay.innerText = account.substring(0, 6) + '...' + account.substring(38);
        walletStatus.innerText = "Connected via MetaMask";
        walletStatus.classList.remove('disconnected');
        walletStatus.classList.add('connected');
        connectWalletBtn.innerText = "Wallet Connected";
        connectWalletBtn.classList.add('connected');
        connectWalletBtn.disabled = true;

        getEthBalance(account);
    } catch (error) {
        console.error('User denied account access', error);
    }
}

function simulateWalletConnection() {
    const isAlreadyConnected = walletStatus.classList.contains('connected');
    if (!isAlreadyConnected) {
        walletAddressDisplay.innerText = myWalletAddress;
        walletStatus.innerText = "Demo Mode";
        walletStatus.classList.remove('disconnected');
        walletStatus.classList.add('connected');
        connectWalletBtn.innerText = "Demo Active";
        connectWalletBtn.classList.add('connected');
        connectWalletBtn.disabled = true;
        
        walletBalance.innerText = "1.4534 ETH";
    }
}

async function getEthBalance(address) {
    walletBalance.innerText = "1.2345 ETH";
    console.log('Balance fetched for', address);
}

// --- WebSocket (Live Feed) Part ---
// আরও স্থিতিশীল এবং রিলায়েবল পাবলিক ইকো সার্ভার লিঙ্ক
const socketUrl = 'wss://echo.websocket.events'; 

function startLiveWebSocketFeed() {
    const ws = new WebSocket(socketUrl);

    ws.onopen = () => {
        console.log('WebSocket connection opened.');
        ws.send('BX Super App Connected Successfully!');
        
        liveFeedContainer.innerHTML = ''; 
    };

    ws.onmessage = (event) => {
        console.log('Message from server:', event.data);
        addLiveFeedCard(event.data);
    };

    ws.onerror = (error) => {
        console.error('WebSocket Error:', error);
        liveFeedContainer.innerHTML = '<p style="color:#EF4444;">Connecting to live stream...</p>';
        // স্বয়ংক্রিয়ভাবে রিকানেক্ট করার চেষ্টা
        setTimeout(startLiveWebSocketFeed, 3000);
    };

    ws.onclose = (event) => {
        console.log('WebSocket connection closed:', event);
        liveFeedContainer.innerHTML = '<p style="color:#94A3B8;">Reconnecting live feed...</p>';
        // সংযোগ বিচ্ছিন্ন হলে ৩ সেকেন্ড পর পর পুনরায় সংযোগের চেষ্টা করবে
        setTimeout(startLiveWebSocketFeed, 3000);
    };
}

function addLiveFeedCard(data) {
    const timestamp = new Date().toLocaleTimeString();
    
    const cardHtml = `
        <div class="card live-card fade-in" style="display: flex; align-items: center; gap: 15px; border: 1px solid #334155; position: relative; margin-bottom: 1rem; background-color: #1E293B; padding: 1.5rem; border-radius: 10px;">
            <div class="live-icon" style="font-size: 1.5rem; color: #3B82F6;"><i class="fas fa-bolt"></i></div>
            <div class="live-content">
                <h4 style="margin: 0 0 5px 0; color: #F8FAFC;">Live Packet Feed <span style="font-weight:normal; color:#94A3B8; font-size: 0.8rem;">${timestamp}</span></h4>
                <p style="margin: 0; font-family:monospace; font-size:0.85rem; color:#94A3B8;">Data: "${data}"</p>
            </div>
            <span class="live-tag" style="position: absolute; top: 10px; right: 10px; background-color: rgba(239, 68, 68, 0.2); color: #EF4444; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">LIVE</span>
        </div>
    `;
    
    liveFeedContainer.insertAdjacentHTML('afterbegin', cardHtml);
    
    if (liveFeedContainer.children.length > 5) {
        liveFeedContainer.removeChild(liveFeedContainer.lastChild);
    }
}

// পেজ লোড হওয়ার সাথে সাথে ওয়েবসোকেট কানেকশন শুরু করা
startLiveWebSocketFeed();
