const { prefix } = require('../config/bot.json');

module.exports = {
    name: 'comandos',
    description: '📎 Lista de comandos',
    execute(client, message, args) {

        console.log(client.listaComandos);

        items = [];
        client.listaComandos.forEach(cmd => {
            if(cmd.name != 'comandos') { items.push({ name: `**${prefix}${cmd.name}**`, value: cmd.description }); }
        });

        const embed_content = [{
            color: 0xcc3366,
            title: '🎶 MegumiMusicBot 🌸',
            fields: items,
        }];

        return message.reply({ embeds: embed_content });
    }
};
