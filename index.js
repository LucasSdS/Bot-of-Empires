const Discord = require('discord.js');
const fs = require('fs');

const { prefix, tauntList } = require('./config.json');

require('dotenv').config();

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.spam = new Map();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', async msg => {
  if (msg.author.bot) return;
  
  if(client.spam.get(msg.guild.id) && tauntList.hasOwnProperty(msg.content)) {
    const command = client.commands.get('taunt');
    command.execute(msg);
    return;
  }

  if (!msg.content.startsWith(prefix)) return;
  
  const args = msg.content.slice(prefix.length).split(/ +/);  
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);

  try {
    command.execute(msg);
  }
  catch {
    msg.reply('Command not found!');
  }
});

client.login(process.env.DISCORD_TOKEN);