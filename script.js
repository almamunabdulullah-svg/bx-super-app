
// DOM Elements
const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletStatus = document.getElementById('walletStatus');
const walletAddressDisplay = document.getElementById('walletAddressDisplay');
const walletBalance = document.getElementById('walletBalance');
const liveFeedContainer = document.getElementById('liveFeedContainer');

const myWalletAddress = "0x30Ad271CcBA208215E80b607eFBd389486c9CF6A";

// --- Web3 (Wallet Connect) Part ---
connectWalletBtn.addEventListener('click', () => {
    // ইনজেক্টেড ওয়েব3 (যেমন মেটামাস্ক) আছে কি না চেক করা
    if (typeof window.ethereum !== 'undefined') {
        console.log('Ethereum wallet is detected!');
        connectMetaMask();
    } else {
        alert('MetaMask is not installed! Please install it to connect.');
        // ডেমো হিসেবে স্ট্যাটাস টগল করা (যদি মেটামাস্ক না থাকে)
        simulateWalletConnection();
    }
});

async function connectMetaMask() {
    try {
        // অ্যাকাউন্টের অ্যাক্সেস চাওয়া
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        // UI আপডেট করা
        walletAddressDisplay.innerText = account.substring(0, 6) + '...' + account.substring(38);
        walletStatus.innerText = "Connected via MetaMask";
        walletStatus.classList.remove('disconnected');
        walletStatus.classList.add('connected');
        connectWalletBtn.innerText = "Wallet Connected";
        connectWalletBtn.classList.add('connected');
        connectWalletBtn.disabled = true;

        // ব্যালেন্স ফেচ করা (সিমুলেটেড)
        getEthBalance(account);

    } catch (error) {
        console.error('User denied account access', error);
    }
}

function simulateWalletConnection() {
    // মেটামাস্ক না থাকলে ডেমো এড্রেস ও ব্যালেন্স দেখানো
    const isAlreadyConnected = walletStatus.classList.contains('connected');
    if (!isAlreadyConnected) {
        walletAddressDisplay.innerText = myWalletAddress;
        walletStatus.innerText = "Demo Mode";
        walletStatus.classList.remove('disconnected');
        walletStatus.classList.add('connected');
        connectWalletBtn.innerText = "Demo Active";
        connectWalletBtn.classList.add('connected');
        connectWalletBtn.disabled = true;
        
        // একটি ডেমো ব্যালেন্স সেট করা
        walletBalance.innerText = "1.4534 ETH";
    }
}

async function getEthBalance(address) {
    // রিয়েল ব্যালেন্সের জন্য আপনার নিজস্ব RPC provider প্রয়োজন (যেমন Infura বা Alchemy)
    // এই ডেমোতে আমরা ধরে নিচ্ছি ব্যালেন্স 1.2345 ETH
    // আপনি এখানে web3dart-এর মতো লাইব্রেরির সমতুল্য JavaScript code বসাতে পারেন
    walletBalance.innerText = "1.2345 ETH";
    console.log('Balance fetched for', address);
}


// --- WebSocket (Live Feed) Part ---
// একটি পাবলিকলি অ্যাভেলেবল ওয়েবসোকেট ইকো সার্ভার ব্যবহার করা হচ্ছে
const socketUrl = 'wss://echo.websocket.events'; 

function startLiveWebSocketFeed() {
    const ws = new WebSocket(socketUrl);

    ws.onopen = () => {
        console.log('WebSocket connection opened.');
        // সার্ভারে একটি প্রাথমিক মেসেজ পাঠানো
        ws.send('Hello BX Server!');
        
        // লোডিং আইকন পরিবর্তন করা
        liveFeedContainer.innerHTML = ''; // কন্টেইনার খালি করা
    };

    ws.onmessage = (event) => {
        console.log('Message from server:', event.data);
        // নতুন ডেটা কার্ড হিসেবে UI-তে যুক্ত করা
        addLiveFeedCard(event.data);
    };

    ws.onerror = (error) => {
        console.error('WebSocket Error:', error);
        liveFeedContainer.innerHTML = '<p style="color:var(--live-color);">Connection Error.</p>';
    };

    ws.onclose = (event) => {
        console.log('WebSocket connection closed:', event);
        liveFeedContainer.innerHTML = '<p style="color:grey;">Connection Closed.</p>';
        // চাইলে এখানে রিকানেক্ট লজিক যোগ করা যেতে পারে
    };
}

function addLiveFeedCard(data) {
    // ডেটা থেকে একটি টাইমস্ট্যাম্প ও কন্টেন্ট তৈরি করা
    const timestamp = new Date().toLocaleTimeString();
    
    const cardHtml = `
        <div class="card live-card fade-in">
            <div class="live-icon"><i class="fas fa-data"></i></div>
            <div class="live-content">
                <h4>Data Packet: <span style="font-weight:normal; color:grey;">${timestamp}</span></h4>
                <p style="font-family:monospace; font-size:0.8rem;">Server echo: "${data.substring(0, 30)}..."</p>
            </div>
            <span class="live-tag">LIVE</span>
        </div>
    `;
    
    // নতুন কার্ডটি কন্টেইনারের প্রথমে যুক্ত করা
    liveFeedContainer.insertAdjacentHTML('afterbegin', cardHtml);
    
    // পুরানো কার্ডগুলো মুছে ফেলা যাতে মেমোরি ভরে না যায়
    if (liveFeedContainer.children.length > 5) {
        liveFeedContainer.removeChild(liveFeedContainer.lastChild);
    }
}

// পেজ লোড হওয়ার সাথে সাথে ওয়েবসোকেট কানেকশন শুরু করা
startLiveWebSocketFeed();
