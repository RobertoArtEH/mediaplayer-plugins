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

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}