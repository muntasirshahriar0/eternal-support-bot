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
  "https://cdn.discordapp.com/attachments/1504463263872712924/1505517613483163690/WhatsApp_Image_2026-05-15_at_3.28.39_PM.jpeg?ex=6a0ce44a&is=6a0b92ca&hm=f686c621d35c45f0475c4f85773bd4242301b883299f9fc57af6525d1cfc9206&";

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
      .setColor(0x9B59B6)
      .setTitle("📜 Eternal SMP — Official Server Rules")
      .setDescription(`
━━━━━━━━━━━━━━

💬 **1. Chat Rules**

Keep the chat clean, friendly, and respectful. Toxicity, harassment, hate speech, discrimination, excessive swearing, spam, or inappropriate behavior is strictly prohibited.

━━━━━━━━━━━━━━

🎮 **2. Fair Gameplay**

Using cheats, hacks, x-ray, auto-clickers, exploits, dupes, modified clients, or any unfair advantages is not allowed. Play fairly and respect the survival experience.

━━━━━━━━━━━━━━

🏡 **3. Community & Server Balance**

Help keep the server enjoyable for everyone. Griefing, trolling, stealing, trapping players, intentionally ruining builds, or disturbing the community is not allowed.

━━━━━━━━━━━━━━

🚫 **4. Banned Farms & Lag Machines**

Do not build farms, redstone machines, chunk loaders, or structures that may cause excessive lag or harm server performance. Staff may remove lag-causing builds without warning.

━━━━━━━━━━━━━━

📢 **5. Proper Channel Usage**

Use channels correctly and avoid unnecessary spam, advertising, or disruptive behavior. Keep conversations meaningful and respectful.

━━━━━━━━━━━━━━

🎖️ **6. No Begging**

Do not beg for ranks, items, money, permissions, staff roles, or special treatment from staff or players.

━━━━━━━━━━━━━━

🛡️ **7. Follow Discord Guidelines**

All members must follow the official Discord Community Guidelines and Terms of Service at all times.

━━━━━━━━━━━━━━

🎤 **8. Voice Chat Rules**

Keep VC conversations friendly and appropriate. Mic spam, earrape, excessive background noise, harassment, or disturbing others is not allowed.

━━━━━━━━━━━━━━

💸 **9. No Real Money Trading**

Trading in-game items, accounts, or services for real money outside the official server store is strictly prohibited.

━━━━━━━━━━━━━━

🛒 **10. Store & Rank Purchase Policy**

• All purchases made through the official server store are final.
• Purchased ranks, kits, or items will be delivered after successful payment verification.
• Sharing or abusing paid perks may result in punishment or removal of perks.
• Chargebacks or fraudulent payments will result in a permanent blacklist from the server and store.

━━━━━━━━━━━━━━

❌ **11. Refund Policy**

• No refunds will be given after ranks, items, or perks are delivered.
• Accidental purchases are the buyer’s responsibility.
• Breaking server rules after purchasing does NOT make you eligible for a refund.
• If you experience delivery issues, contact staff with valid proof.

━━━━━━━━━━━━━━

⚖️ **12. Punishment System**

Punishments depend on the severity of the rule broken:

• Warning
• Mute
• Kick
• Temporary Ban
• Permanent Ban

Severe violations such as hacking, duping, scamming, or chargebacks may result in immediate permanent punishment without warning.

━━━━━━━━━━━━━━

🧠 **13. Use Common Sense**

Not every situation can be covered by rules. Use common sense and respect staff decisions to help maintain a positive and fair community.

━━━━━━━━━━━━━━

🌟 Welcome to Eternal SMP — survive, build, and enjoy together! 🌟
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

    return message.channel.send({
      embeds: [embed]
    });
  }

});

/* =========================
   LOGIN
========================= */
client.login(process.env.DISCORD_TOKEN);
