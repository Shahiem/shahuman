export default class BodyInteraction {
    circle: HTMLElement | null;

    body: any;
    leg: any;

    lastHead: any;
    head: any;
    headMoved: boolean;
    headFlipped: boolean;
    headRotation: string;
    headScaleX: string;

    constructor() {
        this.circle = document.getElementById('circle');

        this.headFlipped = false;
        this.headScaleX = '';
        this.headRotation = '';
        this.headMoved = false;

        this.head = document.getElementById('head');
        this.body = document.getElementById('body');
        this.leg = document.getElementById('leg');
        this.lastHead = this.head;

        this._createMouseEvents();
    }

    private _createMouseEvents() {
        document.addEventListener('mousemove', this._moveBodyParts.bind(this));
    }

    private _moveBodyParts(e: any) {
        this._flipHead(e);
        this._rotateHead(e);

        if (this.head)
            this.head.style.transform = this.headRotation + ' ' + this.headScaleX;

        if (this.body)
            this.body.style.transform = this.headRotation + ' ' + this.headScaleX;

        if (this.leg)
            this.leg.style.transform = this.headRotation + ' ' + this.headScaleX;
    }

    private _rotateHead(e: any) {
        if (this.head) {
            if (e.screenY >= window.screen.height / 2) {
                if (!this.headFlipped) {
                    if (this.body) {
                        this.body.style.marginLeft = '-40px';
                    }

                    this.headRotation = 'rotate(17deg)';
                } else {
                    if (this.body) {
                        this.body.style.marginLeft = '-23px';
                    }

                    this.headRotation = 'rotate(-17deg)';
                }
            } else {
                if (this.headFlipped) {
                    if (this.body) {
                        this.body.style.marginLeft = '-15px';
                    }

                    this.headRotation = 'rotate(17deg)';
                } else {
                    if (this.body) {
                        this.body.style.marginLeft = '-50px';
                    }

                    this.headRotation = 'rotate(-17deg)';
                }

            }
        }
    }

    private _flipHead(e: any) {
        if (this.head) {
            if (e.pageX <= this.head.getBoundingClientRect().left) {
                if (!this.headFlipped) {
                    this.headScaleX = 'scaleX(-1)';
                    this.headFlipped = true;
                }
            }

            if (e.pageX >= this.head.getBoundingClientRect().right) {
                if (this.headFlipped) {
                    this.headScaleX = 'scaleX(1)';
                    this.headFlipped = false;
                }
            }
        }
    }
}