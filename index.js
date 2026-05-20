const {
  Client,
  GatewayIntentBits,
  EmbedBuilder
} = require("discord.js");

const express = require("express");

const app = express();

/* =========================
   KEEP RENDER ALIVE
========================= */
app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Web server running");
});

/* =========================
   BANNER
========================= */
const BANNER =
  "https://cdn.discordapp.com/attachments/1504463263872712924/1506664881494163586/IMG_20260520_202725.jpg?ex=6a0f1684&is=6a0dc504&hm=1139d198bfa82b602c38540e91c0b78c36f932a1d688b9b44596b41ef2a41eb5";

/* =========================
   DISCORD CLIENT
========================= */
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

/* =========================
   READY
========================= */
client.once("ready", () => {
  console.log(`${client.user.tag} is online!`);
});

/* =========================
   MESSAGE COMMANDS
========================= */
client.on("messageCreate", async (message) => {

  if (message.author.bot) return;

  const msg = message.content.toLowerCase().trim();

  /* =========================
     .PAY COMMAND
  ========================= */
  if (msg === ".pay") {

    const embed = new EmbedBuilder()
      .setColor(0x9B59B6)
      .setTitle("💰 Eternal SMP Payment Methods")
      .setDescription(
        "📱 **Bkash 1 (Personal → Personal):** 01741644334\n\n" +
        "📱 **Bkash 2 (Agent / Personal → Personal):** 01768166414\n\n" +
        "🛒 Send screenshot in support ticket after payment!"
      )
      .setImage(BANNER)
      .setFooter({
        text: "Eternal SMP Store"
      })
      .setTimestamp();

    return message.channel.send({
      embeds: [embed]
    });
  }

  /* =========================
     .RULES COMMAND
  ========================= */
  if (msg === ".rules") {

    const embed = new EmbedBuilder()
      .setColor(#8A2BE2)
      .setTitle("📜 Eternal SMP — Official Server Rules")
      .setDescription(`
# 📜 Eternal SMP — Official Server Rules

━━━━━━━━━━━━━━

## 💬 1. Chat Rules
> Keep the chat clean, friendly, and respectful. Toxicity, harassment, hate speech, discrimination, excessive swearing, spam, or inappropriate behavior is strictly prohibited.

━━━━━━━━━━━━━━

## 🎮 2. Fair Gameplay
> Using cheats, hacks, x-ray, auto-clickers, exploits, dupes, modified clients, or any unfair advantages is not allowed. Play fairly and respect the survival experience.

━━━━━━━━━━━━━━

## 🏡 3. Community & Server Balance
> Help keep the server enjoyable for everyone. Griefing, trolling, stealing, trapping players, intentionally ruining builds, or disturbing the community is not allowed.

━━━━━━━━━━━━━━

## 🚫 4. Banned Farms & Lag Machines
> Do not build farms, redstone machines, chunk loaders, or structures that may cause excessive lag or harm server performance. Staff may remove lag-causing builds without warning.

━━━━━━━━━━━━━━

## 📢 5. Proper Channel Usage
> Use channels correctly and avoid unnecessary spam, advertising, or disruptive behavior. Keep conversations meaningful and respectful.

━━━━━━━━━━━━━━

## 🎖️ 6. No Begging
> Do not beg for ranks, items, money, permissions, staff roles, or special treatment from staff or players.

━━━━━━━━━━━━━━

## 🛡️ 7. Follow Discord Guidelines
> All members must follow the official Discord Community Guidelines and Terms of Service at all times.

━━━━━━━━━━━━━━

## 🎤 8. Voice Chat Rules
> Keep VC conversations friendly and appropriate. Mic spam, earrape, excessive background noise, harassment, or disturbing others is not allowed.

━━━━━━━━━━━━━━

## 💸 9. No Real Money Trading
> Trading in-game items, accounts, or services for real money outside the official server store is strictly prohibited.

━━━━━━━━━━━━━━

## 🛒 10. Store & Rank Purchase Policy
> • All purchases made through the official server store are final.
> • Purchased ranks, kits, or items will be delivered after successful payment verification.
> • Sharing or abusing paid perks may result in punishment or removal of perks.
> • Chargebacks or fraudulent payments will result in a permanent blacklist from the server and store.

━━━━━━━━━━━━━━

## ❌ 11. Refund Policy
> • No refunds will be given after ranks, items, or perks are delivered.
> • Accidental purchases are the buyer’s responsibility.
> • Breaking server rules after purchasing does NOT make you eligible for a refund.
> • If you experience delivery issues, contact staff with valid proof.

━━━━━━━━━━━━━━

## ⚖️ 12. Punishment System
> • Warning
> • Mute
> • Kick
> • Temporary Ban
> • Permanent Ban

> Severe violations such as hacking, duping, scamming, or chargebacks may result in immediate permanent punishment without warning.

━━━━━━━━━━━━━━

## 🧠 13. Use Common Sense
> Not every situation can be covered by rules. Use common sense and respect staff decisions to help maintain a positive and fair community.

━━━━━━━━━━━━━━

# 🌟 Welcome to Eternal SMP 🌟
`)
      .setImage(BANNER)
      .setFooter({
        text: "Eternal SMP Rules"
      })
      .setTimestamp();

    return message.channel.send({
      embeds: [embed]
    });
  }

  /* =========================
     .TAC COMMAND
  ========================= */
  if (msg === ".tac") {

    const embed = new EmbedBuilder()
      .setColor(0x9B59B6)
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━
🛒 Eternal SMP • Store Terms
━━━━━━━━━━━━━━━━━━━━━━

Purchasing any Rank, Package, Crate, or Digital Item from the Eternal SMP Store means you agree to all terms and conditions listed below.

━━━━━━━━━━━━━━━━━━━━━━
⚖ Legal Disclaimer
━━━━━━━━━━━━━━━━━━━━━━

Eternal SMP is an independent Minecraft community and is not affiliated with, endorsed by, or associated with Mojang Studios, Microsoft, or Minecraft.

All purchases are voluntary contributions made to support the server, community, and future development.

━━━━━━━━━━━━━━━━━━━━━━
💳 Payments & Purchases
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ Digital Products
All ranks, packages, perks, crates, and items are digital content delivered in-game. No physical products will be shipped.

2️⃣ Server Support
Payments help fund server hosting, protection, maintenance, development, updates, performance improvements, and community events.

3️⃣ No Refund Policy
All purchases are final and non-refundable once payment has been successfully completed and rewards are delivered.

4️⃣ Fraud & Chargebacks
Any chargeback, payment dispute, or fraudulent transaction may result in permanent suspension from Eternal SMP, including loss of all purchased items and store access.

━━━━━━━━━━━━━━━━━━━━━━
🎖 Ranks & Perks
━━━━━━━━━━━━━━━━━━━━━━

5️⃣ Rank Duration
Ranks may be permanent, seasonal, or subscription-based depending on the product description in the store.

6️⃣ Perk Balancing
To maintain fair gameplay and server balance, rank perks, commands, or bonuses may be adjusted, modified, or removed at any time without prior notice.

7️⃣ Rule Violations
Breaking server or Discord rules may result in warnings, suspensions, permanent bans, or removal of purchased perks without refund.

━━━━━━━━━━━━━━━━━━━━━━
🖥 Server Availability
━━━━━━━━━━━━━━━━━━━━━━

8️⃣ Maintenance & Downtime
The server may occasionally experience downtime due to maintenance, updates, technical issues, or unexpected outages. Downtime does not qualify for refunds or compensation.

9️⃣ Server Changes
Eternal SMP reserves the right to modify gameplay systems, economy features, ranks, plugins, worlds, or server mechanics at any time to improve the community experience.

━━━━━━━━━━━━━━━━━━━━━━
🔒 Account Responsibility
━━━━━━━━━━━━━━━━━━━━━━

Players are fully responsible for the security and ownership of their Minecraft and Discord accounts.

Eternal SMP is not responsible for lost, stolen, hacked, or shared accounts.

━━━━━━━━━━━━━━━━━━━━━━
⚠ Item Loss Policy
━━━━━━━━━━━━━━━━━━━━━━

Some items, kits, or rewards may be limited or non-renewable.

Lost items caused by death, PvP, clearing inventories, glitches, or player mistakes will generally not be restored unless approved by staff under exceptional circumstances.

━━━━━━━━━━━━━━━━━━━━━━
✅ Agreement
━━━━━━━━━━━━━━━━━━━━━━

By completing a purchase from the Eternal SMP Store, you confirm that you have read, understood, and accepted all Store Terms and Server Rules.

━━━━━━━━━━━━━━━━━━━━━━
🔥 Thank You for Supporting Eternal SMP
Your support helps keep the server alive, balanced, and growing for the entire community.
━━━━━━━━━━━━━━━━━━━━━━
`)
      .setImage(BANNER)
      .setFooter({
        text: "Eternal SMP Store Terms"
      })
      .setTimestamp();

    return message.channel.send({ embeds: [embed] });
  }

  /* =========================
     .RANK COMMAND
  ========================= */
  if (msg === ".rank") {

    const embed = new EmbedBuilder()
      .setColor(0x9B59B6)
      .setTitle("🔥 ETERNAL SMP • Rank List")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔥 INFERNO – 120৳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 In-game Money: 500K  
🏠 6 SetHomes  
🛡️ Max Armor & Tools (Vanilla Without Enchants)  
📦 8 Shulker  
🍎 90 Golden Apple + 12 Enchanted Golden Apple  
🐔 2 Spawner (Basic×1 & Combat×1)  

⚡ Commands  
/back /ptime /near /hat  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🐉 HYDRA – 240৳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 750K Money  
🏠 8 SetHomes  
🛡️ Max Armor & Tools (Vanilla Max Enchants)  
📦 10 Shulker  
🍎 120 Golden Apple + 24 Enchanted Golden Apple  
🐔 4 Spawner  

⚡ Commands  
/workbench /echest /feed /nick  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👑 EMPEROR – 320৳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 1M Money  
🏠 10 SetHomes  
⚔️ Vanilla Mace ×1  
📦 12 Shulker  
🍎 256 Golden Apple + 36 Enchanted Golden Apple  
🐔 6 Spawner  

⚡ Commands  
/disposal /smithingtable /loom  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔥 PHOENIX – 420৳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 1.5M Money  
🏠 12 SetHomes  
🕊️ Elytra ×1  
⚔️ Max Mace  
📦 15 Shulker  
🍎 320 Golden Apple + 48 Enchanted Golden Apple  
🐔 8 Spawner  

⚡ Commands  
/heal /ext /night /anvil  
      `)
      .setImage(BANNER)
      .setFooter({ text: "Eternal SMP Rank System" })
      .setTimestamp();

    return message.channel.send({ embeds: [embed] });
  }
  
  /* =========================
  .SPAWNER COMMAND
  ========================= */
  if (msg === ".spawner") {

    const embed = new EmbedBuilder()
      .setColor(0x9B59B6)
      .setTitle("🛒 ETERNAL SMP • Spawner Shop")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━

🐷 BASIC SPAWNERS – 20৳ (Per Piece)

🐖 Pig
🐄 Cow
🐔 Chicken
🐑 Sheep

━━━━━━━━━━━━━━━━━━━━━━

⚔️ COMBAT SPAWNERS – 30৳ (Per Piece)

🧟 Zombie
🕷️ Spider
💀 Skeleton
🌊 Guardian

━━━━━━━━━━━━━━━━━━━━━━

🔥 ADVANCED SPAWNERS – 40৳ (Per Piece)

👁️ Enderman
🟢 Slime
🌋 Magma Cube
💣 Creeper
🔥 Blaze
🐷⚔️ Zombified Piglin (Gold Farming)

━━━━━━━━━━━━━━━━━━━━━━

✨ SPECIAL SPAWNERS – 50৳ (Per Piece)

🤖 Iron Golem (Iron Farming)
👻 Ghast (Ghast Tears & Gunpowder)
🌪️ Breeze (Breeze Rod)
💀🔥 Wither Skeleton (Wither Skulls & Coal)
📦 Shulker

━━━━━━━━━━━━━━━━━━━━━━

⚠️ Balance Notice

High-tier spawners are limited and may be adjusted for server balance.

━━━━━━━━━━━━━━━━━━━━━━

📝 Note:

• Spawner list & prices may change anytime for balance
• Some spawners may be limited

━━━━━━━━━━━━━━━━━━━━━━

🛍️ How to Buy:

• Open a ticket in the support channel
• Tell staff which spawner you want
`)
      .setImage(BANNER)
      .setFooter({
        text: "Eternal SMP Spawner Shop"
      })
      .setTimestamp();

    return message.channel.send({
      embeds: [embed]
    });
  }

}); 

/* =========================
   LOGIN
========================= */
client.login(process.env.DISCORD_TOKEN);

/* =========================
   LOGIN
========================= */
client.login(process.env.DISCORD_TOKEN);
