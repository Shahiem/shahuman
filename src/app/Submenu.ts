export default class Submenu {
    submenuLeft: HTMLElement | null;

    constructor() {
        this.submenuLeft = document.getElementById('submenu__left');

        this._createMouseEvents();
    }

    public _createMouseEvents() {
        let listItem = document.querySelectorAll('.submenu__list li a');
        let submenuBack = document.querySelectorAll('.submenu__back');

        for (let i = 0; i < listItem.length; i++) {
            listItem[i].addEventListener('click', this._openTab.bind(this, listItem[i]));
        }

        for (let i = 0; i < submenuBack.length; i++) {
            submenuBack[i].addEventListener('click', this._closeTab.bind(this, submenuBack[i]));
        }
    }


    private _closeTab(item: any) {
        if (!item)
            return;

        item.parentNode.style.display = 'none';

        if (this.submenuLeft)
            this.submenuLeft.style.display = 'block';

    }

    private _openTab(item: any) {
        if (!item.dataset.id)
            return;

        let tabItem = <HTMLElement>document.querySelector('.submenu__tab[data-id=' + item.dataset.id + ']');

        if (tabItem) {
            tabItem.style.display = 'block';

            if (this.submenuLeft)
                this.submenuLeft.style.display = 'none';
        }
    }
}