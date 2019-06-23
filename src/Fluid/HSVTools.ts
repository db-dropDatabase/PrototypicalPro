import HSVTypes from "./HSVTypes";

/*eslint no-unused-expressions: "off"*/
export default class HSVTools {
    static HSVtoRGB (c: HSVTypes.HSVColor) {
        const {h, s, v} = c;
        let r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return {
            r,
            g,
            b
        };
    }

    static generateColor (): HSVTypes.RGBColor {
        let c = HSVTools.HSVtoRGB({ h: Math.random(), s: 1.0, v: 1.0 });
        c.r *= 0.15;
        c.g *= 0.15;
        c.b *= 0.15;
        return c;
    }
}