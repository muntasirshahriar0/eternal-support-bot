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
        "**<a:arrow:1507782135212150845> Bkash 1 (Personal → Personal):** 01741644334\n\n" +
        "**<a:arrow:1507782135212150845> Bkash 2 (Agent / Personal → Personal):** 01768166414\n\n" +
        "<:shop:1507752817400611027> Send screenshot in support ticket after payment!"
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
      .setTitle("<a:magic_book:1507790392945410299> Eternal SMP — Official Server Rules")
      .setDescription(`
# <a:magic_book:1507790392945410299> Eternal SMP — Official Server Rules

━━━━━━━━━━━━━━

## <a:chats:1507788455558512691> **1. Chat Rules**
<a:red_arrow:1507787736554410126> Keep the chat clean, friendly, and respectful. Toxicity, harassment, hate speech, discrimination, excessive swearing, spam, or inappropriate behavior is strictly prohibited.

━━━━━━━━━━━━━━

## <a:sweaty_gamer:1507788395714445515> **2. Fair Gameplay**
<a:red_arrow:1507787736554410126> Using cheats, hacks, x-ray, auto-clickers, exploits, dupes, modified clients, or any unfair advantages is not allowed. Play fairly and respect the survival experience.

━━━━━━━━━━━━━━

## <a:disclaimer_a:1507787788526026852> **3. Banned Farms & Lag Machines**
<a:red_arrow:1507787736554410126> Do not build farms, redstone machines, chunk loaders, or structures that may cause excessive lag or harm server performance. Staff may remove lag-causing builds without warning.

━━━━━━━━━━━━━━

## <a:announcement_a:1507790462210281482> **4. Proper Channel Usage**
<a:red_arrow:1507787736554410126> Use channels correctly and avoid unnecessary spam, advertising, or disruptive behavior. Keep conversations meaningful and respectful.

━━━━━━━━━━━━━━

## <a:disclaimer_a:1507787788526026852> **5. No Begging**
<a:red_arrow:1507787736554410126> Do not beg for ranks, items, money, permissions, staff roles, or special treatment from staff or players.

━━━━━━━━━━━━━━

## <a:disclaimer_a:1507787788526026852> **6. Follow Discord Guidelines**
<a:red_arrow:1507787736554410126> All members must follow the official Discord Community Guidelines and Terms of Service at all times.

━━━━━━━━━━━━━━

## <a:announcement_a:1507790462210281482> **7. Voice Chat Rules**
<a:red_arrow:1507787736554410126> Keep VC conversations friendly and appropriate. Mic spam, earrape, excessive background noise, harassment, or disturbing others is not allowed.

━━━━━━━━━━━━━━

## <a:moneyyyy:1507792459974054118> **8. No Real Money Trading**
<a:red_arrow:1507787736554410126> Trading in-game items, accounts, or services for real money outside the official server store is strictly prohibited.

━━━━━━━━━━━━━━

## <a:store_a:1507788568322375690> **9. Store & Rank Purchase Policy**
<a:red_arrow:1507787736554410126> All purchases made through the official server store are final.
<a:red_arrow:1507787736554410126> Purchased ranks, kits, or items will be delivered after successful payment verification.
<a:red_arrow:1507787736554410126> Sharing or abusing paid perks may result in punishment or removal of perks.
<a:red_arrow:1507787736554410126> Chargebacks or fraudulent payments will result in a permanent blacklist from the server and store.

━━━━━━━━━━━━━━

## <a:disclaimer_a:1507787788526026852> **10. Refund Policy**
<a:red_arrow:1507787736554410126> No refunds will be given after ranks, items, or perks are delivered.
<a:red_arrow:1507787736554410126> Accidental purchases are the buyer’s responsibility.
<a:red_arrow:1507787736554410126> Breaking server rules after purchasing does NOT make you eligible for a refund.
<a:red_arrow:1507787736554410126>  If you experience delivery issues, contact staff with valid proof.

━━━━━━━━━━━━━━

## <a:disclaimer_a:1507787788526026852> **11. Punishment System**
<a:red_arrow:1507787736554410126> Warning
<a:red_arrow:1507787736554410126> Mute
<a:red_arrow:1507787736554410126> Kick
<a:red_arrow:1507787736554410126> Temporary Ban
<a:red_arrow:1507787736554410126> Permanent Ban

<a:red_arrow:1507787736554410126> Severe violations such as hacking, duping, scamming, or chargebacks may result in immediate permanent punishment without warning.

━━━━━━━━━━━━━━

## <a:announcement_a:1507790462210281482> **12. Use Common Sense**
<a:red_arrow:1507787736554410126> Not every situation can be covered by rules. Use common sense and respect staff decisions to help maintain a positive and fair community.

━━━━━━━━━━━━━━

# **<a:twinkle_twinkle:1507788149030392000> Welcome to Eternal SMP <a:twinkle_twinkle:1507788149030392000>**
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
   .IGNRULES COMMAND
========================= */
if (msg === ".grules") {

  const embed = new EmbedBuilder()
    .setColor(0x8600FF)
    .setTitle("<a:disclaimer_a:1507787788526026852> Eternal SMP • In-Game Rules")
    .setDescription(` 
# **<a:disclaimer_a:1507787788526026852> Minecraft Server Rules**
━━━━━━━━━━━━━━━━━━━━━━━━

<a:red_arrow:1507787736554410126> No More Than 3 Accounts Per Player
<a:red_arrow:1507787736554410126> No Hacked Clients
<a:red_arrow:1507787736554410126> No Movement Mods
<a:red_arrow:1507787736554410126> No Inventory Mods
<a:red_arrow:1507787736554410126> No Health Indicators
<a:red_arrow:1507787736554410126> No Radar
<a:red_arrow:1507787736554410126> No Freecam
<a:red_arrow:1507787736554410126> No ESP
<a:red_arrow:1507787736554410126> No Auto Place / Easy Place
<a:red_arrow:1507787736554410126> No Macros or Scripts
<a:red_arrow:1507787736554410126> No Auto Clickers
<a:red_arrow:1507787736554410126> No Mouse Tweaks / Scrollers
<a:red_arrow:1507787736554410126> No Crafting Modifications
<a:red_arrow:1507787736554410126> No Bug Abuse
<a:red_arrow:1507787736554410126> No Attempted Duplication
<a:red_arrow:1507787736554410126> No Item Duplication
<a:red_arrow:1507787736554410126> No IRL Trading
<a:red_arrow:1507787736554410126> No External Gambling
<a:red_arrow:1507787736554410126> No Cross-Server Trading
<a:red_arrow:1507787736554410126> No Staff Impersonation
<a:red_arrow:1507787736554410126> No Finding or Using the Server Seed
<a:red_arrow:1507787736554410126> No Voice Chat Spam
<a:red_arrow:1507787736554410126> Report All Bugs, Glitches & Cheaters
<a:red_arrow:1507787736554410126> No Auto Totem


━━━━━━━━━━━━━━━━━━━━━━━━
# **<a:magic_book:1507790392945410299> Chat Rules**
━━━━━━━━━━━━━━━━━━━━━━━━

<a:red_arrow:1507787736554410126> No Spamming
<a:red_arrow:1507787736554410126> No Encouraging Others to Spam
<a:red_arrow:1507787736554410126> No Harassment
<a:red_arrow:1507787736554410126> No Discrimination or Hate Speech
<a:red_arrow:1507787736554410126> No Death Threats
<a:red_arrow:1507787736554410126> No Sharing Personal Information
<a:red_arrow:1507787736554410126> No Pretending to Be Staff
<a:red_arrow:1507787736554410126> No Ban Evasion
<a:red_arrow:1507787736554410126> Use Common Sense
`)
    .setImage(BANNER)
    .setFooter({
      text: "Eternal SMP In-Game Rules"
    })
    .setTimestamp();

  return message.channel.send({
    embeds: [embed]
  });
}

  /* =========================
   .PUNISHMENTS COMMAND
========================= */
if (msg === ".punishments") {

  const embed = new EmbedBuilder()
    .setColor(0x8600FF)
    .setTitle("⚖️ Eternal SMP • Punishment System")
    .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━━━
# **<a:announcement_a:1507790462210281482> Punishment System**
━━━━━━━━━━━━━━━━━━━━━━━━

<a:red_arrow:1507787736554410126> Most violations will result in a Warning first.

<a:red_arrow:1507787736554410126> Repeated violations may result in Mutes, Jail, Position Freeze, Inventory Clears, Temporary Bans, or Permanent Bans.

━━━━━━━━━━━━━━

<a:red_arrow:1507787736554410126> Chat Spam
Warning → Mute → Temporary Ban

<a:red_arrow:1507787736554410126> Harassment, Toxicity & Hate Speech
Warning → Mute → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Staff Impersonation
Warning → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Ban Evasion
Permanent Ban

<a:red_arrow:1507787736554410126> IRL Trading
Warning → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> External Gambling
Warning → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Cross-Server Trading
Warning → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Using More Than 3 Accounts
Warning → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Bug Abuse
Warning → Inventory Clear → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Attempted Duplication
Warning → Inventory Clear → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Item Duplication
Inventory Clear → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Auto Totem, Macros, Scripts & Auto Clickers
Warning → Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Hacked Clients, ESP, Freecam, Radar & Similar Cheats
Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Server Seed Finding or Usage
Temporary Ban → Permanent Ban

<a:red_arrow:1507787736554410126> Severe Exploits Affecting the Economy
Inventory Clear → Temporary Ban → Permanent Ban

━━━━━━━━━━━━━━━━━━━━━━━━
# **<a:disclaimer_a:1507787788526026852> Final Notice**
━━━━━━━━━━━━━━━━━━━━━━━━

<a:arrow:1507782135212150845> Staff may issue harsher punishments immediately for severe offenses.

<a:arrow:1507782135212150845> Punishments are based on evidence, severity, and previous violations.

<a:arrow:1507782135212150845> Use common sense and respect staff decisions. Staff decision will be considered as the final desicion.

━━━━━━━━━━━━━━
`)
    .setImage(BANNER)
    .setFooter({
      text: "Eternal SMP In-Game Rules"
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
**<:shoppie:1507809836421873725> Eternal SMP • Store Terms**
━━━━━━━━━━━━━━━━━━━━━━

<a:red_arrow:1507787736554410126> Purchasing any Rank, Package, Crate, or Digital Item from the Eternal SMP Store means you agree to all terms and conditions listed below.

━━━━━━━━━━━━━━━━━━━━━━
**<a:announcement_a:1507790462210281482> Legal Disclaimer**
━━━━━━━━━━━━━━━━━━━━━━

<a:red_arrow:1507787736554410126> Eternal SMP is an independent Minecraft community and is not affiliated with, endorsed by, or associated with Mojang Studios, Microsoft, or Minecraft.

<a:red_arrow:1507787736554410126> All purchases are voluntary contributions made to support the server, community, and future development.

━━━━━━━━━━━━━━━━━━━━━━
**<a:moneyyyy:1507792459974054118> Payments & Purchases**
━━━━━━━━━━━━━━━━━━━━━━

<a:arrow:1507782135212150845> Digital Products
All ranks, packages, perks, crates, and items are digital content delivered in-game. No physical products will be shipped.

<a:arrow:1507782135212150845> Server Support
Payments help fund server hosting, protection, maintenance, development, updates, performance improvements, and community events.

<a:arrow:1507782135212150845> No Refund Policy
All purchases are final and non-refundable once payment has been successfully completed and rewards are delivered.

<a:arrow:1507782135212150845> Fraud & Chargebacks
Any chargeback, payment dispute, or fraudulent transaction may result in permanent suspension from Eternal SMP, including loss of all purchased items and store access.

━━━━━━━━━━━━━━━━━━━━━━
**<a:crown_a:1507791684208033842> Ranks & Perks**
━━━━━━━━━━━━━━━━━━━━━━

<a:arrow:1507782135212150845> Rank Duration
Ranks may be permanent, seasonal, or subscription-based depending on the product description in the store.

<a:arrow:1507782135212150845> Perk Balancing
To maintain fair gameplay and server balance, rank perks, commands, or bonuses may be adjusted, modified, or removed at any time without prior notice.

<a:arrow:1507782135212150845> Rule Violations
Breaking server or Discord rules may result in warnings, suspensions, permanent bans, or removal of purchased perks without refund.

━━━━━━━━━━━━━━━━━━━━━━
**<a:online:1507791786943447173> Server Availability**
━━━━━━━━━━━━━━━━━━━━━━

<a:arrow:1507782135212150845> Maintenance & Downtime
The server may occasionally experience downtime due to maintenance, updates, technical issues, or unexpected outages. Downtime does not qualify for refunds or compensation.

<a:arrow:1507782135212150845> Server Changes
Eternal SMP reserves the right to modify gameplay systems, economy features, ranks, plugins, worlds, or server mechanics at any time to improve the community experience.

━━━━━━━━━━━━━━━━━━━━━━
**<a:disclaimer_a:1507787788526026852> Account Responsibility**
━━━━━━━━━━━━━━━━━━━━━━

<a:red_arrow:1507787736554410126> Players are fully responsible for the security and ownership of their Minecraft and Discord accounts.

<a:red_arrow:1507787736554410126> Eternal SMP is not responsible for lost, stolen, hacked, or shared accounts.

━━━━━━━━━━━━━━━━━━━━━━
**<a:disclaimer_a:1507787788526026852> Item Loss Policy**
━━━━━━━━━━━━━━━━━━━━━━

<a:red_arrow:1507787736554410126> Some items, kits, or rewards may be limited or non-renewable.

<a:red_arrow:1507787736554410126> Lost items caused by death, PvP, clearing inventories, glitches, or player mistakes will generally not be restored unless approved by staff under exceptional circumstances.

━━━━━━━━━━━━━━━━━━━━━━
**<:damn:1507752860643885076> Agreement**
━━━━━━━━━━━━━━━━━━━━━━

<a:red_arrow:1507787736554410126> By completing a purchase from the Eternal SMP Store, you confirm that you have read, understood, and accepted all Store Terms and Server Rules.

━━━━━━━━━━━━━━━━━━━━━━
**<a:fire_a0:1507790340067950794> Thank You for Supporting Eternal SMP
Your support helps keep the server alive, balanced, and growing for the entire community. <a:fire_a0:1507790340067950794>**
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
      .setColor(0x8600FF)
      .setTitle("<a:fire_a0:1507790340067950794> ETERNAL SMP • Rank List")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**<:shield_0:1507754792334790757> KNIGHT <:shield_0:1507754792334790757>** 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<a:moneyyyy:1507792459974054118>  In-game Money: 500K  
<a:red_arrow:1507787736554410126> 6 SetHomes  
<a:red_arrow:1507787736554410126> KNIGHT ARMOR (Vanilla Without Enchants) 
<a:red_arrow:1507787736554410126> KNIGHT TOOLS (Vanilla Without Enchants)
<a:red_arrow:1507787736554410126> 6 Shulker  
<a:red_arrow:1507787736554410126> 90 Golden Apple + 12 Enchanted Golden Apple  
<a:red_arrow:1507787736554410126> Limited Trims Collection
<a:red_arrow:1507787736554410126> 2 Spawner / 4 Crate-Keys (Only One)  

⚡ Commands  
/back /ptime /near /hat  

**<a:moneyyyy:1507792459974054118> PRICE – 120৳**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**<a:twinkle_twinkle:1507788149030392000> HYDRA <a:twinkle_twinkle:1507788149030392000>**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<a:moneyyyy:1507792459974054118>  In-game Money: 750K Money  
<a:red_arrow:1507787736554410126> 8 SetHomes  
<a:red_arrow:1507787736554410126> HYDRA ARMOR (Vanilla Max Enchants) 
<a:red_arrow:1507787736554410126> HYDRA TOOLS (Vanilla Max Enchants)  
<a:red_arrow:1507787736554410126> 10 Shulker  
<a:red_arrow:1507787736554410126> 120 Golden Apple + 24 Enchanted Golden Apple  
<a:red_arrow:1507787736554410126> Limited Trims Collection
<a:red_arrow:1507787736554410126> 4 Spawner / 6 Crate-Keys (Only One) 

⚡ KNIGHT Commands + 
/workbench /echest /feed /nick 

**<a:moneyyyy:1507792459974054118> PRICE – 220৳**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**<a:fire_a0:1507790340067950794> EMPEROR <a:fire_a0:1507790340067950794>**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<a:moneyyyy:1507792459974054118>  In-game Money: 1M Money  
<a:red_arrow:1507787736554410126> 10 SetHomes  
<a:red_arrow:1507787736554410126> Custom EMPEROR GEAR (Limited)
<a:red_arrow:1507787736554410126> EMPEROR MACE 
<a:red_arrow:1507787736554410126> 12 Shulker  
<a:red_arrow:1507787736554410126> 256 Golden Apple + 36 Enchanted Golden Apple
<a:red_arrow:1507787736554410126> Limited Trims Collection
<a:red_arrow:1507787736554410126> 6 Spawner / 8 Crate-Keys (Only One) 

⚡ HYDRA Commands +  
/disposal /smithingtable /loom /repair hand

**<a:moneyyyy:1507792459974054118> PRICE – 320৳**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**<a:symbol_eternity:1507813262756937871> PHOENIX <a:symbol_eternity:1507813262756937871>** 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<a:moneyyyy:1507792459974054118>  In-game Money: 1.5M Money  
<a:red_arrow:1507787736554410126> 12 SetHomes  
<a:red_arrow:1507787736554410126> Elytra ×1   
<a:red_arrow:1507787736554410126> Full max-custom gear
<a:red_arrow:1507787736554410126> ETERNAL SWORD (Custom Enchants)
<a:red_arrow:1507787736554410126> ETERNAL PICKAXE (Custom Enchants)
<a:red_arrow:1507787736554410126> ETERNAL MACE (Custom Enchants)
<a:red_arrow:1507787736554410126> ETERNAL SPEAR (Custom Enchants)
<a:red_arrow:1507787736554410126> 15 Shulker  
<a:red_arrow:1507787736554410126> 320 Golden Apple + 48 Enchanted Golden Apple  
<a:red_arrow:1507787736554410126> Limited Trims Collection
<a:red_arrow:1507787736554410126> 8 Spawner / 10 Crate-Keys (Only One) 

⚡ EMPEROR Commands +  
/heal /ext /night /anvil /repair all

**<a:moneyyyy:1507792459974054118> PRICE – 420৳**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**<a:booster:1507826062489424093> BOOSTER SPECIAL RANK <a:booster:1507826062489424093>** 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<a:moneyyyy:1507792459974054118>  In-game Money:  1.25M Money  
<a:red_arrow:1507787736554410126> 10 SetHomes   
<a:red_arrow:1507787736554410126> Custom BOOSTER ARMOR (Limited)
<a:red_arrow:1507787736554410126> BOOSTER MACE (Vanilla) 
<a:red_arrow:1507787736554410126> BOOSTER SWORD (Limited Custom Enchant)
<a:red_arrow:1507787736554410126> 10 Shulker  
<a:red_arrow:1507787736554410126> 200 Golden Apple + 30 Enchanted Golden Apple  
<a:red_arrow:1507787736554410126> 3 Spawner / 8 Crate-Keys (Only One) 

⚡ HYDRA Commands +  
/disposal /smithingtable /loom  /repair hand

**<a:moneyyyy:1507792459974054118> PRICE – 2 Server Boost**
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
      .setColor(0x8600FF)
      .setTitle("<a:magic_book:1507790392945410299> ETERNAL SMP • Spawner Shop")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━

**<a:chikku_a:1507790277853843676> BASIC SPAWNERS – 20৳ (Per Piece)**

<a:arrow:1507782135212150845> Pig
<a:arrow:1507782135212150845> Cow
<a:arrow:1507782135212150845> Chicken
<a:arrow:1507782135212150845> Sheep

━━━━━━━━━━━━━━━━━━━━━━

**<a:fire_a0:1507790340067950794> COMBAT SPAWNERS – 30৳ (Per Piece)**

<a:arrow:1507782135212150845> Zombie
<a:arrow:1507782135212150845> Spider
<a:arrow:1507782135212150845> Skeleton
<a:arrow:1507782135212150845> Guardian

━━━━━━━━━━━━━━━━━━━━━━

**<a:enderman_dance:1507790630984749299> ADVANCED SPAWNERS – 40৳ (Per Piece)**

<a:arrow:1507782135212150845> Enderman
<a:arrow:1507782135212150845> Slime
<a:arrow:1507782135212150845> Magma Cube
<a:arrow:1507782135212150845> Creeper
<a:arrow:1507782135212150845> Blaze
<a:arrow:1507782135212150845> Zombified Piglin (Gold Farming)

━━━━━━━━━━━━━━━━━━━━━━

**<a:twinkle_twinkle:1507788149030392000> SPECIAL SPAWNERS – 50৳ (Per Piece)**

<a:arrow:1507782135212150845> Iron Golem (Iron Farming)
<a:arrow:1507782135212150845> Ghast (Ghast Tears & Gunpowder)
<a:arrow:1507782135212150845> Breeze (Breeze Rod)
<a:arrow:1507782135212150845> Wither Skeleton (Wither Skulls & Coal)
<a:arrow:1507782135212150845> Shulker

━━━━━━━━━━━━━━━━━━━━━━

**<a:disclaimer_a:1507787788526026852> Balance Notice**

<a:red_arrow:1507787736554410126> High-tier spawners are limited and may be adjusted for server balance.

━━━━━━━━━━━━━━━━━━━━━━

**<a:note_a:1507787693990609007> Note:**

<a:red_arrow:1507787736554410126> Spawner list & prices may change anytime for balance
<a:red_arrow:1507787736554410126> Some spawners may be limited

━━━━━━━━━━━━━━━━━━━━━━

**<a:store_a:1507788568322375690> How to Buy:**

<a:red_arrow:1507787736554410126> Open a ticket in the support channel
<a:red_arrow:1507787736554410126> Tell staff which spawner you want
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
