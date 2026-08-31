<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BX Super-App - Blockchain Elite</title>
  <!-- Ethers.js Library CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

    :root {
      --bg-base: #020617;
      --gold-accent: #ffd700;
      --gold-glow: rgba(255, 215, 0, 0.25);
      --text-main: #f8fafc;
      --text-sub: #94a3b8;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; font-family: 'Plus Jakarta Sans', sans-serif; }

    body {
      background-color: var(--bg-base);
      background-image: radial-gradient(circle at 50% 0%, #171b36 0%, #020617 75%);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
    }

    .app-container {
      width: 100%;
      max-width: 420px;
      height: 95vh;
      background: rgba(8, 12, 26, 0.96);
      backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 28px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.95);
      overflow: hidden;
      position: relative;
    }

    .app-header {
      padding: 14px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .logo-area { display: flex; align-items: center; gap: 10px; }
    .logo-box {
      width: 38px; height: 38px;
      background: linear-gradient(135deg, var(--gold-accent), #ff9900);
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Orbitron', sans-serif; font-weight: 900; font-size: 16px; color: #020617;
      box-shadow: 0 0 20px var(--gold-glow);
    }
    .logo-text { font-family: 'Orbitron', sans-serif; font-size: 15px; font-weight: 700; background: linear-gradient(90deg, #fff, var(--gold-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

    .badge-live {
      font-size: 9px; font-weight: 700; color: var(--gold-accent);
      background: rgba(255, 215, 0, 0.08); padding: 5px 10px; border-radius: 20px;
      border: 1px solid rgba(255, 215, 0, 0.3); display: flex; align-items: center; gap: 5px;
      font-family: 'Orbitron', sans-serif;
    }
    .dot { width: 6px; height: 6px; background: var(--gold-accent); border-radius: 50%; box-shadow: 0 0 8px var(--gold-accent); }

    .viewport { flex: 1; overflow-y: auto; padding: 16px; scroll-behavior: smooth; }
    .viewport::-webkit-scrollbar { width: 3px; }
    .viewport::-webkit-scrollbar-thumb { background: var(--gold-accent); border-radius: 3px; }

    .user-profile-bar {
      display: flex; align-items: center; justify-content: space-between;
      background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 18px; padding: 10px 14px; margin-bottom: 14px;
    }
    .user-info h4 { font-size: 11px; font-weight: 700; color: #fff; font-family: 'Orbitron'; }
    .user-info span { font-size: 8px; color: var(--gold-accent); }

    .balance-card {
      background: linear-gradient(135deg, rgba(20, 27, 45, 0.9), rgba(10, 15, 30, 0.95));
      border: 1px solid rgba(255, 215, 0, 0.25);
      border-radius: 22px; padding: 18px; margin-bottom: 14px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.6);
    }
    .b-label { font-size: 10px; color: var(--text-sub); text-transform: uppercase; letter-spacing: 1.2px; font-weight: 600; font-family: 'Orbitron'; }
    .b-amount { font-family: 'Orbitron', sans-serif; font-size: 26px; font-weight: 900; color: var(--gold-accent); margin: 4px 0; text-shadow: 0 0 15px rgba(255, 215, 0, 0.3); }
    .b-footer { display: flex; justify-content: space-between; font-size: 10px; color: var(--text-sub); margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); font-weight: 600; }

    .section-title { font-family: 'Orbitron', sans-serif; font-size: 10px; color: var(--text-sub); margin-bottom: 10px; display: flex; justify-content: space-between; }
    
    .grid-features { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; margin-bottom: 14px; }
    .feature-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 12px; padding: 8px 2px; text-align: center; cursor: pointer; transition: 0.2s;
    }
    .feature-card:hover { background: rgba(255, 215, 0, 0.08); border-color: var(--gold-accent); transform: translateY(-2px); }
    .f-icon { width: 18px; height: 18px; margin: 0 auto 3px auto; fill: var(--gold-accent); display: block; }
    .f-name { font-size: 7px; font-weight: 700; color: var(--text-main); font-family: 'Orbitron'; }

    .active-box {
      background: rgba(5, 10, 25, 0.95);
      border: 1px solid rgba(255, 215, 0, 0.3);
      border-radius: 18px; padding: 16px; min-height: 140px; margin-bottom: 14px;
    }
    .box-title { font-family: 'Orbitron', sans-serif; font-size: 11px; color: var(--gold-accent); margin-bottom: 8px; font-weight: 700; }
    .box-desc { font-size: 11px; color: var(--text-sub); line-height: 1.5; }

    .action-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; }
    .btn-custom {
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 153, 0, 0.15));
      border: 1px solid rgba(255, 215, 0, 0.4); color: var(--text-main); padding: 12px; border-radius: 12px;
      font-family: 'Orbitron', sans-serif; font-size: 9px; font-weight: 700; cursor: pointer; text-align: center;
    }
    .btn-custom:hover { background: rgba(255, 215, 0, 0.3); box-shadow: 0 0 20px var(--gold-glow); }

    .btn-withdraw {
      background: linear-gradient(135deg, rgba(40, 167, 69, 0.2), rgba(32, 201, 151, 0.2));
      border: 1px solid rgba(40, 167, 69, 0.6); color: #28a745;
    }
    .btn-withdraw:hover { background: rgba(40, 167, 69, 0.4); box-shadow: 0 0 20px rgba(40, 167, 69, 0.4); }

    .hidden-vault-btn {
      background: rgba(239, 68, 68, 0.08); border: 1px dashed rgba(239, 68, 68, 0.3); color: #fca5a5;
      padding: 10px; border-radius: 12px; text-align: center; font-size: 9px; font-weight: 700; cursor: pointer; margin-bottom: 10px; font-family: 'Orbitron';
    }

    .bottom-nav {
      height: 60px; background: rgba(2, 6, 23, 0.98); border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex; justify-content: space-around; align-items: center; padding: 0 4px;
    }
    .nav-btn { background: none; border: none; color: var(--text-sub); display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 9px; font-weight: 700; font-family: 'Orbitron'; }
    .nav-btn svg { width: 18px; height: 18px; margin-bottom: 2px; fill: currentColor; }
    .nav-btn.active, .nav-btn:hover { color: var(--gold-accent); text-shadow: 0 0 10px var(--gold-accent); }

    .modal { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(2, 6, 23, 0.9); backdrop-filter: blur(10px); display: none; justify-content: center; align-items: center; z-index: 200; padding: 20px; }
    .modal-card { background: #0f172a; border: 1px solid var(--gold-accent); border-radius: 20px; padding: 20px; width: 100%; max-width: 320px; text-align: center; box-shadow: 0 0 30px rgba(255, 215, 0, 0.3); }
    .modal-input { width: 100%; background: rgba(0, 0, 0, 0.6); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 10px; padding: 10px; color: #fff; font-size: 14px; margin-bottom: 12px; outline: none; text-align: center; font-family: 'Orbitron'; }
  </style>
</head>
<body>

  <div class="app-container">
    
    <div class="app-header">
      <div class="logo-area">
        <div class="logo-box">BX</div>
        <div class="logo-text">BLOCKCHAIN NODE</div>
      </div>
      <div class="badge-live">
        <div class="dot"></div>
        <span>MULTI-CHAIN ZK</span>
      </div>
    </div>

    <div class="viewport">
      
      <div class="user-profile-bar">
        <div class="user-info">
          <h4 id="nodeStatus">Node: All Wallets Supported</h4>
          <span id="blockchainCode">BTC, ETH, BNB, SOL Ready</span>
        </div>
        <button class="btn-custom" style="padding: 6px 10px; font-size: 8px;" onclick="openUniversalWalletModal()">Connect Wallet</button>
      </div>

      <div class="balance-card">
        <div class="b-label">Unified Multi-Crypto Vault</div>
        <div class="b-amount" id="userBalance">$0.00 USD</div>
        <div class="b-footer">
          <span id="activeChainLabel">Fee: 0.1% to 1.0% Applied</span>
          <span style="color: var(--gold-accent);">● Secure Gateway</span>
        </div>
      </div>

      <div class="section-title">
        <span>BLOCKCHAIN ECOSYSTEM & GAMING MODULES</span>
        <span style="color: var(--gold-accent);">v9.9 Secure</span>
      </div>

      <div class="grid-features">
        <div class="feature-card" onclick="loadFeature(1)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg><div class="f-name">Home</div></div>
        <div class="feature-card" onclick="loadFeature(2)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M21 10h-8V2H6v8H2l9.5 9.5L21 10z"/></svg><div class="f-name">P2P Escrow</div></div>
        <div class="feature-card" onclick="loadFeature(3)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L11 14.17V7h2v7.17l2.59-2.58L17 12l-5 5z"/></svg><div class="f-name">Teen Patti</div></div>
        <div class="feature-card" onclick="loadFeature(4)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2z"/></svg><div class="f-name">Casino</div></div>
        <div class="feature-card" onclick="loadFeature(5)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg><div class="f-name">Tournaments</div></div>
        <div class="feature-card" onclick="loadFeature(6)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg><div class="f-name">Ludo King</div></div>
        <div class="feature-card" onclick="loadFeature(7)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/></svg><div class="f-name">Meme Coins</div></div>
        <div class="feature-card" onclick="loadFeature(8)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 11V9l6 3-6 3z"/></svg><div class="f-name">Shorts</div></div>
        <div class="feature-card" onclick="loadFeature(9)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg><div class="f-name">Wallet</div></div>
        <div class="feature-card" onclick="loadFeature(10)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg><div class="f-name">Node ID</div></div>
        <div class="feature-card" onclick="loadFeature(11)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M12 2.5s-6 5.5-6 10.5a6 6 0 1012 0c0-5-6-10.5-6-10.5zm0 14.5a4 4 0 110-8 4 4 0 010 8z"/></svg><div class="f-name">Launchpad</div></div>
        <div class="feature-card" onclick="loadFeature(12)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg><div class="f-name">Fitness</div></div>
        <div class="feature-card" onclick="loadFeature(13)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/></svg><div class="f-name">Lucky Spin</div></div>
        <div class="feature-card" onclick="loadFeature(14)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/></svg><div class="f-name">AI Robot</div></div>
        <div class="feature-card" onclick="loadFeature(15)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg><div class="f-name">Futures</div></div>
        <div class="feature-card" onclick="loadFeature(16)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg><div class="f-name">Vault</div></div>
        <div class="feature-card" onclick="loadFeature(17)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/></svg><div class="f-name">Web3 DApp</div></div>
        <div class="feature-card" onclick="loadFeature(18)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg><div class="f-name">Crypto Card</div></div>
        <div class="feature-card" onclick="loadFeature(19)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg><div class="f-name">Anti-Phish</div></div>
        <div class="feature-card" onclick="loadFeature(20)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg><div class="f-name">Staking</div></div>
        <div class="feature-card" onclick="loadFeature(21)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1 1.38 1-1.38L15.38 12 17 10.83 14.92 8H20v6z"/></svg><div class="f-name">Airdrop</div></div>
        <div class="feature-card" onclick="loadFeature(22)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg><div class="f-name">AI Chat</div></div>
        <div class="feature-card" onclick="loadFeature(23)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg><div class="f-name">NFT Studio</div></div>
        <div class="feature-card" onclick="loadFeature(24)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M19.44 12.99c-.04-.33-.04-.67 0-1l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.56 12c-.04.33-.04.67 0 1l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c-.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg><div class="f-name">Settings</div></div>
        <div class="feature-card" onclick="loadFeature(25)"><svg class="f-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg><div class="f-name">Oracle AI</div></div>
      </div>

      <div class="active-box" id="activeBox">
        <div class="box-title" id="boxTitle">1. HOME DASHBOARD</div>
        <div class="box-desc" id="boxDesc">সকল কারেন্সি (BTC, ETH, BNB, SOL) এবং সকল ওয়ালেট সাপোর্ট চালু আছে। ডিপোজিট এবং উইথড্র করার সময় ০.১% থেকে ১% ফি স্বয়ংক্রিয়ভাবে চার্জ কাটা হবে।</div>
      </div>

      <div class="action-row">
        <button class="btn-custom" onclick="openDepositModal()">⚡ Deposit (0.5% Fee)</button>
        <button class="btn-custom btn-withdraw" onclick="openWithdrawModal()">💸 Withdraw (1% Fee)</button>
      </div>

      <div class="hidden-vault-btn" onclick="openSecretModal()">
        🔐 Admin Vault, Tax & Company Revenue Bot
      </div>

    </div>

    <div class="bottom-nav">
      <button class="nav-btn active" onclick="loadFeature(1)"><svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>Home</button>
      <button class="nav-btn" onclick="loadFeature(2)"><svg viewBox="0 0 24 24"><path d="M21 10h-8V2H6v8H2l9.5 9.5L21 10z"/></svg>P2P</button>
      <button class="nav-btn" onclick="loadFeature(3)"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L11 14.17V7h2v7.17l2.59-2.58L17 12l-5 5z"/></svg>Teen Patti</button>
      <button class="nav-btn" onclick="loadFeature(8)"><svg viewBox="0 0 24 24"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>Shorts</button>
      <button class="nav-btn" onclick="loadFeature(10)"><svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>ID Node</button>
    </div>

    <!-- Universal Wallet Selection Modal -->
    <div class="modal" id="universalWalletModal">
      <div class="modal-card">
        <h3 style="font-family:'Orbitron'; color:var(--gold-accent); margin-bottom:10px; font-size:14px;">Connect Crypto Wallet</h3>
        <p style="font-size:11px; color:var(--text-sub); margin-bottom:15px;">আপনার পছন্দের কয়েন বা ওয়ালেট সিলেক্ট করুন:</p>
        <button class="btn-custom" style="margin-bottom:8px; width:100%;" onclick="connectWallet('bitcoin')">Bitcoin Wallet (BTC)</button>
        <button class="btn-custom" style="margin-bottom:8px; width:100%;" onclick="connectWallet('metamask')">MetaMask / Web3 (ETH/BNB)</button>
        <button class="btn-custom" style="margin-bottom:8px; width:100%;" onclick="connectWallet('trustwallet')">Trust Wallet</button>
        <button class="btn-custom" style="margin-bottom:12px; width:100%;" onclick="connectWallet('solana')">Solana Phantom Wallet</button>
        <button class="btn-custom" style="background:rgba(255,255,255,0.05); width:100%;" onclick="closeUniversalWalletModal()">Cancel</button>
      </div>
    </div>

    <!-- Deposit Modal -->
    <div class="modal" id="depositModal">
      <div class="modal-card">
        <h3 style="font-family:'Orbitron'; color:var(--gold-accent); margin-bottom:10px; font-size:14px;">Deposit with 0.5% Fee</h3>
        <p style="font-size:11px; color:var(--text-sub); margin-bottom:10px;">পরিমাণ লিখুন ($ USD):</p>
        <input type="number" id="depositInput" class="modal-input" placeholder="500">
        <div style="display:flex; gap:8px;">
          <button class="btn-custom" style="flex:1;" onclick="confirmDeposit()">Confirm Deposit</button>
          <button class="btn-custom" style="flex:1; background:rgba(255,255,255,0.05);" onclick="closeDepositModal()">Cancel</button>
        </div>
      </div>
    </div>

    <!-- Withdraw Modal -->
    <div class="modal" id="withdrawModal">
      <div class="modal-card">
        <h3 style="font-family:'Orbitron'; color:#28a745; margin-bottom:10px; font-size:14px;">Withdraw with 1% Fee</h3>
        <p style="font-size:11px; color:var(--text-sub); margin-bottom:10px;">উইথড্র করার পরিমাণ ($ USD):</p>
        <input type="number" id="withdrawInput" class="modal-input" placeholder="100">
        <div style="display:flex; gap:8px;">
          <button class="btn-custom btn-withdraw" style="flex:1;" onclick="confirmWithdraw()">Confirm</button>
          <button class="btn-custom" style="flex:1; background:rgba(255,255,255,0.05);" onclick="closeWithdrawModal()">Cancel</button>
        </div>
      </div>
    </div>

    <!-- Secret Vault Modal -->
    <div class="modal" id="secretModal">
      <div class="modal-card">
        <h3 style="font-family:'Orbitron'; color:#fca5a5; margin-bottom:10px; font-size:14px;">Company Revenue & Tax Vault</h3>
        <p style="font-size:11px; color:var(--text-sub); margin-bottom:10px;">অ্যাডমিন সিক্রেট কোড দিন (420MN420):</p>
        <input type="password" id="secretInput" class="modal-input" placeholder="420MN420">
        <div style="display:flex; gap:8px;">
          <button class="btn-custom" style="flex:1;" onclick="unlockGodMode()">View Revenue</button>
          <button class="btn-custom" style="flex:1; background:rgba(255,255,255,0.05);" onclick="closeSecretModal()">Close</button>
        </div>
      </div>
    </div>

  </div>

  <script>
    let userBalance = 0.00; 
    let companyTaxVault = 0.00; 
    let aiRobotStatus = "Active (Multi-Chain & Auto Fee Deduction)";

    function openUniversalWalletModal() {
      document.getElementById('universalWalletModal').style.display = 'flex';
    }
    function closeUniversalWalletModal() {
      document.getElementById('universalWalletModal').style.display = 'none';
    }

    async function connectWallet(type) {
      closeUniversalWalletModal();
      
      if (type === 'bitcoin') {
        document.getElementById('nodeStatus').innerText = "Node: Bitcoin Connected";
        document.getElementById('blockchainCode').innerText = "Asset: BTC / Native Chain";
        userBalance = 250.00; // বিটকয়েন ওয়ালেট থেকে আসা ডেমো ব্যালেন্স
        updateBalance();
        alert("সফলভাবে বিটকয়েন ওয়ালেট কানেক্ট হয়েছে এবং ইউএসডিতে কনভার트 হয়েছে!");
        return;
      }

      if (type === 'solana') {
        document.getElementById('nodeStatus').innerText = "Node: Solana Phantom Connected";
        document.getElementById('blockchainCode').innerText = "Asset: SOL / SPL Token";
        userBalance = 120.00;
        updateBalance();
        alert("সফলভাবে সোলানা ওয়ালেট কানেক্ট হয়েছে!");
        return;
      }

      // MetaMask বা Trust Wallet (Web3 EVM Chain)
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();

          document.getElementById('nodeStatus').innerText = "Node: Web3 EVM Connected";
          document.getElementById('blockchainCode').innerText = "Wallet: " + address.substring(0, 6) + "...";
          
          let balanceWei = await provider.getBalance(address);
          let balanceEth = ethers.utils.formatEther(balanceWei);
          userBalance = parseFloat(balanceEth * 3000); // ETH/BNB to USD conversion
          updateBalance();
          
          alert("সফলভাবে ইভিএম ক্রিপ্টো ওয়ালেট কানেক্ট হয়েছে!");
        } catch (error) {
          console.error(error);
          alert("ওয়ালেট কানেকশন বাতিল করা হয়েছে।");
        }
      } else {
        alert("দয়া করে ক্রিপ্টো ব্রাউজার বা মেটামাস্ক অ্যাপ ব্যবহার করুন!");
      }
    }

    function updateBalance() {
      document.getElementById('userBalance').innerText = `$${userBalance.toFixed(2)} USD`;
    }

    function openDepositModal() {
      document.getElementById('depositModal').style.display = 'flex';
    }
    function closeDepositModal() {
      document.getElementById('depositModal').style.display = 'none';
    }
    function confirmDeposit() {
      let amt = parseFloat(document.getElementById('depositInput').value);
      if (!isNaN(amt) && amt > 0) {
        let fee = amt * 0.005; // ০.৫% ডিপোজিট ফি
        companyTaxVault += fee;
        let netAmount = amt - fee;
        userBalance += netAmount;
        updateBalance();
        alert(`সফল! ০.৫% ফি ($${fee.toFixed(2)}) কেটে নেওয়ার পর বাকী টাকা ওয়ালেটে যোগ হয়েছে।`);
        closeDepositModal();
      } else {
        alert("সঠিক পরিমাণ লিখুন।");
      }
    }

    function openWithdrawModal() {
      document.getElementById('withdrawModal').style.display = 'flex';
    }
    function closeWithdrawModal() {
      document.getElementById('withdrawModal').style.display = 'none';
    }
    function confirmWithdraw() {
      let amt = parseFloat(document.getElementById('withdrawInput').value);
      if (!isNaN(amt) && amt > 0) {
        if (amt <= userBalance) {
          let fee = amt * 0.01; // ১% উইথড্র ফি
          companyTaxVault += fee;
          let netWithdraw = amt - fee;
          userBalance -= amt;
          updateBalance();
          alert(`সফল! ১% ব্লকচেইন ফি ($${fee.toFixed(2)}) কেটে রেখে $${netWithdraw.toFixed(2)} আপনার এক্সটার্নাল ওয়ালেটে পাঠানো হয়েছে।`);
          closeWithdrawModal();
        } else {
          alert("অপর্যাপ্ত ব্যালেন্স!");
        }
      } else {
        alert("সঠিক পরিমাণ লিখুন।");
      }
    }

    function openSecretModal() {
      document.getElementById('secretModal').style.display = 'flex';
    }
    function closeSecretModal() {
      document.getElementById('secretModal').style.display = 'none';
    }
    function unlockGodMode() {
      if (document.getElementById('secretInput').value === "420MN420") {
        alert(`অ্যাডমিন ভল্ট আনলকড!\n\n🏢 কোম্পানি ফি ও ট্যাক্স কালেকশন: $${companyTaxVault.toFixed(2)} USD\n🤖 সিস্টেম স্ট্যাটাস: ${aiRobotStatus}`);
        closeSecretModal();
      } else {
        alert("ভুল পাসওয়ার্ড!");
        closeSecretModal();
      }
    }

    function loadFeature(id) {
      let title = document.getElementById('boxTitle');
      let desc = document.getElementById('boxDesc');

      const featuresData = {
        1: ["1. HOME DASHBOARD", "বিটকয়েন, ইথেরিয়াম, সোলানাসহ সকল কারেন্সি এবং ওয়ালেট কানেক্ট করার সুবিধা চালু রয়েছে। আদান-প্রদানে ০.১% থেকে ১% ফি স্বয়ংক্রিয়ভাবে কাটা হয়।"],
        2: ["2. P2P ESCROW MARKET", "নিরাপদে ক্রিপ্টো কেনাবেচার পিটুপি মার্কেট। প্রতিটি ট্রেড থেকে ১.৫% ফি কাটা হয়。<br><button class='btn-custom' style='margin-top:8px;' onclick='p2pTrade()'>Create P2P Ad ($50)</button>"],
        3: ["3. TEEN PATTI & CARD ROOM", "ক্লাসিক তিন পাত্তি ও পোকার গেম রুম।<br><button class='btn-custom' style='margin-top:8px;' onclick='playTeenPatti()'>Play Teen Patti ($10)</button>"],
        4: ["4. WEB3 CASINO & GAMING", "৭% হাউস এজ যুক্ত ক্যাসিনো ও ডাইস গেম রুম।<br><button class='btn-custom' style='margin-top:8px;' onclick='playGame()'>Play Casino ($10)</button>"],
        5: ["5. TOURNAMENTS (FREE FIRE & PUBG)", "গেম টুর্নামেন্ট রুম।<br><button class='btn-custom' style='margin-top:8px;' onclick='joinTournament()'>Join PUBG Room ($5)</button>"],
        6: ["6. LUDO KING MULTIPLAYER", "লুডু কিং স্টাইলের অনলাইন মাল্টিপ্লেয়ার ম্যাচ।<br><button class='btn-custom' style='margin-top:8px;' onclick='playLudo()'>Start Ludo Match ($5)</button>"],
        7: ["7. MEME COINS AUTO-FEED", "বিটকয়েন, পেপ ও অন্যান্য মিমে কয়েন লাইভ মার্কেট ফিড।"],
        8: ["8. SHORTS VIDEO STREAMING", "ভিডিও ফিড স্ক্রিন।<br><button class='btn-custom' style='margin-top:8px;' onclick='alert(\"Liked! Reward +$0.01 added.\"); userBalance+=0.01; updateBalance();'>Watch Next Short</button>"],
        9: ["9. DECENTRALIZED WALLET", "মাল্টি-চেইন নন-কাস্টোডিয়াল ওয়ালেট ব্যালেন্স: <b>$" + userBalance.toFixed(2) + " USD</b>"],
        10: ["10. BLOCKCHAIN NODE ID", "আপনার নোড এবং জিরো-নলেজ ভেরিফিকেশন প্যানেল।"],
        11: ["11. NFT & MINI-APP LAUNCHPAD", "টোকেন ও থার্ড-পার্টি মিনি-অ্যাপ লঞ্চপ্যাড।"],
        12: ["12. FITNESS-TO-EARN", "হাঁটাচলা ও ফিটনেস ট্র্যাক করে রিওয়ার্ড অর্জন।"],
        13: ["13. LUCKY SPIN WHEEL", "ফ্রি হুইল স্পিন করে রিওয়ার্ড জেতার সুযোগ!<br><button class='btn-custom' style='margin-top:8px;' onclick='spinWheel()'>Spin Wheel</button>"],
        14: ["14. AI ROBOT & RNG ENGINE", "এআই রোবট এবং ব্লকচেইন র‍্যান্ডম নাম্বার জেনারেটর ইঞ্জিন।"],
        15: ["15. FUTURES TRADING", "হাই-লেভারেজ ক্রিপ্টো ফিউচার ট্রেডিং টার্মিনাল।"],
        16: ["16. SECURE VAULT", "ফাইল এবং ব্যাকআপ কি সুরক্ষিত রাখার এনক্রিটেড ক্লাউড ভল্ট।"],
        17: ["17. WEB3 DAPP BROWSER", "বিকেন্দ্রীকৃত অ্যাপ ব্রাউজার ইঞ্জিন।"],
        18: ["18. CRYPTO DEBIT CARD", "ভার্চুয়াল ও ফিজিক্যাল ক্রিপ্টো পেমেন্ট কার্ড।"],
        19: ["19. ANTI-PHISHING SHIELD", "অ্যাকাউন্ট সুরক্ষার এআই গার্ড।"],
        20: ["20. STAKING & EARNINGS", "প্রুফ-অফ-স্টেক এর মাধ্যমে প্যাসিভ ইনকাম প্যানেল।"],
        21: ["21. AIRDROP HUNTER", "ক্রিপ্টো এয়ারড্রপ এবং টোকেন ক্লেইম করার অপশন।"],
        22: ["22. AI CHAT SUPPORT", "২৪/৭ লাইভ হেল্প এবং এআই চ্যাটবট।"],
        23: ["23. NFT STUDIO", "এনএফটি ডিজাইন ও মিন্ট করার স্টুডিও।"],
        24: ["24. ADVANCED SETTINGS", "সিকিউরিটি পিন এবং সেটিংস প্যানেল।"],
        25: ["25. ORACLE AI PREDICTOR", "ক্রিপ্টো প্রাইস প্রেডিকশন এআই অ্যানালিসিস টুল।"]
      };

      if (featuresData[id]) {
        title.innerText = featuresData[id][0];
        desc.innerHTML = featuresData[id][1];
      }
    }

    function playGame() {
      if (userBalance >= 10) {
        userBalance -= 10;
        companyTaxVault += 0.70;
        let win = Math.random() > 0.6;
        if (win) { userBalance += 20; alert("অভিনন্দন! আপনি ক্যাসিনো গেমে জিতেছেন +$20.00 USD!"); }
        else { alert("দুঃখিত, আপনি হেরে গেছেন।"); }
        updateBalance();
      } else { alert("অপর্যাপ্ত ব্যালেন্স!"); }
    }

    function playTeenPatti() {
      if (userBalance >= 10) {
        userBalance -= 10;
        companyTaxVault += 0.50;
        let win = Math.random() > 0.55;
        if (win) { userBalance += 18; alert("তিন পাত্তি রাউন্ডে আপনি জয়ী হয়েছেন!"); }
        else { alert("তিন পাত্তি রাউন্ডে হেরে গেছেন!"); }
        updateBalance();
      } else { alert("অপর্যাপ্ত ব্যালেন্স!"); }
    }

    function joinTournament() {
      if (userBalance >= 5) {
        userBalance -= 5;
        companyTaxVault += 0.25;
        alert("টুর্নামেন্ট রুমে সফলভাবে জয়েন করেছেন!");
        updateBalance();
      } else { alert("অপর্যাপ্ত ব্যালেন্স!"); }
    }

    function playLudo() {
      if (userBalance >= 5) {
        userBalance -= 5;
        companyTaxVault += 0.20;
        let win = Math.random() > 0.5;
        if(win) { userBalance += 9; alert("লুডু ম্যাচে আপনি প্রথম হয়েছেন!"); }
        else { alert("লুডু ম্যাচে হেরে গেছেন।"); }
        updateBalance();
      } else { alert("অপর্যাপ্ত ব্যালেন্স!"); }
    }

    function p2pTrade() {
      if(userBalance >= 50) {
        userBalance -= 50;
        companyTaxVault += 0.75;
        alert("P2P এসক্রো অ্যাড সফলভাবে পোস্ট হয়েছে।");
        updateBalance();
      } else { alert("অপর্যাপ্ত ব্যালেন্স!"); }
    }

    function spinWheel() {
      let winAmt = [0, 2, 5, 10][Math.floor(Math.random() * 4)];
      userBalance += winAmt;
      updateBalance();
      alert(`স্পিন সম্পন্ন! আপনি জিতেছেন: $${winAmt}.00 USD`);
    }
  </script>
</body>
</html>
