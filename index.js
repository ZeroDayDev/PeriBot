const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const port = 3000;
const config = require("./config.json");
var msgContent;

const init = new Discord.MessageEmbed()
  .setTitle ("₊`⚡`๑╴__Slayers Team__﹒ꔫ")
  .setColor (0xFFC71A)
  .setDescription ("**__Shop, Community & Más__**\n\n**__Verificate__**\nReacciona a ' ✅ ' para __Desbloquear__ todo el contenido del servidor.");

const autoroles1 = new Discord.MessageEmbed()
  .setTitle ("**__Autoroles__** *!*")
  .setColor(0xFFC71A)
  .setDescription ("__Notificaciones__\n\n﹕🔔꒱・Enterate cada cuando realizamos un anuncio\n﹕📈꒱・Te notificamos cada actualización hecha\n ﹕🌙꒱・Recibe anuncios y/o actualizaciones de nuestro bot oficial\n﹕🍥꒱・Te mostramos nuestras alianzas\n﹕💫꒱・Enterate cuando Perii's sube una nueva publicación en sus redes sociales");

const autoroles2 = new Discord.MessageEmbed()
  .setTitle ("**__Autoroles__** *!*")
  .setColor(0xFFC71A)
  .setDescription ("__Género__\n﹕🚺꒱・Mujer\n﹕🚹꒱・Hombre\n\n__Edades__\n﹕👦꒱・12 - 16\n﹕🧑꒱・17 - 21\n﹕👨꒱・22+");

const autoroles3 = new Discord.MessageEmbed()
  .setTitle ("**__Autoroles__** *!*")
  .setColor(0xFFC71A)
  .setDescription ("__Otros__\n\n﹕🉐꒱・Desbloquea un contenido exclusivo Otaku\n﹕🎨꒱・Califiquemos tus diseños\n﹕💣꒱・Revivamos el chat");

const rules = new Discord.MessageEmbed()
  .setTitle ("**__⌗ ୨ :star: Reglas de la Comunidad__** *!*")
  .setColor (0xFFC71A)
  .setDescription ("    ╭₊˚ʚ:crescent_moon:ɞ・Respeto Mutuo\n    ﹕₊˚ʚ:zap:ɞ・Flood Moderado\n    ﹕₊˚ʚ:raised_hand:ɞ・No pedir roles \n    ﹕₊˚ʚ:telephone:ɞ・No menciones innecesarias\n    ╰₊˚ʚ:rotating_light:ɞ・No NSFW ni Gore\n\n__Términos de Discord__\n\n    **https://discord.com/guidelines**\n    **https://discord.com/privacy**\n    **https://discord.com/terms**");

const owner = new Discord.MessageEmbed()
.setTitle ("Este es el creador: https://twitter.com/BlazingShotGT")
.setColor (0xFFC71A)
.setImage ("https://pbs.twimg.com/profile_images/1374061599351312388/BG4gGZLW_400x400.jpg");

app.get("/", function (request, response) {
response.sendFile(__dirname + "/Pagina.html");});

app.listen(port, () => console.log("Iniciado"));

client.on("ready", () => {
console.log(`Iniciado Como: ${client.user.tag}!`);

client.user.setUsername("Zenitsuu")
client.user.setPresence( {  
activity: {name: "*help",
type: "PLAYING"},
status:"online"});})

//Codigos propios del bot
client.on("message", (message) => {

msgContent = message.content;

if (!msgContent.startsWith("*")) return; 
if (message.author.bot) return;

switch(msgContent.toLowerCase())
{
  case "*init":
  message.reply({ embed: init });
  break;

  case "*autoroles1":
  message.reply({ embed: autoroles1 });
  break;

  case "*autoroles2":
  message.reply({ embed: autoroles2 });
  break;

  case "*autoroles3":
  message.reply({ embed: autoroles3 });
  break;

  case "*rules":
  message.reply({ embed: rules });
  break;

  case "*owner":
  message.reply("aqui lo solicitado.", { embed: owner });
  break;

  case "*invite":
  message.reply("uneme a tu servidor con este link: https://discord.com/oauth2/authorize?client_id=861309044294549514&scope=bot&permissions=8");
  break;
}})

client.login(config.token);