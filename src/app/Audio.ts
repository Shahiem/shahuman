export default class Audio {
    audio: HTMLElement;
    audioSource: HTMLAudioElement;

    constructor() {
        this.audioSource = document.getElementsByTagName('audio')[0] as HTMLAudioElement;
        this.audio = document.getElementById('audio') as HTMLElement; 

        this._createMouseEvents();
    }

    private _createMouseEvents() {
        this.audio.addEventListener('click', this._toggleMusic.bind(this));
    }

    private _toggleMusic() {
        if (this.audio.classList.contains('audio--mute')) {
            this.audio.classList.remove('audio--mute');
            this.audioSource.play();
        } else {
            this.audio.classList.add('audio--mute');
            this.audioSource.pause();
        }
    }
}