const { tauntList } = require('../config.json');

module.exports = {
  name: 'list',
  description: 'Lists all taunts',
  list: tauntList,

  async execute(msg) {
    for(taunt in this.list){
      console.log(`${taunt} -> ${this.list[taunt].name}`);
    };
    
    // msg.channel.send({embed: {
    //   color: 3447003,
    //   description: 
    // }});
  }
}