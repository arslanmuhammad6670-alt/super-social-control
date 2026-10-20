WORLD TV APP — files aur tareeqa
================================

YEH FILES HAIN:
- index.html    → poori app (design + channels wala system)
- manifest.json → mobile install ki maloomat (naam, icon)
- sw.js         → app ko tez aur offline-ready rakhne wali file
- icon-192.png / icon-512.png → app ka icon

APP KAISE BANTI HAI (asaan lafzon mein):
1. App asal mein ek website hoti hai — index.html mein sab kuch hota hai.
2. Channels kisi server par rakhe nahi hote. App internet se free channels
   ki list (iptv-org ka public data) leti hai aur channel tap karne par
   usi broadcaster ki free stream chala deti hai jo wo khud internet par
   sab ke liye deta hai.
3. In files ko internet par lagana "hosting" kehlata hai. Yeh app
   Cloudflare par lagi hai — files upload karne se ek link ban jata hai.
4. Mobile par woh link Chrome mein kholo → menu (3 dots) → "Install app"
   ya "Add to Home screen" — app mobile mein install ho jati hai,
   home screen par icon aa jata hai.

SETTINGS WALI BAAT:
- 18+ category default BAND hai. Settings mein "Allow 18+ Channels"
  ON karne se hi nazar aati hai.
- Sach: bare free sources (iptv-org waghera) ne 18+ channels ki free
  streams taqreeban khatam kar di hain, is liye 18+ list abhi aksar
  khaali mile gi. Jab koi working free stream dobara ayegi, channel
  khud list mein aa jaye ga.

FAVORITES:
- Kisi channel ke sath ☆ dabane se wo ⭐ Favorites mein save ho jata hai
  (mobile ke andar hi save hota hai).
