import Object from '../Core/Object.js';
import Vector3 from './Vector3.js';
import Vector4 from './Vector4.js';

/**
 * 呈现一个使用红色、绿色、蓝色和 alpha 数据的四色差颜色。
 * @public
 * @class
 * @extends Object
 */
class Color extends Object {
    /**
     * 创建新的类实例。
     * @constructs
     * @returns {Color}
     */
    constructor(): Color

    /**
     * 创建新的类实例。
     * @constructs
     * @param {Number} r 红色色差。
     * @param {Number} g 绿色色差。
     * @param {Number} g 蓝色色差。
     * @returns {Color}
     */
    constructor(r: Number, g: Number, b: Number): Color

    /**
     * 创建新的类实例。
     * @constructs
     * @param {Number} r 红色色差。
     * @param {Number} g 绿色色差。
     * @param {Number} g 蓝色色差。
     * @param {Number} a Alpha 色差。
     * @returns {Color}
     */
    constructor(r: Number, g: Number, b: Number, a: Number): Color

    /**
     * 创建新的类实例。
     * @constructs
     * @param {Vector3} vector 一个三色差颜色。
     * @returns {Color}
     */
    constructor(vector: Vector3): Color

    /**
     * 创建新的类实例。
     * @constructs
     * @param {Vector4} vector 一个四色差颜色。
     * @returns {Color}
     */
    constructor(vector: Vector4): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：0 B：0 A：0。
     * @returns {Color}
     */
    static get Transparent(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：248 B：255 A：255。
     * @returns {Color}
     */
    static get AliceBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：250 G：235 B：215 A：255。
     * @returns {Color}
     */
    static get AntiqueWhite(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：255 B：255 A：255。
     * @returns {Color}
     */
    static get Aqua(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：127 G：255 B：212 A：255。
     * @returns {Color}
     */
    static get Aquamarine(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：255 B：255 A：255。
     * @returns {Color}
     */
    static get Azure(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：245 G：245 B：220 A：255。
     * @returns {Color}
     */
    static get Beige(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：228 B：196 A：255。
     * @returns {Color}
     */
    static get Bisque(): Color

    /**
     * 获取系统定义的颜色，?咛逯滴?R：0 G：0 B：0 A：255。
     * @returns {Color}
     */
    static get Black(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：235 B：205 A：255。
     * @returns {Color}
     */
    static get BlanchedAlmond(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：0 B：255 A：255。
     * @returns {Color}
     */
    static get Blue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：138 G：43 B：226 A：255。
     * @returns {Color}
     */
    static get BlueViolet(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：165 G：42 B：42 A：255。
     * @returns {Color}
     */
    static get Brown(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：222 G：184 B：135 A：255。
     * @returns {Color}
     */
    static get BurlyWood(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：95 G：158 B：160 A：255。
     * @returns {Color}
     */
    static get CadetBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：127 G：255 B：0 A：255。
     * @returns {Color}
     */
    static get Chartreuse(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：210 G：105 B：30 A：255。
     * @returns {Color}
     */
    static get Chocolate(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：127 B：80 A：255。
     * @returns {Color}
     */
    static get Coral(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：100 G：149 B：237 A：255。
     * @returns {Color}
     */
    static get CornflowerBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：248 B：220 A：255。
     * @returns {Color}
     */
    static get Cornsilk(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：220 G：20 B：60 A：255。
     * @returns {Color}
     */
    static get Crimson(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：255 B：255 A：255。
     * @returns {Color}
     */
    static get Cyan(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：0 B：139 A：255。
     * @returns {Color}
     */
    static get DarkBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：139 B：139 A：255。
     * @returns {Color}
     */
    static get DarkCyan(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：184 G：134 B：11 A：255。
     * @returns {Color}
     */
    static get DarkGoldenrod(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：169 G：169 B：169 A：255。
     * @returns {Color}
     */
    static get DarkGray(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：100 B：0 A：255。
     * @returns {Color}
     */
    static get DarkGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：189 G：183 B：107 A：255。
     * @returns {Color}
     */
    static get DarkKhaki(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：139 G：0 B：139 A：255。
     * @returns {Color}
     */
    static get DarkMagenta(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：85 G：107 B：47 A：255。
     * @returns {Color}
     */
    static get DarkOliveGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：140 B：0 A：255。
     * @returns {Color}
     */
    static get DarkOrange(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：153 G：50 B：204 A：255。
     * @returns {Color}
     */
    static get DarkOrchid(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：139 G：0 B：0 A：255。
     * @returns {Color}
     */
    static get DarkRed(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：233 G：150 B：122 A：255。
     * @returns {Color}
     */
    static get DarkSalmon(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：143 G：188 B：139 A：255。
     * @returns {Color}
     */
    static get DarkSeaGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：72 G：61 B：139 A：255。
     * @returns {Color}
     */
    static get DarkSlateBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：47 G：79 B：79 A：255。
     * @returns {Color}
     */
    static get DarkSlateGray(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：206 B：209 A：255。
     * @returns {Color}
     */
    static get DarkTurquoise(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：148 G：0 B：211 A：255。
     * @returns {Color}
     */
    static get DarkViolet(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：20 B：147 A：255。
     * @returns {Color}
     */
    static get DeepPink(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：191 B：255 A：255。
     * @returns {Color}
     */
    static get DeepSkyBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：105 G：105 B：105 A：255。
     * @returns {Color}
     */
    static get DimGray(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：30 G：144 B：255 A：255。
     * @returns {Color}
     */
    static get DodgerBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：178 G：34 B：34 A：255。
     * @returns {Color}
     */
    static get Firebrick(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：250 B：240 A：255。
     * @returns {Color}
     */
    static get FloralWhite(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：34 G：139 B：34 A：255。
     * @returns {Color}
     */
    static get ForestGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：0 B：255 A：255。
     * @returns {Color}
     */
    static get Fuchsia(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：220 G：220 B：220 A：255。
     * @returns {Color}
     */
    static get Gainsboro(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：248 G：248 B：255 A：255。
     * @returns {Color}
     */
    static get GhostWhite(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：215 B：0 A：255。
     * @returns {Color}
     */
    static get Gold(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：218 G：165 B：32 A：255。
     * @returns {Color}
     */
    static get Goldenrod(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：128 G：128 B：128 A：255。
     * @returns {Color}
     */
    static get Gray(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：128 B：0 A：255。
     * @returns {Color}
     */
    static get Green(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：173 G：255 B：47 A：255。
     * @returns {Color}
     */
    static get GreenYellow(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：255 B：240 A：255。
     * @returns {Color}
     */
    static get Honeydew(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：105 B：180 A：255。
     * @returns {Color}
     */
    static get HotPink(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：205 G：92 B：92 A：255。
     * @returns {Color}
     */
    static get IndianRed(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：75 G：0 B：130 A：255。
     * @returns {Color}
     */
    static get Indigo(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：255 B：240 A：255。
     * @returns {Color}
     */
    static get Ivory(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：230 B：140 A：255。
     * @returns {Color}
     */
    static get Khaki(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：230 G：230 B：250 A：255。
     * @returns {Color}
     */
    static get Lavender(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：240 B：245 A：255。
     * @returns {Color}
     */
    static get LavenderBlush(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：124 G：252 B：0 A：255。
     * @returns {Color}
     */
    static get LawnGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：250 B：205 A：255。
     * @returns {Color}
     */
    static get LemonChiffon(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：173 G：216 B：230 A：255。
     * @returns {Color}
     */
    static get LightBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：128 B：128 A：255。
     * @returns {Color}
     */
    static get LightCoral(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：224 G：255 B：255 A：255。
     * @returns {Color}
     */
    static get LightCyan(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：250 G：250 B：210 A：255。
     * @returns {Color}
     */
    static get LightGoldenrodYellow(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：144 G：238 B：144 A：255。
     * @returns {Color}
     */
    static get LightGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：211 G：211 B：211 A：255。
     * @returns {Color}
     */
    static get LightGray(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：182 B：193 A：255。
     * @returns {Color}
     */
    static get LightPink(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：160 B：122 A：255。
     * @returns {Color}
     */
    static get LightSalmon(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：32 G：178 B：170 A：255。
     * @returns {Color}
     */
    static get LightSeaGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：135 G：206 B：250 A：255。
     * @returns {Color}
     */
    static get LightSkyBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：119 G：136 B：153 A：255。
     * @returns {Color}
     */
    static get LightSlateGray(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：176 G：196 B：222 A：255。
     * @returns {Color}
     */
    static get LightSteelBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：255 B：224 A：255。
     * @returns {Color}
     */
    static get LightYellow(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：255 B：0 A：255。
     * @returns {Color}
     */
    static get Lime(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：50 G：205 B：50 A：255。
     * @returns {Color}
     */
    static get LimeGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：250 G：240 B：230 A：255。
     * @returns {Color}
     */
    static get Linen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：0 B：255 A：255。
     * @returns {Color}
     */
    static get Magenta(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：128 G：0 B：0 A：255。
     * @returns {Color}
     */
    static get Maroon(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：102 G：205 B：170 A：255。
     * @returns {Color}
     */
    static get MediumAquamarine(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：0 B：205 A：255。
     * @returns {Color}
     */
    static get MediumBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：186 G：85 B：211 A：255。
     * @returns {Color}
     */
    static get MediumOrchid(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：147 G：112 B：219 A：255。
     * @returns {Color}
     */
    static get MediumPurple(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：60 G：179 B：113 A：255。
     * @returns {Color}
     */
    static get MediumSeaGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：123 G：104 B：238 A：255。
     * @returns {Color}
     */
    static get MediumSlateBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：250 B：154 A：255。
     * @returns {Color}
     */
    static get MediumSpringGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：72 G：209 B：204 A：255。
     * @returns {Color}
     */
    static get MediumTurquoise(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：199 G：21 B：133 A：255。
     * @returns {Color}
     */
    static get MediumVioletRed(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：25 G：25 B：112 A：255。
     * @returns {Color}
     */
    static get MidnightBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：245 G：255 B：250 A：255。
     * @returns {Color}
     */
    static get MintCream(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：228 B：225 A：255。
     * @returns {Color}
     */
    static get MistyRose(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：228 B：181 A：255。
     * @returns {Color}
     */
    static get Moccasin(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：222 B：173 A：255。
     * @returns {Color}
     */
    static get NavajoWhite(): Color

    /**
     * 获取系统定义的颜色，具体?滴?R：0 G：0 B：128 A：255。
     * @returns {Color}
     */
    static get Navy(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：253 G：245 B：230 A：255。
     * @returns {Color}
     */
    static get OldLace(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：128 G：128 B：0 A：255。
     * @returns {Color}
     */
    static get Olive(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：107 G：142 B：35 A：255。
     * @returns {Color}
     */
    static get OliveDrab(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：165 B：0 A：255。
     * @returns {Color}
     */
    static get Orange(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：69 B：0 A：255。
     * @returns {Color}
     */
    static get OrangeRed(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：218 G：112 B：214 A：255。
     * @returns {Color}
     */
    static get Orchid(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：238 G：232 B：170 A：255。
     * @returns {Color}
     */
    static get PaleGoldenrod(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：152 G：251 B：152 A：255。
     * @returns {Color}
     */
    static get PaleGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：175 G：238 B：238 A：255。
     * @returns {Color}
     */
    static get PaleTurquoise(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：219 G：112 B：147 A：255。
     * @returns {Color}
     */
    static get PaleVioletRed(): Color

    /**
     * 获取?低扯ㄒ宓难丈咛逯滴?R：255 G：239 B：213 A：255。
     * @returns {Color}
     */
    static get PapayaWhip(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：218 B：185 A：255。
     * @returns {Color}
     */
    static get PeachPuff(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：205 G：133 B：63 A：255。
     * @returns {Color}
     */
    static get Peru(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：192 B：203 A：255。
     * @returns {Color}
     */
    static get Pink(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：221 G：160 B：221 A：255。
     * @returns {Color}
     */
    static get Plum(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：176 G：224 B：230 A：255。
     * @returns {Color}
     */
    static get PowderBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：128 G：0 B：128 A：255。
     * @returns {Color}
     */
    static get Purple(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：0 B：0 A：255。
     * @returns {Color}
     */
    static get Red(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：188 G：143 B：143 A：255。
     * @returns {Color}
     */
    static get RosyBrown(): Color

    /**
     * 获取系统定义的颜色，具体值??R：65 G：105 B：225 A：255。
     * @returns {Color}
     */
    static get RoyalBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：139 G：69 B：19 A：255。
     * @returns {Color}
     */
    static get SaddleBrown(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：250 G：128 B：114 A：255。
     * @returns {Color}
     */
    static get Salmon(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：244 G：164 B：96 A：255。
     * @returns {Color}
     */
    static get SandyBrown(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：46 G：139 B：87 A：255。
     * @returns {Color}
     */
    static get SeaGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：245 B：238 A：255。
     * @returns {Color}
     */
    static get SeaShell(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：160 G：82 B：45 A：255。
     * @returns {Color}
     */
    static get Sienna(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：192 G：192 B：192 A：255。
     * @returns {Color}
     */
    static get Silver(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：135 G：206 B：235 A：255。
     * @returns {Color}
     */
    static get SkyBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：106 G??0 B：205 A：255。
     * @returns {Color}
     */
    static get SlateBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：112 G：128 B：144 A：255。
     * @returns {Color}
     */
    static get SlateGray(): Color

    /**
     * 获取系统?ㄒ宓难丈咛逯滴?R：255 G：250 B：250 A：255。
     * @returns {Color}
     */
    static get Snow(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：255 B：127 A：255。
     * @returns {Color}
     */
    static get SpringGreen(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：70 G：130 B：180 A：255。
     * @returns {Color}
     */
    static get SteelBlue(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：210 G：180 B：140 A：255。
     * @returns {Color}
     */
    static get Tan(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：128 B：128 A：255。
     * @returns {Color}
     */
    static get Teal(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：216 G：191 B：216 A：255。
     * @returns {Color}
     */
    static get Thistle(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：99 B：71 A：255。
     * @returns {Color}
     */
    static get Tomato(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：64 G：224 B：208 A：255。
     * @returns {Color}
     */
    static get Turquoise(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：238 G：130 B：238 A：255。
     * @returns {Color}
     */
    static get Violet(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：245 G：222 B：179 A：255。
     * @returns {Color}
     */
    static get Wheat(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：255 B：255 A：255。
     * @returns {Color}
     */
    static get White(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：245 G：245 B：245 A：255。
     * @returns {Color}
     */
    static get WhiteSmoke(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：255 B：0 A：255。
     * @returns {Color}
     */
    static get Yellow(): Color

    /**
     * 获取系统定义的颜色，具体值为 R：154 G：205 B：50 A：255。
     * @returns {Color}
     */
    static get YellowGreen(): Color

    /**
     * 测试一种颜色以查看它是否与此实例中的颜色相等。
     * @param {Color} other 一个四色差颜色。
     * @returns {Boolean}
     */
    Equals(other: Color): Boolean

    /**
     * 将非预乘 alpha 颜色转换为包含预乘 alpha 的颜色。
     * @param {Number} r 红色色差。
     * @param {Number} g 绿色色差。
     * @param {Number} b 蓝色色差。
     * @param {Number} a Alpha 色差。
     * @returns {Color}
     */
    static FromNonPremultiplied(r: Number, g: Number, b: Number, a: Number): Color

    /**
     * 将非预乘颜色转换为包含 alpha 的颜色数据。
     * @param {Vector4} vector 一个四色差颜色。
     * @returns {Color}
     */
    static FromNonPremultiplied(vector: Vector4): Color

    /**
     * 线性插入颜色。
     * @param {Color} value1 一个四色差颜色。
     * @param {Color} value2 一个四色差颜色。
     * @param {Number} amount 插值因子。
     * @returns {Color}
     */
    static Lerp(value1: Color, value2: Color, amount: Number): Color

    /**
     * 将每个颜色部分乘以缩放因子。
     * @param {Color} value 四色差源颜色。
     * @param {Number} scale 缩放因子。
     * @returns {Color}
     */
    static Multiply(value: Color, scale: Number): Color

    /**
     * 获取此对象的三色差矢量呈现。
     * @returns {Vector3}
     */
    ToVector3(): Vector3

    /**
     * 获取此对象的四色差矢量呈现。
     * @returns {Vector4}
     */
    ToVector4(): Vector4
}

export default Color;