const { clientId } = require('../config/bot.json');

module.exports = {
    name: 'play',
    description: '▶ Reproducir una música o agregarla a la cola',
    async execute(client, message, args) {

        const param = args.join(" ");

        if(!param.length) {
            return message.reply('😾 Debes decirme que música deseas escuchar senpai!');
        }

        const userId = message.member.user.id;
        const interact_user = message.guild.members.cache.get(userId);
        const bot_channel = message.guild.members.cache.get(clientId);

        if(!interact_user.voice.channel) {
            return message.reply('🔇 Debes estar en un canal de voz para poder utilizar este comando...');
        };

        const voiceChannel = interact_user.voice.channel;
        const permissions = voiceChannel.permissionsFor(client.user);
        if(!permissions.has('CONNECT')) { return message.reply('🚪 No tengo permiso para unirme a ese canal...'); }
        if(!permissions.has('SPEAK')) { return message.reply('🎙 No tengo permiso para reproducir la música...'); }

        if(bot_channel.voice.channel && (interact_user.voice.channel != bot_channel.voice.channel)) {
            return message.reply('🚨 Solo puedes agregar músicas si estás en el mismo canal de voz que yo...');
        }

        client.distube.play( voiceChannel, param, {
            member: message.member,
            textChannel: message.channel,
            message
        });

        message.reply('🎶 Buscando música para agregarlo a la lista de reproducción...');
    }
};