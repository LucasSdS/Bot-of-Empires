module.exports = {
  name: "spam",
  description: "Toggles the Spam Mode",
  
  async execute(msg) {
    const spam = msg.client.spam.get(msg.guild.id);
    msg.reply(`Spam mode is now ${spam ? 'off' : 'on'}`);
    msg.client.spam.set(msg.guild.id, !spam);
  }
}