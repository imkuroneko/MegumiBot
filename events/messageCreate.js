const { prefix } = require('../config/bot.json');

module.exports = {
    name: 'messageCreate',
    async execute(message) {

        // 🚨 Ignore bots
        if(message.author.bot) { return; }

        // 🥞 Split content
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        // 🔍 Search command
        const cmd = message.client.commands.get(command);

        if(!cmd) { return; }

        cmd.execute(message.client, message, args);

    }
}