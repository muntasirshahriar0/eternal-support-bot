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
Keep the chat clean, friendly, and respectful.

━━━━━━━━━━━━━━

🎮 **2. Fair Gameplay**
No cheats, hacks, x-ray, exploits, or unfair advantages.

━━━━━━━━━━━━━━

🏡 **3. Community & Server Balance**
No griefing, stealing, trapping, or ruining builds.

━━━━━━━━━━━━━━

🚫 **4. Banned Farms & Lag Machines**
No lag machines or harmful redstone builds.

━━━━━━━━━━━━━━

📢 **5. Proper Channel Usage**
Use channels correctly and avoid spam.

━━━━━━━━━━━━━━

🎖️ **6. No Begging**
Do not beg for ranks, items, or staff roles.

━━━━━━━━━━━━━━

🛡️ **7. Follow Discord Guidelines**
All members must follow Discord ToS.

━━━━━━━━━━━━━━

🎤 **8. Voice Chat Rules**
No mic spam, earrape, or harassment.

━━━━━━━━━━━━━━

💸 **9. No Real Money Trading**
No IRL trading outside official store.

━━━━━━━━━━━━━━

🛒 **10. Store Policy**
All purchases are final.

━━━━━━━━━━━━━━

❌ **11. Refund Policy**
No refunds after delivery.

━━━━━━━━━━━━━━

⚖️ **12. Punishments**
Warning → Mute → Kick → Ban

━━━━━━━━━━━━━━

🧠 **13. Use Common Sense**
Respect staff and community.

━━━━━━━━━━━━━━

🌟 Welcome to Eternal SMP 🌟
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
      .setTitle("🛒 Eternal SMP • Store Terms")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━

Purchasing any Rank, Package, Crate, or Digital Item from the Eternal SMP Store means you agree to all terms and conditions listed below.

━━━━━━━━━━━━━━━━━━━━━━

⚖ **Legal Disclaimer**
Eternal SMP is not affiliated with Mojang or Microsoft.

━━━━━━━━━━━━━━━━━━━━━━

💳 **Payments & Purchases**
• Digital products only  
• Supports server development  
• No refunds  
• Chargebacks may result in blacklist

━━━━━━━━━━━━━━━━━━━━━━

🎖 **Ranks & Perks**
• Ranks may change depending on product  
• Perks can be balanced anytime  
• Rule violations may remove perks

━━━━━━━━━━━━━━━━━━━━━━

🖥 **Server Availability**
• Downtime may occur  
• Server systems may change anytime

━━━━━━━━━━━━━━━━━━━━━━

🔒 **Account Responsibility**
Players are responsible for account security.

━━━━━━━━━━━━━━━━━━━━━━

⚠ **Item Loss Policy**
Lost items may not be restored.

━━━━━━━━━━━━━━━━━━━━━━

✅ **Agreement**
Purchasing means you accept all terms and rules.

━━━━━━━━━━━━━━━━━━━━━━

🔥 Thank You for Supporting Eternal SMP
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
