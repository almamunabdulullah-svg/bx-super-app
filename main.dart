import 'package:flutter/material.dart';

void main() {
runApp(const BXSuperApp());
}

class BXSuperApp extends StatelessWidget {
const BXSuperApp({super.key});

@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'BX Super-App',
theme: ThemeData.dark().copyWith(
scaffoldBackgroundColor: const Color(0xFF0B0E14),
primaryColor: const Color(0xFF00E5FF),
),
home: const MainDashboard(),
debugShowCheckedModeBanner: false,
);
}
}

class MainDashboard extends StatefulWidget {
const MainDashboard({super.key});

@override
State<MainDashboard> createState() => _MainDashboardState();
}

class _MainDashboardState extends State<MainDashboard> {
int _currentIndex = 0;
bool isFinanceMode = true;

// BNB Mainnet Contract Address Integrated
final String contractAddress = "0x30Ad271CcBA208215E80b607eFBd389486c9CF6A";

final List<Widget> _pages = [
const PremiumHomeScreen(),
const MarketScreen(),
const GamingHubScreen(),
const SocialFeedScreen(),
const WalletVaultScreen(),
 ];

@override
Widget build(BuildContext context) {
return Scaffold(
body: _pages[_currentIndex],
bottomNavigationBar: BottomNavigationBar(
currentIndex: _currentIndex,
backgroundColor: const Color(0xFF12161F),
selectedItemColor: const Color(0xFF00E5FF),
unselectedItemColor: Colors.grey,
type: BottomNavigationBarType.fixed,
onTap: (index) {
setState(() {
_currentIndex = index;
});
},
items: const [
BottomNavigationBarItem(icon: Icon(Icons.home_filled), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.query_stats), label: 'Market'),
BottomNavigationBarItem(icon: Icon(Icons.sports_esports), label: 'BX Play'),
BottomNavigationBarItem(icon: Icon(Icons.video_collection_rounded), label: 'Social'),
BottomNavigationBarItem(icon: Icon(Icons.account_balance_wallet_rounded), label: 'Wallet'),
 ],
),
);
}
}

// --- Premium Glassmorphism Home Screen ---
class PremiumHomeScreen extends StatefulWidget {
const PremiumHomeScreen({super.key});

@override
State<PremiumHomeScreen> createState() => _PremiumHomeScreenState();
}

class _PremiumHomeScreenState extends State<PremiumHomeScreen> {
double totalUSD = 0.00;
double totalBDT = 0.00;

void simulateDeposit() {
setState(() {
totalUSD += 50.00;
totalBDT += 5800.00;
});
}

@override
Widget build(BuildContext context) {
return SafeArea(
child: SingleChildScrollView(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Expanded(
child: Container(
padding: const EdgeInsets.all(12),
decoration: BoxDecoration(
color: const Color(0xFF181D28),
borderRadius: BorderRadius.circular(16),
border: Border.all(color: Colors.white12),
),
child: const Row(
children: [
CircleAvatar(
radius: 22,
backgroundColor: Color(0xFF00E5FF),
child: Icon(Icons.person, color: Colors.black),
),
SizedBox(width: 10),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('BX User', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
Text('ID: #8420MN', style: TextStyle(color: Colors.grey, fontSize: 11)),
 ],
),
],
),
),
),
const SizedBox(width: 12),
Expanded(
child: Container(
padding: const EdgeInsets.all(12),
decoration: BoxDecoration(
color: const Color(0xFF181D28),
borderRadius: BorderRadius.circular(16),
border: Border.all(color: const Color(0xFF00E5FF).withOpacity(0.3)),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('${totalUSD.toStringAsFixed(2)} USD', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF00E5FF))), Text('${totalBDT.toStringAsFixed(2)} BDT',
style: const TextStyle(fontSize: 12, color: Colors.grey)),
const SizedBox(height: 8),
Row(
children: [
_miniBtn('P2P', simulateDeposit),
const SizedBox(width: 6),
_miniBtn('Wallet', simulateDeposit),
 ],
)
],
),
),
),
],
),
const SizedBox(height: 20),

Container(
padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
decoration: BoxDecoration(
color: const Color(0xFF181D28),
borderRadius: BorderRadius.circular(10),
),
child: const Row(
children: [
Icon(Icons.local_fire_department, color: Colors.amber, size: 18),
SizedBox(width: 8),
Expanded(
child: Text(
'Live: User Alex_99 won 15,000 BDT in Casino!',
style: TextStyle(color: Colors.amberAccent, fontSize: 12),
overflow: TextOverflow.ellipsis,
),
),
 ],
),
),
const SizedBox(height: 20),

const Text('Super-App Hub (Mainnet Linked)', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white70)),
const SizedBox(height: 12),
GridView.count(
crossAxisCount: 4,
shrinkWrap: true,
physics: const NeverScrollableScrollPhysics(),
crossAxisSpacing: 10,
mainAxisSpacing: 10,
children: [
_featureIcon(Icons.swap_horiz, 'Swap', () {
// Swap action
}),
_featureIcon(Icons.sports_esports, 'Games', () {
// Navigate to Games or trigger action
}),
_featureIcon(Icons.video_library, 'SocialFi', () {
// SocialFi action
}),
_featureIcon(Icons.account_balance, 'Banking', () {
// Banking action
}),
_featureIcon(Icons.security, 'Master Vault', () {}),
_featureIcon(Icons.trending_up, 'Stalking', () {}),
_featureIcon(Icons.card_giftcard, 'NFT Market', () {}),
_featureIcon(Icons.bolt, 'AI Manager', () {}),
 ],
),
],
),
),
);
}

Widget _miniBtn(String label, VoidCallback onTap) {
return InkWell(
onTap: onTap,
child: Container(
padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: const Color(0xFF00E5FF).withOpacity(0.2),
borderRadius: BorderRadius.circular(6),
),
child: Text(label, style: const TextStyle(fontSize: 10, color: Color(0xFF00E5FF), fontWeight: FontWeight.bold)),
),
);
}

Widget _featureIcon(IconData icon, String label, VoidCallback onTap) {
return InkWell(
onTap: onTap,
borderRadius: BorderRadius.circular(14),
child: Container(
decoration: BoxDecoration(
color: const Color(0xFF181D28),
borderRadius: BorderRadius.circular(14),
border: Border.all(color: Colors.white10),
),
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(icon, color: const Color(0xFF00E5FF), size: 24),
const SizedBox(height: 6),
Text(label, style: const TextStyle(fontSize: 11, color: Colors.white70)),
 ],
),
),
);
}
}

class MarketScreen extends StatelessWidget {
const MarketScreen({super.key});
@override
Widget build(BuildContext context) => const Center(child: Text('Market & Trading Hub', style: TextStyle(color: Colors.white70)));
}

class GamingHubScreen extends StatelessWidget {
const GamingHubScreen({super.key});
@override
Widget build(BuildContext context) => const Center(child: Text('BX Play & Casino Hub', style: TextStyle(color: Colors.white70)));
}

class SocialFeedScreen extends StatelessWidget {
const SocialFeedScreen({super.key});
@override
Widget build(BuildContext context) => const Center(child: Text('SocialFi Video Hub', style: TextStyle(color: Colors.white70)));
}

class WalletVaultScreen extends StatelessWidget {
const WalletVaultScreen({super.key});
@override
Widget build(BuildContext context) => const Center(child: Text('Master Vault & Banking', style: TextStyle(color: Colors.white70)));
}
