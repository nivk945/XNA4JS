import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import Vector3 from './Vector3.js';
import Vector4 from './Vector4.js';
import MathHelper from './MathHelper.js';

class Color extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            R: {
                get: () => {
                    return this._getPrivateVar('_r');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_r', MathHelper.Clamp(Math.round(value), 0, 255));
                    })
            },
            G: {
                get: () => {
                    return this._getPrivateVar('_g');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_g', MathHelper.Clamp(Math.round(value), 0, 255));
                    })
            },
            B: {
                get: () => {
                    return this._getPrivateVar('_b');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_b', MathHelper.Clamp(Math.round(value), 0, 255));
                    })
            },
            A: {
                get: () => {
                    return this._getPrivateVar('_a');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_a', MathHelper.Clamp(Math.round(value), 0, 255));
                    })
            }
        });

        (Color.prototype.constructor._init || (Color.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this.A = 255;
                this.R = 0;
                this.G = 0;
                this.B = 0;
            }).
            Add([Number, Number, Number], function (r, g, b) {
                this.A = 255;
                this.R = r * ((~~r != r) ? 255 : 1);
                this.G = g * ((~~g != g) ? 255 : 1);
                this.B = b * ((~~b != b) ? 255 : 1);
            }).
            Add([Number, Number, Number, Number], function (r, g, b, a) {
                this.A = a * ((~~a != a) ? 255 : 1);
                this.R = r * ((~~r != r) ? 255 : 1);
                this.G = g * ((~~g != g) ? 255 : 1);
                this.B = b * ((~~b != b) ? 255 : 1);
            }).
            Add([Vector3], function (vector) {
                this.A = 255;
                this.R = vector.X * 255;
                this.G = vector.Y * 255;
                this.B = vector.Z * 255;
            }).
            Add([Vector4], function (vector) {
                this.A = vector.W * 255;
                this.R = vector.X * 255;
                this.G = vector.Y * 255;
                this.B = vector.Z * 255;
            })
        )).call(this, ...args);
    }

    static get Transparent() {
        return new Color(0, 0, 0, 0);
    }

    static get AliceBlue() {
        return new Color(240, 248, 255, 255);
    }

    static get AntiqueWhite() {
        return new Color(250, 235, 215, 255);
    }

    static get Aqua() {
        return new Color(0, 255, 255, 255);
    }

    static get Aquamarine() {
        return new Color(127, 255, 212, 255);
    }

    static get Azure() {
        return new Color(240, 255, 255, 255);
    }

    static get Beige() {
        return new Color(245, 245, 220, 255);
    }

    static get Bisque() {
        return new Color(255, 228, 196, 255);
    }

    static get Black() {
        return new Color(0, 0, 0, 255);
    }

    static get BlanchedAlmond() {
        return new Color(255, 235, 205, 255);
    }

    static get Blue() {
        return new Color(0, 0, 255, 255);
    }

    static get BlueViolet() {
        return new Color(138, 43, 226, 255);
    }

    static get Brown() {
        return new Color(165, 42, 42, 255);
    }

    static get BurlyWood() {
        return new Color(222, 184, 135, 255);
    }

    static get CadetBlue() {
        return new Color(95, 158, 160, 255);
    }

    static get Chartreuse() {
        return new Color(127, 255, 0, 255);
    }

    static get Chocolate() {
        return new Color(210, 105, 30, 255);
    }

    static get Coral() {
        return new Color(255, 127, 80, 255);
    }

    static get CornflowerBlue() {
        return new Color(100, 149, 237, 255);
    }

    static get Cornsilk() {
        return new Color(255, 248, 220, 255);
    }

    static get Crimson() {
        return new Color(220, 20, 60, 255);
    }

    static get Cyan() {
        return new Color(0, 255, 255, 255);
    }

    static get DarkBlue() {
        return new Color(0, 0, 139, 255);
    }

    static get DarkCyan() {
        return new Color(0, 139, 139, 255);
    }

    static get DarkGoldenrod() {
        return new Color(184, 134, 11, 255);
    }

    static get DarkGray() {
        return new Color(169, 169, 169, 255);
    }

    static get DarkGreen() {
        return new Color(0, 100, 0, 255);
    }

    static get DarkKhaki() {
        return new Color(189, 183, 107, 255);
    }

    static get DarkMagenta() {
        return new Color(139, 0, 139, 255);
    }

    static get DarkOliveGreen() {
        return new Color(85, 107, 47, 255);
    }

    static get DarkOrange() {
        return new Color(255, 140, 0, 255);
    }

    static get DarkOrchid() {
        return new Color(153, 50, 204, 255);
    }

    static get DarkRed() {
        return new Color(139, 0, 0, 255);
    }

    static get DarkSalmon() {
        return new Color(233, 150, 122, 255);
    }

    static get DarkSeaGreen() {
        return new Color(143, 188, 139, 255);
    }

    static get DarkSlateBlue() {
        return new Color(72, 61, 139, 255);
    }

    static get DarkSlateGray() {
        return new Color(47, 79, 79, 255);
    }

    static get DarkTurquoise() {
        return new Color(0, 206, 209, 255);
    }

    static get DarkViolet() {
        return new Color(148, 0, 211, 255);
    }

    static get DeepPink() {
        return new Color(255, 20, 147, 255);
    }

    static get DeepSkyBlue() {
        return new Color(0, 191, 255, 255);
    }

    static get DimGray() {
        return new Color(105, 105, 105, 255);
    }

    static get DodgerBlue() {
        return new Color(30, 144, 255, 255);
    }

    static get Firebrick() {
        return new Color(178, 34, 34, 255);
    }

    static get FloralWhite() {
        return new Color(255, 250, 240, 255);
    }

    static get ForestGreen() {
        return new Color(34, 139, 34, 255);
    }

    static get Fuchsia() {
        return new Color(255, 0, 255, 255);
    }

    static get Gainsboro() {
        return new Color(220, 220, 220, 255);
    }

    static get GhostWhite() {
        return new Color(248, 248, 255, 255);
    }

    static get Gold() {
        return new Color(255, 215, 0, 255);
    }

    static get Goldenrod() {
        return new Color(218, 165, 32, 255);
    }

    static get Gray() {
        return new Color(128, 128, 128, 255);
    }

    static get Green() {
        return new Color(0, 128, 0, 255);
    }

    static get GreenYellow() {
        return new Color(173, 255, 47, 255);
    }

    static get Honeydew() {
        return new Color(240, 255, 240, 255);
    }

    static get HotPink() {
        return new Color(255, 105, 180, 255);
    }

    static get IndianRed() {
        return new Color(205, 92, 92, 255);
    }

    static get Indigo() {
        return new Color(75, 0, 130, 255);
    }

    static get Ivory() {
        return new Color(255, 255, 240, 255);
    }

    static get Khaki() {
        return new Color(240, 230, 140, 255);
    }

    static get Lavender() {
        return new Color(230, 230, 250, 255);
    }

    static get LavenderBlush() {
        return new Color(255, 240, 245, 255);
    }

    static get LawnGreen() {
        return new Color(124, 252, 0, 255);
    }

    static get LemonChiffon() {
        return new Color(255, 250, 205, 255);
    }

    static get LightBlue() {
        return new Color(173, 216, 230, 255);
    }

    static get LightCoral() {
        return new Color(240, 128, 128, 255);
    }

    static get LightCyan() {
        return new Color(224, 255, 255, 255);
    }

    static get LightGoldenrodYellow() {
        return new Color(250, 250, 210, 255);
    }

    static get LightGreen() {
        return new Color(144, 238, 144, 255);
    }

    static get LightGray() {
        return new Color(211, 211, 211, 255);
    }

    static get LightPink() {
        return new Color(255, 182, 193, 255);
    }

    static get LightSalmon() {
        return new Color(255, 160, 122, 255);
    }

    static get LightSeaGreen() {
        return new Color(32, 178, 170, 255);
    }

    static get LightSkyBlue() {
        return new Color(135, 206, 250, 255);
    }

    static get LightSlateGray() {
        return new Color(119, 136, 153, 255);
    }

    static get LightSteelBlue() {
        return new Color(176, 196, 222, 255);
    }

    static get LightYellow() {
        return new Color(255, 255, 224, 255);
    }

    static get Lime() {
        return new Color(0, 255, 0, 255);
    }

    static get LimeGreen() {
        return new Color(50, 205, 50, 255);
    }

    static get Linen() {
        return new Color(250, 240, 230, 255);
    }

    static get Magenta() {
        return new Color(255, 0, 255, 255);
    }

    static get Maroon() {
        return new Color(128, 0, 0, 255);
    }

    static get MediumAquamarine() {
        return new Color(102, 205, 170, 255);
    }

    static get MediumBlue() {
        return new Color(0, 0, 205, 255);
    }

    static get MediumOrchid() {
        return new Color(186, 85, 211, 255);
    }

    static get MediumPurple() {
        return new Color(147, 112, 219, 255);
    }

    static get MediumSeaGreen() {
        return new Color(60, 179, 113, 255);
    }

    static get MediumSlateBlue() {
        return new Color(123, 104, 238, 255);
    }

    static get MediumSpringGreen() {
        return new Color(0, 250, 154, 255);
    }

    static get MediumTurquoise() {
        return new Color(72, 209, 204, 255);
    }

    static get MediumVioletRed() {
        return new Color(199, 21, 133, 255);
    }

    static get MidnightBlue() {
        return new Color(25, 25, 112, 255);
    }

    static get MintCream() {
        return new Color(245, 255, 250, 255);
    }

    static get MistyRose() {
        return new Color(255, 228, 225, 255);
    }

    static get Moccasin() {
        return new Color(255, 228, 181, 255);
    }

    static get NavajoWhite() {
        return new Color(255, 222, 173, 255);
    }

    static get Navy() {
        return new Color(0, 0, 128, 255);
    }

    static get OldLace() {
        return new Color(253, 245, 230, 255);
    }

    static get Olive() {
        return new Color(128, 128, 0, 255);
    }

    static get OliveDrab() {
        return new Color(107, 142, 35, 255);
    }

    static get Orange() {
        return new Color(255, 165, 0, 255);
    }

    static get OrangeRed() {
        return new Color(255, 69, 0, 255);
    }

    static get Orchid() {
        return new Color(218, 112, 214, 255);
    }

    static get PaleGoldenrod() {
        return new Color(238, 232, 170, 255);
    }

    static get PaleGreen() {
        return new Color(152, 251, 152, 255);
    }

    static get PaleTurquoise() {
        return new Color(175, 238, 238, 255);
    }

    static get PaleVioletRed() {
        return new Color(219, 112, 147, 255);
    }

    static get PapayaWhip() {
        return new Color(255, 239, 213, 255);
    }

    static get PeachPuff() {
        return new Color(255, 218, 185, 255);
    }

    static get Peru() {
        return new Color(205, 133, 63, 255);
    }

    static get Pink() {
        return new Color(255, 192, 203, 255);
    }

    static get Plum() {
        return new Color(221, 160, 221, 255);
    }

    static get PowderBlue() {
        return new Color(176, 224, 230, 255);
    }

    static get Purple() {
        return new Color(128, 0, 128, 255);
    }

    static get Red() {
        return new Color(255, 0, 0, 255);
    }

    static get RosyBrown() {
        return new Color(188, 143, 143, 255);
    }

    static get RoyalBlue() {
        return new Color(65, 105, 225, 255);
    }

    static get SaddleBrown() {
        return new Color(139, 69, 19, 255);
    }

    static get Salmon() {
        return new Color(250, 128, 114, 255);
    }

    static get SandyBrown() {
        return new Color(244, 164, 96, 255);
    }

    static get SeaGreen() {
        return new Color(46, 139, 87, 255);
    }

    static get SeaShell() {
        return new Color(255, 245, 238, 255);
    }

    static get Sienna() {
        return new Color(160, 82, 45, 255);
    }

    static get Silver() {
        return new Color(192, 192, 192, 255);
    }

    static get SkyBlue() {
        return new Color(135, 206, 235, 255);
    }

    static get SlateBlue() {
        return new Color(106, 90, 205, 255);
    }

    static get SlateGray() {
        return new Color(112, 128, 144, 255);
    }

    static get Snow() {
        return new Color(255, 250, 250, 255);
    }

    static get SpringGreen() {
        return new Color(0, 255, 127, 255);
    }

    static get SteelBlue() {
        return new Color(70, 130, 180, 255);
    }

    static get Tan() {
        return new Color(210, 180, 140, 255);
    }

    static get Teal() {
        return new Color(0, 128, 128, 255);
    }

    static get Thistle() {
        return new Color(216, 191, 216, 255);
    }

    static get Tomato() {
        return new Color(255, 99, 71, 255);
    }

    static get Turquoise() {
        return new Color(64, 224, 208, 255);
    }

    static get Violet() {
        return new Color(238, 130, 238, 255);
    }

    static get Wheat() {
        return new Color(245, 222, 179, 255);
    }

    static get White() {
        return new Color(255, 255, 255, 255);
    }

    static get WhiteSmoke() {
        return new Color(245, 245, 245, 255);
    }

    static get Yellow() {
        return new Color(255, 255, 0, 255);
    }

    static get YellowGreen() {
        return new Color(154, 205, 50, 255);
    }

    Equals(...args) {
        return (
            Color.prototype.Equals = Overload.Create().
                Add([Color], function (other) {
                    return this.R == other.R &&
                        this.G == other.G &&
                        this.B == other.B &&
                        this.A == other.A;
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    static FromNonPremultiplied(...args) {
        return (
            Color.Equals = Overload.Create().
                Add([Number, Number, Number, Number], function (r, g, b, a) {
                    return new Color(r * a / 255, g * a / 255, b * a / 255, a);
                }).
                Add([Vector4], function (vector) {
                    return new Color(vector.X * vector.W, vector.Y * vector.W, vector.Z * vector.W, vector.W);
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Color.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    let _packedValue;
                    let r = this.R;
                    let g = this.G;
                    let b = this.B;
                    let alpha = this.A;
                    if (((r | g | b | alpha) & 0xFFFFFF00) != 0) {
                        var clampedR = MathHelper.Clamp(r, 0, 255);
                        var clampedG = MathHelper.Clamp(g, 0, 255);
                        var clampedB = MathHelper.Clamp(b, 0, 255);
                        var clampedA = MathHelper.Clamp(alpha, 0, 255);

                        _packedValue = (clampedA << 24) | (clampedB << 16) | (clampedG << 8) | (clampedR);
                    }
                    else {
                        _packedValue = (alpha << 24) | (b << 16) | (g << 8) | (r);
                    }
                    let str = _packedValue.toString();
                    let h = 0;
                    let len = str.length;
                    let t = 2147483648;
                    for (let i = 0; i < len; i++) {
                        h = 31 * h + str.charCodeAt(i);
                        if (h > 2147483647) h %= t;
                    }
                    return h;
                })
        ).call(this, ...args);
    }

    static Lerp(...args) {
        return (
            Color.Lerp = Overload.Create().
                Add([Color, Color, Number], function (value1, value2, amount) {
                    amount = MathHelper.Clamp(amount, 0, 1);
                    return new Color(
                        Math.round(MathHelper.Lerp(value1.R, value2.R, amount)),
                        Math.round(MathHelper.Lerp(value1.G, value2.G, amount)),
                        Math.round(MathHelper.Lerp(value1.B, value2.B, amount)),
                        Math.round(MathHelper.Lerp(value1.A, value2.A, amount)));
                })
        ).call(this, ...args);
    }

    static Multiply(...args) {
        return (
            Color.Multiply = Overload.Create().
                Add([Color, Number], function (value, scale) {
                    return new Color(Math.round(value.R * scale), Math.round(value.G * scale), Math.round(value.B * scale), Math.round(value.A * scale));
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            Color.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{R:${this.R} G:${this.G} B:${this.B} A:${this.A}}`;
                })
        ).call(this, ...args);
    }

    ToVector3(...args) {
        return (
            Color.prototype.ToVector3 = Overload.Create().
                Add([], function () {
                    return new Vector3(this.R / 255, this.G / 255, this.B / 255);
                })
        ).call(this, ...args);
    }

    ToVector4(...args) {
        return (
            Color.prototype.ToVector4 = Overload.Create().
                Add([], function () {
                    return new Vector4(this.R / 255, this.G / 255, this.B / 255, this.A / 255);
                })
        ).call(this, ...args);
    }

    Serialize(...args) {
        let superSerialize = super.Serialize;
        return (
            Color.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        R: this.R,
                        G: this.G,
                        B: this.B,
                        A: this.A
                    });
                })
        ).call(this, ...args);
    }

    static Deserialize(...args) {
        return (
            Color.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (obj['Symbol'] !== Color.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    return new Color(obj.R, obj.G, obj.B, obj.A);
                })
        ).call(this, ...args);
    }
}

export default Color;