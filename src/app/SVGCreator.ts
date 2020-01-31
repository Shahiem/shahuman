export default class SVGCreator {
    public static createSVG(svgElement: any, options: any) {
        for (let i = 0; i < options.length; i++) {
            const element = options[i];

            let part = svgElement.path(element.path);

            if (element.translate) {
                part.transform({
                    translate: element.translate
                });
            }

            if (element.fill)
                part.fill({ color: element.fill, rule: 'evenodd' });

            if (element.stroke)
                part.attr('stroke', element.stroke);

            if (element.strokeWidth)
                part.attr('stroke-width', element.strokeWidth);

            if (element.isolation)
                part.attr('isolation', element.isolation);

            if (element.opacity)
                part.attr('opacity', element.opacity);

            if (element.class)
                part.attr('class', element.class);
        }
    }
}