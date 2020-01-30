import { SVG } from '@svgdotjs/svg.js';
import SVGCreator from '../SVGCreator';

export default class Body {
    bodyElement: any;

    constructor() {
        this.bodyElement = SVG()
            .addTo('.human')
            .attr({
                id: 'body', class: 'body'
            })
            .viewbox('0 0 254.36 297.95');

        //Heads
        this.bodyOne();
    }

    private bodyOne() {
        SVGCreator.createSVG(this.bodyElement, [
            {
                path: 'M237.25,307.22s-11.34-31.64-2-47.37c3.28-5.5,16.85-5.45,16.85-5.45S270.45,281,271.9,284.83s2.72,22.38,2.1,25.93S260.38,329,260.38,329c-6.62-2.49-1.13-10.2-1.13-10.2S252.51,323,250,322.6c-23.84-3.79-21.08-15.42-20.32-16.82C231.34,302.62,237.25,307.22,237.25,307.22ZM67.49,262.73C66,255.78,64.11,250,64.11,250l-34.7-2.7c-4.29,8.43-5.47,13.45-7,19.94l-.79,3.3a55.39,55.39,0,0,0-1.06,23.39c1,6.17,2.2,11.47,3.19,11.38,2.49-.24,3-3.26,3-3.26l-.43-5.78.17-5.58s5.55,25.47,6.3,25.42c2.64-.15,3.59-4.37,3.59-4.37s1.64,8.75,3,8.62C42.94,320,43.1,316,43.1,316s1,1.07,1.84.94c3.24-.49,3.82-5.91,4.16-9.08,0-.26.06-.5.08-.72,0,0-.13-10.14.54-13.18,3.4-15.47,6.35-18.88,8-20.75l.43-.5c2,1.69,2.44,4.22,3,6.91a20.42,20.42,0,0,0,1.75,5.84c3,5.64,12.56,11.81,8.36-.78a52.09,52.09,0,0,1-2.86-15A47.17,47.17,0,0,0,67.49,262.73Z',
                fill: '#e576c6',
                translate: [-19.8, -31]
            },
            {
                path: 'M246.2,275.49s1.81,12.76,12.85,18.05c3.87,1.85.87,17.59,11,16.93',
                translate: [-19.8, -31],
                isolation: 'isolate',
                stroke: '#000',
                strokeWidth: '3px',
                opacity: 0.14720499515533447
            },
            {
                path: 'M269,250.14l-43.52,24.22-10.7-20.72L215,226H82l-.93-34.06L69.77,260.23,20,262.58s-1-71.15,8.49-112.31c6-26.22,35.49-74.94,63.39-91.69,4.46-2.68,10.38-4.56,17-5.86,2.41-.48,4.91-.88,7.46-1.21,25.24-3.27,55.79,0,55.79,0,2.42.88,4.69,1.75,6.81,2.63,1.29.53,2.52,1.06,3.7,1.59,1.62.73,3.14,1.45,4.57,2.18l.08,0c20.24,10.27,23.13,20.76,29.51,33.95,8.18,16.88,16.65,68.73,16.65,68.73Z',
                translate: [-19.8, -31],
                fill: '#2f2f3d',
            },
            {
                path: 'M176.4,53.82l4.48.18-3.36-20.34-7.17-.34L159.53,49.91,148.89,32.29,122,31l-7.64,20.34,15.34.61,32.48,45Z',
                translate: [-19.8, -31],
                fill: '#fcbda4'
            },
            {
                path: 'M141.84,37.28l-7.75,19.1,20.79-7.12Zm33.48,2.59L162.85,50.13l16.69,7.55Z',
                translate: [-19.8, -31],
                fill: '#ea847a'
            },
            {
                path: 'M80.19,200l6.57-47.36,20.34-31.63',
                translate: [-19.8, -31],
                isolation: 'isolate',
                stroke: '#000',
                strokeWidth: '5px',
                opacity: 0.20121799409389496
            },
            {
                path: 'M215,226l4.35-75.16',
                translate: [-19.8, -31],
                isolation: 'isolate',
                stroke: '#000',
                strokeWidth: '5px',
                opacity: 0.2029619961977005
            },
        ]);
    }
}