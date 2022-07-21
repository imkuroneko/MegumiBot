const { clientId } = require('../config/bot.json');

module.exports = {
    name: 'skip',
    description: '⏭ Pasar a la siguiente música',
    execute(client, message, args) {

        const userId = message.member.user.id;
        const interact_user = message.guild.members.cache.get(userId);
        const bot_channel = message.guild.members.cache.get(clientId);

        if(!interact_user.voice.channel) {
            return message.reply('🔇 Debes estar en un canal de voz para poder utilizar este comando...');
        };

        if(bot_channel.voice.channel && (interact_user.voice.channel != bot_channel.voice.channel)) {
            return message.reply('🚨 Solo puedes utilizar este comando si te encuentras en el mismo canal de voz que yo...');
        }

        client.distube.skip( message.guild.id );
        return message.reply(`⏭ Has cambiado a la siguiente música!`);
    }
};
