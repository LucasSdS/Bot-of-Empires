const {tauntList, prefix} = require('../config.json');
const fs = require('fs');

module.exports = {
  name: 'taunt',
  description: 'Sends an AoEII taunt',
  command: '-taunt',
  list: tauntList,

  async execute(msg) {
    const args = msg.content.includes(prefix) ? 
      msg.content.slice(prefix.length).split(/ +/) :  
      msg.content.split(" ");
    const tauntNumber = args.length > 1 ? args[1] : args[0];  

    if(!msg.member.voice.channel){
      return msg.channel.send(
        'You must be in a Voice Channel!'
      );
    }
    
    const connection = await msg.member.voice.channel.join();

    try{
      const dispatcher = connection.play(fs.createReadStream(`public/taunts/${this.list[tauntNumber].path}`));
    }
    catch {
      msg.reply('Taunt not found!');
    }
  }
}
