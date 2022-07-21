### 🎶 MegumiMusicBot

```
Pequeño bot de música basado en distube para uso personal
```


### 📚 Librerías Utilizadas
```
• @discordjs/opus
• @discordjs/voice
• @distube/soundcloud
• @distube/spotify
• discord.js
• distube
• ffmpeg-static
• libsodium-wrappers
• opusscript
```

<br>

### 📋 Como Instalar
```js
npm install // instalar las dependencias
npm update  // actualizar las dependencias
```

<br>

### 🐧 Info adicional (Linux)
Si lo utilizarás en un VPS con linux, es **obligatorio** que installes el repositorio de `ffmpeg`, caso contrario no podrá reproducir las músicas
```
apt install ffmpeg
```

<br>

### 🔍 Info adicional (PM2)
Puedes modificar el archivo `ecosystem.config.js` para cambiar el nombre que aparecerá en pm2; para iniciar el bot, tan solo deberás utilizar el comando
```
pm2 start
```

<br>

### 🥓 Configuraciones
Los datos del bot (ID y Token) debes guardarlos en el archivo `config/bot.json`; allí podrás cambiár también el prefijo de los comandos

<br>

### 📋 Comandos
| Comando | Acción |
|:-------:|:------:|
|!mpause | Pausar la música actual |
|!mplay | Reproducir una música o agregarla a la cola |
|!mqueue | Lista de músicas |
|!mresume | Continuar reproduciendo la música actual |
|!msetvol | Cambiar el volumen |
|!mskip | Pasar a la siguiente música |
|!mstop | Detener la música |

<br>

### ❤️ Agradecimientos

- [discord.js](https://github.com/discordjs/discord.js) por la magnífica librería para poder armar bots
- [distubejs](https://github.com/distubejs) por una librería simple y genial para poder reproducir músicas de YouTube con facilidad



<p align="center">
  <img src="https://img.shields.io/github/repo-size/imkuroneko/MegumiMusicBot?style=flat"/> &nbsp;
  <img src="https://img.shields.io/github/languages/top/imkuroneko/MegumiMusicBot?style=flat"/> &nbsp;
  <img src="https://img.shields.io/github/last-commit/imkuroneko/MegumiMusicBot?color=pink&style=flat"/>
</p>

<p align="center">
  <a href="https://kuroneko.im" target="_blank">
    <img src="https://kuroneko.im/web_assets/favicon.png" width="120">
  </a>
</p>
