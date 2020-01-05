# mediaplayer-plugins

Plugins que dan funcionalidades al reproductor de vídeo.

## Plugins incluidos:

- AutoPause: Pausar el reproductor automáticamente al cambiar de pestaña o cuando el reproductor está fuera del viewport.
- AutoPlay: Reproducir el vídeo automáticamente pero silenciado.
- Ads: Mostar pequeño banner de publicidad en la parte inferior del vídeo.

## Instalacion

```
npm i mediaplayer-plugins
```

## Uso con TypeScript

```
import MediaPlayer from "mediaplayer-plugins";
import AutoPlay from "mediaplayer-plugins/lib/plugins/AutoPlay";
import AutoPause from "mediaplayer-plugins/lib/plugins/AutoPause";
import Ads from "mediaplayer-plugins/lib/plugins/Ads";

const video = document.querySelector("video");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

const playButton: HTMLElement = document.querySelector("#play");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#mute");
muteButton.onclick = () => player.toggleMute();
```

## Licencia

[MIT](https://opensource.org/licenses/MIT)