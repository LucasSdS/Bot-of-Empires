const { tauntList } = require('../config.json');
const Discord = require('discord.js')
const image = new Discord.MessageAttachment('public/imgs/teutknight.png');

module.exports = {
  name: 'list',
  description: 'Lists all taunts',
  list: tauntList,

  async execute(msg) {
    let text = '';
    for(taunt in this.list){
      text += `${taunt} - ${this.list[taunt].name} \n`;
    };
    
    msg.channel.send({files: [image], embed: {
      title: "List of Taunts",
      thumbnail: {
        "url": "attachment://teutknight.png"
      },
      color: 19105,
      description: `\`\`\`${text}\`\`\``
    }});
  }
}