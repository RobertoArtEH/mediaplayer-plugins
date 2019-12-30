class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  togglePlay() {
    this.media.paused ? this.play() : this.pause();
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  toggleMute() {
    this.media.muted = !this.media.muted;
  }

  mute() {
    this.media.muted = true;
  }
}

export default MediaPlayer;
