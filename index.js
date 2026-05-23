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
   IMAGES
========================= */
const BANNER =
  "https://cdn.discordapp.com/attachments/1504463263872712924/1507723264141692968/1000016350-ezremove.gif?ex=6a12f036&is=6a119eb6&hm=751c3665f5dc87b082a5eb77fab204385963005079233755f92770713835501c&";

const THUMBNAIL =
  "https://cdn.discordapp.com/attachments/1504463263872712924/1507723134168600706/1000016387-ezremove.gif?ex=6a12f017&is=6a119e97&hm=63b632930132afd31b0604d72f37c6f90cfe6e294bb7be7336379d846b8ac9a6&";

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
      .setColor(0x8600FF)
      .setTitle("💰 Eternal SMP Payment Methods")
      .setDescription(
        "<a:17584arrow:1507427264978092202> **Bkash 1 (Personal → Personal):** 01741644334\n\n" +
        "<a:17584arrow:1507427264978092202> **Bkash 2 (Agent / Personal → Personal):** 01768166414\n\n" +
        "<a:17584arrow:1507427264978092202> Send screenshot in support ticket after payment!"
      )
      .setThumbnail(THUMBNAIL)
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
      .setColor(0x8600FF)
      .setTitle("<a:Book:1475350165744517152> Eternal SMP — Official Server Rules")
      .setDescription(`
# <a:Book:1475350165744517152> Eternal SMP — Official Server Rules

━━━━━━━━━━━━━━

## <a:Chatping:1402590347615277066> **1. Chat Rules**
> <a:arrowe:1250703758837420076> Keep the chat clean, friendly, and respectful. Toxicity, harassment, hate speech, discrimination, excessive swearing, spam, or inappropriate behavior is strictly prohibited.

━━━━━━━━━━━━━━

## <a:CT_IntenseGaming:779870920478294017> **2. Fair Gameplay**
> <a:arrowe:1250703758837420076> Using cheats, hacks, x-ray, auto-clickers, exploits, dupes, modified clients, or any unfair advantages is not allowed. Play fairly and respect the survival experience.

━━━━━━━━━━━━━━

## <a:no:1470429071199567935> **3. Banned Farms & Lag Machines**
> <a:arrowe:1250703758837420076> Do not build farms, redstone machines, chunk loaders, or structures that may cause excessive lag or harm server performance. Staff may remove lag-causing builds without warning.

━━━━━━━━━━━━━━

## <a:TheBeeHive_Announcement:1469252818685661277> **4. Proper Channel Usage**
> <a:arrowe:1250703758837420076> Use channels correctly and avoid unnecessary spam, advertising, or disruptive behavior. Keep conversations meaningful and respectful.

━━━━━━━━━━━━━━

## <a:no:1470429071199567935> **5. No Begging**
> <a:arrowe:1250703758837420076> Do not beg for ranks, items, money, permissions, staff roles, or special treatment from staff or players.

━━━━━━━━━━━━━━

## <a:6_shield:1475608748604260552> **6. Follow Discord Guidelines**
> <a:arrowe:1250703758837420076> All members must follow the official Discord Community Guidelines and Terms of Service at all times.

━━━━━━━━━━━━━━

## <a:CT_PinRave:770405346614837249> **7. Voice Chat Rules**
> <a:arrowe:1250703758837420076> Keep VC conversations friendly and appropriate. Mic spam, earrape, excessive background noise, harassment, or disturbing others is not allowed.

━━━━━━━━━━━━━━

## <a:MoneySoaring:1473205673616740405> **8. No Real Money Trading**
> <a:arrowe:1250703758837420076> Trading in-game items, accounts, or services for real money outside the official server store is strictly prohibited.

━━━━━━━━━━━━━━

## <a:shop:1469252824083857522> **9. Store & Rank Purchase Policy**
> <a:arrowe:1250703758837420076> All purchases made through the official server store are final.
> <a:arrowe:1250703758837420076> Purchased ranks, kits, or items will be delivered after successful payment verification.
> <a:arrowe:1250703758837420076> Sharing or abusing paid perks may result in punishment or removal of perks.
> <a:arrowe:1250703758837420076> Chargebacks or fraudulent payments will result in a permanent blacklist from the server and store.

━━━━━━━━━━━━━━

## <a:Warning:1453791617474363553> **10. Refund Policy**
> <a:arrowe:1250703758837420076> No refunds will be given after ranks, items, or perks are delivered.
> <a:arrowe:1250703758837420076> Accidental purchases are the buyer’s responsibility.
> <a:arrowe:1250703758837420076> Breaking server rules after purchasing does NOT make you eligible for a refund.
> <a:arrowe:1250703758837420076> If you experience delivery issues, contact staff with valid proof.

━━━━━━━━━━━━━━

## <a:TheBeeHive_Announcement:1469252818685661277> **11. Punishment System**
> <a:arrowe:1250703758837420076> Warning
> <a:arrowe:1250703758837420076> Mute
> <a:arrowe:1250703758837420076> Kick
> <a:arrowe:1250703758837420076> Temporary Ban
> <a:arrowe:1250703758837420076> Permanent Ban

> <a:arrowe:1250703758837420076> Severe violations such as hacking, duping, scamming, or chargebacks may result in immediate permanent punishment without warning.

━━━━━━━━━━━━━━

## <:CT_20123Demoji:775453144071012402> **12. Use Common Sense**
> <a:arrowe:1250703758837420076> Not every situation can be covered by rules. Use common sense and respect staff decisions to help maintain a positive and fair community.

━━━━━━━━━━━━━━

# 🌟 Welcome to Eternal SMP 🌟
`)
      .setThumbnail(THUMBNAIL)
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
      .setColor(0x8600FF)
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━
<a:Book:1475350165744517152> Eternal SMP • Store Terms
━━━━━━━━━━━━━━━━━━━━━━

<a:17584arrow:1507427264978092202> Purchasing any Rank, Package, Crate, or Digital Item from the Eternal SMP Store means you agree to all terms and conditions listed below.

━━━━━━━━━━━━━━━━━━━━━━
<a:Warning:1453791617474363553> Legal Disclaimer
━━━━━━━━━━━━━━━━━━━━━━

<a:17584arrow:1507427264978092202> Eternal SMP is an independent Minecraft community and is not affiliated with, endorsed by, or associated with Mojang Studios, Microsoft, or Minecraft.

<a:17584arrow:1507427264978092202> All purchases are voluntary contributions made to support the server, community, and future development.

━━━━━━━━━━━━━━━━━━━━━━
<a:MoneySoaring:1473205673616740405> Payments & Purchases
━━━━━━━━━━━━━━━━━━━━━━

<a:17584arrow:1507427264978092202> Digital Products
All ranks, packages, perks, crates, and items are digital content delivered in-game. No physical products will be shipped.

<a:17584arrow:1507427264978092202> Server Support
Payments help fund server hosting, protection, maintenance, development, updates, performance improvements, and community events.

<a:17584arrow:1507427264978092202> No Refund Policy
All purchases are final and non-refundable once payment has been successfully completed and rewards are delivered.

<a:17584arrow:1507427264978092202> Fraud & Chargebacks
Any chargeback, payment dispute, or fraudulent transaction may result in permanent suspension from Eternal SMP, including loss of all purchased items and store access.

━━━━━━━━━━━━━━━━━━━━━━
<a:5_crown:1413836583588724816> Ranks & Perks
━━━━━━━━━━━━━━━━━━━━━━

<a:17584arrow:1507427264978092202> Rank Duration
Ranks may be permanent, seasonal, or subscription-based depending on the product description in the store.

<a:17584arrow:1507427264978092202> Perk Balancing
To maintain fair gameplay and server balance, rank perks, commands, or bonuses may be adjusted, modified, or removed at any time without prior notice.

<a:17584arrow:1507427264978092202> Rule Violations
Breaking server or Discord rules may result in warnings, suspensions, permanent bans, or removal of purchased perks without refund.

━━━━━━━━━━━━━━━━━━━━━━
<a:Online:1470429103906623498> Server Availability
━━━━━━━━━━━━━━━━━━━━━━

<a:17584arrow:1507427264978092202> Maintenance & Downtime
The server may occasionally experience downtime due to maintenance, updates, technical issues, or unexpected outages. Downtime does not qualify for refunds or compensation.

<a:17584arrow:1507427264978092202> Server Changes
Eternal SMP reserves the right to modify gameplay systems, economy features, ranks, plugins, worlds, or server mechanics at any time to improve the community experience.

━━━━━━━━━━━━━━━━━━━━━━
<a:Warning:1453791617474363553> Account Responsibility
━━━━━━━━━━━━━━━━━━━━━━

<a:17584arrow:1507427264978092202> Players are fully responsible for the security and ownership of their Minecraft and Discord accounts.

<a:17584arrow:1507427264978092202> Eternal SMP is not responsible for lost, stolen, hacked, or shared accounts.

━━━━━━━━━━━━━━━━━━━━━━
<a:Warning:1453791617474363553> Item Loss Policy
━━━━━━━━━━━━━━━━━━━━━━

<a:17584arrow:1507427264978092202> Some items, kits, or rewards may be limited or non-renewable.

<a:17584arrow:1507427264978092202> Lost items caused by death, PvP, clearing inventories, glitches, or player mistakes will generally not be restored unless approved by staff under exceptional circumstances.

━━━━━━━━━━━━━━━━━━━━━━
<a:VERIFY:1225445546584703107> Agreement
━━━━━━━━━━━━━━━━━━━━━━

<a:17584arrow:1507427264978092202> By completing a purchase from the Eternal SMP Store, you confirm that you have read, understood, and accepted all Store Terms and Server Rules.

━━━━━━━━━━━━━━━━━━━━━━
<a:CT_Fire:789365596797927464> Thank You for Supporting Eternal SMP
Your support helps keep the server alive, balanced, and growing for the entire community. <a:VERIFY:1225445546584703107>
━━━━━━━━━━━━━━━━━━━━━━
`)
      .setThumbnail(THUMBNAIL)
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
      .setColor(0x8600FF)
      .setTitle("🔥 ETERNAL SMP • Rank List")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔥 KNIGHT – 120৳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 In-game Money: 500K  
🏠 6 SetHomes  
🛡️ Armor & Tools (Vanilla Without Enchants)  
📦 8 Shulker  
🍎 90 Golden Apple + 12 Enchanted Golden Apple  
🐔 2 Spawner / 4 Crate-Keys (Only One)  

⚡ Commands  
/back /ptime /near /hat  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🐉 HYDRA – 220৳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 750K Money  
🏠 8 SetHomes  
🛡️ Armor & Tools (Vanilla Max Enchants)  
📦 10 Shulker  
🍎 120 Golden Apple + 24 Enchanted Golden Apple  
🐔 4 Spawner / 6 Crate-Keys (Only One) 

⚡ KNIGHT Commands + 
/workbench /echest /feed /nick  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👑 EMPEROR – 320৳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 1M Money  
🏠 10 SetHomes  
⚔️ Vanilla Mace ×1 
🛡️ Custom Gear (Limited)
📦 12 Shulker  
🍎 256 Golden Apple + 36 Enchanted Golden Apple  
🐔 6 Spawner / 8 Crate-Keys (Only One) 

⚡ HYDRA Commands +  
/disposal /smithingtable /loom  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔥 PHOENIX – 420৳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 1.5M Money  
🏠 12 SetHomes  
🕊️ Elytra ×1  
⚔️ Max Mace  
🛡️ Full max-custom gear
📦 15 Shulker  
🍎 320 Golden Apple + 48 Enchanted Golden Apple  
🐔 8 Spawner / 10 Crate-Keys (Only One) 

⚡ EMPEROR Commands +  
/heal /ext /night /anvil  
      `)
      .setThumbnail(THUMBNAIL)
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
      .setColor(0x8600FF)
      .setTitle("<a:Book:1475350165744517152> ETERNAL SMP • Spawner Shop")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━

<a:Tiny_Chicken:1478433280012582983> BASIC SPAWNERS – 20৳ (Per Piece)

<a:17584arrow:1507427264978092202> Pig
<a:17584arrow:1507427264978092202> Cow
<a:17584arrow:1507427264978092202> Chicken
<a:17584arrow:1507427264978092202> Sheep

━━━━━━━━━━━━━━━━━━━━━━

<a:CT_Fire:789365596797927464> COMBAT SPAWNERS – 30৳ (Per Piece)

<a:17584arrow:1507427264978092202> Zombie
<a:17584arrow:1507427264978092202> Spider
<a:17584arrow:1507427264978092202> Skeleton
<a:17584arrow:1507427264978092202> Guardian

━━━━━━━━━━━━━━━━━━━━━━

<a:dancing_enderman:1148327924374712440> ADVANCED SPAWNERS – 40৳ (Per Piece)

<a:17584arrow:1507427264978092202> Enderman
<a:17584arrow:1507427264978092202> Slime
<a:17584arrow:1507427264978092202> Magma Cube
<a:17584arrow:1507427264978092202> Creeper
<a:17584arrow:1507427264978092202> Blaze
<a:17584arrow:1507427264978092202> Zombified Piglin (Gold Farming)

━━━━━━━━━━━━━━━━━━━━━━

<a:2381_Little_Pretty_Star_Yellow:1473219354614169664> SPECIAL SPAWNERS – 50৳ (Per Piece)

<a:17584arrow:1507427264978092202> Iron Golem (Iron Farming)
<a:17584arrow:1507427264978092202> Ghast (Ghast Tears & Gunpowder)
<a:17584arrow:1507427264978092202> Breeze (Breeze Rod)
<a:17584arrow:1507427264978092202> Wither Skeleton (Wither Skulls & Coal)
<a:17584arrow:1507427264978092202> Shulker

━━━━━━━━━━━━━━━━━━━━━━

<a:3485cancel:1475738883072458834> Balance Notice

<a:Arrow:1275397936284438588> High-tier spawners are limited and may be adjusted for server balance.

━━━━━━━━━━━━━━━━━━━━━━

<a:note:1250703764973813760> Note:

<a:Arrow:1275397936284438588> Spawner list & prices may change anytime for balance
<a:Arrow:1275397936284438588> Some spawners may be limited

━━━━━━━━━━━━━━━━━━━━━━

<:1439257281647743136:1472629449840398479> How to Buy:

<a:Arrow:1275397936284438588> Open a ticket in the support channel
<a:Arrow:1275397936284438588> Tell staff which spawner you want
`)
      .setThumbnail(THUMBNAIL)
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
