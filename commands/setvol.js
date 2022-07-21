const { clientId } = require('../config/bot.json');

module.exports = {
    name: 'setvol',
    description: '🔉 Cambiar el volumen',
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

        if(args.join('').length == 0) {
            return message.reply('❌ Debes definir en que volumen deseas poner la música (1 al 100)');
        }

        var vol = args[0];
        if(isNaN(vol)) {
            return message.reply('❌ Volumen no válido, debe ser un número (1 al 100)');
        }

        if(vol > 100) { vol = 100; }
        if(vol < 1) { vol = 1; }

        client.distube.setVolume( message.guild.id, Number(vol) );
        return message.reply(`🔉 Has cambiado el volumen a ${vol}%`);
    }
};
