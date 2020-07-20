const {tauntList, prefix} = require('../config.json');
const fs = require('fs');

module.exports = {
  name: 'taunt',
  description: 'Sends an AoEII taunt',
  command: '-taunt',
  list: tauntList,

  async execute(msg) {
    const args = msg.content.slice(prefix.length).split(/ +/);  

    if(!msg.member.voice.channel){
      return msg.channel.send(
        'You must be in a Voice Channel first'
      );
    }
    
    const connection = await msg.member.voice.channel.join();

    try{
      const dispatcher = connection.play(fs.createReadStream(`public/taunts/${this.list[args[1]].path}`));
    }
    catch {
      msg.reply('Taunt not found!');
    }
  }
}
