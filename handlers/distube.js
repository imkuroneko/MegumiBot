const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } =  require('@distube/soundcloud');

module.exports = (client) => {
    client.distube = new DisTube(client, {
        emitNewSongOnly: false,
        leaveOnFinish: true,
        leaveOnStop: true,
        leaveOnEmpty: true,
        emptyCooldown: 40,
        emitAddSongWhenCreatingQueue: false,
        nsfw: false,
        ytdlOptions: {
            highWaterMark: 1024 * 1024 * 60,
            quality: 'highestaudio',
            format: 'audioonly',
            liveBuffer: 6000,
            dlChunkSize: 1024 * 1024 * 4
        },
        plugins: [
            new SpotifyPlugin({ parallel: true, emitEventsAfterFetching: true }),
            new SoundCloudPlugin()
        ]
    });

    client.distube.on('playSong', (queue, song) => {
        queue.textChannel.send(`**💿 Reproduciendo:**\n > Nombre: \`${song.name}\`\n> Duración: \`${song.formattedDuration}\`\n> Enlace: ${song.url}`);
    });

    client.distube.on('addSong', (queue, song) => {
        queue.textChannel.send(`**🙆🏻‍♀️ Agregado a la lista de reproducción:**\n > Nombre: \`${song.name}\`\n> Duración: \`${song.formattedDuration}\`\n> Enlace: ${song.url}`);
    });
}
