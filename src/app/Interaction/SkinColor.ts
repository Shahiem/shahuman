export default class SkinColor {

  skinColor: any;

  constructor() {
    this.skinColor = document.getElementsByClassName('human__skincolor');

    // Head
    this._createMouseEvents();
  }

  private _createMouseEvents() {
    let colors: HTMLCollection = document.getElementsByClassName('swatches__color');

    for (let i = 0; i < colors.length; i++) {
      const skin = colors[i];

      skin.addEventListener('click', this._switchSkinColor.bind(this));
    }
  }

  private _switchSkinColor(e: any) {
    for (let i = 0; i < this.skinColor.length; i++) {
      let skin = this.skinColor[i];

      skin.style.fill = e.target.dataset.color;
    }
  }
}