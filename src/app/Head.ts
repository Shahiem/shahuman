import { SVG } from '@svgdotjs/svg.js';

export default class Head {
    headElement: any;

    constructor() {
        this.headElement = SVG()
            .addTo('.human')
            .attr({
                id: 'head', class: 'head'
            });

        this.headElement.viewbox('0 0 137.15 192.34');

        this._addHead1();
    }

    private _addHead1() {
        this._createSVG([
            {
                path: 'M66.86,14.51A18,18,0,1,1,45.73.34,18,18,0,0,1,66.86,14.51',
                fill: '#2437a8',
                translate: [-27, 0]
            },
            {
                path: 'M109,192l-.85-29.31s35.62,2.83,43.24-1.13c0,0,9.32-48-1.79-74.56l-.23-1L74.15,77.16,69.43,119.7c-2.53-7.47-22.92-15.34-28.38-4.64-11.84,23.18,30.49,38.78,30.49,38.78l-4.3,38.51',
                fill: '#e576c6',
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
        ]);
    }

    private _createSVG(options: any) {
        for (let i = 0; i < options.length; i++) {
            const element = options[i];

            let part = this.headElement.path(element.path);

            if (element.fill) {
                part.fill({ color: element.fill, rule: 'evenodd' });
            }

            if (element.translate) {
                part.transform({
                    translate: element.translate
                });
            }

            // Stroke
            if (element.stroke) {
                part.attr('stroke', element.stroke);
            }

            if (element.strokeWidth) {
                part.attr('stroke-width', element.strokeWidth);
            }

            // Isolation
            if (element.isolation) {
                part.attr('isolation', element.isolation);
            }

            // Opacity◊
            if (element.opacity) {
                part.attr('opacity', element.opacity);
            }
        }
    }
}