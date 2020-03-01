import { SVG } from '@svgdotjs/svg.js';
import SVGCreator from '../SVGCreator';

export default class Head {
    headElement: SVGCreator;

    constructor() {
        this.headElement = SVG()
            .addTo('.human')
            .attr({
                id: 'head', class: 'head'
            })
            .viewbox('0 0 137.15 192.34');

        //Heads
        this.headOne();
        this.headTwo();
    }

    private _changeHead(head: any, viewbox: string) {
        document.getElementById('head')?.remove();

        const newSVG = SVG()
        .addTo('.human_head')
        .attr({
            id: 'head', class: 'head'
        })
        .viewbox(viewbox);

        SVGCreator.createSVG(newSVG, head);
    }

    private headOne() {
        const head = [
            {
                path: 'M66.86,14.51A18,18,0,1,1,45.73.34,18,18,0,0,1,66.86,14.51',
                fill: '#2437a8',
                translate: [-27, 0]
            },
            {
                path: 'M109,192l-.85-29.31s35.62,2.83,43.24-1.13c0,0,9.32-48-1.79-74.56l-.23-1L74.15,77.16,69.43,119.7c-2.53-7.47-22.92-15.34-28.38-4.64-11.84,23.18,30.49,38.78,30.49,38.78l-4.3,38.51',
                fill: '#e576c6',
                class: 'human__skincolor',
                translate: [-27, 0]
            },
            {
                path: 'M108.1,162.68l-24-5.16L108,173.67Z',
                translate: [-27, 0],
                isolation: 'isolate',
                opacity: 0.3977859914302826,
            },
            {
                path: 'M127.92,114.77l8.3,20.29-10,.13Z',
                fill: '#405fd3',
                translate: [-27, 0]
            },
            {
                path: 'M118.45,120.53a5,5,0,1,1-5.84-4,5,5,0,0,1,5.84,4',
                fill: '#0d0b6d',
                translate: [-27, 0]
            },
            {
                path: 'M144.56,120.53a5,5,0,1,1-5.85-4,5,5,0,0,1,5.85,4',
                fill: '#0d0b6d',
                translate: [-27, 0]
            },
            {
                path: 'M117.6,140.93A11.75,11.75,0,0,0,128,146.1Z',
                fill: '#fff',
                translate: [-27, 0]
            },
            {
                path: 'M117.6,140.93A11.75,11.75,0,0,0,128,146.1',
                translate: [-27, 0],
                stroke: '#252535',
                strokeWidth: '4px',
            },
            {
                path: 'M61.8,113.94l.82-17L97.93,90.8C95,110.27,82.24,119.23,72.56,123.27A35.79,35.79,0,0,0,61.8,113.94Z',
                fill: '#19141e',
                translate: [-27, 0]
            },
            {
                path: 'M36,91.68s-12-43.17,22.59-67c42.86-29.49,92.46,48,92.46,48',
                fill: '#ce3d29',
                translate: [-27, 0]
            },
            {
                path: 'M27.13,96.65l3.22,18A8.42,8.42,0,0,0,40,121.53L157.11,102a8.43,8.43,0,0,0,6.7-10.69l-6.45-21.9a8.42,8.42,0,0,0-9.77-5.88L33.73,86.92a8.43,8.43,0,0,0-6.6,9.73',
                fill: '#2437a8',
                translate: [-27, 0]
            },
            {
                path: 'M34,72.63,53.79,45.39,84.08,60.82l17.42-26.1,31.09,14.49',
                fill: '#2437a8',
                translate: [-27, 0]
            },
        ];

        SVGCreator.createSVG(this.headElement, head);

        SVGCreator.createSVG(SVG()
            .addTo('.heads')
            .attr({
                width: 70,
                height: 70,
                class: 'heads_placeholder'
            })
            .click(this._changeHead.bind(this, head, '0 0 137.15 192.34'))
            .viewbox('0 0 137.15 192.34'), head);
    }

    private headTwo() {
        const head = [
            {
                path: 'M81.47,84.78l67.78.83s-8-38.69-60.58-31.78C44.6,59.61,48.3,96.09,51.45,110.18a34,34,0,0,1,19.16,13.23l10.86-2.71Z',
                fill: '#fcbda4',
                translate: [-38, -53]
            },
            {
                path: 'M108.56,192.26l-.86-29.48s35.91,2.85,43.59-1.13c0,0,7.58-48.55-2-76.05L73.48,76.76l-5.54,44.05c-2.55-7.51-22.33-16.69-27.83-5.93-11.94,23.31,30.73,39,30.73,39l-4.33,38.73',
                fill: '#e576c6',
                class: 'human__skincolor',
                translate: [-38, -53]
            },
            {
                path: 'M107.7,162.77l-24.21-5.18,24.09,16.25Z',
                translate: [-38, -53],
                isolation: 'isolate',
                opacity: 0.4021579921245575,
            },
            {
                path: 'M127.92,114.77l8.3,20.29-10,.13Z',
                fill: '#405fd3',
                translate: [-38, -53],
            },
            {
                path: 'M118.13,120.39a5.07,5.07,0,1,1-5.89-4.08,5,5,0,0,1,5.89,4.08',
                fill: '#0d0b6d',
                translate: [-38, -53],
            },
            {
                path: 'M144.45,120.39a5.07,5.07,0,1,1-5.89-4.08,5,5,0,0,1,5.89,4.08',
                fill: '#0d0b6d',
                translate: [-38, -53],
            },
            {
                path: 'M117.27,140.91a11.83,11.83,0,0,0,10.44,5.19Z',
                fill: '#fff',
                translate: [-38, -53],
            },
            {
                path: 'M117.27,140.91a11.83,11.83,0,0,0,10.44,5.19',
                stroke: '#252535',
                strokeWidth: '4px',
                translate: [-38, -53],
            },
        ];

        SVGCreator.createSVG(SVG()
            .addTo('.heads')
            .attr({
                width: 70,
                height: 70,
                class: 'heads_placeholder'
            })
            .click(this._changeHead.bind(this, head, '0 0 116.13 139.62'))
            .viewbox('0 0 116.13 139.62'), head);
    }
}