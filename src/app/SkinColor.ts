export default class SkinColor {

    skinColor: any;

    constructor() {
        this.skinColor = document.getElementsByClassName('human__skincolor');

        // Head
        this._createMouseEvents();
    }

    private _createMouseEvents() {
        let colors = document.getElementsByClassName('skincolor');

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
    //     if (this.head) {
    //         if (e.pageX <= this.head.getBoundingClientRect().left) {
    //             if (!this.headFlipped) {
    //                 this.headScaleX = 'scaleX(-1)';
    //                 this.headFlipped = true;
    //             }
    //         }

    //         if (e.pageX >= this.head.getBoundingClientRect().right) {
    //             if (this.headFlipped) {
    //                 this.headScaleX = 'scaleX(1)';
    //                 this.headFlipped = false;
    //             }
    //         }
    //     }
    // }
}